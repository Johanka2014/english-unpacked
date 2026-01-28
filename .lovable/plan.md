

# TenseMaster Integration Plan

## Overview

Integrate the TenseMaster grammar practice activity into the English Unpacked website, converting it from a standalone HTML file to a React component that matches the website's design system.

## What I Discovered

### TenseMaster Features:
- Interactive grammar course covering Present, Past, Present Perfect, and Past Perfect tenses
- Multiple quiz categories with 10+ questions each
- Uses Tailwind CSS with a purple/pink/indigo color scheme
- Single-page application with vanilla JavaScript navigation
- Glassmorphism design with animated blob backgrounds

### Current Website Patterns:
- React components with TypeScript
- Brand colors: Navy (#1e3a5f), Royal Blue (#2563eb), Light (#f1f5f9), Accent Orange (#f97316)
- Fonts: Merriweather for headings, system sans-serif for body
- Uses Lucide React icons (not Phosphor)
- Card-based layouts with service-card styling
- Toast notifications for feedback

## Implementation Steps

### Step 1: Create the TenseMaster React Component

Create a new file `src/pages/TenseMasterWrapper.tsx` that:
- Converts the HTML/JS logic to a React component with hooks
- Replaces Phosphor icons with Lucide React equivalents
- Applies the English Unpacked brand styling
- Maintains all quiz functionality (120+ questions across tense categories)

### Step 2: Add Route and Navigation

Update `src/App.tsx`:
- Add import for TenseMasterWrapper
- Add protected route `/tense-master`

### Step 3: Update Exam Preparation Page

Modify `src/pages/ExamPreparation.tsx`:
- Add a new section called "Grammar Practice Activities" between the Interactive Practice section and the Call to Action
- Include a card linking to TenseMaster with description
- Style to match existing practice activity buttons

### Step 4: Update Members Activities Page

Modify `src/pages/MembersActivities.tsx`:
- Add TenseMaster to the activities array
- Use Clock or BookText icon to represent grammar tenses

## CSS/Styling Updates

### Color Mapping (TenseMaster to English Unpacked):

| TenseMaster Original | English Unpacked Replacement |
|---------------------|------------------------------|
| fuchsia-400/600 | brand-royal |
| slate-900 background | brand-navy |
| purple-600 blobs | brand-royal (subtle) |
| pink-500 blobs | brand-accent (subtle) |
| indigo accent | brand-royal |
| emerald | teal-600 (keep for variety) |

### Component Styling:
- Replace glassmorphism cards with `service-card` class
- Use existing Card, Button components from shadcn/ui
- Apply `font-merriweather` to headings
- Use toast notifications for quiz results
- Remove blob animations (simpler, cleaner look)

## Component Structure

```text
TenseMasterWrapper.tsx
+-- Navigation
+-- TenseMasterHome (landing with 4 tense category cards)
    +-- TenseCategory (Present/Past/Perfect/PastPerfect)
        +-- TenseUnit (Simple/Continuous explanations)
        +-- PracticeHub (quiz category selection)
            +-- QuizView (individual quiz with questions)
                +-- QuestionCard (multiple choice)
                +-- ResultsSummary
+-- Footer
```

## Quiz Data Preservation

All 120+ questions will be preserved across:
- **Present Simple**: Habits, Facts, Schedules, State Verbs (40 questions)
- **Present Continuous**: Now, Temporary, Future Arrangements, Changes (40 questions)
- **Past Simple**: Completed Actions, Series, Duration, Habits (40 questions)
- **Past Continuous**: Interrupted, Parallel, Atmosphere (30 questions)
- **Present Perfect**: Simple vs Continuous, Experience, Duration (40+ questions)
- **Past Perfect**: Simple vs Continuous, Narrative (40+ questions)

## Technical Details

### State Management:
- useState for current view/navigation
- useState for quiz answers and scores
- useToast for feedback

### Key UI Components:
- Card (shadcn) for tense category cards
- Button (shadcn) for navigation and quiz options
- Badge for labels
- Progress bar for quiz progress

### Responsive Design:
- Mobile-first approach
- Grid layouts: 1 column mobile, 2 columns tablet, 4 columns desktop
- Touch-friendly quiz buttons

## Files to Create/Modify

| File | Action |
|------|--------|
| `src/pages/TenseMasterWrapper.tsx` | Create (new component) |
| `src/App.tsx` | Modify (add route) |
| `src/pages/ExamPreparation.tsx` | Modify (add activities section) |
| `src/pages/MembersActivities.tsx` | Modify (add TenseMaster activity) |

## New Exam Preparation Section Preview

The new "Grammar Practice Activities" section will include:
- Section heading: "Grammar Practice Activities"
- Subheading: "Master English grammar with interactive exercises"
- TenseMaster card with:
  - Clock icon
  - Title: "TenseMaster - Grammar Course"
  - Description: "Master English tenses with interactive quizzes. Practice Present, Past, Present Perfect, and Past Perfect forms."
  - Button: "Start Learning"

