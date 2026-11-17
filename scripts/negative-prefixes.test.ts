import { expect, test } from 'bun:test';
import { isPrefixAnswerCorrect, ADD_PREFIX } from '../src/data/negativePrefixes';

test('il-/im-/ir- spelling rules are enforced', () => {
  expect(isPrefixAnswerCorrect(' Illegal ', ['illegal'])).toBe(true);
  expect(isPrefixAnswerCorrect('inlegal', ['illegal'])).toBe(false);
  expect(isPrefixAnswerCorrect('unpossible', ['impossible'])).toBe(false);
});

test('textbook keys: allow → disallow, sane → insane', () => {
  expect(ADD_PREFIX.find(i => i.base === 'allow')!.answers).toEqual(['disallow']);
  expect(ADD_PREFIX.find(i => i.base === 'sane')!.answers).toEqual(['insane']);
});
