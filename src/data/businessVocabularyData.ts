import { Users, Building2, Factory, Megaphone, DollarSign, Scale, Brain, Phone } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import businessMeetingImg from '@/assets/business-meeting.webp';
import jobInterviewImg from '@/assets/job-interview.jpg';

// ── Types ──────────────────────────────────────────────────────────────

export interface TheorySection {
  heading: string;
  content: string; // HTML-safe markdown-ish text
  notes?: string[];
}

export interface PracticeExercise {
  id: string;
  title: string;
  instruction: string;
  type: 'correction' | 'fill-blank' | 'rewrite';
  wordBank?: string[];
  items: {
    id: number;
    prompt: string;
    answer: string;
    hint?: string;
  }[];
}

export interface TestExercise {
  id: string;
  title: string;
  instruction: string;
  type: 'fill-blank' | 'classify' | 'gap-fill' | 'word-form';
  items: {
    id: number;
    prompt: string;
    answer: string;
    options?: string[];
    hint?: string;
  }[];
}

export interface BusinessVocabTopic {
  id: string;
  number: number;
  title: string;
  subtopics: string[];
  theory?: TheorySection[];
  practice?: PracticeExercise[];
  test?: TestExercise[];
}

export interface BusinessVocabSection {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  image: string;
  topics: BusinessVocabTopic[];
}

// ── Topic 1 content ────────────────────────────────────────────────────

const topic1Theory: TheorySection[] = [
  {
    heading: 'A – What do you do?',
    content: `To find out what someone's job is you say <strong>'What do you do?'</strong> Here, Kerstin talks about her job:

<em>'I <strong>work for</strong> a large European car maker. I <strong>work on</strong> car design. In fact, I <strong>run</strong> the design department and I <strong>manage</strong> a team of designers: 20 people <strong>work under</strong> me. It's very interesting. One of my main <strong>responsibilities</strong> is to make sure that new model designs are finished on time. I'm also <strong>in charge of</strong> design budgets. I <strong>deal with</strong> a lot of different people in the company. I'm <strong>responsible for</strong> co-ordination between design and production: I <strong>work with</strong> managers at our manufacturing plants.'</em>`,
    notes: [
      '<strong>in charge of</strong> + noun',
      '<strong>responsible for</strong> + verb + -ing',
      '<strong>responsibility</strong> + infinitive or -ing',
      'One of my responsibilities <em>is to make sure / is making sure</em>.',
      'You can\'t say "I\'m a responsible."',
    ],
  },
  {
    heading: 'B – Word combinations with "work"',
    content: `If you <strong>work</strong> or <strong>have work</strong>, you have a job. But you don't say that someone <em>has a work</em>. <strong>Work</strong> is also the place where you do your job.

<em>'Hi, I'm Frank. I <strong>work in</strong> a bank in New York City. I <strong>leave for work</strong> at 7.30 every morning. I <strong>go to work</strong> by train and subway. I <strong>get to / arrive at work</strong> at about nine. I'm usually <strong>at work</strong> till six. Luckily, I don't get ill very much so I'm not often <strong>off work</strong>.'</em>

You don't say, for example, <em>I'm at <strong>the</strong> work</em> or <em>I'm going to <strong>the</strong> work</em>.`,
  },
  {
    heading: 'C – Types of job and types of work',
    content: `A <strong>full-time job</strong> is for the whole of the normal working week; a <strong>part-time job</strong> is for less time than that. You say that someone <strong>works full-time</strong> or <strong>part-time</strong>.

A <strong>permanent job</strong> does not finish after a fixed period; a <strong>temporary job</strong> finishes after a fixed period. You talk about <strong>temporary work</strong> and <strong>permanent work</strong>.`,
  },
];

