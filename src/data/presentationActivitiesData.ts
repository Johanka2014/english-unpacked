// All exercise data for Presentation Skills Unit 1

export const fillInBlanksData = [
  {
    presentation: "Presentation 1",
    sentences: [
      { id: 1, text: "First of all, let me ____ you all for being here today.", answer: "thank" },
      { id: 2, text: "Let me ____ myself. My name is...", answer: "introduce" },
      { id: 3, text: "I'm here today to ____ our new semi-automatic shelving system.", answer: "present" },
      { id: 4, text: "My talk is ____ relevant to those of you who are responsible for the different parts we supply.", answer: "particularly" },
    ],
  },
  {
    presentation: "Presentation 2",
    sentences: [
      { id: 5, text: "I'm happy that so many of you could ____ it today at such short notice.", answer: "make" },
      { id: 6, text: "As you can see on the screen, our topic today is project ____.", answer: "documentation" },
      { id: 7, text: "This is extremely ____ for all of us who are directly involved in international project management, right?", answer: "relevant" },
    ],
  },
  {
    presentation: "Presentation 3",
    sentences: [
      { id: 8, text: "I'm aware that you all have very tight ____, so I appreciate you taking the time to come here today.", answer: "schedules" },
      { id: 9, text: "As you ____ know, my name is... I'm the new HR manager here at Weston Ltd.", answer: "probably" },
      { id: 10, text: "Today's topic will be very important for you as ____, since I'll need your help to evaluate and select candidates for training.", answer: "managers" },
    ],
  },
];

export const categorizationData = {
  phrases: [
    { id: "p1", text: "I'm here today to present our new semi-automatic shelving system.", category: "topic" },
    { id: "p2", text: "First of all, let me thank you all for being here today.", category: "welcome" },
    { id: "p3", text: "Let me introduce myself. My name is...", category: "intro" },
    { id: "p4", text: "My talk is particularly relevant to those of you who...", category: "relevance" },
    { id: "p5", text: "I'm happy that so many of you could make it today.", category: "welcome" },
    { id: "p6", text: "Today's topic will be very important for you as...", category: "relevance" },
  ],
  categories: [
    { id: "welcome", title: "b) Welcoming the audience" },
    { id: "intro", title: "c) Saying who you are" },
    { id: "topic", title: "a) Saying what the topic is" },
    { id: "relevance", title: "d) Saying why the topic is relevant" },
  ],
};

export const matchingData = [
  { id: 1, formal: "Good afternoon, ladies and gentlemen.", informal: "Hi, everyone." },
  { id: 2, formal: "Today I would like to...", informal: "What I want to do today is..." },
  { id: 3, formal: "Let me just start by introducing myself. My name is...", informal: "As you know, I'm..." },
  { id: 4, formal: "It's a pleasure to welcome you today.", informal: "It's good to see you all here." },
  { id: 5, formal: "In my presentation I would like to report on...", informal: "Today I'm going to talk about..." },
  { id: 6, formal: "The topic of today's presentation is...", informal: "In my talk I'll tell you about..." },
  { id: 7, formal: "I suggest that we begin now.", informal: "OK, shall we get started?" },
  { id: 8, formal: "I'm aware that you all have very tight schedules...", informal: "I know you are all very busy..." },
];

export const orderingData = [
  { id: 1, text: "Hello, everyone.", order: 1 },
  { id: 2, text: "First of all, let me thank you for coming here today. I'm aware that you're all busy preparing for the annual meeting this week, so I really appreciate you taking the time to be here.", order: 2 },
  { id: 3, text: "For those of you who don't know me, my name is Gordon Selfridge. I'm the project manager in charge of the Bak Tower building project in Dubai.", order: 3 },
  { id: 4, text: "This morning I'd like to update you on the current status of work at the construction site. The information I give you today should help you with planning your next steps.", order: 4 },
  { id: 5, text: "I've divided my presentation into three parts.", order: 5 },
  { id: 6, text: "I'll start off by showing you some photos of the building site and discussing the progress we've made since January.", order: 6 },
  { id: 7, text: "Then I'll move on to the problems we're facing with our local suppliers.", order: 7 },
  { id: 8, text: "I'll end with some ideas for reducing labour costs that we've been looking into.", order: 8 },
  { id: 9, text: "My talk should take about 30 minutes. Please feel free to interrupt me at any time with questions.", order: 9 },
  { id: 10, text: "Oh, and don't worry about taking notes. I'll be handing out copies of the PowerPoint slides.", order: 10 },
];

