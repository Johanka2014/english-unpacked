import { BookOpen, Clock, FileText, Megaphone, HelpCircle, Pen, GitBranch, Layers, Type } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import describingImg from '@/assets/b1-describing-things.jpg';
import tensesImg from '@/assets/b1-tenses.jpg';
import nounsDeterminersImg from '@/assets/b1-nouns-determiners.jpg';
import futureModalsImg from '@/assets/b1-future-modals.jpg';
import questionsPrepImg from '@/assets/b1-questions-prepositions.jpg';
import verbPatternsImg from '@/assets/b1-verb-patterns.jpg';
import conditionalsImg from '@/assets/b1-conditionals.jpg';
import advancedImg from '@/assets/b1-advanced-structures.jpg';
import wordFormationImg from '@/assets/b1-word-formation.jpg';

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

export interface SuffixCategorizeWord {
  verb: string;
  category: string; // category id, e.g. '-ation'
  noun: string;
}

export interface SuffixCategorizeFollowUp {
  id: number;
  before: string;
  after: string;
  answer: string; // a noun present in the words list
}

export interface GrammarExercise {
  id: string;
  title: string;
  instruction: string;
  type: 'matching' | 'fill-blank' | 'rewrite' | 'multiple-choice' | 'noun-compound' | 'error-correction' | 'context-fill' | 'suffix-categorize';
  items: {
    id: number;
    prompt: string;
    answer: string;
    options?: string[];
    hint?: string;
  }[];
  wordBank?: string[];
  image?: string;
  compoundGroups?: CompoundGroups;
  emailSegments?: EmailSegment[];
  contextText?: string;
  // For suffix-categorize type:
  categories?: { id: string; label: string }[];
  words?: SuffixCategorizeWord[];
  example?: SuffixCategorizeWord;
  followUpSentences?: SuffixCategorizeFollowUp[];
}

export interface ExamReadingPart1Question {
  id: number;
  text: string;
  image?: string;
  options: { letter: string; text: string }[];
  answer: string;
}

export interface GrammarFocusTaskItem {
  id: number;
  question: string;
  answers: string[];
}

export type TenseMasterRef = 'present' | 'past' | 'perfect' | 'pastPerfect' | 'future' | 'futurePerfect';

