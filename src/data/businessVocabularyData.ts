import { Users, Building2, Factory, Megaphone, DollarSign, Scale, Brain, Phone } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import businessMeetingImg from "@/assets/business-meeting.webp";
import jobInterviewImg from "@/assets/job-interview.jpg";

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
  type: "correction" | "fill-blank" | "rewrite" | "classify";
  wordBank?: string[];
  items: {
    id: number;
    prompt: string;
    answer: string;
    hint?: string;
  }[];
}

export interface MatchingPair {
  id: number;
  left: string;
  right: string;
}

export interface TestExercise {
  id: string;
  title: string;
  instruction: string;
  type: "fill-blank" | "classify" | "gap-fill" | "word-form" | "matching";
  items?: {
    id: number;
    prompt: string;
    answer: string;
    options?: string[];
    hint?: string;
  }[];
  pairs?: MatchingPair[];
  extraWords?: string[];
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
    heading: "A – What do you do?",
    content: `To find out what someone's job is you say <strong>'What do you do?'</strong> Here, Kerstin talks about her job:

<em>'I <strong>work for</strong> a large European car maker. I <strong>work on</strong> car design. In fact, I <strong>run</strong> the design department and I <strong>manage</strong> a team of designers: 20 people <strong>work under</strong> me. It's very interesting. One of my main <strong>responsibilities</strong> is to make sure that new model designs are finished on time. I'm also <strong>in charge of</strong> design budgets. I <strong>deal with</strong> a lot of different people in the company. I'm <strong>responsible for</strong> co-ordination between design and production: I <strong>work with</strong> managers at our manufacturing plants.'</em>`,
    notes: [
      "<strong>in charge of</strong> + noun",
      "<strong>responsible for</strong> + verb + -ing",
      "<strong>responsibility</strong> + infinitive or -ing",
      "One of my responsibilities <em>is to make sure / is making sure</em>.",
      "You can't say \"I'm a responsible.\"",
    ],
  },
  {
    heading: 'B – Word combinations with "work"',
    content: `If you <strong>work</strong> or <strong>have work</strong>, you have a job. But you don't say that someone <em>has a work</em>. <strong>Work</strong> is also the place where you do your job.

<em>'Hi, I'm Frank. I <strong>work in</strong> a bank in New York City. I <strong>leave for work</strong> at 7.30 every morning. I <strong>go to work</strong> by train and subway. I <strong>get to / arrive at work</strong> at about nine. I'm usually <strong>at work</strong> till six. Luckily, I don't get ill very much so I'm not often <strong>off work</strong>.'</em>

You don't say, for example, <em>I'm at <strong>the</strong> work</em> or <em>I'm going to <strong>the</strong> work</em>.`,
  },
  {
    heading: "C – Types of job and types of work",
    content: `A <strong>full-time job</strong> is for the whole of the normal working week; a <strong>part-time job</strong> is for less time than that. You say that someone <strong>works full-time</strong> or <strong>part-time</strong>.

A <strong>permanent job</strong> does not finish after a fixed period; a <strong>temporary job</strong> finishes after a fixed period. You talk about <strong>temporary work</strong> and <strong>permanent work</strong>.`,
  },
];

const topic1Practice: PracticeExercise[] = [
  {
    id: "1.1",
    title: "Exercise 1.1 – Correct the mistakes",
    instruction:
      "Pierre is talking about his work. Each sentence contains a mistake. Type the corrected version of the asterisked word or phrase.",
    type: "correction",
    wordBank: ["work for", "work on", "run", "manage", "work under", "responsibilities", "in charge of", "deal with", "responsible for", "work with"],
    items: [
      { id: 1, prompt: "I work *about* the development of new supermarkets.", answer: "on" },
      { id: 2, prompt: "In fact, I *running* the development department.", answer: "run" },
      { id: 3, prompt: "I am *manage for* a team looking at possibilities.", answer: "manage" },
      {
        id: 4,
        prompt: "One of my main *jobs* is to make sure that new supermarkets open on time.",
        answer: "responsibilities",
      },
      { id: 5, prompt: "I'm also *in charge with* financial reporting.", answer: "in charge of" },
      { id: 6, prompt: "I *deal at* a lot of different organizations.", answer: "deal with" },
      { id: 7, prompt: "I'm *responsible of* planning projects from start to finish.", answer: "responsible for" },
      { id: 8, prompt: "I work closely *near* our foreign partners.", answer: "with" },
    ],
  },
  {
    id: "1.2",
    title: "Exercise 1.2 – Fill in the prepositions",
    instruction: "Complete the text about Rebecca with the correct preposition.",
    type: "fill-blank",
    wordBank: ["to", "at", "in", "off", "out of", "for", "leave for work", "go to work", "get to work", "arrive at work", "at work", "off work"],
    items: [
      { id: 1, prompt: "She drives ___ work.", answer: "to" },
      { id: 2, prompt: "She worries about getting ___ work late.", answer: "to" },
      { id: 3, prompt: "She usually arrives ___ work at around nine.", answer: "at" },
      { id: 4, prompt: "She couldn't take the time ___ work.", answer: "off" },
      { id: 5, prompt: "She is glad to be ___ work.", answer: "in" },
      { id: 6, prompt: "Some of her friends are ___ work.", answer: "out of" },
    ],
  },
  {
    id: "1.3",
    title: "Exercise 1.3 – Rewrite using words from C",
    instruction: "Write a sentence about each person using the words in brackets. Use vocabulary from section C.",
    type: "rewrite",
    wordBank: ["full-time", "part-time", "permanent", "temporary", "full-time job", "part-time job", "permanent job", "temporary job", "works full-time", "works part-time", "temporary work", "permanent work"],
    items: [
      {
        id: 1,
        prompt: "My husband works in an office from 9 am to 5.30 pm. (he/job)",
        answer: "He has a full-time job.",
      },
      {
        id: 2,
        prompt: "Our daughter works in a bank from eight till five every day. (she/work)",
        answer: "She works full-time.",
      },
      {
        id: 3,
        prompt: "I'm David and I work in a café from 8 pm until midnight. (I/work)",
        answer: "I work part-time.",
      },
      {
        id: 4,
        prompt: "My wife works in local government and she can have this job for as long as she wants it. (she/job)",
        answer: "She has a permanent job.",
      },
      { id: 5, prompt: "Our son is working on a farm for four weeks. (he/job)", answer: "He has a temporary job." },
      {
        id: 6,
        prompt: "Our daughter is working in an office for three weeks. (she/work)",
        answer: "She has temporary work.",
      },
    ],
  },
];

const topic1Test: TestExercise[] = [
  {
    id: "1.1",
    title: "Test 1.1 – Complete each sentence",
    instruction: "Write the correct word to complete each sentence.",
    type: "fill-blank",
    items: [
      {
        id: 1,
        prompt: "I ___ the manufacturing plant in Cambridge.",
        answer: "run",
        options: ["deal", "run", "manage", "job", "work", "under", "responsible"],
      },
      { id: 2, prompt: "I am in charge of the production team. I ___ about 120 people.", answer: "manage" },
      { id: 3, prompt: "About 120 people work ___ me.", answer: "under" },
      { id: 4, prompt: "Coordination between production and design is my ___.", answer: "responsibility" },
      { id: 5, prompt: "I ___ with a lot of different suppliers.", answer: "deal" },
      { id: 6, prompt: "I'm ___ for a budget of over €100 million.", answer: "responsible" },
    ],
  },
  {
    id: "1.2",
    title: "Test 1.2 – Classify the work type",
    instruction:
      "Decide whether each statement describes full-time (FT), part-time (PT), permanent (P) or temporary (T) work.",
    type: "classify",
    items: [
      { id: 1, prompt: "I joined the company ten years ago and I guess I'll be here for another ten.", answer: "P" },
      { id: 2, prompt: "I do four hours each morning and then I pick the children up from school.", answer: "PT" },
      {
        id: 3,
        prompt: "I've been here since March and I'll leave in July when the designs are finished.",
        answer: "T",
      },
      { id: 4, prompt: "We are supposed to work 37 hours a week but I usually do a bit more.", answer: "FT" },
      { id: 5, prompt: "I started here when I left school. Oh, that's about 20 years ago now.", answer: "P" },
      { id: 6, prompt: "This job is only for six months, but that's OK because then I'm going to Italy.", answer: "T" },
    ],
  },
  {
    id: "1.3",
    title: "Test 1.3 – Fill in the prepositions",
    instruction: "Write one word in each gap to complete the text.",
    type: "gap-fill",
    items: [
      { id: 1, prompt: "I work ___ a public relations company in London.", answer: "for" },
      { id: 2, prompt: "I leave ___ work at 7 o'clock in the morning.", answer: "for" },
      { id: 3, prompt: "I go ___ work by train.", answer: "to" },
      { id: 4, prompt: "I usually get ___ work by 8.30.", answer: "to" },
      { id: 5, prompt: "I'm always ___ work till about 6 o'clock.", answer: "at" },
      { id: 6, prompt: "I was ___ work for over a month.", answer: "off" },
      { id: 7, prompt: "I would hate to be permanently out ___ work.", answer: "of" },
    ],
  },
  {
    id: "1.4",
    title: "Test 1.4 – Correct word form",
    instruction: "Write the correct form of the word given in brackets.",
    type: "word-form",
    items: [
      { id: 1, prompt: "I'm responsible for ___ the design team. (manage)", answer: "managing" },
      { id: 2, prompt: "I'm in charge of ___ the work of the team. (coordinate)", answer: "coordinating" },
      {
        id: 3,
        prompt: "One of my responsibilities is to ___ that we don't spend too much money. (make sure)",
        answer: "make sure",
      },
      { id: 4, prompt: "My team is responsible for the ___ of new models for production. (make)", answer: "making" },
      { id: 5, prompt: "I'm in charge of ___ our work for the whole year. (plan)", answer: "planning" },
    ],
  },
];

// ── Topic 2 content ────────────────────────────────────────────────────

