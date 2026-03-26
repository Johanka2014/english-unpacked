import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

/* ─── Exercise 1: Abbreviation matching ─── */

const abbreviations = [
  { id: 1, abbr: "CEO", answer: "Chief Executive Officer" },
  { id: 2, abbr: "CIO", answer: "Chief Information Officer" },
  { id: 3, abbr: "PA", answer: "Personal Assistant" },
  { id: 4, abbr: "HRM", answer: "Human Resources Manager" },
  { id: 5, abbr: "Director R&D", answer: "Director of Research and Development" },
  { id: 6, abbr: "PRO", answer: "Public Relations Officer" },
];

/* ─── Exercise 2: Match statements to job titles ─── */

const statements: { letter: string; text: string; answer: number }[] = [
  { letter: "a", text: "I have to supervise and know about what's going on in all the different parts of the company. I have to represent the company in all important decisions.", answer: 3 },
  { letter: "b", text: "I am a qualified accountant and a member of the management team. I monitor my company's financial performance, as well as supervising the budgets for various projects and controlling their costs.", answer: 1 },
  { letter: "c", text: "My job is around the development and training of the managers in the store where I work, and making sure they do their jobs well. Also, I'm responsible for the recruitment of new staff.", answer: 2 },
  { letter: "d", text: "I give advice about all sorts of different things connected with food, such as advice on how to market it, developing new recipes; I also write articles about it.", answer: 7 },
  { letter: "e", text: "My job? It's our computer systems and information technology (IT) in general, and how they affect all parts of our organisation, from customer relations to accounting to recruitment.", answer: 4 },
  { letter: "f", text: "In the past, a job like mine would have been much more secretarial – typing and so on. Now, I'm very involved in every aspect of her work, setting up meetings, organising her travel, dealing with her routine correspondence and generally easing her workload.", answer: 6 },
  { letter: "g", text: "We've got a very big project on at the moment, for a new product, and I have to build up the project teams, provide them with the resources they need, check they're meeting targets and working within their budgets, and particularly that they're meeting deadlines, so that the product is launched on time.", answer: 5 },
];

const jobTitles: { num: number; title: string }[] = [
  { num: 1, title: "Finance Manager" },
  { num: 2, title: "Human Resources Manager" },
  { num: 3, title: "Chief Executive Officer / Managing Director" },
  { num: 4, title: "Chief Information Officer" },
  { num: 5, title: "Director of Research and Development" },
  { num: 6, title: "Personal Assistant" },
  { num: 7, title: "Marketing Consultant" },
];

/* ─── Exercise 3: Find words/phrases (definitions) ─── */

const definitions: { id: number; definition: string; answer: string }[] = [
  { id: 1, definition: "how well parts of the company are doing", answer: "performance" },
  { id: 2, definition: "put new products on sale", answer: "launched" },
  { id: 3, definition: "finding new staff for the company", answer: "recruitment" },
  { id: 4, definition: "person who looks after financial records", answer: "accountant" },
  { id: 5, definition: "reducing, making easier", answer: "easing" },
  { id: 6, definition: "groups of people who work together on a project", answer: "teams" },
  { id: 7, definition: "objectives which a company or team decides it wants to reach", answer: "targets" },
  { id: 8, definition: "money which is reserved for a particular activity", answer: "budgets" },
  { id: 9, definition: "doing things within the correct time", answer: "deadlines" },
];

const statementColors = [
  "bg-blue-50 dark:bg-blue-950/30 border-blue-200 dark:border-blue-800",
  "bg-amber-50 dark:bg-amber-950/30 border-amber-200 dark:border-amber-800",
  "bg-violet-50 dark:bg-violet-950/30 border-violet-200 dark:border-violet-800",
  "bg-orange-50 dark:bg-orange-950/30 border-orange-200 dark:border-orange-800",
  "bg-sky-50 dark:bg-sky-950/30 border-sky-200 dark:border-sky-800",
  "bg-rose-50 dark:bg-rose-950/30 border-rose-200 dark:border-rose-800",
  "bg-emerald-50 dark:bg-emerald-950/30 border-emerald-200 dark:border-emerald-800",
];

