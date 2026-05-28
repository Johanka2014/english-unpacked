import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Clock, ChevronRight } from 'lucide-react';
import { connectedSpeechLessons } from '@/data/connectedSpeechData';
import { cn } from '@/lib/utils';

const difficultyClasses: Record<string, string> = {
  Beginner: 'bg-emerald-50 text-emerald-700 border-emerald-200',
  Intermediate: 'bg-amber-50 text-amber-700 border-amber-200',
  Advanced: 'bg-rose-50 text-rose-700 border-rose-200',
};

const ConnectedSpeech = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Connected Speech Course - English Unpacked"
        description="Master English connected speech across 6 lessons — linking, intrusive /r/, elision, assimilation and reductions — with theory, examples and practice quizzes."
      />
      <Navigation />

      {/* Hero */}
      <section className="relative min-h-[40vh] flex items-center justify-center text-white overflow-hidden bg-gradient-to-br from-brand-navy to-brand-royal pt-20">
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4 py-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-merriweather">
            Connected Speech
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
            6 lessons on how English sounds connect, change and flow together — from
            robotic word-by-word to natural fluent speech.
          </p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="mb-6 max-w-7xl mx-auto">
            <Link to="/members/activities?tab=grammar">
              <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
                <ArrowLeft className="h-4 w-4 mr-1" /> Back to Practice Activities
              </Button>
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {connectedSpeechLessons.map((lesson) => {
              const Icon = lesson.icon;
              return (
                <Link key={lesson.id} to={`/connected-speech/${lesson.id}`}>
                  <Card className="service-card overflow-hidden cursor-pointer group shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                    <CardHeader>
                      <div className="flex items-start justify-between mb-2">
                        <div className="p-2 bg-brand-royal/10 rounded-lg group-hover:bg-brand-royal/20 transition-colors">
                          <Icon className="h-5 w-5 text-brand-royal" />
                        </div>
                        <ChevronRight className="h-5 w-5 text-muted-foreground group-hover:text-brand-royal group-hover:translate-x-1 transition-all" />
                      </div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className={cn('px-2 py-0.5 rounded-full text-xs font-medium border', difficultyClasses[lesson.difficulty])}>
                          {lesson.difficulty}
                        </span>
                        <span className="inline-flex items-center text-xs text-muted-foreground">
                          <Clock className="h-3 w-3 mr-1" /> {lesson.duration}
                        </span>
                        <Badge variant="secondary" className="ml-auto">Lesson {lesson.number}</Badge>
                      </div>
                      <CardTitle className="font-merriweather text-lg">{lesson.title}</CardTitle>
                      <CardDescription>{lesson.subtitle}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground leading-relaxed">{lesson.description}</p>
                    </CardContent>
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

export default ConnectedSpeech;
