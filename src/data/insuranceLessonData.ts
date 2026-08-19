// Topics · Insurance (travel & health) — B2 lesson data
// Sources adapted into original tasks: insurance vocabulary worksheets (claim, premium,
// broker, excess…), a top-20 insurance word list (actuary, assessor, consequential loss…),
// "Insurance and risk management" reading, Business Spotlight "English on the Move"
// dialogues (A broken tooth / Lost baggage), a telephoning task for a life-insurance quote,
// an American healthcare presentation, a US-vs-UK/Canada healthcare fact sheet, a
// multiple-choice cloze on welfare in China, English Vocabulary in Use "Health and illness",
// an ESL health-literacy picture story, and the TED talk
// "The counterintuitive psychology of insurance" (Orit Tykocinski).

import type { Activity } from './engineeringData';
import type { FlashcardItem } from '@/components/presentations/Flashcards';
import footballerInjury from '@/assets/topics/insurance-footballer-injury.jpg';

/* ───────────────────────── 1 · Warm-up ───────────────────────── */

export const warmUp: Activity[] = [
  {
    type: 'intro',
    title: '1 · Warm-up discussion',
    body: 'Insurance is a way of paying a small, certain amount now so that you do not have to pay a large, uncertain amount later. Talk about these questions with a partner.',
    bullets: [
      'What kinds of insurance do you or your family have? Which ones are compulsory in your country?',
      'Have you ever bought travel insurance? What exactly did it cover?',
      'Have you (or someone you know) ever made a claim? What happened?',
      '"Insurance is money thrown away — you pay for years and get nothing back." Do you agree?',
      'Would you travel abroad without travel insurance? Where is the line between being careful and being paranoid?',
    ],
  },
];

export const riskRankingSituations: string[] = [
  'You break a tooth on the second day of a business trip abroad.',
  'The airline loses your suitcase and never finds it.',
  'You have to cancel a holiday two days before departure because a parent is ill.',
  'You need an ambulance and three days in hospital in the USA.',
  'Your laptop is stolen from a hotel room.',
  'Your flight is delayed by nine hours.',
];

export const warmUpAfterRanking: Activity[] = [
  {
    type: 'task',
    title: '1c · Insurance or not?',
    body: 'Decide in pairs: which of these are real insurance products, and which did we invent? (All but two exist.)',
    bullets: [
      'Insurance against your wedding being cancelled',
      'Insurance against a footballer’s legs being injured',
      'Insurance against bad weather on your holiday',
      'Insurance against your child failing a school exam',
      'Insurance against being abducted by aliens',
      'Insurance against a hole-in-one prize at a golf tournament',
    ],
    image: footballerInjury,
    imageAlt: 'A footballer lying on the pitch holding his leg after an injury while the team medic and two teammates look on',
    imageSize: 'sm',
  },
];



/* ───────────────────────── 2 · Vocabulary ───────────────────────── */

