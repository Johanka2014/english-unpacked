import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft, Music, ExternalLink } from 'lucide-react';
import TechnicalRenderer from '@/components/technical/TechnicalRenderer';
import Flashcards from '@/components/presentations/Flashcards';
import {
  warmUp,
  festivalFlashcards,
  vocabMatching,
  videoActivities,
  compoundActivities,
  europeReading,
  oxegenReading,
  examReading,
  neighboursActivities,
  nottingHill,
  desertFestival,
  promsActivities,
  finalTasks,
} from '@/data/musicFestivalsData';

const MusicFestivals = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Music Festivals · Topic Lesson"
        description="A B1–B2 English lesson on music festivals: festival vocabulary, a British Council video, compound nouns, exam-style readings on Glastonbury, Oxegen, Notting Hill Carnival, the Festival in the Desert and the BBC Proms."
      />
      <Navigation />
      <main className="container mx-auto px-4 py-8 sm:py-12 max-w-4xl">
        <Button asChild variant="ghost" size="sm" className="mb-4">
          <Link to="/members/activities?tab=topics">
            <ArrowLeft className="h-4 w-4 mr-2" /> Back to Topics
          </Link>
        </Button>

        <header className="mb-8">
          <p className="text-sm text-muted-foreground mb-1 flex items-center gap-2">
            <Music className="h-4 w-4 text-primary" /> Topics · B1–B2
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold font-merriweather text-foreground">
            Music Festivals
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground mt-2">
            Festival vocabulary, a British Council video, compound nouns, and readings on
            Glastonbury, Oxegen, the Notting Hill Carnival, the Festival in the Desert and the
            BBC Proms.
          </p>
        </header>

        <TechnicalRenderer activities={warmUp} />

        <div className="mt-6">
          <Flashcards
            title="2 · Festival Vocabulary Flashcards"
            description="Preview the key words you will meet in the video and readings. Click a card to flip it, then use Next or Shuffle to keep practising."
            cards={festivalFlashcards}
          />
        </div>

        <div className="mt-6">
          <TechnicalRenderer activities={vocabMatching} />
        </div>

        {/* Video */}
        <div className="mt-6">
          <Card className="service-card">
            <CardContent className="p-4 sm:p-6">
              <h3 className="text-xl sm:text-2xl font-semibold mb-2 font-merriweather text-foreground">
                3 · Video: Live music (British Council)
              </h3>
              <p className="text-muted-foreground text-sm mb-4">
                Amandeep goes backstage with the band British Sea Power at Reading Festival and
                talks to festival-goers about what festival life is really like. Watch the video on
                LearnEnglish Teens, then come back and do the exercises below. You can read the
                transcript on that page at any time.
              </p>
              <Button asChild>
                <a
                  href="https://learnenglishteens.britishcouncil.org/study-break/video-series/word-street/live-music"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Watch the video <ExternalLink className="h-4 w-4 ml-2" />
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="mt-6">
          <TechnicalRenderer activities={videoActivities} />
        </div>

        {/* LearningApps interactive */}
        <div className="mt-6">
          <Card className="service-card">
            <CardContent className="p-4 sm:p-6">
              <h3 className="text-xl sm:text-2xl font-semibold mb-2 font-merriweather text-foreground">
                3d · Interactive Activity: Festival Vocabulary
              </h3>
              <p className="text-muted-foreground text-sm mb-4">
                Drag and drop your way through this LearningApps activity to review the festival
                vocabulary before you move on to the readings.
              </p>
              <div className="w-full overflow-hidden rounded-lg border border-border shadow-sm">
                <iframe
                  src="https://learningapps.org/watch?app=ph3fskiwc21"
                  title="Music festivals vocabulary — LearningApps"
                  className="w-full h-[500px] sm:h-[620px]"
                  allowFullScreen
                />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-6">
          <TechnicalRenderer activities={compoundActivities} />
        </div>

        <div className="mt-6">
          <TechnicalRenderer activities={europeReading} />
        </div>

        <div className="mt-6">
          <TechnicalRenderer activities={oxegenReading} />
        </div>

        <div className="mt-6">
          <TechnicalRenderer activities={examReading} />
        </div>

        <div className="mt-6">
          <TechnicalRenderer activities={neighboursActivities} />
        </div>

        <div className="mt-6">
          <TechnicalRenderer activities={nottingHill} />
        </div>

        <div className="mt-6">
          <TechnicalRenderer activities={desertFestival} />
        </div>

        <div className="mt-6">
          <TechnicalRenderer activities={promsActivities} />
        </div>

        <div className="mt-6">
          <TechnicalRenderer activities={finalTasks} />
        </div>

        <div className="mt-12 border-t border-border pt-6">
          <Button asChild variant="outline">
            <Link to="/members/activities?tab=topics">
              <ArrowLeft className="h-4 w-4 mr-2" /> Back to Topics
            </Link>
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default MusicFestivals;
