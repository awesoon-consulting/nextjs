#!/bin/bash
# install-pusher.sh — one-time setup. Run once from Terminal on your Mac.
# Creates ~/.awesoon-pusher.env with your GitHub token, then installs launchd.

REPO="/Users/rayrasouli/Desktop/Awesoon/website/frontend/nextjs"
USERNAME="rayrasouli"
ENV_FILE="$HOME/.awesoon-pusher.env"

# ── Token setup ────────────────────────────────────────────────────────────────
if [ -f "$ENV_FILE" ] && grep -q "GITHUB_TOKEN=ghp_" "$ENV_FILE" 2>/dev/null; then
  echo "✓ Token file already exists at $ENV_FILE"
else
  echo ""
  echo "Enter a GitHub personal access token for awesoon-consulting/nextjs."
  echo "Needs scopes: repo, read:org"
  echo "Create one at: https://github.com/settings/tokens"
  echo ""
  read -r -p "Token: " TOKEN
  if [ -z "$TOKEN" ]; then
    echo "✗ No token entered — aborting"
    exit 1
  fi
  cat > "$ENV_FILE" << EOF
# Awesoon pusher credentials — do not commit this file
GITHUB_TOKEN=$TOKEN
EOF
  chmod 600 "$ENV_FILE"
  echo "✓ Token saved to $ENV_FILE (chmod 600)"
fi

# ── Copy pusher script ─────────────────────────────────────────────────────────
cp "$REPO/scripts/pusher.sh" "$HOME/.awesoon-pusher.sh"
chmod +x "$HOME/.awesoon-pusher.sh"
echo "✓ Pusher copied to ~/.awesoon-pusher.sh"

# ── Write launchd plist ────────────────────────────────────────────────────────
cat > "$HOME/Library/LaunchAgents/com.awesoon.gitpusher.plist" << EOF
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN"
  "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
  <key>Label</key>
  <string>com.awesoon.gitpusher</string>
  <key>ProgramArguments</key>
  <array>
    <string>/bin/bash</string>
    <string>/Users/$USERNAME/.awesoon-pusher.sh</string>
  </array>
  <key>StartInterval</key>
  <integer>600</integer>
  <key>RunAtLoad</key>
  <true/>
  <key>EnvironmentVariables</key>
  <dict>
    <key>PATH</key>
    <string>/opt/homebrew/bin:/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin</string>
    <key>HOME</key>
    <string>/Users/$USERNAME</string>
  </dict>
  <key>StandardOutPath</key>
  <string>/tmp/awesoon-pusher-out.log</string>
  <key>StandardErrorPath</key>
  <string>/tmp/awesoon-pusher-err.log</string>
</dict>
</plist>
EOF

launchctl unload "$HOME/Library/LaunchAgents/com.awesoon.gitpusher.plist" 2>/dev/null
launchctl load "$HOME/Library/LaunchAgents/com.awesoon.gitpusher.plist"
echo "✓ Launchd job installed — runs every 10 minutes"

# ── First run ──────────────────────────────────────────────────────────────────
echo ""
echo "Running pusher now for the first time..."
bash "$HOME/.awesoon-pusher.sh"
echo ""
echo "✓ Done. Check $REPO/docs/task-queue/pusher-log.txt for results."
echo ""
echo "To rotate the token later, edit $ENV_FILE and re-run this script."
