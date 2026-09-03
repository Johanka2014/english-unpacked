import { Clock, History, CalendarClock, Megaphone, GitBranch, Repeat, MessageSquare, HelpCircle, Pen, FileText, Users, Link2, BookOpen, Layers, MapPin, Zap } from 'lucide-react';
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
import unit1DrivingImg from '@/assets/murphy/unit1-driving.png.asset.json';
import unit1ReadingPhoneImg from '@/assets/murphy/unit1-reading-phone.png.asset.json';
import unit1CafeImg from '@/assets/murphy/unit1-cafe-conversation.png.asset.json';

// ── Types ──────────────────────────────────────────────────────────────

export interface MurphyTheorySection {
  heading: string;
  content: string; // HTML
  notes?: string[];
  image?: string;
  imageAlt?: string;
  imagePosition?: 'left' | 'right';
}

export interface MurphyExerciseItem {
  id: number;
  /** Use ___ to mark the gap (gap-fill only). */
  prompt: string;
  /** Correct answer. Alternatives separated by | */
  answer: string;
  options?: string[];
  hint?: string;
  context?: string;
}

export interface MurphyExercise {
  id: string;
  title: string;
  instruction: string;
  type: 'gap-fill' | 'choice' | 'matching';
  items: MurphyExerciseItem[];
  wordBank?: string[];
}

export interface MurphyUnit {
  id: string;
  number: number;
  title: string;
  subtitle?: string;
  theory?: MurphyTheorySection[];
  exercises?: MurphyExercise[];
  supplementary?: MurphyExercise[];
  /** Links to existing custom lessons */
  externalUrl?: string;
  tenseMaster?: 'present' | 'past' | 'perfect' | 'pastPerfect' | 'future';
  holidayLesson?: boolean;
  cambridgeLesson?: boolean;
  modalMasteryLesson?: boolean;
  soSuchLesson?: boolean;
  compoundAdjectivesLesson?: boolean;
}

export interface MurphySection {
  id: string;
  title: string;
  description: string;
  range: string;
  icon: LucideIcon;
  image: string;
  units: MurphyUnit[];
}

const u = (number: number, title: string, subtitle?: string): MurphyUnit => ({
  id: `unit-${number}`,
  number,
  title,
  subtitle,
});

// ── Unit 1 — Present continuous ────────────────────────────────────────

const unit1Theory: MurphyTheorySection[] = [
  {
    heading: 'A · Study this example situation',
    image: unit1DrivingImg.url,
    imageAlt: 'Sarah is driving to work — a woman at the wheel of her car in busy traffic',
    content: `
      <p>Sarah is in her car. She is on her way to work. <strong>She is driving to work.</strong></p>
      <p>This means: she is driving <em>now</em>, at the time of speaking. The action is not finished.</p>
      <p><strong>am/is/are + -ing</strong> is the present continuous:</p>
      <table class="w-full text-sm border border-border rounded-md overflow-hidden">
        <tbody>
          <tr class="border-b border-border"><td class="p-2 font-medium">I</td><td class="p-2">am (= I'm)</td><td class="p-2" rowspan="3">driving<br/>working<br/>doing etc.</td></tr>
          <tr class="border-b border-border"><td class="p-2 font-medium">he / she / it</td><td class="p-2">is (= he's etc.)</td></tr>
          <tr><td class="p-2 font-medium">we / you / they</td><td class="p-2">are (= we're etc.)</td></tr>
        </tbody>
      </table>
    `,
  },
  {
    heading: 'B · I am doing = I am in the middle of doing it',
    image: unit1ReadingPhoneImg.url,
    imageAlt: 'Steve talking on the phone about a book he is currently reading',
    imagePosition: 'left',
    content: `
      <p>I've started doing it and I haven't finished:</p>
      <ul>
        <li>Please don't make so much noise. <strong>I'm trying</strong> to work. <em>(not I try)</em></li>
        <li>'Where's Mark?' '<strong>He's having</strong> a shower.' <em>(not He has a shower)</em></li>
        <li>Let's go out now. <strong>It isn't raining</strong> any more. <em>(not It doesn't rain)</em></li>
        <li>(at a party) Hi, Jane. <strong>Are you enjoying</strong> the party? <em>(not Do you enjoy)</em></li>
        <li>What's all that noise? What's <strong>going on</strong>? (= What's happening?)</li>
      </ul>
    `,
  },
  {
    heading: 'C · Actions around now',
    content: `
      <p>Sometimes the action is not happening at the time of speaking:</p>
      <blockquote><p>Steve is talking to a friend on the phone: <em>'I'm reading a really good book at the moment.'</em></p></blockquote>
      <p>Steve is not reading the book at the time of speaking. He has started it, but has not finished it yet — he is in the middle of reading it.</p>
      <ul>
        <li>Kate wants to work in Italy, so <strong>she's learning</strong> Italian.</li>
        <li>Some friends of mine <strong>are building</strong> their own house. They hope to finish it next summer.</li>
      </ul>
      <p>You can use the present continuous with <strong>today / this week / this year</strong> etc. (periods around now):</p>
      <ul>
        <li>A: <strong>You're working</strong> hard today. <em>(not You work hard today)</em> — B: Yes, I have a lot to do.</li>
        <li>The company I work for <strong>isn't doing</strong> so well this year.</li>
      </ul>
    `,
  },
  {
    heading: 'D · Changes happening around now',
    content: `
      <p>We use the present continuous when we talk about changes happening around now, especially with these verbs:</p>
      <p><strong>get · change · become · increase · rise · fall · grow · improve · begin · start</strong></p>
      <ul>
        <li>Is your English <strong>getting</strong> better? <em>(not Does your English get better)</em></li>
        <li>The population of the world <strong>is increasing</strong> very fast. <em>(not increases)</em></li>
        <li>At first I didn't like my job, but <strong>I'm beginning</strong> to enjoy it now. <em>(not I begin)</em></li>
      </ul>
    `,
    notes: ['See Unit 3 and Unit 4 for present continuous and present simple.', 'See Unit 19 for present tenses used for the future.'],
  },
];