const topic2Theory: TheorySection[] = [
  {
    heading: "A – Old and new ways",
    content: `<em>'I'm an office worker in an insurance company. It's a <strong>nine-to-five job</strong> with <strong>regular working hours</strong>. The work isn't very interesting, but I like to be able to go home at a reasonable time.'</em>

<em>'We all have to <strong>clock in</strong> and <strong>clock out</strong> every day. In this company, even the managers have to, which is unusual!'</em>
<br/><small>Note: You also say <strong>clock on</strong> and <strong>clock off</strong>.</small>

<em>'I'm in computer programming. There's a system of <strong>flexitime</strong> in my company, which means we can work when we want, within certain limits. We can start at any time before eleven, and finish as early as three, as long as we do enough hours each month. It's ideal for me as I have two young children.'</em>

<em>'I work in a car plant. I <strong>work in shifts</strong>. I may be on the <strong>day shift</strong> one week and the <strong>night shift</strong> the next week. It's difficult changing from one shift to another.'</em>

<em>'I'm a commercial artist in an advertising agency. I work in a big city, but I prefer living in the country, so I <strong>commute</strong> to work every day, like thousands of other <strong>commuters</strong>. Working from home using a computer and the Internet is called <strong>teleworking</strong> or <strong>telecommuting</strong>.'</em>`,
  },
  {
    heading: "B – Nice work if you can get it",
    content: `All these words are used in front of <strong>'job'</strong> and <strong>'work'</strong>:

<ul class="list-disc list-inside space-y-1 mt-2">
<li><strong>satisfying, stimulating, fascinating, exciting</strong> – the work is interesting and gives you positive feelings.</li>
<li><strong>dull, boring, uninteresting, unstimulating</strong> – the work is not interesting.</li>
<li><strong>repetitive, routine</strong> – the work involves doing the same things again and again.</li>
<li><strong>tiring, tough, hard, demanding</strong> – the work is difficult and makes you tired.</li>
</ul>`,
  },
  {
    heading: "C – Nature of work",
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
    id: "2.1",
    title: "Exercise 2.1 – Match people to work patterns",
    instruction: "Which person (1–5) is most likely to do each of the five things (a–e)? Write the letter.",
    type: "fill-blank",
    wordBank: ["nine-to-five job", "regular working hours", "clock in", "clock out", "flexitime", "work in shifts", "day shift", "night shift", "commute", "teleworking", "telecommuting", "commuter"],
    items: [
      {
        id: 1,
        prompt: "A software designer in an Internet company. Has to be in the office. → works under a ___ system",
        answer: "flexitime",
        hint: "1 → b",
      },
      {
        id: 2,
        prompt:
          "An office worker in a large, traditional manufacturing company. → clocks ___ and off at the same time every day",
        answer: "on",
        hint: "2 → e",
      },
      {
        id: 3,
        prompt: "A manager in a department store in a large city. Lives in the country. → ___ to work",
        answer: "commutes",
        hint: "3 → d",
      },
      {
        id: 4,
        prompt: "A construction worker on a building site where work goes on 24 hours a day. → works in ___",
        answer: "shifts",
        hint: "4 → a",
      },
      {
        id: 5,
        prompt: "A technical writer for a city computer company. Lives in the country. → ___",
        answer: "telecommutes",
        hint: "5 → c",
      },
    ],
  },
  {
    id: "2.2",
    title: "Exercise 2.2 – Correct grammatical forms",
    instruction: "Put the words in brackets into the correct grammatical form for each person describing their job.",
    type: "fill-blank",
    wordBank: ["satisfying", "stimulating", "fascinating", "exciting", "dull", "boring", "uninteresting", "unstimulating", "repetitive", "routine", "tiring", "tough", "hard", "demanding", "travelling", "dealing", "working", "boring", "tiring", "stimulating", "repetitive", "involves"],
    items: [
      { id: 1, prompt: 'Flight attendant: "My work involves (travel) a lot." →', answer: "travelling" },
      { id: 2, prompt: 'Flight attendant: "It can be quite physically (tire)." →', answer: "tiring" },
      { id: 3, prompt: 'Flight attendant: "I enjoy (deal) with customers." →', answer: "dealing" },
      { id: 4, prompt: 'Accountant: "I like (work) with figures." →', answer: "working" },
      { id: 5, prompt: 'Accountant: "My job is much less (bore) than people think." →', answer: "boring" },
      { id: 6, prompt: 'Accountant: "The work (involve) a lot of human contact." →', answer: "involves" },
      { id: 7, prompt: 'Software developer: "The work can be mentally (tire)." →', answer: "tiring" },
      {
        id: 8,
        prompt: 'Teacher: "It is very (stimulate) and not at all (repeat)." → stimulating and',
        answer: "repetitive",
      },
    ],
  },
];

const topic2Test: TestExercise[] = [
  {
    id: "2.1",
    title: "Test 2.1 – Make word pairs",
    instruction: "Match each word on the left with a word on the right to make a common word pair.",
    type: "fill-blank",
    items: [
      { id: 1, prompt: "physically ___", answer: "demanding" },
      { id: 2, prompt: "human ___", answer: "contact" },
      { id: 3, prompt: "problem ___", answer: "solving" },
      { id: 4, prompt: "day ___", answer: "shift" },
      { id: 5, prompt: "team ___", answer: "work" },
      { id: 6, prompt: "clock ___", answer: "on" },
      { id: 7, prompt: "working ___", answer: "hours" },
    ],
  },
  {
    id: "2.2",
    title: "Test 2.2 – Classify the work type",
    instruction:
      "Decide whether each statement describes regular office work (OW), teleworking (TW) or shift work (SW).",
    type: "classify",
    items: [
      {
        id: 1,
        prompt: "I work from 10 at night till 6 in the morning for four weeks, then I switch to days.",
        answer: "SW",
      },
      {
        id: 2,
        prompt: "We turned one of the bedrooms into an office and that's where I do all my work.",
        answer: "TW",
      },
      { id: 3, prompt: "When I'm working nights, it's really difficult to sleep during the day.", answer: "SW" },
      {
        id: 4,
        prompt: "Some people find the 9-to-5 routine boring, but I like working with other people.",
        answer: "OW",
      },
      { id: 5, prompt: "I clock in at 8.55 every day and I'm at my desk till 5 pm.", answer: "OW" },
      { id: 6, prompt: "The difficult thing is that my home is my office so I'm there 24 hours a day.", answer: "TW" },
    ],
  },
  {
    id: "2.3",
    title: "Test 2.3 – Choose the best word",
    instruction: "Choose the best word from the options to fill each gap.",
    type: "fill-blank",
    items: [
      { id: 1, prompt: "We have a ___ system, but everyone must be here between 10 and 2.", answer: "flexitime" },
      { id: 2, prompt: "I work from ___ and simply send my work over the Internet.", answer: "home" },
      { id: 3, prompt: "I just sit in front of a computer all day, but this work is mentally ___.", answer: "tiring" },
      {
        id: 4,
        prompt: "This is the most ___ job I have ever had. There is never a boring minute.",
        answer: "stimulating",
      },
      { id: 5, prompt: "We all look forward to 5.30 because then we can ___ off for the day.", answer: "clock" },
      { id: 6, prompt: "The 7.30 train to London is always full of ___.", answer: "commuters" },
    ],
  },
  {
    id: "2.4",
    title: "Test 2.4 – Write the opposite",
    instruction: "For each word, write one word which means the opposite.",
    type: "word-form",
    items: [
      { id: 1, prompt: "easy → ___", answer: "hard" },
      { id: 2, prompt: "interesting → ___", answer: "boring" },
      { id: 3, prompt: "varied → ___", answer: "routine" },
      { id: 4, prompt: "dull → ___", answer: "exciting" },
      { id: 5, prompt: "unstimulating → ___", answer: "fascinating" },
      { id: 6, prompt: "undemanding → ___", answer: "tough" },
    ],
  },
];

// ── Topic 3 content ────────────────────────────────────────────────────

const topic3Theory: TheorySection[] = [
  {
    heading: "A – Recruitment",
    content: `The process of finding people for particular jobs is <strong>recruitment</strong> or, especially in American English, <strong>hiring</strong>. Someone who has been recruited is a <strong>recruit</strong> or, in American English, a <strong>hire</strong>. The company <strong>employs</strong> or <strong>hires</strong> them; they <strong>join</strong> the company.

A company may recruit employees directly or use outside <strong>recruiters</strong>, <strong>recruitment agencies</strong> or <strong>employment agencies</strong>. Outside specialists called <strong>headhunters</strong> may be called on to <strong>headhunt</strong> people for very important jobs, persuading them to leave the organizations they already work for. This process is called <strong>headhunting</strong>.`,
  },
  {
    heading: "B – Applying for a job",
    content: `Fred is a van driver, but he was fed up with long trips. He looked in the <strong>situations vacant</strong> pages of his local newspaper, where a local supermarket was <strong>advertising for</strong> van drivers for a new delivery service. He <strong>applied for</strong> the job by completing an <strong>application form</strong> and sending it in.

Harry is a building engineer. He saw a job in the <strong>appointments</strong> pages of one of the national papers. He made an <strong>application</strong>, sending in his <strong>CV</strong> (curriculum vitae – the 'story' of his working life) and a <strong>covering letter</strong> explaining why he wanted the job and why he was the right person for it.`,
    notes: [
      '<strong>Situation</strong>, <strong>post</strong> and <strong>position</strong> are formal words for "job".',
      "BrE: <strong>CV</strong>; AmE: <strong>résumé</strong> or <strong>resume</strong>",
      "BrE: <strong>covering letter</strong>; AmE: <strong>cover letter</strong>",
    ],
  },
  {
    heading: "C – Selection procedures",
    content: `Dagmar Schmidt is the head of recruitment at a German telecommunications company. She talks about the <strong>selection process</strong>:

<em>'We <strong>advertise</strong> in national newspapers. We look at the <strong>backgrounds</strong> of <strong>applicants</strong>: their <strong>experience</strong> of different jobs and their educational <strong>qualifications</strong>. We don't ask for handwritten letters of application as people usually apply by email.</em>

<em>We invite the most interesting <strong>candidates</strong> to a group discussion. Then we have individual <strong>interviews</strong> with each candidate. We also ask the candidates to do written <strong>psychometric tests</strong> to assess their intelligence and personality.</em>

<em>After this, we <strong>shortlist</strong> three or four candidates. We check their <strong>references</strong> by writing to their <strong>referees</strong>: previous employers or teachers that candidates have named in their applications. If the references are OK, we ask the candidates to come back for more interviews. Finally, we <strong>offer the job</strong> to someone, and if they <strong>turn it down</strong> we have to think again. If they <strong>accept</strong> it, we <strong>hire</strong> them. We only <strong>appoint</strong> someone if we find the right person.'</em>`,
  },
];

