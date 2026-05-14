import { useState, useCallback } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface Gap {
  answer: string;
  num: number;
}

type Part = string | Gap;

interface ReportSection {
  label: string;
  parts: Part[];
}

const wordBank = [
  "to detail",
  "relationships",
  "delegate",
  "decrease",
  "skills",
  "sickness",
  "overtime",
  "communicate",
  "cultural",
  "production director",
  "leadership",
  "training manager",
];

const sections: ReportSection[] = [
  {
    label: "Strengths:",
    parts: [
      "Attention ",
      { answer: "to detail", num: 1 },
      ", excellent. Accuracy, good.\nPeter feels he doesn't have any problems with staff ",
      { answer: "relationships", num: 2 },
      ".\nWife now in employment of her choice.",
    ],
  },
  {
    label: "Weaknesses:",
    parts: [
      "Peter doesn't always ",
      { answer: "delegate", num: 3 },
      " to team members and this causes overwork for himself and thus a ",
      { answer: "decrease", num: 4 },
      " in output. Communication ",
      { answer: "skills", num: 5 },
      " need attention.",
    ],
  },
  {
    label: "Problems:",
    parts: [
      "Decrease in output caused by Antonio's ",
      { answer: "sickness", num: 6 },
      ", inability of other team members to work ",
      { answer: "overtime", num: 7 },
      ", shortage of staff in the team. Peter didn't feel able to ",
      { answer: "communicate", num: 8 },
      " with me. Antonio needs ",
      { answer: "cultural", num: 9 },
      " training (as does all the team!).",
    ],
  },
  {
    label: "Action:",
    parts: [
      "1  Speak to ",
      { answer: "production director", num: 10 },
      " about:\n   • temporary transfer of member of staff to Peter's team.\n   • ",
      { answer: "leadership", num: 11 },
      " skills and time management training for Peter.\n2  Talk to ",
      { answer: "training manager", num: 12 },
      " about cultural training for all of Peter's team.",
    ],
  },
];

