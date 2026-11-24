import { describe, expect, it } from 'bun:test';
import {
  ERROR_ITEMS,
  FILL_BLANKS_ITEMS,
  IDENTIFY_ITEMS,
  isAnswerAccepted,
  MC_ITEMS,
  MIXED_PATTERNS,
  PATTERN_OPTIONS,
  SCRAMBLE_ITEMS,
  TRANSFORM_ITEMS,
} from '../src/data/mixedConditionals';

describe('mixed conditionals data and grading', () => {
  it('contains all 6 patterns and all 6 exercise sets', () => {
    expect(MIXED_PATTERNS).toHaveLength(6);
    expect(FILL_BLANKS_ITEMS).toHaveLength(5);
    expect(MC_ITEMS).toHaveLength(5);
    expect(SCRAMBLE_ITEMS).toHaveLength(5);
    expect(IDENTIFY_ITEMS).toHaveLength(5);
    expect(TRANSFORM_ITEMS).toHaveLength(5);
    expect(ERROR_ITEMS).toHaveLength(5);
  });

  it('has valid pattern answers and multiple-choice indices', () => {
    for (const item of IDENTIFY_ITEMS) {
      expect((PATTERN_OPTIONS as readonly string[]).includes(item.answer)).toBe(true);
    }
    for (const item of MC_ITEMS) {
      expect(item.correctIndex).toBeGreaterThanOrEqual(0);
      expect(item.correctIndex).toBeLessThan(item.options.length);
    }
  });

  it('accepts punctuation, case, curly apostrophe, and alternative forms while rejecting wrong answers', () => {
    expect(isAnswerAccepted('  Had Won ', ['had won'])).toBe(true);
    expect(isAnswerAccepted('hadn’t missed', ["hadn't missed", 'had not missed'])).toBe(true);
    expect(isAnswerAccepted('had not missed', ["hadn't missed", 'had not missed'])).toBe(true);
    expect(
      isAnswerAccepted('if i had taken the job i would be happy now', [
        'If I had taken the job, I would be happy now.',
      ])
    ).toBe(true);
    expect(isAnswerAccepted('', ['had won'])).toBe(false);
    expect(isAnswerAccepted('would have won', ['had won'])).toBe(false);
  });
});