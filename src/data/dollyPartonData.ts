// Topics · Dolly Parton — B2 business lesson data
// Facts adapted from the supplied infographic slides: Dollywood (founded 1986,
// co-owned 50/50 with the Herschend family, stake valued at $165m in 2021,
// 3.5m+ visitors, 4,500+ staff per season), the 3,000+ song catalogue she never
// sold (valued at roughly $150m), Sandollar Productions (co-founded 1985 with
// manager Sandy Gallin; Father of the Bride, Buffy the Vampire Slayer), the 2021
// fragrance/beauty line ($2.7m in sales in its first 24 hours on HSN), Doggy
// Parton pet apparel (2022), and an estimated $450m fortune. The 9 to 5 film
// text adapts the Trades Union Congress post on childcare, paid leave and
// flexible hours.

import type { Activity } from './engineeringData';
import type { FlashcardItem } from '@/components/presentations/Flashcards';
import dollywoodImg from '@/assets/topics/dolly-dollywood.jpg';
import beautyImg from '@/assets/topics/dolly-beauty.png.asset.json';

/* ───────────────────────── 1 · Warm-up ───────────────────────── */

export const warmUp: Activity[] = [
  {
    type: 'intro',
    title: '1 · Warm-up discussion',
    body: 'Dolly Parton is famous as a singer, but she has also built one of the most successful business empires in entertainment. Work with a partner and discuss the questions.',
    bullets: [
      'What do you know about Dolly Parton? Where have you heard of her?',
      'What is the difference between being famous and being a successful businessperson?',
      'Which celebrities have built real companies, not just sold products with their name on?',
      'Why do you think a personal brand can be more valuable than talent alone?',
      'If you were a famous celebrity, what kind of business would you build — and what would you refuse to put your name on?',
    ],
  },
  {
    type: 'task',
    title: '1b · Predict the numbers',
    body: 'Dolly Parton built businesses in theme parks, music, film and beauty. With your partner, predict the numbers. Then check your answers in the Reading tab.',
    bullets: [
      'How many visitors does her theme park Dollywood receive each year?\u00a0\n\u00a0\u00a0\u00a0a) 350,000 b) 3.5 million c) 35 million',
      'How much is her song catalogue of 3,000+ songs worth?\u00a0\n\u00a0\u00a0\u00a0a) $15 million b) $150 million c) $1.5 billion',
      'How much did her fragrance line sell in its first 24 hours?\u00a0\n\u00a0\u00a0\u00a0a) $270,000 b) $2.7 million c) $27 million',
      'What is her total estimated fortune?\u00a0\n\u00a0\u00a0\u00a0a) $45 million b) $450 million c) $4.5 billion',
    ],
    image: dollywoodImg,
    imageAlt: 'A country-themed amusement park with a wooden roller coaster and a tall drop tower, set among green forested mountains beside a small lake',
    imageSize: 'md',
  },
];

export const rankingItems: string[] = [
  'Dollywood theme park (founded 1986)',
  'Song catalogue of 3,000+ songs',
  'Sandollar Productions film & TV company',
  'Fragrance and beauty line',
  'Doggy Parton pet apparel',
];

/* ───────────────────────── 2 · Vocabulary ───────────────────────── */