const unit1Exercises: MurphyExercise[] = [
  {
    id: '1-1',
    title: 'Exercise 1.1',
    instruction: 'The sentences on the right follow those on the left. Which sentence goes with which?',
    type: 'matching',
    items: [
      { id: 1, prompt: "Please don't make so much noise.", answer: "I'm trying to work." },
      { id: 2, prompt: 'I need to eat something soon.', answer: "I'm getting hungry." },
      { id: 3, prompt: "I don't have anywhere to live right now.", answer: "I'm looking for an apartment." },
      { id: 4, prompt: 'We need to leave soon.', answer: "It's getting late." },
      { id: 5, prompt: "They don't need their car any more.", answer: "They're trying to sell it." },
      { id: 6, prompt: 'Things are not so good at work.', answer: 'The company is losing money.' },
      { id: 7, prompt: "It isn't true what they said.", answer: "They're lying." },
      { id: 8, prompt: "We're going to get wet.", answer: "It's starting to rain." },
    ],
  },
  {
    id: '1-2',
    title: 'Exercise 1.2',
    instruction: 'Complete the conversations. Use the present continuous.',
    type: 'gap-fill',
    items: [
      { id: 1, context: 'A: I saw Brian a few days ago.', prompt: "B: Oh, did you? ___ these days?", answer: "What is he doing|What's he doing", hint: 'what / he / do' },
      { id: 2, context: "A: He's at university.", prompt: 'B: ___?', answer: 'What is he studying|What’s he studying', hint: 'what / he / study' },
      { id: 3, context: 'A: Psychology.', prompt: 'B: ___ it?', answer: 'Is he enjoying', hint: 'he / enjoy' },
      { id: 4, context: 'A: Hi, Nicola.', prompt: 'How ___?', answer: 'is your new job going|is your new job going?', hint: 'your new job / go' },
      { id: 5, context: "B: Not bad. It wasn't so good at first, but", prompt: '___ better now.', answer: "it's getting|it is getting", hint: 'it / get' },
      { id: 6, context: 'A: What about Daniel? Is he OK?', prompt: 'B: Yes, but ___ his work right now.', answer: "he isn't enjoying|he is not enjoying|he's not enjoying", hint: 'he / not / enjoy' },
      { id: 7, context: "B: He's been in the same job for a long time and", prompt: '___ to get bored with it.', answer: "he's beginning|he is beginning", hint: 'he / begin' },
    ],
  },
  {
    id: '1-3',
    title: 'Exercise 1.3',
    instruction: "Put the verb into the correct form, positive (I'm doing etc.) or negative (I'm not doing etc.).",
    type: 'gap-fill',
    items: [
      { id: 1, prompt: "Please don't make so much noise. ___ to work.", answer: "I'm trying|I am trying", hint: 'I / try' },
      { id: 2, prompt: "Let's go out now. ___ any more.", answer: "It isn't raining|It is not raining|It's not raining", hint: 'it / rain' },
      { id: 3, prompt: 'You can turn off the radio. ___ to it.', answer: "I'm not listening|I am not listening", hint: 'I / listen' },
      { id: 4, prompt: "Kate phoned me last night. She's on holiday in France. ___ a great time and doesn't want to come back.", answer: "She's having|She is having", hint: 'she / have' },
      { id: 5, prompt: 'I want to lose weight, so this week ___ lunch.', answer: "I'm not eating|I am not eating", hint: 'I / eat' },
      { id: 6, prompt: 'Andrew has just started evening classes. ___ Japanese.', answer: "He's learning|He is learning", hint: 'he / learn' },
      { id: 7, prompt: 'Paul and Sally have had an argument. ___ to each other.', answer: "They aren't speaking|They are not speaking|They're not speaking", hint: 'they / speak' },
      { id: 8, prompt: '___ tired. I need a rest.', answer: "I'm getting|I am getting", hint: 'I / get' },
      { id: 9, prompt: "Tim ___ today. He's taken the day off.", answer: "isn't working|is not working", hint: 'work' },
      { id: 10, prompt: '___ for Sophie. Do you know where she is?', answer: "I'm looking|I am looking", hint: 'I / look' },
    ],
  },
  {
    id: '1-4',
    title: 'Exercise 1.4',
    instruction: 'Complete the sentences using the verbs in the box.',
    type: 'gap-fill',
    wordBank: ['start', 'get', 'increase', 'change', 'rise'],
    items: [
      { id: 1, prompt: 'The population of the world ___ very fast.', answer: 'is increasing' },
      { id: 2, prompt: 'The world ___. Things never stay the same.', answer: 'is changing' },
      { id: 3, prompt: 'The situation is already bad and it ___ worse.', answer: 'is getting' },
      { id: 4, prompt: 'The cost of living ___. Every year things are more expensive.', answer: 'is rising' },
      { id: 5, prompt: "The weather ___ to improve. The rain has stopped, and the wind isn't as strong.", answer: 'is starting' },
    ],
  },
];

const unit1Supplementary: MurphyExercise[] = [
  {
    id: 's1-1',
    title: 'Supplementary — A letter from England',
    instruction: 'Choose the correct form of the verbs in Paul\'s letter.',
    type: 'choice',
    items: [
      { id: 1, prompt: '(1) ___ a great time here in England.', answer: "I'm having", options: ["I'm having", 'I have'] },
      { id: 2, prompt: 'My university term (2) ___ until the autumn,', answer: "doesn't start", options: ["isn't starting", "doesn't start"] },
      { id: 3, prompt: 'so (3) ___ the opportunity to improve my English.', answer: "I'm taking", options: ["I'm taking", 'I take'] },
      { id: 4, prompt: '(4) ___ with some English friends', answer: "I'm staying", options: ["I'm staying", 'I stay'] },
      { id: 5, prompt: 'who (5) ___ a farm.', answer: 'own', options: ['are owning', 'own'] },
      { id: 6, prompt: 'On weekdays (6) ___ a bus into Torquay to go to language classes.', answer: 'I catch', options: ["I'm catching", 'I catch'] },
      { id: 7, prompt: '(7) ___ good progress, I think.', answer: "I'm making", options: ["I'm making", 'I make'] },
      { id: 8, prompt: 'My friends (8) ___ my pronunciation is much better than when I arrived,', answer: 'say', options: ['say', 'are saying'] },
      { id: 9, prompt: 'and (9) ___ almost everything now.', answer: 'I understand', options: ["I'm understanding", 'I understand'] },
      { id: 10, prompt: 'At weekends (10) ___ on the farm.', answer: 'I help', options: ["I'm helping", 'I help'] },
      { id: 11, prompt: 'At the moment (11) ___ the corn', answer: "they're harvesting", options: ["they're harvesting", 'they harvest'] },
      { id: 12, prompt: 'and (12) ___ all the help they can get.', answer: 'they need', options: ["they're needing", 'they need'] },
      { id: 13, prompt: "It's quite hard work, but (13) ___ it.", answer: 'I like', options: ["I'm liking", 'I like'] },
      { id: 14, prompt: 'And (14) ___ some strong muscles!', answer: "I'm developing", options: ["I'm developing", 'I develop'] },
      { id: 15, prompt: '(15) ___ to visit me at Christmas?', answer: 'Are you coming', options: ['Do you come', 'Are you coming'] },
      { id: 16, prompt: '(16) ___ the winter holiday here at the farm.', answer: "I'm spending", options: ["I'm spending", 'I spend'] },
      { id: 17, prompt: 'My friends (17) ___ to meet you and there\'s plenty of space.', answer: 'want', options: ['are wanting', 'want'] },
      { id: 18, prompt: 'But you must bring your warmest clothes. (18) ___ very cold here in the winter.', answer: "It's getting", options: ["It's getting", 'It gets'] },
      { id: 19, prompt: 'Let me know as soon as (19) ___.', answer: 'you decide', options: ["you're deciding", 'you decide'] },
      { id: 20, prompt: 'And tell me what (20) ___ these days.', answer: "you're doing", options: ["you're doing", 'you do'] },
    ],
  },
];

