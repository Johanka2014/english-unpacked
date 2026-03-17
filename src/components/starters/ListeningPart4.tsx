import StartersPartCard from './StartersPartCard';
import AudioPlayer from './AudioPlayer';
import { test1ListeningPart4 } from '@/data/startersTestData';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';

const ListeningPart4 = () => {
  const data = test1ListeningPart4;

  return (
    <StartersPartCard
      partNumber={4}
      title="Listen and colour"
      subtitle="5 questions — Colour the picture as you listen"
      color="from-orange-400 to-red-500"
      icon="🎨"
    >
      <AudioPlayer src={data.audio} label="Listen to Part 4" />

      <div className="mt-6 bg-gradient-to-br from-orange-50 to-yellow-50 rounded-xl p-6 text-center">
        <p className="text-lg text-gray-700 mb-6" style={{ fontFamily: 'Fredoka, sans-serif' }}>
          🖍️ {data.instructions}
        </p>
        <img
          src={data.sceneImage}
          alt="Colouring scene"
          className="max-w-2xl w-full mx-auto rounded-xl shadow-md"
        />
        <div className="mt-6">
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-orange-400 to-red-500 hover:from-orange-500 hover:to-red-600 text-white font-semibold rounded-xl shadow-md"
            style={{ fontFamily: 'Fredoka, sans-serif' }}
          >
            <a href="https://wordwall.net/resource/109590812" target="_blank" rel="noopener noreferrer">
              <ExternalLink className="h-5 w-5 mr-2" />
              Choose the Right Colours on Wordwall
            </a>
          </Button>
        </div>
      </div>
    </StartersPartCard>
  );
};

export default ListeningPart4;