export interface B1GrammarModule {
  id: string;
  number: number;
  title: string;
  subtitle: string; // e.g. "adjective position; adjective order; -ing/-ed adjectives"
  theory?: GrammarTheorySection[];
  exercises?: GrammarExercise[];
  tenseMaster?: TenseMasterRef;
  wordwall?: { url: string; shareUrl?: string; title?: string };
  holidayLesson?: true;
  cambridgeLesson?: true;
  modalMasteryLesson?: true;
  soSuchMasteryLesson?: true;
  compoundAdjectivesLesson?: true;
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
    readingPart1?: ExamReadingPart1Question[];
    grammarFocusTaskFuture?: {
      instruction: string;
      items: GrammarFocusTaskItem[];
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

// ── Future Tenses (Module 12) ──────────────────────────────────────────

const futureTensesTheory: GrammarTheorySection[] = [
  {
    heading: 'B1 — Will',
    content: `
      <table class="w-full text-sm border-collapse my-3">
        <tbody>
          <tr class="border-b"><td class="p-2 font-bold w-8">+</td><td class="p-2">I/you/he/she/it/we/they <strong>will</strong> ('ll) + verb</td><td class="p-2 italic">I'll pay.</td></tr>
          <tr class="border-b"><td class="p-2 font-bold">-</td><td class="p-2">I/you/he/she/we/it/they <strong>will not</strong> (won't) + verb</td><td class="p-2 italic">She won't pay.</td></tr>
          <tr><td class="p-2 font-bold">?</td><td class="p-2"><strong>Will</strong> I/you/he/she/it/we/they + verb?</td><td class="p-2 italic">Will you pay?</td></tr>
        </tbody>
      </table>
      <p>We use <em>will</em>:</p>
      <ul>
        <li>to say what we <strong>know or believe</strong> about the future (often with <em>maybe, I think, I expect, I hope</em>):<br/>
        <em>I'll be 17 next week.</em> (= he knows this)<br/>
        <em>Everybody will do shopping by computer in a few years' time.</em> (= he believes this)<br/>
        <em>I expect I'll be asleep all day.</em></li>
        <li>when the speaker <strong>decides something at the moment</strong> he/she speaks:<br/>
        <em>I'll have a coffee with you.</em> (= she decides now)</li>
      </ul>
    `,
  },
  {
    heading: 'B2 — Going to',
    content: `
      <table class="w-full text-sm border-collapse my-3">
        <tbody>
          <tr class="border-b"><td class="p-2 font-bold w-8">+</td><td class="p-2">am/is/are <strong>going to</strong> + verb</td><td class="p-2 italic">We're going to see the film.</td></tr>
          <tr class="border-b"><td class="p-2 font-bold">-</td><td class="p-2">am/is/are not <strong>going to</strong> + verb</td><td class="p-2 italic">I'm not going to see the film.</td></tr>
          <tr><td class="p-2 font-bold">?</td><td class="p-2">am/is/are ... <strong>going to</strong> + verb?</td><td class="p-2 italic">Are you going to see the film?</td></tr>
        </tbody>
      </table>
      <p>We use <em>going to</em>:</p>
      <ul>
        <li>when we can see that something is <strong>certain to happen</strong>:<br/><em>The plane is going to land.</em></li>
        <li>to talk about <strong>plans</strong>:<br/><em>We're going to see the new James Bond film.</em> (= we decided earlier)</li>
        <li>We can often use <em>going to</em> or <em>will</em> to talk about the future:<br/>
        <em>I'm going to be 17 next week.</em> = <em>I'll be 17 next week.</em><br/>
        We use <em>will</em> more often when we write, but <em>going to</em> when we speak.</li>
      </ul>
    `,
  },
  {
    heading: 'B3 — Present Continuous for the Future',
    content: `
      <p>We use the present continuous for <strong>plans already made</strong> when we know or guess the time:</p>
      <ul>
        <li><em>What are you doing tonight?</em> (= what plans have you got?)</li>
        <li><em>I'm meeting a designer at 2.30.</em> (= he has an appointment)</li>
      </ul>
      <p>We can often use the present continuous or <em>going to</em> to talk about plans:</p>
      <ul>
        <li><em>We're spending the weekend at the seaside.</em> = <em>We're going to spend the weekend at the seaside.</em></li>
      </ul>
    `,
  },
  {
    heading: 'B4 — Present Simple for the Future',
    content: `
      <p>We use the present simple for <strong>timetables</strong> (trains, planes etc.) and for <strong>programmes</strong> (films, classes etc.):</p>
      <ul>
        <li><em>My flight leaves Rome at 11 pm on Saturday and it arrives in London at 1 am.</em></li>
        <li><em>The film starts at nine o'clock.</em></li>
      </ul>
    `,
  },
];

const futureTensesExercises: GrammarExercise[] = [
  {
    id: 'ft-context',
    title: 'A3 — Context: Elliot & Kelly',
    instruction: 'Read the conversation between Elliot and Kelly. Complete the sentences below using the words from the dialogue.',
    type: 'context-fill',
    contextText: `Kelly: Hi Elliot.\nElliot: Hi Kelly.\nKelly: What are you doing tonight?\nElliot: Well ...\nKelly: We've got tickets for a film. We're going to see the new James Bond film. It starts at nine o'clock.\nElliot: Oh, that would be great but I can't.\nKelly: But why? We've finished our exams.\nElliot: I'm not studying for exams tonight. You know my company?\nKelly: No I don't know what you're talking about.\nElliot: I've started an internet company. I sell books and CDs online and there are articles and things written by teenagers for teenagers.\nKelly: Wow.\nElliot: So you can sit at home, have fun and do your shopping on the screen without leaving the house. All you need is a mouse and a keyboard.\nKelly: And a computer of course.\nElliot: Yeah, yeah. Everybody will do shopping by computer in a few years' time.\nKelly: Oh, I'm sure you're right. But, anyway, what about Saturday and Sunday? We're going to spend the weekend at the seaside. My brother's going to drive us there.\nElliot: I'm flying to Rome tomorrow.\nKelly: No!\nElliot: I'm meeting a designer at 10.30 on Saturday.\nKelly: Well, come on Sunday then.\nElliot: My flight leaves Rome at 11 pm on Saturday and it arrives in London at 1 am. I won't get much sleep on Saturday night so I expect I'll be asleep all day on Sunday. I'll probably feel really tired.\nKelly: OK then. Don't worry about your friends. I'm sure your company is more interesting.\nElliot: Don't be annoyed. Look, I've got half an hour free. Let's do something now. What about a coffee?\nKelly: OK. I'll have a coffee with you.\nElliot: And I'll pay. Come on, Kelly. I'll be 17 next week and I hope that in three years' time I'll be really rich, I'll have a fast car and I'll drive you all to the seaside or wherever you want ...`,
    items: [
      { id: 2, prompt: 'What does Elliot say about tonight? "I\'m not ____ for exams tonight."', answer: 'studying' },
      { id: 3, prompt: 'What does Kelly say about Saturday and Sunday? "We\'re going to ____ the weekend at the seaside."', answer: 'spend' },
      { id: 4, prompt: 'What are Elliot\'s plans for Saturday? "I\'m ____ a designer at 10.30 on Saturday."', answer: 'meeting' },
      { id: 5, prompt: 'What does Elliot tell us about his journey? "My flight ____ Rome at 11 pm on Saturday."', answer: 'leaves' },
      { id: 6, prompt: '"...and it ____ in London at 1 am."', answer: 'arrives' },
      { id: 7, prompt: 'What does Elliot say about Sunday? "I expect I\'ll ____ asleep all day on Sunday."', answer: 'be' },
      { id: 8, prompt: 'What does Kelly agree to do? "I\'ll ____ a coffee with you."', answer: 'have' },
      { id: 9, prompt: 'What does Elliot say about the future? "I\'ll ____ really rich."', answer: 'be' },
    ],
  },
  {
    id: 'ft-c1',
    title: 'Exercise C1 — Will',
    instruction: 'Complete each sentence with a verb from the box and the correct form of will.',
    type: 'fill-blank',
    wordBank: ['be', 'become', 'come', 'leave', 'need', 'phone'],
    items: [
      { id: 1, prompt: 'I think ____ Rob because I haven\'t heard from him for a long time.', answer: "I'll phone" },
      { id: 2, prompt: 'I (not) ____ my bag here because it\'s got my camera in it.', answer: "won't leave" },
      { id: 3, prompt: 'My grandmother ____ 65 on her next birthday.', answer: "will be" },
      { id: 4, prompt: 'No thanks, I (not) ____ to the swimming pool with you because I\'ve got a cold.', answer: "won't come" },
      { id: 5, prompt: 'During the next hundred years the world ____ warmer and warmer.', answer: "will become" },
      { id: 6, prompt: 'How much money ____ you ____ for the weekend?', answer: "will you need" },
    ],
  },
  {
    id: 'ft-c2',
    title: 'Exercise C2 — Going to',
    instruction: 'Write a sentence with going to about each picture. Use the verbs: be, join, play, rain, wash, win',
    type: 'fill-blank',
    wordBank: ['be', 'join', 'play', 'rain', 'wash', 'win'],
    image: 'future-tenses-c2-going-to',
    items: [
      { id: 1, prompt: 'I\'m ____ the kitchen floor.', answer: 'going to wash' },
      { id: 2, prompt: 'Number 5 (not) ____.', answer: "isn't going to win" },
      { id: 3, prompt: 'They ____ famous.', answer: 'are going to be' },
      { id: 4, prompt: '(you) ____ the gym?', answer: 'Are you going to join' },
      { id: 5, prompt: 'I ____ football.', answer: "am going to play" },
      { id: 6, prompt: 'It (not) ____.', answer: "isn't going to rain" },
    ],
  },
  {
    id: 'ft-c3',
    title: 'Exercise C3 — Will or Going to?',
    instruction: 'Read this conversation and fill in the gaps with the correct form of will or going to.',
    type: 'fill-blank',
    items: [
      { id: 2, prompt: 'Colin: Do you want to come? ____ (we/buy) tickets this afternoon.', answer: "We're going to buy" },
      { id: 3, prompt: 'Darius: ____ (I/think) about it.', answer: "I'll think" },
      { id: 4, prompt: 'Colin: ____ (Paul and Ros/come) too. It\'s quite cheap.', answer: "Paul and Ros are going to come" },
      { id: 5, prompt: 'Darius: ____ (I/check) my diary. When is it?', answer: "I'll check" },
      { id: 6, prompt: 'Darius: OK, OK, ____ (I/buy) a ticket.', answer: "I'll buy" },
    ],
  },
  {
    id: 'ft-c4',
    title: 'Exercise C4 — Present Continuous',
    instruction: 'Melissa wants to interview Liam O\'Neill, a famous DJ. Look at the diaries and fill in the gaps using the present continuous.',
    type: 'fill-blank',
    image: 'future-tenses-c4-diaries',
    items: [
      { id: 2, prompt: 'Joe: We ____ to new CDs all day. He can\'t see you then.', answer: "are listening" },
      { id: 3, prompt: 'Melissa: And what ____ in the evening?', answer: "is he doing" },
      { id: 4, prompt: 'Joe: He ____ to the Daily Post at 7.30.', answer: "is giving an interview" },
      { id: 5, prompt: 'Melissa: Oh. And where ____ on Tuesday?', answer: "is he going" },
      { id: 6, prompt: 'Joe: He ____ to the TV studio early.', answer: "is going" },
      { id: 7, prompt: '...and he ____ there all day.', answer: "is staying" },
      { id: 8, prompt: 'Melissa: Oh, that\'s great. I ____ the day at the TV studio.', answer: "am spending" },
      { id: 9, prompt: 'Joe: But in the evening he\'s ____ his TV show.', answer: "presenting" },
      { id: 10, prompt: 'The production team ____ a meal together after that.', answer: "are having" },
    ],
  },
  {
    id: 'ft-c5',
    title: 'Exercise C5 — Choose the Best Form',
    instruction: 'Read this conversation between a hotel receptionist and a guest. Choose the best form of the verb.',
    type: 'multiple-choice',
    items: [
      { id: 1, prompt: 'I ____ here till Friday.', answer: "'m staying", options: ["'m staying", "stay"] },
      { id: 2, prompt: "I'm ____ around the city now but I want to do some walking.", answer: "going to look", options: ["going to look", "looking"] },
      { id: 3, prompt: 'There\'s a guided tour tomorrow. It ____ from outside the hotel at 10 am.', answer: "leaves", options: ["is leaving", "leaves"] },
      { id: 4, prompt: '...and it ____ at 5 pm.', answer: "returns", options: ["is returning", "returns"] },
      { id: 5, prompt: 'I think I ____ that.', answer: "'ll do", options: ["'m doing", "'ll do"] },
      { id: 6, prompt: 'I ____ cheese please.', answer: "'ll have", options: ["'ll have", "have"] },
      { id: 7, prompt: 'There\'s a concert tonight which ____ at 7.30.', answer: "starts", options: ["is starting", "starts"] },
      { id: 8, prompt: 'I ____ an old friend at 6.', answer: "'m meeting", options: ["'m meeting", "'ll meet"] },
      { id: 9, prompt: "...and I don't think I ____ back in time.", answer: "'ll be", options: ["'m", "'ll be"] },
      { id: 10, prompt: '____ dinner in the hotel tonight?', answer: "Are you going to have", options: ["Are you going to have", "Do you have"] },
    ],
  },
];

const futureTensesExamPractice = {
  description: 'Reading Part 1',
  type: 'reading-part-1',
  intro: 'Look at the text in each question. What does it say? Choose the correct explanation — A, B or C.',
  readingPart1: [
    {
      id: 1,
      text: 'Sale starts Monday.\nShop opens normal time but closes late every day except Wednesday.',
      image: 'exam-future-1',
      options: [
        { letter: 'A', text: 'The shop is open longer on Monday than on Wednesday.' },
        { letter: 'B', text: 'The shop is open the same hours as usual during the sale.' },
        { letter: 'C', text: 'The shop is open the same number of hours each day during the sale.' },
      ],
      answer: 'A',
    },
    {
      id: 2,
      text: 'Lewis\nCan you give me a lift home from the concert tonight? I\'m working late so I expect I\'ll miss the beginning of it. Don\'t wait for me outside.\nJack',
      image: 'exam-future-2',
      options: [
        { letter: 'A', text: 'Lewis will probably arrive at the concert after Jack.' },
        { letter: 'B', text: 'Lewis will probably pick up Jack on his way to the concert.' },
        { letter: 'C', text: 'Jack will probably meet Lewis inside the concert hall.' },
      ],
      answer: 'C',
    },
    {
      id: 3,
      text: 'Dear Mum\nWe\'re staying in the mountains tomorrow night after we\'ve spent the day walking. Then, before we travel to the coast, we\'re going to spend two days in the city.\nPaula',
      image: 'exam-future-3',
      options: [
        { letter: 'A', text: 'Paula is travelling from the coast to the city.' },
        { letter: 'B', text: 'Paula is walking in the mountains before she goes to the city.' },
        { letter: 'C', text: 'Paula is staying on the coast before she travels to the mountains.' },
      ],
      answer: 'B',
    },
    {
      id: 4,
      text: 'Mr Johnson has a meeting this morning. Please do not disturb him until after lunch.',
      image: 'exam-future-4',
      options: [
        { letter: 'A', text: 'You can talk to Mr Johnson at lunchtime if you want.' },
        { letter: 'B', text: 'Mr Johnson is going to arrange a meeting for this afternoon.' },
        { letter: 'C', text: 'You cannot talk to Mr Johnson until this afternoon.' },
      ],
      answer: 'C',
    },
    {
      id: 5,
      text: 'Kezia\nJenny rang. You left your mobile at her house. She\'ll probably bring it here on her way to college.\nAlex.',
      image: 'exam-future-5',
      options: [
        { letter: 'A', text: 'Kezia has to fetch her mobile from Jenny\'s house.' },
        { letter: 'B', text: 'Jenny hopes to give Kezia her mobile before she goes to college.' },
        { letter: 'C', text: 'Kezia should meet Jenny at college to get her mobile back.' },
      ],
      answer: 'B',
    },
  ] as ExamReadingPart1Question[],
  grammarFocusTaskFuture: {
    instruction: 'Look at the exam questions. Find verbs which have a future meaning and categorise them.',
    items: [
      { id: 1, question: 'Find two verbs which tell us about a timetable.', answers: ['opens', 'closes', 'starts'] },
      { id: 2, question: 'Find two verbs which tell us about plans someone has already made.', answers: ["we're staying", "we're going to spend", "'m working"] },
      { id: 3, question: 'Find two verbs which tell us about what someone believes about the future.', answers: ["I'll miss", "she'll probably bring", "I expect"] },
    ] as GrammarFocusTaskItem[],
  },
};

// ── All 30 Modules ─────────────────────────────────────────────────────

// ── Word Formation: Prefixes ───────────────────────────────────────────

const prefixesTheory: GrammarTheorySection[] = [
  {
    heading: 'A1 — What is a prefix?',
    content: `
      <p>A <strong>prefix</strong> is a group of letters added to the <strong>beginning</strong> of a word that changes its meaning.</p>
      <ul>
        <li><em>like → <strong>dis</strong>like</em> (negative meaning)</li>
        <li><em>lock → <strong>un</strong>lock</em> (the opposite action — to undo locking)</li>
      </ul>
      <p>Some prefixed words use a hyphen (<em>half-brother, ex-wife</em>); most don't (<em>unhappy, redo</em>). When you add a prefix, the spelling of the original word doesn't change: <em>dis + satisfied = dissatisfied</em>.</p>
    `,
  },
  {
    heading: 'A2 — Negative prefixes',
    content: `
      <p>Several prefixes give a word the meaning <em>not</em>. Which one to use often depends on the first letter of the word:</p>
      <table class="w-full text-sm border-collapse my-3">
        <thead><tr class="border-b"><th class="text-left p-2">Prefix</th><th class="text-left p-2">Used before</th><th class="text-left p-2">Examples</th></tr></thead>
        <tbody>
          <tr class="border-b"><td class="p-2"><strong>un-</strong></td><td class="p-2">many words</td><td class="p-2 italic">unhappy, unemployed, untidy</td></tr>
          <tr class="border-b"><td class="p-2"><strong>dis-</strong></td><td class="p-2">verbs and adjectives</td><td class="p-2 italic">disagree, dishonest</td></tr>
          <tr class="border-b"><td class="p-2"><strong>in-</strong></td><td class="p-2">many adjectives</td><td class="p-2 italic">invisible, informal</td></tr>
          <tr class="border-b"><td class="p-2"><strong>il-</strong></td><td class="p-2">words starting with <em>l</em></td><td class="p-2 italic">illegal, illegible</td></tr>
          <tr class="border-b"><td class="p-2"><strong>im-</strong></td><td class="p-2">words starting with <em>m</em> or <em>p</em></td><td class="p-2 italic">impatient, impossible</td></tr>
          <tr><td class="p-2"><strong>ir-</strong></td><td class="p-2">words starting with <em>r</em></td><td class="p-2 italic">irregular, irresponsible</td></tr>
        </tbody>
      </table>
    `,
  },
  {
    heading: 'A3 — Other useful prefixes',
    content: `
      <ul>
        <li><strong>mis-</strong> = wrongly / badly: <em>misunderstand, misread</em></li>
        <li><strong>re-</strong> = again: <em>rewrite, rebuild, reorganise</em></li>
        <li><strong>pre-</strong> = before: <em>prepare, preview, predate</em></li>
        <li><strong>over-</strong> = too much: <em>oversleep, overcook</em></li>
        <li><strong>inter-</strong> = between or among: <em>interact, international</em></li>
        <li><strong>ex-</strong> = was but not now: <em>ex-wife, ex-president</em></li>
        <li><strong>half-</strong> = 50%: <em>halfway, half-price</em></li>
      </ul>
    `,
  },
];

const prefixesExercises: GrammarExercise[] = [
  {
    id: 'pf-1',
    title: 'Exercise P1 — Choose the right prefix',
    instruction: 'Choose the correct prefix to complete each sentence.',
    type: 'multiple-choice',
    items: [
      { id: 1, prompt: "I'm sorry, I'm ___able to come to your party next week.", answer: 'un', options: ['un', 'dis'] },
      { id: 2, prompt: 'I have to stay in to ___vise for my exam.', answer: 're', options: ['pre', 're'] },
      { id: 3, prompt: "This is a secret, please don't ___peat it to anyone.", answer: 're', options: ['un', 're'] },
      { id: 4, prompt: 'She ___agrees with everything I say.', answer: 'dis', options: ['un', 'dis'] },
      { id: 5, prompt: 'You need to ___cook the pastry before baking the pie.', answer: 'pre', options: ['re', 'pre'] },
    ],
  },
  {
    id: 'pf-2',
    title: 'Exercise P2 — Make the opposite',
    instruction: 'Add a negative prefix (un-, dis-, in-, im-, il-, ir-, mis-) to make the opposite of each word.',
    type: 'fill-blank',
    items: [
      { id: 1, prompt: 'agree', answer: 'disagree' },
      { id: 2, prompt: 'employed', answer: 'unemployed' },
      { id: 3, prompt: 'visible', answer: 'invisible' },
      { id: 4, prompt: 'lock', answer: 'unlock' },
      { id: 5, prompt: 'legal', answer: 'illegal' },
      { id: 6, prompt: 'regular', answer: 'irregular' },
      { id: 7, prompt: 'formal', answer: 'informal' },
      { id: 8, prompt: 'honest', answer: 'dishonest' },
      { id: 9, prompt: 'dressed', answer: 'undressed' },
      { id: 10, prompt: 'happy', answer: 'unhappy' },
      { id: 11, prompt: 'understand', answer: 'misunderstand' },
      { id: 12, prompt: 'like', answer: 'dislike' },
    ],
  },
  {
    id: 'pf-3',
    title: 'Exercise P3 — Match prefix to meaning',
    instruction: 'Match each prefix with its meaning.',
    type: 'matching',
    items: [
      { id: 1, prompt: 'ex-', answer: 'was but not now' },
      { id: 2, prompt: 'dis-', answer: 'not (with verbs)' },
      { id: 3, prompt: 'half-', answer: '50% of something' },
      { id: 4, prompt: 'in- / im- / il-', answer: 'not (with adjectives)' },
      { id: 5, prompt: 'mis-', answer: 'incorrectly' },
      { id: 6, prompt: 're-', answer: 'again' },
      { id: 7, prompt: 'un-', answer: 'not (with adjectives or verbs)' },
    ],
  },
  {
    id: 'pf-4',
    title: 'Exercise P4 — Complete the sentences',
    instruction: 'Add the right prefix to a word from the box to complete each sentence.',
    type: 'fill-blank',
    wordBank: ['appear', 'comfortable', 'lock', 'organising', 'packed', 'possible', 'slept', 'understood', 'way', 'wife'],
    items: [
      { id: 1, prompt: 'It was ___ to sleep because of the noise.', answer: 'impossible' },
      { id: 2, prompt: 'She lives ___ between Oxford and London.', answer: 'halfway' },
      { id: 3, prompt: 'Plastic seats are very ___ in hot weather.', answer: 'uncomfortable' },
      { id: 4, prompt: 'Many species of plants and animals ___ every year.', answer: 'disappear' },
      { id: 5, prompt: 'My ___ and her new husband live abroad.', answer: 'ex-wife' },
      { id: 6, prompt: 'She ___ the instructions and answered two questions instead of three.', answer: 'misunderstood' },
      { id: 7, prompt: 'The department is in a terrible mess. It needs ___.', answer: 'reorganising' },
      { id: 8, prompt: 'He finally managed to ___ the door and we were able to get inside.', answer: 'unlock' },
      { id: 9, prompt: 'We ___ as soon as we got to the hotel and then we went to the beach.', answer: 'unpacked' },
    ],
  },
  {
    id: 'pf-5',
    title: 'Exercise P5 — What does it mean?',
    instruction: 'Choose the sentence that has the closest meaning.',
    type: 'multiple-choice',
    items: [
      { id: 1, prompt: 'We need to <strong>reappoint</strong> for that job as soon as possible.', answer: 'We need to appoint someone again for that job as soon as possible.', options: ['We need to appoint someone again for that job as soon as possible.', 'We do not need to appoint anyone for that job.'] },
      { id: 2, prompt: 'A good CV is a <strong>precondition</strong> of employment.', answer: 'A good CV is needed before anyone can be employed.', options: ['A good CV is a condition of being employed again.', 'A good CV is needed before anyone can be employed.'] },
      { id: 3, prompt: "I'm worried that he will <strong>disappear</strong> before he has paid.", answer: 'I\'m worried that he will not be seen again before he has paid.', options: ['I\'m worried that he will appear again before he has paid.', 'I\'m worried that he will not be seen again before he has paid.'] },
    ],
  },
];

// ── Word Formation: Suffixes ───────────────────────────────────────────

const suffixesTheory: GrammarTheorySection[] = [
  {
    heading: 'B1 — What is a suffix?',
    content: `
      <p>A <strong>suffix</strong> is a group of letters added to the <strong>end</strong> of a word. Suffixes often change the <strong>word class</strong> — they turn a verb into a noun, a noun into an adjective, an adjective into an adverb, and so on.</p>
      <ul>
        <li><em>improve (verb) → improve<strong>ment</strong> (noun)</em></li>
        <li><em>happy (adjective) → happi<strong>ness</strong> (noun)</em></li>
        <li><em>hope (noun) → hope<strong>ful</strong> (adjective)</em></li>
        <li><em>quick (adjective) → quick<strong>ly</strong> (adverb)</em></li>
      </ul>
      <p>There are no strict rules — each word family must be learned individually.</p>
    `,
  },
  {
    heading: 'B2 — Verb → noun',
    content: `
      <table class="w-full text-sm border-collapse my-3">
        <thead><tr class="border-b"><th class="text-left p-2">Suffix</th><th class="text-left p-2">Verb</th><th class="text-left p-2">Noun</th></tr></thead>
        <tbody>
          <tr class="border-b"><td class="p-2">-ment</td><td class="p-2">adjust, enjoy</td><td class="p-2">adjustment, enjoyment</td></tr>
          <tr class="border-b"><td class="p-2">-tion / -ation / -sion / -ition</td><td class="p-2">combine, inform, divide, define</td><td class="p-2">combination, information, division, definition</td></tr>
          <tr class="border-b"><td class="p-2">-er / -or</td><td class="p-2">publish, survive</td><td class="p-2">publisher, survivor</td></tr>
          <tr class="border-b"><td class="p-2">-ance / -ence</td><td class="p-2">guide, exist</td><td class="p-2">guidance, existence</td></tr>
          <tr class="border-b"><td class="p-2">-al</td><td class="p-2">approve, arrive</td><td class="p-2">approval, arrival</td></tr>
          <tr><td class="p-2">-ee</td><td class="p-2">employ</td><td class="p-2">employee</td></tr>
        </tbody>
      </table>
    `,
  },
  {
    heading: 'B3 — Adjective → noun',
    content: `
      <ul>
        <li><strong>-ness</strong>: friendly → friendliness, dark → darkness, sad → sadness</li>
        <li><strong>-ity</strong>: popular → popularity, responsible → responsibility</li>
        <li><strong>-ance / -ence</strong>: relevant → relevance, patient → patience</li>
      </ul>
    `,
  },
  {
    heading: 'B4 — Noun → adjective',
    content: `
      <table class="w-full text-sm border-collapse my-3">
        <thead><tr class="border-b"><th class="text-left p-2">Suffix</th><th class="text-left p-2">Noun</th><th class="text-left p-2">Adjective</th></tr></thead>
        <tbody>
          <tr class="border-b"><td class="p-2">-y</td><td class="p-2">cloud, boss</td><td class="p-2">cloudy, bossy</td></tr>
          <tr class="border-b"><td class="p-2">-ful</td><td class="p-2">help, hope</td><td class="p-2">helpful, hopeful</td></tr>
          <tr class="border-b"><td class="p-2">-less</td><td class="p-2">care, end</td><td class="p-2">careless, endless</td></tr>
          <tr class="border-b"><td class="p-2">-ous</td><td class="p-2">danger, fame</td><td class="p-2">dangerous, famous</td></tr>
          <tr class="border-b"><td class="p-2">-al</td><td class="p-2">emotion, nature</td><td class="p-2">emotional, natural</td></tr>
          <tr class="border-b"><td class="p-2">-ic</td><td class="p-2">optimist</td><td class="p-2">optimistic</td></tr>
          <tr><td class="p-2">-ish</td><td class="p-2">child</td><td class="p-2">childish</td></tr>
        </tbody>
      </table>
      <p><strong>-ful</strong> usually means <em>full of</em> (<em>helpful</em> = full of help). <strong>-less</strong> means <em>without</em> (<em>helpless</em> = without help). Many adjectives have both forms with opposite meanings: <em>careful / careless, hopeful / hopeless, useful / useless</em>.</p>
    `,
  },
  {
    heading: 'B5 — People (jobs and roles)',
    content: `
      <p>To name the person who does an activity, add:</p>
      <ul>
        <li><strong>-er</strong> to many verbs: sing → singer, drive → driver, train → trainer</li>
        <li><strong>-or</strong> to some verbs: act → actor, direct → director</li>
        <li><strong>-ist</strong> to nouns: art → artist, motor → motorist</li>
        <li><strong>-ian</strong> to nouns: electricity → electrician, music → musician</li>
        <li><strong>-ee</strong> to a verb (the person who <em>receives</em> the action): employ → employee, refer → referee</li>
      </ul>
    `,
  },
  {
    heading: 'B6 — Adjective → adverb',
    content: `
      <p>Adverbs are almost always formed by adding <strong>-ly</strong> to the adjective. If the adjective ends in <em>-ic</em>, add <strong>-ally</strong>:</p>
      <ul>
        <li><em>quick → quickly, slow → slowly, careful → carefully</em></li>
        <li><em>simple → simply, automatic → automatically, organic → organically</em></li>
      </ul>
    `,
  },
];

const suffixesExercises: GrammarExercise[] = [
  {
    id: 'sf-1',
    title: 'Exercise S1 — Match nouns to meanings',
    instruction: 'Match each word on the left with its meaning on the right.',
    type: 'matching',
    items: [
      { id: 1, prompt: 'arrangement', answer: 'putting things into an order' },
      { id: 2, prompt: 'darkness', answer: 'no light' },
      { id: 3, prompt: 'endless', answer: 'that seems never to end' },
      { id: 4, prompt: 'film director', answer: 'a person in charge of making a film' },
      { id: 5, prompt: 'footballer', answer: 'a person who plays football' },
      { id: 6, prompt: 'hopeful', answer: 'quite sure something good will happen' },
      { id: 7, prompt: 'impressive', answer: 'so good that it impresses people' },
      { id: 8, prompt: 'mathematics', answer: 'the study of numbers and shapes' },
      { id: 9, prompt: 'organization', answer: 'a group of people who work together for the same purpose' },
      { id: 10, prompt: 'artist', answer: 'a person who paints or draws' },
    ],
  },
  {
    id: 'sf-2',
    title: 'Exercise S2 — Form the noun',
    instruction: 'Add a suffix (-ment, -ness, -ity, -tion / -sion / -ation) to make a noun from the word in brackets.',
    type: 'fill-blank',
    items: [
      { id: 1, prompt: '(amuse) ___', answer: 'amusement' },
      { id: 2, prompt: '(digest) ___', answer: 'digestion' },
      { id: 3, prompt: '(discuss) ___', answer: 'discussion' },
      { id: 4, prompt: '(enjoy) ___', answer: 'enjoyment' },
      { id: 5, prompt: '(govern) ___', answer: 'government' },
      { id: 6, prompt: '(happy) ___', answer: 'happiness' },
      { id: 7, prompt: '(impress) ___', answer: 'impression' },
      { id: 8, prompt: '(inform) ___', answer: 'information' },
      { id: 9, prompt: '(invite) ___', answer: 'invitation' },
      { id: 10, prompt: '(measure) ___', answer: 'measurement' },
      { id: 11, prompt: '(popular) ___', answer: 'popularity' },
      { id: 12, prompt: '(prepare) ___', answer: 'preparation' },
      { id: 13, prompt: '(protect) ___', answer: 'protection' },
      { id: 14, prompt: '(punish) ___', answer: 'punishment' },
      { id: 15, prompt: '(responsible) ___', answer: 'responsibility' },
      { id: 16, prompt: '(revise) ___', answer: 'revision' },
      { id: 17, prompt: '(sad) ___', answer: 'sadness' },
      { id: 18, prompt: '(state) ___', answer: 'statement' },
      { id: 19, prompt: '(suggest) ___', answer: 'suggestion' },
      { id: 20, prompt: '(televise) ___', answer: 'television' },
    ],
  },
  {
    id: 'sf-3',
    title: 'Exercise S3 — Complete the sentences',
    instruction: 'Use a noun from the box to complete each sentence.',
    type: 'fill-blank',
    wordBank: ['discussion', 'television', 'revision', 'protection', 'information', 'suggestion', 'preparation', 'invitation'],
    items: [
      { id: 1, prompt: 'We had a ___ about working hours in the meeting.', answer: 'discussion' },
      { id: 2, prompt: 'I mostly watch ___ in the evening.', answer: 'television' },
      { id: 3, prompt: 'He needs to do his ___ for the History exam tomorrow.', answer: 'revision' },
      { id: 4, prompt: "This coat doesn't give you any ___ from the rain.", answer: 'protection' },
      { id: 5, prompt: 'Could you give me some ___ about the train times?', answer: 'information' },
      { id: 6, prompt: "Can I make a ___? Let's have pizza tonight.", answer: 'suggestion' },
      { id: 7, prompt: 'Teachers usually have to do a lot of ___ before each lesson.', answer: 'preparation' },
      { id: 8, prompt: "I'm sorry but I'm not free this weekend. I have an ___ to a party.", answer: 'invitation' },
    ],
  },
  {
    id: 'sf-4',
    title: 'Exercise S4 — Person who…',
    instruction: 'Write the noun for the person who does each activity.',
    type: 'fill-blank',
    items: [
      { id: 1, prompt: 'sing', answer: 'singer' },
      { id: 2, prompt: 'employ (the person who has a job)', answer: 'employee' },
      { id: 3, prompt: 'farm', answer: 'farmer' },
      { id: 4, prompt: 'dance', answer: 'dancer' },
      { id: 5, prompt: 'direct (a film)', answer: 'director' },
      { id: 6, prompt: 'art', answer: 'artist' },
      { id: 7, prompt: 'act', answer: 'actor' },
      { id: 8, prompt: 'manage', answer: 'manager' },
      { id: 9, prompt: 'drive', answer: 'driver' },
      { id: 10, prompt: 'train', answer: 'trainer' },
    ],
  },
  {
    id: 'sf-5',
    title: 'Exercise S5 — -ful or -less?',
    instruction: 'Choose the adjective that best describes each person or thing.',
    type: 'multiple-choice',
    items: [
      { id: 1, prompt: 'He is a very bad driver. He is ___.', answer: 'careless', options: ['careful', 'careless'] },
      { id: 2, prompt: "This bottle opener doesn't work at all! It's ___.", answer: 'useless', options: ['useful', 'useless'] },
      { id: 3, prompt: "This injection didn't hurt me. It was ___.", answer: 'painless', options: ['painful', 'painless'] },
      { id: 4, prompt: "It seems that housework never ends. It's ___.", answer: 'endless', options: ['endless', 'helpful'] },
      { id: 5, prompt: 'There is no cure. The situation is ___.', answer: 'hopeless', options: ['hopeful', 'hopeless'] },
    ],
  },
  {
    id: 'sf-6',
    title: 'Exercise S6 — Choose the right suffix',
    instruction: 'Pick the correct suffix to complete each sentence.',
    type: 'multiple-choice',
    items: [
      { id: 1, prompt: "I am look___ for information on Paris in the library.", answer: 'looking', options: ['looking', 'looked'] },
      { id: 2, prompt: 'Sarah was by far the young___ person in the room.', answer: 'youngest', options: ['younger', 'youngest'] },
      { id: 3, prompt: 'It was really thought___ of you to bring that cake.', answer: 'thoughtful', options: ['thoughtful', 'thoughtless'] },
      { id: 4, prompt: 'My son had been so care___ in burning the cake he made.', answer: 'careless', options: ['careful', 'careless'] },
      { id: 5, prompt: 'After I look___ at the paper, I put it in the recycling.', answer: 'looked', options: ['looking', 'looked'] },
    ],
  },
  {
    id: 'sf-7',
    title: 'Exercise S7 — Verb → Noun: drag into the correct column',
    instruction: 'Drag each verb into the column for the suffix that turns it into a noun (-ation, -ence, -ment or -ance). Then complete the sentences below using the nouns you formed.',
    type: 'suffix-categorize',
    items: [],
    categories: [
      { id: 'ation', label: '-ation' },
      { id: 'ence', label: '-ence' },
      { id: 'ment', label: '-ment' },
      { id: 'ance', label: '-ance' },
    ],
    example: { verb: 'admire', category: 'ation', noun: 'admiration' },
    words: [
      { verb: 'amaze', category: 'ment', noun: 'amazement' },
      { verb: 'appear', category: 'ance', noun: 'appearance' },
      { verb: 'apply', category: 'ation', noun: 'application' },
      { verb: 'arrange', category: 'ment', noun: 'arrangement' },
      { verb: 'assist', category: 'ance', noun: 'assistance' },
      { verb: 'concentrate', category: 'ation', noun: 'concentration' },
      { verb: 'encourage', category: 'ment', noun: 'encouragement' },
      { verb: 'exist', category: 'ence', noun: 'existence' },
      { verb: 'differ', category: 'ence', noun: 'difference' },
      { verb: 'guide', category: 'ance', noun: 'guidance' },
      { verb: 'identify', category: 'ation', noun: 'identification' },
      { verb: 'perform', category: 'ance', noun: 'performance' },
      { verb: 'prefer', category: 'ence', noun: 'preference' },
      { verb: 'publish', category: 'ation', noun: 'publication' },
      { verb: 'punish', category: 'ment', noun: 'punishment' },
    ],
    followUpSentences: [
      { id: 1, before: "Julie's 40th birthday coincided with the", after: 'of her first novel.', answer: 'publication' },
      { id: 2, before: 'Having a car would make a huge', after: 'to my life.', answer: 'difference' },
      { id: 3, before: 'To my', after: ', I won a prize for the song I wrote.', answer: 'amazement' },
      { id: 4, before: "People didn't know of the", after: 'of the planet Uranus until Hirschel discovered it in 1871.', answer: 'existence' },
      { id: 5, before: 'Staff are available to offer', after: 'to anyone who needs help carrying their luggage.', answer: 'assistance' },
    ],
  },
];

// ── Word Formation Quiz ────────────────────────────────────────────────

const wordFormationQuizExercises: GrammarExercise[] = [
  {
    id: 'wfq-1',
    title: 'Word Formation Review Quiz',
    instruction: 'Choose the correct form of the word to complete each sentence. Mixes prefixes and suffixes from this section.',
    type: 'multiple-choice',
    items: [
      { id: 1, prompt: 'Be careful — the lift is broken so we have to use the stairs. It is very ___.', answer: 'inconvenient', options: ['inconvenient', 'unconvenient', 'disconvenient'] },
      { id: 2, prompt: 'I always check my work because making the same mistake twice would be ___.', answer: 'irresponsible', options: ['unresponsible', 'disresponsible', 'irresponsible'] },
      { id: 3, prompt: "She didn't hear the alarm and ___ this morning.", answer: 'overslept', options: ['overslept', 'misslept', 'preslept'] },
      { id: 4, prompt: 'Could you ___ that, please? The connection was bad.', answer: 'repeat', options: ['prepeat', 'repeat', 'unrepeat'] },
      { id: 5, prompt: 'The teacher gave us some useful ___ for the exam.', answer: 'information', options: ['informness', 'information', 'informment'] },
      { id: 6, prompt: 'Her ___ to learn new languages is amazing.', answer: 'ability', options: ['ableness', 'ability', 'ablement'] },
      { id: 7, prompt: 'The film was so ___ that I fell asleep.', answer: 'boring', options: ['boring', 'bored', 'boreful'] },
      { id: 8, prompt: 'A ___ is the person who teaches you to play sport.', answer: 'trainer', options: ['trainor', 'trainist', 'trainer'] },
      { id: 9, prompt: 'Please drive ___ — the road is wet.', answer: 'carefully', options: ['careful', 'carefully', 'carelessly'] },
      { id: 10, prompt: 'I had to ___ the report because it had too many mistakes.', answer: 'rewrite', options: ['miswrite', 'prewrite', 'rewrite'] },
      { id: 11, prompt: 'My grandmother is famous for her ___ cooking.', answer: 'delicious', options: ['deliciousness', 'delicious', 'deliciously'] },
      { id: 12, prompt: 'Without a map we felt completely ___.', answer: 'helpless', options: ['helpful', 'helpless', 'unhelp'] },
    ],
  },
];

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
      {
        id: 'compound-adjectives',
        number: 34,
        title: 'Compound Adjectives',
        subtitle: 'forming and using compound adjectives like well-known, short-sighted and open-minded',
        compoundAdjectivesLesson: true,
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
        tenseMaster: 'present',
      },
      {
        id: 'past-tenses',
        number: 5,
        title: 'Past Tenses',
        subtitle: 'past simple; past continuous',
        tenseMaster: 'past',
        holidayLesson: true,
        cambridgeLesson: true,
      },
      {
        id: 'present-perfect-past-simple',
        number: 6,
        title: 'Present Perfect and Past Simple',
        subtitle: 'present perfect and past simple; have gone and have been',
        tenseMaster: 'perfect',
      },
      {
        id: 'past-perfect',
        number: 7,
        title: 'Past Perfect',
        subtitle: 'past perfect and past simple; used to',
        tenseMaster: 'pastPerfect',
      },
      {
        id: 'future-tenses',
        number: 12,
        title: 'Future Tenses',
        subtitle: 'will; going to; present continuous; present simple',
        theory: futureTensesTheory,
        exercises: futureTensesExercises,
        examPractice: futureTensesExamPractice,
        tenseMaster: 'future',
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
      {
        id: 'modal-verbs-master',
        number: 16,
        title: 'Modal Verbs Master',
        subtitle: 'reference, practice quiz and song listening for all 8 modal verbs',
        modalMasteryLesson: true,
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
        id: 'so-such-master',
        number: 28,
        title: 'So/Such Master',
        subtitle: 'patterns reference, multiple choice, fill-in-the-blanks, pattern recognition, and song listening',
        soSuchMasteryLesson: true,
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
  {
    id: 'word-formation',
    title: 'Word Formation',
    description: 'Prefixes and suffixes',
    icon: Type,
    image: wordFormationImg,
    modules: [
      {
        id: 'prefixes',
        number: 31,
        title: 'Prefixes',
        subtitle: 'negative prefixes; un-, dis-, in-/im-/il-/ir-, mis-, re-, pre-, ex-, half-',
        theory: prefixesTheory,
        exercises: prefixesExercises,
      },
      {
        id: 'suffixes',
        number: 32,
        title: 'Suffixes',
        subtitle: 'noun, adjective, adverb and verb suffixes; -er/-or, -ment, -tion, -ness, -ity, -ful/-less, -ly',
        theory: suffixesTheory,
        exercises: suffixesExercises,
      },
      {
        id: 'word-formation-quiz',
        number: 33,
        title: 'Word Formation Quiz',
        subtitle: 'mixed prefix + suffix review quiz',
        exercises: wordFormationQuizExercises,
        wordwall: {
          url: 'https://wordwall.net/embed/12843617?themeId=1&templateId=3&fontStackId=0',
          shareUrl: 'https://wordwall.net/resource/12843617',
          title: 'Word Formation Practice',
        },
      },
    ],
  },
];
