import { useState, useCallback } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, XCircle, RotateCcw } from "lucide-react";
import DragDropMatching from "@/components/presentations/DragDropMatching";
import DragFillGaps from "@/components/presentations/DragFillGaps";
import OddOneOutExercise from "@/components/bb-upper/OddOneOutExercise";
import CompoundNounsExercise from "@/components/bb-upper/CompoundNounsExercise";

interface JobDescription {
  id: string;
  label: string;
  description: string;
  activities: string[];
  correctTitle: string;
}

const jobDescriptions: JobDescription[] = [
  {
    id: "job-a",
    label: "Job A",
    description:
      "Helps organisations (including business, industry, government and voluntary groups) find out what people think, believe, want, need and do. The findings inform product development and influence the way that products are designed and marketed.",
    activities: [
      "interpreting and developing a brief from a client",
      "designing and writing questionnaires to obtain relevant data",
      "deciding what sample groups, and what numbers, will give the necessary data",
      "calculating the cost of a given research project",
      "training teams of interviewers to carry out the research",
      "conducting and monitoring the progress of surveys",
      "producing written reports together with recommendations for clients",
    ],
    correctTitle: "market research executive",
  },
  {
    id: "job-b",
    label: "Job B",
    description:
      "Organises, motivates and leads teams. Responsible for the combined performance of the team and for making sure that everyone within the team reaches the targets.",
    activities: [
      "recruiting and training staff",
      "supervising, motivating and monitoring the performance of the team",
      "setting budgets/targets",
      "liaising with other line managers",
      "reporting back to senior managers",
      "troubleshooting",
      "keeping abreast of what competitors are doing",
    ],
    correctTitle: "sales manager",
  },
  {
    id: "job-c",
    label: "Job C",
    description:
      "Organises and supervises all of the administrative activities that facilitate the smooth running of an office.",
    activities: [
      "arranging travel, meetings and appointments",
      "delegating work",
      "ordering stationery",
      "dealing with correspondence and writing reports",
      "supervising the work of clerical and secretarial staff",
      "monitoring the workload and work rate of clerical and secretarial staff",
      "controlling the office budget",
      "conducting appraisals",
    ],
    correctTitle: "office manager",
  },
  {
    id: "job-d",
    label: "Job D",
    description:
      "Works closely with a senior manager or executive to provide day-to-day administrative support. Helps the manager to make best use of his/her time by dealing with secretarial and administrative tasks.",
    activities: [
      "screening telephone calls, enquiries and requests and handling them",
      "organising the manager's diary and making appointments",
      "dealing with incoming correspondence",
      "writing letters and reports",
      "liaising with clients, suppliers and other staff",
      "arranging travel and accommodation",
      "taking notes at meetings",
    ],
    correctTitle: "personal assistant (PA)",
  },
];

const jobTitles = [
  "personal assistant (PA)",
  "office manager",
  "sales manager",
  "market research executive",
];

