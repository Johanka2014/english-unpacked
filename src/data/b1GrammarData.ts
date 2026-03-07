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
    instruction: 'Match a noun from group A with a noun from group B, then complete the sentences.',
    type: 'fill-blank',
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
    instruction: 'Read this email and find the adjective mistakes. Type the corrected phrase.',
    type: 'error-correction',
    items: [
      { id: 1, prompt: '"old beautiful buildings" should be:', answer: 'beautiful old buildings' },
      { id: 2, prompt: '"I get bored" (talking about art galleries, not feelings) should be:', answer: 'I get bored', hint: 'This one is actually correct — bored describes feeling' },
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
        examPractice: { description: 'Reading Part 2', type: 'reading' },
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
