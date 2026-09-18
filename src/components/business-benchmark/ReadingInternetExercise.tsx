import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle2, XCircle, Lightbulb, MessageCircle } from "lucide-react";
import useActivityTracking from "@/hooks/useActivityTracking";

/* ── Exercise 1: advice matching (SB p.22 → article p.23) ── */

const ADVICE = [
  { id: "a1", n: 1, text: "The navigation of your website should be as simple as possible. Make sure all the buttons are clearly labelled and always make it clear how to get back to the home page." },
  { id: "a2", n: 2, text: "Don't put a lot of information on the home page." },
  { id: "a3", n: 3, text: "Use a splash page to attract the visitor's attention and get them interested." },
  { id: "a4", n: 4, text: "Humour can be a good way of making your website different from your competitors'." },
  { id: "a5", n: 5, text: "Use interesting graphics like flashing text to attract the visitor's attention." },
  { id: "a6", n: 6, text: "Update the website regularly." },
  { id: "a7a", n: 7, text: "Put some comments from satisfied customers on the site." },
  { id: "a7b", n: 7, text: "If you can get their permission, put photos of the customers beside their comments." },
  { id: "a8", n: 8, text: "If you are expecting visitors from overseas to your site, consider including some translations of the important pages." },
  { id: "a9", n: 9, text: "Get your website listed on the major search engines and check regularly to make sure your site is still there." },
];

const ADVICE_ANSWERS: Record<string, string> = {
  a1: "A", a2: "C", a3: "X", a4: "X", a5: "X", a6: "F", a7a: "C", a7b: "X", a8: "D", a9: "E",
};
const ADVICE_HINTS: Record<string, string> = {
  a1: "Section A — finding your way around.",
  a2: "Look at section C: what to put in, what to leave out.",
  a3: "Does the article like splash pages?",
  a4: "Read the last paragraph before section A.",
  a5: "Look at section B: what does it say about flashing text?",
  a6: "Section F — keeping it up to date.",
  a7a: "The paragraph just before section A talks about comments.",
  a7b: "Same paragraph — what does it say about photos?",
  a8: "Section D — overseas visitors.",
  a9: "Section E — search engines.",
};

const OPTIONS = ["A", "B", "C", "D", "E", "F", "X"];

/* ── Exercise 2: find words in the text ── */

const FIND_WORDS = [
  { id: "f1", hint: "Easy to use (section A) — example", answer: ["user friendly"], example: true },
  { id: "f2", hint: "Too full of unnecessary things (section C)", answer: ["cluttered"] },
  { id: "f3", hint: "Something which is used to attract attention or publicity (section C)", answer: ["gimmick", "a gimmick"] },
  { id: "f4", hint: "Have the opposite effect from the one you want (section C)", answer: ["backfire"] },
  { id: "f5", hint: "The costs of transport, administration etc. which are extra to the cost of the goods (section D)", answer: ["handling charges", "handling charge"] },
  { id: "f6", hint: "Taking a long time (section E)", answer: ["time-consuming", "time consuming"] },
];

const SENTENCES = [
  { id: "s1", before: "It's a very ", after: " job, but it must be done.", answer: ["time-consuming", "time consuming"], example: true },
  { id: "s2", before: "The computer software is designed to be as ", after: " as possible.", answer: ["user friendly", "user-friendly"] },
  { id: "s3", before: "He's got so much furniture in the office, it looks really ", after: ".", answer: ["cluttered"] },
  { id: "s4", before: "I'm not really convinced by that plan. I think it could ", after: ".", answer: ["backfire"] },
  { id: "s5", before: "The bank imposes a ", after: " of 1.5% on this transaction.", answer: ["handling charge"] },
  { id: "s6", before: "Changing the design on the packaging is just a ", after: ". Do you really think it will increase sales?", answer: ["gimmick"] },
];

