import type { Activity } from './engineeringData';
import type { FlashcardItem } from '@/components/presentations/Flashcards';
import globePhoto from '@/assets/topics/budapest-globe.jpg.asset.json';
import budaPestMap from '@/assets/topics/budapest-buda-pest-map.jpg.asset.json';

/** A place visited on the trip. Add a photo by importing it in Budapest.tsx and setting `photo`. */
export interface BudapestPlace {
  id: string;
  name: string;
  caption: string;
  photo?: string;
}

export interface BudapestSection {
  id: string;
  places: BudapestPlace[];
  activities: Activity[];
}

export const warmUp: Activity[] = [
  {
    type: 'discussion',
    title: '1 · Before you read',
    body: 'Discuss these questions with a partner.',
    bullets: [
      'What do you know about Budapest? Can you find it on a map?',
      'Do you prefer city breaks or beach holidays? Why?',
      'When you visit a new city, do you like museums, food, parks or nightlife best?',
      'Have you ever been on a boat trip or to a thermal spa?',
    ],
    image: globePhoto.url,
    imageAlt: 'Close-up photograph of a globe focused on Central and Eastern Europe, with Budapest visible',
    imageCredit: 'pavellllllll',
    imageCreditUrl: 'https://pixabay.com/users/pavellllllll-11915497/',
    imageCreditSource: 'Pixabay',
    imageCreditSourceUrl: 'https://pixabay.com/',
  },
  {
    type: 'intro',
    title: '1b · One city, two sides',
    body: 'Budapest is the capital of Hungary. The River Danube divides the city into two parts. On the west bank is Buda, which is hilly and old, with the castle and quiet streets. On the east bank is Pest, which is flat and busy, with shops, restaurants, the Parliament and the big park. In 1873 Buda, Pest and a third town, Óbuda, joined together to become one city: Budapest.',
  },
  {
    type: 'multiple-choice',
    title: '1c · Quick check',
    mcq: [
      { question: 'Which river goes through Budapest?', options: ['The Rhine', 'The Danube', 'The Thames'], answerIndex: 1 },
      { question: 'Which side of the city is hilly?', options: ['Buda', 'Pest', 'Both'], answerIndex: 0 },
      { question: 'When did the towns join to become Budapest?', options: ['1773', '1873', '1973'], answerIndex: 1 },
    ],
  },
];

export const budapestFlashcards: FlashcardItem[] = [
  { term: 'statue', definition: 'a figure of a person made of stone or metal', example: 'There is a bronze statue of a comedian on the street.' },
  { term: 'memorial', definition: 'something built to help people remember people who died', example: 'We stopped at the memorial in silence.' },
  { term: 'monument', definition: 'a large structure built to remember an important person or event', example: 'The monument is in the middle of the square.' },
  { term: 'bank (of a river)', definition: 'the land along the side of a river', example: 'We walked along the bank of the Danube.' },
  { term: 'funicular', definition: 'a small railway that goes up a steep hill, pulled by a cable', example: 'We took the funicular up to the castle.' },
  { term: 'bastion', definition: 'a part of a castle wall that sticks out, used for defence', example: 'The view from the bastion was amazing.' },
  { term: 'thermal bath', definition: 'a public pool with naturally hot water from under the ground', example: 'The water in the thermal bath was 38 degrees.' },
  { term: 'street art', definition: 'paintings and pictures made on walls in public places', example: 'There was colourful street art on almost every corner.' },
  { term: 'composer', definition: 'a person who writes music', example: 'Kálmán Imre was a famous composer of operettas.' },
  { term: 'comedian', definition: 'a person who makes people laugh as their job', example: 'Géza Hofi was a popular comedian.' },
  { term: 'to be destroyed', definition: 'to be damaged so badly that it no longer exists', example: 'The bridge was destroyed during the war.' },
  { term: 'to rebuild', definition: 'to build something again after it was damaged', example: 'The bridge was rebuilt in 1949.' },
];

