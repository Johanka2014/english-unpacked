export type ConditionalTime = 'past' | 'present' | 'future';

export interface MixedExample {
  beforeFirst: string;
  firstVerb: string;
  firstTime: ConditionalTime;
  between: string;
  secondVerb: string;
  secondTime: ConditionalTime;
  afterSecond: string;
  explanation: string;
}

export interface MixedPattern {
  id: string;
  from: ConditionalTime;
  to: ConditionalTime;
  label: string;
  examples: MixedExample[];
}

export interface FillBlankItem {
  id: string;
  beforeFirst: string;
  firstCue: string;
  firstAccepted: string[];
  between: string;
  secondCue: string;
  secondAccepted: string[];
  afterSecond: string;
}

export interface MixedMcItem {
  id: string;
  prompt: string;
  options: string[];
  correctIndex: number;
}

export interface ScrambleItem {
  id: string;
  sentence: string;
  words: string[];
  accepted: string[];
}

export interface IdentifyItem {
  id: string;
  sentence: string;
  answer: string;
}

export interface TransformItem {
  id: string;
  situation: string;
  placeholder: string;
  accepted: string[];
}

export interface ErrorCorrectionItem {
  id: string;
  before: string;
  wrong: string;
  after: string;
  accepted: string[];
}

export const PATTERN_OPTIONS = [
  'Past → Present',
  'Past → Future',
  'Present → Past',
  'Present → Future',
  'Future → Past',
  'Future → Present',
] as const;

