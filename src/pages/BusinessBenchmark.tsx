import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Briefcase, Building2, Clock, Globe, Wrench, Factory, Truck, Megaphone, CalendarCheck, Plane, Hotel, TreePine, Users, Earth, UserRound, UtensilsCrossed, TrendingUp, Landmark, PiggyBank, Rocket, FileUser, UserSearch, GraduationCap, BarChart3 } from 'lucide-react';
import heroBackground from '@/assets/hero-background.webp';
import { businessBenchmarkModules } from '@/data/businessBenchmarkData';
import SEO from '@/components/SEO';

const moduleIcons = [
  Briefcase, Building2, Clock, Globe, Wrench, Factory, Truck, Megaphone,
  CalendarCheck, Plane, Hotel, TreePine, Users, Earth, UserRound, UtensilsCrossed,
  TrendingUp, Landmark, PiggyBank, Rocket, FileUser, UserSearch, GraduationCap, BarChart3,
];

const BusinessBenchmark = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Business Benchmark Pre-Intermediate to Intermediate | English Unpacked"
        description="Master B1 business English across 24 modules with reading, listening, writing, speaking, vocabulary and grammar exercises."
      />
      <Navigation />

      {/* Hero Section */}
      <section
        className="relative py-24 flex items-center justify-center text-center"
        style={{
          background: `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url("${heroBackground}")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Business Benchmark
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Pre-Intermediate to Intermediate — 24 modules covering essential business skills
          </p>
        </div>
      </section>

      <main className="container mx-auto px-4 py-12">
        <div className="mb-8">
          <Link to="/members/activities?tab=business">
            <Button variant="ghost" className="gap-2">
              <ArrowLeft className="h-4 w-4" /> Back to Business Activities
            </Button>
          </Link>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {businessBenchmarkModules.map((mod, idx) => {
            const Icon = moduleIcons[idx] || Briefcase;
            return (
              <Link key={mod.id} to={`/business-benchmark/${mod.id}`}>
                <div className="group relative rounded-xl overflow-hidden h-48 shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer">
                  {/* Gradient background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/80 to-primary/40 group-hover:from-primary/90 group-hover:to-primary/50 transition-all duration-300" />

                  {/* Module number watermark */}
                  <span className="absolute top-3 right-4 text-6xl font-black text-white/10 select-none">
                    {mod.number}
                  </span>

                  {/* Content */}
                  <div className="relative z-10 h-full flex flex-col justify-end p-5">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="p-1.5 rounded-lg bg-white/20">
                        <Icon className="h-5 w-5 text-white" />
                      </div>
                      <span className="text-white/70 text-sm font-medium">Module {mod.number}</span>
                    </div>
                    <h3 className="text-lg font-bold text-white leading-tight">
                      {mod.title}
                    </h3>
                    <p className="text-white/70 text-xs mt-1">
                      {mod.skills.length} skills
                    </p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default BusinessBenchmark;
