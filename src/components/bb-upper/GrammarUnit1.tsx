import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle2, XCircle, RotateCcw } from 'lucide-react';

const WORD_BANK = [
  'challenging', 'economical', 'far', 'friendly', 'great',
  'hard', 'highly', 'impressive', 'little', 'long',
  'motivating', 'strong',
];

interface Gap {
  id: string;
  answer: string;
}

interface Sentence {
  id: number;
  parts: (string | Gap)[];
}

const SENTENCES: Sentence[] = [
  {
    id: 1,
    parts: [
      "I'd like to have a ",
      { id: '1a', answer: 'more challenging' },
      " job because this one doesn't stretch me very much.",
    ],
  },
  {
    id: 2,
    parts: [
      'Rents are so high that my company is moving its offices out of the city to somewhere ',
      { id: '2a', answer: 'more economical' },
      ". Unfortunately, I'll have to travel ",
      { id: '2b', answer: 'further' },
      ' to get there.',
    ],
  },
  {
    id: 3,
    parts: [
      'I got the job because I was ',
      { id: '3a', answer: 'more highly' },
      ' qualified than the other candidates.',
    ],
  },
  {
    id: 4,
    parts: [
      "If they give me promotion, I'll have to work ",
      { id: '4a', answer: 'longer' },
      ' hours and have ',
      { id: '4b', answer: 'greater' },
      ' responsibility.',
    ],
  },
  {
    id: 5,
    parts: [
      "I'd have stayed in the job if my colleagues had been ",
      { id: '5a', answer: 'friendlier' },
      '.',
    ],
  },
  {
    id: 6,
    parts: [
      'Martin is undoubtedly the ',
      { id: '6a', answer: 'strongest' },
      ' candidate because he has a much ',
      { id: '6b', answer: 'more impressive' },
      ' track record.',
    ],
  },
  {
    id: 7,
    parts: [
      'I really like my new job; the ',
      { id: '7a', answer: 'most motivating' },
      " aspect is the opportunity to take my own decisions – something I couldn't do in my previous post.",
    ],
  },
  {
    id: 8,
    parts: [
      'There are still many places in the world where women earn ',
      { id: '8a', answer: 'less than' },
      ' men for the same work and where they have to work ',
      { id: '8b', answer: 'harder' },
      ' to get promotion.',
    ],
  },
];

const ALL_GAP_IDS = SENTENCES.flatMap((s) =>
  s.parts.filter((p): p is Gap => typeof p !== 'string').map((g) => g.id)
);

