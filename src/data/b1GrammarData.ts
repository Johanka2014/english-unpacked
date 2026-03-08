import { BookOpen, Clock, FileText, Megaphone, HelpCircle, Pen, GitBranch, Layers } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import describingImg from '@/assets/b1-describing-things.jpg';
import tensesImg from '@/assets/b1-tenses.jpg';
import nounsDeterminersImg from '@/assets/b1-nouns-determiners.jpg';
import futureModalsImg from '@/assets/b1-future-modals.jpg';
import questionsPrepImg from '@/assets/b1-questions-prepositions.jpg';
import verbPatternsImg from '@/assets/b1-verb-patterns.jpg';
import conditionalsImg from '@/assets/b1-conditionals.jpg';
import advancedImg from '@/assets/b1-advanced-structures.jpg';

// ── Types ──────────────────────────────────────────────────────────────

export interface GrammarTheorySection {
  heading: string;
  content: string; // HTML
  notes?: string[];
}

export interface CompoundGroups {
  groupA: string[];
  groupB: string[];
  compounds: { a: string; b: string }[];
}

export interface EmailSegment {
  text?: string;
  error?: string;
  correction?: string;
}

export interface GrammarExercise {
  id: string;
  title: string;
  instruction: string;
  type: 'matching' | 'fill-blank' | 'rewrite' | 'multiple-choice' | 'noun-compound' | 'error-correction';
  items: {
    id: number;
    prompt: string;
    answer: string;
    options?: string[];
    hint?: string;
  }[];
  compoundGroups?: CompoundGroups;
  emailSegments?: EmailSegment[];
}

export interface B1GrammarModule {
  id: string;
  number: number;
  title: string;
  subtitle: string; // e.g. "adjective position; adjective order; -ing/-ed adjectives"
  theory?: GrammarTheorySection[];
  exercises?: GrammarExercise[];
  examPractice?: {
    description: string;
    type: string;
    intro?: string;
    people?: { id: number; name: string; description: string }[];
    options?: { letter: string; title: string; description: string }[];
    answers?: Record<number, string>;
    grammarFocusTask?: {
      instruction: string;
      items: { id: number; sentence: string; adjectives: string[]; answer: string }[];
    };
  };
}

export interface B1GrammarSection {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  image: string;
  modules: B1GrammarModule[];
}

// ── Module 1: Adjectives (fully populated) ─────────────────────────────

