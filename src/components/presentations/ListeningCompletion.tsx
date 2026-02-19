import { useState, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface InputPart {
  type: "input";
  answer: string;
  [key: string]: unknown;
}

interface CompletionSentence {
  id: number;
  parts: (string | InputPart)[];
  [key: string]: unknown;
}

interface ListeningCompletionProps {
  title: string;
  description: string;
  sentences: CompletionSentence[];
  audioSources: string[];
}

const ListeningCompletion = ({ title, description, sentences, audioSources }: ListeningCompletionProps) => {
  const [results, setResults] = useState<Record<string, "correct" | "incorrect" | null>>({});
  const inputRefs = useRef<Record<string, HTMLInputElement | null>>({});

  const getInputId = (sentenceId: number, inputIndex: number) => `lc-${sentenceId}-${inputIndex}`;

  const checkAnswers = () => {
    const newResults: Record<string, "correct" | "incorrect"> = {};
    sentences.forEach((sentence) => {
      let inputIndex = 0;
      sentence.parts.forEach((part) => {
        if (typeof part !== "string" && part.type === "input") {
          const inputId = getInputId(sentence.id, inputIndex);
          const input = inputRefs.current[inputId];
          const value = input?.value?.trim().toLowerCase() || "";
          newResults[inputId] = value === part.answer.toLowerCase() ? "correct" : "incorrect";
          inputIndex++;
        }
      });
    });
    setResults(newResults);
  };

  return (
    <Card className="service-card">
      <CardContent className="p-6">
        <h3 className="text-2xl font-semibold mb-4 font-merriweather text-foreground">{title}</h3>
        <p className="text-muted-foreground mb-6">{description}</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          {audioSources.map((src, i) => (
            <audio key={i} controls src={src} className="w-full" />
          ))}
        </div>

        <div className="space-y-4">
          {sentences.map((sentence) => {
            let inputIndex = 0;
            return (
              <p key={sentence.id} className="text-lg leading-relaxed">
                {sentence.parts.map((part, partIdx) => {
                  if (typeof part === "string") {
                    return <span key={partIdx}>{part}</span>;
                  }
                  const currentInputIndex = inputIndex;
                  inputIndex++;
                  const inputId = getInputId(sentence.id, currentInputIndex);
                  return (
                    <Input
                      key={partIdx}
                      ref={(el) => { inputRefs.current[inputId] = el; }}
                      className={`inline-block w-40 mx-1 ${
                        results[inputId] === "correct"
                          ? "border-green-500 bg-green-50"
                          : results[inputId] === "incorrect"
                          ? "border-red-500 bg-red-50"
                          : ""
                      }`}
                    />
                  );
                })}
              </p>
            );
          })}
        </div>

        <Button onClick={checkAnswers} className="mt-6 bg-brand-royal hover:bg-brand-navy">
          Check Answers
        </Button>
      </CardContent>
    </Card>
  );
};

export default ListeningCompletion;
