import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CheckCircle, XCircle } from "lucide-react";

const employees = [
  {
    name: "Mark",
    role: "Area Sales & Promotions Manager",
    text: "The great thing about my job is just the music. I get CDs constantly pushed into my hand, and I go to loads of gigs, so if you love music, there are plenty of added bonuses. Although, if you're a nine-to-five kind of person, then this isn't for you; as I say, I never really break out of work mode. There's no one standing over me, and nobody there to take over, so it all rests with me. As I say, though, that's what I love about it!",
    color: "bg-blue-50 dark:bg-blue-950/30 border-blue-200 dark:border-blue-800",
  },
  {
    name: "Helen",
    role: "Business Affairs Director",
    text: "The best thing about my job is the people. I feel really comfortable and I can be myself. It's such an interesting environment because I'm working in-house, so I work closely with the music and the artists. You see things from the beginning when you sign the contract right to the release and the success. I worked on the original contract for Blue, and they've done really well, so that's really great for me to feel part of it.",
    color: "bg-amber-50 dark:bg-amber-950/30 border-amber-200 dark:border-amber-800",
  },
  {
    name: "Sally",
    role: "IT Business Systems Manager",
    text: "I find IT in the music industry a really interesting area to work in, as there are lots of new developments in areas like digital music kiosks and online distribution. I love music, too, and it's just nice being at work and being surrounded by music. Another really nice thing about EMI is the people; everyone is really open and receptive of each other's ideas.",
    color: "bg-violet-50 dark:bg-violet-950/30 border-violet-200 dark:border-violet-800",
  },
  {
    name: "Deby",
    role: "Touring & Production Manager",
    text: "The great thing about my job is that it's really diverse, so one day we could be doing a classical show, and the next a full-on rock show. Usually there are loads of projects going on at once, so I have to work closely with my colleagues, the venues and the artists. It's all about learning, and you have to work hard, but there are loads of opportunities for development. EMI allows its employees to grow and develop themselves, so it is a great place to come in at entry level.",
    color: "bg-emerald-50 dark:bg-emerald-950/30 border-emerald-200 dark:border-emerald-800",
  },
];

const statements = [
  { id: 1, text: "I share the artists' achievements.", answer: "Helen" },
  { id: 2, text: "You get plenty of chances to do new things.", answer: "Deby" },
  { id: 3, text: "The job has so much variety.", answer: "Deby" },
  { id: 4, text: "My colleagues are ready to listen to my suggestions.", answer: "Sally" },
  { id: 5, text: "I have a lot of responsibility.", answer: "Mark" },
  { id: 6, text: "I find the innovations fascinating.", answer: "Sally" },
  { id: 7, text: "I don't work to a fixed timetable.", answer: "Mark" },
  { id: 8, text: "I deal with musicians from when they are new to when they are famous.", answer: "Helen" },
];

const vocabDefs = [
  { id: 1, def: "inside the company (Helen)", answer: "in-house" },
  { id: 2, def: "pleasant additional things (Mark)", answer: "added bonuses" },
  { id: 3, def: "person who likes work that begins at nine and finishes at five (Mark)", answer: "a nine-to-five kind of person" },
  { id: 4, def: "supervising (Mark)", answer: "standing over" },
  { id: 5, def: "start doing a job that another person did before (Mark)", answer: "take over" },
  { id: 6, def: "lots of (Deby)", answer: "loads of" },
  { id: 7, def: "places where public events happen (Deby)", answer: "venues" },
  { id: 8, def: "the lowest level of an organisation (Deby)", answer: "entry level" },
];

