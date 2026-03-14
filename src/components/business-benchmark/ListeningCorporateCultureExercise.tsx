import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { CheckCircle2, XCircle, Volume2, FileText, ChevronDown } from "lucide-react";

const AUDIO_URL = "https://johanka2014.github.io/Bus_Bench_pre_inter/Mod_2/03.mp3";

const cultureStatement = `People talk a lot about corporate culture these days but at Olympus we really pay attention to it. We aim to offer people challenging and rewarding work in a pleasant environment. Employees dress casually on days when there is no customer contact and this helps to create a friendly atmosphere. Developing and maintaining close partnerships with our customers is one of the keys to our success. Our customers appreciate that we offer high quality products at competitive prices and a high level of customer care. They rely on us to come up with solutions for their needs. And of course, customer care is not just about external customers. It is also about how we relate to each other and work together to pool our ideas. In short, Olympus is a great place to work.`;

const cultureClaimQuestions = [
  {
    id: 1,
    claim: "Olympus offers challenging and rewarding work in a pleasant environment.",
    answer: false,
    explanation: "The employees complain that the work environment is not pleasant — they mention problems with the pension scheme and management not listening.",
  },
  {
    id: 2,
    claim: "Employees can dress casually on days with no customer contact.",
    answer: true,
    explanation: "This point is not contradicted in the conversation.",
  },
  {
    id: 3,
    claim: "The company creates a friendly atmosphere.",
    answer: false,
    explanation: "The employees suggest the atmosphere is not friendly — they feel management doesn't care about staff.",
  },
  {
    id: 4,
    claim: "The company maintains close partnerships with customers.",
    answer: true,
    explanation: "This is not directly contradicted by the employees.",
  },
  {
    id: 5,
    claim: "The company offers high quality products at competitive prices.",
    answer: true,
    explanation: "This is not contradicted in the conversation.",
  },
  {
    id: 6,
    claim: "Staff work together to pool their ideas.",
    answer: false,
    explanation: "The employees complain that management doesn't listen to their ideas or involve them in decisions.",
  },
  {
    id: 7,
    claim: "Olympus is a great place to work.",
    answer: false,
    explanation: "The employees clearly disagree — they sound dissatisfied with the company.",
  },
];

const meetingVerbsCorrect = ["arrange", "attend", "cancel", "call", "chair", "organise"];

const attitudeOptions = [
  { id: "a", text: "I think their attitude to the company is very warm." },
  { id: "b", text: "I think they sound enthusiastic about the company they work for." },
  { id: "c", text: "To me, they seem very dissatisfied with the corporate culture." },
  { id: "d", text: "They sound angry about the changes." },
];

