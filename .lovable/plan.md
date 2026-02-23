
# Maturita Practice Section - Implementation Plan

## Overview

Three changes are needed:

1. Add a new "Maturita" tab to the Members Activities page with a link to the full Maturita Speaking Practice
2. On the public Exam Preparation page, filter the Maturita Speaking Practice section (Part 2 and Part 3 topic grids) to only show four topics: Environment, Medical Care, Course of Life, and Social Issues
3. Add a "Login to see more topics" button beneath those filtered grids that navigates to the login page

---

## Part 1: Add "Maturita" Tab to Members Activities

**File: `src/pages/MembersActivities.tsx`**

- Add a new `maturitaActivities` array with one entry:
  - Title: "Maturita Speaking Practice"
  - Description: "Master all 28 maturita speaking topics with structured learning, sample sentences, and official exam practice"
  - Icon: `GraduationCap` (or `BookOpen`)
  - Path: `/maturita-speaking`
  - Color: `text-red-600` (to differentiate from existing tabs)
- Change the tab grid from `grid-cols-3` to `grid-cols-4`
- Add a fourth tab trigger: "Maturita"
- Add a fourth `TabsContent` rendering the maturita activities grid

---

## Part 2: Filter Topics on the Exam Preparation Page

**File: `src/pages/ExamPreparation.tsx`**

The Exam Preparation page currently links to `/maturita-speaking` which shows all 28 topics. Instead of linking away, the Maturita section on this page needs to be expanded to show a limited preview of topics inline.

- Import `maturitaTopics` from the data file
- Define a filter list: `["environment", "medical-care", "course-of-life", "social-issues"]`
- In the existing Maturita Speaking Practice section (around line 187-215), keep the current heading and description text but update it to mention that a preview of selected topics is shown below
- Below the existing text and "Explore Maturita Topics" button, add a topic card grid (same styling as `MaturitaSpeaking.tsx` Part 3 grid) showing only the four filtered topics
- Each available topic card links to `/maturita-speaking/{topicId}`
- Unavailable topics (`course-of-life`, `social-issues`) show as "Coming Soon" cards with a lock icon, matching the existing pattern
- Below the grid, add a prominent "Login to see more topics" button styled with `bg-brand-royal hover:bg-brand-navy` that links to `/auth`

---

## Part 3: Routing

No routing changes needed - `/maturita-speaking` is already a public route and the Members Activities page already exists as a protected route.

---

## Files to Edit

| File | Change |
|---|---|
| `src/pages/MembersActivities.tsx` | Add "Maturita" tab with link to full Maturita Speaking Practice |
| `src/pages/ExamPreparation.tsx` | Add filtered topic grid (4 topics only) and "Login to see more topics" button |

---

## Technical Details

- The four topic IDs to show on Exam Preparation: `environment`, `medical-care`, `course-of-life`, `social-issues`
- Currently only `environment` and `medical-care` have `available: true`; `course-of-life` and `social-issues` have `available: false` and will display as "Coming Soon" cards
- The topic card grid reuses the same card pattern from `MaturitaSpeaking.tsx` (thumbnail image, gradient overlay, icon badge, title, description)
- The "Login to see more topics" button uses `Link` from react-router-dom pointing to `/auth`
- No new components or data files needed - everything uses existing imports
