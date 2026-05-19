import { Card, CardContent } from "@/components/ui/card";

const amenities = [
  "guest rooms", "general decor", "lobby and other public areas", "meeting rooms",
  "business centre", "restaurants and bars", "room service", "gym/health club",
  "hotel staff", "high-speed Internet access", "wi-fi Internet access",
];

const GettingStartedUnit13 = () => (
  <div className="space-y-6">
    <Card className="service-card">
      <CardContent className="p-6 space-y-3">
        <h3 className="text-2xl font-semibold font-merriweather text-foreground">Getting Started</h3>
        <p className="text-muted-foreground">
          Discuss the questions below in small groups. When you have finished, find a partner from another group and report what you decided.
        </p>
        <ul className="list-disc pl-6 space-y-2 text-foreground">
          <li>How is the business traveller different from the ordinary tourist?</li>
          <li>If you were choosing a hotel for a business trip, which of these amenities would you consider more important and which less important?</li>
        </ul>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mt-3">
          {amenities.map((a) => (
            <div key={a} className="px-3 py-2 rounded-md border border-border bg-muted/30 text-sm text-foreground">{a}</div>
          ))}
        </div>
        <ul className="list-disc pl-6 space-y-2 text-foreground mt-3">
          <li>Do you have a favourite hotel?</li>
          <li>How important do you think the hotel's cost is when business people make their travel plans? (very / quite / not important)</li>
        </ul>
      </CardContent>
    </Card>
  </div>
);

export default GettingStartedUnit13;
