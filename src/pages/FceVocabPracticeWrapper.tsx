import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

type ActivityKey = 'hub' | 'mc' | 'gap' | 'sort' | 'sentence' | 'confusing' | 'mdt';

const FceVocabPracticeWrapper = () => {
  const [currentActivity, setCurrentActivity] = useState<ActivityKey>('hub');
  const [draggedItem, setDraggedItem] = useState<HTMLElement | null>(null);

  // Multiple Choice State
  const [mcIndex, setMcIndex] = useState(0);
  const [mcScore, setMcScore] = useState(0);
  const [mcSelectedOption, setMcSelectedOption] = useState<string | null>(null);
  const [mcFeedback, setMcFeedback] = useState("");
  const [mcShowNext, setMcShowNext] = useState(false);
  const [mcComplete, setMcComplete] = useState(false);

  // Unscramble State
  const [gapIndex, setGapIndex] = useState(0);
  const [gapInput, setGapInput] = useState("");
  const [gapFeedback, setGapFeedback] = useState("");
  const [gapShowNext, setGapShowNext] = useState(false);
  const [gapComplete, setGapComplete] = useState(false);

  // Sorting State
  const [sortWords, setSortWords] = useState<string[]>([]);
  const [sortCategories, setSortCategories] = useState<{[key: string]: string[]}>({
    arms_hands: [],
    mouth_nose: [],
    feet_legs: [],
    eyes: []
  });
  const [sortChecked, setSortChecked] = useState(false);
  const [sortFeedback, setSortFeedback] = useState("");

  // Sentence State
  const [sentenceIndex, setSentenceIndex] = useState(0);
  const [sentenceInput, setSentenceInput] = useState("");
  const [sentenceFeedback, setSentenceFeedback] = useState("");
  const [sentenceShowNext, setSentenceShowNext] = useState(false);
  const [sentenceComplete, setSentenceComplete] = useState(false);

  // Confusing Words State
  const [confusingIndex, setConfusingIndex] = useState(0);
  const [confusingScore, setConfusingScore] = useState(0);
  const [confusingFeedback, setConfusingFeedback] = useState("");
  const [confusingShowNext, setConfusingShowNext] = useState(false);
  const [confusingComplete, setConfusingComplete] = useState(false);

  // MDT State
  const [mdtIndex, setMdtIndex] = useState(0);
  const [mdtScore, setMdtScore] = useState(0);
  const [mdtInputs, setMdtInputs] = useState<string[]>([]);
  const [mdtFeedback, setMdtFeedback] = useState("");
  const [mdtShowNext, setMdtShowNext] = useState(false);
  const [mdtComplete, setMdtComplete] = useState(false);
  const [mdtChecked, setMdtChecked] = useState(false);

  // Data
  const mcQuestions = [
    { q: "British people and people in my country have a lot ______.", options: ["in common", "in similar", "in particular"], a: "in common" },
    { q: "The ______ in weather between my country and that in the United Kingdom is very noticeable.", options: ["contrast", "compare", "comparison"], a: "contrast" },
    { q: "The United Kingdom and my country ______ a lot in many respects.", options: ["different", "differentiate", "differ"], a: "differ" },
    { q: "A lot of British people are not aware that there is a big ______ between the Spanish and Portuguese languages.", options: ["different", "difference", "differ"], a: "difference" },
    { q: "I find it difficult to ______ between British English and American English.", options: ["distinctive", "extinguish", "distinguish"], a: "distinguish" },
    { q: "There's a big ______ between learning a language and actually using it.", options: ["distinction", "distinctive", "distinguish"], a: "distinction" },
    { q: "In my country, it is illegal to ______ between men and women.", options: ["difference", "discipline", "discriminate"], a: "discriminate" },
    { q: "My country covers a large area. ______, the United Kingdom is quite small.", options: ["By similar means", "By way of contrast", "In the same way"], a: "By way of contrast" },
    { q: "Customs in my country are ______ to those in the United Kingdom.", options: ["common", "similar", "same"], a: "similar" },
    { q: "As far as I can tell, young people in the United Kingdom are physically ______ to young people in my country.", options: ["identical", "similar", "same"], a: "identical" },
    { q: "In my country, people live to eat, ______ in the United Kingdom people eat to live.", options: ["therefore", "where", "whereas"], a: "whereas" },
    { q: "Young people in my country share the same interests as those in the United Kingdom, but in other respects we are as different as ______.", options: ["rain and sun", "chalk and cheese", "hot and cold"], a: "chalk and cheese" },
    { q: "Physically, my country is quite close to the United Kingdom, but culturally we are ______.", options: ["worlds apart", "years away", "two sandwiches short of a picnic"], a: "worlds apart" }
  ];

  const gapQuestions = [
    { q: "My sister's boyfriend is so handsome. I really ______ him.", hint: "nafyc", a: "fancy" },
    { q: "My mother is so kind and gentle. I ______ her.", hint: "earod", a: "adore" },
    { q: "My brother is one of the best people in the world. I absolutely ______ him.", hint: "horswip", a: "worship" },
    { q: "I always ______ the summer holidays.", hint: "kolo drawrof ot", a: "look forward to" },
    { q: "I will eat almost anything, but I really ______ seafood.", hint: "thae", a: "hate" },
    { q: "I'm afraid I ______ people who interrupt when I'm speaking.", hint: "heatlo", a: "loathe" },
  ];

  const sortAllWords = ['beckon', 'blink', 'cough', 'crawl', 'creep', 'cross', 'dash', 'flex', 'frown', 'gaze', 'glance', 'glare', 'glimpse', 'grab', 'groan', 'grope', 'hiccup', 'jump', 'laugh', 'leap', 'limp', 'march', 'mutter', 'nudge', 'pant', 'pat', 'peep', 'peer', 'point', 'puff', 'punch', 'rub', 'scream', 'shout', 'sigh', 'slap', 'slip', 'snap', 'snarl', 'sneeze', 'sniff', 'snore', 'squeeze', 'stagger', 'stammer', 'stare', 'stretch', 'stroke', 'stroll', 'tap', 'throw', 'trip', 'trudge', 'wander', 'watch', 'wave', 'whisper', 'wink', 'wipe', 'yawn', 'yell'];
  
  const sortCorrectCategories = {
    arms_hands: ['beckon', 'flex', 'grab', 'grope', 'nudge', 'pat', 'point', 'punch', 'rub', 'slap', 'snap', 'squeeze', 'stretch', 'stroke', 'tap', 'throw', 'wave', 'wipe'],
    mouth_nose: ['cough', 'frown', 'groan', 'hiccup', 'laugh', 'mutter', 'pant', 'puff', 'scream', 'shout', 'sigh', 'snarl', 'sneeze', 'sniff', 'snore', 'stammer', 'whisper', 'yawn', 'yell'],
    feet_legs: ['crawl', 'creep', 'cross', 'dash', 'jump', 'leap', 'limp', 'march', 'slip', 'stagger', 'stroll', 'trip', 'trudge', 'wander'],
    eyes: ['blink', 'gaze', 'glance', 'glare', 'glimpse', 'peep', 'peer', 'stare', 'watch', 'wink']
  };

  const sentenceQuestions = [
    { q: "She ______ through the smoke-filled room on her hands and knees.", a: "crawled" },
    { q: "He ______ in terror when he saw the snake.", a: "screamed" },
    { q: "We spent most of the morning ______ with difficulty through the thick snow.", a: "trudging" },
    { q: "I ______ a sudden movement out of the corner of my eye.", a: "glimpsed" },
    { q: "Brian was ______ us to join him.", a: "beckoning" },
    { q: "She ______ violently. 'Bless you', I said.", a: "sneezed" },
    { q: "I watched the cat slowly ______ towards the unsuspecting bird.", a: "creep" },
    { q: "I asked her why she was ______, and she told me she didn't understand the homework.", a: "frowning" },
    { q: "The last time I saw her, she was ______ goodbye to me from the beach.", a: "waving" },
    { q: "She ______ all night and kept me awake.", a: "coughed" },
    { q: "The audience were ______ their feet in time to the music.", a: "tapping" },
    { q: "They ______ at me angrily, not saying a word.", a: "glared" },
    { q: "I ______ her with my elbow and told her to be quiet.", a: "nudged" },
    { q: "Sally ______ with relief when she eventually saw him.", a: "sighed" },
  ];

  const confusingQuestions = [
    { q_start: "Twenty years ago, very few people owned computers, but", q_end: "a lot of people have them.", options: ["actually", "now"], a: "now" },
    { q_start: "My poor pronunciation sometimes", q_end: "my ability to communicate in English.", options: ["affects", "effects"], a: "affects" },
    { q_start: "I haven't seen her", q_end: "this morning.", options: ["already", "yet"], a: "yet" },
    { q_start: "I have always been", q_end: "snakes and spiders.", options: ["worried about", "afraid of"], a: "afraid of" },
    { q_start: "My limited vocabulary", q_end: "me from getting a good grade in the FCE.", options: ["avoided", "prevented"], a: "prevented" },
    { q_start: "At three o'clock, I", q_end: "the children from school.", options: ["bring", "fetch"], a: "fetch" },
    { q_start: "If you learn the vocabulary in this book, you have a better", q_end: "of passing the FCE.", options: ["chance", "possibility"], a: "chance" },
    { q_start: "My English isn't so good. I'm always making", q_end: "mistakes.", options: ["continuous", "continual"], a: "continual" },
    { q_start: "Last summer we had a", q_end: "holiday in Italy.", options: ["formidable", "wonderful"], a: "wonderful" },
    { q_start: "'Did you enjoy the party?' 'Yes, it was", q_end: ".'", options: ["fun", "funny"], a: "fun" },
    { q_start: "I", q_end: "swimming and running every day.", options: ["go", "play"], a: "go" },
    { q_start: "Molly asked me if I would like to", q_end: "her to the cinema.", options: ["go with", "follow"], a: "go with" },
    { q_start: "You can borrow my car, but if you", q_end: "it, I'll never talk to you again!", options: ["harm", "damage"], a: "damage" },
    { q_start: "I like working here. It's a good", q_end: ".", options: ["job", "work"], a: "job" },
    { q_start: "She's such a", q_end: "girl; she's always helping people.", options: ["kind", "sympathetic"], a: "kind" },
    { q_start: "I asked him to", q_end: "me £20 until Monday.", options: ["borrow", "lend"], a: "lend" },
    { q_start: "My mother asked me to", q_end: "the table.", options: ["lay", "lie"], a: "lay" },
    { q_start: "I love being in the", q_end: "in spring.", options: ["countryside", "nature"], a: "countryside" },
    { q_start: "I thought the painting was worth a lot of money, but in fact it was", q_end: ".", options: ["priceless", "worthless"], a: "worthless" },
    { q_start: "I sat on the beach at dawn and watched the sun", q_end: ".", options: ["raise", "rise"], a: "rise" },
    { q_start: "When we go to town, could you", q_end: "me to buy some milk?", options: ["remember", "remind"], a: "remind" },
    { q_start: "From the top of the hill, you have a marvellous", q_end: "of the town.", options: ["view", "scenery"], a: "view" },
    { q_start: "He's a", q_end: "boy and gets upset easily.", options: ["sensible", "sensitive"], a: "sensitive" },
    { q_start: "When you come to school tomorrow, don't forget to", q_end: "your dictionary.", options: ["bring", "take"], a: "bring" }
  ];

  const mdtQuestions = [
    { q: "The company is ___ a large profit, but in the meantime they're ___ a lot of damage to the environment.", a: ["making", "doing"] },
    { q: "She was asked to ___ a quick speech, but she ___ her time.", a: ["make", "took"] },
    { q: "After we've ___ our homework, we should ___ the washing up.", a: ["done", "do"] },
    { q: "___ a look at all these mistakes you've ___!", a: ["Take", "made"] },
    { q: "Shall we ___ a taxi or go by train?", a: ["take"] },
    { q: "At first, he ___ a great effort to ___ an interest in his lessons.", a: ["made", "take"] },
    { q: "This is a photograph I ___ of some friends we ___ when we were on holiday.", a: ["took", "made"] },
    { q: "She told me to ___ a seat, and then went to ___ some phone calls.", a: ["take", "make"] },
    { q: "___ a test is a bit like ___ a crossword: you finish it eventually!", a: ["Doing", "doing"] },
    { q: "The policeman ___ my name and address, and ___ a few notes.", a: ["took", "made"] },
    { q: "We had to ___ a lot of work before we began to ___ any money.", a: ["do", "make"] },
    { q: "The conference ___ place in January, and since then we've ___ a lot of business with the other companies there.", a: ["took", "done"] },
    { q: "You should really ___ my advice and hire somebody to ___ your ironing, washing and other housework.", a: ["take", "do"] },
    { q: "After I had ___ the bed, he lay down and ___ his medicine.", a: ["made", "took"] },
    { q: "It won't ___ any harm to ___ some enquiries.", a: ["do", "make"] },
    { q: "Our company ___ a loss in its first year, but now we're ___ well.", a: ["made", "doing"] }
  ];

  // Initialize sorting game
  useEffect(() => {
    if (currentActivity === 'sort') {
      setSortWords([...sortAllWords]);
      setSortCategories({ arms_hands: [], mouth_nose: [], feet_legs: [], eyes: [] });
      setSortChecked(false);
      setSortFeedback("");
    }
  }, [currentActivity]);

  // Initialize MDT inputs when question loads
  useEffect(() => {
    if (currentActivity === 'mdt' && !mdtComplete) {
      const blanksCount = (mdtQuestions[mdtIndex].q.match(/___/g) || []).length;
      setMdtInputs(new Array(blanksCount).fill(''));
      setMdtChecked(false);
    }
  }, [mdtIndex, currentActivity, mdtComplete]);

  const switchActivity = (activity: ActivityKey) => {
    setCurrentActivity(activity);
    window.scrollTo(0, 0);
  };

  // Multiple Choice Handlers
  const handleMcCheck = () => {
    if (!mcSelectedOption) {
      setMcFeedback("Please select an answer!");
      return;
    }
    const correct = mcQuestions[mcIndex].a;
    if (mcSelectedOption === correct) {
      setMcScore(mcScore + 1);
      setMcFeedback("Correct!");
    } else {
      setMcFeedback(`Incorrect. The correct answer is "${correct}".`);
    }
    setMcShowNext(true);
  };

  const handleMcNext = () => {
    if (mcIndex + 1 >= mcQuestions.length) {
      setMcComplete(true);
    } else {
      setMcIndex(mcIndex + 1);
      setMcSelectedOption(null);
      setMcFeedback("");
      setMcShowNext(false);
    }
  };

  const handleMcRestart = () => {
    setMcIndex(0);
    setMcScore(0);
    setMcSelectedOption(null);
    setMcFeedback("");
    setMcShowNext(false);
    setMcComplete(false);
  };

  // Unscramble Handlers
  const handleGapCheck = () => {
    if (!gapInput.trim()) {
      setGapFeedback("Please type an answer.");
      return;
    }
    const correct = gapQuestions[gapIndex].a.toLowerCase();
    if (gapInput.trim().toLowerCase() === correct) {
      setGapFeedback("Correct!");
    } else {
      setGapFeedback(`Not quite. The correct answer is "${gapQuestions[gapIndex].a}".`);
    }
    setGapShowNext(true);
  };

  const handleGapNext = () => {
    if (gapIndex + 1 >= gapQuestions.length) {
      setGapComplete(true);
    } else {
      setGapIndex(gapIndex + 1);
      setGapInput("");
      setGapFeedback("");
      setGapShowNext(false);
    }
  };

  const handleGapRestart = () => {
    setGapIndex(0);
    setGapInput("");
    setGapFeedback("");
    setGapShowNext(false);
    setGapComplete(false);
  };

  // Sorting Handlers
  const handleDragStart = (word: string) => {
    const elem = document.querySelector(`[data-word="${word}"]`) as HTMLElement;
    setDraggedItem(elem);
  };

  const handleDrop = (category: string) => {
    if (draggedItem) {
      const word = draggedItem.dataset.word;
      if (word) {
        setSortWords(sortWords.filter(w => w !== word));
        setSortCategories({
          ...sortCategories,
          [category]: [...sortCategories[category], word]
        });
      }
      setDraggedItem(null);
    }
  };

  const handleSortCheck = () => {
    let correct = 0;
    let total = 0;
    
    Object.keys(sortCategories).forEach(cat => {
      sortCategories[cat].forEach(word => {
        total++;
        if (sortCorrectCategories[cat as keyof typeof sortCorrectCategories].includes(word)) {
          correct++;
        }
      });
    });
    
    setSortFeedback(`You placed ${correct} out of ${total} words correctly.`);
    setSortChecked(true);
  };

  const handleSortRestart = () => {
    setSortWords([...sortAllWords]);
    setSortCategories({ arms_hands: [], mouth_nose: [], feet_legs: [], eyes: [] });
    setSortChecked(false);
    setSortFeedback("");
  };

  // Sentence Handlers
  const handleSentenceCheck = () => {
    if (!sentenceInput.trim()) {
      setSentenceFeedback("Please type an answer.");
      return;
    }
    const correct = sentenceQuestions[sentenceIndex].a.toLowerCase();
    if (sentenceInput.trim().toLowerCase() === correct) {
      setSentenceFeedback("Correct!");
    } else {
      setSentenceFeedback(`Not quite. The correct answer is "${sentenceQuestions[sentenceIndex].a}".`);
    }
    setSentenceShowNext(true);
  };

  const handleSentenceNext = () => {
    if (sentenceIndex + 1 >= sentenceQuestions.length) {
      setSentenceComplete(true);
    } else {
      setSentenceIndex(sentenceIndex + 1);
      setSentenceInput("");
      setSentenceFeedback("");
      setSentenceShowNext(false);
    }
  };

  const handleSentenceRestart = () => {
    setSentenceIndex(0);
    setSentenceInput("");
    setSentenceFeedback("");
    setSentenceShowNext(false);
    setSentenceComplete(false);
  };

  // Confusing Words Handlers
  const handleConfusingAnswer = (answer: string) => {
    const correct = confusingQuestions[confusingIndex].a;
    if (answer === correct) {
      setConfusingScore(confusingScore + 1);
      setConfusingFeedback("Correct!");
    } else {
      setConfusingFeedback(`Not quite. The correct answer is "${correct}".`);
    }
    setConfusingShowNext(true);
  };

  const handleConfusingNext = () => {
    if (confusingIndex + 1 >= confusingQuestions.length) {
      setConfusingComplete(true);
    } else {
      setConfusingIndex(confusingIndex + 1);
      setConfusingFeedback("");
      setConfusingShowNext(false);
    }
  };

  const handleConfusingRestart = () => {
    setConfusingIndex(0);
    setConfusingScore(0);
    setConfusingFeedback("");
    setConfusingShowNext(false);
    setConfusingComplete(false);
  };

  // MDT Handlers
  const handleMdtCheck = () => {
    const correctAnswers = mdtQuestions[mdtIndex].a;
    let allCorrect = true;
    
    mdtInputs.forEach((input, idx) => {
      if (input.trim().toLowerCase() !== correctAnswers[idx].toLowerCase()) {
        allCorrect = false;
      }
    });

    if (allCorrect) {
      setMdtScore(mdtScore + 1);
      setMdtFeedback("Correct!");
    } else {
      setMdtFeedback(`Not quite. The correct answer${correctAnswers.length > 1 ? 's are' : ' is'}: ${correctAnswers.join(', ')}`);
    }
    setMdtChecked(true);
    setMdtShowNext(true);
  };

  const handleMdtNext = () => {
    if (mdtIndex + 1 >= mdtQuestions.length) {
      setMdtComplete(true);
    } else {
      setMdtIndex(mdtIndex + 1);
      setMdtFeedback("");
      setMdtShowNext(false);
    }
  };

  const handleMdtRestart = () => {
    setMdtIndex(0);
    setMdtScore(0);
    setMdtFeedback("");
    setMdtShowNext(false);
    setMdtComplete(false);
  };

  const renderMdtQuestion = () => {
    const question = mdtQuestions[mdtIndex].q;
    const parts = question.split('___');
    const correctAnswers = mdtQuestions[mdtIndex].a;
    
    return (
      <p className="text-lg text-center leading-relaxed">
        {parts.map((part, idx) => (
          <span key={idx}>
            {part}
            {idx < parts.length - 1 && (
              <input
                type="text"
                value={mdtInputs[idx] || ''}
                onChange={(e) => {
                  const newInputs = [...mdtInputs];
                  newInputs[idx] = e.target.value;
                  setMdtInputs(newInputs);
                }}
                disabled={mdtChecked}
                className={`border-b-2 outline-none text-center w-28 mx-1 ${
                  mdtChecked
                    ? mdtInputs[idx]?.trim().toLowerCase() === correctAnswers[idx].toLowerCase()
                      ? 'border-green-500 text-green-600'
                      : 'border-red-500 text-red-600'
                    : 'border-gray-400 focus:border-indigo-500'
                }`}
              />
            )}
          </span>
        ))}
      </p>
    );
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Navigation />
      
      <header className="bg-white shadow-md sticky top-0 z-20">
        <div className="container mx-auto px-6 py-4 text-center">
          <h1 className="text-3xl font-bold text-teal-600">FCE Vocab Tester</h1>
        </div>
      </header>

      <main className="container mx-auto p-6 flex-1">
        {/* Activity Hub */}
        {currentActivity === 'hub' && (
          <section className="animate-fade-in">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-800">Welcome!</h2>
              <p className="text-lg text-gray-600 mt-2">Choose an activity below to start practicing.</p>
            </div>
            <div className="flex flex-wrap justify-center gap-8">
              <div className="bg-white p-8 rounded-xl shadow-lg w-full md:w-2/5 lg:w-[30%] text-center transition transform hover:-translate-y-2">
                <h3 className="text-2xl font-bold text-pink-600 mb-4">Multiple Choice Challenge</h3>
                <p className="text-gray-600 mb-6">Test your knowledge by choosing the word that best completes each sentence. A classic way to build your vocabulary.</p>
                <Button onClick={() => switchActivity('mc')} className="bg-pink-500 hover:bg-pink-600 w-full">
                  Start Activity
                </Button>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-lg w-full md:w-2/5 lg:w-[30%] text-center transition transform hover:-translate-y-2">
                <h3 className="text-2xl font-bold text-purple-600 mb-4">Unscramble the Words</h3>
                <p className="text-gray-600 mb-6">Put your brain to the test! Rearrange the jumbled letters to form the correct word or phrase related to likes and dislikes.</p>
                <Button onClick={() => switchActivity('gap')} className="bg-purple-500 hover:bg-purple-600 w-full">
                  Start Activity
                </Button>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-lg w-full md:w-2/5 lg:w-[30%] text-center transition transform hover:-translate-y-2">
                <h3 className="text-2xl font-bold text-sky-600 mb-4">Action Word Sorting</h3>
                <p className="text-gray-600 mb-6">Drag and drop action words into the correct categories based on which part of the body performs them. A fun, interactive challenge!</p>
                <Button onClick={() => switchActivity('sort')} className="bg-sky-500 hover:bg-sky-600 w-full">
                  Start Activity
                </Button>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-lg w-full md:w-2/5 lg:w-[30%] text-center transition transform hover:-translate-y-2">
                <h3 className="text-2xl font-bold text-orange-600 mb-4">Sentence Completion</h3>
                <p className="text-gray-600 mb-6">Complete the sentences with the correct form of an action word. This will test your grammar and vocabulary in context.</p>
                <Button onClick={() => switchActivity('sentence')} className="bg-orange-500 hover:bg-orange-600 w-full">
                  Start Activity
                </Button>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-lg w-full md:w-2/5 lg:w-[30%] text-center transition transform hover:-translate-y-2">
                <h3 className="text-2xl font-bold text-green-600 mb-4">Confusing Words</h3>
                <p className="text-gray-600 mb-6">Choose the correct word from the pair of commonly confused words to complete the sentence.</p>
                <Button onClick={() => switchActivity('confusing')} className="bg-green-500 hover:bg-green-600 w-full">
                  Start Activity
                </Button>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-lg w-full md:w-2/5 lg:w-[30%] text-center transition transform hover:-translate-y-2">
                <h3 className="text-2xl font-bold text-indigo-600 mb-4">Make, Do & Take</h3>
                <p className="text-gray-600 mb-6">Complete the sentences with the correct form of 'make', 'do', or 'take'. A common challenge for FCE students!</p>
                <Button onClick={() => switchActivity('mdt')} className="bg-indigo-500 hover:bg-indigo-600 w-full">
                  Start Activity
                </Button>
              </div>
            </div>
          </section>
        )}

        {/* Multiple Choice Activity */}
        {currentActivity === 'mc' && (
          <section className="animate-fade-in">
            <div className="bg-white p-8 rounded-xl shadow-lg max-w-2xl mx-auto">
              <h2 className="text-2xl font-bold text-center mb-2 text-pink-600">Multiple Choice Challenge</h2>
              <h3 className="text-xl font-semibold text-center text-gray-700 mb-4">Comparison & Contrast</h3>
              <p className="text-center text-gray-500 mb-6">Choose the word that best completes the sentence.</p>
              
              {!mcComplete ? (
                <>
                  <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
                    <div className="bg-teal-500 h-2.5 rounded-full" style={{ width: `${(mcIndex / mcQuestions.length) * 100}%` }}></div>
                  </div>
                  <div className="flex justify-between mb-4 text-sm font-medium text-gray-600">
                    <span>Question {mcIndex + 1}/{mcQuestions.length}</span>
                    <span>Score: {mcScore}</span>
                  </div>
                  
                  <p className="text-lg mb-4 text-center">{mcQuestions[mcIndex].q}</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {mcQuestions[mcIndex].options.map((option, idx) => (
                      <button
                        key={idx}
                        onClick={() => !mcShowNext && setMcSelectedOption(option)}
                        disabled={mcShowNext}
                        className={`p-3 border rounded-lg text-left hover:bg-amber-100 transition focus:outline-none focus:ring-2 focus:ring-amber-400 ${
                          mcSelectedOption === option ? 'bg-amber-300 ring-2 ring-amber-500' : ''
                        } ${mcShowNext && mcSelectedOption === option && option === mcQuestions[mcIndex].a ? 'bg-green-200' : ''} ${
                          mcShowNext && mcSelectedOption === option && option !== mcQuestions[mcIndex].a ? 'bg-red-200' : ''
                        }`}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                  
                  {mcFeedback && (
                    <div className={`mt-6 text-center font-bold ${mcFeedback.includes('Correct') ? 'text-green-500' : 'text-red-500'}`}>
                      {mcFeedback}
                    </div>
                  )}
                  
                  <div className="flex justify-center mt-6 space-x-4">
                    {!mcShowNext && (
                      <Button onClick={handleMcCheck} className="bg-pink-500 hover:bg-pink-600">
                        Check
                      </Button>
                    )}
                    {mcShowNext && (
                      <Button onClick={handleMcNext} className="bg-teal-500 hover:bg-teal-600">
                        Next
                      </Button>
                    )}
                  </div>
                </>
              ) : (
                <div className="text-center">
                  <h3 className="text-2xl font-bold">Quiz Complete!</h3>
                  <p className="text-lg mt-2">Your final score is <span className="font-bold text-teal-600">{mcScore}/{mcQuestions.length}</span>.</p>
                  <Button onClick={handleMcRestart} className="mt-4 bg-amber-400 text-gray-800 hover:bg-amber-500">
                    Restart Quiz
                  </Button>
                </div>
              )}
              
              <div className="border-t mt-8 pt-4 text-center">
                <button onClick={() => switchActivity('hub')} className="text-gray-600 hover:text-teal-600 font-semibold">
                  ‹ Back to Menu
                </button>
              </div>
            </div>
          </section>
        )}

        {/* Unscramble Activity */}
        {currentActivity === 'gap' && (
          <section className="animate-fade-in">
            <div className="bg-white p-8 rounded-xl shadow-lg max-w-2xl mx-auto">
              <h2 className="text-2xl font-bold text-center mb-2 text-purple-600">Unscramble the Words</h2>
              <h3 className="text-xl font-semibold text-center text-gray-700 mb-4">Likes & Dislikes</h3>
              <p className="text-center text-gray-500 mb-6">Unscramble the letters and type the correct word or phrase to complete the sentence.</p>
              
              {!gapComplete ? (
                <>
                  <p className="text-lg mb-4 text-center leading-relaxed">
                    {gapQuestions[gapIndex].q.replace('______', '______')} <br />
                    <span className="text-sm text-gray-500">Unscramble:</span> <strong className="text-purple-600">{gapQuestions[gapIndex].hint}</strong>
                  </p>
                  <div className="flex justify-center">
                    <input
                      type="text"
                      value={gapInput}
                      onChange={(e) => setGapInput(e.target.value)}
                      disabled={gapShowNext}
                      className="border-2 border-gray-300 p-2 rounded-lg w-1/2 text-center focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition"
                    />
                  </div>
                  
                  {gapFeedback && (
                    <div className={`mt-6 text-center font-bold ${gapFeedback.includes('Correct') ? 'text-green-500' : 'text-red-500'}`}>
                      {gapFeedback}
                    </div>
                  )}
                  
                  <div className="flex justify-center mt-6 space-x-4">
                    {!gapShowNext && (
                      <Button onClick={handleGapCheck} className="bg-purple-500 hover:bg-purple-600">
                        Check
                      </Button>
                    )}
                    {gapShowNext && (
                      <Button onClick={handleGapNext} className="bg-teal-500 hover:bg-teal-600">
                        Next
                      </Button>
                    )}
                  </div>
                </>
              ) : (
                <div className="text-center">
                  <h3 className="text-2xl font-bold">Activity Complete!</h3>
                  <p>Great work on the unscramble exercise.</p>
                  <Button onClick={handleGapRestart} className="mt-4 bg-amber-400 text-gray-800 hover:bg-amber-500">
                    Start Over
                  </Button>
                </div>
              )}
              
              <div className="border-t mt-8 pt-4 text-center">
                <button onClick={() => switchActivity('hub')} className="text-gray-600 hover:text-teal-600 font-semibold">
                  ‹ Back to Menu
                </button>
              </div>
            </div>
          </section>
        )}

        {/* Sorting Activity */}
        {currentActivity === 'sort' && (
          <section className="animate-fade-in">
            <div className="bg-white p-8 rounded-xl shadow-lg max-w-6xl mx-auto">
              <h2 className="text-2xl font-bold text-center mb-2 text-sky-600">Action Word Sorting</h2>
              <p className="text-center text-gray-500 mb-6">Drag the words from the bank into the correct category boxes below.</p>

              <div className="bg-gray-50 p-4 rounded-lg border mb-8">
                <h3 className="font-bold text-lg mb-4 text-center">Word Bank</h3>
                <div className="flex flex-wrap gap-2 justify-center">
                  {sortWords.map((word) => (
                    <div
                      key={word}
                      draggable
                      data-word={word}
                      onDragStart={() => handleDragStart(word)}
                      className="p-2 bg-gray-200 border border-gray-300 rounded-lg cursor-move"
                    >
                      {word}
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { key: 'arms_hands', title: 'Arms & Hands', color: 'blue' },
                  { key: 'mouth_nose', title: 'Mouth & Nose', color: 'green' },
                  { key: 'feet_legs', title: 'Feet & Legs', color: 'yellow' },
                  { key: 'eyes', title: 'Eyes', color: 'red' }
                ].map((cat) => (
                  <div
                    key={cat.key}
                    onDragOver={(e) => e.preventDefault()}
                    onDrop={() => handleDrop(cat.key)}
                    className={`p-4 bg-${cat.color}-50 rounded-lg border-2 border-${cat.color}-200 min-h-[150px]`}
                  >
                    <h3 className={`font-bold text-lg mb-3 text-center text-${cat.color}-800`}>{cat.title}</h3>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {sortCategories[cat.key as keyof typeof sortCategories].map((word) => (
                        <div
                          key={word}
                          className={`p-2 bg-gray-100 border rounded-lg relative ${
                            sortChecked
                              ? sortCorrectCategories[cat.key as keyof typeof sortCorrectCategories].includes(word)
                                ? 'border-green-500 text-green-600'
                                : 'border-red-500 text-red-600'
                              : 'border-gray-300'
                          }`}
                        >
                          {word}
                          {sortChecked && (
                            <span className="ml-1">
                              {sortCorrectCategories[cat.key as keyof typeof sortCorrectCategories].includes(word) ? '✔' : '✖'}
                            </span>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {sortFeedback && (
                <div className="mt-8 text-center font-bold text-lg">{sortFeedback}</div>
              )}

              <div className="text-center mt-8">
                {!sortChecked ? (
                  <Button onClick={handleSortCheck} className="bg-sky-500 hover:bg-sky-600 py-3 px-8 text-lg">
                    Check My Answers
                  </Button>
                ) : (
                  <Button onClick={handleSortRestart} className="bg-amber-400 text-gray-800 hover:bg-amber-500 py-3 px-8 text-lg">
                    Play Again
                  </Button>
                )}
              </div>
              
              <div className="border-t mt-8 pt-4 text-center">
                <button onClick={() => switchActivity('hub')} className="text-gray-600 hover:text-teal-600 font-semibold">
                  ‹ Back to Menu
                </button>
              </div>
            </div>
          </section>
        )}

        {/* Sentence Completion Activity */}
        {currentActivity === 'sentence' && (
          <section className="animate-fade-in">
            <div className="bg-white p-8 rounded-xl shadow-lg max-w-2xl mx-auto">
              <h2 className="text-2xl font-bold text-center mb-2 text-orange-600">Sentence Completion</h2>
              <p className="text-center text-gray-500 mb-6">Complete the sentence with the most appropriate action word, changing the form if necessary.</p>
              
              {!sentenceComplete ? (
                <>
                  <p className="text-lg mb-4 text-center leading-relaxed">
                    {sentenceQuestions[sentenceIndex].q.replace('______', '______')}
                  </p>
                  <div className="flex justify-center">
                    <input
                      type="text"
                      value={sentenceInput}
                      onChange={(e) => setSentenceInput(e.target.value)}
                      disabled={sentenceShowNext}
                      className="border-2 border-gray-300 p-2 rounded-lg w-1/2 text-center focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition"
                    />
                  </div>
                  
                  {sentenceFeedback && (
                    <div className={`mt-6 text-center font-bold ${sentenceFeedback.includes('Correct') ? 'text-green-500' : 'text-red-500'}`}>
                      {sentenceFeedback}
                    </div>
                  )}
                  
                  <div className="flex justify-center mt-6 space-x-4">
                    {!sentenceShowNext && (
                      <Button onClick={handleSentenceCheck} className="bg-orange-500 hover:bg-orange-600">
                        Check
                      </Button>
                    )}
                    {sentenceShowNext && (
                      <Button onClick={handleSentenceNext} className="bg-teal-500 hover:bg-teal-600">
                        Next
                      </Button>
                    )}
                  </div>
                </>
              ) : (
                <div className="text-center">
                  <h3 className="text-2xl font-bold">Activity Complete!</h3>
                  <p>Excellent work with the sentences.</p>
                  <Button onClick={handleSentenceRestart} className="mt-4 bg-amber-400 text-gray-800 hover:bg-amber-500">
                    Start Over
                  </Button>
                </div>
              )}
              
              <div className="border-t mt-8 pt-4 text-center">
                <button onClick={() => switchActivity('hub')} className="text-gray-600 hover:text-teal-600 font-semibold">
                  ‹ Back to Menu
                </button>
              </div>
            </div>
          </section>
        )}

        {/* Confusing Words Activity */}
        {currentActivity === 'confusing' && (
          <section className="animate-fade-in">
            <div className="bg-white p-8 rounded-xl shadow-lg max-w-2xl mx-auto">
              <h2 className="text-2xl font-bold text-center mb-2 text-green-600">Confusing Words</h2>
              <p className="text-center text-gray-500 mb-6">Choose the correct word to complete the sentence.</p>
              
              {!confusingComplete ? (
                <>
                  <p className="text-lg mb-6 text-center leading-relaxed">
                    {confusingQuestions[confusingIndex].q_start} <span className="font-bold text-gray-400">[...]</span> {confusingQuestions[confusingIndex].q_end}
                  </p>
                  <div className="flex justify-center gap-4">
                    {confusingQuestions[confusingIndex].options.map((option, idx) => (
                      <button
                        key={idx}
                        onClick={() => !confusingShowNext && handleConfusingAnswer(option)}
                        disabled={confusingShowNext}
                        className={`p-3 border rounded-lg hover:bg-amber-100 transition focus:outline-none focus:ring-2 focus:ring-amber-400 w-40 ${
                          confusingShowNext && option === confusingQuestions[confusingIndex].a ? 'bg-green-200' : ''
                        } ${confusingShowNext && option !== confusingQuestions[confusingIndex].a && confusingFeedback ? 'bg-red-200' : ''}`}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                  
                  {confusingFeedback && (
                    <div className={`mt-6 text-center font-bold ${confusingFeedback.includes('Correct') ? 'text-green-500' : 'text-red-500'}`}>
                      {confusingFeedback}
                    </div>
                  )}
                  
                  <div className="flex justify-center mt-6">
                    {confusingShowNext && (
                      <Button onClick={handleConfusingNext} className="bg-teal-500 hover:bg-teal-600">
                        Next
                      </Button>
                    )}
                  </div>
                </>
              ) : (
                <div className="text-center">
                  <h3 className="text-2xl font-bold">Activity Complete!</h3>
                  <p className="text-lg mt-2">Your final score is <span className="font-bold text-teal-600">{confusingScore}/{confusingQuestions.length}</span>.</p>
                  <Button onClick={handleConfusingRestart} className="mt-4 bg-amber-400 text-gray-800 hover:bg-amber-500">
                    Start Over
                  </Button>
                </div>
              )}
              
              <div className="border-t mt-8 pt-4 text-center">
                <button onClick={() => switchActivity('hub')} className="text-gray-600 hover:text-teal-600 font-semibold">
                  ‹ Back to Menu
                </button>
              </div>
            </div>
          </section>
        )}

        {/* Make, Do & Take Activity */}
        {currentActivity === 'mdt' && (
          <section className="animate-fade-in">
            <div className="bg-white p-8 rounded-xl shadow-lg max-w-2xl mx-auto">
              <h2 className="text-2xl font-bold text-center mb-2 text-indigo-600">Make, Do & Take</h2>
              <p className="text-center text-gray-500 mb-6">Complete the sentences with the correct form of 'make', 'do', or 'take'.</p>
              
              {!mdtComplete ? (
                <>
                  <div className="mb-4">
                    {renderMdtQuestion()}
                  </div>
                  
                  {mdtFeedback && (
                    <div className={`mt-6 text-center font-bold ${mdtFeedback.includes('Correct') ? 'text-green-500' : 'text-red-500'}`}>
                      {mdtFeedback}
                    </div>
                  )}
                  
                  <div className="flex justify-center mt-6 space-x-4">
                    {!mdtShowNext && (
                      <Button onClick={handleMdtCheck} className="bg-indigo-500 hover:bg-indigo-600">
                        Check
                      </Button>
                    )}
                    {mdtShowNext && (
                      <Button onClick={handleMdtNext} className="bg-teal-500 hover:bg-teal-600">
                        Next
                      </Button>
                    )}
                  </div>
                </>
              ) : (
                <div className="text-center">
                  <h3 className="text-2xl font-bold">Activity Complete!</h3>
                  <p className="text-lg mt-2">Your final score is <span className="font-bold text-teal-600">{mdtScore}/{mdtQuestions.length}</span>.</p>
                  <Button onClick={handleMdtRestart} className="mt-4 bg-amber-400 text-gray-800 hover:bg-amber-500">
                    Start Over
                  </Button>
                </div>
              )}
              
              <div className="border-t mt-8 pt-4 text-center">
                <button onClick={() => switchActivity('hub')} className="text-gray-600 hover:text-teal-600 font-semibold">
                  ‹ Back to Menu
                </button>
              </div>
            </div>
          </section>
        )}
      </main>

      <footer className="text-center py-6 mt-8 bg-white">
        <p className="text-gray-500">&copy; 2025 FCE Vocabulary Tester. Happy learning!</p>
      </footer>

      <Footer />
    </div>
  );
};

export default FceVocabPracticeWrapper;