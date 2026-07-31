// Extra content for the Sleep lesson, built from the shared worksheets and TED talks:
// - Macmillan Global e-lesson 081 "Sleep matters"
// - BRIDGE magazine 01/2013-14 "Dreamy Sleep" (p.16)
// - Linguahouse "How to sleep" (Jessa Gamble, Our natural sleep cycle)
// - New English File Upper-Intermediate, File 5 Revise & Check
// - Advanced Vocabulary and Structure Practice, Test 9
// - TED: Arianna Huffington, "How to succeed? Get more sleep"
// - TED: Dan Gartenberg, "The brain benefits of deep sleep and how to get more of it"

import type { Activity } from './engineeringData';
import type { FlashcardItem } from '@/components/presentations/Flashcards';

/* ------------------------------------------------------------------ */
/* 1 · Vocabulary flashcards                                           */
/* ------------------------------------------------------------------ */

export const sleepFlashcards: FlashcardItem[] = [
  { term: 'wide awake', definition: 'completely awake, not sleepy at all', example: "It was 3am and I was still wide awake." },
  { term: 'half asleep', definition: 'not fully awake; only partly conscious', example: 'I answered the phone half asleep and forgot the whole conversation.' },
  { term: 'to fall asleep', definition: 'to start sleeping', example: 'She falls asleep the moment her head touches the pillow.' },
  { term: 'to nod off', definition: 'to fall asleep, usually without meaning to', example: 'He nodded off during the meeting.' },
  { term: 'to sleep in', definition: 'to sleep later than usual in the morning', example: 'I love sleeping in at the weekend.' },
  { term: 'to oversleep', definition: 'to sleep longer than you intended and be late', example: 'I overslept and missed my train.' },
  { term: 'a nap', definition: 'a short sleep, usually during the day', example: 'A twenty-minute nap can boost your alertness.' },
  { term: 'a siesta', definition: 'a short sleep taken around midday (from Spanish)', example: 'In hot countries many people still have a siesta.' },
  { term: 'to snooze', definition: 'to sleep lightly for a short time', example: 'He snoozed in the armchair all afternoon.' },
  { term: 'insomnia', definition: 'the inability to sleep, often over a long period', example: 'Her insomnia got worse after she started shift work.' },
  { term: 'a vivid dream', definition: 'a dream that is very clear, bright and detailed', example: 'I had a vivid dream about flying over the sea.' },
  { term: 'a dull dream', definition: 'a dream that is boring or not clear', example: 'Most of my dreams are dull — I forget them instantly.' },
  { term: 'to sleep like a log', definition: 'to sleep very deeply', example: 'After the hike I slept like a log.' },
  { term: 'to sleep on it', definition: 'to wait until the next day before making a decision', example: "Don't answer now — sleep on it." },
  { term: 'to be fast asleep', definition: 'to be deeply asleep', example: 'The children were fast asleep by eight.' },
  { term: 'to snore', definition: 'to breathe noisily while sleeping', example: 'My husband snores so loudly I have to wear earplugs.' },
  { term: 'sleep-deprived', definition: 'not getting enough sleep', example: 'Two thirds of teenagers are regularly sleep-deprived.' },
  { term: 'exhaustion', definition: 'the state of being extremely tired', example: 'She collapsed from sheer exhaustion.' },
  { term: 'to brag', definition: 'to boast; to talk proudly about yourself', example: 'People brag about how little sleep they need.' },
  { term: 'one-upmanship', definition: 'trying to do slightly better than someone else', example: 'Sleep deprivation has become a kind of one-upmanship.' },
  { term: 'hyper-connected', definition: 'constantly connected to phones, email and the internet', example: 'In a hyper-connected world, the brain never switches off.' },
  { term: 'to faint', definition: 'to lose consciousness for a short time', example: 'She fainted from tiredness and broke her cheekbone.' },
  { term: 'jet lag', definition: 'tiredness after flying across time zones', example: 'It took me a week to get over the jet lag.' },
  { term: 'the body clock', definition: 'the internal rhythm that tells us when to sleep and wake', example: 'Shift work plays havoc with your body clock.' },
];