const GrammarUnit1 = () => {
  const [answers, setAnswers] = useState<Record<string, string>>(() => {
    const init: Record<string, string> = {};
    ALL_GAP_IDS.forEach((id) => (init[id] = ''));
    return init;
  });
  const [checked, setChecked] = useState(false);

  const handleChange = (id: string, value: string) => {
    setAnswers((prev) => ({ ...prev, [id]: value }));
    if (checked) setChecked(false);
  };

  const isCorrect = (id: string) => {
    const gap = SENTENCES.flatMap((s) => s.parts).find(
      (p): p is Gap => typeof p !== 'string' && p.id === id
    );
    if (!gap) return false;
    return answers[id].trim().toLowerCase() === gap.answer.toLowerCase();
  };

  const handleCheck = () => setChecked(true);

  const handleReset = () => {
    const init: Record<string, string> = {};
    ALL_GAP_IDS.forEach((id) => (init[id] = ''));
    setAnswers(init);
    setChecked(false);
  };

  const score = checked ? ALL_GAP_IDS.filter(isCorrect).length : null;

  return (
    <div className="space-y-10">
      {/* Grammar Reference */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xl text-primary">Comparison of adjectives and adverbs</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Rule 1: -er / -est */}
          <div className="rounded-lg border border-border bg-muted/30 p-5 space-y-3">
            <p className="font-semibold text-foreground text-sm">
              ■ These adjectives and adverbs use <em className="text-primary">-er</em> for the comparative and <em className="text-primary">-est</em> for the superlative:
            </p>
            <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1 ml-4">
              <li>one-syllable adjectives, e.g. <em>quick → quicker → quickest</em></li>
              <li>two-syllable adjectives ending in -y, e.g. <em>easy → easier → easiest</em></li>
              <li>one-syllable adverbs, e.g. <em>hard → harder → hardest</em></li>
            </ul>
          </div>

          {/* Rule 2: more / most */}
          <div className="rounded-lg border border-border bg-muted/30 p-5 space-y-3">
            <p className="font-semibold text-foreground text-sm">
              ■ These adjectives and adverbs use <em className="text-primary">more</em> for the comparative and <em className="text-primary">most</em> for the superlative:
            </p>
            <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1 ml-4">
              <li>adjectives with two or more syllables, e.g. <em>useful → more useful → most useful</em></li>
              <li>adverbs ending in -ly, e.g. <em>quickly → more quickly → most quickly</em></li>
            </ul>
            <p className="text-xs text-muted-foreground ml-4">
              <strong>NB</strong> Some two-syllable adjectives ending in -y can use -er/-est <strong>or</strong> more/most:<br />
              <em>healthy → healthier / more healthy → healthiest / most healthy</em>
            </p>
          </div>

          {/* Rule 3: Exceptions */}
          <div className="rounded-lg border border-border bg-muted/30 p-5 space-y-3">
            <p className="font-semibold text-foreground text-sm">
              ■ These adjectives and adverbs are exceptions:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 text-sm text-muted-foreground ml-4">
              <span><em>good/well → better → best</em></span>
              <span><em>bad/badly → worse → worst</em></span>
              <span><em>much/many → more → most</em></span>
              <span><em>little → less → least</em></span>
              <span><em>far → further/farther → furthest/farthest</em></span>
            </div>
          </div>

          {/* Rule 4: as...as */}
          <div className="rounded-lg border border-border bg-muted/30 p-5 space-y-2">
            <p className="font-semibold text-foreground text-sm">
              ■ <em className="text-primary">as</em> + adjective/adverb + <em className="text-primary">as</em>
            </p>
            <p className="text-sm text-muted-foreground ml-4 italic">
              He doesn't earn <strong>as much as</strong> I do.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Exercise */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xl">Exercise 1</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <p className="text-sm font-semibold text-foreground mb-1">
              <span className="text-primary font-bold mr-2">1</span>
              Complete these sentences with the comparative/superlative form of each of the words below. Use each word once only and add <em>than</em> where necessary.
            </p>
          </div>

          {/* Word bank */}
          <div className="flex flex-wrap gap-2 rounded-lg border border-border bg-muted/20 p-4">
            {WORD_BANK.map((w) => (
              <span key={w} className="px-3 py-1.5 rounded-md bg-accent text-accent-foreground text-sm font-medium border border-border">
                {w}
              </span>
            ))}
          </div>

          {/* Sentences */}
          <div className="space-y-4">
            {SENTENCES.map((sentence) => (
              <div key={sentence.id} className="flex flex-wrap items-baseline gap-x-0 text-sm text-foreground leading-relaxed">
                <span className="text-primary font-bold mr-2 shrink-0">{sentence.id}</span>
                {sentence.parts.map((part, i) =>
                  typeof part === 'string' ? (
                    <span key={i}>{part}</span>
                  ) : (
                    <span key={part.id} className="inline-flex items-center mx-1">
                      <input
                        type="text"
                        value={answers[part.id]}
                        onChange={(e) => handleChange(part.id, e.target.value)}
                        className={`border-b-2 bg-transparent text-center text-sm font-medium outline-none w-36 py-0.5 transition-colors ${
                          checked
                            ? isCorrect(part.id)
                              ? 'border-green-500 text-green-700'
                              : 'border-destructive text-destructive'
                            : 'border-primary/40 focus:border-primary'
                        }`}
                        placeholder="……"
                      />
                      {checked && (
                        isCorrect(part.id)
                          ? <CheckCircle2 className="h-4 w-4 text-green-500 ml-1 shrink-0" />
                          : <XCircle className="h-4 w-4 text-destructive ml-1 shrink-0" />
                      )}
                    </span>
                  )
                )}
              </div>
            ))}
          </div>

          {checked && score !== null && (
            <p className={`text-sm font-medium ${score === ALL_GAP_IDS.length ? 'text-green-600' : 'text-muted-foreground'}`}>
              Score: {score} / {ALL_GAP_IDS.length}
            </p>
          )}

          <div className="flex gap-3">
            <Button onClick={handleCheck} className="bg-primary hover:bg-primary/90">Check Answers</Button>
            <Button variant="outline" onClick={handleReset} className="gap-2">
              <RotateCcw className="h-3.5 w-3.5" /> Reset
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default GrammarUnit1;
