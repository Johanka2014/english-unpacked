import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle2, XCircle } from "lucide-react";

const AUDIO_URL = "/audio/bb-upper/unit4-listening-1.mp3";

// Hotel reservation form fields the student must complete from the call
const formFields = [
  { id: 1, label: "Name of caller", answer: "Jack Rubenstein" },
  { id: 2, label: "Calling from", answer: "New York" },
  { id: 3, label: "Company name", answer: "Top Flight International" },
  { id: 4, label: "Type of room required", answer: "meeting room" },
  { id: 5, label: "Size of room (number of people)", answer: "15" },
  { id: 6, label: "Date required", answer: "May 18" },
  { id: 7, label: "Time", answer: "9 to 1" },
  { id: 8, label: "Purpose of room", answer: "job interviews" },
  { id: 9, label: "Extra service requested", answer: "coffee" },
];

// Gap-fill extracts from the conversation
const extracts = [
  { id: 1, before: "Flemings Hotel. How", after: "you?", answer: "can I help" },
  { id: 2, before: "Good afternoon.", after: ", Jack Rubenstein, and I'm", answer: "This is" },
  { id: 3, before: "and I'm", after: "New York.", answer: "calling from" },
  { id: 4, before: "Could you", after: "name again, please?", answer: "give me your" },
  { id: 5, before: "And", after: "the name of your company, so I can put it on the invoice?", answer: "can you tell me" },
  { id: 6, before: "OK, and what size room", after: "like?", answer: "would you" },
  { id: 7, before: "When", after: "the room for?", answer: "would you like" },
  { id: 8, before: "Could you", after: "the rates, please?", answer: "let me know" },
];

const norm = (s: string) => s.trim().toLowerCase().replace(/\s+/g, " ");

