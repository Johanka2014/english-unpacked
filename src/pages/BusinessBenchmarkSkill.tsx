import { Link, useParams, Navigate } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { businessBenchmarkModules } from '@/data/businessBenchmarkData';
import SEO from '@/components/SEO';
import DepartmentMatchingExercise from '@/components/business-benchmark/DepartmentMatchingExercise';
import JobResponsibilitiesExercise from '@/components/business-benchmark/JobResponsibilitiesExercise';
import WorkPrepositionsExercise from '@/components/business-benchmark/WorkPrepositionsExercise';

const BusinessBenchmarkSkill = () => {
  const { moduleId, skillId } = useParams();
  const mod = businessBenchmarkModules.find((m) => m.id === moduleId);
  const skill = mod?.skills.find((s) => s.id === skillId);

  if (!mod || !skill) return <Navigate to="/business-benchmark" replace />;

  const renderContent = () => {
    const contentType = skill.content?.type;
    if (contentType === 'department-matching') return (
      <div className="space-y-8">
        <DepartmentMatchingExercise />
        <JobResponsibilitiesExercise />
        <WorkPrepositionsExercise />
      </div>
    );
    return (
      <div className="max-w-3xl mx-auto text-center py-16">
        <p className="text-lg text-muted-foreground">
          Content for this skill is coming soon. Check back later!
        </p>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title={`${skill.title} — ${mod.title} | Business Benchmark`}
        description={skill.description}
      />
      <Navigation />

      <section className="bg-primary/10 py-16">
        <div className="container mx-auto px-4">
          <span className="text-sm font-medium text-muted-foreground">
            Module {mod.number}: {mod.title}
          </span>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mt-1">{skill.title}</h1>
          <p className="text-muted-foreground mt-2">{skill.description}</p>
        </div>
      </section>

      <main className="container mx-auto px-4 py-12">
        <div className="mb-8">
          <Link to={`/business-benchmark/${mod.id}`}>
            <Button variant="ghost" className="gap-2">
              <ArrowLeft className="h-4 w-4" /> Back to {mod.title}
            </Button>
          </Link>
        </div>

        {renderContent()}
      </main>

      <Footer />
    </div>
  );
};

export default BusinessBenchmarkSkill;