/* ------------------------------------------------------------------ */
/* 2 · Global e-lesson — warm-up + core sleep vocabulary               */
/* ------------------------------------------------------------------ */

export const globalWarmUp: Activity[] = [
  {
    type: 'discussion',
    title: '1 · Warm-up: talk about it',
    body: 'Work with a partner (or make notes if you are studying alone).',
    bullets: [
      'How many hours do you sleep on a typical weeknight? Is that enough?',
      'Are you a morning person or a night owl? Did you use to be different?',
      'How many words connected with sleep and dreams can you list in one minute?',
      'Why do you think we sleep — and why do we dream?',
    ],
  },
];

export const globalVocabActivities: Activity[] = [
  {
    type: 'drag-fill',
    title: '4 · Sleep words in context',
    body: 'Drag each word into the right gap. All of them appear in the reading and in the flashcards.',
    blanks: [
      { prompt: 'Most of my dreams are ___ and grey — nothing exciting ever happens in them.', answer: 'dull' },
      { prompt: 'I had a really ___ dream last night: I could remember every colour and every face.', answer: 'vivid' },
      { prompt: "I drank coffee at ten and I was still ___ awake at two in the morning.", answer: 'wide' },
      { prompt: 'He was only ___ asleep, so he heard everything we said.', answer: 'half' },
      { prompt: 'A twenty-minute ___ after lunch can make you far more alert.', answer: 'nap' },
      { prompt: 'In Spain, some people still have a ___ in the early afternoon.', answer: 'siesta' },
      { prompt: 'Grandad likes to ___ in his armchair with the radio on.', answer: 'snooze' },
      { prompt: 'She has suffered from ___ for years and rarely sleeps more than four hours.', answer: 'insomnia' },
      { prompt: 'I usually ___ asleep about ten minutes after I go to bed.', answer: 'fall' },
    ],
  },
  {
    type: 'matching',
    title: '5 · Sleep expressions',
    body: 'Match each expression to its meaning.',
    pairs: [
      { id: 1, left: 'to sleep in', right: 'to sleep later than usual in the morning' },
      { id: 2, left: 'to sleep like a log', right: 'to sleep very deeply indeed' },
      { id: 3, left: 'to sleep on it', right: 'to wait until tomorrow before deciding' },
      { id: 4, left: 'to nod off', right: 'to fall asleep without meaning to' },
      { id: 5, left: 'to be fast asleep', right: 'to be so deeply asleep you are hard to wake' },
      { id: 6, left: 'to oversleep', right: 'to sleep too long and end up late' },
    ],
  },
  {
    type: 'discussion',
    title: '6 · Personalised speaking',
    body: 'Complete each question for yourself, then ask a partner.',
    bullets: [
      'How long does it usually take you to fall asleep?',
      'Have you (or has anyone in your family) ever suffered from insomnia?',
      'When did you last have a really vivid dream? And a dull one?',
      'Are you wide awake or half asleep at eight in the morning?',
      'Do you ever have a nap, a snooze or a siesta during the day?',
      'How late do you sleep in at weekends?',
      'When did you last have to sleep on an important decision?',
      'Where and when are you most likely to nod off?',
    ],
  },
];

/* ------------------------------------------------------------------ */
/* 3 · BRIDGE "Dreamy Sleep" reading                                   */
/* ------------------------------------------------------------------ */

