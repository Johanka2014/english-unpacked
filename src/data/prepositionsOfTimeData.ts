export interface PrepositionQuestion {
  q: string;
  a: string;
}

export interface PrepositionModule {
  id: number;
  title: string;
  subtitle: string;
  explanation: string[];
  tip?: { type: 'info' | 'warning'; text: string };
  questions: PrepositionQuestion[];
}

export const prepositionModules: PrepositionModule[] = [
  {
    id: 1,
    title: "On, In, At",
    subtitle: "days, months, parts of day, clock times",
    explanation: [
      "ON is used with days and dates: on Monday, on 6 March, on Christmas Day, on my birthday.",
      "IN is used with longer periods — months, years, seasons, parts of the day: in April, in 2024, in winter, in the morning.",
      "AT is used with clock times and a few fixed expressions: at 5 o'clock, at noon, at midnight, at night, at the weekend, at Christmas (the holiday period).",
      "No preposition before last/next/this/every: I'll see you next Friday. (NOT on next Friday)",
    ],
    tip: { type: 'info', text: "We say 'in the morning/afternoon/evening' but 'at night'. Also: 'on Friday morning' (day + part of day uses ON)." },
    questions: [
      { q: "The meeting is ______ Monday.", a: "on" },
      { q: "She was born ______ 1998.", a: "in" },
      { q: "The train leaves ______ 6 o'clock.", a: "at" },
      { q: "We usually go skiing ______ winter.", a: "in" },
      { q: "I'll call you ______ Tuesday morning.", a: "on" },
      { q: "He always reads ______ night.", a: "at" },
      { q: "The shop opens ______ the morning.", a: "in" },
      { q: "We got married ______ 14 February.", a: "on" },
      { q: "I'll see you ______ the weekend.", a: "at" },
      { q: "They arrived ______ the afternoon.", a: "in" },
    ],
  },
  {
    id: 2,
    title: "From ... To / Till / Until",
    subtitle: "time ranges and endpoints",
    explanation: [
      "FROM ... TO expresses start and end of a period: from Monday to Friday, from 9 to 5.",
      "TILL / UNTIL marks the end point of an action: I'll wait until 6 o'clock. / She worked till midnight.",
      "TILL and UNTIL mean the same thing. UNTIL is more common in formal writing.",
      "You can also say 'from ... till/until': from May until September.",
    ],
    tip: { type: 'info', text: "Don't confuse UNTIL (= up to a point in time) with BY (= no later than). 'I'll be here until 5' means I'll leave at 5. 'I'll be here by 5' means I'll arrive no later than 5." },
    questions: [
      { q: "The shop is open ______ 9 a.m. to 6 p.m.", a: "from" },
      { q: "I'll wait here ______ you come back.", a: "until" },
      { q: "We worked from Monday ______ Friday.", a: "to" },
      { q: "She didn't go to bed ______ midnight.", a: "until" },
      { q: "The course runs ______ January to March.", a: "from" },
      { q: "He stayed in bed ______ noon.", a: "until" },
      { q: "The museum is open from 10 ______ 5.", a: "to" },
      { q: "I won't leave ______ the meeting is over.", a: "until" },
      { q: "We have classes ______ 8 a.m. till 3 p.m.", a: "from" },
      { q: "Please wait ______ I finish.", a: "till" },
    ],
  },
  {
    id: 3,
    title: "Past",
    subtitle: "telling the time and beyond a point",
    explanation: [
      "PAST is used when telling the time — it means 'after' the hour: half past two (2:30), ten past nine (9:10), quarter past seven (7:15).",
      "PAST can also mean 'beyond' a point in time or place: It's past midnight. He walked past the shop.",
      "In time expressions, PAST is the opposite of TO: 'ten past six' vs 'ten to seven'.",
    ],
    questions: [
      { q: "It's half ______ three. (3:30)", a: "past" },
      { q: "It's quarter ______ eight. (8:15)", a: "past" },
      { q: "It's twenty ______ four. (4:20)", a: "past" },
      { q: "It was already ______ midnight when we got home.", a: "past" },
      { q: "It's ten ______ nine. (9:10)", a: "past" },
      { q: "It's five ______ two. (2:05)", a: "past" },
      { q: "We are already ______ the deadline.", a: "past" },
      { q: "It's twenty-five ______ one. (1:25)", a: "past" },
      { q: "She walked ______ me without saying hello.", a: "past" },
      { q: "It's quarter ______ eleven. (11:15)", a: "past" },
    ],
  },
  {
    id: 4,
    title: "By",
    subtitle: "no later than a deadline",
    explanation: [
      "BY means 'no later than' a certain time. It expresses a deadline.",
      "I'll be home by 6 o'clock. (= at 6 or before 6)",
      "The report must be finished by Friday. (= on Friday or before Friday)",
      "BY THE TIME + clause: By the time we arrived, the film had already started.",
    ],
    tip: { type: 'warning', text: "BY ≠ UNTIL. 'I'll be there by 5' = I'll arrive no later than 5. 'I'll be there until 5' = I'll stay and leave at 5." },
    questions: [
      { q: "I need the report ______ Friday.", a: "by" },
      { q: "She'll be here ______ 3 o'clock.", a: "by" },
      { q: "______ the time I got there, the shop was closed.", a: "by" },
      { q: "You must finish your homework ______ tomorrow.", a: "by" },
      { q: "The train should arrive ______ noon.", a: "by" },
      { q: "______ the end of the course, you will speak English well.", a: "by" },
      { q: "Please send the email ______ Monday morning.", a: "by" },
      { q: "We need to leave ______ 7 if we want to catch the bus.", a: "by" },
      { q: "______ the time she was 20, she had already graduated.", a: "by" },
      { q: "I'll have read the book ______ next week.", a: "by" },
    ],
  },
  {
    id: 5,
    title: "Since and For",
    subtitle: "starting point vs. duration",
    explanation: [
      "SINCE is used with a point in time — when something started: since Monday, since 2010, since I was a child.",
      "FOR is used with a period of time — how long something lasts: for two days, for six months, for a long time.",
      "Both are commonly used with the present perfect: I've lived here since 2015. / I've lived here for nine years.",
      "Since + point in time. For + duration.",
    ],
    tip: { type: 'warning', text: "Common mistake: 'I've been here since three hours' ✗ → 'I've been here for three hours' ✓. Use FOR with durations!" },
    questions: [
      { q: "I've lived here ______ 2018.", a: "since" },
      { q: "She has been waiting ______ two hours.", a: "for" },
      { q: "We've known each other ______ we were children.", a: "since" },
      { q: "He's worked here ______ ten years.", a: "for" },
      { q: "I haven't seen her ______ last summer.", a: "since" },
      { q: "They've been married ______ a long time.", a: "for" },
      { q: "She has studied English ______ five years.", a: "for" },
      { q: "I've had this car ______ January.", a: "since" },
      { q: "We haven't spoken ______ the argument.", a: "since" },
      { q: "He has been sleeping ______ three hours.", a: "for" },
    ],
  },
  {
    id: 6,
    title: "Ago",
    subtitle: "looking back from now",
    explanation: [
      "AGO means 'before now'. It is used with the past simple tense.",
      "I started this job three years ago. (= three years before now)",
      "She left ten minutes ago.",
      "AGO comes AFTER the time expression: two days ago, a long time ago, a few minutes ago.",
      "Do not use AGO with the present perfect — use it with the past simple.",
    ],
    tip: { type: 'warning', text: "'I have started this job three years ago' ✗ → 'I started this job three years ago' ✓. AGO requires past simple." },
    questions: [
      { q: "I moved here two years ______.", a: "ago" },
      { q: "She called me ten minutes ______.", a: "ago" },
      { q: "They got married a long time ______.", a: "ago" },
      { q: "He left the office an hour ______.", a: "ago" },
      { q: "We met five years ______.", a: "ago" },
      { q: "I finished the book a week ______.", a: "ago" },
      { q: "The accident happened three days ______.", a: "ago" },
      { q: "She graduated six months ______.", a: "ago" },
      { q: "I saw that film a few weeks ______.", a: "ago" },
      { q: "He bought this house twenty years ______.", a: "ago" },
    ],
  },
  {
    id: 7,
    title: "Before / Prior To",
    subtitle: "earlier than a point in time",
    explanation: [
      "BEFORE means 'earlier than' a time or event: before lunch, before 5 o'clock, before the meeting.",
      "PRIOR TO is more formal and means the same as BEFORE: prior to the meeting, prior to departure.",
      "Before + noun/pronoun/-ing: I left before the end. / Wash your hands before eating.",
      "Before + clause: I want to finish before it gets dark.",
    ],
    tip: { type: 'info', text: "PRIOR TO is common in formal or business English. In everyday speech, BEFORE is more natural." },
    questions: [
      { q: "Please arrive ______ 9 o'clock.", a: "before" },
      { q: "I always have coffee ______ breakfast.", a: "before" },
      { q: "______ to the meeting, please read the report.", a: "prior" },
      { q: "She finished the project ______ the deadline.", a: "before" },
      { q: "Wash your hands ______ eating.", a: "before" },
      { q: "______ to departure, check your passport.", a: "prior" },
      { q: "I had never seen snow ______ I visited Canada.", a: "before" },
      { q: "He left ______ the film ended.", a: "before" },
      { q: "______ to joining the company, she worked in banking.", a: "prior" },
      { q: "Make sure you stretch ______ exercising.", a: "before" },
    ],
  },
];