export const sentenceCompletionData = [
  { id: 1, start: "Today I'd like to give...", end: "you an overview of our present market position." },
  { id: 2, start: "I'll be showing...", end: "you how the database works." },
  { id: 3, start: "During the next two hours we'll be talking...", end: "about EU tax reform." },
  { id: 4, start: "I'd like to bring...", end: "you up to date on SEKO's investment plans." },
  { id: 5, start: "This afternoon I'm going to report...", end: "on our financial targets for the division." },
  { id: 6, start: "Today I'd like to update...", end: "you on the proposed training project." },
  { id: 7, start: "This morning we'll be looking...", end: "at business opportunities in Asia." },
  { id: 8, start: "Today I'll begin...", end: "by telling you about what Jane's group is working on." },
];

export const structuringActivityData = {
  words: ["after", "all", "areas", "divided", "finally", "start", "then", "third"],
  sentences: [
    {
      id: 1,
      parts: [
        "I'll be talking to you today about the after-sales service plans we offer. I'll ",
        { answer: "start" },
        " by describing the various packages in detail. ",
        { answer: "then" },
        " I'll go on to show you some case studies. ",
        { answer: "finally" },
        ", I'll discuss how you can choose the best plan to meet your customers' needs.",
      ],
    },
    {
      id: 2,
      parts: [
        "I've ",
        { answer: "divided" },
        " my talk into three main parts. First of ",
        { answer: "all" },
        ", I'll tell you something about the history of our company. ",
        { answer: "after" },
        " that I'll describe how the company is structured and finally, I'll give you some details about our range of products and services.",
      ],
    },
    {
      id: 3,
      parts: [
        "I'd like to update you on what we've been working on over the last year. I'll focus on three main ",
        { answer: "areas" },
        ": first, our joint venture in Asia; second, the new plant in Charleston. And ",
        { answer: "third" },
        ", our redevelopment project.",
      ],
    },
  ],
};

export const prepositionsActivityData = {
  words: ["about", "at", "for", "into", "of", "on", "to", "with"],
  sentences: [
    { id: 1, parts: ["Thank you ", { answer: "for" }, " coming all this way."] },
    { id: 2, parts: ["I've divided my presentation ", { answer: "into" }, " three parts."] },
    { id: 3, parts: ["First of all, I'll give you an overview ", { answer: "of" }, " our financial situation."] },
    { id: 4, parts: ["First, we'll be looking ", { answer: "at" }, " the company's sales in the last two quarters."] },
    { id: 5, parts: ["In the first part of my presentation I'll focus ", { answer: "on" }, " the current project status."] },
    { id: 6, parts: ["Point one deals ", { answer: "with" }, " APG's new regulations for Internet use."] },
    { id: 7, parts: ["Secondly, I'll talk ", { answer: "about" }, " our investment in office technology."] },
    { id: 8, parts: ["After that I'll move on ", { answer: "to" }, " the next point."] },
  ],
};

export const listeningOrderingData = [
  { id: "a", text: "This morning I'd like to update you on the current status of work at the construction site. The information I give you today should help you with planning your next steps.", order: 4 },
  { id: "b", text: "For those of you who don't know me, my name is Gordon Selfridge. Let me just write that down for you. OK. I'm the project manager in charge of the Bak Tower building project in Dubai.", order: 3 },
  { id: "c", text: "I've divided my presentation into three parts.", order: 5 },
  { id: "d", text: "Hello, everyone.", order: 1 },
  { id: "e", text: "Then I'll move on to the problems we're facing with our local suppliers.", order: 7 },
  { id: "f", text: "First of all, let me thank you for coming here today. I'm aware that you're all busy preparing for the annual meeting this week, so I really appreciate you taking the time to be here.", order: 2 },
  { id: "g", text: "I'll start off by showing you some photos of the building site and discussing the progress we've made since January.", order: 6 },
  { id: "h", text: "My talk should take about 30 minutes. Please feel free to interrupt me at any time with questions.", order: 9 },
  { id: "i", text: "I'll end with some ideas for reducing labour costs that we've been looking into.", order: 8 },
  { id: "j", text: "Oh, and don't worry about taking notes. I'll be handing out copies of the PowerPoint slides.", order: 10 },
];