export const dreamySleepReading: Activity[] = [
  {
    type: 'reading',
    title: '7 · Reading: Dreamy Sleep — what goes on behind closed eyes',
    passage: [
      "The average person sleeps eight hours a day — that's about 122 days every year. We spend a third of our life with our eyes closed, lying down with our muscles relaxed, and our body looks as though it is doing nothing. But is sleep really doing nothing?",
      'Scientists studying sleep have shown that the brain is actively working while we are asleep, processing all the information and experiences we had while we were awake. It is also the time when the body repairs itself after exercise or hard work and, most importantly, when we grow. So when we do not get enough sleep, we have a bad temper, we cannot concentrate at work, and we feel tired all the time.',
      'There are two types of sleep. REM (rapid eye movement) is the time when dreams happen, and NREM (non-rapid eye movement) is deep sleep. We sleep in cycles of REM and NREM. When babies sleep, 50% of the time is spent in REM sleep; by the time we are adults this drops to 20%.',
      "Sometimes it is hard falling asleep, or you have a sleepless night when you cannot sleep properly. Perhaps you are excited or nervous about something, or there is a problem you are worrying about. This is called insomnia, and for some people it is a serious problem that lasts for years. Sleep experts recommend cutting down on caffeine and alcohol — both stimulate the brain — and relaxing in a bath. And don't use a computer just before bedtime.",
      "Sleepwalking and sleep talking happen during our deepest sleep cycles, and it is often very difficult to wake that person up. It is not a sign that anything is wrong, but it is important to keep the person safe: don't let them walk outside or fall down the stairs.",
      'Snoring is the loud noise some people make when they are asleep, and it keeps other people awake. Everyone snores from time to time, but if someone snores a lot, there might be a medical problem such as something blocking the airway. Cutting down on smoking and alcohol and losing weight are common ways to improve your sleep and prevent snoring.',
    ],
  },
  {
    type: 'multiple-choice',
    title: '8 · Reading comprehension: Dreamy Sleep',
    body: 'Choose the best answer according to the text.',
    mcq: [
      {
        question: 'Roughly how many days a year does the average person spend asleep?',
        options: ['52 days', '90 days', '122 days', '180 days'],
        answerIndex: 2,
      },
      {
        question: 'According to the text, what is the brain doing during sleep?',
        options: [
          'shutting down completely',
          'processing the information and experiences of the day',
          'producing caffeine',
          'growing new eyes',
        ],
        answerIndex: 1,
      },
      {
        question: 'What percentage of a baby\u2019s sleep is REM sleep?',
        options: ['20%', '33%', '50%', '75%'],
        answerIndex: 2,
      },
      {
        question: 'Which of these is NOT recommended by sleep experts in the text?',
        options: [
          'relaxing in a bath',
          'cutting down on caffeine',
          'using a computer just before bed',
          'drinking less alcohol',
        ],
        answerIndex: 2,
      },
      {
        question: 'Sleepwalking happens…',
        options: [
          'during REM sleep only',
          'during our deepest sleep cycles',
          'only in children',
          'just before we wake up',
        ],
        answerIndex: 1,
      },
      {
        question: 'Heavy snoring may be a sign of…',
        options: [
          'a blocked airway',
          'a vivid dream',
          'too much exercise',
          'jet lag',
        ],
        answerIndex: 0,
      },
    ],
  },
  {
    type: 'matching',
    title: '9 · Vocabulary from the text',
    body: 'Match the word or phrase from the reading to its meaning.',
    pairs: [
      { id: 1, left: 'to process (information)', right: 'to deal with and organise it' },
      { id: 2, left: 'a bad temper', right: 'a tendency to get angry easily' },
      { id: 3, left: 'to cut down on', right: 'to reduce the amount of something' },
      { id: 4, left: 'to stimulate', right: 'to make something more active' },
      { id: 5, left: 'the airway', right: 'the passage air travels through to the lungs' },
      { id: 6, left: 'to affect', right: 'to influence or have an impact on' },
    ],
  },
];

/* ------------------------------------------------------------------ */
/* 4 · Jessa Gamble — Our natural sleep cycle (Linguahouse)            */
/* ------------------------------------------------------------------ */

export const gambleBeforeWatching: Activity[] = [
  {
    type: 'matching',
    title: '10a · Before you watch: key words',
    body: 'Match the words from the talk to their definitions.',
    pairs: [
      { id: 1, left: 'the tide', right: 'the alternate rising and falling of the sea' },
      { id: 2, left: 'to scramble', right: 'to climb quickly using your arms and legs' },
      { id: 3, left: 'to skitter', right: 'to run lightly and quickly' },
      { id: 4, left: 'to lose the plot', right: 'to stop being able to cope with what is happening' },
      { id: 5, left: 'to rave about', right: 'to talk in an excited, enthusiastic way about something' },
      { id: 6, left: 'atypical', right: 'not representative of a type or group' },
      { id: 7, left: 'a driver', right: 'something that creates activity or change' },
      { id: 8, left: 'a surge', right: 'a sudden increase' },
      { id: 9, left: 'jet lag', right: 'tiredness caused by flying across time zones' },
    ],
  },
];

