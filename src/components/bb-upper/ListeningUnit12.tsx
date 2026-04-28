import { useState, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle2, XCircle, RotateCcw, Headphones, Info } from "lucide-react";

const STAGES = [
  { n: 1, text: "Greet audience and thank them for coming." },
  { n: 2, text: "Introduce yourself (and your colleague(s))." },
  { n: 3, text: "Introduce your talk." },
  { n: 4, text: "Outline what you are going to say and ask people to leave questions to the end." },
  { n: 5, text: "Give the main part of your talk." },
  { n: 6, text: "Summarise the main points you have made." },
  { n: 7, text: "Conclude and invite questions." },
];

const extracts: { id: string; text: string; answer: number }[] = [
  { id: "a", text: "And I think that just about covers the market research, so now let's deal with the third part of my presentation, which is to explain our financial requirements and plans …", answer: 5 },
  { id: "b", text: "Good morning and welcome to the Adelphi Hotel.", answer: 1 },
  { id: "c", text: "In my presentation, I'm hoping to do three things. First, I'll … Then I'll tell you … and finally I'll …", answer: 4 },
  { id: "d", text: "Now to move on to my second point: market research …", answer: 5 },
  { id: "e", text: "If you have any questions you'd like to ask, please leave them to the end, when I'll be very happy to answer them.", answer: 4 },
  { id: "f", text: "Now, if I can just summarise the main points again, they are these: first, …", answer: 6 },
  { id: "g", text: "So, finally, I'd like to finish off by saying that it's been a pleasure talking to you all and thank you for your patience and interest in listening to me. If you have any questions, please feel free to ask them now.", answer: 7 },
  { id: "h", text: "So, let me introduce myself: my name's … and this is my partner, …", answer: 2 },
  { id: "i", text: "Let's start with my first point – our main business idea …", answer: 5 },
  { id: "j", text: "Thank you all very much for coming; some of you have travelled a long way to hear us today …", answer: 1 },
  { id: "k", text: "The purpose of this presentation is to explain our business plans to you …", answer: 3 },
];

interface NoteGap { prefix: string; suffix: string; answers: string[] }
const notes: NoteGap[] = [
  { prefix: "Information and", suffix: "display panels.", answers: ["advertising"] },
  { prefix: "Will provide information for", suffix: "and other travellers.", answers: ["motorists"] },
  { prefix: "Information on time,", suffix: ", parking and public transport.", answers: ["weather"] },
  { prefix: "Will be placed at", suffix: "accesses to the city.", answers: ["main"] },
  { prefix: "Income from", suffix: "space for advertisements.", answers: ["selling", "renting"] },
  { prefix: "Interviewed more than", suffix: "motorists and other travellers.", answers: ["1,000", "1000", "one thousand"] },
  { prefix: "Advertisers will pay", suffix: "for space on panels.", answers: ["good prices", "good money"] },
  { prefix: "First year:", suffix: "pounds.", answers: ["250,000", "250000"] },
];