const topic3Practice: PracticeExercise[] = [
  {
    id: "3.1",
    title: "Exercise 3.1 – Key vocabulary",
    instruction: "Complete each sentence with the correct word from sections A, B and C.",
    type: "fill-blank",
    wordBank: [
      "recruited",
      "hiring",
      "recruit",
      "hire",
      "employs",
      "headhunters",
      "headhunt",
      "headhunting",
      "situations vacant",
      "advertising for",
      "applied for",
      "application form",
      "application",
      "CV",
      "covering letter",
      "advertise",
      "applicants",
      "candidates",
      "interviews",
      "psychometric tests",
      "shortlist",
      "references",
      "referees",
      "offer the job",
      "turn it down",
      "accept",
      "appoint",
    ],
    items: [
      { id: 1, prompt: "They__(e)d her for the Paris office but she didn't want to go.", answer: "recruited" },
      { id: 2, prompt: "The company is ___ing for experienced sales staff.", answer: "advertis" },
      {
        id: 3,
        prompt: "I phoned to check on my application, but they said they'd already ___ someone.",
        answer: "recruited",
      },
      { id: 4, prompt: "This job is so important that I think we need to ___ someone.", answer: "headhunt" },
      {
        id: 5,
        prompt: "The selection process has lasted three months, but we're going to ___ someone next week.",
        answer: "appoint",
      },
      {
        id: 6,
        prompt: "We'll have to start looking again because she has ___ the job ___.",
        answer: "turned down",
        hint: "Two words: turned ___",
      },
      {
        id: 7,
        prompt: "They're looking ___ a new receptionist. Only those with experience should ___.",
        answer: "for, apply",
        hint: "Two answers separated by comma",
      },
    ],
  },
  {
    id: "3.2",
    title: "Exercise 3.2 – Classify the actions",
    instruction:
      "Decide whether each action is something a company does (C) or something a person looking for work does (P).",
    type: "classify",
    wordBank: ["recruit", "hiring", "hire", "employ", "join", "recruitment agency", "employment agency", "headhunters", "headhunt", "headhunting", "apply for", "application form", "application", "CV", "covering letter", "accept", "turn down", "appoint"],
    items: [
      { id: 1, prompt: "recruit", answer: "C" },
      { id: 2, prompt: "headhunt", answer: "C" },
      { id: 3, prompt: "appoint", answer: "C" },
      { id: 4, prompt: "offer a job", answer: "C" },
      { id: 5, prompt: "hire", answer: "C" },
      { id: 6, prompt: "accept a job", answer: "P" },
      { id: 7, prompt: "turn down a job", answer: "P" },
      { id: 8, prompt: "apply for a job", answer: "P" },
    ],
  },
  {
    id: "3.3",
    title: "Exercise 3.3 – Replace the underlined phrases",
    instruction:
      "Replace each underlined phrase with the correct word or expression from the text. Type the correct vocabulary term.",
    type: "correction",
    items: [
      {
        id: 1,
        prompt: "Fred had already *refused two job offers* when he went for a discussion.",
        answer: "turned down",
      },
      { id: 2, prompt: "He went for *a discussion to see if he was suitable for the job*.", answer: "an interview" },
      {
        id: 3,
        prompt: "They contacted *previous employers Fred had mentioned in his application*.",
        answer: "his referees",
      },
      { id: 4, prompt: "The supermarket *asked him if he would like the job*.", answer: "offered him the job" },
      { id: 5, prompt: "Fred *said yes*.", answer: "accepted" },
      { id: 6, prompt: "They had received a lot of *requests for the job*.", answer: "applications" },
      { id: 7, prompt: "After looking at the *life stories* of the people…", answer: "CVs" },
      { id: 8, prompt: "…of the *people asking for the job*…", answer: "applicants" },
      {
        id: 9,
        prompt: "…and looking at *what exams they had passed during their education*…",
        answer: "their qualifications",
      },
      {
        id: 10,
        prompt:
          "The company had *chosen six people to interview, done tests on their personality and intelligence* and then given someone the job.",
        answer: "shortlisted",
      },
    ],
  },
];

const topic3Test: TestExercise[] = [
  {
    id: "3.1",
    title: "Test 3.1 – Make word pairs",
    instruction:
      "Drag each word on the right to match with a word on the left to make a common word pair. There is one extra word you don't need.",
    type: "matching",
    pairs: [
      { id: 1, left: "covering", right: "letter" },
      { id: 2, left: "employment", right: "agency" },
      { id: 3, left: "application", right: "form" },
      { id: 4, left: "curriculum", right: "vitae" },
      { id: 5, left: "psychometric", right: "test" },
    ],
    extraWords: ["references"],
  },
  {
    id: "3.2",
    title: "Test 3.2 – Choose the best word",
    instruction: "Choose the best word from the brackets to fill the gap.",
    type: "fill-blank",
    items: [
      { id: 1, prompt: "We are using a recruitment ___ to find them for us. (agency / headhunter)", answer: "agency" },
      {
        id: 2,
        prompt: "They advertised the ___ in the local newspaper last week. (positions / applicants)",
        answer: "positions",
      },
      { id: 3, prompt: "So far, over 60 people have applied for the ___ (works / posts)", answer: "posts" },
      {
        id: 4,
        prompt: "We are going to look at all the letters of ___ over the weekend. (application / situation)",
        answer: "application",
      },
      {
        id: 5,
        prompt: "On Monday, we will draw up a ___ of 10 or 11 people. (reference / shortlist)",
        answer: "shortlist",
      },
      { id: 6, prompt: "Then we'll invite them all to come for an ___ (interview / appointment)", answer: "interview" },
      {
        id: 7,
        prompt: "We hope to ___ the successful applicants by the end of the month. (apply / appoint)",
        answer: "appoint",
      },
    ],
  },
  {
    id: "3.3",
    title: "Test 3.3 – Classify the sentences",
    instruction:
      "Decide whether each sentence would appear in a Situations Vacant ad (SV), in an applicant's CV, or in a covering letter (CL).",
    type: "classify",
    items: [
      { id: 1, prompt: "I enclose my résumé for your consideration.", answer: "CL" },
      { id: 2, prompt: "1997–2000 University of Maryland, MBA (Marketing and Public Relations).", answer: "CV" },
      { id: 3, prompt: "I am looking for a more stimulating environment and your company offers this.", answer: "CL" },
      { id: 4, prompt: "Training will be given but basic word-processing skills would be an advantage.", answer: "SV" },
      { id: 5, prompt: "1994–1997: The Biscuit Company, London – Manager responsible for 22 staff.", answer: "CV" },
      { id: 6, prompt: "The successful applicant will be expected to take up the post in January.", answer: "SV" },
    ],
  },
  {
    id: "3.4",
    title: "Test 3.4 – Find the word",
    instruction: "Find the correct word for each clue.",
    type: "fill-blank",
    items: [
      { id: 1, prompt: "Certificates from school and university → q___", answer: "qualifications" },
      { id: 2, prompt: "Where you've worked and what you've achieved → e___", answer: "experience" },
      { id: 3, prompt: "Hire a good person who is working for another company → h___", answer: "headhunt" },
      { id: 4, prompt: "People you can contact to find out about an applicant → r___", answer: "referees" },
      { id: 5, prompt: "Process to find the right person for a job → s___", answer: "selection" },
      { id: 6, prompt: "An applicant who has a good chance of getting the job → c___", answer: "candidate" },
    ],
  },
];

// ── Topic 4 content ────────────────────────────────────────────────────

const topic4Theory: TheorySection[] = [
  {
    heading: "A – Education and training",
    content: `<em>Margareta: 'The trouble with <strong>graduates</strong>, people who've just left university, is that their <strong>paper qualifications</strong> are good, but they have no <strong>work experience</strong>. They just don't know how business works.'</em>

<em>Nils: 'I disagree. <strong>Education</strong> should teach people how to think, not prepare them for a particular job. One of last year's <strong>recruits</strong> had <strong>graduated</strong> from Oxford in philosophy and she's doing very well!'</em>

<em>Margareta: 'Philosophy's an interesting subject, but for our company, it's more useful if you <strong>train</strong> as a scientist and <strong>qualify</strong> as a biologist or chemist; <strong>training</strong> for a specific job is better.'</em>

<em>Nils: 'Yes, but we don't just need scientists. We also need good managers, which we can achieve through <strong>in-house training courses</strong> within the company. You know we have put a lot of money into <strong>management development</strong> and <strong>management training</strong> because they are very important. You need to have some <strong>management experience</strong> for that. It's not the sort of thing you can learn when you're 20!'</em>`,
    notes: [
      "<strong>graduate</strong> (verb) = successfully complete a degree; <strong>graduate</strong> (noun) = a person who has completed a degree",
      "<strong>paper qualifications</strong> = certificates and diplomas from formal education",
      "<strong>qualify</strong> as + profession (e.g. qualify as an accountant)",
      "<strong>train</strong> as + profession (e.g. train as a scientist)",
      "<strong>in-house</strong> = within the company (opposite: external)",
    ],
  },
  {
    heading: "B – Skilled and unskilled",
    content: `A <strong>skill</strong> is the ability to do something well, especially because you have learned how to do it and practised it. Jobs, and the people who do them, can be described as:

<table class="w-full border-collapse mt-3 mb-3">
<thead><tr class="border-b border-border">
<th class="text-left p-2 text-sm font-semibold">highly skilled</th>
<th class="text-left p-2 text-sm font-semibold">skilled</th>
<th class="text-left p-2 text-sm font-semibold">semi-skilled</th>
<th class="text-left p-2 text-sm font-semibold">unskilled</th>
</tr></thead>
<tbody><tr>
<td class="p-2 text-sm text-muted-foreground">e.g. car designer</td>
<td class="p-2 text-sm text-muted-foreground">e.g. car production manager</td>
<td class="p-2 text-sm text-muted-foreground">e.g. taxi driver</td>
<td class="p-2 text-sm text-muted-foreground">e.g. car cleaner</td>
</tr></tbody>
</table>

You can say that someone is:
<ul class="list-disc list-inside space-y-1 mt-2">
<li><strong>skilled at</strong> + noun (e.g. skilled at customer care, electronics)</li>
<li><strong>skilled in</strong> + -ing (e.g. skilled in communicating, using PCs, working with large groups)</li>
<li><strong>good with</strong> + noun (e.g. good with figures, people)</li>
</ul>`,
  },
  {
    heading: "C – The right person",
    content: `These words are often used in job advertisements. Companies look for people who are:

<ul class="list-disc list-inside space-y-1 mt-2">
<li><strong>self-starters, proactive, self-motivated, self-driven</strong> – good at working on their own.</li>
<li><strong>methodical, systematic, organized</strong> – can work in a planned, orderly way.</li>
<li><strong>computer-literate</strong> – good with computers.</li>
<li><strong>numerate</strong> – good with numbers.</li>
<li><strong>motivated</strong> – very keen to do well in their job.</li>
<li><strong>talented</strong> – naturally very good at what they do.</li>
<li><strong>team players</strong> – people who work well with other people.</li>
</ul>`,
  },
];

const topic4Practice: PracticeExercise[] = [
  {
    id: "4.1",
    title: "Exercise 4.1 – Correct the mistakes",
    instruction: "Correct the sentences about Ravi. One word is wrong in each item. Type the correct word.",
    type: "correction",
    items: [
      {
        id: 1,
        prompt: "At 18, Ravi decided to stay in full-time *training* and went to Mumbai University.",
        answer: "education",
      },
      {
        id: 2,
        prompt: "Ravi *qualified* three years later with a degree in philosophy and politics.",
        answer: "graduated",
      },
      {
        id: 3,
        prompt:
          "He taught for a while, but didn't like it. He decided to *educate* as an accountant at evening classes.",
        answer: "train",
      },
      {
        id: 4,
        prompt: "He qualified *for* an accountant and joined a big accountancy firm in its Mumbai office.",
        answer: "as",
      },
      {
        id: 5,
        prompt: "When he started, he needed to develop other skills, which would come through *experiments*.",
        answer: "experience",
      },
      { id: 6, prompt: "He received *managers'* training to help him develop these skills.", answer: "management" },
    ],
  },
  {
    id: "4.2",
    title: "Exercise 4.2 – Classify the skill level",
    instruction:
      "Are these jobs generally considered to be highly skilled (HS), skilled (S), semi-skilled (SS), or unskilled (U)?",
    type: "classify",
    items: [
      { id: 1, prompt: "teacher", answer: "S" },
      { id: 2, prompt: "brain surgeon", answer: "HS" },
      { id: 3, prompt: "car worker on a production line", answer: "SS" },
      { id: 4, prompt: "airline pilot", answer: "HS" },
      { id: 5, prompt: "labourer (someone doing basic work on a building site)", answer: "U" },
      { id: 6, prompt: "bus driver", answer: "SS" },
      { id: 7, prompt: "office manager", answer: "S" },
    ],
  },
  {
    id: "4.3",
    title: "Exercise 4.3 – Complete the job adverts",
    instruction: "Complete these extracts from job advertisements using words from section C.",
    type: "fill-blank",
    wordBank: [
      "numerate",
      "self-motivated",
      "self-driven",
      "methodical",
      "organized",
      "talented",
      "motivated",
      "computer-literate",
      "team player",
    ],
    items: [
      { id: 1, prompt: "You'll need to be ___, as you'll be working on financial budgets.", answer: "numerate" },
      {
        id: 2,
        prompt: "As part of our sales team, you'll be working independently, so you have to be self-___ and self-___.",
        answer: "motivated",
        hint: "First blank: self-___",
      },
      {
        id: 3,
        prompt: "We're looking for someone who can work on ten projects at once. You must be ___ and ___.",
        answer: "methodical",
        hint: "First blank",
      },
      {
        id: 4,
        prompt:
          "We need ___ journalists who are very good at their job and extremely ___ to find out as much as they can.",
        answer: "talented",
        hint: "First blank",
      },
      {
        id: 5,
        prompt: "You'll be researching developments on the Internet, so you have to be ___.",
        answer: "computer-literate",
      },
      { id: 6, prompt: "But as part of a team of researchers, you need to be a good ___ too.", answer: "team player" },
    ],
  },
];

