import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const multipleChoiceQ1 = [
  { id: 1, text: "What is the situation regarding the pay increase?",
    options: ["A 3% increase has been turned down.", "A 5% increase has been agreed.", "A 5% review was given a year ago."],
    answer: "A 3% increase has been turned down." },
  { id: 2, text: "What is the redundancy situation?",
    options: ["There may have to be some redundancies worldwide.", "There may have to be some redundancies in the U.K.", "There may have to be some redundancies in Amsterdam."],
    answer: "There may have to be some redundancies in the U.K." },
  { id: 3, text: "What happened with white-collar staff salaries?",
    options: ["White-collar staff have had salaries frozen for 5 years.", "White-collar workers' salaries were last reviewed 2 years ago.", "White-collar workers have no chance of a salary review."],
    answer: "White-collar workers' salaries were last reviewed 2 years ago." },
  { id: 4, text: "What is the situation at the plant?",
    options: ["Workers at the plant are on strike.", "Workers at the plant are dissatisfied with the proposed wage increase.", "Workers at the plant are concerned about safety issues."],
    answer: "Workers at the plant are dissatisfied with the proposed wage increase." },
  { id: 5, text: "What are the rumours going around the plant?",
    options: ["Workers at the plant have heard rumours of closure.", "Workers at the plant have heard rumours wages may be reduced.", "Workers at the plant have heard rumours that jobs may be transferred to Poland."],
    answer: "Workers at the plant have heard rumours that jobs may be transferred to Poland." },
];

const gapFillWords = ["counter", "behind", "freeze", "tactics", "fail", "rumours", "agreement"];
const gapFillQuestions = [
  { id: 1, text: "What's ___ the union's rejection of the pay deal?", answer: "behind" },
  { id: 2, text: "What exactly was Jason's ___-argument?", answer: "counter" },
  { id: 3, text: "Why did the union representatives and their members ___ to reach ___?", answer: "fail", answer2: "agreement" },
  { id: 4, text: "Why did they ___ the salaries of white-collar staff two years ago?", answer: "freeze" },
  { id: 5, text: "What are the ___ going around the plant?", answer: "rumours" },
  { id: 6, text: "Why have Klaus and Jason got to plan their ___?", answer: "tactics" },
];

const trueFalseStatements = [
  { id: 1, text: "Things will get worse in the next 6-9 months as the economic outlook is worsening.", answer: true },
  { id: 2, text: "Overtime is only allowed on the night shift.", answer: false },
  { id: 3, text: "If the workers don't get more money, they will go on strike.", answer: true },
  { id: 4, text: "The area where the plant is located has high unemployment.", answer: true },
  { id: 5, text: "The management can't promise anything positive.", answer: true },
  { id: 6, text: "Sales have been getting worse at the Dutch plant.", answer: false },
];

const negotiationParts = [
  { phase: "building rapport", sentences: [7, 5] },
  { phase: "establishing objectives and aims", sentences: [3, 4] },
  { phase: "addressing conflict", sentences: [2, 9] },
  { phase: "bargaining", sentences: [6, 10] },
  { phase: "concluding", sentences: [1, 8] },
];

const negotiationSentences = [
  { id: 1, text: "Excellent, then let me conclude by summing up the meeting." },
  { id: 2, text: "If the white-collar workers accepted a pay freeze last year, it's not unreasonable to give them a higher increase now." },
  { id: 3, text: "Let's not set too high an aim." },
  { id: 4, text: "We'd like to start by welcoming everyone and restating our proposals." },
  { id: 5, text: "Believe me, we'd really like to shake hands and walk out of here today with a positive result." },
  { id: 6, text: "But we want your assurances that there will be no industrial action." },
  { id: 7, text: "We are happy to meet you today to work out a solution." },
  { id: 8, text: "That's it, then. A successful conclusion for everybody." },
  { id: 9, text: "We've studied the figures and the bottom line is that there's not much money in the pot, so we have to reach a compromise!" },
  { id: 10, text: "Management has asked us to give you their assurances on this point." },
];

