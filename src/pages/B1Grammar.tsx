import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { ArrowLeft } from 'lucide-react';
import { b1GrammarSections } from '@/data/b1GrammarData';
import SEO from '@/components/SEO';
import heroBackground from '@/assets/hero-background.webp';

const B1Grammar = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="B1 Grammar - English Unpacked"
        description="Master B1-level English grammar across 30 modules with interactive theory, exercises and exam practice."
      />
      <Navigation />

      {/* Hero */}
      <section
        className="relative min-h-[50vh] flex items-center justify-center text-white overflow-hidden"
        style={{
          background: `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url("${heroBackground}")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-brand-navy/30 to-brand-royal/30" />
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4 pt-20">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight font-merriweather">
            B1 Grammar
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto leading-relaxed">
            30 modules covering all essential B1-level grammar for PET and everyday English
          </p>
        </div>
      </section>

      {/* Back link + Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="mb-6 max-w-7xl mx-auto">
            <Link to="/members/activities?tab=grammar">
              <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
                <ArrowLeft className="h-4 w-4 mr-1" /> Back to Practice Activities
              </Button>
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {b1GrammarSections.map((section) => {
              const Icon = section.icon;
              return (
                <Link key={section.id} to={`/b1-grammar/${section.id}`}>
                  <Card className="service-card overflow-hidden cursor-pointer group shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={section.image}
                        alt={section.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute top-4 left-4 bg-brand-royal/90 p-3 rounded-full">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <CardHeader>
                      <CardTitle className="font-merriweather">{section.title}</CardTitle>
                      <CardDescription>{section.description}</CardDescription>
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

export default B1Grammar;
