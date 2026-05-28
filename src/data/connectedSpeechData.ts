import { Link2, ArrowRightLeft, Volume2, VolumeX, Merge, Shuffle } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export interface ConnectedSpeechExample {
  phrase: string;
  ipa: string;
  connected: string;
}

export interface ConnectedSpeechQuiz {
  id: number;
  question: string;
  options: string[];
  answer: string;
  explanation: string;
}

export interface ConnectedSpeechLesson {
  id: string;
  number: number;
  title: string;
  subtitle: string;
  description: string;
  duration: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  icon: LucideIcon;
  theory: { heading: string; body: string }[];
  examples: ConnectedSpeechExample[];
  quiz: ConnectedSpeechQuiz[];
}

export const connectedSpeechLessons: ConnectedSpeechLesson[] = [
  {
    id: 'consonant-vowel-linking',
    number: 1,
    title: 'Consonant to Vowel Linking',
    subtitle: 'Smooth flow when a consonant meets a vowel',
    description:
      'Learn how a final consonant sound connects smoothly to a following initial vowel sound, so the two words sound like one.',
    duration: '15 mins',
    difficulty: 'Beginner',
    icon: Link2,
    theory: [
      {
        heading: 'What is it?',
        body:
          'When a word ends in a consonant sound and the next word starts with a vowel sound, native speakers do not pause between them. The consonant attaches to the next syllable.',
      },
      {
        heading: 'Why it matters',
        body:
          'Without linking, English sounds choppy and robotic. Linking is what creates the natural rhythm of fluent speech.',
      },
      {
        heading: 'Listen for the sound, not the spelling',
        body:
          'It is the sound that links, not the letter. "An hour" links because "hour" begins with a vowel sound, even though it starts with the letter h.',
      },
    ],
    examples: [
      { phrase: 'pick up', ipa: '/pɪk ʌp/', connected: '[pɪˈkʌp]' },
      { phrase: 'turn on', ipa: '/tɜːn ɒn/', connected: '[tɜːˈnɒn]' },
      { phrase: 'an apple', ipa: '/ən ˈæpəl/', connected: '[əˈnæpəl]' },
      { phrase: 'look at it', ipa: '/lʊk æt ɪt/', connected: '[lʊˈkæˈtɪt]' },
    ],
    quiz: [
      {
        id: 1,
        question: 'Which phrase shows consonant-to-vowel linking?',
        options: ['big dog', 'pick it up', 'red car', 'blue sky'],
        answer: 'pick it up',
        explanation: '"Pick" ends in /k/ and "it" starts with a vowel — the /k/ links to /ɪt/.',
      },
      {
        id: 2,
        question: 'How does a native speaker most naturally say "turn off"?',
        options: ['[tɜːn] [ɒf]', '[tɜːˈnɒf]', '[tɜːn ə ɒf]', '[tɜː ɒf]'],
        answer: '[tɜːˈnɒf]',
        explanation: 'The final /n/ of "turn" attaches to the vowel of "off".',
      },
      {
        id: 3,
        question: 'Why does "an hour" link smoothly?',
        options: [
          'Because "hour" begins with the letter h',
          'Because "hour" begins with a vowel sound',
          'Because both words are short',
          'Because of the silent r',
        ],
        answer: 'Because "hour" begins with a vowel sound',
        explanation: 'Linking depends on sound, not spelling. The h in "hour" is silent.',
      },
      {
        id: 4,
        question: 'Which phrase does NOT use consonant-to-vowel linking?',
        options: ['stand up', 'come in', 'go away', 'put on'],
        answer: 'go away',
        explanation: '"Go" ends in a vowel sound, so this is a vowel-to-vowel link, not consonant-to-vowel.',
      },
      {
        id: 5,
        question: 'What is the main effect of linking?',
        options: [
          'It makes words longer',
          'It changes the meaning',
          'It makes speech sound smooth and fluent',
          'It removes the stress',
        ],
        answer: 'It makes speech sound smooth and fluent',
        explanation: 'Linking is what gives English its connected, natural rhythm.',
      },
    ],
  },
  {
    id: 'vowel-vowel-linking',
    number: 2,
    title: 'Vowel to Vowel Linking',
    subtitle: 'Tiny /j/, /w/ and /r/ sounds bridge the gap',
    description:
      'Discover how vowel sounds connect using small linking sounds — /j/, /w/ and /r/ — to keep speech flowing.',
    duration: '18 mins',
    difficulty: 'Beginner',
    icon: ArrowRightLeft,
    theory: [
      {
        heading: 'The /j/ link',
        body:
          'After /iː/, /ɪ/, /eɪ/, /aɪ/, /ɔɪ/, a tiny /j/ (a "y" sound) bridges to the next vowel. Example: "see it" → [siːjɪt].',
      },
      {
        heading: 'The /w/ link',
        body:
          'After /uː/, /ʊ/, /əʊ/, /aʊ/, a tiny /w/ bridges to the next vowel. Example: "go out" → [gəʊwaʊt].',
      },
      {
        heading: 'The /r/ link (British English)',
        body:
          'In non-rhotic accents, a silent r at the end of a word is pronounced when the next word starts with a vowel. Example: "far away" → [fɑːrəweɪ].',
      },
    ],
    examples: [
      { phrase: 'go out', ipa: '/gəʊ aʊt/', connected: '[gəʊwaʊt]' },
      { phrase: 'see it', ipa: '/siː ɪt/', connected: '[siːjɪt]' },
      { phrase: 'do it', ipa: '/duː ɪt/', connected: '[duːwɪt]' },
      { phrase: 'I agree', ipa: '/aɪ əˈgriː/', connected: '[aɪjəˈgriː]' },
    ],
    quiz: [
      {
        id: 1,
        question: 'Which linking sound appears in "I agree"?',
        options: ['/w/', '/j/', '/r/', 'none'],
        answer: '/j/',
        explanation: '"I" ends in /aɪ/, so a tiny /j/ bridges to the next vowel.',
      },
      {
        id: 2,
        question: 'Which linking sound appears in "go on"?',
        options: ['/w/', '/j/', '/r/', 'none'],
        answer: '/w/',
        explanation: '"Go" ends in /əʊ/, so a tiny /w/ bridges to the next vowel.',
      },
      {
        id: 3,
        question: 'In British English, "the idea of" usually links with…',
        options: ['/j/', '/w/', '/r/', '/h/'],
        answer: '/r/',
        explanation: 'A linking /r/ appears between "idea" and "of".',
      },
      {
        id: 4,
        question: 'Why do we add these small sounds between vowels?',
        options: [
          'To make new words',
          'To avoid an awkward break in the airflow',
          'To stress the second word',
          'To show politeness',
        ],
        answer: 'To avoid an awkward break in the airflow',
        explanation: 'They keep the airstream continuous and the speech smooth.',
      },
      {
        id: 5,
        question: 'Which phrase does NOT need a vowel-to-vowel link?',
        options: ['blue eyes', 'so easy', 'big house', 'my own'],
        answer: 'big house',
        explanation: '"Big" ends in a consonant, so this is consonant-to-vowel linking, not vowel-to-vowel.',
      },
    ],
  },
  {
    id: 'linking-r',
    number: 3,
    title: "The Linking 'R'",
    subtitle: 'Hidden and intrusive /r/ sounds',
    description:
      'Master the linking and intrusive /r/ sounds that appear between vowels in connected British English.',
    duration: '20 mins',
    difficulty: 'Intermediate',
    icon: Volume2,
    theory: [
      {
        heading: 'Linking /r/',
        body:
          'In non-rhotic accents (most British English), a final r is silent — until the next word starts with a vowel. Then it comes back: "far → far away".',
      },
      {
        heading: 'Intrusive /r/',
        body:
          'Sometimes speakers add an /r/ between two vowels even when there is no r in the spelling: "law and order" → [lɔːrənˈɔːdə].',
      },
      {
        heading: 'When it does not appear',
        body:
          'If the next word starts with a consonant, the r stays silent: "far behind" → [fɑː bɪˈhaɪnd].',
      },
    ],
    examples: [
      { phrase: 'far away', ipa: '/fɑːr əweɪ/', connected: '[fɑːrəweɪ]' },
      { phrase: 'idea of', ipa: '/aɪˈdɪər ɒv/', connected: '[aɪˈdɪərɒv]' },
      { phrase: 'law and order', ipa: '/lɔː ənd ɔːdə/', connected: '[lɔːrənˈɔːdə]' },
      { phrase: 'four eggs', ipa: '/fɔːr egz/', connected: '[fɔːregz]' },
    ],
    quiz: [
      {
        id: 1,
        question: 'When is the linking /r/ pronounced in British English?',
        options: [
          'Always at the end of a word',
          'When the next word starts with a vowel',
          'When the next word starts with a consonant',
          'Only in formal speech',
        ],
        answer: 'When the next word starts with a vowel',
        explanation: 'In non-rhotic accents, /r/ only resurfaces before a vowel.',
      },
      {
        id: 2,
        question: 'Which example uses an intrusive /r/?',
        options: ['far away', 'four apples', 'law and order', 'her eyes'],
        answer: 'law and order',
        explanation: 'There is no r in the spelling of "law", but speakers often add one before "and".',
      },
      {
        id: 3,
        question: 'Which phrase does NOT have any /r/ sound in British English?',
        options: ['far away', 'far behind', 'four eggs', 'her arm'],
        answer: 'far behind',
        explanation: '"Behind" starts with a consonant, so the r in "far" stays silent.',
      },
      {
        id: 4,
        question: '"Idea of" is pronounced…',
        options: ['[aɪˈdɪə ɒv]', '[aɪˈdɪər ɒv]', '[aɪˈdɪərɒv]', '[aɪˈdɪə wɒv]'],
        answer: '[aɪˈdɪərɒv]',
        explanation: 'A linking /r/ bridges the two vowels, and the words run together.',
      },
      {
        id: 5,
        question: 'In which accent does this rule mainly apply?',
        options: ['General American', 'Scottish', 'British (non-rhotic)', 'Australian outback'],
        answer: 'British (non-rhotic)',
        explanation: 'Rhotic accents always pronounce final r, so they do not need a "linking" r.',
      },
    ],
  },
  {
    id: 'elision',
    number: 4,
    title: 'When Sounds Disappear',
    subtitle: 'Elision — dropping sounds for fluency',
    description:
      'Understand elision: how /t/, /d/ and weak vowels are dropped in natural speech to keep it smooth and fast.',
    duration: '22 mins',
    difficulty: 'Intermediate',
    icon: VolumeX,
    theory: [
      {
        heading: 'Loss of /t/ and /d/',
        body:
          'When /t/ or /d/ sits between two other consonants, it usually disappears: "next door" → [neks dɔː], "last night" → [lɑːs naɪt].',
      },
      {
        heading: 'Weak vowels disappear',
        body:
          'Schwa /ə/ often vanishes in unstressed syllables: "camera" → [ˈkæmrə], "interesting" → [ˈɪntrəstɪŋ].',
      },
      {
        heading: 'It is normal, not lazy',
        body:
          'Elision is a feature of fluent speech — every native speaker does it, even in careful conversation.',
      },
    ],
    examples: [
      { phrase: 'next door', ipa: '/nekst dɔː/', connected: '[neks dɔː]' },
      { phrase: 'last night', ipa: '/lɑːst naɪt/', connected: '[lɑːs naɪt]' },
      { phrase: 'sandwich', ipa: '/ˈsændwɪtʃ/', connected: '[ˈsænwɪtʃ]' },
      { phrase: 'family', ipa: '/ˈfæmɪli/', connected: '[ˈfæmli]' },
    ],
    quiz: [
      {
        id: 1,
        question: 'In "next day", which sound is usually dropped?',
        options: ['/n/', '/t/', '/d/', '/eɪ/'],
        answer: '/t/',
        explanation: '/t/ between /s/ and /d/ disappears: [neks deɪ].',
      },
      {
        id: 2,
        question: 'Why do we drop sounds in connected speech?',
        options: [
          'To sound lazy',
          'To save articulation effort and keep flow',
          'To shorten the sentence',
          'To hide grammar mistakes',
        ],
        answer: 'To save articulation effort and keep flow',
        explanation: 'Elision happens because awkward consonant clusters slow speech down.',
      },
      {
        id: 3,
        question: 'Which word commonly loses a schwa /ə/?',
        options: ['camera', 'book', 'red', 'one'],
        answer: 'camera',
        explanation: '"Camera" is usually said as [ˈkæmrə], with the middle vowel dropped.',
      },
      {
        id: 4,
        question: 'In "I don\'t know", what often happens?',
        options: [
          'The /t/ is fully released',
          'The /t/ is dropped before /n/',
          'The /d/ is dropped',
          'An extra /r/ is added',
        ],
        answer: 'The /t/ is dropped before /n/',
        explanation: '"Don\'t know" often becomes [dəʊnˈnəʊ].',
      },
      {
        id: 5,
        question: 'Elision is a feature of…',
        options: [
          'Only careless speech',
          'Only American English',
          'Normal, fluent native speech',
          'Children\'s speech only',
        ],
        answer: 'Normal, fluent native speech',
        explanation: 'All native speakers elide sounds in everyday conversation.',
      },
    ],
  },
  {
    id: 'assimilation',
    number: 5,
    title: 'How Sounds Join Together',
    subtitle: 'Assimilation — sounds change to fit their neighbours',
    description:
      'Learn assimilation: how a sound changes to match the next one, making transitions easier and faster.',
    duration: '25 mins',
    difficulty: 'Advanced',
    icon: Merge,
    theory: [
      {
        heading: '/t/ → /p/ before /b/, /m/, /p/',
        body:
          'A final /t/ changes to /p/ before a bilabial sound: "that boy" → [ðæp bɔɪ], "white board" → [waɪp bɔːd].',
      },
      {
        heading: '/d/ → /b/ before /b/, /m/, /p/',
        body:
          '"Good morning" → [gʊb ˈmɔːnɪŋ]. The /d/ moves to /b/ to match the lips.',
      },
      {
        heading: '/n/ → /m/ or /ŋ/',
        body:
          '"Ten boys" → [tem bɔɪz]; "ten girls" → [teŋ gɜːlz]. The nasal copies the place of the next consonant.',
      },
    ],
    examples: [
      { phrase: 'white board', ipa: '/waɪt bɔːd/', connected: '[waɪpˈbɔːd]' },
      { phrase: 'good morning', ipa: '/gʊd mɔːnɪŋ/', connected: '[gʊbˈmɔːnɪŋ]' },
      { phrase: 'ten boys', ipa: '/ten bɔɪz/', connected: '[tem bɔɪz]' },
      { phrase: 'this shop', ipa: '/ðɪs ʃɒp/', connected: '[ðɪʃ ʃɒp]' },
    ],
    quiz: [
      {
        id: 1,
        question: 'In "good boy", what does the /d/ usually become?',
        options: ['/t/', '/b/', '/g/', '/p/'],
        answer: '/b/',
        explanation: '/d/ assimilates to /b/ before another bilabial sound.',
      },
      {
        id: 2,
        question: 'In "ten people", how is "ten" usually pronounced?',
        options: ['[ten]', '[tem]', '[teŋ]', '[teːn]'],
        answer: '[tem]',
        explanation: 'The /n/ shifts to /m/ to match the lips of the next /p/.',
      },
      {
        id: 3,
        question: 'Why does assimilation happen?',
        options: [
          'To make spelling easier',
          'To make articulation smoother',
          'To stress important words',
          'To sound polite',
        ],
        answer: 'To make articulation smoother',
        explanation: 'It reduces the effort of moving between very different mouth positions.',
      },
      {
        id: 4,
        question: 'Which phrase shows assimilation?',
        options: ['red car', 'this year (→ [ðɪʃ jɪə])', 'big tree', 'open book'],
        answer: 'this year (→ [ðɪʃ jɪə])',
        explanation: 'The /s/ + /j/ blend into /ʃ/.',
      },
      {
        id: 5,
        question: 'Assimilation usually affects…',
        options: [
          'The first sound of a word',
          'The final sound of a word, before another consonant',
          'Only vowel sounds',
          'Only stressed syllables',
        ],
        answer: 'The final sound of a word, before another consonant',
        explanation: 'It is the final consonant that adapts to the following sound.',
      },
    ],
  },
  {
    id: 'sound-changes',
    number: 6,
    title: 'Why Sounds Change',
    subtitle: 'Reductions, contractions and the rhythm of English',
    description:
      'Explore the principles behind sound changes in connected speech and learn to predict patterns like "wanna" and "gonna".',
    duration: '30 mins',
    difficulty: 'Advanced',
    icon: Shuffle,
    theory: [
      {
        heading: 'The stress-timed rhythm',
        body:
          'English squeezes unstressed syllables to keep a steady beat on stressed ones. That squeezing is what creates weak forms, contractions and reductions.',
      },
      {
        heading: 'Common reductions',
        body:
          '"Want to" → [wɒnə] (wanna), "going to" → [gənə] (gonna), "got to" → [gɒtə] (gotta). These are normal in informal spoken English.',
      },
      {
        heading: 'Weak forms',
        body:
          'Function words (of, to, for, can, are…) lose their full vowel and become schwa: "fish and chips" → [fɪʃ ən tʃɪps].',
      },
    ],
    examples: [
      { phrase: 'want to', ipa: '/wɒnt tuː/', connected: '[wɒnə]' },
      { phrase: 'going to', ipa: '/gəʊɪŋ tuː/', connected: '[gənə]' },
      { phrase: 'a cup of tea', ipa: '/ə kʌp ɒv tiː/', connected: '[ə kʌpə tiː]' },
      { phrase: 'should have', ipa: '/ʃʊd hæv/', connected: '[ʃʊdə]' },
    ],
    quiz: [
      {
        id: 1,
        question: '"Want to" in fast speech often becomes…',
        options: ['[wɒnt tuː]', '[wɒnə]', '[wænə]', '[wɒt tə]'],
        answer: '[wɒnə]',
        explanation: 'This is the classic "wanna" reduction.',
      },
      {
        id: 2,
        question: 'Why does English reduce so many words?',
        options: [
          'Because of its stress-timed rhythm',
          'Because of bad grammar',
          'Because of regional accents',
          'Because of recent slang',
        ],
        answer: 'Because of its stress-timed rhythm',
        explanation: 'Unstressed syllables shrink to keep a regular beat.',
      },
      {
        id: 3,
        question: '"Should have done it" in natural speech often sounds like…',
        options: [
          '[ʃʊd hæv dʌn ɪt]',
          '[ʃʊdə dʌn ɪt]',
          '[ʃʊd əv dən ɪt]',
          'Both B and C',
        ],
        answer: 'Both B and C',
        explanation: '"Have" weakens to /əv/ or just /ə/ after modals.',
      },
      {
        id: 4,
        question: 'Which is a weak form?',
        options: ['/tuː/ for "to"', '/tə/ for "to"', '/tuw/ for "to"', '/tʊə/ for "to"'],
        answer: '/tə/ for "to"',
        explanation: '"To" is usually said with a schwa in unstressed positions.',
      },
      {
        id: 5,
        question: 'Reductions like "gonna" and "wanna" are…',
        options: [
          'Incorrect English',
          'Only used by children',
          'Normal in informal spoken English',
          'A US-only feature',
        ],
        answer: 'Normal in informal spoken English',
        explanation: 'They are standard in informal speech worldwide and shown in dictionaries.',
      },
    ],
  },
];