export const insuranceFlashcards: FlashcardItem[] = [
  { term: 'policy', definition: 'the contract between you and the insurance company', example: 'Read the policy carefully before you sign it.' },
  { term: 'premium', definition: 'the amount you pay (monthly or yearly) for the insurance', example: 'My annual premium went up by 15% after the accident.' },
  { term: 'policyholder', definition: 'the person whose name is on the policy', example: 'Only the policyholder can change the cover.' },
  { term: 'cover / coverage', definition: 'what the insurance protects you against', example: 'Does the cover include winter sports?' },
  { term: 'to take out a policy', definition: 'to buy insurance', example: 'We took out travel insurance the day we booked the flights.' },
  { term: 'to make / file a claim', definition: 'to ask the insurer to pay you after a loss', example: 'She made a claim for the stolen camera.' },
  { term: 'claim sth. back', definition: 'to ask for money you have already spent to be returned', example: 'Pay the dentist, then claim the money back from the insurance.' },
  { term: 'payout', definition: 'the money the insurer pays you', example: 'The payout barely covered the repairs.' },
  { term: 'excess / deductible (US)', definition: 'the first part of a claim that you must pay yourself', example: 'There is a £100 excess on every claim.' },
  { term: 'broker', definition: 'a person who finds and sells you a policy from different insurers', example: 'Our broker found us a cheaper deal.' },
  { term: 'quote', definition: 'a price the insurer offers you before you buy', example: 'I got three quotes online in ten minutes.' },
  { term: 'exclusion / small print', definition: 'what the policy does NOT cover', example: 'Extreme sports are a standard exclusion.' },
  { term: 'liability', definition: 'legal responsibility for damage or injury you cause to others', example: 'Third-party liability is included as standard.' },
  { term: 'third party', definition: 'someone else who is affected — not you and not the insurer', example: 'Third-party cover is the legal minimum for a car.' },
  { term: 'to be liable / at fault', definition: 'to be legally responsible', example: 'The other driver was liable for the damage.' },
  { term: 'assessor / loss adjuster', definition: 'the person who inspects the damage and decides the value', example: 'The assessor came to look at the flooded kitchen.' },
  { term: 'actuary', definition: 'a specialist who calculates risk and sets the price of policies', example: 'Actuaries use statistics to predict how often people claim.' },
  { term: 'underwrite', definition: '(of an insurer) to accept a risk and agree to insure it', example: 'No company would underwrite the trip to the war zone.' },
  { term: 'pre-existing condition', definition: 'an illness you already had before taking out the policy', example: 'They refused her because of a pre-existing condition.' },
  { term: 'consequential loss', definition: 'money lost as an indirect result of the damage', example: 'The fire closed the shop for a month — that is consequential loss.' },
  { term: 'repatriation', definition: 'being flown home for medical reasons', example: 'Good travel policies include emergency repatriation.' },
  { term: 'to renew a policy', definition: 'to continue the insurance for another period', example: 'They refused to renew my policy after two claims.' },
];

