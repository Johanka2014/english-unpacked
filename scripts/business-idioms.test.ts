import { describe, expect, it } from 'bun:test';
import {
  BUSINESS_IDIOMS,
  filterIdioms,
  getQuizOptions,
  splitSentenceOnBlank,
} from '../src/data/businessIdioms';

describe('Sports Idioms for Business', () => {
  it('includes all 16 idioms with a single blank placeholder in each example sentence', () => {
    expect(BUSINESS_IDIOMS).toHaveLength(16);
    for (const item of BUSINESS_IDIOMS) {
      expect(item.sentence.includes('___')).toBe(true);
      const [before, after] = splitSentenceOnBlank(item.sentence);
      expect(`${before}___${after}`).toBe(item.sentence);
    }
  });

  it('filters idioms alphabetically by idiom or meaning', () => {
    const all = filterIdioms(BUSINESS_IDIOMS, '');
    expect(all[0]?.base).toBe('Back the wrong horse');
    expect(all[all.length - 1]?.base).toBe('Get into the swing');

    const byMeaning = filterIdioms(BUSINESS_IDIOMS, 'estimate');
    expect(byMeaning.map((item) => item.id)).toEqual(['ballpark-figure']);
  });

  it('builds 4 unique quiz options containing the correct form', () => {
    for (const item of BUSINESS_IDIOMS) {
      const options = getQuizOptions(item.form, BUSINESS_IDIOMS);
      expect(options).toHaveLength(4);
      expect(new Set(options).size).toBe(4);
      expect(options).toContain(item.form);
    }
  });
});