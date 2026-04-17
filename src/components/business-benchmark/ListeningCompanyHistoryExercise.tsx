import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle2, XCircle, FileText } from "lucide-react";
import josephRowntree from "@/assets/joseph-rowntree.jpg";

const ANSWERS: Record<string, string[]> = {
  q2: ["4000", "4,000"],
  q3: ["education", "school", "schooling"],
  q4: ["library", "a library"],
  q5: ["dentist", "a dentist", "free dentist", "dental care"],
  q6: ["pension", "pension fund", "a pension fund", "pension scheme"],
  q7: ["1969"],
  q8: ["1988"],
};

const QUESTIONS = [
  { id: "q2", label: "2. Number of workers in 1900:" },
  { id: "q3", label: "3. ____________ for staff under 17" },
  { id: "q4", label: "4. ____________ on site" },
  { id: "q5", label: "5. ____________" },
  { id: "q6", label: "6. ____________ which he set up in 1906" },
  { id: "q7", label: "7. Year that Rowntree's merged with Mackintosh:" },
  { id: "q8", label: "8. Year that Nestlé bought the company:" },
];

const ListeningCompanyHistoryExercise = () => {
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [checked, setChecked] = useState(false);

  const isCorrect = (id: string) => {
    const val = (answers[id] || "").trim().toLowerCase();
    return ANSWERS[id].some((a) => a.toLowerCase() === val);
  };

  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle className="font-serif text-2xl">Joseph Rowntree</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6 items-start">
            <img
              src={josephRowntree}
              alt="Portrait of Joseph Rowntree, 19th century English confectionery manufacturer"
              loading="lazy"
              width={512}
              height={640}
              className="w-4/5 mx-auto rounded-lg shadow-md"
            />
            <div className="space-y-3 text-foreground">
              <h3 className="font-semibold text-lg">Company background</h3>
              <p>
                Rowntree's were a famous company who made confectionery products. The Rowntree family started
                the company in the 19th Century in York, England. They are now part of the Nestlé Group.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="font-serif text-xl">1. Before you listen — Discuss with a partner</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3 text-foreground">
          <p>
            You will hear part of a lecture about Joseph Rowntree, the original director of the company.
            Read the lecture notes below. Numbers 3–6 list benefits for employees. Discuss what you think the
            missing benefits could be.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="font-serif text-xl">🎧 Audio — Track 04</CardTitle>
        </CardHeader>
        <CardContent>
          <audio controls className="w-full" preload="metadata">
            <source src="/audio/bb-company-history-listening.mp3" type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="font-serif text-xl">2. Listen and complete the lecture notes</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="rounded-md bg-muted/40 p-4">
            <p className="font-medium">
              Number of workers in 1869: <span className="line-through text-muted-foreground">30</span>{" "}
              <span className="text-primary font-semibold">200</span>
            </p>
          </div>

          {QUESTIONS.map((q) => {
            const correct = checked && isCorrect(q.id);
            const wrong = checked && !isCorrect(q.id);
            return (
              <div key={q.id} className="flex flex-col sm:flex-row sm:items-center gap-3">
                <label className="sm:w-2/3 text-foreground">{q.label}</label>
                <div className="flex items-center gap-2 sm:w-1/3">
                  <Input
                    value={answers[q.id] || ""}
                    onChange={(e) =>
                      setAnswers((prev) => ({ ...prev, [q.id]: e.target.value }))
                    }
                    className={
                      correct
                        ? "border-green-500 bg-green-50 dark:bg-green-950/20"
                        : wrong
                        ? "border-destructive bg-destructive/10"
                        : ""
                    }
                    placeholder="Your answer"
                  />
                  {correct && <CheckCircle2 className="h-5 w-5 text-green-600 shrink-0" />}
                  {wrong && <XCircle className="h-5 w-5 text-destructive shrink-0" />}
                </div>
              </div>
            );
          })}

          <div className="flex flex-wrap gap-3 pt-2">
            <Button onClick={() => setChecked(true)} className="bg-brand-royal hover:bg-brand-navy">
              Check answers
            </Button>
            <Button
              variant="outline"
              onClick={() => {
                setAnswers({});
                setChecked(false);
              }}
            >
              Reset
            </Button>
          </div>

          {checked && (
            <div className="mt-4 rounded-md bg-muted/40 p-4 text-sm">
              <p className="font-semibold mb-2">Suggested answers:</p>
              <ul className="space-y-1 text-muted-foreground">
                <li>2. 4,000 workers</li>
                <li>3. Education (for staff under 17)</li>
                <li>4. Library (on site)</li>
                <li>5. Dentist (free dental care)</li>
                <li>6. Pension fund (set up in 1906)</li>
                <li>7. 1969 — merger with Mackintosh</li>
                <li>8. 1988 — bought by Nestlé</li>
              </ul>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default ListeningCompanyHistoryExercise;
