import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle2, XCircle } from "lucide-react";
import workersLineup from "@/assets/workers-lineup.jpg";

const AUDIO_URL = "/audio/bb-upper/unit2-listening.mp3";

const reasons = [
  { letter: "a", text: "building customer relationships" },
  { letter: "b", text: "finding solutions for customers" },
  { letter: "c", text: "being my own boss" },
  { letter: "d", text: "learning from my job" },
  { letter: "e", text: "balancing working life with family life" },
  { letter: "f", text: "seeing the success of my company" },
];

const speakers = [
  { id: 1, name: "Jane Milton", answer: "b" },
  { id: 2, name: "Lewis Bronze", answer: "f" },
  { id: 3, name: "Amanda Hamilton", answer: "c" },
  { id: 4, name: "Maxine Macpherson", answer: "a" },
];

const ListeningUnit2 = () => {
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [results, setResults] = useState<Record<number, boolean> | null>(null);

  const checkAnswers = () => {
    const r: Record<number, boolean> = {};
    speakers.forEach((s) => {
      r[s.id] = answers[s.id] === s.answer;
    });
    setResults(r);
  };

  const resetAnswers = () => {
    setAnswers({});
    setResults(null);
  };

  return (
    <div className="space-y-8">
      {/* Exercise 1 — Reasons list */}
      <Card className="service-card">
        <CardContent className="p-6">
          <h3 className="text-2xl font-semibold mb-4 font-merriweather text-foreground">
            1. Why people like their jobs
          </h3>
          <p className="text-muted-foreground mb-4">
            Look at the following reasons why people might like their jobs. <strong>Underline the key words</strong> in each one.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {reasons.map((r) => (
              <div
                key={r.letter}
                className="flex items-start gap-2 p-3 rounded-lg border border-border bg-card"
              >
                <span className="font-semibold text-primary min-w-[1.25rem]">{r.letter}</span>
                <span className="text-foreground">{r.text}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Exercise 2 — Listening + matching */}
      <Card className="service-card">
        <CardContent className="p-6">
          <h3 className="text-2xl font-semibold mb-4 font-merriweather text-foreground">
            2. Listen and match
          </h3>
          <p className="text-muted-foreground mb-4">
            Listen to four people talking about why they like their jobs. What reason do they give? Choose from the reasons <strong>a–f</strong> in Exercise 1.
          </p>

          <audio controls src={AUDIO_URL} className="w-full mb-6" />

          <div className="bg-accent/30 border border-border rounded-lg p-4 mb-6">
            <p className="text-sm font-semibold text-foreground mb-1">💡 Task tip</p>
            <p className="text-sm text-muted-foreground">
              When you listen, you won't hear exactly the same words as in Exercise 1 – you have to listen for the same idea to be expressed.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {speakers.map((s) => (
              <div
                key={s.id}
                className="flex items-center gap-3 p-4 rounded-lg border border-border bg-card"
              >
                <span className="font-semibold text-primary">{s.id}</span>
                <span className="text-foreground flex-1">{s.name}</span>
                <Select
                  value={answers[s.id] || ""}
                  onValueChange={(v) => {
                    setAnswers((prev) => ({ ...prev, [s.id]: v }));
                    setResults(null);
                  }}
                >
                  <SelectTrigger className="w-20">
                    <SelectValue placeholder="..." />
                  </SelectTrigger>
                  <SelectContent>
                    {reasons.map((r) => (
                      <SelectItem key={r.letter} value={r.letter}>
                        {r.letter}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {results && (
                  results[s.id]
                    ? <CheckCircle2 className="h-5 w-5 text-green-600 shrink-0" />
                    : <XCircle className="h-5 w-5 text-red-500 shrink-0" />
                )}
              </div>
            ))}
          </div>

          <div className="flex gap-3 mt-6">
            <Button onClick={checkAnswers} className="bg-brand-royal hover:bg-brand-navy">
              Check Answers
            </Button>
            <Button onClick={resetAnswers} variant="outline">
              Reset
            </Button>
          </div>
        </CardContent>
      </Card>


      {/* Talking Point */}
      <Card className="service-card">
        <CardContent className="p-6">
          <h3 className="text-2xl font-semibold mb-4 font-merriweather text-foreground">
            Talking Point
          </h3>
          <p className="text-muted-foreground mb-4">Discuss in small groups:</p>
          <ul className="list-disc list-inside space-y-2 text-foreground">
            <li>What do you most enjoy about your job/studies?</li>
            <li>Is there anything you dislike?</li>
          </ul>
        </CardContent>
      </Card>

      {/* Transcript */}
      <Card className="service-card">
        <CardContent className="p-6">
          <Accordion type="single" collapsible>
            <AccordionItem value="transcript" className="border-none">
              <AccordionTrigger className="text-2xl font-semibold font-merriweather text-foreground hover:no-underline">
                📄 Transcript
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-6 text-foreground leading-relaxed">
                  <div>
                    <p className="font-semibold italic mb-1">1 Jane Milton</p>
                    <p>I love being able to work out what a client needs and … and do it. And I love, you know, having an idea for a new food product for them and then seeing it, you know, in a supermarket, or, um, writing something and then having loads of emails from people because they've used that recipe so much and they can't believe how easy it was, or a whole lot of different things.</p>
                  </div>
                  <div>
                    <p className="font-semibold italic mb-1">2 Lewis Bronze</p>
                    <p>I enjoy, now, the company is five, six, seven years old, I enjoy seeing the vision being executed. I enjoy seeing how the company has grown, we've attracted some excellent people to work here. I think we have a very strong culture in the company which supports the excellence of what we're trying to do across a whole range of disciplines.</p>
                  </div>
                  <div>
                    <p className="font-semibold italic mb-1">3 Amanda Hamilton</p>
                    <p>I absolutely thrive on the freedom, just being able to make, you know, my own choices. It is, as you said, a lifestyle choice, although you probably end up working slightly more hours than you did working for a corporation. I used to work for the BBC prior to that, so it was a very structured environment, but you sort of somehow don't mind those longer hours because it's fulfilling. It's your own project, your own baby and there's also a sense of pride, I think, when you can make your own decisions.</p>
                  </div>
                  <div>
                    <p className="font-semibold italic mb-1">4 Maxine Macpherson</p>
                    <p>As the UK representative, I'm in contact with the agents who organise the conference incentive events overseas, so that's what I like most about the job, meeting people and selling the services that we provide abroad and trying to explain what we do.</p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>
    </div>
  );
};

export default ListeningUnit2;
