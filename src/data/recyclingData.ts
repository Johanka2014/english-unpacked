// Topics · Recycling — B2 lesson data
// Sources adapted into original tasks: a Business Spotlight recycling vocabulary page,
// a Newsflash English lesson on the Scottish deposit return scheme (05/09/17),
// a Cambridge B2 Reading Part 6 article "How the recycling symbol was created",
// a Cambridge B2 Use of English Part 1 cloze "Turn trash into treasure",
// a magazine article about Izhar Gafni's cardboard bicycle,
// the "Headlines" Visible Thinking routine, and Melissa Seeley's TED talk
// "We cannot recycle our way out of it — the circular economy is the answer".

import type { Activity } from './engineeringData';
import type { FlashcardItem } from '@/components/presentations/Flashcards';

import immortalCupImg from '@/assets/topics/recycling-immortal-cup.jpg.asset.json';
import bikeImg from '@/assets/topics/recycling-cardboard-bike.jpg';

/* ───────────────────────── 1 · Warm-up ───────────────────────── */

export const warmUp: Activity[] = [
  {
    type: 'intro',
    title: '1 · Warm-up discussion',
    body: 'Work with a partner. Think about the last 24 hours before you answer.',
    bullets: [
      'What have you thrown away today? How much of it could have been recycled?',
      'How many different bins does your household have? Who decides what goes where?',
      'Is recycling in your country easy, or is it more trouble than it is worth?',
      'Do you ever buy something because of the packaging — or refuse to buy it for the same reason?',
      'Whose job is it to solve the waste problem: shoppers, shops, or governments?',
    ],
  },
  {
    type: 'task',
    title: '1b · The immortal plastic cup',
    body: 'A well-known cartoon shows a paper cup saying goodbye to a plastic cup: the paper cup breaks down, but the plastic one cries "Curse this immortality!" because it will still be here in 450 years. Discuss the idea in pairs.',
    bullets: [
      'Why is being "immortal" a problem for a plastic cup and not for a stone?',
      'Which single-use items do you use most often? Could you replace them?',
      'Is a plastic bottle that is recycled five times still a problem? Why (not)?',
    ],
    image: depositImg,
    imageAlt: 'A hand putting an empty plastic drinks bottle into a blue reverse-vending machine in a supermarket',
  },
  {
    type: 'discussion',
    title: '1c · Predict',
    body: 'You will meet these facts later in the lesson. Guess the answers now, then check as you work through the tabs.',
    bullets: [
      'How much did the UK charge for a plastic carrier bag when the charge was introduced?',
      'By how many did the number of bags handed out in UK supermarkets fall in one year?',
      'How long did it take an American student to design the recycling symbol we all know?',
      'How long did the inventor of the cardboard bicycle soak his cardboard in water to test it?',
    ],
  },
];

export const rankingItems = [
  'Glass bottle',
  'Aluminium can',
  'Cardboard box',
  'Plastic drinks bottle',
  'Coffee cup with a plastic lining',
  'Old smartphone',
  'Crisp packet',
  'Used batteries',
];

/* ───────────────────────── 2 · Vocabulary ───────────────────────── */

