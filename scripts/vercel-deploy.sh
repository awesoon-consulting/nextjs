#!/usr/bin/env bash
# Vercel never builds this repo (git deploys are off in vercel.json): this Mac builds, Vercel only hosts.
#   npm run deploy:prod [sha]  builds origin's default branch (or that commit on it), checks it, then makes it live
#   npm run deploy:preview     builds the current commit as a preview
# It uses only this repo's own VERCEL_TOKEN from .env.local, never the Mac's own Vercel login, which belongs to a
# different business. It builds in a throwaway checkout, so uncommitted and untracked files never ship.
set -euo pipefail

target=${1:-}
case $target in prod|preview) ;; *) echo "usage: $0 prod [sha] | preview" >&2; exit 2 ;; esac

main=$(cd "$(git rev-parse --git-common-dir)/.." && pwd)
key() { sed -n "s/^[[:space:]]*\(export[[:space:]]\{1,\}\)\{0,1\}$1[[:space:]]*=[[:space:]]*//p" "$main/.env.local" 2>/dev/null | tail -1 | sed "s/^[\"']//;s/[\"']$//"; }
token=$(key VERCEL_TOKEN)
[ -n "$token" ] || { echo "No VERCEL_TOKEN in $main/.env.local. Add this repo's own Vercel token there; the Mac's Vercel login is never used." >&2; exit 1; }

work=$(mktemp -d)
wt="$work/build"
cleanup() { git -C "$main" worktree remove --force "$wt" 2>/dev/null || true; rm -rf "$work"; }
trap cleanup EXIT
chmod 700 "$work"
mkdir "$work/cli"
printf '{"token":"%s"}\n' "$token" > "$work/cli/auth.json"
vc() { vercel --global-config "$work/cli" "$@"; }
api() { printf 'header = "Authorization: Bearer %s"\n' "$token" | curl -sf -K - "https://api.vercel.com$1"; }
json() { node -e "let s='';process.stdin.on('data',d=>s+=d).on('end',()=>{const j=JSON.parse(s);console.log(($1)(j)??'')})"; }

# The Vercel project is the one wired to this repo's GitHub origin, found across every scope the token can see.
slug=$(git -C "$main" remote get-url origin | sed -E 's#(\.git)?$##; s#.*[:/]([^/]+/[^/]+)$#\1#')
teams=$(api "/v2/teams?limit=100" | json 'j=>j.teams.map(t=>t.id).join(" ")')
match=""
for scope in "" $teams; do
  q="/v9/projects?limit=100${scope:+&teamId=$scope}"
  match+=$(api "$q" | json "j=>j.projects.filter(p=>p.link&&(p.link.org+'/'+p.link.repo).toLowerCase()==='$slug'.toLowerCase()).map(p=>p.id+' '+p.accountId).join('\n')")
  [ -n "$match" ] && match+=$'\n'
done
match=$(printf '%s' "$match" | sed '/^$/d')
[ "$(printf '%s\n' "$match" | grep -c .)" = 1 ] || { echo "Expected exactly one Vercel project linked to $slug, found: ${match:-none}" >&2; exit 1; }
read -r project org <<< "$match"
team=""; case $org in team_*) team="teamId=$org" ;; esac

git -C "$main" fetch --quiet origin
if [ "$target" = prod ]; then
  ref="origin/$(git -C "$main" symbolic-ref --short refs/remotes/origin/HEAD | sed 's#^origin/##')"
  if [ -n "${2:-}" ]; then
    git -C "$main" merge-base --is-ancestor "$2" "$ref" || { echo "$2 is not on $ref, so it cannot go live." >&2; exit 1; }
    ref=$2
  fi
else
  ref=$(git rev-parse HEAD)
  [ -z "$(git status --porcelain --untracked-files=no)" ] || echo "Uncommitted changes are not in this preview; it builds $(git rev-parse --short HEAD)."
fi
git -C "$main" worktree add --quiet --detach "$wt" "$ref"
echo "Building $(git -C "$wt" rev-parse --short HEAD) ($ref) for $target"

cd "$wt"
mkdir .vercel
printf '{"projectId":"%s","orgId":"%s"}\n' "$project" "$org" > .vercel/project.json
npm ci --no-audit --no-fund --loglevel=error
env=$([ "$target" = prod ] && echo production || echo preview)
vc pull --yes --environment="$env" >/dev/null
bypass=$(sed -n 's/^VERCEL_AUTOMATION_BYPASS_SECRET="\{0,1\}\([^"]*\)"\{0,1\}$/\1/p' ".vercel/.env.$env.local" 2>/dev/null | tail -1)
status() { curl -s -o /dev/null -w '%{http_code}' -L --max-time 60 ${bypass:+-H "x-vercel-protection-bypass: $bypass"} "$1"; }

if [ "$target" = preview ]; then
  vc build
  url=$(vc deploy --prebuilt)
  echo "Preview: $url (HTTP $(status "$url"))"
  exit 0
fi

live=$(api "/v9/projects/$project${team:+?$team}" | json 'j=>j.targets?.production?.url')
domain=$(api "/v9/projects/$project${team:+?$team}" | json 'j=>(j.targets?.production?.alias||[])[0]')
vc build --prod
url=$(vc deploy --prebuilt --prod --skip-domain)
code=$(status "$url")
case $code in 5*|000) echo "New build $url answered HTTP $code, so it was not made live." >&2; exit 1 ;; esac
vc promote "$url" --yes
if [ -n "$domain" ]; then
  code=$(status "https://$domain")
  case $code in 5*|000)
    echo "https://$domain answered HTTP $code after going live; putting the previous build back." >&2
    [ -n "$live" ] && vc promote "https://$live" --yes
    exit 1 ;;
  esac
fi
echo "Live: ${domain:+https://$domain }($url, HTTP $code)"