// ── Unit 2 — Present simple ────────────────────────────────────────────

const unit2Theory: MurphyTheorySection[] = [
  {
    heading: 'A · Study this example situation',
    content: `
      <p>Alex is a bus driver, but now he is in bed asleep.</p>
      <p><strong>He is not driving</strong> a bus. (He is asleep.) but <strong>He drives</strong> a bus. (He is a bus driver.)</p>
      <p><strong>drive(s) / work(s) / do(es)</strong> etc. is the present simple:</p>
      <table class="w-full text-sm border border-border rounded-md overflow-hidden">
        <tbody>
          <tr class="border-b border-border"><td class="p-2 font-medium">I / we / you / they</td><td class="p-2">drive · work · do etc.</td></tr>
          <tr><td class="p-2 font-medium">he / she / it</td><td class="p-2">drives · works · does etc.</td></tr>
        </tbody>
      </table>
    `,
  },
  {
    heading: 'B · Things in general',
    content: `
      <p>We use the present simple to say that something happens all the time or repeatedly, or that something is true in general:</p>
      <ul>
        <li>Nurses <strong>look after</strong> patients in hospitals.</li>
        <li>I usually <strong>go</strong> away at weekends.</li>
        <li>The earth <strong>goes</strong> round the sun.</li>
        <li>The cafe <strong>opens</strong> at 7.30 in the morning.</li>
      </ul>
      <p>Remember: I <strong>work</strong> … but He <strong>works</strong> … · They <strong>teach</strong> … but My sister <strong>teaches</strong> …</p>
    `,
  },
  {
    heading: 'C · do / does in questions and negatives',
    content: `
      <table class="w-full text-sm border border-border rounded-md overflow-hidden">
        <tbody>
          <tr class="border-b border-border"><td class="p-2 font-medium">do</td><td class="p-2">I / we / you / they</td><td class="p-2">work? drive? do?</td></tr>
          <tr class="border-b border-border"><td class="p-2 font-medium">does</td><td class="p-2">he / she / it</td><td class="p-2">work? drive? do?</td></tr>
          <tr class="border-b border-border"><td class="p-2">I / we / you / they</td><td class="p-2 font-medium">don't</td><td class="p-2">work · drive · do</td></tr>
          <tr><td class="p-2">he / she / it</td><td class="p-2 font-medium">doesn't</td><td class="p-2">work · drive · do</td></tr>
        </tbody>
      </table>
      <ul>
        <li>I come from Canada. Where <strong>do you come</strong> from?</li>
        <li>I <strong>don't go</strong> away very often.</li>
        <li>What <strong>does</strong> this word <strong>mean</strong>? <em>(not What means this word?)</em></li>
        <li>Rice <strong>doesn't grow</strong> in cold climates.</li>
      </ul>
      <p>Sometimes <strong>do</strong> is also the main verb:</p>
      <ul>
        <li>'What <strong>do you do</strong>?' 'I work in a shop.'</li>
        <li>He's always so lazy. He <strong>doesn't do</strong> anything to help.</li>
      </ul>
    `,
  },
  {
    heading: 'D · How often we do things',
    content: `
      <ul>
        <li>I <strong>get up</strong> at 8 o'clock every morning.</li>
        <li>How often <strong>do you go</strong> to the dentist?</li>
        <li>Julie <strong>doesn't drink</strong> tea very often.</li>
        <li>Robert usually <strong>goes</strong> away two or three times a year.</li>
      </ul>
    `,
  },
  {
    heading: 'E · I promise / I apologise etc.',
    content: `
      <p>Sometimes we do things by saying something. When you promise to do something, you can say 'I promise …'; when you suggest something, you can say 'I suggest …':</p>
      <ul>
        <li><strong>I promise</strong> I won't be late. <em>(not I'm promising)</em></li>
        <li>'What do you suggest I do?' '<strong>I suggest</strong> that you …'</li>
      </ul>
      <p>In the same way we say: I apologise … · I advise … · I insist … · I agree … · I refuse … etc.</p>
    `,
    notes: ['Present simple and present continuous → Units 3–4.', 'Present tenses for the future → Unit 19.'],
  },
];

