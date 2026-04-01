import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Users, UserCheck, Handshake, GraduationCap, Coins, Scale } from 'lucide-react';
import { hrUnits } from '@/data/hrData';
import SEO from '@/components/SEO';

const unitIcons: Record<string, React.ElementType> = {
  'recruitment': Users,
  'selection': UserCheck,
  'employee-relations': Handshake,
  'hr-development': GraduationCap,
  'reward-and-remuneration': Coins,
  'industrial-relations': Scale,
};

const unitGradients: Record<string, string> = {
  'recruitment': 'from-teal-700/80 to-teal-500/40',
  'selection': 'from-indigo-700/80 to-indigo-500/40',
  'employee-relations': 'from-emerald-700/80 to-emerald-500/40',
  'hr-development': 'from-amber-700/80 to-amber-500/40',
  'reward-and-remuneration': 'from-rose-700/80 to-rose-500/40',
  'industrial-relations': 'from-purple-700/80 to-purple-500/40',
};

const HREnglish = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Oxford English for Human Resources | English Unpacked"
        description="Master HR English across 6 units covering recruitment, selection, employee relations, HR development, remuneration, and industrial relations."
      />
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-24 flex items-center justify-center text-center bg-gradient-to-br from-teal-800 to-teal-600">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Oxford English for Human Resources
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            6 units covering essential HR topics from recruitment to industrial relations
          </p>
        </div>
      </section>

      <main className="container mx-auto px-4 py-12">
        <div className="mb-8">
          <Link to="/members/activities?tab=hr">
            <Button variant="ghost" className="gap-2">
              <ArrowLeft className="h-4 w-4" /> Back to HR Activities
            </Button>
          </Link>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {hrUnits.map((unit) => {
            const Icon = unitIcons[unit.id] || Users;
            const gradient = unitGradients[unit.id] || 'from-gray-700/80 to-gray-500/40';
            return (
              <Link key={unit.id} to={`/hr-english/${unit.id}`}>
                <div className="group relative rounded-xl overflow-hidden h-56 shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer">
                  <div className={`absolute inset-0 bg-gradient-to-br ${gradient} group-hover:opacity-90 transition-opacity duration-300`} />
                  <span className="absolute top-3 right-4 text-6xl font-black text-white/10 select-none">
                    {unit.number}
                  </span>
                  <div className="relative z-10 h-full flex flex-col justify-end p-5">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="p-1.5 rounded-lg bg-white/20">
                        <Icon className="h-5 w-5 text-white" />
                      </div>
                      <span className="text-white/70 text-sm font-medium">Unit {unit.number}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white leading-tight">{unit.title}</h3>
                    <p className="text-white/70 text-sm mt-1 line-clamp-2">{unit.subtitle}</p>
                    <p className="text-white/60 text-xs mt-2">{unit.skills.length} sections</p>
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

export default HREnglish;