const AppraisalReportActivity = () => {
  const [bank, setBank] = useState([...wordBank]);
  const [filled, setFilled] = useState<Record<number, string | null>>({});
  const [results, setResults] = useState<Record<number, "correct" | "incorrect" | null>>({});
  const [draggedWord, setDraggedWord] = useState<string | null>(null);
  const [dragSource, setDragSource] = useState<string | null>(null);

  const handleDropOnGap = useCallback(
    (num: number, answer: string) => {
      if (!draggedWord) return;
      const current = filled[num];
      if (current) setBank((p) => [...p, current]);
      if (dragSource === "bank") {
        setBank((prev) => {
          const idx = prev.indexOf(draggedWord);
          if (idx === -1) return prev;
          const updated = [...prev];
          updated.splice(idx, 1);
          return updated;
        });
      } else if (dragSource) {
        const srcNum = Number(dragSource);
        setFilled((p) => ({ ...p, [srcNum]: null }));
      }
      setFilled((p) => ({ ...p, [num]: draggedWord }));
      setDraggedWord(null);
      setDragSource(null);
    },
    [draggedWord, dragSource, filled]
  );

  const handleDropOnBank = useCallback(() => {
    if (!draggedWord || !dragSource || dragSource === "bank") return;
    const srcNum = Number(dragSource);
    setFilled((p) => ({ ...p, [srcNum]: null }));
    setBank((p) => [...p, draggedWord]);
    setDraggedWord(null);
    setDragSource(null);
  }, [draggedWord, dragSource]);

  const checkAnswers = () => {
    const newResults: Record<number, "correct" | "incorrect"> = {};
    sections.forEach((s) =>
      s.parts.forEach((p) => {
        if (typeof p !== "string") {
          newResults[p.num] =
            (filled[p.num] || "").toLowerCase() === p.answer.toLowerCase()
              ? "correct"
              : "incorrect";
        }
      })
    );
    setResults(newResults);
  };

  const renderGap = (g: Gap) => {
    const word = filled[g.num];
    const status = results[g.num];
    return (
      <span
        onDragOver={(e) => e.preventDefault()}
        onDrop={() => handleDropOnGap(g.num, g.answer)}
        className={`inline-flex items-end justify-center align-baseline mx-1 min-w-[140px] px-2 py-0.5 border-b-2 transition-colors ${
          status === "correct"
            ? "border-green-600 bg-green-50"
            : status === "incorrect"
            ? "border-red-600 bg-red-50"
            : "border-slate-500 bg-white/60"
        }`}
      >
        {word ? (
          <span
            draggable
            onDragStart={() => {
              setDraggedWord(word);
              setDragSource(String(g.num));
            }}
            className="cursor-grab active:cursor-grabbing italic"
          >
            {word}
          </span>
        ) : (
          <span className="opacity-0">_</span>
        )}
        <sup className="ml-1 text-[10px] text-blue-700 font-semibold">{g.num}</sup>
      </span>
    );
  };

  return (
    <Card className="service-card">
      <CardContent className="p-6">
        <h3 className="text-2xl font-semibold mb-4 font-merriweather text-foreground">
          Activity 7: Complete the Appraisal Report
        </h3>
        <p className="text-muted-foreground mb-6">
          Listen to the interview again and drag the words below into the correct gaps in the
          appraisal report.
        </p>

        {/* Word bank */}
        <div
          className="flex flex-wrap gap-2 bg-blue-50 p-4 rounded-lg mb-6 border border-blue-100"
          onDragOver={(e) => e.preventDefault()}
          onDrop={handleDropOnBank}
        >
          {bank.map((word, i) => (
            <div
              key={`${word}-${i}`}
              draggable
              onDragStart={() => {
                setDraggedWord(word);
                setDragSource("bank");
              }}
              className="p-2 rounded-md shadow-sm bg-white border border-border cursor-grab active:cursor-grabbing text-sm"
            >
              {word}
            </div>
          ))}
          {bank.length === 0 && (
            <span className="text-muted-foreground text-sm italic">All words placed</span>
          )}
        </div>

        {/* Formal report */}
        <div className="bg-slate-50 border border-slate-300 rounded-md p-6 md:p-8 shadow-inner font-serif text-slate-800">
          {/* Header */}
          <div className="flex items-end justify-between border-b-2 border-slate-700 pb-2 mb-5">
            <h4 className="text-xl font-bold tracking-wide">Appraisal Report</h4>
            <span className="text-2xl font-extrabold italic text-blue-700 tracking-tight">
              Aus-pharma AG
            </span>
          </div>

          {/* Meta grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-1 mb-6 text-sm">
            <p>
              <span className="font-bold">Name:</span> Peter Grahame
            </p>
            <p>
              <span className="font-bold">Job title:</span> Team Leader (bottling)
            </p>
            <p>
              <span className="font-bold">Appraiser:</span> Gaby Meyer
            </p>
            <p>
              <span className="font-bold">Location:</span> Vienna
            </p>
            <p>
              <span className="font-bold">Date:</span> 12 December 20..
            </p>
            <p>
              <span className="font-bold">Date of last appraisal:</span> na
            </p>
          </div>

          {/* Sections */}
          <div className="space-y-5 text-[15px] leading-8">
            {sections.map((section) => (
              <div key={section.label}>
                <p className="font-bold mb-1">{section.label}</p>
                <p className="whitespace-pre-line">
                  {section.parts.map((part, idx) =>
                    typeof part === "string" ? (
                      <span key={idx}>{part}</span>
                    ) : (
                      <span key={idx}>{renderGap(part)}</span>
                    )
                  )}
                </p>
              </div>
            ))}
          </div>

          {/* Signatures */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10 pt-4 border-t border-slate-300 text-sm">
            <p>
              <span className="font-bold">Signed:</span> Appraiser{" "}
              <span className="inline-block border-b border-slate-500 w-40 align-bottom" />
            </p>
            <p>
              Appraisee{" "}
              <span className="inline-block border-b border-slate-500 w-40 align-bottom" />
            </p>
          </div>
        </div>

        <Button onClick={checkAnswers} className="mt-6 bg-brand-royal hover:bg-brand-navy">
          Check Answers
        </Button>
      </CardContent>
    </Card>
  );
};

export default AppraisalReportActivity;
