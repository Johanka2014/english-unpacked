import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CheckCircle2, XCircle } from "lucide-react";
import useActivityTracking from "@/hooks/useActivityTracking";
import EquipmentActivity from "./EquipmentActivity";

const DAYS = [
  { day: "Monday October 10", text: [
    "I start each day with a session on the exercise bike before I leave for work. My normal routine is to spend Mondays at our Amsterdam office. Each day, before I meet anyone, I check my two text messages. One gives the number of the previous night's room occupancies and the other tells me how many reservations we took over the Internet. My first meeting on Mondays is usually with Mehmet Demircan, our sales and marketing director. Today, we're discussing plans for our new advertising campaign.",
    "Later, I always have an 'A to Z meeting', looking at possible sites for new hotels with our executive team.",
  ] },
  { day: "Tuesday October 11", text: ["This is a day in the Hague, so once I have finished on the exercise bike, I drive up for a weekly meeting with the managing director, Natalie Jansson. Tuesday is usually my only day here so I try to be sure I go for a wander and meet the team. I enjoy catching up with them but I don't much care for the journey here because the traffic is so heavy. I have some special anti-stress music that I always listen to when I'm in the car. It helps me to relax."] },
  { day: "Wednesday October 12", text: ["Today, I'm checking our two most recent hotels in Arnhem and Eindhoven. Whenever I visit a hotel, I walk around and take notes. Then, depending on how urgent the matters are, I either phone when I'm back in the car or talk about them at our next meeting. This Wednesday, I'm also checking a possible new site for a hotel at Tilberg."] },
  { day: "Thursday October 13", text: ["It's only a short session on the bike this morning as we have our board meeting on Thursdays. I meet over breakfast with our chairman, Eric du Vert, and Jan den Ouden, our chief financial officer. I always look forward to our breakfast meetings although our debates can sometimes frighten the other customers! Normally we spend most of the time on financial issues, but today we're also discussing the approval for the Tilberg site."] },
  { day: "Friday October 14", text: ["I use Fridays as a day to meet key contacts in the industry and analysts. Usually the analyst and I carry out a review of the forecasts and we devote one Friday in each month to looking at the past month's results. In the afternoon, I review the week to come and organise papers. I'm not keen on formal communications and would rather pick up the phone than dictate a memo or write an email. Fortunately most of our management team feel the same, so our phone bills are high but our paper bills are not!"] },
];

const ADJECTIVES = ["stressful", "organised", "hectic", "lonely", "boring", "exciting", "relaxing"];
const WHEN = ["every day", "every week", "Monday October 10", "Tuesday October 11", "Wednesday October 12", "Thursday October 13", "Friday October 14"];
const ACTIVITIES: [string, string, string][] = [
  ["meet the MD in the Hague", "every week", "every week"],
  ["visit the hotel in Arnhem", "Wednesday October 12", "not part of his routine"],
  ["have breakfast with the chairman", "every week", "every week"],
  ["discuss the advertising campaign", "Monday October 10", "not part of his routine"],
  ["receive sales figures via text message", "every day", "every day"],
  ["have an 'A to Z' meeting", "every week", "every week"],
  ["organise papers", "every week", "every week"],
  ["visit Tilberg", "Wednesday October 12", "not part of his routine"],
];

const GAPS = [
  { id: "g2", before: "On Mondays, he usually", after: "the sales and marketing director.", accept: ["meets", "sees", "has a meeting with", "talks to"] },
  { id: "g3a", before: "On Wednesdays, he always", after: "one or two hotels outside Amsterdam.", accept: ["visits", "checks", "inspects"] },
  { id: "g3b", before: "Today, he", after: "hotels in Arnhem and Eindhoven.", accept: ["is visiting", "is checking", "is inspecting"] },
  { id: "g4", before: "He", after: "for approval of the Tilberg site.", accept: ["is still waiting", "is still hoping", "is still asking"], help: "is still …-ing" },
  { id: "g5", before: "On Friday afternoons, he", after: "his diary for the week to come.", accept: ["checks", "reviews", "organises", "plans", "looks at"] },
];

const norm = (s: string) => s.trim().toLowerCase().replace(/\s+/g, " ").replace(/[.]$/, "");

