import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";

const questions = [
  {
    id: 1,
    q: "Who were the target audience in Unilever's promotional campaign?",
    options: ["Young women", "Young men", "Men of all ages", "Men and women"],
    answer: "B",
  },
  {
    id: 2,
    q: "How did people get an invitation to the house party?",
    options: [
      "By receiving direct mail.",
      "By answering an advertisement.",
      "By applying through an Internet site.",
      "By participating in a game.",
    ],
    answer: "D",
  },
  {
    id: 3,
    q: "What was the aim of the publicity for the house party?",
    options: [
      "To show an exotic location.",
      "To improve men's dating skills.",
      "To excite people's curiosity.",
      "To show people they needed AXE.",
    ],
    answer: "C",
  },
  {
    id: 4,
    q: "According to Mary Drapp, what was the aim of the promotional campaign?",
    options: [
      "To increase brand awareness.",
      "To encourage people to visit the website.",
      "To encourage a different type of customer to buy the product.",
      "To show the effectiveness of the product.",
    ],
    answer: "A",
  },
  {
    id: 5,
    q: "What was unique about the promotion of AXE?",
    options: [
      "The house party.",
      "The television programme.",
      "The free disc.",
      "The use of the Internet.",
    ],
    answer: "B",
  },
  {
    id: 6,
    q: "What was the effect of the marketing campaign?",
    options: [
      "A small fall in sales.",
      "A drop in brand awareness.",
      "An increase in brand awareness and market share.",
      "No measurable effect.",
    ],
    answer: "C",
  },
];

const LETTERS = ["A", "B", "C", "D"];

const ReadingUnit5 = () => {
  const [sel, setSel] = useState<Record<number, string>>({});
  const [res, setRes] = useState<Record<number, boolean> | null>(null);

  const check = () => {
    const r: Record<number, boolean> = {};
    questions.forEach((q) => { r[q.id] = sel[q.id] === q.answer; });
    setRes(r);
  };

  return (
    <div className="space-y-6">
      <Card className="service-card">
        <CardContent className="p-6 space-y-2">
          <h3 className="text-2xl font-semibold font-merriweather text-foreground">Reading: Promoting AXE</h3>
          <p className="text-muted-foreground">
            <strong>Company background:</strong> Unilever is a large multinational based in Britain and Holland which produces foods, cleaning products and toiletries. It currently employs more than 223,000 people.
          </p>
          <p className="text-muted-foreground">
            <strong>1</strong> The text below describes how Unilever promoted their AXE deodorant spray in the USA. Read it quickly to find out which promotional activities they used.
          </p>
        </CardContent>
      </Card>

      <Card className="service-card">
        <CardContent className="p-6 space-y-4">
          <h2 className="text-3xl font-bold font-merriweather text-foreground">AXE</h2>
          <p className="text-foreground leading-relaxed">
            When Unilever wanted to launch its AXE deodorant spray for men in the United States, it combined young men's natural interest in pretty girls with the attraction of a great house party. The idea was simple: boy buys AXE, boy meets girl, boy smells nice, girl likes boy. The product, which was already popular in other parts of the world, was launched in the United States with a powerful promotional plan to make it appeal to American male youth culture. Using the slogan 'the AXE effect', the company used a number of marketing ploys to bring the product to the attention of the public. These included an online game, free samples of the deodorant, often given by attractive female models, in retail stores, point-of-sales displays, media advertising and public relations (PR), all of which hyped the centerpiece of the promotion: a once-in-a-lifetime party at a Florida mansion.
          </p>
          <p className="text-foreground leading-relaxed">
            The campaign and online publicity called for young men to log on to the Internet to play a video game on the AXE website. Participants had to apply their dating skills to score points. If the player reached a certain level, he entered a lottery to win a trip to the party. AXE focused on the intrigue and discovery of the party. Leaflets similar to ones made for a party by a group of college students were posted in relevant locations such as men's toilets at nightclubs. There were also print ads in <em>Rolling Stone</em> and <em>Spin</em> magazines.
          </p>
          <p className="text-foreground leading-relaxed">
            'It was all about getting into the mind of the 20-something guy,' says Mary Drapp, manager of strategic alliances and sponsorships for Unilever. And they succeeded in doing that. Their website received more than 943,000 hits, or 20% more than the goal. Some 100 lucky young men were flown in to attend the party, held near Miami. Hundreds of girls were invited to dance and enjoy musical acts from Nelly, Andrew W.K., Nicole and the Riddlin Kids. Guests could use the pool, go to a game room or play air hockey, cards or billiards. The party was filmed and edited into an hour-long show broadcast on TNN in April. 'To our knowledge, nobody has ever taken a consumer promotion and turned it into a television show,' says Steve Jarvis, the marketing consultant for AXE. 'That was something completely original.'
          </p>
          <p className="text-foreground leading-relaxed">
            After the party, AXE continued to capitalise on the event. Some 500,000 special packs went on sale in retail stores, offering two cans of the deodorant spray with a free AXE house-party CD that featured songs from the artists who had appeared at the party. Unilever began the December before by direct-mailing millions of college students and young males aged between 11 and 24, who received free samples and information about the event, which was advertised as the AXE House Party: lots of girls, rock stars and a beach house. A radio advertising campaign followed the promotion, results included a 22% increase in general brand awareness among males aged 11 to 24 and a 3.0% to 3.7% increase in antiperspirant and deodorant market share.
          </p>
        </CardContent>
      </Card>

      <Card className="service-card">
        <CardContent className="p-6 space-y-2">
          <p className="text-muted-foreground"><strong>2</strong> Read the article again and choose the best answer for each of the following questions.</p>
        </CardContent>
      </Card>

      <div className="space-y-3">
        {questions.map((q) => (
          <Card key={q.id} className="service-card">
            <CardContent className="p-4 space-y-2">
              <div className="flex items-start gap-3">
                <span className="font-bold text-brand-royal">{q.id}.</span>
                <p className="flex-1 text-foreground">{q.q}</p>
                {res && (res[q.id]
                  ? <CheckCircle2 className="h-5 w-5 text-green-600" />
                  : <span className="text-sm text-red-600">Correct: {q.answer}</span>)}
              </div>
              <div className="flex flex-col gap-1 ml-7">
                {q.options.map((opt, i) => {
                  const L = LETTERS[i];
                  const isSel = sel[q.id] === L;
                  return (
                    <button
                      key={L}
                      onClick={() => { setSel((p) => ({ ...p, [q.id]: L })); setRes(null); }}
                      className={`text-left px-3 py-2 rounded border text-sm transition-colors ${
                        isSel ? "bg-brand-royal text-white border-brand-royal" : "border-border hover:bg-accent"
                      }`}
                    ><span className="font-bold mr-2">{L}</span>{opt}</button>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Button onClick={check} className="bg-brand-royal hover:bg-brand-navy">Check Answers</Button>
    </div>
  );
};

export default ReadingUnit5;
