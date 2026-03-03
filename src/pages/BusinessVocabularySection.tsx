import { Link, useParams, Navigate } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { ArrowLeft, BookOpen } from 'lucide-react';
import { businessVocabSections } from '@/data/businessVocabularyData';
import SEO from '@/components/SEO';

const BusinessVocabularySection = () => {
  const { sectionId } = useParams<{ sectionId: string }>();
  const section = businessVocabSections.find((s) => s.id === sectionId);

  if (!section) return <Navigate to="/business-vocabulary" replace />;

  const Icon = section.icon;

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title={`${section.title} - Business Vocabulary`}
        description={section.description}
      />
      <Navigation />

      {/* Hero */}
      <section
        className="relative min-h-[40vh] flex items-center justify-center text-white overflow-hidden"
        style={{
          background: `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url("${section.image}")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-brand-navy/30 to-brand-royal/30" />
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4 pt-20">
          <div className="inline-flex items-center justify-center bg-brand-royal/90 p-4 rounded-full mb-6">
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
            <Link to="/business-vocabulary">
              <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
                <ArrowLeft className="h-4 w-4 mr-1" /> Back to Business Vocabulary
              </Button>
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {section.topics.map((topic) => {
              const hasContent = !!(topic.theory || topic.practice || topic.test);
              return (
                <Link key={topic.id} to={`/business-vocabulary/${sectionId}/${topic.id}`}>
                  <Card className="service-card overflow-hidden cursor-pointer group shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                    <div className="relative h-40 overflow-hidden bg-gradient-to-br from-brand-navy to-brand-royal flex items-center justify-center">
                      <span className="text-5xl font-bold text-white/20 font-merriweather">{topic.number}</span>
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
                        {topic.number}. {topic.title}
                      </CardTitle>
                      {topic.subtopics.length > 0 && (
                        <CardDescription className="text-sm">
                          {topic.subtopics.join(' • ')}
                        </CardDescription>
                      )}
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

export default BusinessVocabularySection;
