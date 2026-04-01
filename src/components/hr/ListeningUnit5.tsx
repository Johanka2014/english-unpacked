import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const benefitMatching = [
  { person: "Sophie", answer: "c", correctLabel: "profit-sharing bonus" },
  { person: "Paola", answer: "a", correctLabel: "family-friendly benefits and flexible working hours" },
  { person: "Steve", answer: "b", correctLabel: "childcare and eldercare" },
];
const benefitOptions = [
  { id: "a", label: "family-friendly benefits and flexible working hours" },
  { id: "b", label: "childcare and eldercare" },
  { id: "c", label: "profit-sharing bonus" },
];

const threeColumnMatching = [
  { id: 1, left: "Sophie called the meeting", middle: "to discuss", right: "their benefits package." },
  { id: 2, left: "Paola felt they needed", middle: "to introduce", right: "more flexibility for staff." },
  { id: 3, left: "Steve was in favour of", middle: "giving", right: "employees greater freedom to have a good work/life balance." },
  { id: 4, left: "He was keen to", middle: "encourage", right: "female staff back to work." },
  { id: 5, left: "Steve will prepare", middle: "to submit", right: "a summary of benefits and costs." },
  { id: 6, left: "Sophie asked Paola", middle: "to inform Paola", right: "at the next regular meeting." },
  { id: 7, left: "Paola has already", middle: "talked to", right: "colleagues in other offices about flexitime initiatives." },
  { id: 8, left: "Sophie is going", middle: "to prepare", right: "the new profit-sharing bonus at their next meeting." },
];

const usefulLanguage = {
  "Asking for somebody's opinion or ideas": [
    "What is your view on this?",
    "Could I have some ___?",
    "Could I prepare a summary ...?",
  ],
  "Giving an opinion or feedback": [
    "Yes, I think we need...",
    "Well, I'm ___...",
    "Good idea.",
    "However, look ...",
  ],
  "Clarifying": [
    "What exactly ___ by ...?",
    "That's ___...",
    "By the way, ...",
    "As ___, we need ...",
    "I'll fill you in on ...",
  ],
};

const sentenceMatching = [
  { id: 1, left: "We haven't reviewed salaries", answer: "c", right: "for over a year." },
  { id: 2, left: "Come back to me", answer: "f", right: "with recommendations." },
  { id: 3, left: "We haven't had to make", answer: "d", right: "any staff redundant." },
  { id: 4, left: "Are there any staff developments", answer: "b", right: "on the horizon?" },
  { id: 5, left: "Your department", answer: "a", right: "is particularly vulnerable." },
  { id: 6, left: "I'm worried about the number of hours", answer: "e", right: "some of your staff are working." },
];
const sentenceOptions = ["a", "b", "c", "d", "e", "f"];

