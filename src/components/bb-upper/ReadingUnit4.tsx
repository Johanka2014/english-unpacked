import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CheckCircle2, XCircle } from "lucide-react";

type Q = {
  id: number;
  question: string;
  options: { letter: string; text: string }[];
  // Set of acceptable answer letters. For "more than one possible" we accept any in the set.
  correct: string[];
  feedback?: string;
};

const questions: Q[] = [
  {
    id: 1,
    question: "Which do you think is the best way to answer the phone at work?",
    options: [
      { letter: "A", text: "By saying Hello!" },
      { letter: "B", text: "By saying your name." },
      { letter: "C", text: "By saying your name and the name of your department or company." },
      { letter: "D", text: "By saying the name of your company." },
    ],
    correct: ["C"],
    feedback: "C is the most informative and professional.",
  },
  {
    id: 2,
    question: "How do you think English people answer the phone when they are at home?",
    options: [
      { letter: "A", text: "They say their phone number, e.g. 01267 436636." },
      { letter: "B", text: "They say the name of their town and their phone number." },
      { letter: "C", text: "They say Hello!" },
    ],
    correct: ["A", "C"],
    feedback: "A and C are both common; B is now quite old-fashioned.",
  },
  {
    id: 3,
    question: "Which is the best reply when someone says 'Can I speak to (your name)?'",
    options: [
      { letter: "A", text: "That's me!" },
      { letter: "B", text: "Speaking." },
      { letter: "C", text: "Yes, I am." },
    ],
    correct: ["B"],
    feedback: "'Speaking.' is the standard polite answer.",
  },
  {
    id: 4,
    question: "How should Alberto Costa introduce himself for the first time on the phone?",
    options: [
      { letter: "A", text: "It's Alberto Costa." },
      { letter: "B", text: "I'm Alberto Costa." },
      { letter: "C", text: "My name's Alberto Costa." },
    ],
    correct: ["C"],
    feedback: "Use 'My name's…' the first time you introduce yourself.",
  },
  {
    id: 5,
    question: "How should Lucia Falcone introduce herself to someone who already knows her?",
    options: [
      { letter: "A", text: "This is Lucia Falcone." },
      { letter: "B", text: "I'm Lucia Falcone." },
      { letter: "C", text: "It's Lucia Falcone here." },
    ],
    correct: ["A", "C"],
    feedback: "Both A and C are natural.",
  },
  {
    id: 6,
    question: "Which is the most formal way to ask someone to wait?",
    options: [
      { letter: "A", text: "Could you hold on a minute, please?" },
      { letter: "B", text: "Hang on!" },
      { letter: "C", text: "Wait, please." },
    ],
    correct: ["A"],
    feedback: "A is formal, B is informal, C sounds abrupt/rude.",
  },
  {
    id: 7,
    question: "Which is the formal way to ask who is calling?",
    options: [
      { letter: "A", text: "Who's that?" },
      { letter: "B", text: "Who are you?" },
      { letter: "C", text: "Who's calling, please?" },
    ],
    correct: ["C"],
    feedback: "A is informal, B is rude, C is formal.",
  },
  {
    id: 8,
    question: "Which is the most formal way to introduce the subject of your call?",
    options: [
      { letter: "A", text: "I want to talk about the sales conference in March." },
      { letter: "B", text: "I'm calling in connection with the sales conference in March." },
      { letter: "C", text: "Let's talk about the sales conference in March." },
    ],
    correct: ["B"],
    feedback: "'I'm calling in connection with…' is the formal/business phrase.",
  },
  {
    id: 9,
    question: "Why is it especially important to use 'please' and 'thank you' on the phone?",
    options: [
      { letter: "A", text: "The other person can't see your face, so you have to use these words more often to show you are being friendly and polite." },
      { letter: "B", text: "The British and Americans both expect it." },
      { letter: "C", text: "It's not important." },
    ],
    correct: ["A"],
  },
  {
    id: 10,
    question: "Which would you say when you want to find information on your computer while on the phone?",
    options: [
      { letter: "A", text: "Wait while I get it on my computer, please." },
      { letter: "B", text: "Just a moment while I get it up on the screen." },
      { letter: "C", text: "I'm just bringing up your details now." },
    ],
    correct: ["B", "C"],
    feedback: "B and C are both natural; A sounds blunt.",
  },
];

const ReadingUnit4 = () => {
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [results, setResults] = useState<Record<number, boolean> | null>(null);

  const check = () => {
    const r: Record<number, boolean> = {};
    questions.forEach((q) => { r[q.id] = q.correct.includes(answers[q.id]); });
    setResults(r);
  };

  return (
    <div className="space-y-8">
      <Card className="service-card">
        <CardContent className="p-6">
          <h3 className="text-2xl font-semibold mb-4 font-merriweather text-foreground">A telephone quiz</h3>
          <p className="text-muted-foreground">
            Answer these questions about how to speak on the phone in English. In many cases, more than one answer is possible — choose the one you think is best.
          </p>
        </CardContent>
      </Card>

      {questions.map((q) => (
        <Card key={q.id} className="service-card">
          <CardContent className="p-6">
            <div className="flex items-start gap-3 mb-4">
              <span className="text-brand-royal font-bold text-lg">{q.id}.</span>
              <p className="text-foreground font-medium">{q.question}</p>
              {results && (results[q.id]
                ? <CheckCircle2 className="h-5 w-5 text-green-600 ml-auto shrink-0" />
                : <XCircle className="h-5 w-5 text-red-500 ml-auto shrink-0" />)}
            </div>
            <div className="space-y-2 mb-3">
              {q.options.map((o) => (
                <label key={o.letter} className="flex items-start gap-3 p-3 rounded-lg border border-border hover:bg-accent/50 cursor-pointer">
                  <input
                    type="radio"
                    name={`q-${q.id}`}
                    value={o.letter}
                    checked={answers[q.id] === o.letter}
                    onChange={() => { setAnswers((p) => ({ ...p, [q.id]: o.letter })); setResults(null); }}
                    className="mt-1"
                  />
                  <span className="text-foreground"><strong className="text-brand-royal mr-2">{o.letter}</strong>{o.text}</span>
                </label>
              ))}
            </div>
            {results && !results[q.id] && (
              <p className="text-sm text-red-600">Best answer: {q.correct.join(" or ")}. {q.feedback}</p>
            )}
            {results && results[q.id] && q.feedback && (
              <p className="text-sm text-green-700">{q.feedback}</p>
            )}
          </CardContent>
        </Card>
      ))}

      <Button onClick={check} className="bg-brand-royal hover:bg-brand-navy">Check All Answers</Button>
    </div>
  );
};

export default ReadingUnit4;
