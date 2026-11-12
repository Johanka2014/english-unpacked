export const DESCRIPTION_WORDS = ["pliers", "ring", "round", "scissors", "screw", "semi-circular"];

export type DescriptionAnswers = Record<number, string>;

const normalize = (value: string) => value.trim().toLowerCase().replace(/\s+/g, " ");

export const isDescriptionAnswerCorrect = (number: number, answers: DescriptionAnswers) => {
  const value = normalize(answers[number] || "");
  if (number === 2 || number === 3) {
    const other = normalize(answers[number === 2 ? 3 : 2] || "");
    return (value === "pliers" || value === "scissors") && value !== other;
  }
  if (number === 4) return value.replace(/[\s-]/g, "") === "semicircular";
  if (number === 5) return value === "ring";
  if (number === 6) return value === "round";
  return false;
};

export const DESCRIPTION_MODELS: Record<number, string> = { 2: "pliers", 3: "scissors", 4: "semi-circular", 5: "ring", 6: "round" };