const topic1Practice: PracticeExercise[] = [
  {
    id: '1.1',
    title: 'Exercise 1.1 – Correct the mistakes',
    instruction: 'Pierre is talking about his work. Each sentence contains a mistake. Type the corrected version of the underlined word or phrase.',
    type: 'correction',
    items: [
      { id: 1, prompt: 'I work *about* the development of new supermarkets.', answer: 'on' },
      { id: 2, prompt: 'In fact, I *running* the development department.', answer: 'run' },
      { id: 3, prompt: 'I am *manage for* a team looking at possibilities.', answer: 'manage' },
      { id: 4, prompt: 'One of my main _____ is to make sure that new supermarkets open on time.', answer: 'responsibilities' },
      { id: 5, prompt: "I'm also *charged with* financial reporting.", answer: 'in charge of' },
      { id: 6, prompt: 'I *deal at* a lot of different organizations.', answer: 'deal with' },
      { id: 7, prompt: "I'm *responsible of* planning projects from start to finish.", answer: 'responsible for' },
      { id: 8, prompt: 'I work closely *near* our foreign partners.', answer: 'with' },
    ],
  },
  {
    id: '1.2',
    title: 'Exercise 1.2 – Fill in the prepositions',
    instruction: 'Complete the text about Rebecca with the correct preposition.',
    type: 'fill-blank',
    items: [
      { id: 1, prompt: 'She drives ___ work.', answer: 'to' },
      { id: 2, prompt: 'She worries about getting ___ work late.', answer: 'to' },
      { id: 3, prompt: 'She usually arrives ___ work at around nine.', answer: 'at' },
      { id: 4, prompt: "She couldn't take the time ___ work.", answer: 'off' },
      { id: 5, prompt: 'She is glad to be ___ work.', answer: 'in' },
      { id: 6, prompt: 'Some of her friends are ___ work.', answer: 'out of' },
    ],
  },
  {
    id: '1.3',
    title: 'Exercise 1.3 – Rewrite using words from C',
    instruction: 'Write a sentence about each person using the words in brackets. Use vocabulary from section C.',
    type: 'rewrite',
    items: [
      { id: 1, prompt: 'My husband works in an office from 9 am to 5.30 pm. (he/job)', answer: 'He has a full-time job.' },
      { id: 2, prompt: 'Our daughter works in a bank from eight till five every day. (she/work)', answer: 'She works full-time.' },
      { id: 3, prompt: "I'm David and I work in a café from 8 pm until midnight. (I/work)", answer: 'I work part-time.' },
      { id: 4, prompt: 'My wife works in local government and she can have this job for as long as she wants it. (she/job)', answer: 'She has a permanent job.' },
      { id: 5, prompt: 'Our son is working on a farm for four weeks. (he/job)', answer: 'He has a temporary job.' },
      { id: 6, prompt: 'Our daughter is working in an office for three weeks. (she/work)', answer: 'She has temporary work.' },
    ],
  },
];

const topic1Test: TestExercise[] = [
  {
    id: '1.1',
    title: 'Test 1.1 – Complete each sentence',
    instruction: 'Use a word from the box to complete each sentence. There is one extra word you don\'t need.',
    type: 'fill-blank',
    items: [
      { id: 1, prompt: 'I ___ the manufacturing plant in Cambridge.', answer: 'run', options: ['deal', 'run', 'manage', 'job', 'work', 'under', 'responsible'] },
      { id: 2, prompt: 'I am in charge of the production team. I ___ about 120 people.', answer: 'manage' },
      { id: 3, prompt: 'About 120 people work ___ me.', answer: 'under' },
      { id: 4, prompt: 'Coordination between production and design is my ___.', answer: 'responsibility' },
      { id: 5, prompt: 'I ___ with a lot of different suppliers.', answer: 'deal' },
      { id: 6, prompt: "I'm ___ for a budget of over €100 million.", answer: 'responsible' },
    ],
  },
  {
    id: '1.2',
    title: 'Test 1.2 – Classify the work type',
    instruction: 'Decide whether each statement describes full-time (FT), part-time (PT), permanent (P) or temporary (T) work.',
    type: 'classify',
    items: [
      { id: 1, prompt: "I joined the company ten years ago and I guess I'll be here for another ten.", answer: 'P' },
      { id: 2, prompt: 'I do four hours each morning and then I pick the children up from school.', answer: 'PT' },
      { id: 3, prompt: "I've been here since March and I'll leave in July when the designs are finished.", answer: 'T' },
      { id: 4, prompt: 'We are supposed to work 37 hours a week but I usually do a bit more.', answer: 'FT' },
      { id: 5, prompt: "I started here when I left school. Oh, that's about 20 years ago now.", answer: 'P' },
      { id: 6, prompt: "This job is only for six months, but that's OK because then I'm going to Italy.", answer: 'T' },
    ],
  },
  {
    id: '1.3',
    title: 'Test 1.3 – Fill in the prepositions',
    instruction: 'Write one word in each gap to complete the text.',
    type: 'gap-fill',
    items: [
      { id: 1, prompt: 'I work ___ a public relations company in London.', answer: 'for' },
      { id: 2, prompt: 'I leave ___ work at 7 o\'clock in the morning.', answer: 'for' },
      { id: 3, prompt: 'I go ___ work by train.', answer: 'to' },
      { id: 4, prompt: 'I usually get ___ work by 8.30.', answer: 'to' },
      { id: 5, prompt: "I'm always ___ work till about 6 o'clock.", answer: 'at' },
      { id: 6, prompt: 'I was ___ work for over a month.', answer: 'off' },
      { id: 7, prompt: "I would hate to be permanently out ___ work.", answer: 'of' },
    ],
  },
  {
    id: '1.4',
    title: 'Test 1.4 – Correct word form',
    instruction: 'Write the correct form of the word given in brackets.',
    type: 'word-form',
    items: [
      { id: 1, prompt: "I'm responsible for ___ the design team. (manage)", answer: 'managing' },
      { id: 2, prompt: "I'm in charge of ___ the work of the team. (coordinate)", answer: 'coordinating' },
      { id: 3, prompt: 'One of my responsibilities is to ___ that we don\'t spend too much money. (make sure)', answer: 'make sure' },
      { id: 4, prompt: 'My team is responsible for the ___ of new models for production. (make)', answer: 'making' },
      { id: 5, prompt: "I'm in charge of ___ our work for the whole year. (plan)", answer: 'planning' },
    ],
  },
];

