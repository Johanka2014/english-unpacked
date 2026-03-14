import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, BarChart3 } from "lucide-react";

interface QuizQuestion {
  id: number;
  section: "A" | "B" | "C";
  text: string;
  agreeScore: number;
  disagreeScore: number;
}

const quizQuestions: QuizQuestion[] = [
  { id: 1, section: "A", text: "I like taking time to have a chat with colleagues even if this means spending more time at work.", agreeScore: 1, disagreeScore: 0 },
  { id: 2, section: "A", text: "It's nice when people at work celebrate birthdays or special occasions.", agreeScore: 1, disagreeScore: 0 },
  { id: 3, section: "A", text: "I prefer people to fix a time to meet me rather than come to my office or my desk at any time.", agreeScore: 0, disagreeScore: 1 },
  { id: 4, section: "A", text: "I don't like working in an open space with everyone's desk in the same area. I work better in an office of my own.", agreeScore: 0, disagreeScore: 1 },
  { id: 5, section: "A", text: "I like to put photos and personal objects in my workspace.", agreeScore: 1, disagreeScore: 0 },
  { id: 6, section: "B", text: "If I disagree with my boss, I can tell him/her.", agreeScore: 1, disagreeScore: 0 },
  { id: 7, section: "B", text: "I prefer to receive a formal report about my work, not just casual comments.", agreeScore: 0, disagreeScore: 1 },
  { id: 8, section: "B", text: "When my boss gives me something to do, I like to get detailed instructions that I can follow.", agreeScore: 0, disagreeScore: 1 },
  { id: 9, section: "B", text: "It's important for me to feel I am involved in the decision-making process at work.", agreeScore: 1, disagreeScore: 0 },
  { id: 10, section: "B", text: "A company should have standard procedures and policies that everyone must follow, not ones which change with people's situations or personalities.", agreeScore: 0, disagreeScore: 1 },
  { id: 11, section: "C", text: "A company must keep up with the times.", agreeScore: 1, disagreeScore: 0 },
  { id: 12, section: "C", text: "I need to take on challenges to make my job interesting.", agreeScore: 1, disagreeScore: 0 },
  { id: 13, section: "C", text: "When planning a strategy, it is useful to look at what has worked well in the past.", agreeScore: 0, disagreeScore: 1 },
  { id: 14, section: "C", text: "A company should be proud of its traditions.", agreeScore: 0, disagreeScore: 1 },
];

interface ProverbChoice {
  id: 15;
  section: "C";
  text: string;
  options: { label: string; score: number }[];
}

const proverbQuestion: ProverbChoice = {
  id: 15,
  section: "C",
  text: "Which of these proverbs do you prefer?",
  options: [
    { label: "Better safe than sorry.", score: 0 },
    { label: "Nothing ventured, nothing gained.", score: 1 },
  ],
};

const sectionFeedback: Record<string, { high: string; low: string; topic: string }> = {
  A: {
    topic: "Your relationship with colleagues",
    high: "You like to work for a company where employees are friends and can talk about personal matters.",
    low: "You prefer to keep your work life separate from your personal life.",
  },
  B: {
    topic: "Your relationship with managers",
    high: "You like to work in a company where roles between managers and staff are flexible.",
    low: "You like to work in a company where people have clearly defined roles and there is more distance between staff and managers.",
  },
  C: {
    topic: "Your attitude to tradition",
    high: "You like to work in a company which values new ideas and takes serious risks.",
    low: "You prefer the security of a company with strong traditions.",
  },
};

