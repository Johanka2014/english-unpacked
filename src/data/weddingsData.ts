// Topics · Weddings — B2 lesson data
// Sources: Macmillan onestopenglish "Weddings: reading" (six cultures) + teacher's notes,
// two wedding-vocabulary worksheets, a "wedding traditions around the world" infographic,
// the hitched.co.uk guide to giving notice of marriage, and the TED-Ed talk
// "The history of marriage" (Alex Gendler). All material is adapted into original tasks.

import type { Activity } from './engineeringData';
import type { FlashcardItem } from '@/components/presentations/Flashcards';

/* ───────────────────────── 1 · Warm-up ───────────────────────── */

export const warmUp: Activity[] = [
  {
    type: 'intro',
    title: '1 · Warm-up discussion',
    body: 'Work with a partner. A wedding is the ceremony; a marriage is the state of being married. Keep that difference in mind as you talk.',
    bullets: [
      'What is the difference between a wedding and a marriage? Can you use each word in a sentence?',
      'Tell your partner about a wedding you have been to. Where was it? Who got married?',
      'Did anything happen before, during or after the ceremony that was a special custom in that culture?',
      'At what age do people usually get married in your country? Has that changed in the last fifty years?',
      'Big white wedding, small civil ceremony, or running away to get married abroad — which would you choose, and why?',
    ],
  },
  {
    type: 'task',
    title: '1b · Ten things',
    body: 'Look at these ten items. In pairs, decide which of them play an important part in a wedding ceremony somewhere in the world, and explain how. You will meet six of them in the reading text.',
    bullets: [
      'jewellery · tie · candles · rice · red',
      'blue · nuts · porcelain · money · shoes',
      'Which four do you think are NOT mentioned in the reading? Check your prediction in the Reading tab.',
    ],
  },
];

/* ───────────────────────── 2 · Vocabulary ───────────────────────── */

export const weddingFlashcards: FlashcardItem[] = [
  { term: 'to propose / to pop the question', definition: 'to ask someone to marry you', example: 'He went down on one knee and popped the question on the beach.' },
  { term: 'engagement', definition: 'the period between agreeing to marry and the wedding itself', example: 'Their engagement lasted only two months.' },
  { term: 'fiancé / fiancée', definition: 'the man / woman you are engaged to', example: 'She introduced me to her fiancé at the party.' },
  { term: 'bride', definition: 'the woman getting married', example: 'The bride arrived twenty minutes late, as tradition demands.' },
  { term: 'groom (bridegroom)', definition: 'the man getting married', example: 'The groom looked more nervous than the bride.' },
  { term: 'best man', definition: "the groom's main helper, who keeps the rings and makes a speech", example: 'The best man gave a hilarious speech about the groom.' },
  { term: 'maid of honour', definition: "the bride's main helper", example: 'Her sister was maid of honour.' },
  { term: 'bridesmaids', definition: 'the women, often in matching dresses, who accompany the bride', example: 'The bridesmaids all wore pale green.' },
  { term: 'to walk down the aisle', definition: 'to enter the church for the ceremony; also a general way of saying "get married"', example: "You've been engaged for years — when are you going to walk down the aisle?" },
  { term: 'to exchange vows', definition: 'to make the promises of marriage to each other', example: 'They exchanged vows in a tiny chapel in Las Vegas.' },
  { term: 'veil', definition: 'the thin material that covers the bride’s face', example: 'The groom lifted her veil and kissed her.' },
  { term: 'bouquet', definition: 'the bunch of flowers the bride carries and later throws', example: 'Whoever catches the bouquet will be the next to marry!' },
  { term: 'reception', definition: 'the party or meal after the ceremony', example: 'The reception lasted six hours, with food and dancing.' },
  { term: 'to have cold feet', definition: 'to become nervous and unsure about getting married', example: 'I thought he had cold feet, but he was just stuck in traffic.' },
  { term: 'newlyweds', definition: 'a couple who have just got married', example: 'The newlyweds drove off with tin cans tied to the car.' },
  { term: 'honeymoon', definition: 'the holiday a couple take after the wedding', example: 'They went to Thailand for their honeymoon.' },
  { term: 'to tie the knot', definition: '(informal) to get married', example: 'After ten years together they finally tied the knot.' },
  { term: 'in-laws', definition: 'the family of your husband or wife', example: 'We spend every Christmas with my in-laws.' },
];