export const businessFlashcards: FlashcardItem[] = [
  { term: 'brand equity', definition: 'the extra value a well-known name adds to a product', example: 'Her brand equity meant the perfume sold out before any adverts ran.' },
  { term: 'licensing', definition: 'giving another company permission to use your name or product for a fee', example: 'The pet range is run through licensing deals with manufacturers.' },
  { term: 'royalties', definition: 'regular payments to the owner of a song, book or invention each time it is used or sold', example: 'She earns royalties every time one of her songs is played.' },
  { term: 'catalogue rights', definition: 'ownership of a collection of creative works, such as songs', example: 'She refused to sell her catalogue rights, unlike many artists of her generation.' },
  { term: 'to co-own a stake', definition: 'to hold a share of a business together with a partner', example: 'She co-owns a 50% stake in the theme park with the Herschend family.' },
  { term: 'to diversify', definition: 'to move into different types of business to reduce risk', example: 'She diversified from music into film, theme parks and beauty.' },
  { term: 'venture', definition: 'a new business project, especially a risky one', example: 'Her first venture outside music was a production company.' },
  { term: 'revenue stream', definition: 'a source of regular income for a business', example: 'Touring, royalties and the park are three separate revenue streams.' },
  { term: 'merchandising', definition: 'products sold using a famous name or brand', example: 'Merchandising from T-shirts to mugs adds millions to her income.' },
  { term: 'joint venture', definition: 'a business project run by two partners who share costs, risks and profits', example: 'Dollywood is a joint venture with a family entertainment company.' },
  { term: 'valuation', definition: 'an estimate of how much a company or asset is worth', example: 'The valuation of her share of the park reached $165 million in 2021.' },
  { term: 'philanthropy', definition: 'giving money and time to help others', example: 'Her philanthropy includes free books for millions of children.' },
  { term: 'return on investment (ROI)', definition: 'the profit made compared with the money put in', example: 'The beauty line delivered an impressive return on investment in one day.' },
  { term: 'IP (intellectual property)', definition: 'creative works legally owned by someone, such as songs or characters', example: 'Keeping her own IP was the smartest business decision she made.' },
  { term: 'to launch a line', definition: 'to start selling a new range of products', example: 'In 2022 she launched a line of pet clothing.' },
  { term: 'franchise', definition: 'a business model where others pay to operate under your brand', example: 'Some entertainers grow rich through franchising their restaurants.' },
];

export const vocabularyActivities: Activity[] = [
  {
    type: 'matching',
    title: '2b · Quick check',
    body: 'Match each business term to its definition. These words will appear throughout the lesson.',
    pairs: [
      { id: 1, left: 'royalties', right: 'regular payments to the owner of a creative work' },
      { id: 2, left: 'stake', right: 'a share of ownership in a company' },
      { id: 3, left: 'joint venture', right: 'a project run by two partners who share costs and profits' },
      { id: 4, left: 'licensing', right: 'selling permission to use your name or brand' },
      { id: 5, left: 'revenue stream', right: 'a regular source of income' },
      { id: 6, left: 'to diversify', right: 'to spread into different kinds of business' },
      { id: 7, left: 'valuation', right: 'an estimate of what a business is worth' },
      { id: 8, left: 'brand equity', right: 'the extra value a famous name adds to a product' },
    ],
  },
  {
    type: 'drag-fill',
    title: '2c · Collocations',
    body: 'Drag the words into the sentences, or tap a word and then tap a gap.',
    blanks: [
      { prompt: 'She was smart enough to ___ the rights to her songs instead of selling them for a quick payment.', answer: 'retain' },
      { prompt: 'The park is a ___ venture between Parton and the Herschend family, with each holding half the company.', answer: 'joint' },
      { prompt: 'Her stake in Dollywood was ___ at $165 million in 2021.', answer: 'valued' },
      { prompt: 'The fragrance ___ in $2.7 million in sales in its first 24 hours.', answer: 'pulled' },
      { prompt: 'Rather than depend on one product, she decided to ___ her business interests.', answer: 'diversify' },
      { prompt: 'In 2021 she ___ a beauty line that became an instant success.', answer: 'launched' },
    ],
  },
  {
    type: 'word-order',
    title: '2d · Word order',
    body: 'The words in these sentences are in the wrong order. Tap the words to build the correct sentence — they all use vocabulary and facts from the lesson.',
    sentences: [
      'Dollywood employs over four thousand people every season',
      'She never sold the rights to her song catalogue',
      'Her stake in the park was valued at 165 million dollars',
      'The fragrance line pulled in millions within twenty-four hours',
      'In 1985 she co-founded a production company with her manager',
      'A strong brand creates many different revenue streams',
      'She co-owns the theme park with the Herschend family',
      'Her business empire is worth around 450 million dollars',
      'The beauty products launched on the shopping channel in 2021',
      'She gives millions of free books to children through her charity',
    ],
  },
];