export const vocabActivities: Activity[] = [
  {
    type: 'matching',
    title: '2b · Match the words and meanings',
    pairs: [
      { id: 1, left: 'statue', right: 'a figure of a person in stone or metal' },
      { id: 2, left: 'funicular', right: 'a small railway up a steep hill' },
      { id: 3, left: 'thermal bath', right: 'a pool with naturally hot water' },
      { id: 4, left: 'memorial', right: 'helps us remember people who died' },
      { id: 5, left: 'bank', right: 'land at the side of a river' },
      { id: 6, left: 'composer', right: 'a person who writes music' },
    ],
  },
];

export const pestSection: BudapestSection = {
  id: 'pest',
  places: [
    { id: 'hofi', name: 'Statue of Géza Hofi', caption: 'The comedian sitting on a bench' },
    { id: 'kalman', name: 'Kálmán Imre statue', caption: 'The composer near the theatre district' },
    { id: 'varosliget', name: 'Városliget (City Park)', caption: 'Walking in the City Park' },
    { id: 'anonymus', name: 'Statue of Anonymus', caption: 'The writer with no face' },
    { id: 'vajdahunyad', name: 'Vajdahunyad Castle', caption: 'The castle by the lake' },
    { id: 'street-art', name: 'Street art', caption: 'Murals on the city walls' },
  ],
  activities: [
    {
      type: 'reading',
      newspaper: true,
      source: 'City Guide · Pest',
      title: '3 · Stars, a castle and a man with no face',
      passage: [
        'Many visitors to Pest are surprised to find famous people sitting on benches and standing on street corners. They are statues! One of the most popular is Géza Hofi (1936–2002), a comedian who made Hungarians laugh during the communist years. His jokes were often about politics, which was dangerous at that time, but people loved him because he said what they were thinking.',
        'Not far away, near the theatres of Nagymező Street — sometimes called "the Broadway of Budapest" — you can see the composer Kálmán Imre (1882–1953). He wrote famous operettas, such as The Csárdás Princess, which are still performed today all over the world.',
        'For a quieter day, walk to Városliget, the City Park. It is one of the oldest public parks in the world. In 1896 Hungary celebrated 1,000 years since the Hungarian people arrived in the region, and for this celebration the city built Vajdahunyad Castle. It was made of wood and cardboard at first, but people liked it so much that it was rebuilt in stone. The castle mixes many styles, so it looks like several different buildings together.',
        'In the castle courtyard sits a mysterious figure in a long cloak: Anonymus. He was a writer in the Middle Ages who wrote a history of the Hungarians, but nobody knows his real name, so the statue has no clear face. Students believe that if they touch his pen, they will write better — that is why the pen is shiny!',
        'Finally, look at the walls. In District VII, the old Jewish Quarter, there is plenty of street art. Huge paintings cover the sides of buildings, and some old houses are now "ruin bars" — cafés and bars inside old, empty buildings.',
      ],
    },
    {
      type: 'multiple-choice',
      title: '3b · Comprehension',
      mcq: [
        { question: 'Why did people love Géza Hofi?', options: ['He was a great singer', 'He said what people were thinking', 'He built a theatre'], answerIndex: 1 },
        { question: 'What did Kálmán Imre write?', options: ['Novels', 'Operettas', 'Jokes'], answerIndex: 1 },
        { question: 'Why was Vajdahunyad Castle built?', options: ['For a king', 'For a 1,000-year celebration', 'As a museum'], answerIndex: 1 },
        { question: 'What was the first castle made of?', options: ['Stone', 'Wood and cardboard', 'Glass'], answerIndex: 1 },
        { question: 'Why is Anonymus\'s pen shiny?', options: ['It is made of gold', 'People touch it for luck', 'It is new'], answerIndex: 1 },
        { question: 'What is a "ruin bar"?', options: ['A bar in an old empty building', 'A closed bar', 'A bar in a castle'], answerIndex: 0 },
      ],
    },
    {
      type: 'type-blanks',
      title: '3c · Complete the sentences',
      body: 'Type the word into the box.',
      phraseBank: true,
      blanks: [
        { prompt: 'Géza Hofi was a ______ who made people laugh.', answer: 'comedian' },
        { prompt: 'Kálmán Imre was a famous ______.', answer: 'composer' },
        { prompt: 'The first castle was made of wood, but later it was ______ in stone.', answer: 'rebuilt' },
        { prompt: 'Nobody knows the real name of the ______ writer.', answer: 'mysterious' },
        { prompt: 'There is colourful street ______ in District VII.', answer: 'art' },
      ],
    },
  ],
};