export const vocabGapFill: Activity[] = [
  {
    type: 'drag-fill',
    title: '2b · Taking out a policy',
    body: 'Drag the words into the gaps, or tap a word and then tap a gap.',
    blanks: [
      { prompt: 'Before you travel, you decide to ___ travel insurance.', answer: 'take out' },
      { prompt: 'You compare prices online and ask three insurers for a ___.', answer: 'quote' },
      { prompt: 'The amount you pay each year is called the ___.', answer: 'premium' },
      { prompt: 'The contract itself is the ___.', answer: 'policy' },
      { prompt: 'Always read the small print to see what the ___ are — extreme sports usually are not covered.', answer: 'exclusions' },
      { prompt: 'If your bag is stolen, you ring the insurer and ___ a claim.', answer: 'make' },
      { prompt: 'You have to pay the first £75 yourself; this is the ___.', answer: 'excess' },
      { prompt: 'Two weeks later the company transfers the money — the ___ is £430.', answer: 'payout' },
    ],
  },
  {
    type: 'matching',
    title: '2c · Insurance people and words',
    body: 'Match each word with its definition.',
    pairs: [
      { id: 1, left: 'broker', right: 'sells you policies from several different insurers' },
      { id: 2, left: 'actuary', right: 'calculates risk statistically and sets the premium' },
      { id: 3, left: 'assessor', right: 'inspects the damage and decides how much it is worth' },
      { id: 4, left: 'policyholder', right: 'the person insured by the contract' },
      { id: 5, left: 'underwriter', right: 'decides whether the company will accept the risk' },
      { id: 6, left: 'third party', right: 'a person other than you and your insurer who suffers loss' },
      { id: 7, left: 'liability', right: 'legal responsibility for harm caused to someone else' },
      { id: 8, left: 'consequential loss', right: 'indirect losses, such as business you cannot do after a fire' },
    ],
  },
  {
    type: 'multiple-choice',
    title: '2d · Which insurance?',
    body: 'Choose the type of insurance for each situation.',
    mcq: [
      { question: 'You crash into another car and damage it, but your own car is not covered.', options: ['comprehensive insurance', 'third-party insurance', 'life insurance', 'contents insurance'], answerIndex: 1 },
      { question: 'A pipe bursts and ruins your furniture and carpets.', options: ['home contents insurance', 'travel insurance', 'liability insurance', 'health insurance'], answerIndex: 0 },
      { question: 'You break your leg skiing in Austria and need to be flown home.', options: ['life insurance', 'motor insurance', 'travel insurance with repatriation', 'buildings insurance'], answerIndex: 2 },
      { question: 'You want your family to receive money if you die before you are 65.', options: ['life insurance', 'private health insurance', 'travel insurance', 'third-party insurance'], answerIndex: 0 },
      { question: 'You want to avoid the waiting lists and choose your own specialist.', options: ['national insurance', 'private health insurance', 'contents insurance', 'liability insurance'], answerIndex: 1 },
      { question: 'A customer slips on the wet floor of your shop and sues you.', options: ['public liability insurance', 'travel insurance', 'life insurance', 'motor insurance'], answerIndex: 0 },
    ],
  },
  {
    type: 'flashcards',
    title: '2e · Advanced insurance words',
    body: 'Higher-level terms from the world of insurance. Flip each card to check the meaning.',
    cards: [
      { term: 'actuary', definition: 'a specialist who calculates risk and sets the price of policies', example: 'Actuaries use statistics to predict how often people claim.' },
      { term: 'assessor', definition: 'the person who inspects the damage and decides the value of a claim', example: 'The assessor came to look at the flooded kitchen.' },
      { term: 'loss adjuster', definition: 'an insurance specialist who investigates large claims and negotiates the payout', example: 'The loss adjuster visited the factory after the fire.' },
      { term: 'underwriter', definition: 'the person or company that decides whether to accept a risk and insure it', example: 'No company would underwrite the trip to the war zone.' },
      { term: 'indemnity', definition: 'protection against loss or damage; compensation that puts you back in your original position', example: 'The policy offers indemnity for legal costs up to £1 million.' },
      { term: 'consequential loss', definition: 'money lost as an indirect result of damage or an accident', example: 'The fire closed the shop for a month — that is consequential loss.' },
      { term: 'no-claims bonus', definition: 'a discount on your premium for not making any claims over a period', example: 'After five years without a claim, my no-claims bonus is 50%.' },
      { term: 'act of God', definition: 'damage caused by natural forces that no one could prevent, such as floods or lightning', example: 'The insurer argued that the storm was an act of God.' },
      { term: 'renewal', definition: 'continuing an insurance policy for another period', example: 'They refused to renew my policy after two claims.' },
      { term: 'endorsement', definition: 'a written change or addition to an insurance policy', example: 'We added an endorsement to cover business equipment in the car.' },
      { term: 'sum insured', definition: 'the maximum amount the insurer will pay for a particular loss', example: 'Make sure the sum insured covers the full cost of rebuilding your house.' },
      { term: 'proposal form', definition: 'the document you complete when applying for insurance', example: 'Always answer every question on the proposal form honestly.' },
    ],
  },
  {
    type: 'matching',
    title: '2f · Advanced insurance words — quick check',
    body: 'Match each advanced term with the correct definition.',
    pairs: [
      { id: 16, left: 'actuary', right: 'calculates risk and sets the price of policies' },
      { id: 17, left: 'assessor', right: 'inspects the damage and decides the value of a claim' },
      { id: 18, left: 'loss adjuster', right: 'investigates large claims and negotiates the payout' },
      { id: 19, left: 'underwriter', right: 'decides whether to accept a risk and insure it' },
      { id: 20, left: 'indemnity', right: 'protection against loss; compensation that restores your position' },
      { id: 21, left: 'consequential loss', right: 'indirect money lost after damage or an accident' },
      { id: 22, left: 'no-claims bonus', right: 'premium discount for not claiming over a period' },
      { id: 23, left: 'act of God', right: 'damage from unpreventable natural forces' },
      { id: 24, left: 'renewal', right: 'continuing a policy for another period' },
      { id: 25, left: 'endorsement', right: 'a written change or addition to a policy' },
      { id: 26, left: 'sum insured', right: 'maximum amount the insurer will pay for a loss' },
      { id: 27, left: 'proposal form', right: 'document you complete when applying for insurance' },
    ],
  },
];


/* ───────────────── 3 · Health & illness language ───────────────── */

