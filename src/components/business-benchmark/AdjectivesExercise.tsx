import { useState, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface Sentence {
  id: number;
  text: string;
  correctAnswers: string[]; // Multiple correct answers possible
}

const AdjectivesExercise = () => {
  const adjectives = [
    "challenging",
    "monotonous",
    "rewarding",
    "fulfilling",
    "interesting",
    "stressful",
    "absorbing",
    "demanding",
  ];

  const sentences: Sentence[] = [
    {
      id: 1,
      text: "My job doesn't vary very much on a day-to-day basis. It's quite ____.",
      correctAnswers: ["monotonous"],
    },
    {
      id: 2,
      text: "It's very ____ to see the children's excited faces at the end of a really good lesson.",
      correctAnswers: ["rewarding", "fulfilling"],
    },
    {
      id: 3,
      text: "I find my job quite ____ when my phone won't stop ringing and everyone wants to ask me something.",
      correctAnswers: ["stressful", "demanding"],
    },
    {
      id: 4,
      text: "My job as an illustrator is very ____. Sometimes hours go by and I don't even notice.",
      correctAnswers: ["absorbing", "interesting"],
    },
    {
      id: 5,
      text: "I'm always learning new things, which makes my job very ____ but also very ____.",
      correctAnswers: ["interesting", "challenging", "rewarding"], // First blank
    },
  ];

  const [selected, setSelected] = useState<Record<number, string>>({});
  const [results, setResults] = useState<Record<number, "correct" | "incorrect" | null>>({});

  const checkAnswers = () => {
    const newResults: Record<number, "correct" | "incorrect"> = {};
    sentences.forEach((sentence) => {
      const userAnswer = selected[sentence.id];
      if (!userAnswer) {
        newResults[sentence.id] = "incorrect";
      } else {
        newResults[sentence.id] = sentence.correctAnswers.some(
          (answer) => answer.toLowerCase() === userAnswer.toLowerCase()
        )
          ? "correct"
          : "incorrect";
      }
    });
    setResults(newResults);
  };

  const resetExercise = () => {
    setSelected({});
    setResults({});
  };

  return (
    <Card className="service-card">
      <CardContent className="p-6">
        <h3 className="text-2xl font-semibold mb-4 font-merriweather text-foreground">
          Adjectives
        </h3>
        <p className="text-muted-foreground mb-6">
          Complete the following sentences with an appropriate adjective from the box. Note that in some sentences, more than one adjective is possible.
        </p>

        <div className="bg-muted p-4 rounded-lg mb-8">
          <div className="flex flex-wrap gap-3">
            {adjectives.map((adj) => (
              <span key={adj} className="px-3 py-1 bg-card rounded font-medium text-foreground">
                {adj}
              </span>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          {sentences.map((sentence) => (
            <div key={sentence.id}>
              <div className="flex flex-col gap-2">
                <span className="text-lg text-foreground">
                  {sentence.id}. {sentence.text.split("____")[0]}
                  <Select value={selected[sentence.id] || ""} onValueChange={(value) => setSelected((prev) => ({ ...prev, [sentence.id]: value }))}>
                    <SelectTrigger className="inline-block w-40 mx-2 h-8">
                      <SelectValue placeholder="Select..." />
                    </SelectTrigger>
                    <SelectContent>
                      {adjectives.map((adj) => (
                        <SelectItem key={adj} value={adj}>
                          {adj}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {sentence.text.split("____")[1]}
                </span>
              </div>
              {results[sentence.id] === "correct" && (
                <span className="text-green-600 text-sm mt-1 ml-7">✓ Correct!</span>
              )}
              {results[sentence.id] === "incorrect" && (
                <span className="text-destructive text-sm mt-1 ml-7">
                  ✗ Incorrect. Possible answer(s): {sentence.correctAnswers.join(", ")}
                </span>
              )}
            </div>
          ))}
        </div>

        <div className="flex gap-3 mt-8">
          <Button onClick={checkAnswers} className="bg-brand-royal hover:bg-brand-navy">
            Check Answers
          </Button>
          <Button onClick={resetExercise} variant="outline">
            Try Again
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default AdjectivesExercise;
