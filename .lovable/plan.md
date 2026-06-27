## Reorganize Practice tabs + all UX recommendations

### 1. Six-tab structure with icons on triggers

`src/pages/MembersActivities.tsx` — rebuild with 6 tabs, each with an icon in the trigger label:

- **Grammar** (`GraduationCap`) — Grammar *(renamed from "B1 Grammar")*
- **Business** (`Briefcase`) — grouped sub-headings:
  - *Core courses*: Business Vocabulary · Business Benchmark Pre-Int to Int · Business Benchmark Upper Intermediate
  - *Profession-specific*: Oxford English for HR · Cambridge English for Engineering · Technical English
  - *Single lessons*: Insurance Vocabulary
- **Pronunciation** (`Mic`) — Pronunciation Practice Course · Connected Speech
- **Exams** (`Award`) — CAE Exam Practice · FCE Vocabulary Practice · Maturita Speaking Practice
- **Topics** (`Compass`) — Sport
- **Young Learners** (`Star`) — Practice Tests for Starters

Tab order: Grammar, Business, Pronunciation, Exams, Topics, Young Learners.

### 2. Search bar

Above the tabs: input with `Search` icon, filters every tile (title + description, case-insensitive) across all tabs. When the query is non-empty, replace the tab UI with a flat result grid showing the matching tiles plus a small "in *Business*" badge on each. Clearing the box returns to the tabbed view.

### 3. Recently opened strip

Persisted in `localStorage` under `eu:recent-activities` (max 3, FIFO). Click on any tile records its path + label + icon name + tab. Strip appears above the search bar with a "Recently opened" heading and small cards. Hidden when empty.

### 4. Redirects for old slugs

`useEffect` reads `?tab=`; if it matches a legacy slug, `navigate('?tab=<new>', { replace: true })`:
- `vocabulary` → `business`
- `cambridge` → `exams`
- `maturita` → `exams`
- `hr` → `business`
- `engineering` → `business`

Default tab behaviour unchanged (first tab = Grammar when no `?tab=`).

### 5. Verb Patterns & Prepositions folded into Grammar

`src/data/b1GrammarData.ts`:
- Add optional `externalUrl?: string` to `B1GrammarModule`.
- Section **Verb Patterns**: append module `{ number: 22, title: 'Verb Pattern Practice', subtitle: 'Units 53–68: -ing forms, infinitives, preferences', externalUrl: '/verb-pattern-practice' }`.
- Section **Questions & Prepositions**: append three modules linking to `/prepositions-of-time`, `/prepositions-of-place`, `/verb-adjective-prepositions`.

`src/pages/B1GrammarSection.tsx`: when `mod.externalUrl` is set, render the card as an `<a href={mod.externalUrl}>` instead of `<Link>`, treat as having content (no Coming soon badge), show a small `ExternalLink` icon corner badge.

### 6. Rename "B1 Grammar" → "Grammar" (user-facing only)

- `src/pages/B1Grammar.tsx`: hero title, SEO title/description, back link wording → "Grammar".
- `src/pages/B1GrammarSection.tsx`: back link → "Back to Grammar"; SEO suffix → "- Grammar".
- Routes (`/b1-grammar/*`), file names, data variable names stay the same to avoid churn.

### 7. Sport topic page

New `src/pages/TopicsSport.tsx` — Navigation + Footer + back link + heading "Sport" + Card grid containing **The Price of Passion** (Trophy icon, links to `/price-of-passion`). Patterned after `MembersActivities`'s `ActivityGrid`.

New route in `src/App.tsx`: `/topics/sport` → `ProtectedRoute > TopicsSport` (lazy-loaded).

The Topics tab tile "Sport" links to `/topics/sport`.

### Files touched

- `src/pages/MembersActivities.tsx` — full restructure (tabs, search, recents, redirects, icons on triggers, sub-headings inside Business).
- `src/data/b1GrammarData.ts` — `externalUrl` field + 4 new module entries.
- `src/pages/B1GrammarSection.tsx` — handle `externalUrl`, rename back link.
- `src/pages/B1Grammar.tsx` — rename hero/SEO/back link.
- `src/pages/TopicsSport.tsx` — new file.
- `src/App.tsx` — new lazy import + route.

No data migrations, no route changes for existing paths, no other in-app links break.
