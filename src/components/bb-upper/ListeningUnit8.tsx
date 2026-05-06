import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle2, XCircle } from "lucide-react";

const AUDIO_URL = "/audio/bb-upper/unit8-listening-1.mp3";

const topics = [
  { id: 1, text: "Asking about the other person's journey", who: "S", order: 3 },
  { id: 2, text: "Saying they like the stand", who: "V", order: 1 },
  { id: 3, text: "Asking the other person where they are staying", who: "S", order: 5 },
  { id: 4, text: "Saying how busy the fair is", who: "V", order: 7 },
  { id: 5, text: "Offering refreshment", who: "S", order: 8 },
  { id: 6, text: "Saying how nice the city is", who: "V", order: 4 },
  { id: 7, text: "Offering to show their products", who: "S", order: 6 },
  { id: 8, text: "Thanking the other person for the invitation", who: "V", order: 2 },
];

const gaps: { id: number; answer: string }[] = [
  { id: 1, answer: "this" },
  { id: 2, answer: "meet" },
  { id: 3, answer: "too" },
  { id: 4, answer: "thanks" },
  { id: 5, answer: "talk" },
  { id: 6, answer: "trip" },
  { id: 7, answer: "Lovely" },
  { id: 8, answer: "staying" },
  { id: 9, answer: "get" },
  { id: 10, answer: "Busy" },
  { id: 11, answer: "either" },
  { id: 12, answer: "with" },
];