const module1Theory: GrammarTheorySection[] = [
  {
    heading: 'B1 — Adjective Position',
    content: `
      <p>Adjectives usually go <strong>before</strong> nouns:</p>
      <ul>
        <li><em>I bought a <strong>white</strong> T-shirt.</em> (not <em>a T-shirt white</em>)</li>
        <li>Adjectives don't change for plural: <em>some white T-shirts</em> (not <em>whites T-shirts</em>)</li>
      </ul>
      <p>Adjectives go <strong>after</strong> some verbs — <em>be, get, become, look, seem, appear, sound, taste, smell, feel</em>:</p>
      <ul>
        <li><em>They're <strong>comfortable</strong> and they'll look <strong>good</strong> with the skirt.</em></li>
        <li><em>The material felt really <strong>soft</strong>.</em></li>
      </ul>
      <p>A few adjectives (<em>afraid, alone, asleep, awake</em>) can only go after a verb:</p>
      <ul>
        <li><em>The cat was <strong>asleep</strong> on the bed.</em> (not <em>The asleep cat…</em>)</li>
      </ul>
    `,
  },
  {
    heading: 'B2 — Adjective Order',
    content: `
      <p>When there are two or more adjectives before a noun, they follow this order:</p>
      <table class="w-full text-sm border-collapse my-3">
        <thead><tr class="border-b"><th class="text-left p-2">Opinion</th><th class="text-left p-2">Size / Age / Shape</th><th class="text-left p-2">Colour</th><th class="text-left p-2">Material</th><th class="text-left p-2">Noun</th></tr></thead>
        <tbody>
          <tr class="border-b"><td class="p-2">a lovely</td><td class="p-2">short</td><td class="p-2">black</td><td class="p-2">wool</td><td class="p-2">skirt</td></tr>
          <tr class="border-b"><td class="p-2">a beautiful</td><td class="p-2"></td><td class="p-2">grey</td><td class="p-2">leather</td><td class="p-2">bag</td></tr>
          <tr class="border-b"><td class="p-2">my favourite</td><td class="p-2">long</td><td class="p-2">black</td><td class="p-2"></td><td class="p-2">boots</td></tr>
          <tr><td class="p-2">some</td><td class="p-2">old</td><td class="p-2">blue</td><td class="p-2"></td><td class="p-2">jeans</td></tr>
        </tbody>
      </table>
      <p>Put <em>and</em> between two colour adjectives: <em>a black <strong>and</strong> white belt</em>.</p>
      <p>Put <em>and</em> between two adjectives after a verb: <em>Clothes shops are always boring <strong>and</strong> crowded.</em></p>
    `,
  },
  {
    heading: 'B3 — Adjectives ending in -ing and -ed',
    content: `
      <p>Some adjectives have two forms with different meanings:</p>
      <ul>
        <li><strong>-ing</strong> adjectives describe people and things: <em>Clothes shops are <strong>boring</strong>.</em></li>
        <li><strong>-ed</strong> adjectives describe feelings: <em>I'm <strong>bored</strong>.</em></li>
      </ul>
      <p>More examples:</p>
      <ul>
        <li><em>That's <strong>surprising</strong> news.</em> → <em>We're <strong>surprised</strong>.</em></li>
        <li><em>Computer shops are <strong>interesting</strong>.</em> → <em>You're not <strong>interested</strong> in clothes.</em></li>
      </ul>
    `,
  },
  {
    heading: 'B4 — Nouns used as Adjectives',
    content: `
      <p>When two nouns go together, the first one works like an adjective:</p>
      <ul>
        <li><em>a <strong>birthday</strong> party</em> — "birthday" tells us what kind of party</li>
        <li><em>a <strong>clothes</strong> shop, a <strong>computer</strong> game, a <strong>language</strong> school, a <strong>student</strong> card</em></li>
      </ul>
    `,
  },
];

