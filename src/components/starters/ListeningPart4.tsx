import StartersPartCard from './StartersPartCard';
import AudioPlayer from './AudioPlayer';
import { test1ListeningPart4 } from '@/data/startersTestData';

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
      </div>
    </StartersPartCard>
  );
};

export default ListeningPart4;
