// Topics · Music Festivals — B1/B2 lesson data
// Sources: British Council LearnEnglish Teens "Live music" video worksheet,
// Solutions Intermediate "Music around Europe" culture page + Oxegen workbook text,
// an exam-style Reading Part 5 (Glastonbury / Fuji / Norwegian Ice Music Festival),
// English File Elementary "Noisy neighbours" (Glastonbury / Pilton),
// Notting Hill Carnival culture page, Festival in the Desert (Mali) gapped text,
// and BreakingNewsEnglish "First woman to conduct oldest music festival".

import type { Activity } from './engineeringData';
import type { FlashcardItem } from '@/components/presentations/Flashcards';

/* ───────────────────────── 1 · Warm-up ───────────────────────── */

export const warmUp: Activity[] = [
  {
    type: 'intro',
    title: '1 · Warm-Up Discussion',
    body: 'Talk about these questions with a partner before you start.',
    bullets: [
      'Are there lots of festivals in your country? What kinds of festival are they?',
      'Have you ever been to a music festival? If yes, describe it. If no, would you like to go?',
      'What do you need to take with you to a three-day open-air festival?',
      'Is it better to see a band live at a festival, in a small club, or on TV? Why?',
    ],
  },
];

/* ───────────────────────── 2 · Vocabulary ───────────────────────── */

export const festivalFlashcards: FlashcardItem[] = [
  { term: 'the height of the season', definition: 'the busiest time of year', example: "It's the height of the music festival season here in the UK." },
  { term: 'to rehearse', definition: 'to practise for a public performance', example: 'You rehearse all the time in a small dark room.' },
  { term: 'to hang around', definition: 'to spend time waiting for something, or with no particular purpose', example: "There's lots of hanging around before the concert tonight." },
  { term: 'to perform', definition: 'to play music for an audience', example: 'Some of the biggest bands in the world are performing in the open air.' },
  { term: 'up for it', definition: 'enthusiastic and willing to participate', example: 'If you can see the crowd are up for it, there\'s nothing to worry about.' },
  { term: 'to come in handy', definition: 'to be useful', example: 'After dark, a torch comes in handy.' },
  { term: 'landscape', definition: 'natural scenery or countryside', example: 'The band are influenced by poetry and the English landscape.' },
  { term: 'wellies', definition: 'waterproof rubber boots', example: 'If it rains you need waterproofs and the all-important wellies.' },
  { term: 'a line-up', definition: 'the list of artists performing at a festival', example: 'The festival always has a strong line-up.' },
  { term: 'a headline act', definition: 'the most famous band or artist at a festival', example: 'The headline acts were Muse, Coldplay and Beyoncé.' },
  { term: 'a campsite', definition: 'the area of a festival where people put up tents', example: 'The beaches are twenty minutes\' walk from the campsite.' },
  { term: 'a festival-goer', definition: 'a person who attends a festival', example: 'Thousands of festival-goers stood in a muddy field.' },
];

export const vocabMatching: Activity[] = [
  {
    type: 'matching',
    title: '2b · Preparation: match the word with the definition',
    body: 'Click a word, then click its definition. Use the lightbulb for a hint.',
    pairs: [
      { id: 1, left: 'the height of the season', right: 'the busiest time of year', hint: 'When everything is at its peak.' },
      { id: 2, left: 'to rehearse', right: 'to practise for a public performance', hint: 'What a band does before the show.' },
      { id: 3, left: 'to hang around', right: 'to spend time waiting, or with no particular purpose', hint: 'Doing nothing much, just waiting.' },
      { id: 4, left: 'to perform', right: 'to play music for an audience', hint: 'What happens on stage.' },
      { id: 5, left: 'up for it', right: 'enthusiastic, willing to participate', hint: 'A keen, excited crowd is this.' },
      { id: 6, left: 'to come in handy', right: 'to be useful', hint: 'A torch does this after dark.' },
      { id: 7, left: 'landscape', right: 'natural scenery or countryside', hint: 'What you see when you look across the fields.' },
      { id: 8, left: 'wellies', right: 'waterproof boots', hint: 'Essential in a muddy British field.' },
    ],
  },
];

/* ───────────────────────── 3 · Video comprehension ───────────────────────── */