/* ───────────────────────── 3 · Reading ───────────────────────── */

export const empireReading: Activity[] = [
  {
    type: 'reading',
    newspaper: true,
    source: 'The Business Weekly',
    title: 'The empire, one venture at a time',
    body: 'How a girl from a one-room cabin in Tennessee built a business worth nearly half a billion dollars',
    passage: [
      'Dolly Parton grew up as one of twelve children in a poor family in the Smoky Mountains of Tennessee. She became one of the most successful country singers in history — but her fortune did not come from singing alone. Over five decades she turned her fame into a business empire that Forbes estimated at around $450 million.',
      'Her largest single asset is Dollywood, a theme park in her home state. Founded in 1986 as a joint venture, the park is co-owned 50/50 with the Herschend family, an entertainment company that runs the park while Dolly provides the brand. Her stake alone was valued at $165 million in 2021. Today Dollywood attracts more than 3.5 million visitors a year and employs over 4,500 people each season, making it one of the biggest employers in the region.',
      'Parton has always been careful to own what she creates. She famously refused to sell the publishing rights to her catalogue of more than 3,000 songs — a decision that seemed stubborn at the time but looks brilliant today, when catalogues have become one of the hottest assets in the music industry. Her collection, which includes hits such as "Jolene" and "9 to 5", is now valued at roughly $150 million.',
      'She was also investing behind the camera. In 1985 she co-founded Sandollar Productions with her manager, Sandy Gallin. The company went on to produce the film "Father of the Bride" and the television series "Buffy the Vampire Slayer" — proof that her business sense extended far beyond country music.',
      'In recent years she has kept launching new ventures. Her fragrance and beauty line, launched in 2021, pulled in $2.7 million in sales in its first 24 hours on the shopping channel HSN. A year later came Doggy Parton, a pet apparel line. Each venture carries her name, her image — and her unmistakable sense of humour.',
    ],
  },
  {
    type: 'multiple-choice',
    title: '3b · Comprehension check',
    body: 'Read the article and choose the best answer.',
    mcq: [
      {
        question: 'According to the article, where did most of Dolly Parton’s fortune come from?',
        options: ['Her singing career alone', 'Turning her fame into businesses', 'Inheriting money from her family', 'Winning music prizes'],
        answerIndex: 1,
      },
      {
        question: 'Who actually runs Dollywood day to day?',
        options: ['Dolly Parton herself', 'The Tennessee state government', 'The Herschend family’s entertainment company', 'Sandy Gallin'],
        answerIndex: 2,
      },
      {
        question: 'Why did refusing to sell her song catalogue turn out to be a good decision?',
        options: ['The songs were never popular', 'Catalogues later became highly valuable assets', 'She forgot she owned it', 'Nobody wanted to buy it'],
        answerIndex: 1,
      },
      {
        question: 'Which of these was produced by Sandollar Productions?',
        options: ['9 to 5', 'Jolene', 'Buffy the Vampire Slayer', 'The Imagination Library'],
        answerIndex: 2,
      },
      {
        question: 'How quickly did the beauty line reach $2.7 million in sales?',
        options: ['In its first year', 'In its first month', 'In its first week', 'In its first 24 hours'],
        answerIndex: 3,
      },
    ],
  },
  {
    type: 'matching',
    title: '3c · Match the numbers',
    body: 'Match each number to what it refers to in the article.',
    pairs: [
      { id: 1, left: '1986', right: 'the year Dollywood was founded' },
      { id: 2, left: '$165 million', right: 'the value of her stake in Dollywood in 2021' },
      { id: 3, left: '3,000+', right: 'the number of songs in her catalogue' },
      { id: 4, left: '1985', right: 'the year she co-founded Sandollar Productions' },
      { id: 5, left: '$2.7 million', right: 'beauty line sales in its first 24 hours' },
      { id: 6, left: '$450 million', right: 'Forbes’ estimate of her total fortune' },
      { id: 7, left: '2022', right: 'the year Doggy Parton launched' },
      { id: 8, left: '4,500', right: 'the number of people Dollywood employs each season' },
    ],
  },
];

