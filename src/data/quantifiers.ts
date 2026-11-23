export interface QuantifierQuestion { sentence: string; options: string[]; answer: string }
export type QuantifierCategory = 'Countable' | 'Uncountable' | 'Both';

export const QUIZ_QUESTIONS: QuantifierQuestion[] = [
  { sentence: "There isn't ___ coffee left.", options: ['much', 'many', 'few', 'every'], answer: 'much' },
  { sentence: 'She has ___ friends who live in London.', options: ['a lot of', 'much', 'little', 'each'], answer: 'a lot of' },
  { sentence: 'Can I have ___ water, please?', options: ['some', 'any', 'every', 'few'], answer: 'some' },
  { sentence: "I don't have ___ money with me.", options: ['any', 'some', 'much', 'a lot of'], answer: 'any' },
  { sentence: 'There are only a ___ apples in the basket.', options: ['few', 'little', 'much', 'every'], answer: 'few' },
  { sentence: 'We have ___ time, so we need to hurry.', options: ['little', 'few', 'many', 'some'], answer: 'little' },
  { sentence: '___ student in the class passed the exam.', options: ['Every', 'Some', 'Any', 'Much'], answer: 'Every' },
  { sentence: "There isn't ___ space for another chair.", options: ['enough', 'many', 'lots of', 'few'], answer: 'enough' },
  { sentence: 'How ___ pages did you read?', options: ['many', 'much', 'little', 'any'], answer: 'many' },
  { sentence: '___ of the players has their own uniform.', options: ['Each', 'Some', 'Any', 'Much'], answer: 'Each' },
];

export const CLASSIFICATION_WORDS: { word: string; category: QuantifierCategory }[] = [
  { word: 'money', category: 'Uncountable' }, { word: 'many', category: 'Countable' },
  { word: 'blueberry', category: 'Countable' }, { word: 'much', category: 'Uncountable' },
  { word: 'some', category: 'Both' }, { word: 'information', category: 'Uncountable' },
  { word: 'few', category: 'Countable' }, { word: 'a lot of', category: 'Both' },
  { word: 'time', category: 'Uncountable' }, { word: 'ingredient', category: 'Countable' },
  { word: 'any', category: 'Both' }, { word: 'sugar', category: 'Uncountable' },
  { word: 'every', category: 'Countable' }, { word: 'enough', category: 'Both' },
  { word: 'beef', category: 'Uncountable' }, { word: 'jar', category: 'Countable' },
];

/** Text pieces alternate with gaps: text, gap, text, gap … */
export const GAP_TEXT: (string | { answers: string[] })[] = [
  "Let's face it - the food industry is like fashion: there are some trends which people follow. The trend which began a",
  { answers: ['few'] },
  'years ago is health and wellness. You can see in restaurants and in shops that more and more consumers follow a healthy diet - they eat',
  { answers: ['lots', 'a lot'] },
  'of fruit and vegetables, avoid meat products and add very',
  { answers: ['little'] },
  "salt to their food. There is also another, more recent trend - functional drinks which are supposed to help you with various problems. One example is 'golden latte' - coffee with a",
  { answers: ['little'] },
  'turmeric, famous for its anti-inflammatory properties. Another drink, called Pretty Happy, which is fairly new in the shops, is a soft drink that can help you relax. Try drinking it',
  { answers: ['every'] },
  'day, and you will feel less stressed after one week.',
];

export const isGapAnswerCorrect = (value: string, answers: string[]) =>
  answers.includes(value.trim().toLowerCase().replace(/\s+/g, ' '));

export function shuffle<T>(items: T[]): T[] {
  const a = [...items];
  for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; }
  return a;
}
