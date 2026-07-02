## Plan: Word Scramble game under Young Learners

### 1. New React page — `src/pages/WordScramble.tsx`
Refactor the uploaded HTML into an idiomatic React component:
- State via `useState` / `useEffect` / `useRef` (score, timeLeft, currentLetters, gameActive, message).
- Timer via `setInterval` inside `useEffect` with cleanup.
- Same core logic: `isValidFormation`, Fisher–Yates shuffle, submit on Enter, shake animation on invalid.
- No colored hero banner. Layout:
  - Global `Navigation` at top, `Footer` at bottom (site chrome only, per your choice).
  - Compact page heading: `<h1>Word Scramble</h1>` + one-line instructions, plain background.
  - Centered game card (max-w-md) with letter tiles, input, Submit / Shuffle / New Game buttons.
- Uses design tokens only (`bg-background`, `text-foreground`, `bg-primary`, `bg-muted`, `bg-accent`) — no hardcoded blue/indigo/teal. Fits site branding (Navy / Royal Blue / Accent Orange).
- Merriweather for the page heading, system body font for tiles (large, bold, readable for young learners).
- Includes `<SEO title="Word Scramble Game" description="Fun timed word-building game for young English learners." canonical="…/word-scramble" />`.

### 2. Themed letter sets
Replace the 7 generic sets with categorized pools the game rotates through:
- Everyday: `ANIMALS`, `KITCHEN`, `WEATHER`, `SCHOOLS`, `FRIENDS`
- Travel: `AIRPORT`, `STATION`, `HOLIDAY`, `SUITCAS`, `TICKETS`
- Business: `MEETING`, `PROJECT`, `MANAGER`, `CLIENTS`, `INVOICE`
- Category label shown above the tiles ("Category: Travel") so learners know the theme.

### 3. Routing — `src/App.tsx`
- `const WordScramble = lazy(() => import("./pages/WordScramble"));`
- Add `<Route path="/word-scramble" element={<ProtectedRoute><WordScramble /></ProtectedRoute>} />`.

### 4. Practice hub — `src/pages/MembersActivities.tsx`
- Under the **Young Learners** category, add a new tile:
  - Title: "Word Scramble"
  - Description: "Timed letter-tile game — build as many words as you can in 60 seconds."
  - Icon: `Shuffle` (lucide-react)
  - Route: `/word-scramble`
- Opens inline (same tab) — clicking uses standard React Router navigation, so users keep the site's back button and nav.

### 5. Cleanup
- Do **not** copy the uploaded HTML into `/public`. The React page fully replaces it.

### Notes on your questions
- **New browser window?** No — inline is better here. Popups get blocked, break back-navigation, and lose the shared design system. The React version lives at `/word-scramble` and feels native.
- **Header/footer banners?** Dropped. Only the global site Navigation + Footer remain; no colored hero strip.

No backend, no data model, no dependencies added.