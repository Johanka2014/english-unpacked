import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle2, XCircle, RotateCcw, Headphones } from "lucide-react";

const AUDIO_1 = "https://johanka2014.github.io/bus_bench/mod_10/18_Unit_10.mp3";
const AUDIO_2 = "https://johanka2014.github.io/bus_bench/mod_10/19_Unit_10.mp3";

interface MCQuestion {
  id: number;
  question: string;
  options: { label: string; text: string }[];
  answer: string;
}

const questions: MCQuestion[] = [
  {
    id: 1,
    question: "Where did the idea for Espresso come from?",
    options: [
      { label: "A", text: "It was Lewis's idea." },
      { label: "B", text: "It was suggested to him by someone else." },
      { label: "C", text: "Schools asked him to develop the idea." },
    ],
    answer: "A",
  },
  {
    id: 2,
    question: "What market research did Lewis do initially?",
    options: [
      { label: "A", text: "He didn't do any market research." },
      { label: "B", text: "He asked schools what they needed." },
      { label: "C", text: "He employed a market-research company." },
    ],
    answer: "A",
  },
  {
    id: 3,
    question: "How did they first obtain funds to start the business?",
    options: [
      { label: "A", text: "From investors in London." },
      { label: "B", text: "From a bank." },
      { label: "C", text: "From an international organisation." },
    ],
    answer: "C",
  },
  {
    id: 4,
    question: "Why has the business been successful?",
    options: [
      { label: "A", text: "They followed conventional business advice." },
      { label: "B", text: "They were fortunate." },
      { label: "C", text: "They followed the example of other companies." },
    ],
    answer: "B",
  },
  {
    id: 5,
    question: "According to Lewis, how can you reduce the risks of starting a new business?",
    options: [
      { label: "A", text: "By employing good staff." },
      { label: "B", text: "By renting good premises." },
      { label: "C", text: "By limiting your overheads." },
    ],
    answer: "C",
  },
];

const TRANSCRIPT = `Interviewer: And can you just tell me what does Espresso do, and where did you get the idea for the company?

Lewis: We make what are called digital educational resources, so we supply digital materials for teachers and pupils to use particularly in primary or elementary schools, to support their lessons across the whole curriculum. The idea came from, um, it came out of my head really, it was an idea I had when someone came to me and talked about a technology being developed to allow the movement of large data files by satellite, and I thought of an application which would be to use video in those files and then to build a wrapper around it which would be educational. So that was where the original idea came from.

Interviewer: And did you do any market research before launching?

Lewis: No. We did everything the way that it shouldn't be done, probably, if you're starting a company. It was a gut instinct that this was a good idea, the technology was coming along. I'd been a school governor, and I knew what schools needed to use, so I wanted to combine television, computing and the Internet to create a new kind of educational resource. And that's what we've done.

Interviewer: And did you have to raise finance?

Lewis: Oh, yes. We started off by raising finance through a European Space Agency initiative called ARTES-3. Basically, ARTES-3 was a programme looking for applications of the use of space in either medicine or education, and we wrote a proposal to the European Space Agency... And we were successful in winning a grant of about £400,000 from the European Space Agency in 1998, had to raise a lot of money subsequently from the private venture-capital market in London and from individual investors in order to sustain the business in its early days.

Interviewer: If you had not got funding from them, were there other options open to you?

Lewis: Um, not really. It was a very interesting and original idea, and there was no precedent for having done it. It was complicated to execute, and you could not have gone to a bank or to even an angel investor with a blank sheet of paper and said, 'This is my idea, would you fund me?' I think those are the basic criteria. On top of that, you can lay all the business skills, like understanding the market, like doing very good financial projections and so on and so forth, understanding your cost base. All of those things, of course, have to come, but they come second to those other criteria I mentioned.`;

