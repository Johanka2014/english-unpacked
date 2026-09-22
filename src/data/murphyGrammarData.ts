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
import unit102CouplesMeetingImg from '@/assets/murphy/unit102-couples-meeting.jpg';
import unit102BeachCoupleImg from '@/assets/murphy/unit102-beach-couple.jpg';
import unit102ReadingArmchairImg from '@/assets/murphy/unit102-reading-armchair.jpg';
import unit102OldHouseImg from '@/assets/murphy/unit102-old-house.jpg';
import unit38DoorsImg from '@/assets/murphy/unit38-two-doors.jpg';
import unit39DaydreamImg from '@/assets/murphy/unit39-daydreaming.jpg';
import unit40MissedTrainImg from '@/assets/murphy/unit40-missed-train.jpg';
import unit41RainImg from '@/assets/murphy/unit41-rain-window.jpg';

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
  /** Visual theme for the exercise card. */
  layout?: 'default' | 'conversation';
  image?: string;
  imageAlt?: string;
  imagePosition?: 'left' | 'right';
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
    layout: 'conversation',
    image: unit1CafeImg.url,
    imageAlt: 'Two people chatting over coffee in a cafe',
    imagePosition: 'right',
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
    layout: 'conversation',
    image: unit1CafeImg.url,
    imageAlt: 'Two people chatting over coffee in a cafe',
    imagePosition: 'right',
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
    layout: 'conversation',
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
    layout: 'conversation',
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

// ── Unit 4 — Present continuous and present simple 2 ───────────────────

const unit4Theory: MurphyTheorySection[] = [
  {
    heading: 'A · State verbs',
    content: `
      <p>We use continuous forms for actions and happenings that have started and not finished (<em>they are eating</em> / <em>it is raining</em> etc.).</p>
      <p>Some verbs (for example, <strong>know</strong> and <strong>like</strong>) are not normally used in this way. We don't say 'I am knowing' or 'they are liking'; we say 'I know', 'they like'.</p>
      <p>The following verbs are not normally used in continuous forms:</p>
      <div class="p-4 rounded-lg border border-border bg-muted/30">
        <p class="font-medium">like &nbsp; love &nbsp; hate &nbsp; want &nbsp; need &nbsp; prefer</p>
        <p class="font-medium">know &nbsp; realise &nbsp; suppose &nbsp; mean &nbsp; understand &nbsp; believe &nbsp; remember</p>
        <p class="font-medium">belong &nbsp; fit &nbsp; contain &nbsp; consist &nbsp; seem</p>
      </div>
      <ul>
        <li>I<strong>'m hungry</strong>. <strong>I want</strong> something to eat. <em>(not I'm wanting)</em></li>
        <li><strong>Do you understand</strong> what I mean?</li>
        <li>Anna <strong>doesn't seem</strong> very happy at the moment.</li>
      </ul>
    `,
  },
  {
    heading: 'B · Think',
    content: `
      <p>When <strong>think</strong> means 'believe' or 'have an opinion', we do not use the continuous:</p>
      <ul>
        <li><strong>I think</strong> Mary is Canadian, but I'm not sure. <em>(not I'm thinking)</em></li>
        <li>What <strong>do you think</strong> of my plan? (= What is your opinion?)</li>
      </ul>
      <p>When <strong>think</strong> means 'consider', the continuous is possible:</p>
      <ul>
        <li><strong>I'm thinking</strong> about what happened. I often think about it.</li>
        <li>Nicky <strong>is thinking of</strong> giving up her job. (= she is considering it)</li>
      </ul>
    `,
  },
  {
    heading: 'C · He is selfish and He is being selfish',
    content: `
      <p><strong>He's being</strong> = he's behaving / he's acting. Compare:</p>
      <ul>
        <li>I can't understand why <strong>he's being</strong> so selfish. He isn't usually like that. (= he is behaving selfishly <em>now</em>)</li>
        <li><strong>He is</strong> selfish. (= he is selfish generally, not only now)</li>
      </ul>
      <p>We use <strong>am/is/are being</strong> to say how somebody is behaving. It is not usually possible in other sentences:</p>
      <ul>
        <li><strong>It's hot</strong> today. <em>(not It's being hot)</em></li>
        <li>Sarah <strong>is</strong> very tired. <em>(not is being tired)</em></li>
      </ul>
    `,
  },
  {
    heading: 'D · See, hear, smell, taste, look, feel',
    content: `
      <p>We normally use the present simple (not continuous) with these verbs:</p>
      <ul>
        <li><strong>Do you see</strong> that man over there? <em>(not Are you seeing)</em></li>
        <li>This room <strong>smells</strong>. Let's open a window.</li>
      </ul>
      <p>We often use <strong>can</strong> + see / hear / smell / taste:</p>
      <ul><li><strong>I can hear</strong> a strange noise. Can you hear it?</li></ul>
      <p>You can use the present simple <em>or</em> continuous to say how somebody looks or feels <em>now</em>:</p>
      <ul>
        <li>You <strong>look</strong> well today. <em>or</em> You<strong>'re looking</strong> well today.</li>
        <li>How <strong>do you feel</strong> now? <em>or</em> How <strong>are you feeling</strong> now?</li>
      </ul>
    `,
    notes: ['But: I usually <strong>feel</strong> tired in the morning. <em>(not I\'m usually feeling)</em>', 'Present continuous and simple 1 → Unit 3.'],
  },
];

const unit4Exercises: MurphyExercise[] = [
  {
    id: '4-1',
    title: 'Exercise 4.1',
    instruction: 'Put the verb into the correct form: present continuous or present simple.',
    type: 'gap-fill',
    items: [
      { id: 1, prompt: 'Are you hungry? ___ something to eat?', answer: 'Do you want', hint: 'you / want' },
      { id: 2, prompt: "Don't put the dictionary away. ___ it.", answer: "I'm using|I am using", hint: 'I / use' },
      { id: 3, prompt: "Don't put the dictionary away. ___ it very often.", answer: 'I use', hint: 'I / use' },
      { id: 4, prompt: 'Who is that man? What ___?', answer: 'does he want', hint: 'he / want' },
      { id: 5, prompt: 'Who is that man? Why ___ at us?', answer: 'is he looking', hint: 'he / look' },
      { id: 6, prompt: "George says he's 80 years old, but nobody ___ him.", answer: 'believes', hint: 'believe' },
      { id: 7, prompt: 'She told me her name, but ___ it now.', answer: "I don't remember|I do not remember", hint: 'I / not / remember' },
      { id: 8, prompt: "I ___ of selling my car. Would you be interested in buying it?", answer: "'m thinking|am thinking", hint: 'I / think' },
      { id: 9, prompt: 'I ___ you should sell your car. You don\'t use it very often.', answer: 'think', hint: 'think' },
      { id: 10, prompt: 'Air ___ mainly of nitrogen and oxygen.', answer: 'consists', hint: 'consist' },
    ],
  },
  {
    id: '4-2',
    title: 'Exercise 4.2',
    instruction: 'Complete the conversation. Use the present continuous or present simple.',
    type: 'gap-fill',
    layout: 'conversation',
    items: [
      { id: 1, context: "TOM: You look worried.", prompt: "SAM: I am. ___ about the exam tomorrow.", answer: "I'm thinking|I am thinking", hint: 'I / think' },
      { id: 2, context: 'TOM: Do you feel ready for it?', prompt: "SAM: No. ___ I need another week.", answer: 'I think', hint: 'I / think' },
      { id: 3, context: "TOM: Come on, you're better than you think.", prompt: 'SAM: Thanks, but ___ that at all.', answer: "I don't believe|I do not believe", hint: 'I / not / believe' },
      { id: 4, context: 'TOM: Have some coffee. It will help.', prompt: 'SAM: No thanks. ___ coffee in the evening.', answer: "I don't like|I do not like", hint: 'I / not / like' },
      { id: 5, context: 'TOM: OK. What are your plans for tonight?', prompt: 'SAM: ___ to revise until midnight.', answer: "I'm going|I am going", hint: 'I / go' },
    ],
  },
  {
    id: '4-3',
    title: 'Exercise 4.3',
    instruction: 'Complete the sentences using being where necessary. Type the correct form.',
    type: 'gap-fill',
    items: [
      { id: 1, prompt: "I can't understand why ___ so selfish. He isn't usually like that.", answer: "he's being|he is being" },
      { id: 2, prompt: 'The weather ___ very hot at the moment. Let\'s stay inside.', answer: 'is' },
      { id: 3, prompt: 'Sarah ___ very nice to me at the moment. I wonder why.', answer: 'is being' },
      { id: 4, prompt: "You normally have plenty to say. Why ___ so quiet today?", answer: 'are you being' },
      { id: 5, prompt: 'I ___ tired. I think I will go to bed.', answer: 'am|feel' },
    ],
  },
  {
    id: '4-4',
    title: 'Exercise 4.4',
    instruction: 'Choose the correct form.',
    type: 'choice',
    items: [
      { id: 1, prompt: 'Nicky ___ of giving up her job.', answer: 'is thinking', options: ['thinks', 'is thinking'] },
      { id: 2, prompt: 'I ___ this soup. It tastes wonderful.', answer: 'love', options: ['love', 'am loving'] },
      { id: 3, prompt: 'You ___ well today. Have you had a good rest?', answer: 'are looking', options: ['are looking', 'look'] },
      { id: 4, prompt: 'This bag ___ to Rachel — her name is on it.', answer: 'belongs', options: ['belongs', 'is belonging'] },
      { id: 5, prompt: 'What ___? It smells great!', answer: 'are you cooking', options: ['do you cook', 'are you cooking'] },
      { id: 6, prompt: 'I ___ what you mean, but I disagree.', answer: 'understand', options: ['understand', 'am understanding'] },
    ],
  },
];

