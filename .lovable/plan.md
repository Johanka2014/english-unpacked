# Build Business Benchmark Pre-Intermediate — Module 4: The Internet

Build out the existing greyed-out Module 4 skeleton ("The Internet", Student's Book pp. 22–25) with interactive activities, matching the style and layout of Modules 1–3.

## Waiting on you

Upload the Module 4 pages from the Student's Book (and the Workbook / Teacher's Book pages if you have them — the TB gives answer keys and listening transcripts). No build work starts until the PDF arrives.

## What gets built

The five existing skill tiles on the Module 4 page become clickable, each with its own activity page:

1. **Reading** — "Designing your website": the article as a readable text with comprehension questions (multiple choice / true-false / gap-fill with instant checking).
2. **Listening** — "Email addresses": audio player with transcript and comprehension tasks. Listening audio will use a placeholder player until you upload the recording, exactly as we did for Solutions Intermediate.
3. **Writing** — Set phrases for emails and letters; formal vs informal email style: phrase-sorting and gap-fill activities, plus model emails.
4. **Speaking** — Discussion: how to design a website — prompt cards and pair-work questions.
5. **Vocabulary** — Email and website terms: matching / flashcard-style activity with checking.

## Technical details

- Add `content` entries to Module 4 in `src/data/businessBenchmarkData.ts`, following the same pattern as Modules 1–3 (e.g. `content: { type: 'reading-the-internet' }`).
- Create new activity components under `src/components/business-benchmark/` (one per skill, matching existing naming like `ReadingCompanyHistoryExercise.tsx`).
- Wire the content types into `src/pages/BusinessBenchmarkSkill.tsx` so each tile renders its component; tiles with content automatically become clickable and lose the "Coming soon" badge.
- Interactive exercises get answer checking and activity-result tracking (right/wrong counts on the dashboard), consistent with the other modules.
- Any audio files uploaded later are compressed, uploaded to CDN storage, and wired into the listening player.
- Verify with a production build and a browser check of `/business-benchmark/the-internet`.