const DISCUSSION = [
  "Look at today's best-known company websites. Which of the pieces of advice from 2006 still apply, and which no longer matter?",
  "Websites today are designed for phones first ('mobile-first'). Why do you think that changed, and how does it affect the advice in the article?",
  "Customer reviews and star ratings are now everywhere. How do they do the job that 'comments from satisfied customers' did in 2006?",
  "What do cookie banners, live chat and AI chatbots add to a company website? Are they good for the customer?",
  "If you were designing a website for a small business today, which three things would you spend the most time on?",
];

const normalize = (v: string) => v.trim().toLowerCase().replace(/\s+/g, " ");

const ReadingInternetExercise = () => {
  const track = useActivityTracking();
  const [adviceSel, setAdviceSel] = useState<Record<string, string>>({});
  const [checked1, setChecked1] = useState(false);
  const [findWords, setFindWords] = useState<Record<string, string>>({});
  const [sentences, setSentences] = useState<Record<string, string>>({});
  const [checked2, setChecked2] = useState(false);
  const [checked3, setChecked3] = useState(false);

  const score1 = ADVICE.filter((a) => adviceSel[a.id] === ADVICE_ANSWERS[a.id]).length;
  const score2 = FIND_WORDS.filter((f) => f.answer.some((a) => normalize(a) === normalize(findWords[f.id] || ""))).length;
  const score3 = SENTENCES.filter((s) => s.answer.some((a) => normalize(a) === normalize(sentences[s.id] || ""))).length;

  return (
    <div className="space-y-8">
      {/* ── The article ── */}
      <Card>
        <CardHeader>
          <CardTitle className="font-serif text-2xl">Designing YOUR Website</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-foreground">
          <p className="italic text-muted-foreground">
            Every business needs a website these days. Here, James Kerr offers a few tips on how to make your
            website easy for customers to use.
          </p>
          <p>
            It can be a good idea to collect a few comments from satisfied customers and ask their permission to
            post them on the home page as well. Photos of customers or staff, however, are not recommended.
          </p>
          <p>
            The main reason for keeping the home page simple is that this means it will load quickly. Photos and
            gimmicks or just too much information will cause the page to load too slowly and if visitors get bored,
            they will click the mouse and go elsewhere.
          </p>
          <p>
            Some websites feature a 'splash page' to welcome the visitor to the site, but these are{" "}
            <strong>usually</strong> a waste of time. Most visitors will come to your site to find specific
            information and a splash page will just create another layer between them and the information they want.
          </p>
          <p>
            Finally, attempts at humour are best avoided. They can get the visitor's attention but they can also
            backfire and visitors from overseas may not understand them.
          </p>
          {[
            { h: "A — FINDING YOUR WAY AROUND", t: "First of all, a good website has to be easy to navigate. If visitors can't find what they want quickly, they can leave and go to a competitor's website with just a few clicks of the mouse. Make sure that your home page directs visitors to where they want to go and that the buttons are clearly labelled. Remember that a visitor may enter in the middle of the site so make it clear how to get to the home page from any point. You can check whether your website is user friendly by inviting an outsider to see if they can navigate through it without problems." },
            { h: "B — GRAPHICS", t: "Choose the background and the colour of your text carefully. Don't use colours which can be difficult for the eyes like white text on a grey background. Flashing or spinning text is also irritating to the eyes." },
            { h: "C — WHAT TO PUT IN, WHAT TO LEAVE OUT", t: "Your home page should not look too cluttered. Your company's name, logo, location and a clear description of your product or services is usually enough." },
            { h: "D — OVERSEAS VISITORS", t: "Research has shown that customers are four times more likely to buy a product online if the site is in their own language. If you are expecting customers to access your site from abroad, it is worth translating some of the pages or even creating a local version of the site. However, remember that there are a whole range of issues to consider with regard to charging the overseas customer, such as the exchange rate and handling charges." },
            { h: "E — SEARCH ENGINES", t: "Once your website is completed, it is worth getting it listed on the major search engines such as Alta Vista and Google. This can significantly expand your market. However, it can be a time-consuming process and requires a lot of knowledge about search engines and how they work. If it sounds like too much time and trouble, there are companies who you can pay to submit your site for you." },
            { h: "F — KEEPING IT UP TO DATE", t: "Finally, make sure your website is kept up to date. It is best to avoid time-sensitive information unless you have the time to change it regularly. Don't be like the clothing chain store who were still advertising their summerwear in the middle of winter!" },
          ].map((p) => (
            <div key={p.h}>
              <h4 className="font-semibold text-primary">{p.h}</h4>
              <p>{p.t}</p>
            </div>
          ))}

          <div className="rounded-lg border border-amber-300/60 bg-amber-50 dark:bg-amber-950/20 dark:border-amber-800/40 p-4 text-sm space-y-2">
            <p className="font-semibold flex items-center gap-2">
              <Lightbulb className="h-4 w-4" /> Then and now — reading this in the 2020s
            </p>
            <p>
              This article was written in 2006, and some details have aged: <em>Alta Vista</em> no longer exists
              (Google won), <em>splash pages</em> and <em>flashing text</em> disappeared long ago, and almost all
              browsing now happens on a phone, so today's sites are designed "mobile-first" and load in under two
              seconds.
            </p>
            <p>
              The core advice, though, is still exactly what web designers say today: make it easy to navigate, keep
              the home page simple, use real customer reviews, translate for overseas customers, keep the content up
              to date — and get found on search engines (today we call it <em>SEO</em>).
            </p>
          </div>
        </CardContent>
      </Card>

      {/* ── Exercise 1 ── */}
      <Card>
        <CardHeader>
          <CardTitle className="font-serif text-xl">1. Advice from Exercise 1 — check it against the article</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground">
            Here are nine pieces of advice about what makes a good website. Which ones does the article include?
            Choose the paragraph letter (A–F) where the advice appears. If the advice is not in the article, or the
            article recommends the opposite, choose <strong>X</strong>. Sometimes the article agrees with only
            <em> part</em> of the advice.
          </p>
          <div className="rounded-md bg-muted/40 p-4 space-y-3">
            {ADVICE.map((a) => {
              const correct = checked1 && adviceSel[a.id] === ADVICE_ANSWERS[a.id];
              const wrong = checked1 && adviceSel[a.id] !== ADVICE_ANSWERS[a.id];
              return (
                <div key={a.id} className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-3">
                  <span className="font-semibold text-primary w-6 shrink-0">{a.n}.</span>
                  <p className="flex-1 text-sm text-foreground">{a.text}</p>
                  <div className="flex items-center gap-2 shrink-0">
                    <select
                      value={adviceSel[a.id] || ""}
                      onChange={(e) => setAdviceSel((p) => ({ ...p, [a.id]: e.target.value }))}
                      className={`rounded-md border px-2 py-1 bg-background ${
                        correct ? "border-green-500 bg-green-50 dark:bg-green-950/20" : wrong ? "border-destructive bg-destructive/10" : "border-input"
                      }`}
                    >
                      <option value="">—</option>
                      {OPTIONS.map((o) => (
                        <option key={o} value={o}>{o}</option>
                      ))}
                    </select>
                  </div>
                  {checked1 && wrong && (
                    <span className="text-xs text-muted-foreground sm:w-40 shrink-0 flex items-center gap-1">
                      <XCircle className="h-3.5 w-3.5 text-destructive shrink-0" />
                      {ADVICE_HINTS[a.id]} Answer: {ADVICE_ANSWERS[a.id]}
                    </span>
                  )}
                </div>
              );
            })}
          </div>
          <div className="flex items-center gap-3">
            <Button
              onClick={() => {
                setChecked1(true);
                track({ activityTitle: "BB Mod 4 Reading — advice matching", activityType: "matching", score: score1, total: ADVICE.length });
              }}
            >
              Check answers
            </Button>
            {checked1 && (
              <span className="text-sm text-muted-foreground">
                {score1} / {ADVICE.length} correct
              </span>
            )}
          </div>
        </CardContent>
      </Card>

      {/* ── Exercise 2 ── */}
      <Card>
        <CardHeader>
          <CardTitle className="font-serif text-xl">2. Find words or phrases in the text</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            {FIND_WORDS.map((f) => {
              const correct = checked2 && f.answer.some((a) => normalize(a) === normalize(findWords[f.id] || ""));
              const wrong = checked2 && !correct;
              return (
                <div key={f.id} className="flex flex-col sm:flex-row sm:items-center gap-3">
                  <label className="sm:w-2/3 text-sm text-foreground">
                    <span className="font-semibold text-primary mr-1">{f.id.slice(1)}.</span> {f.hint}
                  </label>
                  <div className="flex items-center gap-2 sm:w-1/3">
                    <Input
                      value={findWords[f.id] || ""}
                      readOnly={f.example}
                      onChange={(e) => setFindWords((p) => ({ ...p, [f.id]: e.target.value }))}
                      className={
                        correct ? "border-green-500 bg-green-50 dark:bg-green-950/20" : wrong ? "border-destructive bg-destructive/10" : ""
                      }
                    />
                    {checked2 && (correct ? <CheckCircle2 className="h-5 w-5 text-green-600 shrink-0" /> : <XCircle className="h-5 w-5 text-destructive shrink-0" />)}
                  </div>
                </div>
              );
            })}
          </div>
          <div className="flex items-center gap-3">
            <Button
              onClick={() => {
                setChecked2(true);
                track({ activityTitle: "BB Mod 4 Reading — find the words", activityType: "gap-fill", score: score2, total: FIND_WORDS.length });
              }}
            >
              Check answers
            </Button>
            {checked2 && <span className="text-sm text-muted-foreground">{score2} / {FIND_WORDS.length} correct</span>}
          </div>

          <div className="pt-4 border-t border-border space-y-3">
            <p className="font-medium">Now use the vocabulary to complete these sentences.</p>
            {SENTENCES.map((s) => {
              const correct = checked3 && s.answer.some((a) => normalize(a) === normalize(sentences[s.id] || ""));
              const wrong = checked3 && !correct;
              return (
                <div key={s.id} className="flex flex-col sm:flex-row sm:items-center gap-3">
                  <div className="flex-1 text-sm text-foreground">
                    {s.id.slice(1)}. {s.before}
                    <Input
                      value={sentences[s.id] || ""}
                      readOnly={s.example}
                      onChange={(e) => setSentences((p) => ({ ...p, [s.id]: e.target.value }))}
                      className={`inline-block w-40 mx-1 ${correct ? "border-green-500 bg-green-50 dark:bg-green-950/20" : wrong ? "border-destructive bg-destructive/10" : ""}`}
                    />
                    {s.after}
                  </div>
                  {checked3 && (correct ? <CheckCircle2 className="h-5 w-5 text-green-600 shrink-0" /> : <XCircle className="h-5 w-5 text-destructive shrink-0" />)}
                </div>
              );
            })}
            <div className="flex items-center gap-3">
              <Button
                onClick={() => {
                  setChecked3(true);
                  track({ activityTitle: "BB Mod 4 Reading — use the vocabulary", activityType: "gap-fill", score: score3, total: SENTENCES.length });
                }}
              >
                Check answers
              </Button>
              {checked3 && <span className="text-sm text-muted-foreground">{score3} / {SENTENCES.length} correct</span>}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* ── Exercise 3: modern discussion ── */}
      <Card>
        <CardHeader>
          <CardTitle className="font-serif text-xl flex items-center gap-2">
            <MessageCircle className="h-5 w-5 text-primary" /> 3. Discussion — designing a website today
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground">
            The article is from 2006. Talk about these questions with a partner (or think about them on your own) —
            this is where the 2006 advice meets the internet we use today.
          </p>
          <ol className="list-decimal list-inside space-y-2 text-foreground">
            {DISCUSSION.map((d) => (
              <li key={d} className="text-sm">{d}</li>
            ))}
          </ol>
          <p className="text-xs text-muted-foreground">
            Useful modern vocabulary: <em>mobile-first design, page speed, customer reviews, social proof, cookie
            banner, live chat, AI chatbot, accessibility, SEO, responsive design</em>.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default ReadingInternetExercise;
