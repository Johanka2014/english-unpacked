import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { CheckCircle2, XCircle, Music, Play, BookOpen, Target, PenTool, Search } from 'lucide-react';

// ── Data ────────────────────────────────────────────────────────────────

interface Pattern {
  pattern: string;
  structure: string;
  usage: string;
  example: string;
  level: 'beginner' | 'intermediate' | 'advanced';
}

const patterns: Pattern[] = [
  { pattern: 'So + Adjective + That', structure: 'so + adjective + that + clause', usage: 'Express degree/intensity with result', example: 'The movie was so interesting that I watched it twice.', level: 'beginner' },
  { pattern: 'So + Adverb + That', structure: 'so + adverb + that + clause', usage: 'Express intensity of action with result', example: "She speaks so quickly that I can't understand her.", level: 'beginner' },
  { pattern: 'So + Many/Much + That', structure: 'so + many/much + noun + that + clause', usage: 'Express large quantity with result', example: "There were so many people that we couldn't get in.", level: 'intermediate' },
  { pattern: 'So + Few/Little + That', structure: 'so + few/little + noun + that + clause', usage: 'Express small quantity with result', example: "He has so little money that he can't buy food.", level: 'intermediate' },
  { pattern: 'Such + Adjective + Noun + That', structure: 'such + (adjective) + noun + that + clause', usage: 'Express degree about nouns with result', example: 'It was such bad weather that we stayed home.', level: 'intermediate' },
  { pattern: 'Such + A/An + Adjective + Noun', structure: 'such + a/an + adjective + singular noun + that + clause', usage: 'Express degree with singular countable nouns', example: "He's such a good teacher that everyone loves his classes.", level: 'intermediate' },
  { pattern: 'So + Adjective (without that)', structure: 'so + adjective (for emphasis)', usage: 'Express strong degree without result clause', example: 'The cake looks so delicious!', level: 'beginner' },
  { pattern: 'Such + Noun (without that)', structure: 'such + (adjective) + noun (for emphasis)', usage: 'Express strong degree without result clause', example: 'Such beautiful flowers!', level: 'advanced' },
];

interface MCQ {
  id: string;
  question: string;
  options: { id: string; text: string; isCorrect: boolean }[];
  explanation: string;
}

const mcQuestions: MCQ[] = [
  { id: 'mc1', question: 'The test was _____ difficult that nobody passed.', options: [{ id: 'a', text: 'so', isCorrect: true }, { id: 'b', text: 'such', isCorrect: false }, { id: 'c', text: 'such a', isCorrect: false }, { id: 'd', text: 'very', isCorrect: false }], explanation: "'So' is used before adjectives. 'So + adjective + that' expresses a high degree with a result." },
  { id: 'mc2', question: 'It was _____ good movie that I want to see it again.', options: [{ id: 'a', text: 'so', isCorrect: false }, { id: 'b', text: 'such', isCorrect: false }, { id: 'c', text: 'such a', isCorrect: true }, { id: 'd', text: 'so a', isCorrect: false }], explanation: "'Such a' is used before adjective + singular countable noun." },
  { id: 'mc3', question: 'There were _____ many students that the room was crowded.', options: [{ id: 'a', text: 'such', isCorrect: false }, { id: 'b', text: 'so', isCorrect: true }, { id: 'c', text: 'such a', isCorrect: false }, { id: 'd', text: 'very', isCorrect: false }], explanation: "'So' is used with quantifiers like many, much, few, little." },
  { id: 'mc4', question: 'They had _____ terrible weather during their vacation.', options: [{ id: 'a', text: 'so', isCorrect: false }, { id: 'b', text: 'such', isCorrect: true }, { id: 'c', text: 'so a', isCorrect: false }, { id: 'd', text: 'very', isCorrect: false }], explanation: "'Such' is used directly before adjective + uncountable noun." },
  { id: 'mc5', question: 'She speaks _____ quietly that I can barely hear her.', options: [{ id: 'a', text: 'such', isCorrect: false }, { id: 'b', text: 'so', isCorrect: true }, { id: 'c', text: 'such a', isCorrect: false }, { id: 'd', text: 'very', isCorrect: false }], explanation: "'So' is used before adverbs." },
  { id: 'mc6', question: "He has _____ little time that he can't help us.", options: [{ id: 'a', text: 'such', isCorrect: false }, { id: 'b', text: 'such a', isCorrect: false }, { id: 'c', text: 'so', isCorrect: true }, { id: 'd', text: 'very', isCorrect: false }], explanation: "'So' is used with 'little' (uncountable)." },
  { id: 'mc7', question: 'What _____ beautiful children they have!', options: [{ id: 'a', text: 'so', isCorrect: false }, { id: 'b', text: 'such', isCorrect: true }, { id: 'c', text: 'so a', isCorrect: false }, { id: 'd', text: 'very', isCorrect: false }], explanation: "'Such' is used before adjective + plural noun in exclamations." },
  { id: 'mc8', question: 'The book is _____ interesting!', options: [{ id: 'a', text: 'such', isCorrect: false }, { id: 'b', text: 'such a', isCorrect: false }, { id: 'c', text: 'so', isCorrect: true }, { id: 'd', text: 'such an', isCorrect: false }], explanation: "'So' + adjective can be used alone for emphasis without 'that' clause." },
];

