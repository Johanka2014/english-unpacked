// Cambridge English for Engineering — course data
// Source: Cambridge English for Engineering Student's Book (Mark Ibbotson).
// Each unit has 4 sub-sections that mirror the SB headings.
// Audio tracks reference book numbering (e.g. 1.1, 1.2). MP3 files will be wired up later.

export type ActivityType =
  | 'intro'
  | 'discussion'
  | 'audio'
  | 'reading'
  | 'matching'
  | 'multiple-choice'
  | 'fill-blanks'
  | 'type-blanks'
  | 'drag-fill'
  | 'word-list'
  | 'task';

export interface MatchingPair { id: number; left: string; right: string; hint?: string }
export interface MCQItem { question: string; options: string[]; answerIndex: number }
export interface FillBlanksItem { prompt: string; answer: string }

export interface Activity {
  type: ActivityType;
  title?: string;
  body?: string;            // paragraph / instructions
  bullets?: string[];       // discussion prompts, list items
  track?: string;           // audio reference, e.g. "1.1"
  passage?: string[];       // reading passage paragraphs
  pairs?: MatchingPair[];
  mcq?: MCQItem[];
  blanks?: FillBlanksItem[];
  words?: string[];         // key vocabulary list
}

export interface EngineeringSection {
  id: string;
  title: string;
  description: string;
  type: 'functions' | 'listening' | 'reading' | 'vocabulary' | 'speaking' | 'language';
  hasAudio?: boolean;
  activities: Activity[];
}

export interface EngineeringUnit {
  id: string;
  number: number;
  title: string;
  subtitle: string;
  sections: EngineeringSection[];
}

const u = (
  number: number,
  id: string,
  title: string,
  subtitle: string,
  sections: EngineeringSection[]
): EngineeringUnit => ({ id, number, title, subtitle, sections });