export const recyclingFlashcards: FlashcardItem[] = [
  { term: 'recycling bank / recycling depot', definition: 'a place with containers where the public can leave sorted waste', example: 'There is a recycling bank behind the supermarket car park.' },
  { term: 'recycling bin / container', definition: 'a bin for one type of material only', example: 'Paper goes in the blue recycling bin.' },
  { term: 'scrap metal', definition: 'old or waste metal that can be melted down and used again', example: 'They sold the broken radiators as scrap metal.' },
  { term: 'cardboard', definition: 'thick stiff paper used to make boxes', example: 'Flatten the cardboard before you put it in the container.' },
  { term: 'styrofoam / polystyrene', definition: 'light white plastic foam used for cups and packing material', example: 'Styrofoam is very hard to recycle.' },
  { term: 'garden clippings / yard waste', definition: 'grass, leaves and branches cut from a garden', example: 'Garden clippings can be composted rather than binned.' },
  { term: 'e-waste (electronic waste)', definition: 'discarded computers, phones and other electrical goods', example: 'E-waste is recycled separately for its valuable parts.' },
  { term: 'used-clothing bin', definition: 'a container for clothes you no longer want', example: 'She put two bags of old jumpers in the used-clothing bin.' },
  { term: 'hazardous waste', definition: 'waste that is dangerous to people or the environment', example: 'Paint and solvents count as hazardous waste.' },
  { term: 'fluorescent tube / lamp', definition: 'a long strip light containing mercury', example: 'Fluorescent tubes must never go in the normal bin.' },
  { term: 'low-energy bulb', definition: 'a light bulb that uses very little electricity', example: 'Low-energy bulbs last far longer than old ones.' },
  { term: 'aerosol can / spray can', definition: 'a metal container that releases its contents as a spray', example: 'Empty aerosol cans go with the metal.' },
  { term: 'bulky waste', definition: 'large items such as furniture that will not fit in a bin', example: 'The council collects bulky waste once a month.' },
  { term: 'landfill', definition: 'a place where rubbish is buried in the ground', example: 'Most of that packaging still ends up in landfill.' },
  { term: 'single-use', definition: 'designed to be used once and then thrown away', example: 'Many cafés have banned single-use cutlery.' },
  { term: 'deposit return scheme', definition: 'a system where you pay extra for a container and get the money back when you return it', example: 'Under the deposit return scheme you get 20p back per bottle.' },
  { term: 'litter', definition: 'rubbish left in a public place', example: 'The beach was covered in litter after the weekend.' },
  { term: 'to sort (your) waste', definition: 'to separate rubbish into different types', example: 'Sorting your waste takes about a minute a day.' },
  { term: 'to dispose of something', definition: 'to get rid of something, especially waste', example: 'Batteries must be disposed of safely.' },
  { term: 'the circular economy', definition: 'an economy in which products and materials are reused rather than thrown away', example: 'In a circular economy, waste becomes a raw material.' },
];

export const vocabGapFill: Activity[] = [
  {
    type: 'type-blanks',
    title: '2b · At the recycling bank',
    body: 'Complete each sentence with a word or phrase from the flashcards. Use the phrase bank if you need help.',
    phraseBank: true,
    blanks: [
      { prompt: 'At a recycling bank you will find individual recycling ______ for different kinds of material.', answer: 'containers' },
      { prompt: 'The green container is used for wine bottles and other ______.', answer: 'glass' },
      { prompt: 'Yoghurt cups and packing material are made of ______.', answer: 'plastic' },
      { prompt: 'Light white foam used to protect goods in a box is called ______.', answer: 'styrofoam' },
      { prompt: 'Flattened boxes go in with the paper and ______.', answer: 'cardboard' },
      { prompt: 'Steel and other metals go in the container for ______.', answer: 'scrap metal' },
      { prompt: 'Potentially dangerous material is known as ______.', answer: 'hazardous waste' },
      { prompt: 'Because of the mercury they contain, ______ are collected separately.', answer: 'fluorescent tubes' },
      { prompt: 'The ______ that power small devices must also be collected separately.', answer: 'batteries' },
      { prompt: 'Computers and printers count as ______ and are recycled for their parts.', answer: 'e-waste' },
      { prompt: 'Old furniture and similar large items are called ______.', answer: 'bulky waste' },
    ],
  },
  {
    type: 'matching',
    title: '2c · Quick check',
    body: 'Match each word with its definition.',
    pairs: [
      { id: 1, left: 'landfill', right: 'a site where rubbish is buried in the ground' },
      { id: 2, left: 'litter', right: 'rubbish dropped in a public place' },
      { id: 3, left: 'single-use', right: 'thrown away after one use' },
      { id: 4, left: 'deposit return scheme', right: 'you get money back when you bring the container back' },
      { id: 5, left: 'scrap metal', right: 'old metal collected to be melted down' },
      { id: 6, left: 'e-waste', right: 'discarded electrical and electronic equipment' },
      { id: 7, left: 'bulky waste', right: 'items too large for an ordinary bin' },
      { id: 8, left: 'circular economy', right: 'a system where materials are used again and again' },
    ],
  },
  {
    type: 'type-blanks',
    title: '2d · Collocations',
    body: 'Complete the collocations with one verb in each gap.',
    blanks: [
      { prompt: 'to ______ your waste into paper, glass and plastic', answer: 'sort' },
      { prompt: 'to ______ down on the amount of packaging you buy', answer: 'cut' },
      { prompt: 'to ______ of hazardous waste safely', answer: 'dispose' },
      { prompt: 'to ______ litter on the streets (= to deal with the problem)', answer: 'tackle' },
      { prompt: 'to ______ a deposit return scheme (= to start it officially)', answer: 'introduce' },
      { prompt: 'to ______ an objection (= to change your mind and no longer object)', answer: 'reverse' },
      { prompt: 'to ______ waste into something valuable', answer: 'turn' },
      { prompt: 'to ______ a huge impact on the environment', answer: 'have' },
    ],
  },
  {
    type: 'word-order',
    title: '2e · Word order',
    body: 'Tap the words to rebuild each sentence about recycling.',
    sentences: [
      'Most households sort their waste into three different containers',
      'The government wants to tackle litter on beaches and in city centres',
      'Batteries and paint must be disposed of separately',
      'A deposit return scheme gives you money back for empty bottles',
      'Recycling cuts down on the amount of rubbish sent to landfill',
      'In a circular economy nothing is treated as waste',
    ],
  },
];

