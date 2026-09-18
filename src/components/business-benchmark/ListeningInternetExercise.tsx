import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle2, XCircle } from "lucide-react";
import useActivityTracking from "@/hooks/useActivityTracking";

const AUDIO_URL = "/__l5e/assets-v1/ef37c6cc-b35f-4b8a-9f19-fb87c33a299c/bb-preint-mod4-listening.mp3";

/* ── Exercise 1: Same or Different (SB p.24, answers from TB) ── */

const ADDRESSES = [
  { id: "e1", printed: "gbrent39@attcanada.net", answer: "S" },
  { id: "e2", printed: "sales@taylormills.co.uk", answer: "S" },
  { id: "e3", printed: "bendmurphy@hotmail.com", answer: "D" },
  { id: "e4", printed: "natalie.omar@planet.nl", answer: "S" },
  { id: "e5", printed: "www.glf.com\\products", answer: "D" },
  { id: "e6", printed: "Mary-Ann.Perkins@copeland.org.uk", answer: "D" },
  { id: "e7", printed: "asanchez@central.unav.es", answer: "S" },
  { id: "e8", printed: "www.morlandhotel\\reservations", answer: "S" },
];

const TRANSCRIPT = [
  "1  G Brent, that's G-B-R-E-N-T dot 39 at attcanada, that's A-T-T-C-A-N-A-D-A dot net",
  "2  sales at taylormills, that's T-A-Y-L-O-R-M-I-L-L-S dot co dot U-K",
  "3  Ben D Murphy, that's B-E-N-D underscore M-U-R-P-H-Y, at hotmail dot com",
  "4  N-A-T-A-L-I-E dot O-M-A-R at planet dot N-L",
  "5  W-W-W dot G-L-F dot com, forward slash, products",
  "6  Mary-Ann Perkins, that's Mary hyphen Ann dot Perkins spelt P-E-R-K-I-N-S at Copland, that's C-O-P-L-A-N-D, dot org dot U-K",
  "7  A Sanchez. You spell that A-S-A-N-C-H-E-Z, no dots, then at central dot unav, that's U-N-A-V, dot E-S",
  "8  W-W-W dot M-O-R-L-A-N-D hotel, all one word, backslash, reservations",
];

/* ── Exercise 2: Email, letter or both? ── */

const SENTENCES = [
  { id: "q1", text: "Nice to hear from you.", answer: "B" },
  { id: "q2", text: "I attach a copy of the relevant form.", answer: "E" },
  { id: "q3", text: "I enclose a copy of the relevant form.", answer: "L" },
  { id: "q4", text: "Your request was forwarded to me.", answer: "B" },
  { id: "q5", text: "I'm afraid I couldn't open the document.", answer: "E" },
  { id: "q6", text: "I am sorry for the delay in replying.", answer: "B" },
  { id: "q7", text: "I am copying James in on this message.", answer: "E" },
  { id: "q8", text: "Thank you for your message. I will be out of office from 26 to 28 May inclusive.", answer: "E" },
  { id: "q9", text: "I am also sending a hard copy.", answer: "E" },
  { id: "q10", text: "I look forward to your reply.", answer: "B" },
];

