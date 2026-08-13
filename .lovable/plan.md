# So & Such — new B1 Grammar section

A new grammar module dedicated to **so and such**, built from the four PDFs, the British Council reference page, and the three Wordwall quizzes. Same colours, card layout and tabbed lesson style as the existing B1 Grammar lessons (Modal Verbs Master, Compound Adjectives, So/Such Master).

## Where it goes

New tile in Practice > Grammar > B1 Grammar, placed next to the existing Unit 28 So/Such entries, titled **So & Such — Complete Guide**. The existing "So/Such Master" lesson stays as it is; the new one is the full resource-based workshop.

Opening the tile goes straight into the lesson (single-tile auto-open already in place), no extra clicks.

## Lesson content (sections in order)

1. **Rules & patterns** — colour-coded reference cards built from the Murphy Unit 102 and the 10b tables: so + adj/adverb, so + many/much/few/little, such + adj + plural/uncountable noun, such a/an + adj + singular noun, each with meaning and example. Includes the "so ... that / such ... that (that can be left out)" note, the "like this" use, the `no such ...` expression, and the so long / such a long time, so far / such a long way, so much / such a lot (of) comparison pairs.
2. **Common mistakes** — a so stupid story, a such big dog, so nice people, so long time; each with the correct form.
3. **Wordwall quiz 1** — embedded game (34faf644...).
4. **Gap fill: so / such / such a** — the 15 sentences from Murphy 102.1, typed answers, instant checking plus a show-answers toggle.
5. **Gap fill: so, such or such a** — the 8 airport/holiday sentences from the New English File 2B worksheet.
6. **Sentence combining** — Murphy 102.2: join two sentences with so/such; free-text answers with model answers revealed on request.
7. **Matching** — the 10b Practice 1 exercise: match sentence halves 0–6 with a–g (click-to-match, same interaction pattern as other lessons).
8. **Wordwall quiz 2** — embedded game (5a41bebf...).
9. **Multiple choice: so / such / such a** — the 10 items from 10b Practice 2.
10. **too / enough / very** — short reference table from 10b plus the 10-item completion exercise, since these are taught alongside so/such.
11. **Key word transformations** — the 10 exam-style items from 10b Practice 4 (SUCH, HEAVY, TALL, THAT, WELL, OLD, HIGH, SO, FOR, ENOUGH), 2–5 words, with answer checking.
12. **Dialogue completion** — the Jim & Izzy cinema dialogue (Grammar Builder) with 6 gaps.
13. **Wordwall quiz 3** — embedded game (ebc24a40...).
14. **Your turn** — open-ended personalisation prompts (Murphy 102.3 and the New English File "own ideas" items) with writable text boxes and example answers.
15. **Further reading** — link out to the British Council intensifiers so/such page (opens in a new tab).

All auto-checkable exercises show a score and let the student retry; open-ended ones use editable boxes with model answers behind a reveal button.

## Technical notes

- New component `src/components/b1-grammar/SoSuchCompleteLesson.tsx`, following the structure of `SoSuchMasterLesson.tsx` (local state, shadcn Card/Button/Input, semantic tokens, section icons).
- Register a `soSuchCompleteLesson: true` flag on a new module entry in `src/data/b1GrammarData.ts` and add the matching tab + render branch in `src/pages/B1GrammarTopic.tsx`, mirroring how `soSuchMasteryLesson` and `compoundAdjectivesLesson` are wired.
- Wordwall games rendered in responsive iframe wrappers (max-width 100%, 380px tall, allowfullscreen), same as the Wordwall embeds used elsewhere.
- No backend or database changes.