export const historySection: BudapestSection = {
  id: 'history',
  places: [
    { id: 'boat', name: 'Evening boat trip', caption: 'The Danube at night' },
    { id: 'parliament', name: 'Hungarian Parliament Building', caption: 'Lit up beside the river' },
    { id: 'shoes', name: 'Shoes on the Danube Bank', caption: 'A memorial to remember' },
    { id: 'soviet', name: 'Soviet War Memorial', caption: 'Liberty Square' },
    { id: 'reagan', name: 'Statue of Ronald Reagan', caption: 'Liberty Square' },
    { id: 'martyrs', name: 'Monument of National Martyrs', caption: 'Remembering 1956' },
  ],
  activities: [
    {
      type: 'reading',
      newspaper: true,
      source: 'City Guide · The Danube',
      title: '4 · A river full of history',
      passage: [
        'The best way to see Budapest is from the water, especially in the evening. When it gets dark, the bridges and buildings are lit up with golden lights. The most beautiful building is the Hungarian Parliament. Builders started work in 1885 and finished in 1904. It is the biggest building in Hungary and has 691 rooms! Inside, visitors can see the Holy Crown of Hungary.',
        'A short walk south of the Parliament, on the bank of the river, there are sixty pairs of old-fashioned shoes made of iron. This is the memorial "Shoes on the Danube Bank". In the winter of 1944–45, during the Second World War, many Jewish people were taken to the river by members of a fascist group. They had to take off their shoes, and then they were shot and fell into the water. The memorial was created in 2005 so that people will never forget. Visitors often leave flowers and candles.',
        'In Liberty Square (Szabadság tér) you can see how complicated Hungarian history is. There is a Soviet War Memorial for the Soviet soldiers who died fighting against Nazi Germany in 1945. But after the war, the Soviet Union controlled Hungary for more than forty years. In 1956 Hungarians fought against Soviet control, and many people died.',
        'In the same square there is a statue of Ronald Reagan, the American president, walking towards the Parliament. It was put there in 2011 to thank him for his role in ending the Cold War. Nearby, the Monument of National Martyrs remembers people who died for Hungarian freedom. Standing in one square, you can see a whole century of history.',
      ],
    },
    {
      type: 'multiple-choice',
      title: '4b · Comprehension',
      mcq: [
        { question: 'When was the Parliament finished?', options: ['1885', '1904', '1956'], answerIndex: 1 },
        { question: 'How many rooms does the Parliament have?', options: ['169', '691', '961'], answerIndex: 1 },
        { question: 'What is the Shoes on the Danube Bank memorial made of?', options: ['Leather', 'Wood', 'Iron'], answerIndex: 2 },
        { question: 'Why was the Soviet War Memorial built?', options: ['For soldiers who died fighting Nazi Germany', 'For the 1956 revolution', 'For Ronald Reagan'], answerIndex: 0 },
        { question: 'What happened in 1956?', options: ['The Parliament opened', 'Hungarians fought against Soviet control', 'The war ended'], answerIndex: 1 },
        { question: 'Why is there a statue of Ronald Reagan?', options: ['He lived in Budapest', 'To thank him for his role in ending the Cold War', 'He built the square'], answerIndex: 1 },
      ],
    },
    {
      type: 'type-blanks',
      title: '4c · Passive past: complete the sentences',
      body: 'Type the past participle of the verb in brackets.',
      blanks: [
        { prompt: 'The Parliament was ______ (finish) in 1904.', answer: 'finished' },
        { prompt: 'The shoe memorial was ______ (create) in 2005.', answer: 'created' },
        { prompt: 'The buildings are ______ (light) up at night.', answer: 'lit' },
        { prompt: 'The Reagan statue was ______ (put) in the square in 2011.', answer: 'put' },
        { prompt: 'Many people were ______ (kill) in 1956.', answer: 'killed' },
      ],
    },
    {
      type: 'discussion',
      title: '4d · Talk about it',
      bullets: [
        'Why do you think memorials like the shoes are important?',
        'Are there memorials or statues in your town? What do they remember?',
        'Should cities keep statues from difficult times in their history? Why / why not?',
      ],
    },
  ],
};

