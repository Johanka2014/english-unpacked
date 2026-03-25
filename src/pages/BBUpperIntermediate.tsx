import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import {
  ArrowLeft, Briefcase, Users, FileText, Phone, Megaphone, Rocket,
  Store, Handshake, UserRound, PiggyBank, MapPin, Presentation,
  Hotel, CalendarCheck, ClipboardList, Building2, Monitor, Globe,
  Laptop, Truck, Heart, MessageCircle, Mail, GraduationCap, Wrench,
} from 'lucide-react';
import heroImg from '@/assets/bb-upper-intermediate.jpg';
import { bbUpperModules } from '@/data/businessBenchmarkUpperData';
import SEO from '@/components/SEO';

const moduleIcons: Record<string, React.ElementType> = {
  'staff-development-and-training': Users,
  'job-descriptions': FileText,
  'letters-of-enquiry-and-applications': Mail,
  'telephone-skills': Phone,
  'grammar-workshop-1': Wrench,
  'promotional-activities-and-branding': Megaphone,
  'new-product-development': Rocket,
  'a-stand-at-a-trade-fair': Store,
  'establishing-relationships-and-negotiating': Handshake,
  'grammar-workshop-2': Wrench,
  'going-it-alone': UserRound,
  'financing-the-start-up': PiggyBank,
  'starting-up-in-a-new-location': MapPin,
  'presenting-your-business-idea': Presentation,
  'grammar-workshop-3': Wrench,
  'business-hotels-and-sales': Hotel,
  'business-conferences': CalendarCheck,
  'reports': ClipboardList,
  'business-meetings': Building2,
  'grammar-workshop-4': Wrench,
  'new-technologies-and-change': Monitor,
  'using-the-internet': Globe,
  'flexible-working': Laptop,
  'offshoring-and-outsourcing': Truck,
  'grammar-workshop-5': Wrench,
  'customer-loyalty': Heart,
  'communication-with-customers': MessageCircle,
  'corresponding-with-customers': Mail,
  'a-business-seminar': GraduationCap,
  'grammar-workshop-6': Wrench,
};

const BBUpperIntermediate = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Business Benchmark Upper Intermediate | English Unpacked"
        description="Master B2 business English across 24 units with reading, listening, writing, speaking, vocabulary and grammar exercises."
      />
      <Navigation />

      {/* Hero Section */}
      <section
        className="relative py-24 flex items-center justify-center text-center"
        style={{
          background: `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url("${heroImg}")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Business Benchmark Upper Intermediate
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            24 units covering essential B2 business skills grouped into 6 blocks with grammar workshops
          </p>
        </div>
      </section>

      <main className="container mx-auto px-4 py-12 bg-gradient-to-b from-blue-50/60 via-blue-50/30 to-white dark:from-blue-950/20 dark:via-blue-950/10 dark:to-background rounded-b-2xl">
        <div className="mb-8">
          <Link to="/members/activities?tab=business">
            <Button variant="ghost" className="gap-2">
              <ArrowLeft className="h-4 w-4" /> Back to Business Activities
            </Button>
          </Link>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {bbUpperModules.map((mod) => {
            const Icon = moduleIcons[mod.id] || Briefcase;
            const isGW = mod.isGrammarWorkshop;
            return (
              <Link key={mod.id} to={`/bb-upper/${mod.id}`}>
                <div className={`group relative rounded-xl overflow-hidden h-48 shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer`}>
                  {/* Gradient background */}
                  <div className={`absolute inset-0 transition-all duration-300 ${
                    isGW
                      ? 'bg-gradient-to-br from-amber-700/80 to-amber-500/40 group-hover:from-amber-700/90 group-hover:to-amber-500/50'
                      : 'bg-gradient-to-br from-primary/80 to-primary/40 group-hover:from-primary/90 group-hover:to-primary/50'
                  }`} />

                  {/* Module number watermark */}
                  {!isGW && (
                    <span className="absolute top-3 right-4 text-6xl font-black text-white/10 select-none">
                      {mod.number}
                    </span>
                  )}

                  {/* Content */}
                  <div className="relative z-10 h-full flex flex-col justify-end p-5">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="p-1.5 rounded-lg bg-white/20">
                        <Icon className="h-5 w-5 text-white" />
                      </div>
                      <span className="text-white/70 text-sm font-medium">
                        {isGW ? 'Grammar' : `Unit ${mod.number}`}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-white leading-tight">
                      {mod.title}
                    </h3>
                    <p className="text-white/70 text-xs mt-1">
                      {mod.skills.length} {mod.skills.length === 1 ? 'section' : 'sections'}
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

export default BBUpperIntermediate;
