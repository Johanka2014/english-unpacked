
# Restructure Exam Practice Tab into 4 Sections with Empty Section 2

## Overview
Update the "Exam Practice" tab in `MaturitaSpeakingTopic.tsx` to organize content into 4 distinct sections instead of 3. This mirrors the official maturita exam structure:
1. **Introduction** - Static opening script from interlocutor
2. **Section 1** - Warm-up questions organized by topic category
3. **Section 2** - Empty placeholder (to be built later)
4. **Section 3** - Topic presentation (images + task) and follow-up questions combined

## Changes Required

### Data Structure (`src/data/maturitaTopics.ts`)
Add new optional fields to `MaturitaTopic` interface:
- `interlocutorIntro: string` - The greeting script ("Hello. Sit down, please...")
- `interlocutorPart1: string` - The warm-up introduction script
- `warmUpQuestions: { category: string; questions: string[] }[]` - Array of question categories with grouped questions

Add these fields to the Environment topic data with:
- All 50 warm-up questions organized into 12 categories (Family/Relationships, Technology, Travel/Transport, Daily Life, Health, etc.)

### UI Layout (`src/pages/MaturitaSpeakingTopic.tsx`)
Replace the current single exam practice content with a 4-step structure displayed as numbered cards/sections within the tab:

**Structure:**
- Card 1: "Introduction" - Shows `interlocutorIntro` text in a read-only card
- Card 2: "Section 1 – Warm-Up" - Shows `interlocutorPart1` script + accordion of warm-up question categories
- Card 3: "Section 2" - Empty placeholder with message "Coming soon"
- Card 4: "Section 3 – Topic Presentation & Follow-Up" - Combines current task description + image grid + follow-up questions

**Visual approach:**
- Each section appears as a numbered card (1/2/3/4) with clear visual separation
- Accordions within Section 1 to collapse/expand question categories
- Section 2 shows a simple placeholder message
- Section 3 displays images and follow-up questions (current content)

### Rendering Logic
- All 4 cards render within the single "Exam Practice" tab
- No routing changes needed - stays on same page
- Use Accordion component for Section 1 question grouping
- Use Card component for section wrappers
- Follow existing styling patterns from Learn and Practice tabs

## Technical Implementation Order
1. Update `MaturitaTopic` interface to include new fields
2. Add data for Environment topic (interlocutor scripts + 50 warm-up questions in 12 categories)
3. Create new UI components/layout for 4-section structure in exam tab
4. Ensure responsive design works on mobile (grid layout may need adjustment)

## Content Organization for Warm-Up Questions
The 50+ questions will be grouped into these categories:
- School and Education
- Family and Relationships
- Pets and Nature
- Technology and Internet
- Travel and Transport
- Shopping and Money
- Daily Life and Leisure
- Home and Housing
- Health and Wellbeing
- Culture and Media
- Weather and Seasons
- Personal Qualities
