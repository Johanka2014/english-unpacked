
The user is viewing the "Getting Started" section of the OrganigramExercise and finds the people introductions tiles look untidy in their current layout. They want them arranged in three columns.

**Current State**: The grid on line 78 uses `grid gap-3 sm:grid-cols-2 lg:grid-cols-3`, which means:
- Mobile: 1 column
- Small screens: 2 columns  
- Large screens: 3 columns

**Fix**: Change the grid to ensure 3 columns display consistently by:
1. Modifying the grid class to `grid-cols-1 md:grid-cols-3` to display 3 columns starting at medium breakpoint (avoiding the sm:2-column intermediate state)
2. Optionally increase gap spacing for better visual separation (from gap-3 to gap-4)

This will ensure 9 people tiles arrange in a clean 3-column grid (3 rows × 3 columns) on medium screens and larger.