const TravelstopReading = () => {
  const track = useActivityTracking();
  const [adj, setAdj] = useState<string[]>([]);
  const [showAdj, setShowAdj] = useState(false);
  const [gaps, setGaps] = useState<Record<string, string>>({});
  const [gapChecked, setGapChecked] = useState(false);
  const gapScore = GAPS.filter((g) => g.accept.includes(norm(gaps[g.id] || ""))).length;

  return (
    <div className="mx-auto max-w-4xl space-y-8">
      <Card>
        <CardHeader><CardTitle className="font-serif text-xl">My Week: before you read</CardTitle></CardHeader>
        <CardContent className="space-y-3">
          <p className="text-sm text-muted-foreground"><strong>1</strong> Skim the article quickly and choose <strong>two</strong> adjectives to describe Piet Krens's week. <strong>2</strong> Compare your ideas with a partner.</p>
          <div className="flex flex-wrap gap-2">
            {ADJECTIVES.map((a) => (
              <button key={a} type="button" onClick={() => setAdj((l) => (l.includes(a) ? l.filter((x) => x !== a) : l.length < 2 ? [...l, a] : l))}
                className={`rounded-full border px-3 py-1.5 text-sm ${adj.includes(a) ? "border-primary bg-primary text-primary-foreground" : "border-input bg-background hover:bg-muted"}`}>{a}</button>
            ))}
          </div>
          <Button variant="outline" size="sm" onClick={() => setShowAdj((s) => !s)}>{showAdj ? "Hide" : "Show"} suggested answers</Button>
          {showAdj && <p className="text-sm">Suggested answers: <strong>organised</strong>, <strong>hectic</strong></p>}
        </CardContent>
      </Card>

      <article className="mx-auto max-w-3xl overflow-hidden rounded-lg border bg-card shadow-sm">
        <header className="border-b bg-muted/40 px-6 py-5">
          <p className="text-xs font-semibold uppercase tracking-widest text-accent">Travelstop</p>
          <h3 className="mt-1 font-serif text-3xl font-bold text-foreground">My Week</h3>
          <p className="mt-2 font-serif text-base italic text-muted-foreground">A week in the life of Piet Krens, Chief Executive of the Dutch hotel chain Travelstop.</p>
        </header>
        <div className="space-y-5 px-6 py-6 font-serif text-[15px] leading-relaxed text-foreground">
          {DAYS.map((d) => (
            <section key={d.day}>
              <h4 className="mb-1 font-sans text-sm font-bold uppercase tracking-wide text-primary">{d.day}</h4>
              {d.text.map((p, i) => <p key={i} className="mb-2">{p}</p>)}
            </section>
          ))}
        </div>
      </article>

      <EquipmentActivity
        modulePrefix="BB Module 1" activityType="reading" title="My Week: when does he do it?"
        instructions={<>Scan the article. When does Mr Krens do each activity: <strong>every day</strong>, <strong>every week</strong>, or <strong>one particular day</strong>? Example: do exercise — every day.</>}
        questions={ACTIVITIES.map(([p, a], i) => ({ id: `w${i}`, prompt: p, options: WHEN, answer: a }))}
      />

      <EquipmentActivity
        modulePrefix="BB Module 1" activityType="reading" title="My Week: routine or not?"
        instructions="Put each activity in the correct group: things he does every day, every week, or things which are not part of his routine. Example: do exercise — every day."
        questions={[
          ...ACTIVITIES.map(([p, , g], i) => ({ id: `r${i}`, prompt: p, options: ["every day", "every week", "not part of his routine"], answer: g })),
          { id: "t1", prompt: "Which tense is used for actions which he does every day or every week?", options: ["present simple", "present continuous"], answer: "present simple" },
          { id: "t2", prompt: "Which tense is used for things which are not part of his routine?", options: ["present simple", "present continuous"], answer: "present continuous" },
        ]}
      />

      <Card>
        <CardHeader><CardTitle className="font-serif text-xl">My Week: verbs in the correct tense</CardTitle></CardHeader>
        <CardContent className="space-y-3">
          <p className="text-sm text-muted-foreground">Complete the sentences with a suitable verb in the correct tense. Example: Mr Krens <strong>does</strong> exercise every morning before he goes to work.</p>
          {GAPS.map((g, i) => {
            const ok = gapChecked && g.accept.includes(norm(gaps[g.id] || ""));
            return (
              <div key={g.id} className="rounded-md border bg-muted/30 p-3">
                <div className="flex flex-wrap items-center gap-2 text-sm">
                  <strong className="text-primary">{i + 1}.</strong><span>{g.before}</span>
                  <Input aria-label={`Gap ${i + 1}`} className={`h-9 w-44 ${gapChecked ? (ok ? "border-green-500" : "border-destructive") : ""}`} value={gaps[g.id] || ""} placeholder={g.help} onChange={(e) => setGaps((c) => ({ ...c, [g.id]: e.target.value }))} />
                  <span>{g.after}</span>
                  {gapChecked && (ok ? <CheckCircle2 className="h-5 w-5 text-green-600" /> : <XCircle className="h-5 w-5 text-destructive" />)}
                </div>
                {gapChecked && !ok && <p className="mt-2 text-xs text-muted-foreground">Suggested answer: {g.accept[0]}</p>}
              </div>
            );
          })}
          <div className="flex flex-wrap items-center gap-3">
            <Button onClick={() => { setGapChecked(true); track({ activityTitle: "BB Module 1 — My Week: verbs in the correct tense", activityType: "gap-fill", score: gapScore, total: GAPS.length }); }}>Check answers</Button>
            <Button variant="outline" onClick={() => { setGaps({}); setGapChecked(false); }}>Reset</Button>
            {gapChecked && <span className="text-sm text-muted-foreground">{gapScore} / {GAPS.length} correct</span>}
          </div>
        </CardContent>
      </Card>

      <EquipmentActivity
        modulePrefix="BB Module 1" activityType="reading" title="My Week: choose A, B or C"
        instructions="Scan the article again and choose the correct answer."
        questions={[
          { id: "m1", prompt: "What is the 'A to Z' meeting about? A financial results · B possible future hotels · C recently opened hotels", options: ["A", "B", "C"], answer: "B" },
          { id: "m2", prompt: "How does he feel about his breakfast meeting? A He enjoys it. · B He is nervous about it. · C He feels bored by it.", options: ["A", "B", "C"], answer: "A", hint: "Look for 'I always look forward to…'." },
          { id: "m3", prompt: "How often does he review past results with the analyst? A daily · B weekly · C monthly", options: ["A", "B", "C"], answer: "C", hint: "'one Friday in each month'." },
          { id: "m4", prompt: "What is his favourite method of communication? A phone · B memo · C email", options: ["A", "B", "C"], answer: "A", hint: "'would rather pick up the phone'." },
        ]}
      />
    </div>
  );
};

export default TravelstopReading;
