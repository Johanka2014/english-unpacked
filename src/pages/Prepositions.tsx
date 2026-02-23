import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight, Clock, BookOpen } from 'lucide-react';

const prepositionCards = [
  {
    title: 'Prepositions of Time',
    description: 'Master on, in, at, from, to, past, till, by, since, for, ago and before with interactive exercises across 7 units',
    icon: Clock,
    path: '/prepositions-of-time',
    color: 'text-amber-600',
  },
  {
    title: 'Verbs & Adjectives + Prepositions',
    description: 'Practice verb and adjective + preposition combinations: talk about/to, wait for, agree with, work in/for/as, apply for/to',
    icon: BookOpen,
    path: '/verb-adjective-prepositions',
    color: 'text-blue-600',
  },
];

const Prepositions = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto px-4 py-20">
        <div className="mb-4 max-w-6xl mx-auto">
          <Link to="/members/activities?tab=grammar">
            <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
              <ArrowLeft className="h-4 w-4 mr-1" /> Back to Practice Activities
            </Button>
          </Link>
        </div>
        <div className="mb-10 text-center">
          <Badge className="mb-4" variant="secondary">Grammar Practice</Badge>
          <h1 className="text-4xl font-bold text-foreground mb-2">Prepositions</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose a preposition topic to practise
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
          {prepositionCards.map((card) => {
            const Icon = card.icon;
            return (
              <Link key={card.path} to={card.path}>
                <Card className="h-full hover:shadow-lg hover:-translate-y-1 transition-all duration-200 cursor-pointer">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <div className={`p-2 rounded-lg bg-muted ${card.color}`}>
                        <Icon className="h-6 w-6" />
                      </div>
                      <ArrowRight className="h-4 w-4 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{card.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      {card.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Prepositions;
