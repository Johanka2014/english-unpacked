## Goal

Add a new **Engineering** tab on `/members/activities` containing one tile, **Cambridge English for Engineering**, that opens a full course mirroring the existing HR English layout but structured around the PDF's own 4 sub-sections per unit. Audio activities are stubbed with a disabled player + "Audio coming soon" note until files are uploaded.

## Information architecture

```text
/engineering-english                       → 10-unit landing grid
/engineering-english/:unitId               → unit page with 4 sub-section cards
/engineering-english/:unitId/:sectionId    → activities for that sub-section
```

The 10 units and their 4 sub-sections come straight from the PDF contents (e.g. Unit 1: Describing technical functions and applications · Explaining how technology works · Emphasising technical advantages · Simplifying and illustrating technical explanations). Each sub-section embeds the listenings and readings that belong to it, plus the printed exercises (matching, gap-fill, multiple choice, discussion prompts).

## Files

**New tab + tile**
- `src/pages/MembersActivities.tsx` — add `engineering` tab + `engineeringActivities` array with one tile linking to `/engineering-english`.

**Routing**
- `src/App.tsx` — lazy-load 3 new pages and add the 3 routes above inside `<ProtectedRoute>`.

**Data**
- `src/data/engineeringData.ts` — typed `engineeringUnits: EngineeringUnit[]` with `id`, `title`, `description`, `icon`, and a `sections` array of `{ id, title, component }`. All copy (instructions, items, options, answer keys) comes from the SB PDF; teacher notes/answers from the TB PDF are used to mark correct answers in the interactive widgets.

**Page shells (mirror HR English)**
- `src/pages/EngineeringEnglish.tsx` — landing grid of 10 unit cards.
- `src/pages/EngineeringEnglishUnit.tsx` — 4 sub-section cards for the chosen unit.
- `src/pages/EngineeringEnglishSection.tsx` — renders the sub-section's component with prev/next navigation and `?tab=` persistence (same pattern as `HREnglishSkill`).

**Activity components** (`src/components/engineering/`) — one component per sub-section, 40 in total: `Unit1Section1.tsx` … `Unit10Section4.tsx`. Each composes existing presentation primitives:
- `MatchingExercise`, `MultipleChoiceQuiz`, `FillInBlanks`, `DragDropCategorize`, `OrderingExercise`, `WordOrderExercise`, `ThreeColumnMatching`, `InfoSection` from `src/components/presentations/`.
- A new shared `EngineeringAudio.tsx` that renders a disabled `<audio>` control with the caption "🎧 Audio coming soon — listening transcript and tasks below" so the section is usable from printed prompts until MP3s arrive.
- Reading passages render in `InfoSection` cards followed by their comprehension exercise.

## Styling

Reuses the HR English look (white background, navy/royal blue, Merriweather headings) — no new tokens. Tile on the Practice page uses an engineering icon (`Wrench` from lucide-react).

## Out of scope

- No audio uploads / no audio asset wiring (user will upload later — when they do, swap the placeholder `src` in each section's `EngineeringAudio` for the asset URL).
- No DB / RLS changes; content is static under `src/data/`.
- No changes to security memory or other unrelated areas.

## Verification

After build: open `/members/activities` → Engineering tab → tile → Unit 1 → each of the 4 sub-sections; spot-check Unit 5 and Unit 10 routes; confirm prev/next works across sub-section and unit boundaries and that the disabled audio placeholder renders in every listening activity.
