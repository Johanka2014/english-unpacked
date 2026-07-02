import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { CheckCircle2, XCircle, Music, Play, BookOpen, Brain, ShieldAlert } from 'lucide-react';

// ── Data ────────────────────────────────────────────────────────────────

interface ModalVerb {
  verb: string;
  meaning: string;
  usage: string;
  example: string;
  level: 'beginner' | 'intermediate' | 'advanced';
}

const modalVerbs: ModalVerb[] = [
  { verb: 'Can', meaning: 'Ability, possibility, or permission', usage: 'Express ability in the present or permission', example: 'I can speak English fluently.', level: 'beginner' },
  { verb: 'Could', meaning: 'Past ability, polite requests, or possibility', usage: 'Past tense of can, polite requests, or uncertain possibility', example: 'Could you help me with this task?', level: 'beginner' },
  { verb: 'May', meaning: 'Permission, possibility, or formal requests', usage: 'Formal permission or expressing possibility', example: 'May I borrow your pen?', level: 'intermediate' },
  { verb: 'Might', meaning: 'Possibility or uncertainty', usage: 'Express uncertain possibility or past possibility', example: 'It might rain tomorrow.', level: 'intermediate' },
  { verb: 'Must', meaning: 'Necessity, obligation, or strong probability', usage: 'Express strong obligation or logical deduction', example: 'Students must complete their homework.', level: 'beginner' },
  { verb: 'Should', meaning: 'Advice, recommendation, or expectation', usage: 'Give advice or express what is expected', example: 'You should exercise regularly for good health.', level: 'beginner' },
  { verb: 'Will', meaning: 'Future plans, predictions, or promises', usage: 'Express future actions, willingness, or promises', example: 'I will call you tomorrow morning.', level: 'beginner' },
  { verb: 'Would', meaning: 'Conditional situations, polite requests, or past habits', usage: 'Conditional statements, polite requests, or repeated past actions', example: 'Would you like some coffee?', level: 'intermediate' },
];

interface QuizQuestion {
  id: string;
  question: string;
  options: { id: string; text: string; isCorrect: boolean }[];
  explanation: string;
}

const quizQuestions: QuizQuestion[] = [
  { id: 'ex1', question: 'I _____ speak three languages fluently.', options: [{ id: 'a', text: 'can', isCorrect: true }, { id: 'b', text: 'must', isCorrect: false }, { id: 'c', text: 'should', isCorrect: false }, { id: 'd', text: 'might', isCorrect: false }], explanation: "'Can' expresses ability. When talking about skills you possess, 'can' is the correct choice." },
  { id: 'ex2', question: 'Students _____ wear uniforms to school.', options: [{ id: 'a', text: 'can', isCorrect: false }, { id: 'b', text: 'must', isCorrect: true }, { id: 'c', text: 'might', isCorrect: false }, { id: 'd', text: 'could', isCorrect: false }], explanation: "'Must' expresses strong obligation or necessity. School rules typically require uniforms, making this the correct choice." },
  { id: 'ex3', question: '_____ you help me carry these boxes?', options: [{ id: 'a', text: 'Must', isCorrect: false }, { id: 'b', text: 'Should', isCorrect: false }, { id: 'c', text: 'Could', isCorrect: true }, { id: 'd', text: 'Will', isCorrect: false }], explanation: "'Could' is used for polite requests. It's more polite than 'can' when asking for help." },
  { id: 'ex4', question: "It _____ be sunny tomorrow, but I'm not sure.", options: [{ id: 'a', text: 'must', isCorrect: false }, { id: 'b', text: 'will', isCorrect: false }, { id: 'c', text: 'might', isCorrect: true }, { id: 'd', text: 'should', isCorrect: false }], explanation: "'Might' expresses uncertainty or possibility. When you're not sure about something, 'might' is appropriate." },
  { id: 'ex5', question: 'You _____ eat more vegetables for better health.', options: [{ id: 'a', text: 'could', isCorrect: false }, { id: 'b', text: 'should', isCorrect: true }, { id: 'c', text: 'must', isCorrect: false }, { id: 'd', text: 'might', isCorrect: false }], explanation: "'Should' gives advice or recommendations. It suggests what would be good to do without being as strong as 'must'." },
  { id: 'ex6', question: '_____ I borrow your textbook for the weekend?', options: [{ id: 'a', text: 'Should', isCorrect: false }, { id: 'b', text: 'Must', isCorrect: false }, { id: 'c', text: 'May', isCorrect: true }, { id: 'd', text: 'Will', isCorrect: false }], explanation: "'May' is used for formal permission requests. It's more formal than 'can' when asking for permission." },
  { id: 'ex7', question: 'When I was young, I _____ play piano beautifully.', options: [{ id: 'a', text: 'can', isCorrect: false }, { id: 'b', text: 'could', isCorrect: true }, { id: 'c', text: 'should', isCorrect: false }, { id: 'd', text: 'must', isCorrect: false }], explanation: "'Could' expresses past ability. It's the past tense of 'can' when talking about abilities you had before." },
  { id: 'ex8', question: 'I _____ finish this project by Friday.', options: [{ id: 'a', text: 'might', isCorrect: false }, { id: 'b', text: 'should', isCorrect: false }, { id: 'c', text: 'will', isCorrect: true }, { id: 'd', text: 'could', isCorrect: false }], explanation: "'Will' expresses future intention or promise. It shows determination and commitment to complete the task." },
];

