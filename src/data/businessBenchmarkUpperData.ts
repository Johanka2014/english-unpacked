export interface BBUpperSkill {
  id: string;
  title: string;
  description: string;
  type: 'reading' | 'listening' | 'writing' | 'speaking' | 'vocabulary' | 'grammar';
  audioTrack?: string; // placeholder for audio file links
  content?: any;
}

export interface BBUpperModule {
  id: string;
  number: number;
  title: string;
  isGrammarWorkshop?: boolean;
  skills: BBUpperSkill[];
}

export const bbUpperModules: BBUpperModule[] = [
  // --- Units 1–4 ---
  {
    id: 'staff-development-and-training',
    number: 1,
    title: 'Staff Development and Training',
    skills: [
      { id: 'reading', title: 'Reading', description: 'Recruitment brochure', type: 'reading' },
      { id: 'listening', title: 'Listening', description: 'Conversation about a training course', type: 'listening', audioTrack: '' },
      { id: 'speaking', title: 'Speaking', description: 'Discussion: Who should pay for training? Preparing a staff training scheme', type: 'speaking' },
      { id: 'vocabulary', title: 'Vocabulary', description: 'Job training: bonus schemes, promotion, training budget, learning goals', type: 'vocabulary' },
      { id: 'grammar', title: 'Grammar', description: 'Expressing personal opinions; Comparison of adjectives', type: 'grammar' },
    ],
  },
  {
    id: 'job-descriptions',
    number: 2,
    title: 'Job Descriptions',
    skills: [
      { id: 'reading', title: 'Reading', description: 'Brief job descriptions; A human resources manager', type: 'reading' },
      { id: 'listening', title: 'Listening', description: 'What people like about their jobs', type: 'listening', audioTrack: '' },
      { id: 'speaking', title: 'Speaking', description: 'Saying what you like/dislike about your job or studies; Making suggestions', type: 'speaking' },
      { id: 'vocabulary', title: 'Vocabulary', description: 'Acronyms for job titles; Job titles; Describing your job; Job descriptions', type: 'vocabulary' },
    ],
  },
  {
    id: 'letters-of-enquiry-and-applications',
    number: 3,
    title: 'Letters of Enquiry and Applications',
    skills: [
      { id: 'reading', title: 'Reading', description: 'Job satisfaction at EMI; How best to apply for jobs', type: 'reading' },
      { id: 'listening', title: 'Listening', description: 'Advice on job applications', type: 'listening', audioTrack: '' },
      { id: 'writing', title: 'Writing', description: 'A letter of enquiry about careers; An email applying for a job', type: 'writing' },
      { id: 'speaking', title: 'Speaking', description: 'Discussion: How to handle job interviews; What makes a great place to work?', type: 'speaking' },
      { id: 'vocabulary', title: 'Vocabulary', description: 'Perks, colleagues, etc.; Asking complex questions; Formal/informal style', type: 'vocabulary' },
    ],
  },
  {
    id: 'telephone-skills',
    number: 4,
    title: 'Telephone Skills',
    skills: [
      { id: 'reading', title: 'Reading', description: 'A telephone quiz; Phone answering tips', type: 'reading' },
      { id: 'listening', title: 'Listening', description: 'Telephone language; Enquiring about a job', type: 'listening', audioTrack: '' },
      { id: 'speaking', title: 'Speaking', description: 'Discussions: Problems using the phone; Telephone skills training; Role-plays: Booking a hotel, Recruiting an assistant', type: 'speaking' },
      { id: 'vocabulary', title: 'Vocabulary', description: 'Complex questions; Talking at a business meeting', type: 'vocabulary' },
    ],
  },
  {
    id: 'grammar-workshop-1',
    number: 0,
    title: 'Grammar Workshop 1 (Units 1–4)',
    isGrammarWorkshop: true,
    skills: [
      { id: 'grammar', title: 'Grammar', description: 'Comparison of adjectives; Forming questions; Asking complex questions; Formal/informal style', type: 'grammar' },
    ],
  },

  // --- Units 5–8 ---
  {
    id: 'promotional-activities-and-branding',
    number: 5,
    title: 'Promotional Activities and Branding',
    skills: [
      { id: 'reading', title: 'Reading', description: 'Promoting AXE; The power of brands', type: 'reading' },
      { id: 'listening', title: 'Listening', description: "Supermarkets' own brands", type: 'listening', audioTrack: '' },
      { id: 'speaking', title: 'Speaking', description: 'Discussions: Advantages and disadvantages of promotional activities; Brands; Role-play: Promoting a shampoo', type: 'speaking' },
      { id: 'vocabulary', title: 'Vocabulary', description: 'Promotional activities; Marketing terms: brands, logo, etc.', type: 'vocabulary' },
    ],
  },
  {
    id: 'new-product-development',
    number: 6,
    title: 'New Product Development',
    skills: [
      { id: 'reading', title: 'Reading', description: "Developing and launching 'chai'", type: 'reading' },
      { id: 'listening', title: 'Listening', description: 'Developing and launching a new product', type: 'listening', audioTrack: '' },
      { id: 'speaking', title: 'Speaking', description: 'Discussion: New products; Launching a product; Role-play: Promoting a new service', type: 'speaking' },
      { id: 'vocabulary', title: 'Vocabulary', description: 'Entrepreneurial, upmarket, etc.; Marketing vocabulary; Expressing purpose', type: 'vocabulary' },
    ],
  },
  {
    id: 'a-stand-at-a-trade-fair',
    number: 7,
    title: 'A Stand at a Trade Fair',
    skills: [
      { id: 'reading', title: 'Reading', description: 'The International Food Exhibition', type: 'reading' },
      { id: 'listening', title: 'Listening', description: 'Conversation with a trade-fair organiser', type: 'listening', audioTrack: '' },
      { id: 'writing', title: 'Writing', description: 'An email giving information; A fax answering enquiries; A memo informing staff', type: 'writing' },
      { id: 'speaking', title: 'Speaking', description: 'Discussion: Trade fairs; Forming questions', type: 'speaking' },
    ],
  },
  {
    id: 'establishing-relationships-and-negotiating',
    number: 8,
    title: 'Establishing Relationships and Negotiating',
    skills: [
      { id: 'reading', title: 'Reading', description: 'Asking questions about a product', type: 'reading' },
      { id: 'listening', title: 'Listening', description: 'Establishing a business relationship; Negotiating', type: 'listening', audioTrack: '' },
      { id: 'writing', title: 'Writing', description: 'An email summarising an agreement', type: 'writing' },
      { id: 'speaking', title: 'Speaking', description: 'Discussion: New products and negotiating; Negotiating a deal', type: 'speaking' },
      { id: 'vocabulary', title: 'Vocabulary', description: 'Stock, mark-up, sale or return, overheads, etc.; Terms and conditions', type: 'vocabulary' },
      { id: 'grammar', title: 'Grammar', description: 'First conditional', type: 'grammar' },
    ],
  },
  {
    id: 'grammar-workshop-2',
    number: 0,
    title: 'Grammar Workshop 2 (Units 5–8)',
    isGrammarWorkshop: true,
    skills: [
      { id: 'grammar', title: 'Grammar', description: 'Expressing purpose; First conditional; Forming questions', type: 'grammar' },
    ],
  },

  // --- Units 9–12 ---
  {
    id: 'going-it-alone',
    number: 9,
    title: 'Going It Alone',
    skills: [
      { id: 'reading', title: 'Reading', description: 'Buying into a franchise; Advice on buying a franchise', type: 'reading' },
      { id: 'listening', title: 'Listening', description: 'Why start your own business?; Questions to ask a franchiser', type: 'listening', audioTrack: '' },
      { id: 'writing', title: 'Writing', description: 'A letter to a franchiser', type: 'writing' },
      { id: 'speaking', title: 'Speaking', description: 'Discussion: Why start your own business?', type: 'speaking' },
      { id: 'vocabulary', title: 'Vocabulary', description: 'Make a go, expertise, premises, mortgage, etc.; Financial terms', type: 'vocabulary' },
      { id: 'grammar', title: 'Grammar', description: 'Tenses in time clauses', type: 'grammar' },
    ],
  },
  {
    id: 'financing-the-start-up',
    number: 10,
    title: 'Financing the Start-Up',
    skills: [
      { id: 'getting-started', title: 'Getting Started', description: 'Match statements with people; Discussion: If you started your own business...', type: 'speaking', content: true },
      { id: 'vocabulary', title: 'Vocabulary', description: 'Start-up opportunities: raise, borrow, carry out, launch, cover, write, repay + business collocations', type: 'vocabulary', content: true },
      { id: 'listening-1', title: 'Listening: Food Consultancy', description: 'Jane Milton talks about setting up notjustfood consultancy — complete the notes', type: 'listening', audioTrack: '' },
      { id: 'reading', title: 'Reading: Raising Finance', description: 'Bank loans, friends & family, venture capital — match statements to paragraphs', type: 'reading' },
      { id: 'speaking', title: 'Role-play: Business Advice', description: 'Entrepreneurs consult business advisors on financing a small printing business', type: 'speaking' },
      { id: 'listening-2', title: 'Listening: Multimedia Company', description: 'Lewis Bronze on setting up Espresso Ltd — multiple-choice questions', type: 'listening', audioTrack: '' },
      { id: 'talking-point', title: 'Talking Point', description: 'What is important when looking for finance to start a business?', type: 'speaking' },
    ],
  },
  {
    id: 'starting-up-in-a-new-location',
    number: 11,
    title: 'Starting Up in a New Location',
    skills: [
      { id: 'reading', title: 'Reading', description: 'A new location in Scotland', type: 'reading' },
      { id: 'writing', title: 'Writing', description: 'A proposal', type: 'writing' },
      { id: 'speaking', title: 'Speaking', description: 'Discussions: Extra information; What is important when starting in a new location?; Which city?', type: 'speaking' },
      { id: 'vocabulary', title: 'Vocabulary', description: 'Agents vs. distributors vs. joint ventures', type: 'vocabulary' },
    ],
  },
  {
    id: 'presenting-your-business-idea',
    number: 12,
    title: 'Presenting Your Business Idea',
    skills: [
      { id: 'reading', title: 'Reading', description: 'Making the most of presentations', type: 'reading' },
      { id: 'listening', title: 'Listening', description: 'Signalling the parts of a presentation', type: 'listening', audioTrack: '' },
      { id: 'speaking', title: 'Speaking', description: 'Structuring a presentation; A brief presentation; Role-play: Presenting your business idea', type: 'speaking' },
      { id: 'vocabulary', title: 'Vocabulary', description: 'Equipment for presentations; Modal verbs', type: 'vocabulary' },
    ],
  },
  {
    id: 'grammar-workshop-3',
    number: 0,
    title: 'Grammar Workshop 3 (Units 9–12)',
    isGrammarWorkshop: true,
    skills: [
      { id: 'grammar', title: 'Grammar', description: 'Tenses in time clauses; The second conditional; Comparing and contrasting ideas; Modal verbs', type: 'grammar' },
    ],
  },

  // --- Units 13–16 ---
  {
    id: 'business-hotels-and-sales',
    number: 13,
    title: 'Business Hotels and Sales',
    skills: [
      { id: 'reading', title: 'Reading', description: 'Business accommodation', type: 'reading' },
      { id: 'listening', title: 'Listening', description: 'Conference problems', type: 'listening', audioTrack: '' },
      { id: 'writing', title: 'Writing', description: 'The results of a survey', type: 'writing' },
      { id: 'speaking', title: 'Speaking', description: 'Discussion: The needs of the business traveller; Mini-presentation: business travel', type: 'speaking' },
      { id: 'vocabulary', title: 'Vocabulary', description: 'Hotel vocabulary: subscribers, chain, etc.', type: 'vocabulary' },
    ],
  },
  {
    id: 'business-conferences',
    number: 14,
    title: 'Business Conferences',
    skills: [
      { id: 'reading', title: 'Reading', description: 'A conference programme; A destination management company', type: 'reading' },
      { id: 'listening', title: 'Listening', description: 'Arranging conference facilities', type: 'listening', audioTrack: '' },
      { id: 'writing', title: 'Writing', description: 'Networking at a conference', type: 'writing' },
      { id: 'speaking', title: 'Speaking', description: 'Planning a conference; Role-play: Networking; Discussion: Choosing a conference destination', type: 'speaking' },
      { id: 'vocabulary', title: 'Vocabulary', description: 'Conference vocabulary: keynote speech, tailor, etc.; Networking, reinventing, enhancing', type: 'vocabulary' },
    ],
  },
  {
    id: 'reports',
    number: 15,
    title: 'Reports',
    skills: [
      { id: 'reading', title: 'Reading', description: 'The Forest Conference Centre', type: 'reading' },
      { id: 'listening', title: 'Listening', description: 'A report on the use of private company jets', type: 'listening', audioTrack: '' },
      { id: 'writing', title: 'Writing', description: 'A report on the use of private company jets', type: 'writing' },
      { id: 'speaking', title: 'Speaking', description: 'Saying what charts show; Discussion: Private jets', type: 'speaking' },
    ],
  },
  {
    id: 'business-meetings',
    number: 16,
    title: 'Business Meetings',
    skills: [
      { id: 'reading', title: 'Reading', description: 'Think before you meet', type: 'reading' },
      { id: 'listening', title: 'Listening', description: 'Talking about meetings', type: 'listening', audioTrack: '' },
      { id: 'writing', title: 'Writing', description: 'A report about meetings; An email agreeing to a meeting', type: 'writing' },
      { id: 'speaking', title: 'Speaking', description: 'Discussion: Meetings; A survey of meetings; Speaking at a meeting; Role-play: A finance meeting', type: 'speaking' },
      { id: 'vocabulary', title: 'Vocabulary', description: 'Types of meeting; Meeting vocabulary; Verbs for meetings; Expressing opinions', type: 'vocabulary' },
      { id: 'grammar', title: 'Grammar', description: 'Using the passive', type: 'grammar' },
    ],
  },
  {
    id: 'grammar-workshop-4',
    number: 0,
    title: 'Grammar Workshop 4 (Units 13–16)',
    isGrammarWorkshop: true,
    skills: [
      { id: 'grammar', title: 'Grammar', description: 'While and whereas for contrasting ideas; Modal verbs: perfect forms; Passives 1 & 2; Too/enough', type: 'grammar' },
    ],
  },

  // --- Units 17–20 ---
  {
    id: 'new-technologies-and-change',
    number: 17,
    title: 'New Technologies and Change',
    skills: [
      { id: 'reading', title: 'Reading', description: 'The Internet and change; Change at Adobe Systems', type: 'reading' },
      { id: 'listening', title: 'Listening', description: 'Changes at work', type: 'listening', audioTrack: '' },
      { id: 'speaking', title: 'Speaking', description: 'Discussions: New technologies and change; What is important when making changes?; Role-play: Introducing new technology', type: 'speaking' },
      { id: 'vocabulary', title: 'Vocabulary', description: 'Vocabulary for expressing changes; New technology, customer base', type: 'vocabulary' },
    ],
  },
  {
    id: 'using-the-internet',
    number: 18,
    title: 'Using the Internet',
    skills: [
      { id: 'reading', title: 'Reading', description: 'Website design', type: 'reading' },
      { id: 'listening', title: 'Listening', description: 'E-shopping at Tesco.com', type: 'listening', audioTrack: '' },
      { id: 'writing', title: 'Writing', description: 'Email requesting an upgrade to a website', type: 'writing' },
      { id: 'speaking', title: 'Speaking', description: 'Discussions: Your favourite websites; What is important when buying over the Internet?', type: 'speaking' },
      { id: 'vocabulary', title: 'Vocabulary', description: 'Knowledge worker, licence fees, applications, etc.; Computers; Internet; Straightforward, target audience', type: 'vocabulary' },
    ],
  },
  {
    id: 'flexible-working',
    number: 19,
    title: 'Flexible Working',
    skills: [
      { id: 'reading', title: 'Reading', description: 'Reading a report; A staff survey', type: 'reading' },
      { id: 'listening', title: 'Listening', description: 'A working party', type: 'listening', audioTrack: '' },
      { id: 'writing', title: 'Writing', description: 'Report on staff survey to modernise office', type: 'writing' },
      { id: 'speaking', title: 'Speaking', description: 'Discussion: The results of a survey', type: 'speaking' },
      { id: 'vocabulary', title: 'Vocabulary', description: 'Flexible working; Expressing numbers; Reported speech; Reporting verbs', type: 'vocabulary' },
    ],
  },
  {
    id: 'offshoring-and-outsourcing',
    number: 20,
    title: 'Offshoring and Outsourcing',
    skills: [
      { id: 'reading', title: 'Reading', description: 'Can outsourcing work for small businesses?; Offshoring from Britain', type: 'reading' },
      { id: 'listening', title: 'Listening', description: 'What should we offshore?', type: 'listening', audioTrack: '' },
      { id: 'speaking', title: 'Speaking', description: 'Discussion: Advantages/disadvantages of offshoring; Role-plays: Offshoring parts of a clothing manufacturer; Outsourcing to reduce risk', type: 'speaking' },
      { id: 'vocabulary', title: 'Vocabulary', description: 'Discussion phrases; Expressing causes', type: 'vocabulary' },
    ],
  },
  {
    id: 'grammar-workshop-5',
    number: 0,
    title: 'Grammar Workshop 5 (Units 17–20)',
    isGrammarWorkshop: true,
    skills: [
      { id: 'grammar', title: 'Grammar', description: 'Used to; Articles; Reported speech', type: 'grammar' },
    ],
  },

  // --- Units 21–24 ---
  {
    id: 'customer-loyalty',
    number: 21,
    title: 'Customer Loyalty',
    skills: [
      { id: 'reading', title: 'Reading', description: 'From satisfaction to loyalty', type: 'reading' },
      { id: 'listening', title: 'Listening', description: 'A supermarket and customer loyalty', type: 'listening', audioTrack: '' },
      { id: 'speaking', title: 'Speaking', description: 'Discussion: What makes you a loyal customer?', type: 'speaking' },
      { id: 'vocabulary', title: 'Vocabulary', description: 'Bond, revenue, vendor, etc.; Relative pronouns', type: 'vocabulary' },
    ],
  },
  {
    id: 'communication-with-customers',
    number: 22,
    title: 'Communication with Customers',
    skills: [
      { id: 'reading', title: 'Reading', description: 'Turning complaints to your advantage; Customer communication at Not Just Food', type: 'reading' },
      { id: 'listening', title: 'Listening', description: 'Communicating with customers at Espresso; Training in customer communication skills', type: 'listening', audioTrack: '' },
      { id: 'speaking', title: 'Speaking', description: 'Role-play: A staff meeting; Discussion: Effective methods of communication; Advice on dealing with complaints; Role-play: Dealing with losing customers', type: 'speaking' },
    ],
  },
  {
    id: 'corresponding-with-customers',
    number: 23,
    title: 'Corresponding with Customers',
    skills: [
      { id: 'reading', title: 'Reading', description: 'A letter about a new service', type: 'reading' },
      { id: 'listening', title: 'Listening', description: 'A letter from a dissatisfied customer', type: 'listening', audioTrack: '' },
      { id: 'writing', title: 'Writing', description: 'A letter about a new service; A letter of complaint', type: 'writing' },
      { id: 'speaking', title: 'Speaking', description: 'Discussion: Communicating new products and services, keeping customers happy', type: 'speaking' },
    ],
  },
  {
    id: 'a-business-seminar',
    number: 24,
    title: 'A Business Seminar',
    skills: [
      { id: 'reading', title: 'Reading', description: 'Advertisement for a business seminar', type: 'reading' },
      { id: 'listening', title: 'Listening', description: 'Speakers at a business seminar', type: 'listening', audioTrack: '' },
      { id: 'writing', title: 'Writing', description: 'A short talk', type: 'writing' },
      { id: 'speaking', title: 'Speaking', description: 'Discussion: What you can learn from other people in business; Speaking at a business seminar', type: 'speaking' },
    ],
  },
  {
    id: 'grammar-workshop-6',
    number: 0,
    title: 'Grammar Workshop 6 (Units 21–24)',
    isGrammarWorkshop: true,
    skills: [
      { id: 'grammar', title: 'Grammar', description: 'Relative pronouns; Expressing causes; Expressing results', type: 'grammar' },
    ],
  },
];