export const healthLanguage: Activity[] = [
  {
    type: 'reading',
    title: '3 · Talking about being ill',
    passage: [
      'When you telephone an insurer, a clinic or your employer, you need the everyday language of illness, not only medical terms.',
      'To fight off a cold means to try to get rid of it. To go down with flu or come down with a dreadful cold means to catch it. When you get over an illness you recover from it, and if it was serious you recover from it or are recovering from an operation.',
      'For long-term problems we say someone suffers from hay fever, diabetes or asthma. And note the preposition in He died of / from lung cancer — never "died with".',
      'Softer, everyday expressions are useful too: to feel a bit under the weather (slightly ill), to be poorly (quite ill), to be over the worst, to be on the mend and to be back on your feet again (fully recovered).',
    ],
  },
  {
    type: 'drag-fill',
    title: '3b · Illness expressions',
    body: 'Complete each mini-dialogue with the correct expression.',
    blanks: [
      { prompt: '"Jo, I won’t be in today — I’ve ___ a cold."', answer: 'come down with' },
      { prompt: '"I’m OK. I still feel bad, but I’m ___ now and should be out of hospital next week."', answer: 'over the worst' },
      { prompt: '"Don’t worry, darling. Everyone has a cold now and then. You’ll ___ it."', answer: 'get over' },
      { prompt: '"It’s nothing serious. I’m just feeling a bit ___, that’s all."', answer: 'under the weather' },
      { prompt: '"I’ve been trying to ___ this flu all week, but nothing helps."', answer: 'fight off' },
      { prompt: '"Hilary was quite ill last week, but she’s ___ now and back at work on Monday."', answer: 'on the mend' },
      { prompt: '"Hello Frank, good to see you ___ again!"', answer: 'back on your feet' },
      { prompt: '"My grandfather ___ lung cancer at the age of 71."', answer: 'died of' },
    ],
  },
  {
    type: 'matching',
    title: '3c · Health systems: UK vocabulary',
    body: 'Match the British healthcare terms with their meanings.',
    pairs: [
      { id: 9, left: 'National Health Service (NHS)', right: 'the state service covering hospitals, clinics and GPs' },
      { id: 10, left: 'national insurance', right: 'a tax taken from wages that helps pay for healthcare for everyone' },
      { id: 11, left: 'GP', right: 'general practitioner — the family doctor you see first' },
      { id: 12, left: 'surgery', right: 'a small centre with only two or three doctors' },
      { id: 13, left: 'clinic', right: 'a larger centre with several doctors and services' },
      { id: 14, left: 'prescription charge', right: 'the fee you pay at a pharmacy for prescribed medicine' },
      { id: 15, left: 'to go private', right: 'to pay for treatment outside the state system' },
    ],
  },
];

/* ───────────────────── 4 · Reading & listening ───────────────────── */

