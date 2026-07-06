## Add a Topics tab to Practice Activities

The Practice Activities page (`/members/activities`) has 5 tabs — Grammar, Business, Pronunciation, Exams, Young Learners — but no **Topics** tab. The Sport lesson page at `/topics/sport` exists as a route but has no entry point from the Practice area, which is why you can't see it.

### What I'll add

Add a new **Topics** tab (icon: `Compass`) to `TABS` in `src/pages/MembersActivities.tsx`, positioned after Exams. It will contain a single tile:

- **Sport** — opens `/topics/sport` (which lists "The Price of Passion" lesson)

The tab will be ready to grow: as more topic areas are added (Travel, Food, Technology, etc.), each becomes another tile in this tab.

### Files touched

- `src/pages/MembersActivities.tsx` — add one entry to `TABS`

No routing changes needed (the `/topics/sport` route already exists in `App.tsx`).