import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Cpu } from 'lucide-react';
import { techTalkUnits } from '@/data/techTalkData';
import SEO from '@/components/SEO';

const gradients = [
  'from-cyan-700/80 to-cyan-500/40',
  'from-blue-700/80 to-blue-500/40',
  'from-indigo-700/80 to-indigo-500/40',
  'from-teal-700/80 to-teal-500/40',
  'from-emerald-700/80 to-emerald-500/40',
  'from-amber-700/80 to-amber-500/40',
  'from-orange-700/80 to-orange-500/40',
  'from-rose-700/80 to-rose-500/40',
  'from-purple-700/80 to-purple-500/40',
  'from-slate-700/80 to-slate-500/40',
];

const TechTalk = () => (
  <div className="min-h-screen bg-background">
    <SEO
      title="Tech Talk Intermediate | English Unpacked"
      description="Oxford Tech Talk Intermediate — 18 units of English for technicians and engineers, combining Student's Book and Workbook activities."
    />
    <Navigation />

    <section className="relative py-24 flex items-center justify-center text-center bg-gradient-to-br from-cyan-800 to-blue-700">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Tech Talk Intermediate</h1>
        <p className="text-xl text-white/90 max-w-2xl mx-auto">
          Oxford Business English — 18 units pairing Student's Book lessons with Workbook practice and Teacher's Book answer keys
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

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {techTalkUnits.map((unit, i) => {
          const gradient = gradients[i % gradients.length];
          return (
            <Link key={unit.id} to={`/tech-talk/${unit.id}`}>
              <div className="group relative rounded-xl overflow-hidden h-56 shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer">
                <div className={`absolute inset-0 bg-gradient-to-br ${gradient} group-hover:opacity-90 transition-opacity duration-300`} />
                <span className="absolute top-3 right-4 text-6xl font-black text-white/10 select-none">{unit.number}</span>
                <div className="relative z-10 h-full flex flex-col justify-end p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="p-1.5 rounded-lg bg-white/20">
                      <Cpu className="h-5 w-5 text-white" />
                    </div>
                    <span className="text-white/70 text-sm font-medium">Unit {unit.number}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white leading-tight">{unit.title}</h3>
                  <p className="text-white/70 text-sm mt-1 line-clamp-2">{unit.subtitle}</p>
                  <p className="text-white/60 text-xs mt-2">{unit.sections.length} sections</p>
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

export default TechTalk;
