export interface BusinessBenchmarkSkill {
  id: string;
  title: string;
  description: string;
  content?: any;
}

export interface BusinessBenchmarkModule {
  id: string;
  number: number;
  title: string;
  skills: BusinessBenchmarkSkill[];
}

export const businessBenchmarkModules: BusinessBenchmarkModule[] = [
  {
    id: 'the-working-day',
    number: 1,
    title: 'The Working Day',
    skills: [
      { id: 'reading', title: 'Reading', description: 'Changing places: job swapping at work', content: { type: 'reading-changing-places' } },
      { id: 'listening', title: 'Listening', description: 'Being a PA', content: { type: 'listening-pa' } },
      
      { id: 'vocabulary', title: 'Vocabulary', description: 'Job titles and describing jobs; Names of company departments', content: { type: 'department-matching' } },
      { id: 'grammar', title: 'Grammar', description: 'Present simple and present continuous; Time expressions', content: { type: 'grammar-workshop' } },
    ],
  },
  {
    id: 'corporate-culture',
    number: 2,
    title: 'Corporate Culture',
    skills: [
      { id: 'reading', title: 'Reading', description: 'What kind of company culture would suit you? Reading and answering a quiz; A company culture statement', content: { type: 'reading-corporate-culture' } },
      { id: 'listening', title: 'Listening', description: 'Company culture: a conversation between two employees', content: { type: 'listening-corporate-culture' } },
      { id: 'speaking', title: 'Speaking', description: 'Asking questions about companies', content: { type: 'speaking-corporate-culture' } },
      { id: 'vocabulary', title: 'Vocabulary', description: 'Finding and recording collocations', content: { type: 'vocab-corporate-culture' } },
      { id: 'grammar', title: 'Grammar', description: 'Questions with and without auxiliaries', content: { type: 'grammar-corporate-culture' } },
    ],
  },
  {
    id: 'company-history',
    number: 3,
    title: 'Company History',
    skills: [
      { id: 'getting-started', title: 'Getting Started', description: 'Match famous companies with the date they were set up', content: { type: 'getting-started-company-history' } },
      { id: 'reading', title: 'Reading', description: 'Levi Strauss: an article on company history; Hongdou: an article on a Chinese clothing company', content: { type: 'reading-company-history' } },
      { id: 'grammar', title: 'Grammar', description: 'Past simple; Regular and irregular verbs; Question forms', content: { type: 'grammar-company-history' } },
      { id: 'reading-2', title: 'Reading 2', description: 'Hongdou: an article on a Chinese clothing company', content: { type: 'reading-hongdou' } },
      { id: 'listening', title: 'Listening', description: 'Joseph Rowntree: a business studies lecture' },
      { id: 'speaking', title: 'Speaking', description: 'Asking about products: past simple questions' },
    ],
  },
  {
    id: 'the-internet',
    number: 4,
    title: 'The Internet',
    skills: [
      { id: 'reading', title: 'Reading', description: 'Designing your website: an article' },
      { id: 'listening', title: 'Listening', description: 'Email addresses' },
      { id: 'writing', title: 'Writing', description: 'Set phrases for emails and letters; Writing emails: formal and informal style' },
      { id: 'speaking', title: 'Speaking', description: 'Discussion: how to design a website' },
      { id: 'vocabulary', title: 'Vocabulary', description: 'Email and website terms' },
    ],
  },
  {
    id: 'describing-equipment',
    number: 5,
    title: 'Describing Equipment',
    skills: [
      { id: 'reading', title: 'Reading', description: 'Leasing equipment: a web page; Problems with equipment: emails and headings on a form' },
      { id: 'listening', title: 'Listening', description: 'Listening to descriptions of gadgets' },
      { id: 'writing', title: 'Writing', description: 'Filling in a form' },
      { id: 'speaking', title: 'Speaking', description: 'Describing objects when you don\'t know the name' },
      { id: 'vocabulary', title: 'Vocabulary', description: 'Vocabulary to describe objects: component parts, shapes, materials; Office equipment; Describing problems with equipment' },
    ],
  },
  {
    id: 'processes-and-procedures',
    number: 6,
    title: 'Processes and Procedures',
    skills: [
      { id: 'reading', title: 'Reading', description: 'Waratah: an article on an Australian clothing company' },
      { id: 'listening', title: 'Listening', description: 'Chanel No 5: an interview about a production process; Office procedures: a conversation' },
      { id: 'speaking', title: 'Speaking', description: 'Role-play: interviewing a company owner' },
      { id: 'vocabulary', title: 'Vocabulary', description: 'Verbs to describe processes' },
      { id: 'grammar', title: 'Grammar', description: 'The present passive' },
    ],
  },
  {
    id: 'distribution-and-delivery',
    number: 7,
    title: 'Distribution and Delivery',
    skills: [
      { id: 'reading', title: 'Reading', description: 'Selling your product abroad: an article' },
      { id: 'listening', title: 'Listening', description: 'Enquiring about orders and deliveries; Chasing an order: telephone conversations' },
      { id: 'writing', title: 'Writing', description: 'Phone messages' },
      { id: 'speaking', title: 'Speaking', description: 'Role-play: making a telephone call to a supplier' },
      { id: 'vocabulary', title: 'Vocabulary', description: 'Telephone language: completing a quiz' },
      { id: 'grammar', title: 'Grammar', description: 'Modal verbs of obligation' },
    ],
  },
  {
    id: 'advertising-and-marketing',
    number: 8,
    title: 'Advertising and Marketing',
    skills: [
      { id: 'reading', title: 'Reading', description: 'Descriptions of advertising media; Singapore Airlines: an article on the branding of an airline' },
      { id: 'listening', title: 'Listening', description: 'Methods of advertising: an interview with the director of an advertising agency' },
      { id: 'speaking', title: 'Speaking', description: 'Describing brands and markets; Discussing different advertising methods and techniques' },
      { id: 'vocabulary', title: 'Vocabulary', description: 'Vocabulary to talk about advertising and marketing; Language to describe cause and effect' },
    ],
  },
  {
    id: 'making-arrangements',
    number: 9,
    title: 'Making Arrangements',
    skills: [
      { id: 'reading', title: 'Reading', description: 'Making and changing appointments: voicemail messages and phone conversations; Future intentions and predictions: short extracts' },
      { id: 'speaking', title: 'Speaking', description: 'Role-play: making an appointment; Role-play: planning a sales event' },
      { id: 'vocabulary', title: 'Vocabulary', description: 'Language for making appointments' },
      { id: 'grammar', title: 'Grammar', description: 'Present continuous for future arrangements; will and going to future forms' },
    ],
  },
  {
    id: 'transport',
    number: 10,
    title: 'Transport',
    skills: [
      { id: 'reading', title: 'Reading', description: 'Travel arrangements: notices and short messages; Eurostar: an article on train travel' },
      { id: 'listening', title: 'Listening', description: 'Car clubs: a radio interview' },
      { id: 'vocabulary', title: 'Vocabulary', description: 'Vocabulary for air travel; Guessing unknown vocabulary through contrast words' },
    ],
  },
  {
    id: 'business-accommodation',
    number: 11,
    title: 'Business Accommodation',
    skills: [
      { id: 'reading', title: 'Reading', description: 'Hotel advertisements; Capsule hotels: an article on a special type of hotel' },
      { id: 'listening', title: 'Listening', description: 'Distinguishing polite and rude intonation' },
      { id: 'writing', title: 'Writing', description: 'Writing an email or fax to a hotel' },
      { id: 'speaking', title: 'Speaking', description: 'Describing hotels; Role-play: at the hotel reception' },
      { id: 'vocabulary', title: 'Vocabulary', description: 'Vocabulary to describe hotels and hotel facilities' },
    ],
  },
  {
    id: 'out-of-the-office',
    number: 12,
    title: 'Out of the Office',
    skills: [
      { id: 'reading', title: 'Reading', description: 'Thinking outside the box: an article on offsite meetings' },
      { id: 'listening', title: 'Listening', description: 'Two colleagues choosing a venue; A welcome speech at a conference' },
      { id: 'speaking', title: 'Speaking', description: 'Role-play: finding out about conference facilities; Discussing how and where to make key decisions' },
      { id: 'vocabulary', title: 'Vocabulary', description: 'Guessing vocabulary from context' },
      { id: 'grammar', title: 'Grammar', description: 'Comparatives and superlatives' },
    ],
  },
  {
    id: 'developing-a-network',
    number: 13,
    title: 'Developing a Network',
    skills: [
      { id: 'reading', title: 'Reading', description: 'Business networking: an article' },
      { id: 'listening', title: 'Listening', description: 'Conversations when meeting contacts' },
      { id: 'speaking', title: 'Speaking', description: 'Making small talk; Giving a short speech to introduce a company' },
      { id: 'vocabulary', title: 'Vocabulary', description: 'Guessing vocabulary from context' },
      { id: 'grammar', title: 'Grammar', description: 'Present perfect and past simple' },
    ],
  },
  {
    id: 'cultural-issues',
    number: 14,
    title: 'Cultural Issues',
    skills: [
      { id: 'reading', title: 'Reading', description: 'Marketing in China: an article; Doing business in Finland: an extract from a guidebook' },
      { id: 'vocabulary', title: 'Vocabulary', description: 'Vocabulary to describe gifts: verb-noun collocations' },
    ],
  },
  {
    id: 'teamwork',
    number: 15,
    title: 'Teamwork',
    skills: [
      { id: 'reading', title: 'Reading', description: 'Team-building events; Kaizen: an article' },
      { id: 'writing', title: 'Writing', description: 'Creating good teams: a presentation' },
      { id: 'speaking', title: 'Speaking', description: 'Discussing teams and team projects' },
      { id: 'vocabulary', title: 'Vocabulary', description: 'Vocabulary to describe aims and achievements; Word-building' },
    ],
  },
  {
    id: 'entertaining',
    number: 16,
    title: 'Entertaining',
    skills: [
      { id: 'reading', title: 'Reading', description: 'A restaurant review; Business clients' },
      { id: 'writing', title: 'Writing', description: 'Writing a thank you letter to a host' },
      { id: 'speaking', title: 'Speaking', description: 'Discussing ways of entertaining visitors; Telling a visitor about an event' },
      { id: 'vocabulary', title: 'Vocabulary', description: 'Ways of describing food' },
      { id: 'grammar', title: 'Grammar', description: 'Countable and uncountable nouns; Expressions of quantity' },
    ],
  },
  {
    id: 'describing-trends',
    number: 17,
    title: 'Describing Trends',
    skills: [
      { id: 'reading', title: 'Reading', description: 'Interpreting bar charts' },
      { id: 'listening', title: 'Listening', description: 'Listening to statistical information: short extracts' },
      { id: 'speaking', title: 'Speaking', description: 'Describing figures and trends' },
      { id: 'vocabulary', title: 'Vocabulary', description: 'Vocabulary to describe graphs and charts; Describing trends' },
      { id: 'grammar', title: 'Grammar', description: 'Adjectives and adverbs; Comparisons' },
    ],
  },
  {
    id: 'company-finances',
    number: 18,
    title: 'Company Finances',
    skills: [
      { id: 'reading', title: 'Reading', description: 'Halma: a secretive success: an article' },
      { id: 'writing', title: 'Writing', description: 'A presentation by a company finance director' },
      { id: 'speaking', title: 'Speaking', description: 'Discussing company information' },
      { id: 'vocabulary', title: 'Vocabulary', description: 'Finance vocabulary' },
      { id: 'grammar', title: 'Grammar', description: 'Pronouns and reference words' },
    ],
  },
  {
    id: 'investments',
    number: 19,
    title: 'Investments',
    skills: [
      { id: 'reading', title: 'Reading', description: 'Shares and the stock exchange: a web page; Short articles from the business news; Men\'s and women\'s investments: an article' },
      { id: 'speaking', title: 'Speaking', description: 'Role-play: a conversation with a financial adviser' },
      { id: 'vocabulary', title: 'Vocabulary', description: 'Stocks and shares vocabulary; Guessing unknown words from context' },
    ],
  },
  {
    id: 'starting-up',
    number: 20,
    title: 'Starting Up',
    skills: [
      { id: 'reading', title: 'Reading', description: 'Smoothie drinks: reading and comparing two articles; Kalido: an article on funding' },
      { id: 'listening', title: 'Listening', description: 'Radio interview: the marketing director of a business support service' },
      { id: 'writing', title: 'Writing', description: 'Writing letters to express interest in a new product' },
      { id: 'speaking', title: 'Speaking', description: 'Giving a summary of an article' },
      { id: 'vocabulary', title: 'Vocabulary', description: 'Collocation sets about time and money' },
      { id: 'grammar', title: 'Grammar', description: 'which/who/that/where clauses' },
    ],
  },
  {
    id: 'job-applications',
    number: 21,
    title: 'Job Applications',
    skills: [
      { id: 'reading', title: 'Reading', description: 'Writing your CV: an extract from a book; Online recruitment' },
      { id: 'writing', title: 'Writing', description: 'Letter applying for a job; Letter inviting a candidate for interview; Letters giving good and bad news' },
      { id: 'speaking', title: 'Speaking', description: 'Discussing what to include in a CV' },
      { id: 'vocabulary', title: 'Vocabulary', description: 'Headings for CVs; Describing application procedures' },
    ],
  },
  {
    id: 'recruitment',
    number: 22,
    title: 'Recruitment',
    skills: [
      { id: 'reading', title: 'Reading', description: 'Preparing for an interview: extract from a book giving advice; A Christmas test: an article' },
      { id: 'speaking', title: 'Speaking', description: 'Discussing applicants for a post; Hypothesising' },
      { id: 'vocabulary', title: 'Vocabulary', description: 'Employment vocabulary' },
      { id: 'grammar', title: 'Grammar', description: 'First and second conditionals' },
    ],
  },
  {
    id: 'staff-development',
    number: 23,
    title: 'Staff Development',
    skills: [
      { id: 'reading', title: 'Reading', description: 'Advertisements for training courses; A memo and an advert; Centre Circle: an article' },
      { id: 'listening', title: 'Listening', description: '360 degree feedback: a radio interview' },
      { id: 'writing', title: 'Writing', description: 'Filling in a form; Writing an email to book a place on a course' },
      { id: 'speaking', title: 'Speaking', description: 'Discussing ways of giving feedback to staff' },
      { id: 'vocabulary', title: 'Vocabulary', description: 'Sports vocabulary in business' },
    ],
  },
  {
    id: 'staff-facts-and-figures',
    number: 24,
    title: 'Staff Facts and Figures',
    skills: [
      { id: 'reading', title: 'Reading', description: 'Use of emails: a business report; The right treatment for absentees: an article' },
      { id: 'writing', title: 'Writing', description: 'Writing part of a business report' },
      { id: 'speaking', title: 'Speaking', description: 'Doing a skills audit; Discussing company policies on absenteeism' },
      { id: 'grammar', title: 'Grammar', description: 'Reported speech' },
    ],
  },
];
