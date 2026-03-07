import { Link, useParams, Navigate } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { ArrowLeft, BookOpen } from 'lucide-react';
import { b1GrammarSections } from '@/data/b1GrammarData';
import SEO from '@/components/SEO';

const B1GrammarSection = () => {
  const { sectionId } = useParams<{ sectionId: string }>();
  const section = b1GrammarSections.find((s) => s.id === sectionId);

  if (!section) return <Navigate to="/b1-grammar" replace />;

  const Icon = section.icon;

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title={`${section.title} - B1 Grammar`}
        description={section.description}
      />
      <Navigation />

      {/* Hero */}
      <section className="relative min-h-[40vh] flex items-center justify-center text-white overflow-hidden bg-gradient-to-br from-brand-navy to-brand-royal">
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4 pt-20">
          <div className="inline-flex items-center justify-center bg-white/20 p-4 rounded-full mb-6">
            <Icon className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight font-merriweather">
            {section.title}
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
            {section.description}
          </p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="mb-6 max-w-7xl mx-auto">
            <Link to="/b1-grammar">
              <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
                <ArrowLeft className="h-4 w-4 mr-1" /> Back to B1 Grammar
              </Button>
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {section.modules.map((mod) => {
              const hasContent = !!(mod.theory || mod.exercises);
              return (
                <Link key={mod.id} to={`/b1-grammar/${sectionId}/${mod.id}`}>
                  <Card className="service-card overflow-hidden cursor-pointer group shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                    <div className="relative h-40 overflow-hidden bg-gradient-to-br from-brand-navy to-brand-royal flex items-center justify-center">
                      <span className="text-5xl font-bold text-white/20 font-merriweather">{mod.number}</span>
                      <div className="absolute top-4 left-4 bg-white/20 p-2 rounded-full">
                        <BookOpen className="w-5 h-5 text-white" />
                      </div>
                      {!hasContent && (
                        <div className="absolute bottom-3 right-3 bg-amber-500/90 text-white text-xs px-2 py-1 rounded-full">
                          Coming soon
                        </div>
                      )}
                    </div>
                    <CardHeader>
                      <CardTitle className="font-merriweather text-lg">
                        {mod.number}. {mod.title}
                      </CardTitle>
                      <CardDescription className="text-sm">
                        {mod.subtitle}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default B1GrammarSection;