const topic4Test: TestExercise[] = [
  {
    id: "4.1",
    title: "Test 4.1 – Fill in the prepositions",
    instruction: "Write one word from the box in each gap to complete the text. You may use some words more than once.",
    type: "gap-fill",
    items: [
      {
        id: 1,
        prompt: "I graduated ___ Edinburgh University last year with a degree in Business and Management.",
        answer: "from",
      },
      { id: 2, prompt: "Now I am going to train ___ an accountant.", answer: "as" },
      { id: 3, prompt: "I think I will do well because I am good ___ figures.", answer: "with" },
      { id: 4, prompt: "I am skilled ___ using computers.", answer: "in" },
      {
        id: 5,
        prompt:
          "I think that training ___ a specific job will be more interesting than the general education I got at university.",
        answer: "for",
      },
    ],
  },
  {
    id: "4.2",
    title: "Test 4.2 – Choose the best word",
    instruction: "Choose the best word from the brackets to fill the gap.",
    type: "fill-blank",
    items: [
      {
        id: 1,
        prompt: "Everyone should stay in full-time ___ until they are at least 18. (school / education)",
        answer: "education",
      },
      {
        id: 2,
        prompt: "Of course ___ are important, but they're not everything. (qualifications / printed)",
        answer: "qualifications",
      },
      { id: 3, prompt: "I look for people with lots of relevant ___ experience. (job / work)", answer: "work" },
      {
        id: 4,
        prompt: "Our company runs some very good in-house ___ courses. (training / skilled)",
        answer: "training",
      },
      {
        id: 5,
        prompt: "Last year we spent over £50,000 on management ___. (experience / development)",
        answer: "development",
      },
      {
        id: 6,
        prompt: "We value people who are highly ___ and want to get on. (motivated / graduated)",
        answer: "motivated",
      },
      { id: 7, prompt: "Tom gets on well with everyone. He is a great team ___. (person / player)", answer: "player" },
    ],
  },
  {
    id: "4.3",
    title: "Test 4.3 – Classify the skill level",
    instruction: "Are these job descriptions highly skilled (HS), skilled (S), semi-skilled (SS), or unskilled (U)?",
    type: "classify",
    items: [
      { id: 1, prompt: "Experience of managing a modern production plant is essential.", answer: "S" },
      { id: 2, prompt: "Wanted – Early morning cleaners for office block in the centre of town.", answer: "U" },
      { id: 3, prompt: "Eastern Buses now recruiting drivers. Competitive salary plus benefits.", answer: "SS" },
      { id: 4, prompt: "Building labourers required. Good money for hard workers.", answer: "U" },
      { id: 5, prompt: "Pilot with experience of flying 747s required for new cargo carrier.", answer: "HS" },
      { id: 6, prompt: "Local electrical company requires production line workers now.", answer: "SS" },
      { id: 7, prompt: "Black Box Games needs an experienced software developer. Good salary.", answer: "HS" },
    ],
  },
  {
    id: "4.4",
    title: "Test 4.4 – Find the word",
    instruction: "Find a word related to each clue.",
    type: "fill-blank",
    items: [
      { id: 1, prompt: "Good at working on his/her own → pro___", answer: "proactive" },
      { id: 2, prompt: "Works in a systematic, orderly way → meth___", answer: "methodical" },
      { id: 3, prompt: "Good with figures → num___", answer: "numerate" },
      { id: 4, prompt: "Naturally very good at what they do → tal___", answer: "talented" },
      { id: 5, prompt: "Someone who is good with PCs is 'computer-___'", answer: "literate" },
      { id: 6, prompt: "Works well on his/her own → self-d___", answer: "driven" },
    ],
  },
];

// ── Topic 5 content ────────────────────────────────────────────────────

const topic5Theory: TheorySection[] = [
  {
    heading: "A – Wages, salary and benefits",
    content: `<em>'I'm Ivan and I work as a waiter in Prague. I like my job even if I don't earn very much: I get paid <strong>wages</strong> every week by the restaurant. We get the <strong>minimum wage</strong>: the lowest amount allowed by law. But we also get <strong>tips</strong>, money that customers leave for us in addition to the bill. Some tourists are very generous!'</em>

<em>'My name's Luigi and I'm a hotel manager in Venice. I get paid a <strong>salary</strong> every month. In summer we're very busy, so we work a lot of extra hours, or <strong>overtime</strong>; the money for this is quite good. Working in a hotel, we also get nice <strong>perks</strong>, for example free meals!'</em>

<em>'I'm Catherine and I'm a saleswoman based in Paris. I get a basic <strong>salary</strong>, plus <strong>commission</strong>: a percentage on everything I sell. If I sell more than a particular amount in a year, I also get extra money – a <strong>bonus</strong>, which is nice. There are some good <strong>fringe benefits</strong> with this job: I get a <strong>company car</strong>, and they make payments for my <strong>pension</strong>, money that I'll get regularly after I stop working. All that makes a good <strong>benefits package</strong>.'</em>`,
    notes: [
      "<strong>wages</strong> = paid weekly (often for manual/hourly work); <strong>salary</strong> = paid monthly (often for professional work)",
      "<strong>overtime</strong> = extra hours worked beyond the normal schedule",
      "<strong>commission</strong> = a percentage of each sale, paid on top of basic salary",
      "<strong>perks</strong> and <strong>fringe benefits</strong> are similar: non-cash extras provided by the employer",
    ],
  },
  {
    heading: "B – Compensation 1",
    content: `<strong>Compensation</strong> and <strong>remuneration</strong> are formal words used to talk about pay and benefits, especially those of senior managers.

<strong>Compensation package</strong> and <strong>remuneration package</strong> are used especially in the US to talk about all the pay and benefits that employees receive.

For a senior executive, this may include <strong>share options</strong> (BrE) or <strong>stock options</strong> (AmE): the right to buy the company's shares at low prices.

There may be <strong>performance-related bonuses</strong> if the manager reaches particular objectives for the company.`,
    notes: [
      "BrE: <strong>share options</strong>; AmE: <strong>stock options</strong>",
      "<strong>performance-related</strong> = linked to how well someone does their job",
    ],
  },
  {
    heading: "C – Compensation 2",
    content: `<strong>Compensation</strong> is also used to talk about money a manager (or any employee) receives if they are forced to leave the organization, perhaps after a boardroom row.

This money is in the form of a <strong>compensation payment</strong>, or <strong>severance payment</strong>. If the manager also receives benefits, the payment and the benefits form a <strong>severance package</strong>.

In Britain, executives with very high pay and good benefits may be referred to as <strong>fat cats</strong>, implying that they do not deserve this level of remuneration.`,
  },
];

const topic5Practice: PracticeExercise[] = [
  {
    id: "5.1",
    title: "Exercise 5.1 – Complete the conversation",
    instruction:
      "Xavier and Yvonne are talking about Xavier's new job as a photocopier salesman. Complete each of Yvonne's replies with the correct word from section A.",
    type: "fill-blank",
    items: [
      {
        id: 1,
        prompt:
          "X: I usually have to work late; I don't get paid for it, but I get a percentage for every photocopier I sell. Y: So you don't get ___, but you do get commission.",
        answer: "overtime",
      },
      {
        id: 2,
        prompt: "X: The people in production get extra money if they reach their targets. Y: Oh right. They get a ___.",
        answer: "bonus",
      },
      {
        id: 3,
        prompt:
          "X: The company pays for medical treatment too, and the company restaurant is fantastic. Y: Wow! The ___ sound very nice.",
        answer: "perks",
      },
      { id: 4, prompt: "X: And they've given me a ___ to go and visit clients.", answer: "company car" },
      {
        id: 5,
        prompt:
          "X: What's more, the company pays money for us to get when we retire. Y: Yes, it's important to get a good ___.",
        answer: "pension",
      },
      {
        id: 6,
        prompt: "X: The total ___ is brilliant. Y: Yes, all that extra stuff is really worth having.",
        answer: "benefits package",
      },
    ],
  },
  {
    id: "5.2",
    title: "Exercise 5.2 – Classify the expressions",
    instruction: "Match each newspaper scenario to the most appropriate expression from sections B and C.",
    type: "fill-blank",
    items: [
      {
        id: 1,
        prompt:
          "Failed airline boss gets massive payout despite very poor results. Shareholders are angry. This sort of payment is a ___.",
        answer: "severance payment",
      },
      {
        id: 2,
        prompt:
          "Megafone CEO gets £10 million 'thank you' after negotiating a takeover. The directors referred to this as a ___.",
        answer: "performance-related bonus",
      },
      {
        id: 3,
        prompt:
          "Multilever's head earns $22m basic salary with stock options worth $10m. Other payments bring his total to $35m. This is his ___.",
        answer: "compensation package",
      },
      {
        id: 4,
        prompt:
          "National Energy shareholders attack directors for paying themselves too much while profits fell 30%. They call these executives ___.",
        answer: "fat cats",
      },
    ],
  },
];

