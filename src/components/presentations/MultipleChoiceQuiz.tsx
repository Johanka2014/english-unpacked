import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface Question {
  id: number;
  text: string;
  options: string[];
  answer: string;
}

interface MultipleChoiceQuizProps {
  title: string;
  description: string;
  questions: Question[];
}

const MultipleChoiceQuiz = ({ title, description, questions }: MultipleChoiceQuizProps) => {
  const [selected, setSelected] = useState<Record<number, string>>({});
  const [results, setResults] = useState<Record<number, "correct" | "incorrect" | null>>({});

  const handleSelect = (questionId: number, option: string) => {
    if (results[questionId]) return;
    setSelected((prev) => ({ ...prev, [questionId]: option }));
  };

  const checkAnswers = () => {
    const newResults: Record<number, "correct" | "incorrect"> = {};
    questions.forEach((q) => {
      const sel = selected[q.id];
      newResults[q.id] = sel === q.answer ? "correct" : "incorrect";
    });
    setResults(newResults);
  };

  return (
    <Card className="service-card">
      <CardContent className="p-6">
        <h3 className="text-2xl font-semibold mb-4 font-merriweather text-foreground">{title}</h3>
        <p className="text-muted-foreground mb-6">{description}</p>

        <div className="space-y-6">
          {questions.map((q) => (
            <div key={q.id} className="p-4 border border-border rounded-lg">
              <p className="italic text-muted-foreground mb-4">"{q.text}"</p>
              <div className="space-y-2">
                {q.options.map((option) => (
                  <label
                    key={option}
                    onClick={() => handleSelect(q.id, option)}
                    className={`flex items-center p-2 rounded-md cursor-pointer transition-all ${
                      results[q.id] && selected[q.id] === option && results[q.id] === "correct"
                        ? "bg-green-50 border border-green-500"
                        : results[q.id] && selected[q.id] === option && results[q.id] === "incorrect"
                        ? "bg-red-50 border border-red-500"
                        : selected[q.id] === option
                        ? "bg-blue-50 border border-brand-royal"
                        : "hover:bg-blue-50/50 border border-transparent"
                    }`}
                  >
                    <input
                      type="radio"
                      name={`grabber-${q.id}`}
                      value={option}
                      checked={selected[q.id] === option}
                      onChange={() => handleSelect(q.id, option)}
                      className="mr-3"
                    />
                    <span>{option}</span>
                  </label>
                ))}
              </div>
              {results[q.id] === "correct" && (
                <p className="text-green-600 text-sm mt-2">Correct!</p>
              )}
              {results[q.id] === "incorrect" && (
                <p className="text-red-600 text-sm mt-2">
                  Not quite. The correct answer is "{q.answer}".
                </p>
              )}
            </div>
          ))}
        </div>

        <Button onClick={checkAnswers} className="mt-6 bg-brand-royal hover:bg-brand-navy">
          Check Answers
        </Button>
      </CardContent>
    </Card>
  );
};

export default MultipleChoiceQuiz;
