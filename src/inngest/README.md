# Inngest

`client.ts` defines the server-side `awesoon-website` client. The root App
Router serves it at `/api/inngest`; the locale proxy already excludes API
routes.

Set `INNGEST_SIGNING_KEY` in the Vercel production environment before syncing.
Inngest uses this key to authenticate sync and execution requests. Set
`INNGEST_EVENT_KEY` when the application needs to send events. Never expose
these keys through `NEXT_PUBLIC_` variables or commit their values.

Manual production sync URL:

```text
https://awesoontechnologies.com/api/inngest
```

The initial function registry is empty. This endpoint installs no schedules,
sends no events, and performs no email or database work. Add approved functions
to the route's `functions` array when their workflows are implemented, then
sync again. Blueprint Maker's autonomous jobs are unrelated and remain off.

In production, the v4 SDK requires a valid Inngest signature even for discovery.
A browser or unsigned health check can receive HTTP 401 while the endpoint is
working correctly. Do not disable signature validation to make a browser check
return HTTP 200.

For local development with the Inngest Dev Server, set `INNGEST_DEV=1` locally.
Do not set this variable in Vercel production.
