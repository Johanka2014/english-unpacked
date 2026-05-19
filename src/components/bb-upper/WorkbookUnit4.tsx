import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CheckCircle2, XCircle } from "lucide-react";

// --- Exercise 1: match advice to conversation(s) ---
const adviceItems = [
  { id: 1, text: "When you answer the telephone at work, give your name or the name of your department. If you are taking an external call, give the name of the company.", correct: ["A", "B", "C"] },
  { id: 2, text: "We say Good afternoon from about 1 p.m., Good evening from about 5.30 and Good night when going to bed.", correct: ["B"] },
  { id: 3, text: "When speaking to people you know, don't say 'I'm Mark Dunhill'.", correct: ["B"] },
  { id: 4, text: "Business people are busy, so give the subject of the call. You can also say 'I'm calling in connection with …'", correct: ["B"] },
  { id: 5, text: "In other words: 'Nigel Payne is the person speaking'.", correct: ["B"] },
  { id: 6, text: "You say 'My name's …' only when you are introducing yourself for the first time.", correct: ["A"] },
  { id: 7, text: "Native English speakers say please and thank you a lot!", correct: ["A", "B", "C"] },
  { id: 8, text: "You can say 'Hold on' or 'Hang on a minute' if you are speaking informally to someone you know.", correct: ["C"] },
  { id: 9, text: "More polite and formal than 'Who's that?' / 'Who's this?' — you can also say 'Who is calling, please?'", correct: ["C"] },
  { id: 10, text: "You say this when you connect someone to a different line.", correct: ["C"] },
  { id: 11, text: "Another way of saying this is 'Would you like to leave a message?'", correct: ["A"] },
];

const conversations = [
  {
    letter: "A",
    lines: [
      "— Christa Schmidt, Marine Division. How can I help you?",
      "— Hello. My name's Sandra Dufois. Can I speak to Paola Beluchi, please?",
      "— I'm afraid she's in a meeting at the moment. Can I take a message?",
      "— Yes. Could you ask her to phone me urgently when she comes out?",
      "— Certainly. She should be out in about half an hour. I'll get her to give you a ring.",
      "— Thank you. Goodbye.",
      "— Goodbye.",
    ],
  },
  {
    letter: "B",
    lines: [
      "— Logistics. Can I help you?",
      "— Good afternoon. Can I speak to Nigel Payne, please?",
      "— Speaking.",
      "— Hello. Mark Dunhill here. I'm just calling to let you know we have received the consignment and that everything is in order.",
      "— Good. Thank you for calling. Goodbye.",
      "— Goodbye.",
    ],
  },
  {
    letter: "C",
    lines: [
      "— Cranfield Business School. Can I help you?",
      "— Hello. Could I speak to Professor Elgin, please?",
      "— Yes, can you tell me your name, please, and I'll put you through?",
      "— This is one of his ex-students, Salome Fuster, from Salamanca, Spain.",
      "— Hold on a moment, please. I'll put you through.",
      "— Thank you.",
    ],
  },
];

// --- Exercise 2: gap-fill ---
type Gap = { id: number; answer: string[] };
const convo1: { before: string; gap?: Gap; after: string }[] = [
  { before: "MARIBEL: Finance department. ", gap: { id: 1, answer: ["how"] }, after: " can I help you?" },
  { before: "MANFRED: Good morning. Can I speak ", gap: { id: 2, answer: ["to"] }, after: " Maribel Arroyo, please?" },
  { before: "MARIBEL: ", gap: { id: 3, answer: ["speaking"] }, after: "." },
  { before: "MANFRED: Oh, hello. ", gap: { id: 4, answer: ["this"] }, after: " is Manfred Steiner from Arts International." },
  { before: "MARIBEL: Hello, Mr Steiner. What can I do ", gap: { id: 5, answer: ["for"] }, after: " you?" },
  { before: "MANFRED: Well, it's about an invoice — you sent the order we placed, but you forgot to include the invoice, so we can't pay you.", after: "" },
  { before: "MARIBEL: Oh, that's not my department, I'm ", gap: { id: 6, answer: ["afraid"] }, after: ", Mr Steiner. That's Mary Slade in Invoicing." },
  { before: "MANFRED: OK. Can I speak to her then, please?", after: "" },
  { before: "MARIBEL: Sure. I'll put you ", gap: { id: 7, answer: ["through"] }, after: "." },
  { before: "MANFRED: Thanks very much.", after: "" },
  { before: "MARIBEL: Not at ", gap: { id: 8, answer: ["all"] }, after: "." },
];

const convo2: { before: string; gap?: Gap; after: string }[] = [
  { before: "JANE: Jane Ashley.", after: "" },
  { before: "ALAN: Oh, hello, Jane, I've been trying to call Tracy, but she's not answering the phone, and it's rather urgent.", after: "" },
  { before: "JANE: Who is ", gap: { id: 9, answer: ["that", "this"] }, after: ", please?" },
  { before: "ALAN: ", gap: { id: 10, answer: ["this", "it"] }, after: " is Alan Searle." },
  { before: "JANE: Oh, hello, Alan, I didn't recognise your voice. I'm ", gap: { id: 11, answer: ["afraid"] }, after: " she's in a meeting at the moment and she's left instructions that she's not to be disturbed. Can I ", },
  { before: "", gap: { id: 12, answer: ["take", "leave"] }, after: " a message?" },
  { before: "ALAN: Yes, can you ask her to call me as soon as ", gap: { id: 13, answer: ["possible"] }, after: "?" },
  { before: "JANE: Yes, of ", gap: { id: 14, answer: ["course"] }, after: "." },
  { before: "ALAN: ", gap: { id: 15, answer: ["thank", "thanks"] }, after: " you very much. Bye." },
  { before: "JANE: Goodbye.", after: "" },
];

