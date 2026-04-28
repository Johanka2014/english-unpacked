import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CheckCircle2, XCircle, RotateCcw, MessageCircle, Presentation } from "lucide-react";
import room from "@/assets/bb-upper/unit12-presenter-pointing.jpg";
import presenter from "@/assets/bb-upper/unit12-presenter.jpg";
import dataProjector from "@/assets/bb-upper/unit12-data-projector.jpg";
import laptop from "@/assets/bb-upper/unit12-laptop.jpg";
import screen from "@/assets/bb-upper/unit12-screen.jpg";
import flipchartWriting from "@/assets/bb-upper/unit12-flipchart-writing.jpg";
import flipchart from "@/assets/bb-upper/unit12-flipchart.jpg";
import handouts from "@/assets/bb-upper/unit12-handouts.jpg";
import samples from "@/assets/bb-upper/unit12-product-samples.jpg";
import remote from "@/assets/bb-upper/unit12-remote-control.jpg";
import speakers from "@/assets/bb-upper/unit12-speakers.jpg";

const OPTIONS = [
  "data projector",
  "flipchart",
  "handouts",
  "laptop",
  "pointer",
  "remote control",
  "samples of product",
  "screen",
  "speakers",
];

const items: { id: string; img: string; answer: string; alt: string }[] = [
  { id: "i1", img: flipchart, answer: "Laptop", alt: "Laptop" },
  { id: "i2", img: laptop, answer: "laptop", alt: "Laptop" },
  { id: "i3", img: screen, answer: "screen", alt: "Projection screen" },
  { id: "i4", img: flipchartWriting, answer: "flipchart", alt: "Hand writing on a flipchart" },
  { id: "i5", img: flipchart, answer: "flipchart", alt: "Flipchart on an easel" },
  { id: "i6", img: handouts, answer: "handouts", alt: "Handouts" },
  { id: "i7", img: samples, answer: "samples of product", alt: "Product samples" },
  { id: "i8", img: remote, answer: "remote control", alt: "Remote control" },
  { id: "i9", img: speakers, answer: "speakers", alt: "Speakers" },
];

const GettingStartedUnit12 = () => {
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [results, setResults] = useState<Record<string, "correct" | "incorrect" | null>>({});
  const [show, setShow] = useState(false);

  const check = () => {
    const r: Record<string, "correct" | "incorrect"> = {};
    items.forEach((it) => {
      r[it.id] = (answers[it.id] || "").toLowerCase() === it.answer.toLowerCase() ? "correct" : "incorrect";
    });
    setResults(r);
    setShow(true);
  };

  const reset = () => {
    setAnswers({});
    setResults({});
    setShow(false);
  };

  const correct = Object.values(results).filter((v) => v === "correct").length;

  return (
    <div className="space-y-8">
      {/* Discussion */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xl flex items-center gap-2">
            <MessageCircle className="h-5 w-5 text-primary" />
            Getting Started
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-3">
            <p className="text-sm font-semibold text-foreground">
              <span className="text-primary font-bold mr-2">1</span>
              Discuss the following in pairs.
            </p>
            <div className="rounded-lg border bg-muted/40 p-5">
              <ol className="list-decimal list-inside space-y-2 text-sm text-foreground">
                <li>What is happening in the pictures?</li>
                <li>Do you ever have to give presentations? What about?</li>
              </ol>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <img src={room} alt="A businessman pointing to a presentation board" className="rounded-lg shadow-md w-full h-56 object-cover" loading="lazy" />
            <img src={presenter} alt="A man giving a presentation at a whiteboard" className="rounded-lg shadow-md w-full h-56 object-cover" loading="lazy" />
          </div>
        </CardContent>
      </Card>

      {/* Labelling exercise */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xl flex items-center gap-2">
            <Presentation className="h-5 w-5 text-primary" />
            Presentation Equipment
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-sm font-semibold text-foreground">
            <span className="text-primary font-bold mr-2">2</span>
            Label the objects with the words from the box.
          </p>

          <div className="flex flex-wrap gap-2 p-4 rounded-lg bg-primary/5 border border-primary/20">
            {OPTIONS.map((o) => (
              <span key={o} className="px-3 py-1 bg-background border border-border rounded-full text-sm text-foreground">
                {o}
              </span>
            ))}
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
            {items.map((it, idx) => (
              <div key={it.id} className="rounded-lg border border-border overflow-hidden bg-card shadow-sm">
                <div className="aspect-square bg-muted/30 flex items-center justify-center p-2">
                  <img src={it.img} alt={it.alt} className="max-h-full max-w-full object-contain" loading="lazy" />
                </div>
                <div className="p-3 border-t border-border">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-bold text-primary">{idx + 1}</span>
                    <Select
                      value={answers[it.id] || ""}
                      onValueChange={(v) => setAnswers((p) => ({ ...p, [it.id]: v }))}
                      disabled={results[it.id] === "correct"}
                    >
                      <SelectTrigger
                        className={`h-9 text-sm ${
                          results[it.id] === "correct"
                            ? "border-green-500 bg-green-50 dark:bg-green-950/30"
                            : results[it.id] === "incorrect"
                              ? "border-red-500 bg-red-50 dark:bg-red-950/30"
                              : ""
                        }`}
                      >
                        <SelectValue placeholder="Choose…" />
                      </SelectTrigger>
                      <SelectContent>
                        {OPTIONS.map((o) => (
                          <SelectItem key={o} value={o}>
                            {o}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    {results[it.id] === "correct" && <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0" />}
                    {results[it.id] === "incorrect" && <XCircle className="h-4 w-4 text-red-500 flex-shrink-0" />}
                  </div>
                  {show && results[it.id] === "incorrect" && (
                    <p className="text-xs text-red-600 dark:text-red-400">Answer: <strong>{it.answer}</strong></p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {show && (
            <div className="p-3 rounded-lg bg-muted/50 text-center text-sm">
              Score: <strong>{correct}/{items.length}</strong>
            </div>
          )}

          <div className="flex gap-3">
            <Button onClick={check} className="bg-primary hover:bg-primary/90">Check Answers</Button>
            <Button onClick={reset} variant="outline" className="gap-2">
              <RotateCcw className="h-4 w-4" /> Reset
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default GettingStartedUnit12;