export const travelReading: Activity[] = [
  {
    type: 'reading',
    title: '4 · A dental emergency abroad',
    passage: [
      'Ingrid is in London on business when she loses a filling and breaks half a tooth at breakfast. She rings her colleague John.',
      '"I lost a filling and half a tooth during breakfast. Do you know where I can get some emergency dental treatment?" — "Oh, bad luck. It can’t wait until you get back home on Thursday?" — "No, it’s quite painful. And I’ve got that presentation tomorrow."',
      '"Leave it with me. You’ll probably have to go private and then claim back the money from the company’s travel insurance."',
      'At the surgery the receptionist asks Ingrid to fill out a form with her permanent address and basic medical background. "I don’t live in England, so I’ll be paying by credit card. Is that OK?" — "That’s perfectly OK. We run a 24-hour emergency service, so many of our patients are non-residents."',
      'The dentist finds that the broken tooth has exposed a nerve. As Ingrid can see her own dentist on Friday, he puts in a temporary filling and writes a prescription for stronger painkillers. "Just see the receptionist on the way out. She’ll take your payment and give you a full receipt for insurance purposes."',
    ],
  },
  {
    type: 'multiple-choice',
    title: '4b · Comprehension: a dental emergency',
    mcq: [
      { question: 'Why can’t Ingrid wait until Thursday?', options: ['She has no painkillers', 'It is painful and she has a presentation the next day', 'Her flight has been cancelled', 'Her insurance runs out on Wednesday'], answerIndex: 1 },
      { question: 'What does "go private" mean here?', options: ['See a doctor secretly', 'Pay for treatment yourself instead of using the state service', 'Travel privately', 'Use a company doctor'], answerIndex: 1 },
      { question: 'How will Ingrid get her money back?', options: ['The dentist bills her company directly', 'She will claim it back from the company travel insurance', 'The NHS will refund her', 'She will not get it back'], answerIndex: 1 },
      { question: 'What does the dentist do?', options: ['Removes the tooth', 'Puts in a permanent filling', 'Puts in a temporary filling and prescribes painkillers', 'Sends her to hospital'], answerIndex: 2 },
      { question: 'Why is the receipt so important?', options: ['To prove the anaesthetic was used', 'For tax reasons', 'Because the insurer needs proof of what she paid', 'Because she paid in cash'], answerIndex: 2 },
    ],
  },
  {
    type: 'reading',
    title: '5 · Lost baggage',
    passage: [
      'Harald lands after a flight from Berlin, but his bag never appears on the carousel. An official advises him: "Sometimes they come with some late offloads. If it doesn’t, I suggest you report it to the lost-baggage desk."',
      'At the desk the representative registers the loss, takes the baggage stub from the check-in, the flight number and Harald’s name, and asks him to identify a similar bag from a set of photographs. Harald is given a reference number: GV604/03/HW.',
      'The next day the bag has still not been found. "But what about compensation for my expenses?" — "Normally we don’t pay any compensation until the bag has been officially declared as lost." — "How long does that take?" — "Twenty-one days, sir. And we advise customers to check first whether their travel insurance will pay compensation. The insurer will then claim from us."',
      'Three weeks later the bag is officially declared lost. "We can provide you with an official document for your insurance company. I suggest you make a list of the contents and a rough estimate of their value."',
    ],
  },
  {
    type: 'multiple-choice',
    title: '5b · Comprehension: lost baggage',
    mcq: [
      { question: 'What is a "late offload"?', options: ['A delayed flight', 'Baggage taken off the plane after the rest', 'An extra charge', 'A lost passenger'], answerIndex: 1 },
      { question: 'What does Harald give the representative as proof?', options: ['His passport only', 'The baggage stub from check-in', 'A photograph of the bag', 'His boarding pass number only'], answerIndex: 1 },
      { question: 'When will the airline normally pay compensation?', options: ['Immediately', 'After 24 hours', 'Only after the bag is officially declared lost (21 days)', 'Never'], answerIndex: 2 },
      { question: 'What should Harald do first, according to the airline?', options: ['Take them to court', 'Check whether his travel insurance will pay', 'Buy a new bag and send the bill', 'Write to the airport'], answerIndex: 1 },
      { question: 'What must Harald prepare for the insurance claim?', options: ['A police report', 'A list of contents and an estimate of their value', 'A medical certificate', 'A new ticket'], answerIndex: 1 },
    ],
  },
  {
    type: 'word-list',
    title: '5c · Travel-insurance vocabulary',
    body: 'Words from the two situations above.',
    words: ['emergency treatment', 'to go private', 'to claim sth. back', 'receipt', 'prescription', 'temporary filling', 'baggage stub', 'carousel', 'late offload', 'lost-baggage desk', 'reference number', 'compensation', 'expenses', 'insurer'],
  },
];

/* ───────────────────── 6 · Health systems reading ───────────────────── */

