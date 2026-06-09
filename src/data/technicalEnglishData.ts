// Technical English: Vocabulary and Grammar (Nick Brieger, Alison Pohl)
// 50 topics: 30 vocabulary + 20 grammar. Each topic is a single page that
// embeds A/B/C theory + the tasks-page exercises with an answer key.
//
// Topics 1–3 are fully built. Topics 4–50 are scaffolded as "coming soon"
// and will be filled in follow-up turns.

import type { Activity } from './engineeringData';
export type { Activity };

export interface TechnicalTopic {
  id: string;          // url slug
  number: number;      // 1..50
  title: string;
  subtitle?: string;
  group: 'professional' | 'company' | 'grammar';
  activities: Activity[];   // empty = "coming soon"
}

const todo = (): Activity[] => [];

export const technicalTopics: TechnicalTopic[] = [
  // ───────────────────── PROFESSIONAL ACTIVITIES (1-9) ─────────────────────
  {
    id: 'production-1', number: 1, title: 'Production 1', group: 'professional',
    subtitle: 'Production management, processes, resources and maintenance',
    activities: [
      { type: 'reading', title: 'A · Presentation', passage: [
        'Production management is concerned with planning and controlling industrial processes which produce and distribute products and services. Techniques of production management are also used in service industries; here they are called operations management.',
        'During production processes, inputs are converted into outputs. These processes take many forms: from basic agriculture to large-scale manufacturing. Much manufacturing takes place in factories, where assembly lines allow a steady flow of raw materials (inputs) and finished products (outputs).',
        'People in production focus on efficiency and effectiveness of processes in order to maximize productivity. To achieve overall success, it is important to measure, analyse and evaluate these processes. However, other activities also contribute to success: purchasing, inventory control, quality control, storage, logistics.',
      ]},
      { type: 'matching', title: 'B1 · Match the process word with its definition', body: 'Click a word, then click its definition. Use the lightbulb for a hint.', pairs: [
        { id: 1, left: 'assemble',      right: 'to put parts together to make a finished product', hint: 'Think of a car factory worker fitting components together.' },
        { id: 2, left: 'batch',         right: 'a quantity of goods produced together at one time', hint: 'A bakery makes one of these of bread at a time.' },
        { id: 3, left: 'component',     right: 'a part used in a larger product', hint: 'A single screw, chip or gear inside a machine.' },
        { id: 4, left: 'convert',       right: 'to change something from one form into another', hint: 'Inputs are ___ed into outputs.' },
        { id: 5, left: 'effectiveness', right: 'the degree to which a process achieves its intended result', hint: 'Did it actually do the job? (not how cheaply)' },
        { id: 6, left: 'efficiency',    right: 'producing results with the least waste of time, effort or materials', hint: 'Doing more with less.' },
        { id: 7, left: 'line',          right: 'a sequence of workstations along which a product moves during assembly', hint: 'Henry Ford famously introduced the assembly ___.' },
        { id: 8, left: 'lot',           right: 'a group of items manufactured or handled as a single unit', hint: 'Similar to "batch"; often printed on a product label.' },
        { id: 9, left: 'maximize',      right: 'to make something as large or great as possible', hint: 'The opposite of minimize.' },
        { id: 10, left: 'optimize',     right: 'to make a process as good or effective as possible', hint: 'Fine-tuning for the best possible result.' },
      ]},
      { type: 'matching', title: 'B2 · Match the resource word with its definition', body: 'Click a word, then click its definition. Use the lightbulb for a hint.', pairs: [
        { id: 1, left: 'equipment',         right: 'the tools and devices needed for a particular activity', hint: 'Uncountable noun — general tools for a task.' },
        { id: 2, left: 'fixtures',          right: 'items fixed in position, such as fittings inside a building', hint: 'Often paired with "fittings"; they stay when you move.' },
        { id: 3, left: 'machinery',         right: 'machines used in a factory, considered collectively', hint: 'Uncountable — all the machines together.' },
        { id: 4, left: 'materials handling',right: 'the movement, storage and control of materials within production', hint: 'Forklifts, conveyors and warehousing fall under this.' },
        { id: 5, left: 'raw materials',     right: 'the basic substances used to make a finished product', hint: 'Crude oil, iron ore, cotton — before processing.' },
      ]},
      { type: 'matching', title: 'B3 · Match the stock & maintenance word with its definition', body: 'Click a word, then click its definition. Use the lightbulb for a hint.', pairs: [
        { id: 1, left: 'inventory',  right: 'a complete list of goods or materials held by a company', hint: 'A detailed list — also the act of counting stock.' },
        { id: 2, left: 'stock',      right: 'goods kept available for sale or use', hint: '"In ___" / "out of ___" on a shop sign.' },
        { id: 3, left: 'store',      right: 'a place where goods or materials are kept', hint: 'A storeroom or warehouse area.' },
        { id: 4, left: 'breakdown',  right: 'a sudden stoppage caused by a machine no longer working', hint: 'Your car suffers one of these by the roadside.' },
        { id: 5, left: 'failure',    right: 'the fact of a piece of equipment ceasing to function', hint: 'More formal/general than breakdown — e.g. "engine ___".' },
        { id: 6, left: 'fault',      right: 'a defect that prevents something from working correctly', hint: 'A specific defect — engineers run ___-finding tests.' },
        { id: 7, left: 'maintain',   right: 'to keep equipment in good working condition', hint: 'Regular servicing to prevent problems.' },
        { id: 8, left: 'repair',     right: 'to fix something that is damaged or broken', hint: 'You do this after something has already broken.' },
      ]},

      { type: 'matching', title: '1 · Match the words that go together', body: 'Pair each word on the left with the noun on the right to form a common collocation.', pairs: [
        { id: 1, left: 'quality',        right: 'control' },
        { id: 2, left: 'finished',       right: 'products' },
        { id: 3, left: 'industrial',     right: 'process' },
        { id: 4, left: 'production',     right: 'manager' },
        { id: 5, left: 'large-scale',    right: 'manufacturing' },
        { id: 6, left: 'assembly',       right: 'lines' },
        { id: 7, left: 'raw',            right: 'material' },
        { id: 8, left: 'productivity',   right: 'levels' },
      ]},
      { type: 'fill-blanks', title: '1b · Complete the sentences using the collocations above', blanks: [
        { prompt: '1. Improved ___ has led to higher efficiency in production.', answer: 'quality control' },
        { prompt: '2. The manufacture of paper is an ___.', answer: 'industrial process' },
        { prompt: '3. Crude oil is the basic ___ for the plastics industry.', answer: 'raw material' },
        { prompt: '4. Increased ___ have reduced the number of manufacturing workers.', answer: 'productivity levels' },
        { prompt: '5. The large warehouse is used to store ___ waiting for delivery.', answer: 'finished products' },
        { prompt: '6. Large car manufacturers use ___ in production.', answer: 'assembly lines' },
        { prompt: '7. The company began in a single room but has now developed into ___.', answer: 'large-scale manufacturing' },
        { prompt: '8. The manufacturing process is the responsibility of the ___.', answer: 'production manager' },
      ]},
      { type: 'fill-blanks', title: '2 · Complete the sentences (first letter given)', blanks: [
        { prompt: '1. A quantity of goods prepared at the same time is known as a b___.', answer: 'batch' },
        { prompt: '2. To put parts together to produce the final product is to a___.', answer: 'assemble' },
        { prompt: '3. Production processes convert inputs to o___.', answer: 'outputs' },
        { prompt: '4. The process of buying inputs is known as p___.', answer: 'purchasing' },
        { prompt: '5. A part which is used in the final product is called a c___.', answer: 'component' },
        { prompt: '6. To get the best possible level of production is to o___.', answer: 'optimize' },
      ]},
      { type: 'fill-blanks', title: '3 · Memo from the company director — complete with words from the box',
        body: 'Box: faulty · equipment · repair · site · workshops · factory · stock · breakdowns · layout · maintain · fixtures · machinery',
        blanks: [
          { prompt: '(a) new ___ development', answer: 'factory' },
          { prompt: '(b) a new ___ close to the river', answer: 'site' },
          { prompt: '(c) working on the ___ of the area', answer: 'layout' },
          { prompt: '(d) ___ and fittings by Alan Shores Ltd', answer: 'fixtures' },
          { prompt: '(e) the new manufacturing ___ has been ordered', answer: 'equipment' },
          { prompt: '(f) new ___ will be purchased', answer: 'machinery' },
          { prompt: '(g) for the engineering ___', answer: 'workshops' },
          { prompt: '(h) several ___ recently have caused production backlogs', answer: 'breakdowns' },
          { prompt: '(i) we will continue to ___ these machines', answer: 'maintain' },
          { prompt: '(j) and ___ them until the new ones are running', answer: 'repair' },
          { prompt: '(k) carry out a full ___ inventory', answer: 'stock' },
          { prompt: '(l) any ___ goods should be removed from store', answer: 'faulty' },
        ]},
    ],
  },
  {
    id: 'production-2', number: 2, title: 'Production 2', group: 'professional',
    subtitle: 'Planning, scheduling, workforce organisation and market needs',
    activities: [
      { type: 'reading', title: 'A · Presentation', passage: [
        'A production planning system is essential to ensure that a company\'s processes, machinery, equipment, labour skills and material are organized efficiently for better profitability. There are many factors that need to be considered in the planning system. For example, a firm may require a large number of different components. Also demand can vary daily in this ever-changing world.',
        'New sales orders come in. Some get cancelled; there may be breakdowns in the workshop; backlogs build up; there may be late or early delivery from suppliers. It is difficult to keep track of all these changes manually. To handle these situations, many companies keep safety stock. However, if a company has an effective production planning system there is no need to keep high safety stock. The money blocked in the excessive safety stock can be released. At the same time, opportunity costs due to stock-outs can be minimized.',
      ]},
      { type: 'word-list', title: 'B · Planning vocabulary', words: [
        'aggregate','backlog','back order','bottleneck','capacity','cycle','downtime','flow','forecast','idle','lead time','make-to-order','make-to-stock','optimization','output','productivity','prototype','requirement','run','satisfy','schedule','sequence','set up','set-up time','slack','throughput','uncertainty','update','work in progress',
      ]},
      { type: 'word-list', title: 'B · Work organization', words: ['lot','overtime','shift','workforce','workload'] },
      { type: 'multiple-choice', title: '1 · Choose the correct answer', mcq: [
        { question: 'Recent faults with machines have cost the company a great deal of ___.', options: ['maintenance','slack time','downtime'], answerIndex: 2 },
        { question: 'Once the mock-up of the new design has been tested, we can build the ___.', options: ['prototype','update','set up'], answerIndex: 0 },
        { question: 'It\'s unprofitable to manufacture small quantities because of the machine ___.', options: ['lead time','set-up time','sequence'], answerIndex: 1 },
        { question: 'The production manager has to produce a production ___ for the next four weeks.', options: ['set up','schedule','output'], answerIndex: 1 },
        { question: 'Once the order has been agreed and production begun, the designer is still responsible for the ___.', options: ['work in progress','workload','back order'], answerIndex: 0 },
        { question: 'These items are produced together as one ___.', options: ['cycle','delivery','lot'], answerIndex: 2 },
      ]},
      { type: 'matching', title: '2 · Match the word with its definition', pairs: [
        { id: 1, left: 'workload',      right: 'the amount of work that has to be done' },
        { id: 2, left: 'workforce',     right: 'all the people who work in a particular company' },
        { id: 3, left: 'back order',    right: 'an order from an earlier time which hasn\'t been produced yet' },
        { id: 4, left: 'material flow', right: 'the movement of materials through a production system' },
        { id: 5, left: 'throughput',    right: 'the volume of goods that can be dealt with in a certain period' },
        { id: 6, left: 'output',        right: 'the volume of goods which are produced' },
        { id: 7, left: 'cycle',         right: 'the series of activities following one another to produce a product' },
        { id: 8, left: 'requirement',   right: 'something that is needed for a particular process' },
      ]},
      { type: 'fill-blanks', title: '3 · Factory tour dialogue — complete with the jumbled words', blanks: [
        { prompt: '(a) the ___ (manedd) for furniture is seasonal', answer: 'demand' },
        { prompt: '(b) do you ___ (kaem-ot-osckt)?', answer: 'make-to-stock' },
        { prompt: '(c) all our units are made-___ (ot-reord)', answer: 'to-order' },
        { prompt: '(d) there is always a great deal of ___ (cerunintyta)', answer: 'uncertainty' },
        { prompt: '(e) it\'s difficult to ___ (recatfos) sales trends', answer: 'forecast' },
        { prompt: '(f) so does the ___ (adel mite) vary?', answer: 'lead time' },
        { prompt: '(g) our ___ (adel mite) is usually 8 to 10 weeks', answer: 'lead time' },
        { prompt: '(h) the workforce usually do ___ (mitevero)', answer: 'overtime' },
        { prompt: '(i) to avoid a ___ (lockbag) of orders', answer: 'backlog' },
        { prompt: '(j) we introduce a ___ (fisht) system', answer: 'shift' },
        { prompt: '(k) to avoid ___ (beckslotten) at key machines', answer: 'bottlenecks' },
        { prompt: '(l) during a busy period do you have ___ (toskc-tous)?', answer: 'stock-outs' },
        { prompt: '(m) we use the time when work is ___ (lacks)', answer: 'slack' },
        { prompt: '(n) we don\'t like machines or workers to be ___ (lide)!', answer: 'idle' },
      ]},
    ],
  },
  {
    id: 'research-and-development-1', number: 3, title: 'Research and development 1', group: 'professional',
    subtitle: 'Types of research, research professionals and key R&D terms',
    activities: [
      { type: 'reading', title: 'A · Presentation', passage: [
        'Research and development (R and D) is the search for new and improved products and industrial processes. Both industrial firms and governments carry out R and D. Innovations in products or processes normally follow a path from laboratory (lab) idea, through pilot or prototype production and manufacturing start-up, to full-scale production and market introduction.',
        'There are two main types of research. Pure or basic research aims to clarify scientific principles without a specific end product in view; applied research uses the findings of pure research in order to achieve a particular commercial objective. Development describes the improvement of a product or process by scientists in conjunction with engineers. Industry spends vast sums to develop new products and the means to produce them cheaply, efficiently, and safely.',
      ]},
      { type: 'word-list', title: 'B · Types of research', words: [
        'academic research','applied research','clinical research','development and evaluation research','experimental development','experimentation','innovation','practical application','product development','pure basic research','pure research','strategic basic research',
      ]},
      { type: 'word-list', title: 'B · Research professionals', words: [
        'analyst','engineer','lab technician','research assistant','scientist','technician',
      ]},
      { type: 'word-list', title: 'B · General terms', words: [
        'breakthrough','carry out','feasible','feasibility','me-too product','patent','file a patent','pipeline','pilot','prototype','register a patent','technical know-how (TKH)',
      ]},
      { type: 'matching', title: '1 · Match the term with the correct definition', pairs: [
        { id: 1, left: 'applied research',    right: 'looking at how scientific theory can be used in practice' },
        { id: 2, left: 'clinical research',   right: 'looking at the effects of drugs or treatment on patients' },
        { id: 3, left: 'pilot study',         right: 'small-scale experiment' },
        { id: 4, left: 'experimentation',     right: 'the process of tests and trials to see what happens under different conditions' },
        { id: 5, left: 'pure basic research', right: 'the study of pure scientific principles' },
        { id: 6, left: 'product development', right: 'changing and improving a product to achieve the best possible result' },
        { id: 7, left: 'innovation',          right: 'a new technique or idea' },
        { id: 8, left: 'analysis',            right: 'the study of the parts and their relationship to one another' },
      ]},
      { type: 'fill-blanks', title: '2 · Word formation — use the word in brackets', blanks: [
        { prompt: '1. The scientists have presented a detailed ___ of the results. (analyse)', answer: 'analysis' },
        { prompt: '2. They have brought in a food ___ to help in the research. (analyse)', answer: 'analyst' },
        { prompt: '3. All process materials are tested using highly developed ___ techniques. (analyse)', answer: 'analytical' },
        { prompt: '4. The researchers have come up with an ___ idea for the use of recycled plastics. (innovate)', answer: 'innovative' },
        { prompt: '5. Charles Dyson is the ___ of a vacuum cleaner which works on a new principle. (invent)', answer: 'inventor' },
        { prompt: '6. The advent of the ballpoint pen was a wonderful ___. (invent)', answer: 'invention' },
        { prompt: '7. They employ a large team of software ___. (develop)', answer: 'developers' },
        { prompt: '8. A report has been prepared on the ___ tests that have been carried out. (develop)', answer: 'developmental' },
        { prompt: '9. Increasing numbers of people can now work from home thanks to ___ in telecommunications. (develop)', answer: 'developments' },
        { prompt: '10. These methods of production are still at an ___ stage. (experiment)', answer: 'experimental' },
        { prompt: '11. The ___ is continuing work on the new drug. (experiment)', answer: 'experimenter' },
        { prompt: '12. Many people are against animal ___. (experiment)', answer: 'experimentation' },
      ]},
      { type: 'fill-blanks', title: '3 · Email to R&D — complete with words from the list',
        body: 'List: breakthrough · prototype · developmental · engineers · design · patent · innovative · experiment',
        blanks: [
          { prompt: '(a) regarding her ___ for a new children\'s pushchair', answer: 'design' },
          { prompt: '(b) a simple but ___ invention', answer: 'innovative' },
          { prompt: '(c) she has already registered a ___', answer: 'patent' },
          { prompt: '(d) I\'d like us to develop a ___', answer: 'prototype' },
          { prompt: '(e) arrange a meeting with the ___', answer: 'engineers' },
          { prompt: '(f) we will have to carry out ___ tests', answer: 'developmental' },
          { prompt: '(g) and ___ with different weight loads', answer: 'experiment' },
          { prompt: '(h) this could be a real ___ in pushchair design!', answer: 'breakthrough' },
        ]},
    ],
  },
  { id: 'research-and-development-2', number: 4, title: 'Research and development 2', group: 'professional', activities: todo() },
  { id: 'information-technology-1',   number: 5, title: 'Information technology 1', group: 'professional', activities: todo() },
  { id: 'information-technology-2',   number: 6, title: 'Information technology 2', group: 'professional', activities: todo() },
  { id: 'logistics',                  number: 7, title: 'Logistics',                group: 'professional', activities: todo() },
  { id: 'quality',                    number: 8, title: 'Quality',                  group: 'professional', activities: todo() },
  { id: 'health-and-safety',          number: 9, title: 'Health and safety',        group: 'professional', activities: todo() },

  // ───────────────────── COMPANY PROFILES (10-30) ─────────────────────
  { id: 'engineering',         number: 10, title: 'Engineering',         group: 'company', activities: todo() },
  { id: 'automotive',          number: 11, title: 'Automotive',          group: 'company', activities: todo() },
  { id: 'chemical',            number: 12, title: 'Chemical',            group: 'company', activities: todo() },
  { id: 'pharmaceutical-1',    number: 13, title: 'Pharmaceutical 1',    group: 'company', activities: todo() },
  { id: 'pharmaceutical-2',    number: 14, title: 'Pharmaceutical 2',    group: 'company', activities: todo() },
  { id: 'construction',        number: 15, title: 'Construction',        group: 'company', activities: todo() },
  { id: 'electrical',          number: 16, title: 'Electrical',          group: 'company', activities: todo() },
  { id: 'electronics-1',       number: 17, title: 'Electronics 1',       group: 'company', activities: todo() },
  { id: 'electronics-2',       number: 18, title: 'Electronics 2',       group: 'company', activities: todo() },
  { id: 'energy',              number: 19, title: 'Energy',              group: 'company', activities: todo() },
  { id: 'civil-engineering-1', number: 20, title: 'Civil engineering 1', group: 'company', activities: todo() },
  { id: 'civil-engineering-2', number: 21, title: 'Civil engineering 2', group: 'company', activities: todo() },
  { id: 'mining',              number: 22, title: 'Mining',              group: 'company', activities: todo() },
  { id: 'petroleum-1',         number: 23, title: 'Petroleum 1',         group: 'company', activities: todo() },
  { id: 'petroleum-2',         number: 24, title: 'Petroleum 2',         group: 'company', activities: todo() },
  { id: 'plastics',            number: 25, title: 'Plastics',            group: 'company', activities: todo() },
  { id: 'agroindustry',        number: 26, title: 'Agroindustry',        group: 'company', activities: todo() },
  { id: 'pulp-and-paper',      number: 27, title: 'Pulp and paper',      group: 'company', activities: todo() },
  { id: 'telecoms-1',          number: 28, title: 'Telecoms 1',          group: 'company', activities: todo() },
  { id: 'telecoms-2',          number: 29, title: 'Telecoms 2',          group: 'company', activities: todo() },
  { id: 'textiles',            number: 30, title: 'Textiles',            group: 'company', activities: todo() },

  // ───────────────────── GRAMMAR USES (31-50) ─────────────────────
  { id: 'present-tenses',                         number: 31, title: 'Present tenses', subtitle: 'simple · continuous · perfect', group: 'grammar', activities: todo() },
  { id: 'past-tenses',                            number: 32, title: 'Past tenses',    subtitle: 'simple · continuous · perfect', group: 'grammar', activities: todo() },
  { id: 'future-forms',                           number: 33, title: 'Future forms',                                group: 'grammar', activities: todo() },
  { id: 'conditionals',                           number: 34, title: 'Conditionals',                                group: 'grammar', activities: todo() },
  { id: 'verb-phrases',                           number: 35, title: 'Verb phrases',                                group: 'grammar', activities: todo() },
  { id: 'active-vs-passive',                      number: 36, title: 'Active vs passive',                           group: 'grammar', activities: todo() },
  { id: 'causation',                              number: 37, title: 'Causation',                                   group: 'grammar', activities: todo() },
  { id: 'obligation-and-requirements',            number: 38, title: 'Obligation and requirements',                 group: 'grammar', activities: todo() },
  { id: 'cause-and-effect',                       number: 39, title: 'Cause and effect',                            group: 'grammar', activities: todo() },
  { id: 'ability-and-inability',                  number: 40, title: 'Ability and inability',                       group: 'grammar', activities: todo() },
  { id: 'scale-of-likelihood',                    number: 41, title: 'Scale of likelihood',                         group: 'grammar', activities: todo() },
  { id: 'relative-clauses',                       number: 42, title: 'Relative clauses',                            group: 'grammar', activities: todo() },
  { id: 'subordinate-clauses-of-result-purpose',  number: 43, title: 'Subordinate clauses of result and purpose',   group: 'grammar', activities: todo() },
  { id: 'countable-and-uncountable-nouns',        number: 44, title: 'Countable and uncountable nouns',             group: 'grammar', activities: todo() },
  { id: 'comparison-of-adjectives',               number: 45, title: 'Comparison of adjectives',                    group: 'grammar', activities: todo() },
  { id: 'adjectives-and-adverbs',                 number: 46, title: 'Adjectives and adverbs',                      group: 'grammar', activities: todo() },
  { id: 'prepositions-of-time',                   number: 47, title: 'Prepositions of time',                        group: 'grammar', activities: todo() },
  { id: 'prepositions-of-place',                  number: 48, title: 'Prepositions of place',                       group: 'grammar', activities: todo() },
  { id: 'quantifiers',                            number: 49, title: 'Quantifiers',                                 group: 'grammar', activities: todo() },
  { id: 'contrasting-ideas',                      number: 50, title: 'Contrasting ideas',                           group: 'grammar', activities: todo() },
];

export const groupLabels: Record<TechnicalTopic['group'], string> = {
  professional: 'Professional Activities',
  company: 'Company Profiles',
  grammar: 'Grammar Uses',
};
