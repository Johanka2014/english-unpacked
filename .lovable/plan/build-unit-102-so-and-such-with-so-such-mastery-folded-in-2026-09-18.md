# Build Unit 102 — So and such (with So & Such Mastery folded in)

Build out Murphy Unit 102 "So and such" in Grammar → Adjectives and Adverbs, and merge the existing standalone "So & Such Mastery" lesson into it as a tab, so everything on so/such lives in one place.

## Page structure (same format as Units 1–6)

**Tab 1 — Theory** (transcribed from Murphy Unit 102, left-hand page)
- so + adjective/adverb (*so stupid, so quickly*)
- so + many/much/few/little
- such + adjective + plural/uncountable noun (*such nice people*)
- such a/an + adjective + singular noun (*such a big dog*)
- so ... that / such ... that, including leaving out *that*
- the "like this" use (*I didn't realise it was so old*) and `no such ...`
- comparison pairs: *so long / such a long time*, *so far / such a long way*, *so much / such a lot (of)*
- Notes box with common mistakes (*a so stupid story* ✗ → *such a stupid story* ✓)

**Tab 2 — Book Exercises** (102.1, 102.2, 102.3 as interactive activities)
- 102.1: gap fill with so / such / such a (typed answers, instant checking)
- 102.2: sentence combining with so/such (free text with model answers)
- 102.3: personalisation prompts with editable boxes and example answers

**Tab 3 — Supplementary** (matching tasks from English Grammar in Use Supplementary Exercises)

**Tab 4 — So & Such Mastery** (the existing lesson, embedded as-is)
- All the current activities stay: colour-coded reference cards, common mistakes, the three Wordwall quiz embeds, gap fills, matching, multiple choice, key word transformations, dialogue completion, song listening and "your turn" prompts

## Listing changes

- Unit 102 tile becomes fully clickable (no more "Coming soon").
- The separate "So & Such Mastery" tile (901) is removed from the section grid — its content now lives inside Unit 102, so there's no duplication.
- "Compound Adjectives" tile stays as it is.

## Technical notes

- `src/data/murphyGrammarData.ts`: add `theory`, `exercises`, `supplementary` and `soSuchLesson: true` to unit 102; delete the `so-such-mastery` (901) tile entry.
- `src/pages/MurphyGrammarUnit.tsx`: already knows how to render the so-such tab — no changes needed beyond the data (verified).
- Exercises use the existing `MurphyExercise` renderer (gap-fill, free-text, matching), so checking, scores, retries and dashboard activity tracking work automatically.
- Content transcribed from the uploaded `Murphy_-_Grammar_in_Use_-_4th_Edition.pdf` and the Supplementary Exercises PDF (both still available).
- No backend changes.
