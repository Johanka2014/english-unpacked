import { useState, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const phraseOrdering = [
  { scrambled: "a shop closed enforce", answer: "enforce a closed shop", id: "a" },
  { scrambled: "conditions pay and negotiate", answer: "negotiate pay and conditions", id: "b" },
  { scrambled: "take action industrial", answer: "take industrial action", id: "c" },
  { scrambled: "interests after look employees'", answer: "look after employees' interests", id: "d" },
  { scrambled: "wage involved be in negotiations", answer: "be involved in wage negotiations", id: "e" },
  { scrambled: "agreement collective discuss a", answer: "discuss a collective agreement", id: "f" },
  { scrambled: "offer put a counter- forward", answer: "put forward a counter-offer", id: "g" },
];

const gapFillSentences = [
  { id: 1, before: "The Personnel Manager is going to", after: "to the union of a 5% pay rise.", answer: "put forward a counter-offer" },
  { id: 2, before: "Each year we have to", after: "with the union representatives.", answer: "negotiate pay and conditions" },
  { id: 3, before: "The major publishing company had no choice but to", after: ".", answer: "enforce a closed shop" },
  { id: 4, before: "The workers threatened to", after: "if the redundancies went ahead.", answer: "take industrial action" },
  { id: 5, before: "In the U.K., shop stewards are elected by union members to", after: "and represent them to management.", answer: "look after employees' interests" },
  { id: 6, before: "Legislation lays down minimum time periods for consultation to", after: "when more than 20 redundancies are proposed.", answer: "discuss a collective agreement" },
  { id: 7, before: "The company will soon", after: "with the union.", answer: "be involved in wage negotiations" },
];

const definitionMatching = [
  { id: 1, definition: "to reject a proposal or suggestion", options: ["to make a counter-offer", "to fail to reach agreement"], answer: "to fail to reach agreement" },
  { id: 2, definition: "workers on the production line", options: ["blue-collar workers", "white-collar workers"], answer: "blue-collar workers" },
  { id: 3, definition: "a general fall in orders across many business sectors", options: ["when productivity is down", "an economic downturn"], answer: "an economic downturn" },
  { id: 4, definition: "a response to another suggestion", options: ["a counter-argument", "a negotiation"], answer: "a counter-argument" },
  { id: 5, definition: "the place where the goods are produced", options: ["the plant", "the shop floor"], answer: "the plant" },
  { id: 6, definition: "to stop pay for a certain period", options: ["to freeze salaries", "to negotiate a new pay deal"], answer: "to freeze salaries" },
];

const wordFamilies = [
  { keyword: "negotiate", sentences: [
    { id: 1, text: "Jason Hughes has an excellent record as a first-class ___.", answer: "negotiator" },
    { id: 2, text: "The offer we made to the union was not ___.", answer: "negotiable" },
    { id: 3, text: "The next ___ on pay and conditions takes place on 1 September.", answer: "negotiation" },
  ]},
  { keyword: "consult", sentences: [
    { id: 4, text: "We use a very experienced ___ from a firm of industrial mediators when we have a tough problem with the union.", answer: "consultant" },
    { id: 5, text: "Our joint ___ committee meets twice a year.", answer: "consultation" },
    { id: 6, text: "___ with the union can be difficult at the best of times!", answer: "Consulting" },
  ]},
];

const VocabularyUnit6 = () => {
  const [showPhrases, setShowPhrases] = useState(false);
  const [defAnswers, setDefAnswers] = useState<Record<number, string>>({});
  const [defChecked, setDefChecked] = useState(false);
  const [wfResults, setWfResults] = useState<Record<number, "correct" | "incorrect" | null>>({});
  const wfRefs = useRef<Record<number, HTMLInputElement | null>>({});

  const checkWordFamilies = () => {
    const r: Record<number, "correct" | "incorrect"> = {};
    wordFamilies.forEach((group) => {
      group.sentences.forEach((s) => {
        const v = wfRefs.current[s.id]?.value?.trim().toLowerCase() || "";
        r[s.id] = v === s.answer.toLowerCase() ? "correct" : "incorrect";
      });
    });
    setWfResults(r);
  };

  return (
    <div className="space-y-8">
      {/* Phrase Ordering */}
      <Card className="service-card">
        <CardContent className="p-6">
          <h3 className="text-2xl font-semibold mb-4 font-merriweather text-foreground">Put Phrases in the Right Word Order</h3>
          <p className="text-muted-foreground mb-4">Unscramble each phrase, then use them to complete the sentences below.</p>
          <Button onClick={() => setShowPhrases(!showPhrases)} variant="outline" className="mb-4">
            {showPhrases ? "Hide" : "Show"} Correct Phrases
          </Button>
          <div className="space-y-3">
            {phraseOrdering.map((p) => (
              <div key={p.id} className="flex items-center gap-4 p-3 border border-border rounded-lg">
                <span className="font-bold text-primary w-6">{p.id}</span>
                <span className="text-muted-foreground italic">{p.scrambled}</span>
                {showPhrases && <span className="text-primary font-medium ml-auto">→ {p.answer}</span>}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Gap Fill with phrases */}
      <Card className="service-card">
        <CardContent className="p-6">
          <h3 className="text-2xl font-semibold mb-4 font-merriweather text-foreground">Complete the Sentences</h3>
          <p className="text-muted-foreground mb-4">Use the phrases from above to complete each sentence.</p>
          <div className="space-y-4">
            {gapFillSentences.map((s) => (
              <div key={s.id} className="p-3 border border-border rounded-lg">
                <p className="text-muted-foreground text-sm">
                  {s.id}. {s.before} <span className="font-mono text-primary">______</span> {s.after}
                </p>
                {showPhrases && <p className="text-green-700 text-sm mt-1 italic">→ {s.answer}</p>}
              </div>
            ))}
          </div>

          <div className="mt-6 p-4 bg-muted/30 rounded-lg">
            <h4 className="font-semibold text-foreground mb-2">Did You Know?</h4>
            <p className="text-muted-foreground text-sm">
              Non-union companies in the U.K. do not have an official or recognized joint employee consultation system. Unionized companies have <em>shop stewards</em> (or <em>union representatives</em>) who have been elected by union members to represent them to management.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Definition Matching */}
      <Card className="service-card">
        <CardContent className="p-6">
          <h3 className="text-2xl font-semibold mb-4 font-merriweather text-foreground">Match Definitions</h3>
          <p className="text-muted-foreground mb-4">Which phrase in each pair matches the definition?</p>
          <div className="space-y-4">
            {definitionMatching.map((d) => (
              <div key={d.id} className={`p-4 border rounded-lg ${defChecked ? (defAnswers[d.id] === d.answer ? "border-green-500 bg-green-50" : "border-red-500 bg-red-50") : "border-border"}`}>
                <p className="font-medium text-foreground mb-2">{d.id}. {d.definition}</p>
                <div className="space-y-1">
                  {d.options.map((opt) => (
                    <label key={opt} className="flex items-center gap-2 cursor-pointer" onClick={() => !defChecked && setDefAnswers({ ...defAnswers, [d.id]: opt })}>
                      <input type="radio" name={`def-${d.id}`} checked={defAnswers[d.id] === opt} onChange={() => {}} className="accent-primary" />
                      <span className="text-muted-foreground text-sm">{opt}</span>
                    </label>
                  ))}
                </div>
                {defChecked && defAnswers[d.id] !== d.answer && (
                  <p className="text-red-600 text-sm mt-1">→ {d.answer}</p>
                )}
              </div>
            ))}
          </div>
          <Button onClick={() => setDefChecked(true)} className="mt-4 bg-primary hover:bg-primary/90">Check Answers</Button>
        </CardContent>
      </Card>

      {/* Word Families */}
      <Card className="service-card">
        <CardContent className="p-6">
          <h3 className="text-2xl font-semibold mb-4 font-merriweather text-foreground">Word Families</h3>
          <p className="text-muted-foreground mb-4">Complete the sentences with words related to the key words. You might need to add prefixes or suffixes.</p>
          {wordFamilies.map((group) => (
            <div key={group.keyword} className="mb-6">
              <h4 className="font-semibold text-foreground mb-3 capitalize">{group.keyword}</h4>
              <div className="space-y-3">
                {group.sentences.map((s) => (
                  <div key={s.id}>
                    <label className="text-muted-foreground inline items-baseline text-sm">
                      {s.id}. {s.text.split("___")[0]}
                      <Input
                        ref={(el) => { wfRefs.current[s.id] = el; }}
                        className={`inline-block w-36 mx-1 ${wfResults[s.id] === "correct" ? "border-green-500 bg-green-50" : wfResults[s.id] === "incorrect" ? "border-red-500 bg-red-50" : ""}`}
                      />
                      {s.text.split("___")[1]}
                    </label>
                    {wfResults[s.id] === "incorrect" && <span className="text-red-600 text-sm ml-2">→ {s.answer}</span>}
                  </div>
                ))}
              </div>
            </div>
          ))}
          <Button onClick={checkWordFamilies} className="bg-primary hover:bg-primary/90">Check Answers</Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default VocabularyUnit6;
