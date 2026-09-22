# Build out the "If and Wish" grammar units (38–41)

Yes — I have the *English Grammar in Use* (4th edition) textbook and the *Supplementary Exercises* book, and I've located the pages for all four units.

## What gets built

Each of the four units becomes a full lesson page in exactly the same style as Units 1–6 and Unit 102 (hero band, tabbed content, instant answer checking, scores that feed the student dashboard).

| Unit | Title | Focus |
| --- | --- | --- |
| 38 | If I do … and If I did … | First vs second conditional, real vs imaginary |
| 39 | If I knew … / I wish I knew … | Unreal present, wishes about now, *if I were* |
| 40 | If I had known … / I wish I had known … | Third conditional, regrets, *would have* |
| 41 | Wish | wish vs hope, *I wish … would*, *if only* |

## Tabs on each unit

- **Theory** — the book's left-hand explanation split into lettered sections (A, B, C …) with example tables and note boxes, written in our own clear wording rather than copied verbatim.
- **Book exercises** — that unit's own exercises (38.1, 38.2, 38.3 …) as interactive gap-fill, sentence-rewriting, correction and choice tasks with instant checking and a score.
- **Supplementary** — the matching tasks from the Supplementary Exercises book, where the unit has them.

## Illustrations

Units 38–41 lean on picture-based examples in the book. I'll add one supporting image per unit (two-column theory layout, alternating left/right like Unit 102) to keep the pages visual:

- 38 — someone hesitating over two doors / a choice
- 39 — a person daydreaming out of a window in a small flat
- 40 — a missed train pulling out of a station
- 41 — someone looking at rain through a window, wishing it would stop

## Technical notes

- All content goes into `src/data/murphyGrammarData.ts` as `unit38Theory`/`unit38Exercises` etc., wired into the existing `if-and-wish` section entries (currently bare placeholders at lines 1337–1342).
- Exercises reuse the existing `MurphyExercise` component and its task types — no new components needed.
- Each answerable gap gets exactly one input (the multi-marker fix already applied elsewhere), and every answer key is checked against the book's key.
- Images generated into `src/assets/murphy/` and referenced from the theory sections via `image` / `imagePosition`.
- Verification: type-check, then browse each of the four unit pages and confirm tabs, layouts and answer checking on desktop and mobile widths.