const ListeningInternetExercise = () => {
  const track = useActivityTracking();
  const [sdSel, setSdSel] = useState<Record<string, string>>({});
  const [checked1, setChecked1] = useState(false);
  const [elbSel, setElbSel] = useState<Record<string, string>>({});
  const [checked2, setChecked2] = useState(false);

  const score1 = ADDRESSES.filter((a) => sdSel[a.id] === a.answer).length;
  const score2 = SENTENCES.filter((s) => elbSel[s.id] === s.answer).length;

  return (
    <div className="space-y-8">
      {/* ── Before you listen ── */}
      <Card>
        <CardHeader>
          <CardTitle className="font-serif text-xl">1. Before you listen</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3 text-foreground">
          <p>
            In this recording you will hear several email addresses and website addresses spelled out loud.
            Before you listen, say each of these symbols in English: <strong>@ &nbsp;. &nbsp;- &nbsp;_ &nbsp;/ &nbsp;\</strong>
          </p>
          <p className="text-muted-foreground">
            Listen carefully: sometimes the address in the recording is exactly the same as the one printed below,
            and sometimes it isn't. The recording practises exactly the skill you need when you have to give your own
            email address over the phone.
          </p>
        </CardContent>
      </Card>

      {/* ── Audio ── */}
      <Card>
        <CardHeader>
          <CardTitle className="font-serif text-xl">🎧 Audio — Email addresses (Track 5)</CardTitle>
        </CardHeader>
        <CardContent>
          <audio controls className="w-full" preload="metadata">
            <source src={AUDIO_URL} type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        </CardContent>
      </Card>

      {/* ── Exercise: same or different ── */}
      <Card>
        <CardHeader>
          <CardTitle className="font-serif text-xl">2. Same or different?</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground">
            Listen to each address. Circle <strong>S</strong> if the address in the recording is the same as the one
            printed, or <strong>D</strong> if it is different.
          </p>
          <div className="rounded-md bg-muted/40 p-4 space-y-3">
            {ADDRESSES.map((a, i) => {
              const correct = checked1 && sdSel[a.id] === a.answer;
              const wrong = checked1 && sdSel[a.id] !== a.answer;
              return (
                <div key={a.id} className="flex items-center gap-3">
                  <span className="w-5 font-semibold text-primary shrink-0">{i + 1}</span>
                  <code className={`flex-1 text-sm px-2 py-1 rounded ${correct ? "bg-green-50 dark:bg-green-950/20 text-green-700 dark:text-green-400" : wrong ? "bg-destructive/10 text-destructive" : "bg-background"}`}>
                    {a.printed}
                  </code>
                  <select
                    value={sdSel[a.id] || ""}
                    onChange={(e) => setSdSel((p) => ({ ...p, [a.id]: e.target.value }))}
                    className={`rounded-md border px-2 py-1 bg-background ${
                      correct ? "border-green-500" : wrong ? "border-destructive" : "border-input"
                    }`}
                  >
                    <option value="">—</option>
                    <option value="S">S</option>
                    <option value="D">D</option>
                  </select>
                </div>
              );
            })}
          </div>
          <div className="flex items-center gap-3">
            <Button
              onClick={() => {
                setChecked1(true);
                track({ activityTitle: "BB Mod 4 Listening — same or different", activityType: "listening", score: score1, total: ADDRESSES.length });
              }}
            >
              Check answers
            </Button>
            {checked1 && <span className="text-sm text-muted-foreground">{score1} / {ADDRESSES.length} correct</span>}
          </div>

          <Accordion type="single" collapsible>
            <AccordionItem value="transcript">
              <AccordionTrigger>Show transcript</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-2 text-sm text-foreground">
                  {TRANSCRIPT.map((t) => (
                    <p key={t}>{t}</p>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>

      {/* ── Exercise: email, letter or both ── */}
      <Card>
        <CardHeader>
          <CardTitle className="font-serif text-xl">3. Email, letter or both?</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground">
            Some language is the same in emails and letters, but technology has created some differences (for
            example, you can set up an automatic reply to your emails). Read each sentence and choose{" "}
            <strong>E</strong> if it could only come in an email, <strong>L</strong> if it could only come in a
            letter, and <strong>B</strong> if it could come in both.
          </p>
          <div className="rounded-md bg-muted/40 p-4 space-y-3">
            {SENTENCES.map((s, i) => {
              const correct = checked2 && elbSel[s.id] === s.answer;
              const wrong = checked2 && elbSel[s.id] !== s.answer;
              return (
                <div key={s.id} className="flex items-center gap-3">
                  <span className="w-5 font-semibold text-primary shrink-0">{i + 1}</span>
                  <p className={`flex-1 text-sm ${correct ? "text-green-700 dark:text-green-400" : wrong ? "text-destructive" : "text-foreground"}`}>{s.text}</p>
                  <select
                    value={elbSel[s.id] || ""}
                    onChange={(e) => setElbSel((p) => ({ ...p, [s.id]: e.target.value }))}
                    className={`rounded-md border px-2 py-1 bg-background ${
                      correct ? "border-green-500" : wrong ? "border-destructive" : "border-input"
                    }`}
                  >
                    <option value="">—</option>
                    <option value="E">E</option>
                    <option value="L">L</option>
                    <option value="B">B</option>
                  </select>
                </div>
              );
            })}
          </div>
          <div className="flex items-center gap-3">
            <Button
              onClick={() => {
                setChecked2(true);
                track({ activityTitle: "BB Mod 4 Listening — email, letter or both", activityType: "vocabulary", score: score2, total: SENTENCES.length });
              }}
            >
              Check answers
            </Button>
            {checked2 && <span className="text-sm text-muted-foreground">{score2} / {SENTENCES.length} correct</span>}
          </div>
          <p className="text-xs text-muted-foreground">
            Note: "I enclose..." is letter language — today we <em>attach</em> files. And the out-of-office
            automatic reply in number 8 is exactly what your inbox does in 2026 — that idea was new when this book
            was written.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default ListeningInternetExercise;