export const proposalGapFill: Activity[] = [
  {
    type: 'drag-fill',
    title: '2b · From proposal to engagement',
    body: 'Drag the words into the text, or tap a word and then tap a gap.',
    blanks: [
      { prompt: 'It all starts with a proposal. Traditionally the man ___ to ask his partner to marry him.', answer: 'goes down on one knee' },
      { prompt: 'In informal English we say that he decides to ___.', answer: 'pop the question' },
      { prompt: 'If he receives a "yes", the couple are ___.', answer: 'engaged' },
      { prompt: 'It is customary for the man to buy his ___ a ring.', answer: 'fiancée' },
      { prompt: 'The ring he buys is called an ___, and it most commonly has a diamond in it.', answer: 'engagement ring' },
      { prompt: 'Engagements can last for years, and if neither of the couple ___, the next step is marriage.', answer: 'breaks off the engagement' },
    ],
  },
  {
    type: 'drag-fill',
    title: '2c · Planning the wedding',
    body: 'Complete the description of how a British couple organise their wedding.',
    blanks: [
      { prompt: 'Most weddings in the UK take the form of either a ___, which is not religious,', answer: 'civil ceremony' },
      { prompt: 'conducted at the ___,', answer: 'register office' },
      { prompt: 'or a traditional ___, held in a church.', answer: 'white wedding' },
      { prompt: 'First the couple have to ___ and send out the invitations.', answer: 'draw up a guest list' },
      { prompt: 'They also have to book a ___ for the party after the ceremony.', answer: 'reception venue' },
      { prompt: 'The bride chooses her ___, the girls who accompany her in the church,', answer: 'bridesmaids' },
      { prompt: "and the groom asks a close friend to be his ___.", answer: 'best man' },
      { prompt: 'They arrange a ___, the holiday they take after the wedding,', answer: 'honeymoon' },
      { prompt: 'compile a ___ so that guests know which presents to buy,', answer: 'wedding list' },
      { prompt: 'and of course choose the ___ they will exchange during the ceremony.', answer: 'wedding rings' },
    ],
  },
  {
    type: 'drag-fill',
    title: '2d · The big day',
    body: 'A church wedding, step by step. Drag each word or phrase into the right gap.',
    blanks: [
      { prompt: 'The bride arrives last, in a long white dress with a ___ behind her.', answer: 'train' },
      { prompt: 'Her face is covered by a ___.', answer: 'veil' },
      { prompt: "Her father ___ until they reach the vicar at the ___.", answer: 'walks her down the aisle' },
      { prompt: 'The couple stand in front of the priest at the ___.', answer: 'altar' },
      { prompt: 'The organ plays the ___ and the guests rise to their feet.', answer: 'Wedding March' },
      { prompt: 'The service contains readings from the Bible and a couple of ___.', answer: 'hymns' },
      { prompt: 'The priest asks whether anyone has any ___ to the marriage.', answer: 'objections' },
      { prompt: 'At the end of the service the couple ___ and are declared husband and wife.', answer: 'exchange rings' },
      { prompt: 'They then ___ before they leave the church.', answer: 'sign the register' },
      { prompt: 'Outside, the guests throw ___ — small pieces of coloured paper — over the couple.', answer: 'confetti' },
      { prompt: 'At the reception the best man makes a ___ that is designed to embarrass the groom.', answer: 'speech' },
      { prompt: 'At the end of the day the happy couple ___.', answer: 'leave on honeymoon' },
    ],
  },
];

