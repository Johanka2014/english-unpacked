import { useState, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle, XCircle } from "lucide-react";
import DragFillGaps from "@/components/presentations/DragFillGaps";

/* ── Exercise 1 — gap-fill interview questions ── */
const gapQuestions = [
  { id: "a", before: "How hard ", answer: "do", mid: " you have ", answer2: "to", after: " work?" },
  { id: "b", before: "What ", answer: "do", mid: " you like ", answer2: "about", after: " your job?" },
  { id: "c", before: "How long ", answer: "have", mid: " you ", answer2: "been", after: " in your present job?" },
  { id: "d", before: "What ", answer: "are", mid: " your ambitions ", answer2: "for", after: " the future?" },
  { id: "e", before: "What ", answer: "does", mid: " your job consist ", answer2: "of", after: "?" },
  { id: "f", before: "When ", answer: "were", mid: " you first attracted ", answer2: "to", after: " accountancy?" },
];

/* ── Exercise 2 — match questions to interview gaps ── */
const interviewArticle = `We interviewed Gabriella Andrews, 29, a finance manager with IMI Norgren. Born in Hungary, she came to the UK at 18 to study English, but stayed on to study European Business and Technology with German at Warwick. Following her graduation, with a first-class BSc Honours degree, she joined IMI as a trainee accountant. After various jobs with the firm, she became a finance manager with the company in February. She passed the final accountancy examinations in July 2002.`;

const interviewQAs = [
  {
    qNum: 1,
    answer: "f",
    response: "I first became interested in finance, or at least money matters, at school, where I was the class treasurer for four years.",
  },
  {
    qNum: 2,
    answer: "e",
    response: "I'm mainly interested in management accounting, so the accountancy qualification gives me the chance to work in other areas of the business and allows me to work in a more commercial environment. I like the interaction between various departments. And I get the opportunity to be involved in non-finance projects, too.",
  },
  {
    qNum: 3,
    answer: "c",
    response: "I have two divisional management accountants reporting to me. I'm a member of the local management team, so I get involved in regular discussions involving the performance of all three divisions. I have financial managerial responsibility for two of them. I'm involved in various other projects, as well as new product launches and new IT system introductions – both are high-profile projects within the Norgren Group. I produce reports and I supply financial information to all levels within the organisation, from local management to the board of directors.",
  },
  {
    qNum: 4,
    answer: "a",
    response: "The working hours vary in our area; our busiest periods are the end of the financial year, plus auditing, forecasting and any project-work deadlines. We are expected to work longer hours than usual then, so there's never a good time to take holidays. We still manage it, though, and I think the extra work should be seen as something that comes with a managerial position, really.",
  },
  {
    qNum: 5,
    answer: "d",
    response: "In the long term, I'd like to progress from a local office to a job at headquarters with responsibility for various offices. I would like to stay close to finance, but I'd consider a general business management role as well.",
  },
];

/* ── Exercise 3 — True/False ── */
const trueFalseStatements = [
  { id: 1, text: "Gabriella came to the UK in order to work.", answer: false, correction: "False: she came to the UK to study English." },
  { id: 2, text: "She has always worked for the same company.", answer: true, correction: "" },
  { id: 3, text: "She looked after the financial affairs of her class at school.", answer: true, correction: "" },
  { id: 4, text: "She is only involved in the financial aspects of her company.", answer: false, correction: "False: she is also involved in non-finance projects." },
  { id: 5, text: "She has more junior staff working for her.", answer: true, correction: "" },
  { id: 6, text: "She gives financial information to the top level of management in her company.", answer: true, correction: "" },
  { id: 7, text: "She believes that sometimes she is asked to work too hard.", answer: false, correction: "False: she thinks extra work comes with a managerial position." },
  { id: 8, text: "Her ambitions include going to work for a different organisation.", answer: false, correction: "False: she'd like to progress within the Norgren Group to headquarters." },
];