export const gambleActivities: Activity[] = [
  {
    type: 'multiple-choice',
    title: '10b · True or false?',
    body: 'Decide before you watch, then check while you listen.',
    mcq: [
      { question: 'Every plant and animal has its own internal chemical clock.', options: ['True', 'False'], answerIndex: 0 },
      { question: 'If you take a horseshoe crab off the beach, it changes its behaviour immediately.', options: ['True', 'False'], answerIndex: 1 },
      { question: 'People living underground without a watch get up earlier every day.', options: ['True', 'False'], answerIndex: 1 },
      { question: 'During the 24-hour darkness of an Arctic winter, people are extremely productive.', options: ['True', 'False'], answerIndex: 1 },
      { question: 'Under natural conditions, humans sleep twice every night.', options: ['True', 'False'], answerIndex: 0 },
    ],
  },
  {
    type: 'multiple-choice',
    title: '10c · Checking understanding',
    body: 'Choose the correct answer for each question.',
    mcq: [
      {
        question: 'Why do horseshoe crabs keep behaving as if they were still on their home beach?',
        options: ['They have internal cycles.', 'They have very good memories.', 'They can smell the beach.'],
        answerIndex: 0,
      },
      {
        question: 'How do people underground, with no watch, know when to sleep?',
        options: ['They count the hours.', 'They have internal body clocks.', 'Someone tells them.'],
        answerIndex: 1,
      },
      {
        question: 'Why are people so active in the Arctic summer?',
        options: ['Because it is warmer.', 'Because it is never dark.', 'Because they eat more.'],
        answerIndex: 1,
      },
      {
        question: 'What do volunteers in natural-sleep studies experience for the first time?',
        options: ['Deep sleep', 'Cleaner air', 'True wakefulness'],
        answerIndex: 2,
      },
      {
        question: 'Why are our body clocks disturbed today?',
        options: ['Because of modern culture', 'Because of climate change', 'Because of watches'],
        answerIndex: 0,
      },
    ],
  },
  {
    type: 'drag-fill',
    title: '10d · Find the words',
    body: 'Complete the sentences with words from the talk.',
    blanks: [
      { prompt: 'There is nothing psychic or ___ going on — the crabs simply have internal cycles.', answer: 'paranormal' },
      { prompt: 'Volunteers are shut into a ___ deep underground for a couple of months.', answer: 'bunker' },
      { prompt: 'They get up a little later each day and gradually ___ all the way around the clock.', answer: 'drift' },
      { prompt: 'The body clock is, Gamble says, the most ___ force acting on our behaviour.', answer: 'underrated' },
      { prompt: 'In an Arctic summer there is ___ daylight, and hunting becomes almost manic.', answer: 'perpetual' },
      { prompt: 'People in these studies report experiencing true ___ for the first time in their lives.', answer: 'wakefulness' },
    ],
  },
];

/* ------------------------------------------------------------------ */
/* 5 · Arianna Huffington — How to succeed? Get more sleep             */
/* ------------------------------------------------------------------ */