export const weddingPeopleMatching: Activity[] = [
  {
    type: 'matching',
    title: '2e · Who is who at a wedding?',
    body: 'Click a word, then click its definition. Use the lightbulb for a hint.',
    pairs: [
      { id: 1, left: 'registrar', right: 'the official who conducts a civil ceremony and signs the register', hint: 'You meet this person at the register office, not in church.' },
      { id: 2, left: 'ring bearer', right: 'the person who carries the rings to the ceremony', hint: 'Often a small child — or the best man.' },
      { id: 3, left: 'flower girl', right: 'a young girl who walks in front of the bride carrying flowers', hint: 'She is usually four or five years old.' },
      { id: 4, left: 'page boy', right: 'a young boy who helps in the ceremony, sometimes carrying the bride’s train', hint: 'The male equivalent of the flower girl.' },
      { id: 5, left: 'groomsmen', right: 'the men who support the groom during the ceremony', hint: 'The male version of bridesmaids.' },
      { id: 6, left: 'toastmaster', right: 'the person who makes announcements and keeps the reception to time', hint: 'He or she calls for silence before the speeches.' },
      { id: 7, left: 'bride-to-be', right: 'a woman who is engaged and preparing for her wedding', hint: 'Another way of saying "fiancée".' },
      { id: 8, left: 'in-laws', right: 'the parents and family of your husband or wife', hint: 'Mother-, father-, sister- and brother- + this word.' },
    ],
  },
  {
    type: 'matching',
    title: '2f · British and American English',
    body: 'Match each British word or phrase with its American equivalent or its meaning.',
    pairs: [
      { id: 1, left: 'hen party (BrE)', right: 'bachelorette party (AmE) — a celebration for the bride and her friends', hint: 'Female birds give their name to this one.' },
      { id: 2, left: 'stag night (BrE)', right: 'bachelor party (AmE) — a celebration for the groom and his friends', hint: 'A male deer gives its name to this one.' },
      { id: 3, left: 'register office (BrE)', right: 'city hall / courthouse — where a civil wedding takes place', hint: 'Where you also give notice of marriage.' },
      { id: 4, left: 'wedding breakfast (BrE)', right: 'the main meal after the ceremony — although it is usually eaten in the afternoon', hint: 'The name is misleading: it is not in the morning.' },
      { id: 5, left: 'the big day', right: 'the day of the wedding itself', hint: 'Informal, and used in every wedding magazine.' },
      { id: 6, left: 'RSVP', right: 'please reply to this invitation (from French: répondez s’il vous plaît)', hint: 'Four letters printed at the bottom of an invitation.' },
      { id: 7, left: 'venue', right: 'the place where the wedding or reception is held', hint: 'Couples spend months looking for the right one.' },
      { id: 8, left: 'to give someone away', right: 'to accompany the bride and formally present her to the groom', hint: 'Traditionally the bride’s father does this.' },
    ],
  },
  {
    type: 'type-blanks',
    title: '2g · One word only',
    body: 'The first letter of each word is given. Type the rest.',
    blanks: [
      { prompt: 'A couple who have just got married are called n___.', answer: 'newlyweds' },
      { prompt: 'The holiday after the wedding is the h___.', answer: 'honeymoon' },
      { prompt: 'The flowers carried by the bride are her b___.', answer: 'bouquet' },
      { prompt: 'The party after the ceremony is the r___.', answer: 'reception' },
      { prompt: 'Guests throw c___ over the couple outside the church.', answer: 'confetti' },
      { prompt: 'The thin material covering the bride’s face is her v___.', answer: 'veil' },
      { prompt: 'The promises the couple make to each other are their v___.', answer: 'vows' },
      { prompt: 'The long central path in a church is the a___.', answer: 'aisle' },
    ],
  },
];

/* ───────────────────────── 3 · Reading ───────────────────────── */