export const videoActivities: Activity[] = [
  {
    type: 'multiple-choice',
    title: '3b · Check your understanding',
    body: 'Watch the British Council video "Live music" above, then choose the best answer.',
    mcq: [
      { question: 'Reading Festival is …', options: ['a huge, open-air festival', 'a small, open-air festival', 'an indoor music festival'], answerIndex: 0 },
      { question: 'British Sea Power are …', options: ['a new band', "one of Britain's most popular bands", 'from the United States'], answerIndex: 1 },
      { question: 'British Sea Power are influenced by …', options: ['poetry and the English countryside', 'literature and music from the 80s', 'music they hear at festivals'], answerIndex: 0 },
      { question: 'Scott Wilkinson says Reading is traditionally …', options: ['the biggest festival', 'the festival with the best atmosphere', 'the festival where you can see the most rock bands'], answerIndex: 2 },
      { question: "While they're waiting for their concert, the band …", options: ['play cards', 'play ping-pong', 'listen to other bands'], answerIndex: 1 },
      { question: "Amandeep says it's a good idea to take …", options: ['warm clothes and water', 'an umbrella and suncream', 'a torch, waterproofs and wellies'], answerIndex: 2 },
      { question: "It's easy to forget where your tent is because …", options: ['there are thousands of them', 'the festival is very big', 'the campsite is dark'], answerIndex: 0 },
      { question: 'Martin Noble says playing at a festival is exciting because …', options: ['it sounds really good', 'you can play to your audience', 'you realise how famous you are'], answerIndex: 1 },
    ],
  },
  {
    type: 'type-blanks',
    title: '3c · Check your vocabulary: gap fill',
    body: 'Complete each sentence with a word from the video. The first letter is given.',
    blanks: [
      { prompt: "1. It's the height of the music festival s___ here in the UK.", answer: 'season' },
      { prompt: '2. Some of the biggest bands in the world are performing to huge c___ in the open air.', answer: 'crowds' },
      { prompt: "3. For the band, there's lots of hanging a___ before their concert later tonight.", answer: 'around' },
      { prompt: '4. After dark, a torch comes in h___ .', answer: 'handy' },
      { prompt: '5. If it rains you need waterproofs, an umbrella and the all-important w___ .', answer: 'wellies' },
      { prompt: "6. Martin, what's it like to p___ at a music festival?", answer: 'perform' },
      { prompt: '7. You r___ all the time in a small dark room, and this is your chance to play to your audience.', answer: 'rehearse' },
      { prompt: "8. If you can see the crowd are up for i___ , there's nothing to worry about.", answer: 'it' },
    ],
  },
];

/* ───────────────────────── 4 · Compound nouns ───────────────────────── */

export const compoundActivities: Activity[] = [
  {
    type: 'matching',
    title: '4 · Compound nouns: make the pairs',
    body: 'Match the words on the left with the words on the right to form eight festival compound nouns.',
    pairs: [
      { id: 1, left: 'camp', right: 'site', hint: 'The field where you pitch your tent.' },
      { id: 2, left: 'festival', right: 'goers', hint: 'The people who attend.' },
      { id: 3, left: 'mainland', right: 'Europe', hint: 'Belgium, Spain, Croatia — not the islands.' },
      { id: 4, left: 'shuttle', right: 'buses', hint: 'They take you from the station to the site.' },
      { id: 5, left: 'headline', right: 'acts', hint: 'The biggest names on the poster.' },
      { id: 6, left: 'music', right: 'lovers', hint: 'People who are passionate about music.' },
      { id: 7, left: 'line', right: 'up', hint: 'The full list of performers.' },
      { id: 8, left: 'dance', right: 'music', hint: 'Techno, house and DJs.' },
    ],
  },
  {
    type: 'type-blanks',
    title: '4b · Complete the festival advert',
    body: 'Use the compound nouns from exercise 4. The first letter of the missing word is given.',
    blanks: [
      { prompt: '1. This is the best festival in mainland E___ .', answer: 'Europe' },
      { prompt: '2. It is perfect for music l___ , especially people who like rock and pop.', answer: 'lovers' },
      { prompt: '3. There will also be a whole night of dance m___ with international DJs.', answer: 'music' },
      { prompt: '4. There will be more room for tents because we have an extra c___ .', answer: 'campsite' },
      { prompt: '5. There will be more shuttle b___ to transport festival-goers from the train station.', answer: 'buses' },
      { prompt: '6. Finally, we can confirm that this year\'s line-u___ is even better than last year.', answer: 'up' },
      { prompt: '7. The headline a___ will be Muse, Coldplay and Beyoncé.', answer: 'acts' },
      { prompt: '8. Around 80,000 festival-g___ are expected on the site.', answer: 'goers' },
    ],
  },
];

