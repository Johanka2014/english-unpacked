// Solutions Intermediate (3rd edition) — Maturita practice
// Units 1–3 are fully built from the Student's Book (pp. 8–40), with answers
// taken from the Workbook Key and Teacher's Book. Units 4–10 are placeholders.

import type { Activity } from './engineeringData';
import track107 from '@/assets/audio/solutions/sol-1-07.mp3.asset.json';
import track108 from '@/assets/audio/solutions/sol-1-08.mp3.asset.json';
import track109 from '@/assets/audio/solutions/sol-1-09.mp3.asset.json';

export type { Activity };

export interface SolSection {
  id: string;
  title: string;
  description?: string;
  activities: Activity[];
}

export interface SolLesson {
  id: string;           // slug, e.g. "1a"
  code: string;         // "1A"
  title: string;
  subtitle: string;
  skill: string;        // Vocabulary / Grammar / Listening ...
  sections: SolSection[]; // empty = coming soon
}

export interface SolUnit {
  id: string;           // "unit-1"
  number: number;
  title: string;
  subtitle: string;
  lessons: SolLesson[]; // empty = coming soon
}

// ───────────────────────────── UNIT 1 · Generations ─────────────────────────

const unit1Lessons: SolLesson[] = [
  {
    id: '1a',
    code: '1A',
    title: 'Ages and stages',
    subtitle: 'Stages of life, life events and the past simple',
    skill: 'Vocabulary',
    sections: [
      {
        id: 'vocabulary',
        title: 'Vocabulary',
        description: 'Stages of life and life events (Student\u2019s Book p.8)',
        activities: [
          {
            type: 'discussion',
            title: '1 · Warm-up',
            body: 'Work in pairs. Can you answer this famous riddle from Sophocles\u2019 play Oedipus the King? Explain your answer.',
            bullets: [
              '\u201CWhat creature walks on four legs in the morning, two legs in the afternoon, and three in the evening?\u201D',
              'Clue: think about the stages of a human life.',
            ],
          },
          {
            type: 'audio',
            track: '1.07',
            title: 'Track 1.07 · Stages of life',
            audioSrc: track107.url,
            body: 'Listen and check the order of the stages of life below.',
          },
          {
            type: 'word-order',
            title: '2 · Put the stages of life in order',
            body: 'Number the stages of life in the order that people reach them, then listen and check.',
            sentences: [
              'be an infant be a toddler be a young child be in your teens be in your twenties be an adult be middle-aged be elderly be a centenarian',
            ],
          },
          {
            type: 'flashcards',
            title: '2b · Stages of life — flashcards',
            body: 'Learn the nine stages before you do the exercises.',
            cards: [
              { term: 'be an infant', definition: 'a very young baby, usually under one year old' },
              { term: 'be a toddler', definition: 'a child who has just learned to walk (1\u20133)' },
              { term: 'be a young child', definition: 'roughly 4\u201312 years old' },
              { term: 'be in your teens', definition: 'aged 13\u201319' },
              { term: 'be in your twenties', definition: 'aged 20\u201329' },
              { term: 'be an adult', definition: 'a fully grown person, legally over 18' },
              { term: 'be middle-aged', definition: 'roughly 45\u201365 years old' },
              { term: 'be elderly', definition: 'a polite way of saying old' },
              { term: 'be a centenarian', definition: 'someone who is 100 years old or more' },
            ],
          },
          {
            type: 'matching',
            title: '4 · When do these life events usually happen?',
            pairs: [
              { id: 1, left: 'be born, start school, leave school', right: 'A · Before you are 20' },
              { id: 2, left: 'go to university, get your first job, get engaged', right: 'B · From 20 to 40' },
              { id: 3, left: 'have a change of career, become a grandparent', right: 'C · From 40 to 60' },
              { id: 4, left: 'retire, pass away', right: 'D · Over 60' },
              { id: 5, left: 'fall in love, move house, emigrate, inherit money', right: 'E · At any age' },
            ],
          },
          {
            type: 'word-list',
            title: 'Life events — key vocabulary',
            words: [
              'be born', 'be brought up (by)', 'become a grandparent', 'buy a house or flat',
              'emigrate', 'fall in love', 'get divorced', 'get engaged', 'get married',
              'get your first job', 'go to university', 'grow up', 'have a change of career',
              'inherit', 'learn to drive', 'leave home', 'leave school', 'move (house)',
              'pass away', 'retire', 'settle down', 'split up', 'start a business',
              'start a family', 'start school',
            ],
          },
        ],
      },
      {
        id: 'listening',
        title: 'Listening',
        description: 'Four teenagers talk about their families and backgrounds',
        activities: [
          {
            type: 'audio',
            track: '1.08',
            title: 'Track 1.08 · Four people talk about their families',
            audioSrc: track108.url,
            body: 'Listen to four people talking about their backgrounds and their families, then answer the questions below.',
          },
          {
            type: 'multiple-choice',
            title: '5 · Choose the correct answers',
            mcq: [
              {
                question: 'Bilal\u2019s dad …',
                options: ['was born in the UK.', 'is going to have a change of career.', 'wants to study law.'],
                answerIndex: 1,
              },
              {
                question: 'Sandra\u2019s family …',
                options: [
                  'have owned a number of farms.',
                  'sold the first farm and bought a bigger one.',
                  'have owned the same farm for many years.',
                ],
                answerIndex: 2,
              },
              {
                question: 'Charlotte\u2019s mum …',
                options: ['brought up her daughter in France.', 'isn\u2019t married.', 'has been married twice.'],
                answerIndex: 0,
              },
              {
                question: 'Callum\u2019s parents …',
                options: [
                  'inherited and ran a successful family business.',
                  'didn\u2019t have a good education.',
                  'left Britain many years ago.',
                ],
                answerIndex: 0,
              },
            ],
          },
          {
            type: 'intro',
            title: 'RECYCLE! Past simple',
            body: 'There are no rules for the affirmative forms of irregular verbs (go \u2013 went), and the spelling changes with some regular verbs (stop \u2013 stopped, carry \u2013 carried). We form the negative with didn\u2019t and the question with did. (be and can are exceptions.)',
          },
          {
            type: 'type-blanks',
            title: '6 · Complete the sentences in the past simple',
            body: 'Use the past simple of: be, buy, emigrate, fall, get, grow up, leave, move, not go, not leave, not retire, start.',
            blanks: [
              { prompt: 'My grandparents ___ from Pakistan in the 1960s.', answer: 'emigrated' },
              { prompt: 'She ___ home until last summer, when she got married.', answer: "didn't leave" },
              { prompt: 'I ___ in the village where my family has lived for generations.', answer: 'grew up' },
              { prompt: 'They managed to save money and eventually ___ a small farmhouse.', answer: 'bought' },
              { prompt: 'They ___ in love and got engaged after a week.', answer: 'fell' },
              { prompt: 'I was brought up by my mum after she ___ back to the UK.', answer: 'moved' },
              { prompt: 'They left school at sixteen and ___ to university.', answer: "didn't go" },
              { prompt: 'They started a successful business and ___ until they were in their seventies.', answer: "didn't retire" },
            ],
          },
          {
            type: 'discussion',
            title: '7 · Speaking — your family',
            bullets: [
              'How long has your family lived in your home town?',
              'Did any of them emigrate from another country? From where? When? Why?',
              'Did any of them move from another part of your country?',
              'Did any of your ancestors emigrate to another country? Where to? When? Why?',
              'Are you related to anyone famous? If so, who?',
            ],
          },
        ],
      },
    ],
  },
  {
    id: '1b',
    code: '1B',
    title: 'Past tense contrast',
    subtitle: 'Past simple, past continuous and past perfect',
    skill: 'Grammar',
    sections: [
      {
        id: 'reading',
        title: 'Read and notice',
        description: 'Jeanne Calment — the longest human lifespan ever',
        activities: [
          {
            type: 'reading',
            title: '2 · The world\u2019s oldest person',
            passage: [
              'In 1875, the US army was still fighting Native Americans, and Alexander Bell was working on a new invention \u2013 the telephone. That was the year that Jeanne Calment, the person with the longest lifespan ever, was born in Arles, France.',
              'Her parents ran a shop in the town and she worked there when she was a teenager. While she was serving in the shop in 1888, she met Vincent van Gogh, who had come in to buy pencils. She thought he was \u201Cdirty, ugly and badly dressed\u201D!',
              'In 1896, at the age of 21, she married Fernand Calment and then gave birth to a daughter, Yvonne. Fernand was very wealthy so Jeanne never needed to work. She lived in Arles for the rest of her life, dying on 5 August 1997 at the age of 122.',
              'People of that age often have an enormous family with generations of grandchildren. But Jeanne didn\u2019t have any living descendants. Yvonne had had a son, but both she and her son had died many years earlier. So how did Jeanne manage to live so long? The French note that she ate more than two pounds of chocolate a week and rode a bicycle until she was 100!',
            ],
            newspaper: true,
            source: 'Solutions Intermediate · 1B',
          },
          {
            type: 'fill-blanks',
            title: '3 · LEARN THIS! Past tenses',
            body: 'Complete the rules with: past simple, past continuous, past perfect.',
            blanks: [
              { prompt: 'a A sequence of events that happened one after another.', answer: 'past simple' },
              { prompt: 'b Describing a scene in the past; events in progress at the same time.', answer: 'past continuous' },
              { prompt: 'c A single event that interrupted a longer event in the past.', answer: 'past simple (+ past continuous for the longer event)' },
              { prompt: 'd An event that happened before another event in the past.', answer: 'past perfect' },
            ],
          },
        ],
      },
      {
        id: 'practice',
        title: 'Practice',
        activities: [
          {
            type: 'type-blanks',
            title: '5 · Choose the correct past tense',
            body: 'Write the correct past simple, past continuous or past perfect form.',
            blanks: [
              { prompt: 'We ___ (move) house a lot while I was growing up.', answer: 'moved' },
              { prompt: 'After Joe ___ (learn) to drive, he bought a car.', answer: 'had learnt|had learned' },
              { prompt: 'George left school, went to university and ___ (study) engineering.', answer: 'studied' },
              { prompt: 'Where were you living when you ___ (get) your first job?', answer: 'got' },
              { prompt: 'My parents got engaged in 1990. They had fallen in love two years before, while they ___ (work) in London.', answer: 'were working' },
              { prompt: 'Kim wanted a change of career so she ___ (emigrate) to Australia.', answer: 'emigrated' },
            ],
          },
          {
            type: 'type-blanks',
            title: '6 · Jiroemon Kimura — complete the text',
            body: 'Use the past simple, past continuous or past perfect.',
            blanks: [
              { prompt: 'Jiroemon Kimura ___ (be) born in 1897, the year Bram Stoker wrote Dracula.', answer: 'was' },
              { prompt: 'Kimura ___ (leave) school at fourteen and got a job in a post office.', answer: 'left' },
              { prompt: 'While he ___ (work) there, he met his future wife Yae.', answer: 'was working' },
              { prompt: 'He ___ (be) a postal worker for 45 years when he retired in 1962.', answer: 'had been' },
              { prompt: 'But he ___ (not stop) working! He became a farmer.', answer: "didn't stop" },
              { prompt: 'In an interview just before he ___ (die) at the age of 116, he said he wasn\u2019t sure why he had lived so long.', answer: 'died' },
            ],
          },
          {
            type: 'discussion',
            title: '8 · Speaking — a person from a previous generation',
            body: 'Make notes about a real or invented person (a parent, a grandparent): born when and where? education? jobs? married? family? moved? Then tell the class.',
            bullets: [
              'She was born \u2026',
              'At the age of \u2026 she left school and got a job as \u2026',
              'After she had left home, she \u2026',
              'While she was living in \u2026, she \u2026',
              'She got married in \u2026',
            ],
          },
        ],
      },
    ],
  },
  {
    id: '1c',
    code: '1C',
    title: 'Family tensions',
    subtitle: 'Listening for tone of voice; attitude adjectives',
    skill: 'Listening',
    sections: [
      {
        id: 'lead-in',
        title: 'Lead-in',
        activities: [
          {
            type: 'reading',
            title: '2 · Tablets for dinner?',
            passage: [
              'An evening meal for all the family was once part of everyday life in British homes, but this tradition has almost disappeared. Some people blame technology: children and teenagers are so addicted to their phones and tablets that they do not want to stop playing with them, even at mealtimes. This causes a lot of arguments in families.',
              'But now, parents can get a free app called DinnerTime, which locks their children\u2019s devices at certain times of the day and night. During those times, the children are unable to access messages, games, or the internet. In theory, this means that parents and children can spend more time together, eating and chatting. But will it lead to happier families or more family arguments?',
            ],
          },
          {
            type: 'matching',
            title: '3 · Attitude adjectives — positive or negative?',
            pairs: [
              { id: 1, left: 'complimentary, enthusiastic, grateful, optimistic, sympathetic, calm', right: 'Positive attitude' },
              { id: 2, left: 'accusing, aggressive, arrogant, bitter, miserable, pessimistic, sarcastic', right: 'Negative attitude' },
              { id: 3, left: 'nostalgic, urgent', right: 'Neither \u2014 depends on the situation' },
            ],
          },
          {
            type: 'intro',
            title: 'Listening Strategy',
            body: 'Sometimes the words alone do not fully express the speaker\u2019s intention. Pay attention to the tone of voice as well. For example, an urgent tone of voice suggests that the speaker is giving a warning.',
          },
        ],
      },
      {
        id: 'listening',
        title: 'Listening',
        description: 'Track 1.09 — tone of voice',
        activities: [
          {
            type: 'audio',
            track: '1.09',
            title: 'Track 1.09 · Which adjective matches the speaker\u2019s attitude?',
            audioSrc: track109.url,
            body: 'Listen and choose the adjective that best matches each speaker\u2019s attitude. Use their tone of voice to help you.',
          },
          {
            type: 'multiple-choice',
            title: '4 · Match the attitude',
            mcq: [
              { question: 'Speaker 1', options: ['arrogant', 'pessimistic', 'confident'], answerIndex: 0 },
              { question: 'Speaker 2', options: ['aggressive', 'miserable', 'sarcastic'], answerIndex: 2 },
              { question: 'Speaker 3', options: ['calm', 'complimentary', 'optimistic'], answerIndex: 1 },
              { question: 'Speaker 4', options: ['accusing', 'enthusiastic', 'sympathetic'], answerIndex: 0 },
              { question: 'Speaker 5', options: ['grateful', 'optimistic', 'sympathetic'], answerIndex: 2 },
              { question: 'Speaker 6', options: ['aggressive', 'bitter', 'urgent'], answerIndex: 2 },
            ],
          },
          {
            type: 'task',
            title: '5 · Say it two ways',
            body: 'In pairs, say each sentence in one of the two ways. Can your partner guess the adjective? 1 \u201CThanks, Andy. That\u2019s really helpful.\u201D (grateful / sarcastic) 2 \u201COur train leaves in ten minutes.\u201D (calm / urgent) 3 \u201CYou and your sister always argued during dinner.\u201D (nostalgic / accusing) 4 \u201CYou need to stop and think about what\u2019s happened.\u201D (sympathetic / aggressive) 5 \u201CI think we\u2019ll win one or two of our matches.\u201D (optimistic / pessimistic)',
          },
          {
            type: 'discussion',
            title: '8 · Speaking — what causes arguments?',
            body: 'Which of these topics is most likely to cause arguments in your family, and why?',
            bullets: [
              'doing chores', 'doing schoolwork', 'staying out late',
              'sharing a family computer', 'what and when to watch on TV',
              'too much time spent on social media and games', 'what to eat',
            ],
          },
        ],
      },
    ],
  },
  {
    id: '1d',
    code: '1D',
    title: 'used to',
    subtitle: 'Talking about things that were different in the past',
    skill: 'Grammar',
    sections: [
      {
        id: 'grammar',
        title: 'Grammar',
        activities: [
          {
            type: 'reading',
            title: '1 · Grandad\u2019s photo',
            body: 'Read the dialogue. Which adjective best sums up the grandfather\u2019s attitude: miserable or nostalgic?',
            passage: [
              'Grandad: Have you seen this photo of me when I was your age?',
              'James: No, I haven\u2019t. Let me see. Wow! You used to have great hair!',
              'Grandad: I know. I used to spend ages getting it just right. It\u2019s much quicker now.',
              'James: Your clothes look cool too. Did you use to spend a lot of money on them?',
              'Grandad: I didn\u2019t use to have much money. My mother made some of them. And I used to share clothes with my brother.',
              'James: I used to do that too. But he doesn\u2019t let me borrow them now!',
            ],
          },
          {
            type: 'intro',
            title: 'LEARN THIS! used to',
            body: 'a We use used to for things which were true in the past but are not true now: I used to read my sister\u2019s magazines. b Watch the spelling of the negative and question: My sister didn\u2019t use to like it. Did she use to get angry?',
          },
          {
            type: 'type-blanks',
            title: '3 · Complete the dialogue',
            body: 'Use the correct form of used to with: be, do, go, live, not have, not pay, wait.',
            blanks: [
              { prompt: 'Mum: I ___ opposite the Palace Cinema when I was ten.', answer: 'used to live' },
              { prompt: 'Alice: ___ you ___ there often?', answer: 'did you use to go' },
              { prompt: 'Mum: Yes. But we ___ .', answer: "didn't use to pay" },
              { prompt: 'It wasn\u2019t our fault \u2013 we ___ any money for tickets.', answer: "didn't use to have" },
              { prompt: 'We ___ outside the fire exit and run in when somebody opened it!', answer: 'used to wait' },
              { prompt: 'Alice: I can\u2019t believe you ___ that!', answer: 'used to do' },
              { prompt: 'Mum: Well, yes. I ___ very naughty, but I grew out of it.', answer: 'used to be' },
            ],
          },
          {
            type: 'intro',
            title: 'LOOK OUT!',
            body: 'Do not confuse used to with be / get used to (doing) something. I used to ride my bike to school. (used to) These glasses feel strange, but I\u2019ll get used to them. (get used to) She hates losing. She isn\u2019t used to it! (be used to)',
          },
          {
            type: 'type-blanks',
            title: '5 · used to / didn\u2019t use to',
            blanks: [
              { prompt: 'They ___ (live) abroad, but they moved back last year.', answer: 'used to live' },
              { prompt: 'She ___ (be) a student, but she finished her course in June.', answer: 'used to be' },
              { prompt: 'She ___ (eat) meat, but now she has chicken sometimes.', answer: "didn't use to eat" },
              { prompt: 'I ___ (like) cats, but I prefer dogs now.', answer: 'used to like' },
              { prompt: 'We ___ (spend) a lot of time together, but now we hardly ever see each other.', answer: 'used to spend' },
              { prompt: 'He ___ (speak) a foreign language, but he started Spanish lessons last year.', answer: "didn't use to speak" },
              { prompt: 'My grandad ___ (have) a lot of money, but he\u2019s quite rich now.', answer: "didn't use to have" },
            ],
          },
          {
            type: 'discussion',
            title: '8 · Speaking — when you were five',
            body: 'Ask and answer about what your partner used to do at the age of five.',
            bullets: [
              'be afraid of the dark', 'drink milk before bed', 'play with dolls',
              'listen to stories at bedtime', 'watch a lot of cartoons',
              'have piano lessons', 'walk to school on my own',
            ],
          },
        ],
      },
    ],
  },
  {
    id: '1e',
    code: '1E',
    title: 'Phrasal verbs (1)',
    subtitle: 'Three-part phrasal verbs',
    skill: 'Word Skills',
    sections: [
      {
        id: 'word-skills',
        title: 'Word Skills',
        activities: [
          {
            type: 'reading',
            title: '1 · I used to be older',
            body: 'Read about the film The Curious Case of Benjamin Button. What is unusual about the main character?',
            passage: [
              'The Curious Case of Benjamin Button certainly lives up to its title. It is a very unusual film about a man who lives his life backwards: he is born as an old man and dies as a baby.',
              'The story begins in 1918 when a woman gives birth to a baby with the appearance of an elderly man. The mother dies and the father walks out on the baby, who is called Benjamin. Two workers at a nursing home decide to look after Benjamin, who fits in with the elderly residents because he looks so old.',
              'At the age of twelve, he meets a young girl called Daisy and gets on with her very well, but later they lose touch when Benjamin signs up for a job on a boat. Years later, he catches up with Daisy again in Paris. They almost marry and settle down together, but they never go through with it. One reason is that Daisy could never put up with Benjamin\u2019s strange condition.',
              'In the end, they run out of time: Daisy is becoming an old woman and Benjamin is becoming a child. He finally dies in Daisy\u2019s arms as a baby.',
            ],
          },
          {
            type: 'matching',
            title: '2 · Match the phrasal verbs with their meanings',
            pairs: [
              { id: 1, left: 'get on with', right: 'to have a (good / bad) relationship with' },
              { id: 2, left: 'walk out on', right: 'to abandon or leave' },
              { id: 3, left: 'go through with', right: 'to complete something' },
              { id: 4, left: 'live up to', right: 'to match or equal' },
              { id: 5, left: 'run out of', right: 'to use all of your supply of something' },
              { id: 6, left: 'sign up for', right: 'to agree to do something (e.g. work)' },
              { id: 7, left: 'catch up with', right: 'to succeed in finding or reaching somebody' },
              { id: 8, left: 'fit in with', right: 'to look and act like part of a group' },
              { id: 9, left: 'put up with', right: 'to tolerate or be patient about something' },
            ],
          },
          {
            type: 'multiple-choice',
            title: '3 · LEARN THIS! Three-part phrasal verbs',
            mcq: [
              { question: 'A three-part phrasal verb has …', options: ['one verb and two particles', 'two verbs and one particle'], answerIndex: 0 },
              { question: 'Three-part phrasal verbs are …', options: ['transitive (they have a direct object)', 'intransitive'], answerIndex: 0 },
              { question: 'The object always goes …', options: ['between the two particles', 'before the verb', 'after the two particles'], answerIndex: 2 },
            ],
          },
          {
            type: 'type-blanks',
            title: '5 · Two- or three-part phrasal verbs',
            body: 'Use: look up / look up to, make up / make up for, go in for, get away with, get up to, go back on.',
            blanks: [
              { prompt: 'We sent her a present to ___ the disappointment of missing the music festival.', answer: 'make up for' },
              { prompt: 'I like football, but I don\u2019t ___ extreme sports.', answer: 'go in for' },
              { prompt: 'We ___ his name on the internet to check his story was true.', answer: 'looked up' },
              { prompt: 'You said you would take us on holiday \u2013 you can\u2019t ___ your promise!', answer: 'go back on' },
              { prompt: 'Did you ___ anything exciting while your parents were away?', answer: 'get up to' },
              { prompt: 'Did you ___ that story or is it true?', answer: 'make up' },
            ],
          },
          {
            type: 'discussion',
            title: '7 · Speaking',
            bullets: [
              'Which famous people do you look up to? Why?',
              'Which sports or games do you go in for?',
              'What did you get up to last weekend?',
              'What kind of behaviour is the most difficult to put up with?',
              'What kind of people do you find it easiest to get on with?',
            ],
          },
        ],
      },
    ],
  },
  {
    id: '1f',
    code: '1F',
    title: 'Adolescence',
    subtitle: 'Reading: missing sentences; noun and adjective endings',
    skill: 'Reading',
    sections: [
      {
        id: 'reading',
        title: 'Reading',
        activities: [
          {
            type: 'intro',
            title: 'Reading Strategy',
            body: 'Read the missing sentences carefully. Then read the sentences that come before and after each gap. Look for words that link with vocabulary in the missing sentences (synonyms, paraphrases, opposites, pronouns).',
          },
          {
            type: 'gapped-sentences',
            title: '4 · How to handle your parents',
            body: 'Choose the sentence (A\u2013G) that fits each gap. There are two extra sentences.',
            gapParagraphs: [
              'Parents get a lot of advice on how to handle their adolescent children, but what about some advice for teenagers on how to deal with their parents? Psychologist Raymond Freedman offers some tips \u2026',
              'What is adolescence? It starts when you are aged between about ten and thirteen and is a period of rapid physical change which transforms you from a pre-teen child into the independent young adult that you become in your early twenties. {{1}} Here are some of the most common social and emotional changes that happen during adolescence.',
              'FREEDOM: You may not want to spend as much time with your parents as you used to. You want more freedom to choose who you see and when.',
              'PRIVACY: You used to be most happy in the company of your parents. {{2}} You need your own space and some privacy.',
              'DECISIONS: In the past, your parents made most decisions for you and told you what to do. {{3}} You may resent them telling you to go to bed or come home by ten o\u2019clock.',
              'OPINIONS: When you were younger, you didn\u2019t have many strong opinions. {{4}} Adolescents are often idealistic and feel impatient with the adult world.',
              'Firstly, your parents will feel much better if you let them know that you still love and value them. Remember that they have lost forever the little child you once were. {{5}}',
            ],
            gapOptions: [
              { letter: 'A', text: 'They may not say so, but they are probably feeling a sense of loss and may even feel rejected by you.' },
              { letter: 'B', text: 'Your parents will expect you to behave responsibly.' },
              { letter: 'C', text: 'But now you want to decide things for yourself and don\u2019t want to be told what to do all the time.' },
              { letter: 'D', text: 'As your body changes, you also begin to think and feel differently.' },
              { letter: 'E', text: 'Despite this, you should always listen carefully.' },
              { letter: 'F', text: 'Now you are beginning to see the world differently, developing your own views and your own sense of right and wrong.' },
              { letter: 'G', text: 'Now you probably want to spend more time on your own.' },
            ],
            gapAnswers: [
              { gap: '1', letter: 'D' },
              { gap: '2', letter: 'G' },
              { gap: '3', letter: 'C' },
              { gap: '4', letter: 'F' },
              { gap: '5', letter: 'A' },
            ],
          },
          {
            type: 'multiple-choice',
            title: '2 · Choose the best summary',
            mcq: [
              {
                question: 'Which is the best summary of the text?',
                options: [
                  'Parents may find it difficult to understand their adolescent children, but it is a parent\u2019s duty to communicate properly with them.',
                  'Although teenagers develop new ideas during adolescence, that is no excuse for bad behaviour.',
                  'Teenagers experience big physical and emotional changes during adolescence. It\u2019s important to communicate with your parents and understand their point of view.',
                ],
                answerIndex: 2,
              },
            ],
          },
          {
            type: 'type-blanks',
            title: '5 · Noun and adjective endings',
            body: 'Complete the word. Type the whole word into the box.',
            blanks: [
              { prompt: 'adolesc___', answer: 'adolescence|adolescent' },
              { prompt: 'depend___', answer: 'dependence|dependent' },
              { prompt: 'free___', answer: 'freedom' },
              { prompt: 'emot___', answer: 'emotion|emotional' },
              { prompt: 'priv___', answer: 'privacy|private' },
              { prompt: 'ideal___', answer: 'idealistic|idealism' },
              { prompt: 'impati___', answer: 'impatience|impatient' },
              { prompt: 'safe___', answer: 'safety' },
              { prompt: 'critic___', answer: 'critical|criticism' },
            ],
          },
          {
            type: 'discussion',
            title: '6 · Speaking',
            bullets: [
              'Which of the five changes (freedom, privacy, interests, decisions, opinions) affect teenagers most? Give examples.',
              'Is the writer\u2019s advice good on the whole? Which is the best piece of advice? Why?',
              'Useful phrases: I agree that \u2026 / In my experience, \u2026 / Personally, I believe that \u2026 / I\u2019m not sure about that.',
            ],
          },
        ],
      },
    ],
  },
  {
    id: '1g',
    code: '1G',
    title: 'Role-play',
    subtitle: 'Giving advice about an exchange programme',
    skill: 'Speaking',
    sections: [
      {
        id: 'speaking',
        title: 'Speaking',
        activities: [
          {
            type: 'intro',
            title: 'Speaking Strategy',
            body: 'Use your preparation time well. Read the task carefully. Then think of one thing to say about each topic. If you have more time, think of more ideas.',
          },
          {
            type: 'intro',
            title: 'The task',
            body: 'You recently spent a term as an exchange student in England. You are having a video call with a student from Japan who is preparing to take part in the same scheme, and you are giving him / her advice.',
            bullets: [
              'getting to know your exchange student',
              'useful things to take with you',
              'going to school in England',
              'advice about staying with an English family',
            ],
          },
          {
            type: 'intro',
            title: 'LEARN THIS! Advice',
            body: 'We use should and ought to to give advice: You should / ought to take a dictionary. Negatives: shouldn\u2019t, ought not to \u2014 but we often say I don\u2019t think you should \u2026 To ask for advice: Should I \u2026? / Do you think I should / ought to \u2026?',
          },
          {
            type: 'type-blanks',
            title: '4 · Complete the advice',
            blanks: [
              { prompt: 'You ___ (ought / find out) about his hobbies.', answer: 'ought to find out' },
              { prompt: 'I ___ (think / should / send) him an email.', answer: 'think you should send' },
              { prompt: '___ (think / should / take) some food from home with me?', answer: 'Do you think I should take' },
              { prompt: 'No, I ___ (think / you / should / do) that.', answer: "don't think you should do" },
              { prompt: 'You ___ (ought / take) a present for the parents.', answer: 'ought to take' },
              { prompt: 'What ___ (should / buy) for them?', answer: 'should I buy' },
            ],
          },
          {
            type: 'task',
            title: '6 · Role-play in pairs',
            body: 'Student A is an English student who is going to stay with Student B\u2019s family next month. Ask for and give advice about: suitable presents for the family, how to stay safe when you\u2019re out, suitable clothing for the season, the best deals for calling and texting, how to improve your language skills quickly.',
          },
        ],
      },
    ],
  },
  {
    id: '1h',
    code: '1H',
    title: 'A message',
    subtitle: 'Writing a reply to an advertisement',
    skill: 'Writing',
    sections: [
      {
        id: 'writing',
        title: 'Writing',
        activities: [
          {
            type: 'reading',
            title: '2 · Find a penfriend',
            passage: [
              'Hi! My name is Adam. I\u2019m sixteen years old and I live in Newcastle in the UK. I\u2019m looking for a penfriend from any country in the world. Send me a message and tell me about yourself and your family. Also, could you please tell me why you are looking for a penfriend? Thanks \u2013 and I hope to hear from you soon!',
            ],
          },
          {
            type: 'reading',
            title: '3 · Dominik\u2019s reply',
            passage: [
              'Hi! My name\u2019s Dominik and I\u2019m from the Czech Republic. I\u2019m fifteen years old and live in Prague with my parents and my younger sister. I\u2019m into football, and my sister\u2019s mad about horses.',
              'I\u2019d like to have an English penfriend because I\u2019m studying English at school and would like to visit England one day. Would you mind telling me more about Newcastle? I know it\u2019s got a famous football team, but that\u2019s all! Do you enjoy living there?',
            ],
          },
          {
            type: 'word-list',
            title: '4 · KEY PHRASES Polite requests',
            words: [
              'Would it be possible for you to \u2026?',
              'Could you please \u2026?',
              'Would you mind if \u2026?',
              'Would you mind (+ -ing form)?',
              'I wonder if \u2026',
            ],
          },
          {
            type: 'intro',
            title: 'Writing Strategy',
            body: 'Make sure that you a) include all of the points in the task and b) develop each point \u2014 add some extra information or detail. Try not to write just one sentence for each point.',
          },
          {
            type: 'matching',
            title: '7 · Add extra detail',
            pairs: [
              { id: 1, left: 'I go to Harford Community College.', right: 'I\u2019m doing my A-levels.' },
              { id: 2, left: 'I\u2019ve got two brothers.', right: 'One is older than me and one is younger.' },
              { id: 3, left: 'We moved to a house outside town last month.', right: 'We needed more space.' },
              { id: 4, left: 'My name\u2019s Jack and I\u2019m seventeen years old.', right: 'I live in Brighton with my parents and my sister.' },
              { id: 5, left: 'Would you mind if I visited you in August?', right: 'I\u2019d really like to meet you and your family.' },
            ],
          },
          {
            type: 'notes',
            title: '9 · Write your message',
            body: 'Write a message in reply to Adam. Include all the information he asks for and one request for information.',
            fields: [
              { id: 'about-you', label: 'Describe yourself and your family', placeholder: 'My name\u2019s \u2026 and I\u2019m \u2026 years old. I live in \u2026' },
              { id: 'reason', label: 'Explain why you want a penfriend', placeholder: 'I\u2019d like an English penfriend because \u2026' },
              { id: 'request', label: 'Request information from Adam', placeholder: 'Would you mind telling me \u2026?' },
            ],
          },
        ],
      },
    ],
  },
];

