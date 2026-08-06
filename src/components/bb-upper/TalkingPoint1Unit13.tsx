import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Timer, Play, RotateCcw } from "lucide-react";

const topics = [
  { title: "What is important when choosing a business hotel to stay at?", hint: "Think about location, amenities, etc." },
  { title: "What is important when preparing a foreign business trip?", hint: "Think about local customs, local working hours, etc." },
  { title: "What is important when choosing an airline to fly with?", hint: "Think about prices, schedules, etc." },
];

const PrepNotes = ({ storageKey, label }: { storageKey: string; label: string }) => {
  const [text, setText] = useState(() => localStorage.getItem(storageKey) || "");
  useEffect(() => {
    const t = setTimeout(() => localStorage.setItem(storageKey, text), 400);
    return () => clearTimeout(t);
  }, [text, storageKey]);
  return (
    <div className="space-y-2">
      <p className="text-sm font-semibold text-brand-royal">{label}</p>
      <Textarea
        rows={5}
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Note your main points here… (saved automatically)"
        className="min-h-[120px] bg-background"
      />
    </div>
  );
};

const MinuteTimer = () => {
  const [left, setLeft] = useState(60);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    if (!running) return;
    if (left === 0) { setRunning(false); return; }
    const t = setTimeout(() => setLeft((l) => l - 1), 1000);
    return () => clearTimeout(t);
  }, [running, left]);

  return (
    <div className="flex items-center gap-3">
      <Timer className="h-5 w-5 text-brand-royal" />
      <span className="text-2xl font-bold tabular-nums text-foreground">
        0:{String(left).padStart(2, "0")}
      </span>
      <Button size="sm" onClick={() => setRunning((r) => !r)} className="bg-brand-royal hover:bg-brand-navy">
        <Play className="h-4 w-4 mr-1" />{running ? "Pause" : "Start"}
      </Button>
      <Button size="sm" variant="outline" onClick={() => { setRunning(false); setLeft(60); }}>
        <RotateCcw className="h-4 w-4 mr-1" />Reset
      </Button>
    </div>
  );
};

const TalkingPoint1Unit13 = () => (
  <div className="space-y-6">
    <Card className="service-card">
      <CardContent className="p-6 space-y-3">
        <h3 className="text-2xl font-semibold font-merriweather text-foreground">Talking Point: Presenting Your Opinions</h3>
        <p className="text-muted-foreground">
          Work in groups of about three. Your company is considering changing its policy about business travel, and you have been invited to a meeting to discuss this. You have been asked to make a short presentation.
        </p>
      </CardContent>
    </Card>

    <Card className="service-card">
      <CardContent className="p-6 space-y-4">
        <div className="flex gap-3">
          <span className="w-7 h-7 shrink-0 rounded-full bg-brand-royal text-white flex items-center justify-center font-bold text-sm">1</span>
          <p className="text-foreground leading-relaxed">
            Each of you should choose one of the topics below. Spend about one minute preparing what you are going to say and make some notes.
          </p>
        </div>
        <div className="flex gap-3">
          <span className="w-7 h-7 shrink-0 rounded-full bg-brand-royal text-white flex items-center justify-center font-bold text-sm">2</span>
          <p className="text-foreground leading-relaxed">
            Make your presentation to your group. You should speak for about one minute. When you have finished, your colleagues should say if there is anything they disagree with, and why.
          </p>
        </div>
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

    <Card className="service-card">
      <CardContent className="p-6 space-y-5">
        <h4 className="font-semibold text-brand-royal">Prepare your presentation</h4>
        <MinuteTimer />
        <div className="grid md:grid-cols-2 gap-5">
          <PrepNotes storageKey="bb13-tp1-notes" label="My three main points" />
          <PrepNotes storageKey="bb13-tp1-feedback" label="Feedback from my colleagues (what did they disagree with, and why?)" />
        </div>
      </CardContent>
    </Card>

    <Card className="service-card bg-muted/30">
      <CardContent className="p-6 text-sm text-foreground space-y-2">
        <p className="font-semibold text-brand-royal">Useful language</p>
        <p><em>In my opinion… / The most important thing is… / Another key point is… / To sum up…</em></p>
        <p><em>I'm afraid I don't agree, because… / I see your point, but… / Surely it's more important to…</em></p>
      </CardContent>
    </Card>
  </div>
);

export default TalkingPoint1Unit13;
