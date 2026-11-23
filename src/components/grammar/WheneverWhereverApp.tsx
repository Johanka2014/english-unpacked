import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ArrowRight, CheckCircle2, ExternalLink, Gamepad2, Home, Music, Play, RotateCcw, XCircle } from 'lucide-react';
import { useActivityTracking } from '@/hooks/useActivityTracking';
import {
  EVER_OPTIONS,
  VIDEO_EMBED_URL,
  VIDEO_WATCH_URL,
  WHENEVER_QUESTIONS,
  checkLyricsAnswers,
  type EverOption,
  type LyricsCheckResult,
} from '@/data/wheneverWherever';

type Screen = 'menu' | 'video' | 'game' | 'end';

const WheneverWhereverApp = () => {
  const track = useActivityTracking();
  const [screen, setScreen] = useState<Screen>('menu');
  const [gap1, setGap1] = useState('');
  const [gap2, setGap2] = useState('');
  const [lyricsResult, setLyricsResult] = useState<LyricsCheckResult | null>(null);
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [picked, setPicked] = useState<EverOption | null>(null);
  const appRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (screen !== 'menu') appRef.current?.scrollIntoView({ block: 'start', behavior: 'instant' });
  }, [screen, index]);

  const startGame = () => {
    setIndex(0);
    setScore(0);
    setPicked(null);
    setScreen('game');
  };

  const openScreen = (target: Screen) => {
    if (target === 'game' && screen === 'end') {
      startGame();
      return;
    }
    setScreen(target);
  };

  const handleCheckLyrics = () => {
    const result = checkLyricsAnswers(gap1, gap2);
    setLyricsResult(result);
    if (result.status === 'correct') {
      track({ activityTitle: 'Whenever, Wherever — Lyrics check', activityType: 'gap-fill', score: 2, total: 2 });
    }
  };

  const question = WHENEVER_QUESTIONS[index];
  const handlePick = (option: EverOption) => {
    if (!question || picked) return;
    setPicked(option);
    if (option === question.answer) setScore((s) => s + 1);
  };

  const handleNext = () => {
    if (index + 1 < WHENEVER_QUESTIONS.length) {
      setIndex((i) => i + 1);
      setPicked(null);
    } else {
      track({
        activityTitle: 'Whenever, Wherever — Grammar Challenge',
        activityType: 'multiple-choice',
        score,
        total: WHENEVER_QUESTIONS.length,
      });
      setScreen('end');
    }
  };

  const optionClass = (option: EverOption) => {
    if (!picked || !question) return 'border-border bg-background text-foreground hover:bg-muted';
    if (option === question.answer) return 'border-primary bg-primary text-primary-foreground disabled:opacity-100';
    if (option === picked) return 'border-destructive bg-destructive text-destructive-foreground disabled:opacity-100';
    return 'border-border bg-background text-muted-foreground disabled:opacity-50';
  };

  const gapSelectClass = (checked: boolean, ok: boolean, hasValue: boolean) => {
    if (!checked || !hasValue) return 'w-[140px] bg-background font-semibold';
    return ok
      ? 'w-[140px] border-primary bg-primary/10 font-semibold text-primary'
      : 'w-[140px] border-destructive bg-destructive/10 font-semibold text-destructive';
  };

  const activeNav = screen === 'end' ? 'game' : screen;

  return (
    <Card ref={appRef} className="service-card mx-auto w-full max-w-md scroll-mt-[calc(var(--nav-h)+16px)] overflow-hidden">
      <div className="grid grid-cols-3 gap-1 border-b border-border bg-muted/60 p-2">
        <Button
          variant={activeNav === 'menu' ? 'default' : 'ghost'}
          size="sm"
          className="h-10 gap-1.5 text-xs sm:text-sm"
          onClick={() => openScreen('menu')}
        >
          <Home className="h-4 w-4 shrink-0" />
          Home
        </Button>
        <Button
          variant={activeNav === 'video' ? 'default' : 'ghost'}
          size="sm"
          className="h-10 gap-1.5 text-xs sm:text-sm"
          onClick={() => openScreen('video')}
        >
          <Play className="h-4 w-4 shrink-0" />
          Video
        </Button>
        <Button
          variant={activeNav === 'game' ? 'default' : 'ghost'}
          size="sm"
          className="h-10 gap-1.5 text-xs sm:text-sm"
          onClick={() => openScreen('game')}
        >
          <Gamepad2 className="h-4 w-4 shrink-0" />
          Game
        </Button>
      </div>

      <CardContent className="p-4 sm:p-6">
        {screen === 'menu' && (
          <div className="space-y-6 py-4 text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
              <Music className="h-8 w-8" />
            </div>
            <div>
              <h2 className="font-merriweather text-2xl font-bold text-foreground sm:text-3xl">Whenever, Wherever</h2>
              <p className="mt-2 text-base font-medium text-muted-foreground">Grammar Practice Activity</p>
              <p className="mt-1 text-sm text-muted-foreground">Song by Shakira</p>
            </div>
            <div className="space-y-3">
              <Button className="h-14 w-full text-base" onClick={() => setScreen('video')}>
                <Play className="h-5 w-5" />
                Start Activity
              </Button>
              <Button variant="outline" className="h-12 w-full text-base" onClick={startGame}>
                <Gamepad2 className="h-5 w-5" />
                Jump to Grammar Game
              </Button>
            </div>
          </div>
        )}

        {screen === 'video' && (
          <div className="space-y-4">
            <div className="text-center">
              <h2 className="font-merriweather text-xl font-bold text-foreground sm:text-2xl">Listen &amp; Select</h2>
              <p className="mt-1 text-sm text-muted-foreground">Watch the video and choose the correct words for the lyrics.</p>
            </div>

            <div className="overflow-hidden rounded-lg border border-border bg-muted">
              <iframe
                src={VIDEO_EMBED_URL}
                title="Shakira — Whenever, Wherever Lyric Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="aspect-video w-full border-0"
              />
            </div>

            <a
              href={VIDEO_WATCH_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1.5 text-center text-xs text-muted-foreground underline hover:text-foreground"
            >
              Video not loading? Watch on YouTube
              <ExternalLink className="h-3.5 w-3.5" />
            </a>

            <div className="rounded-lg bg-muted p-4 text-center text-lg leading-relaxed text-foreground">
              <div className="flex flex-wrap items-center justify-center gap-2">
                <span>&ldquo;</span>
                <Select
                  value={gap1}
                  onValueChange={(val) => {
                    setGap1(val);
                    setLyricsResult(null);
                  }}
                >
                  <SelectTrigger aria-label="First lyric gap" className={gapSelectClass(!!lyricsResult, !!lyricsResult?.gap1Ok, !!gap1)}>
                    <SelectValue placeholder="Select..." />
                  </SelectTrigger>
                  <SelectContent position="popper">
                    {EVER_OPTIONS.map((opt) => (
                      <SelectItem key={opt} value={opt}>{opt}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <span>,</span>
                <Select
                  value={gap2}
                  onValueChange={(val) => {
                    setGap2(val);
                    setLyricsResult(null);
                  }}
                >
                  <SelectTrigger aria-label="Second lyric gap" className={gapSelectClass(!!lyricsResult, !!lyricsResult?.gap2Ok, !!gap2)}>
                    <SelectValue placeholder="Select..." />
                  </SelectTrigger>
                  <SelectContent position="popper">
                    {EVER_OPTIONS.map((opt) => (
                      <SelectItem key={opt} value={opt}>{opt}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <p className="mt-2 font-medium">We&apos;re meant to be together...&rdquo;</p>
            </div>

            <Button className="h-12 w-full text-base" onClick={handleCheckLyrics}>
              Check Answers
            </Button>

            <div className="min-h-6 text-center text-sm font-semibold" aria-live="polite">
              {lyricsResult?.status === 'incomplete' && (
                <p className="text-brand-accent">Please select an option for both gaps.</p>
              )}
              {lyricsResult?.status === 'wrong' && (
                <p className="text-destructive">Not quite right. Listen to the chorus again!</p>
              )}
              {lyricsResult?.status === 'correct' && (
                <p className="text-primary">Correct! You&apos;re ready for the challenge.</p>
              )}
            </div>

            {lyricsResult?.status === 'correct' && (
              <Button className="h-12 w-full bg-brand-navy text-base text-primary-foreground hover:bg-brand-navy/90" onClick={startGame}>
                Start Grammar Challenge
                <ArrowRight className="h-4 w-4" />
              </Button>
            )}
          </div>
        )}

        {screen === 'game' && question && (
          <div>
            <div className="mb-4 flex items-center justify-between text-sm">
              <span className="font-medium text-muted-foreground">
                Question {index + 1} / {WHENEVER_QUESTIONS.length}
              </span>
              <span className="font-bold text-primary">Score: {score}</span>
            </div>

            <div className="mb-5 rounded-lg bg-muted p-5 text-center text-lg font-medium leading-relaxed text-foreground">
              {question.text}
            </div>

            <div className="grid grid-cols-2 gap-3">
              {EVER_OPTIONS.map((opt) => (
                <Button
                  key={opt}
                  variant="outline"
                  disabled={!!picked}
                  aria-pressed={picked === opt}
                  onClick={() => handlePick(opt)}
                  className={`h-auto min-h-12 whitespace-normal p-3 text-base font-semibold ${optionClass(opt)}`}
                >
                  {opt}
                </Button>
              ))}
            </div>

            <div className="my-4 min-h-14 text-center" aria-live="polite">
              {picked && (
                <div className="space-y-1">
                  {picked === question.answer ? (
                    <p className="inline-flex items-center gap-1.5 font-semibold text-primary">
                      <CheckCircle2 className="h-5 w-5" />
                      Correct!
                    </p>
                  ) : (
                    <p className="inline-flex items-center gap-1.5 font-semibold text-destructive">
                      <XCircle className="h-5 w-5" />
                      Correct answer: {question.answer}
                    </p>
                  )}
                  <p className="text-sm text-muted-foreground">{question.hint}</p>
                </div>
              )}
            </div>

            {picked && (
              <Button className="h-12 w-full text-base" onClick={handleNext}>
                {index + 1 < WHENEVER_QUESTIONS.length ? 'Next question' : 'See my score'}
              </Button>
            )}
          </div>
        )}

        {screen === 'end' && (
          <div className="space-y-6 py-2 text-center">
            <div>
              <h2 className="font-merriweather text-2xl font-bold text-foreground">Activity Complete</h2>
              <p className="mt-1 text-muted-foreground">Well done! Here&apos;s your final score.</p>
            </div>
            <div className="mx-auto flex h-40 w-40 flex-col items-center justify-center rounded-full bg-muted">
              <span className="text-5xl font-bold text-primary">{score}</span>
              <span className="text-muted-foreground">out of {WHENEVER_QUESTIONS.length}</span>
            </div>
            <div className="space-y-3">
              <Button className="h-12 w-full text-base" onClick={startGame}>
                <RotateCcw className="h-4 w-4" />
                Play again
              </Button>
              <Button variant="outline" className="h-12 w-full text-base" onClick={() => setScreen('menu')}>
                Back to home
              </Button>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default WheneverWhereverApp;