export const healthSystems: Activity[] = [
  {
    type: 'reading',
    title: '6 · Who pays when you are ill?',
    passage: [
      'In Britain healthcare is paid for through taxes and national insurance payments taken directly from wages. Hospital treatment and visits to a GP are free at the point of use, although there is a prescription charge, and dentists and opticians charge fees. Private healthcare exists alongside the NHS for those who want to "go private".',
      'The United States is different: there is no national health service. Employers are not required to provide health insurance, and insurance does not automatically cover dental treatment, pregnancy or prescriptions. Emergency rooms, however, must treat anyone who arrives.',
      'Americans get cover in about five ways: Medicare for senior citizens, Medicaid for people in poverty, TRICARE and the VA for the military and veterans, employer-based insurance for most working people, and the individual market for the self-employed. Each has different billing methods, and for employees the cost is often "invisible" because the employer pays most of it.',
      'The numbers are large. An average family policy costs around $13,000 a year, an individual around $5,000, and dental cover is extra. Roughly one adult in six has no insurance at all. Before the Affordable Care Act, insurers in the individual market could refuse an applicant with a pre-existing condition, or decline to renew a policy. The ACA regulates that market, mandates cover and subsidises those who cannot pay.',
      'Comparisons are uncomfortable for the US: countries with universal systems, such as the UK and Canada, spend considerably less per person and record longer average life expectancy.',
    ],
  },
  {
    type: 'multiple-choice',
    title: '6b · Comprehension: health systems',
    mcq: [
      { question: 'How is British healthcare mainly funded?', options: ['Private premiums', 'Taxes and national insurance', 'Employers only', 'Charities'], answerIndex: 1 },
      { question: 'Which is NOT automatically covered by many US health policies?', options: ['Broken bones', 'Dental treatment', 'Emergency surgery', 'Doctor visits'], answerIndex: 1 },
      { question: 'Medicare is for…', options: ['people in poverty', 'senior citizens', 'veterans', 'the self-employed'], answerIndex: 1 },
      { question: 'Why is the cost of employer-based insurance often called "invisible"?', options: ['It is free', 'The employer pays most of it, so employees do not see the full price', 'It is illegal to publish it', 'Nobody uses it'], answerIndex: 1 },
      { question: 'What does the ACA prevent insurers from doing?', options: ['Charging premiums', 'Refusing people because of a pre-existing condition', 'Selling to employers', 'Offering dental cover'], answerIndex: 1 },
      { question: 'Compared with the UK and Canada, the USA…', options: ['spends less per person and lives longer', 'spends more per person with lower life expectancy', 'spends the same', 'has no private insurance'], answerIndex: 1 },
    ],
  },
  {
    type: 'reading',
    title: '7 · Insurance and risk management',
    passage: [
      'For a business, insurance is only one part of risk management. Managers first identify the risks they face, then decide whether to avoid them, reduce them, accept them or transfer them to an insurer.',
      'Risks are usually grouped as strategic (a competitor launches a better product), operational (a machine breaks down, a supplier fails) and financial (a customer does not pay, exchange rates move).',
      'Business insurance is often divided into property insurance, which covers the buildings, stock and equipment you own, and liability insurance, which covers the harm you cause to other people — an injured customer, a faulty product, professional advice that turns out to be wrong.',
      'Two ideas matter in every claim. Indemnity means putting the policyholder back in the position they were in before the loss — no better. Consequential loss is the indirect damage: a restaurant destroyed by fire loses not only the building but three months of trade.',
    ],
  },
  {
    type: 'matching',
    title: '7b · Types of business risk',
    body: 'Match each example with the type of risk.',
    pairs: [
      { id: 16, left: 'A competitor launches a cheaper product', right: 'strategic risk' },
      { id: 17, left: 'The main production line breaks down for a week', right: 'operational risk' },
      { id: 18, left: 'A large customer goes bankrupt without paying', right: 'financial risk' },
      { id: 19, left: 'A visitor is injured in your warehouse', right: 'liability risk' },
      { id: 20, left: 'A storm damages the roof of the factory', right: 'property risk' },
      { id: 21, left: 'Sales lost while the factory is rebuilt', right: 'consequential loss' },
    ],
  },
];

/* ───────────────────── 8 · Video ───────────────────── */

export const videoPreTeach: Activity[] = [
  {
    type: 'task',
    title: '8b · Before you watch',
    body: 'Discuss: would you rather have a 1% chance of losing €10,000, or pay €150 now to remove that risk completely? Why do people so often choose differently from what the maths suggests?',
    bullets: [
      'peace of mind — the feeling of safety you pay for',
      'to hedge against something — to protect yourself from a possible loss',
      'irrational — not based on logic',
      'to overestimate a risk — to think it is more likely than it really is',
      'regret — the bad feeling that you should have acted differently',
    ],
  },
];