const unit4Supplementary: MurphyExercise[] = [
  {
    id: 's4-1',
    title: 'Supplementary — At the restaurant',
    instruction: 'Choose the correct verb form in the conversation.',
    type: 'choice',
    layout: 'conversation',
    items: [
      { id: 1, prompt: 'WAITER: Good evening. (1) ___ a table for two?', answer: 'Do you want', options: ['Are you wanting', 'Do you want'] },
      { id: 2, prompt: 'ANNA: Yes, please. Something near the window, if possible.', answer: 'RIGHT', options: ['RIGHT'] },
      { id: 3, prompt: 'BEN: Mmm, something (3) ___ delicious in here.', answer: 'smells', options: ['smells', 'is smelling'] },
      { id: 4, prompt: 'ANNA: (4) ___ of having the fish. What about you?', answer: "I'm thinking", options: ["I'm thinking", 'I think'] },
      { id: 5, prompt: "BEN: (5) ___ fish very much, so I'll take the pasta.", answer: "I don't like", options: ["I'm not liking", "I don't like"] },
      { id: 6, prompt: 'ANNA: The waiter (6) ___ very patient tonight — we have taken ages.', answer: 'is being', options: ['is being', 'is'] },
      { id: 7, prompt: 'BEN: True. (7) ___ he wants us to order now.', answer: 'I think', options: ["I'm thinking", 'I think'] },
    ],
  },
];

// ── Unit 5 — Past simple ───────────────────────────────────────────────

const unit5Theory: MurphyTheorySection[] = [
  {
    heading: 'A · Study this example',
    content: `
      <p>Wolfgang Amadeus Mozart <strong>was</strong> an Austrian musician and composer. He <strong>lived</strong> from 1756 to 1791. He <strong>started</strong> composing at the age of five and <strong>wrote</strong> more than 600 pieces of music.</p>
      <p><strong>lived / started / wrote</strong> are all past simple.</p>
    `,
  },
  {
    heading: 'B · Regular and irregular verbs',
    content: `
      <p>Very often the past simple ends in <strong>-ed</strong> (regular verbs):</p>
      <ul>
        <li>I <strong>work</strong> in a travel agency now. Before that I <strong>worked</strong> in a shop.</li>
        <li>We <strong>invited</strong> them to our party, but they <strong>decided</strong> not to come.</li>
      </ul>
      <p>But many verbs are irregular. The past simple does not end in -ed:</p>
      <table class="w-full text-sm border border-border rounded-md overflow-hidden">
        <tbody>
          <tr class="border-b border-border"><td class="p-2">write</td><td class="p-2">→ wrote</td><td class="p-2">Mozart <strong>wrote</strong> more than 600 pieces of music.</td></tr>
          <tr class="border-b border-border"><td class="p-2">see</td><td class="p-2">→ saw</td><td class="p-2">We <strong>saw</strong> Rose in town a few days ago.</td></tr>
          <tr class="border-b border-border"><td class="p-2">go</td><td class="p-2">→ went</td><td class="p-2">I <strong>went</strong> to the cinema three times last week.</td></tr>
          <tr><td class="p-2">shut</td><td class="p-2">→ shut</td><td class="p-2">It was cold, so I <strong>shut</strong> the window.</td></tr>
        </tbody>
      </table>
    `,
  },
  {
    heading: 'C · Negatives and questions: did',
    content: `
      <p>In questions and negatives we use <strong>did / didn't</strong> + infinitive (<em>enjoy / see / go</em> etc.):</p>
      <table class="w-full text-sm border border-border rounded-md overflow-hidden">
        <tbody>
          <tr class="border-b border-border"><td class="p-2">I <strong>enjoyed</strong></td><td class="p-2">did I <strong>enjoy</strong>?</td><td class="p-2">I <strong>didn't enjoy</strong></td></tr>
          <tr class="border-b border-border"><td class="p-2">she <strong>saw</strong></td><td class="p-2">did she <strong>see</strong>?</td><td class="p-2">she <strong>didn't see</strong></td></tr>
          <tr><td class="p-2">they <strong>went</strong></td><td class="p-2">did they <strong>go</strong>?</td><td class="p-2">they <strong>didn't go</strong></td></tr>
        </tbody>
      </table>
      <ul>
        <li>A: <strong>Did you go</strong> out last night? B: Yes, I went to the cinema.</li>
        <li>I <strong>didn't stay</strong> at home. <em>(not I didn't stayed)</em></li>
        <li>Why <strong>did Nick leave</strong> early?</li>
      </ul>
    `,
    notes: ['Sometimes <strong>do</strong> is the main verb: What <strong>did you do</strong> at the weekend?'],
  },
  {
    heading: 'D · The past of be: was / were',
    content: `
      <table class="w-full text-sm border border-border rounded-md overflow-hidden">
        <tbody>
          <tr class="border-b border-border"><td class="p-2">I / he / she / it</td><td class="p-2"><strong>was / wasn't</strong></td><td class="p-2">was I / he / she / it?</td></tr>
          <tr><td class="p-2">we / you / they</td><td class="p-2"><strong>were / weren't</strong></td><td class="p-2">were we / you / they?</td></tr>
        </tbody>
      </table>
      <p>We do <em>not</em> use did with was/were:</p>
      <ul>
        <li><strong>Was</strong> the weather good when you were away? <em>(not Did the weather be)</em></li>
        <li>They <strong>weren't</strong> able to come because they were busy.</li>
      </ul>
    `,
    notes: ['Past continuous → Unit 6.', 'Present perfect and past → Units 13–14.'],
  },
];

const unit5Exercises: MurphyExercise[] = [
  {
    id: '5-1',
    title: 'Exercise 5.1',
    instruction: 'Read what Laura says about a typical working day, then write about yesterday.',
    type: 'gap-fill',
    items: [
      { id: 1, prompt: 'I usually get up at 7 o\'clock. Yesterday ___ at 7 o\'clock.', answer: 'I got up|she got up' },
      { id: 2, prompt: 'I have a cup of coffee and some toast. Yesterday ___ a cup of coffee and some toast.', answer: 'I had|she had' },
      { id: 3, prompt: 'I leave home at 8 o\'clock. Yesterday ___ home at 8 o\'clock.', answer: 'I left|she left' },
      { id: 4, prompt: 'I\'m never late for work. Yesterday ___ late for work.', answer: "I wasn't|I was not" },
      { id: 5, prompt: 'I have lunch at 12.30. Yesterday ___ lunch at 12.30.', answer: 'I had' },
      { id: 6, prompt: 'I finish work at 5 o\'clock. Yesterday ___ work at 5 o\'clock.', answer: 'I finished' },
      { id: 7, prompt: 'I go straight home. Yesterday ___ straight home.', answer: 'I went' },
      { id: 8, prompt: 'I go to bed at 11 o\'clock. Yesterday ___ to bed at 11 o\'clock.', answer: 'I went' },
    ],
  },
  {
    id: '5-2',
    title: 'Exercise 5.2',
    instruction: 'Put the verb into the correct form: past simple.',
    type: 'gap-fill',
    items: [
      { id: 1, prompt: 'It was warm, so I ___ off my coat.', answer: 'took', hint: 'take' },
      { id: 2, prompt: "The film wasn't very good. I ___ it very much.", answer: "didn't enjoy|did not enjoy", hint: 'not / enjoy' },
      { id: 3, prompt: 'I knew Sarah was very busy, so I ___ her.', answer: "didn't disturb|did not disturb", hint: 'not / disturb' },
      { id: 4, prompt: 'The window was open and a bird ___ into the room.', answer: 'flew', hint: 'fly' },
      { id: 5, prompt: 'The hotel wasn\'t expensive. It ___ very much.', answer: "didn't cost|did not cost", hint: 'not / cost' },
      { id: 6, prompt: 'I was very tired, so I ___ the party early.', answer: 'left', hint: 'leave' },
      { id: 7, prompt: 'It was hard work carrying the bags. They ___ very heavy.', answer: 'were', hint: 'be' },
      { id: 8, prompt: 'The bed was very uncomfortable. I ___ very well.', answer: "didn't sleep|did not sleep", hint: 'not / sleep' },
      { id: 9, prompt: 'The bus and the taxi arrived at the same time, so we ___ the bus.', answer: 'took', hint: 'take' },
      { id: 10, prompt: 'I ___ what to do, so I asked for advice.', answer: "didn't know|did not know", hint: 'not / know' },
    ],
  },
  {
    id: '5-3',
    title: 'Exercise 5.3',
    instruction: 'Complete the questions. Type the whole question.',
    type: 'gap-fill',
    layout: 'conversation',
    items: [
      { id: 1, context: 'A: I had a really good holiday.', prompt: 'B: Oh, good. Where ___?', answer: 'did you go' },
      { id: 2, context: 'A: We stayed at a small hotel by the sea.', prompt: 'B: Nice. How much ___?', answer: 'did it cost' },
      { id: 3, context: 'A: We went there by train.', prompt: 'B: Really? How long ___?', answer: 'did the journey take|did it take' },
      { id: 4, context: 'A: We met some lovely people.', prompt: 'B: That\'s great. Who ___?', answer: 'did you meet' },
      { id: 5, context: 'A: The weather was perfect.', prompt: 'B: Lucky you. ___ hot every day?', answer: 'Was it' },
    ],
  },
];

const unit5Supplementary: MurphyExercise[] = [
  {
    id: 's5-1',
    title: 'Supplementary — A short biography',
    instruction: 'Put the verbs into the past simple.',
    type: 'gap-fill',
    items: [
      { id: 1, prompt: 'Agatha Christie ___ born in Devon in 1890.', answer: 'was', hint: 'be' },
      { id: 2, prompt: 'She ___ to school, but studied at home with her mother.', answer: "didn't go|did not go", hint: 'not / go' },
      { id: 3, prompt: 'She ___ her first detective novel in 1920.', answer: 'wrote|published', hint: 'write' },
      { id: 4, prompt: 'Readers ___ the character of Hercule Poirot immediately.', answer: 'loved|liked', hint: 'love' },
      { id: 5, prompt: 'In 1926 she ___ for eleven days and nobody knew where she was.', answer: 'disappeared', hint: 'disappear' },
      { id: 6, prompt: 'Later she ___ an archaeologist and travelled to the Middle East.', answer: 'married', hint: 'marry' },
      { id: 7, prompt: 'Her novels ___ more than two billion copies worldwide.', answer: 'sold|have sold', hint: 'sell' },
      { id: 8, prompt: 'She ___ in 1976 at the age of 85.', answer: 'died', hint: 'die' },
    ],
  },
];