const Listening2Unit10 = () => {
  const [selections, setSelections] = useState<Record<number, string>>({});
  const [checked, setChecked] = useState(false);

  const handleSelect = (qId: number, label: string) => {
    if (checked) return;
    setSelections((prev) => ({ ...prev, [qId]: label }));
  };

  const checkAnswers = () => setChecked(true);
  const reset = () => {
    setSelections({});
    setChecked(false);
  };

  const allSelected = questions.every((q) => selections[q.id]);
  const correctCount = checked ? questions.filter((q) => selections[q.id] === q.answer).length : 0;

  return (
    <div className="space-y-8">
      <Card className="service-card">
        <CardContent className="p-6">
          <div className="flex items-center gap-2 mb-2">
            <Headphones className="h-5 w-5 text-primary" />
            <h3 className="text-xl font-semibold font-merriweather text-foreground">
              Setting up a multimedia company
            </h3>
          </div>

          <div className="bg-muted/50 rounded-lg p-4 mb-6">
            <h4 className="font-semibold text-foreground mb-1">Company background</h4>
            <p className="text-sm text-muted-foreground italic">
              Espresso Ltd delivers multimedia educational resources to schools using satellite
              technology. It was formed in 1997 by Lewis Bronze and Tony Bowden.
            </p>
          </div>

          <p className="text-muted-foreground mb-4">
            Listen to Lewis Bronze talking about how he set up Espresso Ltd and choose the best
            answer for each question.
          </p>

          <div className="bg-muted/30 border border-border rounded-lg p-3 mb-4 text-sm text-muted-foreground">
            <strong>Task tip:</strong> You should not expect to understand every word the speaker
            says. Try to understand the <strong>general meaning</strong> in order to choose the best
            answers.
          </div>

          {/* Audio player */}
          <div className="mb-6">
            <audio controls src={AUDIO_1} className="w-full" />
          </div>

          {/* Multiple choice questions */}
          <div className="space-y-5">
            {questions.map((q) => {
              const selected = selections[q.id];
              const isCorrect = checked && selected === q.answer;
              const isWrong = checked && selected != null && selected !== q.answer;

              return (
                <div key={q.id} className="border border-border rounded-lg p-4">
                  <p className="font-medium text-foreground mb-3">
                    <span className="text-primary font-bold mr-1">{q.id}.</span> {q.question}
                  </p>
                  <div className="space-y-2">
                    {q.options.map((opt) => {
                      const isSelected = selected === opt.label;
                      const optCorrect = checked && opt.label === q.answer;
                      const optWrong = checked && isSelected && opt.label !== q.answer;

                      return (
                        <button
                          key={opt.label}
                          onClick={() => handleSelect(q.id, opt.label)}
                          disabled={checked}
                          className={`w-full text-left flex items-center gap-3 p-3 rounded-lg border transition-colors ${
                            optCorrect
                              ? "border-green-500 bg-green-50 dark:bg-green-950/30"
                              : optWrong
                              ? "border-red-500 bg-red-50 dark:bg-red-950/30"
                              : isSelected
                              ? "border-primary bg-primary/10"
                              : "border-border hover:bg-muted/50"
                          }`}
                        >
                          <span
                            className={`inline-flex items-center justify-center w-7 h-7 rounded-full text-sm font-bold flex-shrink-0 ${
                              optCorrect
                                ? "bg-green-500 text-white"
                                : optWrong
                                ? "bg-red-500 text-white"
                                : isSelected
                                ? "bg-primary text-primary-foreground"
                                : "bg-muted text-muted-foreground"
                            }`}
                          >
                            {opt.label}
                          </span>
                          <span className="text-sm text-foreground">{opt.text}</span>
                          {optCorrect && <CheckCircle2 className="h-4 w-4 text-green-600 ml-auto flex-shrink-0" />}
                          {optWrong && <XCircle className="h-4 w-4 text-red-500 ml-auto flex-shrink-0" />}
                        </button>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>

          {checked && (
            <div
              className={`mt-4 p-4 rounded-lg text-center font-semibold ${
                correctCount === questions.length
                  ? "bg-green-50 dark:bg-green-950/30 text-green-700 dark:text-green-300 border border-green-200 dark:border-green-800"
                  : "bg-muted/50 text-foreground"
              }`}
            >
              {correctCount === questions.length
                ? "🎉 Excellent! All answers correct!"
                : `You got ${correctCount} out of ${questions.length} correct.`}
            </div>
          )}

          <div className="flex gap-3 mt-6">
            <Button onClick={checkAnswers} disabled={!allSelected || checked} className="bg-primary hover:bg-primary/90">
              Check Answers
            </Button>
            <Button onClick={reset} variant="outline" className="gap-2">
              <RotateCcw className="h-4 w-4" /> Reset
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Audio script accordion */}
      <Accordion type="single" collapsible>
        <AccordionItem value="transcript" className="border rounded-lg">
          <AccordionTrigger className="px-6 hover:no-underline">
            <span className="flex items-center gap-2 text-foreground font-semibold">
              📝 Audio Script
            </span>
          </AccordionTrigger>
          <AccordionContent className="px-6 pb-6">
            <div className="prose prose-sm dark:prose-invert max-w-none">
              {TRANSCRIPT.split("\n\n").map((paragraph, i) => (
                <p key={i} className="text-muted-foreground mb-3 last:mb-0">
                  {paragraph.includes(":") ? (
                    <>
                      <strong className="text-foreground">
                        {paragraph.split(":")[0]}:
                      </strong>
                      {paragraph.substring(paragraph.indexOf(":") + 1)}
                    </>
                  ) : (
                    paragraph
                  )}
                </p>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default Listening2Unit10;
