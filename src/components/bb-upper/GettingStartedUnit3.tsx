import { Card, CardContent } from "@/components/ui/card";

const factors = [
  "working in teams",
  "challenging work",
  "friendly colleagues",
  "company's reputation",
  "good working atmosphere",
  "level of responsibility",
  "opportunities for promotion",
  "perks/benefits",
  "salary",
  "opportunities to travel",
];

const GettingStartedUnit3 = () => {
  return (
    <div className="space-y-8">
      <Card className="service-card">
        <CardContent className="p-6">
          <h3 className="text-2xl font-semibold mb-4 font-merriweather text-foreground">
            Getting Started
          </h3>
          <p className="text-foreground mb-4">
            Work in small groups and discuss the following.
          </p>
          <p className="font-semibold text-brand-royal mb-4 italic">
            What, for you, would make a company or organisation a great place to work?
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
            {factors.map((f) => (
              <div
                key={f}
                className="flex items-center gap-2 p-3 rounded-lg border border-border bg-card"
              >
                <span className="h-2 w-2 rounded-full bg-brand-royal" />
                <span className="text-foreground">{f}</span>
              </div>
            ))}
          </div>

          <div className="bg-orange-50 dark:bg-orange-950/30 border border-orange-200 dark:border-orange-800 rounded-lg p-5">
            <p className="font-semibold text-foreground mb-2">Useful language — Talking about importance</p>
            <ul className="space-y-1 text-foreground italic">
              <li>I really like ...</li>
              <li>For me, ...... is very important because .......</li>
              <li>One of the things I think is essential is ...... because .......</li>
              <li>I don't think ...... is so important because .......</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default GettingStartedUnit3;
