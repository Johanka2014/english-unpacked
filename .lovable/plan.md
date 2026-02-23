

# Prepositions of Time Practice - Implementation Plan

## Overview

Add a new "Prepositions of Time" grammar practice module following the exact same pattern as the Verb Pattern Practice (data file + practice page + tile + route).

---

## Part 1: Create the Data File

**New file: `src/data/prepositionsOfTimeData.ts`**

A data file with the same structure as `verbPatternData.ts` containing modules for each preposition group:

| Module | Title | Subtitle | Content |
|---|---|---|---|
| 1 | On, In, At | days, months, times | on Monday, in June, at 6 o'clock, at night, at the weekend |
| 2 | From ... To / Till / Until | time ranges | from Monday to Friday, until 5 o'clock |
| 3 | Past | after a point in time | past midnight, half past two |
| 4 | By | no later than | by Friday, by 6 o'clock, by the time... |
| 5 | Since and For | duration vs. starting point | since 2010, for three years |
| 6 | Ago | looking back from now | two days ago, a long time ago |
| 7 | Before / Prior To | earlier than | before lunch, prior to the meeting |

Each module will have:
- An `explanation` array with rules and examples
- An optional `tip` (info/warning)
- 10 fill-in-the-blank `questions` with correct answers

---

## Part 2: Create the Practice Page

**New file: `src/pages/PrepositionsOfTimePractice.tsx`**

A direct copy of the `VerbPatternPractice.tsx` structure:
- Dashboard view: grid of module cards, each showing the preposition group title and subtitle
- Unit detail view: explanation panel + quiz panel with text inputs, check/reset, score display
- "Back to Practice Activities" link pointing to `/members/activities?tab=grammar`
- Badge label: "Grammar Practice"
- Heading: "Prepositions of Time"
- Same styling (gradients, brand colours, progress bar)

---

## Part 3: Add Tile to Grammar Section

**Edit: `src/pages/MembersActivities.tsx`**

Add a third entry to the `grammarActivities` array:

- Title: "Prepositions of Time"
- Description: "Practice prepositions of time: on, in, at, from, to, past, till, by, since, for, ago and before"
- Icon: `Clock` (already imported) or a new icon like `CalendarClock`
- Path: `/prepositions-of-time`
- Colour: `text-amber-600`

---

## Part 4: Add Route

**Edit: `src/App.tsx`**

- Add lazy import: `const PrepositionsOfTimePractice = lazy(() => import("./pages/PrepositionsOfTimePractice"));`
- Add protected route: `<Route path="/prepositions-of-time" element={<ProtectedRoute><PrepositionsOfTimePractice /></ProtectedRoute>} />`

---

## Files Summary

| File | Action |
|---|---|
| `src/data/prepositionsOfTimeData.ts` | Create - all exercise data |
| `src/pages/PrepositionsOfTimePractice.tsx` | Create - practice page (mirrors VerbPatternPractice) |
| `src/pages/MembersActivities.tsx` | Edit - add tile to grammarActivities array |
| `src/App.tsx` | Edit - add lazy import and protected route |

No new dependencies required.

