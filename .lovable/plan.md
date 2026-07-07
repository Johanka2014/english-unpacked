## Goal

Sweep the Members Activities hub (`/members/activities`) and every page it links to, identify modules/sub-modules that are not yet built out, and apply a **single, consistent "Coming soon" treatment**: greyed tile, lock badge, non-clickable.

## Audit approach

For each hub tab, open the destination page and its data source. Classify each item as:

- **Live** — has real content, leave alone.
- **Partially built** — some children live, some empty → mark only the empty children.
- **Unfinished** — no meaningful content behind it → grey the top-level hub tile itself.

Signals used to detect "unfinished":
- `content: false`, `available: false`, missing `theory/practice/test`, or empty children arrays in data files.
- Component that only renders "coming soon" text or a stub.
- Route that maps to `NotFound` or a placeholder page.

## Visual convention (single pattern site-wide)

Reuse the pattern already in `BusinessBenchmarkModule` / `HREnglishUnit`:

- Card wrapped in a `div` (not a `Link`) with `opacity-60 cursor-not-allowed pointer-events-none` on the inner card.
- Top-right pill: `Lock` icon + text **"Coming soon"** on a translucent dark chip (`bg-black/40 text-white/80 text-xs px-2 py-1 rounded-full`).
- Where the current implementation uses an amber pill (`BusinessVocabularySection`, `B1GrammarSection`, `B1GrammarTopic`), switch to the same lock-pill for consistency, and ensure the card is actually non-clickable (some currently still navigate).

No new "button" component — the pill IS the coming-soon indicator, sitting on a disabled card. This matches the pattern the user already approved elsewhere.

## Files touched

**Hub — tile-level greying**
- `src/pages/MembersActivities.tsx`
  - Add `available?: boolean` to the `Activity` interface.
  - In `ActivityTile`, when `available === false`, render a non-link `div`, add the lock pill, apply opacity/cursor styles, skip `pushRecent`.
  - Flag any top-level tiles whose destinations are stubs (candidates I'll confirm by opening each: `Insurance Vocabulary`, `English for Presentations`, `Topics → Sport`, `Word Scramble` — will only mark those that truly have no content).
  - Exclude greyed tiles from search results' primary CTA or show them dimmed in search too.

**Sub-listing pages — normalize pattern & disable clicks on unfinished cards**
- `src/pages/BusinessBenchmarkModule.tsx` — already correct, keep.
- `src/pages/BBUpperModule.tsx` — already correct, keep.
- `src/pages/HREnglishUnit.tsx` — already correct, keep.
- `src/pages/BusinessVocabularySection.tsx` — replace amber pill with lock pill, wrap unfinished topics in a disabled `div` instead of `Link`.
- `src/pages/B1GrammarSection.tsx` — same swap + disable click.
- `src/pages/B1GrammarTopic.tsx` — same swap on the inner tile grid + disable click on the `!tile.available` branch.
- `src/pages/TechnicalEnglish.tsx` — the "Coming soon" `Badge` currently sits next to a still-clickable row; wrap the row so unfinished topics don't navigate.
- `src/pages/TechnicalEnglishTopic.tsx` — already renders a coming-soon empty state, keep.
- `src/pages/TechTalk.tsx`, `src/pages/EngineeringEnglish.tsx`, `src/pages/EngineeringEnglishSection.tsx`, `src/pages/EngineeringEnglishUnit.tsx`, `src/pages/TechTalkSection.tsx`, `src/pages/TechTalkUnit.tsx` — audit and, where a unit/section has no rendered content, apply the same lock-pill + disabled card.
- `src/pages/MaturitaSpeaking.tsx` / `src/pages/MaturitaSpeakingTopic.tsx` — for topics with `available: false` in `maturitaTopics.ts`, ensure card is greyed with lock pill and non-clickable (most of the list — Holidays, Transport, Sports, Shopping, Food, Nature, Arts, Education, Ostrava, Czech Republic, Prague, Home, UK, London/Washington, English-speaking countries, all literature/history topics).
- `src/pages/StartersPractice.tsx` — already locks Tests 2 & 3; swap the current lock UI to the shared pill for visual consistency, keep behaviour.
- `src/pages/ExamPreparation.tsx` — audit and apply where cards link to nothing.

**Small shared helper (optional)**
- `src/components/ComingSoonBadge.tsx` — a 15-line component exporting the lock pill so every page uses the exact same markup. Not strictly required, but avoids drift.

## Out of scope

- No content is added or removed; only presentation is changed.
- No routing, data schema, auth, or backend changes.
- Landing page / marketing sections are untouched (per your scope choice).

## Verification

- Typecheck.
- Spot-open one page per changed file in the preview to confirm: greyed tiles don't navigate, the lock pill is visible top-right, and live tiles behave unchanged.
- Confirm search on the Members Activities hub still surfaces greyed items but they render disabled.
