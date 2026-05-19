import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle2, XCircle } from "lucide-react";

const AUDIO_URL = "/audio/bb-upper/unit13-listening.mp3";

const problems = [
  { letter: "A", label: "the access" },
  { letter: "B", label: "the accommodation" },
  { letter: "C", label: "the dates" },
  { letter: "D", label: "the keynote speaker" },
  { letter: "E", label: "the location" },
  { letter: "F", label: "the conference rooms" },
  { letter: "G", label: "the programme" },
  { letter: "H", label: "the staff" },
  { letter: "I", label: "the technology" },
];

const speakers = [
  { id: 1, name: "Candice", answer: "E" },
  { id: 2, name: "Igor", answer: "D" },
  { id: 3, name: "Paola", answer: "F" },
  { id: 4, name: "Harry", answer: "H" },
  { id: 5, name: "Susan", answer: "B" },
];

const sentences = [
  { id: 1, before: "They ", after: " us to South America or the Far East or something.", answer: ["should have sent"], speaker: "Candice" },
  { id: 2, before: "She had a PowerPoint presentation prepared, but she couldn't make it work. She really ", after: " a bit beforehand.", answer: ["should have practised", "should have practiced"], speaker: "Igor" },
  { id: 3, before: "They ", after: " one of those purpose-built conference centres.", answer: ["should have hired"], speaker: "Paola" },
];

const transcript = `Mark: Right, I've called this quick meeting because I've got to organise the annual sales conference this year and I want to avoid a few of the pitfalls. What can go wrong, do you think, Candice?

Candice: Well, I really look forward to conferences… what I really look forward to is going somewhere exotic, somewhere I couldn't afford to go to if it was me who was paying. But I can remember a really awful conference held in some ugly industrial town just because it was easy for most delegates to get to, when what we really wanted was somewhere a bit more unusual — they should have sent us to South America or the Far East or something — and it didn't even work out cheaper in the end.

Mark: Good point. What about you, Igor?

Igor: I can remember a one-day conference which got off to a dreadful start because the woman who was going to give the first speech, very distinguished she was too, just couldn't handle the technology. I think she had a PowerPoint presentation prepared, but she couldn't make it work. She got nervous and lost her place and started repeating herself, and it spoilt the whole day. She really should have practised a bit beforehand.

Mark: OK, thanks, Igor. And you, Paola?

Paola: I can tell you about a conference they held in an old 19th-century hotel in Oslo, and the place was really not suited to the sort of conference this was supposed to be. The keynote speech was in the dance hall, with everyone sitting on plastic chairs and nowhere to take notes. They should have hired one of those purpose-built conference centres.

Harry: I can tell you what most upset me — it was the people hired to run the conference, the stewards and receptionists. They were all so rude and offhand. I just don't think they'd been given any training in customer service.

Mark: Finally, you, Susan.

Susan: I hate them all, but being in a wheelchair doesn't help. It's staying in hotels — somehow, they're never quite right for someone like me. I just find the rooms unsuitable, too hot or too noisy, and I find it difficult to sleep in a strange bed.`;