/* ───────────────────────── 5 · Reading: Music around Europe ───────────────────────── */

export const europeReading: Activity[] = [
  {
    type: 'reading',
    title: '5 · Reading: Music around Europe',
    passage: [
      'British summers are not always well-suited to standing in a field with thousands of other festival-goers, as fans of the Glastonbury Festival in south-west England have often discovered. So these days, thousands of music-lovers head for mainland Europe for sunnier festival experiences. Here are some of the most popular destinations.',
      'BELGIUM · Rock Werchter started in 1975 and always attracts big headline acts, like Kings of Leon and Coldplay. The location in the centre of Belgium isn\'t exactly exotic, but it\'s a short journey from London to Brussels by train, and then on to Leuven where shuttle buses will take you to the site. The festival takes place in early July and lasts for four days.',
      'CROATIA · The T-Mobile INmusic Festival in late June is a 20,000-capacity event beside Lake Jarun in the centre of Zagreb. One of the many festivals in the Balkans, it always has a strong line-up, including acts like Jamiroquai and Arcade Fire. Elsewhere in Croatia, there\'s a dance music festival called The Garden Festival in Petrčane in July. The site is a beautiful location overlooking the Adriatic Sea. It\'s a small festival, catering for dance music clubbers, but with over 80 top DJs playing over two weeks.',
      'SPAIN · In mid-July, Fiberfib is basically a big party by the beach in Benicàssim, near Valencia. The town is usually popular with Spanish tourists — but this is one of the most popular festivals with Brits, so don\'t expect too much local culture. There\'s always a huge line-up of top acts, and there are excellent beaches about twenty minutes\' walk from the campsite. But it reaches up to 40 °C in the day, so the music plays from 8 p.m. to 8 a.m. and there\'s little chance of sleep.',
      'Sónar is a festival that takes place in Barcelona at the end of June. It attracts all the best artists and DJs from the dance music and techno scenes.',
    ],
  },
  {
    type: 'multiple-choice',
    title: '5b · True or false?',
    body: 'Decide whether each statement about the text is true or false.',
    mcq: [
      { question: 'Many British music fans go to European music festivals because the weather is better.', options: ['True', 'False'], answerIndex: 0 },
      { question: 'Travelling from the UK to Rock Werchter is difficult.', options: ['True', 'False'], answerIndex: 1 },
      { question: 'The Rock Werchter festival takes place in Brussels.', options: ['True', 'False'], answerIndex: 1 },
      { question: 'The Garden Festival is much bigger than the T-Mobile INmusic Festival.', options: ['True', 'False'], answerIndex: 1 },
      { question: 'Both festivals in Croatia take place near water.', options: ['True', 'False'], answerIndex: 0 },
      { question: 'A lot of Brits travel to Fiberfib for a taste of Spanish culture.', options: ['True', 'False'], answerIndex: 1 },
    ],
  },
];

/* ───────────────────────── 6 · Reading: Oxegen ───────────────────────── */

