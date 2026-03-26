import { useState, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle2, XCircle, Headphones, Volume2 } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

/* ── Exercise 1: Matching definitions ── */

const matchingItems = [
  { id: 1, word: 'challenging', correct: 'a' },
  { id: 2, word: 'firing', correct: 'g' },
  { id: 3, word: 'cashier', correct: 'f' },
  { id: 4, word: 'customer service', correct: 'e' },
  { id: 5, word: 'selling point', correct: 'b' },
  { id: 6, word: 'part-time job', correct: 'd' },
  { id: 7, word: 'supervisor', correct: 'c' },
  { id: 8, word: 'pull the wool over someone\'s eyes', correct: 'h' },
];

const definitions: Record<string, string> = {
  a: 'difficult and demanding',
  b: 'something which attracts customers',
  c: 'person who makes sure a job is done properly',
  d: 'job which is only for part of the working week',
  e: 'giving customers good treatment',
  f: 'employee who takes your money at a supermarket',
  g: 'dismissing someone from their job',
  h: 'trick or deceive someone',
};

const defOptions = Object.keys(definitions); // a–h

/* ── Exercise 2: Multiple-choice questions ── */

const mcQuestions = [
  {
    id: 1,
    question: 'What part of her job does Christina enjoy most?',
    options: ['Teaching job skills', 'Challenging tasks', 'Maintaining discipline in the workplace'],
    labels: ['A', 'B', 'C'],
    correct: 0,
  },
  {
    id: 2,
    question: 'What, according to Christina, makes managing people easy?',
    options: ['Strong discipline', 'Recruiting the right staff', 'Training staff to be friendly and polite'],
    labels: ['A', 'B', 'C'],
    correct: 1,
  },
  {
    id: 3,
    question: 'How did Christina become a personnel manager?',
    options: [
      'Tesco recruited her as a personnel manager.',
      'She trained in another company as a personnel manager.',
      'She started at the bottom and came up through the ranks.',
    ],
    labels: ['A', 'B', 'C'],
    correct: 2,
  },
  {
    id: 4,
    question: 'What would she like to be doing in ten years\' time?',
    options: ['Opening new stores', 'Working as a store manager', 'Working in human resources'],
    labels: ['A', 'B', 'C'],
    correct: 2,
  },
  {
    id: 5,
    question: 'Which of these things does Christina recommend candidates should do when they go for a job interview at Tesco?',
    options: ['Dress very smartly', 'Behave in a friendly, casual way', 'Try to look relaxed'],
    labels: ['A', 'B', 'C'],
    correct: 1,
  },
  {
    id: 6,
    question: 'How does she know that interviewees will be good at the job?',
    options: [
      'They are interested in things not linked to the job.',
      'They express interest in their other activities.',
      'They are good at the other things they do.',
    ],
    labels: ['A', 'B', 'C'],
    correct: 2,
  },
];

/* ── Transcript ── */

const transcript = `I = Interviewer, C = Christina Bunt

I: What do you most like about your job?

C: I suppose the most enjoyable for me is training because it's what I started out doing, so it's, er, the bit that I enjoy most ... Um, there's not many things that I dislike, to be honest. I suppose, um, the most challenging part of it is when you're talking in the area of discipline or, um, sometimes the firing part... Um .. that's one of our major considerations is getting the right people in the right job to start with. If you, if you employ the right people, you don't have a problem managing them once they're in the ... the workplace. Um, because they're enthusiastic about things that they like — our cashiers, obviously customer service is our ... our major selling point when it comes to our company. Um, if you employ a cashier who is naturally friendly, naturally smiles, naturally polite, it's not a problem. If you try and teach them to be polite and to smile, it doesn't necessarily work ...

I: And how did you get into this line of work?

C: Um, ... I originally worked, er, trained as a nurse, um, when my daughter was born, needed a part-time job and, um, took a part-time job with Tesco. I used to work nine hours a week on the checkouts, er, covering lunch reliefs. And then they offered me an evening checkout supervisor's job which I took, and then .. I took a full-time job, went into training about 15 years ago. I've worked with them for 22 years, so, yeah, about 15 years ago I went into ... as .. into a job as a training manager, which is a kind of natural progression into personnel. So I did the training job for about four or five years, and then took my first role about ten or 11 years ago.

I: And where do you think you might be workwise in ten years? Where would you like to be?

C: Where would I like to be? I actually would like to still be working in personnel. Um, the career progression within my firm does tend to try and take senior team through to store management, but it's actually something that I'm not particularly interested to do. Um, I prefer the people side of the business and I would like to either be still in a personnel role in store or in a regional role as personnel.

I: Now, if someone came to you and said, 'I've got a job interview, what should I try and make sure I do?' — can you give three tips for good interview technique?

C: First impressions are really important .. be totally natural and don't try to put yourself forward as something you're not. People can see straight through it and, to be honest, you're just trying to pull the wool over their eyes, so it doesn't work. Um, be friendly, be yourself, er, you know, we're a friendly, casual company, that's what we're looking for ... And I think the other thing is we look at how good people are at the other things they do, because if somebody's enthusiastic and excited about a hobby or their outside interests, then the chances are they'll bring that same enthusiasm to the workplace.`;