export const culturesReading: Activity[] = [
  {
    type: 'reading',
    title: '3 · Reading: Weddings around the world',
    passage: [
      'OLGA: I had two wedding days! The first was a civil wedding in the city hall and then, two days later, I had another wedding in a church. In my country everybody must have a civil ceremony, and a lot of couples choose to have a church wedding as well. After the civil wedding there was a small party with close friends and family, and in the evening we had the Polterabend. People brought old porcelain — plates, cups and things like that — and threw them on the ground in front of my new husband and me. Everything broke and there was lots of noise and laughing! We had to sweep up the broken pieces together, but this symbolised that nothing would get broken in our new house again while we lived together. So far it has worked!',
      'MANUELA: For me the most beautiful part of the wedding was the candle ceremony. In my country this is a traditional custom. After giving each other rings, the bride and groom each light a candle. I lit the candle on my right, which represented the bride, and my husband lit the candle on his left, which represented the groom. We then used these two candles to light a third candle in the middle, and blew out the first two. So there was just one candle alight, and this symbolised that we were now one body and were going to share every moment of our lives together. I was so happy I cried!',
      'MERYEM: My wedding began with separate celebrations for my family and the groom’s family, and lasted five days. During this time my husband-to-be and I weren’t allowed to see each other. Then on the day of the ceremony my girlfriends took my shoes away from me! With a lot of giggling they wrote their names inside the shoes and then gave them back. After the ceremony I took my shoes off and looked at the names. In my country, if one of the names has rubbed off and can’t be read any more, it means that this person is going to get married next. When I looked in my shoes I saw that my sister’s name had disappeared — and guess what? She got married six months later!',
      'NOSHILU: As we grow older, unmarried women can wear more and more jewellery, but nothing beats the colourful, beaded necklace worn by the women of my people on their wedding day. As is the tradition, my necklace was made by my mother and was presented to me by my father. It was very elaborate and went down to my knees. I wore all my necklaces, earrings and ornaments that day, and in fact it was a little tricky to walk! My husband collected me from my parents’ home and took me to his home, where I received gifts of cattle. I now also wear a blue cloth, which shows that I am a married woman.',
      'LIN: In my country red is the most important colour for our wedding ceremonies. For us it symbolises love, joy and prosperity. Although a lot of brides wear white these days, my wedding gown was the traditional red, and so were the invitations I sent out to our guests. Before I was married, my husband’s family came to my family’s home with wedding gifts in red baskets. Before the evening party started, my husband and I went to a nearby park and had a video made. We also exchanged handkerchiefs — each one with a picture of a mandarin duck on it, because ducks always stay together and symbolise faithfulness. And the colour of the handkerchiefs? Red, of course!',
      'BARBARA: My wedding day was completely unplanned and unexpected! We were on holiday in Las Vegas and having a great time when my boyfriend proposed. We had been together a few years and loved each other very much, so I accepted. I was then very surprised when he said he wanted to get married there and then! I wasn’t too sure, but he was so enthusiastic that I agreed. During the few hours before the wedding, which was in a tiny chapel, I had to find "something old, something new, something borrowed and something blue" to wear at the ceremony — that’s a tradition in my country. Old and new were easy; I borrowed a scarf from a friend, and my husband gave me a beautiful sapphire ring. The holiday then became our honeymoon!',
    ],
  },
  {
    type: 'multiple-choice',
    title: '3a · Scanning: which culture?',
    body: 'Read quickly and decide where each speaker comes from. The countries are: China, Colombia, Germany, Turkey, the USA and the Maasai people of Kenya and Tanzania.',
    mcq: [
      { question: 'Olga (two ceremonies and broken porcelain) comes from…', options: ['Germany', 'Colombia', 'Turkey', 'China'], answerIndex: 0 },
      { question: 'Manuela (the candle ceremony) comes from…', options: ['the USA', 'Colombia', 'Germany', 'Turkey'], answerIndex: 1 },
      { question: 'Meryem (names written inside the shoes) comes from…', options: ['China', 'the Maasai people', 'Turkey', 'Colombia'], answerIndex: 2 },
      { question: 'Noshilu (the beaded necklace and gifts of cattle) belongs to…', options: ['the Maasai people', 'Turkey', 'Germany', 'the USA'], answerIndex: 0 },
      { question: 'Lin (red gowns and mandarin ducks) comes from…', options: ['Colombia', 'Turkey', 'China', 'the USA'], answerIndex: 2 },
      { question: 'Barbara (the Las Vegas chapel) comes from…', options: ['the USA', 'Germany', 'China', 'the Maasai people'], answerIndex: 0 },
    ],
  },
  {
    type: 'multiple-choice',
    title: '3b · Comprehension',
    body: 'Read the text more carefully and choose the best answer.',
    mcq: [
      { question: 'Why do guests break porcelain at a Polterabend?', options: ['To frighten away bad spirits from the church', 'To symbolise that nothing else will break in the couple’s home', 'Because the plates are old and unwanted', 'To decide who will marry next'], answerIndex: 1 },
      { question: 'What does the third candle in the candle ceremony represent?', options: ['The couple’s future children', 'The two families joining together', 'The couple becoming one', 'Good luck and prosperity'], answerIndex: 2 },
      { question: 'How did Meryem know that her sister would marry next?', options: ['Her sister caught the bouquet', 'Her sister’s name had rubbed off inside the shoe', 'Her sister’s name was written first', 'A fortune teller told her'], answerIndex: 1 },
      { question: 'Who made Noshilu’s wedding necklace?', options: ['Her mother', 'Her father', 'Her husband’s family', 'She made it herself'], answerIndex: 0 },
      { question: 'For Lin, the colour red does NOT symbolise…', options: ['love', 'joy', 'prosperity', 'faithfulness'], answerIndex: 3 },
      { question: 'Why did Barbara agree to marry immediately?', options: ['She had always wanted a Las Vegas wedding', 'Her family were already there', 'Her boyfriend was so enthusiastic', 'It was much cheaper'], answerIndex: 2 },
      { question: 'Which four of the ten items in the warm-up are NOT mentioned in the text?', options: ['tie, rice, nuts and money', 'candles, shoes, red and blue', 'jewellery, porcelain, money and rice', 'nuts, blue, candles and tie'], answerIndex: 0 },
    ],
  },
  {
    type: 'matching',
    title: '3c · Vocabulary in context',
    body: 'Find these words in the text and match them with their meanings.',
    pairs: [
      { id: 1, left: 'to symbolise', right: 'to represent an idea or feeling', hint: 'The candles ___ the bride and the groom.' },
      { id: 2, left: 'elaborate', right: 'complicated and made with a lot of detail', hint: 'Noshilu’s necklace was very ___.' },
      { id: 3, left: 'prosperity', right: 'wealth and success', hint: 'Red symbolises love, joy and ___.' },
      { id: 4, left: 'faithfulness', right: 'staying loyal to one partner', hint: 'Mandarin ducks are a symbol of ___.' },
      { id: 5, left: 'to sweep up', right: 'to clean a floor with a brush', hint: 'They had to ___ the broken porcelain together.' },
      { id: 6, left: 'to rub off', right: 'to disappear because of contact or friction', hint: 'One of the names had ___ inside the shoe.' },
      { id: 7, left: 'gown', right: 'a long, formal dress', hint: 'Lin’s wedding ___ was red, not white.' },
      { id: 8, left: 'chapel', right: 'a small building or room used for religious ceremonies', hint: 'Barbara married in a tiny Las Vegas ___.' },
    ],
  },
  {
    type: 'discussion',
    title: '3d · Talking point',
    body: 'Discuss in small groups.',
    bullets: [
      'Which of the six weddings appeals to you most? Which would you least like to have?',
      'Which customs from the text also exist in your culture, in some form?',
      'Barbara married a few hours after the proposal. Is a spontaneous wedding romantic or reckless?',
      '"Something old, something new, something borrowed, something blue." Are there similar lucky objects in your country?',
    ],
  },
];