// ───────────────────────────── UNIT 2 · Leisure time ────────────────────────

const unit2Lessons: SolLesson[] = [
  {
    id: '2a',
    code: '2A',
    title: 'Love it or hate it',
    subtitle: 'Activities and sports; do, play and go',
    skill: 'Vocabulary',
    sections: [
      {
        id: 'vocabulary',
        title: 'Vocabulary',
        activities: [
          {
            type: 'discussion',
            title: '1 · Warm-up',
            body: 'Work in pairs. Ask about your partner\u2019s hobbies. Find two things that he or she a) usually does at the weekend and b) occasionally does at the weekend.',
          },
          {
            type: 'word-list',
            title: '2 · Activities and sports',
            words: [
              'bake cakes', 'collect figures / cards / stamps', 'draw', 'hang out with friends',
              'make clothes', 'read books', 'read magazines', 'text your friends',
              'use social media', 'video blog', 'watch videos online',
            ],
          },
          {
            type: 'intro',
            title: 'LEARN THIS! do, play and go',
            body: 'a We normally use do with individual sports and activities not ending in -ing. b We use play with team sports, ball sports, games and musical instruments. c We use go with sports and activities ending in -ing.',
          },
          {
            type: 'matching',
            title: '3 · do, play or go?',
            pairs: [
              { id: 1, left: 'ballet, drama, gymnastics, martial arts, weights', right: 'do' },
              { id: 2, left: 'basketball, board games, cards, chess, ice hockey, table tennis, volleyball, a musical instrument', right: 'play' },
              { id: 3, left: 'BMXing, bowling, camping, cycling, horse riding, ice skating, rollerblading, running, shopping, skateboarding', right: 'go' },
            ],
          },
          {
            type: 'multiple-choice',
            title: '9\u201310 · Sport and leisure quiz',
            mcq: [
              { question: 'In which sport are there 10\u201312 players in a team, with five playing at any one time?', options: ['basketball', 'ice hockey', 'volleyball'], answerIndex: 0 },
              { question: 'How many pieces are there on a chess board at the beginning of the game?', options: ['28', '32', '36'], answerIndex: 1 },
              { question: 'How many cards are there in a traditional pack?', options: ['32', '42', '52'], answerIndex: 2 },
              { question: 'Which social media app allowed users to post six-second video clips?', options: ['Vine', 'Snapchat', 'Pinterest'], answerIndex: 0 },
              { question: 'How long is a bowling alley?', options: ['12.3 m', '18.3 m', '24.3 m'], answerIndex: 1 },
              { question: 'The name of which martial art means \u201Cempty hand\u201D?', options: ['karate', 'judo', 'aikido'], answerIndex: 0 },
              { question: 'Which of these is not a ballroom dance?', options: ['tango', 'waltz', 'ballet'], answerIndex: 2 },
              { question: 'Which famous board game, invented in 1933, involves buying streets and building houses and hotels?', options: ['Monopoly', 'Cluedo', 'Risk'], answerIndex: 0 },
              { question: 'Which of these musical instruments has four strings?', options: ['violin', 'guitar', 'harp'], answerIndex: 0 },
            ],
          },
          {
            type: 'intro',
            title: 'RECYCLE! Present simple and adverbs of frequency',
            body: 'We use the present simple for habits and routines. Adverbs of frequency (always, usually, often, sometimes, hardly ever, never) come before the main verb but after the verb be.',
          },
          {
            type: 'audio',
            track: '1.18',
            title: 'Track 1.18 · Five people say why they hate certain things',
            body: 'Recording coming soon \u2014 the tasks below are ready to use with the audio.',
          },
          {
            type: 'type-blanks',
            title: '7 · Complete the sentences',
            body: 'Use the present simple of be, buy, go, play, use with an adverb of frequency.',
            blanks: [
              { prompt: 'Speaker 1 ___ camping with his parents.', answer: 'always goes' },
              { prompt: 'Speaker 2 thinks that horror films ___ unrealistic and unconvincing.', answer: 'are always' },
              { prompt: 'Speaker 3 ___ social media.', answer: 'hardly ever uses|never uses' },
              { prompt: 'Speaker 4 ___ things online.', answer: 'never buys' },
              { prompt: 'Speaker 5 ___ the guitar at school.', answer: 'often plays' },
            ],
          },
        ],
      },
    ],
  },
  {
    id: '2b',
    code: '2B',
    title: 'Present perfect and past simple contrast',
    subtitle: 'Choosing between the two tenses',
    skill: 'Grammar',
    sections: [
      {
        id: 'grammar',
        title: 'Grammar',
        activities: [
          {
            type: 'reading',
            title: '2 · The world\u2019s largest McDonald\u2019s collection',
            passage: [
              'Mike Fountaine has the world\u2019s largest collection of McDonald\u2019s memorabilia. The sixty-year-old McDonald\u2019s employee has spent almost fifty years collecting everything to do with the fast-food restaurant. He has already filled nine rooms of his house with 75,000 objects, including toys, badges, cups and uniforms!',
              'Mike has been at McDonald\u2019s since 1968. His first job was cooking Big Macs. A year later he began collecting badges, and he hasn\u2019t stopped since! A few years ago, Mike opened his own McDonald\u2019s restaurant. He has decorated it with memorabilia. \u201CPeople say it\u2019s the most beautiful McDonald\u2019s restaurant they\u2019ve ever seen,\u201D says Mike proudly.',
            ],
          },
          {
            type: 'fill-blanks',
            title: '3 · LEARN THIS! Which tense?',
            blanks: [
              { prompt: 'a … to talk about a specific occasion in the past.', answer: 'past simple' },
              { prompt: 'b … to talk about an event during a period of time that is still continuing.', answer: 'present perfect' },
              { prompt: 'c … to say how long a situation has existed (for, since, how long).', answer: 'present perfect' },
              { prompt: 'd … for an event with a strong connection with the present (just, already, yet).', answer: 'present perfect' },
              { prompt: 'e … for an experience at an unspecified time in the past (ever, never).', answer: 'present perfect' },
            ],
          },
          {
            type: 'type-blanks',
            title: '6 · Jian Yang and his 6,000 Barbie dolls',
            body: 'Complete the text with the present perfect or past simple.',
            blanks: [
              { prompt: 'So far, he ___ (spend) twenty years and over \u00A3250,000 on his collection.', answer: 'has spent' },
              { prompt: 'The young man from Singapore ___ (start) collecting when he was just thirteen.', answer: 'started' },
              { prompt: 'The first doll he ___ (buy) was the \u201CGreat Shape\u201D model.', answer: 'bought' },
              { prompt: 'He ___ (purchase) 65 dolls on his last trip to New York.', answer: 'purchased' },
              { prompt: 'A while ago, a girlfriend ___ (walk out) on him because of his hobby.', answer: 'walked out' },
              { prompt: 'He ___ already almost ___ (fill) his house.', answer: 'has almost filled|has already almost filled' },
              { prompt: '___ he ever ___ (think) about stopping?', answer: 'has he ever thought' },
            ],
          },
          {
            type: 'multiple-choice',
            title: '5 · been or gone?',
            mcq: [
              { question: '\u201CJake\u2019s been swimming.\u201D means …', options: ['He went swimming and he is back now.', 'He is swimming now and is not here.'], answerIndex: 0 },
              { question: '\u201CJake\u2019s gone swimming.\u201D means …', options: ['He is back from swimming.', 'He is still away \u2014 he is at the pool.'], answerIndex: 1 },
            ],
          },
          {
            type: 'discussion',
            title: '8 · Speaking — Have you ever …?',
            body: 'Ask and answer about the experiences below. Give more details using the past simple.',
            bullets: [
              'go abroad', 'go ice skating', 'do martial arts', 'have a Chinese meal',
              'play Monopoly', 'see or meet a famous person', 'break a bone', 'ride a horse',
            ],
          },
        ],
      },
    ],
  },
  {
    id: '2c',
    code: '2C',
    title: 'Eating out',
    subtitle: 'Identifying the context of a dialogue; food dishes',
    skill: 'Listening',
    sections: [
      {
        id: 'vocabulary',
        title: 'Vocabulary',
        activities: [
          {
            type: 'flashcards',
            title: '1 · Food dishes',
            cards: [
              { term: 'curry', definition: 'a spicy dish of meat or vegetables cooked in a sauce, often served with rice' },
              { term: 'pie', definition: 'meat or fruit baked inside pastry' },
              { term: 'pudding', definition: 'a sweet dish eaten at the end of a meal' },
              { term: 'risotto', definition: 'an Italian dish of rice cooked slowly in stock' },
              { term: 'salad', definition: 'a cold dish of raw vegetables' },
              { term: 'sandwich', definition: 'a filling between two slices of bread' },
              { term: 'soup', definition: 'a liquid dish, usually eaten with a spoon' },
              { term: 'stew', definition: 'meat and vegetables cooked slowly in liquid' },
              { term: 'stir-fry', definition: 'food fried quickly over a high heat while being stirred' },
            ],
          },
          {
            type: 'matching',
            title: '2 · Food quiz — where do these dishes come from?',
            pairs: [
              { id: 1, left: 'lasagne', right: 'Italy' },
              { id: 2, left: 'chocolate mousse', right: 'France' },
              { id: 3, left: 'miso soup', right: 'Japan' },
              { id: 4, left: 'tacos', right: 'Mexico' },
              { id: 5, left: 'paella', right: 'Spain' },
              { id: 6, left: 'cola', right: 'USA' },
            ],
          },
          {
            type: 'type-blanks',
            title: '2.3 · Special diets',
            body: 'Complete with: eggs, fruit, milk, pork, wheat.',
            blanks: [
              { prompt: 'If you follow a gluten-free diet, you can\u2019t eat ___ .', answer: 'wheat' },
              { prompt: 'Muslims don\u2019t eat ___ .', answer: 'pork' },
              { prompt: 'If you\u2019re lactose intolerant, you avoid ___ .', answer: 'milk' },
              { prompt: 'Vegans don\u2019t eat ___ , but most vegetarians do.', answer: 'eggs' },
              { prompt: '___ is a good snack if you\u2019re following a low-fat diet.', answer: 'Fruit' },
            ],
          },
        ],
      },
      {
        id: 'listening',
        title: 'Listening',
        activities: [
          {
            type: 'intro',
            title: 'Listening Strategy',
            body: 'In a listening task you sometimes need to identify the context of a conversation. The context is implied, not stated, so listen for clues: when the conversation is taking place, where it is taking place, why it is taking place and who is speaking.',
          },
          {
            type: 'audio',
            track: '1.19',
            title: 'Track 1.19 · Two extracts',
            body: 'Recording coming soon \u2014 the tasks below are ready to use with the audio.',
          },
          {
            type: 'audio',
            track: '1.20',
            title: 'Track 1.20 · Matthew and Scarlett',
            body: 'Recording coming soon \u2014 the tasks below are ready to use with the audio.',
          },
          {
            type: 'multiple-choice',
            title: '5 · Which person …?',
            mcq: [
              { question: 'is in the city centre?', options: ['Matthew', 'Scarlett'], answerIndex: 1 },
              { question: 'recently finished some exams?', options: ['Matthew', 'Scarlett'], answerIndex: 0 },
              { question: 'is not confident about finding the restaurant alone?', options: ['Matthew', 'Scarlett'], answerIndex: 0 },
              { question: 'is likely to be late?', options: ['Matthew', 'Scarlett'], answerIndex: 1 },
              { question: 'wants a new phone?', options: ['Matthew', 'Scarlett'], answerIndex: 1 },
            ],
          },
          {
            type: 'matching',
            title: '6 · Describing a meal — good, OK or bad?',
            pairs: [
              { id: 1, left: 'a bit special · out of this world', right: 'A · good' },
              { id: 2, left: 'fine · nothing special · pretty average', right: 'B · OK' },
              { id: 3, left: 'a real let-down · not up to standard', right: 'C · bad' },
            ],
          },
          {
            type: 'discussion',
            title: '8 · Speaking',
            bullets: [
              'Tell your partner about the last time you were in a restaurant. How good were the food and service?',
              'Which local restaurants would you recommend to a foreign visitor and why?',
              'Do you enjoy eating fast food? Why? / Why not?',
              'What are your favourite dishes to eat a) at home and b) in a restaurant?',
            ],
          },
        ],
      },
    ],
  },
  {
    id: '2d',
    code: '2D',
    title: 'Present perfect simple and continuous',
    subtitle: 'Using both forms correctly',
    skill: 'Grammar',
    sections: [
      {
        id: 'grammar',
        title: 'Grammar',
        activities: [
          {
            type: 'reading',
            title: '2 · At the cinema',
            body: 'Who is more enthusiastic about seeing the film: Jack or Ellie? Find evidence.',
            passage: [
              'Ellie: At last! I\u2019ve been waiting for ages. Where have you been? What have you been doing?',
              'Jack: My bus didn\u2019t come. I\u2019ve been trying to phone you since 7.30 \u2026',
              'Ellie: You\u2019re 25 minutes late! The film has started.',
              'Jack: Sorry. Do you still want to see it?',
              'Ellie: Yes, I do. I\u2019ve been looking forward to it for weeks. It stars my favourite actor. And I\u2019ve already bought the tickets!',
              'Ellie: But why is your hair wet? It hasn\u2019t been raining.',
              'Jack: That\u2019s sweat. I\u2019ve been running for 25 minutes! And I haven\u2019t eaten. Can we see the film later?',
            ],
          },
          {
            type: 'intro',
            title: 'LEARN THIS! Present perfect continuous',
            body: 'We form it with have / has + been + -ing. We use it 1) for an action that began in the past and is still in progress (often with for or since) and 2) for an action that has recently been in progress and explains the current situation.',
          },
          {
            type: 'type-blanks',
            title: '4 · Write the questions',
            body: 'Use the present perfect continuous.',
            blanks: [
              { prompt: 'How long / Ellie / wait?', answer: 'How long has Ellie been waiting' },
              { prompt: 'How long / Jack / try to phone Ellie?', answer: 'How long has Jack been trying to phone Ellie' },
              { prompt: 'How long / Ellie / look forward to the film?', answer: 'How long has Ellie been looking forward to the film' },
              { prompt: 'How long / Jack / run?', answer: 'How long has Jack been running' },
            ],
          },
          {
            type: 'type-blanks',
            title: '7 · USE OF ENGLISH',
            body: 'Complete using the correct form of the words in brackets. Do not change the order of the words.',
            blanks: [
              { prompt: 'I\u2019m not sure what\u2019s happening because I ___ (only / watch / it) for a few minutes.', answer: "have only been watching it|'ve only been watching it" },
              { prompt: 'How long ___ (Alex / be / member) of the film club?', answer: 'has Alex been a member' },
              { prompt: 'I can\u2019t go to the cinema because I ___ (not / finish / my homework) yet.', answer: "haven't finished my homework" },
              { prompt: 'Those two girls ___ (talk / each other) since the film started!', answer: 'have been talking to each other' },
              { prompt: 'My parents ___ (turn / off / TV) now.', answer: 'have turned off the TV' },
              { prompt: 'How long ___ (they / make / movies) in Hollywood?', answer: 'have they been making movies' },
            ],
          },
        ],
      },
    ],
  },
  {
    id: '2e',
    code: '2E',
    title: 'Compound nouns and adjectives',
    subtitle: 'Forming and stressing compounds',
    skill: 'Word Skills',
    sections: [
      {
        id: 'word-skills',
        title: 'Word Skills',
        activities: [
          {
            type: 'intro',
            title: 'LEARN THIS! Compound nouns',
            body: 'a Compound nouns are formed from two words: noun + noun (bathroom, safety barrier), -ing form + noun (dining room, recording studio), adjective + noun (wet room, whiteboard). b We usually write them as two words, but sometimes as one word or with a hyphen. c The stress is usually on the first word.',
          },
          {
            type: 'matching',
            title: '5 · Make sports venues',
            pairs: [
              { id: 1, left: 'athletics', right: 'track' },
              { id: 2, left: 'basketball', right: 'court' },
              { id: 3, left: 'bowling', right: 'alley' },
              { id: 4, left: 'boxing', right: 'ring' },
              { id: 5, left: 'climbing', right: 'wall' },
              { id: 6, left: 'dance', right: 'studio' },
              { id: 7, left: 'golf', right: 'course' },
              { id: 8, left: 'ice', right: 'rink' },
              { id: 9, left: 'weights', right: 'room' },
            ],
          },
          {
            type: 'word-list',
            title: '6 · Compound adjectives',
            words: [
              '25-metre', '400-metre', 'air-conditioned', 'brightly lit', 'eight-lane',
              'eighteen-hole', 'full-sized', 'open-air', 'solar-heated', 'soundproof',
              'well-equipped', 'state-of-the-art',
            ],
          },
          {
            type: 'audio',
            track: '1.23',
            title: 'Track 1.23 · Four students argue for a new school facility',
            body: 'Recording coming soon \u2014 the matching task below is ready to use with the audio.',
          },
          {
            type: 'discussion',
            title: '8 · Speaking',
            body: 'Which facility would you like most for your school: a state-of-the-art recording studio, a well-equipped art and design studio, a high-speed Wi-Fi network, a 300-seat theatre or an all-weather football pitch? Can the whole class agree on one choice?',
          },
        ],
      },
    ],
  },
  {
    id: '2f',
    code: '2F',
    title: 'Field games',
    subtitle: 'Reading: multiple choice; prepositions of place',
    skill: 'Reading',
    sections: [
      {
        id: 'reading',
        title: 'Reading',
        activities: [
          {
            type: 'intro',
            title: 'Reading Strategy',
            body: 'Multiple-choice questions may test factual information (detailed or general), the writer\u2019s opinion or the writer\u2019s intention. You can sometimes tell what a question is testing by reading the first part without the options.',
          },
          {
            type: 'reading',
            title: 'Claudia\u2019s blog · GPS challenge',
            newspaper: true,
            source: 'Solutions Intermediate · 2F',
            passage: [
              'Dear Friends, sorry I haven\u2019t blogged for a while. I\u2019ve been a bit busy lately. You\u2019ll find out why \u2026 But first of all, have you ever heard of geocaching? It\u2019s a kind of treasure-hunting game that uses a GPS device \u2013 usually your smartphone \u2013 to find small containers called geocaches. These are hidden all over the world. The great thing about geocaching is that it leads you to some beautiful and amazing places. I can definitely recommend it \u2013 it\u2019s healthy and it\u2019s fun. Although I should warn you that it\u2019s also seriously addictive!',
              'So how does it work? The first step is to go to the geocaching website or download the app. Then you choose a geocache and you start looking. People have been hiding geocaches for more than ten years, so there are literally millions of them around the world. There are geocaches across all seven continents, including Antarctica! Some are very hard to find. They may be hidden beside a river, up a tree, or even below the ground.',
              'Geocaching is quite a new game: it began around the year 2000. However, similar games did exist in the past. In the middle of the 19th century, a game called \u201Cletterboxing\u201D became popular in the south of England. People who enjoyed walking in the countryside began to hide boxes all along the route. These boxes contained postcards addressed to themselves. When other walkers found a box, they collected the cards and posted them.',
              'In geocaching, the boxes contain a logbook, where the person who finds it can write their name and the date. As well as the logbook, geocaches often contain a toy or gift. You are welcome to take this, provided you replace it with something you have brought with you.',
              'The basic game just involves finding a geocache and recording it. However, there are lots of variations: multi-cache challenges, where each cache contains the co-ordinates for the next; \u201Ctravelling caches\u201D, where each finder hides it in a new location; and \u201Cwebcam caches\u201D, where you find a public webcam and capture an image of yourself as proof. I\u2019ve tried all of these, and personally I\u2019ve enjoyed the multi-cache challenges the most.',
              'Geocaching is an activity you can do alone or, like me, with a couple of friends. But there are also events where you meet hundreds of other fans. The \u201CFumble after Dark\u201D event is held every November in Sweden and sounds like great fun. About a thousand geocachers get together for a day of talks, then head outside into the darkness for some night-time adventures! I\u2019m seriously thinking about going next year. So why don\u2019t you get into geocaching too? Bye for now! Claudia',
            ],
          },
          {
            type: 'multiple-choice',
            title: '4 · Choose the correct option',
            mcq: [
              {
                question: 'To take part in geocaching you need …',
                options: [
                  'a mobile phone with GPS.',
                  'a mobile phone with GPS and a toy or gift.',
                  'a mobile phone, a toy or gift and a logbook.',
                  'nothing \u2013 just yourself!',
                ],
                answerIndex: 0,
              },
              {
                question: 'The activity of geocaching …',
                options: [
                  'began in the 19th century, but only became popular after 2000.',
                  'was originally only popular in one region of England.',
                  'was called \u201Cletterboxing\u201D when it was first invented.',
                  'has similarities with a 19th-century game.',
                ],
                answerIndex: 3,
              },
              {
                question: 'When you find a gift in a geocache, you …',
                options: [
                  'make a note of the gift on the website.',
                  'can borrow the gift, but have to return it.',
                  'are allowed to take the gift if you replace it with something else.',
                  'take a photo of the gift as proof.',
                ],
                answerIndex: 2,
              },
              {
                question: 'The writer thinks the most enjoyable kind of geocaching is when …',
                options: [
                  'you have to find a public webcam.',
                  'you have to find a series of geocaches.',
                  'you have to hide a cache in a different place.',
                  'you simply have to find one geocache.',
                ],
                answerIndex: 1,
              },
              {
                question: 'The writer has written the blog mainly to …',
                options: [
                  'suggest that people try geocaching.',
                  'explain the differences between letterboxing and geocaching.',
                  'publicise a geocaching event in Sweden.',
                  'warn the reader that geocaching is addictive.',
                ],
                answerIndex: 0,
              },
            ],
          },
          {
            type: 'matching',
            title: '5 · Prepositions of place',
            pairs: [
              { id: 1, left: 'below', right: 'lower than' },
              { id: 2, left: 'all along', right: 'at many points on something long' },
              { id: 3, left: 'all over', right: 'in many parts of a place' },
              { id: 4, left: 'beside', right: 'next to' },
              { id: 5, left: 'by', right: 'near; at the side of' },
            ],
          },
        ],
      },
    ],
  },
  {
    id: '2g',
    code: '2G',
    title: 'Stimulus-based discussion',
    subtitle: 'Agreeing on a day out',
    skill: 'Speaking',
    sections: [
      {
        id: 'speaking',
        title: 'Speaking',
        activities: [
          {
            type: 'word-list',
            title: '1 · Adventure activities',
            words: [
              'abseiling', 'bodyboarding', 'bungee jumping', 'climbing', 'hang-gliding',
              'hiking', 'karting', 'kayaking', 'mountain biking', 'parkour', 'snowboarding', 'surfing',
            ],
          },
          {
            type: 'intro',
            title: 'Speaking Strategy',
            body: 'When you have to reach an agreement, be sure to use a range of phrases for expressing preferences, raising objections and coming to an agreement.',
          },
          {
            type: 'matching',
            title: '4 · KEY PHRASES',
            pairs: [
              { id: 1, left: 'I quite fancy \u2026 / I\u2019m quite keen on \u2026 / I like the idea of \u2026', right: 'Expressing preferences' },
              { id: 2, left: 'The problem with \u2026 is that \u2026 / I\u2019d rather \u2026 than \u2026 / I\u2019m not keen on \u2026', right: 'Raising objections' },
              { id: 3, left: 'Can we agree on \u2026? / Overall, \u2026 would be better. / That\u2019s settled then.', right: 'Coming to an agreement' },
            ],
          },
          {
            type: 'task',
            title: '6 · The task',
            body: 'You and a friend are planning a day out doing an adventure activity. Discuss what you are going to do, give reasons for your opinions and agree on one activity. Choose three activities each first \u2014 make sure you and your partner choose different ones.',
          },
        ],
      },
    ],
  },
  {
    id: '2h',
    code: '2H',
    title: 'A blog post',
    subtitle: 'Writing a blog post expressing an opinion',
    skill: 'Writing',
    sections: [
      {
        id: 'writing',
        title: 'Writing',
        activities: [
          {
            type: 'word-list',
            title: '1 · School clubs',
            words: [
              'art club', 'astronomy club', 'baking club', 'ballroom dancing club', 'computer club',
              'debating society', 'drama society', 'film club', 'fitness club', 'handball club',
              'photography club', 'school choir', 'school orchestra', 'science club',
            ],
          },
          {
            type: 'reading',
            title: '2 · Model blog post — the school open day',
            passage: [
              'One Saturday last month, the school organised an open day for students and parents to learn about all the school clubs. The event took place in the playground and also in the school hall.',
              'More than two hundred people came to the school to find out about the activities the school can offer. Most of them were parents of primary school children who are going to start at the school in September. Some students who are already at the school were there too, as well as most of the teachers.',
              'More than twenty different school clubs had stalls in the playground. Students and teachers explained to the visitors what goes on at the clubs. In the school hall, there were karate displays from the martial arts club and a short performance by the choir.',
              'In my view, the day was a great success. Everyone seemed to have a very good time. Since the open day, lots of people have been asking for information about clubs. As well as that, the school has received suggestions for new clubs, including ballroom dancing and ice skating!',
            ],
          },
          {
            type: 'fill-blanks',
            title: '3 · Useful phrases from the model',
            blanks: [
              { prompt: 'a Saying when a past event took place', answer: 'One Saturday last month, \u2026' },
              { prompt: 'b Introducing a personal opinion', answer: 'In my view, \u2026' },
              { prompt: 'c Introducing an additional point', answer: 'As well as that, \u2026' },
            ],
          },
          {
            type: 'intro',
            title: 'Writing Strategy',
            body: 'Where there is a word limit, keep within it. If you go over, decide which words you can delete \u2014 there may be unnecessary adjectives or examples. Then check that a) the text still makes sense and b) all four points in the task are still covered.',
          },
          {
            type: 'notes',
            title: '7 · Write your blog post',
            body: 'You recently went to a show performed by different school clubs. Write a blog post about it.',
            fields: [
              { id: 'p1', label: 'Paragraph 1 — where and when did the show take place? Which clubs took part?' },
              { id: 'p2', label: 'Paragraph 2 — who attended and how did they react?' },
              { id: 'p3', label: 'Paragraph 3 — your personal opinion of the show' },
              { id: 'p4', label: 'Paragraph 4 — two improvements for next year' },
            ],
          },
        ],
      },
    ],
  },
];