interface FillBlank {
  sentence: string;
  answer: string;
  explanation: string;
}

const fillBlanks: FillBlank[] = [
  { sentence: 'She was ___ tired that she fell asleep immediately.', answer: 'so', explanation: "Use 'so' + adjective (tired) + 'that' clause." },
  { sentence: 'It was ___ a beautiful day that we decided to go to the beach.', answer: 'such', explanation: "Use 'such' + article + adjective + noun." },
  { sentence: "He speaks ___ quickly that I can't understand him.", answer: 'so', explanation: "Use 'so' + adverb (quickly) + 'that' clause." },
  { sentence: 'They have ___ lovely children!', answer: 'such', explanation: "Use 'such' + adjective + plural noun." },
  { sentence: 'The movie was ___ boring that I left early.', answer: 'so', explanation: "Use 'so' + adjective + 'that' clause." },
];

interface PatternQ {
  sentence: string;
  options: { id: string; text: string; isCorrect: boolean }[];
  explanation: string;
}

const patternQuestions: PatternQ[] = [
  { sentence: 'She is so beautiful that everyone admires her.', options: [{ id: '1', text: 'so + adjective + that', isCorrect: true }, { id: '2', text: 'such + adjective + that', isCorrect: false }, { id: '3', text: 'so + noun + that', isCorrect: false }], explanation: "Uses 'so' + adjective (beautiful) + 'that' clause." },
  { sentence: 'It was such a wonderful experience!', options: [{ id: '1', text: 'so + adjective', isCorrect: false }, { id: '2', text: 'such + article + adjective + noun', isCorrect: true }, { id: '3', text: 'so + noun', isCorrect: false }], explanation: "Uses 'such' + article (a) + adjective + noun." },
  { sentence: 'He runs so fast!', options: [{ id: '1', text: 'so + adverb', isCorrect: true }, { id: '2', text: 'such + adverb', isCorrect: false }, { id: '3', text: 'so + adjective', isCorrect: false }], explanation: "Uses 'so' + adverb (fast)." },
  { sentence: 'They have such nice neighbors.', options: [{ id: '1', text: 'so + adjective + noun', isCorrect: false }, { id: '2', text: 'such + adjective + plural noun', isCorrect: true }, { id: '3', text: 'so + plural noun', isCorrect: false }], explanation: "Uses 'such' + adjective + plural noun." },
];

interface LyricLine {
  line: string;
  blanks: { answer: string; explanation?: string }[];
}

const lyrics: LyricLine[] = [
  { line: "I'm not saying it was your fault", blanks: [] },
  { line: 'Although you could have done more', blanks: [] },
  { line: "Oh you're ___ naive yet ___", blanks: [
    { answer: 'so', explanation: "'So' + adjective emphasizes the degree of naivety." },
    { answer: 'so', explanation: "'So' + adjective creates parallel structure for emphasis." },
  ]},
  { line: "Oh you're ___ naive yet ___", blanks: [
    { answer: 'so', explanation: "'So' + adjective emphasizes the degree." },
    { answer: 'so', explanation: "Repeated 'so' creates parallel structure." },
  ]},
  { line: 'How could this be done', blanks: [] },
  { line: 'By ___ a smiling sweetheart', blanks: [{ answer: 'such', explanation: "'Such' + article + adjective + noun describes what kind of person." }] },
  { line: 'Oh and your sweet and pretty face', blanks: [] },
  { line: 'In ___ an ugly way', blanks: [{ answer: 'such', explanation: "'Such' + article + adjective + noun emphasizes the contrast." }] },
  { line: 'Something ___ beautiful', blanks: [{ answer: 'so', explanation: "'So' + adjective expresses high degree of beauty." }] },
  { line: 'Oh that every time I look inside', blanks: [] },
  { line: "I know she knows that I'm not fond of asking", blanks: [] },
  { line: 'True or false it may be', blanks: [] },
  { line: "She's still out to get me", blanks: [] },
  { line: 'I may say it was your fault', blanks: [] },
  { line: 'Because I know you could have done more', blanks: [] },
  { line: "Oh you're ___ naive yet ___", blanks: [
    { answer: 'so', explanation: "'So' + adjective emphasizes the degree." },
    { answer: 'so', explanation: "Repeated 'so' creates emphasis and rhythm." },
  ]},
];

