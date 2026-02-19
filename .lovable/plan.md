# English for Presentations - Implementation Plan

## Overview

This plan covers two changes:

1. Replace the "Interactive Learning Activities" banner on the Business English page with a new "English for Presentations" banner
2. Create a new `/presentations` page by converting your uploaded HTML into a React component that follows the color scheme of the English Unpacked and the layout conventions

---

## Part 1: Update the Business English Page

Replace the current "Interactive Learning Activities" section (lines 175-241 in `BusinessEnglish.tsx`) with an "English for Presentations" section:

- New heading: "English for Presentations"
- New description text about mastering presentation skills (welcoming audiences, structuring talks, attention-grabbing openings, dealing with nervousness)
- Button linking to `/presentations` with a "Presentation" icon
- Keep the same two-column layout with image on one side, text on the other
  &nbsp;
- Use the existing `businessVocabAppImage` as a placeholder or reference one of the presentation images from the external source

---

## Part 2: Create the Presentations Page

Create a new page at `src/pages/PresentationSkills.tsx` as a protected route at `/presentations`.

### Structure

The page will follow the same pattern as `BusinessTravel.tsx`:

- Navigation + Footer wrapper
- Hero section with the site's hero background image
- SEO component with structured data
- All 20+ activity sections converted from vanilla HTML/JS to React components

### Activity Types to Convert

The uploaded HTML contains these interactive exercises, all converted to React with `useState`/`useRef`:

1. **Starter** - Discussion questions with image (static content)
2. **Fill-in-the-Blanks** - Text inputs with audio players, check answers button
3. **Drag-and-Drop Categorization** - Phrases dragged into category zones
4. **Formal vs. Informal Matching** - Click-to-match two columns
5. **Ordering an Introduction** - Drag sentences into correct order
6. **Structuring Info (1)** - Static reference content (grammar patterns)
7. **Sentence Completion** - Click-to-match sentence starts with ends
8. **Structuring Info (2)** - Static reference content with image
9. **Structuring Activity (3)** - Drag words into sentence gaps
10. **Prepositions Practice** - Drag prepositions into gaps
11. **Listening and Ordering** - Audio + drag to reorder
12. **Point Ordering** - Drag points into order
13. **Replacing Phrases** - Drag replacement words into gaps
14. **Organization Info** - Static reference (timing, handouts, questions)
15. **Matching Sentences** - Click-to-match sentence halves
16. **Listening Completion** - Audio + fill-in-the-blank inputs
17. **Attention-Grabbing Openings** - Three-column matching
18. **Attention Grabbers Quiz** - Multiple choice radio buttons
19. **Word Order Practice** - Drag words to form sentences
20. **Checklist** - Static checklist for introductions
21. **Dealing with Nervousness** - Reading comprehension + discussion questions

### Design Adaptation

All activities will use the site's design system:

- `Card` and `CardContent` components for activity containers (replacing the brown `activity-card` style)
- Brand colors: `brand-royal`, `brand-navy` instead of brown tones
- `Button` component with `bg-brand-royal hover:bg-brand-navy` for check buttons
- Correct answers: green borders/backgrounds
- Incorrect answers: red borders/backgrounds
- Alternating section backgrounds: white and `bg-gradient-to-b from-blue-50 to-white`
- `font-merriweather` for headings
- Audio players reference the external GitHub-hosted MP3 files
- Images reference the external GitHub-hosted PNG files

### File Structure

Due to the complexity (20+ activities), the code will be split:

```text
src/
  pages/
    PresentationSkills.tsx          -- Main page with hero, nav, layout
  data/
    presentationActivitiesData.ts   -- All exercise data (fill-in-blanks, matching pairs, ordering, etc.)
  components/
    presentations/
      FillInBlanks.tsx              -- Fill-in-the-blank with audio
      DragDropCategorize.tsx        -- Drag phrases into categories  
      MatchingExercise.tsx          -- Click-to-match two columns
      OrderingExercise.tsx          -- Drag-to-reorder sentences
      DragFillGaps.tsx              -- Drag words into sentence gaps
      MultipleChoiceQuiz.tsx        -- Radio button quiz
      WordOrderExercise.tsx         -- Drag words to form sentences
      InfoSection.tsx               -- Static reference content sections
```

### Routing

- Add lazy import in `App.tsx`: `const PresentationSkills = lazy(() => import("./pages/PresentationSkills"));`
- Add protected route: `<Route path="/presentations" element={<ProtectedRoute><PresentationSkills /></ProtectedRoute>} />`

---

## Technical Notes

- All exercise data (answers, phrases, sentence pairs) is extracted from the uploaded HTML's JavaScript and placed in a dedicated data file
- Drag-and-drop will use the HTML5 Drag and Drop API (same approach as the source HTML), implemented via React event handlers
- The hamburger navigation menu from the source HTML will be replaced by the site's existing `Navigation` component
- External audio files (`https://johanka2014.github.io/presentations/*.mp3`) and images (`https://johanka2014.github.io/presentations/*.png`) will be referenced directly via URL
- No new dependencies required