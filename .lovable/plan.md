

# Verb Pattern Practice Module

## Overview
Convert the uploaded HTML-based "English Grammar Course (Units 53-68)" into a React component and integrate it into the Practice Activities page under the Grammar Practice tab, alongside the existing TenseMaster module.

## What Will Be Built

A new interactive **Verb Pattern Practice** page where students can:
- Browse 16 grammar units (Units 53-68) covering verb patterns like "Verb + -ing", "Verb + to...", "Prefer and Would Rather", etc.
- View grammar explanations for each unit
- Complete fill-in-the-blank quizzes with instant feedback
- Navigate between units with Previous/Next buttons

## Changes

### 1. New Data File: `src/data/verbPatternData.ts`
- Extract all 16 grammar modules (Units 53-68) from the uploaded file into a typed TypeScript data file
- Each module contains: id, title, subtitle, explanation (as plain text/structured data rather than HTML strings), and 10 questions with answers

### 2. New Page Component: `src/pages/VerbPatternPractice.tsx`
- Follow the same structural pattern as TenseMasterWrapper (Navigation, Footer, state management)
- **Dashboard view**: Grid of 16 unit cards showing unit number, title, and subtitle
- **Unit view**: Two-column layout with explanation panel (left/top) and interactive quiz panel (right/bottom)
- Quiz uses text inputs where students type answers, with a "Check Answers" button that shows correct/incorrect feedback
- Previous/Next navigation between units, plus a back-to-dashboard button
- Styled consistently with the site's existing card, badge, and button components

### 3. Update `src/pages/MembersActivities.tsx`
- Add "Verb Pattern Practice" to the `grammarActivities` array with an appropriate icon (e.g., `Pen` or `PenLine` from lucide-react) and path `/verb-pattern-practice`

### 4. Update `src/App.tsx`
- Add a new protected route: `/verb-pattern-practice` pointing to the new VerbPatternPractice component

## Technical Details

- The TenseMaster pattern will be followed: single-file page component with inline data or imported data, using existing UI components (Card, Button, Badge, Input, Progress)
- Explanation content will be rendered using structured React JSX rather than raw HTML `dangerouslySetInnerHTML`
- Answer checking will be case-insensitive string comparison
- The component will use `useState` for view state (dashboard vs. unit detail) and quiz answers/feedback