export const oxegenReading: Activity[] = [
  {
    type: 'reading',
    title: '6 · Reading: Oxegen, Ireland',
    passage: [
      "Voted Best Major European Festival two years in a row, Oxegen is Ireland's biggest music festival. Held since 2004 at a racecourse in County Kildare, the festival takes place on the second weekend in July. The headline acts are often the same as those at Glastonbury, including contemporary bands like Coldplay and The Black Eyed Peas, and veterans such as Primal Scream.",
      'Around 80,000 people camp on the site during the festival and there are a number of different options. The Luxury Campsite is a village area with nice toilets, hot showers and 24/7 security, which offers a range of accommodation to visitors. Top of the range are "podpads", similar to small wooden houses, complete with three windows, lighting and beds off the floor. Festival-goers who don\'t want to be bothered with putting up their own tent can stay in Tangerine Fields, an area which has fully-equipped tents for hire.',
      "But the most exciting thing about Oxegen is, of course, the music. The atmosphere is amazing, even when it rains, something which occurs most years. One fan described the last festival as 'the highlight of the year', and another said it was 'the best weekend in my life'. However, it is not only the fans who enjoy the occasion. The words of one band member sum it up nicely: 'Oxegen. One word: AWESOME!'",
    ],
  },
  {
    type: 'multiple-choice',
    title: '6b · Comprehension check',
    body: 'Answer the questions about the Oxegen text.',
    mcq: [
      { question: 'When was the first Oxegen music festival held?', options: ['1975', '2004', '2007', '1970'], answerIndex: 1 },
      { question: 'What similarity does Oxegen have to Glastonbury?', options: ['It lasts five days', 'It is run by volunteers', 'It often has the same headline acts', 'It takes place on a farm'], answerIndex: 2 },
      { question: 'What is the best accommodation offered to campers?', options: ['Tangerine Fields tents', 'Podpads in the Luxury Campsite', 'A hotel in County Kildare', 'Camper vans'], answerIndex: 1 },
      { question: 'What can campers find in Tangerine Fields?', options: ['Fully-equipped tents for hire', 'Hot showers only', 'Wooden houses with three windows', 'Free food stalls'], answerIndex: 0 },
      { question: "What's the weather usually like at Oxegen?", options: ['Hot and dry', 'Very cold', 'It rains most years', 'Windy but sunny'], answerIndex: 2 },
      { question: 'Who enjoys the festival apart from the fans?', options: ['The local farmers', 'The band members', 'The security staff', 'The television crews'], answerIndex: 1 },
    ],
  },
];

/* ───────────────── 7 · Exam-style reading: three world festivals ───────────────── */

export const examReading: Activity[] = [
  {
    type: 'reading',
    title: '7 · Exam-style Reading: three festivals around the world',
    passage: [
      "If you like live music, you'll love the Glastonbury Music Festival. The five-day festival, which began in 1970, takes place in a farmer's field in England. It is mainly run by volunteers who donate any money they make to charity. Big bands and individuals who have achieved international fame bring in the crowds, but it also features excellent, lesser-known performers. Past bands and performers have included Arctic Monkeys, the Rolling Stones, Beyoncé and Metallica, to name but a few. The festival isn't held every year: it has a break every fifth year to protect the site. This is necessary because this is a place where people mainly camp out; camper vans and caravans are not allowed on the main site. Added to this is the fact that the festival has a long history of severe floods and storms which often turn the place into a mud bath — but it's all part of the fun. And you certainly won't go hungry: there are over 400 food stalls serving visitors throughout the five days. If you're serious about going, however, you'll have to act quickly. It's so popular that tickets are usually sold out within hours of going on sale!",
      "On the other side of the world, you might be surprised to know that the Fuji Festival, which is Japan's biggest music festival, only ever occurred on Mt Fuji once, and it was a complete disaster. On its first day, a typhoon hit the festival, leading to many festival-goers being taken off the mountain with hypothermia. Organisers cancelled the event, even though the next day turned out to be a lovely sunny one! The festival now happens on the picturesque slopes of Mt Naeba, about 350 kilometres north of Mt Fuji. It's reputed to be the cleanest festival in the world because of its policy towards recycling rubbish, and it's one of the loveliest festival settings you're likely to see. It's a treat for anyone who's interested in Japanese popular music, but there are many international bands and superstars too. As well as music, there's a lot of other entertainment: comedians who do bizarre stand-up comedy, eating contests and even sumo wrestling. There are also food stalls whose variety of cuisine will amaze you — noodles, curry, kebabs and rice dishes, all at extremely reasonable prices. And, if you can afford it, you can take a helicopter ride over the site or a trip on the Dragondola cable car.",
      "If you have unusual taste in music and you're a fan of outdoor venues, the Norwegian Ice Music Festival might be for you. It's the only festival in the world where the instruments are made entirely from ice. Located in the idyllic mountain setting of Geilo in Norway, the festival takes place under the first full moon of the year. With an emphasis on naturally formed ice and snow, the event attracts musicians from countries like Iceland and from as far away as Africa, as well as performers such as Terje Isungset, famous for his Ice Music album. One attraction that is always popular is a magical midnight outdoor concert. If you're the athletic type, you can rent skis to travel to the location. You may not find too many famous performers, but you will certainly experience the most atmospheric of music festivals.",
    ],
  },
  {
    type: 'multiple-choice',
    title: '7b · Reading Part 5: multiple choice',
    body: 'For questions 1–6, choose the answer (A, B, C or D) which you think fits best according to the text.',
    mcq: [
      {
        question: 'What comment does the writer make about the Glastonbury Festival in the first paragraph?',
        options: ['It is very professionally organised.', 'Camping is not allowed on the main site.', 'The weather has been unpredictable in the past.', 'Five days is a long time to eat festival food.'],
        answerIndex: 2,
      },
      {
        question: "What does the writer mean by the expression 'to name but a few'?",
        options: ['There are too few to mention.', 'I only know a few by name.', 'These names are the most important.', "There are so many names that they can't all be listed."],
        answerIndex: 3,
      },
      {
        question: 'What does the writer suggest happened at the first Fuji Festival?',
        options: ['Festival-goers decided they did not like the venue.', 'The second day of the festival was extremely successful.', 'Many festival-goers were turned away because of overcrowding.', 'Some festival-goers needed medical treatment.'],
        answerIndex: 3,
      },
      {
        question: 'What does the writer imply about the current Fuji Festival?',
        options: ['Everything is quite cheap.', 'The range of activities on offer could be wider.', 'You can listen to music as well as see other forms of entertainment.', 'You might be disappointed by the choice of performers.'],
        answerIndex: 2,
      },
      {
        question: 'What point does the writer make about the Ice Music Festival?',
        options: ['It might be difficult to find somewhere to stay.', 'The musical instruments are not what you might normally expect.', 'Only the best Norwegian artists perform at the festival.', 'You should travel light and not take too much luggage.'],
        answerIndex: 1,
      },
      {
        question: "What is the writer's intention in this article?",
        options: ['to find the best bargain for music lovers', 'to encourage readers to travel round the world', 'to recommend interesting music festivals', 'to advertise three similar types of world music festival'],
        answerIndex: 2,
      },
    ],
  },
  {
    type: 'type-blanks',
    title: '7c · English in context',
    body: 'Find the words in the text which mean the following. The first letter is given.',
    blanks: [
      { prompt: '1. happened or took place  →  o___ (paragraph 2)', answer: 'occurred' },
      { prompt: '2. peaceful and beautiful  →  i___ (paragraph 3)', answer: 'idyllic' },
      { prompt: '3. attract people to a place  →  bring in the c___ (paragraph 1)', answer: 'crowds' },
      { prompt: '4. known or regarded as  →  r___ to be (paragraph 2)', answer: 'reputed' },
      { prompt: '5. very pretty to look at  →  p___ (paragraph 2)', answer: 'picturesque' },
    ],
  },
];

