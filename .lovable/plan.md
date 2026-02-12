

# Medical Care, Health and Diseases - Maturita Topic

## Overview

Populate the "Medical Care, Health and Diseases" topic (`id: "medical-care"`) with full content across all four tabs (Learn, Practice, Part 2, Part 3), matching the structure and styling of the existing Environment topic. Content will be sourced from the uploaded PDF and the fetched website.

## Content Sources

**PDF (Bridge - 08 Health):** Covers symptoms, GP visits, hospital reasons, serious diseases, medical specialists, and pharmacy/prescription vocabulary. Also contains 14 medical images (emergency sign, pharmacy, doctor visits, X-ray, eye exam, bandaged arm, wheelchair, boy with cast, wound, nurse with patient, ambulance, doctor with equipment, surgery).

**Website (statnimaturita-anglictina.cz):** Covers hospital overview, departments, healthcare professionals, patient admission/discharge, emergency care, ICU, infection control, hospital technology, patient rights, and the future of hospitals. Also includes 15 follow-up questions with model answers.

## What Will Be Created

### 1. Thumbnail Image
- Copy one of the PDF images (the emergency sign - img 01) to `src/assets/topic-medical-care.jpg` for use as the topic tile thumbnail.

### 2. Part 3 Images (6 images for the exam grid)
Copy 6 representative images from the PDF to `src/assets/`:
- `maturita-health-3a.jpg` - Emergency department entrance (img 01)
- `maturita-health-3b.jpg` - Pharmacy/medication (img 02)
- `maturita-health-3c.jpg` - Doctor examining patient (img 03)
- `maturita-health-3d.jpg` - X-ray image (img 05)
- `maturita-health-3e.jpg` - Ambulance/emergency care (img 12)
- `maturita-health-3f.jpg` - Surgery/operating room (img 14)

### 3. Part 2 Images (2 images for describe & compare)
- `maturita-health-part2-a.jpg` - Nurse with patient in hospital bed (img 11)
- `maturita-health-part2-b.jpg` - GP examining patient's throat (img 04)

### 4. Learn Tab Content (accordion items)
Built from both sources, covering these sub-topics:
- Common Symptoms and When to See a Doctor (PDF)
- What the Doctor Does During a Visit (PDF)
- Reasons to Go to Hospital (PDF)
- Serious Diseases and Conditions (PDF)
- Medical Specialists (PDF)
- Pharmacy and Prescriptions (PDF)
- Overview of a Hospital (website)
- Hospital Departments (website)
- Healthcare Professionals (website)
- Emergency Care (website)
- Intensive Care Unit (website)
- Hospital Technology (website)
- Patient Rights (website)

### 5. Practice Tab Content (Q&A cards)
Combined from both sources - approximately 15+ questions covering:
- Symptoms descriptions (PDF)
- GP visit procedures (PDF)
- Hospital departments (website)
- Emergency care (website)
- ICU differences (website)
- Infection control (website)
- Technology in hospitals (website)
- Patient rights (website)
- Future of hospitals (website)

### 6. Part 2 Tab Content (3 tasks)
Following the exact same structure as Environment:
- **Task 1 - Describe a Picture:** Custom prompt points (Medical Equipment, People, Setting, Activity, Mood, Other), 2 images, 4 follow-up questions
- **Task 2 - Compare Pictures:** Custom prompt points, 3 comparison questions
- **Task 3 - Topic Discussion:** A discussion question about healthcare

### 7. Part 3 Tab Content (exam practice)
- Task description about presenting on medical care and hospitals
- 6 prompt points (e.g., Hospital departments, Emergency care, Medical specialists, Technology, Patient rights, Other)
- 6-image grid with labels 3A-3F
- 13 follow-up questions sourced from the website

## Files to Modify

1. **`src/data/maturitaTopics.ts`** - The main change: expand the `medical-care` entry from a stub to a fully populated topic with `available: true`, `thumbnail`, `learn`, `practice`, `part2`, and `exam` data. Add image imports at the top.

2. **New image assets** (9 files total):
   - `src/assets/topic-medical-care.jpg`
   - `src/assets/maturita-health-3a.jpg` through `3f.jpg`
   - `src/assets/maturita-health-part2-a.jpg`
   - `src/assets/maturita-health-part2-b.jpg`

## Technical Details

- The `medical-care` topic already exists at line 276 of `maturitaTopics.ts` as a stub with `available: false`. It will be replaced with a fully populated object matching the Environment topic's structure.
- All images will be imported as ES6 modules at the top of the file (same pattern as the Environment topic's imports).
- The existing `MaturitaTopic` interface already supports all needed fields -- no schema changes required.
- No changes needed to any page components (`MaturitaSpeaking.tsx`, `MaturitaSpeakingTopic.tsx`, `Part2Tab.tsx`, `PracticeCard.tsx`) since they already handle the full data structure.

