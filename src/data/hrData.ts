export interface HRSkill {
  id: string;
  title: string;
  description: string;
  type: 'vocabulary' | 'listening' | 'reading' | 'speaking' | 'grammar';
  content?: boolean;
  audioTrack?: number;
}

export interface HRUnit {
  id: string;
  number: number;
  title: string;
  subtitle: string;
  topics: string[];
  skills: HRSkill[];
}

export const hrUnits: HRUnit[] = [
  {
    id: 'recruitment',
    number: 1,
    title: 'Recruitment',
    subtitle: 'Job descriptions, person specifications & recruitment sources',
    topics: ['Job descriptions', 'Person specifications', 'Recruitment sources and advertising'],
    skills: [
      { id: 'starter', title: 'Starter', description: 'Recruitment process ordering and job description vs person specification categorization', type: 'vocabulary', content: true },
      { id: 'vocabulary', title: 'Vocabulary', description: 'The language of job descriptions, manager verbs, person specification terms and word formation', type: 'vocabulary', content: true },
      { id: 'listening', title: 'Listening', description: 'Recruitment sources discussion and vocabulary from the conversation', type: 'listening', content: true, audioTrack: 1 },
      { id: 'reading', title: 'Reading', description: 'Recruitment sources matching and the benefits of recruitment advertising agencies', type: 'reading', content: true },
      { id: 'speaking', title: 'Speaking & Role-play', description: 'Useful language for exchanging information, making suggestions, agreeing and disagreeing', type: 'speaking', content: true },
    ],
  },
  {
    id: 'selection',
    number: 2,
    title: 'Selection',
    subtitle: 'Job ads, CVs, interviews & ageism',
    topics: ['Job advertisements', 'A curriculum vitae', 'The job interview', 'Ageism'],
    skills: [
      { id: 'starter', title: 'Starter', description: 'Job application statements, advert vocabulary matching and CV structure', type: 'vocabulary', content: true },
      { id: 'vocabulary', title: 'Vocabulary', description: 'CV sections, business letter structure, employment vocabulary and definitions', type: 'vocabulary', content: true },
      { id: 'listening', title: 'Listening', description: 'Interview number matching, call centre problems and sentence completion', type: 'listening', content: true, audioTrack: 2 },
      { id: 'reading', title: 'Reading', description: 'Job advert comprehension, interview tips ordering and word formation', type: 'reading', content: true },
      { id: 'speaking', title: 'Speaking', description: 'Arranging appointments, interview language, letter writing and ageism discussion', type: 'speaking', content: true },
    ],
  },
  {
    id: 'employee-relations',
    number: 3,
    title: 'Employee Relations',
    subtitle: 'Contracts, disciplinary procedures & health and safety',
    topics: ['Employment contracts', 'Disciplinary and grievance procedures', 'Health and safety at work'],
    skills: [
      { id: 'starter', title: 'Starter', description: 'Employee relations vocabulary matching and headline exercises', type: 'vocabulary', content: true },
      { id: 'vocabulary', title: 'Vocabulary', description: 'Employment terms categories, word families, contract language and formal phrases', type: 'vocabulary', content: true },
      { id: 'listening', title: 'Listening', description: 'Terms and conditions discussion, true/false, sentence matching and vocabulary', type: 'listening', content: true, audioTrack: 9 },
      { id: 'reading', title: 'Reading', description: 'Dealing with grievances, health & safety measures and workplace injuries', type: 'reading', content: true },
      { id: 'speaking', title: 'Speaking', description: 'Offer and rejection letters, formal vocabulary, HR headlines and stress factors', type: 'speaking', content: true },
    ],
  },
  {
    id: 'hr-development',
    number: 4,
    title: 'HR Development',
    subtitle: 'Appraisals, training & equal opportunities',
    topics: ['HR development practices', 'Dealing with staff problems', 'Appraisal interviews', 'Training courses', 'Equal opportunities and diversity'],
    skills: [
      { id: 'starter', title: 'Starter', description: 'HR development discussion and staff development practices matching', type: 'vocabulary', content: true },
      { id: 'vocabulary', title: 'Vocabulary', description: 'Appraisal schemes, expressions, diplomatic language and word partnerships', type: 'vocabulary', content: true },
      { id: 'listening', title: 'Listening', description: 'Staff problems, development solutions and appraisal interview report', type: 'listening', content: true, audioTrack: 10 },
      { id: 'reading', title: 'Reading', description: 'Training courses and equal opportunities vs diversity', type: 'reading', content: true },
      { id: 'speaking', title: 'Speaking', description: 'Making recommendations, diplomatic language and appraisal role-play', type: 'speaking', content: true },
    ],
  },
  {
    id: 'reward-and-remuneration',
    number: 5,
    title: 'Reward & Remuneration',
    subtitle: 'Salaries, fringe benefits & salary reviews',
    topics: ['Salaries and fringe benefits', 'Salary reviews'],
    skills: [
      { id: 'starter', title: 'Starter', description: 'Introduction to reward and remuneration', type: 'vocabulary' },
      { id: 'vocabulary', title: 'Vocabulary', description: 'Talking about figures and numbers', type: 'vocabulary' },
      { id: 'listening', title: 'Listening', description: 'Asking for and giving feedback, clarifying', type: 'listening' },
      { id: 'reading', title: 'Reading', description: 'Salary reviews and fringe benefits', type: 'reading' },
      { id: 'speaking', title: 'Speaking', description: 'Agreeing, disagreeing, and interrupting', type: 'speaking' },
    ],
  },
  {
    id: 'industrial-relations',
    number: 6,
    title: 'Industrial Relations',
    subtitle: 'Trade unions, labour relations & wage negotiation',
    topics: ['The role of trade unions', 'Labour relations', 'A wage negotiation'],
    skills: [
      { id: 'starter', title: 'Starter', description: 'Introduction to industrial relations', type: 'vocabulary' },
      { id: 'vocabulary', title: 'Vocabulary', description: 'The language of negotiating, persuading and bargaining', type: 'vocabulary' },
      { id: 'listening', title: 'Listening', description: 'Wage negotiation discussions', type: 'listening' },
      { id: 'reading', title: 'Reading', description: 'Trade unions and labour relations', type: 'reading' },
      { id: 'speaking', title: 'Speaking', description: 'Negotiation role-play', type: 'speaking' },
    ],
  },
];