export const traditionsActivities: Activity[] = [
  {
    type: 'reading',
    title: '4 · Strange wedding traditions around the world',
    passage: [
      'KOREA — Traditionally the groom gives his new mother-in-law ducks or geese to show his fidelity, since both of these birds mate for life. The live birds have since been replaced with wooden ones, which are exchanged by the bride and groom during the ceremony.',
      'INDIA — During the ceremony the bride’s sisters or cousins steal the groom’s shoes. He then has to buy them back so that he leaves the mandap wearing the shoes he arrived in.',
      'DENMARK — During the reception, the groom is lifted into the air by the male guests. One of them takes a pair of scissors and cuts the end off one of the groom’s socks.',
      'PERU — Before the wedding cake is cut, single female guests gather round it and take hold of white ribbons hidden inside. Each of them pulls a ribbon, and one will reveal a ring: whoever pulls the ring will be the next to marry.',
      'MALAYSIA — After the wedding, members of the Tidong people are kept under a kind of house arrest by friends and relatives, who stop them from going to the toilet for three days. If they break the taboo, it is believed the couple will have bad luck for the rest of their marriage.',
      'SWEDEN — If a guest starts banging their glass, the other guests join in and the bride and groom must kiss.',
      'SOUTH AFRICA — Twelve symbols are incorporated into the ceremony — salt, pepper, wheat, wine, bitter herbs, a holy book, a broom, a spear, a spoon, honey, a shield and a pot. Each one represents a challenge the couple will have to overcome together.',
      'IRELAND — In the west of Ireland, young men disguised in straw costumes and hats visit weddings to dance with the bride, sing and tell jokes. Their presence is believed to bring good fortune, and the tradition is enjoying a revival today.',
      'GERMANY — Using a two-person saw, the newlyweds work together to cut through a large wooden log, which represents the first obstacle they will overcome together.',
    ],
  },
  {
    type: 'multiple-choice',
    title: '4a · Which country?',
    body: 'Match each strange tradition with the right country.',
    mcq: [
      { question: 'In which country are the groom’s shoes stolen and ransomed back?', options: ['Korea', 'India', 'Peru', 'Denmark'], answerIndex: 1 },
      { question: 'Where do guests cut off the end of the groom’s socks?', options: ['Denmark', 'Sweden', 'Ireland', 'Germany'], answerIndex: 0 },
      { question: 'Where do single women pull ribbons out of the wedding cake?', options: ['Malaysia', 'South Africa', 'Peru', 'Korea'], answerIndex: 2 },
      { question: 'In which country do the newlyweds saw a log in half together?', options: ['Germany', 'Ireland', 'Sweden', 'India'], answerIndex: 0 },
      { question: 'Where do wooden ducks symbolise faithfulness between the couple?', options: ['Korea', 'China', 'Peru', 'Malaysia'], answerIndex: 0 },
      { question: 'Which tradition involves twelve symbolic objects such as salt, honey and a broom?', options: ['The Irish straw-boys', 'The South African ceremony', 'The Swedish glass-banging', 'The Tidong taboo'], answerIndex: 1 },
    ],
  },
  {
    type: 'discussion',
    title: '4b · Discuss',
    bullets: [
      'Which of these traditions sounds the most fun? Which sounds the most difficult?',
      'Many of the customs symbolise teamwork or loyalty. Why do you think weddings need symbols at all?',
      'Are old wedding traditions disappearing in your country? Should we try to keep them?',
      'If you were planning a wedding, what strange tradition would you invent?',
    ],
  },
];

