import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Library } from 'lucide-react';
import { efFiles, type EFFile } from '@/data/englishFileIntermediateData';
import { ComingSoonBadge } from '@/components/ComingSoonBadge';

const FileCard = ({ file }: { file: EFFile }) => {
  const ready = file.lessons.length > 0;
  const built = file.lessons.filter((l) => l.sections.length > 0).length;

  const card = (
    <Card
      className={`h-full transition-all ${
        ready ? 'hover:shadow-lg hover:-translate-y-0.5' : 'opacity-60 cursor-not-allowed'
      }`}
    >
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between gap-2">
          <span className="text-xs font-semibold text-muted-foreground">File {file.number}</span>
          {ready ? (
            <Badge variant="secondary" className="text-xs">
              {built} lesson{built === 1 ? '' : 's'} ready
            </Badge>
          ) : (
            <ComingSoonBadge />
          )}
        </div>
        <CardTitle className="text-lg font-merriweather leading-tight">{file.title}</CardTitle>
      </CardHeader>
      <CardContent className="pt-0">
        <p className="text-sm text-muted-foreground">{file.subtitle}</p>
      </CardContent>
    </Card>
  );

  if (!ready) return <div aria-disabled="true">{card}</div>;
  return (
    <Link to={`/english-file-intermediate/${file.id}`} className="block">
      {card}
    </Link>
  );
};

const EnglishFileIntermediate = () => (
  <div className="min-h-screen bg-background">
    <SEO
      title="English File Intermediate (5th edition) — Interactive Practice"
      description="Work through New English File 5 Intermediate online: food and cooking vocabulary, pronunciation, present tenses, readings and video interviews."
    />
    <Navigation />
    <main className="container mx-auto px-4 py-12 sm:py-16">
      <Button asChild variant="ghost" size="sm" className="mb-6">
        <Link to="/members/activities?tab=exams&exam=pet">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Practice
        </Link>
      </Button>

      <div className="text-center mb-10">
        <div className="inline-flex items-center justify-center h-14 w-14 rounded-full bg-primary/10 text-primary mb-4">
          <Library className="h-7 w-7" />
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold font-merriweather mb-3">English File Intermediate</h1>
        <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
          New English File 5th edition, Intermediate (B1+). Twelve Files of vocabulary, pronunciation,
          grammar, reading, video and speaking practice.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {efFiles.map((f) => (
          <FileCard key={f.id} file={f} />
        ))}
      </div>
    </main>
    <Footer />
  </div>
);

export default EnglishFileIntermediate;
