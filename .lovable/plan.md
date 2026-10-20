# Company departments activity: smaller box, steady dropdowns

Applies only to Module 1 → Vocabulary → "Company Departments".

## Changes
1. **Smaller box**: limit the activity's width and centre it on the page so it no longer fills the whole screen. Use slightly tighter spacing between the six situations. Phones stay full width.
2. **Dropdowns that don't move the page**:
   - Give the answer box a fixed width. After a choice, show only the letter (for example "d") in the box, so the row doesn't get wider. The open list still shows the letter and the department name.
   - Stop the page from jumping sideways when a list opens. Right now, opening a list hides the scrollbar for a moment and the page shifts.
3. Checking, scoring, the tick and cross marks, "Correct: …" messages and Reset all stay the same.

## Technical details
- `DepartmentMatchingExercise.tsx`: add `max-w-3xl mx-auto` to the Card and reduce row padding/gaps. Set `SelectTrigger` to a fixed `w-16 shrink-0` and render the letter only as the trigger value (custom child inside `SelectValue`). Keep the full labels on the `SelectItem`s.
- Layout shift: limit the fix to this component. Use `position="popper"` on `SelectContent` with a fixed width. If the scroll-lock shift still happens, add a scoped `scrollbar-gutter: stable` on `html` in index.css.
- Verify with Playwright at 989px and 390px: the page width stays the same before and after opening a dropdown, and nothing scrolls sideways.
