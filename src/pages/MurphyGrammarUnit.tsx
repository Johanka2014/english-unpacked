import { useMemo, useState } from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft, BookOpen, PenLine, Sparkles } from 'lucide-react';
import { findMurphySection, findMurphyUnit } from '@/data/murphyGrammarData';
import SEO from '@/components/SEO';
import MurphyExercise from '@/components/murphy/MurphyExercise';
import TenseMasterPanel from '@/components/tense-master/TenseMasterPanel';
import PastTensesHolidayLesson from '@/components/b1-grammar/PastTensesHolidayLesson';
import PastTensesCambridgeLesson from '@/components/b1-grammar/PastTensesCambridgeLesson';
import ModalVerbsMasterLesson from '@/components/b1-grammar/ModalVerbsMasterLesson';
import SoSuchLesson from '@/components/b1-grammar/SoSuchLesson';
import CompoundAdjectivesLesson from '@/components/b1-grammar/CompoundAdjectivesLesson';

const TheoryView = ({ sections }: { sections: NonNullable<ReturnType<typeof findMurphyUnit>>['theory'] }) => (
  <div className="space-y-8">
    {(sections ?? []).map((s, i) => (
      <Card key={i} className="service-card">
        <CardContent className="p-6">
          <h3 className="text-xl font-semibold mb-4 font-merriweather text-foreground">{s.heading}</h3>
          <div className={s.image ? 'grid gap-6 md:grid-cols-[1fr_260px] items-start' : undefined}>
            <div
              className="prose prose-sm max-w-none text-muted-foreground prose-strong:text-foreground"
              dangerouslySetInnerHTML={{ __html: s.content }}
            />
            {s.image && (
              <img
                src={s.image}
                alt={s.imageAlt ?? s.heading}
                loading="lazy"
                className="w-full rounded-lg border border-border"
              />
            )}
          </div>
          {s.notes && s.notes.length > 0 && (
            <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-950/30 rounded-lg border border-blue-200 dark:border-blue-800">
              <p className="font-semibold text-sm text-blue-800 dark:text-blue-300 mb-2">📝 Note:</p>
              <ul className="list-disc list-inside space-y-1 text-sm text-blue-700 dark:text-blue-400">
                {s.notes.map((n, j) => (
                  <li key={j} dangerouslySetInnerHTML={{ __html: n }} />
                ))}
              </ul>
            </div>
          )}
        </CardContent>
      </Card>
    ))}
  </div>
);

const MurphyGrammarUnit = () => {
  const { sectionId, unitId } = useParams<{ sectionId: string; unitId: string }>();
  const section = findMurphySection(sectionId);
  const unit = findMurphyUnit(sectionId, unitId);

  const tabs = useMemo(() => {
    if (!unit) return [] as { key: string; label: string; icon: typeof BookOpen }[];
    const list: { key: string; label: string; icon: typeof BookOpen }[] = [];
    if (unit.theory) list.push({ key: 'theory', label: 'Theory', icon: BookOpen });
    if (unit.exercises) list.push({ key: 'exercises', label: 'Book Exercises', icon: PenLine });
    if (unit.supplementary) list.push({ key: 'supplementary', label: 'Supplementary', icon: Sparkles });
    if (unit.tenseMaster) list.push({ key: 'tense-master', label: 'Tense Master', icon: Sparkles });
    if (unit.holidayLesson) list.push({ key: 'holiday', label: 'Holiday Lesson', icon: Sparkles });
    if (unit.cambridgeLesson) list.push({ key: 'cambridge', label: 'Cambridge Lesson', icon: Sparkles });
    if (unit.modalMasteryLesson) list.push({ key: 'modal-master', label: 'Modal Verbs Master', icon: Sparkles });
    if (unit.soSuchLesson) list.push({ key: 'so-such', label: 'So & Such', icon: Sparkles });
    if (unit.compoundAdjectivesLesson) list.push({ key: 'compound-adjectives', label: 'Compound Adjectives', icon: Sparkles });
    return list;
  }, [unit]);

  const [activeTab, setActiveTab] = useState<string>(tabs[0]?.key ?? 'theory');

  if (!section || !unit) return <Navigate to="/grammar" replace />;

  const isExtra = unit.number > 500;
  const singleTab = tabs.length <= 1;

  return (
    <div className="min-h-screen bg-background">
      <SEO title={`${unit.title} - Grammar in Use`} description={unit.subtitle ?? section.description} />
      <Navigation />

      <section className="relative py-16 text-white bg-gradient-to-br from-brand-navy to-brand-royal">
        <div className="container mx-auto px-4 pt-8 text-center max-w-4xl">
          <p className="text-white/70 text-sm font-medium mb-2">{section.title}</p>
          <h1 className="text-3xl md:text-4xl font-bold mb-3 font-merriweather">
            {isExtra ? unit.title : `Unit ${unit.number} — ${unit.title}`}
          </h1>
          {unit.subtitle && <p className="text-lg text-white/90">{unit.subtitle}</p>}
        </div>
      </section>

      <section className="py-12 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="mb-6">
            <Link to={`/grammar/${section.id}`}>
              <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
                <ArrowLeft className="h-4 w-4 mr-1" /> Back to {section.title}
              </Button>
            </Link>
          </div>

          {!singleTab && (
            <div className="flex flex-wrap gap-2 mb-8">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                const active = activeTab === tab.key;
                return (
                  <button
                    key={tab.key}
                    type="button"
                    onClick={() => setActiveTab(tab.key)}
                    className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg border text-sm font-medium transition-colors ${
                      active
                        ? 'bg-primary text-primary-foreground border-primary'
                        : 'bg-background text-foreground border-border hover:bg-muted'
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                    {tab.label}
                  </button>
                );
              })}
            </div>
          )}

          <div className="space-y-8">
            {activeTab === 'theory' && <TheoryView sections={unit.theory} />}
            {activeTab === 'exercises' &&
              unit.exercises?.map((ex) => <MurphyExercise key={ex.id} exercise={ex} />)}
            {activeTab === 'supplementary' &&
              unit.supplementary?.map((ex) => <MurphyExercise key={ex.id} exercise={ex} />)}
            {activeTab === 'tense-master' && unit.tenseMaster && (
              <TenseMasterPanel type={unit.tenseMaster} hideHeader />
            )}
            {activeTab === 'holiday' && <PastTensesHolidayLesson />}
            {activeTab === 'cambridge' && <PastTensesCambridgeLesson />}
            {activeTab === 'modal-master' && <ModalVerbsMasterLesson />}
            {activeTab === 'so-such' && <SoSuchLesson />}
            {activeTab === 'compound-adjectives' && <CompoundAdjectivesLesson />}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MurphyGrammarUnit;
