import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ArrowLeft, Castle, Sparkles, Palette, Landmark, Mountain, UtensilsCrossed, Camera } from 'lucide-react';
import TechnicalRenderer from '@/components/technical/TechnicalRenderer';
import Flashcards from '@/components/presentations/Flashcards';
import PoliticsWritingBox from '@/components/topics/PoliticsWritingBox';
import {
  warmUp, budapestFlashcards, vocabActivities, pestSection, historySection, budaSection, foodSection,
  finalTasks, writingPrompt, type BudapestSection,
} from '@/data/budapestData';
import budapestHero from '@/assets/topics/budapest-hero.jpg';

const PhotoGallery = ({ section }: { section: BudapestSection }) => (
  <div className="grid gap-3 grid-cols-2 md:grid-cols-3">
    {section.places.map((p) => (
      <figure key={p.id} className="rounded-lg border border-border overflow-hidden bg-card">
        {p.photo ? (
          <img src={p.photo} alt={p.name} loading="lazy" className="w-full aspect-[4/3] object-cover" />
        ) : (
          <div className="w-full aspect-[4/3] flex flex-col items-center justify-center gap-2 bg-muted/50 border-b border-dashed border-border text-muted-foreground">
            <Camera className="h-7 w-7" />
            <span className="text-xs">Photo coming soon</span>
          </div>
        )}
        <figcaption className="p-2.5">
          <p className="text-sm font-semibold text-foreground leading-tight">{p.name}</p>
          <p className="text-xs text-muted-foreground">{p.caption}</p>
          {p.credit && (
            <p className="text-[10px] text-muted-foreground mt-1">Image by <a href={p.credit.url} target="_blank" rel="noopener noreferrer" className="underline">{p.credit.name}</a></p>
          )}
        </figcaption>
      </figure>
    ))}
  </div>
);

const Section = ({ section, intro }: { section: BudapestSection; intro: string }) => (
  <>
    <Card className="service-card p-0">
      <CardContent className="p-4 sm:p-6 space-y-3">
        <p className="text-sm text-muted-foreground">{intro}</p>
        <PhotoGallery section={section} />
      </CardContent>
    </Card>
    <TechnicalRenderer activities={section.activities} />
  </>
);

const Budapest = () => (
  <div className="min-h-screen bg-background">
    <SEO
      title="A Trip to Budapest · B1 English Topic Lesson"
      description="A B1 English lesson about Budapest — history, famous sights, memorials, Buda Castle, Hungarian food and thermal baths, with reading, comprehension and vocabulary practice."
    />
    <Navigation />
    <main className="container mx-auto px-4 py-6 sm:py-12 max-w-4xl">
      <Button asChild variant="ghost" size="sm" className="mb-4">
        <Link to="/members/activities?tab=topics"><ArrowLeft className="h-4 w-4 mr-2" /> Back to Topics</Link>
      </Button>

      <header className="mb-6 sm:mb-8">
        <p className="text-sm text-muted-foreground mb-1 flex items-center gap-2">
          <Castle className="h-4 w-4 text-primary" /> Topics · B1
        </p>
        <h1 className="text-3xl sm:text-4xl font-bold font-merriweather text-foreground">A Trip to Budapest</h1>
        <p className="text-base sm:text-lg text-muted-foreground mt-2">
          Statues, parks and street art, the Danube and its memorials, Buda Castle, Hungarian food and the famous thermal baths.
        </p>
        <img
          src={budapestHero}
          alt="The Hungarian Parliament and the Chain Bridge over the Danube at sunset"
          width={1600}
          height={912}
          className="w-full h-auto rounded-lg border border-border shadow-sm mt-4"
        />
      </header>

      <Tabs defaultValue="warmup" className="w-full">
        <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 mb-6 h-auto">
          <TabsTrigger value="warmup" className="gap-1.5 py-2"><Sparkles className="h-4 w-4" /> Warm-up</TabsTrigger>
          <TabsTrigger value="pest" className="gap-1.5 py-2"><Palette className="h-4 w-4" /> Pest</TabsTrigger>
          <TabsTrigger value="history" className="gap-1.5 py-2"><Landmark className="h-4 w-4" /> Danube</TabsTrigger>
          <TabsTrigger value="buda" className="gap-1.5 py-2"><Mountain className="h-4 w-4" /> Buda</TabsTrigger>
          <TabsTrigger value="food" className="gap-1.5 py-2"><UtensilsCrossed className="h-4 w-4" /> Food & Tasks</TabsTrigger>
        </TabsList>

        <TabsContent value="warmup" className="space-y-4 sm:space-y-6">
          <TechnicalRenderer activities={warmUp} />
          <Flashcards
            title="2 · Travel vocabulary flashcards"
            description="Click a card to see its meaning and an example. Use Next or Shuffle to practise."
            cards={budapestFlashcards}
          />
          <TechnicalRenderer activities={vocabActivities} />
        </TabsContent>

        <TabsContent value="pest" className="space-y-4 sm:space-y-6">
          <Section section={pestSection} intro="Our first day in Pest: famous statues, the City Park and street art." />
        </TabsContent>
        <TabsContent value="history" className="space-y-4 sm:space-y-6">
          <Section section={historySection} intro="An evening boat trip, the Parliament and the memorials along the river." />
        </TabsContent>
        <TabsContent value="buda" className="space-y-4 sm:space-y-6">
          <Section section={budaSection} intro="Across the Chain Bridge and up the hill to the castle." />
        </TabsContent>
        <TabsContent value="food" className="space-y-4 sm:space-y-6">
          <Section section={foodSection} intro="What we ate, and an afternoon at the Gellért Thermal Bath." />
          <TechnicalRenderer activities={finalTasks} />
          <Card className="service-card p-0">
            <CardContent className="p-4 sm:p-6 space-y-4">
              <div>
                <h3 className="text-lg sm:text-2xl font-semibold mb-2 font-merriweather text-foreground">{writingPrompt.title}</h3>
                <p className="text-sm sm:text-base text-foreground">{writingPrompt.brief}</p>
              </div>
              <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                {writingPrompt.checklist.map((i) => <li key={i}>{i}</li>)}
              </ul>
              <PoliticsWritingBox storageKey="budapest-travel-blog" model={writingPrompt.model} />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </main>
    <Footer />
  </div>
);

export default Budapest;