// ─────────────────────────── UNIT 3 · The human body ────────────────────────

const unit3Lessons: SolLesson[] = [
  {
    id: '3a',
    code: '3A',
    title: 'Parts of the body',
    subtitle: 'Body parts, treatments, accidents and injuries',
    skill: 'Vocabulary',
    sections: [
      {
        id: 'vocabulary',
        title: 'Vocabulary',
        activities: [
          {
            type: 'word-list',
            title: '2 · Parts of the body',
            words: [
              'ankle', 'blood', 'bottom', 'brain', 'calf', 'cheek', 'chin', 'elbow', 'eyebrow',
              'eyelid', 'forehead', 'heart', 'heel', 'hip', 'intestine', 'jaw', 'kidney', 'knee',
              'lip', 'lung', 'muscle', 'nail', 'rib', 'scalp', 'shin', 'shoulder', 'skin', 'skull',
              'spine', 'stomach', 'thigh', 'throat', 'thumb', 'toe', 'waist', 'wrist',
            ],
          },
          {
            type: 'matching',
            title: '3 · Where in the body?',
            pairs: [
              { id: 1, left: 'brain, heart, intestine, kidney, lung', right: 'Inside your body' },
              { id: 2, left: 'cheek, chin, eyebrow, eyelid, forehead, jaw, lip, scalp, throat', right: 'Head or neck' },
              { id: 3, left: 'elbow, nail, shoulder, thumb, wrist', right: 'Arm or hand' },
              { id: 4, left: 'ankle, calf, heel, knee, shin, thigh, toe', right: 'Leg or foot' },
              { id: 5, left: 'hip, rib, spine, stomach, waist', right: 'Between neck and legs' },
            ],
          },
          {
            type: 'multiple-choice',
            title: '5 · How much do you know about the human body?',
            mcq: [
              { question: 'What is the most common blood type?', options: ['AB-', 'B-', 'O+'], answerIndex: 2 },
              { question: 'How much do fingernails grow per month?', options: ['0.75 mm', '1.5 mm', '3 mm'], answerIndex: 2 },
              { question: 'Where exactly is your heart?', options: ['On the left of your chest.', 'In the middle of your chest.', 'In the middle of your chest, a bit to the left.'], answerIndex: 2 },
              { question: 'How long are the human intestines?', options: ['3.5 m', '8.5 m', '13.5 m'], answerIndex: 1 },
              { question: 'How many bones do you have when you are born?', options: ['206', '300', '426'], answerIndex: 1 },
              { question: 'How many hairs are there on the human scalp?', options: ['90,000\u2013150,000', '150,000\u2013190,000', '190,000\u2013250,000'], answerIndex: 0 },
              { question: 'What is the human body\u2019s biggest organ?', options: ['liver', 'brain', 'skin'], answerIndex: 2 },
              { question: 'Where is the largest muscle in your body?', options: ['in your bottom', 'in your thigh', 'in your jaw'], answerIndex: 0 },
            ],
          },
          {
            type: 'flashcards',
            title: '7 · Treatments',
            cards: [
              { term: 'antibiotics', definition: 'medicine that kills bacteria and treats infections' },
              { term: 'bandage', definition: 'a long strip of cloth wrapped around an injury' },
              { term: 'cream', definition: 'a soft substance you rub onto the skin' },
              { term: 'dressing', definition: 'a protective covering placed on a wound' },
              { term: 'medicine', definition: 'a substance you take to treat an illness' },
              { term: 'painkillers', definition: 'tablets that reduce pain' },
              { term: 'X-ray', definition: 'a photograph of the inside of your body, used to check bones' },
            ],
          },
          {
            type: 'audio',
            track: '1.27',
            title: 'Track 1.27 · Four dialogues at the doctor\u2019s',
            body: 'Recording coming soon \u2014 the tasks below are ready to use with the audio.',
          },
          {
            type: 'type-blanks',
            title: '8 · Present perfect or past simple?',
            body: 'Complete the extracts from the doctor\u2013patient dialogues.',
            blanks: [
              { prompt: 'My ankle really hurts. I think I ___ (twist) it.', answer: "have twisted|'ve twisted" },
              { prompt: 'Yes, it\u2019s a bit swollen. You ___ (sprain) it.', answer: "have sprained|'ve sprained" },
              { prompt: 'I ___ (have) an accident. I banged my head.', answer: "have had|'ve had" },
              { prompt: 'I ___ (trip) over the cat and hit my head on the corner of a table.', answer: 'tripped' },
              { prompt: 'I ___ (hurt) my thumb. I trapped it in the car door.', answer: "have hurt|'ve hurt" },
              { prompt: 'You certainly ___ (bruise) it.', answer: "have bruised|'ve bruised" },
              { prompt: 'I ___ (burn) my hand. I picked up a very hot saucepan.', answer: "have burnt|have burned|'ve burnt|'ve burned" },
              { prompt: 'When ___ it ___ (happen)?', answer: 'did it happen' },
            ],
          },
          {
            type: 'discussion',
            title: '9 · Speaking — accidents and injuries',
            body: 'Ask and answer with: bang your head, break a bone, bruise yourself badly, burn yourself, cut yourself badly, have a bad nosebleed, have a black eye, sprain your wrist, twist your ankle.',
            bullets: ['Have you ever broken a bone?', 'Yes, I have. I broke my arm when I was ten. I was climbing a tree and I fell.'],
          },
        ],
      },
    ],
  },
  {
    id: '3b',
    code: '3B',
    title: 'Speculating and predicting',
    subtitle: 'will, may, might, could and the first conditional',
    skill: 'Grammar',
    sections: [
      {
        id: 'grammar',
        title: 'Grammar',
        activities: [
          {
            type: 'reading',
            title: '2 · Bio-printing',
            passage: [
              'It is already possible to \u201Cprint\u201D three-dimensional objects out of plastic and metal using a 3-D printer. Now scientists are developing printers that will be able to print human organs and body parts. If they are successful, doctors could save millions of lives.',
              'At the moment, scientists are able to print human tissue and bone, but the printing of whole organs will probably be a reality by 2025. Doctors are certain that bio-printing will revolutionise the treatment of cancer and heart disease. Moreover, if we can produce organs such as hearts and kidneys, patients won\u2019t die while they\u2019re waiting for an organ donor. The technology is very expensive and the cost might not come down for a while. But when it does, bio-printing could play an important part in all our lives.',
            ],
          },
          {
            type: 'intro',
            title: 'LEARN THIS! Speculating and predicting',
            body: 'a We use will / won\u2019t to make predictions. b Phrases make predictions stronger or weaker: I\u2019m fairly sure / I doubt / definitely / probably. c We use may / might / could + infinitive without to for future possibility. d The negatives are may not / might not \u2014 we do not use could not.',
          },
          {
            type: 'intro',
            title: 'LEARN THIS! First conditional',
            body: 'We form the first conditional with the present simple in the if clause and will / won\u2019t + infinitive without to in the main clause. We can use may / might / could in the main clause to make the prediction less certain.',
          },
          {
            type: 'type-blanks',
            title: '7 · Regrowing body parts',
            body: 'Complete with the first conditional. In gaps 4 and 6 use a modal to make the prediction less certain.',
            blanks: [
              { prompt: 'If scientists ___ (can) discover how this happens \u2026', answer: 'can' },
              { prompt: '\u2026 in theory it ___ (be) possible to re-grow human body parts too.', answer: 'will be' },
              { prompt: 'But if governments ___ (start) to spend more money on research \u2026', answer: 'start' },
              { prompt: '\u2026 then this dream ___ (become) a reality.', answer: 'might become|may become|could become' },
              { prompt: 'So if we ___ (learn) to repair human limbs and organs \u2026', answer: 'learn' },
              { prompt: '\u2026 it ___ (be) possible to prevent us from dying.', answer: 'might be|may be|could be' },
            ],
          },
          {
            type: 'discussion',
            title: '8 · Speaking — first conditional',
            bullets: [
              'What will you do if you feel ill tomorrow morning?',
              'What will you do if the weather is fine at the weekend?',
              'What will you do if there\u2019s a long power cut this evening?',
              'What will you do if you get poor marks in your next English test?',
              'What will you do if your best friend forgets your birthday?',
            ],
          },
        ],
      },
    ],
  },
  {
    id: '3c',
    code: '3C',
    title: 'The body\u2019s limits',
    subtitle: 'Listening for numbers, dates and measurements',
    skill: 'Listening',
    sections: [
      {
        id: 'listening',
        title: 'Listening',
        activities: [
          {
            type: 'intro',
            title: 'Listening Strategy',
            body: 'Some listening tasks involve listening out for numbers, dates and measurements. Make sure you know how to pronounce these so that you can identify the information when you hear it.',
          },
          {
            type: 'word-list',
            title: '2 · Say these numbers',
            words: [
              '4,500', '100,000', '250,000', '2.5 million', '0.6', '0.04', '2.08',
              '1535', 'the 1980s', '1/3', '3/8', '57%', '10:1', 'aged 18\u201325', '-40\u00B0C',
            ],
          },
          {
            type: 'audio',
            track: '1.29',
            title: 'Track 1.29 · The limits of human survival',
            body: 'Recording coming soon \u2014 the gap-fill below is ready to use with the audio.',
          },
          {
            type: 'type-blanks',
            title: '3 · Complete the article with numbers',
            blanks: [
              { prompt: 'Polar explorers can cope with temperatures of ___ , but only if they keep warm.', answer: '-40\u00B0C|-40C|minus 40' },
              { prompt: 'Most people will collapse if their body temperature drops by only ___ .', answer: '2\u00B0C|2C' },
              { prompt: 'Temperatures of 35\u00B0C are safe, provided humidity is not above ___ .', answer: '50%' },
              { prompt: 'We pass out when pressure falls below ___ of normal atmospheric pressure.', answer: '1/3|a third' },
              { prompt: 'This happens at about ___ metres.', answer: '4,500|4500' },
              { prompt: 'At ground level, about ___ of the air is oxygen.', answer: '21%|20%' },
            ],
          },
          {
            type: 'audio',
            track: '1.31',
            title: 'Track 1.31 · Interview with a scientist',
            body: 'Recording coming soon \u2014 the true / false task below is ready to use with the audio.',
          },
          {
            type: 'multiple-choice',
            title: '6 · True or false?',
            mcq: [
              { question: 'When a Russian space capsule had a major problem in 1971, the cosmonauts died in less than 30 seconds.', options: ['True', 'False'], answerIndex: 0 },
              { question: 'In 1966, a scientist passed out after 15 seconds in a vacuum.', options: ['True', 'False'], answerIndex: 1 },
              { question: 'In the 1960s, Randy Gardner stayed awake for more than 250 hours.', options: ['True', 'False'], answerIndex: 0 },
              { question: 'After staying awake for so long, Randy Gardner then slept for almost 50 hours.', options: ['True', 'False'], answerIndex: 1 },
            ],
          },
          {
            type: 'discussion',
            title: '7 · Speaking',
            bullets: [
              'Have you ever been awake all night or most of the night? When / where / why?',
              'Have you ever felt very cold? When / where / why?',
              'Have you ever experienced high altitude? How did it feel?',
            ],
          },
        ],
      },
    ],
  },
  {
    id: '3d',
    code: '3D',
    title: 'Future continuous and future perfect',
    subtitle: 'Talking about events in the future and when they will happen',
    skill: 'Grammar',
    sections: [
      {
        id: 'grammar',
        title: 'Grammar',
        activities: [
          {
            type: 'reading',
            title: '2 · The human body in 100,000 years',
            passage: [
              'How will the human body have changed in 100,000 years? That was the question artist Nickolay Lamm asked genetics expert Dr Alan Kwan. After their discussion, Mr Lamm came up with some interesting predictions. In the distant future:',
              'Humans will be living in other parts of the solar system. As a result, our eyelids will have become thicker to protect our eyes from radiation. Our nostrils will have grown larger to cope with less oxygen in other atmospheres.',
              'The size of our skull will have increased because our brain will have got larger. We will be using a nano-chip inside our head to receive images and sound for entertainment and communication.',
            ],
          },
          {
            type: 'intro',
            title: 'LEARN THIS! Future perfect and future continuous',
            body: 'a Future perfect = will have + past participle (a completed action in the future). b Future continuous = will be + -ing form (an action in progress in the future).',
          },
          {
            type: 'type-blanks',
            title: '4 · Future continuous or future perfect?',
            blanks: [
              { prompt: 'Five hours from now, we ___ (finish) this English lesson.', answer: 'will have finished' },
              { prompt: 'My brother is at university, but in two years\u2019 time he ___ (work).', answer: 'will be working' },
              { prompt: 'Hopefully, I ___ (not live) with my parents when I\u2019m thirty.', answer: "won't be living" },
              { prompt: 'I\u2019m sure the party will be a surprise. Nobody ___ (tell) her about it.', answer: 'will have told' },
              { prompt: 'According to the forecast, the sun ___ (shine) all day tomorrow.', answer: 'will be shining' },
              { prompt: 'I\u2019m sad that Messi ___ (not play).', answer: "won't be playing" },
            ],
          },
          {
            type: 'word-list',
            title: '5 · Future time expressions',
            words: [
              'about 100 years from now', 'in 1,000 years\u2019 time', 'within 50 years',
              'by the end of the century', 'a few hundred years into the future',
              'in the foreseeable future', 'in the long term',
            ],
          },
          {
            type: 'discussion',
            title: '7 · Speaking — your predictions',
            body: 'Write predictions with the future continuous or future perfect and a time expression, then discuss them. Ask: Do you agree? What\u2019s your view? Answer: I\u2019m not sure I agree. / That\u2019s what I think too.',
            bullets: [
              'scientists / find a cure for most diseases',
              'most people / live to 200',
              'a human / run 100 m in five seconds',
              'computers / manage all major companies',
            ],
          },
        ],
      },
    ],
  },
  {
    id: '3e',
    code: '3E',
    title: 'Word families',
    subtitle: 'Nouns, adjectives and adverbs from the same base',
    skill: 'Word Skills',
    sections: [
      {
        id: 'word-skills',
        title: 'Word Skills',
        activities: [
          {
            type: 'reading',
            title: '2 · A gut feeling',
            passage: [
              'Emotions do not just occur in your mind; they also have a physical effect on your body. A group of scientists from Finland decided to find out which emotions affect which parts of the body. They asked 701 volunteers to colour in silhouettes in response to emotional words, stories and videos. The results show that people generally experience emotions like anger, envy and shame in similar ways.',
              'For example, when you\u2019re angry, you probably feel that anger mostly in your chest and head. But if you feel ashamed, you probably notice it in your face and, in particular, your cheeks. Depression makes your whole body feel less active, whereas happiness affects your whole body in a positive way.',
            ],
          },
          {
            type: 'type-blanks',
            title: '3 · Complete the word family table',
            blanks: [
              { prompt: 'Noun for the adjective \u201Cangry\u201D', answer: 'anger' },
              { prompt: 'Adjective for the noun \u201Canxiety\u201D', answer: 'anxious' },
              { prompt: 'Noun for the adjective \u201Cashamed\u201D', answer: 'shame' },
              { prompt: 'Noun for the adjective \u201Cenvious\u201D', answer: 'envy' },
              { prompt: 'Noun for the adjective \u201Chappy\u201D', answer: 'happiness' },
              { prompt: 'Adjective for the noun \u201Cpride\u201D', answer: 'proud' },
              { prompt: 'Noun for the adjective \u201Csad\u201D', answer: 'sadness' },
              { prompt: 'Noun for the adjective \u201Csurprised\u201D', answer: 'surprise' },
            ],
          },
          {
            type: 'intro',
            title: 'LEARN THIS! Word families',
            body: 'a Some nouns are formed by adding -ness or -ment to an adjective. b Common adjective endings: -ed, -ing, -ous, -ful, -less, -y, -al. c Most adverbs add -ly to an adjective. d A prefix can change the meaning: surprisingly \u2013 unsurprisingly.',
          },
          {
            type: 'type-blanks',
            title: '5 · Adjective or adverb?',
            blanks: [
              { prompt: 'He told me ___ (anger) not to be late again.', answer: 'angrily' },
              { prompt: 'Liam is ___ (hope) that he\u2019ll pass all his exams.', answer: 'hopeful' },
              { prompt: 'I was ___ (surprise), but I tried not to show it.', answer: 'surprised' },
              { prompt: 'We waited ___ (anxiety) for news of his arrival.', answer: 'anxiously' },
              { prompt: 'He looked for his wallet, but ___ (sadness) he couldn\u2019t find it.', answer: 'sadly' },
              { prompt: 'That\u2019s a good mark \u2013 don\u2019t be ___ (shame) of it.', answer: 'ashamed' },
            ],
          },
          {
            type: 'type-blanks',
            title: '6 · USE OF ENGLISH',
            body: 'Complete each sentence with a word related to the word in brackets. You may need a prefix.',
            blanks: [
              { prompt: 'He stared ___ (envy) at his friend\u2019s new bike.', answer: 'enviously' },
              { prompt: 'Her neighbour is always bad-tempered, so she found his angry reaction ___ (surprise).', answer: 'unsurprising' },
              { prompt: 'You ought to feel no ___ (ashamed) about asking for help.', answer: 'shame' },
              { prompt: 'They ___ (pride) carried their country\u2019s flag.', answer: 'proudly' },
              { prompt: 'My sister was ___ (annoy) late.', answer: 'annoyingly' },
              { prompt: 'He didn\u2019t try to hide his ___ (happy) \u2013 he just cried.', answer: 'happiness' },
            ],
          },
        ],
      },
    ],
  },
  {
    id: '3f',
    code: '3F',
    title: 'Body clock',
    subtitle: 'Reading: matching questions with paragraphs; homonyms',
    skill: 'Reading',
    sections: [
      {
        id: 'reading',
        title: 'Reading',
        activities: [
          {
            type: 'intro',
            title: 'Reading Strategy',
            body: '1 Read the text to get a general idea of the meaning. 2 Read the lead-in line very carefully, then all the options. 3 Read the paragraphs one by one and match them to the correct option. 4 If you can\u2019t find the answer, come back to it later.',
          },
          {
            type: 'reading',
            title: 'Night and day',
            newspaper: true,
            source: 'Solutions Intermediate · 3F',
            passage: [
              'HOW MUCH SLEEP DO WE NEED? Young children need more sleep than adults and tend to wake up earlier \u2013 a typical ten-year-old needs about ten hours. Most teenagers need about nine hours\u2019 sleep, but wake up later. As an adult you\u2019ll need about eight to eight and a half hours a night. In our 70s and 80s we are less able to sleep deeply and usually need less sleep.',
              'A 6 a.m. \u2013 9 a.m. Your body is waking up. It stops producing melatonin, the hormone which makes you feel sleepy. Blood vessels are stiffer and your blood pressure is at its highest, so it\u2019s not the best time to exercise.',
              'B 9 a.m. \u2013 12 p.m. You\u2019re at your most alert. Tests show that short-term memory is at its best right now. It\u2019s a good time to get a lot of work done, because you\u2019ll experience a big dip after lunch.',
              'C 12 p.m. \u2013 3 p.m. Your stomach is full and working hard after lunch. You become much less alert. More road accidents happen at this time of day than at any other, particularly involving older people.',
              'D 3 p.m. \u2013 6 p.m. This is a very good time to exercise. Body temperature increases in the late afternoon. Your heart and lungs work better and muscles are six per cent stronger than at their lowest point in the day.',
              'E 6 p.m. \u2013 9 p.m. By now you\u2019ll be getting hungry. But don\u2019t eat too late! In the evening, our bodies struggle to digest fats and sugars. People will lose more weight if they have their main meal at lunchtime rather than in the evening.',
              'F 9 p.m. \u2013 12 a.m. Your body temperature is falling and your body clock is telling you it\u2019s time for bed. Your body is producing lots of melatonin. Blue light from phones, computer screens and TVs is particularly effective at keeping us awake. So turn off those gadgets!',
              'G 12 a.m. \u2013 3 a.m. Your body really wants to be asleep. Melatonin reaches its maximum level. Your stomach has stopped working and your brain is at rest.',
              'H 3 a.m. \u2013 6 a.m. Melatonin levels are still high and you are in deep sleep. Your body temperature is much cooler than at any other time of the day. As dawn approaches, your melatonin levels will decrease.',
            ],
          },
          {
            type: 'multiple-choice',
            title: '2 · Best summary',
            mcq: [
              {
                question: 'The writer\u2019s main purpose is to explain …',
                options: [
                  'why children need more sleep than adults.',
                  'why we should always get lots of sleep.',
                  'why our bodies feel more or less tired at different times of day.',
                  'why some people feel more alert than others.',
                ],
                answerIndex: 2,
              },
            ],
          },
          {
            type: 'matching',
            title: '3 · In which period of the day …?',
            pairs: [
              { id: 1, left: 'do you completely stop digesting food?', right: 'G · 12 a.m. \u2013 3 a.m.' },
              { id: 2, left: 'is it best to be physically active?', right: 'D · 3 p.m. \u2013 6 p.m.' },
              { id: 3, left: 'do our bodies have difficulty digesting certain foods?', right: 'E · 6 p.m. \u2013 9 p.m.' },
              { id: 4, left: 'are older people more likely to have accidents?', right: 'C · 12 p.m. \u2013 3 p.m.' },
              { id: 5, left: 'does your body contain the most melatonin?', right: 'G · melatonin at its maximum' },
              { id: 6, left: 'are you best at remembering things over short periods?', right: 'B · 9 a.m. \u2013 12 p.m.' },
              { id: 7, left: 'does your body stop making melatonin?', right: 'A · 6 a.m. \u2013 9 a.m.' },
              { id: 8, left: 'is your body at its coolest?', right: 'H · 3 a.m. \u2013 6 a.m.' },
              { id: 9, left: 'does your body begin to become cooler?', right: 'F · 9 p.m. \u2013 12 a.m.' },
            ],
          },
          {
            type: 'intro',
            title: 'LEARN THIS! Homonyms',
            body: 'Homonyms are words that have the same spelling or pronunciation but a different meaning or part of speech. bank = 1 a place where you keep money 2 the side of a river. walk = 1 a noun 2 a verb.',
          },
          {
            type: 'discussion',
            title: '7 · Speaking',
            bullets: [
              'Do you get enough sleep? If not, why not?',
              'How do you feel if you don\u2019t get enough sleep? What is more difficult to do?',
              'Do you use gadgets late at night? Do they keep you awake?',
              'When are you most alert? Are you a \u201Clark\u201D, an \u201Cowl\u201D, or in between?',
            ],
          },
        ],
      },
    ],
  },
  {
    id: '3g',
    code: '3G',
    title: 'Photo description',
    subtitle: 'Describing photos and answering questions',
    skill: 'Speaking',
    sections: [
      {
        id: 'speaking',
        title: 'Speaking',
        activities: [
          {
            type: 'intro',
            title: 'Speaking Strategy',
            body: 'Give your photo description a simple structure: 1 Say what the photo shows in general (It looks to me as if \u2026 / The photo appears to show \u2026). 2 Talk about some interesting details. 3 Add a personal opinion or reaction.',
          },
          {
            type: 'word-list',
            title: '4 · Speculating about photos',
            words: [
              'It looks like some kind of dance class.',
              'They\u2019re in a park, or maybe in the countryside.',
              'I think it\u2019s a fitness class of some kind.',
              'There\u2019s a sort of climbing frame.',
              'It\u2019s most likely in the evening.',
              'Two men are doing pull-ups, or something like that.',
              'She\u2019s the instructor, I would say.',
            ],
          },
          {
            type: 'matching',
            title: '7 · Which phrases for which question?',
            pairs: [
              { id: 1, left: 'As I see it, \u2026 / My view is that \u2026 / The way I look at it, \u2026 / In my opinion, \u2026', right: 'Q2 · Giving an opinion' },
              { id: 2, left: 'I remember once when \u2026 / A few months ago, \u2026 / Some time last year, \u2026 / On one occasion, \u2026', right: 'Q3 · Describing an occasion' },
            ],
          },
          {
            type: 'task',
            title: '9 · Speaking practice',
            body: 'In pairs, ask and answer: 1 Do you think the people are enjoying the class? Why? 2 Do you think men care as much about their appearance as women? Why? 3 Tell me about an occasion when you wanted to look your best.',
          },
        ],
      },
    ],
  },
  {
    id: '3h',
    code: '3H',
    title: 'An opinion essay',
    subtitle: 'Giving your view and proposing solutions',
    skill: 'Writing',
    sections: [
      {
        id: 'writing',
        title: 'Writing',
        activities: [
          {
            type: 'reading',
            title: '3 · Model essay',
            body: 'Task: Many people agree that teenagers don\u2019t get enough exercise. Write an essay in which you give your own view of the problem and propose ways of solving it.',
            passage: [
              'Most people agree that the lack of exercise in teenagers\u2019 lives is a serious problem. But what are the causes of this problem and what can we do to address them?',
              'I strongly believe that today\u2019s teenagers spend too much time playing on electronic gadgets. They hardly ever do outdoor activities and this is why many of them do not get enough exercise. What is more, many teenagers are overweight and this makes them less willing to do exercise.',
              'In order to tackle this problem, a number of measures are necessary. In my view, it is unrealistic to limit the amount of time teenagers spend on gadgets. What I propose instead is that we make sure school canteens only serve healthy food. Furthermore, I would strongly recommend that we give all teenagers free membership of their local sports facilities.',
              'To conclude, lack of exercise can cause long-term health problems, so it is vital that we act now. It seems to me that the measures I propose will begin to remedy the situation.',
            ],
          },
          {
            type: 'intro',
            title: 'Writing Strategy',
            body: '1 Divide your essay into an introduction, main body and conclusion. 2 If the task has more than one element, deal with them in different paragraphs. 3 Use formal language. 4 Support opinions with evidence or examples.',
          },
          {
            type: 'type-blanks',
            title: '5 · KEY PHRASES',
            body: 'Complete the useful essay phrases.',
            blanks: [
              { prompt: 'In my ___ , \u2026 (introducing your opinion)', answer: 'opinion|view' },
              { prompt: 'It ___ to me that \u2026', answer: 'seems' },
              { prompt: 'It is a ___ held view that \u2026', answer: 'widely' },
              { prompt: 'It is often ___ that \u2026', answer: 'said' },
              { prompt: '___ is more, \u2026 (additional point)', answer: 'What' },
              { prompt: 'One ___ might be to \u2026', answer: 'solution' },
              { prompt: 'What I ___ instead is that \u2026', answer: 'propose' },
              { prompt: 'It is ___ that we act now.', answer: 'vital' },
              { prompt: 'To ___ up, \u2026 (concluding)', answer: 'sum' },
            ],
          },
          {
            type: 'notes',
            title: '8 · Write your essay',
            body: 'Some people believe that doing sport at school is a distraction from more important work. Give your own opinion and propose ways for students to do more sport without causing problems for their studies.',
            fields: [
              { id: 'intro', label: 'Introduction — the issue' },
              { id: 'body1', label: 'Main body 1 — your opinion and reasons' },
              { id: 'body2', label: 'Main body 2 — your proposals' },
              { id: 'conclusion', label: 'Conclusion' },
            ],
          },
        ],
      },
    ],
  },
];

