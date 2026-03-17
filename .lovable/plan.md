

## Young Learners Practice Tests for Starters

### Overview

Create a new "Young Learners" tab in the Practice Activities page, with a "Practice Tests for Starters" tile linking to a colorful, child-friendly test section. Test 1 will have three tabs: Listening (4 parts), Reading & Writing (5 parts), and Speaking. The section will use the Fredoka font (already loaded for English for Kids) and a vibrant color palette with pinks, greens, yellows, and purples.

### Structure

```text
/members/activities (Young Learners tab)
  └── /starters-practice (hub — future tests 2, 3)
        └── /starters-practice/test-1 (tabs: Listening | Reading & Writing | Speaking)
```

### Test 1 Content Breakdown

**Listening** (4 parts, each with audio player):
- Part 1: "Listen and draw lines" — drag-drop matching names to people in image
- Part 2: "Write a name or number" — fill-in-the-blank (5 questions)
- Part 3: "Tick the box" — multiple choice with 3 image options per question (5 Qs)
- Part 4: "Listen and colour" — instruction-only with audio (non-interactive, guidance text)

**Reading & Writing** (5 parts):
- Part 1: "Tick or cross" — image + statement, click tick/cross buttons (5 Qs)
- Part 2: "Write yes or no" — scene image, type yes/no (5 Qs)
- Part 3: "Unscramble letters" — image + jumbled letters, type the word (5 Qs)
- Part 4: "Fill the gaps from word box" — Lizards passage, drag words into gaps (5 Qs)
- Part 5: "One-word answers" — scene image, type one word per question (5 Qs)

**Speaking**:
- Display scene picture + object cards grid + audio player
- Guided instructions for teacher/parent-led practice

### Assets

- Copy all relevant PDF page images (scene pictures, individual question images) into `src/assets/starters/`
- Copy 5 audio files into `public/audio/starters/`

### Visual Design — More Colorful

- Fredoka font for headings (already available via English for Kids)
- Gradient hero banners with playful colors (pink-to-purple, green-to-teal)
- Colorful part cards with distinct background colors per part (green, blue, orange, purple)
- Rounded corners, larger fonts, emoji-style icons
- Colorful check/cross feedback animations
- Pastel card backgrounds instead of white

### Files to Create/Edit

| File | Action |
|---|---|
| `src/assets/starters/` | Copy ~25 images from parsed PDF |
| `public/audio/starters/` | Copy 5 audio MP3 files |
| `src/data/startersTestData.ts` | Test 1 data: all parts, questions, answers |
| `src/pages/StartersPractice.tsx` | Hub page — Test 1/2/3 tiles |
| `src/pages/StartersTest.tsx` | Test page with Listening/R&W/Speaking tabs |
| `src/components/starters/ListeningPart1.tsx` | Draw lines — drag name labels onto image |
| `src/components/starters/ListeningPart2.tsx` | Fill-in name/number |
| `src/components/starters/ListeningPart3.tsx` | Multiple choice with images |
| `src/components/starters/ListeningPart4.tsx` | Listen and colour (audio + instructions) |
| `src/components/starters/ReadingPart1.tsx` | Tick/cross with images |
| `src/components/starters/ReadingPart2.tsx` | Yes/no from scene |
| `src/components/starters/ReadingPart3.tsx` | Unscramble letters |
| `src/components/starters/ReadingPart4.tsx` | Fill gaps from word box |
| `src/components/starters/ReadingPart5.tsx` | One-word answers from scene |
| `src/components/starters/SpeakingSection.tsx` | Scene + object cards + audio |
| `src/pages/MembersActivities.tsx` | Add "Young Learners" tab (6th tab) |
| `src/App.tsx` | Add 2 new protected routes |

### Implementation Notes

- Listening Part 1 (draw lines): Simplified to a click-to-match interaction — click a name, then click a person in the image area, rather than literal line-drawing
- Listening Part 4 (colour): Non-interactive — displays the image with audio and instructions for offline colouring activity
- Reading Part 3 images (kite, train, robot, lorry, helicopter) and Part 1 images (fish, kiwis, piano, sofa, helicopters) will be extracted from the PDF pages
- All exercises include a "Check Answers" button with green/red feedback