interface LyricLine {
  line: string;
  blanks: { answer: string; explanation?: string }[];
}

const lyrics: LyricLine[] = [
  { line: 'I had a dream', blanks: [] },
  { line: 'I got everything I wanted', blanks: [] },
  { line: "Not what you'd think", blanks: [] },
  { line: "And if I'm being honest", blanks: [] },
  { line: 'It ___ have been a nightmare', blanks: [{ answer: 'might', explanation: "'Might' expresses uncertainty or possibility about past events." }] },
  { line: 'To anyone who ___ care', blanks: [{ answer: 'might', explanation: "'Might' expresses uncertainty or possibility about past events." }] },
  { line: "'I thought I ___ fly", blanks: [{ answer: 'could', explanation: "'Could' expresses past ability or possibility that was believed to be true." }] },
  { line: 'So I stepped off the Golden', blanks: [] },
  { line: 'Nobody cried', blanks: [] },
  { line: 'Nobody even noticed', blanks: [] },
  { line: 'I saw them standing right there', blanks: [] },
  { line: 'Kinda thought they ___ care', blanks: [{ answer: 'might', explanation: "'Might' expresses a weak possibility or hope about others' reactions." }] },
  { line: 'I had a dream', blanks: [] },
  { line: 'I got everything I wanted', blanks: [] },
  { line: 'But when I wake up, I see', blanks: [] },
  { line: 'You with me', blanks: [] },
  { line: "And you say, As long as I'm here", blanks: [] },
  { line: 'No one can hurt you', blanks: [] },
  { line: "Don't wanna lie here", blanks: [] },
  { line: 'But you can learn to', blanks: [] },
  { line: 'If I ___ change', blanks: [{ answer: 'could', explanation: "'Could' expresses past ability or possibility that was believed to be true." }] },
  { line: 'The way that you see yourself', blanks: [] },
  { line: "You wouldn't wonder why you hear", blanks: [] },
  { line: "They don't deserve you", blanks: [] },
  { line: 'I tried to scream', blanks: [] },
  { line: 'but my head was underwater', blanks: [] },
  { line: 'They called me weak', blanks: [] },
  { line: "Like I'm not somebody's daughter", blanks: [] },
  { line: 'It ___ have been a nightmare', blanks: [{ answer: 'might', explanation: "'Might' expresses uncertainty or possibility about past events." }] },
  { line: 'But it felt like they were right there', blanks: [] },
];

// ── Section A: Reference ────────────────────────────────────────────────

