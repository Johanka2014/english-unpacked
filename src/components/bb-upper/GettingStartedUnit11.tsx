import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageCircle, Mail } from "lucide-react";
import businessDiscussion from "@/assets/bb-upper/business-discussion.jpg";

const locationFactors = [
  "Will you be able to find staff?",
  "What are communications and infrastructure like?",
  "How close is it to your markets?",
  "Are your suppliers within easy reach?",
  "How will the new location affect your costs?",
  "How will the new location affect the image of the company?",
];

const GettingStartedUnit11 = () => {
  return (
    <div className="space-y-8">
      {/* Task 1 — Email */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xl flex items-center gap-2">
            <Mail className="h-5 w-5 text-primary" />
            Getting Started
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-3">
            <p className="text-sm font-semibold text-foreground">
              <span className="text-primary font-bold mr-2">1</span>
              Work in small groups. Read the following email which Charles Langley, BioBok's CEO, sent to Alicia Flores,
              BioBok's operations manager in Europe.
            </p>

            {/* Email mockup */}
            <div className="max-w-xl mx-auto rounded-lg border-2 border-border overflow-hidden shadow-md">
              {/* Email header bar */}
              <div className="bg-muted/60 px-4 py-2 border-b border-border space-y-1 text-sm">
                <div className="flex gap-2">
                  <span className="font-semibold text-foreground w-16">To:</span>
                  <span className="text-foreground">Alicia Flores, Operations Manager, Europe</span>
                </div>
                <div className="flex gap-2">
                  <span className="font-semibold text-foreground w-16">From:</span>
                  <span className="text-foreground">Charles Langley, CEO, Cape Town</span>
                </div>
                <div className="flex gap-2">
                  <span className="font-semibold text-foreground w-16">Subject:</span>
                  <span className="text-foreground font-medium">Extending our European Operations</span>
                </div>
              </div>

              {/* Email body */}
              <div className="bg-card p-5 text-sm leading-relaxed text-foreground space-y-4">
                <p>Dear Alicia,</p>
                <p>
                  Following recent discussions with divisional heads, the board has taken the decision to open an R&D
                  facility in Scotland, UK, where a lot of ground-breaking biotech work is taking place. We would like
                  the facility to be close to either Edinburgh or Glasgow. Please investigate and write a brief proposal
                  for the board recommending which city we should choose and suggesting our next course of action.
                </p>
                <p>I look forward to hearing from you by the end of next week.</p>
                <div className="pt-2">
                  <p>Charles Langley</p>
                  <p className="text-muted-foreground">CEO</p>
                  <p className="text-muted-foreground">BioBok Cape Town</p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Task 2 — Discussion */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xl flex items-center gap-2">
            <MessageCircle className="h-5 w-5 text-primary" />
            Discussion
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6 items-stretch">
            {/* Left column — discussion text */}
            <div className="space-y-6">
              <div className="space-y-3">
                <p className="text-sm font-semibold text-foreground">
                  <span className="text-primary font-bold mr-2">2</span>
                  Discuss what extra information Alicia needs about BioBok's plans before she starts investigating.
                </p>
              </div>

              <div className="space-y-3">
                <p className="text-sm font-semibold text-foreground">
                  <span className="text-primary font-bold mr-2">3</span>
                  Discuss what factors are important when choosing a location for a new operation. Think about these
                  questions.
                </p>
                <div className="rounded-lg border bg-muted/40 p-5">
                  <ul className="list-disc list-inside space-y-2 text-sm text-foreground">
                    {locationFactors.map((factor, i) => (
                      <li key={i}>{factor}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="hidden md:block">
              <img
                src={businessDiscussion}
                alt="Business professionals discussing options in an office"
                className="w-full h-full object-cover rounded-lg shadow-md"
                loading="lazy"
                width={696}
                height={440}
              />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default GettingStartedUnit11;