const module1Exercises: GrammarExercise[] = [
  {
    id: 'm1-c1',
    title: 'Exercise C1 — Matching',
    instruction: 'Match the halves of these sentences.',
    type: 'matching',
    items: [
      { id: 1, prompt: 'My boyfriend sounded', answer: 'sad on the phone' },
      { id: 2, prompt: 'The school was', answer: 'unusual because it had no rules' },
      { id: 3, prompt: 'My boss seemed', answer: 'angry but she was just in a hurry' },
      { id: 4, prompt: 'We got', answer: 'wet because we didn\'t have our raincoats' },
      { id: 5, prompt: 'The bread tasted', answer: 'wonderful because it was home-made' },
      { id: 6, prompt: 'I was feeling', answer: 'tired because I got up too early' },
      { id: 7, prompt: 'The milk smelled', answer: 'bad so we didn\'t drink it' },
    ],
  },
  {
    id: 'm1-c2',
    title: 'Exercise C2 — Adjective Order',
    instruction: 'Rewrite these sentences adding the adjectives in the correct order.',
    type: 'rewrite',
    items: [
      { id: 1, prompt: 'I wore my ___ jeans when I painted the ceiling. (old / blue / dirty)', answer: 'dirty old blue' },
      { id: 2, prompt: 'I borrowed my sister\'s ___ dress to wear to the party. (silk / lovely / long)', answer: 'lovely long silk' },
      { id: 3, prompt: 'I was surprised that Mike wore that ___ jacket. (white / cotton)', answer: 'white cotton' },
      { id: 4, prompt: 'He bought some ___ shoes yesterday. (expensive / new)', answer: 'expensive new' },
      { id: 5, prompt: 'Jenny\'s father gave her a ___ necklace for her 18th birthday. (long / gold / beautiful)', answer: 'beautiful long gold' },
    ],
  },
  {
    id: 'm1-c3',
    title: 'Exercise C3 — -ing or -ed?',
    instruction: 'Choose the correct adjective in each sentence.',
    type: 'multiple-choice',
    items: [
      { id: 1, prompt: 'That was an ___ lesson.', answer: 'interesting', options: ['interesting', 'interested'] },
      { id: 2, prompt: 'My parents were ___ after the long flight.', answer: 'tired', options: ['tiring', 'tired'] },
      { id: 3, prompt: 'We were ___ so we went to the cinema.', answer: 'bored', options: ['boring', 'bored'] },
      { id: 4, prompt: 'I enjoy my job but it\'s very ___.', answer: 'tiring', options: ['tiring', 'tired'] },
      { id: 5, prompt: 'You\'ll be ___ when I tell you what happened.', answer: 'surprised', options: ['surprising', 'surprised'] },
      { id: 6, prompt: 'We were ___ about seeing Michael again.', answer: 'excited', options: ['exciting', 'excited'] },
      { id: 7, prompt: 'All the programmes on TV tonight look ___.', answer: 'boring', options: ['boring', 'bored'] },
      { id: 8, prompt: 'I\'m staying in an ___ hotel.', answer: 'amazing', options: ['amazing', 'amazed'] },
      { id: 9, prompt: 'My friend was ___ with me because I was late.', answer: 'annoyed', options: ['annoying', 'annoyed'] },
      { id: 10, prompt: 'Hans is ___ in art so I took him to the Picasso exhibition.', answer: 'interested', options: ['interesting', 'interested'] },
    ],
  },
  {
    id: 'm1-c4',
    title: 'Exercise C4 — Noun Compounds',
    instruction: 'Match a noun in A with each noun in B then complete the sentences below.',
    type: 'noun-compound',
    compoundGroups: {
      groupA: ['address', 'alarm', 'bus', 'city', 'credit', 'football', 'evening', 'film', 'fire', 'police', 'traffic', 'wedding'],
      groupB: ['book', 'boots', 'car', 'card', 'centre', 'clock', 'engine', 'invitation', 'jam', 'performance', 'star', 'stop'],
      compounds: [
        { a: 'address', b: 'book' },
        { a: 'alarm', b: 'clock' },
        { a: 'bus', b: 'stop' },
        { a: 'city', b: 'centre' },
        { a: 'credit', b: 'card' },
        { a: 'football', b: 'boots' },
        { a: 'evening', b: 'performance' },
        { a: 'film', b: 'star' },
        { a: 'fire', b: 'engine' },
        { a: 'police', b: 'car' },
        { a: 'traffic', b: 'jam' },
        { a: 'wedding', b: 'invitation' },
      ],
    },
    items: [
      { id: 1, prompt: 'Everyone was looking at the ___ as she came into the hotel.', answer: 'film star' },
      { id: 2, prompt: 'The café wouldn\'t accept my ___ so I paid cash.', answer: 'credit card' },
      { id: 3, prompt: 'I usually clean my ___ when I get home from a match.', answer: 'football boots' },
      { id: 4, prompt: 'We couldn\'t get tickets for the ___ so we went in the afternoon.', answer: 'evening performance' },
      { id: 5, prompt: 'Our teacher was late because there was a big ___ on the motorway.', answer: 'traffic jam' },
    ],
  },
  {
    id: 'm1-c5',
    title: 'Exercise C5 — Error Correction',
    instruction: 'Read Duncan\'s email and find the 7 adjective mistakes. Click on the underlined words to correct them.',
    type: 'error-correction',
    items: [],
    emailSegments: [
      { text: 'Hi Marta,\n\nI\'m having a great time here. I\'m living in a ' },
      { error: 'town very small', correction: 'very small town' },
      { text: '. It\'s got some ' },
      { error: 'old beautiful buildings', correction: 'beautiful old buildings' },
      { text: ' and there are some ' },
      { error: 'galleries art', correction: 'art galleries' },
      { text: ' which are worth seeing. I don\'t usually like art but I never get ' },
      { error: 'boring', correction: 'bored' },
      { text: ' here because there\'s so much to do.\n\nThe beach is lovely and sandy and the sea is warm. I\'ve bought some ' },
      { error: 'cheaps clothes', correction: 'cheap clothes' },
      { text: ' in the market and I\'ve been to my ' },
      { error: 'restaurant favourite', correction: 'favourite restaurant' },
      { text: ' a few times.\n\nI\'ve got some ' },
      { error: 'excited news', correction: 'exciting news' },
      { text: '. My company has offered me a job here! I\'ll tell you all about it when I see you.\n\nLove,\nDuncan' },
    ],
  },
];