export const noticeReading: Activity[] = [
  {
    type: 'reading',
    title: '5 · Reading: Giving notice of marriage in the UK',
    passage: [
      'Before a couple in England or Wales can legally marry, they must "give notice" of their marriage. Giving notice means signing a legal statement at your local register office to say that you intend to marry or to enter into a civil partnership. Think of it as officially registering your intention. Nobody can be married legally without doing it first.',
      'At the appointment, both partners see a registrar. First they are asked about the wedding itself — where it will take place and when — so it is essential to know the exact address of the venue. Then each partner is interviewed separately and asked about their date of birth, their current address, their parents’ names and whether there is any legal reason why the marriage cannot go ahead. Finally, both must declare that the information they have given is correct. The whole process takes between half an hour and an hour.',
      'Couples also have to prove that they are "free to marry": that they are old enough, that they are not closely related, that any previous marriage has legally ended, and, if they come from outside the UK, that they have the right visas. That is why they must bring original documents — photocopies and photographs on a phone are not accepted. The list normally includes a valid passport or birth certificate with photo ID, a recent bank statement or utility bill as proof of address, and, where relevant, a decree absolute or a death certificate.',
      'There are strict deadlines. Notice must be given at least 29 days before the ceremony, and the notice is then displayed publicly at the register office for 28 days so that anyone can raise an objection. In practice, objections are extremely rare; the rule survives from a time when it was important to check that a marriage was not bigamous. The couple must also marry within 12 months, or the documents expire. In England and Wales you must have lived in your registration district for at least seven days before giving notice, and there is a statutory fee of £42 per person.',
      'A church wedding in the Church of England works differently. Instead of giving notice, the couple have their banns read out. Banns are an announcement in church of the couple’s intention to marry and a chance for anyone to say why the marriage may not lawfully take place. They are an ancient legal tradition and have been read out every week in churches across the country for centuries.',
    ],
  },
  {
    type: 'multiple-choice',
    title: '5a · True or false?',
    body: 'Decide whether each statement is true or false according to the article.',
    mcq: [
      { question: 'You can legally marry in England without giving notice, as long as you have a religious ceremony in a register office.', options: ['True', 'False'], answerIndex: 1 },
      { question: 'The couple are interviewed separately during the appointment.', options: ['True', 'False'], answerIndex: 0 },
      { question: 'Photocopies of documents are acceptable if the originals are lost.', options: ['True', 'False'], answerIndex: 1 },
      { question: 'The notice is displayed in public for 28 days.', options: ['True', 'False'], answerIndex: 0 },
      { question: 'Once notice has been given, the couple can marry at any time in the future.', options: ['True', 'False'], answerIndex: 1 },
      { question: 'Banns are the Church of England equivalent of giving notice.', options: ['True', 'False'], answerIndex: 0 },
    ],
  },
  {
    type: 'multiple-choice',
    title: '5b · Detail questions',
    mcq: [
      { question: 'How long before the ceremony must notice be given?', options: ['At least 7 days', 'At least 12 days', 'At least 29 days', 'At least 70 days'], answerIndex: 2 },
      { question: 'How long must you have lived in your registration district before giving notice?', options: ['Seven days', 'One month', 'Six months', 'One year'], answerIndex: 0 },
      { question: 'What is the statutory fee per person?', options: ['£24', '£42', '£57', '£70'], answerIndex: 1 },
      { question: 'Which document proves your address?', options: ['A passport', 'A birth certificate', 'A recent utility bill', 'A decree absolute'], answerIndex: 2 },
      { question: 'Why was the public display of notices originally introduced?', options: ['To advertise the wedding to the local community', 'To check that the marriage was not bigamous or illegal', 'To raise money for the register office', 'To give the couple time to change their minds'], answerIndex: 1 },
      { question: 'How long is the notice valid for?', options: ['28 days', 'Three months', 'Twelve months', 'Indefinitely'], answerIndex: 2 },
    ],
  },
  {
    type: 'matching',
    title: '5c · Legal wedding vocabulary',
    body: 'Match the term with its meaning.',
    pairs: [
      { id: 1, left: 'to give notice', right: 'to sign a legal statement that you intend to marry', hint: 'You do this at the register office.' },
      { id: 2, left: 'banns', right: 'an announcement in church of a couple’s intention to marry', hint: 'Read out on three Sundays before a church wedding.' },
      { id: 3, left: 'registrar', right: 'the official who checks the documents and records the marriage', hint: 'You are interviewed by this person.' },
      { id: 4, left: 'civil partnership', right: 'a legal relationship between two people, registered without a religious ceremony', hint: 'An alternative to marriage.' },
      { id: 5, left: 'legal impediment', right: 'a legal reason why a marriage cannot take place', hint: 'For example, already being married to someone else.' },
      { id: 6, left: 'to raise an objection', right: 'to state officially that something should not happen', hint: 'Anyone may do this during the 28 days.' },
      { id: 7, left: 'bigamous', right: 'describing a marriage to someone who is already married', hint: 'Illegal in the UK.' },
      { id: 8, left: 'statutory fee', right: 'a payment fixed by law', hint: '£42 per person, in this case.' },
    ],
  },
];