export const MIXED_PATTERNS: MixedPattern[] = [
  {
    id: 'past-present',
    from: 'past',
    to: 'present',
    label: 'PAST → PRESENT',
    examples: [
      {
        beforeFirst: 'If I ',
        firstVerb: 'had won',
        firstTime: 'past',
        between: ' the lottery, I ',
        secondVerb: 'would be',
        secondTime: 'present',
        afterSecond: ' rich.',
        explanation: "But I didn't win the lottery in the past and I am not rich now.",
      },
      {
        beforeFirst: 'If I ',
        firstVerb: 'had taken',
        firstTime: 'past',
        between: ' French in high school, I ',
        secondVerb: 'would have',
        secondTime: 'present',
        afterSecond: ' more job opportunities.',
        explanation: "But I didn't take French in high school and I don't have many job opportunities.",
      },
      {
        beforeFirst: 'If she ',
        firstVerb: 'had been born',
        firstTime: 'past',
        between: ' in the United States, she ',
        secondVerb: "wouldn't need",
        secondTime: 'present',
        afterSecond: ' a visa to work here.',
        explanation: "But she wasn't born in the United States and she does need a visa now to work here.",
      },
    ],
  },
  {
    id: 'past-future',
    from: 'past',
    to: 'future',
    label: 'PAST → FUTURE',
    examples: [
      {
        beforeFirst: 'If she ',
        firstVerb: 'had signed up',
        firstTime: 'past',
        between: ' for the ski trip last week, she ',
        secondVerb: 'would be joining',
        secondTime: 'future',
        afterSecond: ' us tomorrow.',
        explanation: "But she didn't sign up for the ski trip last week and she isn't going to join us tomorrow.",
      },
      {
        beforeFirst: 'If Mark ',
        firstVerb: 'had gotten',
        firstTime: 'past',
        between: ' the job instead of Joe, he ',
        secondVerb: 'would be moving',
        secondTime: 'future',
        afterSecond: ' to Shanghai.',
        explanation: "But Mark didn't get the job and Mark is not going to move to Shanghai.",
      },
      {
        beforeFirst: 'If Darren ',
        firstVerb: "hadn't wasted",
        firstTime: 'past',
        between: ' his Christmas bonus gambling in Las Vegas, he ',
        secondVerb: 'would go',
        secondTime: 'future',
        afterSecond: ' to Mexico with us next month.',
        explanation: "But Darren wasted his Christmas bonus gambling in Las Vegas and he won't go to Mexico with us next month.",
      },
    ],
  },
  {
    id: 'present-past',
    from: 'present',
    to: 'past',
    label: 'PRESENT → PAST',
    examples: [
      {
        beforeFirst: 'If I ',
        firstVerb: 'were',
        firstTime: 'present',
        between: ' rich, I ',
        secondVerb: 'would have bought',
        secondTime: 'past',
        afterSecond: ' that Ferrari we saw yesterday.',
        explanation: "But I am not currently rich and that is why I didn't buy the Ferrari yesterday.",
      },
      {
        beforeFirst: 'If Sam ',
        firstVerb: 'spoke',
        firstTime: 'present',
        between: ' Russian, he ',
        secondVerb: 'would have translated',
        secondTime: 'past',
        afterSecond: ' the letter for you.',
        explanation: "But Sam doesn't speak Russian and that is why he didn't translate the letter.",
      },
      {
        beforeFirst: 'If I ',
        firstVerb: "didn't have",
        firstTime: 'present',
        between: ' to work so much, I ',
        secondVerb: 'would have gone',
        secondTime: 'past',
        afterSecond: ' to the party last night.',
        explanation: "But I have to work a lot and that is why I didn't go to the party last night.",
      },
    ],
  },
  {
    id: 'present-future',
    from: 'present',
    to: 'future',
    label: 'PRESENT → FUTURE',
    examples: [
      {
        beforeFirst: 'If I ',
        firstVerb: "didn't have",
        firstTime: 'present',
        between: ' so much vacation time, I ',
        secondVerb: "wouldn't go",
        secondTime: 'future',
        afterSecond: ' with you on the cruise to Alaska next week.',
        explanation: 'But I do have a lot of vacation time and I will go on the trip next week.',
      },
      {
        beforeFirst: 'If Cindy ',
        firstVerb: 'were',
        firstTime: 'present',
        between: ' more creative, the company ',
        secondVerb: 'would send',
        secondTime: 'future',
        afterSecond: ' her to New York to work on the new advertising campaign.',
        explanation: "But Cindy is not creative and the company won't send her to New York to work on the new campaign.",
      },
      {
        beforeFirst: 'If Dan ',
        firstVerb: "weren't",
        firstTime: 'present',
        between: ' so nice, he ',
        secondVerb: "wouldn't be tutoring",
        secondTime: 'future',
        afterSecond: ' you in math tonight.',
        explanation: 'But Dan is nice and he is going to tutor you tonight.',
      },
    ],
  },
  {
    id: 'future-past',
    from: 'future',
    to: 'past',
    label: 'FUTURE → PAST',
    examples: [
      {
        beforeFirst: 'If I ',
        firstVerb: "weren't going",
        firstTime: 'future',
        between: ' on my business trip next week, I ',
        secondVerb: 'would have accepted',
        secondTime: 'past',
        afterSecond: ' that new assignment at work.',
        explanation: "But I am going to go on a business trip next week, and that is why I didn't accept that new assignment at work.",
      },
      {
        beforeFirst: 'If my parents ',
        firstVerb: "weren't coming",
        firstTime: 'future',
        between: ' this weekend, I ',
        secondVerb: 'would have planned',
        secondTime: 'past',
        afterSecond: ' a nice trip just for the two of us to Napa Valley.',
        explanation: "But my parents are going to come this weekend, and that is why I didn't plan a trip for the two of us to Napa Valley.",
      },
      {
        beforeFirst: 'If Donna ',
        firstVerb: "weren't making",
        firstTime: 'future',
        between: ' us a big dinner tonight, I ',
        secondVerb: 'would have suggested',
        secondTime: 'past',
        afterSecond: ' that we go to that nice Italian restaurant.',
        explanation: "But she is going to make us a big dinner tonight, and that is why I didn't suggest that we go to that nice Italian restaurant.",
      },
    ],
  },
  {
    id: 'future-present',
    from: 'future',
    to: 'present',
    label: 'FUTURE → PRESENT',
    examples: [
      {
        beforeFirst: 'If I ',
        firstVerb: 'were going',
        firstTime: 'future',
        between: ' to that concert tonight, I ',
        secondVerb: 'would be',
        secondTime: 'present',
        afterSecond: ' very excited.',
        explanation: 'But I am not going to go to that concert tonight and that is why I am not excited.',
      },
      {
        beforeFirst: 'If Sandy ',
        firstVerb: 'were giving',
        firstTime: 'future',
        between: ' a speech tomorrow, she ',
        secondVerb: 'would be',
        secondTime: 'present',
        afterSecond: ' very nervous.',
        explanation: 'But Sandy is not going to give a speech tomorrow and that is why she is not nervous.',
      },
      {
        beforeFirst: 'If Seb ',
        firstVerb: "didn't come",
        firstTime: 'future',
        between: ' with us to the desert, everyone ',
        secondVerb: 'would be',
        secondTime: 'present',
        afterSecond: ' very disappointed.',
        explanation: 'But Seb will come with us to the desert and that is why everyone is so happy.',
      },
    ],
  },
];

