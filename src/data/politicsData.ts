import type { Activity } from './engineeringData';
import type { FlashcardItem } from '@/components/presentations/Flashcards';

export const warmUp: Activity[] = [
  {
    type: 'intro',
    title: '1 · Politics in everyday life',
    body: 'Discuss these questions with a partner. You do not need to agree, but explain your reasons.',
    bullets: [
      'Which decisions made by national or local government affect your life most directly?',
      'Why do some eligible voters decide not to vote?',
      'What makes an election free and fair?',
      'Where do you usually get political news, and how much do you trust it?',
      'Would you ever stand for election? Why or why not?',
    ],
  },
  {
    type: 'matching',
    title: '1b · Political systems',
    body: 'Match each system with the most accurate description.',
    pairs: [
      { id: 1, left: 'democracy', right: 'citizens choose representatives in free elections' },
      { id: 2, left: 'republic', right: 'a state whose head is not a hereditary monarch' },
      { id: 3, left: 'constitutional monarchy', right: 'a monarch is head of state, but elected institutions govern' },
      { id: 4, left: 'dictatorship', right: 'one ruler or group holds power with little effective opposition' },
      { id: 5, left: 'coalition government', right: 'two or more parties agree to govern together' },
    ],
  },
  {
    type: 'discussion',
    title: '1c · Compare systems',
    body: 'Political systems differ from country to country. Compare your country with another country you know.',
    bullets: [
      'Who is the head of state, and who is the head of government?',
      'How often are national elections held?',
      'Is parliament made up of one chamber or two?',
      'Can citizens vote directly on major questions in a referendum?',
    ],
  },
];

export const policyPriorities = [
  'Healthcare',
  'Education',
  'Housing',
  'The cost of living',
  'Climate and energy',
  'Jobs and the economy',
  'Public safety',
  'Transport and infrastructure',
];

export const politicsFlashcards: FlashcardItem[] = [
  { term: 'constituency', definition: 'an area whose voters elect a representative', example: 'She represents a largely rural constituency.' },
  { term: 'candidate', definition: 'a person competing to be elected', example: 'Five candidates are standing in the local election.' },
  { term: 'manifesto', definition: 'a public statement of a party’s aims and policies', example: 'The party promised cheaper public transport in its manifesto.' },
  { term: 'polling station', definition: 'the place where people go to vote', example: 'The school gym is being used as a polling station.' },
  { term: 'ballot paper', definition: 'the paper or form on which a vote is recorded', example: 'Voters mark one candidate on the ballot paper.' },
  { term: 'turnout', definition: 'the percentage or number of eligible voters who vote', example: 'Turnout among younger voters increased.' },
  { term: 'majority', definition: 'more than half, or the amount by which someone wins', example: 'The government has a small majority in parliament.' },
  { term: 'opposition', definition: 'the parties or politicians not currently in government', example: 'The opposition criticised the new law.' },
  { term: 'cabinet', definition: 'the group of senior ministers who make major government decisions', example: 'The finance minister presented the plan to the cabinet.' },
  { term: 'referendum', definition: 'a direct public vote on a particular question', example: 'The constitution was approved in a referendum.' },
  { term: 'coalition', definition: 'an alliance of parties formed to govern together', example: 'Neither party won a majority, so they formed a coalition.' },
  { term: 'incumbent', definition: 'the person currently holding an elected office', example: 'The incumbent mayor is seeking another term.' },
  { term: 'front-runner', definition: 'the candidate currently considered most likely to win', example: 'The latest poll puts her ahead as the front-runner.' },
  { term: 'floating voter', definition: 'a voter who has not firmly decided which party to support', example: 'Both campaigns are trying to persuade floating voters.' },
  { term: 'hung parliament', definition: 'a parliament in which no party has an overall majority', example: 'The close result produced a hung parliament.' },
  { term: 'fact-checker', definition: 'a person or organisation that verifies public claims', example: 'Fact-checkers compared the claim with official data.' },
];

