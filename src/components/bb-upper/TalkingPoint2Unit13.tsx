import { Card, CardContent } from "@/components/ui/card";

const TalkingPoint2Unit13 = () => (
  <div className="space-y-6">
    <Card className="service-card">
      <CardContent className="p-6 space-y-3">
        <h3 className="text-2xl font-semibold font-merriweather text-foreground">Talking Point: Planning a Conference</h3>
        <p className="text-muted-foreground">
          Work in pairs or groups of about three. Your company has decided to hold a two-day conference for people from your company and you have been asked to help plan it.
        </p>
        <p className="text-foreground font-semibold">Discuss the situation together, and decide:</p>
        <ul className="list-disc pl-6 space-y-2 text-foreground">
          <li>what kinds of activities should be organised for the main part of the conference</li>
          <li>what entertainment could also be provided</li>
          <li>where the conference should be held.</li>
        </ul>
      </CardContent>
    </Card>
  </div>
);

export default TalkingPoint2Unit13;