export const nineToFiveReading: Activity[] = [
  {
    type: 'reading',
    newspaper: true,
    source: 'Work Life Today',
    title: 'The film that imagined a better office',
    body: 'What "9 to 5" said about work — forty years before flexible working became normal',
    passage: [
      'In 1980, Dolly Parton starred in "9 to 5", a comedy about three office workers who take over their company from their difficult boss. It sounds like pure fantasy, but the changes the women introduce in the film — free childcare at work, paid vacation, and flexible working hours — were radical ideas at the time.',
      'According to the story, these policies resulted in a 20% increase in productivity. Decades later, real companies that introduced similar benefits began reporting strikingly similar results: happier staff, lower turnover and better output. The Trades Union Congress has pointed to the film as an early argument for exactly the kind of workplace reforms that many businesses now take for granted.',
      'For Parton, the film was more than entertainment. Its theme song became one of her biggest hits, and the story later became a stage musical — another example of her talent for turning one idea into several revenue streams.',
    ],
  },
  {
    type: 'discussion',
    title: '3e · Discussion: the 9 to 5 office',
    body: 'The film imagined a workplace with free childcare, paid vacation and flexible hours — and productivity went up 20%. Discuss with your partner.',
    bullets: [
      'Which of these three benefits exists in workplaces in your country? Which is rare?',
      'Do you believe better conditions really increase productivity, or do workers just enjoy themselves more?',
      'If you ran a company, what is the first benefit you would introduce? Why?',
      'Is it the job of companies or governments to provide things like childcare?',
    ],
  },
];

/* ─────────────────── 4 · Business analysis & language ─────────────────── */

export const businessAnalysis: Activity[] = [
  {
    type: 'task',
    title: '4 · Case study: sell or keep?',
    body: 'Many musicians sell their song catalogues for one huge payment. Dolly Parton never did — and today her catalogue is worth around $150 million and still earns royalties. In pairs, prepare arguments for both sides, then decide together: was she right?',
    bullets: [
      'SELL: you get a guaranteed fortune immediately, with no risk.',
      'SELL: managing rights and contracts is complicated and expensive.',
      'KEEP: royalties are a revenue stream that can grow for decades.',
      'KEEP: nobody else can use your songs in ways you dislike.',
      'Decide: which side has the stronger arguments? Would you have done the same?',
    ],
    image: beautyImg.url,
    imageAlt: 'Dolly Parton in a pink and blue western-style outfit leaning towards a brindle dog sitting on a beige sofa against a pink background',
    imageSize: 'md',
  },
  {
    type: 'task',
    title: '4b · Philanthropy: good business or pure generosity?',
    body: 'Dolly Parton’s Imagination Library has given away more than 200 million free books to children, and she donated $1 million towards the development of the Moderna COVID-19 vaccine. Discuss in small groups.',
    bullets: [
      'Does giving money away help a celebrity’s brand? Should that matter?',
      'Her philanthropy focuses on her home region of Tennessee. Is local giving more valuable than global giving?',
      'Some say business leaders only donate for the publicity. Does the reason matter if the result is good?',
      'If you had $450 million, what cause would you support, and how?',
    ],
  },
  {
    type: 'type-blanks',
    title: '4c · Language focus: evaluative language',
    phraseBank: true,
    body: 'Business writers use phrases like these to give opinions about decisions and results. Complete the sentences with the phrases below. (a smart move · it is widely seen as · this proved lucrative · a risky venture · the driving force behind)',
    blanks: [
      { prompt: 'Keeping the catalogue instead of selling it was ___, because its value kept rising for decades.', answer: 'a smart move' },
      { prompt: 'Dollywood ___ one of the most successful celebrity theme parks in the world.', answer: 'it is widely seen as' },
      { prompt: 'The beauty line sold $2.7 million in a single day — clearly, ___.', answer: 'this proved lucrative' },
      { prompt: 'Opening a theme park in a small mountain town looked like ___, but it attracted millions of visitors.', answer: 'a risky venture' },
      { prompt: 'She has been ___ every business that carries her name.', answer: 'the driving force behind' },
    ],
  },
  {
    type: 'task',
    title: '4d · Rewrite like an analyst',
    body: 'These sentences come from a fan blog. Rewrite each one in a more formal, analytical style, as if it appeared in a business magazine. Compare your versions with a partner. (Useful phrases: this proved…, a key factor in…, it is estimated that…, significantly)',
    bullets: [
      '"She didn’t sell her songs. Good choice — now they’re worth loads!"',
      '"The perfume made $2.7 million in a day. Wow!"',
      '"She started a film company with her manager, and it made some really famous movies."',
      '"She gives kids free books. That’s nice."',
    ],
  },
];