export const FILL_BLANKS_ITEMS: FillBlankItem[] = [
  {
    id: 'fb-1',
    beforeFirst: 'If I ',
    firstCue: 'win',
    firstAccepted: ['had won'],
    between: ' the lottery yesterday, I ',
    secondCue: 'be',
    secondAccepted: ['would be'],
    afterSecond: ' rich now.',
  },
  {
    id: 'fb-2',
    beforeFirst: 'If she ',
    firstCue: 'study',
    firstAccepted: ['had studied'],
    between: ' harder, she ',
    secondCue: 'have',
    secondAccepted: ['would have', 'would get'],
    afterSecond: ' a better job today.',
  },
  {
    id: 'fb-3',
    beforeFirst: 'If I ',
    firstCue: 'be',
    firstAccepted: ['were'],
    between: ' you, I ',
    secondCue: 'call',
    secondAccepted: ['would have called'],
    afterSecond: ' him last night.',
  },
  {
    id: 'fb-4',
    beforeFirst: 'If he ',
    firstCue: 'not / miss',
    firstAccepted: ["hadn't missed", 'had not missed'],
    between: ' the bus, he ',
    secondCue: 'join',
    secondAccepted: ['would be joining', 'would join'],
    afterSecond: ' us for dinner tonight.',
  },
  {
    id: 'fb-5',
    beforeFirst: 'If they ',
    firstCue: 'not / have',
    firstAccepted: ["didn't have", 'did not have'],
    between: ' to work, they ',
    secondCue: 'go',
    secondAccepted: ['would have gone'],
    afterSecond: ' to the cinema yesterday.',
  },
];

export const MC_ITEMS: MixedMcItem[] = [
  {
    id: 'mc-1',
    prompt: 'If I had won the lottery yesterday, I ___ rich today.',
    options: ['would be', 'would have been', 'will be'],
    correctIndex: 0,
  },
  {
    id: 'mc-2',
    prompt: 'If I ___ Russian, I would have translated that letter for you yesterday.',
    options: ['spoke', 'had spoken', 'would speak'],
    correctIndex: 0,
  },
  {
    id: 'mc-3',
    prompt: "If we ___ a map, we wouldn't be lost now.",
    options: ['had', 'had had', 'would have'],
    correctIndex: 1,
  },
  {
    id: 'mc-4',
    prompt: 'If she had signed up last week, she ___ us tomorrow.',
    options: ['would be joining', 'would join', 'will join'],
    correctIndex: 0,
  },
  {
    id: 'mc-5',
    prompt: 'If I ___ so much work this week, I would have gone away last weekend.',
    options: ["didn't have", "hadn't had", "wouldn't have"],
    correctIndex: 0,
  },
];

export const SCRAMBLE_ITEMS: ScrambleItem[] = [
  {
    id: 'sc-1',
    sentence: 'If I had won the lottery, I would be rich.',
    words: ['lottery', 'would', 'I', 'had', 'be', 'If', 'won', 'rich', 'I', 'the'],
    accepted: ['If I had won the lottery, I would be rich.'],
  },
  {
    id: 'sc-2',
    sentence: 'If I were you, I would have gone.',
    words: ['would', 'you', 'If', 'gone', 'I', 'were', 'have', 'I'],
    accepted: ['If I were you, I would have gone.'],
  },
  {
    id: 'sc-3',
    sentence: 'If he spoke English, he would have a better job.',
    words: ['job', 'English', 'would', 'If', 'better', 'he', 'spoke', 'a', 'have', 'he'],
    accepted: ['If he spoke English, he would have a better job.'],
  },
  {
    id: 'sc-4',
    sentence: "If I hadn't lost my keys, I would be inside.",
    words: ['keys', 'inside', 'If', 'would', "hadn't", 'I', 'lost', 'be', 'my', 'I'],
    accepted: ["If I hadn't lost my keys, I would be inside.", 'If I had not lost my keys, I would be inside.'],
  },
  {
    id: 'sc-5',
    sentence: "If she had been born here, she wouldn't need a visa.",
    words: ['visa', 'had', 'she', 'If', 'here', 'born', 'need', "wouldn't", 'a', 'been', 'she'],
    accepted: ["If she had been born here, she wouldn't need a visa.", 'If she had been born here, she would not need a visa.'],
  },
];

