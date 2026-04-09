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
  type: 'matching' | 'fill-blank' | 'rewrite' | 'multiple-choice' | 'noun-compound' | 'error-correction' | 'context-fill';
  items: {
    id: number;
    prompt: string;
    answer: string;
    options?: string[];
    hint?: string;
  }[];
  wordBank?: string[];
  compoundGroups?: CompoundGroups;
  emailSegments?: EmailSegment[];
  contextText?: string;
}

export interface ExamReadingPart1Question {
  id: number;
  text: string;
  options: { letter: string; text: string }[];
  answer: string;
}

export interface GrammarFocusTaskItem {
  id: number;
  question: string;
  answers: string[];
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
      {
        id: 'future-tenses',
        number: 12,
        title: 'Future Tenses',
        subtitle: 'will; going to; present continuous; present simple',
        theory: futureTensesTheory,
        exercises: futureTensesExercises,
        examPractice: futureTensesExamPractice,
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