const topic5Test: TestExercise[] = [
  {
    id: "5.1",
    title: "Test 5.1 – Choose the best word",
    instruction: "Choose the best word from the brackets to fill the gap.",
    type: "fill-blank",
    items: [
      { id: 1, prompt: "I work in a small hotel in Amsterdam. I ___ €8 an hour. (earn / paid)", answer: "earn" },
      { id: 2, prompt: "It's not a lot, but it's more than the ___ wage. (maximum / minimum)", answer: "minimum" },
      { id: 3, prompt: "Some customers leave me ___ and that is a great help. (perks / tips)", answer: "tips" },
      { id: 4, prompt: "My sister works in a bank and her ___ is €3,000 a month. (salary / wages)", answer: "salary" },
      { id: 5, prompt: "The bank also provides her with a good ___ package. (bonus / benefits)", answer: "benefits" },
      { id: 6, prompt: "Next year she thinks she will get a ___ car. (company / business)", answer: "company" },
      {
        id: 7,
        prompt: "When she is 55 she will be able to give up work and live on her ___. (package / pension)",
        answer: "pension",
      },
    ],
  },
  {
    id: "5.2",
    title: "Test 5.2 – Complete the job adverts",
    instruction: "Write one word in each gap to complete the sentences. The first letter of each word is given.",
    type: "gap-fill",
    items: [
      { id: 1, prompt: "In this job, the w___ are £224 for 37 hours.", answer: "wages" },
      { id: 2, prompt: "Workers get £10 an hour for any o___ they do.", answer: "overtime" },
      { id: 3, prompt: "Benefits include a company p___ scheme and free meals.", answer: "pension" },
      { id: 4, prompt: "This job offers a basic s___ of £1,000 a month.", answer: "salary" },
      { id: 5, prompt: "You get 10% c___ on everything you sell.", answer: "commission" },
      { id: 6, prompt: "When you sell enough you get a b___ of £400.", answer: "bonus" },
      { id: 7, prompt: "There are some f___ benefits including a pension.", answer: "fringe" },
    ],
  },
  {
    id: "5.3",
    title: "Test 5.3 – Match statements to terms",
    instruction:
      "Drag each term on the right to match its definition on the left. There is one extra term you don't need.",
    type: "matching",
    pairs: [
      { id: 1, left: "Payment for those who have stopped working, especially due to age", right: "pension" },
      { id: 2, left: "Benefit that lets employees buy company shares at a low price", right: "share options" },
      { id: 3, left: "Bonuses given for reaching objectives set by the company", right: "performance-related" },
      { id: 4, left: "Money paid to an employee who is asked to leave", right: "severance payment" },
      { id: 5, left: "Formal word for all the pay that an employee receives", right: "remuneration" },
      { id: 6, left: "Director paid a huge salary but doesn't deserve it", right: "fat cat" },
    ],
    extraWords: ["compensation package"],
  },
];

// ── Topic 6 content ────────────────────────────────────────────────────

const topic6Theory: TheorySection[] = [
  {
    heading: "A – Employees and management",
    content: `The people who work for a company, all the people on its <strong>payroll</strong>, are its <strong>employees</strong>, <strong>personnel</strong>, <strong>staff</strong>, <strong>workers</strong> or <strong>workforce</strong>. But these words can mean just the people carrying out the work of a company, rather than those leading it and organizing it: the <strong>management</strong>.

<ul class="list-disc list-inside space-y-1 mt-3">
<li><strong>White-collar workers</strong> work in offices.</li>
<li><strong>Blue-collar workers</strong> do manual work in factories, etc.</li>
<li>The place in a factory where things are made is the <strong>shop floor</strong>.</li>
</ul>`,
    notes: [
      "<strong>workforce</strong>, <strong>work-force</strong> and <strong>work force</strong> are all possible spellings.",
      '<strong>staff</strong> can be singular or plural: "The staff is/are very experienced."',
    ],
  },
  {
    heading: "B – Management and administration",
    content: `A company's activities may be spread over different <strong>sites</strong>. A company's most senior managers usually work in its <strong>head office</strong> or <strong>headquarters</strong> (HQ).

Some managers have their own individual offices, but in many businesses, most employees work in <strong>open-plan offices</strong>: large areas where many people work together.

<strong>Administration</strong> or, informally, <strong>admin</strong>, the everyday work supporting a company's activities, is often done in offices like these by <strong>administrative staff</strong> or <strong>support staff</strong>.

For example, those giving technical help to buyers of the company's products are in <strong>technical support</strong>.`,
  },
  {
    heading: "C – Labour",
    content: `<strong>Labour</strong> is spelled <strong>labor</strong> in AmE. <strong>Labor unions</strong>, organizations defending the interests of workers (AmE) are called <strong>trade unions</strong> in BrE.

When workers are not happy with pay or conditions, they may take <strong>industrial action</strong>:

<ul class="list-disc list-inside space-y-1 mt-2">
<li><strong>a strike, stoppage or walk-out</strong>: workers stop working for a time.</li>
<li><strong>a go-slow</strong>: workers continue to work, but more slowly than usual.</li>
<li><strong>an overtime ban</strong>: workers refuse to work more than the normal number of hours.</li>
</ul>`,
    notes: [
      "BrE: <strong>trade unions</strong>; AmE: <strong>labor unions</strong>",
      "<strong>industrial action</strong> is the general term for all forms of worker protest",
    ],
  },
  {
    heading: "D – Personnel and human resources",
    content: `In larger organizations there is a <strong>human resources department</strong> (HRD) that deals with pay, recruitment, etc. This area is called <strong>human resources</strong> (HR) or <strong>human resource management</strong> (HRM).

Another name for this department is the <strong>personnel department</strong>.`,
  },
];

const topic6Practice: PracticeExercise[] = [
  {
    id: "6.1",
    title: "Exercise 6.1 – Key vocabulary crossword clues",
    instruction: "Use the clues to type the correct word from sections A, B and C.",
    type: "fill-blank",
    items: [
      { id: 1, prompt: "Everyone working for a company is on this. → p___", answer: "payroll" },
      { id: 2, prompt: "Office workers may wear this type of collar. → w___", answer: "white" },
      { id: 3, prompt: "All the people working for a company. → s___", answer: "staff" },
      { id: 4, prompt: "Manual workers may wear this type of collar. → b___", answer: "blue" },
      { id: 5, prompt: "… workers use their hands. → m___", answer: "manual" },
      { id: 6, prompt: "When people stop working to protest. → s___", answer: "strike" },
      { id: 7, prompt: "One of the people working for an organization. → e___", answer: "employee" },
      { id: 8, prompt: "Occasions when workers stop working to protest: walk-___", answer: "outs" },
      { id: 9, prompt: "When people stop work to complain about something. → s___", answer: "stoppage" },
      { id: 10, prompt: "The place in a factory where the production lines are. → shop f___", answer: "floor" },
      { id: 11, prompt: "Organizations defending the interests of workers (BrE). → trade u___", answer: "unions" },
      { id: 12, prompt: "When workers intentionally produce less. → go-s___", answer: "slow" },
      { id: 13, prompt: "Department dealing with pay and recruitment. → p___", answer: "personnel" },
      { id: 14, prompt: "Another word for workers who do physical work. → l___", answer: "labour" },
      { id: 15, prompt: "___ action: the general term for worker protests.", answer: "industrial" },
    ],
  },
  {
    id: "6.2",
    title: "Exercise 6.2 – Complete the company description",
    instruction:
      "Manuel Ortiz describes his Spanish computer sales company. Complete his description with words from sections B and D.",
    type: "fill-blank",
    wordBank: [
      "office",
      "head office",
      "headquarters",
      "open-plan",
      "administrative staff",
      "support",
      "human resources",
      "HRD",
    ],
    items: [
      { id: 1, prompt: "We started with a small ___ in Madrid.", answer: "office" },
      { id: 2, prompt: "Our ___, our HQ, is still here.", answer: "head office" },
      { id: 3, prompt: "Many of the offices are ___: everyone works together.", answer: "open-plan" },
      { id: 4, prompt: "From managers to ___, everyone shares the space.", answer: "administrative staff" },
      { id: 5, prompt: "People giving help to customers over the phone work in technical ___.", answer: "support" },
      { id: 6, prompt: "Recruitment is taken care of by the ___ department.", answer: "human resources" },
    ],
  },
];

const topic6Test: TestExercise[] = [
  {
    id: "6.1",
    title: "Test 6.1 – Make word pairs",
    instruction:
      "Drag each word on the right to match with a word on the left to make a common word pair. There is one extra word you don't need.",
    type: "matching",
    pairs: [
      { id: 1, left: "technical", right: "support" },
      { id: 2, left: "shop", right: "floor" },
      { id: 3, left: "open", right: "plan" },
      { id: 4, left: "head", right: "office" },
      { id: 5, left: "blue", right: "collar" },
      { id: 6, left: "work", right: "force" },
    ],
    extraWords: ["union"],
  },
  {
    id: "6.2",
    title: "Test 6.2 – Choose the best word",
    instruction: "Choose the best word from the brackets to fill the gap.",
    type: "fill-blank",
    items: [
      {
        id: 1,
        prompt: "The CEO is the head of the ___ team. (administration / management / organization)",
        answer: "management",
      },
      { id: 2, prompt: "We have 200 people on our ___. (recruitment / business / payroll)", answer: "payroll" },
      {
        id: 3,
        prompt: "Our ___ department is responsible for recruitment. (personnel / employee / worker)",
        answer: "personnel",
      },
      {
        id: 4,
        prompt: "Our main office is in London but we have ___ all over the country. (places / companies / sites)",
        answer: "sites",
      },
      {
        id: 5,
        prompt: "I supervise all the ___ workers on the production line. (manual / white-collar / labour)",
        answer: "manual",
      },
      {
        id: 6,
        prompt: "I am in charge of training in the human ___ department. (support / resources / staff)",
        answer: "resources",
      },
      {
        id: 7,
        prompt: "We have a ___ of 65 in London and about 30 in Paris. (staff / union / headquarters)",
        answer: "staff",
      },
      {
        id: 8,
        prompt:
          "You haven't been paid this month? I'll put you through to the ___ department. (pay / salary / finance)",
        answer: "finance",
      },
    ],
  },
  {
    id: "6.3",
    title: "Test 6.3 – Complete the conversation",
    instruction: "Complete the conversation about industrial action with the correct words.",
    type: "gap-fill",
    items: [
      { id: 1, prompt: "I'm calling for a w___. All workers should stop work immediately.", answer: "walk-out" },
      { id: 2, prompt: "All workers who are in the u___ should stop work.", answer: "union" },
      { id: 3, prompt: "If there is a s___, we won't get paid.", answer: "strike" },
      {
        id: 4,
        prompt: "We should refuse to work more than 35 hours a week. An o___ ban would make management listen.",
        answer: "overtime",
      },
      {
        id: 5,
        prompt: "We should also stage a g___. If we don't work quickly, the company will lose money.",
        answer: "go-slow",
      },
    ],
  },
];

// ── Topic 7 content ────────────────────────────────────────────────────

