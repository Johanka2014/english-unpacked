import { expect, test } from 'bun:test';
import { checkLyricsAnswers, EVER_OPTIONS, WHENEVER_QUESTIONS } from '../src/data/wheneverWherever';

test('lyrics check requires both gaps and validates Whenever / Wherever', () => {
  expect(checkLyricsAnswers('', 'Wherever').status).toBe('incomplete');
  expect(checkLyricsAnswers('Wherever', 'Whenever')).toEqual({ status: 'wrong', gap1Ok: false, gap2Ok: false });
  expect(checkLyricsAnswers('Whenever', 'Whatever')).toEqual({ status: 'wrong', gap1Ok: true, gap2Ok: false });
  expect(checkLyricsAnswers('Whenever', 'Wherever')).toEqual({ status: 'correct', gap1Ok: true, gap2Ok: true });
});

test('grammar challenge has all 10 questions with valid -ever answers', () => {
  expect(WHENEVER_QUESTIONS.length).toBe(10);
  expect(WHENEVER_QUESTIONS.every((q) => EVER_OPTIONS.includes(q.answer))).toBe(true);
  expect(WHENEVER_QUESTIONS[4]?.text).toBe('We can go _____ you want to go.');
  expect(WHENEVER_QUESTIONS[4]?.answer).toBe('Wherever');
});