// ── Unit 6 — Past continuous ───────────────────────────────────────────

const unit6Theory: MurphyTheorySection[] = [
  {
    heading: 'A · Study this example situation',
    content: `
      <p>Yesterday Karen and Jim <strong>played</strong> tennis. They began at 10 o'clock and finished at 11.30.</p>
      <p>So, at 10.30 they <strong>were playing</strong> tennis.</p>
      <p><strong>They were playing</strong> = they were in the middle of playing. They had not finished.</p>
    `,
  },
  {
    heading: 'B · was/were + -ing = past continuous',
    content: `
      <table class="w-full text-sm border border-border rounded-md overflow-hidden">
        <tbody>
          <tr class="border-b border-border"><td class="p-2 font-medium">I / he / she / it</td><td class="p-2">was</td><td class="p-2" rowspan="2">playing<br/>doing<br/>working etc.</td></tr>
          <tr><td class="p-2 font-medium">we / you / they</td><td class="p-2">were</td></tr>
        </tbody>
      </table>
      <ul>
        <li>This time last year I <strong>was living</strong> in Brazil.</li>
        <li>What <strong>were you doing</strong> at 10 o'clock last night?</li>
        <li>I waved to Helen, but she <strong>wasn't looking</strong>.</li>
      </ul>
    `,
  },
  {
    heading: 'C · Past continuous and past simple',
    content: `
      <p>We often use the past simple and past continuous together to say that something happened in the middle of something else:</p>
      <ul>
        <li>Matt <strong>phoned</strong> while we <strong>were having</strong> dinner.</li>
        <li>It <strong>was raining</strong> when I <strong>got up</strong>.</li>
        <li>I <strong>saw</strong> you in the park yesterday. You <strong>were sitting</strong> on the grass and <strong>reading</strong> a book.</li>
        <li>I <strong>hurt</strong> my back while I <strong>was working</strong> in the garden.</li>
      </ul>
      <p>But we use the past simple for complete events, one after the other:</p>
      <ul>
        <li>I <strong>walked</strong> home after the party last night. (= the complete walk)</li>
        <li>Kate <strong>was walking</strong> home when she met Joe. (= in the middle of the walk)</li>
      </ul>
    `,
  },
  {
    heading: 'D · State verbs again',
    content: `
      <p>Some verbs (for example, <strong>know</strong>, <strong>want</strong>, <strong>believe</strong>) are not normally used in continuous forms:</p>
      <ul>
        <li>We were good friends. We <strong>knew</strong> each other well. <em>(not we were knowing)</em></li>
        <li>I was enjoying the party, but Chris <strong>wanted</strong> to go home. <em>(not was wanting)</em></li>
      </ul>
    `,
    notes: ['Past simple → Unit 5.', 'Past perfect continuous → Unit 16.'],
  },
];

const unit6Exercises: MurphyExercise[] = [
  {
    id: '6-1',
    title: 'Exercise 6.1',
    instruction: 'What were you doing at these times? Put the verb into the past continuous.',
    type: 'gap-fill',
    items: [
      { id: 1, prompt: 'At 8 o\'clock yesterday evening I ___ dinner with friends.', answer: 'was having|was eating' },
      { id: 2, prompt: 'At 5 o\'clock last Monday we ___ in the office.', answer: 'were still working|were working' },
      { id: 3, prompt: 'This time last year they ___ in Spain.', answer: 'were living' },
      { id: 4, prompt: 'At 11 o\'clock last night she ___ to music.', answer: 'was listening' },
      { id: 5, prompt: 'When the phone rang, I ___ a shower.', answer: 'was having|was taking' },
    ],
  },
  {
    id: '6-2',
    title: 'Exercise 6.2',
    instruction: 'Put the verb into the past continuous or past simple.',
    type: 'gap-fill',
    items: [
      { id: 1, prompt: 'Jane ___ for the bus when it started to rain.', answer: 'was waiting', hint: 'wait' },
      { id: 2, prompt: 'It ___ hard when I left the house this morning.', answer: 'was raining', hint: 'rain' },
      { id: 3, prompt: 'I ___ my leg while I was playing football.', answer: 'hurt', hint: 'hurt' },
      { id: 4, prompt: 'We ___ television when the lights went out.', answer: 'were watching', hint: 'watch' },
      { id: 5, prompt: 'The car ___ down while we were driving to the airport.', answer: 'broke', hint: 'break' },
      { id: 6, prompt: 'I ___ the dishes when I heard a loud noise outside.', answer: 'was washing|was doing', hint: 'wash' },
      { id: 7, prompt: 'When I got to the café, my friends ___ for me.', answer: 'were waiting', hint: 'wait' },
      { id: 8, prompt: 'Amy ___ off her bike because she was going too fast.', answer: 'fell', hint: 'fall' },
      { id: 9, prompt: 'I ___ my old teacher while I was shopping yesterday.', answer: 'met|saw', hint: 'meet' },
      { id: 10, prompt: 'We ___ each other well, so we became friends quickly.', answer: 'knew', hint: 'know' },
    ],
  },
  {
    id: '6-3',
    title: 'Exercise 6.3',
    instruction: 'Complete the conversation with the past simple or past continuous.',
    type: 'gap-fill',
    layout: 'conversation',
    items: [
      { id: 1, context: 'BEN: I saw you in the park yesterday afternoon.', prompt: 'LILY: Really? What ___?', answer: 'was I doing', hint: 'I / do' },
      { id: 2, context: 'BEN: You were sitting on the grass with a book.', prompt: 'LILY: Ah yes. ___ my exam notes.', answer: 'I was reading', hint: 'I / read' },
      { id: 3, context: "BEN: I waved, but you didn't see me.", prompt: 'LILY: Sorry! ___ at all.', answer: "I wasn't looking up|I wasn't looking", hint: 'I / not / look' },
      { id: 4, context: 'BEN: Then it started to rain, didn\'t it?', prompt: 'LILY: It did. ___ home immediately.', answer: 'I ran|I went', hint: 'I / run' },
      { id: 5, context: 'BEN: I stayed under a tree until it stopped.', prompt: 'LILY: Poor you! How long ___ there?', answer: 'did you wait', hint: 'you / wait' },
    ],
  },
  {
    id: '6-4',
    title: 'Exercise 6.4',
    instruction: 'Choose the correct form.',
    type: 'choice',
    items: [
      { id: 1, prompt: 'Matt phoned while we ___ dinner.', answer: 'were having', options: ['had', 'were having'] },
      { id: 2, prompt: 'I ___ home after the party last night.', answer: 'walked', options: ['walked', 'was walking'] },
      { id: 3, prompt: 'Kate ___ home when she met Joe.', answer: 'was walking', options: ['walked', 'was walking'] },
      { id: 4, prompt: 'We were good friends. We ___ each other well.', answer: 'knew', options: ['knew', 'were knowing'] },
      { id: 5, prompt: 'When I arrived, everybody ___ around the table.', answer: 'was sitting', options: ['sat', 'was sitting'] },
      { id: 6, prompt: 'The bell rang, so everybody ___ up and left.', answer: 'stood', options: ['stood', 'was standing'] },
    ],
  },
];

const unit6Supplementary: MurphyExercise[] = [
  {
    id: 's6-1',
    title: 'Supplementary — What happened?',
    instruction: 'Choose the correct verb form in the conversation.',
    type: 'choice',
    layout: 'conversation',
    items: [
      { id: 1, prompt: 'POLICE OFFICER: What (1) ___ when the accident happened?', answer: 'were you doing', options: ['did you do', 'were you doing'] },
      { id: 2, prompt: 'WITNESS: (2) ___ at the bus stop opposite the bank.', answer: 'I was standing', options: ['I stood', 'I was standing'] },
      { id: 3, prompt: 'POLICE OFFICER: And the red car — how fast (3) ___?', answer: 'was it going', options: ['did it go', 'was it going'] },
      { id: 4, prompt: 'WITNESS: Very fast. Then it (4) ___ into the wall.', answer: 'crashed', options: ['crashed', 'was crashing'] },
      { id: 5, prompt: 'POLICE OFFICER: (5) ___ anybody else at that moment?', answer: 'Did you see', options: ['Did you see', 'Were you seeing'] },
      { id: 6, prompt: 'WITNESS: Yes, a woman (6) ___ across the road at the time.', answer: 'was walking', options: ['walked', 'was walking'] },
      { id: 7, prompt: 'POLICE OFFICER: Thank you. (7) ___ her name?', answer: 'Did you know', options: ['Were you knowing', 'Did you know'] },
    ],
  },
];

// ── Unit 102 — So and such ─────────────────────────────────────────────

