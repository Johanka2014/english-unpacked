import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2, XCircle } from "lucide-react";

/* ── Article paragraphs ── */
const PARAGRAPHS = [
  {
    id: 1,
    text: `The Chinese characters which spell out the name Hongdou literally mean red bean. Hongdou makes most Chinese people think of a popular poem by the Tang Dynasty poet, Wang Wei, called Xiang Si or Lovesickness. In the poem, Hongdou is a symbol of love and affection.`,
  },
  {
    id: 2,
    text: `However, for consumers in China today, the word Hongdou also has other associations. It is also the name of one of the most respected clothing brands in China. Their main products are suits, shirts, jackets, underwear and children's clothes. In 1994, the government named Hongdou as one of China's top ten famous brands and in 2004, the company won a national award.`,
  },
  {
    id: 3,
    text: `The current chairman of Hongdou Group is Mr Zhou Haijiang. The company began in the Communist era when Zhou's grandfather set up a cotton mill in 1957. After a few months, the local communist officials forced him to join together with two other similar operations to create a state-owned collective. Mr Zhou died seven years later from breathing in cotton dust, but in 1983, his son, Zhou Yaoting, took over the operation of the company. This was a period of economic growth and the company began to expand. The current chairman, Zhou Haijiang, is the third generation son. He gave up his job as a lecturer at Hehai University to join the business in 1987.`,
  },
  {
    id: 4,
    text: `The company gradually became privatised. In 1992, the Zhou family and others gained more than 50 per cent ownership of the company. Zhou Yaoting's position as a member of the national congress helped with this process because he could stay friendly with local government authorities. In 2004, the government sold its last shares in Hongdou and in that same year, Zhou Haijiang took over the position of chairman.`,
  },
  {
    id: 5,
    text: `Hongdou's clothing usually attracts the middle-aged market but now they are trying to create clothes which appeal to the younger consumer. They have used the pop star Jeff Chang in some of their advertisements to give the company a younger image. The company has a number of clothing chains outside China as its customers, and hopes to expand its overseas market further. Mr Zhou's ambition is to make Hongdou one of the world's top clothing brands.`,
  },
];

/* ── Exercise 2: Paragraph matching ── */
const PARAGRAPH_TOPICS = [
  { id: "a", text: "The early history of the company", answer: 3 },
  { id: "b", text: "The company's markets", answer: 5 },
  { id: "c", text: "The company's success", answer: 2 },
  { id: "d", text: "The origin of the company's name", answer: 1 },
  { id: "e", text: "The movement away from state ownership", answer: 4 },
];

/* ── Exercise 4: Event ordering ── */
const EVENTS = [
  { id: "a", text: "Zhou Haijiang became chairman of the company.", correctOrder: 7 },
  { id: "b", text: "Zhou Haijiang's grandfather died.", correctOrder: 3 },
  { id: "c", text: "The state took over ownership of the company.", correctOrder: 2 },
  { id: "d", text: "Zhou Haijiang's father began running the company.", correctOrder: 4 },
  { id: "e", text: "Zhou Haijiang's grandfather began a cotton processing operation.", correctOrder: 1 },
  { id: "f", text: "State ownership of the company fell below 50 per cent.", correctOrder: 6 },
  { id: "g", text: "Zhou Haijiang began to work for the company.", correctOrder: 5 },
];