const topic7Theory: TheorySection[] = [
  {
    heading: "A – A job for life",
    content: `Many people used to work for the same organization until they reached <strong>retirement</strong>: the age at which people <strong>retire</strong>, or end their working life.

<strong>Career paths</strong> were clear: you could work your way up the <strong>career ladder</strong>, getting <strong>promotion</strong> to jobs that were more <strong>senior</strong>, with greater responsibility.

You would probably not be <strong>demoted</strong>: moved to a less senior job.

To leave the company, you could <strong>resign</strong> or <strong>hand in your notice</strong>.`,
  },
  {
    heading: "B – A job for now",
    content: `Modco has <strong>downsized</strong> and <strong>delayered</strong>. The number of management levels in the company hierarchy has been reduced from five to three, and many managers have lost their jobs.

Modco has <strong>reorganized</strong> and <strong>restructured</strong> in order to become <strong>flatter</strong> (with fewer layers of management) and <strong>leaner</strong> (with fewer, more productive employees). They did this to reduce costs, and increase <strong>efficiency</strong> and <strong>profits</strong>.

Employees said the company used words like 'restructure' to make the situation sound positive and acceptable.`,
    notes: [
      "<strong>downsize</strong> = reduce the number of employees",
      "<strong>delayer</strong> = remove levels of management",
      "<strong>flatter</strong> = fewer layers of management; <strong>leaner</strong> = fewer, more productive employees",
    ],
  },
  {
    heading: "C – In-house staff or freelancers?",
    content: `Modco has <strong>outsourced</strong> many jobs previously done by <strong>in-house</strong> personnel: outside companies clean the offices, transport goods and collect money from customers. This allows Modco to concentrate on its main business activities.

Modco uses more <strong>freelancers</strong>, independent people who may work for several different companies, and they employ people for short periods on <strong>temporary contracts</strong>.

Modco expects <strong>flexibility</strong>, with people moving to different jobs when necessary, but for many employees, this means <strong>job insecurity</strong>, the feeling that they may not be in their job for long.

The way that they are doing their job is discussed at <strong>performance reviews</strong>: regular meetings with their manager.`,
    notes: [
      "You say <strong>freelancers</strong> or <strong>freelances</strong>.",
      "<strong>outsource</strong> = pay an outside company to do work previously done internally",
    ],
  },
  {
    heading: "D – Losing your job",
    content: `<table class="w-full border-collapse mt-3 mb-3">
<thead><tr class="border-b border-border">
<th class="text-left p-2 text-sm font-semibold">If you do something wrong, you are…</th>
<th class="text-left p-2 text-sm font-semibold">If you've done nothing wrong, you are…</th>
</tr></thead>
<tbody>
<tr><td class="p-2 text-sm">dismissed</td><td class="p-2 text-sm">laid off</td></tr>
<tr><td class="p-2 text-sm">fired</td><td class="p-2 text-sm">made redundant</td></tr>
<tr><td class="p-2 text-sm">sacked</td><td class="p-2 text-sm">offered early retirement</td></tr>
<tr><td class="p-2 text-sm">terminated</td><td class="p-2 text-sm"></td></tr>
</tbody>
</table>

Employees who are made redundant may get advice about finding another job, retraining, etc. This is called <strong>outplacement advice</strong>.`,
  },
];

const topic7Practice: PracticeExercise[] = [
  {
    id: "7.1",
    title: "Exercise 7.1 – Word forms",
    instruction: "Complete each gap with the correct noun, verb or adjective form of the word.",
    type: "fill-blank",
    items: [
      { id: 1, prompt: "Noun: demotion → Verb: ___", answer: "demote" },
      { id: 2, prompt: "Verb: retire → Noun: ___", answer: "retirement" },
      { id: 3, prompt: "Noun: lay-off → Verb: ___ off", answer: "lay" },
      { id: 4, prompt: "Noun: ___ → Verb: dismiss", answer: "dismissal" },
      { id: 5, prompt: "Noun: ___ → Verb: terminate", answer: "termination" },
      { id: 6, prompt: "Noun: seniority → Adjective: ___", answer: "senior" },
      { id: 7, prompt: "Noun: redundancy → Adjective: ___", answer: "redundant" },
      { id: 8, prompt: "Adjective: insecure → Noun: ___", answer: "insecurity" },
      { id: 9, prompt: "Adjective: flexible → Noun: ___", answer: "flexibility" },
    ],
  },
  {
    id: "7.2",
    title: "Exercise 7.2 – Match sentence halves",
    instruction: "Match each sentence beginning with the correct ending. Type the letter (a–e).",
    type: "fill-blank",
    items: [
      {
        id: 1,
        prompt: "Career paths aren't what they used to be; → ___",
        answer: "b",
        hint: "a) and they will be replaced by temporary workers. b) companies won't take care of us for life any more. c) but now we outsource it. d) factory worker to factory manager. e) reducing five management levels to three.",
      },
      { id: 2, prompt: "He worked his way up from → ___", answer: "d", hint: "a–e as above" },
      { id: 3, prompt: "The new management have delayered the company, → ___", answer: "e", hint: "a–e as above" },
      { id: 4, prompt: "We used to do printing in-house, → ___", answer: "c", hint: "a–e as above" },
      {
        id: 5,
        prompt: "Workers are afraid their organizations will be downsized → ___",
        answer: "a",
        hint: "a–e as above",
      },
    ],
  },
  {
    id: "7.3",
    title: "Exercise 7.3 – Complete the story",
    instruction:
      "Carla talks about how she lost her job at a magazine publishing company. Complete the text with the correct words.",
    type: "fill-blank",
    wordBank: [
      "reviews",
      "off",
      "contracts",
      "freelancers",
      "laying",
      "flatter",
      "leaner",
      "redundant",
      "outplacement",
    ],
    items: [
      { id: 1, prompt: "We had to have regular performance ___ with one of the new managers.", answer: "reviews" },
      { id: 2, prompt: "After a few months they started laying staff ___.", answer: "off" },
      { id: 3, prompt: "Our own journalists were put on temporary ___.", answer: "contracts" },
      { id: 4, prompt: "They were replaced by ___.", answer: "freelancers" },
      { id: 5, prompt: "Then they started ___ off more senior people like me.", answer: "laying" },
      { id: 6, prompt: "The new owners said they wanted to make the company ___.", answer: "flatter" },
      { id: 7, prompt: "And ___ too – with fewer, more productive employees.", answer: "leaner" },
      { id: 8, prompt: "So I was made ___.", answer: "redundant" },
      { id: 9, prompt: "They offered to help me find another job with ___ advice.", answer: "outplacement" },
    ],
  },
];

const topic7Test: TestExercise[] = [
  {
    id: "7.1",
    title: "Test 7.1 – Match statements to concepts",
    instruction:
      "Drag each concept on the right to match the statement on the left. There is one extra word you don't need.",
    type: "matching",
    pairs: [
      { id: 1, left: "I am an independent software designer, working for three companies.", right: "freelance" },
      { id: 2, left: "I don't know whether my job is safe. I could be out of work next month.", right: "insecurity" },
      { id: 3, left: "In 1999 we had 430 employees. Now there are only 280.", right: "downsize" },
      { id: 4, left: "We used to do printing in-house, but now it's done in Hong Kong.", right: "outsource" },
      { id: 5, left: "I was a shop floor supervisor but then they made me manager.", right: "promotion" },
      { id: 6, left: "Our company has been completely reorganized to be more efficient.", right: "restructure" },
      { id: 7, left: "Now that we have reduced our costs, we are making much more money.", right: "profit" },
    ],
    extraWords: ["dismiss"],
  },
  {
    id: "7.2",
    title: "Test 7.2 – Choose the best word",
    instruction: "Choose the best word from the brackets to fill the gap.",
    type: "fill-blank",
    items: [
      {
        id: 1,
        prompt: "I didn't like the way the company was being run so I ___. (resigned / sacked / terminated)",
        answer: "resigned",
      },
      { id: 2, prompt: "They laid ___ 200 people in March and 50 more in September. (on / off / out)", answer: "off" },
      {
        id: 3,
        prompt: "I joined this company because the career ___ is excellent. (path / way / contract)",
        answer: "path",
      },
      {
        id: 4,
        prompt: "I have regular performance ___ with my manager. (advice / support / reviews)",
        answer: "reviews",
      },
      {
        id: 5,
        prompt: "We now have fewer employees and so the company is much ___. (efficient / leaner / fatter)",
        answer: "leaner",
      },
      { id: 6, prompt: "I have worked my way up and now I am a ___ manager. (main / old / senior)", answer: "senior" },
      { id: 7, prompt: "She was ___ for breaking company rules. (fired / promoted / retired)", answer: "fired" },
      {
        id: 8,
        prompt: "I was appointed on a ___ contract so my job isn't very safe. (permanent / full-time / temporary)",
        answer: "temporary",
      },
      {
        id: 9,
        prompt: "When you join a company now you can't expect a ___ for life. (job / work / career)",
        answer: "job",
      },
      {
        id: 10,
        prompt: "If you break the safety rules you can be ___ immediately. (downsized / dismissed / delayered)",
        answer: "dismissed",
      },
    ],
  },
  {
    id: "7.3",
    title: "Test 7.3 – Complete the restructuring speech",
    instruction: "Complete the managing director's speech about restructuring with the correct words.",
    type: "gap-fill",
    items: [
      { id: 1, prompt: "We will have a fla___ structure with only two levels of management.", answer: "flatter" },
      { id: 2, prompt: "We don't want to make anyone red___.", answer: "redundant" },
      { id: 3, prompt: "Some of our senior people will take early ret___.", answer: "retirement" },
      { id: 4, prompt: "No one likes to be dem___ but it is better than being out of work.", answer: "demoted" },
      { id: 5, prompt: "We hope people will be fle___ and move to different jobs.", answer: "flexible" },
      { id: 6, prompt: "If anyone decides to hand in their not___ we will help.", answer: "notice" },
      { id: 7, prompt: "We will offer out___ advice to help people find new jobs.", answer: "outplacement" },
    ],
  },
];

// ── Topic 8 content ────────────────────────────────────────────────────

const topic8Theory: TheorySection[] = [
  {
    heading: "A – Health and safety",
    content: `Here are some health and safety issues for people at work:

<ul class="list-disc list-inside space-y-1 mt-2">
<li><strong>Temperature</strong> – too hot or too cold</li>
<li><strong>Passive smoking</strong> – breathing in other people's cigarette smoke</li>
<li><strong>Repetitive strain injury (RSI)</strong> – pain from doing the same movement repeatedly, e.g. data entry</li>
<li><strong>Dangerous machinery</strong> – machines without proper safety guards</li>
<li><strong>Hazardous substances</strong> – dangerous chemicals, acids, etc.</li>
<li><strong>Fire hazards</strong> – things that could cause a fire, e.g. waste paper without fire extinguishers</li>
</ul>

All these things contribute to a bad <strong>working environment</strong>. The government sends officials called <strong>health and safety inspectors</strong> to make sure that factories and offices are safe places to work. They check things like:

<ul class="list-disc list-inside space-y-1 mt-2">
<li><strong>heating and air-conditioning</strong></li>
<li><strong>first aid</strong></li>
<li><strong>fire precautions</strong></li>
</ul>`,
  },
  {
    heading: "B – Bullying and harassment",
    content: `If someone such as a manager <strong>bullies</strong> an employee, they use their position of power to hurt or threaten them, for example verbally. Someone who does this is a <strong>bully</strong>.

<strong>Sexual harassment</strong> is when an employee behaves sexually towards another in a way that they find unwelcome and unacceptable. The related verb is <strong>harass</strong>.`,
  },
  {
    heading: "C – Discrimination",
    content: `If people are treated differently from others in an unfair way, they are <strong>discriminated against</strong>.

If a woman is unfairly treated just because she is a woman, she is a victim of <strong>sex discrimination</strong>. In many organizations, women complain about the <strong>glass ceiling</strong> that allows them to get to a particular level but no further.

If someone is treated unfairly because of their race, they are a victim of <strong>racial discrimination</strong> or <strong>racism</strong>. Offensive remarks about someone's race are <strong>racist</strong> and the person making them is a <strong>racist</strong>.

In the US, <strong>affirmative action</strong> is when help is given in education and employment to groups who were previously discriminated against. In Britain, affirmative action is known as <strong>equal opportunities</strong>.

Some companies have a <strong>dignity at work policy</strong> covering all the issues described in B and C.`,
  },
];