const unit2Exercises: MurphyExercise[] = [
  {
    id: '2-1',
    title: 'Exercise 2.1',
    instruction: 'Complete the sentences using the verbs in the box.',
    type: 'gap-fill',
    wordBank: ['cause(s)', 'connect(s)', 'drink(s)', 'live(s)', 'open(s)', 'speak(s)', 'take(s)'],
    items: [
      { id: 1, prompt: 'Tanya ___ German very well.', answer: 'speaks' },
      { id: 2, prompt: "I don't often ___ coffee.", answer: 'drink' },
      { id: 3, prompt: 'The swimming pool ___ at 7.30 every morning.', answer: 'opens' },
      { id: 4, prompt: 'Bad driving ___ many accidents.', answer: 'causes' },
      { id: 5, prompt: 'My parents ___ in a very small flat.', answer: 'live' },
      { id: 6, prompt: 'The Olympic Games ___ place every four years.', answer: 'take' },
      { id: 7, prompt: 'The Panama Canal ___ the Atlantic and Pacific Oceans.', answer: 'connects' },
    ],
  },
  {
    id: '2-2',
    title: 'Exercise 2.2',
    instruction: 'Put the verb into the correct form.',
    type: 'gap-fill',
    items: [
      { id: 1, prompt: 'Julie ___ tea very often.', answer: "doesn't drink|does not drink", hint: 'not / drink' },
      { id: 2, prompt: 'What time ___ here?', answer: 'do the banks close', hint: 'the banks / close' },
      { id: 3, prompt: "I've got a car, but I ___ it much.", answer: "don't use|do not use", hint: 'not / use' },
      { id: 4, prompt: "'Where ___ from?' 'From Cuba.'", answer: 'does Ricardo come', hint: 'Ricardo / come' },
      { id: 5, prompt: "'What ___?' 'I'm an electrician.'", answer: 'do you do', hint: 'you / do' },
      { id: 6, prompt: 'It ___ me an hour to get to work.', answer: 'takes', hint: 'take' },
      { id: 7, prompt: 'How long ___ you?', answer: 'does it take', hint: 'it / take' },
      { id: 8, prompt: 'Look at this sentence. What ___?', answer: 'does this word mean', hint: 'this word / mean' },
      { id: 9, prompt: "David isn't very fit. He ___ any sport.", answer: "doesn't do|does not do", hint: 'not / do' },
    ],
  },
  {
    id: '2-3',
    title: 'Exercise 2.3',
    instruction: 'Use the verbs in the box to complete the sentences. Sometimes you need the negative.',
    type: 'gap-fill',
    wordBank: ['believe', 'eat', 'flow', 'grow', 'make', 'rise', 'tell', 'translate'],
    items: [
      { id: 1, prompt: 'Rice ___ in Britain.', answer: "doesn't grow|does not grow" },
      { id: 2, prompt: 'The sun ___ in the east.', answer: 'rises' },
      { id: 3, prompt: 'Bees ___ honey.', answer: 'make' },
      { id: 4, prompt: 'Vegetarians ___ meat.', answer: "don't eat|do not eat" },
      { id: 5, prompt: 'An atheist ___ in God.', answer: "doesn't believe|does not believe" },
      { id: 6, prompt: 'An interpreter ___ from one language into another.', answer: 'translates' },
      { id: 7, prompt: 'Liars are people who ___ the truth.', answer: "don't tell|do not tell" },
      { id: 8, prompt: 'The River Amazon ___ into the Atlantic Ocean.', answer: 'flows' },
    ],
  },
  {
    id: '2-4',
    title: 'Exercise 2.4',
    instruction: 'You ask Lisa questions about herself and her family. Write the questions.',
    type: 'gap-fill',
    items: [
      { id: 1, context: 'You know that Lisa plays tennis. You want to know how often.', prompt: 'How often ___?', answer: 'do you play tennis' },
      { id: 2, context: "Perhaps Lisa's sister plays tennis too. You want to know.", prompt: '___ tennis too?', answer: 'Does your sister play' },
      { id: 3, context: 'You know that Lisa reads a newspaper every day. You want to know which one.', prompt: 'Which newspaper ___?', answer: 'do you read' },
      { id: 4, context: "You know that Lisa's brother works. You want to know what he does.", prompt: 'What ___?', answer: 'does your brother do' },
      { id: 5, context: 'You know that Lisa goes to the cinema a lot. You want to know how often.', prompt: 'How often ___?', answer: 'do you go to the cinema' },
      { id: 6, context: "You don't know where Lisa's grandparents live. You want to know.", prompt: 'Where ___?', answer: 'do your grandparents live' },
    ],
  },
  {
    id: '2-5',
    title: 'Exercise 2.5',
    instruction: 'Complete the sentences using the phrases in the box.',
    type: 'gap-fill',
    wordBank: ['I apologise', 'I insist', 'I promise', 'I recommend', 'I suggest'],
    items: [
      { id: 1, prompt: 'Mr Evans is not in the office today. ___ you try calling him tomorrow.', answer: 'I suggest' },
      { id: 2, prompt: "I won't tell anybody what you said. ___.", answer: 'I promise' },
      { id: 3, prompt: '(in a restaurant) You must let me pay for the meal. ___.', answer: 'I insist' },
      { id: 4, prompt: "___ for what I did. It won't happen again.", answer: 'I apologise|I apologize' },
      { id: 5, prompt: 'The new restaurant in Hill Street is very good. ___ it.', answer: 'I recommend' },
    ],
  },
];

const unit2Supplementary: MurphyExercise[] = [
  {
    id: 's2-1',
    title: 'Supplementary — Radio interview: saving the rainforests',
    instruction: 'Put the verbs in the correct tense: present simple or present continuous.',
    type: 'gap-fill',
    items: [
      { id: 1, prompt: 'Many plants which could be useful in medicine ___ in the rainforest.', answer: 'grow', hint: 'grow' },
      { id: 2, prompt: 'We ___ all the plants yet — there are thousands and thousands of them.', answer: "don't know|do not know", hint: 'not / know' },
      { id: 3, prompt: 'Researchers ___ to discover their secrets before they are destroyed.', answer: 'are trying', hint: 'try' },
      { id: 4, prompt: 'You mean, the idea that the world ___ warmer?', answer: 'is getting', hint: 'get' },
      { id: 5, prompt: "The rainforests ___ an important effect on the earth's climate.", answer: 'have', hint: 'have' },
      { id: 6, prompt: 'They ___ at a terrifying rate and soon they will be gone.', answer: 'are disappearing', hint: 'disappear' },
      { id: 7, prompt: 'People ___ enough to save them.', answer: "aren't doing|are not doing", hint: 'not / do' },
      { id: 8, prompt: 'But is global warming really such a problem? I ___ warm sunshine.', answer: 'like', hint: 'like' },
      { id: 9, prompt: 'Well, what ___ when you heat ice?', answer: 'happens', hint: 'happen' },
      { id: 10, prompt: 'It ___, of course.', answer: 'melts', hint: 'melt' },
      { id: 11, prompt: 'The polar ice caps ___ of millions of tons of ice.', answer: 'consist', hint: 'consist' },
      { id: 12, prompt: 'If they ___, the level of the sea will rise and cause terrible floods.', answer: 'melt', hint: 'melt' },
      { id: 13, prompt: 'Many scientists ___ that temperatures are already rising.', answer: 'believe', hint: 'believe' },
      { id: 14, prompt: 'We must do everything we can to prevent global warming, and that ___ preserving the rainforests!', answer: 'includes', hint: 'include' },
    ],
  },
];

// ── Unit 3 — Present continuous and present simple 1 ───────────────────