/* ───────────────────────── 8 · Noisy neighbours ───────────────────────── */

export const neighboursActivities: Activity[] = [
  {
    type: 'reading',
    title: '8 · Reading: Noisy neighbours',
    passage: [
      'Do you have problems with your neighbours? Well, imagine the problems the people of Pilton in Somerset, England, have. Every summer over 150,000 people travel to their village for the annual Glastonbury pop music festival.',
      'Every year, for three days, the village is full of people of all ages who leave drinks cans and papers all over the streets. The music plays until the early hours of the morning and you can hear people talking and singing all night. The quiet country village becomes a nightmare to live in and some residents are even thinking of moving to another village.',
      "The pop fans who go to Glastonbury usually sleep in tents in a field, but last year Mr James Findlay, a resident of Pilton, found two people asleep in his garden in the morning. Mr Findlay said, 'I don't want to stop the Glastonbury Festival. I just want the fans to enjoy the festival without disturbing normal village life.'",
    ],
  },
  {
    type: 'multiple-choice',
    title: '8b · Which problems do the villagers have?',
    body: 'Decide whether the villagers of Pilton have this problem with their temporary neighbours.',
    mcq: [
      { question: 'Their dogs bark.', options: ['Yes, in the text', 'No, not in the text'], answerIndex: 1 },
      { question: 'They throw their rubbish in the streets.', options: ['Yes, in the text', 'No, not in the text'], answerIndex: 0 },
      { question: 'They listen to loud music.', options: ['Yes, in the text', 'No, not in the text'], answerIndex: 0 },
      { question: 'Their babies cry all night.', options: ['Yes, in the text', 'No, not in the text'], answerIndex: 1 },
      { question: 'They make a lot of noise.', options: ['Yes, in the text', 'No, not in the text'], answerIndex: 0 },
      { question: "They go into other people's gardens.", options: ['Yes, in the text', 'No, not in the text'], answerIndex: 0 },
      { question: 'They watch TV late at night.', options: ['Yes, in the text', 'No, not in the text'], answerIndex: 1 },
      { question: 'They break things in the village.', options: ['Yes, in the text', 'No, not in the text'], answerIndex: 1 },
    ],
  },
  {
    type: 'multiple-choice',
    title: '8c · Pronunciation: verb + -ing',
    body: 'Circle the word with a different vowel sound in each group.',
    mcq: [
      { question: 'Which word has a different sound?', options: ['drinking', 'sitting', 'swimming', 'giving'], answerIndex: 2 },
      { question: 'Which word has a different sound?', options: ['meeting', 'reading', 'speaking', 'hearing'], answerIndex: 3 },
      { question: 'Which word has a different sound?', options: ['talking', 'walking', 'working', 'calling'], answerIndex: 2 },
      { question: 'Which word has a different sound?', options: ['playing', 'having', 'raining', 'painting'], answerIndex: 1 },
      { question: 'Which word has a different sound?', options: ['knowing', 'going', 'doing', 'closing'], answerIndex: 2 },
      { question: 'Which word has a different sound?', options: ['living', 'buying', 'finding', 'riding'], answerIndex: 0 },
    ],
  },
];