/* ───────────────────────── 3 · Reading ───────────────────────── */

export const bottlesReading: Activity[] = [
  {
    type: 'reading',
    newspaper: true,
    source: 'The Daily Unpacked · Environment',
    title: 'Cash for bottles: Scotland takes on plastic waste',
    body: 'A deposit return scheme could change what happens to every bottle and can you buy.',
    passage: [
      'What do you think about plastic bottle recycling? It is an interesting question, and one that the Scottish government is taking action on. Ministers aim to introduce a deposit return scheme, whereby you can get money back for depositing your plastic drinks bottles, glass bottles and aluminium cans into recycling containers.',
      'The Scottish government wants to tackle litter and clean up its streets. A deposit return scheme could also have a huge impact on the amount of litter found on Scottish beaches. Certainly, it will save money for local authorities, and it will help the recycling industry.',
      'The UK has already seen a huge reduction in plastic bags left as litter since the UK government introduced a 5p charge per plastic bag. In fact, in just one year, the number of plastic bags handed out to shoppers in UK supermarkets fell by six billion.',
      'The idea of cash for bottles is hardly new. People of a certain age will remember getting money back for glass bottles returned to shops. The practice died out when plastic bottles were introduced.',
      'Large drinks manufacturers such as Coca-Cola and Irn-Bru had, until recently, largely been against any plastic bottle refunds. But thanks to public debate about plastic waste in the ocean, Coca-Cola reversed its original objection to the recycling of plastic bottles in Scotland.',
      'Surely any recycling of plastic bottles must be good for the environment, as it reduces the chance of bottles ending up in rivers and, worse, in our oceans, where fish are dying because of the plastic they eat.',
    ],
  },
  {
    type: 'multiple-choice',
    title: '3b · True, false or not given?',
    body: 'Choose the best answer according to the article.',
    mcq: [
      { question: 'Under a deposit return scheme, shoppers pay a small extra sum which they get back later.', options: ['True', 'False', 'Not given'], answerIndex: 0 },
      { question: 'The scheme is expected to cost local authorities money.', options: ['True', 'False', 'Not given'], answerIndex: 1 },
      { question: 'The UK plastic bag charge cut the number of bags given out by six billion in a year.', options: ['True', 'False', 'Not given'], answerIndex: 0 },
      { question: 'Returning glass bottles for money is a completely new idea.', options: ['True', 'False', 'Not given'], answerIndex: 1 },
      { question: 'Coca-Cola changed its position on bottle refunds in Scotland.', options: ['True', 'False', 'Not given'], answerIndex: 0 },
      { question: 'Scotland will introduce the scheme next year.', options: ['True', 'False', 'Not given'], answerIndex: 2 },
    ],
  },
  {
    type: 'multiple-choice',
    title: '3c · Vocabulary in context',
    body: 'What do these words from the article mean?',
    mcq: [
      { question: '"whereby" (paragraph 1) means…', options: ['by means of which', 'in spite of which', 'as soon as'], answerIndex: 0 },
      { question: '"tackle litter" (paragraph 2) means…', options: ['deal with the problem of litter', 'collect litter by hand', 'fine people who drop litter'], answerIndex: 0 },
      { question: '"handed out" (paragraph 3) means…', options: ['given to people', 'thrown away', 'sold cheaply'], answerIndex: 0 },
      { question: '"died out" (paragraph 4) means…', options: ['gradually stopped existing', 'became illegal', 'became very popular'], answerIndex: 0 },
      { question: '"reversed its objection" (paragraph 5) means…', options: ['stopped objecting', 'objected more strongly', 'delayed its decision'], answerIndex: 0 },
    ],
  },
  {
    type: 'discussion',
    title: '3d · Talk about it',
    body: 'Discuss in pairs or small groups.',
    bullets: [
      'Would a deposit return scheme change your behaviour? How much would the deposit have to be?',
      'Who should pay for recycling: shoppers, drinks manufacturers, or the taxpayer?',
      'Charging 5p for a bag worked. What else could be charged for in the same way?',
      'Is banning single-use plastic fairer than charging for it?',
    ],
  },
];

