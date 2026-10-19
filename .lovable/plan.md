# Narrower reading text boxes (Module 5 Reading)

## Change
On the Module 5 Reading page, the boxes around the reading texts currently stretch the full page width. They will be narrower and centred, with space on either side:
- **Leasing equipment** article box
- **Fastequip** advertisement
- **Office repairs** emails (still side by side on desktop, stacked on phones)

The activities under each text keep their current width. Phones keep their current layout, which already has small margins.

## Technical details
- Only `src/components/business-benchmark/ReadingEquipmentExercise.tsx` changes.
- Add `mx-auto w-full max-w-4xl` to the article Card and the Fastequip section, and `max-w-5xl` to the emails section, so the two emails still fit side by side.
- Check the signed-in page at the user's 989px width and on a phone.