export const vocabularyActivities: Activity[] = [
  {
    type: 'matching',
    title: '2b · People and institutions',
    body: 'Match the political role or institution with its function.',
    pairs: [
      { id: 1, left: 'Member of Parliament (MP)', right: 'represents a constituency in parliament' },
      { id: 2, left: 'prime minister', right: 'leads the government in many parliamentary systems' },
      { id: 3, left: 'president-elect', right: 'has won the election but has not yet taken office' },
      { id: 4, left: 'campaign manager', right: 'plans and coordinates an election campaign' },
      { id: 5, left: 'returning officer', right: 'organises and declares a local election result' },
      { id: 6, left: 'ambassador', right: 'represents a country in another country' },
    ],
  },
  {
    type: 'type-blanks',
    title: '2c · Election day',
    body: 'Type the missing election word or phrase. Use the flashcards if you need help.',
    phraseBank: true,
    blanks: [
      { prompt: 'Voters go to a ______ to cast their votes.', answer: 'polling station' },
      { prompt: 'A high ______ means that a large proportion of eligible people voted.', answer: 'turnout' },
      { prompt: 'Each voter marks a ______ in private.', answer: 'ballot paper' },
      { prompt: 'A party publishes its promises in a ______.', answer: 'manifesto' },
      { prompt: 'A person who competes in an election is a ______.', answer: 'candidate' },
      { prompt: 'If no party wins enough seats, several parties may form a ______.', answer: 'coalition' },
      { prompt: 'A direct public vote on one important issue is a ______.', answer: 'referendum' },
      { prompt: 'The parties not in government are known collectively as the ______.', answer: 'opposition' },
    ],
  },
  {
    type: 'multiple-choice',
    title: '2d · Election collocations',
    body: 'Choose the verb that completes each natural political expression.',
    mcq: [
      { question: 'The prime minister decided to ___ an early election.', options: ['call', 'ring', 'invite'], answerIndex: 0 },
      { question: 'National elections are normally ___ every four years.', options: ['held', 'kept', 'carried'], answerIndex: 0 },
      { question: 'The opposition threatened to ___ the election in protest.', options: ['boycott', 'cancel out', 'escape'], answerIndex: 0 },
      { question: 'Observers found evidence that officials had tried to ___ the result.', options: ['rig', 'bend', 'set'], answerIndex: 0 },
      { question: 'After the scandal, the minister agreed to ___ down.', options: ['stand', 'sit', 'go'], answerIndex: 0 },
      { question: 'Parliament voted ___ the workplace-safety proposal.', options: ['through', 'across', 'along'], answerIndex: 0 },
    ],
  },
  {
    type: 'type-blanks',
    title: '2e · Word families',
    body: 'Complete each sentence with the correct form of the word in brackets.',
    blanks: [
      { prompt: 'The minister’s sudden ______ surprised her party. (resign)', answer: 'resignation' },
      { prompt: 'Only registered voters may vote in the ______. (elect)', answer: 'election' },
      { prompt: 'The new ______ will take office next month. (govern)', answer: 'government' },
      { prompt: 'There has been strong public ______ to the proposal. (oppose)', answer: 'opposition' },
      { prompt: 'The interview was conducted by a respected ______ journalist. (politics)', answer: 'political' },
      { prompt: 'Citizens ______ twelve representatives to the council. (election)', answer: 'elect' },
    ],
  },
  {
    type: 'task',
    title: '2f · Political labels need context',
    body: 'Words such as left-wing, right-wing, liberal, conservative and libertarian do not mean exactly the same thing in every country or period. When you use one, say which policy, country and time you mean. Avoid assuming that one label predicts every opinion a person holds.',
  },
];