const topic8Practice: PracticeExercise[] = [
  {
    id: "8.1",
    title: "Exercise 8.1 – Match complaints to issues",
    instruction: "Match each employee complaint to the correct health and safety issue. Type the letter (a–f).",
    type: "fill-blank",
    items: [
      {
        id: 1,
        prompt: "My doctor says there's something wrong with my lungs, but I've never smoked. → ___",
        answer: "b",
        hint: "a) temperature  b) passive smoking  c) RSI  d) dangerous machinery  e) hazardous substances  f) fire hazards",
      },
      {
        id: 2,
        prompt: "I do a lot of data entry, and I've started getting really bad pains in my wrists. → ___",
        answer: "c",
        hint: "a–f as above",
      },
      {
        id: 3,
        prompt: "It's either too cold and we freeze, or too hot and we all fall asleep. → ___",
        answer: "a",
        hint: "a–f as above",
      },
      {
        id: 4,
        prompt: "There's all this waste paper but there are no fire extinguishers in the building. → ___",
        answer: "f",
        hint: "a–f as above",
      },
      {
        id: 5,
        prompt: "The containers are leaking; one day someone is going to get acid burns. → ___",
        answer: "e",
        hint: "a–f as above",
      },
      {
        id: 6,
        prompt: "There are no safety guards on the machines; you could easily get your hand caught. → ___",
        answer: "d",
        hint: "a–f as above",
      },
    ],
  },
  {
    id: "8.2",
    title: "Exercise 8.2 – Complete the headlines",
    instruction: "Complete these headlines and articles with the correct words from sections B and C.",
    type: "fill-blank",
    wordBank: [
      "bullying",
      "sexual harassment",
      "harassed",
      "glass ceiling",
      "sex discrimination",
      "racial discrimination",
      "racist",
      "discriminated",
      "affirmative action",
    ],
    items: [
      {
        id: 1,
        prompt:
          "Office manager accused of ___: he shouted at staff, criticised work in front of others and tore up their work.",
        answer: "bullying",
      },
      {
        id: 2,
        prompt: "Shop manageress claims her boss made ___ remarks and sacked her when she objected.",
        answer: "racist",
      },
      { id: 3, prompt: "She claims the company has racially ___ against her.", answer: "discriminated" },
      {
        id: 4,
        prompt: "Four waitresses claim they were repeatedly ___ by male bosses and subjected to sexist remarks.",
        answer: "harassed",
      },
      {
        id: 5,
        prompt: '___ abolished at Texas law school: supporters say it has been "a disaster".',
        answer: "affirmative action",
      },
      {
        id: 6,
        prompt: 'Japanese woman complained about the ___ and did not want to be a "counter lady".',
        answer: "glass ceiling",
      },
      { id: 7, prompt: "She said she was a victim of ___ in her workplace.", answer: "sex discrimination" },
    ],
  },
];

const topic8Test: TestExercise[] = [
  {
    id: "8.1",
    title: "Test 8.1 – Classify the hazards",
    instruction:
      "Match each statement to the correct hazard type: Hazardous substances (HS), Passive smoking (PS), Dangerous machinery (DM), Temperature (T), RSI (RSI), or Fire hazard (FH).",
    type: "classify",
    items: [
      {
        id: 1,
        prompt: "That bottle of acid should be locked in the store room. If it gets on your skin it will burn you.",
        answer: "HS",
      },
      {
        id: 2,
        prompt: "Only two people smoke in our office, but even that makes it difficult for me to breathe.",
        answer: "PS",
      },
      {
        id: 3,
        prompt: "This safety guard MUST be in place at all times. Anyone who removes a guard will be sacked.",
        answer: "DM",
      },
      {
        id: 4,
        prompt: "Last winter it got so cold that we all had to go home until the heating was fixed.",
        answer: "T",
      },
      {
        id: 5,
        prompt: "I've got a pain in my fingers and wrists. It must be due to all that data entry we did last month.",
        answer: "RSI",
      },
      { id: 6, prompt: "Caution! This machine must only be used by a trained operator.", answer: "DM" },
    ],
  },
  {
    id: "8.2",
    title: "Test 8.2 – Choose the best word",
    instruction: "Choose the best word from the brackets to fill the gap.",
    type: "fill-blank",
    items: [
      {
        id: 1,
        prompt: "I've cut my finger. Can you get the ___ aid kit for me? (health / injury / first)",
        answer: "first",
      },
      { id: 2, prompt: "That pile of waste paper is a fire ___. (precaution / hazard / exit)", answer: "hazard" },
      {
        id: 3,
        prompt: "This special keyboard reduces the risk of repetitive ___ injury. (strain / stress / stroke)",
        answer: "strain",
      },
      {
        id: 4,
        prompt: "There is no smoking here because of the dangers of ___ smoking. (passive / passionate / personal)",
        answer: "passive",
      },
      {
        id: 5,
        prompt: "I reported the missing fire extinguisher to the health and ___ inspector. (danger / hazards / safety)",
        answer: "safety",
      },
      {
        id: 6,
        prompt: "The poor air-conditioning system makes it a bad working ___. (environment / place / zone)",
        answer: "environment",
      },
    ],
  },
  {
    id: "8.3",
    title: "Test 8.3 – Correct the mistakes",
    instruction: "Each sentence contains one wrong word. Type the correct word.",
    type: "fill-blank",
    items: [
      { id: 1, prompt: "My last manager was a terrible *bull*. He shouted at us all the time.", answer: "bully" },
      { id: 2, prompt: "He was sacked for sexual *harass* because of his remarks to women.", answer: "harassment" },
      { id: 3, prompt: "The judge said the company had discriminated *about* Mary Chambers.", answer: "against" },
      { id: 4, prompt: "There was a *wooden* ceiling which prevented her from being promoted.", answer: "glass" },
      { id: 5, prompt: "This was obviously a case of serious *woman* discrimination.", answer: "sex" },
      {
        id: 6,
        prompt: "The company said it had an equal *opportune* policy but I don't believe it.",
        answer: "opportunities",
      },
      {
        id: 7,
        prompt: "I was the only black employee and I was a victim of *racism discrimination*.",
        answer: "racial",
      },
      { id: 8, prompt: "We need some affirmative *activation* here like they have in America.", answer: "action" },
    ],
  },
];

// ── Topic 9 content ────────────────────────────────────────────────────

const topic9Theory: TheorySection[] = [
  {
    heading: "A – Managers and executives: UK",
    content: `In a typical UK company, the management structure looks like this:

<ul class="list-disc list-inside space-y-1 mt-2">
<li><strong>Chairman / Chairwoman</strong> – heads the board of directors</li>
<li><strong>Chief Executive / Managing Director</strong> – runs the company day-to-day</li>
<li><strong>Senior executives / Top executives / Executive directors</strong> – e.g. Chief Financial Officer, Marketing Director, Human Resources Director, IT Director, Research Director</li>
<li><strong>Middle managers</strong> – e.g. Accounts Department Manager, Sales Manager, Customer Services Manager</li>
</ul>

All the directors together are the <strong>board</strong>. They meet in the <strong>boardroom</strong>.

<strong>Non-executive directors</strong> are not managers of the company; they are outsiders, often directors of other companies who have particular knowledge of the industry or of particular areas.

The marketing director is the <strong>head of</strong> marketing, the IT director is the <strong>head of</strong> IT, etc. These people <strong>head</strong> or <strong>head up</strong> their departments. Informally, the head of an activity, a department or an organization is its <strong>boss</strong>.

An <strong>executive</strong> or, informally, an <strong>exec</strong>, is usually a manager at quite a high level (e.g. a senior executive).`,
    notes: ['"Executive" can be used in other contexts to suggest luxury, e.g. "executive coach", "executive home".'],
  },
  {
    heading: "B – Managers and executives: US",
    content: `In the US, the top position may be that of <strong>chairman</strong>, <strong>chairwoman</strong> or <strong>president</strong>. This job is often combined with the position of <strong>chief executive officer</strong> or <strong>CEO</strong>.

Some companies have a <strong>chief operating officer (COO)</strong> to take care of the day-to-day running of the company. The finance director may be called the <strong>chief financial officer (CFO)</strong>.

In the US, senior managers in charge of particular areas are often called <strong>vice presidents (VPs)</strong>.

<table class="w-full border-collapse mt-3 mb-3">
<thead><tr class="border-b border-border">
<th class="text-left p-2 text-sm font-semibold">Level</th>
<th class="text-left p-2 text-sm font-semibold">Titles</th>
</tr></thead>
<tbody>
<tr><td class="p-2 text-sm">Top</td><td class="p-2 text-sm">President / CEO</td></tr>
<tr><td class="p-2 text-sm">Operations</td><td class="p-2 text-sm">COO</td></tr>
<tr><td class="p-2 text-sm">Finance</td><td class="p-2 text-sm">CFO</td></tr>
<tr><td class="p-2 text-sm">Departments</td><td class="p-2 text-sm">VP Marketing, VP Human Resources, VP Research</td></tr>
</tbody>
</table>`,
    notes: [
      "BrE: <strong>Managing Director</strong>; AmE: <strong>CEO</strong>",
      "BrE: <strong>Finance Director</strong>; AmE: <strong>CFO</strong>",
    ],
  },
];

const topic9Practice: PracticeExercise[] = [
  {
    id: "9.1",
    title: "Exercise 9.1 – Match tasks to managers",
    instruction: "Which manager from section A would most likely be responsible for each task? Type the job title.",
    type: "fill-blank",
    items: [
      {
        id: 1,
        prompt: "Meet with advertising agency to discuss new advertisements for the company's holidays.",
        answer: "marketing director",
      },
      { id: 2, prompt: "Study possible new holiday destinations in detail.", answer: "research director" },
      { id: 3, prompt: "See the research director to discuss new holiday destinations.", answer: "marketing director" },
      { id: 4, prompt: "Contact newspapers to advertise new jobs.", answer: "human resources director" },
      { id: 5, prompt: "Deal with complaints from customers.", answer: "customer services manager" },
      { id: 6, prompt: "Discuss sales figures with sales team.", answer: "sales manager" },
    ],
  },
  {
    id: "9.2",
    title: "Exercise 9.2 – Complete the organigram",
    instruction: "Read the descriptions and type the correct job title for each person. Use titles from section B.",
    type: "fill-blank",
    items: [
      { id: 1, prompt: "Montebello: 'I'm president and CEO.'", answer: "president and CEO" },
      {
        id: 2,
        prompt: "Gomi and Jones: 'We are not involved in the day-to-day running of the company.'",
        answer: "non-executive directors",
      },
      {
        id: 3,
        prompt: "Smith: 'I work closely with Chang and Roberts, allocating them an annual budget.'",
        answer: "CFO",
      },
      { id: 4, prompt: "Chang: 'I need marketing resources from Smith.'", answer: "VP Marketing" },
      { id: 5, prompt: "Roberts: 'I need research resources from Smith.'", answer: "VP Research" },
      {
        id: 6,
        prompt: "Dawes: 'I head up personnel, on the same level as Chang and Roberts.'",
        answer: "VP Human Resources",
      },
    ],
  },
];