export const IDENTIFY_ITEMS: IdentifyItem[] = [
  {
    id: 'id-1',
    sentence: "If I hadn't eaten so much, I wouldn't feel sick now.",
    answer: 'Past → Present',
  },
  {
    id: 'id-2',
    sentence: 'If I were more creative, the company would have sent me to New York.',
    answer: 'Present → Past',
  },
  {
    id: 'id-3',
    sentence: "If he weren't going on a trip tomorrow, he would have helped us.",
    answer: 'Future → Past',
  },
  {
    id: 'id-4',
    sentence: 'If she had gotten the job, she would be moving next week.',
    answer: 'Past → Future',
  },
  {
    id: 'id-5',
    sentence: 'If I were going to the concert tonight, I would have bought a shirt yesterday.',
    answer: 'Future → Past',
  },
];

export const TRANSFORM_ITEMS: TransformItem[] = [
  {
    id: 'tr-1',
    situation: "I didn't take the job, so I'm not happy now.",
    placeholder: 'If I had taken the job, I would be happy now.',
    accepted: ['If I had taken the job, I would be happy now.'],
  },
  {
    id: 'tr-2',
    situation: "I am not a fast runner, so I didn't win the race yesterday.",
    placeholder: 'Type the mixed conditional sentence...',
    accepted: [
      'If I were a fast runner, I would have won the race yesterday.',
      'If I was a fast runner, I would have won the race yesterday.',
    ],
  },
  {
    id: 'tr-3',
    situation: "She didn't sign up, so she isn't coming tomorrow.",
    placeholder: 'Type the mixed conditional sentence...',
    accepted: ['If she had signed up, she would be coming tomorrow.'],
  },
  {
    id: 'tr-4',
    situation: "He isn't here, so he didn't see the accident.",
    placeholder: 'Type the mixed conditional sentence...',
    accepted: [
      'If he were here, he would have seen the accident.',
      'If he was here, he would have seen the accident.',
    ],
  },
  {
    id: 'tr-5',
    situation: "I have to work tonight, so I didn't go to the party.",
    placeholder: 'Type the mixed conditional sentence...',
    accepted: [
      "If I didn't have to work tonight, I would have gone to the party.",
      'If I did not have to work tonight, I would have gone to the party.',
    ],
  },
];

export const ERROR_ITEMS: ErrorCorrectionItem[] = [
  {
    id: 'err-1',
    before: 'If I ',
    wrong: 'would have won',
    after: ' the lottery, I would be rich now.',
    accepted: ['had won'],
  },
  {
    id: 'err-2',
    before: 'If I were rich, I ',
    wrong: 'would buy',
    after: ' that car yesterday.',
    accepted: ['would have bought'],
  },
  {
    id: 'err-3',
    before: 'If I ',
    wrong: "hadn't had",
    after: ' to work today, I would have gone out last night.',
    accepted: ["didn't have", 'did not have'],
  },
  {
    id: 'err-4',
    before: 'If she ',
    wrong: 'would be',
    after: ' more creative, they would have hired her.',
    accepted: ['were', 'was'],
  },
  {
    id: 'err-5',
    before: "If I weren't going on my trip, I ",
    wrong: 'would accepted',
    after: ' the job.',
    accepted: ['would have accepted'],
  },
];

export const normalizeConditionalAnswer = (value: string): string =>
  value
    .trim()
    .toLowerCase()
    .replace(/[’‘]/g, "'")
    .replace(/[.,!?]/g, '')
    .replace(/\s+/g, ' ');

export const isAnswerAccepted = (input: string, accepted: string[]): boolean => {
  const normalized = normalizeConditionalAnswer(input);
  if (!normalized) return false;
  return accepted.some((ans) => normalizeConditionalAnswer(ans) === normalized);
};