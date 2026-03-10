import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import WordOrderExercise from "@/components/presentations/WordOrderExercise";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle, XCircle } from "lucide-react";

const articleParagraphs = [
  {
    id: 1,
    text: "Many critics dislike reality TV but one show which has received very favourable reviews is Changing Places. The main idea is simple. Take the Chief Executive Officer of a company and put him or her in the position of one of the company's low-end workers.",
  },
  {
    id: 2,
    text: "Donald Eisner is the CEO of the Absalon chain of hotels in Australia. His family have been hotel owners for three generations and are one of the wealthiest in the Australian hotel industry. In the programme, we see Donald Eisner working as a bellboy, cook and cleaner while supervisors monitor his performance, noting any mistakes. He has some triumphs, it is true. In the kitchen, he successfully cooks several pancakes, for example, and, as a housekeeper, he makes the beds correctly. The rest of his housekeeping, however, is not a success, as he fails to clean any rooms to the company's required standards. At the end of the programme, we see his supervisor taking him from room to room, pointing out his mistakes.",
  },
  {
    id: 3,
    text: "Alex Jennings runs a successful chain of steak bars called Wayside Inn. He has a reputation for demanding quality from his staff, both in terms of food and service. When he changes places with some of his staff, we see him fail a number of tasks in the restaurant. As a waiter, he continually forgets to ask customers how they want their steaks to be done and mixes up the orders completely when he has to serve five tables at the same time. A few minutes later, disaster strikes when his tie becomes caught under the drinks on a tray! The next day, when he takes the place of the cook, his supervisor makes him redo several of the steaks.",
  },
  {
    id: 4,
    text: 'Now that their experience is over, are the CEOs thinking of making any changes? The answer is that they already have. "We have carried out several changes, like sorting the knives, forks and spoons, to make it easier for the person who washes the dishes," says Mr. Jennings. "We\'re also redesigning the staff uniforms." Mr. Eisner found the experience even more of a shock. He is not only making changes in his hotels, like the policy on who orders new supplies of cleaning materials, but he also wants to create a Changing Places day at all Absalon Hotels so that all senior management can go through a similar process.',
  },
];

const scanningItems = [
  { label: "Donald Eisner", correctParagraphs: "2, 4" },
  { label: "Alex Jennings", correctParagraphs: "3, 4" },
  { label: "Both men", correctParagraphs: "1, 4" },
];

interface TFStatement {
  id: number;
  person: string;
  text: string;
  answer: "true" | "false";
}

const trueFalseStatements: TFStatement[] = [
  { id: 1, person: "Donald Eisner", text: "He comes from a rich family.", answer: "true" },
  { id: 2, person: "Donald Eisner", text: "He can cook pancakes.", answer: "true" },
  { id: 3, person: "Donald Eisner", text: "In the programme, he successfully cleans rooms up to his company's required standards.", answer: "false" },
  { id: 4, person: "Donald Eisner", text: "He is thinking of making a different person responsible for ordering the cleaning materials.", answer: "true" },
  { id: 5, person: "Donald Eisner", text: "He would not like other senior executives to work as cooks and cleaners.", answer: "false" },
  { id: 6, person: "Alex Jennings", text: "He believes quality is important in his restaurants.", answer: "true" },
  { id: 7, person: "Alex Jennings", text: "He has good skills as a waiter.", answer: "false" },
  { id: 8, person: "Alex Jennings", text: "He is making changes to the uniforms that staff wear.", answer: "true" },
];

