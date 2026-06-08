import { Link, useParams, Navigate, useNavigate } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { engineeringUnits } from '@/data/engineeringData';
import SEO from '@/components/SEO';
import EngineeringSectionRenderer from '@/components/engineering/EngineeringSectionRenderer';

const EngineeringEnglishSection = () => {
  const { unitId, sectionId } = useParams();
  const navigate = useNavigate();
  const unit = engineeringUnits.find((u) => u.id === unitId);
  const section = unit?.sections.find((s) => s.id === sectionId);

  if (!unit || !section) return <Navigate to="/engineering-english" replace />;

  const currentIndex = unit.sections.findIndex((s) => s.id === sectionId);
  const prev = currentIndex > 0 ? unit.sections[currentIndex - 1] : null;
  const next = currentIndex < unit.sections.length - 1 ? unit.sections[currentIndex + 1] : null;

  const handleNavigate = (path: string) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title={`${section.title} — ${unit.title} | Cambridge English for Engineering`}
        description={section.description}
      />
      <Navigation />

      <section className="bg-primary/10 py-16">
        <div className="container mx-auto px-4">
          <span className="text-sm font-medium text-muted-foreground">
            Unit {unit.number}: {unit.title}
          </span>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mt-1">{section.title}</h1>
          <p className="text-muted-foreground mt-2">{section.description}</p>
        </div>
      </section>

      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="mb-8">
          <Link to={`/engineering-english/${unit.id}`}>
            <Button variant="ghost" className="gap-2">
              <ArrowLeft className="h-4 w-4" /> Back to {unit.title}
            </Button>
          </Link>
        </div>

        <EngineeringSectionRenderer activities={section.activities} />

        <div className="flex justify-between items-center mt-12 pt-6 border-t border-border">
          {prev ? (
            <Button variant="outline" className="gap-2" onClick={() => handleNavigate(`/engineering-english/${unit.id}/${prev.id}`)}>
              <ArrowLeft className="h-4 w-4" />
              <span className="hidden sm:inline">{prev.title}</span>
              <span className="sm:hidden">Previous</span>
            </Button>
          ) : (
            <div />
          )}
          {next ? (
            <Button className="gap-2 bg-primary hover:bg-primary/90" onClick={() => handleNavigate(`/engineering-english/${unit.id}/${next.id}`)}>
              <span className="hidden sm:inline">{next.title}</span>
              <span className="sm:hidden">Next</span>
              <ArrowRight className="h-4 w-4" />
            </Button>
          ) : (
            <Button className="gap-2 bg-primary hover:bg-primary/90" onClick={() => handleNavigate(`/engineering-english/${unit.id}`)}>
              Back to Unit
              <ArrowRight className="h-4 w-4" />
            </Button>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default EngineeringEnglishSection;
