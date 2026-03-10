import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
import MatchingExercise from "@/components/presentations/MatchingExercise";

const paTaskOptions = [
  "answering letters",
  "booking flights",
  "booking train tickets",
  "co-ordinating special events",
  "looking up information",
  "making coffee",
  "prioritising appointments",
  "taking notes in meetings",
  "taking phone calls",
  "welcoming visitors",
];

const matchPairs = [
  { id: 1, left: "1. What kind of atmosphere do you work in?", right: "c. It's very busy." },
  { id: 2, left: "2. What do you like best about your job?", right: "f. The people I work with." },
  { id: 3, left: "3. And what do you like least?", right: "b. You can be under a lot of pressure to meet deadlines." },
  { id: 4, left: "4. Do you have a good working relationship with your boss?", right: "d. Yes, we get on very well." },
  { id: 5, left: "5. What kind of qualities do you think a PA needs?", right: "a. Organisation is the most important thing." },
  { id: 6, left: "6. Do you have any words of encouragement for anyone who is thinking of becoming a PA?", right: "e. Being a PA is a valuable career." },
];

const AUDIO_URL = "https://johanka2014.github.io/Bus_Bench_pre_inter/Mod_1/02.mp3";

const ListeningPAExercise = () => {
  const [checkedTasks, setCheckedTasks] = useState<Set<string>>(new Set());

  const toggleTask = (task: string) => {
    setCheckedTasks((prev) => {
      const next = new Set(prev);
      if (next.has(task)) next.delete(task);
      else next.add(task);
      return next;
    });
  };

  return (
    <div className="space-y-8">
      {/* Activity 1 - Discussion */}
      <Card className="service-card">
        <CardContent className="p-6">
          <h3 className="text-2xl font-semibold mb-4 font-merriweather text-foreground">1. Discussion</h3>
          <p className="text-foreground">
            Many busy people have a personal assistant or 'PA'. Work in pairs and make a list of at least three things you think a PA does.
          </p>
        </CardContent>
      </Card>

      {/* Activity 2 - Checkbox exercise */}
      <Card className="service-card">
        <CardContent className="p-6">
          <h3 className="text-2xl font-semibold mb-4 font-merriweather text-foreground">2. What does a PA do?</h3>
          <p className="text-muted-foreground mb-6">
            You are going to hear an interview with a PA who works for the director of a TV channel. Which of the following do you think could be part of her job?
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {paTaskOptions.map((task) => (
              <label
                key={task}
                className="flex items-center gap-3 p-3 rounded-lg border border-border hover:bg-accent/50 cursor-pointer transition-colors"
              >
                <Checkbox
                  checked={checkedTasks.has(task)}
                  onCheckedChange={() => toggleTask(task)}
                />
                <span className="text-foreground">{task}</span>
              </label>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Activity 3 - Listen to first part */}
      <Card className="service-card">
        <CardContent className="p-6">
          <h3 className="text-2xl font-semibold mb-4 font-merriweather text-foreground">3. Listen and check</h3>
          <p className="text-muted-foreground mb-4">
            Listen to the first part of the interview to see if you were right.
          </p>
          <audio controls src={AUDIO_URL} className="w-full" />
        </CardContent>
      </Card>

      {/* Activity 4 - Matching exercise */}
      <MatchingExercise
        title="4. Match questions with replies"
        description="Read the following questions (1–6) and match them with the correct reply (a–f)."
        pairs={matchPairs}
        leftLabel="Questions"
        rightLabel="Replies"
      />

      {/* Activity 5 - Listen and check */}
      <Card className="service-card">
        <CardContent className="p-6">
          <h3 className="text-2xl font-semibold mb-4 font-merriweather text-foreground">5. Listen and check your answers</h3>
          <p className="text-muted-foreground mb-4">
            Listen to the rest of the interview and check your answers.
          </p>
          <audio controls src={AUDIO_URL} className="w-full" />
        </CardContent>
      </Card>

      {/* Transcript */}
      <Card className="service-card">
        <CardContent className="p-6">
          <Accordion type="single" collapsible>
            <AccordionItem value="transcript" className="border-none">
              <AccordionTrigger className="text-2xl font-semibold font-merriweather text-foreground hover:no-underline">
                📄 Transcript
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-sm italic text-muted-foreground mb-4">I = Interviewer; S = Sally</p>
                <div className="space-y-4 text-foreground leading-relaxed">
                  <p><strong>I:</strong> Sally, I'm not sure many people are clear about what the job of PA really is. So, what exactly do you do?</p>
                  <p><strong>S:</strong> Well, normally I arrive at the office at about half past nine. My first job is to check my email. Every day there are lots of requests for meetings with Richard from producers, directors, lots of people. I prioritise these and I fit them into Richard's diary around his other appointments. Before any meeting, Richard needs background information, so I often do research or look up information. During meetings, I take notes and then afterwards I type the minutes and file them. And I deal with correspondence, take phone calls, and welcome visitors to the office.</p>
                  <p><strong>I:</strong> What kind of atmosphere do you work in?</p>
                  <p><strong>S:</strong> Oh, it's very busy. There are all kinds of people, producers, directors, actors, coming and going all the time. And sometimes it seems like the phone never stops ringing.</p>
                  <p><strong>I:</strong> What do you like best about your job?</p>
                  <p><strong>S:</strong> The people I work with. They're very positive and helpful.</p>
                  <p><strong>I:</strong> And what do you like least?</p>
                  <p><strong>S:</strong> Well, you can be under a lot of pressure to meet deadlines. There are always so many things happening. It can be quite manic sometimes.</p>
                  <p><strong>I:</strong> Do you have a good working relationship with your boss?</p>
                  <p><strong>S:</strong> Oh yes, we get on very well. He has a hectic schedule and he's out of the office a lot of the time so trust is very important. He relies on me to work efficiently if he's not there.</p>
                  <p><strong>I:</strong> What kind of qualities do you think a PA needs?</p>
                  <p><strong>S:</strong> Organisation is the most important thing, definitely. You need to be quite meticulous when you're planning your employer's appointments.</p>
                  <p><strong>I:</strong> Anything else?</p>
                  <p><strong>S:</strong> Yes, you need to stay calm, even in a difficult situation. And you need a good telephone manner and good communication skills.</p>
                  <p><strong>I:</strong> Do you have any words of encouragement for anyone who is thinking of becoming a PA?</p>
                  <p><strong>S:</strong> Being a PA is a valuable career. It gives you a really good idea of how an organisation works and how people make decisions. And it can be an ideal springboard for a career in many other business areas, from marketing to finance.</p>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>
    </div>
  );
};

export default ListeningPAExercise;
