export interface PrefixItem { base: string; answers: string[]; hint?: string }

export const normalise = (v: string) => v.trim().toLowerCase().replace(/\s+/g, ' ');
export const isPrefixAnswerCorrect = (value: string, answers: string[]) =>
  answers.map(normalise).includes(normalise(value));

/** FCE Result Module 5 — add negative prefixes a–g */
export const ADD_PREFIX: PrefixItem[] = [
  { base: 'active', answers: ['inactive'] },
  { base: 'allow', answers: ['disallow'] },
  { base: 'legal', answers: ['illegal'] },
  { base: 'injured', answers: ['uninjured'] },
  { base: 'possible', answers: ['impossible'] },
  { base: 'sane', answers: ['insane'] },
  { base: 'sympathetically', answers: ['unsympathetically'] },
];

/** FCE Result Module 5 — use the words formed above */
export const SENTENCES: { text: string; answers: string[] }[] = [
  { text: "‘Stop crying and go home,’ she said ___.", answers: ['unsympathetically'] },
  { text: 'He was lucky to escape from the accident ___.', answers: ['uninjured'] },
  { text: 'In many countries it’s ___ to drive a car without wearing a seatbelt.', answers: ['illegal'] },
  { text: 'Why did the referee ___ that goal? It looked OK to me!', answers: ['disallow'] },
  { text: 'According to Einstein, it’s ___ to travel faster than the speed of light.', answers: ['impossible'] },
  { text: 'The volcano had been ___ for hundreds of years before it erupted.', answers: ['inactive'] },
  { text: 'You’d have to be ___ to swim in that water – it’s full of sharks!', answers: ['insane'] },
];

/** Grammar & Vocabulary for FCE — Prefixes (1) exercise 1 (negative-prefix items) */
export const COMPLETE_WORDS: PrefixItem[] = [
  { base: 'dependent', answers: ['independent'] },
  { base: 'polite', answers: ['impolite'] },
  { base: 'do', answers: ['undo'] },
  { base: 'approve', answers: ['disapprove'] },
  { base: 'behave', answers: ['misbehave'] },
  { base: 'logical', answers: ['illogical'] },
  { base: 'zip', answers: ['unzip'] },
  { base: 'inform', answers: ['misinform'] },
  { base: 'agree', answers: ['disagree'] },
  { base: 'moral', answers: ['immoral'] },
  { base: 'hear', answers: ['mishear'] },
  { base: 'interpret', answers: ['misinterpret'] },
  { base: 'relevant', answers: ['irrelevant'] },
  { base: 'believe', answers: ['disbelieve'] },
  { base: 'understand', answers: ['misunderstand'] },
];

/** Grammar & Vocabulary for FCE — Prefixes (1) article (word formation) */
export const ARTICLE: { before: string; base: string; answers: string[] }[] = [
  { before: 'I tried to speak Greek while I was on holiday in Mykonos, but the attempt was completely', base: 'SUCCESS', answers: ['unsuccessful'] },
  { before: 'At first, the waiter', base: 'TAKE', answers: ['mistook'] },
  { before: 'me for a German. I find it', base: 'POSSIBLE', answers: ['impossible'] },
  { before: 'to communicate in German, so I carried on with Greek. The waiter', base: 'UNDERSTAND', answers: ['misunderstood'] },
  { before: 'and brought me beetroots, which I', base: 'LIKE', answers: ['dislike'] },
  { before: 'intensely. He apologised and then', base: 'APPEAR', answers: ['disappeared'] },
  { before: 'into the kitchen. He came back with aubergines, which,', base: 'FORTUNATE', answers: ['unfortunately'] },
  { before: 'I also hate. Then he', base: 'CHARGE', answers: ['overcharged'] },
  { before: 'me because he', base: 'READ', answers: ['misread'] },
  { before: 'the bill. Next time I’ll just use', base: 'NATION', answers: ['international'] },
];

export const WORDWALL = [
  { title: 'Negative prefix practice – Match up', url: 'https://wordwall.net/resource/77922262?wwmethod=link' },
  { title: 'Negative prefix practice 2 – Complete the sentence', url: 'https://wordwall.net/resource/77922565?wwmethod=link' },
];
