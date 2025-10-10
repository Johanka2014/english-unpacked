import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, BookOpen, Scale, ShuffleIcon, FileText, Gavel, Car, Book, PenTool } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import caeRevisionImg from "@/assets/cae-revision.jpg";
import caePoliceImg from "@/assets/cae-police.jpg";
import caeCarImg from "@/assets/cae-car.jpg";
import caeCrimesImg from "@/assets/cae-crimes.png";

type ActivityType = 
  | "home"
  | "sentence-halves-1"
  | "categorize-crimes"
  | "sentence-halves-2"
  | "phrasal-verbs"
  | "match-crime"
  | "complete-verbs"
  | "replace-word"
  | "word-formation";

const CaeExamPracticeWrapper = () => {
  const [currentActivity, setCurrentActivity] = useState<ActivityType>("home");
  const { toast } = useToast();

  // Exercise 1: Join Sentence Halves (of/for)
  const [exercise1Answers, setExercise1Answers] = useState<{[key: string]: {preposition: string, ending: string}}>({});
  
  const exercise1Data = {
    questions: [
      { id: 'a', text: "Richard is a quiet man and certainly not capable", correctPrep: "of", correctEnding: "3" },
      { id: 'b', text: "Please accept this cheque as compensation", correctPrep: "for", correctEnding: "1" },
      { id: 'c', text: "I think there is scope", correctPrep: "for", correctEnding: "5" },
      { id: 'd', text: "You need to have a clear view", correctPrep: "of", correctEnding: "2" },
      { id: 'e', text: "When you see the result", correctPrep: "of", correctEnding: "6" },
      { id: 'f', text: "The audience was intrigued by the sudden appearance", correctPrep: "of", correctEnding: "7" },
      { id: 'g', text: "I'm afraid the children were to blame", correctPrep: "for", correctEnding: "4" },
      { id: 'h', text: "The writer's view", correctPrep: "of", correctEnding: "8" }
    ],
    endings: [
      { id: "1", text: "the damage to your property." },
      { id: "2", text: "how your story is going to end." },
      { id: "3", text: "any kind of violent behaviour." },
      { id: "4", text: "eating all the ice-cream in the freezer." },
      { id: "5", text: "improvement in this project." },
      { id: "6", text: "all your hard work, you'll realise it was worth it." },
      { id: "7", text: "one of the actors in their midst." },
      { id: "8", text: "life at that time is rather interesting." }
    ]
  };

  // Exercise 2: Categorize Crimes
  const [exercise2Answers, setExercise2Answers] = useState<{[key: string]: string}>({});
  
  const exercise2Data = {
    crimes: [
      { id: 'bribery', name: 'bribery', category: 'Financial Gain' },
      { id: 'fraud', name: 'fraud', category: 'Financial Gain' },
      { id: 'burglary', name: 'burglary', category: 'Financial Gain' },
      { id: 'arson', name: 'arson', category: 'Property Damage' },
      { id: 'blackmail', name: 'blackmail', category: 'Financial Gain' },
      { id: 'robbery', name: 'robbery', category: 'Financial Gain' },
      { id: 'mugging', name: 'mugging', category: 'Violence' },
      { id: 'assault', name: 'assault', category: 'Violence' },
      { id: 'theft', name: 'theft', category: 'Financial Gain' },
      { id: 'manslaughter', name: 'manslaughter', category: 'Violence' },
      { id: 'murder', name: 'murder', category: 'Violence' },
      { id: 'forgery', name: 'forgery', category: 'Financial Gain' },
      { id: 'smuggling', name: 'smuggling', category: 'Financial Gain' }
    ],
    categories: ['Violence', 'Financial Gain', 'Property Damage']
  };

  // Exercise 3: Match Sentence Halves (Legal)
  const [exercise3Answers, setExercise3Answers] = useState<{[key: string]: string}>({});
  
  const exercise3Data = {
    questions: [
      { id: 'a', text: "A convicted criminal can appeal", correctEnding: "3" },
      { id: 'b', text: "You must be read your rights if you are arrested", correctEnding: "5" },
      { id: 'c', text: "If you are a suspect, the police may take you", correctEnding: "1" },
      { id: 'd', text: "With enough evidence, you may be charged", correctEnding: "7" },
      { id: 'e', text: "A prisoner released on the promise of good behaviour is", correctEnding: "6" },
      { id: 'f', text: "If you're found guilty", correctEnding: "4" },
      { id: 'g', text: "For serious offences you may be sentenced", correctEnding: "2" }
    ],
    endings: [
      { id: "1", text: "into custody." },
      { id: "2", text: "to several years in prison." },
      { id: "3", text: "against their sentence." },
      { id: "4", text: "of some offences you may get a suspended sentence." },
      { id: "5", text: "for committing a crime." },
      { id: "6", text: "on parole." },
      { id: "7", text: "with an offence." }
    ]
  };

  // Exercise 4: Phrasal Verbs
  const [exercise4Answers, setExercise4Answers] = useState<{[key: string]: string}>({});
  
  const exercise4Data = [
    { id: '1', question: "When he got a burst tyre, Bob _drove onto the hard shoulder of the motorway_.", answer: "pulled over" },
    { id: '2', question: "After so many problems, we were delighted when our plans _were successful_.", answer: "worked out" },
    { id: '3', question: "After working round the clock, the newspaper staff managed to _produce_ the special edition.", answer: "bring out" },
    { id: '4', question: "If you can manage to _wait_ another ten minutes, we'll stop at the next service station.", answer: "hold on" },
    { id: '5', question: "Don't forget to _switch off_ the lights.", answer: "turn out" },
    { id: '6', question: "The paintings in the exhibition were _arranged_ in a circle round the room.", answer: "set out" },
    { id: '7', question: "Do you think Jason will ever _recover from_ the shock of not being chosen to play in the match?", answer: "get over" },
    { id: '8', question: "The Prime Minister _extended_ her hand to each member of the winning team.", answer: "held out" },
    { id: '9', question: "It's advisable to _investigate_ all the facilities before deciding to join a gym.", answer: "check out" },
    { id: '10', question: "Didn't you get the factsheet that I _distributed_?", answer: "gave out" },
    { id: '11', question: "By deducting the bottom figure from the top one, we can _calculate_ how much money we've got.", answer: "work out" }
  ];

  // Exercise 5: Match the Crime
  const [exercise5Answers, setExercise5Answers] = useState<{[key: string]: string}>({});
  
  const exercise5Data = [
    { id: 'a', scenario: "threatened an old lady with a knife and stole her wallet", answer: "mugging" },
    { id: 'b', scenario: "killed someone without having planned to do so", answer: "manslaughter" },
    { id: 'c', scenario: "brought illegal drugs into the country", answer: "smuggling" },
    { id: 'd', scenario: "set fire to a building deliberately", answer: "arson" },
    { id: 'e', scenario: "produced false banknotes", answer: "forgery" },
    { id: 'f', scenario: "used someone else's credit card details in order to buy things", answer: "fraud" },
    { id: 'g', scenario: "threatened to tell a secret unless she was given money", answer: "blackmail" }
  ];

  const crimeOptions = ["arson", "blackmail", "forgery", "fraud", "manslaughter", "mugging", "smuggling"];

  // Exercise 6: Complete with Verbs
  const [exercise6Answers, setExercise6Answers] = useState<{[key: string]: string}>({});
  
  const exercise6Data = [
    { id: '1', sentence: "If we don't stop for a rest soon, I think my legs are going to ___.", answer: "give out" },
    { id: '2', sentence: "She's waiting until the book ___ in paperback before she buys a copy.", answer: "comes out" },
    { id: '3', sentence: "Mandy is finding it difficult to ___ now that she's got two toddlers and a baby to look after.", answer: "cope" },
    { id: '4', sentence: "Sales of the crime writer's work ___ in 2001 and have declined slightly since then.", answer: "peaked" },
    { id: '5', sentence: "Due to the introduction of robots, eight hundred production jobs at the car factory ___ next spring.", answer: "will be axed" },
    { id: '6', sentence: "Frank ___ his hand to help his mother as she stepped off the boat.", answer: "held out" },
    { id: '7', sentence: "None of the drivers ___ to let the truck pass through the narrow street.", answer: "pulled over" },
    { id: '8', sentence: "Rosemary couldn't ___ how much her grandson had changed since she had last seen him.", answer: "get over" },
    { id: '9', sentence: "The shopkeeper ___ ten per cent from the cost of the dishwasher because it had a small scratch on it.", answer: "deducted" },
    { id: '10', sentence: "Could you come along at the start of the seminar to help me ___ the worksheets?", answer: "give out" }
  ];

  // Exercise 7: Replace the Word
  const [exercise7Answers, setExercise7Answers] = useState<{[key: string]: string}>({});
  
  const exercise7Data = [
    { id: '1', sentence: "You are not allowed according to the rules to take part in this competition.", answer: "eligible" },
    { id: '2', sentence: "While on holiday in France, we visited several very impressive castles.", answer: "splendid" },
    { id: '3', sentence: "It can be very upsetting to see an animal in pain.", answer: "distressing" },
    { id: '4', sentence: "This is a particularly wealthy neighbourhood where property prices are extremely high.", answer: "affluent" },
    { id: '5', sentence: "What type of films do you like watching?", answer: "genre" },
    { id: '6', sentence: "Joanna Ransom's perfect performance of the difficult Rachmaninov symphony was the highlight of the concert.", answer: "impeccable" },
    { id: '7', sentence: "Even people who commit a serious illegal act should expect to be treated fairly in a court of law.", answer: "offence" },
    { id: '8', sentence: "A well-known politician will be visiting our town during the summer festival.", answer: "prominent" },
    { id: '9', sentence: "As a group of teenagers sheltered in the uninhabited farmhouse, you knew something awful was about to happen in the film.", answer: "disused" },
    { id: '10', sentence: "Mike is so unwilling to change his attitude that he won't accept help even when he needs it.", answer: "stubborn" },
    { id: '11', sentence: "The company is already making huge profits and it's just a strong desire for more wealth that makes them charge higher and higher prices.", answer: "greed" },
    { id: '12', sentence: "For some reason, Shona always seem to choose boyfriends who are unable to stop themselves from being liars.", answer: "habitual" }
  ];

  // Exercise 8: Word Formation
  const [exercise8Answers, setExercise8Answers] = useState<{[key: string]: string}>({});
  
  const exercise8Data = [
    { id: '1', sentence: "All their close friends and a few ___ came to their wedding.", word: "ACQUAINT", answer: "acquaintances" },
    { id: '2', sentence: "Police believe they have uncovered a ___ to blow up the Houses of Parliament.", word: "CONSPIRE", answer: "conspiracy" },
    { id: '3', sentence: "The airline was criticised for their ___ advert which suggested all their flights cost just £25.", word: "LEAD", answer: "misleading" },
    { id: '4', sentence: "Finally, finish off the cake with a ___ of nuts on the top.", word: "SCATTER", answer: "scattering" },
    { id: '5', sentence: "You should always ___ the small print before you sign any legal document.", word: "SCRUTINY", answer: "scrutinize" },
    { id: '6', sentence: "The magician performed the trick with such ___ that it was impossible to see how it was done.", word: "SUBTLE", answer: "subtlety" },
    { id: '7', sentence: "People who are colour-blind find it hard to ___ between red and green.", word: "DISTINCT", answer: "distinguish" },
    { id: '8', sentence: "The seas around Norway offer a ___ unpolluted marine environment to be explored.", word: "BOUNTY", answer: "beautifully" }
  ];

  const checkExercise1 = () => {
    let correct = 0;
    exercise1Data.questions.forEach(q => {
      const answer = exercise1Answers[q.id];
      if (answer?.preposition === q.correctPrep && answer?.ending === q.correctEnding) {
        correct++;
      }
    });
    toast({
      title: correct === exercise1Data.questions.length ? "Perfect! 🎉" : "Keep practicing!",
      description: `You got ${correct} out of ${exercise1Data.questions.length} correct.`,
    });
  };

  const checkExercise2 = () => {
    let correct = 0;
    exercise2Data.crimes.forEach(crime => {
      if (exercise2Answers[crime.id] === crime.category) {
        correct++;
      }
    });
    toast({
      title: correct === exercise2Data.crimes.length ? "Perfect! 🎉" : "Keep practicing!",
      description: `You got ${correct} out of ${exercise2Data.crimes.length} correct.`,
    });
  };

  const checkExercise3 = () => {
    let correct = 0;
    exercise3Data.questions.forEach(q => {
      if (exercise3Answers[q.id] === q.correctEnding) {
        correct++;
      }
    });
    toast({
      title: correct === exercise3Data.questions.length ? "Perfect! 🎉" : "Keep practicing!",
      description: `You got ${correct} out of ${exercise3Data.questions.length} correct.`,
    });
  };

  const checkExercise4 = () => {
    let correct = 0;
    exercise4Data.forEach(item => {
      const userAnswer = exercise4Answers[item.id]?.toLowerCase().trim();
      if (userAnswer === item.answer.toLowerCase()) {
        correct++;
      }
    });
    toast({
      title: correct === exercise4Data.length ? "Perfect! 🎉" : "Keep practicing!",
      description: `You got ${correct} out of ${exercise4Data.length} correct.`,
    });
  };

  const checkExercise5 = () => {
    let correct = 0;
    exercise5Data.forEach(item => {
      if (exercise5Answers[item.id] === item.answer) {
        correct++;
      }
    });
    toast({
      title: correct === exercise5Data.length ? "Perfect! 🎉" : "Keep practicing!",
      description: `You got ${correct} out of ${exercise5Data.length} correct.`,
    });
  };

  const checkExercise6 = () => {
    let correct = 0;
    exercise6Data.forEach(item => {
      const userAnswer = exercise6Answers[item.id]?.toLowerCase().trim();
      const correctAnswer = item.answer.toLowerCase();
      if (userAnswer === correctAnswer || userAnswer === correctAnswer.replace("will be ", "")) {
        correct++;
      }
    });
    toast({
      title: correct === exercise6Data.length ? "Perfect! 🎉" : "Keep practicing!",
      description: `You got ${correct} out of ${exercise6Data.length} correct.`,
    });
  };

  const checkExercise7 = () => {
    let correct = 0;
    exercise7Data.forEach(item => {
      const userAnswer = exercise7Answers[item.id]?.toLowerCase().trim();
      if (userAnswer === item.answer.toLowerCase()) {
        correct++;
      }
    });
    toast({
      title: correct === exercise7Data.length ? "Perfect! 🎉" : "Keep practicing!",
      description: `You got ${correct} out of ${exercise7Data.length} correct.`,
    });
  };

  const checkExercise8 = () => {
    let correct = 0;
    exercise8Data.forEach(item => {
      const userAnswer = exercise8Answers[item.id]?.toLowerCase().trim();
      if (userAnswer === item.answer.toLowerCase()) {
        correct++;
      }
    });
    toast({
      title: correct === exercise8Data.length ? "Perfect! 🎉" : "Keep practicing!",
      description: `You got ${correct} out of ${exercise8Data.length} correct.`,
    });
  };

  const resetExercise = (exerciseNum: number) => {
    switch(exerciseNum) {
      case 1: setExercise1Answers({}); break;
      case 2: setExercise2Answers({}); break;
      case 3: setExercise3Answers({}); break;
      case 4: setExercise4Answers({}); break;
      case 5: setExercise5Answers({}); break;
      case 6: setExercise6Answers({}); break;
      case 7: setExercise7Answers({}); break;
      case 8: setExercise8Answers({}); break;
    }
  };

  const activities = [
    {
      id: "sentence-halves-1" as ActivityType,
      title: "Join Sentence Halves",
      description: "Practice using 'of' and 'for' prepositions",
      icon: BookOpen,
    },
    {
      id: "categorize-crimes" as ActivityType,
      title: "Categorize Crimes",
      description: "Sort crimes into different categories",
      icon: Scale,
    },
    {
      id: "sentence-halves-2" as ActivityType,
      title: "Legal Vocabulary",
      description: "Match sentence halves with legal terms",
      icon: Gavel,
    },
    {
      id: "phrasal-verbs" as ActivityType,
      title: "Phrasal Verbs",
      description: "Practice phrasal verbs with 'out' and 'over'",
      icon: ShuffleIcon,
    },
    {
      id: "match-crime" as ActivityType,
      title: "Match the Crime",
      description: "Identify crimes from descriptions",
      icon: FileText,
    },
    {
      id: "complete-verbs" as ActivityType,
      title: "Complete with Verbs",
      description: "Fill in sentences with correct verb forms",
      icon: Car,
    },
    {
      id: "replace-word" as ActivityType,
      title: "Replace the Word",
      description: "Find synonyms for underlined words",
      icon: Book,
    },
    {
      id: "word-formation" as ActivityType,
      title: "Word Formation",
      description: "Form words from root words",
      icon: PenTool,
    },
  ];

  if (currentActivity === "home") {
    return (
      <div className="min-h-screen bg-background flex flex-col">
        <Navigation />
        
        <main className="flex-1">
          <section className="relative py-20 bg-brand-navy text-white overflow-hidden">
            <div 
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage: `url(${caeRevisionImg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
            <div className="container mx-auto px-4 relative z-10">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 font-merriweather">CAE Exam Practice</h1>
              <p className="text-xl text-white/90 max-w-2xl">
                Master Cambridge Advanced English with interactive exercises covering grammar, vocabulary, and exam skills.
              </p>
            </div>
          </section>

          <section className="py-16">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold mb-8 text-center font-merriweather">Practice Activities</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {activities.map((activity) => {
                  const Icon = activity.icon;
                  return (
                    <Card 
                      key={activity.id}
                      className="hover:shadow-lg transition-shadow cursor-pointer border-2 hover:border-brand-teal"
                      onClick={() => setCurrentActivity(activity.id)}
                    >
                      <CardHeader>
                        <div className="w-12 h-12 bg-brand-teal/10 rounded-lg flex items-center justify-center mb-4">
                          <Icon className="w-6 h-6 text-brand-teal" />
                        </div>
                        <CardTitle className="font-merriweather">{activity.title}</CardTitle>
                        <CardDescription>{activity.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <Button variant="outline" className="w-full">
                          Start Practice
                        </Button>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </section>
        </main>

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
  }

  // Exercise 1: Join Sentence Halves
  if (currentActivity === "sentence-halves-1") {
    return (
      <div className="min-h-screen bg-background flex flex-col">
        <Navigation />
        
        <main className="flex-1 py-12">
          <div className="container mx-auto px-4 max-w-4xl">
            <Button 
              onClick={() => setCurrentActivity("home")}
              variant="ghost"
              className="mb-6 gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Activities
            </Button>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl font-merriweather">Join the Sentence Halves</CardTitle>
                <CardDescription>
                  Join sentence halves using 'of' or 'for' and choose the correct ending.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {exercise1Data.questions.map((q, index) => (
                  <div key={q.id} className="p-4 bg-secondary/20 rounded-lg space-y-3">
                    <p className="font-medium">
                      {String.fromCharCode(97 + index)}) {q.text}
                    </p>
                    <div className="flex gap-4">
                      <select
                        value={exercise1Answers[q.id]?.preposition || ""}
                        onChange={(e) => setExercise1Answers({
                          ...exercise1Answers,
                          [q.id]: { ...exercise1Answers[q.id], preposition: e.target.value }
                        })}
                        className="px-3 py-2 border rounded-md"
                      >
                        <option value="">of/for?</option>
                        <option value="of">of</option>
                        <option value="for">for</option>
                      </select>
                      <select
                        value={exercise1Answers[q.id]?.ending || ""}
                        onChange={(e) => setExercise1Answers({
                          ...exercise1Answers,
                          [q.id]: { ...exercise1Answers[q.id], ending: e.target.value }
                        })}
                        className="flex-1 px-3 py-2 border rounded-md"
                      >
                        <option value="">Choose ending...</option>
                        {exercise1Data.endings.map(ending => (
                          <option key={ending.id} value={ending.id}>
                            {ending.id}) {ending.text}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                ))}

                <div className="flex gap-4 pt-4">
                  <Button onClick={checkExercise1} className="flex-1">
                    Check Answers
                  </Button>
                  <Button onClick={() => resetExercise(1)} variant="outline" className="flex-1">
                    Reset
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
        
        <Footer />
      </div>
    );
  }

  // Exercise 2: Categorize Crimes
  if (currentActivity === "categorize-crimes") {
    return (
      <div className="min-h-screen bg-background flex flex-col">
        <Navigation />
        
        <main className="flex-1 py-12">
          <div className="container mx-auto px-4 max-w-4xl">
            <Button 
              onClick={() => setCurrentActivity("home")}
              variant="ghost"
              className="mb-6 gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Activities
            </Button>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl font-merriweather">Categorize the Crimes</CardTitle>
                <CardDescription>
                  Place each crime into the correct category.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {exercise2Data.crimes.map((crime) => (
                  <div key={crime.id} className="p-4 bg-secondary/20 rounded-lg">
                    <div className="flex items-center justify-between gap-4">
                      <span className="font-medium capitalize">{crime.name}</span>
                      <select
                        value={exercise2Answers[crime.id] || ""}
                        onChange={(e) => setExercise2Answers({
                          ...exercise2Answers,
                          [crime.id]: e.target.value
                        })}
                        className="px-3 py-2 border rounded-md"
                      >
                        <option value="">Choose category...</option>
                        {exercise2Data.categories.map(cat => (
                          <option key={cat} value={cat}>{cat}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                ))}

                <div className="flex gap-4 pt-4">
                  <Button onClick={checkExercise2} className="flex-1">
                    Check Answers
                  </Button>
                  <Button onClick={() => resetExercise(2)} variant="outline" className="flex-1">
                    Reset
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
        
        <Footer />
      </div>
    );
  }

  // Exercise 3: Match Sentence Halves (Legal)
  if (currentActivity === "sentence-halves-2") {
    return (
      <div className="min-h-screen bg-background flex flex-col">
        <Navigation />
        
        <main className="flex-1 py-12">
          <div className="container mx-auto px-4 max-w-4xl">
            <Button 
              onClick={() => setCurrentActivity("home")}
              variant="ghost"
              className="mb-6 gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Activities
            </Button>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl font-merriweather">Match the Sentence Halves</CardTitle>
                <CardDescription>
                  Complete sentences with legal and crime vocabulary.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <img src={caePoliceImg} alt="Police officer" className="w-full rounded-lg mb-6" />
                
                {exercise3Data.questions.map((q, index) => (
                  <div key={q.id} className="p-4 bg-secondary/20 rounded-lg space-y-3">
                    <p className="font-medium">
                      {String.fromCharCode(97 + index)}) {q.text}
                    </p>
                    <select
                      value={exercise3Answers[q.id] || ""}
                      onChange={(e) => setExercise3Answers({
                        ...exercise3Answers,
                        [q.id]: e.target.value
                      })}
                      className="w-full px-3 py-2 border rounded-md"
                    >
                      <option value="">Choose ending...</option>
                      {exercise3Data.endings.map(ending => (
                        <option key={ending.id} value={ending.id}>
                          {ending.id}) {ending.text}
                        </option>
                      ))}
                    </select>
                  </div>
                ))}

                <div className="flex gap-4 pt-4">
                  <Button onClick={checkExercise3} className="flex-1">
                    Check Answers
                  </Button>
                  <Button onClick={() => resetExercise(3)} variant="outline" className="flex-1">
                    Reset
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
        
        <Footer />
      </div>
    );
  }

  // Exercise 4: Phrasal Verbs
  if (currentActivity === "phrasal-verbs") {
    return (
      <div className="min-h-screen bg-background flex flex-col">
        <Navigation />
        
        <main className="flex-1 py-12">
          <div className="container mx-auto px-4 max-w-4xl">
            <Button 
              onClick={() => setCurrentActivity("home")}
              variant="ghost"
              className="mb-6 gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Activities
            </Button>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl font-merriweather">Phrasal Verbs</CardTitle>
                <CardDescription>
                  Replace the words in italics with phrasal verbs with 'out' or 'over'.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {exercise4Data.map((item, index) => (
                  <div key={item.id} className="p-4 bg-secondary/20 rounded-lg space-y-3">
                    <p className="font-medium">{index + 1}. {item.question}</p>
                    <input
                      type="text"
                      placeholder="Type the phrasal verb..."
                      value={exercise4Answers[item.id] || ""}
                      onChange={(e) => setExercise4Answers({
                        ...exercise4Answers,
                        [item.id]: e.target.value
                      })}
                      className="w-full px-3 py-2 border rounded-md"
                    />
                  </div>
                ))}

                <div className="bg-brand-teal/10 p-6 rounded-lg space-y-3">
                  <h3 className="font-bold text-lg font-merriweather">Phrasal Verb Meanings</h3>
                  <ul className="space-y-2 text-sm">
                    <li><strong>pull over:</strong> to move a vehicle to the side of the road and stop</li>
                    <li><strong>work out:</strong> to be successful; to calculate</li>
                    <li><strong>bring out:</strong> to produce something to sell to the public</li>
                    <li><strong>hold on:</strong> to wait for a short time</li>
                    <li><strong>turn out:</strong> to switch off a light</li>
                    <li><strong>set out:</strong> to arrange or display things</li>
                    <li><strong>get over:</strong> to recover from something</li>
                    <li><strong>hold out:</strong> to extend something towards someone</li>
                    <li><strong>check out:</strong> to examine or investigate something</li>
                    <li><strong>give out:</strong> to distribute or give something to several people</li>
                  </ul>
                </div>

                <img src={caeCarImg} alt="Car pulling over" className="w-full rounded-lg" />

                <div className="flex gap-4 pt-4">
                  <Button onClick={checkExercise4} className="flex-1">
                    Check Answers
                  </Button>
                  <Button onClick={() => resetExercise(4)} variant="outline" className="flex-1">
                    Reset
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
        
        <Footer />
      </div>
    );
  }

  // Exercise 5: Match the Crime
  if (currentActivity === "match-crime") {
    return (
      <div className="min-h-screen bg-background flex flex-col">
        <Navigation />
        
        <main className="flex-1 py-12">
          <div className="container mx-auto px-4 max-w-4xl">
            <Button 
              onClick={() => setCurrentActivity("home")}
              variant="ghost"
              className="mb-6 gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Activities
            </Button>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl font-merriweather">Match the Crime</CardTitle>
                <CardDescription>
                  Match what each person did with the name of their crime.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <img src={caeCrimesImg} alt="Crime related images" className="w-full rounded-lg mb-6" />
                
                {exercise5Data.map((item, index) => (
                  <div key={item.id} className="p-4 bg-secondary/20 rounded-lg space-y-3">
                    <p className="font-medium">
                      {String.fromCharCode(97 + index)}) {item.scenario}
                    </p>
                    <select
                      value={exercise5Answers[item.id] || ""}
                      onChange={(e) => setExercise5Answers({
                        ...exercise5Answers,
                        [item.id]: e.target.value
                      })}
                      className="w-full px-3 py-2 border rounded-md"
                    >
                      <option value="">Choose crime...</option>
                      {crimeOptions.map(crime => (
                        <option key={crime} value={crime}>{crime}</option>
                      ))}
                    </select>
                  </div>
                ))}

                <div className="flex gap-4 pt-4">
                  <Button onClick={checkExercise5} className="flex-1">
                    Check Answers
                  </Button>
                  <Button onClick={() => resetExercise(5)} variant="outline" className="flex-1">
                    Reset
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
        
        <Footer />
      </div>
    );
  }

  // Exercise 6: Complete with Verbs
  if (currentActivity === "complete-verbs") {
    return (
      <div className="min-h-screen bg-background flex flex-col">
        <Navigation />
        
        <main className="flex-1 py-12">
          <div className="container mx-auto px-4 max-w-4xl">
            <Button 
              onClick={() => setCurrentActivity("home")}
              variant="ghost"
              className="mb-6 gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Activities
            </Button>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl font-merriweather">Complete with Verbs</CardTitle>
                <CardDescription>
                  Complete the sentences with a verb from the box in the correct form.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="bg-brand-navy/10 p-4 rounded-lg">
                  <p className="font-medium">Verb box: axe, bring out, cope, deduct, get over, give out, hold out, peak, pull over</p>
                </div>

                {exercise6Data.map((item, index) => (
                  <div key={item.id} className="p-4 bg-secondary/20 rounded-lg space-y-3">
                    <p className="font-medium">{index + 1}. {item.sentence}</p>
                    <input
                      type="text"
                      placeholder="Type the verb..."
                      value={exercise6Answers[item.id] || ""}
                      onChange={(e) => setExercise6Answers({
                        ...exercise6Answers,
                        [item.id]: e.target.value
                      })}
                      className="w-full px-3 py-2 border rounded-md"
                    />
                  </div>
                ))}

                <div className="flex gap-4 pt-4">
                  <Button onClick={checkExercise6} className="flex-1">
                    Check Answers
                  </Button>
                  <Button onClick={() => resetExercise(6)} variant="outline" className="flex-1">
                    Reset
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
        
        <Footer />
      </div>
    );
  }

  // Exercise 7: Replace the Word
  if (currentActivity === "replace-word") {
    return (
      <div className="min-h-screen bg-background flex flex-col">
        <Navigation />
        
        <main className="flex-1 py-12">
          <div className="container mx-auto px-4 max-w-4xl">
            <Button 
              onClick={() => setCurrentActivity("home")}
              variant="ghost"
              className="mb-6 gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Activities
            </Button>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl font-merriweather">Replace the Word</CardTitle>
                <CardDescription>
                  Replace the underlined part of the sentence with a word from the box.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="bg-brand-navy/10 p-4 rounded-lg">
                  <p className="font-medium text-sm">Word box: affluent, distressing, disused, dull, eligible, genre, greed, habitual, impeccable, misuse, offence, prominent, splendid, stubborn</p>
                </div>

                {exercise7Data.map((item, index) => (
                  <div key={item.id} className="p-4 bg-secondary/20 rounded-lg space-y-3">
                    <p className="font-medium">{index + 1}. {item.sentence}</p>
                    <input
                      type="text"
                      placeholder="Type the replacement word..."
                      value={exercise7Answers[item.id] || ""}
                      onChange={(e) => setExercise7Answers({
                        ...exercise7Answers,
                        [item.id]: e.target.value
                      })}
                      className="w-full px-3 py-2 border rounded-md"
                    />
                  </div>
                ))}

                <div className="flex gap-4 pt-4">
                  <Button onClick={checkExercise7} className="flex-1">
                    Check Answers
                  </Button>
                  <Button onClick={() => resetExercise(7)} variant="outline" className="flex-1">
                    Reset
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
        
        <Footer />
      </div>
    );
  }

  // Exercise 8: Word Formation
  if (currentActivity === "word-formation") {
    return (
      <div className="min-h-screen bg-background flex flex-col">
        <Navigation />
        
        <main className="flex-1 py-12">
          <div className="container mx-auto px-4 max-w-4xl">
            <Button 
              onClick={() => setCurrentActivity("home")}
              variant="ghost"
              className="mb-6 gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Activities
            </Button>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl font-merriweather">Word Formation</CardTitle>
                <CardDescription>
                  Complete the sentences with a word formed from the word in capitals.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {exercise8Data.map((item, index) => (
                  <div key={item.id} className="p-4 bg-secondary/20 rounded-lg space-y-3">
                    <p className="font-medium">{index + 1}. {item.sentence}</p>
                    <div className="flex gap-4 items-center">
                      <span className="font-bold text-brand-teal">({item.word})</span>
                      <input
                        type="text"
                        placeholder="Type the formed word..."
                        value={exercise8Answers[item.id] || ""}
                        onChange={(e) => setExercise8Answers({
                          ...exercise8Answers,
                          [item.id]: e.target.value
                        })}
                        className="flex-1 px-3 py-2 border rounded-md"
                      />
                    </div>
                  </div>
                ))}

                <div className="flex gap-4 pt-4">
                  <Button onClick={checkExercise8} className="flex-1">
                    Check Answers
                  </Button>
                  <Button onClick={() => resetExercise(8)} variant="outline" className="flex-1">
                    Reset
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
        
        <Footer />
      </div>
    );
  }

  return null;
};

export default CaeExamPracticeWrapper;
