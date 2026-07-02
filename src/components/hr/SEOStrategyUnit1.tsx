import { useState } from 'react';
import { BookOpen, CheckCircle, RotateCcw, ChevronRight, Rocket, Star, Link as LinkIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const TEXT_DATA = [
  'I should not be telling you this.',
  'Original research is the most underrated link building strategy.',
  'Data distribution to journalists can land high authority backlinks.',
  'Most link building agencies will not do this for you.',
  'This should complement your targeted page link building.',
  'You have the ability to synthesise findings from data.',
  'Provide genuine value and distribute it.',
  'Publish the research and get on podcasts.',
  'This is a great way to get pick-ups from journalists.',
  'This is how you build genuine authority in your industry.',
];

const shuffleArray = (array: string[]): string[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  if (shuffled.join(' ') === array.join(' ')) return shuffleArray(array);
  return shuffled;
};

const SEOStrategyUnit1 = () => {
  const [view, setView] = useState<'reading' | 'game' | 'result'>('reading');
  const [currentSentenceIndex, setCurrentSentenceIndex] = useState(0);
  const [scrambledWords, setScrambledWords] = useState<string[]>([]);
  const [placedWords, setPlacedWords] = useState<string[]>([]);
  const [feedback, setFeedback] = useState<null | 'correct' | 'wrong'>(null);

  const startLevel = (index: number) => {
    setScrambledWords(shuffleArray(TEXT_DATA[index].split(' ')));
    setPlacedWords([]);
    setFeedback(null);
  };

  const handleWordClick = (word: string, source: 'scrambled' | 'placed') => {
    if (source === 'scrambled') {
      const i = scrambledWords.indexOf(word);
      const next = [...scrambledWords];
      next.splice(i, 1);
      setScrambledWords(next);
      setPlacedWords([...placedWords, word]);
    } else {
      const i = placedWords.lastIndexOf(word);
      const next = [...placedWords];
      next.splice(i, 1);
      setPlacedWords(next);
      setScrambledWords([...scrambledWords, word]);
    }
  };

  const checkSentence = () => {
    setFeedback(placedWords.join(' ') === TEXT_DATA[currentSentenceIndex] ? 'correct' : 'wrong');
  };

  const nextSentence = () => {
    if (currentSentenceIndex < TEXT_DATA.length - 1) {
      const i = currentSentenceIndex + 1;
      setCurrentSentenceIndex(i);
      startLevel(i);
    } else {
      setView('result');
    }
  };

  return (
    <Card className="overflow-hidden border-border">
      <header className="bg-primary p-6 text-primary-foreground flex justify-between items-center">
        <div className="flex items-center gap-3">
          <Rocket size={26} />
          <h2 className="text-xl md:text-2xl font-bold tracking-tight">Growth & SEO Strategy</h2>
        </div>
        {view === 'game' && (
          <span className="bg-primary-foreground/15 px-3 py-1 rounded-full text-xs md:text-sm font-medium">
            Task {currentSentenceIndex + 1} / {TEXT_DATA.length}
          </span>
        )}
      </header>

      <div className="p-6 md:p-10 bg-card">
        {view === 'reading' && (
          <div className="space-y-6">
            <div className="flex items-center gap-2 text-primary">
              <BookOpen size={20} />
              <span className="font-bold uppercase tracking-widest text-xs">Strategy Breakdown</span>
            </div>
            <h3 className="text-3xl font-black text-foreground leading-tight">Link Building & Authority</h3>
            <blockquote className="bg-foreground text-background p-8 rounded-2xl italic text-lg leading-relaxed shadow-inner">
              "I shouldn't be telling you this, BUT. The most underrated link building strategy in the world is the
              production and distribution of original research or viral news. The distribution of data to top-tier
              journalists can land you backlinks from DR80 to 95 websites, it's not easy and it's not something most
              link building agencies are going to do for you. But this should complement your targeted page link
              building for your SaaS. If you have customers, competitors, and a rich data industry, then you have the
              ability to synthesise findings. Provide genuine value and distribute it. Publish the research, distribute
              it to journalists, get on podcasts. This is a great way to get pick-ups from really top-tier journalists
              and how you build genuine authority in your industry."
            </blockquote>

            <div className="flex items-start gap-3 text-sm bg-primary/10 p-4 rounded-xl border border-primary/20">
              <LinkIcon size={18} className="text-primary mt-1 shrink-0" />
              <p className="text-muted-foreground">
                <strong className="text-foreground">Exercise:</strong> Review the strategy above. On the next screen,
                rebuild the key takeaways word-by-word to master the terminology.
              </p>
            </div>

            <Button
              onClick={() => { setView('game'); startLevel(0); }}
              className="w-full py-6 text-lg gap-2"
              size="lg"
            >
              Start Strategy Challenge <ChevronRight size={22} />
            </Button>
          </div>
        )}

        {view === 'game' && (
          <div className="space-y-8">
            <div>
              <h4 className="text-center text-muted-foreground font-bold uppercase tracking-wider text-xs mb-4">
                Arrange the words
              </h4>
              <div className="min-h-[140px] p-6 bg-muted/40 rounded-2xl border-2 border-dashed border-border flex flex-wrap gap-2 items-center justify-center">
                {placedWords.map((w, i) => (
                  <button
                    key={`p-${i}`}
                    onClick={() => handleWordClick(w, 'placed')}
                    className="bg-background px-4 py-2 rounded-xl shadow-sm border border-border hover:border-primary text-foreground font-semibold transition-all"
                  >
                    {w}
                  </button>
                ))}
                {placedWords.length === 0 && (
                  <span className="text-muted-foreground font-medium">Click words to reconstruct the strategy...</span>
                )}
              </div>
            </div>

            <div className="flex flex-wrap gap-2 md:gap-3 justify-center">
              {scrambledWords.map((w, i) => (
                <button
                  key={`s-${i}`}
                  onClick={() => handleWordClick(w, 'scrambled')}
                  className="bg-primary/10 hover:bg-primary/20 px-4 py-3 rounded-xl border border-primary/20 text-foreground font-semibold shadow-sm transition-all hover:scale-105 active:scale-95"
                >
                  {w}
                </button>
              ))}
            </div>

            <div className="pt-4 flex flex-col items-center gap-4">
              {feedback === null ? (
                <Button
                  disabled={placedWords.length === 0}
                  onClick={checkSentence}
                  size="lg"
                  className="px-12 py-6 rounded-full text-base font-bold"
                >
                  Validate Order
                </Button>
              ) : feedback === 'correct' ? (
                <div className="w-full">
                  <div className="bg-primary/10 border border-primary/30 text-foreground p-5 rounded-2xl flex items-center justify-center gap-3 mb-4">
                    <CheckCircle className="text-primary" size={26} />
                    <span className="font-black text-xl">Strategy Confirmed!</span>
                  </div>
                  <Button onClick={nextSentence} className="w-full py-6 text-lg gap-2" size="lg">
                    {currentSentenceIndex < TEXT_DATA.length - 1 ? 'Next Lesson' : 'View Results'}
                    <ChevronRight size={22} />
                  </Button>
                </div>
              ) : (
                <div className="w-full">
                  <div className="bg-destructive/10 border border-destructive/30 text-destructive p-5 rounded-2xl text-center font-bold mb-4">
                    Word order is incorrect. Try again!
                  </div>
                  <Button variant="secondary" onClick={() => startLevel(currentSentenceIndex)} className="w-full py-5 gap-2">
                    <RotateCcw size={18} /> Reset Sentence
                  </Button>
                </div>
              )}
            </div>
          </div>
        )}

        {view === 'result' && (
          <div className="text-center space-y-8 py-10">
            <div className="inline-flex p-6 bg-accent/15 rounded-full text-accent mb-2">
              <Star size={64} fill="currentColor" />
            </div>
            <h3 className="text-4xl font-black text-foreground">Authority Built!</h3>
            <p className="text-lg text-muted-foreground px-4">
              You've successfully reconstructed the core principles of top-tier link building.
            </p>
            <div className="p-8 bg-primary/10 rounded-3xl max-w-sm mx-auto border-2 border-primary/20">
              <div className="text-xs uppercase tracking-widest text-primary font-black mb-1">Knowledge Accuracy</div>
              <div className="text-6xl font-black text-foreground">100%</div>
            </div>
            <Button
              size="lg"
              onClick={() => { setCurrentSentenceIndex(0); setView('reading'); }}
              className="px-12 py-6 text-base font-bold"
            >
              Restart Session
            </Button>
          </div>
        )}
      </div>
    </Card>
  );
};

export default SEOStrategyUnit1;
