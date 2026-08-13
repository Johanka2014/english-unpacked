import { Link, useParams } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ArrowLeft } from 'lucide-react';
import { efFiles } from '@/data/englishFileIntermediateData';
import TechnicalRenderer from '@/components/technical/TechnicalRenderer';

const EnglishFileLesson = () => {
  const { fileId, lessonId } = useParams();
  const file = efFiles.find((f) => f.id === fileId);
  const lesson = file?.lessons.find((l) => l.id === lessonId);

  if (!file || !lesson || lesson.sections.length === 0) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <main className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-3xl font-bold mb-3">This lesson isn&apos;t available yet</h1>
          <Button asChild>
            <Link to="/english-file-intermediate">Back to English File Intermediate</Link>
          </Button>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title={`${lesson.code} ${lesson.title} · English File Intermediate`}
        description={lesson.subtitle}
      />
      <Navigation />
      <main className="container mx-auto px-4 py-10 sm:py-12 max-w-4xl">
        <Button asChild variant="ghost" size="sm" className="mb-4">
          <Link to={`/english-file-intermediate/${file.id}`}>
            <ArrowLeft className="h-4 w-4 mr-2" />
            File {file.number}
          </Link>
        </Button>

        <header className="mb-6">
          <p className="text-sm text-muted-foreground mb-1">
            English File Intermediate · File {file.number} · {lesson.code}
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold font-merriweather text-foreground">{lesson.title}</h1>
          <p className="text-base sm:text-lg text-muted-foreground mt-2">{lesson.subtitle}</p>
          {lesson.goals && (
            <div className="flex flex-wrap gap-2 mt-4">
              {lesson.goals.g && <Badge variant="secondary">G · {lesson.goals.g}</Badge>}
              {lesson.goals.v && <Badge variant="secondary">V · {lesson.goals.v}</Badge>}
              {lesson.goals.p && <Badge variant="secondary">P · {lesson.goals.p}</Badge>}
            </div>
          )}
        </header>

        <Tabs defaultValue={lesson.sections[0].id} className="w-full">
          <TabsList className="flex flex-wrap h-auto justify-start gap-1 mb-6">
            {lesson.sections.map((s) => (
              <TabsTrigger key={s.id} value={s.id} className="text-xs sm:text-sm">
                {s.title}
              </TabsTrigger>
            ))}
          </TabsList>

          {lesson.sections.map((s) => (
            <TabsContent key={s.id} value={s.id} className="space-y-4 sm:space-y-6">
              {s.description && (
                <p className="text-sm sm:text-base text-muted-foreground">{s.description}</p>
              )}

              {s.videoId && (
                <Card>
                  <CardContent className="p-4 sm:p-6">
                    <h3 className="text-lg font-semibold mb-3 text-foreground">
                      {s.videoLabel || 'Video'}
                    </h3>
                    <div className="relative w-full overflow-hidden rounded-lg" style={{ paddingTop: '56.25%' }}>
                      <iframe
                        className="absolute inset-0 h-full w-full"
                        src={`https://www.youtube.com/embed/${s.videoId}`}
                        title={s.videoLabel || 'Lesson video'}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        loading="lazy"
                      />
                    </div>
                    <a
                      href={`https://www.youtube.com/watch?v=${s.videoId}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-3 text-sm text-primary underline underline-offset-4"
                    >
                      Open the video on YouTube
                    </a>
                  </CardContent>
                </Card>
              )}

              <TechnicalRenderer activities={s.activities} />
            </TabsContent>
          ))}
        </Tabs>
      </main>
      <Footer />
    </div>
  );
};

export default EnglishFileLesson;