/* ── Simple Questions Exercise ── */
const simpleQs = [
  { id: 1, before: "", answer: "Did you have", after: " a good journey here today?", response: "Yes, thanks, although there was a lot of traffic coming into the city." },
  { id: 2, before: "", answer: "Would working in this city", after: " be a problem for you?", response: "Working in this city? I don't think so. I've always wanted to work here." },
  { id: 3, before: "", answer: "How long have you worked", after: " as an accountant?", response: "Well, I finished my training three years ago, so as a fully qualified accountant, just three years." },
  { id: 4, before: "", answer: "What do you", after: " most enjoy about your work?", response: "Oh, I'm fascinated by figures, and especially how they reflect the performance of an organisation." },
  { id: 5, before: "", answer: "What would you", after: " like to be doing in ten years' time?", response: "In ten years' time, I'd like to have a post in senior management here, or in a similar organisation." },
];

/* ── Complex Questions Exercise ── */
const complexQs = [
  { id: 1, direct: "How long have you been a product manager?", starter: "Could you tell me", answer: "how long you have been a product manager?" },
  { id: 2, direct: "Have you studied abroad?", starter: "I'd like to know", answer: "if you have studied abroad." },
  { id: 3, direct: "When did you first become interested in this profession?", starter: "I wonder", answer: "when you first became interested in this profession." },
  { id: 4, direct: "What do you enjoy doing in your free time?", starter: "I'd like you to tell me", answer: "what you enjoy doing in your free time." },
  { id: 5, direct: "What will you be doing in ten years' time?", starter: "Can you predict", answer: "what you will be doing in ten years' time?" },
];

