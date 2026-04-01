import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import OrderingExercise from "@/components/presentations/OrderingExercise";
import MultipleChoiceQuiz from "@/components/presentations/MultipleChoiceQuiz";

const interviewTips = [
  { id: "1", text: "Establish rapport and relax the candidate." },
  { id: "2", text: "Read the candidate's application and have it with you at the interview." },
  { id: "3", text: "Use open questions as much as possible to ensure the candidate gives detailed answers." },
  { id: "4", text: "Allow the candidate to do most of the talking but keep the interview focused." },
  { id: "5", text: "Before finishing the interview, explain what will happen next and by when." },
  { id: "6", text: "Use a quiet office away from noise and interruptions." },
  { id: "7", text: "Welcome the applicant warmly into your office and explain the interview clearly." },
  { id: "8", text: "Allow the candidate time for his or her own questions." },
];

const applicantQuestions = [
  { id: 1, text: "'What are the hours of work exactly?'", options: ["Shift work with variety of start/finish times, including early mornings, late nights, weekends, and bank holidays", "Nine to five, Monday to Friday", "Part-time only, flexible hours"], answer: "Shift work with variety of start/finish times, including early mornings, late nights, weekends, and bank holidays" },
  { id: 2, text: "'What are the main responsibilities of the job?'", options: ["Creating rapport with callers, understanding their needs, providing travel advice, and promoting Virgin's services", "Managing a team of travel advisers", "Handling complaints only"], answer: "Creating rapport with callers, understanding their needs, providing travel advice, and promoting Virgin's services" },
  { id: 3, text: "'How many calls will I have to handle a day?'", options: ["Around 50", "Around 100", "Around 200"], answer: "Around 100" },
  { id: 4, text: "'What will the interview consist of?'", options: ["A phone interview only", "A group interview, exercises, then an individual interview with two recruitment assessors", "Three individual interviews"], answer: "A group interview, exercises, then an individual interview with two recruitment assessors" },
  { id: 5, text: "'Are there any other payments in addition to the basic salary?'", options: ["No additional payments", "Yes, a shift allowance and a salary increase after probation", "Only a bonus at Christmas"], answer: "Yes, a shift allowance and a salary increase after probation" },
];

const wordFormationQuestions = [
  { id: 1, text: "As we had a lot of candidates for the advertised position, we were able to be very ______.", options: ["selective", "selection", "select", "selector"], answer: "selective" },
  { id: 2, text: "We offer a range of benefits to our ______ in addition to salary.", options: ["personal", "personnel", "personality", "personally"], answer: "personnel" },
  { id: 3, text: "In some types of recruitment, ______ centres are used regularly.", options: ["assess", "assessor", "assessment", "assessing"], answer: "assessment" },
  { id: 4, text: "It was difficult to ______ the final two shortlisted applicants as they had such mixed skills.", options: ["assess", "assessment", "assessor", "assessing"], answer: "assess" },
];

const ReadingUnit2 = () => {
  return (
    <div className="space-y-8">
      {/* Job advert comprehension */}
      <MultipleChoiceQuiz
        title="Activity 3: Virgin Atlantic Job Advert"
        description="Some applicants had questions about the Travel Adviser job. Based on the advert, choose the correct answers."
        questions={applicantQuestions}
      />

      {/* Interview tips ordering */}
      <OrderingExercise
        title="Activity 9: Interview Tips"
        description="These interview tips are in the wrong order. Put them into the correct chronological order for conducting a job interview."
        items={[
          { id: "6", text: "Use a quiet office away from noise and interruptions.", order: 1 },
          { id: "2", text: "Read the candidate's application and have it with you at the interview.", order: 2 },
          { id: "7", text: "Welcome the applicant warmly into your office and explain the interview clearly.", order: 3 },
          { id: "1", text: "Establish rapport and relax the candidate.", order: 4 },
          { id: "3", text: "Use open questions as much as possible to ensure the candidate gives detailed answers.", order: 5 },
          { id: "4", text: "Allow the candidate to do most of the talking but keep the interview focused.", order: 6 },
          { id: "8", text: "Allow the candidate time for his or her own questions.", order: 7 },
          { id: "5", text: "Before finishing the interview, explain what will happen next and by when.", order: 8 },
        ]}
        />
      />

      {/* Word formation */}
      <MultipleChoiceQuiz
        title="Activity 16: Word Formation"
        description="Complete the sentences with the correct form of the word."
        questions={wordFormationQuestions}
      />

      {/* Did You Know box */}
      <Card className="border-l-4 border-l-amber-500 bg-amber-50/50">
        <CardContent className="p-5">
          <h4 className="font-semibold text-foreground mb-2">💡 Did You Know?</h4>
          <p className="text-muted-foreground text-sm">
            Job advertisements can also be shortened to <strong>job ads</strong> or <strong>job adverts</strong>. They're also known as <strong>recruitment advertising</strong> or in newspapers and trade magazines as <strong>appointments</strong> (U.K.) and sometimes <strong>job opportunities</strong>.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default ReadingUnit2;
