// New English File 5th edition — Intermediate (B1+)
// Scaffold for Files 1–12. File 1 lesson 1A ("How we eat") is fully built from
// the Student's Book pp.8–11, Vocabulary Bank p.160 and the Teacher's Book
// answer key. Remaining lessons/Files are placeholders ("coming soon") and are
// not clickable until their source pages are added.

import type { Activity } from './engineeringData';
export type { Activity };

export interface EFSection {
  id: string;
  title: string;
  /** Short blurb shown under the tab heading */
  description?: string;
  /** YouTube video id embedded above the activities */
  videoId?: string;
  videoLabel?: string;
  activities: Activity[];
}

export interface EFLesson {
  id: string;            // url slug, e.g. "1a"
  code: string;          // "1A"
  title: string;
  subtitle: string;
  goals?: { g?: string; v?: string; p?: string };
  sections: EFSection[]; // empty = coming soon
}

export interface EFFile {
  id: string;            // "file-1"
  number: number;
  title: string;
  subtitle: string;
  lessons: EFLesson[];   // empty = coming soon
}

// ─────────────────────────────── FILE 1 · 1A ───────────────────────────────

const lesson1A: EFLesson = {
  id: '1a',
  code: '1A',
  title: 'How we eat',
  subtitle: 'Food and cooking, short and long vowel sounds, present simple and continuous',
  goals: {
    g: 'present simple and continuous, action and non-action verbs',
    v: 'food and cooking',
    p: 'short and long vowel sounds',
  },
  sections: [
    // 1 VOCABULARY
    {
      id: 'vocabulary',
      title: 'Vocabulary',
      description: 'Food and cooking — Vocabulary Bank p.160',
      videoId: 'MC7RCZWw98E',
      videoLabel: 'Video · Food items (16 circled items)',
      activities: [
        {
          type: 'intro',
          title: 'Watch and remember',
          body: 'Watch the video. Sixteen food items are circled. How many can you remember? Write your list, then check with the answers below.',
          bullets: [
            'Watch once without writing anything.',
            'Then write down as many of the 16 items as you can.',
            'Watch again and complete your list.',
          ],
        },
        {
          type: 'fill-blanks',
          title: 'Check your list — the 16 circled items',
          body: 'Click "Show answers" once you have written your own list.',
          blanks: [
            { prompt: 'Fruit (3 items)', answer: 'oranges, apples, bananas' },
            { prompt: 'Vegetables (4 items)', answer: 'potatoes, onions, carrots, tomatoes, red peppers' },
            { prompt: 'Protein (3 items)', answer: 'chicken, eggs, fish' },
            { prompt: 'Store cupboard / other (4 items)', answer: 'pasta, bread, herbs, spices, cheese' },
          ],
        },
        {
          type: 'word-list',
          title: 'Vocabulary Bank · Fish, seafood and meat',
          words: ['crab', 'lobster', 'mussels', 'prawns', 'salmon', 'squid', 'tuna', 'beef', 'chicken', 'duck', 'lamb', 'pork'],
        },
        {
          type: 'word-list',
          title: 'Vocabulary Bank · Fruit and vegetables',
          words: ['aubergine (AmE eggplant)', 'avocado', 'beans', 'beetroot', 'cabbage', 'cherries', 'courgette (AmE zucchini)', 'cucumber', 'grapes', 'lemon', 'mango', 'melon', 'peach', 'pear', 'raspberries', 'red pepper'],
        },
        {
          type: 'matching',
          title: 'Cooking — match the word to the meaning',
          body: 'Click a cooking verb, then click its definition.',
          pairs: [
            { id: 1, left: 'baked', right: 'cooked in the oven, usually without fat (bread, cakes, potatoes)', hint: 'Think of a bakery.' },
            { id: 2, left: 'boiled', right: 'cooked in water at 100°C', hint: 'An egg cooked in a pan of bubbling water.' },
            { id: 3, left: 'fried', right: 'cooked in hot oil or fat in a pan', hint: 'The classic breakfast egg.' },
            { id: 4, left: 'grilled', right: 'cooked under or over direct heat, leaving dark lines', hint: 'Those stripes on a steak.' },
            { id: 5, left: 'roast', right: 'cooked in the oven with fat, especially meat or potatoes', hint: 'Sunday lunch with a whole chicken.' },
            { id: 6, left: 'steamed', right: 'cooked over boiling water, not in it', hint: 'A healthy way to cook green vegetables.' },
          ],
        },
        {
          type: 'matching',
          title: 'Adjectives to describe food',
          body: 'Match each adjective to its meaning, then say what kind of food you often use it with.',
          pairs: [
            { id: 1, left: 'fresh /freʃ/', right: 'recently produced or picked, not frozen or tinned', hint: 'The opposite of frozen — e.g. ___ fish.' },
            { id: 2, left: 'frozen /ˈfrəʊzn/', right: 'kept at a very low temperature to preserve it', hint: 'Peas, pizza, fish fingers.' },
            { id: 3, left: 'hot / spicy /ˈspaɪsi/', right: 'containing strong spices or chilli', hint: 'Here "hot" does not mean temperature.' },
            { id: 4, left: 'low-fat /ləʊ ˈfæt/', right: 'containing less fat than the normal version', hint: 'Yogurt, cheese, milk.' },
            { id: 5, left: 'raw /rɔː/', right: 'not cooked', hint: 'Sushi is this.' },
            { id: 6, left: 'tinned /tɪnd/', right: 'sold in a metal container so it lasts a long time', hint: 'AmE says "canned".' },
          ],
        },
        {
          type: 'fill-blanks',
          title: 'Listening 1.5 — food phrases',
          body: 'Six short conversations. Which food phrase goes with each adjective? Number 1 is done for you.',
          blanks: [
            { prompt: '1 raw…', answer: 'raw beetroot' },
            { prompt: '2 fresh…', answer: 'fresh crab' },
            { prompt: '3 frozen…', answer: 'frozen prawns' },
            { prompt: '4 hot / spicy…', answer: 'spicy chicken' },
            { prompt: '5 low-fat…', answer: 'low-fat yogurt' },
            { prompt: '6 tinned…', answer: 'tinned tuna' },
          ],
        },
        {
          type: 'fill-blanks',
          title: 'Phrasal verbs — eat out, cut down on, cut out',
          body: 'Complete the phrasal verbs with down, on or out (x2). Then check.',
          blanks: [
            { prompt: 'I eat ___ a lot because I often don\'t have time to cook. Luckily, there are lots of good restaurants near where I live.', answer: 'out' },
            { prompt: 'I\'m trying to cut ___ on coffee at the moment. I\'m only having one cup at breakfast.', answer: 'down' },
            { prompt: 'The doctor told me that I should completely cut ___ all cheese and dairy products from my diet.', answer: 'out' },
          ],
        },
        {
          type: 'discussion',
          title: 'Activation · Talk to a partner',
          bullets: [
            'Are there any foods in the lists that you love, hate, or have never eaten?',
            'How do you prefer these things to be cooked: chicken, eggs, fish, potatoes?',
            'What kinds of fish, meat, fruit or vegetables are very common in your country?',
          ],
        },
      ],
    },

    // 2 PRONUNCIATION
    {
      id: 'pronunciation',
      title: 'Pronunciation',
      description: 'Short and long vowel sounds',
      videoId: 'IjDz_1Zx6rg',
      videoLabel: 'Video · Short and long vowel sounds',
      activities: [
        {
          type: 'intro',
          title: 'Long or short?',
          body: 'In the English File sound pictures, two dots (ː) after the symbol tell you that the sound is long: /iː/, /ɑː/, /ɔː/, /uː/. Watch the video, then repeat the words and sounds.',
        },
        {
          type: 'matching',
          title: 'Match a phrase to each sound',
          body: 'Click the sound picture, then click the phrase that contains it.',
          pairs: [
            { id: 1, left: 'fish /ɪ/ (short)', right: 'grilled squid', hint: 'A short, relaxed /ɪ/ — squ**i**d.' },
            { id: 2, left: 'tree /iː/ (long)', right: 'steamed green beans', hint: 'A long smile sound — gr**ee**n b**ea**ns.' },
            { id: 3, left: 'cat /æ/ (short)', right: 'crab salad', hint: 'Open your mouth wide — cr**a**b s**a**lad.' },
            { id: 4, left: 'car /ɑː/ (long)', right: 'a jar of raspberry jam', hint: 'A long, open sound — j**ar**.' },
            { id: 5, left: 'clock /ɒ/ (short)', right: 'hot sausages', hint: 'Short and rounded — h**o**t.' },
            { id: 6, left: 'horse /ɔː/ (long)', right: 'raw pork', hint: 'Long and rounded — r**aw** p**or**k.' },
            { id: 7, left: 'bull /ʊ/ (short)', right: 'a good cook', hint: 'Short — g**oo**d c**oo**k.' },
            { id: 8, left: 'boot /uː/ (long)', right: 'tuna with beetroot', hint: 'Long — t**u**na, beetr**oo**t.' },
          ],
        },
        {
          type: 'task',
          title: 'Practise',
          body: 'Say each phrase three times, exaggerating the length of the vowel. Record yourself and compare with the video.',
        },
      ],
    },

    // 3 LISTENING & SPEAKING
    {
      id: 'listening-speaking',
      title: 'Listening & Speaking',
      description: 'Your food profile — understanding key words in questions',
      activities: [
        {
          type: 'reading',
          title: 'Your food profile — the questionnaire',
          passage: [
            '1 What\'s your favourite…? a snack  b pizza topping  c sandwich filling',
            '2 Do you ever have…? a ready meals  b takeaways  c very hot / spicy food. Give examples.',
            '3 Are you allergic or intolerant to any food? How long have you had the problem?',
            '4 What food do you usually eat…? a to cheer yourself up when you\'re feeling sad  b when you\'re tired and don\'t want to cook',
            '5 When you\'re away from home, is there any food or drink that you really miss?',
            '6 Is there any food or drink that you couldn\'t live without? How often do you eat / drink it?',
          ],
        },
        {
          type: 'matching',
          title: 'Key words in the questions',
          body: 'Match each bold word or phrase to its meaning.',
          pairs: [
            { id: 1, left: 'topping /ˈtɒpɪŋ/', right: 'a layer of food that you put on top of a dish to add flavour', hint: 'Pepperoni, mushrooms, extra cheese…' },
            { id: 2, left: 'filling /ˈfɪlɪŋ/', right: 'food put inside a sandwich', hint: 'It goes between the two slices of bread.' },
            { id: 3, left: 'ready meals /ˈredi miːlz/', right: 'meals you buy already prepared that only need heating', hint: 'Straight from the supermarket to the microwave.' },
            { id: 4, left: 'takeaways /ˈteɪkəweɪz/', right: 'meals you buy in a restaurant and eat somewhere else', hint: 'Pizza delivered to your door.' },
            { id: 5, left: 'allergic /əˈlɜːdʒɪk/', right: 'reacting badly or feeling ill when you eat something', hint: 'Some people are this to nuts.' },
            { id: 6, left: 'intolerant /ɪnˈtɒlərənt/', right: 'not able to eat particular foods without becoming ill', hint: 'Lactose ___.' },
            { id: 7, left: 'cheer yourself up /tʃɪə jɔːˈself ʌp/', right: 'to make yourself happier', hint: 'Chocolate does this for many people.' },
            { id: 8, left: 'miss /mɪs/', right: 'to feel sad because you can\'t have something', hint: 'What you feel about home food when abroad.' },
          ],
        },
        {
          type: 'fill-blanks',
          title: 'Listening 1.7 — what did each speaker mention?',
          body: 'Six people each answer one question from the questionnaire. Listen, then check the food or drink they talk about.',
          blanks: [
            { prompt: 'Emma', answer: 'tea' },
            { prompt: 'Sarah', answer: 'pasta' },
            { prompt: 'John', answer: 'curries, Indonesian food, Thai food' },
            { prompt: 'Rob', answer: 'chocolate, ice cream' },
            { prompt: 'James', answer: 'caffeine / coffee' },
            { prompt: 'Sean', answer: 'meat / pepperoni' },
          ],
        },
        {
          type: 'discussion',
          title: 'Speaking · Your turn',
          body: 'Ask and answer the six questions in Your food profile with a partner. Give as much information as you can. What do you have in common?',
          bullets: [
            'Useful language: Both of us like… (plural verb)',
            'Useful language: Neither of us eats… (singular verb)',
          ],
        },
      ],
    },

    // 4 READING
    {
      id: 'reading',
      title: 'Reading',
      description: 'How you should eat: the new rules — using personal experience to understand a text',
      activities: [
        {
          type: 'reading',
          title: 'How you should eat: the new rules',
          passage: [
            'Is it good to start the day with a coffee? Should you eat protein before carbs? These days, it\'s not just what we eat and drink that\'s important. Now, scientists are coming up with rules about how we should consume food and drink. Here is some of their latest advice.',
            '1 — Do you switch on the coffee machine as soon as you wake up? It\'s a habit you might want to change. Research shows that drinking black coffee in order to wake yourself up can have a negative effect. "Blood sugar control is impaired when the first thing our bodies come into contact with is black coffee," says Professor James Betts. "It\'s better to eat something first and then drink coffee later if you need it."',
            '2 — Yogurt is a great addition to your diet for many health reasons. And the best time to eat it is before a meal, according to food scientists at the University of Wisconsin-Madison. Participants in the research were asked to eat a dish of natural yogurt followed by a large high-fat, high-carb meal. The yogurt improved digestion and also helped reduce the chance of heart disease.',
            '3 — From a plate of meat or fish and green or brightly coloured vegetables, it is the vegetables that should be eaten first. In one study, children who ate the meat or fish at the start of a meal were more likely to be overweight than children who ate the vegetables first. "Vegetables contain fibre which fills you up," says nutritionist Ian Marber.',
            '4 — Eat the meat, fish, eggs, cheese, or tofu on your plate, that is, the protein, before potatoes, rice, pasta or bread. Researchers in New York suggest that the worst time to eat carbs is at the beginning of a meal or on an empty stomach. In the study, participants ate ciabatta bread before or after eating a meal of grilled chicken with lettuce, tomatoes, and cucumber. The results showed that eating the carbs after the protein helped to reduce appetite.',
            '5 — Spending time chewing your food can help with high blood pressure, heart disease, and diabetes. Scientists found that when people chewed their food once a second for 30 seconds, it resulted in better digestion and they also used up more calories. "The effect is small for each meal, but over 365 days a year, it makes a big difference," says Professor Naoyuki Hayashi, a researcher in the faculty of sports science.',
            '6 — Eating your lunch on the run means you will probably eat faster and enjoy the food less, according to psychologists from the University of South Florida. But once you have finished eating, their research showed that it is best to stand up and move around. In their study, they asked 358 participants to rate their stress levels while eating sitting or standing. Those who ate while seated said they enjoyed their meals more, but scientists found that the people who walked around digested their meal about five minutes faster than the people lying down or sitting.',
            'Adapted from The Times',
          ],
        },
        {
          type: 'drag-fill',
          title: 'Complete the six headings',
          body: 'Drag the missing word into each heading, then check.',
          blanks: [
            { prompt: '1  Don\'t start the day with a black ___', answer: 'coffee' },
            { prompt: '2  Eat natural ___ before a meal', answer: 'yogurt' },
            { prompt: '3  Eat ___ before meat and fish', answer: 'vegetables' },
            { prompt: '4  Eat ___ before carbs', answer: 'protein' },
            { prompt: '5  ___ your food thoroughly', answer: 'Chew' },
            { prompt: '6  ___ up to digest a meal', answer: 'Stand' },
          ],
        },
        {
          type: 'matching',
          title: 'Match the advice to the reason',
          body: 'Match each paragraph (1–6) to the reason why it is better for you.',
          pairs: [
            { id: 1, left: 'Paragraph 1 · black coffee', right: 'B  It\'s more difficult to manage your blood sugar levels.', hint: 'Professor Betts talks about blood sugar control.' },
            { id: 2, left: 'Paragraph 2 · natural yogurt', right: 'E  It helps you digest a meal more easily and you\'re less likely to develop heart problems.', hint: 'Digestion + heart disease.' },
            { id: 3, left: 'Paragraph 3 · vegetables first', right: 'A  Eating like this makes you feel fuller.', hint: 'Fibre fills you up.' },
            { id: 4, left: 'Paragraph 4 · protein before carbs', right: 'D  You\'ll probably eat less.', hint: 'It reduces appetite.' },
            { id: 5, left: 'Paragraph 5 · chewing', right: 'F  It helps you digest a meal more easily and you use more energy as you eat.', hint: 'Better digestion + more calories used.' },
            { id: 6, left: 'Paragraph 6 · standing up', right: 'C  It increases the speed of digestion.', hint: 'Five minutes faster.' },
          ],
        },
        {
          type: 'drag-fill',
          title: 'Compound nouns from the article',
          body: 'Compound nouns are two nouns together, where the first noun describes the second one, e.g. coffee machine. The stress is usually on the first noun.',
          blanks: [
            { prompt: '1  blood ___', answer: 'sugar' },
            { prompt: '2  ___ disease', answer: 'heart' },
            { prompt: '3  ___ pressure', answer: 'blood' },
            { prompt: '4  ___ science', answer: 'sports' },
            { prompt: '5  stress ___', answer: 'levels' },
          ],
        },
        {
          type: 'discussion',
          title: 'Talk about the advice',
          bullets: [
            'Do you usually do what the experts recommend? If not, why not?',
            'Do you believe the information? Why (not)?',
            'Will you change your habits as a result of the advice?',
          ],
        },
      ],
    },

    // 5 VIDEO / LISTENING
    {
      id: 'video',
      title: 'Video interview',
      description: 'In conversation with Marianna Leivaditaki — predicting content using visual clues',
      videoId: 'aVX_TlSPMYM',
      videoLabel: 'Video · In conversation with Marianna Leivaditaki (Part 1)',
      activities: [
        {
          type: 'reading',
          title: 'Who is Marianna Leivaditaki?',
          passage: [
            'Marianna Leivaditaki is a food consultant and chef, who for many years ran a very successful London restaurant, Morito, on Hackney Road. She is the author of a cookery book called Aegean, and has written food columns for many national newspapers.',
            'She was born on the island of Crete, in Greece. Her father was a Cretan fisherman and her mother was Scottish. Together they ran a seafood restaurant and Marianna first learned to cook there. She loves traditional food as well as going to new places and learning new things.',
            'Marianna says: "The way I cook is the way I think; lots of things are happening at the same time. When I think of new dishes, my inspiration comes mostly from people, travelling, and creating marriages between the old and traditional to create something new and different."',
          ],
        },
        {
          type: 'multiple-choice',
          title: 'Watch Part 1 and check',
          body: 'Answer the questions about Marianna\'s childhood in Crete.',
          mcq: [
            { question: 'What did the family eat at home when Marianna was a child?', options: ['Only traditional Cretan food', 'A "funny mixture" — fresh fish plus Scottish dishes like bacon and eggs', 'Mostly street food from the market'], answerIndex: 1 },
            { question: 'Why could the family eat fresh fish every day?', options: ['Fish was very cheap on the island', 'Her father was a fisherman', 'They lived next to a fish market'], answerIndex: 1 },
            { question: 'What did they do with the lobsters her father caught?', options: ['They sold them all in the restaurant', 'They kept every one for the family', 'They gave them to neighbours'], answerIndex: 1 },
            { question: 'How did they cook the lobster?', options: ['Grilled it with herbs', 'Boiled it in salty water, then added olive oil and lemon', 'Baked it in the oven with cheese'], answerIndex: 1 },
            { question: 'What did Marianna do in the evenings as a child?', options: ['She played with other children', 'She helped in the kitchen of the family restaurant', 'She studied recipes at school'], answerIndex: 1 },
            { question: 'What did she write her collected recipes in?', options: ['A blue notebook she still has', 'Her mother\'s cookery book', 'A food column for a newspaper'], answerIndex: 0 },
          ],
        },
        {
          type: 'task',
          title: 'Part 2 — order the events in her life',
          body: 'Watch Part 2 (see the second video below) and number these events 1–7. What details can you remember about each one?',
          bullets: [
            'A  She got a job at Moro restaurant.',
            'B  She studied psychology at the University of Kent.',
            'C  She went travelling round Southern Europe and to Ecuador.',
            'D  She worked in her family restaurant in Crete.',
            'E  She wrote a recipe book.',
            'F  She had her son, Ermis.',
            'G  She opened Morito restaurant.',
          ],
        },
        {
          type: 'discussion',
          title: 'What about you?',
          bullets: [
            'What was your favourite food when you were a child?',
            'What kind of things did your mother or father cook? Do you still eat them?',
            'Do you have a favourite restaurant or café? What do you like most about it — the food, the atmosphere, the service, or the price?',
          ],
        },
      ],
    },
    {
      id: 'video-part-2',
      title: 'Video · Part 2',
      description: 'In conversation with Marianna Leivaditaki (Part 2)',
      videoId: 'DF_im_2EalI',
      videoLabel: 'Video · In conversation with Marianna Leivaditaki (Part 2)',
      activities: [
        {
          type: 'task',
          title: 'While you watch',
          body: 'Put the seven events from the previous tab in order, and note one detail for each. Then compare with a partner.',
        },
      ],
    },

    // 6 GRAMMAR
    {
      id: 'grammar',
      title: 'Grammar',
      description: 'Present simple and continuous, action and non-action verbs',
      activities: [
        {
          type: 'multiple-choice',
          title: 'Choose the correct verb form',
          body: 'Three sentences from the interview. Which form does Marianna use?',
          mcq: [
            { question: 'I used to collect lots of recipes and write them down in my blue notebook, which I still ___, by the way.', options: ['have', 'am having'], answerIndex: 0 },
            { question: 'Now, ___ a lot of different things, and they\'re all very creative.', options: ['I do', 'I\'m doing'], answerIndex: 1 },
            { question: 'I have also written Aegean, which is my own cookbook, and it\'s like a life journal which I ___ and will cherish forever.', options: ['love', 'am loving'], answerIndex: 0 },
          ],
        },
        {
          type: 'reading',
          title: 'The rules',
          passage: [
            'Present simple — for things that are generally true, or that always happen: I work for an IT company. She gets up early every day.',
            'Present continuous (be + verb + -ing) — for things happening now, at this moment; for temporary things happening around now (this week, this month); and to describe what is happening in a picture: I\'m checking my messages. My brother is doing a two-month course in the UK.',
            'Action and non-action verbs — verbs that describe states or feelings (want, need, like, love, hate, have = possess, know, believe) are normally used in the present simple, not the continuous: I like Italian food. NOT I\'m liking Italian food.',
            'Some verbs have both an action and a non-action meaning: I have a car (possess — non-action) / I\'m having lunch (eat — action).',
          ],
        },
        {
          type: 'drag-fill',
          title: 'Present simple or present continuous?',
          body: 'Drag the correct form into each gap.',
          blanks: [
            { prompt: 'A: What ___ you doing? — B: I\'m sending a message to Sarah.', answer: 'are' },
            { prompt: 'I usually ___ tea, but I want a coffee today.', answer: 'drink' },
            { prompt: 'You can turn off the radio. I ___ listening to it.', answer: 'am not' },
            { prompt: 'My wife ___ from 9.00 a.m. to 5.00 p.m. She\'s a bank manager.', answer: 'works' },
            { prompt: 'Be careful! The baby ___ your pen in her mouth!', answer: 'is putting' },
            { prompt: 'Marc lives in Paris, but he ___ working in Nice at the moment.', answer: 'is' },
          ],
        },
        {
          type: 'multiple-choice',
          title: 'Action or non-action?',
          body: 'Choose the correct sentence.',
          mcq: [
            { question: 'Which is correct?', options: ['I\'m needing a new phone.', 'I need a new phone.'], answerIndex: 1 },
            { question: 'Which is correct?', options: ['She\'s having a shower right now.', 'She has a shower right now.'], answerIndex: 0 },
            { question: 'Which is correct?', options: ['Do you understand this rule?', 'Are you understanding this rule?'], answerIndex: 0 },
            { question: 'Which is correct?', options: ['This week I work from home.', 'This week I\'m working from home.'], answerIndex: 1 },
          ],
        },
      ],
    },

    // 7 SPEAKING
    {
      id: 'speaking',
      title: 'Speaking',
      description: 'Do you agree? — agreeing and disagreeing',
      activities: [
        {
          type: 'discussion',
          title: 'Do you agree?',
          body: 'Read statements 1–6 and decide if you agree or disagree. Think of reasons and examples, then discuss each one for at least two minutes.',
          bullets: [
            '1  Good service is more important than good food.',
            '2  You should never have to pay for bread or water in a restaurant.',
            '3  Everybody should learn to cook at school.',
            '4  Cheap restaurants always serve bad food.',
            '5  Waiters should earn a good salary and tips should be banned.',
            '6  When you eat out, the best thing to order is something you can\'t cook yourself.',
          ],
        },
        {
          type: 'word-list',
          title: 'Agreeing and disagreeing',
          words: ['I agree with that / with you.', 'I don\'t agree with that / with you.', 'I disagree with that / with you.', 'I think that\'s true.', 'I think you\'re right.', 'I don\'t think that\'s true.', 'I think it depends.'],
        },
        {
          type: 'task',
          title: 'Extension',
          body: 'Choose the statement you feel most strongly about and prepare a one-minute argument. Use at least three phrases from the language box.',
        },
      ],
    },

    // 8 WORKBOOK
    {
      id: 'workbook',
      title: 'Homework',
      description: 'Workbook 1A — extra practice',
      activities: [
        {
          type: 'task',
          title: 'Workbook 1A',
          body: 'Complete these sections in Workbook 1A after the lesson:',
          bullets: [
            'Vocabulary: Food and cooking — fish and seafood, meat, fruit and vegetables, cooking verbs.',
            'Pronunciation: short and long vowel sounds — sort the words into the correct sound groups.',
            'Grammar: present simple and continuous, action and non-action verbs.',
            'Reading & Listening: "How we eat".',
          ],
        },
        {
          type: 'discussion',
          title: 'Self-check',
          bullets: [
            'Can you name 10 kinds of fish, seafood, meat, fruit and vegetables?',
            'Can you explain the difference between baked and roast?',
            'Can you say when you use the present simple and when you use the present continuous?',
            'Can you give three examples of non-action verbs?',
          ],
        },
      ],
    },
  ],
};

const soon = (id: string, code: string, title: string, subtitle: string): EFLesson => ({
  id, code, title, subtitle, sections: [],
});

export const efFiles: EFFile[] = [
  {
    id: 'file-1',
    number: 1,
    title: 'Food, people and places',
    subtitle: 'Present tenses, food and cooking, question formation',
    lessons: [
      lesson1A,
      soon('1b', '1B', 'Lesson 1B', 'Coming soon — source pages needed'),
      soon('1c', '1C', 'Lesson 1C', 'Coming soon — source pages needed'),
      soon('practical-english-1', 'PE1', 'Practical English 1', 'Coming soon — source pages needed'),
      soon('revise-check-1', 'R&C', 'Revise & Check 1', 'Coming soon — source pages needed'),
    ],
  },
  ...Array.from({ length: 11 }, (_, i) => {
    const n = i + 2;
    return {
      id: `file-${n}`,
      number: n,
      title: `File ${n}`,
      subtitle: 'Coming soon',
      lessons: [],
    } as EFFile;
  }),
];