// ── Topic 2 content ────────────────────────────────────────────────────

const topic2Theory: TheorySection[] = [
  {
    heading: 'A – Old and new ways',
    content: `<em>'I'm an office worker in an insurance company. It's a <strong>nine-to-five job</strong> with <strong>regular working hours</strong>. The work isn't very interesting, but I like to be able to go home at a reasonable time.'</em>

<em>'We all have to <strong>clock in</strong> and <strong>clock out</strong> every day. In this company, even the managers have to, which is unusual!'</em>
<br/><small>Note: You also say <strong>clock on</strong> and <strong>clock off</strong>.</small>

<em>'I'm in computer programming. There's a system of <strong>flexitime</strong> in my company, which means we can work when we want, within certain limits. We can start at any time before eleven, and finish as early as three, as long as we do enough hours each month. It's ideal for me as I have two young children.'</em>

<em>'I work in a car plant. I <strong>work in shifts</strong>. I may be on the <strong>day shift</strong> one week and the <strong>night shift</strong> the next week. It's difficult changing from one shift to another.'</em>

<em>'I'm a commercial artist in an advertising agency. I work in a big city, but I prefer living in the country, so I <strong>commute</strong> to work every day, like thousands of other <strong>commuters</strong>. Working from home using a computer and the Internet is called <strong>teleworking</strong> or <strong>telecommuting</strong>.'</em>`,
  },
  {
    heading: 'B – Nice work if you can get it',
    content: `All these words are used in front of <strong>'job'</strong> and <strong>'work'</strong>:

<ul class="list-disc list-inside space-y-1 mt-2">
<li><strong>satisfying, stimulating, fascinating, exciting</strong> – the work is interesting and gives you positive feelings.</li>
<li><strong>dull, boring, uninteresting, unstimulating</strong> – the work is not interesting.</li>
<li><strong>repetitive, routine</strong> – the work involves doing the same things again and again.</li>
<li><strong>tiring, tough, hard, demanding</strong> – the work is difficult and makes you tired.</li>
</ul>`,
  },
  {
    heading: 'C – Nature of work',
    content: `You can describe what your work involves using: <strong>My work involves...</strong>

<ul class="list-disc list-inside space-y-1 mt-2">
<li>human contact</li>
<li>long hours</li>
<li>team work</li>
<li>solving problems</li>
<li>travelling a lot</li>
<li>dealing with customers</li>
</ul>`,
  },
];

