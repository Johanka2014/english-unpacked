import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2, XCircle, RotateCcw, BookOpen } from "lucide-react";

const paragraphs = [
  {
    id: "A",
    title: "A Bank Loan",
    text: "Banks like to use assets such as premises, motor vehicles or equipment as collateral (or security) against loans. Banks don't care whether or not your business has great profit potential. They are only interested in the business's ability to cover the principal and interest payments.",
  },
  {
    id: "B",
    title: "Friends and Family",
    text: "If your friends and family express an interest in helping you with your business financing, try to persuade them in a professional way. Make a presentation in exactly the same way as you would to a bank. Don't be embarrassed to show financial statements, tax returns or whatever else they want to see. Do anything to get that money! You should prepare a written agreement about any loans. If you don't, bitter arguments will damage the relationship eventually.",
  },
  {
    id: "C",
    title: "Venture Capital",
    text: "Some venture capital firms will consider financing a start-up. However, they will only be interested in entrepreneurs who have experience of successfully starting up businesses. They are best known for financing high-tech firms, but they do finance other types of businesses.",
  },
];

const statements: { id: number; text: string; answer: "A" | "B" | "C" }[] = [
  { id: 1, text: "As long as you can pay your debts, they are not worried about how profitable your company is.", answer: "A" },
  { id: 2, text: "Do not accept their money without signing a formal contract.", answer: "B" },
  { id: 3, text: "Share information openly with them in order to get funding from them.", answer: "B" },
  { id: 4, text: "They have a reputation for financing technology companies.", answer: "C" },
  { id: 5, text: "They will not lend money to people starting a business for the first time.", answer: "C" },
  { id: 6, text: "You must have property to guarantee the loan.", answer: "A" },
];

const options: ("A" | "B" | "C")[] = ["A", "B", "C"];

const ReadingUnit10 = () => {
  const [selections, setSelections] = useState<Record<number, "A" | "B" | "C" | null>>({});
  const [checked, setChecked] = useState(false);

  const handleSelect = (statementId: number, option: "A" | "B" | "C") => {
    if (checked) return;
    setSelections((prev) => ({ ...prev, [statementId]: option }));
  };

  const checkAnswers = () => setChecked(true);

  const reset = () => {
    setSelections({});
    setChecked(false);
  };

  const allSelected = statements.every((s) => selections[s.id]);
  const correctCount = checked
    ? statements.filter((s) => selections[s.id] === s.answer).length
    : 0;

  return (
    <div className="space-y-8">
      {/* Discussion warm-up */}
      <Card className="service-card">
        <CardContent className="p-6">
          <div className="flex items-center gap-2 mb-3">
            <BookOpen className="h-5 w-5 text-primary" />
            <h3 className="text-xl font-semibold font-merriweather text-foreground">
              Exercise 1: Discussion
            </h3>
          </div>
          <p className="text-muted-foreground mb-3">
            Look at these ways of raising money to start a company and discuss:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
            {["A Bank Loan", "Friends and Family", "Venture Capital"].map((way) => (
              <div key={way} className="bg-primary/10 rounded-lg p-3 text-center font-medium text-foreground">
                {way}
              </div>
            ))}
          </div>
          <ul className="list-disc list-inside text-muted-foreground space-y-1 text-sm">
            <li>Which are the most popular?</li>
            <li>Which are the safest?</li>
            <li>Which are the easiest to obtain?</li>
            <li>Do you know any other ways of raising finance?</li>
          </ul>
        </CardContent>
      </Card>

      {/* Reading paragraphs */}
      <Card className="service-card">
        <CardContent className="p-6">
          <h3 className="text-xl font-semibold font-merriweather text-foreground mb-4">
            Exercise 3: Read and Match
          </h3>
          <p className="text-muted-foreground mb-6">
            Read these three paragraphs about how to obtain finance for business start-ups, then
            match each statement below to the correct paragraph (<strong>A</strong>,{" "}
            <strong>B</strong>, or <strong>C</strong>).
          </p>

          <div className="space-y-4 mb-8">
            {paragraphs.map((p) => (
              <div key={p.id} className="border border-border rounded-lg p-4">
                <h4 className="font-semibold text-foreground mb-2">
                  <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-primary text-primary-foreground text-sm font-bold mr-2">
                    {p.id}
                  </span>
                  {p.title}
                </h4>
                <p className="text-muted-foreground text-sm leading-relaxed">{p.text}</p>
              </div>
            ))}
          </div>

          {/* Statements matching */}
          <h4 className="font-semibold text-foreground mb-4">
            Match each statement to paragraph A, B, or C:
          </h4>
          <div className="space-y-3">
            {statements.map((s) => {
              const selected = selections[s.id];
              const isCorrect = checked && selected === s.answer;
              const isWrong = checked && selected != null && selected !== s.answer;

              return (
                <div
                  key={s.id}
                  className={`border rounded-lg p-4 transition-colors ${
                    isCorrect
                      ? "border-green-500 bg-green-50 dark:bg-green-950/30"
                      : isWrong
                      ? "border-red-500 bg-red-50 dark:bg-red-950/30"
                      : "border-border"
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <span className="text-sm font-bold text-muted-foreground mt-0.5">{s.id}.</span>
                    <p className="text-foreground text-sm flex-1">{s.text}</p>
                    <div className="flex gap-1.5 flex-shrink-0">
                      {options.map((opt) => (
                        <button
                          key={opt}
                          onClick={() => handleSelect(s.id, opt)}
                          disabled={checked}
                          className={`w-8 h-8 rounded-md text-sm font-semibold transition-colors border ${
                            selected === opt
                              ? checked
                                ? opt === s.answer
                                  ? "bg-green-500 text-white border-green-500"
                                  : "bg-red-500 text-white border-red-500"
                                : "bg-primary text-primary-foreground border-primary"
                              : "border-border text-muted-foreground hover:bg-muted"
                          }`}
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                    {isCorrect && <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0" />}
                    {isWrong && (
                      <span className="text-xs text-red-600 font-medium flex-shrink-0">
                        → {s.answer}
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {checked && (
            <div
              className={`mt-4 p-4 rounded-lg text-center font-semibold ${
                correctCount === statements.length
                  ? "bg-green-50 dark:bg-green-950/30 text-green-700 dark:text-green-300 border border-green-200 dark:border-green-800"
                  : "bg-muted/50 text-foreground"
              }`}
            >
              {correctCount === statements.length
                ? "🎉 All correct! Well done!"
                : `You got ${correctCount} out of ${statements.length} correct.`}
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
    </div>
  );
};

export default ReadingUnit10;