export const globalElectionReading: Activity[] = [
  {
    type: 'reading',
    newspaper: true,
    source: 'The Daily Unpacked · Democracy & Technology',
    title: 'When billions went to the polls',
    body: 'The record election year of 2024 revealed both the scale of democratic participation and the growing challenge of synthetic media.',
    passage: [
      'In 2024, national elections took place in more than sixty countries as well as across the European Union. Around two billion people — close to half the world’s population — were eligible to vote. Never before had so many voters faced national choices in the same calendar year.',
      'The results mattered far beyond election night. Governments elected that year would make decisions about prices, public services, security, migration, climate policy and international relations. Yet the year also raised a difficult question: could citizens make informed choices in an online environment crowded with misleading content?',
      'Artificial intelligence made convincing fake images, audio and video easier to produce. A fabricated clip could appear to show a candidate saying something they had never said. Repetition then gave a false claim visibility, while recommendation systems could push emotional content faster than a careful correction.',
      'Technology alone was not the problem. Misleading headlines, edited quotations and statistics without context existed long before generative AI. What changed was the speed, cost and scale of production. A small group could now create and distribute large quantities of persuasive material in minutes.',
      'Election authorities, journalists and independent fact-checkers responded with public information campaigns, visible corrections and guides to checking sources. Their advice was simple: pause before sharing, find the original statement, check the date, compare several reliable sources and look for evidence rather than emotional certainty.',
      'Free and fair elections depend on more than accurate counting. Voters must also be able to reach the polls, choose without intimidation and obtain trustworthy information. The record year showed that democracy is both a right exercised on election day and a skill practised whenever citizens decide what to believe.',
    ],
  },
  {
    type: 'multiple-choice',
    title: '3b · True, false or not given?',
    body: 'Choose the best answer according to the article.',
    mcq: [
      { question: 'Around two billion people were eligible to vote during 2024.', options: ['True', 'False', 'Not given'], answerIndex: 0 },
      { question: 'All elections in 2024 were national elections.', options: ['True', 'False', 'Not given'], answerIndex: 1 },
      { question: 'Generative AI was the first technology ever used to spread misleading political claims.', options: ['True', 'False', 'Not given'], answerIndex: 1 },
      { question: 'The article names the country with the highest voter turnout in 2024.', options: ['True', 'False', 'Not given'], answerIndex: 2 },
      { question: 'Fact-checkers advised people to locate original statements and compare sources.', options: ['True', 'False', 'Not given'], answerIndex: 0 },
      { question: 'The article says accurate vote counting is the only condition for a fair election.', options: ['True', 'False', 'Not given'], answerIndex: 1 },
    ],
  },
  {
    type: 'matching',
    title: '3c · Vocabulary in context',
    body: 'Match each expression from the article with its meaning.',
    pairs: [
      { id: 1, left: 'go to the polls', right: 'vote in an election' },
      { id: 2, left: 'eligible to vote', right: 'legally allowed to vote' },
      { id: 3, left: 'fabricated clip', right: 'a fake piece of audio or video' },
      { id: 4, left: 'without context', right: 'without enough background to understand something fairly' },
      { id: 5, left: 'intimidation', right: 'frightening or pressuring someone to influence their action' },
      { id: 6, left: 'trustworthy information', right: 'information that deserves to be believed' },
    ],
  },
  {
    type: 'discussion',
    title: '3d · Talk about it',
    bullets: [
      'Which of the checking steps in the article do you already use?',
      'Should platforms label AI-generated political content? Who should decide?',
      'Is a correction as powerful as the original false claim? Why or why not?',
      'What should schools teach students about political information online?',
    ],
  },
];

export const electionNightReading: Activity[] = [
  {
    type: 'reading',
    newspaper: true,
    source: 'Civic Guide · UK Election Night',
    title: 'From ballot box to final result',
    body: 'Some election language is international; other expressions belong specifically to the United Kingdom.',
    passage: [
      'Before a UK general election, parties publish manifestos and candidates compete for votes in 650 constituencies. Some people vote by post; others cast their vote in person at a polling station. Voting is by secret ballot, so nobody should know which candidate an individual voter selected.',
      'When polling stations close, sealed ballot boxes are taken to local count centres. Officials check and count the ballot papers. The returning officer then declares the result for that constituency. News organisations also publish exit polls, which estimate the national outcome by asking a sample of people how they voted.',
      'Under the UK first-past-the-post system, the candidate with the most votes in each constituency wins a seat. A marginal seat is one where the previous winner had only a small majority. These seats often receive particular attention because a relatively small change in votes can change the winner.',
      'If one party wins more than half the seats, it can normally form a majority government. If no party has enough seats, the result is a hung parliament. Parties may then negotiate a coalition or another arrangement that allows a government to command support in parliament.',
      'Terms such as candidate, ballot, turnout and concede defeat are useful internationally. Constituency, returning officer and first past the post are especially important when discussing the UK. Other democracies organise districts, counting and representation differently.',
    ],
  },
  {
    type: 'multiple-choice',
    title: '3f · Check your understanding',
    mcq: [
      { question: 'Who officially declares a constituency result in the UK?', options: ['The returning officer', 'The front-runner', 'The cabinet'], answerIndex: 0 },
      { question: 'What does an exit poll do?', options: ['Estimates the result from a sample of voters', 'Counts every ballot paper', 'Registers postal voters'], answerIndex: 0 },
      { question: 'Why do marginal seats receive attention?', options: ['A small change could alter the winner', 'They have no candidates', 'They always vote last'], answerIndex: 0 },
      { question: 'What can happen after a hung parliament?', options: ['Parties may negotiate a coalition', 'The monarch chooses every MP', 'All ballot papers are destroyed'], answerIndex: 0 },
    ],
  },
];

