import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const tradeUnionStatements = [
  { id: 1, text: "There are 164 million trade union members worldwide, which makes trade unions the world's largest social movement.", isTrue: true, explanation: "This is true — trade unions are indeed the world's largest social movement." },
  { id: 2, text: "Trade unions are called 'labor unions' in the U.S.", isTrue: true, explanation: "True. In the U.S. they use the term 'labor unions'." },
  { id: 3, text: "The term 'closed shop' relates to the unions in the retail business.", isTrue: false, explanation: "False. 'Closed shop' means a company can engage only employees who belong to the union." },
  { id: 4, text: "The E.U.'s 4 largest states all have modest levels of unionisation (Italy 30%, the U.K. 29%, Germany 27%, France 9%).", isTrue: true, explanation: "True. These are the approximate unionisation levels in those countries." },
  { id: 5, text: "In France, Works Councils must be established in every company with 50+ employees, subject to election every 2 years.", isTrue: true, explanation: "True. This is a requirement under French labour law." },
  { id: 6, text: "The major purpose of trade unions is to look after the interests of employers.", isTrue: false, explanation: "False. Trade unions look after the interests of employees, not employers." },
  { id: 7, text: "Margaret Thatcher was in conflict with the British trade unions in the 1980s.", isTrue: true, explanation: "True. The Thatcher government had well-known conflicts with UK trade unions." },
  { id: 8, text: "Since the fall of the Iron Curtain in 1989, unionisation in a lot of eastern European countries has increased dramatically.", isTrue: false, explanation: "False. Unionisation in eastern Europe generally decreased after 1989." },
];

const headlines = [
  "France hit by massive job protests",
  "Finance workers in Denmark anxious over bank security",
  "Flights disrupted following industrial action by Spanish air traffic controllers",
];

const newsStories = [
  { id: "A", text: "A nationwide strike in France over First Employment Contracts (CPE), allowing employers to terminate job contracts for the under-26s at any time during a 2-year trial period without giving a reason, caused over 1 million people to take to the streets across France. Large parts of France's transport networks ground to a halt and airport authorities warned of delays and disruption." },
  { id: "B", text: "The leader of the finance workers' union has called for national and European action to make workplaces more secure. Thousands of bank staff have been victims of bank robberies (an average of one a day in Denmark), with many requiring post traumatic stress treatment. He encouraged unions and employers to work together in a global initiative for safer workplaces." },
  { id: "C", text: "80% of flights in Spanish airspace were affected by industrial action as air traffic controllers at one of Madrid's airports refused to extend hours to cope with an increase in flights. Last night Spain's airport authority and the air traffic controllers' union were in what were described as 'tense negotiations'." },
];

const vocabFromStories = [
  { id: 1, meaning: "to protest", answer: "to take to the streets" },
  { id: 2, meaning: "to stop operating", answer: "ground to a halt" },
  { id: 3, meaning: "a worldwide plan", answer: "a global initiative" },
  { id: 4, meaning: "a strike", answer: "industrial action" },
];

const StarterUnit6 = () => {
  const [tfAnswers, setTfAnswers] = useState<Record<number, boolean | null>>({});
  const [tfChecked, setTfChecked] = useState(false);
  const [showVocab, setShowVocab] = useState(false);

  return (
    <div className="space-y-8">
      {/* Trade Union Statements */}
      <Card className="service-card">
        <CardContent className="p-6">
          <h3 className="text-2xl font-semibold mb-4 font-merriweather text-foreground">How Much Do You Know About Trade Unions?</h3>
          <p className="text-muted-foreground mb-6">Discuss and correct any statements you think are false.</p>
          <div className="space-y-4">
            {tradeUnionStatements.map((s) => (
              <div key={s.id} className={`p-4 border rounded-lg ${tfChecked ? (tfAnswers[s.id] === s.isTrue ? "border-green-500 bg-green-50" : "border-red-500 bg-red-50") : "border-border"}`}>
                <p className="text-muted-foreground mb-2">{s.id}. {s.text}</p>
                <div className="flex gap-3">
                  <Button size="sm" variant={tfAnswers[s.id] === true ? "default" : "outline"} onClick={() => !tfChecked && setTfAnswers({ ...tfAnswers, [s.id]: true })}>True</Button>
                  <Button size="sm" variant={tfAnswers[s.id] === false ? "default" : "outline"} onClick={() => !tfChecked && setTfAnswers({ ...tfAnswers, [s.id]: false })}>False</Button>
                </div>
                {tfChecked && tfAnswers[s.id] !== s.isTrue && (
                  <p className="text-red-600 text-sm mt-2">{s.explanation}</p>
                )}
                {tfChecked && tfAnswers[s.id] === s.isTrue && (
                  <p className="text-green-600 text-sm mt-2">Correct!</p>
                )}
              </div>
            ))}
          </div>
          <Button onClick={() => setTfChecked(true)} className="mt-6 bg-primary hover:bg-primary/90">Check Answers</Button>

          <div className="mt-6 p-4 bg-muted/30 rounded-lg">
            <h4 className="font-semibold text-foreground mb-2">Did You Know?</h4>
            <p className="text-muted-foreground text-sm"><em>Closed shop</em> means a company can engage only employees who belong to the union.</p>
          </div>
        </CardContent>
      </Card>

      {/* Headlines & News Stories */}
      <Card className="service-card">
        <CardContent className="p-6">
          <h3 className="text-2xl font-semibold mb-4 font-merriweather text-foreground">What Are These Headlines About?</h3>
          <div className="flex flex-wrap gap-3 mb-6">
            {headlines.map((h, i) => (
              <div key={i} className="p-3 bg-primary/10 border border-primary/20 rounded-lg">
                <p className="font-semibold text-foreground text-sm">{h}</p>
              </div>
            ))}
          </div>

          <p className="text-muted-foreground mb-4">Now read the three stories behind the headlines:</p>
          <div className="space-y-4">
            {newsStories.map((story) => (
              <div key={story.id} className="p-4 border border-border rounded-lg">
                <span className="font-bold text-primary mr-2">{story.id}</span>
                <span className="text-muted-foreground text-sm">{story.text}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Vocabulary from stories */}
      <Card className="service-card">
        <CardContent className="p-6">
          <h3 className="text-2xl font-semibold mb-4 font-merriweather text-foreground">Find Words or Phrases</h3>
          <p className="text-muted-foreground mb-4">Find words or phrases from the stories which mean the following:</p>
          <Button onClick={() => setShowVocab(!showVocab)} variant="outline" className="mb-4">
            {showVocab ? "Hide" : "Show"} Answers
          </Button>
          <div className="space-y-3">
            {vocabFromStories.map((v) => (
              <div key={v.id} className="flex items-center gap-4">
                <span className="text-muted-foreground w-48">{v.id}. {v.meaning}</span>
                {showVocab && <span className="text-primary font-medium italic">→ {v.answer}</span>}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default StarterUnit6;