/* ───────────────────────── 6 · Video ───────────────────────── */

export const videoPreTeach: Activity[] = [
  {
    type: 'word-list',
    title: '6a · Pre-watching vocabulary',
    body: 'Check that you understand these words before you watch the TED-Ed talk.',
    words: [
      'an arranged marriage', 'a dowry', 'an alliance', 'polygamy', 'monogamy',
      'an heir', 'property', 'a household', 'a bond', 'kinship',
      'to negotiate', 'to inherit', 'romantic love', 'legal rights', 'social status',
    ],
  },
  {
    type: 'discussion',
    title: '6b · Before you watch',
    bullets: [
      'Why do you think marriage was invented in the first place?',
      'In history, who do you think usually decided who a person would marry?',
      'Is marriage today mainly about love, money, family or the law?',
    ],
  },
];

export const videoActivities: Activity[] = [
  {
    type: 'multiple-choice',
    title: '6c · Watch and answer',
    body: 'Watch the talk and choose the best answer. You may need to watch twice.',
    mcq: [
      { question: 'According to the talk, marriage in most early societies was mainly…', options: ['a romantic bond between two individuals', 'a practical arrangement between families and communities', 'a religious duty for everyone', 'a legal contract created by governments'], answerIndex: 1 },
      { question: 'One common purpose of marriage in ancient societies was to…', options: ['secure alliances, property and heirs', 'guarantee personal happiness', 'reduce the population', 'give women financial independence'], answerIndex: 0 },
      { question: 'What does the talk say about who was allowed to marry whom?', options: ['The rules were the same everywhere', 'Rules and restrictions varied enormously between cultures and periods', 'There were never any restrictions', 'Only religious leaders could decide'], answerIndex: 1 },
      { question: 'Romantic love became a central reason for marriage…', options: ['in ancient Egypt', 'only relatively recently in human history', 'in every culture at the same time', 'never'], answerIndex: 1 },
      { question: 'The talk suggests that the definition of marriage…', options: ['has stayed the same for thousands of years', 'has changed constantly across cultures and history', 'was fixed by law in the 19th century', 'depends only on religion'], answerIndex: 1 },
      { question: 'What is the main message at the end of the talk?', options: ['Marriage will disappear soon', 'Marriage is a flexible institution that continues to evolve', 'Traditional marriage is the only valid form', 'People should not get married'], answerIndex: 1 },
    ],
  },
  {
    type: 'discussion',
    title: '6d · After you watch',
    bullets: [
      'Which fact in the talk surprised you most?',
      'The talk argues that marriage has always been changing. Do people in your country agree with that idea?',
      'Should marriage still have legal and financial consequences, or should it be purely personal?',
      'What might marriage look like in a hundred years?',
    ],
  },
];