// ── All 30 Modules ─────────────────────────────────────────────────────

export const b1GrammarSections: B1GrammarSection[] = [
  {
    id: 'describing',
    title: 'Describing Things',
    description: 'Adjectives, adverbs and comparisons',
    icon: BookOpen,
    image: describingImg,
    modules: [
      {
        id: 'adjectives',
        number: 1,
        title: 'Adjectives',
        subtitle: 'adjective position; adjective order; -ing/-ed adjectives; nouns as adjectives',
        theory: module1Theory,
        exercises: module1Exercises,
        examPractice: {
          description: 'Reading Part 2',
          type: 'reading',
          intro: 'The people below all want to hire bikes for short trips. On the right there are eight cycle trips in a tourist information brochure. Decide which trip would be the most suitable for the following people. For questions 1–5, drag the correct letter (A–H) to each person.',
          people: [
            { id: 1, name: 'David', description: 'David is an experienced cyclist. He has a couple of days to spend on his hobby of bird-watching. He has a small tent and wants to get away from the crowds.' },
            { id: 2, name: 'Ian, Kim & Kylie', description: 'Ian and his daughters Kim and Kylie would like an easy bike ride with time to play on the beach and have a swim in the sea. They have a picnic with them.' },
            { id: 3, name: 'Nadine & Lee', description: 'Nadine and Lee are interested in old buildings. They don\'t mind a few hills, but don\'t want to go to the mountains. They\'d like to go to a restaurant for lunch.' },
            { id: 4, name: 'Elizabeth', description: 'Elizabeth enjoys cycling to keep fit, but she must be at home in the evening. She enjoys drawing and taking photographs of unusual natural scenery.' },
            { id: 5, name: 'Zoe & Bea', description: 'Zoe and Bea don\'t want to cycle very far and they can\'t start early in the morning. They\'re interested in art and would like to have lunch somewhere near the sea.' },
          ],
          options: [
            { letter: 'A', title: 'Seaview Gallery', description: 'Less than an hour\'s ride along the coast road. Shows paintings and photographs by local artists in attractive rooms on the cliffs. Open 2pm–5pm. There\'s a teashop next door which serves delicious lunches and teas.' },
            { letter: 'B', title: 'Ailsham Campsite', description: 'An excellent destination for families. The route includes only one tiny hill and the views of woods and farmland are lovely. Stop for a picnic under the trees. When you arrive, enjoy a swim in the river, then spend a night in one of the tents provided.' },
            { letter: 'C', title: 'Ailmouth Castle', description: 'Picnic at Ailmouth Castle after a two-hour cycle ride along the coast. For five hundred years it has stood on the cliffs, looking down on the dangerous black rocks and waves far below. Now it\'s a beautiful old ruin. Remember your camera, because you\'ll want to photograph it at sunset.' },
            { letter: 'D', title: 'Mountain Day Trip', description: 'If you enjoy really brilliant scenery and don\'t mind starting early, go to the mountains for the day. You\'ll want to bring your camera with you for the amazing rocks, quiet pools and exciting waterfalls. The return journey is all downhill, so you can get back quickly in the afternoon.' },
            { letter: 'E', title: 'Coastal Beach Ride', description: 'This pleasant flat route uses the pretty little lanes which follow the coast to an excellent sandy beach, less than an hour away. There\'s plenty of room for ball games and it\'s very safe to swim. A pleasant day out for anyone who can ride a bike.' },
            { letter: 'F', title: 'Otterbourne Hall', description: 'A good day\'s bike ride through attractive countryside away from the coast brings you to Otterbourne Hall, a historic house open to the public. You can enjoy a surprisingly cheap but delicious lunch in the cosy restaurant, and then you\'ll be pleased to discover that there are no steep hills on the return route.' },
            { letter: 'G', title: 'Mountain Camping', description: 'Perfect for active young cyclists who enjoy being alone in beautiful scenery. Leave in the afternoon to catch the wonderful sunset from high in the mountains. Camping is permitted for up to two nights. See wild birds and animals among the rocks and trees.' },
            { letter: 'H', title: 'Fendwich Restaurant', description: 'Only half an hour\'s ride away at Fendwich, is a popular new restaurant with amazing views across the beach. Eat a delicious lunch and watch the birds on the cliffs, then look round the souvenir shops before cycling back along the coast. An excellent trip if you don\'t have a whole day available.' },
          ],
          answers: { 1: 'G', 2: 'E', 3: 'F', 4: 'D', 5: 'A' },
          grammarFocusTask: {
            instruction: 'Put the two adjectives in each sentence into the correct order. Check your answers by finding them in the text.',
            items: [
              { id: 1, sentence: 'He told us about the ___ snakes in the jungle.', adjectives: ['black', 'dangerous'], answer: 'dangerous black' },
              { id: 2, sentence: 'There was a ___ tree in the middle of the field.', adjectives: ['beautiful', 'old'], answer: 'beautiful old' },
              { id: 3, sentence: 'We followed a ___ path beside the river.', adjectives: ['flat', 'pleasant'], answer: 'pleasant flat' },
              { id: 4, sentence: 'The model wore a ___ hat which matched her coat.', adjectives: ['little', 'pretty'], answer: 'pretty little' },
              { id: 5, sentence: 'The old couple employed two ___ students to tidy their garden.', adjectives: ['active', 'young'], answer: 'active young' },
              { id: 6, sentence: 'We went to a concert by a ___ band.', adjectives: ['new', 'popular'], answer: 'popular new' },
            ],
          },
        },
      },
      {
        id: 'adverbs',
        number: 2,
        title: 'Adverbs',
        subtitle: 'using and forming; irregular adverbs; position; modifying adverbs and adjectives',
      },
      {
        id: 'comparisons',
        number: 3,
        title: 'Comparisons',
        subtitle: 'comparative and superlative adjectives and adverbs; comparing nouns',
      },
    ],
  },
  {
    id: 'tenses',
    title: 'Tenses',
    description: 'Present, past and perfect tenses',
    icon: Clock,
    image: tensesImg,
    modules: [
      {
        id: 'present-tenses',
        number: 4,
        title: 'Present Tenses',
        subtitle: 'present simple; present continuous; state verbs; have got and have',
      },
      {
        id: 'past-tenses',
        number: 5,
        title: 'Past Tenses',
        subtitle: 'past simple; past continuous',
      },
      {
        id: 'present-perfect-past-simple',
        number: 6,
        title: 'Present Perfect and Past Simple',
        subtitle: 'present perfect and past simple; have gone and have been',
      },
      {
        id: 'past-perfect',
        number: 7,
        title: 'Past Perfect',
        subtitle: 'past perfect and past simple; used to',
      },
    ],
  },
  {
    id: 'nouns-determiners',
    title: 'Nouns & Determiners',
    description: 'Nouns, articles, pronouns and determiners',
    icon: FileText,
    image: nounsDeterminersImg,
    modules: [
      {
        id: 'nouns',
        number: 8,
        title: 'Nouns',
        subtitle: 'plurals; countable and uncountable; a/the/no article',
      },
      {
        id: 'determiners-pronouns-1',
        number: 9,
        title: 'Determiners and Pronouns 1',
        subtitle: 'some/any; somebody/anybody etc.; much/many etc.',
      },
      {
        id: 'determiners-pronouns-2',
        number: 10,
        title: 'Determiners and Pronouns 2',
        subtitle: 'each/every; all/whole; both/neither/either',
      },
      {
        id: 'determiners-pronouns-3',
        number: 11,
        title: 'Determiners and Pronouns 3',
        subtitle: 'personal pronouns; possessives; reflexive pronouns; there + to be',
      },
    ],
  },
  {
    id: 'future-modals',
    title: 'Future & Modals',
    description: 'Future forms, obligation, permission and ability',
    icon: Megaphone,
    image: futureModalsImg,
    modules: [
      {
        id: 'the-future',
        number: 12,
        title: 'The Future',
        subtitle: 'will; going to; present continuous; present simple',
      },
      {
        id: 'modals-1',
        number: 13,
        title: 'Modals 1',
        subtitle: 'polite requests; asking someone to do something; suggestions and offers; permission',
      },
      {
        id: 'modals-2',
        number: 14,
        title: 'Modals 2',
        subtitle: 'obligation; necessity; orders and advice',
      },
      {
        id: 'modals-3',
        number: 15,
        title: 'Modals 3',
        subtitle: 'certainty and possibility; ability',
      },
    ],
  },
  {
    id: 'questions-prepositions',
    title: 'Questions & Prepositions',
    description: 'Question forms, prepositions of place, time and expressions',
    icon: HelpCircle,
    image: questionsPrepImg,
    modules: [
      {
        id: 'questions-answers',
        number: 16,
        title: 'Questions and Answers',
        subtitle: 'yes/no; short answers; question words; agreeing with statements',
      },
      {
        id: 'prepositions-1',
        number: 17,
        title: 'Prepositions 1',
        subtitle: 'place and movement',
      },
      {
        id: 'prepositions-2',
        number: 18,
        title: 'Prepositions 2',
        subtitle: 'time',
      },
      {
        id: 'prepositions-3',
        number: 19,
        title: 'Prepositions 3',
        subtitle: 'expressions with prepositions; verbs and adjectives + prepositions; phrasal verbs',
      },
    ],
  },
  {
    id: 'verb-patterns',
    title: 'Verb Patterns',
    description: 'The -ing form and infinitives',
    icon: Pen,
    image: verbPatternsImg,
    modules: [
      {
        id: 'the-ing-form',
        number: 20,
        title: 'The -ing Form',
        subtitle: '-ing as subject; before/after etc. + -ing; prepositions + -ing; go/come + -ing',
      },
      {
        id: 'to-or-ing',
        number: 21,
        title: 'To or -ing?',
        subtitle: 'verbs + to infinitive; make and let; verbs + -ing; verbs + to infinitive or + -ing',
      },
    ],
  },
  {
    id: 'conditionals',
    title: 'Conditionals',
    description: 'Zero, first and second conditionals; wishes',
    icon: GitBranch,
    image: conditionalsImg,
    modules: [
      {
        id: 'conditionals-1',
        number: 22,
        title: 'Conditionals 1',
        subtitle: 'zero conditional; first conditional; unless',
      },
      {
        id: 'conditionals-2',
        number: 23,
        title: 'Conditionals 2',
        subtitle: 'second conditional; I wish',
      },
    ],
  },
  {
    id: 'advanced-structures',
    title: 'Advanced Structures',
    description: 'Passive, reported speech, relative clauses and linking words',
    icon: Layers,
    image: advancedImg,
    modules: [
      {
        id: 'the-passive',
        number: 24,
        title: 'The Passive',
        subtitle: 'passive forms and uses; to have something done',
      },
      {
        id: 'reported-speech-1',
        number: 25,
        title: 'Reported Speech 1',
        subtitle: 'reporting what someone said; words which change',
      },
      {
        id: 'reported-speech-2',
        number: 26,
        title: 'Reported Speech 2',
        subtitle: 'said and told; other verbs used for reporting; reporting questions; polite questions',
      },
      {
        id: 'relative-clauses',
        number: 27,
        title: 'Relative Clauses',
        subtitle: 'which, who and that; whose and where',
      },
      {
        id: 'so-such-too-enough',
        number: 28,
        title: 'So/Such; Too/Enough',
        subtitle: 'so/such (+ that); enough and too (+ to infinitive and for)',
      },
      {
        id: 'linking-words-1',
        number: 29,
        title: 'Linking Words 1',
        subtitle: 'because (of), as and since; so and therefore; to and in order to',
      },
      {
        id: 'linking-words-2',
        number: 30,
        title: 'Linking Words 2',
        subtitle: 'but/(al)though; in spite of/despite; both…and; either…or',
      },
    ],
  },
];
