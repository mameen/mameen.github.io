# mameen.github.io - AI Agent Guidelines

**Project:** mameen.github.io (live personal site, custom domain `demiry.net`)
**Purpose:** Tool-agnostic guidelines for AI coding agents working in this specific repo.
**Audience:** AI coding agents (Claude Code, Cursor, etc.) assisting with this repo.

## Hard rule: no changes without explicit GO

- Do **not** edit, commit, or push any file in this repo — including content, design, CI, or hosting/infra config — unless the user has given an explicit "GO".
- Research, ideation, reading files, drafting proposals, and answering questions about this repo are always fine without a GO.
- If asked to "plan" or "think about" something here, produce a plan/proposal only — do not implement it.
- This rule was set 2026-07-01 because the site is live at demiry.net and changes should only land after the user has reviewed and explicitly approved them.
- The rule is about `master`/prod, not about re-confirming every step of work already approved: once the user creates an exploration branch and gives a specific edit instruction (e.g. "remove the SKILLS section"), that counts as GO for that edit on that branch — no need to ask again before making it or checking it.

## Verifying changes — keep it simple

- This is a static HTML/CSS/JS site with no build step. To check a change, just open the file directly in a browser via `file://` (e.g. `file:///Users/mohamedi/src/ad/personal/.repos/mameen.github.io/index.html`).
- Don't spin up a local dev/preview server or add tooling/config (`.claude/launch.json`, npm scripts, etc.) for this repo — the user prefers minimal changes and no extra scaffolding for a plain static site.
