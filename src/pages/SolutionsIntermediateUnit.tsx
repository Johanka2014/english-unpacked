import { Link, useParams } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { solUnits, type SolLesson } from '@/data/solutionsIntermediateData';
import { ComingSoonBadge } from '@/components/ComingSoonBadge';

const LessonCard = ({ unitId, lesson }: { unitId: string; lesson: SolLesson }) => {
  const ready = lesson.sections.length > 0;
  const card = (
    <Card
      className={`h-full transition-all ${
        ready ? 'hover:shadow-lg hover:-translate-y-0.5' : 'opacity-60 cursor-not-allowed'
      }`}
    >
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between gap-2">
          <span className="text-xs font-semibold text-muted-foreground">{lesson.code}</span>
          {ready ? <Badge variant="secondary" className="text-xs">{lesson.skill}</Badge> : <ComingSoonBadge />}
        </div>
        <CardTitle className="text-lg font-merriweather leading-tight">{lesson.title}</CardTitle>
      </CardHeader>
      <CardContent className="pt-0">
        <p className="text-sm text-muted-foreground">{lesson.subtitle}</p>
      </CardContent>
    </Card>
  );
  if (!ready) return <div aria-disabled="true">{card}</div>;
  return (
    <Link to={`/solutions-intermediate/${unitId}/${lesson.id}`} className="block">
      {card}
    </Link>
  );
};

const SolutionsIntermediateUnit = () => {
  const { unitId } = useParams();
  const unit = solUnits.find((u) => u.id === unitId);

  if (!unit || unit.lessons.length === 0) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <main className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-3xl font-bold mb-3">This unit isn&apos;t available yet</h1>
          <Button asChild>
            <Link to="/solutions-intermediate">Back to Solutions Intermediate</Link>
          </Button>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title={`Unit ${unit.number}: ${unit.title} · Solutions Intermediate`}
        description={unit.subtitle}
      />
      <Navigation />
      <main className="container mx-auto px-4 py-12 max-w-5xl">
        <Button asChild variant="ghost" size="sm" className="mb-4">
          <Link to="/solutions-intermediate">
            <ArrowLeft className="h-4 w-4 mr-2" />
            All units
          </Link>
        </Button>

        <header className="mb-8">
          <p className="text-sm text-muted-foreground mb-1">
            Solutions Intermediate · Unit {unit.number}
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold font-merriweather text-foreground">{unit.title}</h1>
          <p className="text-base sm:text-lg text-muted-foreground mt-2">{unit.subtitle}</p>
        </header>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {unit.lessons.map((l) => (
            <LessonCard key={l.id} unitId={unit.id} lesson={l} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SolutionsIntermediateUnit;
