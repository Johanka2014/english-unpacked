
# Maturita Speaking Practice -- Environment Topic

## Overview
Add a new "Maturita Speaking Practice" section to the Exam Preparation page, positioned above the three horizontal feature cards. This section links to a new dedicated page (`/maturita-speaking`) that is publicly accessible (no login required). The page will list all 28 maturita topics as clickable cards, with the Environment topic fully built out as a working example. Other topics will show as "coming soon."

## What the user will see

### On the Exam Preparation page
- A new section titled "Maturita Speaking Practice" between the Interactive Online Practice content and the three feature cards
- Brief description and a button linking to the new Maturita Speaking page

### On the Maturita Speaking page (`/maturita-speaking`)
- Hero section with title "Maturita Speaking Practice"
- Grid of 28 topic cards (from the PDF). Only "Environment" is active; the rest show "Coming Soon"
- Clicking "Environment" opens a dedicated topic page

### On the Environment topic page (`/maturita-speaking/environment`)
Three tabbed sections using the existing Accordion and Tabs components:

1. **Learn** -- Key information broken into sub-topics using accordions:
   - What is an ecosystem?
   - Environmental problems in your region
   - Global warming and the Greenhouse Effect
   - The ozone layer
   - Rainforests
   - Extreme weather
   - Chemicals at home
   - Environmentally friendly products
   - Personal contribution to the environment
   - Recycling terminology
   - Alternative energy

2. **Practice Sentences** -- Sample Q&A pairs from the Bridge PDF, displayed as expandable cards where students can read a question and reveal a model answer

3. **Exam Practice** -- The official exam task format from the third PDF:
   - The task description and prompt points
   - The 6 images (3A-3F) displayed in a grid
   - The follow-up questions listed for self-practice

## Technical Details

### New files to create
- `src/pages/MaturitaSpeaking.tsx` -- Topic listing page with 28 topic cards
- `src/pages/MaturitaSpeakingTopic.tsx` -- Individual topic page with Learn/Practice/Exam tabs
- `src/data/maturitaTopics.ts` -- Data file with all 28 topic titles/descriptions and full Environment content

### Files to modify
- `src/App.tsx` -- Add two new public routes: `/maturita-speaking` and `/maturita-speaking/:topicId`
- `src/pages/ExamPreparation.tsx` -- Add the new "Maturita Speaking Practice" section above the feature cards

### Images
- Copy the 6 exam practice images from the parsed Environment PDF into `src/assets/` for use on the exam practice tab

### Routing
- Both new routes are public (no `ProtectedRoute` wrapper), matching the requirement that no login is needed

### Component patterns
- Reuses existing UI components: Card, Tabs, Accordion, Button
- Follows the same page layout pattern as EverydayConversations (Navigation + hero + content + Footer)
- Topic data is stored in a TypeScript data file, making it easy to add more topics later

### Content structure for Environment topic data
```text
Topic: Environment
  Learn:
    - Accordion items for each sub-topic with explanatory content
  Practice:
    - 15+ Q&A pairs from Bridge PDF
  Exam:
    - Task description
    - 6 images in grid
    - 13 follow-up questions
```