const ListeningUnit4 = () => {
  const [formAnswers, setFormAnswers] = useState<Record<number, string>>({});
  const [formResults, setFormResults] = useState<Record<number, boolean> | null>(null);
  const [extractAnswers, setExtractAnswers] = useState<Record<number, string>>({});
  const [extractResults, setExtractResults] = useState<Record<number, boolean> | null>(null);

  const checkForm = () => {
    const r: Record<number, boolean> = {};
    formFields.forEach((f) => { r[f.id] = norm(formAnswers[f.id] || "") === norm(f.answer); });
    setFormResults(r);
  };

  const checkExtracts = () => {
    const r: Record<number, boolean> = {};
    extracts.forEach((e) => { r[e.id] = norm(extractAnswers[e.id] || "") === norm(e.answer); });
    setExtractResults(r);
  };

  return (
    <div className="space-y-8">
      <Card className="service-card">
        <CardContent className="p-6">
          <h3 className="text-2xl font-semibold mb-4 font-merriweather text-foreground">1. Hotel reservation form</h3>
          <p className="text-muted-foreground">
            Work in pairs, look at this form and say what type of information you think is missing.
          </p>
        </CardContent>
      </Card>

      <Card className="service-card">
        <CardContent className="p-6">
          <h3 className="text-2xl font-semibold mb-4 font-merriweather text-foreground">2. Listen and complete the form</h3>
          <p className="text-muted-foreground mb-4">
            You are going to hear a telephone conversation between a customer and a hotel receptionist. Complete the form. For each gap, write one or two words or a number.
          </p>
          <audio controls src={AUDIO_URL} className="w-full mb-6" />

          <div className="space-y-3">
            {formFields.map((f) => (
              <div key={f.id} className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                <label className="sm:w-64 text-foreground">{f.id}. {f.label}</label>
                <div className="flex items-center gap-2 flex-1">
                  <Input
                    value={formAnswers[f.id] || ""}
                    onChange={(e) => { setFormAnswers((p) => ({ ...p, [f.id]: e.target.value })); setFormResults(null); }}
                    className="flex-1"
                  />
                  {formResults && (formResults[f.id]
                    ? <CheckCircle2 className="h-5 w-5 text-green-600" />
                    : <span className="flex items-center gap-1"><XCircle className="h-5 w-5 text-red-500" /><span className="text-sm text-red-600">{f.answer}</span></span>
                  )}
                </div>
              </div>
            ))}
          </div>
          <Button onClick={checkForm} className="mt-6 bg-brand-royal hover:bg-brand-navy">Check Answers</Button>
        </CardContent>
      </Card>

      <Card className="service-card">
        <CardContent className="p-6">
          <h3 className="text-2xl font-semibold mb-4 font-merriweather text-foreground">3. Fill in the missing words</h3>
          <p className="text-muted-foreground mb-4">
            Read these extracts from the conversation and fill in the missing words. Then listen again to check.
          </p>
          <div className="space-y-3">
            {extracts.map((e) => (
              <div key={e.id} className="flex flex-wrap items-center gap-2 text-foreground">
                <span className="font-semibold text-brand-royal">{e.id}.</span>
                <span>{e.before}</span>
                <Input
                  value={extractAnswers[e.id] || ""}
                  onChange={(ev) => { setExtractAnswers((p) => ({ ...p, [e.id]: ev.target.value })); setExtractResults(null); }}
                  className="w-48 inline-block"
                />
                <span>{e.after}</span>
                {extractResults && (extractResults[e.id]
                  ? <CheckCircle2 className="h-5 w-5 text-green-600" />
                  : <span className="flex items-center gap-1"><XCircle className="h-5 w-5 text-red-500" /><span className="text-sm text-red-600">({e.answer})</span></span>
                )}
              </div>
            ))}
          </div>
          <Button onClick={checkExtracts} className="mt-6 bg-brand-royal hover:bg-brand-navy">Check Answers</Button>
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
                <p className="text-sm italic text-muted-foreground mb-4">R = Receptionist</p>
                <div className="space-y-3 text-foreground leading-relaxed">
                  <p><strong>R:</strong> Flemings Hotel. How can I help you?</p>
                  <p><strong>Jack:</strong> Good afternoon. This is Jack Rubenstein, and I'm calling from New York. I want to book a meeting room while I'm there in London.</p>
                  <p><strong>R:</strong> OK, sir. Let me get your details first. Could you give me your name again, please?</p>
                  <p><strong>Jack:</strong> Yeah. My name's Jack Rubenstein, that's R-U-B-E-N-S-T-E-I-N.</p>
                  <p><strong>R:</strong> Fine, Mr Rubenstein. And can you tell me the name of your company, so I can put it on the invoice?</p>
                  <p><strong>Jack:</strong> No problem. The name of my company is Top Flight International.</p>
                  <p><strong>R:</strong> OK, and what size room would you like? We have meeting rooms for up to 15 people, 20 people and 30 people.</p>
                  <p><strong>Jack:</strong> The smallest one for 15 people will be quite large enough. We'll be using it for job interviews, and there'll only be three of us plus the interviewees.</p>
                  <p><strong>R:</strong> When would you like the room for?</p>
                  <p><strong>Jack:</strong> I was hoping for May 18 – that's in a month's time.</p>
                  <p><strong>R:</strong> Right, sir. I'm just checking availability. Yes, that's fine.</p>
                  <p><strong>Jack:</strong> Good. Could you let me know the rates, please?</p>
                  <p><strong>R:</strong> Meeting rooms are taken by the hour, sir, and we charge £25 an hour.</p>
                  <p><strong>Jack:</strong> OK, well, I'd need it all morning actually, from 9 o'clock to 1 o'clock, if that's all right.</p>
                  <p><strong>R:</strong> Yes, that's fine, sir. And would you like any extra services while you are here, Mr Rubenstein?</p>
                  <p><strong>Jack:</strong> Well, I'm going to be interviewing four candidates for a job, so if you could provide coffee during the morning for interviewers and interviewees, that would be great. Some of them will be travelling down from outside London.</p>
                  <p><strong>R:</strong> No problem. We look forward to seeing you then, Mr Rubenstein.</p>
                  <p><strong>Jack:</strong> Thanks. Bye.</p>
                  <p><strong>R:</strong> Goodbye.</p>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>
    </div>
  );
};

export default ListeningUnit4;