// ── Section A: Reference ────────────────────────────────────────────────

const ReferenceSection = () => {
  const [selected, setSelected] = useState<Pattern>(patterns[0]);
  return (
    <Card className="service-card">
      <CardContent className="p-6">
        <div className="flex items-center gap-3 mb-2">
          <BookOpen className="h-6 w-6 text-primary" />
          <h3 className="text-2xl font-semibold font-merriweather text-foreground">1. So/Such Patterns Reference</h3>
        </div>
        <p className="text-muted-foreground mb-6">Click any pattern to see its structure, usage and an example sentence.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
          {patterns.map((p) => {
            const isSel = selected.pattern === p.pattern;
            return (
              <button
                key={p.pattern}
                onClick={() => setSelected(p)}
                className={`p-3 rounded-lg border-2 text-left transition-all ${
                  isSel
                    ? 'border-primary bg-primary/10 ring-2 ring-primary/30'
                    : 'border-border bg-background hover:border-primary/50 hover:bg-primary/5'
                }`}
              >
                <p className={`text-sm font-bold font-merriweather ${isSel ? 'text-primary' : 'text-foreground'}`}>{p.pattern}</p>
                <p className="text-xs text-muted-foreground capitalize mt-1">{p.level}</p>
              </button>
            );
          })}
        </div>

        <div className="bg-muted/30 rounded-lg p-5 border border-border space-y-3">
          <h4 className="text-xl font-bold text-primary font-merriweather">{selected.pattern}</h4>
          <div>
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-1">Structure</p>
            <p className="text-foreground text-sm font-mono">{selected.structure}</p>
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

// ── Section B: Multiple Choice ──────────────────────────────────────────

const MultipleChoiceSection = () => {
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [checked, setChecked] = useState(false);
  const score = checked
    ? mcQuestions.filter((q) => q.options.find((o) => o.id === answers[q.id])?.isCorrect).length
    : 0;
  const reset = () => { setAnswers({}); setChecked(false); };

  return (
    <Card className="service-card">
      <CardContent className="p-6">
        <div className="flex items-center gap-3 mb-2">
          <Target className="h-6 w-6 text-primary" />
          <h3 className="text-2xl font-semibold font-merriweather text-foreground">2. Multiple Choice</h3>
        </div>
        <p className="text-muted-foreground mb-6">Choose the correct word for each sentence.</p>

        <div className="space-y-6">
          {mcQuestions.map((q, idx) => {
            const selectedId = answers[q.id];
            return (
              <div key={q.id} className="border-l-4 border-primary/30 pl-4">
                <p className="text-foreground font-medium mb-3">
                  <span className="text-muted-foreground mr-2">{idx + 1}.</span>{q.question}
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                  {q.options.map((opt) => {
                    const isSel = selectedId === opt.id;
                    let cls = 'border-border bg-background hover:border-primary/50';
                    if (checked) {
                      if (opt.isCorrect) cls = 'border-green-500 bg-green-50 text-green-700';
                      else if (isSel) cls = 'border-red-500 bg-red-50 text-red-700';
                      else cls = 'border-border bg-background opacity-50';
                    } else if (isSel) cls = 'border-primary bg-primary/10';
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
                {checked && <p className="mt-2 text-xs text-muted-foreground italic">{q.explanation}</p>}
              </div>
            );
          })}
        </div>

        <div className="flex items-center gap-3 mt-6">
          {!checked ? (
            <Button onClick={() => setChecked(true)} disabled={Object.keys(answers).length < mcQuestions.length}>
              Check Answers
            </Button>
          ) : (
            <>
              <div className="p-3 bg-muted rounded-lg">
                <p className="text-sm font-medium text-foreground">Score: {score} / {mcQuestions.length}</p>
              </div>
              <Button variant="outline" onClick={reset}>Try Again</Button>
            </>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

// ── Section C: Fill in the Blanks ───────────────────────────────────────

const FillBlanksSection = () => {
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [checked, setChecked] = useState(false);
  const score = checked
    ? fillBlanks.filter((f, i) => (answers[i] || '').trim().toLowerCase() === f.answer.toLowerCase()).length
    : 0;
  const reset = () => { setAnswers({}); setChecked(false); };

  return (
    <Card className="service-card">
      <CardContent className="p-6">
        <div className="flex items-center gap-3 mb-2">
          <PenTool className="h-6 w-6 text-primary" />
          <h3 className="text-2xl font-semibold font-merriweather text-foreground">3. Fill in the Blanks</h3>
        </div>
        <p className="text-muted-foreground mb-6">Type <em>so</em> or <em>such</em> to complete each sentence.</p>

        <div className="space-y-4">
          {fillBlanks.map((f, i) => {
            const parts = f.sentence.split('___');
            const val = answers[i] || '';
            const correct = checked && val.trim().toLowerCase() === f.answer.toLowerCase();
            const wrong = checked && !correct;
            return (
              <div key={i} className="border-l-4 border-primary/30 pl-4">
                <p className="text-sm text-foreground flex flex-wrap items-center gap-1.5">
                  <span className="text-muted-foreground mr-1">{i + 1}.</span>
                  <span>{parts[0]}</span>
                  <Input
                    value={val}
                    disabled={checked}
                    onChange={(e) => setAnswers((p) => ({ ...p, [i]: e.target.value }))}
                    className={`inline-block w-24 h-7 text-sm text-center ${
                      correct ? 'border-green-500 bg-green-50' : wrong ? 'border-red-500 bg-red-50' : ''
                    }`}
                    placeholder="___"
                  />
                  <span>{parts[1]}</span>
                  {correct && <CheckCircle2 className="h-4 w-4 text-green-600" />}
                  {wrong && (
                    <>
                      <XCircle className="h-4 w-4 text-red-500" />
                      <span className="text-xs text-green-700 font-medium">{f.answer}</span>
                    </>
                  )}
                </p>
                {checked && <p className="mt-1 text-xs text-muted-foreground italic">{f.explanation}</p>}
              </div>
            );
          })}
        </div>

        <div className="flex items-center gap-3 mt-6">
          {!checked ? (
            <Button onClick={() => setChecked(true)} disabled={Object.keys(answers).length < fillBlanks.length}>
              Check Answers
            </Button>
          ) : (
            <>
              <div className="p-3 bg-muted rounded-lg">
                <p className="text-sm font-medium text-foreground">Score: {score} / {fillBlanks.length}</p>
              </div>
              <Button variant="outline" onClick={reset}>Try Again</Button>
            </>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

// ── Section D: Pattern Recognition ──────────────────────────────────────

const PatternRecognitionSection = () => {
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [checked, setChecked] = useState(false);
  const score = checked
    ? patternQuestions.filter((q, i) => q.options.find((o) => o.id === answers[i])?.isCorrect).length
    : 0;
  const reset = () => { setAnswers({}); setChecked(false); };

  return (
    <Card className="service-card">
      <CardContent className="p-6">
        <div className="flex items-center gap-3 mb-2">
          <Search className="h-6 w-6 text-primary" />
          <h3 className="text-2xl font-semibold font-merriweather text-foreground">4. Pattern Recognition</h3>
        </div>
        <p className="text-muted-foreground mb-6">Identify which pattern is used in each sentence.</p>

        <div className="space-y-6">
          {patternQuestions.map((q, idx) => {
            const selectedId = answers[idx];
            return (
              <div key={idx} className="border-l-4 border-primary/30 pl-4">
                <div className="p-3 bg-muted/40 rounded-md mb-3">
                  <p className="text-foreground font-medium italic">"{q.sentence}"</p>
                </div>
                <div className="grid gap-2">
                  {q.options.map((opt) => {
                    const isSel = selectedId === opt.id;
                    let cls = 'border-border bg-background hover:border-primary/50';
                    if (checked) {
                      if (opt.isCorrect) cls = 'border-green-500 bg-green-50 text-green-700';
                      else if (isSel) cls = 'border-red-500 bg-red-50 text-red-700';
                      else cls = 'border-border bg-background opacity-50';
                    } else if (isSel) cls = 'border-primary bg-primary/10';
                    return (
                      <button
                        key={opt.id}
                        disabled={checked}
                        onClick={() => setAnswers((p) => ({ ...p, [idx]: opt.id }))}
                        className={`p-2 text-sm text-left rounded-md border-2 transition-all flex items-center justify-between ${cls}`}
                      >
                        <span>{opt.text}</span>
                        {checked && opt.isCorrect && <CheckCircle2 className="h-4 w-4" />}
                        {checked && isSel && !opt.isCorrect && <XCircle className="h-4 w-4" />}
                      </button>
                    );
                  })}
                </div>
                {checked && <p className="mt-2 text-xs text-muted-foreground italic">{q.explanation}</p>}
              </div>
            );
          })}
        </div>

        <div className="flex items-center gap-3 mt-6">
          {!checked ? (
            <Button onClick={() => setChecked(true)} disabled={Object.keys(answers).length < patternQuestions.length}>
              Check Answers
            </Button>
          ) : (
            <>
              <div className="p-3 bg-muted rounded-lg">
                <p className="text-sm font-medium text-foreground">Score: {score} / {patternQuestions.length}</p>
              </div>
              <Button variant="outline" onClick={reset}>Try Again</Button>
            </>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

// ── Section E: Listening ────────────────────────────────────────────────

const ListeningSection = () => {
  const allBlanks = lyrics.flatMap((l) => l.blanks);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [checked, setChecked] = useState(false);
  const score = checked
    ? allBlanks.filter((b, i) => (answers[i] || '').trim().toLowerCase() === b.answer.toLowerCase()).length
    : 0;
  let blankCounter = 0;
  const reset = () => { setAnswers({}); setChecked(false); };

  return (
    <Card className="service-card">
      <CardContent className="p-6">
        <div className="flex items-center gap-3 mb-2">
          <Music className="h-6 w-6 text-primary" />
          <h3 className="text-2xl font-semibold font-merriweather text-foreground">
            5. Listening — The Kooks, "Naïve"
          </h3>
        </div>
        <p className="text-muted-foreground mb-6">
          Listen to the song and fill in the missing <em>so</em> and <em>such</em> patterns.
        </p>

        <div className="aspect-video rounded-lg overflow-hidden bg-muted mb-6 max-w-3xl mx-auto">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/jkaMiaRLgvY"
            title="The Kooks - Naïve"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        <div className="flex items-start gap-2 p-3 bg-primary/5 rounded-lg border border-primary/20 mb-4">
          <Play className="h-4 w-4 text-primary mt-0.5 shrink-0" />
          <p className="text-sm text-muted-foreground">
            Type the word you hear in each blank. Each blank is <em>so</em> or <em>such</em>.
          </p>
        </div>

        <div className="bg-muted/30 border border-border rounded-lg p-5 space-y-1.5 mb-6">
          {lyrics.map((l, li) => {
            if (l.blanks.length === 0) return <p key={li} className="text-sm text-muted-foreground">{l.line}</p>;
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
                <p className="text-sm font-medium text-foreground">Score: {score} / {allBlanks.length}</p>
              </div>
              <Button variant="outline" onClick={reset}>Try Again</Button>
            </>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

// ── Main ────────────────────────────────────────────────────────────────

const SoSuchMasterLesson = () => (
  <div className="space-y-8">
    <Card className="service-card">
      <CardContent className="p-6">
        <h2 className="text-2xl md:text-3xl font-bold font-merriweather text-foreground mb-2">
          So/Such Master
        </h2>
        <p className="text-muted-foreground">
          Master the <strong>so</strong> and <strong>such</strong> patterns through a reference guide,
          multiple choice and fill-in-the-blank quizzes, pattern recognition, and a real-song listening activity.
        </p>
      </CardContent>
    </Card>
    <ReferenceSection />
    <MultipleChoiceSection />
    <FillBlanksSection />
    <PatternRecognitionSection />
    <ListeningSection />
  </div>
);

export default SoSuchMasterLesson;