const ReadingChangingPlacesExercise = () => {
  const [scanAnswers, setScanAnswers] = useState<Record<number, string>>({});
  const [scanChecked, setScanChecked] = useState(false);
  const [tfAnswers, setTfAnswers] = useState<Record<number, string>>({});
  const [tfChecked, setTfChecked] = useState(false);

  const checkScanning = () => setScanChecked(true);
  const checkTrueFalse = () => setTfChecked(true);

  return (
    <div className="space-y-8">
      {/* Activity 1 - Discussion */}
      <Card className="service-card">
        <CardContent className="p-6">
          <h3 className="text-2xl font-semibold mb-4 font-merriweather text-foreground">1. Discussion</h3>
          <p className="text-muted-foreground mb-4">
            Reality TV is where real people are filmed in different situations. One example is Big Brother where a group of people who do not know each other have to live together in the same house.
          </p>
          <p className="text-foreground font-medium mb-2">Discuss these questions in small groups:</p>
          <ul className="list-disc list-inside space-y-2 text-foreground">
            <li>Do you know any other examples of reality TV?</li>
            <li>What do you think of it?</li>
          </ul>
        </CardContent>
      </Card>

      {/* Activity 2 - Skimming */}
      <Card className="service-card">
        <CardContent className="p-6">
          <h3 className="text-2xl font-semibold mb-4 font-merriweather text-foreground">2. Skimming</h3>
          <p className="text-muted-foreground mb-6">
            Read the article below quickly, without using a dictionary, to get a general understanding of what it is about. This is called <strong>skimming</strong> and is very useful in a work environment when you have a lot of text to read.
          </p>

          <div className="bg-muted/30 rounded-lg p-6 border border-border">
            <h4 className="text-xl font-bold text-foreground mb-4 text-center tracking-wide uppercase">Changing Places</h4>
            <div className="space-y-4">
              {articleParagraphs.map((p) => (
                <p key={p.id} className="text-foreground leading-relaxed">
                  <span className="font-bold text-primary mr-2">{p.id}</span>
                  {p.text}
                </p>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Activity 3 - Scanning */}
      <Card className="service-card">
        <CardContent className="p-6">
          <h3 className="text-2xl font-semibold mb-4 font-merriweather text-foreground">3. Scanning</h3>
          <p className="text-muted-foreground mb-6">
            Scan the text and write the paragraph number(s) which talk about the following people.
          </p>
          <div className="space-y-4">
            {scanningItems.map((item, idx) => (
              <div key={idx} className="flex items-center gap-4">
                <span className="text-foreground font-medium w-36">{item.label}</span>
                <Input
                  placeholder="e.g. 2, 4"
                  className={`w-32 ${
                    scanChecked
                      ? scanAnswers[idx]?.replace(/\s/g, "") === item.correctParagraphs.replace(/\s/g, "")
                        ? "border-green-500 bg-green-50"
                        : "border-red-500 bg-red-50"
                      : ""
                  }`}
                  value={scanAnswers[idx] || ""}
                  onChange={(e) => setScanAnswers((prev) => ({ ...prev, [idx]: e.target.value }))}
                />
                {scanChecked && scanAnswers[idx]?.replace(/\s/g, "") !== item.correctParagraphs.replace(/\s/g, "") && (
                  <span className="text-sm text-muted-foreground">({item.correctParagraphs})</span>
                )}
              </div>
            ))}
          </div>
          <Button onClick={checkScanning} className="mt-6 bg-primary hover:bg-primary/90">
            Check Answers
          </Button>
        </CardContent>
      </Card>

      {/* Activity 4 - True / False */}
      <Card className="service-card">
        <CardContent className="p-6">
          <h3 className="text-2xl font-semibold mb-4 font-merriweather text-foreground">4. True or False?</h3>
          <p className="text-muted-foreground mb-6">
            Scan the text again to see if the following statements are true or false.
          </p>
          <div className="space-y-6">
            {["Donald Eisner", "Alex Jennings"].map((person) => (
              <div key={person}>
                <h4 className="font-semibold text-lg text-foreground mb-3">{person}</h4>
                <div className="space-y-3">
                  {trueFalseStatements
                    .filter((s) => s.person === person)
                    .map((stmt) => {
                      const isCorrect = tfAnswers[stmt.id] === stmt.answer;
                      return (
                        <div
                          key={stmt.id}
                          className={`flex items-center gap-4 p-3 rounded-lg border transition-colors ${
                            tfChecked
                              ? isCorrect
                                ? "border-green-500 bg-green-50"
                                : tfAnswers[stmt.id]
                                ? "border-red-500 bg-red-50"
                                : "border-border"
                              : "border-border"
                          }`}
                        >
                          <span className="text-foreground flex-1">{stmt.text}</span>
                          <RadioGroup
                            value={tfAnswers[stmt.id] || ""}
                            onValueChange={(val) => setTfAnswers((prev) => ({ ...prev, [stmt.id]: val }))}
                            className="flex gap-4"
                          >
                            <div className="flex items-center gap-1">
                              <RadioGroupItem value="true" id={`tf-${stmt.id}-t`} />
                              <Label htmlFor={`tf-${stmt.id}-t`} className="text-sm">True</Label>
                            </div>
                            <div className="flex items-center gap-1">
                              <RadioGroupItem value="false" id={`tf-${stmt.id}-f`} />
                              <Label htmlFor={`tf-${stmt.id}-f`} className="text-sm">False</Label>
                            </div>
                          </RadioGroup>
                          {tfChecked && tfAnswers[stmt.id] && (
                            isCorrect
                              ? <CheckCircle className="h-5 w-5 text-green-600 shrink-0" />
                              : <XCircle className="h-5 w-5 text-red-600 shrink-0" />
                          )}
                        </div>
                      );
                    })}
                </div>
              </div>
            ))}
          </div>
          <Button onClick={checkTrueFalse} className="mt-6 bg-primary hover:bg-primary/90">
            Check Answers
          </Button>
        </CardContent>
      </Card>

      {/* Activity 5 - Word Order */}
      <WordOrderExercise
        title="5. Word Order"
        description="These sentences come from the article. Drag and drop the words into the correct order. Tip: Start with the subject, then the verb, then add objects and extra information."
        items={[
          { id: 1, words: ["dislike", "many", "reality", "critics", "TV"], answer: "many critics dislike reality TV" },
          { id: 2, words: ["for", "hotel", "have", "his", "owners", "family", "been", "three", "generations"], answer: "his family have been hotel owners for three generations" },
          { id: 3, words: ["demanding", "he", "a", "reputation", "has", "for", "quality"], answer: "he has a reputation for demanding quality" },
          { id: 4, words: ["makes", "his", "redo", "him", "supervisor", "the", "steaks"], answer: "his supervisor makes him redo the steaks" },
          { id: 5, words: ["carried", "we", "several", "have", "out", "changes"], answer: "we have carried out several changes" },
        ]}
      />

      {/* Activity 6 - Discussion */}
      <Card className="service-card">
        <CardContent className="p-6">
          <h3 className="text-2xl font-semibold mb-4 font-merriweather text-foreground">6. Discussion</h3>
          <p className="text-foreground font-medium mb-2">Discuss these questions in small groups:</p>
          <ul className="list-disc list-inside space-y-2 text-foreground">
            <li>What do you think about having a Changing Places day?</li>
            <li>Would it be a good idea in your company or place of study?</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

export default ReadingChangingPlacesExercise;
