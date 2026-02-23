

# Restructure: Prepositions Hub Page

## Overview

Replace the current "Prepositions of Time" tile in the Grammar tab with a single "Prepositions" tile that links to a new hub page. The hub page contains two cards: one for Prepositions of Time (units 1-7) and one for Verbs & Adjectives + Prepositions. Unit 8 and its dropdown exercise are removed from the Prepositions of Time page and placed in their own dedicated page.

---

## Changes

### 1. Replace Grammar tile

**File: `src/pages/MembersActivities.tsx`**

- Change the existing "Prepositions of Time" entry in `grammarActivities` to:
  - Title: "Prepositions"
  - Description: "Practice prepositions of time, and verb & adjective + preposition combinations"
  - Path: `/prepositions` (new hub page)
  - Keep `Clock` icon and `text-amber-600` colour

### 2. Create Prepositions hub page

**New file: `src/pages/Prepositions.tsx`**

A simple page with Navigation, Footer, a "Back to Practice Activities" link (to `/members/activities?tab=grammar`), and two activity cards:

| Card | Path |
|---|---|
| Prepositions of Time | `/prepositions-of-time` |
| Verbs & Adjectives + Prepositions | `/verb-adjective-prepositions` |

### 3. Separate Unit 8 data

**File: `src/data/prepositionsOfTimeData.ts`**

- Remove module with `id: 8` from the `prepositionModules` array
- Export it separately as `verbAdjectivePrepositionModule`

### 4. Clean up Prepositions of Time page

**File: `src/pages/PrepositionsOfTimePractice.tsx`**

- Remove the `VerbPrepositionDropdownExercise` import
- Remove the `{selectedUnit.id === 8 && <VerbPrepositionDropdownExercise />}` line
- Change "Back to Practice Activities" link from `/members/activities?tab=grammar` to `/prepositions`

### 5. Create Verb & Adjective Prepositions page

**New file: `src/pages/VerbAdjectivePrepositions.tsx`**

A single-unit practice page (no dashboard grid needed since there is only one unit) showing:
- Explanation panel with rules from `verbAdjectivePrepositionModule`
- Fill-in-the-blank quiz (same pattern as PrepositionsOfTimePractice unit detail)
- The `VerbPrepositionDropdownExercise` dropdown exercise below the quiz
- "Back" link pointing to `/prepositions`

### 6. Add routes

**File: `src/App.tsx`**

- Add lazy imports for `Prepositions` and `VerbAdjectivePrepositions`
- Add two protected routes: `/prepositions` and `/verb-adjective-prepositions`

---

## Files Summary

| File | Action |
|---|---|
| `src/pages/MembersActivities.tsx` | Edit - change tile to "Prepositions" pointing to `/prepositions` |
| `src/pages/Prepositions.tsx` | Create - hub page with two cards |
| `src/data/prepositionsOfTimeData.ts` | Edit - extract Unit 8 into separate export |
| `src/pages/PrepositionsOfTimePractice.tsx` | Edit - remove Unit 8 references, update back link |
| `src/pages/VerbAdjectivePrepositions.tsx` | Create - dedicated practice page for verb/adjective prepositions |
| `src/App.tsx` | Edit - add two new routes |

No new dependencies required.