/* 3e · Cambridge-style gapped-sentence reading */

export const symbolReading: Activity[] = [
  {
    type: 'gapped-sentences',
    title: '3e · How the recycling symbol was created',
    body: 'Read this article about Gary Anderson, the man who designed the recycling symbol. Six sentences have been removed. Choose from sentences A–G the one which fits each gap. There is one extra sentence you do not need to use.',
    source: 'Exam practice · Reading Part 6',
    gapParagraphs: [
      'I studied engineering at the University of Southern California at a time when there was a lot of emphasis in the United States on training young people to be engineers. That said, I eventually switched to architecture. I just couldn\u2019t get a grasp on electronics, and architecture seemed more concrete to me.',
      'It was around that time that I saw a poster advertising a design competition being run by the Container Corporation of America. The idea was to create a symbol to represent recycled paper. One of my college requirements had been a graphic design course, so I thought I\u2019d give it a go. It didn\u2019t take me long to come up with my design: only a day or two. {{37}} But I already had arrows and angles in my mind because on my course I\u2019d done a presentation on recycling waste water. I\u2019d come up with a graphic that described this process very simply.',
      'The problem with the design I\u2019d done earlier was that it seemed flat, two-dimensional. So when I sat down to enter the competition, I thought back to a field trip in elementary school to a newspaper office where we\u2019d been shown how paper was fed over rollers as it was printed. {{38}} The three arrows in it look like strips of folded-over paper. I drew them in pencil, and then traced over everything in black ink. These days, with computer graphics packages, it\u2019s rare that designs are quite so plain.',
      'I think I found out I\u2019d won the competition in a letter. Was I excited? Well, yes of course \u2014 but not that excited. {{39}} So it just seemed like, of course I would win! There was a monetary prize, though for the life of me I can\u2019t remember how much it was\u2026 about $2,000?',
      'When I finished my studies, I decided to go into urban planning and I moved to Los Angeles. It seems funny, but I really played down the fact that I\u2019d won this competition. I was afraid it would make me look as though I was interested in graphics, rather than urban planning. {{40}} I remember seeing it once on a leaflet which had been produced on recycled paper, but then it disappeared.',
      'A while after graduating, I flew to Amsterdam for a holiday. I\u2019ll never forget: when I walked off the plane, I saw my symbol. It was on a big recycling bin. And it was bigger than a beach ball! {{41}} I was really taken aback. That was quite a long time ago though. Since then, I\u2019ve got more qualifications and worked for quite a few different firms, some more environmentally aware than others.',
      'I feel much prouder of the recycling symbol now than I used to, probably because it\u2019s so widely seen. Maybe this design has been more important to me than I\u2019d thought. {{42}} There\u2019s more to me than the recycling symbol.',
    ],
    gapOptions: [
      { letter: 'A', text: 'Still, I\u2019d hate to think that my life\u2019s work is defined by it.' },
      { letter: 'B', text: 'I used what I\u2019d seen to create the image.' },
      { letter: 'C', text: 'I\u2019m no expert on recycling but I can certainly see its value.' },
      { letter: 'D', text: 'I hadn\u2019t thought about it for years and there it was right in my face.' },
      { letter: 'E', text: 'I realise that seems ridiculous for something that\u2019s been so successful.' },
      { letter: 'F', text: 'Also, nothing much happened to the symbol for a while.' },
      { letter: 'G', text: 'I guess at that point in my life I had an exaggerated sense of my own importance.' },
    ],
    gapAnswers: [
      { gap: '37', letter: 'C' },
      { gap: '38', letter: 'B' },
      { gap: '39', letter: 'G' },
      { gap: '40', letter: 'F' },
      { gap: '41', letter: 'D' },
      { gap: '42', letter: 'A' },
    ],
  },
];