const unit102Theory: MurphyTheorySection[] = [
  {
    heading: 'A · so + adjective/adverb and such + noun',
    image: unit102CouplesMeetingImg,
    imageAlt: 'Two couples smiling and shaking hands as they meet in a street',
    imagePosition: 'right',
    content: `
      <p>Compare <strong>so</strong> and <strong>such</strong>:</p>
      <p>We use <strong>so + adjective/adverb</strong>:</p>
      <ul class="list-disc list-inside space-y-1">
        <li><strong>so</strong> stupid &nbsp;·&nbsp; <strong>so</strong> nice &nbsp;·&nbsp; <strong>so</strong> quick &nbsp;·&nbsp; <strong>so</strong> quickly</li>
        <li>I didn't like the book. The story was <strong>so stupid</strong>.</li>
        <li>I like Liz and Joe. They are <strong>so nice</strong>.</li>
      </ul>
      <p>We use <strong>such + noun</strong>:</p>
      <ul class="list-disc list-inside space-y-1">
        <li><strong>such a</strong> story &nbsp;·&nbsp; <strong>such</strong> people</li>
      </ul>
      <p>We also use <strong>such + adjective + noun</strong>:</p>
      <ul class="list-disc list-inside space-y-1">
        <li>I didn't like the book. It was <strong>such a stupid story</strong>. <em>(not a so stupid story)</em></li>
        <li>I like Liz and Joe. They are <strong>such nice people</strong>. <em>(not so nice people)</em></li>
      </ul>
      <p>We say <strong>such a …</strong> <em>(not a such)</em>: <strong>such a big dog</strong> <em>(not a such big dog)</em>.</p>
    `,
  },
  {
    heading: 'B · So and such make the meaning stronger',
    image: unit102BeachCoupleImg,
    imageAlt: 'A couple relaxing on a beach with cocktails and looking out to sea',
    imagePosition: 'left',
    content: `
      <ul class="list-disc list-inside space-y-2">
        <li>It's a beautiful day, isn't it? It's <strong>so warm</strong>. <em>(= really warm)</em></li>
        <li>It's difficult to understand him because he talks <strong>so quietly</strong>.</li>
        <li>It was a great holiday. We had <strong>such a good time</strong>. <em>(= a really good time)</em></li>
        <li>You always think good things are going to happen. You're <strong>such an optimist</strong>.</li>
      </ul>
    `,
  },
  {
    heading: 'C · so … that and such … that',
    image: unit102ReadingArmchairImg,
    imageAlt: 'A woman sitting comfortably in an armchair and reading a book',
    imagePosition: 'right',
    content: `
      <p>You can use <strong>so … that</strong>:</p>
      <ul class="list-disc list-inside space-y-1">
        <li>The book was <strong>so</strong> good <strong>that</strong> I couldn't put it down.</li>
        <li>I was <strong>so</strong> tired <strong>that</strong> I fell asleep in the armchair.</li>
      </ul>
      <p>You can use <strong>such … that</strong>:</p>
      <ul class="list-disc list-inside space-y-1">
        <li>It was <strong>such a</strong> good book <strong>that</strong> I couldn't put it down.</li>
        <li>It was <strong>such</strong> nice weather <strong>that</strong> we spent the whole day on the beach.</li>
      </ul>
      <p>We usually leave out <strong>that</strong>:</p>
      <ul class="list-disc list-inside space-y-1">
        <li>I was <strong>so</strong> tired I fell asleep.</li>
        <li>It was <strong>such</strong> nice weather we spent the whole day on the beach.</li>
      </ul>
    `,
  },
  {
    heading: "D · so and such with the meaning 'like this'",
    image: unit102OldHouseImg,
    imageAlt: 'A detached house that is more than one hundred years old',
    imagePosition: 'left',
    content: `
      <ul class="list-disc list-inside space-y-2">
        <li>Somebody told me the house was built 100 years ago. I didn't realise it was <strong>so old</strong>. <em>(= as old as it is)</em></li>
        <li>I'm tired because I got up at six. I don't usually get up <strong>so early</strong>.</li>
        <li>I expected the weather to be cooler. I'm surprised it is <strong>so warm</strong>.</li>
        <li>I didn't realise it was <strong>such an old house</strong>.</li>
        <li>You know it's not true. How can you say <strong>such a thing</strong>?</li>
      </ul>
      <p>Note the expression <strong>no such …</strong>:</p>
      <ul class="list-disc list-inside space-y-1">
        <li>You won't find the word 'blid' in the dictionary. <strong>There's no such word</strong>. <em>(= this word does not exist)</em></li>
      </ul>
    `,
  },
  {
    heading: 'E · Compare: so long / such a long time',
    content: `
      <table class="w-full text-sm border border-border rounded-md overflow-hidden">
        <tbody>
          <tr class="border-b border-border bg-muted/50"><td class="p-2 font-semibold w-1/2">so</td><td class="p-2 font-semibold">such</td></tr>
          <tr class="border-b border-border">
            <td class="p-2">I haven't seen her for <strong>so long</strong> I've forgotten what she looks like.</td>
            <td class="p-2">I haven't seen her for <strong>such a long time</strong>. <em>(not so long time)</em></td>
          </tr>
          <tr class="border-b border-border">
            <td class="p-2">I didn't know it was <strong>so far</strong>.</td>
            <td class="p-2">I didn't know it was <strong>such a long way</strong>.</td>
          </tr>
          <tr>
            <td class="p-2">I'm sorry I'm late — there was <strong>so much</strong> traffic / <strong>so many</strong> cars.</td>
            <td class="p-2">I'm sorry I'm late — there was <strong>such a lot (of)</strong> traffic.</td>
          </tr>
        </tbody>
      </table>
    `,
    notes: ['not so … as → Unit 107A', 'such as → Unit 117A'],
  },
];

const unit102Exercises: MurphyExercise[] = [
  {
    id: '102-1',
    title: 'Exercise 102.1',
    instruction: 'Put in so, such or such a.',
    type: 'gap-fill',
    wordBank: ['so', 'such', 'such a'],
    items: [
      { id: 1, prompt: "It's difficult to understand him because he speaks ___ quietly.", answer: 'so' },
      { id: 2, prompt: "I like Liz and Joe. They're ___ nice people.", answer: 'such' },
      { id: 3, prompt: 'It was a great holiday. We had ___ good time.', answer: 'such a' },
      { id: 4, prompt: 'I was surprised that he looked ___ well after his recent illness.', answer: 'so' },
      { id: 5, prompt: "Everything is ___ expensive these days, isn't it?", answer: 'so' },
      { id: 6, prompt: "The weather is beautiful, isn't it? I didn't expect it to be ___ nice day.", answer: 'such a' },
      { id: 7, prompt: 'I think she works too hard. She looks ___ tired all the time.', answer: 'so' },
      { id: 8, prompt: 'He always looks good. He wears ___ nice clothes.', answer: 'such' },
      { id: 9, prompt: 'It was ___ boring movie that I fell asleep while I was watching it.', answer: 'such a' },
      { id: 10, prompt: 'I could not believe the news. It was ___ shock.', answer: 'such a' },
      { id: 11, prompt: "I have to go. I didn't realise it was ___ late.", answer: 'so' },
      { id: 12, prompt: 'The food at the hotel was ___ awful.', answer: 'so' },
      { id: 13, prompt: "I've never eaten ___ awful food.", answer: 'such' },
      { id: 14, prompt: "They've got ___ much money they don't know what to do with it.", answer: 'so' },
      { id: 15, prompt: "I didn't realise you lived ___ long way from the city centre.", answer: 'such a' },
      { id: 16, prompt: "The party was really great. It was ___ shame you could not come.", answer: 'such a' },
    ],
  },
  {
    id: '102-2',
    title: 'Exercise 102.2',
    instruction: 'Make one sentence from two. Use so or such. Write the whole new sentence.',
    type: 'gap-fill',
    items: [
      { id: 1, context: 'She worked hard. → She made herself ill.', prompt: '___', answer: 'She worked so hard she made herself ill|She worked so hard that she made herself ill', hint: 'so hard (that) …' },
      { id: 2, context: 'It was a beautiful day. → We decided to go to the beach.', prompt: '___', answer: 'It was such a beautiful day we decided to go to the beach|It was such a beautiful day that we decided to go to the beach', hint: 'such a beautiful day (that) …' },
      { id: 3, context: "I was tired. → I couldn't keep my eyes open.", prompt: '___', answer: "I was so tired I couldn't keep my eyes open|I was so tired that I couldn't keep my eyes open", hint: 'so tired (that) …' },
      { id: 4, context: "We had a good time on holiday. → We didn't want to come home.", prompt: '___', answer: "We had such a good time on holiday we didn't want to come home|We had such a good time on holiday that we didn't want to come home", hint: 'such a good time (that) …' },
      { id: 5, context: 'She speaks English well. → You would think it was her native language.', prompt: '___', answer: 'She speaks English so well you would think it was her native language|She speaks English so well that you would think it was her native language', hint: 'so well (that) …' },
      { id: 6, context: "I've got a lot to do. → I don't know where to begin.", prompt: '___', answer: "I've got such a lot to do I don't know where to begin|I've got such a lot to do that I don't know where to begin|I've got so much to do I don't know where to begin|I've got so much to do that I don't know where to begin", hint: 'such a lot / so much …' },
      { id: 7, context: 'The music was loud. → You could hear it from miles away.', prompt: '___', answer: 'The music was so loud you could hear it from miles away|The music was so loud that you could hear it from miles away', hint: 'so loud (that) …' },
      { id: 8, context: "I had a big breakfast. → I didn't eat anything else for the rest of the day.", prompt: '___', answer: "I had such a big breakfast I didn't eat anything else for the rest of the day|I had such a big breakfast that I didn't eat anything else for the rest of the day", hint: 'such a big breakfast (that) …' },
      { id: 9, context: 'It was horrible weather. → We spent the whole day indoors.', prompt: '___', answer: 'It was such horrible weather we spent the whole day indoors|It was such horrible weather that we spent the whole day indoors|The weather was so horrible we spent the whole day indoors|The weather was so horrible that we spent the whole day indoors', hint: 'such horrible weather (that) …' },
      { id: 10, context: "I was surprised. → I didn't know what to say.", prompt: '___', answer: "I was so surprised I didn't know what to say|I was so surprised that I didn't know what to say", hint: 'so surprised (that) …' },
    ],
  },
  {
    id: '102-3',
    title: 'Exercise 102.3',
    instruction: 'Use your own ideas to complete these pairs of sentences. Type anything that is true for you — example answers are given behind each check.',
    type: 'gap-fill',
    items: [
      { id: 1, context: 'a) We enjoyed our holiday.', prompt: 'It was so ___.', answer: 'relaxing|enjoyable|warm|nice', hint: 'example: relaxing' },
      { id: 2, context: 'b) We enjoyed our holiday.', prompt: 'We had such ___.', answer: 'a good time|a great time|a wonderful time|an amazing time', hint: 'example: a good time' },
      { id: 3, context: 'a) I like Catherine.', prompt: "She's so ___.", answer: 'friendly|nice|kind|funny', hint: 'example: friendly' },
      { id: 4, context: 'b) I like Catherine.', prompt: "She's such ___.", answer: 'a friendly person|a nice person|a kind person', hint: 'example: a friendly person' },
      { id: 5, context: 'a) I like New York.', prompt: "It's so ___.", answer: 'exciting|big|interesting|lively', hint: 'example: exciting' },
      { id: 6, context: 'b) I like New York.', prompt: "It's such ___.", answer: 'an exciting city|an interesting city|an exciting place|a lively city', hint: 'example: an exciting city' },
      { id: 7, context: "a) I wouldn't like to be a teacher.", prompt: "It's so ___.", answer: 'stressful|tiring|hard|difficult', hint: 'example: stressful' },
      { id: 8, context: "b) I wouldn't like to be a teacher.", prompt: "It's such ___.", answer: 'a stressful job|a tiring job|a hard job|a difficult job', hint: 'example: a stressful job' },
      { id: 9, context: "a) It's great to see you again!", prompt: "I haven't seen you for so ___.", answer: 'long|many years', hint: 'example: long' },
      { id: 10, context: "b) It's great to see you again!", prompt: "I haven't seen you for such ___.", answer: 'a long time|ages', hint: 'example: a long time' },
    ],
  },
];