const topic2Practice: PracticeExercise[] = [
  {
    id: '2.1',
    title: 'Exercise 2.1 – Match people to work patterns',
    instruction: 'Which person (1–5) is most likely to do each of the five things (a–e)? Write the letter.',
    type: 'fill-blank',
    items: [
      { id: 1, prompt: 'A software designer in an Internet company. Has to be in the office. → works under a ___ system', answer: 'flexitime', hint: '1 → b' },
      { id: 2, prompt: 'An office worker in a large, traditional manufacturing company. → clocks ___ and off at the same time every day', answer: 'on', hint: '2 → e' },
      { id: 3, prompt: 'A manager in a department store in a large city. Lives in the country. → ___ to work', answer: 'commutes', hint: '3 → d' },
      { id: 4, prompt: 'A construction worker on a building site where work goes on 24 hours a day. → works in ___', answer: 'shifts', hint: '4 → a' },
      { id: 5, prompt: 'A technical writer for a city computer company. Lives in the country. → ___', answer: 'telecommutes', hint: '5 → c' },
    ],
  },
  {
    id: '2.2',
    title: 'Exercise 2.2 – Correct grammatical forms',
    instruction: 'Put the words in brackets into the correct grammatical form for each person describing their job.',
    type: 'fill-blank',
    items: [
      { id: 1, prompt: 'Flight attendant: "My work involves (travel) a lot." →', answer: 'travelling' },
      { id: 2, prompt: 'Flight attendant: "It can be quite physically (tire)." →', answer: 'tiring' },
      { id: 3, prompt: 'Flight attendant: "I enjoy (deal) with customers." →', answer: 'dealing' },
      { id: 4, prompt: 'Accountant: "I like (work) with figures." →', answer: 'working' },
      { id: 5, prompt: 'Accountant: "My job is much less (bore) than people think." →', answer: 'boring' },
      { id: 6, prompt: 'Accountant: "The work (involve) a lot of human contact." →', answer: 'involves' },
      { id: 7, prompt: 'Software developer: "The work can be mentally (tire)." →', answer: 'tiring' },
      { id: 8, prompt: 'Teacher: "It is very (stimulate) and not at all (repeat)." → stimulating and', answer: 'repetitive' },
    ],
  },
];

const topic2Test: TestExercise[] = [
  {
    id: '2.1',
    title: 'Test 2.1 – Make word pairs',
    instruction: 'Match each word on the left with a word on the right to make a common word pair.',
    type: 'fill-blank',
    items: [
      { id: 1, prompt: 'physically ___', answer: 'demanding' },
      { id: 2, prompt: 'human ___', answer: 'contact' },
      { id: 3, prompt: 'problem ___', answer: 'solving' },
      { id: 4, prompt: 'day ___', answer: 'shift' },
      { id: 5, prompt: 'team ___', answer: 'work' },
      { id: 6, prompt: 'clock ___', answer: 'on' },
      { id: 7, prompt: 'working ___', answer: 'hours' },
    ],
  },
  {
    id: '2.2',
    title: 'Test 2.2 – Classify the work type',
    instruction: 'Decide whether each statement describes regular office work (OW), teleworking (TW) or shift work (SW).',
    type: 'classify',
    items: [
      { id: 1, prompt: 'I work from 10 at night till 6 in the morning for four weeks, then I switch to days.', answer: 'SW' },
      { id: 2, prompt: "We turned one of the bedrooms into an office and that's where I do all my work.", answer: 'TW' },
      { id: 3, prompt: "When I'm working nights, it's really difficult to sleep during the day.", answer: 'SW' },
      { id: 4, prompt: 'Some people find the 9-to-5 routine boring, but I like working with other people.', answer: 'OW' },
      { id: 5, prompt: "I clock in at 8.55 every day and I'm at my desk till 5 pm.", answer: 'OW' },
      { id: 6, prompt: "The difficult thing is that my home is my office so I'm there 24 hours a day.", answer: 'TW' },
    ],
  },
  {
    id: '2.3',
    title: 'Test 2.3 – Choose the best word',
    instruction: 'Choose the best word from the options to fill each gap.',
    type: 'fill-blank',
    items: [
      { id: 1, prompt: 'We have a ___ system, but everyone must be here between 10 and 2.', answer: 'flexitime' },
      { id: 2, prompt: 'I work from ___ and simply send my work over the Internet.', answer: 'home' },
      { id: 3, prompt: 'I just sit in front of a computer all day, but this work is mentally ___.', answer: 'tiring' },
      { id: 4, prompt: 'This is the most ___ job I have ever had. There is never a boring minute.', answer: 'stimulating' },
      { id: 5, prompt: 'We all look forward to 5.30 because then we can ___ off for the day.', answer: 'clock' },
      { id: 6, prompt: 'The 7.30 train to London is always full of ___.', answer: 'commuters' },
    ],
  },
  {
    id: '2.4',
    title: 'Test 2.4 – Write the opposite',
    instruction: 'For each word, write one word which means the opposite.',
    type: 'word-form',
    items: [
      { id: 1, prompt: 'easy → ___', answer: 'hard' },
      { id: 2, prompt: 'interesting → ___', answer: 'boring' },
      { id: 3, prompt: 'varied → ___', answer: 'routine' },
      { id: 4, prompt: 'dull → ___', answer: 'exciting' },
      { id: 5, prompt: 'unstimulating → ___', answer: 'fascinating' },
      { id: 6, prompt: 'undemanding → ___', answer: 'tough' },
    ],
  },
];

