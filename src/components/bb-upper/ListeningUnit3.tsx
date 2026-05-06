import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle2, XCircle } from "lucide-react";

const AUDIO_URL = "/audio/bb-upper/unit3-listening.mp3";

const advice = [
  { letter: "a", text: "Include a photograph with your application.", reason: "Attach a picture to your letter or email so they can see what you look like." },
  { letter: "b", text: "Send your application by email.", reason: "Send your application electronically so that it gets there quicker." },
  { letter: "c", text: "Your letter of application should not be longer than one page.", reason: "Keep it short — it will take too long to read otherwise." },
  { letter: "d", text: "Mention your hobbies and interests.", reason: "So they can get a better idea of what sort of person you are." },
  { letter: "e", text: "Ask someone to check your application before sending it.", reason: "Mistakes will make a bad impression." },
  { letter: "f", text: "Follow your application with a phone call.", reason: "Show that you really are interested." },
  { letter: "g", text: "Tell the truth about yourself in your application.", reason: "Lies will catch up with you and they may find out later." },
  { letter: "h", text: "Include names, addresses and telephone numbers of referees.", reason: "So the company can get in touch with them easily." },
];

const speakers = [
  { id: 1, name: "Samuel", answer: "d" },
  { id: 2, name: "Marta", answer: "b" },
  { id: 3, name: "Salim", answer: "g" },
  { id: 4, name: "Yukari", answer: "e" },
  { id: 5, name: "Ivan", answer: "f" },
];

const ListeningUnit3 = () => {
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [results, setResults] = useState<Record<number, boolean> | null>(null);

  const checkAnswers = () => {
    const r: Record<number, boolean> = {};
    speakers.forEach((s) => { r[s.id] = answers[s.id] === s.answer; });
    setResults(r);
  };

  return (
    <div className="space-y-8">
      <Card className="service-card">
        <CardContent className="p-6">
          <h3 className="text-2xl font-semibold mb-4 font-merriweather text-foreground">Advice on job applications</h3>
          <p className="text-muted-foreground mb-2"><strong>1</strong> Read the following pieces of advice about applying for a job. Each is followed by a possible reason.</p>
          <p className="text-muted-foreground mb-4"><strong>2</strong> Decide which pieces of advice you agree with, and which you disagree with.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {advice.map((a) => (
              <div key={a.letter} className="rounded-lg border border-border bg-card p-4">
                <p className="font-semibold text-foreground"><span className="text-brand-royal mr-2">{a.letter}</span>{a.text}</p>
                <p className="text-sm text-muted-foreground italic mt-1">{a.reason}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="service-card">
        <CardContent className="p-6">
          <h3 className="text-xl font-semibold mb-4 font-merriweather text-foreground">Exercise 3 — Listen and match</h3>
          <p className="text-muted-foreground mb-4">You will hear an extract from a television programme in which five human resources officers give advice about applying for jobs. For each speaker, decide what advice from the list above is being given.</p>
          <audio controls src={AUDIO_URL} className="w-full mb-6" />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {speakers.map((s) => (
              <div key={s.id} className="flex items-center gap-3 p-4 rounded-lg border border-border bg-card">
                <span className="font-semibold text-primary">{s.id}</span>
                <span className="text-foreground flex-1">{s.name}</span>
                <Select value={answers[s.id] || ""} onValueChange={(v) => { setAnswers((p) => ({ ...p, [s.id]: v })); setResults(null); }}>
                  <SelectTrigger className="w-20"><SelectValue placeholder="..." /></SelectTrigger>
                  <SelectContent>
                    {advice.map((a) => <SelectItem key={a.letter} value={a.letter}>{a.letter}</SelectItem>)}
                  </SelectContent>
                </Select>
                {results && (results[s.id] ? <CheckCircle2 className="h-5 w-5 text-green-600" /> : <XCircle className="h-5 w-5 text-red-500" />)}
                {results && !results[s.id] && <span className="text-sm text-red-600">({s.answer})</span>}
              </div>
            ))}
          </div>
          <Button onClick={checkAnswers} className="mt-6 bg-brand-royal hover:bg-brand-navy">Check Answers</Button>
        </CardContent>
      </Card>

      <Card className="service-card">
        <CardContent className="p-6">
          <Accordion type="single" collapsible>
            <AccordionItem value="transcript" className="border-none">
              <AccordionTrigger className="text-2xl font-semibold font-merriweather text-foreground hover:no-underline">📄 Transcript</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4 text-foreground leading-relaxed">
                  <p><strong>Presenter:</strong> So, finally, let's have some advice from each of you about how to go about getting that first job, the one you've studied so hard to prepare for. Samuel?</p>
                  <p><strong>Samuel:</strong> My advice is this: especially with the first job, prospective employers want to get a complete picture of you, not just what you've been studying and your holiday jobs. So include a section in your CV for the things which you like doing in your free time. These say a lot about you, and may make you a lot more interesting than all those other kids who just spend their evenings going to the pub or listening to music.</p>
                  <p><strong>Marta:</strong> I was reading somewhere that, in the US, more than 80% of applications nowadays are made electronically – personnel officers don't want the trouble of having to file lots of applications, so what comes by snail mail goes straight in the bin. What goes into the computer is there in front of you at the click of a mouse.</p>
                  <p><strong>Salim:</strong> Well, I agree with everything I've heard so far, but one thing I'd like to emphasise is that you've got to make yourself as attractive as possible to a potential employer, so make your good qualities stand out. On the other hand, don't ever tell a lie, because it'll catch up with you in the end – you know, you'll be found out. And when that happens, the only thing you'll achieve is a feeling of embarrassment.</p>
                  <p><strong>Yukari:</strong> Words of wisdom!? Mine's just plain common sense, and comes from long experience of non-native speakers writing applications in English. Get someone to look it over before you send it, someone who speaks the language well, preferably a native, because it's such a pity to lose that all-important chance for a job interview because of some slight grammatical mistakes – and they do make a difference to the impression you're giving.</p>
                  <p><strong>Ivan:</strong> Frankly, I agree with everything that's been said in the last five minutes. You know, I get pages and pages of applications every week, and I find it hard to sort people who are genuinely interested in working for us from the ones who just send the same application to every company on the Internet. So, though they all have names and addresses, they don't all get replies. My advice is follow up that application with a call to ask if your application has been received and to show that you really are interested. It makes all the difference, and chances are you'll get invited in for a chat.</p>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>
    </div>
  );
};

export default ListeningUnit3;
