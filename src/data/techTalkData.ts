// Tech Talk Intermediate — course data
// Sources: Tech Talk Intermediate Student's Book + Workbook + Teacher's Book (Oxford / Hollett & Sydes)
// Each unit pairs the two SB topic sections with a follow-up Workbook practice section.
// The Teacher's Book provides answer keys and audio scripts which are surfaced inline.

export type TTActivityType =
  | 'intro'
  | 'discussion'
  | 'audio'
  | 'reading'
  | 'matching'
  | 'multiple-choice'
  | 'fill-blanks'
  | 'word-list'
  | 'language-note'
  | 'task'
  | 'note';

export interface TTMatchingPair { id: number; left: string; right: string }
export interface TTMCQ { question: string; options: string[]; answerIndex: number }
export interface TTBlank { prompt: string; answer: string }

export interface TTActivity {
  type: TTActivityType;
  title?: string;
  body?: string;
  bullets?: string[];
  track?: string;          // audio track ref (e.g. "1.1")
  script?: string[];       // optional audio transcript (Teacher's Book)
  passage?: string[];
  pairs?: TTMatchingPair[];
  mcq?: TTMCQ[];
  blanks?: TTBlank[];
  words?: string[];
  answers?: string[];      // freeform answer key bullets revealed on demand
  teacherTip?: string;     // from Teacher's Book
}

export interface TTSection {
  id: string;
  title: string;
  description: string;
  source: 'SB' | 'WB';      // Student's Book or Workbook
  type: 'language' | 'communication' | 'writing' | 'reading' | 'vocabulary' | 'practice';
  hasAudio?: boolean;
  activities: TTActivity[];
}

export interface TTUnit {
  id: string;
  number: number;
  title: string;
  subtitle: string;
  sections: TTSection[];
}

const placeholderWB = (focus: string): TTSection => ({
  id: 'workbook-practice',
  title: 'Workbook practice',
  description: `Extra activities reinforcing ${focus}.`,
  source: 'WB',
  type: 'practice',
  activities: [
    { type: 'note', title: 'Workbook activities', body:
      'Detailed Workbook drills (matching, gap-fills, crosswords, sentence transformations) for this unit will be added shortly. In the meantime use the prompts below for extra practice.' },
    { type: 'task', title: 'Self-study task', body: `Write 6–8 sentences using the target language from this unit (${focus}). Read your sentences aloud and record yourself.` },
  ],
});

const placeholderSB = (id: string, title: string, focus: string, lang: string): TTSection => ({
  id,
  title,
  description: focus,
  source: 'SB',
  type: 'language',
  activities: [
    { type: 'intro', title: title, body: focus },
    { type: 'language-note', title: 'Key language', body: lang },
    { type: 'task', title: 'Speaking task', body:
      'In pairs, use the target language above to talk about a real situation from your work or studies. Listen carefully and ask follow-up questions.' },
    { type: 'note', title: 'Full lesson coming soon', body:
      'Listening exercises, vocabulary tasks and reading texts from the Student\u2019s Book will be added shortly.' },
  ],
});

