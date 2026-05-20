import { Card, CardContent } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";

const TalkingPointUnit5 = () => (
  <div className="space-y-6">
    <Card className="service-card">
      <CardContent className="p-6 space-y-3">
        <h3 className="text-2xl font-semibold font-merriweather text-foreground">Talking Point</h3>
        <p className="text-muted-foreground">Discuss in small groups. Choose a brand you are all familiar with and answer the following questions.</p>
        <ul className="list-disc pl-6 space-y-2 text-foreground">
          <li>What image does it have?</li>
          <li>How do you feel about the brand?</li>
          <li>How is it marketed?</li>
        </ul>
      </CardContent>
    </Card>

    <Card className="service-card">
      <CardContent className="p-6 space-y-2">
        <h4 className="font-semibold text-brand-royal">Notes</h4>
        <Textarea rows={6} placeholder="Brand chosen: …  Image: …  How we feel about it: …  Marketing channels and messages: …" />
      </CardContent>
    </Card>
  </div>
);

export default TalkingPointUnit5;
