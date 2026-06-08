import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowLeft, BookOpenText } from 'lucide-react';
import { technicalTopics, groupLabels, type TechnicalTopic } from '@/data/technicalEnglishData';

const TopicCard = ({ topic }: { topic: TechnicalTopic }) => {
  const ready = topic.activities.length > 0;
  return (
    <Link to={`/technical-english/${topic.id}`} className="block">
      <Card className="h-full hover:shadow-lg transition-all hover:-translate-y-0.5">
        <CardHeader className="pb-3">
          <div className="flex items-start justify-between gap-2">
            <span className="text-xs font-semibold text-muted-foreground">Topic {topic.number}</span>
            {ready ? (
              <Badge variant="secondary" className="text-xs">Interactive</Badge>
            ) : (
              <Badge variant="outline" className="text-xs">Coming soon</Badge>
            )}
          </div>
          <CardTitle className="text-lg font-merriweather leading-tight">{topic.title}</CardTitle>
        </CardHeader>
        {topic.subtitle && (
          <CardContent className="pt-0">
            <p className="text-sm text-muted-foreground">{topic.subtitle}</p>
          </CardContent>
        )}
      </Card>
    </Link>
  );
};

const TechnicalEnglish = () => {
  const groups: TechnicalTopic['group'][] = ['professional', 'company', 'grammar'];
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Technical English: Vocabulary and Grammar"
        description="Master technical English across 50 topics — production, R&D, IT, logistics, engineering sectors, and 20 grammar uses."
      />
      <Navigation />
      <main className="container mx-auto px-4 py-16">
        <Button asChild variant="ghost" size="sm" className="mb-6">
          <Link to="/members/activities?tab=engineering"><ArrowLeft className="h-4 w-4 mr-2" />Back to Practice</Link>
        </Button>
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center h-14 w-14 rounded-full bg-primary/10 text-primary mb-4">
            <BookOpenText className="h-7 w-7" />
          </div>
          <h1 className="text-4xl font-bold font-merriweather mb-3">Technical English</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Vocabulary and Grammar — 50 topics covering professional activities, industry profiles and grammar uses.
          </p>
        </div>

        {groups.map((g) => {
          const topics = technicalTopics.filter((t) => t.group === g);
          return (
            <section key={g} className="mb-12">
              <h2 className="text-2xl font-merriweather font-semibold mb-5 border-l-4 border-primary pl-3">
                {groupLabels[g]}
              </h2>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {topics.map((t) => <TopicCard key={t.id} topic={t} />)}
              </div>
            </section>
          );
        })}
      </main>
      <Footer />
    </div>
  );
};

export default TechnicalEnglish;