const ListeningUnit12 = () => {
  const [ext, setExt] = useState<Record<string, string>>({});
  const [extRes, setExtRes] = useState<Record<string, "correct" | "incorrect" | null>>({});
  const [showExt, setShowExt] = useState(false);

  const checkExt = () => {
    const r: Record<string, "correct" | "incorrect"> = {};
    extracts.forEach((e) => {
      r[e.id] = String(e.answer) === ext[e.id] ? "correct" : "incorrect";
    });
    setExtRes(r);
    setShowExt(true);
  };
  const resetExt = () => { setExt({}); setExtRes({}); setShowExt(false); };

  const inputRefs = useRef<Record<number, HTMLInputElement | null>>({});
  const [noteRes, setNoteRes] = useState<Record<number, "correct" | "incorrect" | null>>({});
  const [showNotes, setShowNotes] = useState(false);

  const checkNotes = () => {
    const r: Record<number, "correct" | "incorrect"> = {};
    notes.forEach((n, i) => {
      const v = (inputRefs.current[i]?.value || "").trim().toLowerCase();
      r[i] = n.answers.some((a) => a.toLowerCase() === v) ? "correct" : "incorrect";
    });
    setNoteRes(r);
    setShowNotes(true);
  };
  const resetNotes = () => {
    setNoteRes({}); setShowNotes(false);
    Object.values(inputRefs.current).forEach((el) => { if (el) el.value = ""; });
  };

  return (
    <div className="space-y-8">
      <Card>
        <CardContent className="p-6 space-y-6">
          <div className="flex items-center gap-2">
            <Headphones className="h-5 w-5 text-primary" />
            <h3 className="text-xl font-semibold font-merriweather text-foreground">Signalling the parts of a presentation</h3>
          </div>
          <p className="text-sm text-muted-foreground">
            Good presenters make it easy for their audience to know where they are in the presentation. Handouts and slides
            help, but it's also important to use phrases which signal where you are in the presentation.
          </p>

          {/* Audio placeholder */}
          <div className="rounded-lg border border-amber-200 bg-amber-50 dark:bg-amber-950/20 dark:border-amber-800 p-4 flex gap-3 items-start">
            <Info className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
            <p className="text-sm text-amber-900 dark:text-amber-100">
              <strong>Audio coming soon.</strong> You can still complete both activities by reading the audio script at the
              bottom of this page.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Stages reference */}
      <Card>
        <CardContent className="p-6 space-y-4">
          <h4 className="font-semibold text-foreground">The 7 stages of a typical presentation</h4>
          <ol className="grid sm:grid-cols-2 gap-2 text-sm">
            {STAGES.map((s) => (
              <li key={s.n} className="flex gap-3 p-3 rounded-lg bg-muted/40 border border-border">
                <span className="text-primary font-bold">{s.n}</span>
                <span className="text-foreground">{s.text}</span>
              </li>
            ))}
          </ol>
        </CardContent>
      </Card>

      {/* Exercise 1: match extracts to stages */}
      <Card>
        <CardContent className="p-6 space-y-6">
          <p className="text-sm font-semibold text-foreground">
            <span className="text-primary font-bold mr-2">1</span>
            Look at these extracts from a presentation. In which part of the presentation (1–7) would you use each of them?
          </p>

          <div className="space-y-3">
            {extracts.map((e) => (
              <div key={e.id} className="p-3 border border-border rounded-lg bg-card flex items-start gap-3">
                <span className="text-primary font-bold w-5 flex-shrink-0">{e.id}</span>
                <p className="text-sm text-foreground flex-1 italic">"{e.text}"</p>
                <Select
                  value={ext[e.id] || ""}
                  onValueChange={(v) => setExt((p) => ({ ...p, [e.id]: v }))}
                  disabled={extRes[e.id] === "correct"}
                >
                  <SelectTrigger
                    className={`h-9 w-20 text-sm flex-shrink-0 ${
                      extRes[e.id] === "correct"
                        ? "border-green-500 bg-green-50 dark:bg-green-950/30"
                        : extRes[e.id] === "incorrect"
                          ? "border-red-500 bg-red-50 dark:bg-red-950/30"
                          : ""
                    }`}
                  >
                    <SelectValue placeholder="?" />
                  </SelectTrigger>
                  <SelectContent>
                    {[1, 2, 3, 4, 5, 6, 7].map((n) => (<SelectItem key={n} value={String(n)}>{n}</SelectItem>))}
                  </SelectContent>
                </Select>
                {extRes[e.id] === "correct" && <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0 mt-2" />}
                {extRes[e.id] === "incorrect" && (
                  <span className="text-xs text-red-600 flex-shrink-0 mt-2">→ {e.answer}</span>
                )}
              </div>
            ))}
          </div>

          <div className="flex gap-3">
            <Button onClick={checkExt} className="bg-primary hover:bg-primary/90">Check Answers</Button>
            <Button onClick={resetExt} variant="outline" className="gap-2"><RotateCcw className="h-4 w-4" /> Reset</Button>
          </div>
          {showExt && (
            <p className="text-xs text-muted-foreground">
              Note: extracts (a), (d) and (i) all signal different points within stage 5 (the main part of the talk).
            </p>
          )}
        </CardContent>
      </Card>

      {/* Notes gap fill */}
      <Card>
        <CardContent className="p-6 space-y-4">
          <p className="text-sm font-semibold text-foreground">
            <span className="text-primary font-bold mr-2">2</span>
            Listen to (or read) Peter Furlong's presentation again and complete the notes by writing
            <strong> two words or a number</strong> in each gap.
          </p>

          <div className="bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800 rounded-lg p-5">
            <h4 className="font-semibold text-foreground mb-1" style={{ fontFamily: "Georgia, serif" }}>Name of company</h4>
            <p className="italic text-sm mb-4" style={{ fontFamily: "Georgia, serif" }}>Clock Options Express</p>

            <h4 className="font-semibold text-foreground mb-2" style={{ fontFamily: "Georgia, serif" }}>Business idea</h4>
            <div className="space-y-3 text-sm" style={{ fontFamily: "Georgia, serif" }}>
              {notes.slice(0, 5).map((n, i) => (
                <NoteRow key={i} idx={i} note={n} inputRefs={inputRefs} result={noteRes[i]} />
              ))}
            </div>

            <h4 className="font-semibold text-foreground mt-5 mb-2" style={{ fontFamily: "Georgia, serif" }}>Market research</h4>
            <div className="space-y-3 text-sm" style={{ fontFamily: "Georgia, serif" }}>
              {notes.slice(5, 7).map((n, i) => (
                <NoteRow key={i + 5} idx={i + 5} note={n} inputRefs={inputRefs} result={noteRes[i + 5]} />
              ))}
            </div>

            <h4 className="font-semibold text-foreground mt-5 mb-2" style={{ fontFamily: "Georgia, serif" }}>Financial requirements</h4>
            <div className="space-y-3 text-sm" style={{ fontFamily: "Georgia, serif" }}>
              <NoteRow idx={7} note={notes[7]} inputRefs={inputRefs} result={noteRes[7]} />
            </div>
          </div>

          {showNotes && (
            <div className="p-3 bg-muted/50 rounded-lg text-sm">
              <p className="font-medium mb-2">Suggested answers for missed gaps:</p>
              <ul className="space-y-1 text-xs">
                {notes.map((n, i) => noteRes[i] === "incorrect" && (
                  <li key={i} className="text-red-600 dark:text-red-400">
                    Gap {i + 1}: <strong>{n.answers[0]}</strong>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="flex gap-3">
            <Button onClick={checkNotes} className="bg-primary hover:bg-primary/90">Check Answers</Button>
            <Button onClick={resetNotes} variant="outline" className="gap-2"><RotateCcw className="h-4 w-4" /> Reset</Button>
          </div>
        </CardContent>
      </Card>

      <Accordion type="single" collapsible>
        <AccordionItem value="script" className="border rounded-lg">
          <AccordionTrigger className="px-6 hover:no-underline">
            <span className="font-semibold text-foreground">📝 Audio Script — Peter Furlong, Clock Options Express</span>
          </AccordionTrigger>
          <AccordionContent className="px-6 pb-6 space-y-3 text-sm text-muted-foreground leading-relaxed">
            <p>
              Good morning, and welcome to the Strand Hotel. Thank you all very much for coming; some of you have travelled
              a long way to hear us today, and I hope you all had good journeys. So let me introduce myself: my name's
              Peter Furlong, and this is my partner, Mark Davies.
            </p>
            <p>
              The purpose of this presentation is to explain our business plans to you and hopefully to get you interested
              in investing in our new company, Clock Options Express.
            </p>
            <p>
              In my presentation, I'm hoping to do three things. First, I'll give you a short summary of our main business
              idea. Then I'll tell you the findings of the market research that we've conducted, and finally I'll outline
              our financial requirements and plans, which should show you what a sound and exciting investment Clock
              Options Express represents. If you have any questions you'd like to ask, please leave them to the end, when
              I'll be very happy to answer them.
            </p>
            <p>
              So let's start with my first point — our main business idea. We are aiming to install information and
              advertising display panels at the main road accesses to the city. These panels will provide useful information
              for motorists and other travellers, including the time, the weather, parking availability and public transport
              updates. Our income will come from selling space on the panels for advertisements.
            </p>
            <p>
              Now, to move on to my second point: market research. We interviewed more than 1,000 motorists and other
              travellers in the city, and the response was extremely positive. We also spoke to a number of potential
              advertisers, and they confirmed that they would be willing to pay good prices for space on these panels.
            </p>
            <p>
              And I think that just about covers the market research, so now let's deal with the third part of my
              presentation, which is to explain our financial requirements and plans. To get the project off the ground,
              we are looking for an investment of 250,000 pounds in the first year. This will cover the cost of the panels,
              installation and our initial running costs.
            </p>
            <p>
              Now, if I can just summarise the main points again, they are these: first, our idea is to set up information
              and advertising panels; second, our market research shows there is strong demand from both users and
              advertisers; and third, we need 250,000 pounds in the first year to make this happen.
            </p>
            <p>
              So, finally, I'd like to finish off by saying that it's been a pleasure talking to you all and thank you for
              your patience and interest in listening to me. If you have any questions, please feel free to ask them now.
            </p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

const NoteRow = ({
  idx, note, inputRefs, result,
}: {
  idx: number;
  note: NoteGap;
  inputRefs: React.MutableRefObject<Record<number, HTMLInputElement | null>>;
  result: "correct" | "incorrect" | null | undefined;
}) => (
  <div className="flex flex-wrap items-center gap-2 italic text-foreground">
    <span>{note.prefix}</span>
    <span className="relative inline-flex items-center">
      <Input
        ref={(el) => { inputRefs.current[idx] = el; }}
        className={`w-40 h-8 text-sm not-italic ${
          result === "correct"
            ? "border-green-500 bg-green-50 dark:bg-green-950/30"
            : result === "incorrect"
              ? "border-red-500 bg-red-50 dark:bg-red-950/30"
              : ""
        }`}
        placeholder={`(${idx + 1})`}
        disabled={result === "correct"}
      />
      {result === "correct" && <CheckCircle2 className="h-4 w-4 text-green-600 ml-1" />}
      {result === "incorrect" && <XCircle className="h-4 w-4 text-red-500 ml-1" />}
    </span>
    <span>{note.suffix}</span>
  </div>
);

export default ListeningUnit12;