export const newsBriefs: Activity[] = [
  {
    type: 'reading',
    newspaper: true,
    source: 'News in Brief · Fictional classroom reports',
    title: 'Five stories from the political desk',
    body: 'All people and places in these short reports are fictional.',
    passage: [
      'STAYING HOME — Turnout in the city of Northbridge fell to 31 per cent in yesterday’s council election. Commentators said many eligible voters felt that none of the candidates had addressed the rising cost of housing.',
      'A COALITION TAKES OFFICE — No party won a majority in Belland’s general election. After six days of talks, the Green Alliance and Civic Party agreed to govern together and published a joint programme.',
      'MINISTER STEPS DOWN — Transport minister Mara Venn resigned after parliament rejected her rail proposal for a third time. The prime minister will appoint a replacement later this week.',
      'MAYOR FACES THE FACT-CHECKERS — Eastport’s mayor claimed that crime had doubled in one year. Independent fact-checkers found that reported crime had risen by 8 per cent, and the mayor later corrected the statement.',
      'YOUNG VOTERS SET A RECORD — More than three quarters of newly registered voters in Lakeside cast a ballot in Sunday’s referendum, the highest youth turnout recorded in the region.',
    ],
  },
  {
    type: 'multiple-choice',
    title: '3h · Read for detail',
    body: 'Choose the answer supported by the five reports.',
    mcq: [
      { question: 'Where did parties agree to govern together?', options: ['Belland', 'Northbridge', 'Eastport'], answerIndex: 0 },
      { question: 'Why did Mara Venn leave her job?', options: ['Her proposal was repeatedly rejected', 'She lost a mayoral election', 'She published false turnout figures'], answerIndex: 0 },
      { question: 'Which original claim was misleading?', options: ['Crime had doubled', 'Turnout was 31 per cent', 'Two parties formed a coalition'], answerIndex: 0 },
      { question: 'Which report concerns a direct vote on one question?', options: ['Young Voters Set a Record', 'Minister Steps Down', 'Staying Home'], answerIndex: 0 },
    ],
  },
];

export const languageActivities: Activity[] = [
  {
    type: 'type-blanks',
    title: '4 · Second conditional: policy ideas',
    body: 'Complete the hypothetical policies with the correct verb form.',
    blanks: [
      { prompt: 'If our party ______ elected, we would improve rural bus services. (be)', answer: 'were' },
      { prompt: 'We ______ more affordable homes if we controlled the council budget. (build)', answer: 'would build' },
      { prompt: 'If public transport ______ less, more people would use it. (cost)', answer: 'cost' },
      { prompt: 'If I ______ prime minister, I would publish every ministerial meeting. (be)', answer: 'were' },
      { prompt: 'Unemployment would fall if small businesses ______ more support. (receive)', answer: 'received' },
      { prompt: 'If voting ______ compulsory, turnout would probably rise. (become)', answer: 'became' },
    ],
  },
  {
    type: 'word-order',
    title: '4b · Build the policy statements',
    body: 'Tap the phrase tiles in the correct order.',
    sentences: [
      'If we were elected|we would reduce|the cost of childcare',
      'More young people would vote|if registration were|simpler and faster',
      'If the city invested|in safe cycle routes|traffic would decrease',
      'We would protect|independent journalism|if we formed the next government',
    ],
  },
];

