import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Layers, PenLine, RotateCcw, Trophy } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useActivityTracking } from '@/hooks/useActivityTracking';
import PensionsFinanceFlashcards from '@/components/business/PensionsFinanceFlashcards';
import {
  SectionAPensions,
  SectionBProducts,
  SectionCGeneralFinance,
} from '@/components/business/PensionsFinanceExercises';
import {
  ALL_PENSION_GAPS,
  GENERAL_FINANCE_MC,
  PENSIONS_TOTAL_QUESTIONS,
  PRODUCT_DEFINITIONS,
  scoreSectionA,
  scoreSectionB,
  scoreSectionC,
} from '@/data/pensionsFinance';

type TabKey = 'flashcards' | 'section-a' | 'section-b' | 'section-c' | 'results';

const TABS: { key: TabKey; label: string; icon: typeof Layers }[] = [
  { key: 'flashcards', label: 'Flashcards (33)', icon: Layers },
  { key: 'section-a', label: 'A. Pensions (12)', icon: PenLine },
  { key: 'section-b', label: 'B. Products (8)', icon: PenLine },
  { key: 'section-c', label: 'C. General Finance (14)', icon: PenLine },
  { key: 'results', label: 'Results', icon: Trophy },
];

const PensionsFinance = () => {
  const [tab, setTab] = useState<TabKey>('flashcards');
  const [answersA, setAnswersA] = useState<Record<number, string>>({});
  const [checkedA, setCheckedA] = useState(false);
  const [answersB, setAnswersB] = useState<Record<string, string>>({});
  const [checkedB, setCheckedB] = useState(false);
  const [answersC, setAnswersC] = useState<Record<number, string>>({});
  const [checkedC, setCheckedC] = useState(false);
  const track = useActivityTracking();

  const scoreA = checkedA ? scoreSectionA(answersA) : 0;
  const scoreB = checkedB ? scoreSectionB(answersB) : 0;
  const scoreC = checkedC ? scoreSectionC(answersC) : 0;
  const totalScore = scoreA + scoreB + scoreC;

  const checkA = () => {
    setCheckedA(true);
    track({
      activityTitle: 'Pensions & Finance — A. Pensions',
      activityId: 'pensions-finance-section-a',
      activityType: 'gap-fill',
      score: scoreSectionA(answersA),
      total: ALL_PENSION_GAPS.length,
    });
  };

  const checkB = () => {
    setCheckedB(true);
    track({
      activityTitle: 'Pensions & Finance — B. Financial Products',
      activityId: 'pensions-finance-section-b',
      activityType: 'matching',
      score: scoreSectionB(answersB),
      total: PRODUCT_DEFINITIONS.length,
    });
  };

  const checkC = () => {
    setCheckedC(true);
    track({
      activityTitle: 'Pensions & Finance — C. General Finance',
      activityId: 'pensions-finance-section-c',
      activityType: 'multiple-choice',
      score: scoreSectionC(answersC),
      total: GENERAL_FINANCE_MC.length,
    });
  };

  const resetAll = () => {
    setAnswersA({});
    setCheckedA(false);
    setAnswersB({});
    setCheckedB(false);
    setAnswersC({});
    setCheckedC(false);
    setTab('flashcards');
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SEO
        title="Pensions & Finance Vocabulary - Practice"
        description="Learn 33 pensions and financial product terms with flashcards, gap-fill, matching and multiple-choice exercises."
      />
      <Navigation />

      <section className="relative py-12 text-white bg-gradient-to-br from-brand-navy to-brand-royal">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <p className="text-white/75 text-sm font-medium mb-2">Business English</p>
          <h1 className="text-3xl md:text-4xl font-bold mb-2 font-merriweather">
            Pensions &amp; Finance Vocabulary
          </h1>
          <p className="text-base md:text-lg text-white/90">
            Master 33 essential pension and finance terms with flashcards and three interactive exercises
          </p>
        </div>
      </section>

      <main className="flex-1 py-8 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
            <Link to="/members/activities?tab=business">
              <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
                <ArrowLeft className="h-4 w-4 mr-1" /> Back to Business Practice
              </Button>
            </Link>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3.5 py-1 text-sm font-semibold text-foreground">
              <Trophy className="h-4 w-4 text-brand-royal" />
              Score: {totalScore} / {PENSIONS_TOTAL_QUESTIONS}
            </span>
          </div>

          <div className="flex flex-wrap gap-2 mb-8" role="tablist" aria-label="Pensions and Finance sections">
            {TABS.map(({ key, label, icon: Icon }) => {
              const active = tab === key;
              return (
                <button
                  key={key}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => setTab(key)}
                  className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border text-sm font-medium transition-colors ${
                    active
                      ? 'bg-brand-royal text-white border-brand-royal'
                      : 'bg-card text-foreground border-border hover:bg-muted'
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  {label}
                </button>
              );
            })}
          </div>

          {tab === 'flashcards' && (
            <PensionsFinanceFlashcards onStartExercises={() => setTab('section-a')} />
          )}

          {tab === 'section-a' && (
            <SectionAPensions
              answers={answersA}
              checked={checkedA}
              onChange={(id, value) => {
                setAnswersA((prev) => ({ ...prev, [id]: value }));
                if (checkedA) setCheckedA(false);
              }}
              onCheck={checkA}
              onReset={() => { setAnswersA({}); setCheckedA(false); }}
              onNext={() => setTab('section-b')}
            />
          )}

          {tab === 'section-b' && (
            <SectionBProducts
              answers={answersB}
              checked={checkedB}
              onChange={(id, value) => {
                setAnswersB((prev) => ({ ...prev, [id]: value }));
                if (checkedB) setCheckedB(false);
              }}
              onCheck={checkB}
              onReset={() => { setAnswersB({}); setCheckedB(false); }}
              onNext={() => setTab('section-c')}
            />
          )}

          {tab === 'section-c' && (
            <SectionCGeneralFinance
              answers={answersC}
              checked={checkedC}
              onChange={(id, value) => {
                setAnswersC((prev) => ({ ...prev, [id]: value }));
                if (checkedC) setCheckedC(false);
              }}
              onCheck={checkC}
              onReset={() => { setAnswersC({}); setCheckedC(false); }}
              onNext={() => setTab('results')}
            />
          )}

          {tab === 'results' && (
            <Card className="service-card max-w-xl mx-auto">
              <CardContent className="p-8 text-center space-y-6">
                <Trophy className="h-12 w-12 text-brand-royal mx-auto" />
                <div>
                  <h2 className="text-2xl font-bold font-merriweather text-foreground">
                    Your Progress Summary
                  </h2>
                  <p className="text-sm text-muted-foreground mt-1">
                    Check your answers in Sections A, B and C to see your full score.
                  </p>
                </div>
                <p className="text-4xl font-bold font-merriweather text-brand-royal">
                  {totalScore}{' '}
                  <span className="text-xl font-normal text-muted-foreground">
                    / {PENSIONS_TOTAL_QUESTIONS}
                  </span>
                </p>
                <div className="space-y-3 text-left text-sm">
                  <div className="flex justify-between border-b border-border pb-2">
                    <span className="text-muted-foreground">Section A — Pensions</span>
                    <span className="font-semibold text-foreground">
                      {checkedA ? `${scoreA} / ${ALL_PENSION_GAPS.length}` : 'Not checked yet'}
                    </span>
                  </div>
                  <div className="flex justify-between border-b border-border pb-2">
                    <span className="text-muted-foreground">Section B — Financial Products</span>
                    <span className="font-semibold text-foreground">
                      {checkedB ? `${scoreB} / ${PRODUCT_DEFINITIONS.length}` : 'Not checked yet'}
                    </span>
                  </div>
                  <div className="flex justify-between border-b border-border pb-2">
                    <span className="text-muted-foreground">Section C — General Finance</span>
                    <span className="font-semibold text-foreground">
                      {checkedC ? `${scoreC} / ${GENERAL_FINANCE_MC.length}` : 'Not checked yet'}
                    </span>
                  </div>
                </div>
                <Button variant="outline" onClick={resetAll} className="gap-2">
                  <RotateCcw className="h-4 w-4" /> Start Again
                </Button>
              </CardContent>
            </Card>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PensionsFinance;