export const engineeringUnits: EngineeringUnit[] = [
  u(1, 'technology-in-use', 'Technology in use',
    'Describing technical functions, how technology works, advantages and simplifying explanations',
    [
      {
        id: 'describing-functions',
        title: 'Describing technical functions and applications',
        description: 'Words stemming from use (allow, enable, permit, ensure, prevent) and GPS applications',
        type: 'functions',
        hasAudio: true,
        activities: [
          { type: 'discussion', title: '1 · Warm-up discussion', bullets: [
            'In pairs, think about two or three products you use regularly. What are their main functions? (What do they do?)',
            'What are their different applications? (What are they used for?)',
            'What do you know about GPS devices? Describe their main function and give examples of different applications.',
          ]},
          { type: 'audio', track: '1.1', title: 'Paula and José discuss GPS product development' },
          { type: 'fill-blanks', title: '2a · Complete the notes from the discussion', blanks: [
            { prompt: 'the primary application of GPS', answer: 'navigation' },
            { prompt: 'associated tracking systems (1)', answer: 'delivery vehicles' },
            { prompt: 'associated tracking systems (2)', answer: 'people / animals' },
            { prompt: 'more creative features (1)', answer: 'anti-theft' },
            { prompt: 'more creative features (2)', answer: 'panic / emergency' },
            { prompt: 'not technical innovations — new ways of ___ the technology', answer: 'using' },
          ]},
          { type: 'matching', title: '3a · Match GPS applications to descriptions', pairs: [
            { id: 1, left: '1. topographical surveying', right: 'c. mapping surface features' },
            { id: 2, left: '2. geological exploration', right: 'd. applications in mining and the oil industry' },
            { id: 3, left: '3. civil engineering', right: 'b. setting out positions and levels of new structures' },
            { id: 4, left: '4. avionics equipment', right: 'f. air traffic control, navigation and autopilot systems' },
            { id: 5, left: '5. maritime applications', right: 'a. navigation and safety at sea' },
            { id: 6, left: '6. GPS in cars and trucks', right: 'e. highway navigation and vehicle tracking' },
          ]},
          { type: 'word-list', title: '4 · Useful verbs from the unit', words: ['allow', 'enable', 'permit', 'ensure', 'prevent'] },
          { type: 'fill-blanks', title: '4c · Complete the user-manual extract', blanks: [
            { prompt: 'The core function of your GPS receiver is to ___ you to locate your precise position.', answer: 'allow / enable' },
            { prompt: 'To ___ the device to function, it receives at least three signals simultaneously.', answer: 'allow / enable' },
            { prompt: '30 dedicated satellites which ___ receivers can function anywhere on earth.', answer: 'ensure' },
            { prompt: 'To ___ extremely precise positioning ...', answer: 'ensure' },
            { prompt: '... and ___ errors from occurring due to external factors.', answer: 'prevent' },
          ]},
          { type: 'task', title: '5 · Pair role-play', body: 'In pairs, explain the main functions and applications of a product made by your company. Student A = engineering manager; Student B = new employee. Use phrases: "I see. So ...", "OK. In other words ...", "So you mean ...". Swap roles and practise again.' },
        ],
      },
      {
        id: 'how-technology-works',
        title: 'Explaining how technology works',
        description: 'Verbs of movement and a reading on space elevators',
        type: 'reading',
        hasAudio: true,
        activities: [
          { type: 'discussion', title: '6a · Discuss the space elevator concept', bullets: [
            'How do you think a space elevator would work?',
            'What could it be used for?',
            'What technical challenges would it face?',
            'How seriously is the concept being taken at present?',
          ]},
          { type: 'reading', title: '6b · Space elevators: preparing for takeoff', passage: [
            "In his 1979 novel The Fountains of Paradise, Arthur C. Clarke wrote about an elevator connecting the earth's surface to space. Three decades later, this science-fiction concept is preparing to take off. NASA has launched the Space Elevator Challenge, a competition with a generous prize fund, and several teams are working on serious research projects aimed at winning it.",
            "As its name suggests, a space elevator is designed to raise things into space. Satellites, components for space ships, supplies for astronauts and even astronauts themselves are examples of payloads that could be transported into orbit without the need for explosive and environmentally unfriendly rockets. However, the altitude of orbital space — a colossal 35,790 km above the earth — is a measure of the challenge facing engineers.",
            "The answer is by using an incredibly strong and lightweight cable, strong enough to support its own weight and a heavy load. This would be attached to a base station on earth at one end and a satellite in geostationary orbit at the other. Lift vehicles would then ascend and descend the cable, powered by electromagnetic force and controlled remotely.",
          ]},
          { type: 'matching', title: '6c · Match the verbs to definitions', pairs: [
            { id: 1, left: '1. connecting', right: 'e. joining' },
            { id: 2, left: '2. raise', right: 'i. lift / make something go up' },
            { id: 3, left: '3. transported', right: 'a. carried over a distance' },
            { id: 4, left: '4. support', right: 'b. hold firmly / bear its weight' },
            { id: 5, left: '5. attached', right: 'g. fixed' },
            { id: 6, left: '6. ascend', right: 'h. climb up' },
            { id: 7, left: '7. descend', right: 'c. climb down' },
            { id: 8, left: '8. powered', right: 'd. provided with energy' },
            { id: 9, left: '9. controlled', right: 'f. driven / have movement directed' },
          ]},
          { type: 'audio', track: '1.2', title: "James's talk on space elevators" },
          { type: 'audio', track: '1.3', title: 'Offshore base stations' },
          { type: 'task', title: '8b · Listening questions', body: 'How would an offshore base station be supported? · What is the function of its anchors? · How would payloads reach the base station? · What problem would a mobile base station help to prevent? · What is the procedure if there is an alert?' },
        ],
      },
      {
        id: 'emphasising-advantages',
        title: 'Emphasising technical advantages',
        description: 'Verbs/adjectives for advantages, adverbs for emphasis, Otis lift technology',
        type: 'language',
        hasAudio: true,
        activities: [
          { type: 'audio', track: '1.4', title: 'A briefing on the advantages of a new pump' },
          { type: 'word-list', title: 'Useful language for advantages', words: ['outperform', 'outstrip', 'exceed', 'far superior to', 'considerably more efficient', 'dramatically reduce', 'significantly improve'] },
          { type: 'reading', title: 'Otis lift technology — key points', passage: [
            'Modern Otis lifts use gearless permanent-magnet machines that are far more efficient than older geared systems.',
            'Regenerative drives feed energy back into the building grid, dramatically reducing peak demand.',
            'Destination-dispatch software significantly improves journey times by grouping passengers heading to nearby floors.',
          ]},
          { type: 'task', title: 'Speaking practice', body: 'In pairs, present three advantages of a piece of technology in your field, using emphatic adverbs (significantly, dramatically, considerably).' },
        ],
      },
      {
        id: 'simplifying-explanations',
        title: 'Simplifying and illustrating technical explanations',
        description: 'Phrases for simplifying and rephrasing, a guided tour and pile foundations reading',
        type: 'speaking',
        hasAudio: true,
        activities: [
          { type: 'audio', track: '1.5', title: 'A guided tour of a construction site' },
          { type: 'word-list', title: 'Phrases for rephrasing', words: ['in other words', 'to put it simply', 'what I mean is', "it's a bit like ...", 'imagine that ...', 'think of it as ...'] },
          { type: 'reading', title: 'Pile foundations', passage: [
            'A pile is a long column driven deep into the ground to transfer the load of a building to firmer soil or rock below.',
            'Where surface soil is soft, piles either rest on bedrock (end-bearing piles) or rely on friction along their length (friction piles).',
            'They are commonly made of steel, reinforced concrete or timber and may be driven, drilled or screwed into position.',
          ]},
          { type: 'task', title: 'Role-play', body: 'Student A explains pile foundations to Student B, who has no engineering background. Use the rephrasing phrases above to simplify each technical term.' },
        ],
      },
    ]),

  u(2, 'materials-technology', 'Materials technology',
    'Categorising materials, properties and quality issues',
    [
      {
        id: 'specific-materials',
        title: 'Describing specific materials',
        description: 'Common materials and an environmental audit',
        type: 'vocabulary',
        hasAudio: true,
        activities: [
          { type: 'audio', track: '2.1', title: 'An environmental audit' },
          { type: 'word-list', title: 'Common materials', words: ['steel', 'aluminium', 'copper', 'brass', 'titanium', 'concrete', 'glass', 'polymers (plastics)', 'composites', 'ceramics', 'rubber', 'timber'] },
          { type: 'task', title: 'Categorise', body: 'List 8 components in the room and note which material each is made of. Discuss why that material was chosen.' },
        ],
      },
      {
        id: 'categorising-materials',
        title: 'Categorising materials',
        description: 'consist of, comprise, made of / from / out of',
        type: 'language',
        activities: [
          { type: 'word-list', title: 'Categorisation language', words: ['consist of', 'comprise', 'be made of', 'be made from', 'be made out of', 'a category / type / class of'] },
          { type: 'reading', title: 'Materials recycling', passage: [
            'Most metals can be melted down and recycled almost indefinitely without losing their properties.',
            'Polymers are more challenging: thermoplastics can be re-melted, while thermosets must usually be ground up and used as filler.',
            'Composites such as carbon-fibre-reinforced plastic are particularly difficult because the fibres and matrix cannot easily be separated.',
          ]},
          { type: 'fill-blanks', title: 'Complete with the correct phrase', blanks: [
            { prompt: 'A composite usually ___ two or more very different materials.', answer: 'consists of / comprises' },
            { prompt: 'The frame is ___ aluminium alloy.', answer: 'made of' },
            { prompt: 'Paper is ___ wood pulp.', answer: 'made from' },
          ]},
        ],
      },
      {
        id: 'properties',
        title: 'Specifying and describing properties',
        description: 'Compounds of resistant, adverbs of degree, regenerative brakes',
        type: 'reading',
        hasAudio: true,
        activities: [
          { type: 'audio', track: '2.2', title: 'Specialised tools' },
          { type: 'word-list', title: 'Properties & "-resistant" compounds', words: ['ductile', 'brittle', 'malleable', 'tough', 'hard', 'corrosion-resistant', 'heat-resistant', 'shock-resistant', 'wear-resistant'] },
          { type: 'reading', title: 'Regenerative brakes', passage: [
            'Regenerative braking converts a vehicle’s kinetic energy back into electrical energy instead of dissipating it as heat.',
            'The motor runs in reverse as a generator, charging the battery while slowing the vehicle.',
            'Brake pads still exist for emergency stops, but they wear far less, making the system both energy- and maintenance-efficient.',
          ]},
        ],
      },
      {
        id: 'quality-issues',
        title: 'Discussing quality issues',
        description: 'Phrases for describing requirements, Kevlar and high-performance watches',
        type: 'speaking',
        hasAudio: true,
        activities: [
          { type: 'audio', track: '2.3', title: 'High-performance watches' },
          { type: 'reading', title: 'Kevlar', passage: [
            'Kevlar is an aramid fibre five times stronger than steel on an equal-weight basis.',
            'It is used in body armour, ropes, tyres and aerospace composites because of its outstanding tensile strength and heat resistance.',
          ]},
          { type: 'task', title: 'Speaking', body: 'In pairs, agree the three most critical material requirements for a smartwatch case and justify your choices.' },
        ],
      },
    ]),

  u(3, 'components-assemblies', 'Components and assemblies',
    'Shapes, manufacturing techniques, joints and positions',
    [
      {
        id: 'shapes',
        title: 'Describing component shapes and features',
        description: 'Shapes and 3D features',
        type: 'vocabulary',
        hasAudio: true,
        activities: [
          { type: 'audio', track: '3.1', title: 'A project briefing' },
          { type: 'word-list', title: 'Shapes and features', words: ['cylindrical', 'spherical', 'conical', 'tapered', 'flange', 'rib', 'groove', 'thread', 'chamfer', 'fillet', 'hole', 'slot'] },
        ],
      },
      {
        id: 'manufacturing',
        title: 'Explaining and assessing manufacturing techniques',
        description: 'Machining vocabulary, electrical plugs and waterjet cutting',
        type: 'reading',
        hasAudio: true,
        activities: [
          { type: 'audio', track: '3.2', title: 'Electrical plugs and sockets · Metal fabrication · UHP waterjet cutting' },
          { type: 'word-list', title: 'Machining verbs', words: ['cut', 'drill', 'mill', 'turn', 'grind', 'cast', 'forge', 'extrude', 'stamp', 'weld'] },
          { type: 'reading', title: 'Flow waterjet technology', passage: [
            'Ultra-high-pressure waterjets cut almost any material by directing a 60,000 psi jet of water mixed with abrasive garnet.',
            'Because there is no heat-affected zone, sensitive materials such as titanium and composites can be cut without damage.',
          ]},
        ],
      },
      {
        id: 'joints-fixings',
        title: 'Explaining jointing and fixing techniques',
        description: 'Joints, fixings and options for fixing',
        type: 'vocabulary',
        hasAudio: true,
        activities: [
          { type: 'audio', track: '3.3', title: 'Options for fixing' },
          { type: 'matching', title: 'Match the joint type to its description', pairs: [
            { id: 1, left: '1. weld', right: 'd. permanent metal-to-metal join by fusion' },
            { id: 2, left: '2. bolt', right: 'a. removable threaded fastener with a nut' },
            { id: 3, left: '3. rivet', right: 'b. permanent fastener deformed in place' },
            { id: 4, left: '4. adhesive', right: 'c. chemical bond between surfaces' },
          ]},
        ],
      },
      {
        id: 'positions',
        title: 'Describing positions of assembled components',
        description: 'Prepositions of position; the flying garden chair',
        type: 'reading',
        hasAudio: true,
        activities: [
          { type: 'audio', track: '3.4', title: 'Cluster ballooning' },
          { type: 'word-list', title: 'Prepositions of position', words: ['above', 'below', 'adjacent to', 'opposite', 'flush with', 'in line with', 'parallel to', 'perpendicular to', 'concentric with'] },
          { type: 'reading', title: 'The flying garden chair', passage: [
            'In 1982 Larry Walters attached 45 helium-filled weather balloons to a lawn chair and ascended to 4,600 m above Los Angeles.',
            'He used a pellet gun to burst balloons one at a time and descend, drifting into power lines before landing safely.',
          ]},
        ],
      },
    ]),

  u(4, 'engineering-design', 'Engineering design',
    'Drawings, dimensions, design phases and resolving problems',
    [
      {
        id: 'drawings',
        title: 'Working with drawings',
        description: 'Views on technical drawings',
        type: 'vocabulary',
        hasAudio: true,
        activities: [
          { type: 'audio', track: '4.1', title: 'A drawing query' },
          { type: 'word-list', title: 'Drawing views', words: ['plan view', 'elevation', 'section', 'isometric', 'exploded view', 'detail', 'orthographic projection'] },
        ],
      },
      {
        id: 'dimensions',
        title: 'Discussing dimensions and precision',
        description: 'Scale, tolerance, length, width, thickness',
        type: 'language',
        hasAudio: true,
        activities: [
          { type: 'audio', track: '4.2', title: 'Scale · A floor design' },
          { type: 'word-list', title: 'Precision language', words: ['to scale', '1:50', 'tolerance ±0.1 mm', 'nominal', 'overall length', 'wall thickness', 'centre-to-centre'] },
          { type: 'reading', title: 'Superflat floors', passage: [
            'Superflat floors are specified in modern warehouses so that very-narrow-aisle forklifts can travel up to 13 m high without swaying.',
            'They are laid to a defined surface regularity (e.g. DM1 / DM2) measured along the wheel tracks rather than across the whole slab.',
          ]},
        ],
      },
      {
        id: 'design-phases',
        title: 'Describing design phases and procedures',
        description: 'Verbs for stages of a design process',
        type: 'vocabulary',
        hasAudio: true,
        activities: [
          { type: 'audio', track: '4.3', title: 'Design procedures' },
          { type: 'word-list', title: 'Design-phase verbs', words: ['conceptualise', 'specify', 'sketch', 'model', 'simulate', 'prototype', 'validate', 'sign off', 'release', 'revise'] },
        ],
      },
      {
        id: 'resolving-design-problems',
        title: 'Resolving design problems',
        description: 'Verbs and nouns for describing design problems',
        type: 'speaking',
        hasAudio: true,
        activities: [
          { type: 'audio', track: '4.4', title: 'Revising a detail' },
          { type: 'reading', title: 'Queries and instructions', passage: [
            'On site, RFIs (requests for information) are issued whenever a drawing detail is unclear or impossible to build.',
            'The design engineer must respond promptly with a sketch, marked-up drawing or written instruction so that construction is not delayed.',
          ]},
          { type: 'task', title: 'Role-play', body: 'Site engineer phones design office about a steel column that won’t fit. In pairs, write a 4-line RFI and reply.' },
        ],
      },
    ]),

  u(5, 'breaking-point', 'Breaking point',
    'Technical problems, faults, causes, repairs and maintenance',
    [
      {
        id: 'types-of-problems',
        title: 'Describing types of technical problem',
        description: 'Verbs and adjectives for describing technical problems',
        type: 'vocabulary',
        hasAudio: true,
        activities: [
          { type: 'audio', track: '5.1', title: 'A racing car test session' },
          { type: 'word-list', title: 'Fault verbs and adjectives', words: ['fail', 'break', 'crack', 'leak', 'jam', 'seize', 'overheat', 'loose', 'worn', 'corroded', 'misaligned'] },
        ],
      },
      {
        id: 'assessing-faults',
        title: 'Assessing and interpreting faults',
        description: 'Severity language and certainty/uncertainty',
        type: 'language',
        hasAudio: true,
        activities: [
          { type: 'audio', track: '5.2', title: 'Test session problems' },
          { type: 'word-list', title: 'Certainty', words: ['it could be', 'it might be', "it's possibly", "it's likely to be", "it's almost certainly", "it's definitely"] },
        ],
      },
      {
        id: 'causes-of-faults',
        title: 'Describing the causes of faults',
        description: 'Prefixes (mis-, mal-, dis-, over-, under-)',
        type: 'reading',
        hasAudio: true,
        activities: [
          { type: 'audio', track: '5.3', title: 'Technical help-line · Tyre pressure problems' },
          { type: 'word-list', title: 'Prefix adjectives', words: ['misaligned', 'malfunctioning', 'disconnected', 'overheated', 'undersized', 'overloaded'] },
          { type: 'reading', title: 'Air Transat Flight 236', passage: [
            'In 2001 an Airbus A330 ran out of fuel mid-Atlantic after a mismatched hydraulic line chafed against a fuel pipe and caused a leak.',
            'The crew glided the aircraft for almost 20 minutes and landed safely in the Azores, the longest powerless glide by a passenger jet.',
          ]},
        ],
      },
      {
        id: 'repairs-maintenance',
        title: 'Discussing repairs and maintenance',
        description: 'Verbs for repairs and maintenance',
        type: 'speaking',
        hasAudio: true,
        activities: [
          { type: 'audio', track: '5.4', title: 'A maintenance check' },
          { type: 'word-list', title: 'Repair verbs', words: ['replace', 'overhaul', 'tighten', 'top up', 'lubricate', 'recalibrate', 'reset', 'inspect', 'patch', 'reseat'] },
          { type: 'task', title: 'Role-play', body: 'In pairs, agree a 5-point preventive maintenance checklist for a piece of equipment you know.' },
        ],
      },
    ]),

  u(6, 'technical-development', 'Technical development',
    'Requirements, ideas, feasibility and redesigns',
    [
      {
        id: 'requirements',
        title: 'Discussing technical requirements',
        description: 'Phrases for referring to issues and quantity',
        type: 'language',
        hasAudio: true,
        activities: [
          { type: 'audio', track: '6.1', title: 'Simulator requirements and effects' },
          { type: 'word-list', title: 'Referring to issues', words: ['the main issue is', "what we're concerned about is", 'a key consideration is', 'with regard to', 'as far as ... is concerned'] },
        ],
      },
      {
        id: 'suggesting-solutions',
        title: 'Suggesting ideas and solutions',
        description: 'Phrases for suggesting solutions and alternatives',
        type: 'speaking',
        hasAudio: true,
        activities: [
          { type: 'audio', track: '6.2', title: 'Lifting options' },
          { type: 'word-list', title: 'Suggestion phrases', words: ['why don’t we', 'how about', 'one option would be', 'an alternative is', 'we could always', 'what if we'] },
        ],
      },
      {
        id: 'feasibility',
        title: 'Assessing feasibility',
        description: 'Idioms to describe feasibility',
        type: 'reading',
        hasAudio: true,
        activities: [
          { type: 'audio', track: '6.3', title: 'Hole requirements and forming' },
          { type: 'word-list', title: 'Feasibility idioms', words: ['a non-starter', 'out of the question', 'a long shot', 'on the cards', 'a no-brainer', 'a tall order'] },
          { type: 'reading', title: 'Mammoth problem', passage: [
            'When a frozen mammoth was discovered in Siberia, engineers had to design a refrigerated crate strong enough to be helicopter-lifted to a research lab.',
            'Weight, insulation thickness and centre of gravity had to be balanced against the helicopter’s 8-tonne payload limit.',
          ]},
        ],
      },
      {
        id: 'improvements-redesigns',
        title: 'Describing improvements and redesigns',
        description: 'Verbs with re-, idioms for redesigning',
        type: 'vocabulary',
        hasAudio: true,
        activities: [
          { type: 'audio', track: '6.4', title: 'A project briefing' },
          { type: 'word-list', title: 'Re- verbs', words: ['redesign', 'reconfigure', 'rework', 'retrofit', 'reinforce', 'rethink', 'relocate', 'replace'] },
        ],
      },
    ]),

  u(7, 'procedures-precautions', 'Procedures and precautions',
    'Health and safety, importance, regulations, written instructions',
    [
      {
        id: 'health-safety',
        title: 'Describing health and safety precautions',
        description: 'Industrial hazards and protective equipment',
        type: 'vocabulary',
        hasAudio: true,
        activities: [
          { type: 'audio', track: '7.1', title: 'A safety meeting' },
          { type: 'word-list', title: 'Hazards & PPE', words: ['live electrical parts', 'moving machinery', 'falling objects', 'hard hat', 'safety harness', 'hi-vis vest', 'ear defenders', 'safety goggles', 'steel-toe boots'] },
        ],
      },
      {
        id: 'emphasising-importance',
        title: 'Emphasising the importance of precautions',
        description: 'Phrases for emphasising importance',
        type: 'language',
        hasAudio: true,
        activities: [
          { type: 'audio', track: '7.2', title: 'Hazard analysis' },
          { type: 'word-list', title: 'Emphasis phrases', words: ['it is essential that', 'on no account', 'under no circumstances', 'must never', 'always make sure', 'it is critical to'] },
        ],
      },
      {
        id: 'regulations',
        title: 'Discussing regulations and standards',
        description: 'Terms to describe regulations; live line precautions',
        type: 'reading',
        hasAudio: true,
        activities: [
          { type: 'audio', track: '7.3', title: 'Live line precautions · Safety training' },
          { type: 'word-list', title: 'Regulation terms', words: ['code of practice', 'mandatory', 'compliant', 'permit-to-work', 'risk assessment', 'method statement', 'audit', 'certification'] },
          { type: 'reading', title: 'Live line maintenance', passage: [
            'Live line work on high-voltage cables uses bonded insulating gloves and tools so that linemen can repair conductors without an outage.',
            'Helicopters fly engineers onto the line and the helicopter itself is bonded to the conductor before contact, ensuring no current flows through the crew.',
          ]},
        ],
      },
      {
        id: 'written-instructions',
        title: 'Working with written instructions and notices',
        description: 'Safety notices and instructional style',
        type: 'speaking',
        hasAudio: true,
        activities: [
          { type: 'audio', track: '7.4', title: 'Oral instructions' },
          { type: 'reading', title: 'Helicopter safety on oil platforms', passage: [
            'Passengers receive a HUET briefing before boarding: how to brace, how to operate the push-out window, and how to deploy the EBS air supply.',
            'On the helideck, the HLO (helicopter landing officer) marshals passengers in single file from the upwind side, never the tail rotor side.',
          ]},
          { type: 'task', title: 'Writing', body: 'Re-write a piece of equipment’s safety notice in plain English: max 6 short bullet points using the imperative.' },
        ],
      },
    ]),

  u(8, 'monitoring-control', 'Monitoring and control',
    'Automated systems, parameters, readings/trends and approximation',
    [
      {
        id: 'automated-systems',
        title: 'Describing automated systems',
        description: 'Words to describe automated systems; intelligent buildings',
        type: 'reading',
        hasAudio: true,
        activities: [
          { type: 'audio', track: '8.1', title: 'Intelligent buildings and automation' },
          { type: 'word-list', title: 'Automation vocabulary', words: ['sensor', 'actuator', 'PLC', 'SCADA', 'set point', 'feedback loop', 'closed loop', 'open loop', 'override'] },
          { type: 'reading', title: 'Industrial process monitoring', passage: [
            'A SCADA system links thousands of sensors across a plant to a central HMI, letting operators visualise temperatures, pressures and flow rates in real time.',
            'Alarms are tiered (warning → high → critical) so that minor drifts are filtered out and only genuine excursions reach the control-room operator.',
          ]},
        ],
      },
      {
        id: 'parameters',
        title: 'Referring to measurable parameters',
        description: 'Temperature, pressure, flow, voltage, current',
        type: 'vocabulary',
        hasAudio: true,
        activities: [
          { type: 'audio', track: '8.2', title: 'Monitoring and control systems' },
          { type: 'word-list', title: 'Parameters & units', words: ['temperature (°C)', 'pressure (bar / Pa)', 'flow rate (l/min)', 'voltage (V)', 'current (A)', 'frequency (Hz)', 'vibration (mm/s)', 'humidity (%)'] },
        ],
      },
      {
        id: 'readings-trends',
        title: 'Discussing readings and trends',
        description: 'Words to describe fluctuations',
        type: 'language',
        hasAudio: true,
        activities: [
          { type: 'audio', track: '8.3', title: 'Electricity demand and supply problems' },
          { type: 'word-list', title: 'Trend verbs', words: ['rise', 'climb', 'surge', 'fall', 'drop', 'plummet', 'fluctuate', 'level off', 'plateau', 'spike'] },
        ],
      },
      {
        id: 'approximating',
        title: 'Giving approximate figures',
        description: 'Words and phrases for approximating numbers',
        type: 'speaking',
        hasAudio: true,
        activities: [
          { type: 'audio', track: '8.4', title: 'Pumped storage hydroelectric power · Internal reviews' },
          { type: 'word-list', title: 'Approximation', words: ['approximately', 'roughly', 'in the region of', 'somewhere around', 'give or take', 'a ballpark figure', 'just under', 'just over'] },
          { type: 'reading', title: 'Dynamic demand controls', passage: [
            'Dynamic demand devices fitted to fridges and freezers monitor mains frequency and briefly defer their compressor cycle when frequency dips below 50 Hz.',
            'Spread across millions of appliances, this provides a near-instant reserve that helps the grid ride through sudden generator trips.',
          ]},
        ],
      },
    ]),

  u(9, 'theory-practice', 'Theory and practice',
    'Tests and experiments, predictions, comparing results, causes and effects',
    [
      {
        id: 'tests-experiments',
        title: 'Explaining tests and experiments',
        description: 'Words to describe test types',
        type: 'vocabulary',
        hasAudio: true,
        activities: [
          { type: 'audio', track: '9.1', title: 'Vehicle design and testing' },
          { type: 'word-list', title: 'Test types', words: ['destructive test', 'non-destructive test (NDT)', 'fatigue test', 'crash test', 'wind-tunnel test', 'shake-table test', 'salt-spray test', 'drop test'] },
        ],
      },
      {
        id: 'predictions',
        title: 'Exchanging views on predictions and theories',
        description: 'Stating assumptions, agreeing and disagreeing',
        type: 'language',
        hasAudio: true,
        activities: [
          { type: 'audio', track: '9.2', title: 'Water rockets' },
          { type: 'word-list', title: 'Predicting & opinions', words: ['I’d expect', 'my hunch is', 'in theory', 'in practice', "I'm not so sure", "you've got a point", "I'd have to disagree"] },
        ],
      },
      {
        id: 'results-vs-expectations',
        title: 'Comparing results with expectations',
        description: 'Phrases for comparing expectations and results',
        type: 'reading',
        hasAudio: true,
        activities: [
          { type: 'audio', track: '9.3', title: 'Air drop problems' },
          { type: 'reading', title: 'A rocket competition', passage: [
            'University teams design 2-litre PET-bottle water rockets and predict an apogee using simple thrust and drag equations.',
            'Measured altitudes typically come in 10–20 % lower than predicted because of nose-cone wobble and asymmetric water expulsion.',
          ]},
          { type: 'word-list', title: 'Comparing phrases', words: ['in line with', 'broadly consistent with', 'better than expected', 'fell short of', 'exceeded the prediction by', 'a discrepancy of'] },
        ],
      },
      {
        id: 'causes-effects',
        title: 'Discussing causes and effects',
        description: 'Words for linking causes and effects',
        type: 'speaking',
        hasAudio: true,
        activities: [
          { type: 'audio', track: '9.4', title: 'Moon landings' },
          { type: 'reading', title: 'Chicken cannon', passage: [
            'Aerospace labs fire whole chickens out of compressed-air cannons at windshields, fan blades and canopies to simulate bird strike.',
            'The test must replicate both the mass and the soft-body impulse of a real bird; using a frozen chicken famously gave wildly unrealistic results.',
          ]},
          { type: 'word-list', title: 'Cause–effect linkers', words: ['this leads to', 'as a result', 'consequently', 'is caused by', 'is due to', 'gives rise to', 'triggers'] },
        ],
      },
    ]),

  u(10, 'pushing-boundaries', 'Pushing the boundaries',
    'Performance, forces, relative performance, capabilities and limits',
    [
      {
        id: 'performance-suitability',
        title: 'Discussing performance and suitability',
        description: 'Adjectives for suitability and performance; wind turbines',
        type: 'reading',
        hasAudio: true,
        activities: [
          { type: 'audio', track: '10.1', title: 'Wind turbine towers' },
          { type: 'word-list', title: 'Performance adjectives', words: ['suitable', 'fit for purpose', 'high-performing', 'underpowered', 'overspecified', 'cost-effective', 'reliable'] },
          { type: 'reading', title: 'Wind turbines fact file', passage: [
            'A modern 8 MW offshore turbine has 80 m blades and a hub 110 m above sea level.',
            'Cut-in wind speed is around 3 m/s; rated power is reached at about 12 m/s; the machine shuts down above 25 m/s to protect the structure.',
          ]},
        ],
      },
      {
        id: 'forces',
        title: 'Describing physical forces',
        description: 'Types of forces; solar towers',
        type: 'vocabulary',
        hasAudio: true,
        activities: [
          { type: 'audio', track: '10.2', title: 'Tall structures' },
          { type: 'word-list', title: 'Forces', words: ['tension', 'compression', 'shear', 'torsion', 'bending', 'centripetal', 'centrifugal', 'aerodynamic drag', 'lift'] },
          { type: 'reading', title: 'Solar towers', passage: [
            'A solar updraft tower uses a large transparent canopy to heat air, which rises up a tall central chimney and drives turbines at its base.',
            'The taller the chimney, the greater the pressure difference and the more power can be generated — proposals reach 1 km in height.',
          ]},
        ],
      },
      {
        id: 'relative-performance',
        title: 'Discussing relative performance',
        description: 'Degrees of difference; the TGV speed record',
        type: 'language',
        hasAudio: true,
        activities: [
          { type: 'audio', track: '10.3', title: 'TGV world speed record' },
          { type: 'word-list', title: 'Degrees of difference', words: ['slightly', 'marginally', 'considerably', 'significantly', 'dramatically', 'an order of magnitude', 'roughly the same as', 'nowhere near'] },
          { type: 'reading', title: 'Transport alternatives', passage: [
            'High-speed rail occupies a sweet spot in the 500–1,000 km range, beating air on door-to-door time and beating road on energy per passenger-km.',
            'Magnetic-levitation trains can be considerably faster but are dramatically more expensive to build per kilometre of track.',
          ]},
        ],
      },
      {
        id: 'capabilities-limits',
        title: 'Describing capabilities and limitations',
        description: 'John Paul Stapp and the Sonic Wind rocket sled',
        type: 'speaking',
        hasAudio: true,
        activities: [
          { type: 'audio', track: '10.4', title: 'The story of John Paul Stapp' },
          { type: 'reading', title: 'The Sonic Wind tests', passage: [
            'In 1954 Air Force surgeon John Paul Stapp rode a rocket sled from 0 to 1,017 km/h in five seconds and decelerated to a stop in 1.4 seconds.',
            'He survived 46 g of deceleration — burst capillaries in his eyes but no permanent injury — proving that aircrews could survive ejection at very high speed.',
          ]},
          { type: 'word-list', title: 'Capabilities & limits', words: ['can withstand', 'is rated for', 'is designed to handle', 'has a maximum capacity of', 'is limited by', 'fails at'] },
          { type: 'task', title: 'Discussion', body: 'In pairs, identify three engineering achievements that pushed a known limit. What enabled them, and what new limit did they reveal?' },
        ],
      },
    ]),
];