const ReadingUnit2 = () => {
  /* Ex 1 state */
  const ex1Refs = useRef<Record<string, HTMLInputElement | null>>({});
  const ex1Refs2 = useRef<Record<string, HTMLInputElement | null>>({});
  const [ex1Results, setEx1Results] = useState<Record<string, boolean | null>>({});

  /* Ex 2 state */
  const ex2Refs = useRef<Record<number, HTMLInputElement | null>>({});
  const [ex2Results, setEx2Results] = useState<Record<number, boolean | null>>({});

  /* Ex 3 state */
  const [ex3Answers, setEx3Answers] = useState<Record<number, "true" | "false" | null>>({});
  const [ex3Results, setEx3Results] = useState<Record<number, boolean | null>>({});

  /* Simple Qs state */
  const sqRefs = useRef<Record<number, HTMLInputElement | null>>({});
  const [sqResults, setSqResults] = useState<Record<number, boolean | null>>({});

  /* Complex Qs state */
  const cqRefs = useRef<Record<number, HTMLInputElement | null>>({});
  const [cqResults, setCqResults] = useState<Record<number, boolean | null>>({});

  const checkEx1 = () => {
    const r: Record<string, boolean> = {};
    gapQuestions.forEach((q) => {
      const v1 = ex1Refs.current[q.id]?.value?.trim().toLowerCase() || "";
      const v2 = ex1Refs2.current[q.id]?.value?.trim().toLowerCase() || "";
      r[q.id] = v1 === q.answer.toLowerCase() && v2 === q.answer2.toLowerCase();
    });
    setEx1Results(r);
  };

  const checkEx2 = () => {
    const r: Record<number, boolean> = {};
    interviewQAs.forEach((qa) => {
      const v = ex2Refs.current[qa.qNum]?.value?.trim().toLowerCase() || "";
      r[qa.qNum] = v === qa.answer.toLowerCase();
    });
    setEx2Results(r);
  };

  const checkEx3 = () => {
    const r: Record<number, boolean> = {};
    trueFalseStatements.forEach((s) => {
      const userAnswer = ex3Answers[s.id];
      if (userAnswer === null || userAnswer === undefined) {
        r[s.id] = false;
      } else {
        r[s.id] = (userAnswer === "true") === s.answer;
      }
    });
    setEx3Results(r);
  };

  const checkSimpleQs = () => {
    const r: Record<number, boolean> = {};
    simpleQs.forEach((q) => {
      const v = sqRefs.current[q.id]?.value?.trim().toLowerCase() || "";
      r[q.id] = v === q.answer.toLowerCase();
    });
    setSqResults(r);
  };

  const checkComplexQs = () => {
    const r: Record<number, boolean> = {};
    complexQs.forEach((q) => {
      const v = cqRefs.current[q.id]?.value?.trim().toLowerCase().replace(/[?.!]$/, "") || "";
      const expected = q.answer.toLowerCase().replace(/[?.!]$/, "");
      r[q.id] = v === expected;
    });
    setCqResults(r);
  };

  const resultIcon = (val: boolean | null) => {
    if (val === null || val === undefined) return null;
    return val ? <CheckCircle className="inline h-5 w-5 text-green-600 ml-1" /> : <XCircle className="inline h-5 w-5 text-red-600 ml-1" />;
  };

  return (
    <div className="space-y-8">
      {/* Company Background */}
      <Card className="service-card">
        <CardContent className="p-6">
          <h3 className="text-2xl font-semibold mb-2 font-merriweather text-foreground">The Management Accountant</h3>
          <div className="bg-muted/50 rounded-lg p-4 mb-4">
            <p className="font-semibold text-foreground">Company background</p>
            <p className="text-muted-foreground">IMI Norgren is an international engineering company, specialising in fluid technologies.</p>
          </div>
        </CardContent>
      </Card>

      {/* Exercise 1 — Gap-fill interview questions */}
      <Card className="service-card">
        <CardContent className="p-6">
          <h3 className="text-xl font-semibold mb-2 font-merriweather text-foreground">Exercise 1 — Complete the Questions</h3>
          <p className="text-muted-foreground mb-4">Write one word in each gap to complete questions you might ask at a job interview.</p>
          <div className="space-y-3">
            {gapQuestions.map((q) => (
              <div key={q.id} className="flex items-center flex-wrap gap-1 text-foreground">
                <span className="font-semibold w-6">{q.id}</span>
                <span>{q.before}</span>
                <Input
                  ref={(el) => { ex1Refs.current[q.id] = el; }}
                  className={`inline-block w-24 mx-1 ${ex1Results[q.id] === true ? "border-green-500 bg-green-50" : ex1Results[q.id] === false ? "border-red-500 bg-red-50" : ""}`}
                  placeholder="..."
                />
                <span>{q.mid}</span>
                <Input
                  ref={(el) => { ex1Refs2.current[q.id] = el; }}
                  className={`inline-block w-24 mx-1 ${ex1Results[q.id] === true ? "border-green-500 bg-green-50" : ex1Results[q.id] === false ? "border-red-500 bg-red-50" : ""}`}
                  placeholder="..."
                />
                <span>{q.after}</span>
                {resultIcon(ex1Results[q.id] ?? null)}
                {ex1Results[q.id] === false && (
                  <span className="text-sm text-red-600 ml-2">({q.answer} ... {q.answer2})</span>
                )}
              </div>
            ))}
          </div>
          <Button onClick={checkEx1} className="mt-4 bg-brand-royal hover:bg-brand-navy">Check Answers</Button>
        </CardContent>
      </Card>

      {/* Article + Exercise 2 */}
      <Card className="service-card">
        <CardContent className="p-6">
          <h3 className="text-xl font-semibold mb-2 font-merriweather text-foreground">Exercise 2 — Match Questions to the Interview</h3>
          <p className="text-muted-foreground mb-4">Write each of the questions from Exercise 1 in the correct gap in the interview. (There is one extra question.)</p>

          <Accordion type="single" collapsible className="mb-6">
            <AccordionItem value="article">
              <AccordionTrigger className="text-foreground font-semibold">Read the article about Gabriella Andrews</AccordionTrigger>
              <AccordionContent>
                <div className="bg-muted/30 rounded-lg p-4 text-foreground leading-relaxed">
                  <p className="font-bold text-lg mb-2 italic">"Forget the stereotype of accountants: they are now ambitious, smooth-talking business strategists"</p>
                  <p>{interviewArticle}</p>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <div className="space-y-6">
            {interviewQAs.map((qa) => (
              <div key={qa.qNum} className="border-l-4 border-brand-royal/30 pl-4">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-bold text-brand-royal">Q{qa.qNum}:</span>
                  <span className="text-muted-foreground text-sm">Enter the question letter (a–f):</span>
                  <Input
                    ref={(el) => { ex2Refs.current[qa.qNum] = el; }}
                    className={`w-16 ${ex2Results[qa.qNum] === true ? "border-green-500 bg-green-50" : ex2Results[qa.qNum] === false ? "border-red-500 bg-red-50" : ""}`}
                    maxLength={1}
                  />
                  {resultIcon(ex2Results[qa.qNum] ?? null)}
                  {ex2Results[qa.qNum] === false && (
                    <span className="text-sm text-red-600">({qa.answer})</span>
                  )}
                </div>
                <p className="text-foreground"><span className="font-semibold">A:</span> {qa.response}</p>
              </div>
            ))}
          </div>
          <Button onClick={checkEx2} className="mt-4 bg-brand-royal hover:bg-brand-navy">Check Answers</Button>
        </CardContent>
      </Card>

      {/* Exercise 3 — True / False */}
      <Card className="service-card">
        <CardContent className="p-6">
          <h3 className="text-xl font-semibold mb-2 font-merriweather text-foreground">Exercise 3 — True or False?</h3>
          <p className="text-muted-foreground mb-4">Are these statements true or false? Correct the false ones.</p>
          <div className="space-y-3">
            {trueFalseStatements.map((s) => (
              <div key={s.id} className="flex items-start gap-3">
                <span className="font-semibold text-foreground w-6 pt-1">{s.id}</span>
                <div className="flex-1">
                  <p className="text-foreground mb-1">{s.text}</p>
                  <div className="flex gap-2 items-center">
                    <Button
                      size="sm"
                      variant={ex3Answers[s.id] === "true" ? "default" : "outline"}
                      onClick={() => setEx3Answers((prev) => ({ ...prev, [s.id]: "true" }))}
                      className={ex3Answers[s.id] === "true" ? "bg-brand-royal hover:bg-brand-navy" : ""}
                    >
                      True
                    </Button>
                    <Button
                      size="sm"
                      variant={ex3Answers[s.id] === "false" ? "default" : "outline"}
                      onClick={() => setEx3Answers((prev) => ({ ...prev, [s.id]: "false" }))}
                      className={ex3Answers[s.id] === "false" ? "bg-brand-royal hover:bg-brand-navy" : ""}
                    >
                      False
                    </Button>
                    {resultIcon(ex3Results[s.id] ?? null)}
                    {ex3Results[s.id] === false && s.correction && (
                      <span className="text-sm text-red-600 ml-2">{s.correction}</span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <Button onClick={checkEx3} className="mt-4 bg-brand-royal hover:bg-brand-navy">Check Answers</Button>
        </CardContent>
      </Card>

      {/* Talking Point */}
      <Card className="service-card">
        <CardContent className="p-6">
          <h3 className="text-xl font-semibold mb-4 font-merriweather text-foreground">Talking Point</h3>
          <p className="text-foreground font-semibold mb-2">Work in pairs and ask each other similar questions to the ones which Gabriella was asked.</p>
          <p className="text-muted-foreground">Talk about the job you do, or a job you would like to do in the future.</p>
        </CardContent>
      </Card>

      {/* Simple Questions — Grammar + Exercise */}
      <Card className="service-card">
        <CardContent className="p-6">
          <h3 className="text-2xl font-semibold mb-4 font-merriweather text-foreground text-orange-600">Simple Questions</h3>

          <div className="bg-orange-50 border border-orange-200 rounded-lg p-5 mb-6">
            <p className="font-semibold text-foreground mb-2">Questions are formed:</p>
            <ul className="space-y-2 text-foreground">
              <li>■ when the main verb is not <em>be</em>, by putting an auxiliary verb before the subject:
                <div className="ml-4 italic text-muted-foreground mt-1">
                  <p>How long <strong>have you</strong> worked for Carrefour?</p>
                  <p>When <strong>did you</strong> graduate from university?</p>
                  <p>What <strong>do you</strong> like about your present job?</p>
                  <p><strong>Are you</strong> prepared to work long hours?</p>
                </div>
              </li>
              <li>■ when the main verb is <em>be</em>, by putting the main verb before the subject:
                <div className="ml-4 italic text-muted-foreground mt-1">
                  <p><strong>Is</strong> there a telephone near here?</p>
                  <p><strong>Are</strong> you responsible for sales?</p>
                </div>
              </li>
            </ul>
          </div>

          <h4 className="font-semibold text-foreground mb-3">Complete the questions in this interview.</h4>
          <div className="space-y-4">
            {simpleQs.map((q) => (
              <div key={q.id} className="border-l-4 border-orange-300 pl-4">
                <div className="flex items-center flex-wrap gap-1 text-foreground mb-1">
                  <span className="font-bold w-6">{q.id}</span>
                  <Input
                    ref={(el) => { sqRefs.current[q.id] = el; }}
                    className={`inline-block w-48 mx-1 ${sqResults[q.id] === true ? "border-green-500 bg-green-50" : sqResults[q.id] === false ? "border-red-500 bg-red-50" : ""}`}
                    placeholder="..."
                  />
                  <span>{q.after}</span>
                  {resultIcon(sqResults[q.id] ?? null)}
                  {sqResults[q.id] === false && (
                    <span className="text-sm text-red-600 ml-2">({q.answer})</span>
                  )}
                </div>
                <p className="text-muted-foreground text-sm ml-6">{q.response}</p>
              </div>
            ))}
          </div>
          <Button onClick={checkSimpleQs} className="mt-4 bg-brand-royal hover:bg-brand-navy">Check Answers</Button>
        </CardContent>
      </Card>

      {/* Complex Questions — Grammar + Exercise */}
      <Card className="service-card">
        <CardContent className="p-6">
          <h3 className="text-2xl font-semibold mb-4 font-merriweather text-foreground text-orange-600">Complex Questions</h3>

          <div className="bg-orange-50 border border-orange-200 rounded-lg p-5 mb-6">
            <p className="font-semibold text-foreground mb-2">Look at what happens to the word order of questions when you put a short phrase before them:</p>
            <div className="space-y-2 text-foreground">
              <p>How long <strong>have you</strong> worked for Carrefour? →<br />
                <em>Can you tell me</em> how long <strong>you have</strong> worked for Carrefour?</p>
              <p>When <strong>did you</strong> graduate from university? →<br />
                <em>I'd like you to tell me</em> when <strong>you graduated</strong> from university.</p>
              <p>What <strong>do you</strong> like about your present job? →<br />
                <em>I wonder</em> what <strong>you like</strong> about your present job.</p>
              <p>Would your present employer <strong>be prepared</strong> to give you a reference? →<br />
                <em>Do you know if</em> your present employer <strong>would be prepared</strong> to give you a reference?</p>
            </div>
            <p className="mt-3 text-muted-foreground italic">Can you see when to use question marks (?) and when not?</p>
          </div>

          <h4 className="font-semibold text-foreground mb-3">Rewrite these questions, starting with the words given.</h4>
          <div className="space-y-4">
            {complexQs.map((q) => (
              <div key={q.id} className="border-l-4 border-orange-300 pl-4">
                <p className="text-foreground font-semibold mb-1">{q.id}. {q.direct}</p>
                <div className="flex items-center flex-wrap gap-1 text-foreground">
                  <span>{q.starter}</span>
                  <Input
                    ref={(el) => { cqRefs.current[q.id] = el; }}
                    className={`inline-block w-72 mx-1 ${cqResults[q.id] === true ? "border-green-500 bg-green-50" : cqResults[q.id] === false ? "border-red-500 bg-red-50" : ""}`}
                    placeholder="..."
                  />
                  {resultIcon(cqResults[q.id] ?? null)}
                  {cqResults[q.id] === false && (
                    <span className="text-sm text-red-600 ml-2">({q.answer})</span>
                  )}
                </div>
              </div>
            ))}
          </div>
          <Button onClick={checkComplexQs} className="mt-4 bg-brand-royal hover:bg-brand-navy">Check Answers</Button>
        </CardContent>
      </Card>

      <DragFillGaps
        title="Activity 13: Grammar Questions"
        description="Complete these questions with the question words/phrases in the box."
        words={["how", "how long", "how many", "how much", "how often", "what", "when", "where", "which", "who", "why"]}
        sentences={[
          { id: 1, parts: ["1. ", { answer: "who" }, " is your boss? Ms Jones?"] },
          { id: 2, parts: ["2. ", { answer: "how long" }, " have you worked for this company?"] },
          { id: 3, parts: ["3. ", { answer: "which" }, " office would you prefer to work in: company headquarters or a regional office?"] },
          { id: 4, parts: ["4. ", { answer: "where" }, " did you go to school - in this country or abroad?"] },
          { id: 5, parts: ["5. ", { answer: "how often" }, " does your HR department carry out formal appraisals - every six months, or more often?"] },
          { id: 6, parts: ["6. ", { answer: "what" }, " job would you like to be doing in ten years' time?"] },
          { id: 7, parts: ["7. ", { answer: "how many" }, " people work in your office?"] },
          { id: 8, parts: ["8. ", { answer: "how much" }, " does your boss earn?"] },
        ]}
      />
    </div>
  );
};

export default ReadingUnit2;