/* ───────────────────────── 9 · Notting Hill Carnival ───────────────────────── */

export const nottingHill: Activity[] = [
  {
    type: 'reading',
    title: '9 · Reading: Notting Hill Carnival',
    passage: [
      'Notting Hill Carnival, known for the colourful costumes of its dancers, exotic Caribbean music and food, is a celebration of freedom and ethnic diversity. It is the largest street festival in Europe and the second largest in the world, after the Rio de Janeiro Carnival in Brazil.',
      'The carnival has Caribbean roots. In 1833, the first Caribbean carnival took place in Trinidad to celebrate the end of slavery in the Caribbean. Many Caribbean immigrants came to the UK in the 1950s and brought with them their culture, traditions, music and cuisine. In the beginning these festivals were small events with music and dance which took place in various halls in North London. In 1964, the first street festival was held in Notting Hill. It was very successful and since 1966 it has taken place every August Bank Holiday, from Saturday to Monday.',
      'THE COSTUMES · Nearly two million people come to see the costumes, listen to the music and dance in the streets.',
      'THE FOOD · The traditional food at the carnival is Caribbean. There are lots of food stalls and people eat a lot of coconuts!',
      'THE MUSIC · The carnival is very noisy. More than fifty mass bands (or costume bands) take part in the carnival with different steel bands, for which the carnival is famous. Static and mobile sound systems are presented by groups of DJs located along the carnival route. Today they play various types of music, from reggae to salsa, hip hop or house. It usually takes the bands between six and eight hours to traverse the 3.5-mile parade route.',
    ],
  },
  {
    type: 'multiple-choice',
    title: '9b · True or false?',
    body: 'Decide whether each statement about the Notting Hill Carnival is true or false.',
    mcq: [
      { question: 'The Notting Hill Carnival is the largest street festival in the world.', options: ['True', 'False'], answerIndex: 1 },
      { question: 'The Notting Hill Carnival takes place over two weeks.', options: ['True', 'False'], answerIndex: 1 },
      { question: 'The parade route of the Notting Hill Carnival is three and a half miles long.', options: ['True', 'False'], answerIndex: 0 },
      { question: 'The traditional food at the carnival is Scottish.', options: ['True', 'False'], answerIndex: 1 },
      { question: 'The carnival is famous for its steel bands.', options: ['True', 'False'], answerIndex: 0 },
      { question: 'The first street festival in Notting Hill was held in 1833.', options: ['True', 'False'], answerIndex: 1 },
    ],
  },
];

/* ───────────────────────── 10 · Festival in the Desert ───────────────────────── */

