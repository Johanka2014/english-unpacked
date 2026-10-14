import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, BookOpen, Lock } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import { Button } from '@/components/ui/button';
import { moversSections } from '@/data/moversData';

export default function MoversPractice() {
  return <div className="min-h-screen bg-background">
    <SEO title="Get Ready for Movers | English Unpacked" description="Get Ready for Movers: introduction, twelve units and revision practice for young English learners." />
    <Navigation />
    <main className="container max-w-6xl px-4 py-8 sm:py-12">
      <Button variant="ghost" asChild className="mb-6"><Link to="/members/activities?tab=young-learners"><ArrowLeft className="h-4 w-4 mr-2" />Young Learners</Link></Button>
      <header className="border-b border-border pb-8 mb-8">
        <p className="text-brand-accent font-semibold mb-3">Cambridge A1 Movers</p>
        <h1 className="font-fredoka text-4xl sm:text-5xl text-brand-navy font-semibold">Get Ready for Movers</h1>
      </header>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {moversSections.map(section => <article key={section.id} className={`border rounded-lg p-5 flex flex-col min-h-44 ${section.available ? 'border-primary/30 bg-card' : 'border-border bg-muted/50'}`}>
          <div className="flex items-center justify-between mb-3"><span className={section.available ? 'text-brand-accent font-semibold text-sm' : 'text-muted-foreground text-sm'}>{section.label}</span>{section.available ? <BookOpen className="h-5 w-5 text-primary" /> : <Lock className="h-4 w-4 text-muted-foreground" />}</div>
          <h2 className={`font-fredoka text-xl font-medium mb-4 ${section.available ? 'text-brand-navy' : 'text-muted-foreground'}`}>{section.title}</h2>
          {section.available ? <Button asChild variant="outline" className="mt-auto justify-between"><Link to={`/movers-practice/${section.id}`}>Open activities<ArrowRight className="h-4 w-4" /></Link></Button> : <p className="mt-auto text-sm text-muted-foreground">Coming soon</p>}
        </article>)}
      </div>
    </main><Footer />
  </div>;
}