/* ───────────────────────── 7 · Speaking & writing ───────────────────────── */

export const finalTasks: Activity[] = [
  {
    type: 'task',
    title: '7 · Speaking: planning a wedding on a budget',
    body: 'Work in groups of three. You are helping a couple who have £6,000 to spend on their wedding. Decide together how to spend it, then present your plan to another group and defend your choices.',
    bullets: [
      'venue hire · catering and the wedding breakfast · the dress and suits',
      'flowers and decorations · photographer · music or a band',
      'invitations and stationery · rings · the honeymoon',
      'Useful language: "I think we should…", "It would be a waste of money to…", "We could save money by…", "The most important thing is…"',
    ],
  },
  {
    type: 'task',
    title: '7b · Roleplay: at the register office',
    body: 'Work in pairs and act out the conversation. Then swap roles.',
    bullets: [
      'Student A — you are a registrar. Ask about the venue, the date, the documents the couple have brought and their addresses. Explain the 28-day rule and the fee.',
      'Student B — you want to give notice of marriage. You are getting married in four weeks, you have forgotten one document and you have only lived in the district for five days. Ask what you should do.',
      'Try to use: "You’ll need to bring…", "I’m afraid that won’t be possible…", "Would it be all right if…?", "How long does it take to…?"',
    ],
  },
  {
    type: 'discussion',
    title: '7c · Discussion: attitudes to marriage',
    body: 'Say how far you agree with each statement, and why.',
    bullets: [
      '"Big weddings are a waste of money — couples should spend it on a house."',
      '"Getting married is just a piece of paper."',
      '"Wedding traditions matter because they connect us to our grandparents."',
      '"A couple should live together for at least a year before they get married."',
      '"The best man’s speech is the worst part of any wedding."',
    ],
  },
];

export const writingPrompt = {
  title: '8 · Writing: an article about a wedding',
  brief:
    'Write 140–190 words about a wedding you have been to, or a typical wedding in your country. Describe what happened before, during and after the ceremony, explain one custom and its meaning, and finish by saying what you thought of the day.',
  checklist: [
    'Use at least six words from the Vocabulary tab (bride, groom, reception, vows, best man, honeymoon…).',
    'Organise your writing into three or four paragraphs.',
    'Use past tenses accurately, and add some descriptive adjectives.',
    'Include one sentence explaining what a custom symbolises.',
  ],
  model:
    'Last summer I went to my cousin’s wedding in a small village outside Brno, and it was one of the best days of the year. The ceremony took place in a seventeenth-century church, and the bride arrived twenty minutes late in a long white dress with a very long train. Her father walked her down the aisle while the organ played, and I have never seen my uncle look so proud. After the couple had exchanged their vows and signed the register, we threw rice over them outside the church. In our culture rice symbolises prosperity and a house that will always have food in it. The reception was held in a converted barn, where we ate for hours and listened to speeches — the best man’s was so embarrassing that the groom went bright red. At midnight the bride threw her bouquet and my sister caught it, which she is still complaining about. The newlyweds left for their honeymoon in Croatia the next morning, and the rest of us cleared up the confetti.',
};