export const pointOrderingData = [
  { id: "a", text: "reducing labour costs", order: 8 },
  { id: "b", text: "welcome & introduction", order: 1 },
  { id: "c", text: "30 minutes for presentation", order: 3 },
  { id: "d", text: "update on current status", order: 2 },
  { id: "e", text: "handout after presentation", order: 4 },
  { id: "f", text: "progress made since January", order: 6 },
  { id: "g", text: "problems with local suppliers", order: 7 },
  { id: "h", text: "questions during presentation OK", order: 5 },
  { id: "i", text: "three main parts", order: 9 },
];

export const replacingPhrasesData = {
  words: ["after that", "begin", "I'm", "realize", "responsible for", "sections", "turn"],
  sentences: [
    { id: 1, highlighted: "start off by", fullText: "I'll {highlight} showing you ...", answer: "begin" },
    { id: 2, highlighted: "parts", fullText: "I've divided my presentation into three {highlight}.", answer: "sections" },
    { id: 3, highlighted: "my name is", fullText: "For those of you who don't know me, {highlight} Gordon Smith.", answer: "I'm" },
    { id: 4, highlighted: "Then I'll move on", fullText: "{highlight} to the problems ...", answer: "after that" },
    { id: 5, highlighted: "in charge of", fullText: "I'm the project manager {highlight} our Dubai building project.", answer: "responsible for" },
    { id: 6, highlighted: "aware that", fullText: "I'm {highlight} you're all busy preparing for the annual meeting ...", answer: "realize" },
  ],
};

export const matchingSentencesData = [
  { id: 1, start: "For those of you who don't know me,", end: "I'm Bob Kay in charge of the software division." },
  { id: 2, start: "Feel free to", end: "ask questions at any time." },
  { id: 3, start: "This won't take more", end: "than 20 minutes of your time." },
  { id: 4, start: "I'll be passing out", end: "handouts in a few minutes." },
  { id: 5, start: "This part of the presentation will take", end: "about 10 minutes." },
  { id: 6, start: "I'll start off by giving you", end: "an overview of our product range." },
  { id: 7, start: "There's no need", end: "to take notes. Everything is on the handout." },
  { id: 8, start: "There will be time", end: "for questions after my talk." },
];

export const listeningCompletionData: { id: number; parts: (string | { type: "input"; answer: string })[] }[] = [
  {
    id: 1,
    parts: [
      { type: "input", answer: "i was sitting" },
      ", I was sitting in the waiting room at the dentist's the other day when I ",
      { type: "input", answer: "read" },
      " something very interesting in one of the ",
      { type: "input", answer: "magazines" },
      " that was lying there.",
    ],
  },
  {
    id: 2,
    parts: [
      { type: "input", answer: "suppose" },
      " you worked in a small to medium-sized company and were ",
      { type: "input", answer: "responsible" },
      " for making people in your company aware of health and safety issues. How would you ",
      { type: "input", answer: "go about it" },
      "?",
    ],
  },
  {
    id: 3,
    parts: [
      { type: "input", answer: "did you know" },
      " that the number of possible ways of playing the first four moves per side in a game of chess is ...?",
    ],
  },
  {
    id: 4,
    parts: [
      "So, let me start by ",
      { type: "input", answer: "asking you a question" },
      ". Why should we introduce a double quality check here at Auto Spares & Parts ...? Well, I'm here today to ",
      { type: "input", answer: "tell you" },
      ".",
    ],
  },
];