const VocabularyUnit2 = () => {
  const [bank, setBank] = useState([...jobTitles]);
  const [matches, setMatches] = useState<Record<string, string | null>>({});
  const [checked, setChecked] = useState(false);
  const [draggedTitle, setDraggedTitle] = useState<string | null>(null);
  const [dragSource, setDragSource] = useState<string | null>(null);
  const [selectedTitle, setSelectedTitle] = useState<string | null>(null);

  const handleDragStartFromBank = useCallback((title: string) => {
    setDraggedTitle(title);
    setDragSource("bank");
  }, []);

  const handleDragStartFromCard = useCallback((title: string, jobId: string) => {
    setDraggedTitle(title);
    setDragSource(jobId);
  }, []);

  const handleDropOnCard = useCallback(
    (jobId: string) => {
      if (!draggedTitle || checked) return;
      const currentTitle = matches[jobId];
      if (currentTitle) {
        setBank((prev) => [...prev, currentTitle]);
      }
      if (dragSource === "bank") {
        setBank((prev) => {
          const idx = prev.indexOf(draggedTitle);
          if (idx === -1) return prev;
          const updated = [...prev];
          updated.splice(idx, 1);
          return updated;
        });
      } else if (dragSource) {
        setMatches((prev) => ({ ...prev, [dragSource]: null }));
      }
      setMatches((prev) => ({ ...prev, [jobId]: draggedTitle }));
      setDraggedTitle(null);
      setDragSource(null);
    },
    [draggedTitle, dragSource, matches, checked]
  );

  const handleDropOnBank = useCallback(() => {
    if (!draggedTitle || !dragSource || dragSource === "bank" || checked) return;
    setMatches((prev) => ({ ...prev, [dragSource]: null }));
    setBank((prev) => [...prev, draggedTitle]);
    setDraggedTitle(null);
    setDragSource(null);
  }, [draggedTitle, dragSource, checked]);

  // Touch/click support
  const handleTapTitle = useCallback(
    (title: string, source: string) => {
      if (checked) return;
      if (selectedTitle === title) {
        setSelectedTitle(null);
      } else {
        setSelectedTitle(title);
        setDragSource(source);
      }
    },
    [selectedTitle, checked]
  );

  const handleTapCard = useCallback(
    (jobId: string) => {
      if (checked) return;
      if (selectedTitle) {
        const currentTitle = matches[jobId];
        if (currentTitle) {
          setBank((prev) => [...prev, currentTitle]);
        }
        if (dragSource === "bank") {
          setBank((prev) => {
            const idx = prev.indexOf(selectedTitle);
            if (idx === -1) return prev;
            const updated = [...prev];
            updated.splice(idx, 1);
            return updated;
          });
        } else if (dragSource) {
          setMatches((prev) => ({ ...prev, [dragSource]: null }));
        }
        setMatches((prev) => ({ ...prev, [jobId]: selectedTitle }));
        setSelectedTitle(null);
        setDragSource(null);
      } else if (matches[jobId]) {
        // tap a placed title to pick it up
        setSelectedTitle(matches[jobId]);
        setDragSource(jobId);
      }
    },
    [selectedTitle, matches, dragSource, checked]
  );

  const handleCheck = () => setChecked(true);

  const handleReset = () => {
    setBank([...jobTitles]);
    setMatches({});
    setChecked(false);
    setDraggedTitle(null);
    setDragSource(null);
    setSelectedTitle(null);
  };

  const getResult = (jobId: string) => {
    if (!checked) return null;
    const job = jobDescriptions.find((j) => j.id === jobId);
    if (!job) return null;
    return matches[jobId]?.toLowerCase() === job.correctTitle.toLowerCase()
      ? "correct"
      : "incorrect";
  };

  const score = checked
    ? jobDescriptions.filter(
        (j) => matches[j.id]?.toLowerCase() === j.correctTitle.toLowerCase()
      ).length
    : 0;

  return (
    <div className="space-y-8">
      <Card className="service-card">
        <CardContent className="p-6">
          <h3 className="text-2xl font-semibold mb-2 font-merriweather text-foreground">
            Activity 4: Reading Comprehension
          </h3>
          <p className="text-muted-foreground mb-6">
            Match the job titles to their descriptions by dragging the title to the correct box.
          </p>

          {/* Draggable job titles bank */}
          <div
            className="flex flex-wrap gap-3 bg-accent/30 p-4 rounded-lg mb-8"
            onDragOver={(e) => e.preventDefault()}
            onDrop={handleDropOnBank}
          >
            {bank.map((title, i) => (
              <div
                key={`${title}-${i}`}
                draggable={!checked}
                onDragStart={() => handleDragStartFromBank(title)}
                onClick={() => handleTapTitle(title, "bank")}
                className={`px-4 py-2.5 rounded-lg border text-sm font-medium transition-all select-none ${
                  selectedTitle === title
                    ? "border-primary bg-primary text-primary-foreground shadow-md scale-105"
                    : checked
                    ? "border-border bg-muted text-muted-foreground cursor-default"
                    : "border-border bg-card text-foreground cursor-grab hover:border-primary hover:shadow-sm active:cursor-grabbing"
                }`}
              >
                {title}
              </div>
            ))}
            {bank.length === 0 && (
              <span className="text-muted-foreground text-sm italic">All titles placed</span>
            )}
          </div>

          {/* Job description cards - 2x2 grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {jobDescriptions.map((job) => {
              const result = getResult(job.id);
              const matchedTitle = matches[job.id];

              return (
                <div
                  key={job.id}
                  onDragOver={(e) => e.preventDefault()}
                  onDrop={() => handleDropOnCard(job.id)}
                  onClick={() => handleTapCard(job.id)}
                  className={`rounded-xl border-2 border-dashed p-5 transition-all cursor-pointer ${
                    result === "correct"
                      ? "border-green-500 bg-green-50/50 dark:bg-green-950/20"
                      : result === "incorrect"
                      ? "border-red-500 bg-red-50/50 dark:bg-red-950/20"
                      : matchedTitle
                      ? "border-primary/50 bg-primary/5"
                      : "border-border bg-accent/10 hover:border-primary/40"
                  }`}
                >
                  {/* Title drop zone */}
                  <div
                    className={`text-center mb-4 py-2.5 rounded-lg border-2 border-dashed min-h-[44px] flex items-center justify-center ${
                      result === "correct"
                        ? "border-green-500 bg-green-100/50"
                        : result === "incorrect"
                        ? "border-red-500 bg-red-100/50"
                        : matchedTitle
                        ? "border-primary/40 bg-primary/10"
                        : "border-muted-foreground/30 bg-muted/20"
                    }`}
                  >
                    {matchedTitle ? (
                      <span
                        draggable={!checked}
                        onDragStart={(e) => {
                          e.stopPropagation();
                          handleDragStartFromCard(matchedTitle, job.id);
                        }}
                        className={`font-semibold text-foreground ${!checked ? "cursor-grab active:cursor-grabbing" : ""}`}
                      >
                        {matchedTitle}
                        {result === "correct" && (
                          <CheckCircle className="inline-block w-4 h-4 text-green-600 ml-2" />
                        )}
                        {result === "incorrect" && (
                          <XCircle className="inline-block w-4 h-4 text-red-600 ml-2" />
                        )}
                      </span>
                    ) : (
                      <span className="text-sm text-muted-foreground italic">{job.label}</span>
                    )}
                  </div>

                  {/* Show correct answer if wrong */}
                  {result === "incorrect" && (
                    <p className="text-xs text-center text-red-600 mb-3">
                      Correct: <strong>{job.correctTitle}</strong>
                    </p>
                  )}

                  <p className="text-sm text-foreground mb-3">{job.description}</p>

                  <p className="text-sm font-semibold text-foreground mb-2">
                    Typical work activities include:
                  </p>
                  <ul className="list-disc list-inside space-y-1">
                    {job.activities.map((a, i) => (
                      <li key={i} className="text-sm text-muted-foreground">
                        {a}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>

          {/* Actions */}
          <div className="mt-8 flex items-center gap-3">
            {!checked ? (
              <Button onClick={handleCheck} className="bg-brand-royal hover:bg-brand-navy">
                Check Answers
              </Button>
            ) : (
              <>
                <p className="text-sm text-muted-foreground">
                  Score: {score} / {jobDescriptions.length}
                </p>
                <Button variant="outline" size="sm" onClick={handleReset}>
                  <RotateCcw className="w-4 h-4 mr-1" /> Try Again
                </Button>
              </>
            )}
          </div>
        </CardContent>
      </Card>

      <DragDropMatching
        title="Activity 5: Vocabulary"
        instruction="Find words or phrases in the job descriptions from the previous activity which mean the following. Drag each word to its matching definition."
        pairs={[
          { id: 1, left: "= deciding which calls a manager receives", right: "screening telephone calls" },
          { id: 2, left: "= evaluating how well staff are doing", right: "conducting appraisals" },
          { id: 3, left: "= communicating with", right: "liaising" },
          { id: 4, left: "= keeping up to date with", right: "keeping abreast of" },
          { id: 5, left: "= giving work to other staff", right: "delegating work" },
          { id: 6, left: "= amount of work", right: "workload" },
          { id: 7, left: "= instructions (from a client)", right: "brief" },
          { id: 8, left: "= problem solving", right: "troubleshooting" },
          { id: 9, left: "= speed of work", right: "work rate" },
          { id: 10, left: "= objectives, e.g. volume of sales", right: "targets" },
          { id: 11, left: "= paper, pens, etc.", right: "stationery" },
          { id: 12, left: "= results of research", right: "findings" },
        ]}
      />

      <OddOneOutExercise />

      <DragFillGaps
        title="Activity 11: Complete the Text"
        description="Drag the words from the box to complete the text."
        words={["budgets", "deadlines", "launch", "performance", "projects", "targets", "team leaders", "teams"]}
        sentences={[
          {
            id: 1,
            parts: [
              "In my company, nearly all work is done in 1 ",
              { answer: "teams" },
              ", and all our managers are 2 ",
              { answer: "team leaders" },
              ". I found this quite easy to adapt to, because at Business School, we worked a lot together on 3 ",
              { answer: "projects" },
              ", and this got me used to working towards goals or 4 ",
              { answer: "targets" },
              " and meeting 5 ",
              { answer: "deadlines" },
              ". I work in Research and Development of new products, and we get real satisfaction from taking new products through from the original idea to the 6 ",
              { answer: "launch" },
              " perhaps one or two years later. I'm a financial manager, so a lot of my work involves ensuring high 7 ",
              { answer: "performance" },
              " in our projects while they keep within their 8 ",
              { answer: "budgets" },
              " - and that involves strict cost control.",
            ],
          },
        ]}
      />
    </div>
  );
};

export default VocabularyUnit2;