// ── Topic 3 content ────────────────────────────────────────────────────

const topic3Theory: TheorySection[] = [
  {
    heading: 'A – Recruitment',
    content: `The process of finding people for particular jobs is <strong>recruitment</strong> or, especially in American English, <strong>hiring</strong>. Someone who has been recruited is a <strong>recruit</strong> or, in American English, a <strong>hire</strong>. The company <strong>employs</strong> or <strong>hires</strong> them; they <strong>join</strong> the company.

A company may recruit employees directly or use outside <strong>recruiters</strong>, <strong>recruitment agencies</strong> or <strong>employment agencies</strong>. Outside specialists called <strong>headhunters</strong> may be called on to <strong>headhunt</strong> people for very important jobs, persuading them to leave the organizations they already work for. This process is called <strong>headhunting</strong>.`,
  },
  {
    heading: 'B – Applying for a job',
    content: `Fred is a van driver, but he was fed up with long trips. He looked in the <strong>situations vacant</strong> pages of his local newspaper, where a local supermarket was <strong>advertising for</strong> van drivers for a new delivery service. He <strong>applied for</strong> the job by completing an <strong>application form</strong> and sending it in.

Harry is a building engineer. He saw a job in the <strong>appointments</strong> pages of one of the national papers. He made an <strong>application</strong>, sending in his <strong>CV</strong> (curriculum vitae – the 'story' of his working life) and a <strong>covering letter</strong> explaining why he wanted the job and why he was the right person for it.`,
    notes: [
      '<strong>Situation</strong>, <strong>post</strong> and <strong>position</strong> are formal words for "job".',
      'BrE: <strong>CV</strong>; AmE: <strong>résumé</strong> or <strong>resume</strong>',
      'BrE: <strong>covering letter</strong>; AmE: <strong>cover letter</strong>',
    ],
  },
  {
    heading: 'C – Selection procedures',
    content: `Dagmar Schmidt is the head of recruitment at a German telecommunications company. She talks about the <strong>selection process</strong>:

<em>'We <strong>advertise</strong> in national newspapers. We look at the <strong>backgrounds</strong> of <strong>applicants</strong>: their <strong>experience</strong> of different jobs and their educational <strong>qualifications</strong>. We don't ask for handwritten letters of application as people usually apply by email.</em>

<em>We invite the most interesting <strong>candidates</strong> to a group discussion. Then we have individual <strong>interviews</strong> with each candidate. We also ask the candidates to do written <strong>psychometric tests</strong> to assess their intelligence and personality.</em>

<em>After this, we <strong>shortlist</strong> three or four candidates. We check their <strong>references</strong> by writing to their <strong>referees</strong>: previous employers or teachers that candidates have named in their applications. If the references are OK, we ask the candidates to come back for more interviews. Finally, we <strong>offer the job</strong> to someone, and if they <strong>turn it down</strong> we have to think again. If they <strong>accept</strong> it, we <strong>hire</strong> them. We only <strong>appoint</strong> someone if we find the right person.'</em>`,
  },
];

