import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, XCircle } from "lucide-react";
import MatchingExercise from "@/components/presentations/MatchingExercise";

const statements = [
  "A curriculum vitae should be no longer than two A4 pages.",
  "It is good practice to include a photograph on a curriculum vitae.",
  "It is not necessary for applicants to put their date of birth on their application.",
  "References which candidates supply with their applications could be false so you shouldn't always believe them.",
  "You should enclose copies of certificates and exam results with a job application.",
  "It is a good idea to supply applicants with a job description and person specification before the interview.",
  "Applicants should never wear jeans to an interview.",
  "At an interview it is appropriate to ask female applicants about their plans for starting a family.",
];

const matchPairs = [
  { id: 1, left: "to create rapport", right: "to build a good relationship with someone" },
  { id: 2, left: "to understand their needs", right: "to know what they want" },
  { id: 3, left: "to provide advice", right: "to suggest the best way to do something" },
  { id: 4, left: "to promote a range of services", right: "to attract people's attention to what you offer" },
  { id: 5, left: "to attend an interview", right: "to visit a company to discuss a job" },
  { id: 6, left: "to be notified of the outcome", right: "to be told the results of a decision" },
  { id: 7, left: "to receive a shift allowance", right: "to get extra money for working 'unsociable' hours" },
  { id: 8, left: "to be entitled to a benefits package", right: "to have the right to extra advantages on top of salary" },
];

const StarterUnit2 = () => {
  const [answers, setAnswers] = useState<Record<number, "agree" | "disagree">>({});

  const handleSelect = (index: number, value: "agree" | "disagree") => {
    setAnswers((prev) => ({ ...prev, [index]: value }));
  };

  return (
    <div className="space-y-8">
      {/* Did You Know box */}
      <Card className="border-l-4 border-l-amber-500 bg-amber-50/50">
        <CardContent className="p-5">
          <h4 className="font-semibold text-foreground mb-2">💡 Did You Know?</h4>
          <p className="text-muted-foreground text-sm">
            A <strong>curriculum vitae</strong> or <strong>CV</strong> in the U.K. is called a <strong>résumé</strong> in the U.S. A <strong>reference</strong> is a letter written by someone who knows the applicant (usually the current or a former employer) and can give information about the applicant's abilities. The person who supplies a reference is called a <strong>referee</strong> (U.K.).
          </p>
        </CardContent>
      </Card>

      {/* Activity 1: Agree/Disagree statements */}
      <Card className="service-card">
        <CardContent className="p-6">
          <h3 className="text-2xl font-semibold mb-2 font-merriweather text-foreground">
            Activity 1: Job Applications & Interviews
          </h3>
          <p className="text-muted-foreground mb-6">
            Decide whether you agree or disagree with these statements about job applications and interviews.
          </p>
          <div className="space-y-4">
            {statements.map((statement, index) => (
              <div key={index} className="flex items-start gap-4 p-4 border border-border rounded-lg">
                <span className="font-bold text-muted-foreground min-w-[24px]">{index + 1}.</span>
                <p className="flex-1 text-foreground">{statement}</p>
                <div className="flex gap-2 shrink-0">
                  <Button
                    size="sm"
                    variant={answers[index] === "agree" ? "default" : "outline"}
                    className={answers[index] === "agree" ? "bg-green-600 hover:bg-green-700" : ""}
                    onClick={() => handleSelect(index, "agree")}
                  >
                    <CheckCircle className="h-4 w-4 mr-1" /> Agree
                  </Button>
                  <Button
                    size="sm"
                    variant={answers[index] === "disagree" ? "default" : "outline"}
                    className={answers[index] === "disagree" ? "bg-red-600 hover:bg-red-700" : ""}
                    onClick={() => handleSelect(index, "disagree")}
                  >
                    <XCircle className="h-4 w-4 mr-1" /> Disagree
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Activity 2: Match phrases to definitions */}
      <MatchingExercise
        title="Activity 2: Job Advert Vocabulary"
        description="Match these phrases from a job advert (1-8) to the definitions on the right (a-h)."
        pairs={matchPairs}
        leftLabel="Phrases"
        rightLabel="Definitions"
      />
    </div>
  );
};

export default StarterUnit2;
