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
import * as test1 from '@/data/startersTestData';
import * as test2 from '@/data/startersTest2Data';

const TESTS = {
  'test-1': {
    title: 'Test 1',
    listening: [test1.test1ListeningPart1, test1.test1ListeningPart2, test1.test1ListeningPart3, test1.test1ListeningPart4] as const,
    reading: [test1.test1ReadingPart1, test1.test1ReadingPart2, test1.test1ReadingPart3, test1.test1ReadingPart4, test1.test1ReadingPart5] as const,
    speaking: test1.test1Speaking,
  },
  'test-2': {
    title: 'Test 2',
    listening: [test2.test2ListeningPart1, test2.test2ListeningPart2, test2.test2ListeningPart3, test2.test2ListeningPart4] as const,
    reading: [test2.test2ReadingPart1, test2.test2ReadingPart2, test2.test2ReadingPart3, test2.test2ReadingPart4, test2.test2ReadingPart5] as const,
    speaking: test2.test2Speaking,
  },
} as const;

const StartersTest = () => {
  const { testId } = useParams();
  const [activeTab, setActiveTab] = useState('listening');
  const test = TESTS[(testId as keyof typeof TESTS) ?? 'test-1'] ?? TESTS['test-1'];

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
          ⭐ {test.title}
        </h1>

        <Tabs key={testId} value={activeTab} onValueChange={setActiveTab} className="w-full">
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
            <ListeningPart1 data={test.listening[0]} />
            <ListeningPart2 data={test.listening[1]} />
            <ListeningPart3 data={test.listening[2]} />
            <ListeningPart4 data={test.listening[3]} />
          </TabsContent>

          <TabsContent value="reading" className="space-y-8">
            <ReadingPart1 data={test.reading[0]} />
            <ReadingPart2 data={test.reading[1]} />
            <ReadingPart3 data={test.reading[2]} />
            <ReadingPart4 data={test.reading[3]} />
            <ReadingPart5 data={test.reading[4]} />
          </TabsContent>

          <TabsContent value="speaking">
            <SpeakingSection data={test.speaking} />
          </TabsContent>
        </Tabs>
      </main>
      <Footer />
    </div>
  );
};

export default StartersTest;