const ReadingHongdouExercise = () => {
  /* Exercise 2 state */
  const [matchAnswers, setMatchAnswers] = useState<Record<string, string>>({});
  const [checked2, setChecked2] = useState(false);

  /* Exercise 3 state */
  const [historyParagraphs, setHistoryParagraphs] = useState<number[]>([]);
  const [checked3, setChecked3] = useState(false);

  /* Exercise 4 state */
  const [orderAnswers, setOrderAnswers] = useState<Record<string, string>>({});
  const [checked4, setChecked4] = useState(false);

  const handleMatchChange = (topicId: string, value: string) => {
    if (checked2) return;
    setMatchAnswers((prev) => ({ ...prev, [topicId]: value }));
  };

  const toggleHistoryParagraph = (num: number) => {
    if (checked3) return;
    setHistoryParagraphs((prev) =>
      prev.includes(num) ? prev.filter((n) => n !== num) : prev.length < 2 ? [...prev, num] : prev
    );
  };

  const handleOrderChange = (eventId: string, value: string) => {
    if (checked4) return;
    setOrderAnswers((prev) => ({ ...prev, [eventId]: value }));
  };

  return (
    <div className="space-y-8">
      {/* ── Reading passage ── */}
      <Card className="service-card">
        <CardContent className="p-6">
          <h3 className="text-2xl font-semibold mb-2 font-merriweather text-foreground">
            Reading — Hongdou
          </h3>
          <p className="text-muted-foreground mb-4">
            Read the article about Hongdou, a Chinese clothing company. Skim it once quickly to get a general idea of its content.
          </p>

          <div className="bg-muted/40 rounded-lg p-5 mb-2 text-sm leading-relaxed space-y-1">
            <div className="mb-4 p-3 bg-primary/5 rounded-lg">
              <p className="font-semibold text-foreground text-base">Company background</p>
              <p className="text-muted-foreground">
                Hongdou Group is a well-known Chinese manufacturer of clothing, based in Jiangsu province. The current president is Mr Zhou Haijiang.
              </p>
            </div>

            {PARAGRAPHS.map((p) => (
              <div key={p.id} className="mb-3">
                <span className="font-bold text-foreground mr-2">{p.id}</span>
                <span className="text-foreground">{p.text}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* ── Exercise 2: Paragraph topics ── */}
      <Card className="service-card">
        <CardContent className="p-6">
          <h3 className="text-2xl font-semibold mb-2 font-merriweather text-foreground">
            Exercise 2 — Paragraph Topics
          </h3>
          <p className="text-muted-foreground mb-6">
            The article has five paragraphs. Write a number (1–5) to show which information each paragraph contains.
          </p>

          <div className="space-y-3">
            {PARAGRAPH_TOPICS.map((topic) => {
              const userVal = matchAnswers[topic.id] || "";
              const isCorrect = checked2 && userVal === String(topic.answer);
              const isWrong = checked2 && userVal !== "" && userVal !== String(topic.answer);
              return (
                <div key={topic.id} className="flex items-center gap-3">
                  <span className="font-semibold text-sm w-6">{topic.id})</span>
                  <span className="flex-1 text-foreground text-sm">{topic.text}</span>
                  <select
                    value={userVal}
                    onChange={(e) => handleMatchChange(topic.id, e.target.value)}
                    disabled={checked2}
                    className={`w-16 rounded-md border px-2 py-1.5 text-sm ${
                      isCorrect ? "border-green-500 bg-green-50" : isWrong ? "border-destructive bg-red-50" : "border-border"
                    }`}
                  >
                    <option value="">—</option>
                    {[1, 2, 3, 4, 5].map((n) => (
                      <option key={n} value={String(n)}>{n}</option>
                    ))}
                  </select>
                  {isCorrect && <CheckCircle2 className="h-4 w-4 text-green-500 shrink-0" />}
                  {isWrong && <XCircle className="h-4 w-4 text-destructive shrink-0" />}
                </div>
              );
            })}
          </div>

          {checked2 && (
            <div className="mt-4 p-3 bg-muted rounded-lg text-sm">
              <p className="font-semibold mb-1">Correct answers:</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-0.5">
                {PARAGRAPH_TOPICS.map((t) => (
                  <li key={t.id}>{t.id}) {t.text} — <strong>Paragraph {t.answer}</strong></li>
                ))}
              </ul>
            </div>
          )}

          <div className="flex gap-3 mt-6">
            <Button onClick={() => setChecked2(true)} className="bg-brand-royal hover:bg-brand-navy">
              Check Answers
            </Button>
            <Button variant="outline" onClick={() => { setChecked2(false); setMatchAnswers({}); }}>
              Reset
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* ── Exercise 3: Which paragraphs? ── */}
      <Card className="service-card">
        <CardContent className="p-6">
          <h3 className="text-2xl font-semibold mb-2 font-merriweather text-foreground">
            Exercise 3 — History Paragraphs
          </h3>
          <p className="text-muted-foreground mb-6">
            If you only wanted to know about the history of the company, which <strong>two</strong> paragraphs would you need to read? Select two.
          </p>

          <div className="flex flex-wrap gap-3">
            {[1, 2, 3, 4, 5].map((num) => {
              const selected = historyParagraphs.includes(num);
              const correct3 = [3, 4];
              const isCorrect = checked3 && selected && correct3.includes(num);
              const isWrong = checked3 && selected && !correct3.includes(num);
              const missed = checked3 && !selected && correct3.includes(num);
              return (
                <button
                  key={num}
                  onClick={() => toggleHistoryParagraph(num)}
                  className={`w-12 h-12 rounded-lg border-2 font-semibold transition-colors ${
                    isCorrect ? "border-green-500 bg-green-50 text-green-700"
                    : isWrong ? "border-destructive bg-red-50 text-destructive"
                    : missed ? "border-green-500 bg-green-50/50 text-green-600"
                    : selected ? "border-brand-royal bg-primary/10 text-brand-royal"
                    : "border-border hover:border-brand-royal/50"
                  }`}
                >
                  {num}
                </button>
              );
            })}
          </div>

          {checked3 && (
            <p className="mt-3 text-sm text-green-600 font-medium">
              Correct answer: <strong>Paragraphs 3 and 4</strong>
            </p>
          )}

          <div className="flex gap-3 mt-6">
            <Button onClick={() => setChecked3(true)} className="bg-brand-royal hover:bg-brand-navy">
              Check Answer
            </Button>
            <Button variant="outline" onClick={() => { setChecked3(false); setHistoryParagraphs([]); }}>
              Reset
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* ── Exercise 4: Order events ── */}
      <Card className="service-card">
        <CardContent className="p-6">
          <h3 className="text-2xl font-semibold mb-2 font-merriweather text-foreground">
            Exercise 4 — Order the Events
          </h3>
          <p className="text-muted-foreground mb-6">
            Read paragraphs 3 and 4 more slowly and number the following events in the correct order (1–7).
          </p>

          <div className="space-y-3">
            {EVENTS.map((evt) => {
              const userVal = orderAnswers[evt.id] || "";
              const isCorrect = checked4 && userVal === String(evt.correctOrder);
              const isWrong = checked4 && userVal !== "" && userVal !== String(evt.correctOrder);
              return (
                <div key={evt.id} className="flex items-center gap-3">
                  <span className="font-semibold text-sm w-6">{evt.id})</span>
                  <span className="flex-1 text-foreground text-sm">{evt.text}</span>
                  <select
                    value={userVal}
                    onChange={(e) => handleOrderChange(evt.id, e.target.value)}
                    disabled={checked4}
                    className={`w-16 rounded-md border px-2 py-1.5 text-sm ${
                      isCorrect ? "border-green-500 bg-green-50" : isWrong ? "border-destructive bg-red-50" : "border-border"
                    }`}
                  >
                    <option value="">—</option>
                    {[1, 2, 3, 4, 5, 6, 7].map((n) => (
                      <option key={n} value={String(n)}>{n}</option>
                    ))}
                  </select>
                  {isCorrect && <CheckCircle2 className="h-4 w-4 text-green-500 shrink-0" />}
                  {isWrong && <XCircle className="h-4 w-4 text-destructive shrink-0" />}
                </div>
              );
            })}
          </div>

          {checked4 && (
            <div className="mt-4 p-3 bg-muted rounded-lg text-sm">
              <p className="font-semibold mb-1">Correct order:</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-0.5">
                {[...EVENTS].sort((a, b) => a.correctOrder - b.correctOrder).map((e) => (
                  <li key={e.id}>{e.correctOrder}. {e.text}</li>
                ))}
              </ul>
            </div>
          )}

          <div className="flex gap-3 mt-6">
            <Button onClick={() => setChecked4(true)} className="bg-brand-royal hover:bg-brand-navy">
              Check Answers
            </Button>
            <Button variant="outline" onClick={() => { setChecked4(false); setOrderAnswers({}); }}>
              Reset
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* ── Exercise 5: Speaking ── */}
      <Card className="service-card">
        <CardContent className="p-6">
          <h3 className="text-2xl font-semibold mb-2 font-merriweather text-foreground">
            Exercise 5 — Speaking
          </h3>
          <p className="text-muted-foreground">
            Work in pairs. Tell your partner about the history of a company that you know.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default ReadingHongdouExercise;
