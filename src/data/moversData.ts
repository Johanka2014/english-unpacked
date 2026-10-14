export interface MoversQuestion {
  id: string;
  before: string;
  after?: string;
  answer: string;
}

export const moversSections = [
  { id: 'intro', label: 'Introduction', title: 'Where do you live?', available: true },
  { id: 'unit-1', label: 'Unit 1', title: 'At the park', available: true },
  { id: 'unit-2', label: 'Unit 2', title: 'A busy week', available: false },
  { id: 'unit-3', label: 'Unit 3', title: 'In the town', available: false },
  { id: 'unit-4', label: 'Unit 4', title: 'At home', available: false },
  { id: 'revision-1', label: 'Revision 1', title: 'Units 1–4', available: false },
  { id: 'unit-5', label: 'Unit 5', title: "Let’s go on holiday", available: false },
  { id: 'unit-6', label: 'Unit 6', title: 'My favourite book', available: false },
  { id: 'unit-7', label: 'Unit 7', title: 'This is my family', available: false },
  { id: 'unit-8', label: 'Unit 8', title: "What’s for lunch?", available: false },
  { id: 'revision-2', label: 'Revision 2', title: 'Units 5–8', available: false },
  { id: 'unit-9', label: 'Unit 9', title: 'Do you like animals?', available: false },
  { id: 'unit-10', label: 'Unit 10', title: "What’s the weather like?", available: false },
  { id: 'unit-11', label: 'Unit 11', title: "What’s the matter?", available: false },
  { id: 'unit-12', label: 'Unit 12', title: 'In the countryside', available: false },
  { id: 'revision-3', label: 'Revision 3', title: 'Units 9–12', available: false },
];

export const numberQuestions: MoversQuestion[] = [
  ['twenty-one', '21'], ['forty-nine', '49'], ['fifteen', '15'],
  ['sixty-two', '62'], ['ninety-four', '94'], ['fifty-six', '56'],
].map(([before, answer], index) => ({ id: `number-${index}`, before, answer }));

export const spellingQuestions: MoversQuestion[] = [
  ['h', 'o', 'p'], ['sk', 'i', 'p'], ['w', 'a', 'lk'], ['clim', 'b', ''],
  ['la', 'u', 'gh'], ['sk', 'a', 'te'], ['danc', 'e', ''], ['c', 'r', 'y'],
  ['fi', 's', 'h'], ['hid', 'e', ''],
].map(([before, answer, after], index) => ({ id: `verb-${index}`, before, answer, after }));

export const oppositeQuestions: MoversQuestion[] = [
  ['tall', 'short'], ['old', 'young'], ['small', 'big'], ['short (hair)', 'long'],
].map(([before, answer], index) => ({ id: `opposite-${index}`, before: `${before} ↔`, answer }));

export const comparativeQuestions: MoversQuestion[] = [
  { id: 'comp-1', before: 'The boy is', after: 'than the girl.', answer: 'shorter' },
  { id: 'comp-2', before: 'The girl is', after: 'than the boy.', answer: 'taller' },
  { id: 'comp-3', before: 'The boy is', after: 'than the woman.', answer: 'younger' },
  { id: 'comp-4', before: 'The woman is', after: 'than the boy.', answer: 'older' },
];

export const floorMatches = [
  { id: 'basement', floor: 'Basement (B)', item: 'A cat' },
  { id: 'ground', floor: 'Ground floor (G)', item: 'Two men' },
  { id: 'first', floor: 'First floor (1)', item: 'A television' },
  { id: 'second', floor: 'Second floor (2)', item: 'A lamp' },
  { id: 'third', floor: 'Third floor (3)', item: 'Two girls' },
  { id: 'fourth', floor: 'Fourth floor (4)', item: 'A woman' },
];