export const attentionGrabbingOpeningsData = [
  { id: 1, col1: "Did you know that", col2: "American Airlines saved $40,000 in 1987", col3: "by eliminating one olive from each salad served in first-class?" },
  { id: 2, col1: "I read in an article somewhere", col2: "that can't is a four-letter word.", col3: "I tend to agree with that!" },
  { id: 3, col1: "Imagine", col2: "you won a million euros.", col3: "Who would you tell first?" },
  { id: 4, col1: "Can we really", col2: "compete with the Chinese?", col3: "Of course we can!" },
];

export const attentionGrabbersData = [
  {
    id: 1,
    text: "Did you know that the number of possible ways of playing the first four moves per side in a game of chess is ...?",
    options: ["An interesting fact", "A rhetorical question", "An anecdote", "A problem"],
    answer: "An interesting fact",
  },
  {
    id: 2,
    text: "I was sitting in the waiting room at the dentist's the other day when I read something very interesting in one of the magazines that was lying there.",
    options: ["An interesting fact", "A rhetorical question", "An anecdote", "A problem"],
    answer: "An anecdote",
  },
  {
    id: 3,
    text: "Suppose you worked in a small to medium-sized company and were responsible for making people in your company aware of health and safety issues. How would you go about it?",
    options: ["An interesting fact", "A rhetorical question", "An anecdote", "A problem"],
    answer: "A problem",
  },
  {
    id: 4,
    text: "Why should we introduce a double quality check here at Auto Spares & Parts....? Well, I'm here today to tell you.",
    options: ["An interesting fact", "A rhetorical question", "An anecdote", "A problem"],
    answer: "A rhetorical question",
  },
];

export const wordOrderData = [
  { id: 1, words: ["shall", "OK", "get", "we", "started"], answer: "OK shall we get started" },
  { id: 2, words: ["my", "today", "subject", "presentation", "of", "satisfaction", "is", "the", "customer"], answer: "the subject of my presentation today is customer satisfaction" },
  { id: 3, words: ["will", "presentation", "thirty", "my", "about", "take", "minutes"], answer: "my presentation will take about thirty minutes" },
  { id: 4, words: ["issues", "on", "three", "focus", "I'll"], answer: "I'll focus on three issues" },
  { id: 5, words: ["by", "looking", "of", "status", "will", "the", "current", "project", "we", "the", "start", "at"], answer: "we will start by looking at the current status of the project" },
  { id: 6, words: ["that", "did", "know", "popular", "China", "car", "is", "this", "very", "in", "you"], answer: "did you know that this car is very popular in China" },
];

export const audioFiles = {
  presentation1: "https://johanka2014.github.io/presentations/02.mp3",
  presentation2: "https://johanka2014.github.io/presentations/03.mp3",
  presentation3: "https://johanka2014.github.io/presentations/04.mp3",
  listeningOrdering: "https://johanka2014.github.io/presentations/05.mp3",
  listeningCompletion: [
    "https://johanka2014.github.io/presentations/06.mp3",
    "https://johanka2014.github.io/presentations/07.mp3",
    "https://johanka2014.github.io/presentations/08.mp3",
    "https://johanka2014.github.io/presentations/09.mp3",
  ],
};

export const imageFiles = {
  starter: "https://johanka2014.github.io/presentations/presentations_1.png",
  structuring2: "https://johanka2014.github.io/presentations/presentations_2.png",
  categorizing: "https://johanka2014.github.io/presentations/presentations_3.png",
};