const Listening2Unit2 = () => {
  /* ── Matching state ── */
  const [matchAnswers, setMatchAnswers] = useState<Record<number, string>>({});
  const [matchChecked, setMatchChecked] = useState(false);

  const handleMatchSelect = (id: number, value: string) => {
    setMatchAnswers((prev) => ({ ...prev, [id]: value }));
    setMatchChecked(false);
  };

  /* ── MCQ state ── */
  const [mcAnswers, setMcAnswers] = useState<Record<number, number>>({});
  const [mcChecked, setMcChecked] = useState(false);

  const handleMcSelect = (qId: number, idx: number) => {
    setMcAnswers((prev) => ({ ...prev, [qId]: idx }));
    setMcChecked(false);
  };

  /* ── Audio ── */
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleAudio = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="space-y-8">
      {/* Intro */}
      <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-transparent">
        <CardContent className="p-6">
          <div className="flex items-start gap-4">
            <div className="p-2 rounded-lg bg-primary/10">
              <Headphones className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-1">A Human Resources Manager</h2>
              <p className="text-muted-foreground">
                Tesco is Britain's largest chain of supermarkets and the biggest food retailer in the UK. You will hear Christina Bunt, a human resources manager for Tesco, talking about her job.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Audio player */}
      <Card>
        <CardContent className="p-6">
          <div className="flex items-center gap-4">
            <Button
              variant="outline"
              size="icon"
              className="shrink-0"
              onClick={toggleAudio}
            >
              <Volume2 className="h-5 w-5" />
            </Button>
            <audio
              ref={audioRef}
              src="/audio/bb-upper/unit2-listening2.mp3"
              onEnded={() => setIsPlaying(false)}
              onPause={() => setIsPlaying(false)}
              onPlay={() => setIsPlaying(true)}
              controls
              className="w-full"
            />
          </div>
        </CardContent>
      </Card>

      {/* Exercise 1 — Matching */}
      <Card>
        <CardContent className="p-6">
          <h3 className="text-xl font-semibold text-foreground mb-1">Exercise 1</h3>
          <p className="text-muted-foreground mb-4">
            Match these words and phrases (1–8) with their definitions (a–h).
          </p>

          <div className="space-y-3">
            {matchingItems.map((item) => {
              const selected = matchAnswers[item.id];
              const isCorrect = matchChecked ? selected === item.correct : undefined;
              return (
                <div
                  key={item.id}
                  className={`flex flex-col sm:flex-row sm:items-center gap-2 p-3 rounded-lg border transition-colors ${
                    isCorrect === true
                      ? 'border-green-500/40 bg-green-50 dark:bg-green-950/20'
                      : isCorrect === false
                      ? 'border-red-500/40 bg-red-50 dark:bg-red-950/20'
                      : 'border-border'
                  }`}
                >
                  <span className="font-medium text-foreground min-w-[250px]">
                    {item.id}. {item.word}
                  </span>
                  <select
                    className="border border-border rounded-md px-3 py-1.5 bg-background text-foreground text-sm"
                    value={selected || ''}
                    onChange={(e) => handleMatchSelect(item.id, e.target.value)}
                  >
                    <option value="">Select...</option>
                    {defOptions.map((letter) => (
                      <option key={letter} value={letter}>
                        {letter}) {definitions[letter]}
                      </option>
                    ))}
                  </select>
                  {matchChecked && (
                    isCorrect ? (
                      <CheckCircle2 className="h-5 w-5 text-green-600 shrink-0" />
                    ) : (
                      <XCircle className="h-5 w-5 text-red-500 shrink-0" />
                    )
                  )}
                </div>
              );
            })}
          </div>

          <Button className="mt-4" onClick={() => setMatchChecked(true)}>
            Check Answers
          </Button>

          {matchChecked && (
            <p className="mt-3 text-sm text-muted-foreground">
              {matchingItems.filter((i) => matchAnswers[i.id] === i.correct).length} / {matchingItems.length} correct
            </p>
          )}
        </CardContent>
      </Card>

      {/* Exercise 2 — Multiple choice */}
      <Card>
        <CardContent className="p-6">
          <h3 className="text-xl font-semibold text-foreground mb-1">Exercise 2</h3>
          <p className="text-muted-foreground mb-4">
            Listen and choose the best answer for each question.
          </p>

          <div className="space-y-6">
            {mcQuestions.map((q) => {
              const selected = mcAnswers[q.id];
              return (
                <div key={q.id}>
                  <p className="font-medium text-foreground mb-2">
                    {q.id}. {q.question}
                  </p>
                  <div className="space-y-2 pl-4">
                    {q.options.map((opt, idx) => {
                      const isSelected = selected === idx;
                      const isCorrect = mcChecked && idx === q.correct;
                      const isWrong = mcChecked && isSelected && idx !== q.correct;
                      return (
                        <button
                          key={idx}
                          onClick={() => handleMcSelect(q.id, idx)}
                          className={`flex items-center gap-3 w-full text-left p-2.5 rounded-lg border transition-colors ${
                            isCorrect
                              ? 'border-green-500/40 bg-green-50 dark:bg-green-950/20'
                              : isWrong
                              ? 'border-red-500/40 bg-red-50 dark:bg-red-950/20'
                              : isSelected
                              ? 'border-primary bg-primary/5'
                              : 'border-border hover:border-primary/40'
                          }`}
                        >
                          <span className="font-semibold text-sm text-muted-foreground w-6">
                            {q.labels[idx]}
                          </span>
                          <span className="text-foreground text-sm">{opt}</span>
                          {isCorrect && <CheckCircle2 className="h-4 w-4 text-green-600 ml-auto shrink-0" />}
                          {isWrong && <XCircle className="h-4 w-4 text-red-500 ml-auto shrink-0" />}
                        </button>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>

          <Button className="mt-6" onClick={() => setMcChecked(true)}>
            Check Answers
          </Button>

          {mcChecked && (
            <p className="mt-3 text-sm text-muted-foreground">
              {mcQuestions.filter((q) => mcAnswers[q.id] === q.correct).length} / {mcQuestions.length} correct
            </p>
          )}
        </CardContent>
      </Card>

      {/* Talking Point */}
      <Card className="border-amber-200 dark:border-amber-800/40 bg-gradient-to-br from-amber-50/50 to-transparent dark:from-amber-950/20">
        <CardContent className="p-6">
          <h3 className="text-xl font-semibold text-foreground mb-3">Talking Point</h3>
          <p className="text-muted-foreground mb-3">Work in small groups. Discuss whether you agree with these opinions:</p>
          <ul className="list-disc list-inside space-y-2 text-foreground text-sm">
            <li>"If you employ the right people, you don't have a problem managing them once they're in the workplace."</li>
            <li>"If you try and teach people to be polite and to smile, it doesn't necessarily work."</li>
            <li>"First impressions are really important — be totally natural and don't try to put yourself forward as something you're not."</li>
          </ul>
          <p className="text-muted-foreground mt-4 text-sm">What other interview advice would you give?</p>
        </CardContent>
      </Card>

      {/* Audio transcript accordion */}
      <Accordion type="single" collapsible>
        <AccordionItem value="transcript">
          <AccordionTrigger className="text-base font-semibold">
            🎧 Audio Transcript
          </AccordionTrigger>
          <AccordionContent>
            <div className="bg-muted/30 rounded-lg p-5 text-sm leading-relaxed text-foreground whitespace-pre-line">
              {transcript}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default Listening2Unit2;
