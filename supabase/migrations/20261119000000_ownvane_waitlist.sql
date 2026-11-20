-- Forward-only. Written like the TapBody waitlist (memap web repo, supabase/migrations/20261117000000 and 20261118000000).
-- The Ownvane list lives in its own schema, apart from tapbody.waitlist, so the two lists can never mix.
-- The REST API does not expose the schema; the site reaches it only through the three functions below.
create schema if not exists ownvane;
revoke all on schema ownvane from public, anon, authenticated;

create table ownvane.waitlist (
  id uuid primary key default gen_random_uuid(),
  email text not null unique
    check (length(email) <= 254 and email = normalize(lower(btrim(email)), NFC)),
  -- Where the agent is licensed: an ISO 3166-2 code for a Canadian province or territory, a US state or DC.
  region text not null check (region in (
    'CA-AB', 'CA-BC', 'CA-MB', 'CA-NB', 'CA-NL', 'CA-NS', 'CA-NT', 'CA-NU', 'CA-ON', 'CA-PE', 'CA-QC', 'CA-SK', 'CA-YT',
    'US-AL', 'US-AK', 'US-AZ', 'US-AR', 'US-CA', 'US-CO', 'US-CT', 'US-DE', 'US-DC', 'US-FL', 'US-GA', 'US-HI', 'US-ID',
    'US-IL', 'US-IN', 'US-IA', 'US-KS', 'US-KY', 'US-LA', 'US-ME', 'US-MD', 'US-MA', 'US-MI', 'US-MN', 'US-MS', 'US-MO',
    'US-MT', 'US-NE', 'US-NV', 'US-NH', 'US-NJ', 'US-NM', 'US-NY', 'US-NC', 'US-ND', 'US-OH', 'US-OK', 'US-OR', 'US-PA',
    'US-RI', 'US-SC', 'US-SD', 'US-TN', 'US-TX', 'US-UT', 'US-VT', 'US-VA', 'US-WA', 'US-WV', 'US-WI', 'US-WY'
  )),
  first_name text check (
    first_name is null
    or (length(first_name) between 1 and 80 and first_name = btrim(first_name) and first_name !~ '[[:cntrl:]<>@/]')
  ),
  source text check (source ~ '^[a-z0-9][a-z0-9._-]{0,99}$'),
  locale text check (locale ~ '^[A-Za-z]{2,3}(-[A-Za-z0-9]{2,8})?$'),
  created_at timestamptz not null default now(),
  confirm_token uuid not null unique default gen_random_uuid(),
  -- A separate unsubscribe token, so a stale confirm link can never re-subscribe anyone.
  unsubscribe_token uuid not null unique default gen_random_uuid(),
  confirm_sent_at timestamptz,
  confirmed_at timestamptz,
  unsubscribed_at timestamptz
);

-- Append-only record of every consent given or withdrawn, with the wording version shown.
create table ownvane.waitlist_events (
  id bigint generated always as identity primary key,
  waitlist_id uuid not null references ownvane.waitlist (id) on delete cascade,
  kind text not null check (kind in ('signup', 'confirm', 'unsubscribe')),
  consent_version text,
  source text,
  at timestamptz not null default now()
);
create index waitlist_events_waitlist_id_idx on ownvane.waitlist_events (waitlist_id);

alter table ownvane.waitlist enable row level security;
alter table ownvane.waitlist_events enable row level security;
revoke all on all tables in schema ownvane from public, anon, authenticated;

-- A repeat signup never rewrites the stored row: anyone can type anyone's email into the form,
-- so only the first submission's region and name are kept, and each repeat is logged as an event.
create function public.ownvane_waitlist_signup(
  p_email text, p_region text, p_first_name text, p_source text, p_locale text, p_consent_version text
) returns table (waitlist_id uuid, created boolean, send_confirm boolean, confirm_token uuid, unsubscribe_token uuid)
language plpgsql security definer set search_path = ''
as $$
declare
  r ownvane.waitlist;
  v_email text := normalize(lower(btrim(p_email)), NFC);
  v_created boolean := false;
  v_send boolean := false;
begin
  insert into ownvane.waitlist (email, region, first_name, source, locale)
  values (v_email, p_region, nullif(btrim(p_first_name), ''), p_source, p_locale)
  on conflict (email) do nothing
  returning * into r;

  if found then
    v_created := true;
  else
    -- Row lock so two repeat signups at once cannot both claim today's confirmation email.
    select * into r from ownvane.waitlist w where w.email = v_email for update;
  end if;

  insert into ownvane.waitlist_events (waitlist_id, kind, consent_version, source)
  values (r.id, 'signup', p_consent_version, p_source);

  -- One confirmation email per address per day, so the form cannot be used to flood an inbox.
  if (r.confirmed_at is null or r.unsubscribed_at is not null)
     and (r.confirm_sent_at is null or r.confirm_sent_at < now() - interval '24 hours') then
    update ownvane.waitlist w set confirm_sent_at = now() where w.id = r.id;
    v_send := true;
  end if;

  return query select r.id, v_created, v_send, r.confirm_token, r.unsubscribe_token;
end;
$$;

create function public.ownvane_waitlist_confirm(p_token uuid)
returns table (waitlist_id uuid, newly_confirmed boolean)
language plpgsql security definer set search_path = ''
as $$
declare
  v_id uuid;
begin
  update ownvane.waitlist w
     set confirmed_at = now(), unsubscribed_at = null
   where w.confirm_token = p_token
     and (w.confirmed_at is null or w.unsubscribed_at is not null)
  returning w.id into v_id;

  if found then
    insert into ownvane.waitlist_events (waitlist_id, kind) values (v_id, 'confirm');
    return query select v_id, true;
  else
    return query select w.id, false from ownvane.waitlist w where w.confirm_token = p_token;
  end if;
end;
$$;

create function public.ownvane_waitlist_unsubscribe(p_token uuid)
returns table (waitlist_id uuid, newly_unsubscribed boolean)
language plpgsql security definer set search_path = ''
as $$
declare
  v_id uuid;
begin
  update ownvane.waitlist w
     set unsubscribed_at = now()
   where w.unsubscribe_token = p_token
     and w.unsubscribed_at is null
  returning w.id into v_id;

  if found then
    insert into ownvane.waitlist_events (waitlist_id, kind) values (v_id, 'unsubscribe');
    return query select v_id, true;
  else
    return query select w.id, false from ownvane.waitlist w where w.unsubscribe_token = p_token;
  end if;
end;
$$;

revoke all on function public.ownvane_waitlist_signup(text, text, text, text, text, text) from public, anon, authenticated;
revoke all on function public.ownvane_waitlist_confirm(uuid) from public, anon, authenticated;
revoke all on function public.ownvane_waitlist_unsubscribe(uuid) from public, anon, authenticated;
grant execute on function public.ownvane_waitlist_signup(text, text, text, text, text, text) to service_role;
grant execute on function public.ownvane_waitlist_confirm(uuid) to service_role;
grant execute on function public.ownvane_waitlist_unsubscribe(uuid) to service_role;