export const nervousnessContent = {
  intro: 'The American author Mark Twain once put it like this: \'There are two types of people: those that are nervous and those that are liars.\' So, once you accept that (almost) everybody who gives a presentation - whether formal or informal, long or short, to strangers or colleagues - is nervous, then you just need to find ways to deal with nervousness and even learn how to use it to your advantage.',
  subIntro: "Let's first look at ways to deal with and reduce nervousness.",
  tips: [
    { title: "Prepare well.", body: "'Failing to prepare is preparing to fail.' Preparation is the key to a successful presentation. Nothing will relax you more than knowing exactly what you want to say and having practised saying it. Make sure you practise your talk until you feel at home with it - then you can concentrate on other things." },
    { title: "Learn to relax.", body: "Doing stretching or breathing exercises before your talk can help you to reduce nervousness. One example: before your presentation, sit comfortably with your back straight. Breathe in slowly, hold your breath for about five seconds, then slowly exhale. You can relax your facial muscles by opening your eyes and mouth wide, then closing them tightly." },
    { title: "Check out the room.", body: "Make yourself familiar with the place where you will be speaking. Arrive early, walk around the room, and make sure everything you need for your talk is there. Practise using any equipment (e.g. microphone, video projector, OHP) you plan to work with." },
    { title: "Know your audience.", body: "If possible, greet your audience as they arrive and chat with them. It will be easier to speak to people who are not complete strangers." },
    { title: "Concentrate on the message.", body: "Try to focus on the message and your audience - not on your own fears." },
    { title: "Visualize success.", body: "Imagine yourself speaking to your audience in a loud and clear voice. Then visualize the audience applauding loudly at the end of your talk as you smile." },
  ],
  closing: "Use the steps above to reduce nervousness, but also remember that being nervous isn't all bad. Many experienced presenters say that you can also use your nervousness to give you that extra energy that you need to give a good performance.",
  discussionQuestions: [
    "What other tips can you think of for dealing with nervousness?",
    "How do you deal with nervousness before or during a presentation?",
    "How do you prepare your presentations?",
  ],
};

export const checklistItems = [
  "Welcome the audience.",
  "Introduce yourself (name, position/function).",
  "State your topic.",
  "Explain why your topic is important for the audience.",
  "Outline the structure of your talk.",
  "'What comes when?' say when you'll be dealing with each point.",
  "Let the audience know how you're organizing the presentation (handouts, questions, etc.).",
];

export const organizationInfo = {
  timing: [
    "My presentation will take about 20 minutes.",
    "It should take about 30 minutes to cover these issues.",
  ],
  handouts: [
    "Does everybody have a handout/brochure/report? Please take one, and pass them on.",
    "Don't worry about taking notes. I've put all the important statistics on a handout for you.",
    "I'll be handing out copies of the PowerPoint slides at the end of my talk.",
    "I'll email the PowerPoint presentation to you.",
  ],
  questions: [
    "There will be time for questions after my presentation.",
    "If you have any questions, feel free to interrupt me at any time.",
    "Feel free to ask questions at any time during my talk.",
  ],
};

export const structuringInfo1 = {
  intro: "Most formal - and many informal - presentations have three main parts and follow this simple formula:",
  formula: [
    { num: "1", instruction: "Tell the audience what you are going to say!", label: "Introduction" },
    { num: "2", instruction: "Say it!", label: "Main part" },
    { num: "3", instruction: "Tell them what you said!", label: "Conclusion" },
  ],
  patterns: [
    { title: "would like + infinitive", examples: ["Today I'd like to tell you about our new plans.", "This morning I'd like to bring you up to date on our department."] },
    { title: "will + infinitive", examples: ["I'll begin by explaining the function.", "I'll start off by reviewing our progress.", "After that, I'll move on to my next point."] },
    { title: "going to + infinitive", examples: ["I'm going to talk to you today about new developments in the R & D Department.", "This afternoon I'm going to be reporting on the new division."] },
    { title: "will be + verb-ing", examples: ["I'll be talking about our guidelines for Internet use.", "During the next hour we'll be looking at the advantages of this system."] },
  ],
};

export const structuringInfo2 = {
  intro: "The purpose of the introduction is not only to tell the audience who you are, what the talk is about, and why it is relevant to them; you also want to tell the audience (briefly) how the talk is structured. Here are some useful phrases to talk about the structure.",
  phrases: [
    "I've divided my presentation into three (main) parts: x, y, and z.",
    "In my presentation I'll focus on three major issues.",
    "First (of all), I'll be looking at ..., second ..., and third ...",
    "I'll begin / start off by explaining ...",
    "Then / Next / After that, I'll go on to ...",
    "Finally, I'll offer some solutions.",
  ],
  tip: "The most common way to structure a presentation is to have three main parts, and then subdivide them into (three) smaller sections.",
};
