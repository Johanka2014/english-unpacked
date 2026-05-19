import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle2, XCircle } from "lucide-react";

const AUDIO_URL = "/audio/bb-upper/unit4-listening-2.mp3";

// Selected phrases that actually appear in the call (subset of the quiz options the SB references)
const phrases = [
  { id: "p1", text: "Burfords Engineering. (Answering the phone with the company name.)", appears: true },
  { id: "p2", text: "Speaking.", appears: true },
  { id: "p3", text: "My name's Monica Pereira.", appears: true },
  { id: "p4", text: "Could I speak to Jack Burford, please?", appears: true },
  { id: "p5", text: "Do you mind if I ask you some questions about the job?", appears: true },
  { id: "p6", text: "Can you just hang on a sec…", appears: true },
  { id: "p7", text: "I'm calling in connection with the sales conference.", appears: false },
  { id: "p8", text: "Who's calling, please?", appears: false },
];

const notes = [
  { id: 1, label: "Working hours", answer: "mornings only" },
  { id: 2, label: "Duties: Office admin, typing and …", answer: "bookkeeping" },
  { id: 3, label: "Starting date: … September", answer: "beginning of" },
  { id: 4, label: "How to apply", answer: "by email" },
];

const norm = (s: string) => s.trim().toLowerCase().replace(/\s+/g, " ");

const Listening2Unit4 = () => {
  const [ticked, setTicked] = useState<Set<string>>(new Set());
  const [phraseResults, setPhraseResults] = useState<Record<string, boolean> | null>(null);
  const [noteAnswers, setNoteAnswers] = useState<Record<number, string>>({});
  const [noteResults, setNoteResults] = useState<Record<number, boolean> | null>(null);

  const togglePhrase = (id: string) => {
    setTicked((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id); else next.add(id);
      return next;
    });
    setPhraseResults(null);
  };

  const checkPhrases = () => {
    const r: Record<string, boolean> = {};
    phrases.forEach((p) => { r[p.id] = ticked.has(p.id) === p.appears; });
    setPhraseResults(r);
  };

  const checkNotes = () => {
    const r: Record<number, boolean> = {};
    notes.forEach((n) => { r[n.id] = norm(noteAnswers[n.id] || "") === norm(n.answer); });
    setNoteResults(r);
  };

  return (
    <div className="space-y-8">
      <Card className="service-card">
        <CardContent className="p-6">
          <h3 className="text-2xl font-semibold mb-4 font-merriweather text-foreground">1. Listen and tick the phrases used</h3>
          <p className="text-muted-foreground mb-4">
            You are going to hear a woman phoning a company to enquire about a job. Listen and tick (✓) the phrases the speakers use.
          </p>
          <audio controls src={AUDIO_URL} className="w-full mb-6" />

          <div className="space-y-2">
            {phrases.map((p) => (
              <label key={p.id} className="flex items-center gap-3 p-3 rounded-lg border border-border hover:bg-accent/50 cursor-pointer">
                <Checkbox checked={ticked.has(p.id)} onCheckedChange={() => togglePhrase(p.id)} />
                <span className="text-foreground flex-1">{p.text}</span>
                {phraseResults && (phraseResults[p.id]
                  ? <CheckCircle2 className="h-5 w-5 text-green-600" />
                  : <XCircle className="h-5 w-5 text-red-500" />)}
              </label>
            ))}
          </div>
          <Button onClick={checkPhrases} className="mt-6 bg-brand-royal hover:bg-brand-navy">Check Answers</Button>
        </CardContent>
      </Card>

      <Card className="service-card">
        <CardContent className="p-6">
          <h3 className="text-2xl font-semibold mb-4 font-merriweather text-foreground">2. Listen again and complete the notes</h3>
          <p className="text-muted-foreground mb-4">
            <strong>Office administrator — Burfords Engineering.</strong> Complete the woman's notes with one or two words or a number.
          </p>
          <div className="space-y-3">
            {notes.map((n) => (
              <div key={n.id} className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                <label className="sm:w-72 text-foreground">{n.id}. {n.label}</label>
                <div className="flex items-center gap-2 flex-1">
                  <Input
                    value={noteAnswers[n.id] || ""}
                    onChange={(e) => { setNoteAnswers((p) => ({ ...p, [n.id]: e.target.value })); setNoteResults(null); }}
                  />
                  {noteResults && (noteResults[n.id]
                    ? <CheckCircle2 className="h-5 w-5 text-green-600" />
                    : <span className="flex items-center gap-1"><XCircle className="h-5 w-5 text-red-500" /><span className="text-sm text-red-600">{n.answer}</span></span>)}
                </div>
              </div>
            ))}
          </div>
          <Button onClick={checkNotes} className="mt-6 bg-brand-royal hover:bg-brand-navy">Check Answers</Button>
        </CardContent>
      </Card>

      <Card className="service-card">
        <CardContent className="p-6">
          <Accordion type="single" collapsible>
            <AccordionItem value="transcript" className="border-none">
              <AccordionTrigger className="text-2xl font-semibold font-merriweather text-foreground hover:no-underline">
                📄 Transcript
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-3 text-foreground leading-relaxed">
                  <p><strong>Jack:</strong> Burfords Engineering.</p>
                  <p><strong>Monica:</strong> Hello. Could I speak to Jack Burford, please?</p>
                  <p><strong>Jack:</strong> Speaking.</p>
                  <p><strong>Monica:</strong> Good morning. My name's Monica Pereira. A friend of mine suggested I phone you because she told me you might have a vacancy for an office administrator.</p>
                  <p><strong>Jack:</strong> Yes, that's right. We haven't advertised it yet, but we'll be needing somebody.</p>
                  <p><strong>Monica:</strong> I see. Do you mind if I ask you some questions about the job?</p>
                  <p><strong>Jack:</strong> No, not at all. Can you just hang on a sec while I get the details of the job up on the screen. There they are. Now, what would you like to know?</p>
                  <p><strong>Monica:</strong> Can you tell me if the job is full time or part time?</p>
                  <p><strong>Jack:</strong> Well, we haven't finalised details yet, but I imagine it'll be mornings only. Would that suit you?</p>
                  <p><strong>Monica:</strong> Yes, very much. I'm interested in finding a job while my children are at school. And what does the job consist of?</p>
                  <p><strong>Jack:</strong> Basic office administration, typing letters and reports, bookkeeping, that sort of thing. Do you have any experience of office work?</p>
                  <p><strong>Monica:</strong> Yes. I worked in an office for ten years. When would the job start?</p>
                  <p><strong>Jack:</strong> Let's see. At the beginning of September, I imagine.</p>
                  <p><strong>Monica:</strong> OK, and how should I make my application?</p>
                  <p><strong>Jack:</strong> Could you make it by email, please? It's so much easier to process that way.</p>
                  <p><strong>Monica:</strong> Yes, of course. Could you give me your email address then, please?</p>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>
    </div>
  );
};

export default Listening2Unit4;
