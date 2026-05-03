// Pronunciation Practice Course data
// Based on "Pronunciation Practice Activities" by Martin Hewings (Cambridge, 2004)

export interface TheoryUnit {
  title: string;
  intro?: string;
  bullets?: string[];
  examples?: { word: string; ipa?: string; note?: string }[];
  table?: { headers: string[]; rows: string[][] };
}

export interface MinimalPair {
  a: string;
  b: string;
  ipaA?: string;
  ipaB?: string;
}

export interface CategoryActivity {
  type: "categorize";
  title: string;
  instructions: string;
  categories: string[];
  items: { word: string; category: string }[];
}

export interface MatchingActivity {
  type: "matching";
  title: string;
  instructions: string;
  pairs: { left: string; right: string }[];
}

export interface MinimalPairActivity {
  type: "minimalPairs";
  title: string;
  instructions: string;
  pairs: MinimalPair[];
}

export interface SpeakActivity {
  type: "speak";
  title: string;
  instructions: string;
  items: { text: string; label?: string }[];
}

export type Activity =
  | CategoryActivity
  | MatchingActivity
  | MinimalPairActivity
  | SpeakActivity;

export interface QuizQuestion {
  q: string;
  options: string[];
  correct: number;
  feedback: string;
}

export interface PronunciationSection {
  id: string;
  number: number;
  title: string;
  subtitle: string;
  color: string; // tailwind base, e.g. "indigo"
  units: TheoryUnit[];
  activities: Activity[];
  quiz: QuizQuestion[];
}

