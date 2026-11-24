import { describe, expect, it } from 'bun:test';
import {
  ALL_PENSION_GAPS,
  GENERAL_FINANCE_MC,
  PENSION_FLASHCARDS,
  PENSIONS_TOTAL_QUESTIONS,
  PRODUCT_DEFINITIONS,
  PRODUCT_TERMS,
  scoreSectionA,
  scoreSectionB,
  scoreSectionC,
} from '../src/data/pensionsFinance';

describe('pensions and finance vocabulary data and scoring', () => {
  it('contains all 33 flashcards and 34 graded questions across sections A, B and C', () => {
    expect(PENSION_FLASHCARDS).toHaveLength(33);
    expect(ALL_PENSION_GAPS).toHaveLength(12);
    expect(PRODUCT_TERMS).toHaveLength(8);
    expect(PRODUCT_DEFINITIONS).toHaveLength(8);
    expect(GENERAL_FINANCE_MC).toHaveLength(14);
    expect(PENSIONS_TOTAL_QUESTIONS).toBe(34);
  });

  it('has valid answer keys for every item', () => {
    for (const gap of ALL_PENSION_GAPS) {
      expect(gap.options).toContain(gap.answer);
    }
    const termIds = new Set(PRODUCT_TERMS.map((t) => t.id));
    for (const def of PRODUCT_DEFINITIONS) {
      expect(termIds.has(def.answer)).toBe(true);
    }
    for (const q of GENERAL_FINANCE_MC) {
      expect(q.options.map((o) => o.id)).toContain(q.answer);
    }
  });

  it('scores sections A, B and C accurately for empty, partial and full answers', () => {
    expect(scoreSectionA({})).toBe(0);
    expect(scoreSectionA({ 1: 'sum', 2: "receiver's", 3: 'widow' })).toBe(2);
    expect(
      scoreSectionA(Object.fromEntries(ALL_PENSION_GAPS.map((g) => [g.id, g.answer])))
    ).toBe(12);

    expect(scoreSectionB({})).toBe(0);
    expect(scoreSectionB({ a: '7', b: '2' })).toBe(1);
    expect(
      scoreSectionB(Object.fromEntries(PRODUCT_DEFINITIONS.map((d) => [d.id, String(d.answer)])))
    ).toBe(8);

    expect(scoreSectionC({})).toBe(0);
    expect(scoreSectionC({ 1: 'a', 2: 'b', 3: 'b' })).toBe(2);
    expect(
      scoreSectionC(Object.fromEntries(GENERAL_FINANCE_MC.map((q) => [q.id, q.answer])))
    ).toBe(14);
  });
});