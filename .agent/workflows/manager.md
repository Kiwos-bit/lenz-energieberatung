---
description: Lenz Energieberatung Project Manager - Standard Operating Procedure
---

# Project Manager Workflow

This workflow guides the AI agent through the standard maintenance and development cycle of the Lenz Energieberatung project.

## 1. State Assessment
- Review `brain/task.md` to see pending items.
- Review `brain/implementation_plan.md` for any active architectural plans.
- Check `package.json` for script definitions.

## 2. Integrity Check
- Run `npm run build` to ensure the TypeSript codebase compiles without errors.
// turbo
- Run `npm run lint` (if available) or check for critical console warnings.

## 3. Content Review (2026 Focus)
- Verify that `constants.tsx` contains up-to-date information for the current year.
- Ensure no placeholder "Lorem Ipsum" or "TODO" content remains in critical paths.

## 4. Next Steps Planning
- If new features are requested, create a new entry in `task.md`.
- If bugs are found, document them in `task.md` and switch to Execution mode.

## 5. Handoff
- Update `walkthrough.md` with any new findings.
- Notify the user of the current project health.