export const techTalkUnits: TTUnit[] = [
  // ============================== UNIT 1 ==============================
  {
    id: 'whats-up', number: 1, title: "What's up?",
    subtitle: 'Jobs · Present tenses · Emails: openings, closings and common expressions',
    sections: [
      {
        id: 'jobs',
        title: 'Jobs',
        description: 'Present Simple vs. Present Continuous; Present Perfect (How long have you been working here?)',
        source: 'SB', type: 'language', hasAudio: true,
        activities: [
          { type: 'discussion', title: '1 · Warm-up', bullets: [
            'Have you ever taken an online training course?',
            'Would you like to take lessons via the internet instead of in a classroom? Why / why not?',
            'What are the benefits of online classes? What are the benefits of face-to-face classes?',
          ]},
          { type: 'audio', track: '1.1',
            title: 'New employees on a corporate-security online training course',
            script: [
              'Trainer: Welcome to the course. Let\u2019s start by introducing ourselves. I\u2019ll begin. My name\u2019s Larina Rios and I\u2019m responsible for group security.',
              'George: Hi, I\u2019m George Paterson. I work in the London office. I\u2019m a facility manager and I\u2019ve been with the company for a month. We\u2019re building a new warehouse at the moment.',
              'April: Hello, I\u2019m April Wei. I\u2019m based in Shanghai. I work in technical support — I\u2019ve been here for two weeks. We provide support 24 / 7.',
              'Amar: Hi everyone. My name\u2019s Amar Kumar, I\u2019m in Bangalore. I\u2019m a website designer and I started a day ago. I speak English, Hindi, Korean, Japanese and Mandarin.',
              'Joey: I\u2019m Joey Marino. I\u2019m the IT manager. I\u2019ve been with the company for two weeks and I\u2019m working on a top-secret IT project. I can\u2019t tell you any more about it!',
            ]},
          { type: 'fill-blanks', title: '2 · Complete the table about each speaker',
            blanks: [
              { prompt: 'Larina Rios — job', answer: 'Responsible for group security' },
              { prompt: 'George Paterson — where', answer: 'London' },
              { prompt: 'George Paterson — job', answer: 'Facility manager' },
              { prompt: 'George — how long with the company', answer: 'A month' },
              { prompt: 'George — current project', answer: 'Building a new warehouse' },
              { prompt: 'April Wei — where', answer: 'Shanghai' },
              { prompt: 'April — job', answer: 'Technical support' },
              { prompt: 'April — how long', answer: 'Two weeks' },
              { prompt: 'Amar Kumar — where', answer: 'Bangalore, India' },
              { prompt: 'Amar — job', answer: 'Website designer' },
              { prompt: 'Amar — how long', answer: 'A day' },
              { prompt: 'Joey Marino — job', answer: 'IT manager' },
              { prompt: 'Joey — how long', answer: 'Two weeks' },
              { prompt: 'Joey — current project', answer: 'Top secret IT project' },
            ]},
          { type: 'fill-blanks', title: '3 · Complete sentences from the conversation (provide / work / get on / build / speak / settle in)',
            blanks: [
              { prompt: 'I ____ in the London office.', answer: 'work' },
              { prompt: 'We\u2019re ____ a new warehouse.', answer: 'building' },
              { prompt: 'We ____ technical support.', answer: 'provide' },
              { prompt: 'We ____ Korean, Japanese and Mandarin.', answer: 'speak' },
              { prompt: 'How are you ____ with your new job?', answer: 'getting on' },
              { prompt: 'I\u2019m ____ to the office here very well.', answer: 'settling in' },
            ]},
          { type: 'language-note', title: 'Present tenses', body:
            'Use the Present Simple for long-term activities and things that are generally true: I work on the help desk. He works in China.\nUse the Present Continuous for temporary activities in progress now: I\u2019m working on a project. Are you settling in OK?\nUse the Present Perfect to connect past and present: I\u2019ve been here one day. How long have you been working here?' },
          { type: 'fill-blanks', title: '4 · Present Simple or Continuous',
            blanks: [
              { prompt: 'Sam: I ____ (stay) for a week so I can meet your designers.', answer: '\u2019m staying' },
              { prompt: 'Sam: I ____ (work) for LBT & Hillard.', answer: 'work' },
              { prompt: 'Sam: We ____ (design) shop interiors.', answer: 'design' },
              { prompt: 'Sam: I ____ (look for) new materials.', answer: '\u2019m looking for' },
              { prompt: 'Maria: I ____ (run) a small company called Lab2.', answer: 'run' },
              { prompt: 'Maria: …which ____ (make) miniature cameras.', answer: 'makes' },
              { prompt: 'Maria: We ____ (produce) five models.', answer: 'produce' },
              { prompt: 'Maria: We currently ____ (develop) two new models.', answer: 'are developing' },
              { prompt: 'Maria: My work ____ (involve) a lot of market research.', answer: 'involves' },
              { prompt: 'Maria: At the moment I ____ (travel) a lot.', answer: '\u2019m travelling' },
            ]},
          { type: 'fill-blanks', title: '6 · Add do, are or have to make the questions',
            blanks: [
              { prompt: 'What company ____ you work for?', answer: 'do' },
              { prompt: '____ you been working there long?', answer: 'Have' },
              { prompt: '____ you live in London?', answer: 'Do' },
              { prompt: 'Where ____ you based?', answer: 'are' },
              { prompt: 'How long ____ you been based there?', answer: 'have' },
              { prompt: '____ you working on any interesting projects?', answer: 'Are' },
              { prompt: 'How ____ you getting on?', answer: 'are' },
              { prompt: 'What languages ____ you speak?', answer: 'do' },
              { prompt: 'How long ____ you been learning English?', answer: 'have' },
              { prompt: '____ you taking any other training courses?', answer: 'Are' },
            ]},
          { type: 'task', title: '7–8 · Introduce yourself', body:
            'Make notes about: 1 Company / department, 2 How long you\u2019ve worked there, 3 Job title, 4 Anything you\u2019re responsible for, 5 Some things you do, 6 A current project. Then stand up and introduce yourself to the class. Answer 2–3 follow-up questions.' },
        ],
      },
      {
        id: 'emails',
        title: 'Emails',
        description: 'Openings and closings, formal vs. informal style, subject lines and common expressions',
        source: 'SB', type: 'writing',
        activities: [
          { type: 'discussion', title: 'Warm-up', bullets: [
            'How many emails in English do you receive a week? Who from?',
            'Do you check email continuously or at certain times?',
            'Do you ever use emoticons? With whom?',
            'Have you ever sent a confidential email to the wrong person?',
          ]},
          { type: 'matching', title: '1 · Match each email opening to its ending',
            pairs: [
              { id: 1, left: '1. Hi Birgit, just a quick note to let you know I\u2019ll be in Portugal till Monday.', right: 'c. If you need to contact me, call Dieter on 0049-89-71909623. Otherwise I\u2019ll call you when I get back. All the best,' },
              { id: 2, left: '2. Hi everyone, Attached is a tentative schedule for the quality circle meeting.', right: 'e. Feel free to ask if you have any questions, but please don\u2019t ask me to move your presentation — I\u2019ll go crazy! Cheers,' },
              { id: 3, left: '3. Dear Ms Olssen, The new parts were shipped this morning. We are very sorry…', right: 'b. We have taken action to ensure your specifications will be entered correctly. We value your business. Best regards,' },
              { id: 4, left: '4. I\u2019m writing regarding our phone call today about the 14 bearing housings.', right: 'f. Please send a credit note to Peter Hinkley in purchasing and confirm there will be no handling fee. Thank you for your help.' },
              { id: 5, left: '5. Frank, I\u2019ve checked out flights and this one seems the best fit:', right: 'a. Depart Heathrow BA344 11.35 / Arrive Nice 14.30. Would you like me to issue the ticket? Best wishes,' },
              { id: 6, left: '6. Hi Marie, Thanks for getting back to me about the mix up with commas and decimal points.', right: 'd. Yes, the 4.655 mm lenses will be no problem. 4,655 mm sounded pretty strange. ;-) See ya!' },
            ]},
          { type: 'multiple-choice', title: '2 · Which emails are formal?',
            mcq: [
              { question: 'Which emails are most formal in tone?', options: ['1 and 2', '3 and 4', '5 and 6', 'All of them'], answerIndex: 1 },
              { question: 'A title like Mr / Mrs / Ms is appropriate when…', options: ['Writing to a close colleague', 'Writing to someone you don\u2019t know personally', 'Writing to a friend', 'Never – always use first names'], answerIndex: 1 },
              { question: 'A simple "Thanks" as the entire reply is…', options: ['Always rude', 'Perfectly acceptable in English', 'Only used in informal chats', 'Wrong grammar'], answerIndex: 1 },
            ]},
          { type: 'matching', title: '4 · Match the email functions to common phrases',
            pairs: [
              { id: 1, left: 'Request action', right: 'Could you …? / Please send …' },
              { id: 2, left: 'Thank people for help', right: 'Thanks for … / Thank you for your help' },
              { id: 3, left: 'Offer help', right: 'Would you like me to …? / Feel free to ask' },
              { id: 4, left: 'Explain the reason for the email', right: 'I\u2019m writing regarding … / Just a quick note to …' },
              { id: 5, left: 'Apologize', right: 'We are very sorry that …' },
              { id: 6, left: 'Send an attachment', right: 'Attached is …' },
            ]},
          { type: 'task', title: '5–6 · Write an email', body:
            'Choose ONE situation and write a clear, well-structured email. Pay attention to opening, closing, register and subject line.\n\n1) A client wrote to you last week but you were away. They\u2019ve lost some documentation — you can send it as an attachment.\n2) You\u2019re the boss. Your team worked late yesterday and you need them to work late again tonight. You\u2019d like to offer pizza as a token of appreciation.' },
          { type: 'note', title: 'Culture note (Teacher\u2019s Book)', body:
            'In American English, commas are usually used after the opening and closing (Dear Ms. Smith,). In British English they are often omitted. British speakers rarely use Dr unless addressing a physician; Americans often use Dr. for anyone with a doctorate.' },
        ],
      },
      placeholderWB('jobs vocabulary, Present Perfect questions and email register'),
    ],
  },

  // ============================== UNIT 2 ==============================
  {
    id: 'tell-me-about-it', number: 2, title: 'Tell me about it',
    subtitle: 'Specifications, measurement and dimensions · Features and benefits',
    sections: [
      {
        id: 'specifications',
        title: 'Specifications',
        description: 'Measurement & dimension vocabulary and question forms',
        source: 'SB', type: 'language', hasAudio: true,
        activities: [
          { type: 'discussion', title: '1 · The Hover Airboard Scooter', bullets: [
            'Would you like to ride on a hover scooter? Why / why not?',
            'What information do you expect to see in its specifications?',
          ]},
          { type: 'matching', title: '2 · Match the spec labels to the values',
            pairs: [
              { id: 1, left: 'Height (including handle)', right: '1200 mm' },
              { id: 2, left: 'Diameter', right: '1600 mm' },
              { id: 3, left: 'Maximum speed', right: '25 km/h' },
              { id: 4, left: 'Stopping distance', right: '6 m' },
              { id: 5, left: 'Maximum load', right: '100 kg' },
              { id: 6, left: 'Operating time', right: '1 hour on a full tank' },
              { id: 7, left: 'Engine', right: '4-stroke Briggs & Stratton' },
              { id: 8, left: 'Fuel tank capacity', right: '5 L' },
              { id: 9, left: 'Fuel', right: '85 octane unleaded' },
              { id: 10, left: 'Approximate shipping weight', right: '150 kg' },
              { id: 11, left: 'Available colours', right: 'red, blue, green, yellow' },
              { id: 12, left: 'Price', right: '$27,000' },
            ]},
          { type: 'language-note', title: 'Questions about specifications', body:
            "What's the length / width / height / diameter?\nHow long / wide / high is it?\nHow much does it cost / weigh?\nWhat's it made of?\nWhat kind of fuel does it use / engine does it have?\nHow long does it take to deliver?\nWhat sizes / colours does it come in?\nHow long will it last?" },
          { type: 'fill-blanks', title: '5 · Complete the question stems',
            blanks: [
              { prompt: "What's the length / width / height / ____ ?", answer: 'diameter' },
              { prompt: 'How long / ____ / high is it?', answer: 'wide' },
              { prompt: 'How long / wide / ____ is it?', answer: 'heavy' },
              { prompt: 'How much does it ____ ? (price)', answer: 'cost' },
              { prompt: "What's it ____ ? (materials)", answer: 'made of' },
              { prompt: 'What ____ fuel does it use?', answer: 'kind of' },
              { prompt: 'How long does it ____ to deliver?', answer: 'take' },
              { prompt: 'What sizes / colours does it ____ ?', answer: 'come in' },
              { prompt: 'How long will it ____ ?', answer: 'last' },
            ]},
          { type: 'task', title: '10 · Class guessing game', body:
            '1) Think of an object and write its specifications. 2) In turns, read your specs to the class. 3) Others ask follow-up questions (What\u2019s it made of? What\u2019s the fuel source?). 4) Everyone guesses what it is.' },
        ],
      },
      {
        id: 'features-and-benefits',
        title: 'Features and benefits',
        description: 'Technical vs. persuasive description — selling the value of a product',
        source: 'SB', type: 'communication', hasAudio: true,
        activities: [
          { type: 'reading', title: '3 · The LifeStraw Water Filter — two descriptions',
            passage: [
              'A — TECHNICAL: It purifies up to 700 litres of water. It is 25 cm long and 29 mm in diameter. It has seven different types of filter, including mesh, carbon and iodine. It costs less than €3.00.',
              'B — PERSUASIVE: It can purify someone\u2019s water supply for a whole year. It\u2019s easy to carry and transport. It can prevent waterborne illnesses such as typhoid and diarrhoea. It\u2019s affordable in the developing world.',
            ]},
          { type: 'multiple-choice', title: '4 · Analyse the two descriptions',
            mcq: [
              { question: 'Which description is more technical?', options: ['A', 'B'], answerIndex: 0 },
              { question: 'Which description explains how the LifeStraw solves problems?', options: ['A', 'B'], answerIndex: 1 },
              { question: 'Which description is better for selling the invention?', options: ['A — facts impress buyers', 'B — benefits motivate buyers'], answerIndex: 1 },
            ]},
          { type: 'matching', title: '6 · Match Hypno PQ Tent features to benefits',
            pairs: [
              { id: 1, left: 'Total area 2.88 m²', right: 'Two people can fit comfortably inside.' },
              { id: 2, left: 'Supported by air, not tent poles', right: 'You don\u2019t have to use tent poles to erect it.' },
              { id: 3, left: 'Weighs 1.22 kg out of its bag', right: 'It\u2019s light enough to carry on long walks.' },
              { id: 4, left: 'Comes with a pump – erected in under a minute', right: 'It saves time — quicker to put up than a normal tent.' },
            ]},
          { type: 'language-note', title: 'Describing benefits', body:
            "It's affordable / light / helpful.\nIt's safer / more stable / quicker / less likely to fall over.\nIt can purify / prevent / save …\nIt's easy to erect / move / carry.\nIt allows / helps …\nYou don't have to …" },
          { type: 'task', title: '8–10 · Describe a product', body:
            'Choose any object in the room (or a product your company sells). 1) Describe its FEATURES (composition, size, weight, cost). 2) Describe its BENEFITS (problems it solves, why people want to buy it). Present to a partner.' },
        ],
      },
      {
        id: 'workbook-practice',
        title: 'Workbook practice',
        description: 'Jack-up barge specs, unscrambling questions, features → benefits crossword',
        source: 'WB', type: 'practice',
        activities: [
          { type: 'fill-blanks', title: '1 · Jack-up barge specifications',
            blanks: [
              { prompt: 'A jack-up barge has ____ legs.', answer: '6' },
              { prompt: 'The legs extend ____ m below the ship.', answer: '48' },
              { prompt: '… and penetrate ____ m into the seabed.', answer: '5' },
              { prompt: 'The boat is ____ m wide.', answer: '38' },
              { prompt: '… ____ m long.', answer: '130' },
              { prompt: 'Crane length: ____ m.', answer: '85' },
              { prompt: 'It weighs ____ tonnes.', answer: '14,085' },
              { prompt: 'Installation time for foundations: ____ hours.', answer: '24-36' },
              { prompt: 'Turbines can be ____ m tall.', answer: '125' },
            ]},
          { type: 'task', title: '2 · Unscramble these questions',
            body: 'Work out the correct word order, then match each question to its answer.',
            bullets: [
              'A1  it / to / did / build / how / take / long ?',
              'A2  it / cost / how / much / does ?',
              'A3  much / weigh / how / it / does ?',
              "A4  tank / capacity / the / what's / fuel ?",
              'B1  are / what / dimensions / its ?',
              "B2  operating / what's / time / its ?",
              "B3  the / what's / load / maximum ?",
              'B4  can / how / fly / high / it ?',
            ],
            answers: [
              'A1 How long did it take to build? — 1,800 hours',
              'A2 How much does it cost? — €750',
              'A3 How much does it weigh? — 90 kg',
              "A4 What's the fuel tank capacity? — 9 L",
              'B1 What are its dimensions? — 6 m (L) × 1.7 m (H) × 9.75 m (W)',
              "B2 What's its operating time? — 5.4 hours on a full tank",
              "B3 What's the maximum load? — 364 kg",
              'B4 How high can it fly? — A maximum of 4,800 m above sea level',
            ]},
          { type: 'matching', title: '4 · Match each feature with its unit of measurement',
            pairs: [
              { id: 1, left: 'rotation speed', right: 'rpm' },
              { id: 2, left: 'memory', right: 'MB' },
              { id: 3, left: 'temperature', right: '°C' },
              { id: 4, left: 'pressure', right: 'bar' },
              { id: 5, left: 'voltage', right: 'V' },
              { id: 6, left: 'water output', right: 'L/h' },
            ]},
          { type: 'matching', title: '7 · Match the description of a benefit to its feature',
            pairs: [
              { id: 1, left: 'It\u2019s light, so it\u2019s easy to move.', right: 'weight' },
              { id: 2, left: '105 bar output makes cleaning easy.', right: 'pressure' },
              { id: 3, left: 'It\u2019s carbon neutral.', right: 'greenhouse gas emissions' },
              { id: 4, left: 'It\u2019s made from attractive leather.', right: 'construction materials' },
              { id: 5, left: 'It\u2019s easy to store because it\u2019s compact.', right: 'size' },
              { id: 6, left: 'It\u2019s affordable.', right: 'cost' },
            ]},
        ],
      },
    ],
  },

  // ============================== UNIT 3 ==============================
  {
    id: 'whats-next', number: 3, title: "What's next?",
    subtitle: 'Giving instructions (sequencers) · Mechanisms (relative clauses with which/that)',
    sections: [
      {
        id: 'giving-instructions',
        title: 'Giving instructions',
        description: 'Sequencers (first, then, next, after that, when, once) and reasons (otherwise, or else)',
        source: 'SB', type: 'language', hasAudio: true,
        activities: [
          { type: 'discussion', title: '1 · Have you ever…', bullets: [
            'used a wallpaper stripper?',
            'laid a garden patio?',
            'hypnotized someone?',
            'For each task, predict 5–10 useful words you might hear in the instructions.',
          ]},
          { type: 'language-note', title: 'Sequencers & reasons', body:
            'Sequencers order the steps: First, … Then, … Next, … After that, … When … Once …  Finally, …\nReason linkers warn what happens if a step is skipped: … otherwise … / … or else …\nExample: Make sure the edge is level, otherwise the pond will look uneven.' },
          { type: 'fill-blanks', title: '2 · Complete the pond-building instructions (When / Next / Make sure / After / Finally / First)',
            blanks: [
              { prompt: '____ , dig a hole the size and shape you want.', answer: 'First' },
              { prompt: '____ , line the hole with damp sand.', answer: 'Next' },
              { prompt: '____ that, put the liner in the pond and fill it with water.', answer: 'After' },
              { prompt: '____ the pond is full, cut the liner to fit.', answer: 'When' },
              { prompt: '____ that the edge of the pond is the same level all around.', answer: 'Make sure' },
              { prompt: '____ , put stones around the edge of the pond to complete it.', answer: 'Finally' },
            ]},
          { type: 'matching', title: '5 · Match the sentence halves',
            pairs: [
              { id: 1, left: "Distilled water's best for your cooling system,", right: 'but it\u2019s not essential.' },
              { id: 2, left: 'Switch the iron on', right: 'and wait a few minutes for it to warm up.' },
              { id: 3, left: 'When the water in the kettle is hot enough,', right: 'the light goes off.' },
              { id: 4, left: 'After you install the software,', right: 'you have to restart your computer.' },
              { id: 5, left: 'Make sure there is plenty of gravel,', right: 'otherwise the water won\u2019t drain off.' },
              { id: 6, left: 'The plate gets very hot,', right: 'so be careful not to touch it.' },
              { id: 7, left: 'It\u2019s best to work downwards', right: 'and to work on one strip at a time.' },
              { id: 8, left: 'Be careful to speak softly,', right: 'or else your subject won\u2019t relax.' },
            ]},
          { type: 'task', title: 'Pair task — Give instructions', body:
            'Choose a simple process from your work (resetting a device, calibrating a machine, onboarding a new colleague). Explain it to your partner in 5–8 numbered steps. Use at least four different sequencers and one otherwise / or else.' },
        ],
      },
      {
        id: 'mechanisms',
        title: 'Mechanisms',
        description: 'Relative clauses with which / that; machine-part vocabulary',
        source: 'SB', type: 'language',
        activities: [
          { type: 'word-list', title: 'Machine parts (Rube Goldberg machine)',
            words: ['ball', 'bell', 'boxing glove', 'chain', 'chute', 'cigarette lighter', 'doorbell button', 'flame', 'hammer', 'pulley', 'rope', 'scissors', 'string', 'trap door', 'weight'] },
          { type: 'language-note', title: 'Relative clauses', body:
            'Use which / that to give more information about a thing: The string THAT goes over the pulley is long. The pulley WHICH is fixed to the ceiling holds the rope.\nIn a defining relative clause, that and which are interchangeable for things; that is more common in speaking.' },
          { type: 'fill-blanks', title: 'Rewrite using which (Workbook 7)',
            blanks: [
              { prompt: 'This is the flame. It burns the string. →', answer: 'This is the flame which burns the string.' },
              { prompt: 'The broken string releases the boxing glove. The glove hits the ball. →', answer: 'The broken string releases the boxing glove which hits the ball.' },
              { prompt: 'There\u2019s a chute. The ball rolls down it. →', answer: 'There\u2019s a chute which the ball rolls down.' },
              { prompt: 'This is the rope. It goes over a pulley. →', answer: 'This is the rope which goes over a pulley.' },
              { prompt: 'The ball hits the scissors. The scissors cut the rope. →', answer: 'The ball hits the scissors which cut the rope.' },
              { prompt: 'There\u2019s a weight. It drops when the rope is cut. →', answer: 'There\u2019s a weight which drops when the rope is cut.' },
              { prompt: 'There\u2019s a trap door. It\u2019s pulled open by the chain. →', answer: 'There\u2019s a trap door which is pulled open by the chain.' },
              { prompt: 'On the trap door there\u2019s a ball. It falls when the door opens. →', answer: 'On the trap door there\u2019s a ball which falls when the door opens.' },
              { prompt: 'The falling ball hits a hammer. The hammer rings the bell. →', answer: 'The falling ball hits a hammer which rings the bell.' },
            ]},
          { type: 'task', title: 'Speaking task', body:
            'Describe a simple machine or chain reaction you know. Use at least five relative clauses with which / that to link the parts. Bonus: try to describe a Rube Goldberg-style sequence in 10 steps.' },
        ],
      },
      {
        id: 'workbook-practice',
        title: 'Workbook practice',
        description: 'Choosing fish for a pond, definition unscramble, vocabulary crossword',
        source: 'WB', type: 'practice',
        activities: [
          { type: 'reading', title: '4 · Choosing the right fish for your pond',
            passage: [
              '1 Before you consider putting fish in your pond, check the water temperature and quality. Set up a water filter and circulation system to keep the water fresh.',
              '2 Don\u2019t rush to put a lot of fish in, or else you may be sorry.',
              '3 Once your pond is ready, put in just one fish. This fish will help prepare the water for more fish.',
              '4 It\u2019s best to choose a fish that is well suited to your environment. Fancy, rare fish may not live for very long.',
              '5 Just before adding more fish, buy a water test kit.',
              '6 It\u2019s essential that you don\u2019t let fallen leaves build up at the bottom of the pond. They produce hydrogen sulphide gas that will kill your fish.',
            ]},
          { type: 'matching', title: '4 · Match each step to a description',
            pairs: [
              { id: 1, left: 'Step 6 (leaves)', right: 'This step is necessary.' },
              { id: 2, left: 'Step 5 (test kit)', right: 'One step must be completed before another.' },
              { id: 3, left: 'Step 3 (one fish)', right: 'One step immediately follows another.' },
              { id: 4, left: 'Step 4 (fish choice)', right: 'This step is advisable but not necessary.' },
              { id: 5, left: 'Step 2 (don\u2019t rush)', right: 'You shouldn\u2019t do this.' },
              { id: 6, left: 'Step 1 (temperature)', right: 'This is necessary preparation.' },
            ]},
          { type: 'fill-blanks', title: '9 · Unscramble the definitions',
            blanks: [
              { prompt: 'at / tube / that / end / funnel / is / is / wide / A / one / a', answer: 'A funnel is a tube that is wide at one end.' },
              { prompt: 'piece / A / a / equipment / bellows / air / is / of / that / blows', answer: 'A bellows is a piece of equipment that blows air.' },
              { prompt: 'on / blade / edge / cutting / A / is / a / flat / a / knife', answer: 'A knife is a flat blade with a cutting edge.' },
              { prompt: 'lid / box / which / A / is / a / has / tray / no / shallow', answer: 'A tray is a shallow box which has no lid.' },
              { prompt: 'wheel / gear / is / has / which / A / a / teeth', answer: 'A gear is a wheel which has teeth.' },
              { prompt: 'that / liquid / A / a / tank / holds / is / container', answer: 'A tank is a container that holds liquid.' },
            ]},
        ],
      },
    ],
  },

  // ============================== UNITS 4-18 (scaffold) ==============================
  {
    id: 'hows-it-done', number: 4, title: "How's it done?",
    subtitle: 'Describing fixes · Explaining processes (active vs. passive)',
    sections: [
      placeholderSB('describing-fixes', 'Describing fixes',
        'Repair vocabulary and explaining effects ("It was so … (adjective)…").',
        'Repair verbs: replace, repair, tighten, loosen, adjust, lubricate, clean, recalibrate, reset.\nIt was so worn / loose / dirty / damaged that it had to be replaced.'),
      placeholderSB('explaining-processes', 'Explaining processes',
        'Active vs. passive voice; Present and Past Passive forms.',
        'Active: The technician adjusts the valve.\nPresent passive: The valve is adjusted (by the technician).\nPast passive: The valve was adjusted yesterday.'),
      placeholderWB('repair vocabulary and passive forms'),
    ],
  },
  {
    id: 'where-are-you', number: 5, title: 'Where are you?',
    subtitle: 'Welcoming visitors · Tracking (quantifiers, countable / uncountable)',
    sections: [
      placeholderSB('welcoming-visitors', 'Welcoming visitors',
        'Greetings and farewells; requests, offers, apologies and thanks.',
        'Welcome to … / Did you find us OK? / How was your flight?\nCan I get you …? / Would you like …? / I\u2019m sorry for the wait.'),
      placeholderSB('tracking', 'Tracking',
        'Quantifiers (much, many, a lot of, plenty of, several, both, all, loads of, a couple of). Countable vs. uncountable. (a) little vs. (a) few.',
        'Countable: many / a few / several parts.\nUncountable: much / a little / a lot of equipment.\nPlenty of / loads of work with both.'),
      placeholderWB('visitor language and quantifiers'),
    ],
  },
  {
    id: 'looking-ahead', number: 6, title: 'Looking ahead',
    subtitle: 'Planning (1st Conditional) · Making comparisons',
    sections: [
      placeholderSB('planning', 'Planning',
        'First Conditional with if, unless, in case.',
        'If we test it now, we\u2019ll know by Friday.\nUnless the parts arrive, we can\u2019t finish.\nTake spare batteries in case the power fails.'),
      placeholderSB('making-comparisons', 'Making comparisons',
        'more / less / fewer than …; intensifiers: much / far / a lot, a little, slightly, a bit.',
        'It\u2019s much faster than the old model.\nWe have slightly fewer faults this quarter.'),
      placeholderWB('first conditional and comparatives'),
    ],
  },
  {
    id: 'can-you-explain', number: 7, title: 'Can you explain…?',
    subtitle: 'Rules and regulations · Equipment documentation',
    sections: [
      placeholderSB('rules-regulations', 'Rules and regulations',
        'Modal verbs: can / can\u2019t / must / mustn\u2019t / (don\u2019t) have to; should / shouldn\u2019t / ought to; is / are (not) allowed to.',
        'Mustn\u2019t = it\u2019s prohibited.\nDon\u2019t have to = it\u2019s not necessary.'),
      placeholderSB('equipment-documentation', 'Equipment documentation',
        'Locating information in a manual; noun phrases.',
        'Look in the troubleshooting section / index / appendix.\nNoun phrase: a high-pressure hydraulic line.'),
      placeholderWB('modals and manual language'),
    ],
  },
  {
    id: 'take-care', number: 8, title: 'Take care',
    subtitle: 'Causes and results · Reporting accidents',
    sections: [
      placeholderSB('causes-and-results', 'Causes and results',
        'Cause-effect verbs: lead to, result in, cause, trigger, prevent. Negative prefixes: in-, un-, dis-.',
        'Vibration leads to / results in / causes early wear.'),
      placeholderSB('reporting-accidents', 'Reporting accidents',
        'Past Simple vs. Past Continuous.',
        'I was checking the panel when the alarm went off.'),
      placeholderWB('cause-effect verbs and past tenses'),
    ],
  },
  {
    id: 'lets-imagine', number: 9, title: "Let's imagine",
    subtitle: 'Materials · Inventions (mixed conditionals)',
    sections: [
      placeholderSB('materials', 'Materials',
        'Material properties (durable, malleable, brittle, conductive, corrosion-resistant). Would and could.',
        'If we used titanium, it would be lighter and could last longer.'),
      placeholderSB('inventions', 'Inventions',
        'Mixed conditionals; First vs. Second Conditional.',
        '1st: If we test it, it will work.\n2nd: If we tested it, it would work.'),
      placeholderWB('materials vocabulary and conditionals'),
    ],
  },
  {
    id: 'whats-cooking', number: 10, title: "What's cooking?",
    subtitle: 'Explaining how (chemical processes) · Making conversation',
    sections: [
      placeholderSB('explaining-how', 'Explaining how',
        'Chemical reaction verbs: melt, displace, absorb, dilute, dissolve. Preposition + -ing: before / without / instead of / after / by + -ing.',
        'Before adding the catalyst, heat the mixture. By dissolving the salt you reduce the freezing point.'),
      placeholderSB('making-conversation', 'Making conversation',
        'Active listening strategies. used to do vs. (get) used to doing.',
        'I used to work nights (past habit). I\u2019m getting used to working with new software.'),
      placeholderWB('chemical reaction verbs and listening phrases'),
    ],
  },
  {
    id: 'what-do-you-think', number: 11, title: 'What do you think?',
    subtitle: 'Making predictions · Weighing alternatives',
    sections: [
      placeholderSB('making-predictions', 'Making predictions',
        'Expressing certainty / uncertainty: may, could, might, probably will / won\u2019t, certainly will / won\u2019t.',
        'It\u2019ll probably ship next week. It might be delayed.'),
      placeholderSB('weighing-alternatives', 'Weighing alternatives',
        'Gradable and ungradable adjectives: cold — freezing, hot — boiling, good — excellent.',
        'Use very with gradable adjectives; use absolutely with ungradable.'),
      placeholderWB('modals of prediction and extreme adjectives'),
    ],
  },
  {
    id: 'whats-the-problem', number: 12, title: "What's the problem?",
    subtitle: 'Handling complaints · Describing damage',
    sections: [
      placeholderSB('handling-complaints', 'Handling complaints',
        'Providing explanations and making promises. Mitigating language: seems, appears, looks, sounds.',
        'It seems / appears / looks as if … I\u2019ll make sure it doesn\u2019t happen again.'),
      placeholderSB('describing-damage', 'Describing damage',
        'go / get / become + adjective. Damage vocabulary: bent, clogged, rusty, cracked, dented.',
        'The pipe has become clogged. The bracket got bent during transport.'),
      placeholderWB('complaint language and damage vocabulary'),
    ],
  },
  {
    id: 'what-have-you-done', number: 13, title: 'What have you done?',
    subtitle: 'Skills and experience · Reporting progress',
    sections: [
      placeholderSB('skills-and-experience', 'Skills and experience',
        'Present Perfect vs. Past Simple — finished actions.',
        'I\u2019ve installed 30 of these. (life experience)\nI installed one yesterday. (finished time)'),
      placeholderSB('reporting-progress', 'Reporting progress',
        'Mixed passive forms: has been done / has to be done / can\u2019t be done / should be done / is being done.',
        'The first phase has been completed. The next stage is being scheduled.'),
      placeholderWB('present perfect and passive progress reports'),
    ],
  },
  {
    id: 'whats-that-exactly', number: 14, title: "What's that exactly?",
    subtitle: 'Technical writing · Measurements and conversions',
    sections: [
      placeholderSB('technical-writing', 'Technical writing',
        'Punctuation and capitalization; making corrections and improvements on drafts.',
        'Always re-read for missing articles, comma splices and inconsistent capitalisation.'),
      placeholderSB('measurements-and-conversions', 'Measurements and conversions',
        'Saying calculations; saying results and approximations.',
        '12.5 = twelve point five.  approx / roughly / about 30 mm.'),
      placeholderWB('writing improvements and saying numbers'),
    ],
  },
  {
    id: 'where-does-it-go', number: 15, title: 'Where does it go?',
    subtitle: 'Describing location · Getting organized (multi-part verbs)',
    sections: [
      placeholderSB('describing-location', 'Describing location',
        'Direction expressions: heads north, veers to the left, runs parallel to, goes between.',
        'The pipeline heads north and then veers slightly east.'),
      placeholderSB('getting-organized', 'Getting organized',
        'Multi-part verbs: clean up, hold onto, come up with, get rid of, set up.',
        'We need to set up the rig and get rid of the scrap.'),
      placeholderWB('directions and phrasal verbs'),
    ],
  },
  {
    id: 'to-be-precise', number: 16, title: 'To be precise',
    subtitle: 'Being concise · Text abbreviations · Identifying parts',
    sections: [
      placeholderSB('being-concise', 'Being concise',
        'Writing style — creating a warm, professional tone. Removing redundancy.',
        'Replace "due to the fact that" with "because"; cut filler words.'),
      placeholderSB('text-abbreviations', 'Text abbreviations',
        'Short words for emails and text messages (FYI, ASAP, EOD, BTW).',
        'FYI = for your information. EOD = end of day. ASAP = as soon as possible.'),
      placeholderSB('identifying-parts', 'Identifying parts',
        'Engine part vocabulary: cylinder, piston, crankshaft, valve, spark plug.',
        'Each cylinder contains a piston which is driven by combustion.'),
      placeholderWB('concise writing, abbreviations and engine parts'),
    ],
  },
  {
    id: 'whats-gone-wrong', number: 17, title: "What's gone wrong?",
    subtitle: 'Organizing schedules · Faults and hazards',
    sections: [
      placeholderSB('organizing-schedules', 'Organizing schedules',
        'Present, Past and Future Perfect tenses.',
        'By Friday we will have completed phase 2.'),
      placeholderSB('faults-and-hazards', 'Faults and hazards',
        'Warnings; speculating: may affect, could have been caused by, might result in.',
        'Warning: high voltage. The leak may have been caused by a worn seal.'),
      placeholderWB('perfect tenses and speculation language'),
    ],
  },
  {
    id: 'what-are-the-chances', number: 18, title: 'What are the chances?',
    subtitle: 'Security · Discussing risks',
    sections: [
      placeholderSB('security', 'Security',
        'Should and be supposed to. Should(n\u2019t) have done.',
        'You\u2019re supposed to wear a hard hat. You shouldn\u2019t have left the door unlocked.'),
      placeholderSB('discussing-risks', 'Discussing risks',
        'Likelihood: more / less likely, There\u2019s no chance, What are the odds …?',
        'It\u2019s more likely to fail in cold weather. What are the odds of a power cut?'),
      placeholderWB('obligation and risk language'),
    ],
  },
];
