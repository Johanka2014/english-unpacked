import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import MultipleChoiceQuiz from "@/components/presentations/MultipleChoiceQuiz";
import OrderingExercise from "@/components/presentations/OrderingExercise";
import FillInBlanks from "@/components/presentations/FillInBlanks";

const cvCategories = [
  { label: "Personal Details", items: ["name and address", "full contact details", "marital status", "nationality"] },
  { label: "Personal Profile", items: ["a brief summary of your work experience and abilities", "outstanding qualities"] },
  { label: "Career History", items: ["dates of previous employment", "duties in previous jobs", "previous employers", "achievements/skills in career"] },
  { label: "Education", items: ["school and university details", "main exams or degree"] },
  { label: "Training", items: ["relevant courses attended", "qualifications or certificates from on-the-job training", "professional qualification or title"] },
  { label: "Key Skills", items: ["language skills", "specializations/publications"] },
];

const letterLabels = [
  { id: 1, text: "Letterhead", answer: "g" },
  { id: 2, text: "Salutation", answer: "f" },
  { id: 3, text: "Subject of the letter", answer: "d" },
  { id: 4, text: "Acknowledgement of the applicant's letter", answer: "b" },
  { id: 5, text: "Invitation to an interview", answer: "a" },
  { id: 6, text: "Contact details for arranging an interview", answer: "e" },
  { id: 7, text: "Procedure if invited to a second interview", answer: "j" },
  { id: 8, text: "Enclosure note", answer: "h" },
  { id: 9, text: "Complimentary close", answer: "i" },
  { id: 10, text: "Polite ending", answer: "c" },
];

const employmentVocabQuestions = [
  { id: 1, text: "My best marketing assistant has ______. She's got herself another job with more money!", options: ["been dismissed", "resigned", "been made redundant", "retired"], answer: "resigned" },
  { id: 2, text: "Will we be able to find a replacement when John hands in his ______?", options: ["retirement", "redundancy", "resignation", "dismissal"], answer: "resignation" },
  { id: 3, text: "We can't continue working in these freezing temperatures, so we'll have to ______ six workers until the end of February.", options: ["dismiss", "let go", "make redundant", "offer early retirement to"], answer: "let go" },
  { id: 4, text: "Those staff who can't relocate to the new factory will be ______.", options: ["resigned", "dismissed", "made redundant", "hired"], answer: "made redundant" },
  { id: 5, text: "One of our shop assistants has been ______ for stealing.", options: ["resigned", "made redundant", "dismissed", "let go"], answer: "dismissed" },
  { id: 6, text: "A new directive says all employees over 63 will be offered ______.", options: ["redundancy", "early retirement", "resignation", "dismissal"], answer: "early retirement" },
];