const unit3Theory: MurphyTheorySection[] = [
  {
    heading: 'A · Compare',
    content: `
      <div class="grid md:grid-cols-2 gap-4">
        <div class="p-4 rounded-lg border border-border bg-muted/30">
          <p class="font-semibold mb-2">Present continuous (I am doing)</p>
          <p class="mb-2">For things happening at or around the time of speaking. The action is not complete.</p>
          <ul>
            <li>The water <strong>is boiling</strong>. Can you turn it off?</li>
            <li>Listen to those people. What language <strong>are they speaking</strong>?</li>
            <li>Let's go out. It <strong>isn't raining</strong> now.</li>
            <li>'I'm busy.' 'What <strong>are you doing</strong>?'</li>
            <li>I<strong>'m getting</strong> hungry. Let's go and eat.</li>
            <li>Kate wants to work in Italy, so she<strong>'s learning</strong> Italian.</li>
            <li>The population of the world <strong>is increasing</strong> very fast.</li>
          </ul>
        </div>
        <div class="p-4 rounded-lg border border-border bg-muted/30">
          <p class="font-semibold mb-2">Present simple (I do)</p>
          <p class="mb-2">For things in general or things that happen repeatedly.</p>
          <ul>
            <li>Water <strong>boils</strong> at 100 degrees Celsius.</li>
            <li>Excuse me, <strong>do you speak</strong> English?</li>
            <li>It <strong>doesn't rain</strong> very much in summer.</li>
            <li>What <strong>do you</strong> usually <strong>do</strong> at weekends?</li>
            <li>I always <strong>get</strong> hungry in the afternoon.</li>
            <li>Most people <strong>learn</strong> to swim when they are children.</li>
            <li>Every day the population of the world <strong>increases</strong> by about 200,000 people.</li>
          </ul>
        </div>
      </div>
    `,
  },
  {
    heading: 'B · Temporary and permanent',
    content: `
      <p>We use the continuous for <strong>temporary</strong> situations and the simple for <strong>permanent</strong> situations:</p>
      <ul>
        <li>I<strong>'m living</strong> with some friends until I find a place of my own.<br/>My parents <strong>live</strong> in London. They have lived there all their lives.</li>
        <li>A: You<strong>'re working</strong> hard today. B: Yes, I have a lot to do.<br/>Joe isn't lazy. He <strong>works</strong> hard most of the time.</li>
      </ul>
    `,
  },
  {
    heading: "C · I always do and I'm always doing",
    content: `
      <p><strong>I always do (something)</strong> = I do it every time:</p>
      <ul><li>I always <strong>go</strong> to work by car. <em>(not I'm always going)</em></li></ul>
      <p><strong>I'm always doing something</strong> has a different meaning — I do it very often, perhaps too often:</p>
      <ul>
        <li>I<strong>'m always losing</strong> things. (= I lose things very often, more often than normal)</li>
        <li>You<strong>'re always playing</strong> computer games. You should do something more active.</li>
        <li>Tim is never satisfied. He<strong>'s always complaining</strong>. (= He complains too much)</li>
      </ul>
    `,
    notes: ['Present continuous and simple 2 → Unit 4.', 'Present tenses for the future → Unit 19.'],
  },
];

const unit3Exercises: MurphyExercise[] = [
  {
    id: '3-1',
    title: 'Exercise 3.1',
    instruction: 'Are the underlined verbs right or wrong? Type the correct verb form, or type RIGHT if the sentence is correct.',
    type: 'gap-fill',
    items: [
      { id: 1, context: 'Water boils at 100 degrees Celsius.', prompt: 'boils → ___', answer: 'RIGHT' },
      { id: 2, context: 'The water boils. Can you turn it off?', prompt: 'boils → ___', answer: 'is boiling' },
      { id: 3, context: 'Look! That man tries to open the door of your car.', prompt: 'tries → ___', answer: 'is trying' },
      { id: 4, context: 'Can you hear those people? What do they talk about?', prompt: 'do they talk → ___', answer: 'are they talking' },
      { id: 5, context: 'The moon goes round the earth in about 27 days.', prompt: 'goes → ___', answer: 'RIGHT' },
      { id: 6, context: 'I must go now. It gets late.', prompt: 'gets → ___', answer: 'is getting' },
      { id: 7, context: 'I usually go to work by car.', prompt: 'go → ___', answer: 'RIGHT' },
      { id: 8, context: "'Hurry up! It's time to leave.' 'OK, I come.'", prompt: 'I come → ___', answer: "I'm coming|I am coming" },
      { id: 9, context: "I hear you've got a new job. How do you get on?", prompt: 'do you get on → ___', answer: 'are you getting on' },
      { id: 10, context: "Paul is never late. He's always getting to work on time.", prompt: "he's always getting → ___", answer: 'he always gets' },
      { id: 11, context: "They don't get on well. They're always arguing.", prompt: "they're always arguing → ___", answer: 'RIGHT' },
    ],
  },
  {
    id: '3-2',
    title: 'Exercise 3.2',
    instruction: 'Put the verb into the correct form: present continuous or present simple.',
    type: 'gap-fill',
    items: [
      { id: 1, prompt: "Let's go out. ___ now.", answer: "It isn't raining|It is not raining|It's not raining", hint: 'it / not / rain' },
      { id: 2, prompt: 'Julia is very good at languages. ___ four languages very well.', answer: 'She speaks', hint: 'she / speak' },
      { id: 3, prompt: 'Hurry up! ___ for you.', answer: 'Everybody is waiting|Everybody’s waiting', hint: 'everybody / wait' },
      { id: 4, prompt: "'___ to the radio?' 'No, you can turn it off.'", answer: 'Are you listening', hint: 'you / listen' },
      { id: 5, prompt: "'___ to the radio every day?' 'No, just occasionally.'", answer: 'Do you listen', hint: 'you / listen' },
      { id: 6, prompt: 'The River Nile ___ into the Mediterranean.', answer: 'flows', hint: 'flow' },
      { id: 7, prompt: 'The river ___ very fast today — much faster than usual.', answer: 'is flowing', hint: 'flow' },
      { id: 8, prompt: '___ vegetables in our garden, but this year we are not growing any.', answer: 'We usually grow', hint: 'we / usually / grow' },
      { id: 9, prompt: "A: How's your English? B: Not bad. I think ___ slowly.", answer: "it's improving|it is improving", hint: 'it / improve' },
      { id: 10, prompt: 'Rachel is in New York right now. ___ at the Park Hotel.', answer: "She's staying|She is staying", hint: 'she / stay' },
      { id: 11, prompt: "___ there when she's in New York.", answer: 'She always stays', hint: 'she / always / stay' },
      { id: 12, prompt: 'Can we stop walking soon? ___ to feel tired.', answer: "I'm starting|I am starting", hint: 'I / start' },
      { id: 13, prompt: 'A: Can you drive? B: ___. My father is teaching me.', answer: "I'm learning|I am learning", hint: 'I / learn' },
      { id: 14, prompt: 'Normally ___ work at five, but this week I am working until six to earn a little more money.', answer: 'I finish', hint: 'I / finish' },
      { id: 15, prompt: 'My parents ___ in Manchester. They were born there and have never lived anywhere else.', answer: 'live', hint: 'live' },
      { id: 16, prompt: 'Sonia ___ for a place to live. She is staying with her sister until she finds somewhere.', answer: 'is looking', hint: 'look' },
      { id: 17, prompt: "A: What ___? B: He's an architect, but he isn't working at the moment.", answer: 'does your brother do', hint: 'your brother / do' },
      { id: 18, prompt: '(at a party) ___ parties, but I am not enjoying this one very much.', answer: 'I usually enjoy', hint: 'I / usually / enjoy' },
    ],
  },
  {
    id: '3-3',
    title: 'Exercise 3.3',
    instruction: "Finish B's sentences. Use always + -ing.",
    type: 'gap-fill',
    items: [
      { id: 1, context: "A: I've lost my phone again.", prompt: "B: Not again! You're ___.", answer: 'always losing your phone' },
      { id: 2, context: 'A: The car has broken down again.', prompt: "B: That car is useless. It's ___.", answer: 'always breaking down' },
      { id: 3, context: "A: Look! You've made the same mistake again.", prompt: "B: Oh no, not again! I'm ___.", answer: 'always making the same mistake|always making that mistake' },
      { id: 4, context: "A: Oh, I've forgotten my glasses again.", prompt: "B: Typical! You're ___.", answer: 'always forgetting your glasses' },
    ],
  },
];

