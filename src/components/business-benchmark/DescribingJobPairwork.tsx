import { Card, CardContent } from "@/components/ui/card";
import { Users } from "lucide-react";

const phrases = [
  { frame: "I'm the … (job title) at … (company).", example: "I'm the marketing manager at a software company in Prague." },
  { frame: "I'm responsible for …", example: "I'm responsible for planning our social media campaigns." },
  { frame: "My job / responsibility is to …", example: "My job is to make sure our customers get their orders on time." },
  { frame: "I'm in charge of …", example: "I'm in charge of a team of five sales assistants." },
];

const DescribingJobPairwork = () => (
  <Card className="service-card max-w-4xl mx-auto">
    <CardContent className="p-6">
      <h3 className="text-2xl font-semibold mb-4 font-merriweather text-foreground flex items-center gap-2">
        <Users className="h-6 w-6 text-primary" /> Pairwork: Describing your job
      </h3>
      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-3 text-lg text-foreground">
          <p>If you are working, tell your partner about your job.</p>
          <p>If you are still studying, think about someone you know and tell your partner about <strong>their</strong> job.</p>
          <p className="text-muted-foreground">Use the phrases in the Useful language box. Then swap roles and ask your partner one follow-up question.</p>
        </div>
        <div className="rounded-xl border-2 border-primary/30 p-4">
          <h4 className="text-xl font-bold text-primary mb-1">Useful language</h4>
          <p className="font-semibold text-foreground mb-3">Describing your job</p>
          <ul className="space-y-3">
            {phrases.map((p) => (
              <li key={p.frame}>
                <p className="text-foreground">{p.frame}</p>
                <p className="text-sm italic text-muted-foreground">e.g. {p.example}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </CardContent>
  </Card>
);

export default DescribingJobPairwork;