export const budaSection: BudapestSection = {
  id: 'buda',
  places: [
    { id: 'chain-bridge', name: 'Széchenyi Chain Bridge', caption: 'Crossing from Pest to Buda' },
    { id: 'funicular', name: 'Buda Castle Funicular', caption: 'Going up Castle Hill' },
    { id: 'buda-castle', name: 'Buda Castle', caption: 'The royal palace' },
    { id: 'bastion', name: "Fisherman's Bastion", caption: 'The best view of the city' },
  ],
  activities: [
    {
      type: 'reading',
      newspaper: true,
      source: 'City Guide · Buda',
      title: '5 · Up the hill to the castle',
      passage: [
        'Before 1849 there was no permanent bridge between Buda and Pest. In winter people sometimes had to walk across the frozen river! Count István Széchenyi once had to wait a week to cross the Danube to go to his father\'s funeral, so he decided to build a bridge. The Széchenyi Chain Bridge opened in 1849 and was designed by an Englishman, William Tierney Clark. It is guarded by four stone lions. In 1945 the bridge was destroyed in the war, but it was rebuilt and opened again in 1949.',
        'On the Buda side, you can walk up the hill or take the funicular. This little railway opened in 1870 and climbs about 50 metres in just over a minute. At the top is Buda Castle, the old home of Hungarian kings. It has been attacked, burned and rebuilt many times. Today it is home to the Hungarian National Gallery and the Budapest History Museum.',
        "A short walk away is Fisherman's Bastion. It looks like a castle from a fairy tale, with seven white towers — one for each of the seven Hungarian tribes who arrived in 896. It was finished in 1902. Its name comes from the fishermen who defended this part of the city wall in the Middle Ages. From the top you get the best view of the Danube and the Parliament.",
      ],
    },
    {
      type: 'multiple-choice',
      title: '5b · True or false?',
      mcq: [
        { question: 'Before 1849 there was a permanent bridge in Budapest.', options: ['True', 'False'], answerIndex: 1 },
        { question: 'The Chain Bridge was designed by an Englishman.', options: ['True', 'False'], answerIndex: 0 },
        { question: 'The bridge has four stone lions.', options: ['True', 'False'], answerIndex: 0 },
        { question: 'The funicular takes about ten minutes to reach the top.', options: ['True', 'False'], answerIndex: 1 },
        { question: "Fisherman's Bastion has seven towers.", options: ['True', 'False'], answerIndex: 0 },
        { question: 'Buda Castle is still the home of the king today.', options: ['True', 'False'], answerIndex: 1 },
      ],
    },
    {
      type: 'matching',
      title: '5c · Match the place and the fact',
      pairs: [
        { id: 1, left: 'Chain Bridge', right: 'opened in 1849, rebuilt in 1949' },
        { id: 2, left: 'Funicular', right: 'opened in 1870' },
        { id: 3, left: 'Buda Castle', right: 'old home of Hungarian kings' },
        { id: 4, left: "Fisherman's Bastion", right: 'seven towers for seven tribes' },
      ],
    },
  ],
};

