import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowLeft, GraduationCap } from 'lucide-react';
import { solUnits, type SolUnit } from '@/data/solutionsIntermediateData';
import { ComingSoonBadge } from '@/components/ComingSoonBadge';

const UnitCard = ({ unit }: { unit: SolUnit }) => {
  const ready = unit.lessons.length > 0;
  const built = unit.lessons.filter((l) => l.sections.length > 0).length;

  const card = (
    <Card
      className={`h-full transition-all ${
        ready ? 'hover:shadow-lg hover:-translate-y-0.5' : 'opacity-60 cursor-not-allowed'
      }`}
    >
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between gap-2">
          <span className="text-xs font-semibold text-muted-foreground">Unit {unit.number}</span>
          {ready ? (
            <Badge variant="secondary" className="text-xs">
              {built} lesson{built === 1 ? '' : 's'} ready
            </Badge>
          ) : (
            <ComingSoonBadge />
          )}
        </div>
        <CardTitle className="text-lg font-merriweather leading-tight">{unit.title}</CardTitle>
      </CardHeader>
      <CardContent className="pt-0">
        <p className="text-sm text-muted-foreground">{unit.subtitle}</p>
      </CardContent>
    </Card>
  );

  if (!ready) return <div aria-disabled="true">{card}</div>;
  return (
    <Link to={`/solutions-intermediate/${unit.id}`} className="block">
      {card}
    </Link>
  );
};

const SolutionsIntermediate = () => (
  <div className="min-h-screen bg-background">
    <SEO
      title="Solutions Intermediate — Maturita Practice Online"
      description="Interactive Maturita practice with Solutions Intermediate (3rd edition): vocabulary, grammar, listening, reading, speaking and writing for every unit."
    />
    <Navigation />
    <main className="container mx-auto px-4 py-12 sm:py-16">
      <Button asChild variant="ghost" size="sm" className="mb-6">
        <Link to="/members/activities?tab=exams&exam=maturita">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Practice
        </Link>
      </Button>

      <div className="text-center mb-10">
        <div className="inline-flex items-center justify-center h-14 w-14 rounded-full bg-primary/10 text-primary mb-4">
          <GraduationCap className="h-7 w-7" />
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold font-merriweather mb-3">
          Solutions Intermediate — Maturita Practice
        </h1>
        <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
          Solutions 3rd edition, Intermediate (B1+/B2). Ten units of vocabulary, grammar, listening,
          reading, speaking and writing, rebuilt as interactive Maturita practice.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {solUnits.map((u) => (
          <UnitCard key={u.id} unit={u} />
        ))}
      </div>
    </main>
    <Footer />
  </div>
);

export default SolutionsIntermediate;
