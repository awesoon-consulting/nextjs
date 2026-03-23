#!/bin/bash
# install-pusher.sh — one-time setup. Run once from Terminal on your Mac.

REPO="/Users/rayrasouli/Desktop/Awesoon/website/frontend/nextjs"
USERNAME="rayrasouli"

cp "$REPO/scripts/pusher.sh" ~/.project-pusher.sh
chmod +x ~/.project-pusher.sh

# Write launchd plist
cat > ~/Library/LaunchAgents/com.project.gitpusher.plist << EOF
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN"
  "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
  <key>Label</key>
  <string>com.project.gitpusher</string>
  <key>ProgramArguments</key>
  <array>
    <string>/bin/bash</string>
    <string>/Users/$USERNAME/.project-pusher.sh</string>
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
  <string>/tmp/project-pusher-out.log</string>
  <key>StandardErrorPath</key>
  <string>/tmp/project-pusher-err.log</string>
</dict>
</plist>
EOF

launchctl unload ~/Library/LaunchAgents/com.project.gitpusher.plist 2>/dev/null
launchctl load ~/Library/LaunchAgents/com.project.gitpusher.plist
echo "✓ Pusher installed and running every 10 minutes"
bash ~/.project-pusher.sh
echo "✓ First run complete — check $REPO/docs/task-queue/pusher-log.txt"