const ReferenceSection = () => {
  const [selected, setSelected] = useState<ModalVerb>(modalVerbs[0]);

  return (
    <Card className="service-card">
      <CardContent className="p-6">
        <div className="flex items-center gap-3 mb-2">
          <BookOpen className="h-6 w-6 text-primary" />
          <h3 className="text-2xl font-semibold font-merriweather text-foreground">
            1. Modal Verbs Reference
          </h3>
        </div>
        <p className="text-muted-foreground mb-6">
          Click any modal verb to see its meaning, usage and an example sentence.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
          {modalVerbs.map((v) => {
            const isSel = selected.verb === v.verb;
            return (
              <button
                key={v.verb}
                onClick={() => setSelected(v)}
                className={`p-4 rounded-lg border-2 text-center transition-all ${
                  isSel
                    ? 'border-primary bg-primary/10 ring-2 ring-primary/30'
                    : 'border-border bg-background hover:border-primary/50 hover:bg-primary/5'
                }`}
              >
                <p className={`text-lg font-bold font-merriweather ${isSel ? 'text-primary' : 'text-foreground'}`}>
                  {v.verb}
                </p>
                <p className="text-xs text-muted-foreground capitalize mt-1">{v.level}</p>
              </button>
            );
          })}
        </div>

        <div className="bg-muted/30 rounded-lg p-5 border border-border space-y-3">
          <h4 className="text-xl font-bold text-primary font-merriweather">{selected.verb}</h4>
          <div>
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-1">Meaning</p>
            <p className="text-foreground text-sm">{selected.meaning}</p>
          </div>
          <div>
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-1">Usage</p>
            <p className="text-foreground text-sm">{selected.usage}</p>
          </div>
          <div>
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-1">Example</p>
            <p className="text-foreground italic text-sm border-l-4 border-primary pl-3">"{selected.example}"</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

// ── Section B: Practice Quiz ────────────────────────────────────────────

const QuizSection = () => {
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [checked, setChecked] = useState(false);

  const score = checked
    ? quizQuestions.filter((q) => {
        const sel = q.options.find((o) => o.id === answers[q.id]);
        return sel?.isCorrect;
      }).length
    : 0;

  const reset = () => {
    setAnswers({});
    setChecked(false);
  };

  return (
    <Card className="service-card">
      <CardContent className="p-6">
        <div className="flex items-center gap-3 mb-2">
          <Brain className="h-6 w-6 text-primary" />
          <h3 className="text-2xl font-semibold font-merriweather text-foreground">
            2. Practice Quiz
          </h3>
        </div>
        <p className="text-muted-foreground mb-6">
          Choose the correct modal verb for each sentence.
        </p>

        <div className="space-y-6">
          {quizQuestions.map((q, idx) => {
            const selectedId = answers[q.id];
            return (
              <div key={q.id} className="border-l-4 border-primary/30 pl-4">
                <p className="text-foreground font-medium mb-3">
                  <span className="text-muted-foreground mr-2">{idx + 1}.</span>
                  {q.question}
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                  {q.options.map((opt) => {
                    const isSel = selectedId === opt.id;
                    let cls = 'border-border bg-background hover:border-primary/50';
                    if (checked) {
                      if (opt.isCorrect) cls = 'border-green-500 bg-green-50 text-green-700';
                      else if (isSel) cls = 'border-red-500 bg-red-50 text-red-700';
                      else cls = 'border-border bg-background opacity-50';
                    } else if (isSel) {
                      cls = 'border-primary bg-primary/10';
                    }
                    return (
                      <button
                        key={opt.id}
                        disabled={checked}
                        onClick={() => setAnswers((p) => ({ ...p, [q.id]: opt.id }))}
                        className={`p-2 text-sm rounded-md border-2 transition-all flex items-center justify-between ${cls}`}
                      >
                        <span>{opt.text}</span>
                        {checked && opt.isCorrect && <CheckCircle2 className="h-4 w-4" />}
                        {checked && isSel && !opt.isCorrect && <XCircle className="h-4 w-4" />}
                      </button>
                    );
                  })}
                </div>
                {checked && (
                  <p className="mt-2 text-xs text-muted-foreground italic">{q.explanation}</p>
                )}
              </div>
            );
          })}
        </div>

        <div className="flex items-center gap-3 mt-6">
          {!checked ? (
            <Button
              onClick={() => setChecked(true)}
              disabled={Object.keys(answers).length < quizQuestions.length}
            >
              Check Answers
            </Button>
          ) : (
            <>
              <div className="p-3 bg-muted rounded-lg">
                <p className="text-sm font-medium text-foreground">
                  Score: {score} / {quizQuestions.length}
                </p>
              </div>
              <Button variant="outline" onClick={reset}>Try Again</Button>
            </>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

// ── Section C: Listening ────────────────────────────────────────────────

const ListeningSection = () => {
  const allBlanks = lyrics.flatMap((l) => l.blanks);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [checked, setChecked] = useState(false);

  const score = checked
    ? allBlanks.filter((b, i) => (answers[i] || '').trim().toLowerCase() === b.answer.toLowerCase()).length
    : 0;

  let blankCounter = 0;

  const reset = () => {
    setAnswers({});
    setChecked(false);
  };

  return (
    <Card className="service-card">
      <CardContent className="p-6">
        <div className="flex items-center gap-3 mb-2">
          <Music className="h-6 w-6 text-primary" />
          <h3 className="text-2xl font-semibold font-merriweather text-foreground">
            3. Listening — Billie Eilish, "everything i wanted"
          </h3>
        </div>
        <p className="text-muted-foreground mb-6">
          Listen to the song and fill in the missing modal verbs in the lyrics below.
        </p>

        <div className="aspect-video rounded-lg overflow-hidden bg-muted mb-6 max-w-3xl mx-auto">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/qCTMq7xvdXU"
            title="Billie Eilish - everything i wanted"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        <div className="flex items-start gap-2 p-3 bg-primary/5 rounded-lg border border-primary/20 mb-4">
          <Play className="h-4 w-4 text-primary mt-0.5 shrink-0" />
          <p className="text-sm text-muted-foreground">
            Type the modal verb you hear in each blank. Most blanks are <em>might</em> or <em>could</em>.
          </p>
        </div>

        <div className="bg-muted/30 border border-border rounded-lg p-5 space-y-1.5 mb-6">
          {lyrics.map((l, li) => {
            if (l.blanks.length === 0) {
              return (
                <p key={li} className="text-sm text-muted-foreground">{l.line}</p>
              );
            }
            const parts = l.line.split('___');
            return (
              <p key={li} className="text-sm text-foreground flex flex-wrap items-center gap-1.5">
                {parts.map((part, pi) => {
                  const isLast = pi === parts.length - 1;
                  if (isLast) return <span key={pi}>{part}</span>;
                  const bIdx = blankCounter++;
                  const blank = l.blanks[pi];
                  const val = answers[bIdx] || '';
                  const correct = checked && val.trim().toLowerCase() === blank.answer.toLowerCase();
                  const wrong = checked && !correct;
                  return (
                    <span key={pi} className="inline-flex items-center gap-1">
                      <span>{part}</span>
                      <Input
                        value={val}
                        disabled={checked}
                        onChange={(e) => setAnswers((p) => ({ ...p, [bIdx]: e.target.value }))}
                        className={`inline-block w-24 h-7 text-sm text-center ${
                          correct ? 'border-green-500 bg-green-50' : wrong ? 'border-red-500 bg-red-50' : ''
                        }`}
                        placeholder="___"
                      />
                      {correct && <CheckCircle2 className="h-4 w-4 text-green-600" />}
                      {wrong && (
                        <>
                          <XCircle className="h-4 w-4 text-red-500" />
                          <span className="text-xs text-green-700 font-medium">{blank.answer}</span>
                        </>
                      )}
                    </span>
                  );
                })}
              </p>
            );
          })}
        </div>

        <div className="flex items-center gap-3">
          {!checked ? (
            <Button onClick={() => setChecked(true)} disabled={Object.keys(answers).length === 0}>
              Check Answers
            </Button>
          ) : (
            <>
              <div className="p-3 bg-muted rounded-lg">
                <p className="text-sm font-medium text-foreground">
                  Score: {score} / {allBlanks.length}
                </p>
              </div>
              <Button variant="outline" onClick={reset}>Try Again</Button>
            </>
          )}
        </div>

        {checked && (
          <div className="mt-6 space-y-2">
            <h4 className="font-semibold text-foreground text-sm">Explanations</h4>
            {allBlanks.map((b, i) => (
              <div key={i} className="text-xs text-muted-foreground bg-background border border-border rounded p-2">
                <span className="font-semibold text-foreground">{b.answer}</span>
                {b.explanation && <span> — {b.explanation}</span>}
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

// ── Section D: Advanced C1 Safety Quiz ──────────────────────────────────

interface AdvQuestion {
  question: string;
  options: string[];
  answer: string;
}

const advancedQuizData: AdvQuestion[] = [
  { question: 'If you neglect the safety protocols, accidents ___ to happen.', options: ['are bound', 'may well', 'should have'], answer: 'are bound' },
  { question: "You ___ disregard the phishing email warning from the IT department. It's crucial.", options: ["couldn't", 'had better not', "don't have to"], answer: 'had better not' },
  { question: 'The emergency exits ___ to be kept clear, but they were blocked by boxes.', options: ['were supposed', 'might have', 'would'], answer: 'were supposed' },
  { question: 'The security seal is broken. Someone ___ have tampered with the container.', options: ['must', 'should', "can't"], answer: 'must' },
  { question: 'As per regulations, employees ___ operate this machinery without prior certification.', options: ['may not', "needn't", "can't have"], answer: 'may not' },
  { question: 'He ignored the warning signs and got injured. He ___ have been more cautious.', options: ['must', 'could', 'should'], answer: 'should' },
  { question: 'The system is still online; the hacker ___ have breached the main firewall yet.', options: ["can't", "mustn't", "shouldn't"], answer: "can't" },
  { question: 'Without proper gear, a fall from that height ___ conceivably be fatal.', options: ['should', 'could', 'must'], answer: 'could' },
  { question: "Visitors ___ sign in at reception upon arrival; it's a strict policy.", options: ['are to', 'can', 'would'], answer: 'are to' },
  { question: 'I brought my own safety goggles, so I ___ have taken a pair from the lab.', options: ["mustn't", "needn't", "couldn't"], answer: "needn't" },
  { question: "If the safety net hadn't been there, the consequences ___ have been far worse.", options: ['would', 'must', 'should'], answer: 'would' },
  { question: 'One ___ to familiarise oneself with the evacuation plan before starting work here.', options: ['ought', 'has', 'is bound'], answer: 'ought' },
  { question: "The power outage ___ been caused by the storm, but we're still investigating other possibilities.", options: ['must have', 'might have', 'should have'], answer: 'might have' },
  { question: 'You ___ have clicked that link without verifying the sender first. Now your data is at risk.', options: ["mustn't", "couldn't", "shouldn't"], answer: "shouldn't" },
  { question: 'Ignoring this software update ___ well lead to significant security vulnerabilities.', options: ['can', 'may', 'ought to'], answer: 'may' },
  { question: 'The instructions were clear. You ___ have had any difficulty assembling the safety guard.', options: ["can't", "mustn't", "needn't"], answer: "can't" },
  { question: 'Given the potential for a chemical spill, you really ___ to wear the supplied respirator.', options: ['would', 'ought', 'are bound'], answer: 'ought' },
  { question: 'He ___ have been speeding, otherwise he would have been able to stop in time.', options: ['must', 'could', 'should'], answer: 'must' },
  { question: 'By law, all personnel entering this zone ___ be wearing a high-visibility jacket.', options: ['are to', 'would', 'could'], answer: 'are to' },
  { question: 'It was a dangerous situation. You ___ have been seriously injured!', options: ['should', 'must', 'could'], answer: 'could' },
];

const shuffle = <T,>(arr: T[]): T[] => [...arr].sort(() => Math.random() - 0.5);

const AdvancedSafetyQuizSection = () => {
  const [questions, setQuestions] = useState<AdvQuestion[]>(() => shuffle(advancedQuizData));
  const [idx, setIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [done, setDone] = useState(false);

  const current = questions[idx];

  const selectAnswer = (opt: string) => {
    if (selected) return;
    setSelected(opt);
    const correct = opt === current.answer;
    if (correct) setScore((s) => s + 1);
    setTimeout(() => {
      if (idx + 1 < questions.length) {
        setIdx(idx + 1);
        setSelected(null);
      } else {
        setDone(true);
      }
    }, 1500);
  };

  const restart = () => {
    setQuestions(shuffle(advancedQuizData));
    setIdx(0);
    setScore(0);
    setSelected(null);
    setDone(false);
  };

  const percentage = Math.round((score / questions.length) * 100);
  const feedback =
    percentage === 100 ? 'Exceptional! Your command of modal verbs is truly C1 level.'
    : percentage >= 75 ? 'Excellent work. You have a strong grasp of these complex modal structures.'
    : percentage >= 50 ? 'A solid performance. Reviewing the incorrect answers will help you master these nuances.'
    : 'Good effort. These are challenging concepts; consistent practice is key to improvement.';

  return (
    <Card className="service-card">
      <CardContent className="p-6">
        <div className="flex items-center gap-3 mb-2">
          <ShieldAlert className="h-6 w-6 text-primary" />
          <h3 className="text-2xl font-semibold font-merriweather text-foreground">
            4. Advanced Quiz — C1 Safety Scenarios
          </h3>
        </div>
        <p className="text-muted-foreground mb-6">
          Choose the most appropriate modal verb for each real-world safety scenario.
        </p>

        {!done ? (
          <div className="max-w-2xl mx-auto">
            <div className="flex justify-between items-center mb-4">
              <p className="text-sm text-muted-foreground">Question {idx + 1} of {questions.length}</p>
              <p className="text-sm font-semibold text-foreground">Score: {score}</p>
            </div>
            <p className="text-lg text-foreground mb-6 font-medium min-h-[4rem]">{current.question}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {current.options.map((opt) => {
                const isCorrect = selected && opt === current.answer;
                const isWrongPick = selected === opt && opt !== current.answer;
                let cls = 'border-border bg-background hover:border-primary/50 hover:bg-primary/5';
                if (isCorrect) cls = 'border-green-500 bg-green-50 text-green-700';
                else if (isWrongPick) cls = 'border-red-500 bg-red-50 text-red-700';
                else if (selected) cls = 'border-border bg-background opacity-60';
                return (
                  <button
                    key={opt}
                    disabled={!!selected}
                    onClick={() => selectAnswer(opt)}
                    className={`p-3 rounded-lg border-2 font-medium transition-all flex items-center justify-between ${cls}`}
                  >
                    <span>{opt}</span>
                    {isCorrect && <CheckCircle2 className="h-4 w-4" />}
                    {isWrongPick && <XCircle className="h-4 w-4" />}
                  </button>
                );
              })}
            </div>
          </div>
        ) : (
          <div className="max-w-2xl mx-auto text-center py-6">
            <h4 className="text-2xl font-bold text-foreground font-merriweather mb-3">Quiz Complete!</h4>
            <p className="text-lg text-foreground mb-2">
              Your final score is {score} out of {questions.length} ({percentage}%)
            </p>
            <p className="text-muted-foreground mb-6">{feedback}</p>
            <Button onClick={restart}>Try Again</Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

// ── Main ────────────────────────────────────────────────────────────────

const ModalVerbsMasterLesson = () => (
  <div className="space-y-8">
    <Card className="service-card">
      <CardContent className="p-6">
        <h2 className="text-2xl md:text-3xl font-bold font-merriweather text-foreground mb-2">
          Modal Verbs Master
        </h2>
        <p className="text-muted-foreground">
          Master <strong>Can, Could, May, Might, Must, Should, Will</strong> and <strong>Would</strong> through
          a reference guide, an interactive practice quiz, a real-song listening activity, and an advanced C1 challenge.
        </p>
      </CardContent>
    </Card>
    <ReferenceSection />
    <QuizSection />
    <ListeningSection />
    <AdvancedSafetyQuizSection />
  </div>
);

export default ModalVerbsMasterLesson;

