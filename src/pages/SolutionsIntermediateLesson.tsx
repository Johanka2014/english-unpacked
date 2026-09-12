import { Link, useParams } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ArrowLeft } from 'lucide-react';
import { solUnits } from '@/data/solutionsIntermediateData';
import TechnicalRenderer from '@/components/technical/TechnicalRenderer';

const SolutionsIntermediateLesson = () => {
  const { unitId, lessonId } = useParams();
  const unit = solUnits.find((u) => u.id === unitId);
  const lesson = unit?.lessons.find((l) => l.id === lessonId);

  if (!unit || !lesson || lesson.sections.length === 0) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <main className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-3xl font-bold mb-3">This lesson isn&apos;t available yet</h1>
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
        title={`${lesson.code} ${lesson.title} · Solutions Intermediate`}
        description={lesson.subtitle}
      />
      <Navigation />
      <main className="container mx-auto px-4 py-10 sm:py-12 max-w-4xl">
        <Button asChild variant="ghost" size="sm" className="mb-4">
          <Link to={`/solutions-intermediate/${unit.id}`}>
            <ArrowLeft className="h-4 w-4 mr-2" />
            Unit {unit.number}
          </Link>
        </Button>

        <header className="mb-6">
          <p className="text-sm text-muted-foreground mb-1">
            Solutions Intermediate · Unit {unit.number} · {lesson.code}
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold font-merriweather text-foreground">{lesson.title}</h1>
          <p className="text-base sm:text-lg text-muted-foreground mt-2">{lesson.subtitle}</p>
          <div className="flex flex-wrap gap-2 mt-4">
            <Badge variant="secondary">{lesson.skill}</Badge>
          </div>
        </header>

        <Tabs defaultValue={lesson.sections[0].id} className="w-full">
          <TabsList className="flex flex-wrap h-auto justify-start gap-1 mb-6">
            {lesson.sections.map((s) => (
              <TabsTrigger key={s.id} value={s.id} className="text-xs sm:text-sm">
                {s.title}
              </TabsTrigger>
            ))}
          </TabsList>

          {lesson.sections.map((s) => (
            <TabsContent key={s.id} value={s.id} className="space-y-4 sm:space-y-6">
              {s.description && (
                <p className="text-sm sm:text-base text-muted-foreground">{s.description}</p>
              )}
              <TechnicalRenderer activities={s.activities} />
            </TabsContent>
          ))}
        </Tabs>
      </main>
      <Footer />
    </div>
  );
};

export default SolutionsIntermediateLesson;
