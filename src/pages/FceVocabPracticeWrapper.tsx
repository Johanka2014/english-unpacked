import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { BookOpen, Shuffle, ArrowDownUp, FileText, HelpCircle, Target, ArrowLeft } from "lucide-react";
import SEO from "@/components/SEO";

// Import activity images
import multipleChoiceImg from "@/assets/multiple-choice-practice.jpg";
import unscrambleImg from "@/assets/unscramble-words.jpg";
import sortingImg from "@/assets/word-sorting.jpg";
import sentenceImg from "@/assets/sentence-completion.jpg";
import confusingImg from "@/assets/confusing-words.jpg";
import mdtImg from "@/assets/make-do-take.jpg";
import examPrepImg from "@/assets/exam-prep.jpg";

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
                className={`border-b-2 outline-none text-center w-28 mx-1 transition-colors ${
                  mdtChecked
                    ? mdtInputs[idx]?.trim().toLowerCase() === correctAnswers[idx].toLowerCase()
                      ? 'border-green-500 text-green-600'
                      : 'border-red-500 text-red-600'
                    : 'border-muted-foreground focus:border-primary'
                }`}
              />
            )}
          </span>
        ))}
      </p>
    );
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SEO 
        title="FCE Vocabulary Practice - Interactive First Certificate Exercises"
        description="Master FCE vocabulary with interactive exercises: multiple choice, word sorting, confusing words, and sentence completion. Practice for Cambridge B2 First exam success."
        canonical="https://english-unpacked.lovable.app/fce-vocab-practice"
      />
      <Navigation />

      {currentActivity === 'hub' && (
        <main className="flex-1">
          <section className="relative py-20 bg-brand-navy text-white overflow-hidden">
            <div 
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage: `url(${examPrepImg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
            <div className="container mx-auto px-4 relative z-10">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 font-merriweather">FCE Vocabulary Practice</h1>
              <p className="text-xl text-white/90 max-w-2xl">
                Master essential FCE vocabulary through six interactive exercises designed to build your confidence and language skills.
              </p>
            </div>
          </section>

          <section className="py-16">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold mb-8 text-center font-merriweather">Practice Activities</h2>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                <Card 
                  className="service-card overflow-hidden cursor-pointer group shadow-lg hover:shadow-xl transition-all duration-300"
                  onClick={() => switchActivity('mc')}
                >
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={multipleChoiceImg} 
                      alt="Multiple Choice Practice" 
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end justify-start p-6">
                      <BookOpen className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-brand-navy font-merriweather">Multiple Choice Challenge</CardTitle>
                    <CardDescription>Test your knowledge of comparison & contrast vocabulary</CardDescription>
                  </CardHeader>
                </Card>

                <Card 
                  className="service-card overflow-hidden cursor-pointer group shadow-lg hover:shadow-xl transition-all duration-300"
                  onClick={() => switchActivity('gap')}
                >
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={unscrambleImg} 
                      alt="Unscramble Words" 
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end justify-start p-6">
                      <Shuffle className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-brand-navy font-merriweather">Unscramble the Words</CardTitle>
                    <CardDescription>Rearrange letters to form likes & dislikes phrases</CardDescription>
                  </CardHeader>
                </Card>

                <Card 
                  className="service-card overflow-hidden cursor-pointer group shadow-lg hover:shadow-xl transition-all duration-300"
                  onClick={() => switchActivity('sort')}
                >
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={sortingImg} 
                      alt="Word Sorting" 
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end justify-start p-6">
                      <ArrowDownUp className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-brand-navy font-merriweather">Action Word Sorting</CardTitle>
                    <CardDescription>Drag and drop body parts to match action verbs</CardDescription>
                  </CardHeader>
                </Card>

                <Card 
                  className="service-card overflow-hidden cursor-pointer group shadow-lg hover:shadow-xl transition-all duration-300"
                  onClick={() => switchActivity('sentence')}
                >
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={sentenceImg} 
                      alt="Sentence Completion" 
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end justify-start p-6">
                      <FileText className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-brand-navy font-merriweather">Sentence Completion</CardTitle>
                    <CardDescription>Fill in the blanks with the correct action words</CardDescription>
                  </CardHeader>
                </Card>

                <Card 
                  className="service-card overflow-hidden cursor-pointer group shadow-lg hover:shadow-xl transition-all duration-300"
                  onClick={() => switchActivity('confusing')}
                >
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={confusingImg} 
                      alt="Confusing Words" 
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end justify-start p-6">
                      <HelpCircle className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-brand-navy font-merriweather">Confusing Words</CardTitle>
                    <CardDescription>Master commonly confused word pairs in context</CardDescription>
                  </CardHeader>
                </Card>

                <Card 
                  className="service-card overflow-hidden cursor-pointer group shadow-lg hover:shadow-xl transition-all duration-300"
                  onClick={() => switchActivity('mdt')}
                >
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={mdtImg} 
                      alt="Make Do Take Collocations" 
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end justify-start p-6">
                      <Target className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-brand-navy font-merriweather">Make, Do & Take</CardTitle>
                    <CardDescription>Practice collocations with make, do, and take</CardDescription>
                  </CardHeader>
                </Card>
              </div>
            </div>
          </section>
        </main>
      )}

      {currentActivity === 'mc' && (
        <div className="pt-32 pb-20 px-4 bg-background">
          <div className="max-w-4xl mx-auto">
            <Button 
              onClick={() => switchActivity('hub')}
              variant="outline"
              className="mb-8"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Activities
            </Button>

            <div className="bg-card rounded-xl shadow-lg p-8 md:p-12 border">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-3xl font-bold text-foreground font-merriweather">Multiple Choice Challenge</h2>
              </div>

              {!mcComplete ? (
                <>
                  <div className="w-full bg-secondary rounded-full h-2.5 mb-4">
                    <div className="bg-primary h-2.5 rounded-full transition-all" style={{ width: `${(mcIndex / mcQuestions.length) * 100}%` }}></div>
                  </div>
                  <div className="flex justify-between mb-6 text-sm font-medium text-muted-foreground">
                    <span>Question {mcIndex + 1}/{mcQuestions.length}</span>
                    <span>Score: {mcScore}</span>
                  </div>
                  
                  <p className="text-lg mb-6 text-center font-medium">{mcQuestions[mcIndex].q}</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    {mcQuestions[mcIndex].options.map((option, idx) => (
                      <button
                        key={idx}
                        onClick={() => !mcShowNext && setMcSelectedOption(option)}
                        disabled={mcShowNext}
                        className={`p-4 border-2 rounded-lg text-left transition-all ${
                          mcSelectedOption === option 
                            ? 'border-primary bg-primary/10' 
                            : 'border-border hover:border-primary/50'
                        } ${
                          mcShowNext && mcSelectedOption === option && option === mcQuestions[mcIndex].a 
                            ? 'bg-green-50 border-green-500' 
                            : ''
                        } ${
                          mcShowNext && mcSelectedOption === option && option !== mcQuestions[mcIndex].a 
                            ? 'bg-red-50 border-red-500' 
                            : ''
                        }`}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                  
                  {mcFeedback && (
                    <div className={`mb-6 text-center font-semibold ${mcFeedback.includes('Correct') ? 'text-green-600' : 'text-red-600'}`}>
                      {mcFeedback}
                    </div>
                  )}
                  
                  <div className="flex justify-center gap-4">
                    {!mcShowNext && (
                      <Button onClick={handleMcCheck} size="lg">
                        Check Answer
                      </Button>
                    )}
                    {mcShowNext && (
                      <Button onClick={handleMcNext} size="lg">
                        Next Question
                      </Button>
                    )}
                  </div>
                </>
              ) : (
                <div className="text-center py-8">
                  <h3 className="text-2xl font-bold mb-4">Quiz Complete!</h3>
                  <p className="text-lg mb-6">Your final score: <span className="font-bold text-primary text-2xl">{mcScore}/{mcQuestions.length}</span></p>
                  <Button onClick={handleMcRestart} size="lg">
                    Restart Quiz
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {currentActivity === 'gap' && (
        <div className="pt-32 pb-20 px-4 bg-background">
          <div className="max-w-4xl mx-auto">
            <Button 
              onClick={() => switchActivity('hub')}
              variant="outline"
              className="mb-8"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Activities
            </Button>

            <div className="bg-card rounded-xl shadow-lg p-8 md:p-12 border">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Shuffle className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-3xl font-bold text-foreground font-merriweather">Unscramble the Words</h2>
              </div>

              {!gapComplete ? (
                <>
                  <p className="text-lg mb-2 text-center font-medium leading-relaxed">
                    {gapQuestions[gapIndex].q}
                  </p>
                  <p className="text-sm text-muted-foreground mb-6 text-center">
                    Unscramble: <strong className="text-primary">{gapQuestions[gapIndex].hint}</strong>
                  </p>
                  <div className="flex justify-center mb-6">
                    <input
                      type="text"
                      value={gapInput}
                      onChange={(e) => setGapInput(e.target.value)}
                      disabled={gapShowNext}
                      className="border-2 border-border p-3 rounded-lg w-full max-w-md text-center focus:border-primary focus:ring-2 focus:ring-primary/20 transition"
                      placeholder="Type your answer here"
                    />
                  </div>
                  
                  {gapFeedback && (
                    <div className={`mb-6 text-center font-semibold ${gapFeedback.includes('Correct') ? 'text-green-600' : 'text-red-600'}`}>
                      {gapFeedback}
                    </div>
                  )}
                  
                  <div className="flex justify-center gap-4">
                    {!gapShowNext && (
                      <Button onClick={handleGapCheck} size="lg">
                        Check Answer
                      </Button>
                    )}
                    {gapShowNext && (
                      <Button onClick={handleGapNext} size="lg">
                        Next Question
                      </Button>
                    )}
                  </div>
                </>
              ) : (
                <div className="text-center py-8">
                  <h3 className="text-2xl font-bold mb-4">Activity Complete!</h3>
                  <p className="text-lg mb-6">Great work on the unscramble exercise.</p>
                  <Button onClick={handleGapRestart} size="lg">
                    Start Over
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {currentActivity === 'sort' && (
        <div className="pt-32 pb-20 px-4 bg-background">
          <div className="max-w-6xl mx-auto">
            <Button 
              onClick={() => switchActivity('hub')}
              variant="outline"
              className="mb-8"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Activities
            </Button>

            <div className="bg-card rounded-xl shadow-lg p-8 md:p-12 border">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <ArrowDownUp className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-3xl font-bold text-foreground font-merriweather">Action Word Sorting</h2>
              </div>
              <p className="text-center text-muted-foreground mb-8">Drag words from the bank into the correct category boxes below.</p>

              <div className="bg-secondary/50 p-6 rounded-lg border mb-8">
                <h3 className="font-bold text-lg mb-4 text-center">Word Bank</h3>
                <div className="flex flex-wrap gap-2 justify-center">
                  {sortWords.map((word) => (
                    <div
                      key={word}
                      draggable
                      data-word={word}
                      onDragStart={() => handleDragStart(word)}
                      className="p-2 bg-card border-2 border-border rounded-lg cursor-move hover:border-primary transition-colors"
                    >
                      {word}
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {[
                  { key: 'arms_hands', title: 'Arms & Hands' },
                  { key: 'mouth_nose', title: 'Mouth & Nose' },
                  { key: 'feet_legs', title: 'Feet & Legs' },
                  { key: 'eyes', title: 'Eyes' }
                ].map((cat) => (
                  <div
                    key={cat.key}
                    onDragOver={(e) => e.preventDefault()}
                    onDrop={() => handleDrop(cat.key)}
                    className="p-6 bg-secondary/30 rounded-lg border-2 border-dashed border-border min-h-[200px] hover:border-primary transition-colors"
                  >
                    <h3 className="font-bold text-lg mb-4 text-center">{cat.title}</h3>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {sortCategories[cat.key as keyof typeof sortCategories].map((word) => (
                        <div
                          key={word}
                          className={`p-2 bg-card border-2 rounded-lg ${
                            sortChecked
                              ? sortCorrectCategories[cat.key as keyof typeof sortCorrectCategories].includes(word)
                                ? 'border-green-500 text-green-600'
                                : 'border-red-500 text-red-600'
                              : 'border-border'
                          }`}
                        >
                          {word}
                          {sortChecked && (
                            <span className="ml-1">
                              {sortCorrectCategories[cat.key as keyof typeof sortCorrectCategories].includes(word) ? '✓' : '✗'}
                            </span>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {sortFeedback && (
                <div className="text-center font-bold text-lg mb-6">{sortFeedback}</div>
              )}

              <div className="text-center">
                {!sortChecked ? (
                  <Button onClick={handleSortCheck} size="lg">
                    Check My Answers
                  </Button>
                ) : (
                  <Button onClick={handleSortRestart} size="lg" variant="secondary">
                    Play Again
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {currentActivity === 'sentence' && (
        <div className="pt-32 pb-20 px-4 bg-background">
          <div className="max-w-4xl mx-auto">
            <Button 
              onClick={() => switchActivity('hub')}
              variant="outline"
              className="mb-8"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Activities
            </Button>

            <div className="bg-card rounded-xl shadow-lg p-8 md:p-12 border">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <FileText className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-3xl font-bold text-foreground font-merriweather">Sentence Completion</h2>
              </div>

              {!sentenceComplete ? (
                <>
                  <p className="text-lg mb-6 text-center font-medium leading-relaxed">
                    {sentenceQuestions[sentenceIndex].q}
                  </p>
                  <div className="flex justify-center mb-6">
                    <input
                      type="text"
                      value={sentenceInput}
                      onChange={(e) => setSentenceInput(e.target.value)}
                      disabled={sentenceShowNext}
                      className="border-2 border-border p-3 rounded-lg w-full max-w-md text-center focus:border-primary focus:ring-2 focus:ring-primary/20 transition"
                      placeholder="Type your answer here"
                    />
                  </div>
                  
                  {sentenceFeedback && (
                    <div className={`mb-6 text-center font-semibold ${sentenceFeedback.includes('Correct') ? 'text-green-600' : 'text-red-600'}`}>
                      {sentenceFeedback}
                    </div>
                  )}
                  
                  <div className="flex justify-center gap-4">
                    {!sentenceShowNext && (
                      <Button onClick={handleSentenceCheck} size="lg">
                        Check Answer
                      </Button>
                    )}
                    {sentenceShowNext && (
                      <Button onClick={handleSentenceNext} size="lg">
                        Next Question
                      </Button>
                    )}
                  </div>
                </>
              ) : (
                <div className="text-center py-8">
                  <h3 className="text-2xl font-bold mb-4">Activity Complete!</h3>
                  <p className="text-lg mb-6">Excellent work completing all the sentences.</p>
                  <Button onClick={handleSentenceRestart} size="lg">
                    Start Over
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {currentActivity === 'confusing' && (
        <div className="pt-32 pb-20 px-4 bg-background">
          <div className="max-w-4xl mx-auto">
            <Button 
              onClick={() => switchActivity('hub')}
              variant="outline"
              className="mb-8"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Activities
            </Button>

            <div className="bg-card rounded-xl shadow-lg p-8 md:p-12 border">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <HelpCircle className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-3xl font-bold text-foreground font-merriweather">Confusing Words</h2>
              </div>

              {!confusingComplete ? (
                <>
                  <div className="w-full bg-secondary rounded-full h-2.5 mb-4">
                    <div className="bg-primary h-2.5 rounded-full transition-all" style={{ width: `${(confusingIndex / confusingQuestions.length) * 100}%` }}></div>
                  </div>
                  <div className="flex justify-between mb-6 text-sm font-medium text-muted-foreground">
                    <span>Question {confusingIndex + 1}/{confusingQuestions.length}</span>
                    <span>Score: {confusingScore}</span>
                  </div>
                  
                  <p className="text-lg mb-6 text-center font-medium leading-relaxed">
                    {confusingQuestions[confusingIndex].q_start} <strong className="text-primary">______</strong> {confusingQuestions[confusingIndex].q_end}
                  </p>
                  <div className="flex justify-center gap-4 mb-6">
                    {confusingQuestions[confusingIndex].options.map((option, idx) => (
                      <Button
                        key={idx}
                        onClick={() => !confusingShowNext && handleConfusingAnswer(option)}
                        disabled={confusingShowNext}
                        variant="outline"
                        size="lg"
                        className="min-w-[150px]"
                      >
                        {option}
                      </Button>
                    ))}
                  </div>
                  
                  {confusingFeedback && (
                    <div className={`mb-6 text-center font-semibold ${confusingFeedback.includes('Correct') ? 'text-green-600' : 'text-red-600'}`}>
                      {confusingFeedback}
                    </div>
                  )}
                  
                  {confusingShowNext && (
                    <div className="flex justify-center">
                      <Button onClick={handleConfusingNext} size="lg">
                        Next Question
                      </Button>
                    </div>
                  )}
                </>
              ) : (
                <div className="text-center py-8">
                  <h3 className="text-2xl font-bold mb-4">Quiz Complete!</h3>
                  <p className="text-lg mb-6">Your final score: <span className="font-bold text-primary text-2xl">{confusingScore}/{confusingQuestions.length}</span></p>
                  <Button onClick={handleConfusingRestart} size="lg">
                    Restart Quiz
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {currentActivity === 'mdt' && (
        <div className="pt-32 pb-20 px-4 bg-background">
          <div className="max-w-4xl mx-auto">
            <Button 
              onClick={() => switchActivity('hub')}
              variant="outline"
              className="mb-8"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Activities
            </Button>

            <div className="bg-card rounded-xl shadow-lg p-8 md:p-12 border">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-3xl font-bold text-foreground font-merriweather">Make, Do & Take</h2>
              </div>

              {!mdtComplete ? (
                <>
                  <div className="w-full bg-secondary rounded-full h-2.5 mb-4">
                    <div className="bg-primary h-2.5 rounded-full transition-all" style={{ width: `${(mdtIndex / mdtQuestions.length) * 100}%` }}></div>
                  </div>
                  <div className="flex justify-between mb-6 text-sm font-medium text-muted-foreground">
                    <span>Question {mdtIndex + 1}/{mdtQuestions.length}</span>
                    <span>Score: {mdtScore}</span>
                  </div>
                  
                  <div className="mb-8">
                    {renderMdtQuestion()}
                  </div>
                  
                  {mdtFeedback && (
                    <div className={`mb-6 text-center font-semibold ${mdtFeedback.includes('Correct') ? 'text-green-600' : 'text-red-600'}`}>
                      {mdtFeedback}
                    </div>
                  )}
                  
                  <div className="flex justify-center gap-4">
                    {!mdtShowNext && (
                      <Button onClick={handleMdtCheck} size="lg">
                        Check Answer
                      </Button>
                    )}
                    {mdtShowNext && (
                      <Button onClick={handleMdtNext} size="lg">
                        Next Question
                      </Button>
                    )}
                  </div>
                </>
              ) : (
                <div className="text-center py-8">
                  <h3 className="text-2xl font-bold mb-4">Quiz Complete!</h3>
                  <p className="text-lg mb-6">Your final score: <span className="font-bold text-primary text-2xl">{mdtScore}/{mdtQuestions.length}</span></p>
                  <Button onClick={handleMdtRestart} size="lg">
                    Restart Quiz
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      <section className="py-12 bg-secondary/30 border-t">
        <div className="container mx-auto px-4 text-center">
          <Button 
            onClick={() => window.location.href = '/exam-preparation'}
            variant="outline"
            size="lg"
            className="gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Return to Exam Preparation
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FceVocabPracticeWrapper;
