

# Add Verbs and Adjectives + Prepositions Section

## Overview

Add a new Unit 8 to the Prepositions practice module covering verb/adjective + preposition combinations, with both a fill-in-the-blank quiz (existing pattern) and a dropdown exercise.

---

## Changes

### 1. Add Unit 8 to Data File

**File: `src/data/prepositionsOfTimeData.ts`**

Add a new module to the `prepositionModules` array:

- **id**: 8
- **title**: "Verbs & Adjectives + Prepositions"
- **subtitle**: "talk about/to, wait for, agree with, work in/for/as, apply for/to"
- **explanation**: Rules covering all the verb + preposition combinations the user listed:
  - talk about (topics) vs talk to (people)
  - wait for, agree with, ask for, borrow from
  - write for (purpose) vs write to (person)
  - listen to, pay for
  - work in (inside a company) vs work for (employed by) vs work as (role)
  - apply for (a job) vs apply to (a company)
- **tip**: Info tip highlighting the most common confusions
- **questions**: 10 fill-in-the-blank sentences testing all the prepositions (about, to, for, with, from, in, as)

### 2. Add Dropdown Exercise for Unit 8

**New file: `src/components/VerbPrepositionDropdownExercise.tsx`**

A dropdown exercise component (same structure as `PrepositionDropdownExercise.tsx`) with:

- **OPTIONS**: `['about', 'to', 'for', 'with', 'from', 'in', 'as']`
- **10 sentences** using the verb+preposition combinations, e.g.:
  - "Can we talk ______ the project?" (about)
  - "I need to talk ______ my manager." (to)
  - "She works ______ a large company." (for)
  - "He works ______ a software engineer." (as)
  - "I applied ______ the marketing position." (for)
  - "She applied ______ that university." (to)
  - etc.

### 3. Show Dropdown Exercise in Unit 8

**File: `src/pages/PrepositionsOfTimePractice.tsx`**

- Import the new `VerbPrepositionDropdownExercise` component
- Add conditional rendering: `{selectedUnit.id === 8 && <VerbPrepositionDropdownExercise />}` alongside the existing Unit 1 condition

---

## Files Summary

| File | Action |
|---|---|
| `src/data/prepositionsOfTimeData.ts` | Edit - add module 8 |
| `src/components/VerbPrepositionDropdownExercise.tsx` | Create - dropdown exercise |
| `src/pages/PrepositionsOfTimePractice.tsx` | Edit - import and render new dropdown for unit 8 |

No new dependencies or routes needed.

