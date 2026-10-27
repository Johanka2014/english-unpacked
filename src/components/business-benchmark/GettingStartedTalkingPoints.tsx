import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { MessageCircle, Users } from "lucide-react";

const NOTES = [
  "Where did you study English before this class?",
  "When did you start studying English?",
];
const REASONS = [
  { id: "A", text: "I need to use English in my work." },
  { id: "B", text: "I will need to use English in my future job." },
  { id: "C", text: "I am still studying and I am not sure what my future job will be, but I think this type of English will be useful." },
];
const INTERVIEW = [
  "What is your job?", "Who do you work for?", "Where do you work?", "When do you use English in your job?",
  "Do you travel a lot in your job?", "What do you study?", "Where do you study normally?",
  "What are your plans for the future?", "What job would you like to do?",
];
const CHANNELS = ["phone", "memo", "email", "text messages", "face-to-face conversation"];
const DISCUSS = [
  "What do you use (email/memos/the phone, etc.) for?",
  "What are the advantages of communicating with people in this way?",
  "What are the disadvantages?",
  "Are there any situations when communicating with people in this way is not a good idea?",
];

const toggle = (list: string[], item: string, max: number) =>
  list.includes(item) ? list.filter((i) => i !== item) : list.length < max ? [...list, item] : list;

const chip = (active: boolean) =>
  `rounded-full border px-3 py-1.5 text-sm text-left transition-colors ${active ? "border-primary bg-primary text-primary-foreground" : "border-input bg-background hover:bg-muted"}`;

const GettingStartedTalkingPoints = () => {
  const [notes, setNotes] = useState<string[]>(["", ""]);
  const [reason, setReason] = useState("");
  const [picked, setPicked] = useState<string[]>([]);
  const [channels, setChannels] = useState<string[]>([]);

  return (
    <div className="mx-auto max-w-4xl space-y-8">
      <Card>
        <CardHeader><CardTitle className="font-serif text-xl">About you</CardTitle></CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-muted-foreground">Note down answers to the following three questions. Then compare your notes with a partner.</p>
          {NOTES.map((q, i) => (
            <div key={q} className="space-y-2">
              <p className="text-sm font-medium"><strong className="mr-2 text-primary">{i + 1}.</strong>{q}</p>
              <Textarea rows={2} value={notes[i]} onChange={(e) => setNotes((n) => n.map((v, j) => (j === i ? e.target.value : v)))} placeholder="Your notes…" />
            </div>
          ))}
          <div className="space-y-2">
            <p className="text-sm font-medium"><strong className="mr-2 text-primary">3.</strong>Why did you decide to study Business English? Choose A, B or C.</p>
            {REASONS.map((r) => (
              <button key={r.id} type="button" onClick={() => setReason(r.id)} className={`flex w-full gap-3 rounded-md border p-3 text-left text-sm ${reason === r.id ? "border-primary bg-primary/10" : "border-input bg-muted/30"}`}>
                <strong className="text-primary">{r.id}</strong><span>{r.text}</span>
              </button>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader><CardTitle className="flex items-center gap-2 font-serif text-xl"><Users className="h-5 w-5 text-primary" />Talking point 1</CardTitle></CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-muted-foreground"><strong>1</strong> Work in pairs. According to your partner's answers, choose <strong>four</strong> suitable questions to ask. Ask some further questions of your own, if you like.</p>
          <div className="flex flex-wrap gap-2">
            {INTERVIEW.map((q) => <button key={q} type="button" onClick={() => setPicked((p) => toggle(p, q, 4))} className={chip(picked.includes(q))}>{q}</button>)}
          </div>
          <p className="text-xs text-muted-foreground">{picked.length} / 4 chosen</p>
          <p className="text-sm text-muted-foreground"><strong>2</strong> Now introduce your partner to the rest of the class.</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader><CardTitle className="flex items-center gap-2 font-serif text-xl"><MessageCircle className="h-5 w-5 text-primary" />Talking point 2</CardTitle></CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-muted-foreground"><strong>1</strong> Which ways of communicating do you use most in your job, or which do you prefer? Choose <strong>two</strong>.</p>
          <div className="flex flex-wrap gap-2">
            {CHANNELS.map((c) => <button key={c} type="button" onClick={() => setChannels((p) => toggle(p, c, 2))} className={chip(channels.includes(c))}>{c}</button>)}
          </div>
          <p className="text-sm text-muted-foreground"><strong>2</strong> Compare your preferences with a partner. Ask and answer these questions.</p>
          <ul className="list-disc space-y-1 pl-5 text-sm">{DISCUSS.map((d) => <li key={d}>{d}</li>)}</ul>
          <aside className="rounded-md border-l-4 border-accent bg-muted/40 p-3 text-sm">
            <p className="font-semibold">Then and now</p>
            <p className="text-muted-foreground">Paper memos are rare today. Many teams use messaging apps (WhatsApp, Teams, Slack) and video calls instead. Do you use any of these? How do they compare with phone or email?</p>
          </aside>
        </CardContent>
      </Card>
    </div>
  );
};

export default GettingStartedTalkingPoints;