// ── Unit 38 — If I do … and If I did … ─────────────────────────────────

const unit38Theory: MurphyTheorySection[] = [
  {
    heading: 'A · Compare these two situations',
    image: unit38DoorsImg,
    imageAlt: 'A woman in a hallway deciding between two doors',
    imagePosition: 'right',
    content: `
      <p><strong>1.</strong> Lisa: 'Shall we go by bus or by train?' — Jess: '<strong>If we go</strong> by bus, it <strong>will be</strong> cheaper.'</p>
      <p>For Jess it is possible that they will go by bus, so she says <em>If we go … it will be …</em></p>
      <p><strong>2.</strong> Later, Lisa and Jess have decided to go by train. Jess says: '<strong>If we went</strong> by bus, it <strong>would be</strong> cheaper, but the train is quicker.'</p>
      <p>Now Jess knows they are <em>not</em> going by bus, so she says <em>If we went … it would be …</em> <em>(not If we go)</em></p>
    `,
  },
  {
    heading: 'B · if + past for things we do not expect to happen',
    content: `
      <p>When we imagine something that will not happen, or we don't expect it to happen, we use <strong>if + past</strong> (<em>if we went / if there was / if you found</em>). But the meaning is not past:</p>
      <ul>
        <li>What <strong>would</strong> you <strong>do</strong> if you <strong>won</strong> a lot of money? <em>(we don't really expect this)</em></li>
        <li>If there <strong>was</strong> (or <strong>were</strong>) an election tomorrow, who would you vote for?</li>
      </ul>
      <p>Compare:</p>
      <ul>
        <li>I think I left my watch at your house. If you <strong>find</strong> it, can you call me?</li>
        <li>If you <strong>found</strong> a wallet in the street, what would you do with it?</li>
      </ul>
    `,
    notes: ['For <em>if … was / were</em>, see Unit 39C.'],
  },
  {
    heading: 'C · We do not normally use would in the if-part',
    content: `
      <ul>
        <li>I'd be very scared if somebody <strong>pointed</strong> a gun at me. <em>(not if somebody would point)</em></li>
        <li>If we <strong>went</strong> by bus, it would be cheaper. <em>(not If we would go)</em></li>
      </ul>
      <p>But you can use <em>if … would</em> when you ask somebody to do something:</p>
      <ul>
        <li><em>(from a formal letter)</em> I would be grateful if you <strong>would let</strong> me know your decision as soon as possible.</li>
      </ul>
    `,
  },
  {
    heading: 'D · would / could / might in the other part',
    content: `
      <ul>
        <li>What <strong>would</strong> you do if you were bitten by a snake?</li>
        <li>I'm not going to bed yet. If I went to bed now, I <strong>wouldn't</strong> sleep.</li>
        <li>Would you mind if I used your phone?</li>
      </ul>
      <p><strong>could</strong> and <strong>might</strong> are also possible:</p>
      <ul>
        <li>If I won a lot of money, I <strong>might</strong> buy a house. <em>(= it is possible that I would buy one)</em></li>
        <li>If it stopped raining, we <strong>could</strong> go out. <em>(= we would be able to go out)</em></li>
      </ul>
    `,
  },
];

const unit38Exercises: MurphyExercise[] = [
  {
    id: '38-1',
    title: 'Exercise 38.1',
    instruction: 'What do you say in these situations? Choose a or b.',
    type: 'choice',
    items: [
      {
        id: 1,
        prompt: "You're not going to sell your car because it's old and not worth much.",
        options: ["If I sell my car, I won't get much money for it.", "If I sold my car, I wouldn't get much money for it."],
        answer: "If I sold my car, I wouldn't get much money for it.",
      },
      {
        id: 2,
        prompt: 'You often see Sarah. A friend of yours wants to contact her.',
        options: ["If I see Sarah, I'll tell her to call you.", "If I saw Sarah, I'd tell her to call you."],
        answer: "If I see Sarah, I'll tell her to call you.",
      },
      {
        id: 3,
        prompt: "You don't expect that there will be a fire in the building.",
        options: ['What will you do if there is a fire in the building?', 'What would you do if there was a fire in the building?'],
        answer: 'What would you do if there was a fire in the building?',
      },
      {
        id: 4,
        prompt: "You've never lost your passport. You can only imagine it.",
        options: ["I don't know what I'll do if I lose my passport.", "I don't know what I'd do if I lost my passport."],
        answer: "I don't know what I'd do if I lost my passport.",
      },
      {
        id: 5,
        prompt: 'Somebody stops you and asks the way to a bank.',
        options: ["If you go right at the end of this street, you'll see a bank on your left.", "If you went right at the end of this street, you'd see a bank on your left."],
        answer: "If you go right at the end of this street, you'll see a bank on your left.",
      },
      {
        id: 6,
        prompt: "You're in a lift. There is an emergency button. Nobody is going to press it.",
        options: ['What will happen if somebody presses that button?', 'What would happen if somebody pressed that button?'],
        answer: 'What would happen if somebody pressed that button?',
      },
    ],
  },
  {
    id: '38-2',
    title: 'Exercise 38.2',
    instruction: 'Put the verb into the correct form.',
    type: 'gap-fill',
    items: [
      { id: 1, prompt: "I can't afford to buy a car. If I ___ a car, I'd have to borrow the money.", answer: 'bought', hint: 'buy' },
      { id: 2, prompt: "Don't lend Amy your car. If she ___ me, I wouldn't lend her mine.", answer: 'asked', hint: 'ask' },
      { id: 3, prompt: 'If the computer factory closed down, many people ___ their jobs.', answer: 'would lose|would lose|d lose', hint: 'lose' },
      { id: 4, prompt: "I don't think Gary and Emma will get married. I ___ amazed if they did.", answer: 'would be|d be', hint: 'be' },
      { id: 5, context: 'What would you do if you were in a lift and it …', prompt: 'What would you do if you were in a lift and it ___ between floors?', answer: 'stopped', hint: 'stop' },
      { id: 6, prompt: 'If somebody gave me £10,000, I ___ a very long holiday.', answer: 'would have|d have', hint: 'have' },
      { id: 7, prompt: "If I ___ in your position, I'd accept the offer.", answer: 'was|were', hint: 'be' },
    ],
  },
  {
    id: '38-3',
    title: 'Exercise 38.3',
    instruction: 'Write sentences beginning If …. Use the idea in brackets.',
    type: 'gap-fill',
    items: [
      { id: 1, context: "Kevin is not going to do his driving test now. (fail)", prompt: 'If he ___', answer: 'did it now he would fail|did it now, he would fail|did his driving test now he would fail|did his driving test now, he would fail|took it now he would fail|took it now, he would fail', hint: 'If he did it now, he …' },
      { id: 2, context: "We've decided not to stay at a hotel. (cost too much)", prompt: 'If we ___', answer: 'stayed at a hotel it would cost too much|stayed at a hotel, it would cost too much', hint: 'If we stayed at a hotel, it …' },
      { id: 3, context: "Sally isn't going to leave her job. (not / get another one)", prompt: 'If she ___', answer: "left her job she wouldn't get another one|left her job, she wouldn't get another one", hint: 'If she left her job, she …' },
      { id: 4, context: "We've decided not to invite Ben to the party. (have to invite his friends too)", prompt: 'If we ___', answer: 'invited Ben to the party we would have to invite his friends too|invited Ben to the party, we would have to invite his friends too|invited Ben we would have to invite his friends too|invited Ben, we would have to invite his friends too', hint: 'If we invited Ben, we …' },
      { id: 5, context: "I'm not going to tell him what happened. (not / believe me)", prompt: 'If I ___', answer: "told him what happened he wouldn't believe me|told him what happened, he wouldn't believe me|told him he wouldn't believe me|told him, he wouldn't believe me", hint: 'If I told him, he …' },
      { id: 6, context: "We've decided not to catch the 10.30 train. (arrive too early)", prompt: 'If we ___', answer: "caught the 10.30 train we would arrive too early|caught the 10.30 train, we would arrive too early|caught the 10.30 train we'd arrive too early", hint: 'If we caught the 10.30 train, we …' },
    ],
  },
];

