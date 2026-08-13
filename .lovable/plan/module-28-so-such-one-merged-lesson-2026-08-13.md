# Module 28: So & Such — one merged lesson

Merge the two current Unit 28 entries ("So/Such; Too/Enough" and "So/Such Master") into a **single Module 28: So & Such**, and fold in all the new resources (four PDFs, British Council reference, three Wordwall quizzes). Too/Enough is left out for now and can be added later.

Same colours, card layout and lesson styling as the other B1 Grammar lessons. Opening the tile goes straight into the lesson — no extra clicks.

## Page flow (top to bottom)

1. **Grammar explanation (at the top)** — colour-coded reference cards built from Murphy Unit 102 and the 10b tables:
   - so + adjective / adverb
   - so + many / much / few / little
   - such + adjective + plural or uncountable noun
   - such a/an + adjective + singular noun
   - so ... that / such ... that (and leaving out *that*)
   - the "like this" use, `no such ...`
   - comparison pairs: so long / such a long time, so far / such a long way, so much / such a lot (of)
2. **Common mistakes** — *a so stupid story*, *a such big dog*, *so nice people*, *so long time*, each with the correct form.
3. **Wordwall quiz 1** — embedded game (34faf644...).
4. **Gap fill: so / such / such a** — the 15 sentences from Murphy 102.1, typed answers, instant checking and a show-answers toggle.
5. **Gap fill 2** — the 8 airport/holiday sentences from the New English File 2B worksheet.
6. **Sentence combining** — Murphy 102.2: join two sentences with so/such; free-text with model answers on reveal.
7. **Matching** — 10b Practice 1: match sentence halves 0–6 with a–g.
8. **Wordwall quiz 2** — embedded game (5a41bebf...).
9. **Multiple choice** — the 10 so / such / such a items from 10b Practice 2.
10. **Key word transformations** — the so/such items from 10b Practice 4 (SUCH, THAT, SO), exam-style 2–5 words with checking.
11. **Dialogue completion** — the Jim & Izzy cinema dialogue (Grammar Builder), 6 gaps.
12. **Wordwall quiz 3** — embedded game (ebc24a40...).
13. **Best of the old So/Such Master** — the multiple-choice, pattern-recognition and song listening activities from the existing lesson, kept so nothing is lost in the merge.
14. **Your turn** — personalisation prompts (Murphy 102.3 and the New English File "own ideas" items) with writable boxes and example answers.
15. **Further reading** — link out to the British Council intensifiers so/such page (new tab).

Auto-checkable exercises show a score and allow retry; open-ended ones use editable boxes with model answers behind a reveal button.

## Technical notes

- In `src/data/b1GrammarData.ts`: remove the `so-such-master` entry and reshape `so-such-too-enough` into the single module 28 (`title: 'So & Such'`, updated subtitle, new `soSuchLesson: true` flag). Too/Enough dropped from the title until it is built.
- New component `src/components/b1-grammar/SoSuchLesson.tsx`, structured like `SoSuchMasterLesson.tsx` (shadcn Card/Button/Input, semantic tokens, section icons), carrying over the reusable activities from the old lesson; delete `SoSuchMasterLesson.tsx` once merged.
- In `src/pages/B1GrammarTopic.tsx`: drop the `so-such-master` tab and render the new lesson for module 28, mirroring the existing single-lesson wiring so it auto-opens.
- Wordwall games in responsive iframe wrappers (max-width 100%, 380px tall, allowfullscreen), as used elsewhere on the site.
- No backend or database changes.
