import { useState, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const persuadingPhrases = [
  "If you stopped picketing, then I think we could...",
  "It might be in your interest to…",
  "We can reassure you on that point totally.",
  "We might put a better offer on the table, provided (that) you stop the strike.",
  "It's the best offer around. You won't find a better one.",
  "I'd go along with that on condition that you...",
];

const bargainingPhrases = [
  "That seems a good compromise, as long as there is no industrial action of any kind.",
  "We would agree on one condition.",
  "If you agree to ..., we can ...",
  "If you threaten us, we'll withdraw the offer.",
  "Unless your members return to normal working tomorrow, we won't be able to...",
];

const conditionalSentences = [
  { id: 1, keywords: "our members get 5% increase in pay / take industrial action (unless)", example: "Unless our members get a 5% increase in pay they will take industrial action." },
  { id: 2, keywords: "be an increase in sales / can offer further 2% pay rise (provided that)", example: "" },
  { id: 3, keywords: "no further increases in pay / be no job losses Amsterdam (if/will)", example: "" },
  { id: 4, keywords: "another review in nine months / no industrial action (on condition that)", example: "" },
  { id: 5, keywords: "productivity increased / pay a bonus end of the year (if/could)", example: "" },
  { id: 6, keywords: "open on Sundays from 10-4 p.m. / lose business to competitors (unless)", example: "" },
  { id: 7, keywords: "customer service not suffer / introduce flexible working hours (provided)", example: "" },
];

const emailGapFill = [
  { id: 1, answer: "met" },
  { id: 2, answer: "not be" },
  { id: 3, answer: "give" },
  { id: 4, answer: "not be" },
  { id: 5, answer: "receive" },
  { id: 6, answer: "transfer" },
  { id: 7, answer: "accept" },
  { id: 8, answer: "be" },
];

const rolePlayScenarios = [
  "You've referred several people for a secretarial position. You feel that one candidate is clearly the best but the manager prefers another person.",
  "You need two staff to work at the weekend.",
  "You'd like to take four of your six weeks' holiday together this year. (The rule is a maximum of two weeks at a time.)",
  "Your post room now needs to work a two-shift day: 5 a.m.-1 p.m. and 1 p.m.-9 p.m. The staff are not happy about this.",
  "An employee has decided to leave the company. You need to convince him/her to stay.",
];

const SpeakingUnit6 = () => {
  const [showConditionals, setShowConditionals] = useState(false);
  const [emailResults, setEmailResults] = useState<Record<number, "correct" | "incorrect" | null>>({});
  const emailRefs = useRef<Record<number, HTMLInputElement | null>>({});

  const checkEmail = () => {
    const r: Record<number, "correct" | "incorrect"> = {};
    emailGapFill.forEach((g) => {
      const v = emailRefs.current[g.id]?.value?.trim().toLowerCase() || "";
      r[g.id] = v === g.answer.toLowerCase() ? "correct" : "incorrect";
    });
    setEmailResults(r);
  };

  return (
    <div className="space-y-8">
      {/* Useful Language */}
      <Card className="service-card">
        <CardContent className="p-6">
          <h3 className="text-2xl font-semibold mb-4 font-merriweather text-foreground">The Language of Negotiating</h3>
          <p className="text-muted-foreground mb-4">A negotiation is a very delicate procedure where the language you use can influence the outcome. Below are some typical phrases for persuading and bargaining.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-muted/30 rounded-lg">
              <h4 className="font-semibold text-foreground mb-2">Persuading</h4>
              <ul className="space-y-2">
                {persuadingPhrases.map((p, i) => <li key={i} className="text-muted-foreground text-sm italic">• {p}</li>)}
              </ul>
            </div>
            <div className="p-4 bg-muted/30 rounded-lg">
              <h4 className="font-semibold text-foreground mb-2">Bargaining</h4>
              <ul className="space-y-2">
                {bargainingPhrases.map((p, i) => <li key={i} className="text-muted-foreground text-sm italic">• {p}</li>)}
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Conditional Sentences */}
      <Card className="service-card">
        <CardContent className="p-6">
          <h3 className="text-2xl font-semibold mb-4 font-merriweather text-foreground">Conditions and Offers</h3>
          <p className="text-muted-foreground mb-4">Use the key words in brackets to make complete sentences about conditions and offers. The first sentence has been done for you.</p>
          <div className="space-y-3">
            {conditionalSentences.map((s) => (
              <div key={s.id} className="p-3 border border-border rounded-lg">
                <p className="text-muted-foreground text-sm">{s.id}. {s.keywords}</p>
                {s.example && <p className="text-primary text-sm mt-1 italic">{s.example}</p>}
              </div>
            ))}
          </div>
          <Button onClick={() => setShowConditionals(!showConditionals)} variant="outline" className="mt-4">
            {showConditionals ? "Hide" : "Show"} Example Answers
          </Button>
          {showConditionals && (
            <div className="mt-4 p-4 bg-muted/30 rounded-lg space-y-2 text-sm text-muted-foreground">
              <p>2. <em>Provided that there is an increase in sales, we can offer a further 2% pay rise.</em></p>
              <p>3. <em>If there are no further increases in pay, there will be no job losses in Amsterdam.</em></p>
              <p>4. <em>On condition that there is another review in nine months, there will be no industrial action.</em></p>
              <p>5. <em>If productivity increased, we could pay a bonus at the end of the year.</em></p>
              <p>6. <em>Unless we open on Sundays from 10-4 p.m., we will lose business to competitors.</em></p>
              <p>7. <em>Provided customer service does not suffer, we can introduce flexible working hours.</em></p>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Email Gap Fill */}
      <Card className="service-card">
        <CardContent className="p-6">
          <h3 className="text-2xl font-semibold mb-4 font-merriweather text-foreground">Jason's Email to Management</h3>
          <p className="text-muted-foreground mb-4">After the meeting, Jason writes an email to the management committee. Complete the gaps with the correct form of the verbs: <strong>not be • be • give • meet • not be • receive • transfer • accept</strong></p>

          <div className="p-4 border border-border rounded-lg bg-muted/10 space-y-3 text-sm text-muted-foreground">
            <p className="font-semibold text-foreground">Dear Management Committee</p>
            <p>
              As you know, Klaus Bohn and I{" "}
              <Input ref={(el) => { emailRefs.current[1] = el; }} className={`inline-block w-28 mx-1 ${emailResults[1] === "correct" ? "border-green-500 bg-green-50" : emailResults[1] === "incorrect" ? "border-red-500 bg-red-50" : ""}`} placeholder="1" />
              {" "}with the union representatives last night to discuss their rejection of the pay offer of 3%, effective 1 March and the threat of industrial action. Apart from the fact that white-collar workers{" "}
              <Input ref={(el) => { emailRefs.current[2] = el; }} className={`inline-block w-28 mx-1 ${emailResults[2] === "correct" ? "border-green-500 bg-green-50" : emailResults[2] === "incorrect" ? "border-red-500 bg-red-50" : ""}`} placeholder="2" />
              {" "}5%, there{" "}
              <Input ref={(el) => { emailRefs.current[3] = el; }} className={`inline-block w-28 mx-1 ${emailResults[3] === "correct" ? "border-green-500 bg-green-50" : emailResults[3] === "incorrect" ? "border-red-500 bg-red-50" : ""}`} placeholder="3" />
              , as I suspected, strong rumours going round that we're closing the plant and{" "}
              <Input ref={(el) => { emailRefs.current[4] = el; }} className={`inline-block w-28 mx-1 ${emailResults[4] === "correct" ? "border-green-500 bg-green-50" : emailResults[4] === "incorrect" ? "border-red-500 bg-red-50" : ""}`} placeholder="4" />
              {" "}work to Poland.
            </p>
            <p>
              We{" "}
              <Input ref={(el) => { emailRefs.current[5] = el; }} className={`inline-block w-28 mx-1 ${emailResults[5] === "correct" ? "border-green-500 bg-green-50" : emailResults[5] === "incorrect" ? "border-red-500 bg-red-50" : ""}`} placeholder="5" />
              {" "}the union representatives our assurances that this{" "}
              <Input ref={(el) => { emailRefs.current[6] = el; }} className={`inline-block w-28 mx-1 ${emailResults[6] === "correct" ? "border-green-500 bg-green-50" : emailResults[6] === "incorrect" ? "border-red-500 bg-red-50" : ""}`} placeholder="6" />
              {" "}the case and agreed the 3% increase from 1 March, followed by a further 1½% in nine months, as long as there{" "}
              <Input ref={(el) => { emailRefs.current[7] = el; }} className={`inline-block w-28 mx-1 ${emailResults[7] === "correct" ? "border-green-500 bg-green-50" : emailResults[7] === "incorrect" ? "border-red-500 bg-red-50" : ""}`} placeholder="7" />
              {" "}a substantial fall in sales and provided that there is no industrial action. They{" "}
              <Input ref={(el) => { emailRefs.current[8] = el; }} className={`inline-block w-28 mx-1 ${emailResults[8] === "correct" ? "border-green-500 bg-green-50" : emailResults[8] === "incorrect" ? "border-red-500 bg-red-50" : ""}`} placeholder="8" />
              {" "}the offer on behalf of their members.
            </p>
            <p>We feel this is a successful conclusion to the negotiations.</p>
            <p>Best wishes<br />Jason Hughes</p>
          </div>

          <Button onClick={checkEmail} className="mt-4 bg-primary hover:bg-primary/90">Check Answers</Button>
          {Object.values(emailResults).some((r) => r === "incorrect") && (
            <div className="mt-3 p-3 bg-muted/30 rounded-lg text-sm text-muted-foreground">
              <strong>Answers:</strong> 1. met, 2. not be, 3. give, 4. not be, 5. receive, 6. transfer, 7. accept, 8. be
            </div>
          )}
        </CardContent>
      </Card>

      {/* Role-play */}
      <Card className="service-card">
        <CardContent className="p-6">
          <h3 className="text-2xl font-semibold mb-4 font-merriweather text-foreground">Negotiation Role-play</h3>
          <p className="text-muted-foreground mb-4">Work with a partner. Choose a few situations below — or think of your own — and try to persuade your partner to accept your position. Be prepared to bargain.</p>
          <div className="space-y-3">
            {rolePlayScenarios.map((scenario, i) => (
              <div key={i} className="p-4 border border-border rounded-lg">
                <span className="font-bold text-primary mr-2">{i + 1}.</span>
                <span className="text-muted-foreground text-sm">{scenario}</span>
              </div>
            ))}
          </div>

          <div className="mt-6 p-4 bg-muted/30 rounded-lg">
            <p className="text-muted-foreground italic">💬 <strong>Discussion:</strong> What types of negotiations have you been involved in? Describe your experiences to your colleagues.</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SpeakingUnit6;
