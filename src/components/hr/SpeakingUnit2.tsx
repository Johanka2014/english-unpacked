import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageCircle, Phone, Users, Scale } from "lucide-react";

const appointmentPhrases = [
  "What date would be convenient for you?",
  "What time would suit you?",
  "Would Monday at 10.30 suit you?",
  "Is the 5th of March at 6 p.m. convenient?",
  "How about 10 a.m.?",
  "Tuesday the 8th of July would be good for me.",
  "Monday's bad for me, I'm afraid.",
  "That sounds fine.",
  "Yes, that would be good for me.",
  "I think that should be possible.",
];

const interviewQuestionTypes = [
  { category: "Open questions", examples: ["What…?", "Why…?", "How…?", "What experience have you had…?", "How do you go about dealing with…?", "How would you handle…?"] },
  { category: "Probing / Follow-up", examples: ["Could you tell me some more about…?", "What exactly do you mean by…?", "Could you enlarge on that?", "Could you give me an example of…?", "I'd like you to tell me…", "Interesting. What else do you…?"] },
  { category: "Closed / Yes-No", examples: ["Are you used to working shifts?", "Do you work well under pressure?"] },
];

const ageismSpeakers = [
  { id: 1, opinion: "It is not relevant to ask someone's age. The important thing is whether or not they have the skills to do the job, not how old they are.", stance: "Against ageism" },
  { id: 2, opinion: "Older people have a lot of experience and knowledge to offer. They are often better workers than their younger colleagues — more reliable and take less time off.", stance: "Pro older workers" },
  { id: 3, opinion: "Older people are not as flexible, they expect higher salaries and they get sick a lot. Companies want younger employees who can bring fresh ideas and are less expensive.", stance: "Pro younger workers" },
  { id: 4, opinion: "You can't run a company efficiently with young, inexperienced people. You need older managers to train younger ones and organize effective succession planning.", stance: "Balanced / Pro diversity" },
  { id: 5, opinion: "Laws on age discrimination are wrong. Only the companies know which people are right — or wrong — for the job. The government shouldn't tell us how to run our business.", stance: "Anti-legislation" },
];

const SpeakingUnit2 = () => {
  const [showAgeismDiscussion, setShowAgeismDiscussion] = useState(false);

  return (
    <div className="space-y-8">
      {/* Arranging an appointment */}
      <Card className="service-card">
        <CardContent className="p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 rounded-lg bg-orange-100">
              <Phone className="h-6 w-6 text-orange-600" />
            </div>
            <h3 className="text-2xl font-semibold font-merriweather text-foreground">
              Activity 6: Arranging an Appointment
            </h3>
          </div>
          <p className="text-muted-foreground mb-6">
            Use these phrases to role-play a telephone call arranging a job interview. One person is the HR officer, the other is the applicant.
          </p>
          <div className="grid sm:grid-cols-2 gap-3">
            {appointmentPhrases.map((phrase, i) => (
              <div key={i} className="p-3 bg-orange-50/50 border border-orange-200 rounded-lg text-foreground text-sm">
                "{phrase}"
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Letter ordering activity */}
      <Card className="service-card">
        <CardContent className="p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 rounded-lg bg-blue-100">
              <MessageCircle className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="text-2xl font-semibold font-merriweather text-foreground">
              Activity 7: Writing an Invitation Letter
            </h3>
          </div>
          <p className="text-muted-foreground mb-4">
            Put the following parts of an invitation-to-interview letter in the correct order:
          </p>
          <div className="space-y-3">
            {[
              { label: "a", text: "We would like to invite you to attend an interview at this office and would be grateful if you could telephone the undersigned as soon as possible to arrange a suitable date and time." },
              { label: "b", text: "We look forward to welcoming you to our offices." },
              { label: "c", text: "Thank you for your letter of 2 September, applying for the position of … with this company." },
              { label: "d", text: "If you have any questions, please raise them when you call to arrange the interview." },
              { label: "e", text: "Alternatively, you can go to our website for these documents and other information about the company. A map showing the location of our office is also enclosed." },
              { label: "f", text: "Enclosed is a copy of the person specification and job description for this job, which we would like you to familiarize yourself with before the interview." },
            ].map((item) => (
              <div key={item.label} className="flex items-start gap-3 p-3 border border-border rounded-lg">
                <span className="w-8 h-8 flex items-center justify-center bg-primary/10 text-primary font-bold rounded-full text-sm shrink-0">
                  {item.label}
                </span>
                <p className="text-foreground text-sm">{item.text}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-muted-foreground mt-4 italic">
            Correct order: c → a → f → e → d → b
          </p>
        </CardContent>
      </Card>

      {/* Interview question types */}
      <Card className="service-card">
        <CardContent className="p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 rounded-lg bg-emerald-100">
              <Users className="h-6 w-6 text-emerald-600" />
            </div>
            <h3 className="text-2xl font-semibold font-merriweather text-foreground">
              Activity 15: Interview Language
            </h3>
          </div>
          <p className="text-muted-foreground mb-6">
            Learn these useful question types for conducting job interviews. Practice using them in a role-play.
          </p>
          <div className="grid gap-4 sm:grid-cols-3">
            {interviewQuestionTypes.map((type) => (
              <div key={type.category} className="p-4 border border-border rounded-lg bg-emerald-50/30">
                <h4 className="font-semibold text-foreground mb-3">{type.category}</h4>
                <ul className="space-y-2">
                  {type.examples.map((ex, i) => (
                    <li key={i} className="text-sm text-muted-foreground italic">"{ex}"</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Ageism discussion */}
      <Card className="service-card">
        <CardContent className="p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 rounded-lg bg-rose-100">
              <Scale className="h-6 w-6 text-rose-600" />
            </div>
            <h3 className="text-2xl font-semibold font-merriweather text-foreground">
              Activity 17: Ageism — Discussion
            </h3>
          </div>
          <p className="text-muted-foreground mb-6">
            How important is age in the selection of candidates? Read these five opinions and discuss which ones you agree with.
          </p>

          <div className="space-y-4">
            {ageismSpeakers.map((speaker) => (
              <div key={speaker.id} className="p-4 border border-border rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-semibold text-primary">Speaker {speaker.id}</span>
                  <span className="text-xs px-2 py-1 bg-muted rounded-full text-muted-foreground">{speaker.stance}</span>
                </div>
                <p className="text-foreground text-sm italic">"{speaker.opinion}"</p>
              </div>
            ))}
          </div>

          <Button
            onClick={() => setShowAgeismDiscussion(!showAgeismDiscussion)}
            className="mt-4 bg-primary hover:bg-primary/90"
          >
            {showAgeismDiscussion ? "Hide" : "Show"} Discussion Questions
          </Button>

          {showAgeismDiscussion && (
            <div className="mt-4 p-4 bg-rose-50/50 border border-rose-200 rounded-lg space-y-2">
              <p className="text-foreground text-sm">• How would you feel if, after 20 years in your profession, you were considered too old for the job?</p>
              <p className="text-foreground text-sm">• Do you think legislation on age discrimination will help the situation?</p>
              <p className="text-foreground text-sm">• What kind of policies does your company have on age discrimination?</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default SpeakingUnit2;
