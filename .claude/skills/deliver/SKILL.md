---
name: deliver
description: Final delivery gate for the Relta Agent App. Runs the VP-of-Engineering and VP-of-Design review agents on the current diff in parallel and blocks delivery if either returns BLOCK. Use right before handing finished work back to Ray, opening a PR, or saying "done".
---

# /deliver — VP sign-off gate

The definition of done for any change in this repo. Do not declare work finished, open a PR, or hand back until this passes.

## Steps
1. Confirm there is a diff to review: `git status --short` and `git diff --stat main...HEAD`. If nothing changed, stop and say so.
2. Launch **both** review agents in parallel (one message, two Agent calls) so they run concurrently:
   - `vp-engineering` — prompt: "Review the current working diff for delivery. Return your strict verdict."
   - `vp-design` — prompt: "Review the current working diff for delivery. Return your strict verdict."
3. Collect both verdicts. Delivery is **APPROVED only if both return APPROVE**. If either returns BLOCK:
   - Show the blockers verbatim.
   - Fix them (or, if they need a product call, surface to Ray with the specific blocker).
   - Re-run `/deliver` after fixing — do not hand-wave a blocker away.
4. On dual-APPROVE, report: `shipped / next / blocked` (one or two lines each, per Ray's PR convention). Include the `VERIFY:` line from VP-Eng.

## Notes
- The gates judge the **diff**, not the whole repo — cost is bounded and only paid at delivery.
- These are advisory-but-mandatory: a BLOCK is not a suggestion. The CI `verify` workflow is the automated backstop; these two agents are the judgment layer CI can't do.