const unit3Supplementary: MurphyExercise[] = [
  {
    id: 's3-1',
    title: 'Supplementary — Adam and Mike',
    instruction: 'Choose the correct form of the verbs in the conversation.',
    type: 'choice',
    items: [
      { id: 1, prompt: 'ADAM: Hello, Mike. What (1) ___ in this part of London?', answer: 'are you doing', options: ['are you doing', 'do you do'] },
      { id: 2, prompt: "MIKE: Well, actually, (2) ___ at flats round here.", answer: "I'm looking", options: ["I'm looking", 'I look'] },
      { id: 3, prompt: 'ADAM: Flats? (3) ___ to move?', answer: 'Do you want', options: ['Are you wanting', 'Do you want'] },
      { id: 4, prompt: 'MIKE: Yes, in fact, believe it or not, Mandy and I (4) ___ married.', answer: 'are getting', options: ['are getting', 'get'] },
      { id: 5, prompt: 'MIKE: Now (5) ___ to find a suitable flat.', answer: "we're trying", options: ['we try', "we're trying"] },
      { id: 6, prompt: 'MIKE: Oh, we (6) ___ for one to buy.', answer: "aren't looking", options: ["aren't looking", "don't look"] },
      { id: 7, prompt: 'MIKE: We (7) ___ enough money yet.', answer: "don't have", options: ["aren't having", "don't have"] },
      { id: 8, prompt: 'MIKE: (8) ___ to find somewhere to rent.', answer: 'We want', options: ["We're wanting", 'We want'] },
      { id: 9, prompt: 'MIKE: Perhaps I\'ll talk to my family before (9) ___ a flat.', answer: 'we choose', options: ['we choose', "we're choosing"] },
    ],
  },
];

// ── Sections ───────────────────────────────────────────────────────────