const unit38Supplementary: MurphyExercise[] = [
  {
    id: '38-s1',
    title: 'Supplementary A',
    instruction: 'Choose the correct form of the verbs.',
    type: 'choice',
    items: [
      { id: 1, prompt: "If I ___ the bus this afternoon, I'll get a taxi instead.", options: ['miss', "'ll miss"], answer: 'miss' },
      { id: 2, prompt: "We'll have to go without John if he ___ soon.", options: ["doesn't arrive", "won't arrive"], answer: "doesn't arrive" },
      { id: 3, prompt: "They ___ your money if you haven't kept your receipt.", options: ["won't refund", "didn't refund"], answer: "won't refund" },
      { id: 4, prompt: 'Will you send me a postcard when ___ Mexico?', options: ['you reach', "you'll reach"], answer: 'you reach' },
      { id: 5, prompt: 'If I make some coffee, ___ the cake?', options: ['do you cut', 'will you cut'], answer: 'will you cut' },
      { id: 6, prompt: '___ harder if you were better paid?', options: ['Did you work', 'Would you work'], answer: 'Would you work' },
      { id: 7, prompt: 'If you ___ so much, you might be more popular.', options: ["don't complain", "didn't complain"], answer: "didn't complain" },
      { id: 8, prompt: "Please don't sign any contracts before ___ them.", options: ["I'm checking", "I've checked"], answer: "I've checked" },
      { id: 9, prompt: '___ be envious if they could only see me now!', options: ["Weren't my friends", "Wouldn't my friends"], answer: "Wouldn't my friends" },
    ],
  },
  {
    id: '38-s2',
    title: 'Supplementary B',
    instruction: 'Fill the gaps in the sentences, using the words given.',
    type: 'gap-fill',
    items: [
      { id: 1, prompt: 'If I had more money, ___ me?', answer: 'would you marry', hint: 'you / marry' },
      { id: 2, prompt: "He wouldn't help you if ___ you.", answer: "he didn't like", hint: 'he / not / like' },
      { id: 3, prompt: 'Once ___ it, the machine is quite simple to operate.', answer: 'you find', hint: 'you / find' },
      { id: 4, prompt: '___ proud if they could see you now?', answer: "Wouldn't your parents be", hint: 'your parents / not / be' },
      { id: 5, prompt: 'If ___ thoroughly, I may fail my test.', answer: "I don't revise", hint: 'I / not / revise' },
      { id: 6, prompt: 'If you wanted to buy someone a really good present, what sort of thing ___?', answer: 'would you look for', hint: 'you / look for' },
      { id: 7, prompt: "You'd have more friends if ___ so mean.", answer: "you weren't|you wasn't", hint: 'you / not / be' },
      { id: 8, prompt: 'How ___ if you were in my position?', answer: 'would you feel', hint: 'you / feel' },
      { id: 9, prompt: 'Would you change your job if ___?', answer: 'you could', hint: 'you / can' },
    ],
  },
];

// ── Unit 39 — If I knew … · I wish I knew … ───────────────────────────

const unit39Theory: MurphyTheorySection[] = [
  {
    heading: 'A · Study this example situation',
    image: unit39DaydreamImg,
    imageAlt: 'A man sitting by a window, daydreaming',
    imagePosition: 'left',
    content: `
      <p>Sarah wants to phone Paul, but she can't because she doesn't know his number. She says:</p>
      <p><strong>If I knew his number, I would phone him.</strong></p>
      <p>Sarah says <em>If I knew his number …</em>, which tells us she <em>doesn't</em> know it. She is imagining the situation.</p>
    `,
  },
  {
    heading: 'B · if + past = imagining a present situation',
    content: `
      <p>When we imagine a situation like this we use <strong>if + past</strong> (<em>if I knew / if you were / if we didn't</em>), but the meaning is present, not past:</p>
      <ul>
        <li>There are many things I'd like to do if I <strong>had</strong> more time. <em>(but I don't have time)</em></li>
        <li>If I <strong>didn't want</strong> to go to the party, I wouldn't go. <em>(but I want to go)</em></li>
        <li>We wouldn't have any money if we <strong>didn't work</strong>. <em>(but we work)</em></li>
        <li>If you <strong>were</strong> in my position, what would you do?</li>
      </ul>
      <p>We use the past in the same way after <strong>wish</strong>, to say that we regret something — that something is not as we would like it to be:</p>
      <ul>
        <li>I <strong>wish I knew</strong> Paul's phone number. <em>(= I don't know it and I regret this)</em></li>
        <li>It rains a lot here. I <strong>wish it didn't rain</strong> so much.</li>
        <li>I <strong>wish I didn't have</strong> to work tomorrow, but unfortunately I do.</li>
      </ul>
    `,
  },
  {
    heading: 'C · if I were / if I was',
    content: `
      <p>After <em>if</em> and <em>wish</em> you can use <strong>were</strong> instead of <strong>was</strong>. Both are possible:</p>
      <ul>
        <li>If I <strong>were</strong> you, I wouldn't buy that coat. <em>or</em> If I <strong>was</strong> you, …</li>
        <li>I'd go for a walk if it <strong>weren't</strong> so cold. <em>or</em> … if it <strong>wasn't</strong> so cold.</li>
        <li>I wish she <strong>were</strong> here. <em>or</em> I wish she <strong>was</strong> here.</li>
      </ul>
    `,
  },
  {
    heading: 'D · No would in the if-part or after wish',
    content: `
      <ul>
        <li>If I <strong>were</strong> rich, I would travel a lot. <em>(not If I would be rich)</em></li>
        <li>Who would you ask if you <strong>needed</strong> help? <em>(not if you would need)</em></li>
        <li>I wish I <strong>had</strong> something to read. <em>(not I wish I would have)</em></li>
      </ul>
    `,
    notes: ['Sometimes <em>wish … would</em> is possible: <em>I wish you would listen.</em> See Unit 41.'],
  },
  {
    heading: 'E · could = would be able to / was able to',
    content: `
      <ul>
        <li>She <strong>could get</strong> a better job if she <strong>could speak</strong> English. <em>(could get = would be able to get; could speak = was/were able to speak)</em></li>
        <li>I wish I <strong>could</strong> help you. <em>(= I wish I was able to)</em></li>
      </ul>
    `,
  },
];

const unit39Exercises: MurphyExercise[] = [
  {
    id: '39-1',
    title: 'Exercise 39.1',
    instruction: 'Put the verb into the correct form.',
    type: 'gap-fill',
    items: [
      { id: 1, prompt: '___ that coat if I were you.', answer: "I wouldn't buy", hint: 'I / not / buy' },
      { id: 2, prompt: "___ you if I could, but I'm afraid I can't.", answer: "I would help|I'd help", hint: 'I / help' },
      { id: 3, prompt: 'We don\'t need a car at present, but we would need one if ___ in the country.', answer: 'we lived', hint: 'we / live' },
      { id: 4, prompt: 'If we had the choice, ___ in the country.', answer: "we would live|we'd live", hint: 'we / live' },
      { id: 5, prompt: "This soup isn't very good. ___ better if it wasn't so salty.", answer: 'it would taste', hint: 'it / taste' },
      { id: 6, prompt: "I wouldn't mind living in England if the weather ___ better.", answer: 'was|were', hint: 'be' },
      { id: 7, prompt: 'If I were you, ___. I would go now.', answer: "I wouldn't wait", hint: 'I / not / wait' },
      { id: 8, prompt: "You're always tired. If ___ to bed so late every night, you wouldn't be tired all the time.", answer: "you didn't go", hint: 'you / not / go' },
      { id: 9, prompt: "I think there are too many cars. If there weren't so many cars, ___ so much pollution.", answer: "there wouldn't be", hint: 'there / not / be' },
    ],
  },
  {
    id: '39-2',
    title: 'Exercise 39.2',
    instruction: 'Write a sentence with if … for each situation.',
    type: 'gap-fill',
    items: [
      { id: 1, context: "It's a nice book but it's too expensive, so I'm not going to buy it.", prompt: 'I ___', answer: "would buy it if it wasn't so expensive|would buy it if it weren't so expensive|'d buy it if it wasn't so expensive|'d buy it if it weren't so expensive", hint: "I'd buy it if …" },
      { id: 2, context: "We don't go out very often — we can't afford it.", prompt: 'We ___', answer: 'would go out more often if we could afford it|would go out more often if we could afford to', hint: "We'd go out more often if …" },
      { id: 3, context: "I can't meet you tomorrow — I have to work late.", prompt: 'If ___', answer: "I didn't have to work late I could meet you tomorrow|I didn't have to work late, I could meet you tomorrow|I didn't have to work late I would meet you tomorrow|I didn't have to work late, I would meet you tomorrow", hint: "If I didn't have to work late, …" },
      { id: 4, context: 'It would be nice to have lunch outside but it\'s raining, so we can\'t.', prompt: 'We ___', answer: "could have lunch outside if it wasn't raining|could have lunch outside if it weren't raining|would have lunch outside if it wasn't raining|would have lunch outside if it weren't raining", hint: 'We could have lunch outside if …' },
      { id: 5, context: "I don't want his advice, and that's why I'm not going to ask for it.", prompt: 'If ___', answer: 'I wanted his advice I would ask for it|I wanted his advice, I would ask for it', hint: 'If I wanted his advice, …' },
      { id: 6, context: "We don't see you very often because you live so far away.", prompt: 'If ___', answer: "you didn't live so far away we would see you more often|you didn't live so far away, we would see you more often", hint: "If you didn't live so far away, …" },
    ],
  },
  {
    id: '39-3',
    title: 'Exercise 39.3',
    instruction: 'Write sentences beginning I wish ….',
    type: 'gap-fill',
    items: [
      { id: 1, context: "I don't have a computer (and I need one).", prompt: 'I wish ___', answer: 'I had a computer', hint: 'I wish I had …' },
      { id: 2, context: "Helen isn't here (and I need to see her).", prompt: 'I wish ___', answer: 'Helen was here|Helen were here|she was here|she were here', hint: 'I wish Helen …' },
      { id: 3, context: "It's cold (and I hate cold weather).", prompt: 'I wish ___', answer: "it wasn't cold|it weren't cold|it was warmer|it were warmer", hint: 'I wish it …' },
      { id: 4, context: "I live in a big city (and I don't like it).", prompt: 'I wish ___', answer: "I didn't live in a big city", hint: 'I wish I …' },
      { id: 5, context: "I can't go to the party (and I'd like to).", prompt: 'I wish ___', answer: 'I could go to the party', hint: 'I wish I could …' },
      { id: 6, context: "I have to get up early tomorrow (but I'd like to sleep late).", prompt: 'I wish ___', answer: "I didn't have to get up early tomorrow|I didn't have to get up early", hint: "I wish I didn't …" },
      { id: 7, context: "I don't know anything about cars (and my car has just broken down).", prompt: 'I wish ___', answer: 'I knew something about cars|I knew about cars', hint: 'I wish I knew …' },
      { id: 8, context: "I'm not feeling well (and it's not nice).", prompt: 'I wish ___', answer: 'I was feeling well|I were feeling well|I was feeling better|I felt better', hint: 'I wish I …' },
      { id: 9, context: "I don't know many people (and I'm lonely).", prompt: 'I wish ___', answer: 'I knew more people', hint: 'I wish I knew …' },
    ],
  },
];