// ─────────────────────────────── ALL UNITS ──────────────────────────────────

export const solUnits: SolUnit[] = [
  {
    id: 'unit-1',
    number: 1,
    title: 'Generations',
    subtitle: 'Stages of life, past tenses, used to, phrasal verbs and adolescence',
    lessons: unit1Lessons,
  },
  {
    id: 'unit-2',
    number: 2,
    title: 'Leisure time',
    subtitle: 'Activities and sports, present perfect, eating out and compounds',
    lessons: unit2Lessons,
  },
  {
    id: 'unit-3',
    number: 3,
    title: 'The human body',
    subtitle: 'Body parts, predictions, future tenses, word families and the body clock',
    lessons: unit3Lessons,
  },
  { id: 'unit-4', number: 4, title: 'Home', subtitle: 'Describing homes, comparison, imaginary situations', lessons: [] },
  { id: 'unit-5', number: 5, title: 'Technology', subtitle: 'Computing, quantifiers, modals in the past', lessons: [] },
  { id: 'unit-6', number: 6, title: 'Achievers', subtitle: 'Describing character, relative clauses', lessons: [] },
  { id: 'unit-7', number: 7, title: 'Artists', subtitle: 'The arts, the passive, have something done', lessons: [] },
  { id: 'unit-8', number: 8, title: 'Communication', subtitle: 'On the phone, reported speech and questions', lessons: [] },
  { id: 'unit-9', number: 9, title: 'Journeys', subtitle: 'Travel and transport, the third conditional', lessons: [] },
  { id: 'unit-10', number: 10, title: 'Ambition', subtitle: 'Work and careers, exam skills practice', lessons: [] },
];
