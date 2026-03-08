

## Exercise C5 — Error Correction: Editable Email

### What we're building

Replace the current C5 exercise (which just has two text-input items) with an interactive editable email. The student sees Duncan's email in a styled "email card" and can click on words to correct the 8 adjective mistakes. After checking, correct fixes are highlighted green and missed errors are highlighted red with the correct version shown.

### The 8 errors in the email (from the image)

| Original (wrong) | Correct |
|---|---|
| town very small | very small town |
| old beautiful buildings | beautiful old buildings |
| galleries art | art galleries |
| boring (feelings context) | bored |
| cheaps clothes | cheap clothes |
| restaurant favourite | favourite restaurant |
| excited news | exciting news |

That's 7 clear errors. Looking more carefully — "lovely and sandy beach" appears correct (two adjectives after verb joined by "and"). The text has exactly 7 adjective-related errors to find.

### Technical approach

1. **Data layer** (`src/data/b1GrammarData.ts`):
   - Change exercise C5 type to `'error-correction'`
   - Add an `emailText` field (or use a new data structure) containing the email as an array of segments, each marked as either correct text or an error with its correction
   - Remove the current two simple items

2. **New component** — `ErrorCorrectionEmailExercise` in `src/pages/B1GrammarTopic.tsx`:
   - Renders the email in a styled card resembling an email/letter (white background, subtle border, email-style formatting)
   - Each error segment is rendered as a `contentEditable` span or an inline text input
   - Student edits the incorrect words/phrases directly in the email text
   - "Check Answers" button compares each editable segment against the correct answer
   - Green highlight for correct fixes, red + strikethrough for missed errors with the answer shown
   - Score displayed: X / 7

3. **Integration** in `ExercisesView`: detect `type === 'error-correction'` and render the new component.

### Files to modify
- `src/data/b1GrammarData.ts` — update C5 exercise data with email segments and error markers
- `src/pages/B1GrammarTopic.tsx` — add `ErrorCorrectionEmailExercise` component and wire it into `ExercisesView`