const VocabularyUnit2 = () => {
  const [showCategories, setShowCategories] = useState(false);

  return (
    <div className="space-y-8">
      {/* Activity 4: CV Mind Map */}
      <Card className="service-card">
        <CardContent className="p-6">
          <h3 className="text-2xl font-semibold mb-2 font-merriweather text-foreground">
            Activity 4: The Curriculum Vitae
          </h3>
          <p className="text-muted-foreground mb-4">
            What details would you expect to find in a curriculum vitae? Sort these items into the correct CV section headings.
          </p>

          <div className="flex flex-wrap gap-2 mb-6">
            {cvCategories.flatMap(c => c.items).sort(() => 0.5 - Math.random()).map((item, i) => (
              <span key={i} className="px-3 py-1.5 bg-blue-50 border border-blue-200 rounded-full text-sm text-blue-800">
                {item}
              </span>
            ))}
          </div>

          <Button onClick={() => setShowCategories(!showCategories)} className="bg-primary hover:bg-primary/90">
            {showCategories ? "Hide" : "Show"} Answers
          </Button>

          {showCategories && (
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 mt-6">
              {cvCategories.map((cat) => (
                <div key={cat.label} className="p-4 border border-border rounded-lg bg-green-50/50">
                  <h4 className="font-semibold text-foreground mb-2">{cat.label}</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    {cat.items.map((item) => (
                      <li key={item}>• {item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>

      {/* CV Headings Ordering */}
      <OrderingExercise
        title="Activity 4b: CV Section Order"
        description="Put these main CV headings into a logical order in which they might appear."
        items={[
          { id: "1", text: "Personal Details", order: 1 },
          { id: "2", text: "Personal Profile", order: 2 },
          { id: "3", text: "Career History", order: 3 },
          { id: "4", text: "Education", order: 4 },
          { id: "5", text: "Training", order: 5 },
          { id: "6", text: "Key Skills", order: 6 },
        ]}
        correctOrder={["1", "2", "3", "4", "5", "6"]}
      />

      {/* Activity 5: Letter labelling */}
      <Card className="service-card">
        <CardContent className="p-6">
          <h3 className="text-2xl font-semibold mb-2 font-merriweather text-foreground">
            Activity 5: Business Letter Structure
          </h3>
          <p className="text-muted-foreground mb-4">
            A formal invitation-to-interview letter contains these elements. Review and learn the standard structure of a business letter.
          </p>
          <div className="space-y-3">
            {letterLabels.map((item) => (
              <div key={item.id} className="flex items-center gap-4 p-3 border border-border rounded-lg">
                <span className="w-8 h-8 flex items-center justify-center bg-primary/10 text-primary font-bold rounded-full text-sm">
                  {item.answer}
                </span>
                <span className="text-foreground">{item.text}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Did You Know: Business letter conventions */}
      <Card className="border-l-4 border-l-amber-500 bg-amber-50/50">
        <CardContent className="p-5">
          <h4 className="font-semibold text-foreground mb-2">💡 Did You Know?</h4>
          <div className="grid sm:grid-cols-3 gap-4 text-sm">
            <div className="p-3 bg-white/70 rounded-lg">
              <p className="font-semibold text-foreground mb-1">Don't know their name:</p>
              <p className="text-muted-foreground">Dear Sir or Madam → Yours faithfully</p>
            </div>
            <div className="p-3 bg-white/70 rounded-lg">
              <p className="font-semibold text-foreground mb-1">Know their name:</p>
              <p className="text-muted-foreground">Dear Ms/Mr Brownley → Yours sincerely</p>
            </div>
            <div className="p-3 bg-white/70 rounded-lg">
              <p className="font-semibold text-foreground mb-1">Know them well:</p>
              <p className="text-muted-foreground">Dear James → Best regards / Kind regards</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Employment vocabulary */}
      <MultipleChoiceQuiz
        title="Activity 8: Employment Vocabulary"
        description="When a company employs new staff, they are 'taken on' (UK) or 'hired' (US). Complete the sentences with the correct expression."
        questions={employmentVocabQuestions}
      />

      {/* Activity: Vocabulary multiple choice */}
      <MultipleChoiceQuiz
        title="Activity 14: Vocabulary Definitions"
        description="Choose the correct definition for each expression."
        questions={[
          { id: 1, text: "to fill someone in", options: ["to complete a form", "to give more information so they have all the details"], answer: "to give more information so they have all the details" },
          { id: 2, text: "to be promoted", options: ["to move to a higher position in a company", "to take a lower position in a company"], answer: "to move to a higher position in a company" },
          { id: 3, text: "to outline something", options: ["to summarize", "to give a detailed explanation"], answer: "to summarize" },
          { id: 4, text: "liaison within the team", options: ["exchange of information between team members", "a romantic relationship"], answer: "exchange of information between team members" },
          { id: 5, text: "to complain", options: ["to say everything is fine", "to say that you are unhappy about something"], answer: "to say that you are unhappy about something" },
          { id: 6, text: "directive", options: ["a rule", "a special person who deals with something"], answer: "a rule" },
          { id: 7, text: "to relocate", options: ["to move to a new area (with your job)", "to be asked to leave your job"], answer: "to move to a new area (with your job)" },
        ]}
      />
    </div>
  );
};

export default VocabularyUnit2;
