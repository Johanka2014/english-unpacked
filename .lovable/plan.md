

# Business Vocabulary Section -- Framework Plan

## Overview

Build a new "Business Vocabulary" section behind the login wall, structured as a three-level hierarchy:

1. **Hub page** (`/business-vocabulary`) -- Section tiles (e.g. "People and Work", "Marketing", etc.)
2. **Section page** (`/business-vocabulary/:sectionId`) -- Topic tiles within that section (e.g. "Work and Jobs", "Ways of Working")
3. **Topic page** (`/business-vocabulary/:sectionId/:topicId`) -- Three tiles: "Theory", "Practice", "Tests"

Each level uses the Everyday Conversations card style: image with gradient overlay, hover-zoom, icon badge.

For the initial framework, we will build out the full structure with placeholder content for all sections/topics, and fully flesh out Topic 1 ("Work and Jobs") with the Theory, Practice, and Test content from the uploaded PDFs.

---

## Textbook Structure (from contents page)

Based on the contents, the book groups into these sections:

| Section | Topics |
|---|---|
| **People and Work** | 1 Work and jobs, 2 Ways of working, 3 Recruitment and selection, 4 Skills and qualifications, 5 Pay and benefits, 6 People and workplaces, 7 The career ladder, 8 Problems at work, 9 Businesspeople and business leaders |
| **Company Structure** | 10 Organizations 1, 11 Organizations 2, 12 Manufacturing and services |
| **Production** | 13 Innovation and invention, 14 Making things, 15 Materials and suppliers, 16 Business philosophies |
| **Marketing** | 17 Buyers, sellers and the market, 18 Markets and competitors, 19 Marketing and market orientation, 20 Products and brands, 21 Price, 22 Place, 23 Promotion, 24 The Internet and e-commerce |
| **Money** | 25 Sales and costs, 26 Profitability and unprofitability, 27 Getting paid, 28 Assets, liabilities and the balance sheet, 29 The bottom line, 30 Share capital and debt, 31 Personal finance, 32 Financial centres, 33 Trading, 34 Indicators 1, 35 Indicators 2 |
| **Doing the Right Thing** | 36 Wrongdoing and corruption, 37 Ethics |
| **Business Skills** | 38 Time and time management, 39 Stress and stress management, 40 Leadership and management styles, 41 Culture |
| **Communication** | 42 Telephoning 1-3, 43 Emails, 44 Faxes, 45 Meetings 1-5, 46 Presentations 1-2, 47 Negotiations 1-5 |

---

## Technical Plan

### 1. Data file: `src/data/businessVocabularyData.ts`

Export a typed structure:

```typescript
interface BusinessVocabTopic {
  id: string;
  number: number;
  title: string;
  subtopics: string[];  // e.g. ["A What do you do?", "B Word combinations with 'work'"]
  theory?: { ... };     // content for Theory tab (populated per topic)
  practice?: { ... };   // content for Practice tab
  test?: { ... };       // content for Test tab
}

interface BusinessVocabSection {
  id: string;
  title: string;
  description: string;
  icon: string;         // lucide icon name
  image: string;        // placeholder initially
  topics: BusinessVocabTopic[];
}
```

All sections and topics defined with metadata. Only Topic 1 (Work and Jobs) will have full theory/practice/test content initially.

### 2. Hub page: `src/pages/BusinessVocabulary.tsx`

- Navigation + Footer
- Hero banner (similar to Everyday Conversations style)
- Grid of section cards with images, gradient overlays, hover-zoom
- Each card links to `/business-vocabulary/:sectionId`
- Back link to `/members/activities?tab=vocabulary`

### 3. Section page: `src/pages/BusinessVocabularySection.tsx`

- Reads `:sectionId` from URL params
- Displays topic tiles in the same card style
- Each card links to `/business-vocabulary/:sectionId/:topicId`
- Back link to `/business-vocabulary`

### 4. Topic page: `src/pages/BusinessVocabularyTopic.tsx`

- Reads `:sectionId` and `:topicId` from URL params
- Shows three large tiles: "Theory", "Practice", "Tests"
- Each tile opens an expandable section or tab on the same page
- For Topic 1, includes:
  - **Theory**: The textbook explanations (sections A, B, C) formatted as styled content
  - **Practice**: Exercises 1.1, 1.2, 1.3 as interactive fill-in-the-blank
  - **Tests**: Exercises 1.1-1.4 from the test book as interactive quizzes
- For other topics: "Coming soon" placeholder
- Back link to the section page

### 5. Routes: `src/App.tsx`

Add three lazy-loaded protected routes:
- `/business-vocabulary`
- `/business-vocabulary/:sectionId`
- `/business-vocabulary/:sectionId/:topicId`

### 6. Members Activities: `src/pages/MembersActivities.tsx`

Update the existing "Business Vocabulary Practice" tile in `vocabularyActivities` to point to `/business-vocabulary` instead of `/business-vocab-app`.

---

## Files Summary

| File | Action |
|---|---|
| `src/data/businessVocabularyData.ts` | Create -- all sections/topics structure + Topic 1 content |
| `src/pages/BusinessVocabulary.tsx` | Create -- hub page with section tiles |
| `src/pages/BusinessVocabularySection.tsx` | Create -- section page with topic tiles |
| `src/pages/BusinessVocabularyTopic.tsx` | Create -- topic detail with Theory/Practice/Tests |
| `src/App.tsx` | Edit -- add 3 new protected routes |
| `src/pages/MembersActivities.tsx` | Edit -- update vocabulary tile path |

No new dependencies needed. Existing images from `src/assets/` (e.g. `business-meeting.webp`) will be reused as placeholder section images initially.

