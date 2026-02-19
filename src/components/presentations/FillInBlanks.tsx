import { useState, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface Sentence {
  id: number;
  text: string;
  answer: string;
}

interface PresentationGroup {
  presentation: string;
  sentences: Sentence[];
}

interface FillInBlanksProps {
  data: PresentationGroup[];
  audioSources?: string[];
  audioLabels?: string[];
}

const FillInBlanks = ({ data, audioSources, audioLabels }: FillInBlanksProps) => {
  const [results, setResults] = useState<Record<number, "correct" | "incorrect" | null>>({});
  const inputRefs = useRef<Record<number, HTMLInputElement | null>>({});

  const checkAnswers = () => {
    const newResults: Record<number, "correct" | "incorrect"> = {};
    data.forEach((group) => {
      group.sentences.forEach((sentence) => {
        const input = inputRefs.current[sentence.id];
        const value = input?.value?.trim().toLowerCase() || "";
        newResults[sentence.id] = value === sentence.answer.toLowerCase() ? "correct" : "incorrect";
      });
    });
    setResults(newResults);
  };

  const renderSentence = (sentence: Sentence) => {
    const parts = sentence.text.split("____");
    return (
      <div key={sentence.id} className="mb-3">
        <label className="text-muted-foreground inline items-baseline flex-wrap">
          {parts[0]}
          <Input
            ref={(el) => { inputRefs.current[sentence.id] = el; }}
            className={`inline-block w-40 mx-1 ${
              results[sentence.id] === "correct"
                ? "border-green-500 bg-green-50"
                : results[sentence.id] === "incorrect"
                ? "border-red-500 bg-red-50"
                : ""
            }`}
          />
          {parts[1]}
        </label>
        {results[sentence.id] === "correct" && (
          <span className="text-green-600 text-sm ml-2">Correct!</span>
        )}
        {results[sentence.id] === "incorrect" && (
          <span className="text-red-600 text-sm ml-2">
            Incorrect. The answer is "{sentence.answer}".
          </span>
        )}
      </div>
    );
  };

  return (
    <Card className="service-card">
      <CardContent className="p-6">
        <h3 className="text-2xl font-semibold mb-4 font-merriweather text-foreground">Welcoming the Audience</h3>
        <p className="text-muted-foreground mb-6">
          Listen to the audio clips and complete the opening sentences from the presentations below.
        </p>

        {audioSources && audioSources.length > 0 && (
          <div className="space-y-4 mb-8">
            {audioSources.map((src, i) => (
              <div key={i}>
                <label className="font-semibold text-foreground">{audioLabels?.[i] || `Audio ${i + 1}`}</label>
                <audio controls src={src} className="w-full mt-1" />
              </div>
            ))}
          </div>
        )}

        {data.map((group) => (
          <div key={group.presentation} className="mb-6">
            <h4 className="font-semibold text-lg mb-2 text-foreground">{group.presentation}</h4>
            <div className="space-y-4">{group.sentences.map(renderSentence)}</div>
          </div>
        ))}

        <Button onClick={checkAnswers} className="mt-6 bg-brand-royal hover:bg-brand-navy">
          Check Answers
        </Button>
      </CardContent>
    </Card>
  );
};

export default FillInBlanks;