const allGaps = [...convo1, ...convo2].flatMap((l) => (l.gap ? [l.gap] : []));

const WorkbookUnit4 = () => {
  const [selected, setSelected] = useState<Record<number, string[]>>({});
  const [adviceResults, setAdviceResults] = useState<Record<number, boolean> | null>(null);

  const [gapAnswers, setGapAnswers] = useState<Record<number, string>>({});
  const [gapResults, setGapResults] = useState<Record<number, boolean> | null>(null);

  const toggle = (adviceId: number, letter: string) => {
    setAdviceResults(null);
    setSelected((p) => {
      const cur = p[adviceId] || [];
      return { ...p, [adviceId]: cur.includes(letter) ? cur.filter((l) => l !== letter) : [...cur, letter] };
    });
  };

  const checkAdvice = () => {
    const r: Record<number, boolean> = {};
    adviceItems.forEach((a) => {
      const sel = (selected[a.id] || []).slice().sort();
      r[a.id] = JSON.stringify(sel) === JSON.stringify(a.correct.slice().sort());
    });
    setAdviceResults(r);
  };

  const checkGaps = () => {
    const r: Record<number, boolean> = {};
    allGaps.forEach((g) => {
      const v = (gapAnswers[g.id] || "").trim().toLowerCase().replace(/[.,!?]/g, "");
      r[g.id] = g.answer.includes(v);
    });
    setGapResults(r);
  };

  const renderLines = (lines: typeof convo1) => (
    <div className="space-y-2 text-foreground">
      {lines.map((l, i) => (
        <div key={i} className="leading-relaxed">
          <span>{l.before}</span>
          {l.gap && (
            <span className="inline-flex items-center gap-1 align-middle">
              <span className="text-xs text-muted-foreground mr-1">{l.gap.id}</span>
              <Input
                value={gapAnswers[l.gap.id] || ""}
                onChange={(e) => { setGapAnswers((p) => ({ ...p, [l.gap!.id]: e.target.value })); setGapResults(null); }}
                className={`inline-block w-28 h-7 px-2 text-sm ${gapResults ? (gapResults[l.gap.id] ? "border-green-600" : "border-red-500") : ""}`}
              />
              {gapResults && (gapResults[l.gap.id]
                ? <CheckCircle2 className="h-4 w-4 text-green-600" />
                : <XCircle className="h-4 w-4 text-red-500" />)}
            </span>
          )}
          <span>{l.after}</span>
        </div>
      ))}
    </div>
  );

  return (
    <div className="space-y-10">
      {/* Exercise 1 */}
      <Card className="service-card">
        <CardContent className="p-6">
          <h3 className="text-2xl font-semibold mb-2 font-merriweather text-foreground">Reading</h3>
          <p className="text-muted-foreground mb-4">
            <strong>1</strong> Read this advice on speaking on the telephone in English and look at the conversations below.
            For each piece of advice, choose the conversation(s) (A, B and/or C) that contain an example. The advice may
            be found in one, two or all of the conversations.
          </p>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {conversations.map((c) => (
          <Card key={c.letter} className="service-card">
            <CardContent className="p-5">
              <h4 className="font-bold text-brand-royal mb-3">Conversation {c.letter}</h4>
              <div className="space-y-1 text-sm text-foreground leading-relaxed">
                {c.lines.map((line, i) => <p key={i}>{line}</p>)}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="space-y-3">
        {adviceItems.map((a) => (
          <Card key={a.id} className="service-card">
            <CardContent className="p-4">
              <div className="flex items-start gap-3">
                <span className="text-brand-royal font-bold">{a.id}.</span>
                <p className="text-foreground flex-1">{a.text}</p>
                {adviceResults && (adviceResults[a.id]
                  ? <CheckCircle2 className="h-5 w-5 text-green-600 shrink-0" />
                  : <XCircle className="h-5 w-5 text-red-500 shrink-0" />)}
              </div>
              <div className="flex gap-2 mt-3 ml-7">
                {["A", "B", "C"].map((letter) => {
                  const isSel = (selected[a.id] || []).includes(letter);
                  return (
                    <button
                      key={letter}
                      onClick={() => toggle(a.id, letter)}
                      className={`w-10 h-10 rounded-md border font-semibold transition-colors ${
                        isSel ? "bg-brand-royal text-white border-brand-royal" : "border-border hover:bg-accent"
                      }`}
                    >{letter}</button>
                  );
                })}
              </div>
              {adviceResults && !adviceResults[a.id] && (
                <p className="text-sm text-red-600 mt-2 ml-7">Correct: {a.correct.join(", ")}</p>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      <Button onClick={checkAdvice} className="bg-brand-royal hover:bg-brand-navy">Check Reading Answers</Button>

      {/* Exercise 2 */}
      <Card className="service-card mt-12">
        <CardContent className="p-6">
          <h3 className="text-2xl font-semibold mb-2 font-merriweather text-foreground">Telephone Language</h3>
          <p className="text-muted-foreground">
            <strong>2</strong> Complete these telephone conversations by putting one word in each space.
          </p>
        </CardContent>
      </Card>

      <Card className="service-card">
        <CardContent className="p-6 space-y-3">
          <h4 className="font-semibold text-brand-royal mb-2">Conversation 1</h4>
          {renderLines(convo1)}
        </CardContent>
      </Card>

      <Card className="service-card">
        <CardContent className="p-6 space-y-3">
          <h4 className="font-semibold text-brand-royal mb-2">Conversation 2</h4>
          {renderLines(convo2)}
        </CardContent>
      </Card>

      <Button onClick={checkGaps} className="bg-brand-royal hover:bg-brand-navy">Check Gap-fill Answers</Button>
    </div>
  );
};

export default WorkbookUnit4;
