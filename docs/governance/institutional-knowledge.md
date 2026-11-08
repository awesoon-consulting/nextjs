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
- The remote URL has the `awesoon-consulting` token embedded directly to bypass macOS keychain (which defaults to `rasoulirealestate`)
- Format: `https://awesoon-consulting:<token>@github.com/awesoon-consulting/nextjs.git`
- To refresh the token if it expires: `gh auth token --hostname github.com --user awesoon-consulting` then `git remote set-url origin https://awesoon-consulting:<new-token>@github.com/awesoon-consulting/nextjs.git`
- Executors must never run `git push` — write branch name to `docs/task-queue/push-queue.txt` and let the Mac pusher handle it
- Mac pusher script: `scripts/pusher.sh` (runs every 10 min via launchd, installed via `bash scripts/install-pusher.sh`)

## What Has Been Tried and Failed
[system-optimizer populates this from experience]

## Active Hypotheses
[system-optimizer populates this]

## Reasoning Log
[system-optimizer populates this]