const ReadingCorporateCultureExercise = () => {
  const [answers, setAnswers] = useState<Record<number, "agree" | "disagree">>({});
  const [proverbAnswer, setProverbAnswer] = useState<number | null>(null);
  const [showResults, setShowResults] = useState(false);

  const handleAnswer = (id: number, choice: "agree" | "disagree") => {
    setAnswers((prev) => ({ ...prev, [id]: choice }));
  };

  const getScore = (section: "A" | "B" | "C") => {
    const sectionQs = quizQuestions.filter((q) => q.section === section);
    let score = sectionQs.reduce((sum, q) => {
      const a = answers[q.id];
      if (!a) return sum;
      return sum + (a === "agree" ? q.agreeScore : q.disagreeScore);
    }, 0);
    if (section === "C" && proverbAnswer !== null) {
      score += proverbQuestion.options[proverbAnswer].score;
    }
    return score;
  };

  const allAnswered =
    quizQuestions.every((q) => answers[q.id]) && proverbAnswer !== null;

  const handleShowResults = () => {
    if (allAnswered) setShowResults(true);
  };

  const renderSection = (section: "A" | "B" | "C", title: string) => {
    const sectionQs = quizQuestions.filter((q) => q.section === section);
    return (
      <div key={section} className="space-y-3">
        <h4 className="font-bold text-foreground uppercase tracking-wide text-sm">
          Section {section} — <span className="normal-case font-normal text-muted-foreground">{title}</span>
        </h4>
        {sectionQs.map((q) => (
          <div
            key={q.id}
            className="flex items-start gap-3 p-3 rounded-lg border border-border bg-card hover:bg-muted/30 transition-colors"
          >
            <span className="text-primary font-bold text-sm mt-0.5 shrink-0">{q.id}</span>
            <p className="flex-1 text-foreground text-sm leading-relaxed">{q.text}</p>
            <div className="flex gap-2 shrink-0">
              <Button
                size="sm"
                variant={answers[q.id] === "agree" ? "default" : "outline"}
                className={`w-8 h-8 p-0 text-xs font-bold ${answers[q.id] === "agree" ? "bg-primary text-primary-foreground" : ""}`}
                onClick={() => handleAnswer(q.id, "agree")}
              >
                A
              </Button>
              <Button
                size="sm"
                variant={answers[q.id] === "disagree" ? "default" : "outline"}
                className={`w-8 h-8 p-0 text-xs font-bold ${answers[q.id] === "disagree" ? "bg-primary text-primary-foreground" : ""}`}
                onClick={() => handleAnswer(q.id, "disagree")}
              >
                D
              </Button>
            </div>
          </div>
        ))}
        {section === "C" && (
          <div className="flex items-start gap-3 p-3 rounded-lg border border-border bg-card hover:bg-muted/30 transition-colors">
            <span className="text-primary font-bold text-sm mt-0.5 shrink-0">15</span>
            <div className="flex-1 space-y-2">
              <p className="text-foreground text-sm font-medium">{proverbQuestion.text}</p>
              <div className="flex flex-col gap-2">
                {proverbQuestion.options.map((opt, idx) => (
                  <Button
                    key={idx}
                    size="sm"
                    variant={proverbAnswer === idx ? "default" : "outline"}
                    className={`text-left justify-start text-sm ${proverbAnswer === idx ? "bg-primary text-primary-foreground" : ""}`}
                    onClick={() => setProverbAnswer(idx)}
                  >
                    <span className="font-bold mr-2">{idx === 0 ? "a" : "b"}.</span> {opt.label}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="space-y-8">
      {/* Activity 1 - Quiz */}
      <Card className="service-card">
        <CardContent className="p-6">
          <h3 className="text-2xl font-semibold mb-2 font-merriweather text-foreground">
            1. What kind of company culture would suit you?
          </h3>
          <p className="text-muted-foreground mb-6">
            Read each statement and click <strong>A</strong> for Agree or <strong>D</strong> for Disagree.
          </p>

          <div className="space-y-6">
            {renderSection("A", "Relationship with colleagues")}
            {renderSection("B", "Relationship with managers")}
            {renderSection("C", "Attitude to tradition")}
          </div>

          <Button
            onClick={handleShowResults}
            disabled={!allAnswered}
            className="mt-6 gap-2 bg-primary hover:bg-primary/90"
          >
            <BarChart3 className="h-4 w-4" /> See My Results
          </Button>
        </CardContent>
      </Card>

      {/* Activity 2 - Scores */}
      {showResults && (
        <Card className="service-card border-primary/30">
          <CardContent className="p-6">
            <h3 className="text-2xl font-semibold mb-6 font-merriweather text-foreground flex items-center gap-2">
              <CheckCircle className="h-6 w-6 text-primary" /> 2. Your Results
            </h3>

            <div className="grid gap-6 md:grid-cols-3">
              {(["A", "B", "C"] as const).map((section) => {
                const score = getScore(section);
                const fb = sectionFeedback[section];
                const isHigh = score > 2;
                return (
                  <div
                    key={section}
                    className="rounded-xl border border-border p-5 bg-muted/20 space-y-3"
                  >
                    <div className="flex items-center justify-between">
                      <h4 className="font-bold text-foreground">Section {section}</h4>
                      <span className="text-2xl font-bold text-primary">{score}/5</span>
                    </div>
                    <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                      {fb.topic}
                    </p>
                    <p className="text-sm text-foreground leading-relaxed">
                      {isHigh ? fb.high : fb.low}
                    </p>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Activity 3 - Discussion */}
      {showResults && (
        <Card className="service-card">
          <CardContent className="p-6">
            <h3 className="text-2xl font-semibold mb-4 font-merriweather text-foreground">
              3. Compare and Discuss
            </h3>
            <p className="text-foreground">
              Compare your scores with a partner to see if you would like to work in the same sort of organisation.
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default ReadingCorporateCultureExercise;
