@AGENTS.md

---

## Agent OS

This project runs a fully autonomous agent pipeline. All agents read the
governance files before doing any work.

### Governance files (docs/governance/)
- `ops-config.md` — master throughput and schedule config
- `ceo-directives.md` — owner's active directives, law for all agents
- `institutional-knowledge.md` — curated company brain, 80-line cap
- `sprint-plan.md` — daily priorities written by PM agent at 8:55am
- `agent-roster.md` — org chart, scores, authority boundaries
- `ceo-dashboard.md` — daily strategic brief for owner
- `optimizer-findings.md` — daily self-healing and memory update report
- `session-handoff.md` — nightly snapshot for morning report continuity

### Task queue (docs/task-queue/)
- `pending/` — tasks waiting to be claimed
- `in-progress/` — tasks currently being executed (should be empty overnight)
- `review/` — completed tasks awaiting PR creation and review
- `done/` — merged and closed tasks
- `push-queue.txt` — branches waiting for Mac pusher to push to GitHub
- `pr-reviews/` — APPROVE/REQUEST_CHANGES verdicts from PR reviewer
- `pr-bodies/` — PR description files for Mac pusher to use when creating PRs

### Task file naming
- M-YYYYMMDD-slug.md — Marketing
- E-YYYYMMDD-slug.md — Engineering
- F-YYYYMMDD-slug.md — Fix (from PR reviewer)

### Executor pattern (all agents follow this)
STEP 0: Read institutional-knowledge.md + ceo-directives.md + sprint-plan.md
STEP 1: Check max tasks from ops-config.md
STEP 2: Claim tasks from pending/
STEP 3: Execute — apply D000 and D001 checks to all output
STEP 4: Commit changes
STEP 5: Append ## Reasoning to task file, move to review/
STEP 6: Create branch, write to push-queue.txt — confirm "Queued for pusher: [BRANCH]"

### D000 test (applied to every piece of copy before committing)
"Does this feel unmistakably like Awesoon, or could it be any operations consulting website?"

### Mac pusher
scripts/pusher.sh runs every 10 minutes via launchd on the Mac.
It handles: git push, gh pr create, gh pr review submission.
Executors never attempt git push — they only write to push-queue.txt.
Install once: bash scripts/install-pusher.sh