export const pronunciationSections: PronunciationSection[] = [
  // ============ SECTION 1 ============
  {
    id: "awareness",
    number: 1,
    title: "Developing Awareness of English Pronunciation",
    subtitle: "Vowels, consonants, syllables, stress and intonation — the building blocks",
    color: "indigo",
    units: [
      {
        title: "Vowels and Consonants",
        intro:
          "English has around 20 vowel sounds and 24 consonant sounds. Vowels are made with an open vocal tract; consonants involve some blocking of airflow.",
        examples: [
          { word: "job", ipa: "/dʒɒb/" },
          { word: "give", ipa: "/ɡɪv/" },
          { word: "good", ipa: "/ɡʊd/" },
          { word: "car", ipa: "/kɑː/" },
        ],
        bullets: [
          "Some vowel sounds in English do not exist in many other languages (e.g. /æ/ in cat).",
          "Spelling is a poor guide to pronunciation: 'fall', 'learn', 'way', 'road' all have different vowel sounds.",
        ],
      },
      {
        title: "Syllables",
        intro:
          "A syllable is a unit of pronunciation containing one vowel sound, with or without surrounding consonants.",
        examples: [
          { word: "bad", note: "1 syllable" },
          { word: "ar-rive", note: "2 syllables" },
          { word: "com-pu-ter", note: "3 syllables" },
          { word: "su-per-mar-ket", note: "4 syllables" },
        ],
      },
      {
        title: "Word Stress",
        intro:
          "In words of more than one syllable, one syllable is stressed (longer, louder, clearer). Stressed syllables are shown with a CAPITAL or ˈmark.",
        examples: [
          { word: "PHOto-graph", ipa: "/ˈfəʊtəɡrɑːf/" },
          { word: "pho-TO-grapher", ipa: "/fəˈtɒɡrəfə/" },
          { word: "photo-GRAPH-ic", ipa: "/fəʊtəˈɡræfɪk/" },
        ],
      },
      {
        title: "Intonation",
        intro:
          "Intonation is the melody of speech — the rise and fall of the voice. It carries meaning and emotion.",
        bullets: [
          "Falling tone (↘) — typical of statements and wh-questions.",
          "Rising tone (↗) — typical of yes/no questions and uncertainty.",
          "Fall-rise (↘↗) — implies reservation or 'but...'.",
        ],
      },
    ],
    activities: [
      {
        type: "categorize",
        title: "Vowel or Consonant Sound?",
        instructions:
          "Listen to each word and decide whether the FIRST sound is a vowel or a consonant.",
        categories: ["Vowel sound", "Consonant sound"],
        items: [
          { word: "apple", category: "Vowel sound" },
          { word: "house", category: "Consonant sound" },
          { word: "egg", category: "Vowel sound" },
          { word: "ship", category: "Consonant sound" },
          { word: "orange", category: "Vowel sound" },
          { word: "yellow", category: "Consonant sound" },
          { word: "ice", category: "Vowel sound" },
          { word: "uncle", category: "Vowel sound" },
          { word: "queen", category: "Consonant sound" },
          { word: "honest", category: "Vowel sound" },
        ],
      },
      {
        type: "matching",
        title: "Count the Syllables",
        instructions: "Match each word to its number of syllables.",
        pairs: [
          { left: "helicopter", right: "4" },
          { left: "trousers", right: "2" },
          { left: "president", right: "3" },
          { left: "some", right: "1" },
          { left: "computer", right: "3" },
          { left: "supermarket", right: "4" },
        ],
      },
      {
        type: "speak",
        title: "Listen and Repeat",
        instructions:
          "Press play, then repeat the word aloud. Pay attention to the stressed syllable (in capitals).",
        items: [
          { text: "PHOtograph", label: "noun – stress on 1st syllable" },
          { text: "phoTOgrapher", label: "noun – stress on 2nd syllable" },
          { text: "photoGRAPHic", label: "adjective – stress on 3rd syllable" },
          { text: "deMOcracy", label: "noun" },
          { text: "demoCRAtic", label: "adjective" },
        ],
      },
    ],
    quiz: [
      {
        q: "Which of these words has 3 syllables?",
        options: ["computer", "trousers", "good", "fall"],
        correct: 0,
        feedback: "Correct! com-PU-ter has three syllables.",
      },
      {
        q: "How many vowel sounds does English have approximately?",
        options: ["5", "10", "20", "30"],
        correct: 2,
        feedback: "English has around 20 vowel sounds (including diphthongs).",
      },
      {
        q: "Which syllable is stressed in 'photographer'?",
        options: ["1st (PHO)", "2nd (TO)", "3rd (gra)", "4th (pher)"],
        correct: 1,
        feedback: "phoTOgrapher — stress falls on the second syllable.",
      },
      {
        q: "Falling intonation is most typical of…",
        options: [
          "Yes/no questions",
          "Statements and wh-questions",
          "Uncertainty",
          "Lists",
        ],
        correct: 1,
        feedback: "Correct — statements and wh-questions usually fall.",
      },
      {
        q: "Which word starts with a vowel SOUND (not letter)?",
        options: ["honest", "house", "happy", "hand"],
        correct: 0,
        feedback: "Correct — 'honest' begins with /ɒ/; the 'h' is silent.",
      },
      {
        q: "A syllable must contain at least…",
        options: ["one consonant", "one vowel sound", "two letters", "a stress mark"],
        correct: 1,
        feedback: "Every syllable contains exactly one vowel sound.",
      },
      {
        q: "Which word has a different number of syllables from the others?",
        options: ["banana", "computer", "happy", "tomato"],
        correct: 2,
        feedback: "'Happy' has 2 syllables; the others have 3.",
      },
      {
        q: "Rising intonation (↗) is typical of…",
        options: ["statements", "commands", "yes/no questions", "wh-questions"],
        correct: 2,
        feedback: "Yes/no questions usually rise at the end.",
      },
      {
        q: "Which sound is a consonant?",
        options: ["/æ/", "/iː/", "/k/", "/ʊ/"],
        correct: 2,
        feedback: "/k/ is a consonant. The others are vowels.",
      },
      {
        q: "The IPA symbol /ˈ/ in front of a syllable means…",
        options: [
          "silent syllable",
          "primary stress",
          "long vowel",
          "rising tone",
        ],
        correct: 1,
        feedback: "ˈ marks the syllable with primary (main) stress.",
      },
    ],
  },

  // ============ SECTION 2 ============
  {
    id: "sounds",
    number: 2,
    title: "Sounds: Vowels, Consonants & Consonant Clusters",
    subtitle: "Master individual sounds, minimal pairs and tricky clusters",
    color: "violet",
    units: [
      {
        title: "Short and Long Vowels",
        intro:
          "English vowels come in short (/ɪ/, /e/, /æ/, /ʌ/, /ɒ/, /ʊ/, /ə/) and long (/iː/, /ɑː/, /ɔː/, /uː/, /ɜː/) varieties.",
        examples: [
          { word: "ship", ipa: "/ʃɪp/" },
          { word: "sheep", ipa: "/ʃiːp/" },
          { word: "full", ipa: "/fʊl/" },
          { word: "fool", ipa: "/fuːl/" },
        ],
      },
      {
        title: "Diphthongs",
        intro:
          "Diphthongs are vowel sounds that glide from one position to another within the same syllable.",
        examples: [
          { word: "face", ipa: "/feɪs/" },
          { word: "go", ipa: "/ɡəʊ/" },
          { word: "now", ipa: "/naʊ/" },
          { word: "boy", ipa: "/bɔɪ/" },
          { word: "near", ipa: "/nɪə/" },
        ],
      },
      {
        title: "Consonant Clusters",
        intro:
          "A consonant cluster is two or more consonants together with no vowel between them. English allows up to 3 consonants at the start of a word and up to 4 at the end.",
        examples: [
          { word: "spring", note: "/spr/ initial cluster" },
          { word: "strength", note: "/strŋθ/ — both initial and final clusters" },
          { word: "texts", note: "/ksts/ final cluster" },
        ],
        bullets: [
          "Common difficulty: speakers often insert an extra vowel (e.g. 'esport' for 'sport').",
          "Or drop a consonant (e.g. 'sring' for 'spring').",
        ],
      },
    ],
    activities: [
      {
        type: "minimalPairs",
        title: "Minimal Pairs: Hear the Difference",
        instructions:
          "Play each pair and listen carefully. The two words differ by only one sound.",
        pairs: [
          { a: "ship", b: "sheep", ipaA: "/ɪ/", ipaB: "/iː/" },
          { a: "full", b: "fool", ipaA: "/ʊ/", ipaB: "/uː/" },
          { a: "cat", b: "cut", ipaA: "/æ/", ipaB: "/ʌ/" },
          { a: "live", b: "leave", ipaA: "/ɪ/", ipaB: "/iː/" },
          { a: "pen", b: "pan", ipaA: "/e/", ipaB: "/æ/" },
          { a: "walk", b: "work", ipaA: "/ɔː/", ipaB: "/ɜː/" },
          { a: "thin", b: "sin", ipaA: "/θ/", ipaB: "/s/" },
          { a: "very", b: "berry", ipaA: "/v/", ipaB: "/b/" },
        ],
      },
      {
        type: "categorize",
        title: "Group by First Vowel Sound",
        instructions: "Sort each word into the box with the same vowel sound.",
        categories: ["/iː/ as in 'sheep'", "/ɪ/ as in 'ship'", "/æ/ as in 'cat'"],
        items: [
          { word: "sheep", category: "/iː/ as in 'sheep'" },
          { word: "feet", category: "/iː/ as in 'sheep'" },
          { word: "leave", category: "/iː/ as in 'sheep'" },
          { word: "ship", category: "/ɪ/ as in 'ship'" },
          { word: "live", category: "/ɪ/ as in 'ship'" },
          { word: "fish", category: "/ɪ/ as in 'ship'" },
          { word: "cat", category: "/æ/ as in 'cat'" },
          { word: "hand", category: "/æ/ as in 'cat'" },
          { word: "back", category: "/æ/ as in 'cat'" },
        ],
      },
      {
        type: "speak",
        title: "Cluster Practice",
        instructions:
          "Practise these consonant clusters slowly first, then up to speed.",
        items: [
          { text: "spring, strong, strength" },
          { text: "splash, sprint, scream" },
          { text: "texts, sixths, twelfths" },
          { text: "asked, helped, worked" },
        ],
      },
    ],
    quiz: [
      {
        q: "Which word contains the long vowel /iː/?",
        options: ["ship", "sheep", "shop", "shape"],
        correct: 1,
        feedback: "Correct! 'sheep' = /ʃiːp/.",
      },
      {
        q: "A diphthong is…",
        options: [
          "two consonants together",
          "a silent vowel",
          "a vowel that glides from one sound to another",
          "a stressed syllable",
        ],
        correct: 2,
        feedback: "Correct — diphthongs glide between two vowel positions.",
      },
      {
        q: "Which pair is a true minimal pair?",
        options: ["cat / hat", "ship / sheep", "ship / shop", "All of them"],
        correct: 3,
        feedback:
          "All differ by exactly one sound, so all three are minimal pairs.",
      },
      {
        q: "How many consonants are in the cluster at the start of 'strength'?",
        options: ["1", "2", "3", "4"],
        correct: 2,
        feedback: "/s/ + /t/ + /r/ = 3 consonants.",
      },
      {
        q: "Which word has the /ʌ/ sound (as in 'cup')?",
        options: ["cat", "cart", "cut", "cot"],
        correct: 2,
        feedback: "Correct — 'cut' = /kʌt/.",
      },
      {
        q: "Which is NOT a diphthong?",
        options: ["/eɪ/", "/aʊ/", "/iː/", "/ɔɪ/"],
        correct: 2,
        feedback: "/iː/ is a long monophthong, not a diphthong.",
      },
      {
        q: "Which word ends in a 4-consonant cluster?",
        options: ["texts", "sixths", "twelfths", "All of them"],
        correct: 3,
        feedback: "All three end in 4-consonant clusters!",
      },
      {
        q: "The vowel in 'walk' is…",
        options: ["/ɒ/", "/ɔː/", "/əʊ/", "/ʌ/"],
        correct: 1,
        feedback: "'walk' = /wɔːk/ — long /ɔː/.",
      },
      {
        q: "The /θ/ sound (as in 'thin') is made with…",
        options: [
          "lips together",
          "tongue between teeth",
          "back of tongue",
          "rounded lips",
        ],
        correct: 1,
        feedback: "Correct — tongue tip between the teeth.",
      },
      {
        q: "Which pair distinguishes /v/ vs /b/?",
        options: ["very / berry", "thin / sin", "ship / sheep", "cat / cut"],
        correct: 0,
        feedback: "'very' /v/ vs 'berry' /b/.",
      },
    ],
  },

  // ============ SECTION 3 ============
  {
    id: "connected-speech",
    number: 3,
    title: "Connected Speech",
    subtitle: "Linking, contractions, weak forms and elision",
    color: "teal",
    units: [
      {
        title: "Linking: Consonant to Vowel",
        intro:
          "When a word ends with a consonant and the next begins with a vowel, the consonant 'jumps' onto the vowel.",
        examples: [
          { word: "an apple", ipa: "/ə_næpl/" },
          { word: "look at it", ipa: "/lʊ_kæ_tɪt/" },
          { word: "stop it", ipa: "/stɒ_pɪt/" },
        ],
      },
      {
        title: "Linking with /j/, /w/ and /r/",
        intro:
          "Vowel-to-vowel transitions usually get a tiny linking sound:",
        bullets: [
          "/j/ after /iː, ɪ, eɪ, aɪ, ɔɪ/: 'I_(j)agree', 'see_(j)it'",
          "/w/ after /uː, ʊ, əʊ, aʊ/: 'go_(w)on', 'two_(w)apples'",
          "/r/ after /ɑː, ɔː, ɜː, ə/ (in non-rhotic English): 'far_(r)away', 'idea_(r)of'",
        ],
      },
      {
        title: "Weak and Strong Forms",
        intro:
          "Many grammar words (and, of, to, was, can, for, etc.) have a STRONG form when stressed and a WEAK form (with /ə/) in normal speech.",
        table: {
          headers: ["Word", "Strong form", "Weak form"],
          rows: [
            ["and", "/ænd/", "/ən/, /n/"],
            ["of", "/ɒv/", "/əv/"],
            ["to", "/tuː/", "/tə/"],
            ["was", "/wɒz/", "/wəz/"],
            ["can", "/kæn/", "/kən/"],
            ["for", "/fɔː/", "/fə/"],
          ],
        },
      },
      {
        title: "Elision: Leaving Sounds Out",
        intro:
          "In fast speech, /t/ and /d/ between consonants are often dropped.",
        examples: [
          { word: "next day", note: "→ 'nex day'" },
          { word: "old man", note: "→ 'ol man'" },
          { word: "I don't know", note: "→ 'I don' know'" },
        ],
      },
    ],
    activities: [
      {
        type: "matching",
        title: "Predict the Linking Sound",
        instructions:
          "Match each phrase with the linking sound used between the two vowels.",
        pairs: [
          { left: "I agree", right: "/j/" },
          { left: "see it", right: "/j/" },
          { left: "go on", right: "/w/" },
          { left: "two apples", right: "/w/" },
          { left: "far away", right: "/r/" },
          { left: "the idea of it", right: "/r/" },
        ],
      },
      {
        type: "categorize",
        title: "Strong or Weak Form?",
        instructions:
          "Decide whether the underlined word would typically use its STRONG or WEAK form in this sentence.",
        categories: ["Weak form", "Strong form"],
        items: [
          { word: "I'm going TO the shops.", category: "Weak form" },
          { word: "Who's it FOR? — For ME.", category: "Strong form" },
          { word: "Fish AND chips.", category: "Weak form" },
          { word: "I CAN swim.", category: "Weak form" },
          { word: "Yes I CAN!", category: "Strong form" },
          { word: "A cup OF tea.", category: "Weak form" },
        ],
      },
      {
        type: "speak",
        title: "Connected Speech in Action",
        instructions:
          "Listen to these phrases. Notice the linking and weak forms.",
        items: [
          { text: "I'd like a cup of tea.", label: "weak 'of' = /əv/" },
          { text: "Look at it!", label: "linking /k/ → /æ/ → /ɪ/" },
          { text: "I don't know what to do.", label: "elision of /t/" },
          { text: "Fish and chips, please.", label: "weak 'and' = /ən/" },
        ],
      },
    ],
    quiz: [
      {
        q: "In 'an apple', the /n/ sound…",
        options: [
          "is silent",
          "links to the next vowel",
          "becomes /m/",
          "is doubled",
        ],
        correct: 1,
        feedback: "Correct — it links: 'a-napple'.",
      },
      {
        q: "Which linking sound appears in 'I agree'?",
        options: ["/r/", "/w/", "/j/", "none"],
        correct: 2,
        feedback: "/j/ — 'I_(j)agree'.",
      },
      {
        q: "The weak form of 'to' is…",
        options: ["/tuː/", "/tə/", "/tɪ/", "/du/"],
        correct: 1,
        feedback: "Correct — /tə/ in unstressed positions.",
      },
      {
        q: "In 'next day', the /t/ is often…",
        options: ["doubled", "stressed", "elided (dropped)", "replaced by /d/"],
        correct: 2,
        feedback: "Yes — elision: 'nex' day'.",
      },
      {
        q: "Which sentence likely has a STRONG form of 'can'?",
        options: [
          "I can swim.",
          "Yes, I CAN!",
          "She can come too.",
          "We can wait.",
        ],
        correct: 1,
        feedback: "When emphasised or final, 'can' = /kæn/.",
      },
      {
        q: "After 'go', the linking sound to a following vowel is…",
        options: ["/j/", "/w/", "/r/", "/h/"],
        correct: 1,
        feedback: "/w/ — 'go_(w)on'.",
      },
      {
        q: "Which words usually have a weak form?",
        options: [
          "Nouns",
          "Main verbs",
          "Grammar words (of, and, to, was…)",
          "Adjectives",
        ],
        correct: 2,
        feedback: "Function/grammar words reduce to weak forms.",
      },
      {
        q: "'far away' is linked with…",
        options: ["/j/", "/w/", "/r/", "/n/"],
        correct: 2,
        feedback: "/r/ — 'far_(r)away' (non-rhotic English).",
      },
      {
        q: "The contracted form of 'I would' is…",
        options: ["I'll", "I'd", "I've", "I'm"],
        correct: 1,
        feedback: "I'd = I would (or I had).",
      },
      {
        q: "Weak forms typically use which vowel?",
        options: ["/iː/", "/æ/", "/ə/ (schwa)", "/uː/"],
        correct: 2,
        feedback: "Schwa /ə/ is the most common weak vowel.",
      },
    ],
  },

  // ============ SECTION 4 ============
  {
    id: "stress",
    number: 4,
    title: "Syllables, Word Stress & Stress in Phrases",
    subtitle: "Get the rhythm of English right",
    color: "amber",
    units: [
      {
        title: "Stress Patterns",
        intro:
          "We often write stress patterns with big O (stressed) and small o (unstressed).",
        examples: [
          { word: "TAble", note: "Oo" },
          { word: "aGAIN", note: "oO" },
          { word: "BEAUtiful", note: "Ooo" },
          { word: "comPUter", note: "oOo" },
          { word: "engiNEER", note: "ooO" },
        ],
      },
      {
        title: "Two-Syllable Words: Some Rules",
        bullets: [
          "Most 2-syllable NOUNS and ADJECTIVES are stressed on the 1st syllable: TAble, HAPPY, MUSic.",
          "Most 2-syllable VERBS are stressed on the 2nd syllable: aGREE, beGIN, deCIDE.",
          "Noun–verb pairs: REcord (n) vs reCORD (v); PREsent (n) vs preSENT (v).",
        ],
      },
      {
        title: "-teen vs -ty Numbers",
        intro:
          "A classic confusion! -TEEN numbers are stressed on the SECOND syllable; -TY numbers on the FIRST.",
        examples: [
          { word: "thirTEEN", note: "13" },
          { word: "THIRty", note: "30" },
          { word: "fourTEEN", note: "14" },
          { word: "FORty", note: "40" },
        ],
      },
      {
        title: "Suffixes That Fix the Stress",
        bullets: [
          "Stress falls on the syllable BEFORE -ic / -ical: photoGRAPHic, ecoNOMical.",
          "Stress falls on the syllable BEFORE -ion / -ian: educATion, muSIcian.",
          "Stress falls on the syllable BEFORE -ity: aBIlity, possiBIlity.",
        ],
      },
      {
        title: "Compound Nouns vs Phrases",
        intro:
          "Compound NOUNS usually stress the FIRST element. Adjective + noun phrases stress the SECOND.",
        examples: [
          { word: "GREENhouse", note: "compound noun = building for plants" },
          { word: "green HOUSE", note: "phrase = a house painted green" },
          { word: "BLACKboard", note: "compound noun" },
          { word: "black BOARD", note: "phrase" },
        ],
      },
    ],
    activities: [
      {
        type: "matching",
        title: "Match Word to Stress Pattern",
        instructions: "Match each word to its stress pattern.",
        pairs: [
          { left: "table", right: "Oo" },
          { left: "again", right: "oO" },
          { left: "beautiful", right: "Ooo" },
          { left: "computer", right: "oOo" },
          { left: "engineer", right: "ooO" },
          { left: "photograph", right: "Ooo" },
        ],
      },
      {
        type: "categorize",
        title: "Stress: -teen or -ty?",
        instructions: "Sort the numbers by where the stress falls.",
        categories: ["Stress on 1st syllable (-ty)", "Stress on 2nd syllable (-teen)"],
        items: [
          { word: "thirteen", category: "Stress on 2nd syllable (-teen)" },
          { word: "thirty", category: "Stress on 1st syllable (-ty)" },
          { word: "fourteen", category: "Stress on 2nd syllable (-teen)" },
          { word: "forty", category: "Stress on 1st syllable (-ty)" },
          { word: "fifteen", category: "Stress on 2nd syllable (-teen)" },
          { word: "fifty", category: "Stress on 1st syllable (-ty)" },
          { word: "sixteen", category: "Stress on 2nd syllable (-teen)" },
          { word: "sixty", category: "Stress on 1st syllable (-ty)" },
        ],
      },
      {
        type: "speak",
        title: "Noun vs Verb Pairs",
        instructions:
          "Listen — the same spelling, different stress, different word class.",
        items: [
          { text: "REcord. He bought a new REcord.", label: "noun – Oo" },
          { text: "reCORD. Please reCORD the meeting.", label: "verb – oO" },
          { text: "PREsent. Open your PREsent.", label: "noun – Oo" },
          { text: "preSENT. Let me preSENT the data.", label: "verb – oO" },
        ],
      },
    ],
    quiz: [
      {
        q: "Where is the stress in 'computer'?",
        options: ["1st syllable", "2nd syllable", "3rd syllable", "no stress"],
        correct: 1,
        feedback: "comPUter — stress on the 2nd syllable.",
      },
      {
        q: "Most 2-syllable VERBS are stressed on the…",
        options: ["1st syllable", "2nd syllable", "either", "last vowel only"],
        correct: 1,
        feedback: "Most 2-syllable verbs: aGREE, beGIN, reLAX.",
      },
      {
        q: "Which is the noun (not verb)?",
        options: ["REcord", "reCORD", "neither", "both"],
        correct: 0,
        feedback: "REcord (noun) vs reCORD (verb).",
      },
      {
        q: "The number 'thirteen' is stressed on…",
        options: ["1st syllable", "2nd syllable", "both equally", "neither"],
        correct: 1,
        feedback: "thirTEEN — stress on the 2nd syllable.",
      },
      {
        q: "The number 'thirty' is stressed on…",
        options: ["1st syllable", "2nd syllable", "both equally", "neither"],
        correct: 0,
        feedback: "THIRty — stress on the 1st syllable.",
      },
      {
        q: "Words ending in -ic are stressed on the syllable…",
        options: ["before -ic", "ending -ic", "first", "last"],
        correct: 0,
        feedback: "photoGRAPHic, ecoNOMic — stress before -ic.",
      },
      {
        q: "'GREENhouse' (compound noun) means…",
        options: [
          "a house painted green",
          "a building for growing plants",
          "an environmentally friendly house",
          "a cold house",
        ],
        correct: 1,
        feedback: "Compound noun, stress on first element.",
      },
      {
        q: "Which has the pattern Ooo?",
        options: ["computer", "beautiful", "engineer", "again"],
        correct: 1,
        feedback: "BEAUtiful = Ooo.",
      },
      {
        q: "Words ending in -ity are stressed…",
        options: [
          "on -ity",
          "on the syllable before -ity",
          "on the first syllable",
          "with no stress",
        ],
        correct: 1,
        feedback: "aBIlity, posiBIlity — stress before -ity.",
      },
      {
        q: "How many syllables does 'photographer' have?",
        options: ["3", "4", "5", "2"],
        correct: 1,
        feedback: "pho-TO-gra-pher = 4 syllables.",
      },
    ],
  },

  // ============ SECTION 5 ============
  {
    id: "intonation",
    number: 5,
    title: "Intonation",
    subtitle: "Prominence, tone units and the music of English",
    color: "rose",
    units: [
      {
        title: "Prominence",
        intro:
          "In any utterance, some syllables stand out more than others. These prominent syllables carry the most important information.",
        examples: [
          { word: "I want a RED car (not blue).", note: "RED is prominent" },
          { word: "I want a red CAR (not bike).", note: "CAR is prominent" },
        ],
      },
      {
        title: "Tone Units",
        intro:
          "Speech is divided into tone units — short chunks, each with one main prominent (tonic) syllable.",
        examples: [
          {
            word: "When I got home // I made some tea // and sat down.",
            note: "3 tone units (//)",
          },
        ],
      },
      {
        title: "Falling vs Rising Tones",
        bullets: [
          "↘ Fall: finished statements, wh-questions, commands.",
          "↗ Rise: yes/no questions, lists (except last item), uncertainty.",
          "↘↗ Fall-rise: reservation, polite contradiction ('Yes, but…').",
        ],
      },
      {
        title: "News vs Not-News",
        intro:
          "We give prominence to NEW information; old/given info stays unprominent.",
        examples: [
          {
            word: "A: Where's John? B: He's in the GARden.",
            note: "GARden = new info",
          },
          {
            word: "A: Is John in the kitchen? B: No, he's in the GARden.",
            note: "GARden contrasts with kitchen",
          },
        ],
      },
    ],
    activities: [
      {
        type: "matching",
        title: "Choose the Tone",
        instructions:
          "Match each utterance to the tone you'd most likely use.",
        pairs: [
          { left: "What's your name?", right: "Fall ↘" },
          { left: "Are you ready?", right: "Rise ↗" },
          { left: "Apples, oranges, and pears.", right: "Rise, rise, fall" },
          { left: "Yes, but… (reservation)", right: "Fall-rise ↘↗" },
          { left: "Sit down!", right: "Fall ↘" },
          { left: "Really? (surprise)", right: "Rise ↗" },
        ],
      },
      {
        type: "categorize",
        title: "Where's the Prominence?",
        instructions:
          "Decide which word should be most prominent in each context.",
        categories: ["First word", "Middle word", "Last word"],
        items: [
          { word: "I want RED shoes (not blue).", category: "Middle word" },
          { word: "I want red SHOES (not socks).", category: "Last word" },
          { word: "I WANT red shoes (not need).", category: "First word" },
          { word: "She lives in PARIS.", category: "Last word" },
          { word: "SHE lives in Paris (not him).", category: "First word" },
        ],
      },
      {
        type: "speak",
        title: "Listen to the Music",
        instructions:
          "Listen to how the tone changes meaning. Try to imitate.",
        items: [
          { text: "You're going home.", label: "↘ statement" },
          { text: "You're going home?", label: "↗ surprised question" },
          { text: "Coffee, tea or juice?", label: "↗ ↗ ↘ list" },
          { text: "Yes, but I'm not sure.", label: "↘↗ reservation" },
        ],
      },
    ],
    quiz: [
      {
        q: "A 'tone unit' contains…",
        options: [
          "one word",
          "one main prominent syllable",
          "two stressed syllables",
          "no stress",
        ],
        correct: 1,
        feedback: "Each tone unit has one tonic (most prominent) syllable.",
      },
      {
        q: "Wh-questions usually use which tone?",
        options: ["Rise ↗", "Fall ↘", "Fall-rise ↘↗", "No tone"],
        correct: 1,
        feedback: "Falling tone is typical for wh-questions.",
      },
      {
        q: "A fall-rise tone often signals…",
        options: ["finality", "certainty", "reservation or 'but…'", "anger"],
        correct: 2,
        feedback: "Yes — 'Yes, but…' implies a hidden reservation.",
      },
      {
        q: "In a list, all items except the LAST usually take…",
        options: ["fall", "rise", "fall-rise", "no tone"],
        correct: 1,
        feedback: "Rising tone signals 'more to come'; final item falls.",
      },
      {
        q: "Yes/no questions typically use…",
        options: ["Fall ↘", "Rise ↗", "Fall-rise ↘↗", "Flat"],
        correct: 1,
        feedback: "Rising tone is typical for yes/no questions.",
      },
      {
        q: "Prominent words usually carry…",
        options: ["old information", "new/important information", "weak forms", "silence"],
        correct: 1,
        feedback: "We highlight the new/contrasting information.",
      },
      {
        q: "'I want RED shoes' (not blue) — what's contrasted?",
        options: ["the wanting", "the colour", "the type of footwear", "nothing"],
        correct: 1,
        feedback: "Stressing RED contrasts the colour.",
      },
      {
        q: "Which utterance most likely uses a fall ↘?",
        options: [
          "Are you tired?",
          "Apples, pears…",
          "Sit down.",
          "Really?",
        ],
        correct: 2,
        feedback: "Commands typically fall.",
      },
      {
        q: "Tone units are separated by…",
        options: ["commas only", "pauses and tone changes", "spaces", "stress marks"],
        correct: 1,
        feedback: "Pauses and shifts in pitch mark tone unit boundaries.",
      },
      {
        q: "If someone says 'You're going HOME?' with rising tone, they are…",
        options: [
          "telling you to leave",
          "asking with surprise",
          "saying goodbye",
          "uncertain about home",
        ],
        correct: 1,
        feedback: "A rise turns a statement into a question.",
      },
    ],
  },

  // ============ SECTION 6 ============
  {
    id: "spelling-grammar",
    number: 6,
    title: "Pronunciation & Spelling, Grammar, Vocabulary",
    subtitle: "Letter–sound rules, -s and -ed endings, homographs",
    color: "emerald",
    units: [
      {
        title: "Pronouncing -s in Plurals and Verbs",
        intro: "The -s/-es ending has THREE pronunciations:",
        table: {
          headers: ["After…", "Sound", "Examples"],
          rows: [
            ["voiceless consonants (/p, t, k, f, θ/)", "/s/", "cats, books, hopes"],
            ["voiced consonants & vowels", "/z/", "dogs, runs, plays"],
            ["sibilants (/s, z, ʃ, ʒ, tʃ, dʒ/)", "/ɪz/", "buses, watches, fridges"],
          ],
        },
      },
      {
        title: "Pronouncing -ed in Past Tense",
        intro: "Same idea — three pronunciations:",
        table: {
          headers: ["After…", "Sound", "Examples"],
          rows: [
            ["voiceless consonants", "/t/", "worked, hoped, washed"],
            ["voiced consonants & vowels", "/d/", "played, opened, called"],
            ["/t/ or /d/", "/ɪd/", "wanted, needed, decided"],
          ],
        },
      },
      {
        title: "C and G: Soft or Hard?",
        bullets: [
          "C is SOFT /s/ before E, I, Y: cell, city, cycle.",
          "C is HARD /k/ elsewhere: cat, cup, clock.",
          "G is often SOFT /dʒ/ before E, I, Y: gem, giant, gym.",
          "G is HARD /ɡ/ elsewhere: go, gap, glass. (Exceptions: get, give!)",
        ],
      },
      {
        title: "Homographs — Same Spelling, Different Sounds",
        examples: [
          {
            word: "row",
            note: "/rəʊ/ = paddle a boat • /raʊ/ = an argument",
          },
          { word: "lead", note: "/liːd/ = guide • /led/ = the metal" },
          { word: "tear", note: "/tɪə/ = from eye • /teə/ = rip" },
          { word: "wind", note: "/wɪnd/ = breeze • /waɪnd/ = to coil" },
        ],
      },
    ],
    activities: [
      {
        type: "categorize",
        title: "Sort -ed Endings",
        instructions:
          "Drop each past-tense verb into the right pronunciation group.",
        categories: ["/t/", "/d/", "/ɪd/"],
        items: [
          { word: "worked", category: "/t/" },
          { word: "hoped", category: "/t/" },
          { word: "washed", category: "/t/" },
          { word: "played", category: "/d/" },
          { word: "opened", category: "/d/" },
          { word: "called", category: "/d/" },
          { word: "wanted", category: "/ɪd/" },
          { word: "needed", category: "/ɪd/" },
          { word: "decided", category: "/ɪd/" },
        ],
      },
      {
        type: "categorize",
        title: "Sort -s Endings",
        instructions: "Decide how the -s/-es is pronounced.",
        categories: ["/s/", "/z/", "/ɪz/"],
        items: [
          { word: "cats", category: "/s/" },
          { word: "books", category: "/s/" },
          { word: "hopes", category: "/s/" },
          { word: "dogs", category: "/z/" },
          { word: "runs", category: "/z/" },
          { word: "plays", category: "/z/" },
          { word: "buses", category: "/ɪz/" },
          { word: "watches", category: "/ɪz/" },
          { word: "fridges", category: "/ɪz/" },
        ],
      },
      {
        type: "matching",
        title: "Homographs: Match the Meaning",
        instructions: "Match each pronunciation to its meaning.",
        pairs: [
          { left: "row /rəʊ/", right: "paddle a boat" },
          { left: "row /raʊ/", right: "a noisy argument" },
          { left: "lead /liːd/", right: "to guide" },
          { left: "lead /led/", right: "a heavy metal" },
          { left: "tear /tɪə/", right: "drop from the eye" },
          { left: "tear /teə/", right: "to rip" },
        ],
      },
    ],
    quiz: [
      {
        q: "How is '-ed' pronounced in 'worked'?",
        options: ["/t/", "/d/", "/ɪd/", "silent"],
        correct: 0,
        feedback: "After voiceless /k/, '-ed' = /t/.",
      },
      {
        q: "How is '-ed' pronounced in 'wanted'?",
        options: ["/t/", "/d/", "/ɪd/", "/əd/"],
        correct: 2,
        feedback: "After /t/ or /d/, the ending = /ɪd/.",
      },
      {
        q: "How is '-s' pronounced in 'dogs'?",
        options: ["/s/", "/z/", "/ɪz/", "silent"],
        correct: 1,
        feedback: "After voiced /ɡ/, '-s' = /z/.",
      },
      {
        q: "How is '-es' pronounced in 'watches'?",
        options: ["/s/", "/z/", "/ɪz/", "/ə/"],
        correct: 2,
        feedback: "After sibilant /tʃ/, the ending = /ɪz/.",
      },
      {
        q: "Which has SOFT C (/s/)?",
        options: ["cat", "cup", "city", "clock"],
        correct: 2,
        feedback: "Before 'i', c is soft: city /ˈsɪti/.",
      },
      {
        q: "Which has SOFT G (/dʒ/)?",
        options: ["go", "gap", "giant", "glass"],
        correct: 2,
        feedback: "Before 'i', g is usually soft: giant.",
      },
      {
        q: "'lead' meaning the metal is pronounced…",
        options: ["/liːd/", "/led/", "/leɪd/", "/lɪd/"],
        correct: 1,
        feedback: "Metal lead = /led/. The verb (to guide) = /liːd/.",
      },
      {
        q: "'tear' (drop from the eye) is pronounced…",
        options: ["/teə/", "/tɪə/", "/tɜː/", "/tɔː/"],
        correct: 1,
        feedback: "Eye = /tɪə/; rip = /teə/.",
      },
      {
        q: "How is '-s' pronounced in 'cats'?",
        options: ["/s/", "/z/", "/ɪz/", "silent"],
        correct: 0,
        feedback: "After voiceless /t/, '-s' = /s/.",
      },
      {
        q: "Which two G-words are EXCEPTIONS to the soft-G rule before E/I?",
        options: ["go / gap", "gem / gym", "get / give", "giant / ginger"],
        correct: 2,
        feedback: "'Get' and 'give' keep hard /ɡ/.",
      },
    ],
  },

  // ============ SECTION 7 ============
  {
    id: "testing",
    number: 7,
    title: "Testing Your Pronunciation",
    subtitle: "Self-diagnose: vowels, weak forms, stress, prominence and tone",
    color: "sky",
    units: [
      {
        title: "How to Use This Section",
        intro:
          "Work through these mixed quizzes to find which areas of pronunciation still cause you trouble. Then revisit those sections.",
        bullets: [
          "Be honest — say each word out loud before clicking.",
          "Note any item you got wrong; review the relevant section.",
          "Repeat after a few days to track progress.",
        ],
      },
      {
        title: "Common Trouble Spots",
        bullets: [
          "Confusing /ɪ/ and /iː/ (ship/sheep), /æ/ and /ʌ/ (cat/cut).",
          "Adding extra vowels in clusters (esport ≠ sport).",
          "Stressing -teen and -ty numbers wrongly.",
          "Using strong forms where weak forms are expected.",
          "Flat intonation that sounds robotic or rude.",
        ],
      },
    ],
    activities: [
      {
        type: "speak",
        title: "Read-Aloud Diagnostic",
        instructions:
          "Read each sentence aloud. Then play to compare. Listen for vowels, stress and rhythm.",
        items: [
          { text: "Thirteen children went to the supermarket at three thirty." },
          { text: "I'd like a cup of tea and some fish and chips, please." },
          { text: "She works at a photographic studio and takes beautiful photographs." },
          { text: "If I'd known, I wouldn't have decided to wait for him." },
        ],
      },
    ],
    quiz: [
      {
        q: "'I will record the meeting' — where is the stress on 'record'?",
        options: ["1st syllable", "2nd syllable"],
        correct: 1,
        feedback: "Verb form: reCORD.",
      },
      {
        q: "'She bought a new record' — stress on 'record'?",
        options: ["1st syllable", "2nd syllable"],
        correct: 0,
        feedback: "Noun form: REcord.",
      },
      {
        q: "Which word has /iː/?",
        options: ["ship", "live (verb)", "leave", "live (adj)"],
        correct: 2,
        feedback: "leave = /liːv/.",
      },
      {
        q: "Which '-ed' is /ɪd/?",
        options: ["walked", "played", "decided", "called"],
        correct: 2,
        feedback: "decid-ed → /ɪd/ after /d/.",
      },
      {
        q: "Which number is stressed on the 2nd syllable?",
        options: ["forty", "fifty", "fifteen", "sixty"],
        correct: 2,
        feedback: "fifTEEN.",
      },
      {
        q: "Yes/no questions typically end with…",
        options: ["fall ↘", "rise ↗", "fall-rise ↘↗", "no tone"],
        correct: 1,
        feedback: "Rising tone.",
      },
      {
        q: "Weak form of 'and' is…",
        options: ["/ænd/", "/ən/", "/ænt/", "/ɪnd/"],
        correct: 1,
        feedback: "Usually /ən/ or even /n/.",
      },
      {
        q: "/θ/ as in 'thin' is made by…",
        options: ["pressing lips together", "tongue between teeth", "back of throat", "rounded lips"],
        correct: 1,
        feedback: "Tongue tip lightly between the teeth.",
      },
      {
        q: "Which letter pair makes /ʃ/?",
        options: ["CH", "SH", "TH", "PH"],
        correct: 1,
        feedback: "SH = /ʃ/ as in 'ship'.",
      },
      {
        q: "Which is a diphthong?",
        options: ["/iː/", "/eɪ/", "/uː/", "/ɑː/"],
        correct: 1,
        feedback: "/eɪ/ as in 'face'.",
      },
    ],
  },

  // ============ SECTION 8 ============
  {
    id: "resources",
    number: 8,
    title: "Resources: Tongue Twisters, Limericks & Jokes",
    subtitle: "Authentic material for connected speech and rhythm",
    color: "fuchsia",
    units: [
      {
        title: "Why Tongue Twisters?",
        intro:
          "Tongue twisters force your articulators to switch quickly between similar sounds — perfect for accuracy practice.",
        bullets: [
          "Start slowly. Accuracy first, speed second.",
          "Repeat each line 3 times.",
          "Record yourself and compare.",
        ],
      },
      {
        title: "Why Limericks?",
        intro:
          "Limericks are 5-line poems with a strict rhythm (AABBA): perfect for practising natural English stress and intonation.",
        examples: [
          {
            word:
              "There ONCE was a MAN from Pe-RU\nWho DREAMED he was EAting his SHOE\nHe a-WOKE in the NIGHT\nWith a TER-ri-ble FRIGHT\nAnd FOUND it was PER-fect-ly TRUE.",
          },
        ],
      },
      {
        title: "Why 'Knock-Knock' Jokes?",
        intro:
          "Knock-knock jokes rely on linking and weak forms — exactly the features that make English sound natural.",
        examples: [
          {
            word:
              "— Knock, knock.\n— Who's there?\n— Lettuce.\n— Lettuce who?\n— Lettuce in, it's cold out here! ('let us in')",
          },
        ],
      },
    ],
    activities: [
      {
        type: "speak",
        title: "Tongue Twisters",
        instructions:
          "Listen first, then repeat slowly, then up to speed. Record yourself!",
        items: [
          { text: "She sells seashells by the seashore.", label: "/s/ vs /ʃ/" },
          { text: "Red lorry, yellow lorry, red lorry, yellow lorry.", label: "/r/ vs /l/" },
          { text: "Peter Piper picked a peck of pickled peppers.", label: "/p/" },
          { text: "How much wood would a woodchuck chuck if a woodchuck could chuck wood?", label: "/w/ and /tʃ/" },
          { text: "The sixth sick sheikh's sixth sheep's sick.", label: "consonant clusters" },
        ],
      },
      {
        type: "speak",
        title: "A Limerick",
        instructions:
          "Listen for the strong-weak rhythm: ti-TUM ti-ti-TUM ti-ti-TUM.",
        items: [
          {
            text:
              "There once was a man from Peru, who dreamed he was eating his shoe. He awoke in the night, with a terrible fright, and found it was perfectly true.",
          },
        ],
      },
      {
        type: "matching",
        title: "Knock-Knock Jokes: Spot the Linking",
        instructions:
          "Match each punchline to the linked sound it plays on.",
        pairs: [
          { left: "Lettuce in!", right: "= 'Let us in'" },
          { left: "Olive you.", right: "= 'I love you'" },
          { left: "Dishes Pat.", right: "= 'This is Pat'" },
          { left: "Cows go.", right: "= 'Cows say moo, not who'" },
        ],
      },
    ],
    quiz: [
      {
        q: "Tongue twisters are mainly useful for…",
        options: [
          "memorising vocabulary",
          "articulation accuracy at speed",
          "learning grammar",
          "spelling practice",
        ],
        correct: 1,
        feedback: "They train your mouth to switch sounds quickly.",
      },
      {
        q: "The rhyme scheme of a limerick is…",
        options: ["ABAB", "AABBA", "ABBA", "AAAA"],
        correct: 1,
        feedback: "AABBA — lines 1, 2, 5 rhyme; lines 3 and 4 rhyme.",
      },
      {
        q: "'Lettuce in' works as a knock-knock joke because…",
        options: [
          "it rhymes",
          "it sounds like 'Let us in'",
          "it has alliteration",
          "it's a question",
        ],
        correct: 1,
        feedback: "Linking + weak forms make 'Let us' sound like 'Lettuce'.",
      },
      {
        q: "'She sells seashells' practises which contrast?",
        options: ["/s/ vs /ʃ/", "/p/ vs /b/", "/v/ vs /w/", "/θ/ vs /s/"],
        correct: 0,
        feedback: "Switching between /s/ (sells) and /ʃ/ (shells).",
      },
      {
        q: "When practising tongue twisters, you should…",
        options: [
          "go as fast as possible from the start",
          "start slowly and build up speed",
          "skip difficult sounds",
          "ignore stress",
        ],
        correct: 1,
        feedback: "Accuracy first, then speed.",
      },
      {
        q: "Limericks are good for practising…",
        options: ["IPA symbols", "rhythm and stress", "vowel charts", "spelling"],
        correct: 1,
        feedback: "The strong-weak rhythm of English.",
      },
      {
        q: "'Red lorry, yellow lorry' targets which sounds?",
        options: ["/p/ /b/", "/r/ /l/", "/s/ /z/", "/v/ /w/"],
        correct: 1,
        feedback: "/r/ vs /l/ — a classic minimal contrast.",
      },
      {
        q: "How many lines does a limerick have?",
        options: ["3", "4", "5", "6"],
        correct: 2,
        feedback: "Five lines.",
      },
      {
        q: "Knock-knock jokes most often play on…",
        options: ["spelling", "grammar", "linking and homophones", "intonation only"],
        correct: 2,
        feedback: "Connected speech features make the pun work.",
      },
      {
        q: "The best way to improve from these resources is to…",
        options: [
          "read silently",
          "listen and repeat aloud, then record yourself",
          "translate them",
          "memorise the spelling",
        ],
        correct: 1,
        feedback: "Speak, listen back, compare — repeat!",
      },
    ],
  },
];
