import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface BadgeDef {
  id: string;
  name: string;
  description: string;
  emoji: string;
}

export const BADGES: BadgeDef[] = [
  { id: "first-steps", name: "First Steps", description: "Get your first 10 correct answers", emoji: "👶" },
  { id: "century", name: "Century", description: "100 correct answers", emoji: "💯" },
  { id: "perfect-round", name: "Perfectionist", description: "10/10 in a round", emoji: "🎯" },
  { id: "streak-3", name: "On Fire", description: "3-day streak", emoji: "🔥" },
  { id: "streak-7", name: "Week Warrior", description: "7-day streak", emoji: "⚡" },
  { id: "streak-30", name: "Unstoppable", description: "30-day streak", emoji: "🏆" },
  { id: "speed-demon", name: "Speed Demon", description: "Daily challenge in under 45s", emoji: "💨" },
  { id: "topic-explorer", name: "Topic Explorer", description: "Practice every topic", emoji: "🗺️" },
];

interface ProgressState {
  xp: number;
  correctTotal: number;
  streak: number;
  lastPlayDate: string | null;
  knownWordIds: Record<string, number>;
  trickyWordIds: string[];
  badges: string[];
  topicsPlayed: string[];
  perfectRounds: number;
  soundOn: boolean;
  recordAnswer: (wordId: string, correct: boolean) => void;
  finishRound: (correct: number, total: number, topic?: string, durationMs?: number) => string[];
  toggleSound: () => void;
  reset: () => void;
}

const today = () => new Date().toISOString().slice(0, 10);
const daysBetween = (a: string, b: string) => {
  const da = new Date(a + "T00:00:00").getTime();
  const db = new Date(b + "T00:00:00").getTime();
  return Math.round((db - da) / 86400000);
};

export const level = (xp: number) => Math.floor(Math.sqrt(xp / 30)) + 1;
export const xpForLevel = (lvl: number) => 30 * (lvl - 1) ** 2;
export const xpToNext = (xp: number) => xpForLevel(level(xp) + 1) - xp;

export const usePetProgress = create<ProgressState>()(
  persist(
    (set, get) => ({
      xp: 0,
      correctTotal: 0,
      streak: 0,
      lastPlayDate: null,
      knownWordIds: {},
      trickyWordIds: [],
      badges: [],
      topicsPlayed: [],
      perfectRounds: 0,
      soundOn: true,
      recordAnswer: (wordId, correct) => {
        const s = get();
        if (correct) {
          set({
            xp: s.xp + 10,
            correctTotal: s.correctTotal + 1,
            knownWordIds: { ...s.knownWordIds, [wordId]: (s.knownWordIds[wordId] || 0) + 1 },
            trickyWordIds: s.trickyWordIds.filter((id) => id !== wordId),
          });
        } else {
          set({
            trickyWordIds: s.trickyWordIds.includes(wordId)
              ? s.trickyWordIds
              : [...s.trickyWordIds, wordId],
          });
        }
      },
      finishRound: (correct, total, topic, durationMs) => {
        const s = get();
        const t = today();
        let newStreak = s.streak;
        if (s.lastPlayDate !== t) {
          if (s.lastPlayDate && daysBetween(s.lastPlayDate, t) === 1) newStreak = s.streak + 1;
          else newStreak = 1;
        }
        const bonus = correct === total ? 50 : 0;
        const newPerfect = correct === total ? s.perfectRounds + 1 : s.perfectRounds;
        const topicsPlayed = topic && !s.topicsPlayed.includes(topic) ? [...s.topicsPlayed, topic] : s.topicsPlayed;

        const earned: string[] = [];
        const has = (id: string) => s.badges.includes(id);
        const totalCorrect = s.correctTotal + correct;
        if (!has("first-steps") && totalCorrect >= 10) earned.push("first-steps");
        if (!has("century") && totalCorrect >= 100) earned.push("century");
        if (!has("perfect-round") && correct === total && total >= 10) earned.push("perfect-round");
        if (!has("streak-3") && newStreak >= 3) earned.push("streak-3");
        if (!has("streak-7") && newStreak >= 7) earned.push("streak-7");
        if (!has("streak-30") && newStreak >= 30) earned.push("streak-30");
        if (!has("topic-explorer") && topicsPlayed.length >= 12) earned.push("topic-explorer");
        if (!has("speed-demon") && durationMs && durationMs <= 45000 && total >= 10)
          earned.push("speed-demon");

        set({
          xp: s.xp + bonus,
          streak: newStreak,
          lastPlayDate: t,
          perfectRounds: newPerfect,
          topicsPlayed,
          badges: [...s.badges, ...earned],
        });
        return earned;
      },
      toggleSound: () => set({ soundOn: !get().soundOn }),
      reset: () =>
        set({
          xp: 0,
          correctTotal: 0,
          streak: 0,
          lastPlayDate: null,
          knownWordIds: {},
          trickyWordIds: [],
          badges: [],
          topicsPlayed: [],
          perfectRounds: 0,
        }),
    }),
    { name: "pet-word-quest-progress-v1" }
  )
);
