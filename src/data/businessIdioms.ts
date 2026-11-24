export interface BusinessIdiom {
  id: string;
  base: string;
  form: string;
  meaning: string;
  sentence: string;
}

export const BUSINESS_IDIOMS: BusinessIdiom[] = [
  { id: 'back-the-wrong-horse', base: 'Back the wrong horse', form: 'backed the wrong horse', meaning: 'To make the wrong choice or support the wrong thing', sentence: 'We ___ for manager and now we are paying the consequences.' },
  { id: 'ball-is-in-your-court', base: 'Ball is in your court', form: 'ball is in your court', meaning: 'A decision or responsibility is yours alone', sentence: 'The decision is up to you. The ___ now.' },
  { id: 'ballpark-figure', base: 'Ballpark figure', form: 'ballpark figure', meaning: 'A guess or an estimate on a number', sentence: 'The budget for next year is just a ___; it may not be close to what we need.' },
  { id: 'batting-a-thousand', base: 'Batting a thousand', form: 'batting a thousand', meaning: 'To be successful at something, perfection', sentence: 'The team was ___ by doing everything right.' },
  { id: 'behind-the-eight-ball', base: 'Behind the eight-ball', form: 'behind the eight-ball', meaning: 'To be in a bad position', sentence: 'He was ___ having been just hired and layoffs coming.' },
  { id: 'blind-sided', base: 'Blind-sided', form: 'blind-sided', meaning: 'To not see something coming, to be caught off-guard', sentence: 'The boss was ___ by his surprise decision to quit.' },
  { id: 'bush-league', base: 'Bush league', form: 'bush league', meaning: 'Amateurish actions, behavior or decisions', sentence: 'His idea to lie to the boss was ___.' },
  { id: 'call-the-shots', base: 'Call the shots', form: 'call the shots', meaning: 'To make the decisions, to be in charge', sentence: 'The boss made all the decisions, it was up to him to ___.' },
  { id: 'cover-all-bases', base: 'Cover all bases', form: 'covered all of his bases', meaning: 'To thoroughly plan and prepare for a situation', sentence: 'The boss ___ before implementing new rules.' },
  { id: 'down-for-the-count', base: 'Down for the count', form: 'down for the count', meaning: 'To be beaten', sentence: 'The employee was ___ after making his final fatal mistake.' },
  { id: 'down-to-the-wire', base: 'Down to the wire', form: 'down to the wire', meaning: 'To the last minute, the finish line', sentence: 'He procrastinated so much that the report would be finished ___.' },
  { id: 'drop-the-ball', base: 'Drop the ball', form: 'dropped the ball', meaning: 'To lose control and make a mistake, to handle things badly', sentence: 'He really ___ by not finishing the work in time for the meeting.' },
  { id: 'end-run', base: 'End run', form: 'end run', meaning: 'To use evasive tactics to bypass the competition', sentence: 'He was able to hide his work and pull an ___ on all the others.' },
  { id: 'full-court-press', base: 'Full-court press', form: 'full-court press', meaning: 'To make an all-out effort to achieve something', sentence: 'The sales department was trying to break all their records with a ___.' },
  { id: 'game-plan', base: 'Game plan', form: 'game plan', meaning: 'To have a strategy to proceed', sentence: 'I gave a specific ___ for the meeting.' },
  { id: 'get-into-the-swing', base: 'Get into the swing', form: 'get into the swing', meaning: 'To become comfortable doing something through practice', sentence: 'It took some time for the new employee to ___ of things.' },
];

export function shuffleItems<T>(items: readonly T[]): T[] {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = copy[i]!;
    copy[i] = copy[j]!;
    copy[j] = temp;
  }
  return copy;
}

export function filterIdioms(idioms: readonly BusinessIdiom[], query: string): BusinessIdiom[] {
  const normalized = query.trim().toLowerCase();
  const sorted = [...idioms].sort((a, b) => a.base.localeCompare(b.base));
  if (!normalized) return sorted;
  return sorted.filter(
    (item) =>
      item.base.toLowerCase().includes(normalized) ||
      item.meaning.toLowerCase().includes(normalized) ||
      item.form.toLowerCase().includes(normalized),
  );
}

export function getQuizOptions(correctForm: string, idioms: readonly BusinessIdiom[]): string[] {
  const distractors = shuffleItems(
    idioms.map((item) => item.form).filter((form) => form !== correctForm),
  ).slice(0, 3);
  return shuffleItems([correctForm, ...distractors]);
}

export function splitSentenceOnBlank(sentence: string): [string, string] {
  const index = sentence.indexOf('___');
  if (index === -1) return [sentence, ''];
  return [sentence.slice(0, index), sentence.slice(index + 3)];
}