export const mediaLiteracyActivities: Activity[] = [
  {
    type: 'multiple-choice',
    title: '5 · Pause before you share',
    body: 'Choose the strongest first response in each situation.',
    mcq: [
      { question: 'A dramatic clip has no source and makes you angry. What should you do first?', options: ['Pause and search for the original clip', 'Share it with a warning', 'Assume it is genuine if many people posted it'], answerIndex: 0 },
      { question: 'A chart begins its vertical scale at 98 rather than 0. What should you check?', options: ['Whether the scale exaggerates a small difference', 'Whether the colours are attractive', 'Whether the font is modern'], answerIndex: 0 },
      { question: 'A quotation appears in a campaign post. What is the best evidence?', options: ['The full speech or transcript', 'Another account repeating the same image', 'The number of likes'], answerIndex: 0 },
      { question: 'A story is factually accurate but five years old. Why might that matter?', options: ['It may be presented without its original context', 'Old facts are always false', 'Dates never matter in politics'], answerIndex: 0 },
      { question: 'Two reliable sources disagree. What should you do?', options: ['Compare their evidence and wait for further confirmation', 'Choose the one that matches your view', 'Conclude that all journalism is false'], answerIndex: 0 },
    ],
  },
  {
    type: 'task',
    title: '5b · Loaded or neutral?',
    body: 'Compare “Mayor finally forced to abandon disastrous tax grab” with “Mayor withdraws proposed local tax after council vote”. Identify the emotionally loaded words in the first headline. Then rewrite these headlines in neutral language.',
    bullets: [
      'Out-of-touch ministers unleash another attack on drivers',
      'Brave reformers smash the old political system',
      'Lazy voters refuse to protect democracy',
    ],
  },
  {
    type: 'notes',
    title: '5c · Source check',
    body: 'Choose a recent political claim from a public source. Do not record private information. Work through the checks before deciding how reliable it is.',
    fields: [
      { id: 'claim', label: 'What exactly is the claim?', placeholder: 'Write one checkable sentence…' },
      { id: 'origin', label: 'What is the earliest source you can find?', placeholder: 'Original speech, report, dataset or post…' },
      { id: 'evidence', label: 'What evidence supports or challenges it?', placeholder: 'Compare at least two reliable sources…' },
      { id: 'verdict', label: 'Your careful verdict', placeholder: 'Accurate, misleading, unsupported or still uncertain — explain why…' },
    ],
  },
];

export const finalTasks: Activity[] = [
  {
    type: 'task',
    title: '6 · Election-night roleplay',
    body: 'Work in groups of five. Choose a candidate, campaign manager, journalist, undecided voter and fact-checker. The journalist interviews the group after an unexpected exit poll. The fact-checker may pause the interview and ask for evidence. Change roles and repeat.',
    bullets: [
      'Candidate: defend two manifesto promises and respond to criticism.',
      'Campaign manager: explain which voters the campaign tried to persuade.',
      'Journalist: ask direct follow-up questions and request examples.',
      'Undecided voter: explain which issue will determine your vote.',
      'Fact-checker: identify one claim that needs evidence or context.',
    ],
  },
  {
    type: 'discussion',
    title: '6b · Debate',
    body: 'Choose one statement. Prepare two arguments for and two against before giving your own view.',
    bullets: [
      'Voting should be compulsory in national elections.',
      'The voting age should be lowered to 16.',
      'Political advertising on social media should be banned.',
      'Every major manifesto promise should include an independent cost estimate.',
    ],
  },
];

export const writingPrompt = {
  title: '6d · Writing: Should voting be compulsory?',
  brief: 'Write a balanced opinion essay of 180–220 words. Discuss the benefits and risks of compulsory voting, then give your own conclusion.',
  checklist: [
    'Introduce the issue without simply copying the question.',
    'Give at least one developed argument on each side.',
    'Use neutral language and support claims with reasons or examples.',
    'Use linking expressions to show contrast and consequence.',
    'State your own position clearly in the conclusion.',
  ],
  model: 'In many democracies, voting is a right rather than a legal duty. However, some countries require eligible citizens to take part in elections. Supporters argue that compulsory voting produces a government which represents the whole population more accurately. It may also encourage parties to speak to groups that they might otherwise ignore, including younger and lower-income voters. On the other hand, forcing people to vote does not guarantee an informed choice. A person who feels unrepresented may select a candidate at random or deliberately spoil the ballot. There is also a strong argument that freedom includes the freedom not to participate. In my view, governments should make voting easier before making it compulsory. Automatic registration, accessible polling stations and clear information would remove practical barriers without punishing people. If turnout remained extremely low after these reforms, a modest requirement to attend — with the option to choose “none of the above” — could be considered. Democracy is stronger when many citizens participate, but meaningful participation depends on trust, choice and reliable information, not simply on avoiding a fine.',
};