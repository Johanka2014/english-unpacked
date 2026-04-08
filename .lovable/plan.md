

## Updated Plan: Getting Started Tile for BB Upper Unit 1

Same plan as before with one layout change:

### Steps

1. **Update data file** (`src/data/businessBenchmarkUpperData.ts`): Add `getting-started` skill to Unit 1 (`staff-development-and-training`), first in skills array.

2. **Generate image**: Photorealistic image of two businesspeople smiling and shaking hands → `src/assets/bb-upper-unit1-handshake.jpg`.

3. **Create component** (`src/components/bb-upper/GettingStartedUnit1.tsx`): Card with responsive two-column grid using **60/40 split** (`grid-cols-5` with `col-span-3` for text, `col-span-2` for image). Left side has Activity 1 content from the uploaded image (branching worker/student questions). Right side has the handshake image.

4. **Wire up routing** (`src/pages/BBUpperSkill.tsx`): Add conditional for `moduleId === 'staff-development-and-training' && skillId === 'getting-started'` → render `GettingStartedUnit1`.

### Layout detail

```text
┌──────────────────────────┬─────────────────┐
│  Activity 1 (60%)        │  Image (40%)    │
│  "What do you do?"       │  Handshake      │
│  Worker / Student Qs     │  photo          │
└──────────────────────────┴─────────────────┘
```

Uses `grid-cols-5` with `col-span-3` / `col-span-2` for the 60/40 ratio, collapsing to single column on mobile.

