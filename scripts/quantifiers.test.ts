import { expect, test } from 'bun:test';
import { isGapAnswerCorrect, GAP_TEXT, CLASSIFICATION_WORDS, QUIZ_QUESTIONS } from '../src/data/quantifiers';

test('gap fill accepts "lots" and "a lot" before "of fruit"', () => {
  const gap = GAP_TEXT[3] as { answers: string[] };
  expect(isGapAnswerCorrect(' A  lot ', gap.answers)).toBe(true);
  expect(isGapAnswerCorrect('lots', gap.answers)).toBe(true);
  expect(isGapAnswerCorrect('much', gap.answers)).toBe(false);
});

test('text has five gaps and the original classifications', () => {
  expect(GAP_TEXT.filter(p => typeof p !== 'string').length).toBe(5);
  expect(CLASSIFICATION_WORDS.find(w => w.word === 'enough')?.category).toBe('Both');
  expect(QUIZ_QUESTIONS.every(q => q.options.includes(q.answer))).toBe(true);
});
