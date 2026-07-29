## Goal

Unit 1 of "Prepositions of Time" currently ends with place material (an in/on/at **place** explanation card with infographic, and a 10-question in/on/at dropdown exercise). That content belongs on the "Prepositions of Place" page. Move it, so each page covers exactly one topic.

## Changes

**1. Prepositions of Time — Unit 1 (`src/pages/PrepositionsOfTimePractice.tsx`)**
- Remove the "Same words, different job: in, on, at for PLACE" card (explanation, bullets, place infographic, tip).
- Remove the `<PrepositionDropdownExercise />` block.
- Remove the now-unused imports (`inOnAtPlaceImage`, `PrepositionDropdownExercise`).
- Keep the time infographic and the time quiz untouched.

**2. Prepositions of Place (`src/pages/PrepositionsOfPlace.tsx`)**
- Add the in/on/at place explanation card (same wording, bullets, infographic, and tip) as the **first** section, above the existing "Choose the correct word" quiz — so students get the theory before practising.
- Add `<PrepositionDropdownExercise />` directly after the explanation card, before the existing multiple-choice quiz.
- Reorder result: Explanation → in/on/at dropdown practice → choose-the-correct-word quiz → LearningApps activity.
- Update the page intro line so it covers both in/on/at position and the other place prepositions.

**3. Section descriptions (`src/pages/Prepositions.tsx`)**
- Update the "Prepositions of Place" card description to mention in, on, at alongside in front of, behind, above, below, etc.
- Update the "Prepositions of Time" card description if it implies place coverage (it currently lists only time words, so likely no change).

## Technical notes

- `PrepositionDropdownExercise` is a self-contained component with its own state and check/reset buttons, so it moves as a single JSX line with no prop changes.
- The place infographic asset `src/assets/prepositions-place-in-on-at.jpg` stays in place; only the import moves from the Time page to the Place page, keeping the same 90% width styling, alt text and caption.
- No data, routing, or backend changes; both routes keep their current URLs.