export const videoActivities: Activity[] = [
  {
    type: 'multiple-choice',
    title: '8c · While you watch',
    body: 'Answer as you watch the talk. Compare your answers with a partner afterwards.',
    mcq: [
      { question: 'According to the talk, buying insurance is largely a decision about…', options: ['mathematics only', 'emotion as well as probability', 'government policy', 'company profits'], answerIndex: 1 },
      { question: 'People tend to insure most readily against events that are…', options: ['statistically most likely', 'vivid, frightening and easy to imagine', 'cheapest to insure', 'covered by the state'], answerIndex: 1 },
      { question: 'What does "peace of mind" mean in this context?', options: ['A cheaper premium', 'The comfort of not having to worry about the loss', 'A silent office', 'A legal requirement'], answerIndex: 1 },
      { question: 'A "counterintuitive" finding is one that…', options: ['confirms what you expected', 'goes against what you would expect', 'cannot be measured', 'applies only to insurers'], answerIndex: 1 },
    ],
  },
  {
    type: 'notes',
    title: '8d · After you watch',
    body: 'Write your own answers. Your notes are saved in this browser.',
    fields: [
      { id: 'f1', label: 'One idea from the talk that surprised you', placeholder: 'I was surprised that…' },
      { id: 'f2', label: 'A time when you (or someone you know) paid for insurance mainly for peace of mind', placeholder: 'When we…' },
      { id: 'f3', label: 'Is it rational to insure a mobile phone? Argue for or against.', placeholder: 'In my opinion…' },
    ],
  },
];

/* ───────────────────── 9 · Speaking & writing ───────────────────── */

export const finalTasks: Activity[] = [
  {
    type: 'task',
    title: '9 · Roleplay A: the emergency call',
    body: 'Student A is a traveller abroad; Student B works at the 24-hour assistance line of the insurer.',
    bullets: [
      'A: explain the problem (broken tooth / stolen laptop / lost suitcase / hospital admission) and give your policy number.',
      'B: ask for the details — what happened, when, where, what it will cost, is there a police report or receipt?',
      'B: explain the excess, what is covered and what the traveller must send you.',
      'A: ask what you should pay now and how you claim the money back.',
      'Then swap roles and use a different problem.',
    ],
  },
  {
    type: 'task',
    title: '9b · Roleplay B: getting a quote by phone',
    body: 'Student A is a broker taking details for a life or travel insurance quote; Student B is the customer. Useful language: "Could I take your full name, please?" · "How do you spell that?" · "Could you repeat that?" · "Let me just read that back to you."',
    bullets: [
      'Full name, date of birth, address and postcode',
      'Occupation and whether it involves any risk',
      'Destination, dates and length of the trip',
      'Any pre-existing medical conditions',
      'Sports or activities planned (skiing, diving, motorcycling)',
      'Finish by summarising the details and giving a price and a reference number.',
    ],
  },
  {
    type: 'task',
    title: '9c · Discussion: the ethics of insurance',
    bullets: [
      'Should insurers be allowed to charge more because of your age, your job or your medical history?',
      'Should health insurance be compulsory, as car insurance is?',
      '"A man ignores his pain for six months because he has no insurance, then arrives at hospital by ambulance." Whose responsibility is that situation?',
      'Would you pay a higher premium so that people who are already ill can be covered?',
      'Is it ever acceptable to exaggerate a claim? Where is the line between exaggerating and fraud?',
    ],
  },
];

export const writingPrompt = {
  title: '10 · Writing: an opinion essay',
  brief:
    '"The government should provide free health care for all citizens." Write an essay of 180–220 words giving your opinion. Introduce the topic, give two arguments with examples, acknowledge one counter-argument, and finish with a clear conclusion.',
  checklist: [
    'Use linking words: firstly, moreover, on the other hand, admittedly, in conclusion.',
    'Include at least six words from the vocabulary section (premium, cover, liability, pre-existing condition…).',
    'Support each argument with a concrete example or figure.',
    'Keep a formal register — no contractions, no "you".',
  ],
  model:
    'Few questions divide opinion as sharply as who should pay when we fall ill. In my view, a state-funded system, financed through taxation and national insurance, remains the fairest solution. Firstly, health is not an ordinary product. A person who develops a serious illness has not made a bad purchase; they have simply been unlucky, and in a purely private market that bad luck is punished twice, because insurers raise premiums or refuse cover for pre-existing conditions altogether. Secondly, universal systems are demonstrably efficient: countries such as the United Kingdom and Canada spend considerably less per person than the United States while recording longer average life expectancy, largely because prevention is cheaper than emergency treatment. Admittedly, free healthcare is not truly free. Waiting lists are long, budgets are always disputed, and taxpayers who never visit a hospital may feel they are paying for others. Yet this is precisely how insurance works: the many pay a small amount so that the few do not face ruin. In conclusion, while private cover should remain available to those who want faster access, a basic level of state healthcare should be guaranteed to everyone, because a society is judged by what happens to its least fortunate members.',
};