const topic3Practice: PracticeExercise[] = [
  {
    id: '3.1',
    title: 'Exercise 3.1 – Key vocabulary',
    instruction: 'Complete each sentence with the correct word from sections A, B and C.',
    type: 'fill-blank',
    wordBank: ['recruited', 'hiring', 'recruit', 'hire', 'employs', 'headhunters', 'headhunt', 'headhunting', 'situations vacant', 'advertising for', 'applied for', 'application form', 'application', 'CV', 'covering letter', 'advertise', 'applicants', 'candidates', 'interviews', 'psychometric tests', 'shortlist', 'references', 'referees', 'offer the job', 'turn it down', 'accept', 'appoint'],
    items: [
      { id: 1, prompt: 'They__(e)d her for the Paris office but she didn\'t want to go.', answer: 'recruited' },
      { id: 2, prompt: 'The company is ___ing for experienced sales staff.', answer: 'advertis' },
      { id: 3, prompt: 'I phoned to check on my application, but they said they\'d already ___ someone.', answer: 'recruited' },
      { id: 4, prompt: 'This job is so important that I think we need to ___ someone.', answer: 'headhunt' },
      { id: 5, prompt: 'The selection process has lasted three months, but we\'re going to ___ someone next week.', answer: 'appoint' },
      { id: 6, prompt: 'We\'ll have to start looking again because she has ___ the job ___.', answer: 'turned down', hint: 'Two words: turned ___' },
      { id: 7, prompt: 'They\'re looking ___ a new receptionist. Only those with experience should ___.', answer: 'for, apply', hint: 'Two answers separated by comma' },
    ],
  },
  {
    id: '3.2',
    title: 'Exercise 3.2 – Classify the actions',
    instruction: 'Decide whether each action is something a company does (C) or something a person looking for work does (P).',
    type: 'fill-blank',
    items: [
      { id: 1, prompt: 'recruit', answer: 'C' },
      { id: 2, prompt: 'headhunt', answer: 'C' },
      { id: 3, prompt: 'appoint', answer: 'C' },
      { id: 4, prompt: 'offer a job', answer: 'C' },
      { id: 5, prompt: 'hire', answer: 'C' },
      { id: 6, prompt: 'accept a job', answer: 'P' },
      { id: 7, prompt: 'turn down a job', answer: 'P' },
      { id: 8, prompt: 'apply for a job', answer: 'P' },
    ],
  },
  {
    id: '3.3',
    title: 'Exercise 3.3 – Replace the underlined phrases',
    instruction: 'Replace each underlined phrase with the correct word or expression from the text. Type the correct vocabulary term.',
    type: 'correction',
    items: [
      { id: 1, prompt: 'Fred had already *refused two job offers* when he went for a discussion.', answer: 'turned down' },
      { id: 2, prompt: 'He went for *a discussion to see if he was suitable for the job*.', answer: 'an interview' },
      { id: 3, prompt: 'They contacted *previous employers Fred had mentioned in his application*.', answer: 'his referees' },
      { id: 4, prompt: 'The supermarket *asked him if he would like the job*.', answer: 'offered him the job' },
      { id: 5, prompt: 'Fred *said yes*.', answer: 'accepted' },
      { id: 6, prompt: 'They had received a lot of *requests for the job*.', answer: 'applications' },
      { id: 7, prompt: 'After looking at the *life stories* of the people…', answer: 'CVs' },
      { id: 8, prompt: '…of the *people asking for the job*…', answer: 'applicants' },
      { id: 9, prompt: '…and looking at *what exams they had passed during their education*…', answer: 'their qualifications' },
      { id: 10, prompt: 'The company had *chosen six people to interview, done tests on their personality and intelligence* and then given someone the job.', answer: 'shortlisted' },
    ],
  },
];

const topic3Test: TestExercise[] = [
  {
    id: '3.1',
    title: 'Test 3.1 – Make word pairs',
    instruction: 'Match each word on the left with a word on the right to make a common word pair. There is one extra word you don\'t need.',
    type: 'fill-blank',
    items: [
      { id: 1, prompt: 'covering ___', answer: 'letter', hint: 'Options: agency, references, test, letter, form, vitae' },
      { id: 2, prompt: 'employment ___', answer: 'agency' },
      { id: 3, prompt: 'application ___', answer: 'form' },
      { id: 4, prompt: 'curriculum ___', answer: 'vitae' },
      { id: 5, prompt: 'psychometric ___', answer: 'test' },
    ],
  },
  {
    id: '3.2',
    title: 'Test 3.2 – Choose the best word',
    instruction: 'Choose the best word from the brackets to fill the gap.',
    type: 'fill-blank',
    items: [
      { id: 1, prompt: 'We are using a recruitment ___ to find them for us. (agency / headhunter)', answer: 'agency' },
      { id: 2, prompt: 'They advertised the ___ in the local newspaper last week. (positions / applicants)', answer: 'positions' },
      { id: 3, prompt: 'So far, over 60 people have applied for the ___ (works / posts)', answer: 'posts' },
      { id: 4, prompt: 'We are going to look at all the letters of ___ over the weekend. (application / situation)', answer: 'application' },
      { id: 5, prompt: 'On Monday, we will draw up a ___ of 10 or 11 people. (reference / shortlist)', answer: 'shortlist' },
      { id: 6, prompt: "Then we'll invite them all to come for an ___ (interview / appointment)", answer: 'interview' },
      { id: 7, prompt: 'We hope to ___ the successful applicants by the end of the month. (apply / appoint)', answer: 'appoint' },
    ],
  },
  {
    id: '3.3',
    title: 'Test 3.3 – Classify the sentences',
    instruction: 'Decide whether each sentence would appear in a Situations Vacant ad (SV), in an applicant\'s CV, or in a covering letter (CL).',
    type: 'classify',
    items: [
      { id: 1, prompt: 'I enclose my résumé for your consideration.', answer: 'CL' },
      { id: 2, prompt: '1997–2000 University of Maryland, MBA (Marketing and Public Relations).', answer: 'CV' },
      { id: 3, prompt: 'I am looking for a more stimulating environment and your company offers this.', answer: 'CL' },
      { id: 4, prompt: 'Training will be given but basic word-processing skills would be an advantage.', answer: 'SV' },
      { id: 5, prompt: '1994–1997: The Biscuit Company, London – Manager responsible for 22 staff.', answer: 'CV' },
      { id: 6, prompt: 'The successful applicant will be expected to take up the post in January.', answer: 'SV' },
    ],
  },
  {
    id: '3.4',
    title: 'Test 3.4 – Find the word',
    instruction: 'Find the correct word for each clue.',
    type: 'fill-blank',
    items: [
      { id: 1, prompt: 'Certificates from school and university → q___', answer: 'qualifications' },
      { id: 2, prompt: "Where you've worked and what you've achieved → e___", answer: 'experience' },
      { id: 3, prompt: 'Hire a good person who is working for another company → h___', answer: 'headhunt' },
      { id: 4, prompt: 'People you can contact to find out about an applicant → r___', answer: 'referees' },
      { id: 5, prompt: 'Process to find the right person for a job → s___', answer: 'selection' },
      { id: 6, prompt: 'An applicant who has a good chance of getting the job → c___', answer: 'candidate' },
    ],
  },
];

