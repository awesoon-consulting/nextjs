#!/bin/bash
# pusher.sh — Mac-native git pusher
# Runs every 10 min via launchd. Handles all git push + gh pr create operations.
# Token-based auth: reads GITHUB_TOKEN from ~/.awesoon-pusher.env
# This makes it independent of which gh account is currently active on the Mac.

REPO="/Users/rayrasouli/Desktop/Awesoon/website/frontend/nextjs"
LOG="$REPO/docs/task-queue/pusher-log.txt"
QUEUE="$REPO/docs/task-queue/push-queue.txt"
PR_DIR="$REPO/docs/task-queue/pr-bodies"
REVIEW_DIR="$REPO/docs/task-queue/pr-reviews"
GITHUB_REPO="awesoon-consulting/nextjs"
ENV_FILE="$HOME/.awesoon-pusher.env"

log() { echo "[$(date '+%Y-%m-%d %H:%M')] $1" >> "$LOG"; }

# 1. Load token from env file (never committed — lives only on this Mac)
if [ ! -f "$ENV_FILE" ]; then
  log "ERROR: $ENV_FILE not found — run scripts/install-pusher.sh to create it"
  exit 1
fi
# shellcheck source=/dev/null
source "$ENV_FILE"
if [ -z "$GITHUB_TOKEN" ]; then
  log "ERROR: GITHUB_TOKEN not set in $ENV_FILE"
  exit 1
fi

# 2. Configure git to use token for this repo without touching global config.
# We set the remote URL with the token embedded for the duration of this script.
AUTHED_REMOTE="https://x-access-token:${GITHUB_TOKEN}@github.com/${GITHUB_REPO}.git"
git -C "$REPO" remote set-url origin "$AUTHED_REMOTE" 2>/dev/null

# gh CLI: pipe token in on every call via --with-token (ignores stored auth)
gh_auth() { echo "$GITHUB_TOKEN" | gh auth login --with-token 2>/dev/null; }
gh_auth

# 3. Connectivity check
if ! git -C "$REPO" ls-remote origin HEAD > /dev/null 2>&1; then
  log "No connectivity — skipping"
  # Restore clean remote URL before exit
  git -C "$REPO" remote set-url origin "https://github.com/${GITHUB_REPO}.git" 2>/dev/null
  exit 0
fi

# 4. Push main if ahead
git -C "$REPO" fetch origin main --quiet 2>/dev/null
AHEAD=$(git -C "$REPO" rev-list origin/main..main --count 2>/dev/null || echo 0)
if [ "$AHEAD" -gt 0 ]; then
  git -C "$REPO" push origin main --quiet 2>/dev/null \
    && log "Pushed main ($AHEAD commits ahead)" \
    || log "Failed to push main — will retry"
fi

# 5. Process push queue
[ -f "$QUEUE" ] || touch "$QUEUE"
[ -s "$QUEUE" ] || {
  # Restore clean remote URL before exit
  git -C "$REPO" remote set-url origin "https://github.com/${GITHUB_REPO}.git" 2>/dev/null
  exit 0
}

REMAINING=""
while IFS= read -r BRANCH; do
  [ -z "$BRANCH" ] && continue
  if git -C "$REPO" push origin "$BRANCH" --quiet 2>/dev/null; then
    log "Pushed branch: $BRANCH"
    if command -v gh > /dev/null 2>&1; then
      SAFE=$(echo "$BRANCH" | tr '/' '-')
      BODY_FILE="$PR_DIR/${SAFE}.md"
      if [ -f "$BODY_FILE" ]; then
        PR_TITLE=$(head -1 "$BODY_FILE" | sed 's/^# //')
        gh pr create --repo "$GITHUB_REPO" --base main --head "$BRANCH" \
          --title "$PR_TITLE" --body-file "$BODY_FILE" 2>/dev/null \
          && log "PR created: $BRANCH" && rm "$BODY_FILE"
      else
        gh pr create --repo "$GITHUB_REPO" --base main --head "$BRANCH" \
          --fill 2>/dev/null && log "PR created (auto-fill): $BRANCH"
      fi
    fi
  else
    log "Push failed for $BRANCH — keeping in queue"
    REMAINING="${REMAINING}${BRANCH}\n"
  fi
done < "$QUEUE"

# 6. Update queue
[ -n "$REMAINING" ] && printf "%b" "$REMAINING" > "$QUEUE" || truncate -s 0 "$QUEUE"

# 7. Submit pending PR reviews
if command -v gh > /dev/null 2>&1 && [ -d "$REVIEW_DIR" ]; then
  for REVIEW_FILE in "$REVIEW_DIR"/*.md; do
    [ -f "$REVIEW_FILE" ] || continue
    [ "$(basename "$REVIEW_FILE")" = "README.md" ] && continue
    STATUS=$(grep "^STATUS:" "$REVIEW_FILE" | head -1 | sed 's/STATUS: //')
    COMMENT=$(awk '/^REVIEW_COMMENT:/{found=1;next} found && /^(STATUS:|SUMMARY:|FIX_TASKS:)/{exit} found{print}' "$REVIEW_FILE")
    BRANCH_SLUG=$(basename "$REVIEW_FILE" .md)
    PR_NUM=$(gh pr list --repo "$GITHUB_REPO" --head "$BRANCH_SLUG" --json number --jq '.[0].number' 2>/dev/null)
    if [ -n "$PR_NUM" ] && [ -n "$COMMENT" ]; then
      if [ "$STATUS" = "APPROVE" ]; then
        gh pr review "$PR_NUM" --repo "$GITHUB_REPO" --approve --body "$COMMENT" 2>/dev/null \
          && log "PR #$PR_NUM approved: $BRANCH_SLUG" && rm "$REVIEW_FILE"
      elif [ "$STATUS" = "REQUEST_CHANGES" ]; then
        gh pr review "$PR_NUM" --repo "$GITHUB_REPO" --request-changes --body "$COMMENT" 2>/dev/null \
          && log "PR #$PR_NUM — changes requested: $BRANCH_SLUG" && rm "$REVIEW_FILE"
      fi
    elif [ -z "$PR_NUM" ]; then
      log "Review pending for $BRANCH_SLUG — PR not found yet"
    fi
  done
fi

# 8. Commit queue + log back to main
git -C "$REPO" add "$QUEUE" "$LOG" "$PR_DIR" "$REVIEW_DIR" 2>/dev/null
git -C "$REPO" diff --staged --quiet 2>/dev/null || {
  git -C "$REPO" commit -m "chore(pusher): processed queue $(date '+%Y-%m-%d %H:%M')" --quiet 2>/dev/null
  git -C "$REPO" push origin main --quiet 2>/dev/null
}

# 9. Restore clean remote URL (no token in stored config)
git -C "$REPO" remote set-url origin "https://github.com/${GITHUB_REPO}.git" 2>/dev/null
