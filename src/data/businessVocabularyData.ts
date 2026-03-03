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
      { id: 'ways-of-working', number: 2, title: 'Ways of Working', subtopics: ['A Old and new ways', 'B Teleworking', 'C Flexibility'] },
      { id: 'recruitment-and-selection', number: 3, title: 'Recruitment and Selection', subtopics: ['A Recruitment', 'B Applying for a job', 'C Selection procedures'] },
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