/* ─────────────────── 5 · Speaking & Writing ─────────────────── */

export const speakingTasks: Activity[] = [
  {
    type: 'task',
    title: '5 · Roleplay: pitch a licensing deal',
    body: 'Student A: you run a company that wants to put the Dolly Parton brand on a new product (choose one: guitars, baking mixes, children’s toys, garden tools, or your own idea). Student B: you are Dolly’s brand manager. Negotiate a licensing deal.',
    bullets: [
      'A: explain your product, why the brand fits, and what you can offer (fee, royalties, marketing).',
      'B: protect the brand. Ask about quality, target customers and how much control Dolly’s team will keep.',
      'Agree on: an upfront fee, a royalty percentage, and how long the deal lasts.',
      'Report your deal to the class. Which pair negotiated the best terms for each side?',
    ],
  },
  {
    type: 'discussion',
    title: '5b · Final discussion',
    bullets: [
      'Does a strong personal brand outlast its owner? Think of brands named after people who are no longer alive.',
      'Dolly Parton once said, "Don’t get so busy making a living that you forget to make a life." How does that apply to building a business?',
      'Which of her ventures do you think will still exist in fifty years? Why?',
      'What lessons from her career could you apply to your own career or business?',
    ],
  },
];

export const writingPrompt = {
  title: '5c · Writing: the brand legacy article',
  brief: 'You write for a business magazine. Write a short article (140–190 words) about Dolly Parton’s business empire. Explain how she turned fame into a group of successful companies, and say what other celebrities could learn from her example.',
  checklist: [
    'A headline and a short introduction that makes the reader want to continue',
    'At least three ventures from the lesson with accurate facts and figures',
    'Evaluative language (e.g. a smart move, this proved lucrative)',
    'A conclusion with a lesson for other celebrities',
    'Between 140 and 190 words',
  ],
  model: `From Country Star to Business Empire

When Dolly Parton left a one-room cabin in Tennessee to become a singer, few predicted she would one day be worth an estimated $450 million. Yet her fortune was built not on music alone, but on a series of smart business decisions.

Her most valuable move was keeping control. She refused to sell her catalogue of 3,000 songs, now valued at roughly $150 million, and she co-owns the Dollywood theme park 50/50 with the Herschend family — a stake valued at $165 million. Diversification proved lucrative too: her production company Sandollar made hits such as "Father of the Bride", and her 2021 beauty line pulled in $2.7 million in its first 24 hours.

The lesson for other celebrities is clear. Fame opens doors, but lasting wealth comes from owning your work, choosing the right partners and diversifying one venture at a time. Parton built an empire without ever selling the one thing that mattered most: her name.`,
};
