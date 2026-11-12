export const GIZMO_MEANINGS = [
  { letter: "a", meaning: "fix" },
  { letter: "b", meaning: "put together" },
  { letter: "c", meaning: "take apart" },
] as const;

export const GIZMO_VERBS = [
  { id: "assemble", verb: "assemble", answer: "put together" },
  { id: "dismantle", verb: "dismantle", answer: "take apart" },
  { id: "fasten", verb: "fasten", answer: "fix" },
] as const;

export const GIZMO_ANSWERS = {
  assemble: "put together",
  dismantle: "take apart",
  fasten: "fix",
  temporary: "temporary",
  permanent: "permanent",
} as const;

export type GizmoAnswerId = keyof typeof GIZMO_ANSWERS;

export function isGizmoAnswerCorrect(id: GizmoAnswerId, value: string): boolean {
  return value.trim().toLowerCase().replace(/\s+/g, " ") === GIZMO_ANSWERS[id];
}