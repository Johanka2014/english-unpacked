import { Card, CardContent } from "@/components/ui/card";

const questions = [
  "Do you ever make telephone calls in English? When? What for?",
  "When is it better to make a phone call than send an email?",
  "What problems have you had when talking in English on the phone?",
  "In general, why is talking on the phone more difficult than talking face to face?",
  "How can you prepare for telephone calls, and what can you do to make sure there have been no misunderstandings?",
];

const GettingStartedUnit4 = () => (
  <div className="space-y-8">
    <Card className="service-card">
      <CardContent className="p-6">
        <h3 className="text-2xl font-semibold mb-4 font-merriweather text-foreground">Getting Started</h3>
        <p className="text-muted-foreground mb-4">Work with a partner and discuss these questions.</p>
        <ul className="list-disc list-inside space-y-2 text-foreground">
          {questions.map((q, i) => <li key={i}>{q}</li>)}
        </ul>
      </CardContent>
    </Card>
  </div>
);

export default GettingStartedUnit4;