export const verbAdjectivePrepositionModule: PrepositionModule = {
  id: 8,
  title: "Verbs & Adjectives + Prepositions",
  subtitle: "talk about/to, wait for, agree with, work in/for/as, apply for/to",
  explanation: [
    "TALK ABOUT a thing or topic. TALK TO a person: Let's talk about the project. / I need to talk to my boss.",
    "WAIT FOR someone or something: I'm waiting for the bus.",
    "AGREE WITH a person or idea: I agree with you.",
    "ASK FOR something you want. BORROW FROM someone: Can I ask for help? / I borrowed a book from the library.",
    "WRITE FOR a purpose. WRITE TO a person: She writes for a magazine. / I wrote to my friend.",
    "LISTEN TO music, a podcast, a person: I like listening to jazz.",
    "PAY FOR something you buy: Who is going to pay for dinner?",
    "WORK IN a company (inside the building). WORK FOR a company (employed by). WORK AS + job title: He works in a bank. / She works for Google. / He works as a DJ.",
    "APPLY FOR a job or position. APPLY TO a company or university: I applied for the job. / She applied to Oxford.",
  ],
  tip: { type: 'info', text: "Common confusion: 'work for' (employer) vs 'work as' (role) vs 'work in' (location/field). Also: 'apply for' (the position) vs 'apply to' (the organisation)." },
  questions: [
    { q: "Can we talk ______ the project?", a: "about" },
    { q: "I need to talk ______ my manager.", a: "to" },
    { q: "She has been waiting ______ the bus for 20 minutes.", a: "for" },
    { q: "I completely agree ______ you.", a: "with" },
    { q: "Can I borrow this book ______ you?", a: "from" },
    { q: "He works ______ a software engineer.", a: "as" },
    { q: "She works ______ a large international company.", a: "for" },
    { q: "I applied ______ the marketing position.", a: "for" },
    { q: "She applied ______ that university last year.", a: "to" },
    { q: "Who is going to pay ______ dinner tonight?", a: "for" },
  ],
};
