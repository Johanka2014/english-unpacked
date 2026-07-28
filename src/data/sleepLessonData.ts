// Data for the B2 Sleep lesson (Used To grammar)

export const videoComprehension = [
  {
    id: 1,
    text: "According to the TED-Ed video, after how many hours awake do most people start to feel the effects of sleep deprivation?",
    options: ["6 hours", "12 hours", "24 hours", "48 hours"],
    answer: "24 hours",
  },
  {
    id: 2,
    text: "One of the first cognitive functions to suffer from lack of sleep is…",
    options: ["long-term memory", "concentration and reaction time", "vocabulary", "physical strength"],
    answer: "concentration and reaction time",
  },
  {
    id: 3,
    text: "The rare genetic disorder mentioned in the video that leads to death from lack of sleep is called…",
    options: [
      "chronic insomnia",
      "sleep apnoea",
      "fatal familial insomnia",
      "narcolepsy",
    ],
    answer: "fatal familial insomnia",
  },
  {
    id: 4,
    text: "The video explains that during sleep the brain…",
    options: [
      "shuts down completely",
      "clears out toxins and consolidates memories",
      "only rests the body, not the mind",
      "produces adrenaline",
    ],
    answer: "clears out toxins and consolidates memories",
  },
];



export const readingPassage = [
  "Sleep matters — but why? Some animals die without it, while others can survive for months. Humans spend a third of their lives asleep, and yet no one is entirely sure why we do it. Recent research suggests that sleep is essential for memory, mood, immune function and even weight regulation.",
  "For many people, however, a good night's rest is elusive. Insomnia affects roughly one adult in three at least once a week, and chronic sleep deprivation is now considered a serious public-health issue. Stress, caffeine, screen light and irregular schedules all conspire to keep the modern brain awake long after it should be switched off.",
  "Sleep scientists are unanimous on one point: routine matters. Going to bed and waking up at the same time — even at weekends — trains the body's internal clock. Cool, dark bedrooms help; heavy meals and late-night alcohol don't. And although a short afternoon nap of 20 minutes can boost alertness, sleeping longer during the day often makes falling asleep at night harder.",
  "What about dreams? We dream mostly during REM (rapid-eye-movement) sleep, roughly every 90 minutes. Nightmares are far more common in people who are anxious or who go to bed hungry. If you struggle to remember your dreams, don't worry — most of us forget 95% of them within minutes of waking up.",
];

export const readingComprehension = [
  {
    id: 1,
    text: "According to the text, what proportion of adults experience insomnia at least weekly?",
    options: ["One in ten", "One in three", "Half of all adults", "Two in three"],
    answer: "One in three",
  },
  {
    id: 2,
    text: "Which of the following is NOT mentioned as harmful for sleep?",
    options: ["Late-night alcohol", "Screen light", "Cool bedrooms", "Heavy meals"],
    answer: "Cool bedrooms",
  },
  {
    id: 3,
    text: "How long should an afternoon nap ideally be?",
    options: ["5 minutes", "20 minutes", "45 minutes", "90 minutes"],
    answer: "20 minutes",
  },
  {
    id: 4,
    text: "REM sleep occurs approximately every…",
    options: ["30 minutes", "60 minutes", "90 minutes", "120 minutes"],
    answer: "90 minutes",
  },
  {
    id: 5,
    text: "What percentage of our dreams do most people forget?",
    options: ["25%", "50%", "75%", "95%"],
    answer: "95%",
  },
];

export const readingVocabMatch = [
  { id: 1, left: "elusive", right: "difficult to find or achieve" },
  { id: 2, left: "chronic", right: "continuing for a long time" },
  { id: 3, left: "conspire", right: "work together, often with a bad result" },
  { id: 4, left: "unanimous", right: "everyone agrees" },
  { id: 5, left: "boost", right: "improve or increase" },
  { id: 6, left: "struggle to", right: "find something difficult to do" },
];

// Sleep vocabulary — fill in the blanks (first-letter hint)
export const sleepVocabBlanks = [
  { prompt: "Most people start feeling s___ around 11pm.", answer: "sleepy" },
  { prompt: "When you're tired you often open your mouth and y___.", answer: "yawn" },
  { prompt: "Before bed I always set my a___ clock for 7am.", answer: "alarm" },
  { prompt: "I put my head on the p___ and closed my eyes.", answer: "pillow" },
  { prompt: "In winter I sleep under a thick d___.", answer: "duvet" },
  { prompt: "My husband s___ so loudly I can't sleep.", answer: "snores" },
  { prompt: "I had a terrible n___ about falling off a cliff.", answer: "nightmare" },
  { prompt: "I didn't hear the alarm and I o___.", answer: "overslept" },
  { prompt: "Coffee in the evening always keeps me a___.", answer: "awake" },
  { prompt: "She can't sleep at all — she suffers from i___.", answer: "insomnia" },
  { prompt: "In Spain many people have a s___ after lunch.", answer: "siesta" },
  { prompt: "After the flight from Tokyo I was completely j___.", answer: "jet-lagged" },
];

// Similes — matching exercise
export const similes = [
  { id: 1, left: "as stubborn as a…", right: "mule", hint: "won't change his mind" },
  { id: 2, left: "as white as a…", right: "sheet", hint: "looked shocked / pale" },
  { id: 3, left: "drinks like a…", right: "fish", hint: "drinks a lot" },
  { id: 4, left: "sleeps like a…", right: "log", hint: "sleeps very deeply" },
  { id: 5, left: "as blind as a…", right: "bat", hint: "can hardly see" },
  { id: 6, left: "as quick as a…", right: "flash", hint: "extremely fast" },
  { id: 7, left: "eats like a…", right: "horse", hint: "eats huge amounts" },
  { id: 8, left: "works like a…", right: "dream", hint: "works perfectly" },
];

