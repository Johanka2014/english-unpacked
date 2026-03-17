import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { ArrowLeft, Headphones, BookOpen, MessageCircle } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import ListeningPart1 from '@/components/starters/ListeningPart1';
import ListeningPart2 from '@/components/starters/ListeningPart2';
import ListeningPart3 from '@/components/starters/ListeningPart3';
import ListeningPart4 from '@/components/starters/ListeningPart4';
import ReadingPart1 from '@/components/starters/ReadingPart1';
import ReadingPart2 from '@/components/starters/ReadingPart2';
import ReadingPart3 from '@/components/starters/ReadingPart3';
import ReadingPart4 from '@/components/starters/ReadingPart4';
import ReadingPart5 from '@/components/starters/ReadingPart5';
import SpeakingSection from '@/components/starters/SpeakingSection';

const StartersTest = () => {
  const { testId } = useParams();
  const [activeTab, setActiveTab] = useState('listening');

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
      <Navigation />
      <main className="container mx-auto px-4 py-20">
        <Link
          to="/starters-practice"
          className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-800 mb-6 font-medium"
        >
          <ArrowLeft className="h-4 w-4" /> Back to Practice Tests
        </Link>

        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-purple-800" style={{ fontFamily: 'Fredoka, sans-serif' }}>
          ⭐ Test 1
        </h1>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8 bg-white/80 backdrop-blur rounded-2xl p-1.5 h-auto">
            <TabsTrigger
              value="listening"
              className="rounded-xl py-3 px-4 text-base font-semibold data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-cyan-500 data-[state=active]:text-white data-[state=active]:shadow-lg transition-all"
              style={{ fontFamily: 'Fredoka, sans-serif' }}
            >
              <Headphones className="h-5 w-5 mr-2" />
              Listening
            </TabsTrigger>
            <TabsTrigger
              value="reading"
              className="rounded-xl py-3 px-4 text-base font-semibold data-[state=active]:bg-gradient-to-r data-[state=active]:from-green-500 data-[state=active]:to-emerald-500 data-[state=active]:text-white data-[state=active]:shadow-lg transition-all"
              style={{ fontFamily: 'Fredoka, sans-serif' }}
            >
              <BookOpen className="h-5 w-5 mr-2" />
              Reading & Writing
            </TabsTrigger>
            <TabsTrigger
              value="speaking"
              className="rounded-xl py-3 px-4 text-base font-semibold data-[state=active]:bg-gradient-to-r data-[state=active]:from-orange-500 data-[state=active]:to-pink-500 data-[state=active]:text-white data-[state=active]:shadow-lg transition-all"
              style={{ fontFamily: 'Fredoka, sans-serif' }}
            >
              <MessageCircle className="h-5 w-5 mr-2" />
              Speaking
            </TabsTrigger>
          </TabsList>

          <TabsContent value="listening" className="space-y-8">
            <ListeningPart1 />
            <ListeningPart2 />
            <ListeningPart3 />
            <ListeningPart4 />
          </TabsContent>

          <TabsContent value="reading" className="space-y-8">
            <ReadingPart1 />
            <ReadingPart2 />
            <ReadingPart3 />
            <ReadingPart4 />
            <ReadingPart5 />
          </TabsContent>

          <TabsContent value="speaking">
            <SpeakingSection />
          </TabsContent>
        </Tabs>
      </main>
      <Footer />
    </div>
  );
};

export default StartersTest;
