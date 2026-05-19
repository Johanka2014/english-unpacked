## Goal

On **B1 Grammar → Word Formation → Word Formation Quiz**, add a new **Practice** tile that opens an embedded Wordwall activity (https://wordwall.net/resource/12843617) plus an "Open in new tab" link as a fallback.

## Changes

### 1. `src/data/b1GrammarData.ts`
- Extend the `GrammarModule` (or equivalent) shape with an optional `wordwall?: { url: string; title?: string }` field.
- On module `word-formation-quiz`, add:
  ```ts
  wordwall: {
    url: 'https://wordwall.net/embed/12843617',
    title: 'Word Formation Practice',
  }
  ```

### 2. `src/pages/B1GrammarTopic.tsx`
- Import `Gamepad2` (or similar lucide icon) for the new tile.
- Add a new tile entry to the `tiles` array:
  ```ts
  { key: 'wordwall', label: 'Practice', icon: Gamepad2, available: !!mod.wordwall, color: 'from-pink-600 to-rose-700' }
  ```
  Filter it out when not available (same pattern as the existing `practice` Tense Master tile).
- Extend the `activeTab` union with `'wordwall'`.
- Add a render branch when `activeTab === 'wordwall'`:
  - Heading "Practice" (Merriweather).
  - Short helper sentence.
  - Responsive 16:9 wrapper containing an `<iframe src={mod.wordwall.url} ...>` with `allowFullScreen`, `loading="lazy"`, `title={mod.wordwall.title}`.
  - "Open in new tab" anchor link to the public Wordwall URL underneath the iframe (`https://wordwall.net/resource/12843617`) for the case where the embed is blocked.

### 3. No other files
- No data-model changes elsewhere; the new field is optional and unused by every other module.
- No route, navigation, or auth changes.

## Out of scope
- Renaming any existing tiles.
- Adding Wordwall to other modules.
- Backend, SEO, or analytics changes.
