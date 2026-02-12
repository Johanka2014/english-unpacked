

# Part 2 - Image Description and Comparison Section

## Overview

Build out the Part 2 (Section 2) tab on the Maturita Speaking page (`/maturita-speaking`). This section focuses on describing and comparing images, broken into three tasks that mirror the actual exam format. It will also include helpful phrase banks for students.

## What Will Be Built

### 1. Useful Phrases Section (top of Part 2)

Two collapsible phrase banks displayed before the tasks:

**Describing Images phrases** -- grouped phrases such as:
- Location: "In the background...", "In the foreground...", "On the left/right...", "In the corner...", "In the centre...", "At the top/bottom..."
- People: "There is/are...", "I can see...", "The person is wearing...", "They seem to be..."
- Actions: "He/She is doing...", "It looks like they are..."
- Atmosphere: "It looks...", "The atmosphere seems...", "It gives the impression of..."

**Comparing Images phrases** -- such as:
- "In picture 1... whereas in picture 2..."
- "Both pictures show..."
- "Unlike picture 1, picture 2..."
- "The main difference/similarity is..."
- "Compared to picture 1, picture 2..."

### 2. Three Tasks (per topic)

Each of the 28 maturita topics will get Part 2 data. The layout will use the same card grid style as Part 3 (topic cards with title, description, available/coming-soon badges).

Clicking an available topic opens its Part 2 content with three task cards:

**Task 1 (1.5 min) -- Describe a Picture**
- Instruction: "Which picture would you like to talk about? Describe it, please. Are you ready?"
- Prompt points: People, Place, Clothes, Activities, Atmosphere, Other
- Topic-specific follow-up questions (e.g. for Environment: "What's the season/weather like?", "What environmental problem can you see?")
- Display the topic's images (placeholder for now; you will upload images later)

**Task 2 (1 min) -- Compare Pictures**
- Instruction: "Have a look at both pictures once more and compare them. Are you ready?"
- Same prompt points: People, Place, Clothes, Activities, Atmosphere, Other
- Topic-specific comparison questions

**Task 3 (1.5 min) -- Topic Discussion**
- Instruction: "Now, please start talking about [topic]. Are you ready?"
- A relevant question for each topic (e.g., Environment: "What can individuals do to help protect the environment?")

### 3. Data Structure Changes

Add a new `part2` field to the `MaturitaTopic` interface in `src/data/maturitaTopics.ts`:

```text
interface Part2Task1 {
  followUpQuestions: string[];
  images?: { label: string; src: string; description: string }[];
}

interface Part2Task2 {
  comparisonQuestions: string[];
}

interface Part2Task3 {
  question: string;
}

interface Part2Data {
  task1: Part2Task1;
  task2: Part2Task2;
  task3: Part2Task3;
}
```

For the Environment topic, populate fully. For all other topics, add a `part2` object with a relevant Task 3 question and placeholder Task 1/2 questions so they show as "Coming Soon" or basic content.

### 4. Page Structure Changes

**`src/pages/MaturitaSpeaking.tsx`** -- Replace the Part 2 placeholder with:
1. Useful phrases section (two accordion items: Describing / Comparing)
2. Topic grid identical to Part 3 style (cards with Ready/Coming Soon badges)

**`src/pages/MaturitaSpeakingTopic.tsx`** -- Add a Part 2 tab (expanding from 3 tabs to 4: Learn, Practice, Part 2, Exam Practice). The Part 2 tab displays the three tasks in styled cards matching the existing exam card design.

### 5. Environment Topic Images

The uploaded environment image sheet is reference only (showing 5 exam images: deforestation, wind turbines, factory pollution, recycling bins, nature scene). These will be uploaded by the user later. For now, placeholder image slots will be shown for Environment, and no images for other topics.

## Technical Details

### Files to modify:
- `src/data/maturitaTopics.ts` -- Add Part2 interfaces and data for all topics
- `src/pages/MaturitaSpeaking.tsx` -- Replace Part 2 placeholder with phrase banks and topic grid
- `src/pages/MaturitaSpeakingTopic.tsx` -- Add Part 2 tab with 3 tasks

### Tab structure in MaturitaSpeakingTopic:
- Current: Learn | Practice | Exam Practice (3 tabs)
- New: Learn | Practice | Part 2 | Exam Practice (4 tabs, rename "Exam Practice" to "Part 3" for consistency with the exam structure)

Actually, to keep things clear and aligned with the exam: the topic page tabs should map to the exam parts. Since Part 2 content is topic-specific (images + tasks), it belongs on the topic page. The main MaturitaSpeaking page Part 2 tab will have the phrase banks plus the topic selector grid.

### Topic-specific Task 3 questions (examples for all topics):
- Environment: "What can individuals do to help protect the environment?"
- Course of Life: "What do you think is the most important stage of life?"
- Social Issues: "What social problem concerns you the most?"
- Holidays: "Which holiday is most important to you and why?"
- Transport: "What will transport look like in the future?"
- Medical Care: "How important is a healthy lifestyle to you?"
- Sports: "Should sport be compulsory at school?"
- Shopping: "Do you prefer shopping online or in shops?"
- Food: "What does a healthy diet mean to you?"
- Nature/Weather: "How does weather affect your daily life?"
- Arts: "How important is art in everyday life?"
- Education: "What would you change about the education system?"
- Ostrava: "What do you like most about living in your region?"
- Czech Republic: "What makes the Czech Republic unique?"
- Prague: "Why is Prague important for Czech history?"
- Mass Media: "How do social media influence young people?"
- Home/Housing: "What is your idea of a perfect home?"
- UK: "What do you find most interesting about British culture?"
- London/Washington: "Which city would you prefer to visit and why?"
- English-speaking countries: "Which English-speaking country would you most like to visit?"
- English Lit (early): "Why is it important to read classic literature?"
- English Lit (modern): "Which modern author do you find most interesting?"
- American Lit (early): "How does literature reflect a country's history?"
- American Lit (modern): "Which American novel would you recommend?"
- USA Geography: "What interests you most about the USA?"
- British History (early): "Which period of British history fascinates you most?"
- British History (modern): "How did the World Wars change Britain?"
- US History (early): "What was the most important event in early American history?"
- US History (modern): "How has the USA changed in the last 50 years?"

