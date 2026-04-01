import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const fringeBenefits = [
  "Company car", "Mileage allowance", "Staff lunches / canteen", "Pension scheme",
  "Life insurance", "Childcare / crèche", "Flexible working hours", "Profit-sharing bonus",
  "Sports club membership", "Employee assistance programme", "Relocation expenses",
  "Performance-related pay", "Shares in success"
];

const articleParagraphs = [
  { id: "A", text: "To promote a healthier workplace and to reduce pollution in the environment, the U.K. government introduced a tax-free benefit several years ago to encourage companies to buy bikes and equipment for their staff and for staff to reduce commuting to work by car. It can be dealt with in one of two ways." },
  { id: "B", text: "The Cycle to Work Scheme allows employers to reclaim the VAT (value added tax) and capital allowances and loan bikes and equipment to their employees for journeys to work. Alternatively, the employee can pay back the cost of the bike and equipment by monthly salary deductions." },
  { id: "C", text: "These include the fact that employees should be using the cycle for journeys between home and the workplace (or to the station) or from one workplace to another." },
];

const correctOrder = ["A", "B", "C"];

const expressionMatching = [
  { left: "1. to reduce", right: "d. pollution", id: "d" },
  { left: "2. to introduce", right: "b. a tax-free benefit", id: "b" },
  { left: "3. to allow", right: "c. employers to reclaim the VAT", id: "c" },
  { left: "4. to promote", right: "a. a healthier workplace", id: "a" },
];

const options = ["a", "b", "c", "d"];

const StarterUnit5 = () => {
  const [showBenefits, setShowBenefits] = useState(false);
  const [articleOrder, setArticleOrder] = useState<string[]>(["C", "A", "B"]);
  const [orderChecked, setOrderChecked] = useState(false);
  const [matchAnswers, setMatchAnswers] = useState<Record<number, string>>({});
  const [matchChecked, setMatchChecked] = useState(false);

  const swapParagraphs = (i: number, j: number) => {
    if (orderChecked) return;
    const newOrder = [...articleOrder];
    [newOrder[i], newOrder[j]] = [newOrder[j], newOrder[i]];
    setArticleOrder(newOrder);
  };

  const isOrderCorrect = articleOrder.every((id, i) => id === correctOrder[i]);

  return (
    <div className="space-y-8">
      {/* Fringe Benefits Mind Map */}
      <Card className="service-card">
        <CardContent className="p-6">
          <h3 className="text-2xl font-semibold mb-4 font-merriweather text-foreground">Fringe Benefits</h3>
          <p className="text-muted-foreground mb-4">
            Benefits (i.e. rewards companies give their staff in addition to money) are often called 'fringe benefits' or 'perks'. How many different fringe benefits can you think of?
          </p>
          <Button onClick={() => setShowBenefits(!showBenefits)} variant="outline" className="mb-4">
            {showBenefits ? "Hide" : "Show"} Examples
          </Button>
          {showBenefits && (
            <div className="flex flex-wrap gap-2">
              {fringeBenefits.map((b) => (
                <span key={b} className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">{b}</span>
              ))}
            </div>
          )}
          <div className="mt-6 p-4 bg-muted/30 rounded-lg">
            <p className="text-muted-foreground italic">
              💬 Discussion: Do you think staff are more motivated by receiving a higher salary with fewer benefits or a lower basic salary with lots of benefits?
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Article Ordering */}
      <Card className="service-card">
        <CardContent className="p-6">
          <h3 className="text-2xl font-semibold mb-4 font-merriweather text-foreground">On Your Bike</h3>
          <p className="text-muted-foreground mb-4">Put the paragraphs from this article about a tax-free benefit into the correct order. Click arrows to swap.</p>
          <div className="space-y-3">
            {articleOrder.map((id, i) => {
              const para = articleParagraphs.find((p) => p.id === id)!;
              return (
                <div key={id} className={`p-4 border rounded-lg ${orderChecked ? (id === correctOrder[i] ? "border-green-500 bg-green-50" : "border-red-500 bg-red-50") : "border-border"}`}>
                  <div className="flex justify-between items-start gap-2">
                    <p className="text-muted-foreground text-sm">{para.text}</p>
                    {!orderChecked && (
                      <div className="flex flex-col gap-1">
                        {i > 0 && <Button size="sm" variant="ghost" onClick={() => swapParagraphs(i, i - 1)}>↑</Button>}
                        {i < articleOrder.length - 1 && <Button size="sm" variant="ghost" onClick={() => swapParagraphs(i, i + 1)}>↓</Button>}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
          <Button onClick={() => setOrderChecked(true)} className="mt-4 bg-primary hover:bg-primary/90">
            Check Order
          </Button>
          {orderChecked && (
            <p className={`mt-2 text-sm ${isOrderCorrect ? "text-green-600" : "text-red-600"}`}>
              {isOrderCorrect ? "Correct!" : "Not quite. The correct order is: A, B, C."}
            </p>
          )}
        </CardContent>
      </Card>

      {/* Expression Matching */}
      <Card className="service-card">
        <CardContent className="p-6">
          <h3 className="text-2xl font-semibold mb-4 font-merriweather text-foreground">Common Expressions</h3>
          <p className="text-muted-foreground mb-4">Complete the common expressions from the article by matching the two halves.</p>
          <div className="space-y-3">
            {expressionMatching.map((item, i) => (
              <div key={i} className="flex items-center gap-4 flex-wrap">
                <span className="font-medium text-foreground w-40">{item.left}</span>
                <select
                  className={`border rounded-md px-3 py-2 ${matchChecked ? (matchAnswers[i] === item.id ? "border-green-500 bg-green-50" : "border-red-500 bg-red-50") : "border-border"}`}
                  value={matchAnswers[i] || ""}
                  onChange={(e) => setMatchAnswers({ ...matchAnswers, [i]: e.target.value })}
                  disabled={matchChecked}
                >
                  <option value="">Select...</option>
                  {options.map((o) => (
                    <option key={o} value={o}>{expressionMatching.find((e) => e.id === o)?.right}</option>
                  ))}
                </select>
                {matchChecked && matchAnswers[i] !== item.id && (
                  <span className="text-red-600 text-sm">→ {item.right}</span>
                )}
              </div>
            ))}
          </div>
          <Button onClick={() => setMatchChecked(true)} className="mt-4 bg-primary hover:bg-primary/90">Check Answers</Button>
        </CardContent>
      </Card>

      {/* Discussion */}
      <Card className="service-card">
        <CardContent className="p-6">
          <h3 className="text-2xl font-semibold mb-4 font-merriweather text-foreground">Discussion</h3>
          <p className="text-muted-foreground italic">💬 What tax-free benefits or perks can you give staff in your country? Discuss with your partner.</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default StarterUnit5;