export const bikeReading: Activity[] = [
  {
    type: 'reading',
    title: '3f · A cheap and long-lasting bike',
    passage: [
      'Izhar Gafni, 50, from Israel, had a dream. He wanted to build a bicycle that almost everyone could afford. The bike should be lightweight but very strong, durable but cheap. With so many specifications, Gafni didn\u2019t know how he would manufacture it. Then one day the answer came to him \u2014 cardboard!',
      'Cardboard? Sure, cardboard can be used to make boxes. But the idea of using it to make a bike was radical; no one had ever done it before. According to Gafni, making a bike from cardboard was extremely difficult. "I had to find the right way to fold the cardboard in several different directions. It took a year and a half, with lots of testing, until I got it right," he explains.',
      'A bicycle is usually made of a variety of materials, such as steel, aluminium, titanium and even carbon fibre. There is a lot of rubber used, and some fibreglass too. All these materials can make a bike that is strong and durable, as well as fireproof and waterproof. But this bike would have none of those materials.',
      'Gafni coats the cardboard with a secret recipe of organic ingredients. The cardboard is then lacquered and painted. To make sure the material was waterproof, the inventor soaked the cardboard in a tank of water for several months. He says the cardboard remained firm and strong.',
      'But Gafni has more surprises up his sleeve. The completed bike has no metal parts at all \u2014 not even the brakes or the chain. Instead of metal, Gafni uses a material made from recycled resources, which had to remain a secret until he got a patent for it.',
    ],
  },
  {
    type: 'multiple-choice',
    title: '3g · Comprehension',
    body: 'Answer according to the text.',
    mcq: [
      { question: 'What was Gafni\u2019s main aim?', options: ['A bike almost anyone could afford', 'The fastest bike in the world', 'A bike made only of metal'], answerIndex: 0 },
      { question: 'What was the hardest part of the design?', options: ['Finding the right way to fold the cardboard', 'Finding a factory', 'Choosing the colour'], answerIndex: 0 },
      { question: 'How long did the development take?', options: ['A year and a half', 'Six weeks', 'Ten years'], answerIndex: 0 },
      { question: 'How did he test that the material was waterproof?', options: ['He soaked it in a tank of water for months', 'He rode it in the rain once', 'He poured paint on it'], answerIndex: 0 },
      { question: '"to have surprises up your sleeve" means…', options: ['to have more surprising things ready', 'to hide a mistake', 'to give up'], answerIndex: 0 },
    ],
    image: bikeImg,
    imageAlt: 'A bicycle with a frame built from folded corrugated cardboard standing in a workshop',
  },
  {
    type: 'discussion',
    title: '3h · Over to you',
    bullets: [
      'Would you buy a cardboard bike? What would worry you about it?',
      'What else could be made from recycled material that people would actually buy?',
      'Is it better to design products that last, or products that can be recycled easily?',
    ],
  },
];

/* ───────────────────────── 4 · Use of English ───────────────────────── */