const ReadingUnit3 = () => {
  const [matchAns, setMatchAns] = useState<Record<number, string>>({});
  const [matchRes, setMatchRes] = useState<Record<number, boolean | null>>({});
  const [vocabAns, setVocabAns] = useState<Record<number, string>>({});
  const [vocabRes, setVocabRes] = useState<Record<number, boolean | null>>({});

  const checkMatch = () => {
    const r: Record<number, boolean> = {};
    statements.forEach((s) => { r[s.id] = matchAns[s.id] === s.answer; });
    setMatchRes(r);
  };
  const checkVocab = () => {
    const r: Record<number, boolean> = {};
    vocabDefs.forEach((v) => {
      const norm = (vocabAns[v.id] || "").trim().toLowerCase().replace(/[-\s]+/g, " ");
      r[v.id] = norm === v.answer.toLowerCase().replace(/[-\s]+/g, " ");
    });
    setVocabRes(r);
  };

  const icon = (v: boolean | null | undefined) => {
    if (v === null || v === undefined) return null;
    return v ? <CheckCircle className="inline h-5 w-5 text-green-600 ml-1" /> : <XCircle className="inline h-5 w-5 text-red-600 ml-1" />;
  };

  return (
    <div className="space-y-8">
      <Card className="service-card">
        <CardContent className="p-6">
          <h3 className="text-2xl font-semibold mb-2 font-merriweather text-foreground">Job satisfaction at EMI</h3>
          <div className="bg-muted/50 rounded-lg p-4 mb-4">
            <p className="font-semibold text-foreground">Company background</p>
            <p className="text-muted-foreground">EMI Music is the world's largest independent music company and also the oldest record company in the world, dating back to 1897.</p>
          </div>
          <p className="text-foreground mb-2"><strong>1</strong> Before you read, discuss with a partner what you think would be the main satisfactions of working for a record company.</p>
          <p className="text-foreground"><strong>2</strong> Read what the four people say about their jobs, then match each statement (1–8) to the person it refers to.</p>
        </CardContent>
      </Card>

      {/* Employee texts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {employees.map((e) => (
          <div key={e.name} className={`rounded-xl border p-5 ${e.color}`}>
            <p className="font-bold text-foreground">{e.name}, <span className="font-normal italic text-muted-foreground">{e.role}</span></p>
            <p className="text-foreground mt-2 text-sm leading-relaxed">{e.text}</p>
          </div>
        ))}
      </div>

      {/* Matching statements */}
      <Card className="service-card">
        <CardContent className="p-6">
          <h3 className="text-xl font-semibold mb-4 font-merriweather text-foreground">Exercise 2 — Who is each statement about?</h3>
          <div className="space-y-3">
            {statements.map((s) => (
              <div key={s.id} className="flex items-start gap-3">
                <span className="font-semibold w-6 pt-2">{s.id}</span>
                <p className="flex-1 text-foreground pt-2">{s.text}</p>
                <Select value={matchAns[s.id] || ""} onValueChange={(v) => setMatchAns((p) => ({ ...p, [s.id]: v }))}>
                  <SelectTrigger className={`w-32 ${matchRes[s.id] === true ? "border-green-500 bg-green-50" : matchRes[s.id] === false ? "border-red-500 bg-red-50" : ""}`}>
                    <SelectValue placeholder="Person" />
                  </SelectTrigger>
                  <SelectContent>
                    {employees.map((e) => <SelectItem key={e.name} value={e.name}>{e.name}</SelectItem>)}
                  </SelectContent>
                </Select>
                {icon(matchRes[s.id])}
                {matchRes[s.id] === false && <span className="text-sm text-red-600">({s.answer})</span>}
              </div>
            ))}
          </div>
          <Button onClick={checkMatch} className="mt-4 bg-brand-royal hover:bg-brand-navy">Check Answers</Button>
        </CardContent>
      </Card>

      {/* Discussion */}
      <Card className="service-card">
        <CardContent className="p-6">
          <h3 className="text-xl font-semibold mb-2 font-merriweather text-foreground">Exercise 3 — Discussion</h3>
          <ul className="list-disc list-inside text-foreground space-y-1">
            <li>Which of the things mentioned by the four employees do you think are most attractive?</li>
            <li>Which of the four jobs would most interest you?</li>
          </ul>
        </CardContent>
      </Card>

      {/* Vocabulary */}
      <Card className="service-card">
        <CardContent className="p-6">
          <h3 className="text-xl font-semibold mb-2 font-merriweather text-foreground">Vocabulary</h3>
          <p className="text-muted-foreground mb-4">Find words or phrases in the text which mean the following.</p>
          <div className="space-y-3">
            {vocabDefs.map((v) => (
              <div key={v.id} className="flex flex-col sm:flex-row sm:items-center gap-2">
                <span className="font-semibold w-6">{v.id}</span>
                <span className="flex-1 text-foreground">{v.def}</span>
                <Input
                  value={vocabAns[v.id] || ""}
                  onChange={(e) => setVocabAns((p) => ({ ...p, [v.id]: e.target.value }))}
                  className={`sm:w-56 ${vocabRes[v.id] === true ? "border-green-500 bg-green-50" : vocabRes[v.id] === false ? "border-red-500 bg-red-50" : ""}`}
                  placeholder="Word or phrase..."
                />
                {icon(vocabRes[v.id])}
                {vocabRes[v.id] === false && <span className="text-sm text-red-600">({v.answer})</span>}
              </div>
            ))}
          </div>
          <Button onClick={checkVocab} className="mt-4 bg-brand-royal hover:bg-brand-navy">Check Answers</Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default ReadingUnit3;