// ── Unit 40 — If I had known … · I wish I had known … ─────────────────

const unit40Theory: MurphyTheorySection[] = [
  {
    heading: 'A · Study this example situation',
    image: unit40MissedTrainImg,
    imageAlt: 'A woman on a platform watching a train leave without her',
    imagePosition: 'right',
    content: `
      <p>Last month Gary was in hospital for a few days. Rachel didn't know this, so she didn't go to visit him. When they met, Rachel said:</p>
      <p><strong>If I'd known you were in hospital, I would have gone to see you.</strong></p>
      <p><em>If I'd known</em> (= If I had known) tells us that she <strong>didn't</strong> know.</p>
    `,
  },
  {
    heading: 'B · if + had … to talk about the past',
    content: `
      <ul>
        <li>I didn't see you when you passed me in the street. If I'<strong>d seen</strong> you, of course I <strong>would have said</strong> hello. <em>(but I didn't see you)</em></li>
        <li>I didn't go out last night. I <strong>would have gone</strong> out if I <strong>hadn't been</strong> so tired.</li>
        <li>If he <strong>had been looking</strong> where he was going, he <strong>wouldn't have walked</strong> into the wall.</li>
      </ul>
      <p>Compare:</p>
      <ul>
        <li>I'm not hungry. If I <strong>was</strong> hungry, I <strong>would eat</strong> something. <em>(now)</em></li>
        <li>I wasn't hungry. If I <strong>had been</strong> hungry, I <strong>would have eaten</strong> something. <em>(past)</em></li>
      </ul>
    `,
  },
  {
    heading: "C · No would in the if-part · 'd = had or would",
    content: `
      <ul>
        <li>If I <strong>had seen</strong> you, I <strong>would have said</strong> hello. <em>(not If I would have seen)</em></li>
        <li>If I'd seen you … <em>('d seen = had seen)</em> · I'd have said hello. <em>('d have said = would have said)</em></li>
      </ul>
      <p>We use <strong>had (done)</strong> in the same way after <strong>wish</strong>. <em>I wish something had happened</em> = I am sorry that it didn't happen:</p>
      <ul>
        <li>I <strong>wish I'd known</strong> that Gary was ill. I would have gone to see him.</li>
        <li>I feel sick. I <strong>wish I hadn't eaten</strong> so much cake.</li>
      </ul>
      <p>Do not use <em>would have</em> after <em>wish</em>: I wish it <strong>had been</strong> warmer. <em>(not I wish it would have been)</em></p>
    `,
  },
  {
    heading: 'D · would have / could have / might have',
    content: `
      <p>Compare <em>would (do)</em> and <em>would have (done)</em>:</p>
      <ul>
        <li>If I'd gone to the party last night, I <strong>would be</strong> tired now. <em>(present)</em></li>
        <li>If I'd gone to the party last night, I <strong>would have met</strong> lots of people. <em>(past)</em></li>
      </ul>
      <p>If the weather hadn't been so bad …</p>
      <ul>
        <li>… we <strong>would have gone</strong> out.</li>
        <li>… we <strong>could have gone</strong> out. <em>(= we would have been able to)</em></li>
        <li>… we <strong>might have gone</strong> out. <em>(= perhaps we would have)</em></li>
      </ul>
    `,
  },
];

const unit40Exercises: MurphyExercise[] = [
  {
    id: '40-1',
    title: 'Exercise 40.1',
    instruction: 'Put the verb into the correct form.',
    type: 'gap-fill',
    items: [
      { id: 1, prompt: 'Sam got to the station just in time. If he had missed the train, ___ his flight too.', answer: 'he would have missed|he\'d have missed', hint: 'he / miss' },
      { id: 2, prompt: "I'm glad that you reminded me about Rachel's birthday. ___ if you hadn't reminded me.", answer: "I would have forgotten|I'd have forgotten", hint: 'I / forget' },
      { id: 3, prompt: "I wanted to send you an email, but I didn't have your address. If ___ your address, I would have sent you an email.", answer: "I had had|I'd had", hint: 'I / have' },
      { id: 4, prompt: 'It was OK, but ___ it more if the weather had been better.', answer: "we would have enjoyed|we'd have enjoyed", hint: 'we / enjoy' },
      { id: 5, prompt: 'I took a taxi to the hotel, but the traffic was bad. ___ quicker if I had walked.', answer: "It would have been|It'd have been", hint: 'it / be' },
      { id: 6, prompt: "I'm not tired. If ___ tired, I'd go home now.", answer: 'I was|I were', hint: 'I / be' },
      { id: 7, prompt: "I wasn't tired last night. If ___ tired, I would have gone home earlier.", answer: "I had been|I'd been", hint: 'I / be' },
    ],
  },
  {
    id: '40-2',
    title: 'Exercise 40.2',
    instruction: 'For each situation, write a sentence beginning with If.',
    type: 'gap-fill',
    items: [
      { id: 1, context: "I wasn't hungry, so I didn't eat anything.", prompt: 'If ___', answer: 'I had been hungry I would have eaten something|I had been hungry, I would have eaten something|I\'d been hungry I would have eaten something|I\'d been hungry, I would have eaten something', hint: "If I'd been hungry, I …" },
      { id: 2, context: 'The accident happened because the road was icy.', prompt: 'If ___', answer: "the road hadn't been icy the accident wouldn't have happened|the road hadn't been icy, the accident wouldn't have happened", hint: "If the road hadn't been icy, …" },
      { id: 3, context: "I didn't know that Joe had to get up early, so I didn't wake him up.", prompt: 'If ___', answer: "I had known that he had to get up early I would have woken him up|I had known that he had to get up early, I would have woken him up|I'd known that he had to get up early I would have woken him up|I'd known that he had to get up early, I would have woken him up", hint: "If I'd known …, I …" },
      { id: 4, context: "Unfortunately I lost my phone, so I couldn't call you.", prompt: 'If ___', answer: "I hadn't lost my phone I could have called you|I hadn't lost my phone, I could have called you|I hadn't lost my phone I would have called you|I hadn't lost my phone, I would have called you", hint: "If I hadn't lost my phone, …" },
      { id: 5, context: "Karen wasn't injured in the crash because she was wearing a seat belt.", prompt: 'If ___', answer: "she hadn't been wearing a seat belt she would have been injured|she hadn't been wearing a seat belt, she would have been injured|Karen hadn't been wearing a seat belt she would have been injured|Karen hadn't been wearing a seat belt, she would have been injured", hint: "If she hadn't been wearing a seat belt, …" },
      { id: 6, context: "You didn't have breakfast — that's why you're hungry now.", prompt: 'If ___', answer: 'you had had breakfast you wouldn\'t be hungry now|you had had breakfast, you wouldn\'t be hungry now|you\'d had breakfast you wouldn\'t be hungry now|you\'d had breakfast, you wouldn\'t be hungry now', hint: "If you'd had breakfast, you … now" },
      { id: 7, context: "I didn't get a taxi because I didn't have enough money.", prompt: 'If ___', answer: "I had had enough money I would have got a taxi|I had had enough money, I would have got a taxi|I'd had enough money I would have got a taxi|I'd had enough money, I would have got a taxi", hint: "If I'd had enough money, I …" },
    ],
  },
  {
    id: '40-3',
    title: 'Exercise 40.3',
    instruction: 'Imagine that you are in these situations. For each one, write a sentence with I wish.',
    type: 'gap-fill',
    items: [
      { id: 1, context: "You've eaten too much and now you feel sick.", prompt: 'I wish ___', answer: "I hadn't eaten so much", hint: "I wish I hadn't …" },
      { id: 2, context: 'There was a job advertised in the paper. You decided not to apply for it. Now you think your decision was wrong.', prompt: 'I wish ___', answer: 'I had applied for it|I had applied for the job', hint: 'I wish I had …' },
      { id: 3, context: 'When you were younger, you never learned to play a musical instrument. Now you regret this.', prompt: 'I wish ___', answer: 'I had learned to play a musical instrument|I had learnt to play a musical instrument|I had learned to play an instrument|I had learnt to play an instrument', hint: 'I wish I had …' },
      { id: 4, context: "You've painted the gate red. Now you think that red was the wrong colour.", prompt: 'I wish ___', answer: "I hadn't painted the gate red|I hadn't painted it red", hint: "I wish I hadn't …" },
      { id: 5, context: "You're walking in the country. You'd like to take some pictures, but you didn't bring your camera.", prompt: 'I wish ___', answer: 'I had brought my camera', hint: 'I wish I had …' },
      { id: 6, context: "You have some unexpected guests. They didn't phone you first. You are very busy.", prompt: 'I wish ___', answer: 'they had phoned me|they had phoned|they had phoned first|they had called me', hint: 'I wish they had …' },
    ],
  },
];

// ── Unit 41 — Wish ─────────────────────────────────────────────────────