export const huffingtonActivities: Activity[] = [
  {
    type: 'matching',
    title: '11a · Pre-watching vocabulary',
    body: 'Match the words you will hear in the talk to their meanings.',
    pairs: [
      { id: 1, left: 'deprived', right: 'lacking something you need' },
      { id: 2, left: 'exhaustion', right: 'extreme physical or mental tiredness' },
      { id: 3, left: 'to brag', right: 'to boast about yourself' },
      { id: 4, left: 'one-upmanship', right: 'constantly trying to do better than others' },
      { id: 5, left: 'hyper-connected', right: 'always online and reachable' },
      { id: 6, left: 'a crisis', right: 'a disaster or very serious situation' },
      { id: 7, left: 'to faint', right: 'to lose consciousness briefly' },
    ],
  },
  {
    type: 'multiple-choice',
    title: '11b · Comprehension',
    body: 'Watch the four-minute talk and choose the best answer.',
    mcq: [
      {
        question: 'What made Arianna Huffington rediscover the value of sleep?',
        options: [
          'She read a scientific study.',
          'She collapsed from exhaustion, hit her head and broke her cheekbone.',
          'Her doctor put her on medication.',
          'She moved to a different time zone.',
        ],
        answerIndex: 1,
      },
      {
        question: 'According to Huffington, how do many successful men treat sleep?',
        options: [
          'They protect it carefully.',
          'They brag about how little of it they get.',
          'They sleep more than women do.',
          'They never discuss it.',
        ],
        answerIndex: 1,
      },
      {
        question: 'She argues that sleep deprivation has become a kind of…',
        options: ['one-upmanship', 'illness', 'luxury', 'hobby'],
        answerIndex: 0,
      },
      {
        question: 'Why, in her view, are leaders making poor decisions?',
        options: [
          'They lack information.',
          'They are too idealistic.',
          'They are exhausted and cannot see the bigger picture.',
          'They listen to too many advisers.',
        ],
        answerIndex: 2,
      },
      {
        question: 'What does she say we can achieve by sleeping more?',
        options: [
          'Longer working hours',
          'Greater productivity, better decisions and more joy',
          'A higher salary',
          'Fewer meetings',
        ],
        answerIndex: 1,
      },
    ],
  },
  {
    type: 'discussion',
    title: '11c · Over to you',
    body: 'Discuss or write a short response.',
    bullets: [
      'Do people in your country brag about how little they sleep? Why (not)?',
      'Do you agree that "the way to a more productive life is to sleep our way to the top"?',
      'Did you use to sacrifice sleep for work or study? What has changed?',
    ],
  },
];

/* ------------------------------------------------------------------ */
/* 6 · Dan Gartenberg — The brain benefits of deep sleep               */
/* ------------------------------------------------------------------ */

export const gartenbergActivities: Activity[] = [
  {
    type: 'drag-fill',
    title: '12a · Note-taking while you watch',
    body: 'Complete these notes with the missing words.',
    blanks: [
      { prompt: 'The deepest stage of sleep is called ___ -wave sleep, when the brain produces its slowest brainwaves.', answer: 'slow' },
      { prompt: 'Deep sleep helps move memories from short-term storage into long-term ___.', answer: 'memory' },
      { prompt: 'Gartenberg\u2019s team plays quiet ___ in time with the sleeper\u2019s brainwaves to make deep sleep deeper.', answer: 'sounds' },
      { prompt: 'Poor deep sleep is linked to conditions such as heart disease and ___ disease.', answer: 'Alzheimer\u2019s' },
      { prompt: 'He argues that sleep should be treated as a ___ , not as a luxury.', answer: 'necessity' },
    ],
  },
  {
    type: 'multiple-choice',
    title: '12b · Comprehension',
    body: 'Choose the best answer.',
    mcq: [
      {
        question: 'Which stage of sleep does Gartenberg focus on?',
        options: ['Light sleep', 'REM / dream sleep', 'Deep, slow-wave sleep', 'The moment of waking'],
        answerIndex: 2,
      },
      {
        question: 'What does he compare a good night of deep sleep to?',
        options: [
          'A cleaning and filing system for the brain',
          'A long-distance run',
          'A cold shower',
          'A cup of strong coffee',
        ],
        answerIndex: 0,
      },
      {
        question: 'What technology does his team use to improve deep sleep?',
        options: [
          'Bright morning light',
          'Sounds played in rhythm with the sleeper\u2019s own brainwaves',
          'Vibrating mattresses',
          'Sleeping tablets',
        ],
        answerIndex: 1,
      },
      {
        question: 'What is the main message of the talk?',
        options: [
          'We should all sleep in complete silence.',
          'Sleep quality matters as much as sleep quantity, and it can be improved.',
          'Naps are better than night sleep.',
          'Only older people need deep sleep.',
        ],
        answerIndex: 1,
      },
    ],
  },
];

/* ------------------------------------------------------------------ */
/* 7 · NEF File 5 Revise & Check — "Still awake after 33 years"        */
/* ------------------------------------------------------------------ */