export const murphyGrammarSections: MurphySection[] = [
  {
    id: 'present-and-past',
    title: 'Present and Past',
    description: 'Present continuous, present simple, past simple and past continuous',
    range: 'Units 1–6',
    icon: Clock,
    image: tensesImg,
    units: [
      {
        id: 'unit-1',
        number: 1,
        title: 'Present continuous (I am doing)',
        subtitle: 'actions happening now and around now; changes',
        theory: unit1Theory,
        exercises: unit1Exercises,
        supplementary: unit1Supplementary,
      },
      {
        id: 'unit-2',
        number: 2,
        title: 'Present simple (I do)',
        subtitle: 'things in general; do/does questions and negatives; I promise / I apologise',
        theory: unit2Theory,
        exercises: unit2Exercises,
        supplementary: unit2Supplementary,
      },
      {
        id: 'unit-3',
        number: 3,
        title: 'Present continuous and present simple 1 (I am doing and I do)',
        subtitle: 'temporary and permanent; I always do and I’m always doing',
        theory: unit3Theory,
        exercises: unit3Exercises,
        supplementary: unit3Supplementary,
      },
      u(4, 'Present continuous and present simple 2 (I am doing and I do)', 'state verbs; think, see, hear, look, feel'),
      u(5, 'Past simple (I did)', 'regular and irregular past forms; did/didn’t'),
      u(6, 'Past continuous (I was doing)', 'actions in progress in the past'),
      { id: 'tense-master-present', number: 901, title: 'Tense Master — Present Tenses', subtitle: 'extra interactive practice for the present tenses', tenseMaster: 'present' },
      { id: 'tense-master-past', number: 902, title: 'Tense Master — Past Tenses', subtitle: 'extra interactive practice for the past tenses', tenseMaster: 'past' },
      { id: 'past-tenses-holiday', number: 903, title: 'Past Tenses — Holiday Lesson', subtitle: 'a full lesson using past simple and past continuous', holidayLesson: true },
      { id: 'past-tenses-cambridge', number: 904, title: 'Past Tenses — Cambridge Lesson', subtitle: 'exam-style past tense practice', cambridgeLesson: true },
    ],
  },
  {
    id: 'present-perfect-and-past',
    title: 'Present Perfect and Past',
    description: 'Present perfect simple and continuous, past perfect, used to',
    range: 'Units 7–18',
    icon: History,
    image: tensesImg,
    units: [
      u(7, 'Present perfect 1 (I have done)'),
      u(8, 'Present perfect 2 (I have done)'),
      u(9, 'Present perfect continuous (I have been doing)'),
      u(10, 'Present perfect continuous and simple'),
      u(11, 'How long have you (been) …?'),
      u(12, 'For and since · When …? and How long …?'),
      u(13, 'Present perfect and past 1 (I have done and I did)'),
      u(14, 'Present perfect and past 2 (I have done and I did)'),
      u(15, 'Past perfect (I had done)'),
      u(16, 'Past perfect continuous (I had been doing)'),
      u(17, 'Have and have got'),
      u(18, 'Used to (do)'),
      { id: 'tense-master-perfect', number: 901, title: 'Tense Master — Present Perfect', subtitle: 'extra interactive practice for the present perfect', tenseMaster: 'perfect' },
      { id: 'tense-master-past-perfect', number: 902, title: 'Tense Master — Past Perfect', subtitle: 'extra interactive practice for the past perfect', tenseMaster: 'pastPerfect' },
    ],
  },
  {
    id: 'future',
    title: 'Future',
    description: 'Will, going to, present tenses for the future',
    range: 'Units 19–25',
    icon: CalendarClock,
    image: futureModalsImg,
    units: [
      u(19, 'Present tenses (I am doing / I do) for the future'),
      u(20, "(I'm) going to (do)"),
      u(21, 'Will / shall 1'),
      u(22, 'Will / shall 2'),
      u(23, "I will and I'm going to"),
      u(24, 'Will be doing and will have done'),
      u(25, "When I do / When I've done · When and if"),
      { id: 'tense-master-future', number: 901, title: 'Tense Master — Future Tenses', subtitle: 'extra interactive practice for the future forms', tenseMaster: 'future' },
    ],
  },
  {
    id: 'modals',
    title: 'Modals',
    description: 'Can, could, must, may, might, should, would and more',
    range: 'Units 26–37',
    icon: Megaphone,
    image: futureModalsImg,
    units: [
      u(26, 'Can, could and (be) able to'),
      u(27, 'Could (do) and could have (done)'),
      u(28, "Must and can't"),
      u(29, 'May and might 1'),
      u(30, 'May and might 2'),
      u(31, 'Have to and must'),
      u(32, "Must, mustn't, needn't"),
      u(33, 'Should 1'),
      u(34, 'Should 2'),
      u(35, "Had better · It's time …"),
      u(36, 'Would'),
      u(37, 'Can / Could / Would you …? (requests, offers, permission and invitations)'),
      { id: 'modal-verbs-master', number: 901, title: 'Modal Verbs Master', subtitle: 'reference, practice quiz and song listening for all 8 modal verbs', modalMasteryLesson: true },
    ],
  },
  {
    id: 'if-and-wish',
    title: 'If and Wish',
    description: 'Conditionals and wishes',
    range: 'Units 38–41',
    icon: GitBranch,
    image: conditionalsImg,
    units: [
      u(38, 'If I do … and If I did …'),
      u(39, 'If I knew … · I wish I knew …'),
      u(40, 'If I had known … · I wish I had known …'),
      u(41, 'Wish'),
    ],
  },
  {
    id: 'passive',
    title: 'Passive',
    description: 'Passive forms and have something done',
    range: 'Units 42–46',
    icon: Repeat,
    image: advancedImg,
    units: [
      u(42, 'Passive 1 (is done / was done)'),
      u(43, 'Passive 2 (be done / been done / being done)'),
      u(44, 'Passive 3'),
      u(45, 'It is said that … · He is said to … · He is supposed to …'),
      u(46, 'Have something done'),
    ],
  },
  {
    id: 'reported-speech',
    title: 'Reported Speech',
    description: 'Reporting what people said',
    range: 'Units 47–48',
    icon: MessageSquare,
    image: advancedImg,
    units: [
      u(47, 'Reported speech 1 (He said that …)'),
      u(48, 'Reported speech 2'),
    ],
  },
  {
    id: 'questions-and-auxiliary-verbs',
    title: 'Questions and Auxiliary Verbs',
    description: 'Question forms, auxiliary verbs and question tags',
    range: 'Units 49–52',
    icon: HelpCircle,
    image: questionsPrepImg,
    units: [
      u(49, 'Questions 1'),
      u(50, 'Questions 2 (Do you know where …? / He asked me where …)'),
      u(51, 'Auxiliary verbs (have/do/can etc.) · I think so / I hope so'),
      u(52, "Question tags (do you? isn't it? etc.)"),
    ],
  },
  {
    id: 'ing-and-to',
    title: '-ing and to …',
    description: 'Verb patterns with -ing forms and infinitives',
    range: 'Units 53–68',
    icon: Pen,
    image: verbPatternsImg,
    units: [
      u(53, 'Verb + -ing (enjoy doing / stop doing etc.)'),
      u(54, 'Verb + to … (decide to … / forget to … etc.)'),
      u(55, 'Verb (+ object) + to … (I want you to … etc.)'),
      u(56, 'Verb + -ing or to … 1 (remember / regret etc.)'),
      u(57, 'Verb + -ing or to … 2 (try / need / help)'),
      u(58, 'Verb + -ing or to … 3 (like / would like etc.)'),
      u(59, 'Prefer and would rather'),
      u(60, 'Preposition (in/for/about etc.) + -ing'),
      u(61, "Be / get used to something (I'm used to …)"),
      u(62, 'Verb + preposition + -ing (succeed in -ing etc.)'),
      u(63, 'Expressions + -ing'),
      u(64, 'To … , for … and so that …'),
      u(65, 'Adjective + to …'),
      u(66, 'To … (afraid to do) and preposition + -ing (afraid of -ing)'),
      u(67, 'See somebody do and see somebody doing'),
      u(68, '-ing clauses (Feeling tired, I went to bed early.)'),
      { id: 'verb-pattern-practice', number: 901, title: 'Verb Pattern Practice', subtitle: '-ing forms, infinitives, preferences and more', externalUrl: '/verb-pattern-practice' },
    ],
  },
  {
    id: 'articles-and-nouns',
    title: 'Articles and Nouns',
    description: 'Countable and uncountable nouns, a/an, the, plurals',
    range: 'Units 69–81',
    icon: FileText,
    image: nounsDeterminersImg,
    units: [
      u(69, 'Countable and uncountable 1'),
      u(70, 'Countable and uncountable 2'),
      u(71, 'Countable nouns with a/an and some'),
      u(72, 'A/an and the'),
      u(73, 'The 1'),
      u(74, 'The 2 (school / the school etc.)'),
      u(75, 'The 3 (children / the children)'),
      u(76, 'The 4 (the giraffe / the telephone / the piano etc., the + adjective)'),
      u(77, 'Names with and without the 1'),
      u(78, 'Names with and without the 2'),
      u(79, 'Singular and plural'),
      u(80, 'Noun + noun (a tennis ball / a headache)'),
      u(81, "-'s (your sister's name) and of … (the name of the book)"),
    ],
  },
  {
    id: 'pronouns-and-determiners',
    title: 'Pronouns and Determiners',
    description: 'Reflexives, some/any, much/many, all/every and more',
    range: 'Units 82–91',
    icon: Users,
    image: nounsDeterminersImg,
    units: [
      u(82, 'Myself / yourself / themselves etc.'),
      u(83, 'A friend of mine · My own house · On my own / by myself'),
      u(84, 'There … and it …'),
      u(85, 'Some and any'),
      u(86, 'No / none / any · Nothing / nobody etc.'),
      u(87, 'Much, many, little, few, a lot, plenty'),
      u(88, 'All / all of · most / most of · no / none of etc.'),
      u(89, 'Both / both of · neither / neither of · either / either of'),
      u(90, 'All, every and whole'),
      u(91, 'Each and every'),
    ],
  },
  {
    id: 'relative-clauses',
    title: 'Relative Clauses',
    description: 'who, that, which, whose, whom, where and -ing/-ed clauses',
    range: 'Units 92–97',
    icon: Link2,
    image: advancedImg,
    units: [
      u(92, 'Relative clauses 1: clauses with who / that / which'),
      u(93, 'Relative clauses 2: clauses with and without who / that / which'),
      u(94, 'Relative clauses 3: whose / whom / where'),
      u(95, 'Relative clauses 4: extra information clauses (1)'),
      u(96, 'Relative clauses 5: extra information clauses (2)'),
      u(97, '-ing and -ed clauses (the woman talking to Tom …)'),
    ],
  },
  {
    id: 'adjectives-and-adverbs',
    title: 'Adjectives and Adverbs',
    description: 'Adjective and adverb forms, comparison, word order',
    range: 'Units 98–112',
    icon: BookOpen,
    image: describingImg,
    units: [
      u(98, 'Adjectives ending in -ing and -ed (boring / bored etc.)'),
      u(99, 'Adjectives: a nice new house, you look tired'),
      u(100, 'Adjectives and adverbs 1 (quick / quickly)'),
      u(101, 'Adjectives and adverbs 2 (well / fast / late, hard / hardly)'),
      u(102, 'So and such'),
      u(103, 'Enough and too'),
      u(104, 'Quite, pretty, rather and fairly'),
      u(105, 'Comparison 1 (cheaper, more expensive etc.)'),
      u(106, 'Comparison 2 (much better / any better / better and better)'),
      u(107, 'Comparison 3 (as … as / than)'),
      u(108, 'Superlatives (the longest, the most enjoyable etc.)'),
      u(109, 'Word order 1: verb + object; place and time'),
      u(110, 'Word order 2: adverbs with the verb'),
      u(111, 'Still, yet and already · Any more / any longer / no longer'),
      u(112, 'Even'),
      { id: 'so-such-mastery', number: 901, title: 'So & Such Mastery', subtitle: 'interactive lesson on so, such, too and enough', soSuchLesson: true },
      { id: 'compound-adjectives', number: 902, title: 'Compound Adjectives', subtitle: 'well-known, short-sighted, open-minded and more', compoundAdjectivesLesson: true },
    ],
  },
  {
    id: 'conjunctions-and-prepositions',
    title: 'Conjunctions and Prepositions',
    description: 'although, in case, unless, as, like, for/during/while',
    range: 'Units 113–120',
    icon: Layers,
    image: questionsPrepImg,
    units: [
      u(113, 'Although / though / even though · In spite of / despite'),
      u(114, 'In case'),
      u(115, 'Unless · As long as · Provided / providing'),
      u(116, 'As (As I walked along the street … / As I was hungry …)'),
      u(117, 'Like and as'),
      u(118, 'Like / as if / as though'),
      u(119, 'For, during and while'),
      u(120, 'By and until · By the time …'),
    ],
  },
  {
    id: 'prepositions',
    title: 'Prepositions',
    description: 'at/on/in, to/into, by, and preposition combinations',
    range: 'Units 121–136',
    icon: MapPin,
    image: questionsPrepImg,
    units: [
      u(121, 'At / on / in (time)'),
      u(122, 'On time and in time · At the end and in the end'),
      u(123, 'In / at / on (position) 1'),
      u(124, 'In / at / on (position) 2'),
      u(125, 'In / at / on (position) 3'),
      u(126, 'To / at / in / into'),
      u(127, 'In / on / at (other uses)'),
      u(128, 'By'),
      u(129, 'Noun + preposition (reason for, cause of etc.)'),
      u(130, 'Adjective + preposition 1'),
      u(131, 'Adjective + preposition 2'),
      u(132, 'Verb + preposition 1: to and at'),
      u(133, 'Verb + preposition 2: about / for / of / after'),
      u(134, 'Verb + preposition 3: about and of'),
      u(135, 'Verb + preposition 4: of / for / from / on'),
      u(136, 'Verb + preposition 5: in / into / with / to / on'),
      { id: 'prepositions-of-time-practice', number: 901, title: 'Prepositions of Time — Practice', subtitle: 'on, in, at, from, to, past, till, by, since, for, ago, before', externalUrl: '/prepositions-of-time' },
      { id: 'prepositions-of-place-practice', number: 902, title: 'Prepositions of Place — Practice', subtitle: 'in front of, behind, above, below, into, out of, up, over and more', externalUrl: '/prepositions-of-place' },
      { id: 'verb-adjective-prepositions-practice', number: 903, title: 'Verbs & Adjectives + Prepositions — Practice', subtitle: 'talk about/to, wait for, agree with, work in/for/as, apply for/to', externalUrl: '/verb-adjective-prepositions' },
    ],
  },
  {
    id: 'phrasal-verbs',
    title: 'Phrasal Verbs',
    description: 'in/out, on/off, up/down, away/back',
    range: 'Units 137–145',
    icon: Zap,
    image: wordFormationImg,
    units: [
      u(137, 'Phrasal verbs 1: general points'),
      u(138, 'Phrasal verbs 2: in / out'),
      u(139, 'Phrasal verbs 3: out'),
      u(140, 'Phrasal verbs 4: on / off (1)'),
      u(141, 'Phrasal verbs 5: on / off (2)'),
      u(142, 'Phrasal verbs 6: up / down'),
      u(143, 'Phrasal verbs 7: up (1)'),
      u(144, 'Phrasal verbs 8: up (2)'),
      u(145, 'Phrasal verbs 9: away / back'),
    ],
  },
];

export const findMurphySection = (sectionId?: string) =>
  murphyGrammarSections.find((s) => s.id === sectionId);

export const findMurphyUnit = (sectionId?: string, unitId?: string) =>
  findMurphySection(sectionId)?.units.find((unit) => unit.id === unitId);

export const unitHasContent = (unit: MurphyUnit) =>
  !!(
    unit.theory ||
    unit.exercises ||
    unit.supplementary ||
    unit.externalUrl ||
    unit.tenseMaster ||
    unit.holidayLesson ||
    unit.cambridgeLesson ||
    unit.modalMasteryLesson ||
    unit.soSuchLesson ||
    unit.compoundAdjectivesLesson
  );