const ListeningUnit6 = () => {
  const [mcAnswers, setMcAnswers] = useState<Record<number, string>>({});
  const [mcChecked, setMcChecked] = useState(false);
  const [tfAnswers, setTfAnswers] = useState<Record<number, boolean | null>>({});
  const [tfChecked, setTfChecked] = useState(false);
  const [showGapAnswers, setShowGapAnswers] = useState(false);
  const [showNegotiation, setShowNegotiation] = useState(false);

  return (
    <div className="space-y-8">
      {/* Audio */}
      <Card className="service-card">
        <CardContent className="p-6">
          <h3 className="text-2xl font-semibold mb-4 font-merriweather text-foreground">Audio</h3>
          <p className="text-muted-foreground mb-4">Listen to the conversation between Klaus Bohn, the personnel manager of a global company in Cologne, and Jason Hughes, the industrial relations manager of their plant in the U.K.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="font-semibold text-foreground text-sm">Audio 17</label>
              <audio controls className="w-full mt-1"><source src="/audio/hr-unit6-track17.mp3" /></audio>
            </div>
            <div>
              <label className="font-semibold text-foreground text-sm">Audio 18</label>
              <audio controls className="w-full mt-1"><source src="/audio/hr-unit6-track18.mp3" /></audio>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Exercise 3: Multiple Choice */}
      <Card className="service-card">
        <CardContent className="p-6">
          <h3 className="text-2xl font-semibold mb-4 font-merriweather text-foreground">Exercise 3: Comprehension</h3>
          <p className="text-muted-foreground mb-4">Which statement in each group best describes the situation they are discussing?</p>
          <div className="space-y-5">
            {multipleChoiceQ1.map((q) => (
              <div key={q.id} className={`p-4 border rounded-lg ${mcChecked ? (mcAnswers[q.id] === q.answer ? "border-green-500 bg-green-50" : "border-red-500 bg-red-50") : "border-border"}`}>
                <p className="font-medium text-foreground mb-2">{q.id}. {q.text}</p>
                <div className="space-y-1">
                  {q.options.map((opt) => (
                    <label key={opt} className="flex items-center gap-2 cursor-pointer" onClick={() => !mcChecked && setMcAnswers({ ...mcAnswers, [q.id]: opt })}>
                      <input type="radio" name={`mc-${q.id}`} checked={mcAnswers[q.id] === opt} onChange={() => {}} className="accent-primary" />
                      <span className="text-muted-foreground text-sm">{opt}</span>
                    </label>
                  ))}
                </div>
                {mcChecked && mcAnswers[q.id] !== q.answer && <p className="text-red-600 text-sm mt-1">→ {q.answer}</p>}
              </div>
            ))}
          </div>
          <Button onClick={() => setMcChecked(true)} className="mt-4 bg-primary hover:bg-primary/90">Check Answers</Button>
        </CardContent>
      </Card>

      {/* Exercise 4: Gap Fill */}
      <Card className="service-card">
        <CardContent className="p-6">
          <h3 className="text-2xl font-semibold mb-4 font-merriweather text-foreground">Exercise 4: Complete the Questions</h3>
          <p className="text-muted-foreground mb-4">Complete the questions with the words from the box:</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {gapFillWords.map((w) => (
              <span key={w} className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">{w}</span>
            ))}
          </div>
          <div className="space-y-3">
            {gapFillQuestions.map((q) => (
              <div key={q.id} className="p-3 border border-border rounded-lg">
                <p className="text-muted-foreground text-sm">{q.id}. {q.text}</p>
                {showGapAnswers && <p className="text-green-700 text-sm mt-1 italic">→ {q.answer}{q.answer2 ? `, ${q.answer2}` : ""}</p>}
              </div>
            ))}
          </div>
          <Button onClick={() => setShowGapAnswers(!showGapAnswers)} variant="outline" className="mt-4">
            {showGapAnswers ? "Hide" : "Show"} Answers
          </Button>
        </CardContent>
      </Card>

      {/* True/False Statements */}
      <Card className="service-card">
        <CardContent className="p-6">
          <h3 className="text-2xl font-semibold mb-4 font-merriweather text-foreground">True or False?</h3>
          <p className="text-muted-foreground mb-4">Listen again and decide whether the following statements about the negotiation are true or false.</p>
          <div className="space-y-3">
            {trueFalseStatements.map((s) => (
              <div key={s.id} className={`p-3 border rounded-lg ${tfChecked ? (tfAnswers[s.id] === s.answer ? "border-green-500 bg-green-50" : "border-red-500 bg-red-50") : "border-border"}`}>
                <p className="text-muted-foreground text-sm mb-2">{s.id}. {s.text}</p>
                <div className="flex gap-3">
                  <Button size="sm" variant={tfAnswers[s.id] === true ? "default" : "outline"} onClick={() => !tfChecked && setTfAnswers({ ...tfAnswers, [s.id]: true })}>True</Button>
                  <Button size="sm" variant={tfAnswers[s.id] === false ? "default" : "outline"} onClick={() => !tfChecked && setTfAnswers({ ...tfAnswers, [s.id]: false })}>False</Button>
                </div>
              </div>
            ))}
          </div>
          <Button onClick={() => setTfChecked(true)} className="mt-4 bg-primary hover:bg-primary/90">Check Answers</Button>
        </CardContent>
      </Card>

      {/* Negotiation Phases */}
      <Card className="service-card">
        <CardContent className="p-6">
          <h3 className="text-2xl font-semibold mb-4 font-merriweather text-foreground">Parts of a Negotiation</h3>
          <p className="text-muted-foreground mb-4">Match the following sentences to the five parts of a negotiation.</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {negotiationParts.map((p) => (
              <span key={p.phase} className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium capitalize">{p.phase}</span>
            ))}
          </div>
          <div className="space-y-2 mb-4">
            {negotiationSentences.map((s) => (
              <div key={s.id} className="p-3 border border-border rounded-lg">
                <span className="font-bold text-primary mr-2">{s.id}.</span>
                <span className="text-muted-foreground text-sm">{s.text}</span>
              </div>
            ))}
          </div>
          <Button onClick={() => setShowNegotiation(!showNegotiation)} variant="outline">
            {showNegotiation ? "Hide" : "Show"} Answers
          </Button>
          {showNegotiation && (
            <div className="mt-4 space-y-2">
              {negotiationParts.map((p) => (
                <div key={p.phase} className="p-3 bg-muted/30 rounded-lg">
                  <span className="font-semibold text-foreground capitalize">{p.phase}:</span>
                  <span className="text-muted-foreground text-sm ml-2">Sentences {p.sentences.join(", ")}</span>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default ListeningUnit6;