const ListeningUnit13 = () => {
  const [sel, setSel] = useState<Record<number, string>>({});
  const [matchRes, setMatchRes] = useState<Record<number, boolean> | null>(null);
  const [gap, setGap] = useState<Record<number, string>>({});
  const [gapRes, setGapRes] = useState<Record<number, boolean> | null>(null);

  const checkMatch = () => {
    const r: Record<number, boolean> = {};
    speakers.forEach((s) => { r[s.id] = sel[s.id] === s.answer; });
    setMatchRes(r);
  };

  const checkGap = () => {
    const r: Record<number, boolean> = {};
    sentences.forEach((s) => {
      const v = (gap[s.id] || "").trim().toLowerCase();
      r[s.id] = s.answer.map((a) => a.toLowerCase()).includes(v);
    });
    setGapRes(r);
  };

  return (
    <div className="space-y-6">
      <Card className="service-card">
        <CardContent className="p-6 space-y-3">
          <h3 className="text-2xl font-semibold font-merriweather text-foreground">Listening: Conference Problems</h3>
          <p className="text-muted-foreground">
            <strong>1</strong> Read the list of things (A–I) which could go wrong at a conference. Then listen to five colleagues complaining about conferences they attended, and choose what each speaker is complaining about.
          </p>
          <audio controls src={AUDIO_URL} className="w-full mt-2" />
        </CardContent>
      </Card>

      <Card className="service-card">
        <CardContent className="p-6">
          <h4 className="font-semibold text-brand-royal mb-3">Possible problems</h4>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
            {problems.map((p) => (
              <div key={p.letter} className="px-3 py-2 rounded-md border border-border bg-muted/30 text-sm">
                <span className="font-bold text-brand-royal">{p.letter}</span> — {p.label}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="space-y-3">
        {speakers.map((s) => (
          <Card key={s.id} className="service-card">
            <CardContent className="p-4">
              <div className="flex items-center gap-3 mb-2">
                <span className="font-bold text-brand-royal w-8">{s.id}.</span>
                <span className="font-semibold text-foreground flex-1">{s.name}</span>
                {matchRes && (matchRes[s.id]
                  ? <CheckCircle2 className="h-5 w-5 text-green-600" />
                  : <span className="text-sm text-red-600">Correct: {s.answer}</span>)}
              </div>
              <div className="flex flex-wrap gap-2 ml-11">
                {problems.map((p) => (
                  <button
                    key={p.letter}
                    onClick={() => { setSel((x) => ({ ...x, [s.id]: p.letter })); setMatchRes(null); }}
                    className={`w-10 h-10 rounded-md border font-semibold transition-colors ${
                      sel[s.id] === p.letter ? "bg-brand-royal text-white border-brand-royal" : "border-border hover:bg-accent"
                    }`}
                  >{p.letter}</button>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Button onClick={checkMatch} className="bg-brand-royal hover:bg-brand-navy">Check Matching</Button>

      <Card className="service-card mt-8">
        <CardContent className="p-6 space-y-4">
          <p className="text-muted-foreground">
            <strong>3</strong> Complete these sentences from the conversation. <strong>4</strong> Then say which speaker said each sentence.
          </p>
          {sentences.map((s) => (
            <div key={s.id} className="space-y-1">
              <div className="flex items-center gap-2 flex-wrap text-foreground">
                <span className="font-bold text-brand-royal">{s.id}.</span>
                <span>{s.before}</span>
                <Input
                  value={gap[s.id] || ""}
                  onChange={(e) => { setGap((p) => ({ ...p, [s.id]: e.target.value })); setGapRes(null); }}
                  className={`inline-block w-52 h-7 px-2 text-sm ${gapRes ? (gapRes[s.id] ? "border-green-600" : "border-red-500") : ""}`}
                  placeholder="should have …"
                />
                <span>{s.after}</span>
                {gapRes && (gapRes[s.id]
                  ? <CheckCircle2 className="h-4 w-4 text-green-600" />
                  : <XCircle className="h-4 w-4 text-red-500" />)}
              </div>
              {gapRes && !gapRes[s.id] && (
                <p className="text-sm text-red-600 ml-7">Answer: "{s.answer[0]}" — said by {s.speaker}</p>
              )}
            </div>
          ))}
          <Button onClick={checkGap} className="bg-brand-royal hover:bg-brand-navy">Check Sentences</Button>
        </CardContent>
      </Card>

      <Card className="service-card bg-muted/30">
        <CardContent className="p-6 text-sm space-y-2">
          <p className="font-semibold text-brand-royal">Grammar note — Modal verbs: perfect forms</p>
          <p className="text-foreground"><em>should have</em> + past participle = used to criticise past actions or to say what was the right thing to do.</p>
        </CardContent>
      </Card>

      <Accordion type="single" collapsible>
        <AccordionItem value="t">
          <AccordionTrigger>Show transcript</AccordionTrigger>
          <AccordionContent>
            <pre className="whitespace-pre-wrap text-sm text-foreground leading-relaxed font-sans">{transcript}</pre>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <Card className="service-card">
        <CardContent className="p-6">
          <p className="text-muted-foreground"><strong>6</strong> Discuss in small groups what the organisers could / should have done to avoid the problems mentioned.</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default ListeningUnit13;
