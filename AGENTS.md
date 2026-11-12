# Architecture
- Keep Movers curriculum in typed data with shared React exercise components and protected lazy-loaded course/lesson pages; this allows later units and media to be added without duplicating exercise logic.
- Keep smaller-screen navigation in StudentMobileMenu using the shared Sheet, with direct Practice category links; focus management, scroll containment and menu state stay independent of the measured header height.
- Keep the Module 5 materials-and-shapes writing task in a dedicated component with ungraded text areas, since students supply their own vocabulary rather than a fixed answer key.
- Keep the tool-description gap-fill in its own component with a separately tested answer validator, so valid alternative word orders are graded consistently.
- Keep the gizmo pre-listening tasks together in a dedicated component with typed, tested answers so matching and dialogue share consistent checking and tracking.
- Keep the final gizmo partner discussion ungraded in a separate component so students choose a speaker and confirm with their teacher without automatic marking.