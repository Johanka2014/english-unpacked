export const EVER_OPTIONS = ['Whenever', 'Wherever', 'Whatever', 'Whichever'] as const;
export type EverOption = (typeof EVER_OPTIONS)[number];

export interface EverQuestion {
  id: number;
  text: string;
  answer: EverOption;
  hint: string;
}

export const VIDEO_EMBED_URL = 'https://www.youtube.com/embed/7Dki-OJ1XJc';
export const VIDEO_WATCH_URL = 'https://www.youtube.com/watch?v=7Dki-OJ1XJc';

export const LYRICS_ANSWERS: readonly [EverOption, EverOption] = ['Whenever', 'Wherever'];

export type LyricsCheckResult =
  | { status: 'incomplete'; gap1Ok: boolean; gap2Ok: boolean }
  | { status: 'correct'; gap1Ok: true; gap2Ok: true }
  | { status: 'wrong'; gap1Ok: boolean; gap2Ok: boolean };

export const checkLyricsAnswers = (gap1: string, gap2: string): LyricsCheckResult => {
  const a1 = gap1.trim().toLowerCase();
  const a2 = gap2.trim().toLowerCase();
  const gap1Ok = a1 === LYRICS_ANSWERS[0].toLowerCase();
  const gap2Ok = a2 === LYRICS_ANSWERS[1].toLowerCase();

  if (!a1 || !a2) return { status: 'incomplete', gap1Ok, gap2Ok };
  if (gap1Ok && gap2Ok) return { status: 'correct', gap1Ok: true, gap2Ok: true };
  return { status: 'wrong', gap1Ok, gap2Ok };
};

export const WHENEVER_QUESTIONS: EverQuestion[] = [
  { id: 1, text: '"_____, _____ we\'re meant to be together"', answer: 'Whenever', hint: 'Lyric: Starts the famous chorus line.' },
  { id: 2, text: "I'll be there, and you'll be near, _____ you are.", answer: 'Wherever', hint: 'Lyric context: Implies location/distance.' },
  { id: 3, text: '____ happens, I will always love you.', answer: 'Whatever', hint: "Means 'no matter what occurs'." },
  { id: 4, text: 'Select ____ option fits your schedule best.', answer: 'Whichever', hint: 'Used when choosing from a set of options.' },
  { id: 5, text: 'We can go _____ you want to go.', answer: 'Wherever', hint: 'Refers to a place.' },
  { id: 6, text: 'Call me _____ you need a friend.', answer: 'Whenever', hint: 'Refers to any time.' },
  { id: 7, text: 'Eat _____ you want from the buffet.', answer: 'Whatever', hint: 'Anything that you choose.' },
  { id: 8, text: 'Take _____ road implies a shorter journey.', answer: 'Whichever', hint: 'Selection between specific paths.' },
  { id: 9, text: '"You\'ll never have to wonder, _____ we are."', answer: 'Wherever', hint: 'Refers to location.' },
  { id: 10, text: "I'm happy _____ I'm with you.", answer: 'Whenever', hint: 'Every time that.' },
];