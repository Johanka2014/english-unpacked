import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const outsourcingExtracts = [
  { id: 1, text: "A major Spanish supermarket chain plans to outsource 350 jobs for software professionals to India. The plan is to have approximately 650 staff in its Indian subsidiary by the end of 2007. Originally the chain gave assurances that the move would not lead to widespread job losses.", style: "normal" as const },
  { id: 2, text: "1500 steel workers in Sweden were informed their jobs were safe after a major deal with a Finnish-led metal consortium was finalized. Workers welcomed the news as there had been widespread rumours that the plant would be closed.", style: "italic" as const },
  { id: 3, text: "Two unions have voted against strike action over the closure of a Coventry car plant in the U.K. This will lead to a loss of 900 jobs. Despite a protest march in September, workers were urged by their employers not to take strike action as it would not be 'in the interests of the employees, customers and the company'.", style: "italic" as const },
  { id: 4, text: "Experts at the National Outsourcing Association state that companies will be more open with staff and unions in the future about outsourcing plans, following strike action at various organizations last year. Union consultation should be introduced as early as possible in an effort to avert industrial disputes, it stated.", style: "normal" as const },
];

const comprehensionQuestions = [
  { id: 1, question: "What is happening with the Spanish supermarket chain?", answer: "They plan to outsource 350 software jobs to India, aiming for 650 staff in their Indian subsidiary." },
  { id: 2, question: "What happened with the Swedish steel workers?", answer: "Their jobs were confirmed safe after a Finnish-led consortium deal, ending rumours of plant closure." },
  { id: 3, question: "Why did unions vote against strike action in Coventry?", answer: "Employers argued it would not be in the interests of employees, customers, or the company." },
  { id: 4, question: "What do outsourcing experts recommend?", answer: "Companies should be more transparent with staff/unions about outsourcing plans and introduce union consultation early to prevent disputes." },
];

const negotiationTips = [
  "Always listen carefully to the other person.",
  "Be flexible and prepared to compromise.",
  "Be positive — highlight the 'common ground'.",
  "Build rapport and be courteous.",
  "Use simple and clear language.",
  "Use persuasion, not threats.",
  "Prepare your arguments.",
  "Be constructive and avoid open conflict.",
  "Always remember your aims.",
  "When agreement is reached, summarize clearly and close the deal.",
];

const verbNounMatching = [
  { verb: "to work out", match: "a solution", definition: "to solve by reasoning" },
  { verb: "to reject", match: "the offer", definition: "to refuse a suggestion" },
  { verb: "to contain", match: "costs", definition: "to hold expenses within a fixed limit" },
  { verb: "to threaten", match: "industrial action", definition: "to say you intend to strike" },
  { verb: "to face", match: "closure", definition: "to confront the consequences of shutting down" },
  { verb: "to reach", match: "a compromise", definition: "to agree to meet in the middle" },
  { verb: "to put", match: "your cards on the table", definition: "to declare one's position" },
  { verb: "to post (something)", match: "a notice board", definition: "to display information for everyone to read" },
];

const ReadingUnit6 = () => {
  const [showCompAnswers, setShowCompAnswers] = useState<Record<number, boolean>>({});
  const [showMatching, setShowMatching] = useState(false);

  return (
    <div className="space-y-8">
      {/* Outsourcing Extracts */}
      <Card className="service-card">
        <CardContent className="p-6">
          <h3 className="text-2xl font-semibold mb-4 font-merriweather text-foreground">Outsourcing and Industrial Relations</h3>
          <p className="text-muted-foreground mb-4">Has your company ever outsourced any jobs? Read the following extracts and discuss with the rest of the group.</p>
          <div className="space-y-4">
            {outsourcingExtracts.map((extract) => (
              <div key={extract.id} className={`p-4 border border-border rounded-lg ${extract.style === "italic" ? "italic" : ""}`}>
                <p className="text-muted-foreground text-sm">{extract.text}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Comprehension */}
      <Card className="service-card">
        <CardContent className="p-6">
          <h3 className="text-2xl font-semibold mb-4 font-merriweather text-foreground">Comprehension Questions</h3>
          <div className="space-y-3">
            {comprehensionQuestions.map((q) => (
              <div key={q.id} className="p-3 border border-border rounded-lg">
                <div className="flex justify-between items-start gap-2">
                  <p className="text-muted-foreground">{q.id}. {q.question}</p>
                  <Button size="sm" variant="ghost" onClick={() => setShowCompAnswers({ ...showCompAnswers, [q.id]: !showCompAnswers[q.id] })}>
                    {showCompAnswers[q.id] ? "Hide" : "Show"}
                  </Button>
                </div>
                {showCompAnswers[q.id] && <p className="text-green-700 text-sm mt-2 italic">{q.answer}</p>}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Negotiation Tips Ranking */}
      <Card className="service-card">
        <CardContent className="p-6">
          <h3 className="text-2xl font-semibold mb-4 font-merriweather text-foreground">What Makes a Successful Negotiation?</h3>
          <p className="text-muted-foreground mb-4">Work with a partner to rank the tips below from 1–10 (1 being the most important). Can you add any more tips to the list?</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {negotiationTips.map((tip, i) => (
              <div key={i} className="p-3 border border-border rounded-lg flex items-start gap-3">
                <span className="bg-primary/10 text-primary font-bold w-8 h-8 rounded-full flex items-center justify-center text-sm shrink-0">{i + 1}</span>
                <p className="text-muted-foreground text-sm">{tip}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Verb-Noun Matching */}
      <Card className="service-card">
        <CardContent className="p-6">
          <h3 className="text-2xl font-semibold mb-4 font-merriweather text-foreground">Negotiation Verbs and Nouns</h3>
          <p className="text-muted-foreground mb-4">Match the following verbs, nouns, and definitions that appear in the negotiation.</p>
          <Button onClick={() => setShowMatching(!showMatching)} variant="outline" className="mb-4">
            {showMatching ? "Hide" : "Show"} Matches
          </Button>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left p-2 text-foreground">Verb</th>
                  <th className="text-left p-2 text-foreground">Noun</th>
                  <th className="text-left p-2 text-foreground">Definition</th>
                </tr>
              </thead>
              <tbody>
                {verbNounMatching.map((item, i) => (
                  <tr key={i} className="border-b border-border/50">
                    <td className="p-2 font-medium text-primary">{item.verb}</td>
                    <td className="p-2 text-muted-foreground">{showMatching ? item.match : "..."}</td>
                    <td className="p-2 text-muted-foreground text-xs">{showMatching ? item.definition : "..."}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Discussion */}
      <Card className="service-card">
        <CardContent className="p-6">
          <h3 className="text-2xl font-semibold mb-4 font-merriweather text-foreground">Over to You</h3>
          <p className="text-muted-foreground italic">💬 What action would you take in such cases, whether unionized or not, to prevent rumours and possible industrial action? Exactly how much of a commitment should an employer have to its staff?</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default ReadingUnit6;
