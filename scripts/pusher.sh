#!/bin/bash
# pusher.sh — Mac-native git pusher
# Runs every 10 min via launchd. Handles all git push + gh pr create operations.

REPO="/Users/rayrasouli/Desktop/Awesoon/website/frontend/nextjs"
LOG="$REPO/docs/task-queue/pusher-log.txt"
QUEUE="$REPO/docs/task-queue/push-queue.txt"
PR_DIR="$REPO/docs/task-queue/pr-bodies"
REVIEW_DIR="$REPO/docs/task-queue/pr-reviews"
GITHUB_REPO="awesoon-consulting/nextjs"

log() { echo "[$(date '+%Y-%m-%d %H:%M')] $1" >> "$LOG"; }

# 1. Connectivity check
if ! git -C "$REPO" ls-remote origin HEAD > /dev/null 2>&1; then
  exit 0
fi

# 2. Extract token and auth gh CLI
REMOTE_URL=$(git -C "$REPO" remote get-url origin 2>/dev/null)
TOKEN=$(echo "$REMOTE_URL" | sed 's|https://\([^@]*\)@.*|\1|')
if [ -n "$TOKEN" ] && [ "$TOKEN" != "$REMOTE_URL" ]; then
  command -v gh > /dev/null 2>&1 && echo "$TOKEN" | gh auth login --with-token 2>/dev/null
fi

# 3. Push main if ahead
git -C "$REPO" fetch origin main --quiet 2>/dev/null
AHEAD=$(git -C "$REPO" rev-list origin/main..main --count 2>/dev/null || echo 0)
if [ "$AHEAD" -gt 0 ]; then
  git -C "$REPO" push origin main --quiet 2>/dev/null \
    && log "Pushed main ($AHEAD commits ahead)" \
    || log "Failed to push main — will retry"
fi

# 4. Process push queue
[ -f "$QUEUE" ] || touch "$QUEUE"
[ -s "$QUEUE" ] || { exit 0; }

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

# 5. Update queue
[ -n "$REMAINING" ] && printf "%b" "$REMAINING" > "$QUEUE" || truncate -s 0 "$QUEUE"

# 5b. Submit pending PR reviews
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

# 6. Commit queue + log back to main
git -C "$REPO" add "$QUEUE" "$LOG" "$PR_DIR" "$REVIEW_DIR" 2>/dev/null
git -C "$REPO" diff --staged --quiet 2>/dev/null || {
  git -C "$REPO" commit -m "chore(pusher): processed queue $(date '+%Y-%m-%d %H:%M')" --quiet 2>/dev/null
  git -C "$REPO" push origin main --quiet 2>/dev/null
}
