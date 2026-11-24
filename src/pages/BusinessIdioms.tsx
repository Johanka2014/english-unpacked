import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, BookOpen, Layers, Search, Shuffle, Sparkles } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import BusinessIdiomsQuiz from '@/components/business/BusinessIdiomsQuiz';
import {
  BUSINESS_IDIOMS,
  filterIdioms,
  shuffleItems,
  splitSentenceOnBlank,
} from '@/data/businessIdioms';

type TabKey = 'learn' | 'flashcards' | 'quiz';

const TABS: { key: TabKey; label: string; icon: typeof BookOpen }[] = [
  { key: 'learn', label: 'Learn', icon: BookOpen },
  { key: 'flashcards', label: 'Flashcards', icon: Layers },
  { key: 'quiz', label: 'Practice Quiz', icon: Sparkles },
];

const BusinessIdioms = () => {
  const [activeTab, setActiveTab] = useState<TabKey>('learn');
  const [query, setQuery] = useState('');
  const [deck, setDeck] = useState(() => shuffleItems(BUSINESS_IDIOMS));
  const [cardIndex, setCardIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);

  const filteredIdioms = useMemo(() => filterIdioms(BUSINESS_IDIOMS, query), [query]);
  const currentCard = deck[cardIndex] ?? BUSINESS_IDIOMS[0];

  const moveCard = (delta: number) => {
    setFlipped(false);
    setCardIndex((prev) => (prev + delta + deck.length) % deck.length);
  };

  const reshuffleDeck = () => {
    setFlipped(false);
    setDeck(shuffleItems(BUSINESS_IDIOMS));
    setCardIndex(0);
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SEO
        title="Sports Idioms for Business - Practice"
        description="Learn and practise 16 common sports idioms used in business English with examples, flashcards and a sentence quiz."
        canonical="https://english-unpacked.lovable.app/business-idioms"
      />
      <Navigation />

      <section className="relative py-12 text-white bg-gradient-to-br from-brand-navy to-brand-royal">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <p className="text-white/75 text-sm font-medium mb-2">Business English</p>
          <h1 className="text-3xl md:text-4xl font-bold mb-2 font-merriweather">
            Sports Idioms for Business
          </h1>
          <p className="text-base md:text-lg text-white/90">
            Learn 16 everyday sports idioms used at work — study list, flashcards and sentence quiz
          </p>
        </div>
      </section>

      <main className="flex-1 py-8 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="mb-6">
            <Link to="/members/activities?tab=business">
              <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
                <ArrowLeft className="h-4 w-4 mr-1" /> Back to Business Practice
              </Button>
            </Link>
          </div>

          <div className="flex flex-wrap gap-2 mb-8" role="tablist" aria-label="Sports idioms sections">
            {TABS.map(({ key, label, icon: Icon }) => {
              const active = activeTab === key;
              return (
                <button
                  key={key}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => setActiveTab(key)}
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

          {activeTab === 'learn' && (
            <div className="space-y-6">
              <div className="relative max-w-md">
                <Search className="h-4 w-4 text-muted-foreground absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                <Input
                  type="search"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search idioms or meanings..."
                  className="pl-9"
                  aria-label="Search idioms"
                />
              </div>

              {filteredIdioms.length === 0 ? (
                <p className="text-center text-muted-foreground py-12">No idioms found.</p>
              ) : (
                <div className="grid gap-4 md:grid-cols-2">
                  {filteredIdioms.map((item) => {
                    const [before, after] = splitSentenceOnBlank(item.sentence);
                    return (
                      <Card key={item.id} className="border-border">
                        <CardContent className="p-5 flex flex-col gap-2.5">
                          <h2 className="text-lg font-bold font-merriweather text-foreground">
                            {item.base}
                          </h2>
                          <p className="text-sm font-medium text-foreground/85 border-l-2 border-brand-royal pl-3 py-1 bg-muted/50 rounded-r-md">
                            {item.meaning}
                          </p>
                          <p className="text-sm text-muted-foreground italic">
                            “{before}
                            <span className="font-semibold not-italic text-brand-royal">{item.form}</span>
                            {after}”
                          </p>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              )}
            </div>
          )}

          {activeTab === 'flashcards' && currentCard && (
            <div className="mx-auto max-w-xl space-y-6">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-muted-foreground">
                  Card {cardIndex + 1} / {deck.length}
                </span>
                <Button type="button" variant="ghost" size="sm" onClick={reshuffleDeck}>
                  <Shuffle className="h-4 w-4 mr-1.5" /> Shuffle
                </Button>
              </div>

              <button
                type="button"
                onClick={() => setFlipped((prev) => !prev)}
                aria-pressed={flipped}
                className="w-full text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-royal rounded-2xl"
              >
                <div
                  className={`min-h-[280px] flex items-center justify-center rounded-2xl border-2 shadow-sm transition-colors ${
                    flipped
                      ? 'bg-brand-navy text-white border-brand-navy'
                      : 'bg-card text-foreground border-brand-royal/25 hover:border-brand-royal/50'
                  }`}
                >
                  <div className="p-8 text-center w-full">
                    {!flipped ? (
                      <div className="space-y-4">
                        <h2 className="text-3xl font-bold font-merriweather text-brand-royal">
                          {currentCard.base}
                        </h2>
                        <p className="text-sm text-muted-foreground">Tap or click to reveal meaning</p>
                      </div>
                    ) : (
                      <div className="space-y-4">
                        <p className="text-xs font-semibold uppercase tracking-wider text-white/70">
                          Meaning
                        </p>
                        <p className="text-lg font-medium leading-relaxed text-white">{currentCard.meaning}</p>
                        <div className="rounded-lg bg-white/10 p-3.5 text-sm italic text-white/95">
                          {(() => {
                            const [before, after] = splitSentenceOnBlank(currentCard.sentence);
                            return (
                              <>
                                Example: “{before}
                                <strong className="not-italic font-semibold">{currentCard.form}</strong>
                                {after}”
                              </>
                            );
                          })()}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </button>

              <div className="grid grid-cols-2 gap-4">
                <Button type="button" variant="outline" size="lg" onClick={() => moveCard(-1)}>
                  Previous
                </Button>
                <Button
                  type="button"
                  size="lg"
                  onClick={() => moveCard(1)}
                  className="bg-brand-royal hover:bg-brand-navy text-white"
                >
                  Next
                </Button>
              </div>
            </div>
          )}

          {activeTab === 'quiz' && <BusinessIdiomsQuiz />}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default BusinessIdioms;