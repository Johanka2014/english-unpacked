import { Link, useParams, Navigate } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { ArrowLeft, BookOpen, ExternalLink } from 'lucide-react';
import { findMurphySection, unitHasContent } from '@/data/murphyGrammarData';
import SEO from '@/components/SEO';
import { ComingSoonBadge } from '@/components/ComingSoonBadge';

const MurphyGrammarSection = () => {
  const { sectionId } = useParams<{ sectionId: string }>();
  const section = findMurphySection(sectionId);

  if (!section) return <Navigate to="/grammar" replace />;

  const Icon = section.icon;

  return (
    <div className="min-h-screen bg-background">
      <SEO title={`${section.title} - Grammar in Use`} description={section.description} />
      <Navigation />

      <section className="relative min-h-[40vh] flex items-center justify-center text-white overflow-hidden bg-gradient-to-br from-brand-navy to-brand-royal">
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4 pt-20">
          <div className="inline-flex items-center justify-center bg-white/20 p-4 rounded-full mb-6">
            <Icon className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight font-merriweather">{section.title}</h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">{section.description}</p>
          <p className="mt-3 text-white/70 text-sm font-medium">{section.range}</p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="mb-6 max-w-7xl mx-auto">
            <Link to="/grammar">
              <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
                <ArrowLeft className="h-4 w-4 mr-1" /> Back to Grammar
              </Button>
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {section.units.map((unit) => {
              const hasContent = unitHasContent(unit);
              const isExtra = unit.number > 500;
              const cardInner = (
                <Card
                  className={`service-card overflow-hidden group shadow-lg transition-all duration-300 h-full ${
                    hasContent ? 'cursor-pointer hover:shadow-xl' : 'opacity-60 cursor-not-allowed'
                  }`}
                >
                  <div className="relative h-40 overflow-hidden bg-gradient-to-br from-brand-navy to-brand-royal flex items-center justify-center">
                    <span className="text-5xl font-bold text-white/20 font-merriweather">
                      {isExtra ? '★' : unit.number}
                    </span>
                    <div className="absolute top-4 left-4 bg-white/20 p-2 rounded-full">
                      <BookOpen className="w-5 h-5 text-white" />
                    </div>
                    {unit.externalUrl && (
                      <div className="absolute top-4 right-4 bg-white/20 p-2 rounded-full">
                        <ExternalLink className="w-4 h-4 text-white" />
                      </div>
                    )}
                    {!hasContent && <ComingSoonBadge className="absolute top-3 right-3" />}
                  </div>
                  <CardHeader>
                    <CardTitle className="font-merriweather text-lg">
                      {isExtra ? unit.title : `${unit.number}. ${unit.title}`}
                    </CardTitle>
                    {unit.subtitle && <CardDescription className="text-sm">{unit.subtitle}</CardDescription>}
                  </CardHeader>
                </Card>
              );

              if (!hasContent) {
                return (
                  <div key={unit.id} aria-disabled="true">
                    {cardInner}
                  </div>
                );
              }

              return unit.externalUrl ? (
                <Link key={unit.id} to={unit.externalUrl}>
                  {cardInner}
                </Link>
              ) : (
                <Link key={unit.id} to={`/grammar/${section.id}/${unit.id}`}>
                  {cardInner}
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

export default MurphyGrammarSection;