const ListeningUnit8 = () => {
  const [whoAns, setWhoAns] = useState<Record<number, string>>({});
  const [orderAns, setOrderAns] = useState<Record<number, string>>({});
  const [topicRes, setTopicRes] = useState<Record<number, { who: boolean; order: boolean }> | null>(null);
  const [gapAns, setGapAns] = useState<Record<number, string>>({});
  const [gapRes, setGapRes] = useState<Record<number, boolean> | null>(null);

  const checkTopics = () => {
    const r: Record<number, { who: boolean; order: boolean }> = {};
    topics.forEach((t) => {
      r[t.id] = {
        who: (whoAns[t.id] || "").toUpperCase() === t.who,
        order: Number(orderAns[t.id]) === t.order,
      };
    });
    setTopicRes(r);
  };

  const checkGaps = () => {
    const r: Record<number, boolean> = {};
    gaps.forEach((g) => {
      r[g.id] = (gapAns[g.id] || "").trim().toLowerCase() === g.answer.toLowerCase();
    });
    setGapRes(r);
  };

  return (
    <div className="space-y-8">
      <Card className="service-card">
        <CardContent className="p-6">
          <h3 className="text-2xl font-semibold mb-2 font-merriweather text-foreground">Establishing a Business Relationship</h3>
          <p className="text-muted-foreground mb-4">
            You will hear two buyers from a chain of stores (Jack and Susie) talking to some salespeople (Tessa and Sam)
            who have invited them to visit their stand at a trade fair. However, business conversations are not always limited to talking about business.
          </p>
          <audio controls src={AUDIO_URL} className="w-full mb-6" />

          <p className="text-foreground mb-2"><strong>1</strong> Decide which topic would most likely be said by a <strong>visitor (V)</strong> or <strong>salesperson (S)</strong>.</p>
          <p className="text-foreground mb-4"><strong>2</strong> Listen and write the order in which the topics are mentioned.</p>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-2 px-2">Topic</th>
                  <th className="py-2 px-2 w-24">V or S</th>
                  <th className="py-2 px-2 w-24">Order</th>
                </tr>
              </thead>
              <tbody>
                {topics.map((t) => (
                  <tr key={t.id} className="border-b border-border/50">
                    <td className="py-2 px-2 text-foreground">{t.text}</td>
                    <td className="py-2 px-2">
                      <Select value={whoAns[t.id] || ""} onValueChange={(v) => { setWhoAns((p) => ({ ...p, [t.id]: v })); setTopicRes(null); }}>
                        <SelectTrigger className="w-20"><SelectValue placeholder="?" /></SelectTrigger>
                        <SelectContent>
                          <SelectItem value="V">V</SelectItem>
                          <SelectItem value="S">S</SelectItem>
                        </SelectContent>
                      </Select>
                      {topicRes && (topicRes[t.id].who ? <CheckCircle2 className="inline h-4 w-4 text-green-600 ml-1" /> : <span className="text-xs text-red-600 ml-1">({t.who})</span>)}
                    </td>
                    <td className="py-2 px-2">
                      <Input type="number" min={1} max={8} className="w-16" value={orderAns[t.id] || ""} onChange={(e) => { setOrderAns((p) => ({ ...p, [t.id]: e.target.value })); setTopicRes(null); }} />
                      {topicRes && (topicRes[t.id].order ? <CheckCircle2 className="inline h-4 w-4 text-green-600 ml-1" /> : <span className="text-xs text-red-600 ml-1">({t.order})</span>)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <Button onClick={checkTopics} className="mt-4 bg-brand-royal hover:bg-brand-navy">Check Answers</Button>
        </CardContent>
      </Card>

      <Card className="service-card">
        <CardContent className="p-6">
          <h3 className="text-xl font-semibold mb-4 font-merriweather text-foreground">Exercise 3 — Complete the conversation</h3>
          <p className="text-muted-foreground mb-4">Complete the conversation with one word in each gap. Then listen again to check.</p>

          <div className="space-y-3 text-foreground leading-relaxed">
            <p><strong>Jack:</strong> Hello. Good morning. Tessa Marcovitz? My name's Jack Lemming, and <Gap id={1} ans={gapAns} setAns={setGapAns} res={gapRes} /> is my colleague, Susie Chen.</p>
            <p><strong>Tessa:</strong> Hello. Nice to <Gap id={2} ans={gapAns} setAns={setGapAns} res={gapRes} /> you. So you got my letter? That's great.</p>
            <p><strong>Jack:</strong> Hello.</p>
            <p><strong>Susie:</strong> Hello. Nice to meet you <Gap id={3} ans={gapAns} setAns={setGapAns} res={gapRes} />. So this is your stand? Very smart, and <Gap id={4} ans={gapAns} setAns={setGapAns} res={gapRes} /> for inviting us, by the way.</p>
            <p><strong>Tessa:</strong> Well, we've been wanting to <Gap id={5} ans={gapAns} setAns={setGapAns} res={gapRes} /> to you people for some time, and we like to let people know when we've got a stand at a fair. Did you have a good <Gap id={6} ans={gapAns} setAns={setGapAns} res={gapRes} />?</p>
            <p><strong>Jack:</strong> Yes, thanks. Very good.</p>
            <p><strong>Susie:</strong> Yes, the airport's so convenient for this fair. <Gap id={7} ans={gapAns} setAns={setGapAns} res={gapRes} /> city, isn't it?</p>
            <p><strong>Tessa:</strong> Yes, lovely. Where are you <Gap id={8} ans={gapAns} setAns={setGapAns} res={gapRes} />?</p>
            <p><strong>Susie:</strong> We're staying at the Ritz, in the city centre.</p>
            <p><strong>Tessa:</strong> Good. They say it's the best hotel in town. When did you <Gap id={9} ans={gapAns} setAns={setGapAns} res={gapRes} /> in?</p>
            <p><strong>Jack:</strong> Just last night, but not too late.</p>
            <p><strong>Tessa:</strong> Oh, good. Now, can we show you a few of our products? Take a seat if you like.</p>
            <p><strong>Jack:</strong> Thanks. <Gap id={10} ans={gapAns} setAns={setGapAns} res={gapRes} />, isn't it?</p>
            <p><strong>Tessa:</strong> Incredibly, and it's been like this all week. Would <Gap id={11} ans={gapAns} setAns={setGapAns} res={gapRes} /> of you like a cup of coffee or tea before we get started?</p>
            <p><strong>Susie:</strong> Yes, please. I could really do <Gap id={12} ans={gapAns} setAns={setGapAns} res={gapRes} /> a cup of coffee myself. What about you, Jack?</p>
            <p><strong>Jack:</strong> Tea for me, please.</p>
          </div>

          <Button onClick={checkGaps} className="mt-6 bg-brand-royal hover:bg-brand-navy">Check Answers</Button>
        </CardContent>
      </Card>

      <Card className="service-card">
        <CardContent className="p-6">
          <Accordion type="single" collapsible>
            <AccordionItem value="script">
              <AccordionTrigger className="text-lg font-semibold font-merriweather text-foreground">Audio Script</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-2 text-foreground leading-relaxed">
                  <p><strong>Jack:</strong> Hello. Good morning. Tessa Marcovitz? My name's Jack Lemming, and <strong>this</strong> is my colleague, Susie Chen.</p>
                  <p><strong>Tessa:</strong> Hello. Nice to <strong>meet</strong> you. So you got my letter? That's great.</p>
                  <p><strong>Jack:</strong> Hello.</p>
                  <p><strong>Susie:</strong> Hello. Nice to meet you <strong>too</strong>. So this is your stand? Very smart, and <strong>thanks</strong> for inviting us, by the way.</p>
                  <p><strong>Tessa:</strong> Well, we've been wanting to <strong>talk</strong> to you people for some time, and we like to let people know when we've got a stand at a fair. Did you have a good <strong>trip</strong>?</p>
                  <p><strong>Jack:</strong> Yes, thanks. Very good.</p>
                  <p><strong>Susie:</strong> Yes, the airport's so convenient for this fair. <strong>Lovely</strong> city, isn't it?</p>
                  <p><strong>Tessa:</strong> Yes, lovely. Where are you <strong>staying</strong>?</p>
                  <p><strong>Susie:</strong> We're staying at the Ritz, in the city centre.</p>
                  <p><strong>Tessa:</strong> Good. They say it's the best hotel in town. When did you <strong>get</strong> in?</p>
                  <p><strong>Jack:</strong> Just last night, but not too late.</p>
                  <p><strong>Tessa:</strong> Oh, good. Now, can we show you a few of our products? Take a seat if you like.</p>
                  <p><strong>Jack:</strong> Thanks. <strong>Busy</strong>, isn't it?</p>
                  <p><strong>Tessa:</strong> Incredibly, and it's been like this all week. Would <strong>either</strong> of you like a cup of coffee or tea before we get started?</p>
                  <p><strong>Susie:</strong> Yes, please. I could really do <strong>with</strong> a cup of coffee myself. What about you, Jack?</p>
                  <p><strong>Jack:</strong> Tea for me, please.</p>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>

      <Card className="service-card">
        <CardContent className="p-6">
          <h3 className="text-xl font-semibold mb-4 font-merriweather text-foreground">Role-play</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="rounded-lg border border-border bg-muted/30 p-4">
              <p className="font-semibold text-foreground mb-1">Pair A — Visitor</p>
              <p className="text-sm text-foreground">You are visiting a company in a town or city you have not visited before. Think of two or three pleasant things you can say to start building a relationship with the people you are visiting.</p>
            </div>
            <div className="rounded-lg border border-border bg-muted/30 p-4">
              <p className="font-semibold text-foreground mb-1">Pair B — Host</p>
              <p className="text-sm text-foreground">You are working in a company. Think of two or three pleasant things you can say to your visitors to start building a relationship.</p>
            </div>
          </div>
          <p className="text-sm text-muted-foreground mt-4">Work together in groups of four (Pair A + Pair B); have conversations from the moment Pair A arrive at the office.</p>
        </CardContent>
      </Card>
    </div>
  );
};

const Gap = ({ id, ans, setAns, res }: { id: number; ans: Record<number, string>; setAns: React.Dispatch<React.SetStateAction<Record<number, string>>>; res: Record<number, boolean> | null }) => {
  const correct = res?.[id];
  return (
    <span className="inline-flex items-center gap-1 mx-1 align-middle">
      <Input
        value={ans[id] || ""}
        onChange={(e) => setAns((p) => ({ ...p, [id]: e.target.value }))}
        className={`inline-block w-24 h-8 ${correct === true ? "border-green-500 bg-green-50" : correct === false ? "border-red-500 bg-red-50" : ""}`}
        placeholder={`${id}`}
      />
      {correct === false && <XCircle className="h-4 w-4 text-red-500" />}
      {correct === true && <CheckCircle2 className="h-4 w-4 text-green-600" />}
    </span>
  );
};

export default ListeningUnit8;
