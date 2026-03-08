

## Plan: Business Benchmark Section Framework

### Structure from the Textbook

The book has **24 modules**, each containing up to 6 skills: Reading, Listening, Writing, Speaking, Vocabulary, Grammar. The hierarchy will be:

```text
Practice Activities
  └─ "Business" tab (new)
       └─ "Business Benchmark Pre-Int to Int" tile
            └─ Hub page: 24 module tiles
                 └─ Module page: skill tiles (Reading, Listening, etc.)
                      └─ Skill page: content (placeholder for now)
```

### Modules (from contents)

| # | Module | # | Module |
|---|--------|---|--------|
| 1 | The Working Day | 13 | Developing a Network |
| 2 | Corporate Culture | 14 | Cultural Issues |
| 3 | Company History | 15 | Teamwork |
| 4 | The Internet | 16 | Entertaining |
| 5 | Describing Equipment | 17 | Describing Trends |
| 6 | Processes and Procedures | 18 | Company Finances |
| 7 | Distribution and Delivery | 19 | Investments |
| 8 | Advertising and Marketing | 20 | Starting Up |
| 9 | Making Arrangements | 21 | Job Applications |
| 10 | Transport | 22 | Recruitment |
| 11 | Business Accommodation | 23 | Staff Development |
| 12 | Out of the Office | 24 | Staff Facts and Figures |

### Files to Create/Edit

| File | Action |
|------|--------|
| `src/data/businessBenchmarkData.ts` | **Create** -- all 24 modules with their skill descriptions from the contents page, typed interfaces |
| `src/pages/BusinessBenchmark.tsx` | **Create** -- hub page with hero (standard hero-background.webp, parallax), 24 module tiles with gradient overlays, hover-zoom, icons |
| `src/pages/BusinessBenchmarkModule.tsx` | **Create** -- module page showing skill tiles (Reading, Listening, Writing, Speaking, Vocabulary, Grammar) with "Coming soon" badges on empty ones |
| `src/pages/BusinessBenchmarkSkill.tsx` | **Create** -- skill detail page, placeholder for now, will be fleshed out per module |
| `src/pages/MembersActivities.tsx` | **Edit** -- add new "Business" tab with a tile for "Business Benchmark Pre-Intermediate to Intermediate" |
| `src/App.tsx` | **Edit** -- add 3 new protected routes: `/business-benchmark`, `/business-benchmark/:moduleId`, `/business-benchmark/:moduleId/:skillId` |

### Data Model

```typescript
interface BusinessBenchmarkSkill {
  id: string;           // 'reading', 'listening', etc.
  title: string;
  description: string;  // from contents (e.g. "Changing places: job swapping at work")
  content?: any;        // populated later
}

interface BusinessBenchmarkModule {
  id: string;
  number: number;
  title: string;
  skills: BusinessBenchmarkSkill[];
  image?: string;       // reuse existing assets initially
}
```

### Visual Style

- Follows the Everyday Conversations / Business Vocabulary card pattern: image with gradient overlay, hover-zoom, icon badge
- Hub hero uses `hero-background.webp` with `backgroundAttachment: 'fixed'` for parallax
- Module tiles show the module number as a large watermark and a relevant lucide icon
- Skill tiles use distinct icons (BookOpen for Reading, Headphones for Listening, PenLine for Writing, MessageCircle for Speaking, Languages for Vocabulary, FileText for Grammar)
- "Coming soon" badge on skills without content

### Navigation Flow

- Members Activities "Business" tab -> tile links to `/business-benchmark`
- Hub back link -> `/members/activities?tab=business`
- Module page back link -> `/business-benchmark`
- Skill page back link -> `/business-benchmark/:moduleId`

