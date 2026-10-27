import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import EquipmentActivity from "./EquipmentActivity";

const SORT = [
  { id: "ld1", prompt: "I enjoy", options: ["like", "dislike"], answer: "like" },
  { id: "ld2", prompt: "I don't much care for", options: ["like", "dislike"], answer: "dislike", hint: "He says this about the heavy traffic." },
  { id: "ld3", prompt: "I look forward to", options: ["like", "dislike"], answer: "like", hint: "He says this about his breakfast meetings." },
  { id: "ld4", prompt: "I'm not keen on", options: ["like", "dislike"], answer: "dislike", hint: "He says this about formal communications." },
];

const SENTENCES = [
  ["In my job/studies, I enjoy", "(activity)"],
  ["I don't much care for", "(activity)"],
  ["I look forward to", "(a day/time/month) because …"],
  ["I'm not keen on", "(a day/time/month) because …"],
  ["I'd rather", "… than … because …"],
];

const LikesDislikesVocabulary = () => {
  const [text, setText] = useState<string[]>(SENTENCES.map(() => ""));
  return (
    <div className="mx-auto max-w-4xl space-y-8">
      <EquipmentActivity
        modulePrefix="BB Module 1"
        activityType="matching"
        title="Likes and dislikes"
        instructions="The 'My Week' article (Reading section) contains expressions for likes and dislikes. Decide if each one means like or dislike, using the article to help you."
        questions={SORT}
      />
      <Card>
        <CardHeader><CardTitle className="font-serif text-xl">About you: likes and dislikes</CardTitle></CardHeader>
        <CardContent className="space-y-3">
          <p className="text-sm text-muted-foreground">Complete the sentences about your likes and dislikes.</p>
          {SENTENCES.map(([start, help], i) => (
            <div key={start} className="flex flex-col gap-2 sm:flex-row sm:items-center">
              <p className="text-sm sm:w-56 sm:shrink-0"><strong className="mr-2 text-primary">{i + 1}.</strong>{start}</p>
              <Input value={text[i]} onChange={(e) => setText((t) => t.map((v, j) => (j === i ? e.target.value : v)))} placeholder={help} />
            </div>
          ))}
          <p className="rounded-md bg-muted/40 p-3 text-sm"><strong>Pairwork:</strong> Work in pairs and read your sentences to each other. Do you like/dislike the same things?</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default LikesDislikesVocabulary;