export const foodSection: BudapestSection = {
  id: 'food',
  places: [
    { id: 'langos', name: 'Lángos', caption: 'With sour cream and cheese' },
    { id: 'borscht', name: 'Borscht', caption: 'A warming soup' },
    { id: 'schnitzel', name: 'Schnitzel', caption: 'Crispy and golden' },
    { id: 'gellert', name: 'Gellért Thermal Bath', caption: 'Relaxing in the hot water' },
  ],
  activities: [
    {
      type: 'reading',
      newspaper: true,
      source: 'City Guide · Eat & Relax',
      title: '6 · Hot food, hot water',
      passage: [
        'You can\'t visit Budapest without trying lángos. It is a flat piece of dough which is fried in oil and usually eaten with garlic, sour cream and grated cheese on top. It is cheap, filling and perfect street food — but not very healthy! In many restaurants you can also find borscht, a red soup made with beetroot, which is popular in Eastern Europe, and schnitzel, a thin piece of meat covered in breadcrumbs and fried until it is golden and crispy.',
        'After all that food, it is time to relax. Budapest is sometimes called the "City of Spas" because there are more than 100 natural hot springs under the city. The Romans built baths here nearly 2,000 years ago. The Gellért Thermal Bath, which opened in 1918, is one of the most beautiful. It is built in the Art Nouveau style, with colourful tiles, glass ceilings and columns. The water comes from deep underground and is between 26 and 40 degrees. Many people believe it is good for their health.',
      ],
    },
    {
      type: 'multiple-choice',
      title: '6b · Comprehension',
      mcq: [
        { question: 'How is lángos cooked?', options: ['It is boiled', 'It is fried', 'It is baked'], answerIndex: 1 },
        { question: 'What is borscht made with?', options: ['Potatoes', 'Beetroot', 'Fish'], answerIndex: 1 },
        { question: 'Why is Budapest called the "City of Spas"?', options: ['It has over 100 hot springs', 'It has many swimming pools', 'It is near the sea'], answerIndex: 0 },
        { question: 'When did the Gellért Bath open?', options: ['1818', '1918', '2018'], answerIndex: 1 },
      ],
    },
    {
      type: 'type-blanks',
      title: '6c · Food words',
      body: 'Type the word into the box.',
      phraseBank: true,
      blanks: [
        { prompt: 'Lángos is a flat piece of ______ fried in oil.', answer: 'dough' },
        { prompt: 'It is often eaten with sour ______ and cheese.', answer: 'cream' },
        { prompt: 'Schnitzel is covered in ______.', answer: 'breadcrumbs' },
        { prompt: 'The schnitzel is fried until it is golden and ______.', answer: 'crispy' },
      ],
    },
  ],
};

export const finalTasks: Activity[] = [
  {
    type: 'task',
    title: '7 · Plan a day in Budapest',
    body: 'In pairs, plan a one-day trip for a friend. Choose four places from this lesson, put them in order, and decide where to eat. Use: "First we\'ll…", "After that…", "If you like history, you should…", "Don\'t miss…". Present your plan to the class.',
  },
  {
    type: 'discussion',
    title: '7b · Your city',
    bullets: [
      'Which place in Budapest would you most like to visit? Why?',
      'What are the three places a tourist must see in your town?',
      'What typical food should visitors try in your country?',
    ],
  },
];

export const writingPrompt = {
  title: '8 · Write a travel blog post',
  brief: 'Imagine you have just come back from a weekend in Budapest. Write a blog post (120–150 words) about your trip.',
  checklist: [
    'Say where you went and who with',
    'Describe two or three places you visited, using the past simple',
    'Include one fact about the history of a place',
    'Describe the food you ate',
    'Give a recommendation to your readers',
  ],
  model:
    'Last weekend I went to Budapest with my sister and it was amazing! On the first day we walked around City Park and saw Vajdahunyad Castle, which was built for a big celebration in 1896. I touched the pen of the Anonymus statue, so I hope my writing is better now! In the evening we went on a boat trip on the Danube. The Parliament was lit up and it looked beautiful. The next day we crossed the Chain Bridge and took the funicular up to Buda Castle. The view from Fisherman\'s Bastion was incredible. For lunch I tried lángos with sour cream and cheese — delicious but very filling! Finally, we relaxed at the Gellért Baths. If you go to Budapest, don\'t miss the thermal baths and the evening boat trip!',
};