export const desertFestival: Activity[] = [
  {
    type: 'reading',
    title: '10 · Reading: Festival in the Desert (Mali)',
    passage: [
      "There's little beyond the remote Malian town of Timbuktu but a vast expanse of desert. Most people consider it the end of the Earth, and even its residents rarely venture north into the Sahara. But for one day in January, a host of musicians, politicians, tourists and technicians gather in the town's market place, preparing to head north into the dunes. As people fill their jeeps with diesel and supplies and travellers send quick postcards home, it's hard not to get swept up in the excitement and anticipation of the remotest music festival on Earth.",
      'The Tuareg, a nomadic group who inhabit the Sahara, have a more appropriate form of transport, arriving on white camels from every direction. In all, there are 1,800 of them at the festival. It isn\'t surprising, because the event grew out of an annual Tuareg get-together.',
      'As the Tuareg cook over campfires, the tourists settle into their tents and explore the festival site. But soon everyone is beating a path towards the concreted stage, a strange sight in the middle of scrub and sand. The sun goes down and charcoal braziers light up the dunes. Then bands from Mali and neighbouring countries like Senegal, Niger and Mauritania take the stage, playing calabashes, lutes and talking drums.',
      "As a tourist attraction, the festival is still in its infancy. There are no more than 500 foreigners present, most of whom feel lucky to be witnessing something 'authentic'. Beyond the odd soft drinks stall there is little sign of the sponsorship or the profit motive that underpin most World Music festivals.",
      "A music festival may seem an odd mechanism for kick-starting tourism all year round, but this is the intention. In the eyes of Ndiaye Bah, Mali's minister of tourism and handicrafts, Malian music is already one of the country's main draws, making the festival an obvious place to start. Most people agree that tourism growth is the only way forward for the Tuareg: the north of Mali is the poorest part of the country and there are few opportunities. They need people to come and buy handicrafts and stay in local hotels, to bring employment and development to the region.",
      "The Tuareg dance and sing, Dicko explains, and afterwards they talk about their problems. He is studying to be a doctor in Timbuktu and his village is far away. At the festival he can meet his family and other people from his village for the first time in two years. Perhaps it's to people such as Dicko, who've given up the nomadic lifestyle to live in towns, that the festival brings the greatest pleasure.",
    ],
  },
  {
    type: 'multiple-choice',
    title: '10b · Comprehension check',
    body: 'Answer the questions about the Festival in the Desert.',
    mcq: [
      { question: 'How do the Tuareg travel to the festival?', options: ['In jeeps', 'By train', 'On white camels', 'On foot'], answerIndex: 2 },
      { question: 'Where did the festival originally come from?', options: ['A government tourism campaign', 'An annual Tuareg get-together', 'A European World Music tour', 'A Malian television show'], answerIndex: 1 },
      { question: 'Why is the festival unusual compared with most World Music festivals?', options: ['There is very little sponsorship or profit motive', 'It lasts a whole month', 'Only Western bands perform', 'Tickets are extremely expensive'], answerIndex: 0 },
      { question: 'What does the minister of tourism hope the festival will do?', options: ['Make Timbuktu a bigger town', 'Kick-start year-round tourism in the north', 'Replace traditional Tuareg music', 'Attract 10,000 foreign visitors'], answerIndex: 1 },
      { question: 'Why is the festival especially important for someone like Dicko?', options: ['He can sell handicrafts there', 'He can perform on the main stage', 'He can meet family he has not seen for two years', 'He can study medicine there'], answerIndex: 2 },
    ],
  },
  {
    type: 'discussion',
    title: '10c · Discussion',
    body: 'Compare the Festival in the Desert with the European festivals you have read about.',
    bullets: [
      'Which of the two would you rather attend, and why?',
      'Should remote communities use festivals to attract tourists? What are the risks?',
      'Does commercial sponsorship spoil a music festival, or make it better?',
    ],
  },
];

/* ───────────────────────── 11 · BBC Proms ───────────────────────── */

