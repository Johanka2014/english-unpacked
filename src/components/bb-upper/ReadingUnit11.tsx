import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CheckCircle2, XCircle, RotateCcw, BookOpen, MessageSquare } from "lucide-react";
import glasgowImg from "@/assets/bb-upper/glasgow-info.png";
import edinburghImg from "@/assets/bb-upper/edinburgh-info.png";

interface NoteItem {
  id: number;
  text: string;
  answer: "Glasgow" | "Edinburgh";
}

const aliciasNotes: NoteItem[] = [
  { id: 1, text: "Can offer excellent scientific facilities.", answer: "Edinburgh" },
  { id: 2, text: "Facilities encourage co-operation with other companies in the sector.", answer: "Edinburgh" },
  { id: 3, text: "Has a high rate of unemployment.", answer: "Glasgow" },
  { id: 4, text: "Has excellent communications.", answer: "Edinburgh" },
  { id: 5, text: "Has more students than anywhere else in Scotland.", answer: "Glasgow" },
  { id: 6, text: "Is the biggest city in Scotland.", answer: "Glasgow" },
  { id: 7, text: "Leads research in biotechnology.", answer: "Edinburgh" },
  { id: 8, text: "Premises would be cheaper.", answer: "Glasgow" },
];

const ReadingUnit11 = () => {
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [results, setResults] = useState<Record<number, "correct" | "incorrect"> | null>(null);

  const handleSelect = (noteId: number, value: string) => {
    setAnswers((prev) => ({ ...prev, [noteId]: value }));
  };

  const checkAnswers = () => {
    const newResults: Record<number, "correct" | "incorrect"> = {};
    aliciasNotes.forEach((note) => {
      newResults[note.id] = answers[note.id] === note.answer ? "correct" : "incorrect";
    });
    setResults(newResults);
  };

  const reset = () => {
    setAnswers({});
    setResults(null);
  };

  const correctCount = results ? Object.values(results).filter((r) => r === "correct").length : 0;

  return (
    <div className="space-y-8">
      {/* Task instructions */}
      <Card>
        <CardContent className="p-6">
          <div className="flex items-center gap-2 mb-4">
            <BookOpen className="h-5 w-5 text-primary" />
            <h3 className="text-xl font-semibold font-merriweather text-foreground">
              Glasgow or Edinburgh?
            </h3>
          </div>

          <div className="space-y-3 mb-6">
            <p className="text-muted-foreground">
              <span className="text-primary font-bold mr-2">1</span>
              Look at these notes which Alicia made about Glasgow and Edinburgh.
            </p>
            <p className="text-muted-foreground">
              <span className="text-primary font-bold mr-2">2</span>
              Read the two print-outs from the Scottish Enterprise website. Which city does each of Alicia's notes refer to?
            </p>
          </div>

          {/* City information cards side by side */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="flex justify-center">
              <img
                src={glasgowImg}
                alt="Why choose Glasgow? — Scottish Enterprise information"
                className="rounded-lg shadow-md max-w-full h-auto"
              />
            </div>
            <div className="flex justify-center">
              <img
                src={edinburghImg}
                alt="Welcome to the Edinburgh Science Triangle — Scottish Enterprise information"
                className="rounded-lg shadow-md max-w-full h-auto"
              />
            </div>
          </div>

          {/* Notepad-style matching exercise */}
          <div className="bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800 rounded-lg p-5 shadow-inner">
            <h4 className="font-semibold text-foreground mb-4 italic" style={{ fontFamily: "Georgia, serif" }}>
              Alicia's Notes
            </h4>
            <div className="space-y-3">
              {aliciasNotes.map((note) => (
                <div
                  key={note.id}
                  className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm"
                  style={{ fontFamily: "Georgia, serif" }}
                >
                  <span className="font-bold text-primary w-6 flex-shrink-0">{note.id}</span>
                  <span className="italic text-foreground flex-1">{note.text}</span>
                  <div className="flex items-center gap-2">
                    <Select
                      value={answers[note.id] || ""}
                      onValueChange={(v) => handleSelect(note.id, v)}
                      disabled={results?.[note.id] === "correct"}
                    >
                      <SelectTrigger
                        className={`w-36 h-8 text-sm ${
                          results?.[note.id] === "correct"
                            ? "border-green-500 bg-green-50 dark:bg-green-950/30"
                            : results?.[note.id] === "incorrect"
                            ? "border-red-500 bg-red-50 dark:bg-red-950/30"
                            : ""
                        }`}
                      >
                        <SelectValue placeholder="Choose city" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Glasgow">Glasgow</SelectItem>
                        <SelectItem value="Edinburgh">Edinburgh</SelectItem>
                      </SelectContent>
                    </Select>
                    {results?.[note.id] === "correct" && (
                      <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0" />
                    )}
                    {results?.[note.id] === "incorrect" && (
                      <XCircle className="h-4 w-4 text-red-500 flex-shrink-0" />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Feedback */}
          {results && correctCount < aliciasNotes.length && (
            <div className="mt-4 p-3 bg-muted/50 rounded-lg">
              <p className="text-sm font-medium text-muted-foreground mb-2">Correct answers for missed items:</p>
              <ul className="text-sm space-y-1">
                {aliciasNotes.map((note) =>
                  results[note.id] === "incorrect" ? (
                    <li key={note.id} className="text-red-600 dark:text-red-400">
                      Note {note.id}: <strong>{note.answer}</strong>
                    </li>
                  ) : null
                )}
              </ul>
            </div>
          )}

          {results && correctCount === aliciasNotes.length && (
            <div className="mt-4 p-4 bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-800 rounded-lg text-center">
              <p className="text-green-700 dark:text-green-300 font-semibold">
                🎉 Excellent! All {aliciasNotes.length} notes matched correctly!
              </p>
            </div>
          )}

          <div className="flex gap-3 mt-6">
            <Button onClick={checkAnswers} className="bg-primary hover:bg-primary/90">
              Check Answers
            </Button>
            <Button onClick={reset} variant="outline" className="gap-2">
              <RotateCcw className="h-4 w-4" /> Reset
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Discussion task */}
      <Card>
        <CardContent className="p-6">
          <div className="flex items-center gap-2 mb-4">
            <MessageSquare className="h-5 w-5 text-primary" />
            <h3 className="text-lg font-semibold text-foreground">
              <span className="text-primary font-bold mr-2">3</span>
              Discussion
            </h3>
          </div>
          <p className="text-muted-foreground mb-3">Work in small groups. Discuss the situation and decide:</p>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li>which information is important when deciding where BioBok should locate its premises</li>
            <li>which city would be more suitable.</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

export default ReadingUnit11;
