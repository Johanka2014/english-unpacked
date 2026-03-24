import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { PenLine, Lightbulb, MessageSquare, Save, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";

const STORAGE_KEY = "bb-upper-unit11-writing-proposal";

interface ProposalPhrase {
  text: string;
  isRecommendation: boolean;
}

const proposalPhrases: ProposalPhrase[] = [
  { text: "The purpose of this proposal is to compare Edinburgh and Glasgow as possible locations for BioBok's new R&D facility in Scotland and to recommend which city we should choose.", isRecommendation: false },
  { text: "Although Glasgow has the largest number of students in Scotland,", isRecommendation: false },
  { text: "I suggest that we should recruit people who are already employed in the sector,", isRecommendation: true },
  { text: "and many of the best scientists are in the Edinburgh region.", isRecommendation: false },
  { text: "Property prices appear to be lower in Glasgow.", isRecommendation: false },
  { text: "However, it would be a good idea to try to find suitable premises in the Edinburgh area,", isRecommendation: true },
  { text: "because it contains a 'Science Triangle' with purpose-built laboratories.", isRecommendation: false },
  { text: "Also, the Science Triangle encourages the co-operation and knowledge-sharing we need.", isRecommendation: false },
  { text: "Glasgow has a dynamic and exciting lifestyle with many cultural events.", isRecommendation: false },
  { text: "On the other hand, Edinburgh is one of the cities with the highest quality of life in the UK.", isRecommendation: false },
  { text: "This will help us to attract staff to live and work there.", isRecommendation: false },
  { text: "I strongly recommend that we choose Edinburgh for the reasons given above.", isRecommendation: true },
];

const sectionLabels: { title: string; startIdx: number; endIdx: number }[] = [
  { title: "Introduction", startIdx: 0, endIdx: 0 },
  { title: "Workforce", startIdx: 1, endIdx: 3 },
  { title: "Premises", startIdx: 4, endIdx: 7 },
  { title: "Lifestyle", startIdx: 8, endIdx: 10 },
  { title: "Recommended Course of Action", startIdx: 11, endIdx: 11 },
];

const writingIdeas = [
  "Find premises close to airport.",
  "Design our own building.",
  "Contact Edinburgh University.",
  "Advertise for staff in science magazines.",
];

const WritingUnit11 = () => {
  const [highlighted, setHighlighted] = useState<Set<number>>(new Set());
  const [showAnswers, setShowAnswers] = useState(false);
  const [proposalText, setProposalText] = useState("");
  const [saved, setSaved] = useState(false);

  // Load saved proposal from localStorage
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) setProposalText(saved);
  }, []);

  const toggleHighlight = (idx: number) => {
    if (showAnswers) return;
    setHighlighted((prev) => {
      const next = new Set(prev);
      if (next.has(idx)) next.delete(idx);
      else next.add(idx);
      return next;
    });
  };

  const checkHighlights = () => setShowAnswers(true);

  const resetHighlights = () => {
    setHighlighted(new Set());
    setShowAnswers(false);
  };

  const saveProposal = () => {
    localStorage.setItem(STORAGE_KEY, proposalText);
    setSaved(true);
    toast.success("Your proposal has been saved!");
    setTimeout(() => setSaved(false), 2000);
  };

  const correctPhrases = proposalPhrases
    .map((p, i) => (p.isRecommendation ? i : -1))
    .filter((i) => i !== -1);

  const correctlyHighlighted = correctPhrases.filter((i) => highlighted.has(i)).length;

  return (
    <div className="space-y-8">
      {/* Useful language box */}
      <Card>
        <CardContent className="p-6">
          <div className="flex items-center gap-2 mb-4">
            <Lightbulb className="h-5 w-5 text-primary" />
            <h3 className="text-xl font-semibold font-merriweather text-foreground">
              Making Recommendations
            </h3>
          </div>

          <div className="bg-primary/5 border border-primary/20 rounded-xl p-5 mb-6">
            <h4 className="font-bold text-foreground mb-3">Useful language</h4>
            <p className="text-sm text-muted-foreground mb-2">Making recommendations</p>
            <div className="space-y-2 text-sm text-foreground">
              <p>
                <strong>I suggest that we should</strong> recruit people who are already employed in the sector …
              </p>
              <p>
                <strong>I suggest that we</strong> recruit people who are already employed in the sector …
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Task 1: Highlight recommendation phrases */}
      <Card>
        <CardContent className="p-6">
          <div className="flex items-center gap-2 mb-4">
            <PenLine className="h-5 w-5 text-primary" />
            <h3 className="text-lg font-semibold text-foreground">
              <span className="text-primary font-bold mr-2">1</span>
              Underline phrases in the proposal which introduce recommendations.
            </h3>
          </div>

          <p className="text-sm text-muted-foreground mb-4">
            Click on phrases to highlight them. Then check your answers.
          </p>

          <div className="bg-slate-50 dark:bg-slate-900/30 border border-slate-200 dark:border-slate-700 rounded-lg p-6">
            <h4 className="text-lg font-bold text-primary mb-4">
              Proposal for location of new facilities in Scotland
            </h4>

            {sectionLabels.map((section) => (
              <div key={section.title} className="mb-4">
                <h5 className="text-primary font-bold text-sm uppercase tracking-wide mb-1">
                  {section.title}
                </h5>
                <div className="text-foreground text-sm leading-relaxed">
                  {proposalPhrases.slice(section.startIdx, section.endIdx + 1).map((phrase, localIdx) => {
                    const globalIdx = section.startIdx + localIdx;
                    const isHighlighted = highlighted.has(globalIdx);
                    const isCorrect = phrase.isRecommendation;

                    let className = "cursor-pointer rounded px-0.5 transition-colors ";
                    if (showAnswers) {
                      if (isCorrect && isHighlighted) {
                        className += "bg-green-200 dark:bg-green-900/40 underline decoration-green-600 decoration-2";
                      } else if (isCorrect && !isHighlighted) {
                        className += "bg-yellow-200 dark:bg-yellow-900/40 underline decoration-yellow-600 decoration-2";
                      } else if (!isCorrect && isHighlighted) {
                        className += "bg-red-200 dark:bg-red-900/40 line-through decoration-red-500";
                      }
                    } else if (isHighlighted) {
                      className += "bg-primary/20 underline decoration-primary decoration-2";
                    } else {
                      className += "hover:bg-muted";
                    }

                    return (
                      <span
                        key={globalIdx}
                        className={className}
                        onClick={() => toggleHighlight(globalIdx)}
                      >
                        {phrase.text}{" "}
                      </span>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          {showAnswers && (
            <div className="mt-4 p-3 bg-muted/50 rounded-lg">
              <p className="text-sm text-muted-foreground">
                You found <strong>{correctlyHighlighted}</strong> of{" "}
                <strong>{correctPhrases.length}</strong> recommendation phrases.
                {correctlyHighlighted === correctPhrases.length
                  ? " 🎉 Excellent!"
                  : " Yellow highlights show the ones you missed."}
              </p>
            </div>
          )}

          <div className="flex gap-3 mt-4">
            <Button onClick={checkHighlights} className="bg-primary hover:bg-primary/90">
              Check Answers
            </Button>
            <Button onClick={resetHighlights} variant="outline">
              Reset
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Task 2: Write recommendations */}
      <Card>
        <CardContent className="p-6">
          <div className="flex items-center gap-2 mb-4">
            <MessageSquare className="h-5 w-5 text-primary" />
            <h3 className="text-lg font-semibold text-foreground">
              <span className="text-primary font-bold mr-2">2</span>
              Write other recommendations using the ideas given below. Use different phrases to introduce them.
            </h3>
          </div>

          <ol className="list-decimal list-inside space-y-1 text-muted-foreground mb-6 text-sm">
            {writingIdeas.map((idea, i) => (
              <li key={i}>{idea}</li>
            ))}
          </ol>

          <div className="space-y-3">
            <Textarea
              placeholder="Write your recommendations here using phrases like 'I suggest that we should...', 'It would be a good idea to...', 'I strongly recommend that...'"
              className="min-h-[200px] text-sm"
              value={proposalText}
              onChange={(e) => {
                setProposalText(e.target.value);
                setSaved(false);
              }}
            />
            <div className="flex items-center gap-3">
              <Button onClick={saveProposal} className="gap-2 bg-primary hover:bg-primary/90">
                {saved ? (
                  <>
                    <CheckCircle2 className="h-4 w-4" /> Saved
                  </>
                ) : (
                  <>
                    <Save className="h-4 w-4" /> Save My Work
                  </>
                )}
              </Button>
              <span className="text-xs text-muted-foreground">
                Your work is saved to this browser.
              </span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default WritingUnit11;