const ListeningCorporateCultureExercise = () => {
  const [claimAnswers, setClaimAnswers] = useState<Record<number, boolean | null>>({});
  const [claimChecked, setClaimChecked] = useState(false);
  const [verbInputs, setVerbInputs] = useState<string[]>(["", "", ""]);
  const [verbResults, setVerbResults] = useState<("correct" | "incorrect" | null)[]>([null, null, null]);
  const [verbChecked, setVerbChecked] = useState(false);
  const [selectedAttitude, setSelectedAttitude] = useState<string | null>(null);
  const [attitudeChecked, setAttitudeChecked] = useState(false);

  const handleClaimAnswer = (id: number, value: boolean) => {
    if (claimChecked) return;
    setClaimAnswers((prev) => ({ ...prev, [id]: value }));
  };

  const checkClaims = () => setClaimChecked(true);

  const checkVerbs = () => {
    const results = verbInputs.map((v) => {
      const cleaned = v.trim().toLowerCase();
      if (!cleaned) return "incorrect" as const;
      return meetingVerbsCorrect.some((correct) => correct === cleaned)
        ? ("correct" as const)
        : ("incorrect" as const);
    });
    setVerbResults(results);
    setVerbChecked(true);
  };

  const checkAttitude = () => setAttitudeChecked(true);

  return (
    <div className="space-y-8">
      {/* Audio Player */}
      <Card className="service-card">
        <CardContent className="p-6">
          <div className="flex items-center gap-3 mb-4">
            <Volume2 className="h-6 w-6 text-primary" />
            <h3 className="text-2xl font-semibold font-merriweather text-foreground">Listening: Company Culture</h3>
          </div>
          <p className="text-muted-foreground mb-4">
            You are going to hear two Olympus employees talking about changes to the pension scheme in their company.
          </p>
          <audio controls src={AUDIO_URL} className="w-full" />
        </CardContent>
      </Card>

      {/* Culture Statement Reference */}
      <Card className="service-card">
        <CardContent className="p-6">
          <h3 className="text-xl font-semibold mb-3 font-merriweather text-foreground">Olympus Culture Statement</h3>
          <div className="bg-muted/50 rounded-lg p-4 border border-border">
            <p className="text-foreground leading-relaxed italic">{cultureStatement}</p>
          </div>
          <p className="text-sm text-muted-foreground mt-3">
            <strong>Task tip:</strong> It is not necessary to understand every word of the conversation. Concentrate on the information which is important. Listen for the opposite of the culture statement.
          </p>
        </CardContent>
      </Card>

      {/* Exercise 1: True/False on culture claims */}
      <Card className="service-card">
        <CardContent className="p-6">
          <h3 className="text-xl font-semibold mb-2 font-merriweather text-foreground">
            Exercise 1: What parts of the culture statement are not true?
          </h3>
          <p className="text-muted-foreground mb-6">
            Listen to the conversation and decide — according to the employees, is each part of the culture statement true or not true?
          </p>

          <div className="space-y-4">
            {cultureClaimQuestions.map((q) => {
              const userAnswer = claimAnswers[q.id];
              const isCorrect = claimChecked && userAnswer === q.answer;
              const isWrong = claimChecked && userAnswer !== undefined && userAnswer !== null && userAnswer !== q.answer;

              return (
                <div
                  key={q.id}
                  className={`p-4 rounded-lg border transition-colors ${
                    isCorrect
                      ? "border-green-500 bg-green-50 dark:bg-green-950/30"
                      : isWrong
                      ? "border-red-500 bg-red-50 dark:bg-red-950/30"
                      : "border-border bg-card"
                  }`}
                >
                  <p className="font-medium text-foreground mb-3">"{q.claim}"</p>
                  <div className="flex gap-3">
                    <Button
                      size="sm"
                      variant={userAnswer === true ? "default" : "outline"}
                      onClick={() => handleClaimAnswer(q.id, true)}
                      disabled={claimChecked}
                    >
                      True
                    </Button>
                    <Button
                      size="sm"
                      variant={userAnswer === false ? "default" : "outline"}
                      onClick={() => handleClaimAnswer(q.id, false)}
                      disabled={claimChecked}
                    >
                      Not True
                    </Button>
                  </div>
                  {claimChecked && (
                    <div className="mt-3 flex items-start gap-2">
                      {isCorrect ? (
                        <CheckCircle2 className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                      ) : (
                        <XCircle className="h-5 w-5 text-red-600 shrink-0 mt-0.5" />
                      )}
                      <p className="text-sm text-muted-foreground">{q.explanation}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <Button onClick={checkClaims} className="mt-6 bg-primary hover:bg-primary/90" disabled={claimChecked}>
            Check Answers
          </Button>
        </CardContent>
      </Card>

      {/* Exercise 2: Meeting verb collocations */}
      <Card className="service-card">
        <CardContent className="p-6">
          <h3 className="text-xl font-semibold mb-2 font-merriweather text-foreground">
            Exercise 2: Verbs that collocate with "a meeting"
          </h3>
          <p className="text-muted-foreground mb-4">
            Listen to the recording again and write down three more verbs which collocate with <strong>"a meeting"</strong>.
            (e.g. <em>hold a meeting</em>)
          </p>

          <div className="space-y-3">
            {verbInputs.map((val, i) => (
              <div key={i} className="flex items-center gap-3">
                <span className="text-foreground font-medium w-6">{i + 1}.</span>
                <Input
                  value={val}
                  onChange={(e) => {
                    const next = [...verbInputs];
                    next[i] = e.target.value;
                    setVerbInputs(next);
                  }}
                  placeholder="Type a verb..."
                  className={`max-w-xs ${
                    verbResults[i] === "correct"
                      ? "border-green-500 bg-green-50 dark:bg-green-950/30"
                      : verbResults[i] === "incorrect"
                      ? "border-red-500 bg-red-50 dark:bg-red-950/30"
                      : ""
                  }`}
                  disabled={verbChecked}
                />
                <span className="text-foreground">a meeting</span>
              </div>
            ))}
          </div>

          {verbChecked && (
            <p className="text-sm text-muted-foreground mt-4">
              Possible answers include: <strong>{meetingVerbsCorrect.join(", ")}</strong>
            </p>
          )}

          <Button onClick={checkVerbs} className="mt-6 bg-primary hover:bg-primary/90" disabled={verbChecked}>
            Check Answers
          </Button>
        </CardContent>
      </Card>

      {/* Exercise 3: Describing attitudes */}
      <Card className="service-card">
        <CardContent className="p-6">
          <h3 className="text-xl font-semibold mb-2 font-merriweather text-foreground">
            Exercise 3: Describing the employees' attitude
          </h3>
          <p className="text-muted-foreground mb-4">
            Which of these sentences best describes the employees' attitude towards the company they work for?
          </p>

          <div className="space-y-3">
            {attitudeOptions.map((opt) => {
              const isSelected = selectedAttitude === opt.id;
              const isCorrectAnswer = opt.id === "c" || opt.id === "d";
              const showCorrect = attitudeChecked && isSelected && isCorrectAnswer;
              const showWrong = attitudeChecked && isSelected && !isCorrectAnswer;

              return (
                <button
                  key={opt.id}
                  onClick={() => !attitudeChecked && setSelectedAttitude(opt.id)}
                  disabled={attitudeChecked}
                  className={`w-full text-left p-4 rounded-lg border transition-colors ${
                    showCorrect
                      ? "border-green-500 bg-green-50 dark:bg-green-950/30"
                      : showWrong
                      ? "border-red-500 bg-red-50 dark:bg-red-950/30"
                      : isSelected
                      ? "border-primary bg-primary/10"
                      : attitudeChecked && isCorrectAnswer
                      ? "border-green-500 bg-green-50 dark:bg-green-950/30"
                      : "border-border bg-card hover:border-primary/50"
                  }`}
                >
                  <p className="text-foreground">{opt.text}</p>
                </button>
              );
            })}
          </div>

          <Button onClick={checkAttitude} className="mt-6 bg-primary hover:bg-primary/90" disabled={attitudeChecked}>
            Check Answer
          </Button>

          {attitudeChecked && (
            <p className="text-sm text-muted-foreground mt-4">
              The employees seem very dissatisfied with the corporate culture and sound angry about the changes to the pension scheme. Options C and D are both acceptable answers.
            </p>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default ListeningCorporateCultureExercise;
