# Institutional Knowledge

> Curated company brain. Hard cap: 80 lines. Maintained daily by
> system-optimizer. All agents read this at STEP 0 before any work.

## Copy & Brand Patterns
- Lead with the operational problem, not the technology — buyers care about outcomes, not tools
- AI is always an "operational multiplier," never a replacement for process discipline or data quality
- Never use: "transform," "revolutionize," "cutting-edge," "game-changer," or generic AI hype phrases
- Tone is mid-market practical — direct, credible, implementation-focused — not enterprise-consultant abstract
- Solutions should feel specific to mid-market operations teams, not broad enough to apply to any company

## Architecture Patterns
- All user-facing strings go through next-intl — never hardcode copy in components (use messages/en.json + fr.json + es.json)
- No hardcoded colours — use Tailwind tokens and theme variables defined in tailwind.config.ts
- All new pages must use the app router structure under `app/[locale]/`
- File header comments required on every code file (see global CLAUDE.md)
- Read README.md chain before writing any code; update README after changes

## Git & GitHub Credentials

- Repo: `https://github.com/awesoon-consulting/nextjs.git`
- Resting remote: `scripts/pusher.sh` ends every run by setting `origin` to `https://github.com/awesoon-consulting/nextjs.git` (pusher.sh:121, no username, no token). Logins for `gh` and for git outside the pusher come from the GitHub CLI (`gh auth login`, `gh auth status`)
- Pusher credentials: the pusher reads `GITHUB_TOKEN` (awesoon-consulting) from `~/.awesoon-pusher.env`, which lives only on the Mac. For the length of one run it sets `origin` to `https://x-access-token:<token>@github.com/awesoon-consulting/nextjs.git` (pusher.sh:31-32), then restores the resting remote above on exit (pusher.sh:42, 121)
- Outside a pusher run, no token goes in a file or URL. If `git remote -v` shows a token in `origin`, first check whether it is the pusher's (a run in progress, or one that died before restoring the URL). If it is, restore the resting remote and leave the token valid. Revoke it only if it is not the one in `~/.awesoon-pusher.env`
- Executors must never run `git push` — write branch name to `docs/task-queue/push-queue.txt` and let the Mac pusher handle it
- Mac pusher script: `scripts/pusher.sh` (runs every 10 min via launchd, installed via `bash scripts/install-pusher.sh`)

## What Has Been Tried and Failed
[system-optimizer populates this from experience]

## Active Hypotheses
[system-optimizer populates this]

## Reasoning Log
[system-optimizer populates this]