export const cloze: Activity[] = [
  {
    type: 'multiple-choice',
    title: '4a · Multiple-choice cloze: Turn trash into treasure',
    body: 'Read the leaflet below about a recycling project, then choose the word that best fits each gap. — "The amounts of annual household waste are on the (0) ____. Consequently, (1) ____ of such large amounts is becoming a problem which needs addressing. Our recycling-for-art programme, Turning trash into treasure, is currently one way of tackling this problem. This is a great way of producing original works of art such as mosaics and collages, which are inexpensive to make. Projects may vary from area to area, but everyone is eligible to (2) ____. Recycling has many advantages, such as (3) ____ down on landfill space and limiting environmental damage. This leads to a reduction both in energy use and pollution (4) ____, but it can also encourage people to be creative. Paper, magazines and broken pottery and glass can all be recycled. Our main (5) ____ in recycling these materials is that they can be (6) ____ into exciting new creations. Our website will keep you (7) ____ of the progress of our new and exciting (8) ____."',
    mcq: [
      { question: '0 · The amounts of annual household waste are on the ____.', options: ['increase', 'lift', 'raise', 'growth'], answerIndex: 0 },
      { question: '1 · Consequently, ____ of such large amounts is becoming a problem.', options: ['distributing', 'discarding', 'disposing', 'dumping'], answerIndex: 2 },
      { question: '2 · Everyone is eligible to ____.', options: ['share', 'assist', 'enter', 'participate'], answerIndex: 3 },
      { question: '3 · Advantages such as ____ down on landfill space.', options: ['bearing', 'cutting', 'holding', 'backing'], answerIndex: 1 },
      { question: '4 · A reduction in energy use and pollution ____.', options: ['levels', 'grades', 'layers', 'stages'], answerIndex: 0 },
      { question: '5 · Our main ____ in recycling these materials…', options: ['direction', 'course', 'attempt', 'aim'], answerIndex: 3 },
      { question: '6 · …is that they can be ____ into exciting new creations.', options: ['transmitted', 'transformed', 'translated', 'transported'], answerIndex: 1 },
      { question: '7 · Our website will keep you ____ of the progress.', options: ['communicated', 'informed', 'instructed', 'acquainted'], answerIndex: 1 },
      { question: '8 · …of our new and exciting ____.', options: ['venture', 'affair', 'speculation', 'offer'], answerIndex: 0 },
    ],
  },
  {
    type: 'task',
    title: '4b · Language focus: the phrases behind the cloze',
    body: 'These patterns are tested again and again at B2. Notice the preposition or the following word — that is what makes each one correct.',
    bullets: [
      'be on the increase = be rising: Household waste is on the increase.',
      'dispose of something (never "dispose something"): Batteries must be disposed of safely.',
      'participate in something / take part in something: Everyone is eligible to participate.',
      'cut down on something: We must cut down on single-use plastic.',
      'pollution levels / noise levels (not "grades" or "layers")',
      'our aim is to… / with the aim of doing something',
      'be transformed into something: Old glass is transformed into mosaics.',
      'keep somebody informed of/about something',
      'a new venture = a new business project',
    ],
  },
  {
    type: 'type-blanks',
    title: '4c · Rewrite',
    body: 'Complete each sentence with ONE word so that it keeps the same meaning.',
    blanks: [
      { prompt: 'The amount of e-waste is rising. → The amount of e-waste is on the ______.', answer: 'increase' },
      { prompt: 'You must throw these chemicals away safely. → These chemicals must be disposed ______ safely.', answer: 'of' },
      { prompt: 'Anyone can take part. → Everyone is eligible to ______.', answer: 'participate' },
      { prompt: 'We should use less packaging. → We should cut ______ on packaging.', answer: 'down' },
      { prompt: 'Pollution has fallen. → Pollution ______ have fallen.', answer: 'levels' },
      { prompt: 'Old bottles become garden paths. → Old bottles are ______ into garden paths.', answer: 'transformed' },
      { prompt: 'We will tell you about our progress. → We will keep you ______ of our progress.', answer: 'informed' },
      { prompt: 'They have started an exciting new project. → They have started an exciting new ______.', answer: 'venture' },
    ],
  },
];

/* ───────────────────────── 5 · Video, speaking & writing ───────────────────────── */