export const nefReviewActivities: Activity[] = [
  {
    type: 'reading',
    title: '13 · Reading: Still awake after 33 years!',
    body: 'The man who became the village "alarm clock".',
    passage: [
      "As the birds awaken the early risers at dawn on the farm, one person is already up; in fact, he hasn't even been to bed. Sixty-four-year-old Thai Ngoc, from central Quang Nam province in Vietnam, claims that he has not slept for 33 years.",
      "'My insomnia started many years ago after I got a fever. I have tried sleeping pills and Vietnamese traditional medicine, but nothing helps, not even to get me to sleep for a few minutes,' said Ngoc. Amazingly, despite 11,700 consecutive sleepless nights, he has never once been ill. 'Fortunately, the insomnia doesn't seem to have had a negative impact on my health. I still feel healthy and can farm normally like other men. I even carry two 50kg bags of fertiliser for 4km every day.'",
      'According to his wife, when Ngoc went for a medical check-up recently, his doctor said he was in perfect health except for a minor decline in liver function.',
      'Ngoc lives with his six children on his farm at the foot of a mountain. He spends the day farming and taking care of his pigs and chickens, and at night he often does extra farm work or guards the farm to prevent theft. His neighbour Vu said that Ngoc volunteered to beat a drum during the night and guard the house for the relatives of the dead during funeral ceremonies so that they could take a nap. Vu also said that when the villagers were planting sugar cane, several people asked Ngoc to be their "alarm clock" and wake them early in the morning, as he was up anyway.',
      'Phan Ngoc Ha, director of the Hoa Khanh Mental Hospital in Danang, said that a chronic lack of sleep often causes anorexia, lethargy and irritability. But in special cases some extreme insomniacs can still live and work normally, although this is a very small minority. Thai Ngoc is obviously one of them.',
    ],
  },
  {
    type: 'multiple-choice',
    title: '14 · Reading comprehension',
    body: 'Choose a, b or c according to the article.',
    mcq: [
      { question: 'Ngoc is already up when the birds wake the early risers at…', options: ['night', 'dawn', 'mid-day'], answerIndex: 1 },
      { question: 'He says that sleeping pills and traditional medicine…', options: ['do nothing at all', 'help a little', 'work for a few minutes'], answerIndex: 0 },
      { question: 'In 33 years without sleep he has never been…', options: ['asleep', 'ill', 'happy'], answerIndex: 1 },
      { question: '___ his wife, his recent check-up showed he was in perfect health.', options: ['Because of', 'According to', 'Thanks to'], answerIndex: 1 },
      { question: 'During the day he farms and…', options: ['cooks for the village', 'buys animals', 'takes care of his pigs and chickens'], answerIndex: 2 },
      { question: 'He guarded houses during funerals ___ the relatives could take a nap.', options: ['so that', 'however', 'because'], answerIndex: 0 },
      { question: 'A chronic lack of ___ often causes anorexia and irritability.', options: ['appetite', 'sleep', 'sleeping tablets'], answerIndex: 1 },
      { question: 'Some extreme insomniacs live normally, ___ this is a very small minority.', options: ['so', 'even', 'although'], answerIndex: 2 },
    ],
  },
  {
    type: 'drag-fill',
    title: '15 · File 5 review: sleep and habits',
    body: 'Complete each sentence with the correct form. Drag the words into the gaps.',
    blanks: [
      { prompt: "After a year in London, I still can't ___ used to driving on the left.", answer: 'get' },
      { prompt: 'When I was a teenager, I ___ to have really long hair.', answer: 'used' },
      { prompt: "I'm a night nurse, so I ___ used to working while everyone else sleeps.", answer: 'am' },
      { prompt: 'Could I have an extra ___ for my bed, please? I get cold at night.', answer: 'pillow' },
      { prompt: 'My husband ___ so loudly that I have to wear earplugs.', answer: 'snores' },
      { prompt: "I didn't sleep much last night, so I'm going to have a ___ after lunch.", answer: 'nap' },
      { prompt: 'He has terrible ___ — it takes him hours to get to sleep.', answer: 'insomnia' },
      { prompt: "Did you hear the weather ___ ? It's going to rain all night.", answer: 'forecast' },
    ],
  },
  {
    type: 'task',
    title: '16 · Can you…?',
    body: 'Check yourself against the File 5 targets. Can you do all of these in English?',
    bullets: [
      'describe your sleep habits and any problems you have with sleeping',
      'talk about things you used to do and things you have got used to doing',
      'explain what happens to your body and brain when you sleep',
      'give advice to someone who cannot sleep',
    ],
  },
];