export const promsActivities: Activity[] = [
  {
    type: 'reading',
    title: '11 · Reading: First woman to conduct the oldest music festival',
    passage: [
      "A woman will conduct an orchestra at the world's oldest and biggest music festival for the first time ever. The BBC Proms started 118 years ago and include 92 concerts over 8 weeks, but have never had a female conductor. American Marin Alsop will take charge of the orchestra for the final concert — the legendary Last Night of the Proms. This is a distinctly British occasion to celebrate the 'pomp and circumstance' of Britain.",
      'Ms Alsop told the BBC: "I think the fact that I\'m an American woman conducting the Last Night of the Proms is really a statement." Talking of her achievement, she said: "I\'m extraordinarily proud to be the first woman, but I\'m also sad that it\'s 2013 and there still can be firsts for women."',
      'The director of the Proms, Roger Wright, said he was happy to be part of changing the "man\'s world" of conducting. He said: "Marin hasn\'t been chosen because she is a woman conductor. She knows and loves the Proms."',
      'Ms Alsop said: "I always enjoy working with the British orchestral musicians and I\'m particularly looking forward to interacting with the audience, who play such a crucial role in making this a night that is utterly unique and special. It is a great honour that I know will be a highlight for me." She added: "The whole world is watching you. You\'re addressing the biggest audience of your career. It\'s the nearest a classical musician gets to an acceptance speech at the Oscars."',
    ],
  },
  {
    type: 'multiple-choice',
    title: '11b · True or false?',
    body: 'Decide whether each statement about the article is true or false.',
    mcq: [
      { question: 'The BBC Proms is the oldest and biggest music festival in the world.', options: ['True', 'False'], answerIndex: 0 },
      { question: 'The Proms consist of 118 concerts over 8 weeks.', options: ['True', 'False'], answerIndex: 1 },
      { question: 'Marin Alsop will conduct the Last Night of the Proms.', options: ['True', 'False'], answerIndex: 0 },
      { question: 'Ms Alsop said she was completely happy that this was a "first" for women.', options: ['True', 'False'], answerIndex: 1 },
      { question: 'Roger Wright said Ms Alsop was chosen because she is a woman.', options: ['True', 'False'], answerIndex: 1 },
      { question: 'Ms Alsop compares the occasion to an acceptance speech at the Oscars.', options: ['True', 'False'], answerIndex: 0 },
    ],
  },
  {
    type: 'matching',
    title: '11c · Phrase match',
    body: 'Match the beginning of each phrase from the article with its ending.',
    pairs: [
      { id: 1, left: "the world's oldest and biggest", right: 'music festival', hint: 'What the Proms is.' },
      { id: 2, left: 'a distinctly', right: 'British occasion', hint: 'Pomp and circumstance.' },
      { id: 3, left: 'the fact that', right: "I'm an American woman", hint: "Alsop's own words." },
      { id: 4, left: 'extraordinarily', right: 'proud', hint: 'How she felt about being first.' },
      { id: 5, left: 'there still can be', right: 'firsts for women', hint: 'What made her sad.' },
      { id: 6, left: 'interacting with', right: 'the audience', hint: 'What she looks forward to.' },
      { id: 7, left: 'a night that is utterly', right: 'unique and special', hint: 'The Last Night.' },
      { id: 8, left: 'an acceptance', right: 'speech', hint: 'The Oscars comparison.' },
    ],
  },
  {
    type: 'task',
    title: '11d · Speaking: role play',
    body: 'Work in groups of four. Take a role and debate whether a woman should conduct the Last Night of the Proms. Give three reasons for your position, then try to reach agreement.',
    bullets: [
      "Role A · Traditionalist — a man should always conduct the world's oldest music festival; some traditions should never change.",
      'Role B · Normal person — it should be completely normal for a woman to conduct an orchestra; tradition gets in the way of progress.',
      'Role C · Ms Alsop — you dislike how male-dominated conducting is, and are shocked that people want to stick to tradition.',
      "Role D · Concert-goer — you don't mind who conducts, but you think women will bring something new and wonderful to conducting.",
    ],
  },
];

/* ───────────────────────── 12 · Final tasks ───────────────────────── */

export const finalTasks: Activity[] = [
  {
    type: 'task',
    title: '12 · Speaking: plan your own festival',
    body: 'In pairs or small groups, design a music festival for your town. Present it to the class in two minutes.',
    bullets: [
      'Name, location and dates — why did you choose them?',
      'The line-up: three headline acts and two lesser-known performers.',
      'Practical details: campsite, shuttle buses, food stalls, ticket prices.',
      'How will you keep the local residents of your town happy?',
    ],
  },
  {
    type: 'task',
    title: '12b · Writing (140–190 words)',
    body: 'Choose ONE of these writing tasks and write your answer.',
    bullets: [
      'An article for your school website: "The best music festival I have ever been to (or would like to go to)".',
      'A letter to the organisers of a festival on behalf of the residents of Pilton, describing the problems and suggesting three solutions.',
      'An essay: "Men have traditionally conducted orchestras. That tradition should not change." Discuss.',
    ],
  },
];
