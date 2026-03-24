import StartersPartCard from './StartersPartCard';
import AudioPlayer from './AudioPlayer';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';
import { test1Speaking } from '@/data/startersTestData';

const SpeakingSection = () => {
  const data = test1Speaking;

  return (
    <StartersPartCard
      partNumber={1}
      title="Speaking Practice"
      subtitle="Scene picture, object cards and guided questions"
      color="from-orange-400 to-pink-500"
      icon="🗣️"
      defaultOpen={true}
    >
      <AudioPlayer src={data.audio} label="Listen to the Speaking questions" />

      <div className="mt-6 space-y-6">
        {/* Instructions */}
        <div className="bg-gradient-to-br from-orange-50 to-pink-50 rounded-xl p-6">
          <h4 className="text-xl font-bold text-orange-700 mb-4" style={{ fontFamily: 'Fredoka, sans-serif' }}>
            📋 How to practise:
          </h4>
          <ul className="space-y-3">
            {data.instructions.map((instruction, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="w-8 h-8 rounded-full bg-gradient-to-br from-orange-400 to-pink-400 text-white flex items-center justify-center font-bold flex-shrink-0 text-sm">
                  {i + 1}
                </span>
                <span className="text-gray-700 font-medium pt-1">{instruction}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Scene picture */}
        <div>
          <h4 className="text-lg font-bold text-orange-700 mb-3" style={{ fontFamily: 'Fredoka, sans-serif' }}>
            🖼️ Scene Picture
          </h4>
          <img
            src={data.sceneImage}
            alt="Speaking test scene"
            className="w-full max-w-3xl mx-auto rounded-xl shadow-lg"
          />
        </div>

        {/* Object cards */}
        <div>
          <h4 className="text-lg font-bold text-orange-700 mb-3" style={{ fontFamily: 'Fredoka, sans-serif' }}>
            🃏 Object Cards
          </h4>
          <img
            src={data.objectCardsImage}
            alt="Object cards for speaking"
            className="w-full max-w-3xl mx-auto rounded-xl shadow-lg"
          />
        </div>
        {/* Wordwall Activity */}
        <div className="max-w-3xl mx-auto mt-6 text-center">
          <Button
            asChild
            size="lg"
            className="w-full bg-gradient-to-r from-orange-400 to-pink-500 hover:from-orange-500 hover:to-pink-600 text-white font-semibold rounded-xl shadow-md"
            style={{ fontFamily: 'Fredoka, sans-serif' }}
          >
            <a href="https://wordwall.net/resource/110056611" target="_blank" rel="noopener noreferrer">
              <ExternalLink className="h-5 w-5 mr-2" />
              Speaking Practice on Wordwall
            </a>
          </Button>
        </div>
      </div>
    </StartersPartCard>
  );
};

export default SpeakingSection;