/* ------------------------------------------------------------------ */
/* 8 · Advanced stretch — Vocabulary & Structure Practice, Test 9      */
/* ------------------------------------------------------------------ */

export const advancedStretch: Activity[] = [
  {
    type: 'multiple-choice',
    title: '17 · Stretch task (C1): sleeping disorders cloze',
    body: 'An advanced text on insomnia. Choose the word that best completes each gap. This section is harder than the rest of the lesson — treat it as a challenge.',
    mcq: [
      {
        question: 'Sleeping disorders like insomnia ___ to be a worrying question for many of us.',
        options: ['present', 'entail', 'continue', 'prove'],
        answerIndex: 3,
      },
      {
        question: 'Almost anyone can easily conjure ___ at least one sleepless night.',
        options: ['up', 'about', 'off', 'out'],
        answerIndex: 0,
      },
      {
        question: 'a sleepless night of ___ and turning in bed',
        options: ['rolling', 'wriggling', 'tossing', 'spinning'],
        answerIndex: 2,
      },
      {
        question: 'A third of us ___ this distressing experience at least once a week.',
        options: ['underpass', 'undergo', 'underlie', 'undertake'],
        answerIndex: 1,
      },
      {
        question: 'Such occurrences are rather few and far ___ .',
        options: ['between', 'along', 'within', 'beyond'],
        answerIndex: 0,
      },
      {
        question: 'There is no evidence to ___ this assumption.',
        options: ['proclaim', 'endure', 'invalidate', 'substantiate'],
        answerIndex: 3,
      },
      {
        question: 'We need sleep to regenerate our strength and to ___ the brain to its proper activity.',
        options: ['recuperate', 'restore', 'revive', 'resume'],
        answerIndex: 1,
      },
      {
        question: 'Tiredness after a sleepless night ___ many of us to reach for chemical support.',
        options: ['exerts', 'affects', 'enforces', 'compels'],
        answerIndex: 3,
      },
      {
        question: 'in the form of sleep- ___ tablets or powders',
        options: ['inducing', 'attaining', 'exacting', 'contributing'],
        answerIndex: 0,
      },
      {
        question: 'Insomnia ___ those who are exposed to a great deal of stress or anxiety.',
        options: ['betrays', 'besets', 'bemoans', 'bestows'],
        answerIndex: 1,
      },
      {
        question: 'It may also be ___ by overworking or unfavourable surroundings.',
        options: ['engendered', 'applied', 'instigated', 'evolved'],
        answerIndex: 0,
      },
      {
        question: 'Our hopes should be ___ on the medical authorities.',
        options: ['placed', 'ascribed', 'focused', 'attached'],
        answerIndex: 0,
      },
      {
        question: '…to ___ the root cause of insomnia.',
        options: ['emerge', 'release', 'determine', 'confess'],
        answerIndex: 2,
      },
    ],
  },
];

/* ------------------------------------------------------------------ */
/* 9 · Wrap-up                                                         */
/* ------------------------------------------------------------------ */

export const wrapUpTasks: Activity[] = [
  {
    type: 'task',
    title: '18 · Speaking task: the sleep interview',
    body: 'Work in pairs. Student A is a sleep coach, Student B is a client who sleeps badly.',
    bullets: [
      'B: describe your routine and your problem, using at least four words from the flashcards.',
      'A: ask about what B used to do, and what B could get used to doing instead.',
      'A: give three pieces of practical advice from the readings and the talks.',
      'Then swap roles.',
    ],
  },
  {
    type: 'task',
    title: '19 · Writing task (180–220 words)',
    body: 'Choose one of the following.',
    bullets: [
      'An article for a student magazine: "Five things I used to do that ruined my sleep — and what I do now."',
      'An opinion piece: "Sleep deprivation should not be a badge of honour." Refer to Arianna Huffington\u2019s talk.',
      'A summary of Jessa Gamble\u2019s talk: what would our natural sleep pattern look like, and why don\'t we live that way?',
    ],
  },
];
