## Goal

Fold the standalone **Tense Master Grammar Course** into the **B1 Grammar → Tenses** section so each tense module contains the matching theory + interactive quizzes, and remove the duplicate "Tense Master" entry from the Practice → Grammar tab.

## Mapping

| B1 Grammar module | Tense Master content to embed |
|---|---|
| Present Tenses | Present Simple, Present Continuous, Present Simple vs Continuous |
| Past Tenses | Past Simple, Past Continuous |
| Present Perfect & Past Simple | Present Perfect (Simple + Continuous), Irregular Past Participles |
| Past Perfect | Past Perfect Simple, Past Perfect Continuous |
| Future Tenses | Existing B1 content kept as-is, Tense Master future quizzes appended below (Will, Going to, Future Continuous, Present for Future, Future Perfect Simple, Future Perfect Continuous) |

## Refactor — extract Tense Master into reusable parts

`src/pages/TenseMasterWrapper.tsx` is 1,428 lines mixing data + UI. Split it:

1. **`src/data/tenseMasterData.ts`** — move all `QuizCategory[]` arrays and the `tensesData` (theory units) out of the wrapper. Export each tense block by key (e.g. `presentSimple`, `presentContinuous`, `presentSimpleVsContinuous`, `pastSimple`, …, `futurePerfectContinuous`).
2. **`src/components/tense-master/TenseTheoryCard.tsx`** — renders one `TenseUnit` (formula, detailed uses, examples) using existing styles.
3. **`src/components/tense-master/TenseQuizSection.tsx`** — renders a `QuizCategory[]` with the same question/feedback/scoring UX currently in the wrapper. Self-contained state so multiple instances can live on one page.
4. **`src/components/tense-master/TenseMasterModule.tsx`** — composition helper that takes a list of `{ theory: TenseUnit; quizzes: QuizCategory[] }` and renders theory + quizzes for one B1 module.

`TenseMasterWrapper.tsx` is rewritten to consume these new pieces so the standalone page keeps working visually and behaviourally identical (we just shrink it).

## Wire into B1 Grammar

`src/data/b1GrammarData.ts` — extend the `B1GrammarModule` type with an optional `tenseMaster?: TenseMasterModuleConfig` field referencing the data keys, and populate it on the 5 Tenses modules per the table above.

`src/pages/B1GrammarTopic.tsx` — when `module.tenseMaster` is present, render `<TenseMasterModule …/>` after the existing theory/exercises sections so Future Tenses keeps its current content and gains the extra quizzes underneath.

## Remove the duplicate

- `src/pages/MembersActivities.tsx` — delete the **TenseMaster Grammar Course** entry from `grammarActivities`.
- Keep the `/tense-master` route and `TenseMasterWrapper` page mounted in `src/App.tsx` so the existing "Further Practice" link inside `GrammarWorkshopExercise.tsx` (Business Benchmark) and any external bookmarks keep working — it just no longer appears as a separate Grammar card.

## Files touched

- New: `src/data/tenseMasterData.ts`, `src/components/tense-master/TenseTheoryCard.tsx`, `src/components/tense-master/TenseQuizSection.tsx`, `src/components/tense-master/TenseMasterModule.tsx`
- Edited: `src/pages/TenseMasterWrapper.tsx` (slim down), `src/data/b1GrammarData.ts` (add tenseMaster config to 5 modules), `src/pages/B1GrammarTopic.tsx` (render Tense Master block), `src/pages/MembersActivities.tsx` (remove duplicate card)

## Out of scope

No changes to backend, auth, routing structure, or visual design tokens. The standalone `/tense-master` route stays available for the existing in-app link from Business Benchmark.