const topic9Test: TestExercise[] = [
  {
    id: "9.1",
    title: "Test 9.1 – Match people to positions",
    instruction:
      "Drag each position on the right to match with the person's description on the left. There is one extra position you don't need.",
    type: "matching",
    pairs: [
      {
        id: 1,
        left: "I'm the director responsible for the company budgets and accounts.",
        right: "Director of Finance",
      },
      { id: 2, left: "I'm not actually a manager, but I do sit on the board.", right: "Non-Executive Director" },
      { id: 3, left: "I'm the CEO and I also chair the board.", right: "Chairperson" },
      { id: 4, left: "I'm in charge of the company's information systems.", right: "IT Director" },
      { id: 5, left: "My team develops new products and tests them.", right: "Director of Research" },
      { id: 6, left: "My team deals with calls from the public and complaints.", right: "Customer Services Manager" },
      {
        id: 7,
        left: "I'm responsible for company recruitment and staff development.",
        right: "Human Resources Director",
      },
      { id: 8, left: "I report to the CFO.", right: "Accounts Manager" },
    ],
    extraWords: ["Production Manager"],
  },
  {
    id: "9.2",
    title: "Test 9.2 – Choose the best word",
    instruction: "Choose the best word from the brackets to fill the gap.",
    type: "fill-blank",
    items: [
      { id: 1, prompt: "Our sales manager heads ___ a department of 40 people. (out / off / up)", answer: "up" },
      { id: 2, prompt: "I work in accounts and Tina is my ___ manager. (line / head / over)", answer: "line" },
      {
        id: 3,
        prompt: "I work for Franz and I think he is the best ___ I've ever had. (boss / executive / director)",
        answer: "boss",
      },
      {
        id: 4,
        prompt: "I was in ___ management for 10 years before I became a director. (medium / middle / vice)",
        answer: "middle",
      },
      { id: 5, prompt: "Tanya Minelli is ___ Marketing at Global Foods in New York. (VP / COO / CFO)", answer: "VP" },
      {
        id: 6,
        prompt: "She's the only woman here who has a ___ executive position. (higher / chief / senior)",
        answer: "senior",
      },
    ],
  },
  {
    id: "9.3",
    title: "Test 9.3 – Find the word",
    instruction: "Find the correct word for each clue.",
    type: "fill-blank",
    items: [
      { id: 1, prompt: "Where company directors hold their meetings → b___", answer: "boardroom" },
      { id: 2, prompt: "Head of a company in the US → p___", answer: "president" },
      { id: 3, prompt: "What 'F' stands for in CFO → F___", answer: "Financial" },
      { id: 4, prompt: "Another term for the chief executive: Managing ___ → D___", answer: "Director" },
    ],
  },
];

// ── All sections ───────────────────────────────────────────────────────

export const businessVocabSections: BusinessVocabSection[] = [
  {
    id: "people-and-work",
    title: "People and Work",
    description: "Jobs, working styles, recruitment, skills, pay, workplaces, careers and business leaders",
    icon: Users,
    image: jobInterviewImg,
    topics: [
      {
        id: "work-and-jobs",
        number: 1,
        title: "Work and Jobs",
        subtopics: ["A What do you do?", 'B Word combinations with "work"', "C Types of job and types of work"],
        theory: topic1Theory,
        practice: topic1Practice,
        test: topic1Test,
      },
      {
        id: "ways-of-working",
        number: 2,
        title: "Ways of Working",
        subtopics: ["A Old and new ways", "B Nice work if you can get it", "C Nature of work"],
        theory: topic2Theory,
        practice: topic2Practice,
        test: topic2Test,
      },
      {
        id: "recruitment-and-selection",
        number: 3,
        title: "Recruitment and Selection",
        subtopics: ["A Recruitment", "B Applying for a job", "C Selection procedures"],
        theory: topic3Theory,
        practice: topic3Practice,
        test: topic3Test,
      },
      {
        id: "skills-and-qualifications",
        number: 4,
        title: "Skills and Qualifications",
        subtopics: ["A Education and training", "B Skilled and unskilled", "C The right person"],
        theory: topic4Theory,
        practice: topic4Practice,
        test: topic4Test,
      },
      {
        id: "pay-and-benefits",
        number: 5,
        title: "Pay and Benefits",
        subtopics: ["A Wages, salary and benefits", "B Compensation 1", "C Compensation 2"],
        theory: topic5Theory,
        practice: topic5Practice,
        test: topic5Test,
      },
      {
        id: "people-and-workplaces",
        number: 6,
        title: "People and Workplaces",
        subtopics: [
          "A Employees and management",
          "B Management and administration",
          "C Labour",
          "D Personnel and human resources",
        ],
        theory: topic6Theory,
        practice: topic6Practice,
        test: topic6Test,
      },
      {
        id: "the-career-ladder",
        number: 7,
        title: "The Career Ladder",
        subtopics: ["A A job for life", "B A job for now", "C In-house staff or freelancers?", "D Losing your job"],
        theory: topic7Theory,
        practice: topic7Practice,
        test: topic7Test,
      },
      {
        id: "problems-at-work",
        number: 8,
        title: "Problems at Work",
        subtopics: ["A Health and safety", "B Bullying and harassment", "C Discrimination"],
        theory: topic8Theory,
        practice: topic8Practice,
        test: topic8Test,
      },
      {
        id: "businesspeople-and-business-leaders",
        number: 9,
        title: "Managers, Executives and Directors",
        subtopics: ["A Managers and executives: UK", "B Managers and executives: US"],
        theory: topic9Theory,
        practice: topic9Practice,
        test: topic9Test,
      },
    ],
  },
  {
    id: "company-structure",
    title: "Company Structure",
    description: "How organizations are structured, from hierarchies to manufacturing and services",
    icon: Building2,
    image: businessMeetingImg,
    topics: [
      { id: "organizations-1", number: 10, title: "Organizations 1", subtopics: [] },
      { id: "organizations-2", number: 11, title: "Organizations 2", subtopics: [] },
      { id: "manufacturing-and-services", number: 12, title: "Manufacturing and Services", subtopics: [] },
    ],
  },
  {
    id: "production",
    title: "Production",
    description: "Innovation, manufacturing processes, materials, suppliers and business philosophies",
    icon: Factory,
    image: businessMeetingImg,
    topics: [
      { id: "innovation-and-invention", number: 13, title: "Innovation and Invention", subtopics: [] },
      { id: "making-things", number: 14, title: "Making Things", subtopics: [] },
      { id: "materials-and-suppliers", number: 15, title: "Materials and Suppliers", subtopics: [] },
      { id: "business-philosophies", number: 16, title: "Business Philosophies", subtopics: [] },
    ],
  },
  {
    id: "marketing",
    title: "Marketing",
    description: "Markets, competitors, products, brands, pricing, distribution, promotion and e-commerce",
    icon: Megaphone,
    image: businessMeetingImg,
    topics: [
      { id: "buyers-sellers-and-the-market", number: 17, title: "Buyers, Sellers and the Market", subtopics: [] },
      { id: "markets-and-competitors", number: 18, title: "Markets and Competitors", subtopics: [] },
      { id: "marketing-and-market-orientation", number: 19, title: "Marketing and Market Orientation", subtopics: [] },
      { id: "products-and-brands", number: 20, title: "Products and Brands", subtopics: [] },
      { id: "price", number: 21, title: "Price", subtopics: [] },
      { id: "place", number: 22, title: "Place", subtopics: [] },
      { id: "promotion", number: 23, title: "Promotion", subtopics: [] },
      { id: "the-internet-and-e-commerce", number: 24, title: "The Internet and E-commerce", subtopics: [] },
    ],
  },
  {
    id: "money",
    title: "Money",
    description: "Sales, costs, profitability, payments, assets, shares, personal finance and trading",
    icon: DollarSign,
    image: businessMeetingImg,
    topics: [
      { id: "sales-and-costs", number: 25, title: "Sales and Costs", subtopics: [] },
      {
        id: "profitability-and-unprofitability",
        number: 26,
        title: "Profitability and Unprofitability",
        subtopics: [],
      },
      { id: "getting-paid", number: 27, title: "Getting Paid", subtopics: [] },
      {
        id: "assets-liabilities-and-the-balance-sheet",
        number: 28,
        title: "Assets, Liabilities and the Balance Sheet",
        subtopics: [],
      },
      { id: "the-bottom-line", number: 29, title: "The Bottom Line", subtopics: [] },
      { id: "share-capital-and-debt", number: 30, title: "Share Capital and Debt", subtopics: [] },
      { id: "personal-finance", number: 31, title: "Personal Finance", subtopics: [] },
      { id: "financial-centres", number: 32, title: "Financial Centres", subtopics: [] },
      { id: "trading", number: 33, title: "Trading", subtopics: [] },
      { id: "indicators-1", number: 34, title: "Indicators 1", subtopics: [] },
      { id: "indicators-2", number: 35, title: "Indicators 2", subtopics: [] },
    ],
  },
  {
    id: "doing-the-right-thing",
    title: "Doing the Right Thing",
    description: "Business ethics, wrongdoing and corruption",
    icon: Scale,
    image: businessMeetingImg,
    topics: [
      { id: "wrongdoing-and-corruption", number: 36, title: "Wrongdoing and Corruption", subtopics: [] },
      { id: "ethics", number: 37, title: "Ethics", subtopics: [] },
    ],
  },
  {
    id: "business-skills",
    title: "Business Skills",
    description: "Time management, stress management, leadership styles and cross-cultural awareness",
    icon: Brain,
    image: businessMeetingImg,
    topics: [
      { id: "time-and-time-management", number: 38, title: "Time and Time Management", subtopics: [] },
      { id: "stress-and-stress-management", number: 39, title: "Stress and Stress Management", subtopics: [] },
      { id: "leadership-and-management-styles", number: 40, title: "Leadership and Management Styles", subtopics: [] },
      { id: "culture", number: 41, title: "Culture", subtopics: [] },
    ],
  },
  {
    id: "communication",
    title: "Communication",
    description: "Telephoning, emails, faxes, meetings, presentations and negotiations",
    icon: Phone,
    image: businessMeetingImg,
    topics: [
      { id: "telephoning", number: 42, title: "Telephoning", subtopics: [] },
      { id: "emails", number: 43, title: "Emails", subtopics: [] },
      { id: "faxes", number: 44, title: "Faxes", subtopics: [] },
      { id: "meetings", number: 45, title: "Meetings", subtopics: [] },
      { id: "presentations", number: 46, title: "Presentations", subtopics: [] },
      { id: "negotiations", number: 47, title: "Negotiations", subtopics: [] },
    ],
  },
];
