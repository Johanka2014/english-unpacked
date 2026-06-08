import { Link, useParams } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft, ArrowRight, ArrowLeftCircle, Sparkles } from 'lucide-react';
import { technicalTopics, groupLabels } from '@/data/technicalEnglishData';
import TechnicalRenderer from '@/components/technical/TechnicalRenderer';

const TechnicalEnglishTopic = () => {
  const { topicId } = useParams();
  const index = technicalTopics.findIndex((t) => t.id === topicId);
  const topic = index >= 0 ? technicalTopics[index] : undefined;

  if (!topic) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <main className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-3xl font-bold mb-3">Topic not found</h1>
          <Button asChild><Link to="/technical-english">Back to Technical English</Link></Button>
        </main>
        <Footer />
      </div>
    );
  }

  const prev = index > 0 ? technicalTopics[index - 1] : null;
  const next = index < technicalTopics.length - 1 ? technicalTopics[index + 1] : null;
  const ready = topic.activities.length > 0;

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title={`${topic.title} · Technical English`}
        description={topic.subtitle || `Topic ${topic.number}: ${topic.title}`}
      />
      <Navigation />
      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <Button asChild variant="ghost" size="sm" className="mb-4">
          <Link to="/technical-english"><ArrowLeft className="h-4 w-4 mr-2" />All topics</Link>
        </Button>

        <header className="mb-8">
          <p className="text-sm text-muted-foreground mb-1">
            {groupLabels[topic.group]} · Topic {topic.number}
          </p>
          <h1 className="text-4xl font-bold font-merriweather text-foreground">{topic.title}</h1>
          {topic.subtitle && <p className="text-lg text-muted-foreground mt-2">{topic.subtitle}</p>}
        </header>

        {ready ? (
          <TechnicalRenderer activities={topic.activities} />
        ) : (
          <Card className="border-dashed">
            <CardContent className="p-10 text-center">
              <Sparkles className="h-10 w-10 mx-auto text-primary mb-3" />
              <h3 className="text-xl font-semibold mb-2">Coming soon</h3>
              <p className="text-muted-foreground max-w-md mx-auto">
                Interactive content for <strong>{topic.title}</strong> hasn&apos;t been built yet.
                Ask Lovable to build topic {topic.number} to add exercises, vocabulary lists and an answer key here.
              </p>
            </CardContent>
          </Card>
        )}

        <nav className="mt-12 flex items-center justify-between gap-3 border-t border-border pt-6">
          {prev ? (
            <Button asChild variant="outline">
              <Link to={`/technical-english/${prev.id}`}>
                <ArrowLeftCircle className="h-4 w-4 mr-2" />
                <span className="truncate max-w-[180px]">{prev.number}. {prev.title}</span>
              </Link>
            </Button>
          ) : <span />}
          {next && (
            <Button asChild>
              <Link to={`/technical-english/${next.id}`}>
                <span className="truncate max-w-[180px]">{next.number}. {next.title}</span>
                <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </Button>
          )}
        </nav>
      </main>
      <Footer />
    </div>
  );
};

export default TechnicalEnglishTopic;
