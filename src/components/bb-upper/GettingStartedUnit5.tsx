import { Card, CardContent } from "@/components/ui/card";

const activities = [
  "direct mail",
  "free gifts with every purchase",
  "free samples",
  "leaflets and brochures",
  "newspaper articles",
  "point-of-sales display",
  "sponsorship",
  "television and radio advertising",
  "website",
];

const GettingStartedUnit5 = () => (
  <div className="space-y-6">
    <Card className="service-card">
      <CardContent className="p-6 space-y-3">
        <h3 className="text-2xl font-semibold font-merriweather text-foreground">Getting Started</h3>
        <p className="text-muted-foreground">
          Work in pairs and discuss the questions below. When you have finished, find a partner from another group and report what you decided.
        </p>
        <ol className="list-decimal pl-6 space-y-2 text-foreground">
          <li>Look at the promotional activities below. Say briefly what the advantages and disadvantages are of each.</li>
          <li>Decide which promotional activities would be suitable for promoting a deodorant spray for men, and why.</li>
        </ol>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mt-3">
          {activities.map((a) => (
            <div key={a} className="px-3 py-2 rounded-md border border-border bg-muted/30 text-sm text-foreground">{a}</div>
          ))}
        </div>
      </CardContent>
    </Card>

    <Card className="service-card bg-muted/30">
      <CardContent className="p-6 text-sm space-y-2">
        <p className="font-semibold text-brand-royal">Useful language — Discussing advantages and disadvantages</p>
        <ul className="list-disc pl-6 space-y-1 text-foreground">
          <li>One advantage of (direct mail) is that …</li>
          <li>Another good thing about it is that …</li>
          <li>The main disadvantage of (a leaflet/leaflets) is that …</li>
          <li>They also have the drawback that …</li>
        </ul>
        <p className="italic text-muted-foreground mt-2">Example: <em>Direct mail is expensive, but you can target individual customers.</em></p>
      </CardContent>
    </Card>
  </div>
);

export default GettingStartedUnit5;