// Grammar: Used to / didn't use to / be used to / get used to
export const usedToMcq = [
  {
    id: 1,
    text: "When I was a student, I ___ stay up until 3am.",
    options: ["used to", "am used to", "get used to", "was used to"],
    answer: "used to",
  },
  {
    id: 2,
    text: "I'm a nurse — I ___ working night shifts. It doesn't bother me any more.",
    options: ["used to", "am used to", "use to", "didn't use to"],
    answer: "am used to",
  },
  {
    id: 3,
    text: "At first the noise from the street kept me awake, but I quickly ___ it.",
    options: ["used to", "was used to", "got used to", "get used"],
    answer: "got used to",
  },
  {
    id: 4,
    text: "___ you ___ drink coffee before bed when you were younger?",
    options: ["Did / used to", "Did / use to", "Were / used to", "Do / used to"],
    answer: "Did / use to",
  },
  {
    id: 5,
    text: "My grandmother ___ have a siesta every afternoon, but she doesn't any more.",
    options: ["is used to", "used to", "gets used to", "was used to"],
    answer: "used to",
  },
  {
    id: 6,
    text: "I ___ snoring — my wife has complained about it for years.",
    options: ["used to", "am used to", "get used to", "didn't use to"],
    answer: "am used to",
  },
  {
    id: 7,
    text: "He ___ sleeping in a soft bed, so the hostel mattress was a shock.",
    options: ["used to", "wasn't used to", "didn't use to", "doesn't use to"],
    answer: "wasn't used to",
  },
  {
    id: 8,
    text: "It took me a month to ___ the time difference after moving to New York.",
    options: ["used to", "be used to", "get used to", "using to"],
    answer: "get used to",
  },
  {
    id: 9,
    text: "I ___ nightmares as a child, but they stopped when I was ten.",
    options: ["was used to having", "used to have", "am used to", "got used to have"],
    answer: "used to have",
  },
  {
    id: 10,
    text: "Don't worry — you'll ___ the new schedule after a week or two.",
    options: ["used to", "be used to", "get used to", "have used to"],
    answer: "get used to",
  },
];

export const usedToTransform = [
  { prompt: "I don't play tennis now, but I d___ when I was younger. (play)", answer: "did" },
  { prompt: "She isn't scared of the dark any more — she u___ to be, though. (used)", answer: "used" },
  { prompt: "After six months in Prague he finally g___ used to the cold winters. (got)", answer: "got" },
  { prompt: "I'm a doctor, so I a___ used to working long hours. (am)", answer: "am" },
  { prompt: "Did you u___ to have a nap after lunch? (use)", answer: "use" },
  { prompt: "He w___ used to spicy food, so his eyes watered. (was)", answer: "wasn't" },
  { prompt: "It took her a while to g___ used to driving on the left. (get)", answer: "get" },
  { prompt: "My dad u___ to smoke a pipe, but he gave up years ago. (used)", answer: "used" },
];

// Final mixed quiz (10 questions)
export const finalQuiz = [
  {
    id: 1,
    text: "Which word means 'a light, brief sleep during the day'?",
    options: ["Insomnia", "Nap", "Nightmare", "Duvet"],
    answer: "Nap",
  },
  {
    id: 2,
    text: "Complete: 'I ___ live in Paris when I was a child.'",
    options: ["am used to", "used to", "get used to", "was used to"],
    answer: "used to",
  },
  {
    id: 3,
    text: "According to the reading, sleep is essential for all of the following EXCEPT…",
    options: ["memory", "mood", "hair growth", "immune function"],
    answer: "hair growth",
  },
  {
    id: 4,
    text: "'He drinks like a ___.' Complete the simile.",
    options: ["horse", "log", "fish", "bat"],
    answer: "fish",
  },
  {
    id: 5,
    text: "Which sentence is correct?",
    options: [
      "I'm used to work late.",
      "I'm used to working late.",
      "I use to working late.",
      "I used to working late.",
    ],
    answer: "I'm used to working late.",
  },
  {
    id: 6,
    text: "If someone 'sleeps like a log', they…",
    options: ["snore very loudly", "sleep very deeply", "have nightmares", "wake up early"],
    answer: "sleep very deeply",
  },
  {
    id: 7,
    text: "'She ___ to going to bed early — now she doesn't mind at all.'",
    options: ["used", "got used", "was used", "is used"],
    answer: "got used",
  },
  {
    id: 8,
    text: "You cover yourself with this at night in cold weather:",
    options: ["Pillow", "Sheet only", "Duvet", "Alarm"],
    answer: "Duvet",
  },
  {
    id: 9,
    text: "The reading suggests napping longer than 20 minutes can…",
    options: [
      "improve alertness even more",
      "make falling asleep at night harder",
      "cure insomnia",
      "reduce dreams",
    ],
    answer: "make falling asleep at night harder",
  },
  {
    id: 10,
    text: "Choose the correct question form:",
    options: [
      "Did you used to have nightmares?",
      "Did you use to have nightmares?",
      "Do you used to have nightmares?",
      "Were you use to have nightmares?",
    ],
    answer: "Did you use to have nightmares?",
  },
];