export const videoPreTeach: Activity[] = [
  {
    type: 'word-list',
    title: '5b · Pre-teach: words from the talk',
    words: [
      'the circular economy',
      'linear "take-make-waste" model',
      'raw materials',
      'to extract',
      'reuse and repair',
      'by-product',
      'supply chain',
      'downcycling',
      'infrastructure',
      'incentive',
    ],
  },
  {
    type: 'multiple-choice',
    title: '5c · While you watch',
    body: 'Watch the talk and choose the best answer.',
    mcq: [
      { question: 'What is the speaker\u2019s main argument?', options: ['Recycling alone cannot solve the waste problem', 'Recycling should be banned', 'Only governments matter'], answerIndex: 0 },
      { question: 'A "linear" economy means…', options: ['take, make, throw away', 'reuse everything', 'buy nothing new'], answerIndex: 0 },
      { question: 'In a circular economy, waste is treated as…', options: ['a raw material for something else', 'someone else\u2019s problem', 'a legal issue only'], answerIndex: 0 },
    ],
  },
  {
    type: 'discussion',
    title: '5d · After the talk',
    bullets: [
      'Which of the speaker\u2019s ideas would be easiest to apply in your town? Which would be hardest?',
      'She says we cannot recycle our way out of the problem. Do you agree?',
      'Should companies be legally required to take their products back at the end of their life?',
      'What would a "circular" version of your own job or studies look like?',
    ],
  },
];

export const finalTasks: Activity[] = [
  {
    type: 'task',
    title: '6a · Roleplay: the council meeting',
    body: 'Work in groups of four. Your town council is voting on a deposit return scheme of 20p per bottle and can. Take a role, prepare for three minutes, then hold the meeting and vote.',
    bullets: [
      'Councillor for the environment: you propose the scheme. Use the Scottish evidence.',
      'Shop owner: you must store, count and refund the containers. Who pays for the machines?',
      'Drinks manufacturer: you were against refunds, but public opinion has changed.',
      'Resident on a low income: the deposit makes your weekly shop more expensive up front.',
      'Useful language: I take your point, but… / The evidence suggests… / That would have a huge impact on…',
    ],
  },
  {
    type: 'task',
    title: '6b · Headlines',
    body: 'Sum the topic up in one line. Write a newspaper headline that captures what you think is the most important idea in this lesson, using vocabulary from the Vocabulary tab. Then share it with the class and explain the thinking behind it.',
    bullets: [
      'Examples of the routine: "Immortal plastic, mortal planet" · "20p is all it takes" · "There is no away".',
      'Explain: why did you choose those words? What is the story behind your headline?',
      'Class task: collect all the headlines on the board and vote for the one that best captures the topic.',
    ],
  },
  {
    type: 'discussion',
    title: '6c · Final discussion',
    bullets: [
      'Is recycling mostly a way of making consumers feel better?',
      'Which is more effective: charging people, paying people, or banning things?',
      'What is the one change you will actually make after this lesson?',
    ],
  },
];

export const writingPrompt = {
  title: '6d · Writing: an opinion essay (140\u2013190 words)',
  brief:
    'Your English class has watched a talk arguing that "we cannot recycle our way out of" the waste problem. Now write an essay for your teacher answering the question: Is recycling enough to solve the problem of waste? Give reasons and examples from the lesson.',
  checklist: [
    'Write 140\u2013190 words in a neutral or formal style.',
    'Introduction: state the question and your position.',
    'Body paragraph 1: what recycling does well (deposit return schemes, the bag charge, turning trash into treasure).',
    'Body paragraph 2: why it is not enough (single-use design, hazardous and e-waste, the circular economy).',
    'Conclusion: your recommendation.',
    'Use at least five words or phrases from the Vocabulary tab and two patterns from 4b.',
  ],
  model:
    'It is easy to feel that sorting our waste is enough. Every week we fill our recycling bins, and the amount of household waste we send to landfill falls. Yet the amounts of waste we produce are still on the increase, and I do not believe recycling alone can solve the problem. Recycling clearly works when there is a good reason to do it. In the UK, a charge of only 5p cut the number of plastic bags handed out by six billion in a single year, and deposit return schemes give people a financial incentive to bring bottles back rather than dropping them as litter. Even art projects show that rubbish can be transformed into something valuable. However, much of what we buy is designed to be used once. Crisp packets, coffee cups and cheap electronics are extremely difficult to recycle, and hazardous waste has to be disposed of separately at great cost. What we need, therefore, is a circular economy in which products are designed to be repaired and reused. Recycling is a useful last step, but it cannot be the only one.',
};