const GettingStartedUnit2 = () => {
  /* Ex 1 state */
  const [abbrAnswers, setAbbrAnswers] = useState<Record<number, string>>({});
  const [abbrResults, setAbbrResults] = useState<Record<number, boolean | null>>({});

  /* Ex 2 state */
  const [matchAnswers, setMatchAnswers] = useState<Record<string, string>>({});
  const [matchResults, setMatchResults] = useState<Record<string, boolean | null>>({});

  /* Ex 3 state */
  const [defAnswers, setDefAnswers] = useState<Record<number, string>>({});
  const [defResults, setDefResults] = useState<Record<number, boolean | null>>({});

  const checkAbbreviations = () => {
    const r: Record<number, boolean> = {};
    abbreviations.forEach((a) => {
      const val = (abbrAnswers[a.id] || "").trim().toLowerCase();
      r[a.id] = val === a.answer.toLowerCase();
    });
    setAbbrResults(r);
  };

  const checkMatches = () => {
    const r: Record<string, boolean> = {};
    statements.forEach((s) => {
      r[s.letter] = matchAnswers[s.letter] === String(s.answer);
    });
    setMatchResults(r);
  };

  const checkDefinitions = () => {
    const r: Record<number, boolean> = {};
    definitions.forEach((d) => {
      const val = (defAnswers[d.id] || "").trim().toLowerCase();
      r[d.id] = val === d.answer.toLowerCase();
    });
    setDefResults(r);
  };

  return (
    <div className="space-y-10">
      {/* ─── Exercise 1: Abbreviations ─── */}
      <Card className="service-card">
        <CardContent className="p-6">
          <h3 className="text-2xl font-semibold mb-2 font-merriweather text-foreground">
            Getting Started
          </h3>
          <p className="text-muted-foreground mb-6">
            <strong>1</strong> With a partner, decide what job title each of these abbreviations stands for.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {abbreviations.map((a) => (
              <div key={a.id} className="flex items-center gap-3">
                <span className="font-semibold text-foreground min-w-[40px]">{a.id}.</span>
                <span className="font-bold text-primary min-w-[110px]">{a.abbr}</span>
                <Input
                  placeholder="Full title..."
                  value={abbrAnswers[a.id] || ""}
                  onChange={(e) => setAbbrAnswers((p) => ({ ...p, [a.id]: e.target.value }))}
                  className={`flex-1 ${
                    abbrResults[a.id] === true
                      ? "border-green-500 bg-green-50 dark:bg-green-950/30"
                      : abbrResults[a.id] === false
                      ? "border-red-500 bg-red-50 dark:bg-red-950/30"
                      : ""
                  }`}
                />
              </div>
            ))}
          </div>

          {Object.keys(abbrResults).length > 0 && (
            <div className="mt-4 space-y-1">
              {abbreviations.map((a) =>
                abbrResults[a.id] === false ? (
                  <p key={a.id} className="text-sm text-destructive">
                    {a.abbr}: {a.answer}
                  </p>
                ) : null
              )}
            </div>
          )}

          <Button onClick={checkAbbreviations} className="mt-6 bg-primary hover:bg-primary/90">
            Check Answers
          </Button>
        </CardContent>
      </Card>

      {/* ─── Exercise 2: Match statements to job titles ─── */}
      <Card className="service-card">
        <CardContent className="p-6">
          <h3 className="text-xl font-semibold mb-2 font-merriweather text-foreground">
            Vocabulary
          </h3>
          <p className="text-muted-foreground mb-6">
            <strong>1</strong> Match each of the statements (a–g) below to the job title they describe (1–7 in the box).
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            {/* Left: Statements */}
            <div className="space-y-4">
              {statements.map((s, i) => (
                <div key={s.letter} className={`rounded-xl border p-5 ${statementColors[i % statementColors.length]}`}>
                  <div className="flex items-start gap-3">
                    <span className="font-bold text-primary text-lg">{s.letter}</span>
                    <p className="text-foreground text-sm leading-relaxed italic">'{s.text}'</p>
                  </div>
                  <div className="mt-3 flex items-center gap-2">
                    <span className="text-sm font-medium text-muted-foreground">Job title:</span>
                    <Select
                      value={matchAnswers[s.letter] || ""}
                      onValueChange={(v) => setMatchAnswers((p) => ({ ...p, [s.letter]: v }))}
                    >
                      <SelectTrigger className="w-[60px] h-8">
                        <SelectValue placeholder="#" />
                      </SelectTrigger>
                      <SelectContent>
                        {jobTitles.map((j) => (
                          <SelectItem key={j.num} value={String(j.num)}>
                            {j.num}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    {matchResults[s.letter] === true && <span className="text-green-600 text-sm">✓</span>}
                    {matchResults[s.letter] === false && (
                      <span className="text-destructive text-sm">✗ ({s.answer})</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Right: Job titles reference box */}
            <div className="lg:sticky lg:top-24 self-start">
              <div className="bg-muted/60 rounded-lg p-5 border border-border">
                <h4 className="font-semibold text-foreground mb-3">Job Titles</h4>
                <div className="space-y-2">
                  {jobTitles.map((j) => (
                    <div key={j.num} className="flex items-center gap-2">
                      <span className="font-semibold text-foreground w-6">{j.num}</span>
                      <span className="text-foreground">{j.title}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <Button onClick={checkMatches} className="bg-primary hover:bg-primary/90">
            Check Answers
          </Button>
        </CardContent>
      </Card>

      {/* ─── Exercise 3: Find words/phrases ─── */}
      <Card className="service-card">
        <CardContent className="p-6">
          <p className="text-muted-foreground mb-6">
            <strong>2</strong> Find words or phrases in the statements which mean the following.
          </p>

          <div className="space-y-4">
            {definitions.map((d) => (
              <div key={d.id} className="flex flex-col sm:flex-row sm:items-center gap-2">
                <span className="font-semibold text-foreground min-w-[24px]">{d.id}.</span>
                <span className="text-foreground flex-1">{d.definition}</span>
                <Input
                  placeholder="Word or phrase..."
                  value={defAnswers[d.id] || ""}
                  onChange={(e) => setDefAnswers((p) => ({ ...p, [d.id]: e.target.value }))}
                  className={`sm:w-48 ${
                    defResults[d.id] === true
                      ? "border-green-500 bg-green-50 dark:bg-green-950/30"
                      : defResults[d.id] === false
                      ? "border-red-500 bg-red-50 dark:bg-red-950/30"
                      : ""
                  }`}
                />
                {defResults[d.id] === false && (
                  <span className="text-destructive text-sm">({d.answer})</span>
                )}
                {defResults[d.id] === true && (
                  <span className="text-green-600 text-sm">✓</span>
                )}
              </div>
            ))}
          </div>

          <Button onClick={checkDefinitions} className="mt-6 bg-primary hover:bg-primary/90">
            Check Answers
          </Button>
        </CardContent>
      </Card>

      {/* ─── Exercise 4: Discussion prompt ─── */}
      <Card className="service-card">
        <CardContent className="p-6">
          <p className="text-muted-foreground">
            <strong>3</strong> Work in groups. Write one or two sentences like the ones you read in the previous activities.
            Read your sentence(s) to the rest of the group. The other students should guess what job you are talking about.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default GettingStartedUnit2;
