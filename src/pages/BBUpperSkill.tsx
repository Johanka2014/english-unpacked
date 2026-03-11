import { Link, useParams, Navigate } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { bbUpperModules } from '@/data/businessBenchmarkUpperData';
import SEO from '@/components/SEO';
import GettingStartedUnit10 from '@/components/bb-upper/GettingStartedUnit10';
import VocabularyUnit10 from '@/components/bb-upper/VocabularyUnit10';
import ListeningUnit10 from '@/components/bb-upper/ListeningUnit10';

const BBUpperSkill = () => {
  const { moduleId, skillId } = useParams();
  const mod = bbUpperModules.find((m) => m.id === moduleId);
  const skill = mod?.skills.find((s) => s.id === skillId);

  if (!mod || !skill) return <Navigate to="/bb-upper" replace />;

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title={`${skill.title} — ${mod.title} | Business Benchmark Upper Intermediate`}
        description={skill.description}
      />
      <Navigation />

      <section className="bg-primary/10 py-16">
        <div className="container mx-auto px-4">
          <span className="text-sm font-medium text-muted-foreground">
            {mod.isGrammarWorkshop ? mod.title : `Unit ${mod.number}: ${mod.title}`}
          </span>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mt-1">{skill.title}</h1>
          <p className="text-muted-foreground mt-2">{skill.description}</p>
        </div>
      </section>

      <main className="container mx-auto px-4 py-12">
        <div className="mb-8">
          <Link to={`/bb-upper/${mod.id}`}>
            <Button variant="ghost" className="gap-2">
              <ArrowLeft className="h-4 w-4" /> Back to {mod.title}
            </Button>
          </Link>
        </div>

        {moduleId === 'financing-the-start-up' && skillId === 'getting-started' ? (
          <GettingStartedUnit10 />
        ) : moduleId === 'financing-the-start-up' && skillId === 'vocabulary' ? (
          <VocabularyUnit10 />
        ) : (
          <div className="bg-muted/50 rounded-xl p-12 text-center">
            <p className="text-lg text-muted-foreground">
              Content for this section is being prepared. Check back soon!
            </p>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default BBUpperSkill;