const ListeningUnit5 = () => {
  const [benefitAnswers, setBenefitAnswers] = useState<Record<number, string>>({});
  const [benefitChecked, setBenefitChecked] = useState(false);
  const [sentenceAnswers, setSentenceAnswers] = useState<Record<number, string>>({});
  const [sentenceChecked, setSentenceChecked] = useState(false);
  const [showLanguage, setShowLanguage] = useState(false);

  return (
    <div className="space-y-8">
      {/* Audio placeholder */}
      <Card className="service-card">
        <CardContent className="p-6">
          <h3 className="text-2xl font-semibold mb-4 font-merriweather text-foreground">Audio</h3>
          <p className="text-muted-foreground mb-4">Listen to the departmental meeting between Sophie Baptiste, Paola Canarutto and Steve Greenway about benefits.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="font-semibold text-foreground text-sm">Audio 9</label>
              <audio controls className="w-full mt-1"><source src="/audio/hr-unit5-track9.mp3" /></audio>
            </div>
            <div>
              <label className="font-semibold text-foreground text-sm">Audio 10</label>
              <audio controls className="w-full mt-1"><source src="/audio/hr-unit5-track10.mp3" /></audio>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Exercise 2: Benefit Matching */}
      <Card className="service-card">
        <CardContent className="p-6">
          <h3 className="text-2xl font-semibold mb-4 font-merriweather text-foreground">Exercise 2: Match Person to Benefit</h3>
          <p className="text-muted-foreground mb-4">Match each person with the benefit they mention.</p>
          <div className="space-y-3">
            {benefitMatching.map((item, i) => (
              <div key={i} className="flex items-center gap-4 flex-wrap">
                <span className="font-medium text-foreground w-24">{item.person}</span>
                <select
                  className={`border rounded-md px-3 py-2 ${benefitChecked ? (benefitAnswers[i] === item.answer ? "border-green-500 bg-green-50" : "border-red-500 bg-red-50") : "border-border"}`}
                  value={benefitAnswers[i] || ""}
                  onChange={(e) => setBenefitAnswers({ ...benefitAnswers, [i]: e.target.value })}
                  disabled={benefitChecked}
                >
                  <option value="">Select...</option>
                  {benefitOptions.map((o) => <option key={o.id} value={o.id}>{o.label}</option>)}
                </select>
              </div>
            ))}
          </div>
          <Button onClick={() => setBenefitChecked(true)} className="mt-4 bg-primary hover:bg-primary/90">Check Answers</Button>
          {benefitChecked && (
            <div className="mt-3 p-3 bg-muted/30 rounded-lg text-sm text-muted-foreground">
              <strong>Answers:</strong> Sophie → profit-sharing bonus; Paola → family-friendly benefits & flexible working hours; Steve → childcare and eldercare
            </div>
          )}
        </CardContent>
      </Card>

      {/* Exercise 3: Three Column Matching */}
      <Card className="service-card">
        <CardContent className="p-6">
          <h3 className="text-2xl font-semibold mb-4 font-merriweather text-foreground">Exercise 3: Match Phrases</h3>
          <p className="text-muted-foreground mb-4">Match phrases from the three columns to make true statements about the meeting.</p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead><tr className="border-b border-border">
                <th className="text-left p-2 text-foreground">Subject</th>
                <th className="text-left p-2 text-foreground">Verb</th>
                <th className="text-left p-2 text-foreground">Object</th>
              </tr></thead>
              <tbody>
                {threeColumnMatching.map((row) => (
                  <tr key={row.id} className="border-b border-border/50">
                    <td className="p-2 text-muted-foreground">{row.left}</td>
                    <td className="p-2 font-medium text-primary">{row.middle}</td>
                    <td className="p-2 text-muted-foreground">{row.right}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Useful Language */}
      <Card className="service-card">
        <CardContent className="p-6">
          <h3 className="text-2xl font-semibold mb-4 font-merriweather text-foreground">Useful Language</h3>
          <p className="text-muted-foreground mb-4">Complete these phrases from the meeting. Then listen again to check.</p>
          <Button onClick={() => setShowLanguage(!showLanguage)} variant="outline" className="mb-4">
            {showLanguage ? "Hide" : "Show"} Phrases
          </Button>
          {showLanguage && (
            <div className="space-y-4">
              {Object.entries(usefulLanguage).map(([category, phrases]) => (
                <div key={category} className="p-4 bg-muted/30 rounded-lg">
                  <h4 className="font-semibold text-foreground mb-2">{category}</h4>
                  <ul className="space-y-1">
                    {phrases.map((p, i) => <li key={i} className="text-muted-foreground text-sm">• {p}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>

      {/* Exercise: Sentence Matching (Audio 10) */}
      <Card className="service-card">
        <CardContent className="p-6">
          <h3 className="text-2xl font-semibold mb-4 font-merriweather text-foreground">Exercise: Salary Review Matching</h3>
          <p className="text-muted-foreground mb-4">Match the sentence beginnings with their endings.</p>
          <div className="space-y-3">
            {sentenceMatching.map((item) => (
              <div key={item.id} className="flex items-center gap-3 flex-wrap">
                <span className="text-muted-foreground flex-1 min-w-[200px]">{item.id}. {item.left}</span>
                <select
                  className={`border rounded-md px-3 py-2 min-w-[200px] ${sentenceChecked ? (sentenceAnswers[item.id] === item.answer ? "border-green-500 bg-green-50" : "border-red-500 bg-red-50") : "border-border"}`}
                  value={sentenceAnswers[item.id] || ""}
                  onChange={(e) => setSentenceAnswers({ ...sentenceAnswers, [item.id]: e.target.value })}
                  disabled={sentenceChecked}
                >
                  <option value="">Select...</option>
                  {sentenceOptions.map((o) => {
                    const match = sentenceMatching.find((s) => s.answer === o);
                    return <option key={o} value={o}>{o}. {match?.right}</option>;
                  })}
                </select>
              </div>
            ))}
          </div>
          <Button onClick={() => setSentenceChecked(true)} className="mt-4 bg-primary hover:bg-primary/90">Check Answers</Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default ListeningUnit5;