const unit41Theory: MurphyTheorySection[] = [
  {
    heading: 'A · wish somebody something · wish and hope',
    image: unit41RainImg,
    imageAlt: 'Rain running down a window with a person looking out',
    imagePosition: 'left',
    content: `
      <p>You can say <em>I wish you luck / all the best / a happy birthday</em>:</p>
      <ul>
        <li>I <strong>wish you</strong> all the best in the future.</li>
        <li>I saw Mark before the exam and he <strong>wished me</strong> luck.</li>
      </ul>
      <p>But you cannot say <em>'I wish that something happens'</em>. We use <strong>hope</strong>:</p>
      <ul>
        <li>I'm sorry you're not well. I <strong>hope</strong> you feel better soon. <em>(not I wish you feel)</em></li>
        <li>I <strong>wish</strong> you a pleasant stay here. / I <strong>hope</strong> you have a pleasant stay here.</li>
      </ul>
    `,
  },
  {
    heading: 'B · wish + past = regret about now',
    content: `
      <ul>
        <li>I <strong>wish I knew</strong> what to do about the problem. <em>(I don't know and I regret this)</em></li>
        <li>I <strong>wish you didn't have</strong> to go so soon.</li>
        <li>Do you <strong>wish you lived</strong> near the sea? <em>(you don't live near the sea)</em></li>
      </ul>
      <p>To say we regret something in the past we use <strong>wish + had …</strong>:</p>
      <ul>
        <li>I <strong>wish I'd known</strong> about the party. I would have gone if I'd known.</li>
        <li>It was a stupid thing to say. I <strong>wish I hadn't said</strong> it.</li>
      </ul>
    `,
  },
  {
    heading: 'C · I wish I could (have)',
    content: `
      <ul>
        <li>I'm sorry I have to go. I <strong>wish I could stay</strong> longer. <em>(but I can't)</em></li>
        <li>I've met that man before. I <strong>wish I could remember</strong> his name.</li>
        <li>I hear the party was great. I <strong>wish I could have gone</strong>. <em>(but I couldn't go)</em></li>
      </ul>
    `,
  },
  {
    heading: 'D · I wish … would',
    content: `
      <p>It's been raining all day. Tanya doesn't like it. She says: <strong>I wish it would stop raining.</strong></p>
      <p>We use <em>I wish … would</em> when we would like something to happen or change — usually the speaker doesn't expect it. We often use it to complain:</p>
      <ul>
        <li>The phone has been ringing for five minutes. I <strong>wish somebody would answer</strong> it.</li>
        <li>I wish you'<strong>d do</strong> (= you would do) something instead of just sitting there.</li>
      </ul>
      <p>Use <em>I wish … wouldn't …</em> to complain about things people do repeatedly:</p>
      <ul>
        <li>I <strong>wish you wouldn't keep</strong> interrupting me. <em>(= please don't interrupt me)</em></li>
      </ul>
    `,
  },
  {
    heading: 'E · I wish … would vs I wish … was',
    content: `
      <p>We use <em>I wish … would</em> to say we want something <strong>to happen</strong>, not to say how we would like things <strong>to be</strong>. Compare:</p>
      <ul>
        <li>I wish Sarah <strong>would come</strong>. <em>(= I want her to come)</em></li>
        <li><em>but</em> I wish Sarah <strong>was</strong> (or <strong>were</strong>) here now. <em>(not I wish Sarah would be)</em></li>
        <li>I wish somebody <strong>would buy</strong> me a car.</li>
        <li><em>but</em> I wish I <strong>had</strong> a car. <em>(not I wish I would have)</em></li>
      </ul>
    `,
  },
];

const unit41Exercises: MurphyExercise[] = [
  {
    id: '41-1',
    title: 'Exercise 41.1',
    instruction: 'Put in wish(ed) or hope(d).',
    type: 'gap-fill',
    wordBank: ['wish', 'wished', 'hope', 'hoped'],
    items: [
      { id: 1, prompt: 'Enjoy your holiday. I ___ you have a great time.', answer: 'hope' },
      { id: 2, prompt: 'Goodbye. I ___ you all the best.', answer: 'wish' },
      { id: 3, prompt: 'We said goodbye to each other and ___ each other luck.', answer: 'wished' },
      { id: 4, prompt: "We're going to have a picnic tomorrow, so I ___ the weather is nice.", answer: 'hope' },
      { id: 5, prompt: 'I ___ you luck in your new job.', answer: 'wish' },
      { id: 6, prompt: 'I ___ it works out well for you.', answer: 'hope' },
    ],
  },
  {
    id: '41-2',
    title: 'Exercise 41.2',
    instruction: 'What do you say in these situations? Write sentences with I wish … would / wouldn\'t ….',
    type: 'gap-fill',
    items: [
      { id: 1, context: "You're waiting for Jane. She's late and you're getting impatient.", prompt: 'I wish ___', answer: 'she would come|Jane would come|she would hurry up|Jane would hurry up|she would arrive|Jane would arrive', hint: 'I wish she would …' },
      { id: 2, context: "You're looking for a job — so far without success.", prompt: 'I wish somebody ___', answer: 'would give me a job|would offer me a job', hint: 'I wish somebody would …' },
      { id: 3, context: "You can hear a baby crying. It's been crying for a long time and you're trying to study.", prompt: 'I wish ___', answer: 'the baby would stop crying|it would stop crying|somebody would stop the baby crying', hint: 'I wish the baby would …' },
      { id: 4, context: 'Brian has been wearing the same clothes for years. You think he needs some new ones.', prompt: 'I wish you ___', answer: 'would buy some new clothes|would get some new clothes|would buy new clothes', hint: 'I wish you would …' },
      { id: 5, context: "Your friend drives very fast. You don't like this.", prompt: 'I wish you ___', answer: "wouldn't drive so fast", hint: "I wish you wouldn't …" },
      { id: 6, context: 'Joe leaves the door open all the time. This annoys you.', prompt: 'I wish you ___', answer: "wouldn't leave the door open", hint: "I wish you wouldn't …" },
      { id: 7, context: "A lot of people drop litter in the street. You don't like this.", prompt: 'I wish people ___', answer: "wouldn't drop litter|wouldn't drop litter in the street", hint: "I wish people wouldn't …" },
      { id: 8, context: "It's raining. You want to go out, but not in the rain.", prompt: 'I wish ___', answer: 'it would stop raining', hint: 'I wish it would …' },
    ],
  },
  {
    id: '41-3',
    title: 'Exercise 41.3',
    instruction: 'Are these sentences right or wrong? Write the correct sentence, or type right if there is no mistake.',
    type: 'gap-fill',
    items: [
      { id: 1, context: 'I wish Sarah would be here now.', prompt: '___', answer: 'I wish Sarah was here now|I wish Sarah were here now', hint: 'wish + was/were for how things are' },
      { id: 2, context: 'I wish you would listen to me.', prompt: '___', answer: 'right', hint: 'no mistake?' },
      { id: 3, context: 'I wish I would have more free time.', prompt: '___', answer: 'I wish I had more free time', hint: 'not would have' },
      { id: 4, context: 'I wish our flat would be a bit bigger.', prompt: '___', answer: 'I wish our flat was a bit bigger|I wish our flat were a bit bigger', hint: 'how things are' },
      { id: 5, context: 'I wish the weather would change.', prompt: '___', answer: 'right', hint: 'we want it to happen' },
      { id: 6, context: "I wish you wouldn't complain all the time.", prompt: '___', answer: 'right', hint: 'a repeated action' },
      { id: 7, context: "I wish everything wouldn't be so expensive.", prompt: '___', answer: "I wish everything wasn't so expensive|I wish everything weren't so expensive", hint: 'how things are' },
    ],
  },
  {
    id: '41-4',
    title: 'Exercise 41.4',
    instruction: 'Put the verb into the correct form.',
    type: 'gap-fill',
    items: [
      { id: 1, prompt: "I'm fed up with this rain. I wish ___. (it / stop)", answer: 'it would stop', hint: 'it / stop' },
      { id: 2, prompt: "It's a difficult question. I wish ___ the answer. (I / know)", answer: 'I knew', hint: 'I / know' },
      { id: 3, prompt: 'I should have listened to you. I wish ___ your advice. (I / take)', answer: "I had taken|I'd taken", hint: 'I / take' },
      { id: 4, prompt: "You're lucky to be going away. I wish ___ with you. (I / can / come)", answer: 'I could come', hint: 'I / can / come' },
      { id: 5, prompt: 'I have no energy at the moment. I wish ___ so tired. (I / not / be)', answer: "I wasn't|I weren't", hint: 'I / not / be' },
      { id: 6, prompt: "Aren't they ready yet? I wish ___. (they / hurry up)", answer: 'they would hurry up', hint: 'they / hurry up' },
      { id: 7, prompt: 'It would be nice to stay here longer. I wish ___ to go now. (we / not / have)', answer: "we didn't have", hint: 'we / not / have' },
      { id: 8, prompt: "When we were in London we didn't have time to see everything. I wish ___ longer. (we / can / stay)", answer: 'we could have stayed', hint: 'we / can / stay' },
      { id: 9, prompt: "It's freezing today. I wish ___ so cold. (it / not / be)", answer: "it wasn't|it weren't", hint: 'it / not / be' },
      { id: 10, prompt: "Joe still doesn't know what he wants to do. I wish ___. (he / decide)", answer: 'he would decide', hint: 'he / decide' },
      { id: 11, prompt: "I really didn't enjoy the party. I wish ___. (we / not / go)", answer: "we hadn't gone", hint: 'we / not / go' },
      { id: 12, prompt: 'It was a stupid thing to say. I wish ___ it. (I / not / say)', answer: "I hadn't said", hint: 'I / not / say' },
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
      {
        id: 'unit-4',
        number: 4,
        title: 'Present continuous and present simple 2 (I am doing and I do)',
        subtitle: 'state verbs; think, see, hear, look, feel; he is being',
        theory: unit4Theory,
        exercises: unit4Exercises,
        supplementary: unit4Supplementary,
      },
      {
        id: 'unit-5',
        number: 5,
        title: 'Past simple (I did)',
        subtitle: 'regular and irregular past forms; did/didn’t; was/were',
        theory: unit5Theory,
        exercises: unit5Exercises,
        supplementary: unit5Supplementary,
      },
      {
        id: 'unit-6',
        number: 6,
        title: 'Past continuous (I was doing)',
        subtitle: 'actions in progress in the past; past continuous and past simple',
        theory: unit6Theory,
        exercises: unit6Exercises,
        supplementary: unit6Supplementary,
      },
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
      {
        id: 'unit-102',
        number: 102,
        title: 'So and such',
        subtitle: 'so nice / such nice people · so … that / such … that · such a long time',
        theory: unit102Theory,
        exercises: unit102Exercises,
        soSuchLesson: true,
      },
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