// ── All sections ───────────────────────────────────────────────────────

export const businessVocabSections: BusinessVocabSection[] = [
  {
    id: 'people-and-work',
    title: 'People and Work',
    description: 'Jobs, working styles, recruitment, skills, pay, workplaces, careers and business leaders',
    icon: Users,
    image: jobInterviewImg,
    topics: [
      { id: 'work-and-jobs', number: 1, title: 'Work and Jobs', subtopics: ['A What do you do?', 'B Word combinations with "work"', 'C Types of job and types of work'], theory: topic1Theory, practice: topic1Practice, test: topic1Test },
      { id: 'ways-of-working', number: 2, title: 'Ways of Working', subtopics: ['A Old and new ways', 'B Nice work if you can get it', 'C Nature of work'], theory: topic2Theory, practice: topic2Practice, test: topic2Test },
      { id: 'recruitment-and-selection', number: 3, title: 'Recruitment and Selection', subtopics: ['A Recruitment', 'B Applying for a job', 'C Selection procedures'], theory: topic3Theory, practice: topic3Practice, test: topic3Test },
      { id: 'skills-and-qualifications', number: 4, title: 'Skills and Qualifications', subtopics: ['A Education and training', 'B Skilled and unskilled', 'C The right person'] },
      { id: 'pay-and-benefits', number: 5, title: 'Pay and Benefits', subtopics: ['A Salaries and wages', 'B Benefits', 'C Compensation'] },
      { id: 'people-and-workplaces', number: 6, title: 'People and Workplaces', subtopics: ['A Offices', 'B Factories', 'C Types of company'] },
      { id: 'the-career-ladder', number: 7, title: 'The Career Ladder', subtopics: ['A Getting a job', 'B Doing well', 'C Leaving a job'] },
      { id: 'problems-at-work', number: 8, title: 'Problems at Work', subtopics: ['A Health and safety', 'B Industrial disputes', 'C Discrimination'] },
      { id: 'businesspeople-and-business-leaders', number: 9, title: 'Businesspeople and Business Leaders', subtopics: ['A Entrepreneurs', 'B Leaders', 'C Tycoons'] },
    ],
  },
  {
    id: 'company-structure',
    title: 'Company Structure',
    description: 'How organizations are structured, from hierarchies to manufacturing and services',
    icon: Building2,
    image: businessMeetingImg,
    topics: [
      { id: 'organizations-1', number: 10, title: 'Organizations 1', subtopics: [] },
      { id: 'organizations-2', number: 11, title: 'Organizations 2', subtopics: [] },
      { id: 'manufacturing-and-services', number: 12, title: 'Manufacturing and Services', subtopics: [] },
    ],
  },
  {
    id: 'production',
    title: 'Production',
    description: 'Innovation, manufacturing processes, materials, suppliers and business philosophies',
    icon: Factory,
    image: businessMeetingImg,
    topics: [
      { id: 'innovation-and-invention', number: 13, title: 'Innovation and Invention', subtopics: [] },
      { id: 'making-things', number: 14, title: 'Making Things', subtopics: [] },
      { id: 'materials-and-suppliers', number: 15, title: 'Materials and Suppliers', subtopics: [] },
      { id: 'business-philosophies', number: 16, title: 'Business Philosophies', subtopics: [] },
    ],
  },
  {
    id: 'marketing',
    title: 'Marketing',
    description: 'Markets, competitors, products, brands, pricing, distribution, promotion and e-commerce',
    icon: Megaphone,
    image: businessMeetingImg,
    topics: [
      { id: 'buyers-sellers-and-the-market', number: 17, title: 'Buyers, Sellers and the Market', subtopics: [] },
      { id: 'markets-and-competitors', number: 18, title: 'Markets and Competitors', subtopics: [] },
      { id: 'marketing-and-market-orientation', number: 19, title: 'Marketing and Market Orientation', subtopics: [] },
      { id: 'products-and-brands', number: 20, title: 'Products and Brands', subtopics: [] },
      { id: 'price', number: 21, title: 'Price', subtopics: [] },
      { id: 'place', number: 22, title: 'Place', subtopics: [] },
      { id: 'promotion', number: 23, title: 'Promotion', subtopics: [] },
      { id: 'the-internet-and-e-commerce', number: 24, title: 'The Internet and E-commerce', subtopics: [] },
    ],
  },
  {
    id: 'money',
    title: 'Money',
    description: 'Sales, costs, profitability, payments, assets, shares, personal finance and trading',
    icon: DollarSign,
    image: businessMeetingImg,
    topics: [
      { id: 'sales-and-costs', number: 25, title: 'Sales and Costs', subtopics: [] },
      { id: 'profitability-and-unprofitability', number: 26, title: 'Profitability and Unprofitability', subtopics: [] },
      { id: 'getting-paid', number: 27, title: 'Getting Paid', subtopics: [] },
      { id: 'assets-liabilities-and-the-balance-sheet', number: 28, title: 'Assets, Liabilities and the Balance Sheet', subtopics: [] },
      { id: 'the-bottom-line', number: 29, title: 'The Bottom Line', subtopics: [] },
      { id: 'share-capital-and-debt', number: 30, title: 'Share Capital and Debt', subtopics: [] },
      { id: 'personal-finance', number: 31, title: 'Personal Finance', subtopics: [] },
      { id: 'financial-centres', number: 32, title: 'Financial Centres', subtopics: [] },
      { id: 'trading', number: 33, title: 'Trading', subtopics: [] },
      { id: 'indicators-1', number: 34, title: 'Indicators 1', subtopics: [] },
      { id: 'indicators-2', number: 35, title: 'Indicators 2', subtopics: [] },
    ],
  },
  {
    id: 'doing-the-right-thing',
    title: 'Doing the Right Thing',
    description: 'Business ethics, wrongdoing and corruption',
    icon: Scale,
    image: businessMeetingImg,
    topics: [
      { id: 'wrongdoing-and-corruption', number: 36, title: 'Wrongdoing and Corruption', subtopics: [] },
      { id: 'ethics', number: 37, title: 'Ethics', subtopics: [] },
    ],
  },
  {
    id: 'business-skills',
    title: 'Business Skills',
    description: 'Time management, stress management, leadership styles and cross-cultural awareness',
    icon: Brain,
    image: businessMeetingImg,
    topics: [
      { id: 'time-and-time-management', number: 38, title: 'Time and Time Management', subtopics: [] },
      { id: 'stress-and-stress-management', number: 39, title: 'Stress and Stress Management', subtopics: [] },
      { id: 'leadership-and-management-styles', number: 40, title: 'Leadership and Management Styles', subtopics: [] },
      { id: 'culture', number: 41, title: 'Culture', subtopics: [] },
    ],
  },
  {
    id: 'communication',
    title: 'Communication',
    description: 'Telephoning, emails, faxes, meetings, presentations and negotiations',
    icon: Phone,
    image: businessMeetingImg,
    topics: [
      { id: 'telephoning', number: 42, title: 'Telephoning', subtopics: [] },
      { id: 'emails', number: 43, title: 'Emails', subtopics: [] },
      { id: 'faxes', number: 44, title: 'Faxes', subtopics: [] },
      { id: 'meetings', number: 45, title: 'Meetings', subtopics: [] },
      { id: 'presentations', number: 46, title: 'Presentations', subtopics: [] },
      { id: 'negotiations', number: 47, title: 'Negotiations', subtopics: [] },
    ],
  },
];
