# Show the full Module 5 reading texts

## Confirmed
The original Student’s Book and Teacher’s Book PDFs are still available. The Reading page currently contains a short rewritten leasing article and summaries of the two repair emails, rather than the complete source texts. The Fastequip questions are also rewritten and do not match the original advertisement’s question set.

## Changes
1. **Leasing equipment:** display the complete Student’s Book reading passage (page 28), with its six linking sentences incorporated so students can read it as a complete article. Keep the existing editorial styling.
2. **Fastequip:** show the full Teacher’s Book advertisement (page 32) immediately before its reading activity, including all three lease options and application details. Use clear section headings in the original order: advantages, payment structure, application.
3. **Make the Fastequip activity match its text:** restore the eight original right/wrong/doesn’t-say statements and verified Teacher’s Book answers. This avoids marking students against claims that the original advertisement does not support.
4. **Office repairs:** replace the summaries with the complete Richard Parker and Maria Hawkins emails (Student’s Book page 29), including To, From, Sent and Subject, immediately before the existing five questions. Present the emails side by side where space allows, stacking on smaller screens.
5. Keep the original reading facts intact, with modern workplace context clearly separated in the existing “Then and now” note. Label the Fastequip offer as textbook material, not a current commercial offer; do not make its historic contact details actionable.

All texts will be visible without another click or opening a PDF. No changes to Listening, Writing, Speaking or Vocabulary, and no additional exercises.

## Technical details and checks
- Limit the implementation to `ReadingEquipmentExercise.tsx`, reusing the existing exercise controls and activity tracking.
- Verify each question is supported by the displayed passage and its answer agrees with the source key.
- Check the signed-in Reading page, answer checking and scoring, and text layout on large and small screens; confirm there are no new page or compilation errors.