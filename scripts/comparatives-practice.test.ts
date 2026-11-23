import { expect, test } from 'bun:test';
import { COMPARISON_STEPS, isComparisonAnswerCorrect, type ComparisonGap } from '../src/data/comparativesPractice';

const gaps = COMPARISON_STEPS.flatMap(step => (step.items ?? []).flatMap(item => item.parts.filter((part): part is ComparisonGap => typeof part !== 'string')));
const gap = (id: string) => gaps.find(item => item.id === id)?.answers ?? [];

test('all supplied activities have independent graded gaps, including the missing warmest dialogue gap', () => {
  expect(COMPARISON_STEPS.length).toBe(24);
  expect(gaps.length).toBe(146);
  expect(new Set(gaps.map(item => item.id)).size).toBe(146);
  expect(isComparisonAnswerCorrect('warmest', gap('dialogue-4-1'))).toBe(true);
  expect(isComparisonAnswerCorrect('warmer', gap('dialogue-4-1'))).toBe(false);
});

test('moving away from the camera requires further, not closer', () => {
  expect(isComparisonAnswerCorrect('further', gap('practice-14'))).toBe(true);
  expect(isComparisonAnswerCorrect('farther', gap('practice-14'))).toBe(true);
  expect(isComparisonAnswerCorrect('closer', gap('practice-14'))).toBe(false);
});

test('modifying comparatives includes the required much', () => {
  expect(isComparisonAnswerCorrect('much more interesting than', gap('practice7-3'))).toBe(true);
  expect(isComparisonAnswerCorrect('more interesting than', gap('practice7-3'))).toBe(false);
});

test('British spelling and expanded contractions are accepted without accepting wrong forms', () => {
  expect(isComparisonAnswerCorrect('is the same colour as', gap('practice12-2'))).toBe(true);
  expect(isComparisonAnswerCorrect('the most boring movie I have ever seen', gap('practice13-1'))).toBe(true);
  expect(isComparisonAnswerCorrect('the most boring movie I ever see', gap('practice13-1'))).toBe(false);
});

test('every answer key accepts its model and rejects an unrelated answer', () => {
  for (const item of gaps) {
    expect(isComparisonAnswerCorrect(item.answers[0], item.answers)).toBe(true);
    expect(isComparisonAnswerCorrect('incorrect answer', item.answers)).toBe(false);
  }
});