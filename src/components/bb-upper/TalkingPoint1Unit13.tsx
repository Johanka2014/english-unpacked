import { Card, CardContent } from "@/components/ui/card";

const topics = [
  { title: "What is important when choosing a business hotel to stay at?", hint: "Think about location, amenities, etc." },
  { title: "What is important when preparing a foreign business trip?", hint: "Think about local customs, local working hours, etc." },
  { title: "What is important when choosing an airline to fly with?", hint: "Think about prices, schedules, etc." },
];

const TalkingPoint1Unit13 = () => (
  <div className="space-y-6">
    <Card className="service-card">
      <CardContent className="p-6 space-y-3">
        <h3 className="text-2xl font-semibold font-merriweather text-foreground">Talking Point: Presenting Your Opinions</h3>
        <p className="text-muted-foreground">
          Work in groups of about three. Your company is considering changing its policy about business travel, and you have been invited to a meeting to discuss this. You have been asked to make a short presentation.
        </p>
        <p className="text-muted-foreground">
          Each of you should choose one of the topics below to talk about. Spend one minute preparing what you are going to say, then present to your group for about one minute. Colleagues should say if they disagree with anything — and why.
        </p>
      </CardContent>
    </Card>

    <div className="grid md:grid-cols-3 gap-4">
      {topics.map((t, i) => (
        <Card key={i} className="service-card">
          <CardContent className="p-5 space-y-2">
            <div className="w-8 h-8 rounded-full bg-brand-royal text-white flex items-center justify-center font-bold">{i + 1}</div>
            <h4 className="font-semibold text-brand-royal">{t.title}</h4>
            <p className="text-sm text-muted-foreground italic">{t.hint}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  </div>
);

export default TalkingPoint1Unit13;
