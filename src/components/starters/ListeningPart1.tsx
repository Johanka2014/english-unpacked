import { useState } from 'react';
import StartersPartCard from './StartersPartCard';
import AudioPlayer from './AudioPlayer';
import { test1ListeningPart1 } from '@/data/startersTestData';

const ListeningPart1 = () => {
  const data = test1ListeningPart1;
  const [selectedName, setSelectedName] = useState<string | null>(null);
  const [matches, setMatches] = useState<Record<string, string>>({});
  const [checked, setChecked] = useState(false);

  const handleNameClick = (name: string) => {
    if (checked) return;
    if (matches[name]) {
      // Remove existing match
      const newMatches = { ...matches };
      delete newMatches[name];
      setMatches(newMatches);
      return;
    }
    setSelectedName(name);
  };

  const handlePersonClick = (personId: string) => {
    if (checked || !selectedName) return;
    // Check if person already matched
    const alreadyMatched = Object.entries(matches).find(([, pid]) => pid === personId);
    if (alreadyMatched) return;

    setMatches({ ...matches, [selectedName]: personId });
    setSelectedName(null);
  };

  const checkAnswers = () => setChecked(true);
  const reset = () => { setMatches({}); setChecked(false); setSelectedName(null); };

  const matchedPersonIds = Object.values(matches);

  return (
    <StartersPartCard
      partNumber={1}
      title="Listen and draw lines"
      subtitle="5 questions — Match the names to the people"
      color="from-blue-400 to-cyan-500"
      icon="🖍️"
      defaultOpen={true}
    >
      <AudioPlayer src={data.audio} label="Listen to Part 1" />

      <div className="mt-6">
        <p className="text-gray-600 mb-4 text-center font-medium">
          Click a name, then click the person in the picture to match them.
        </p>

        {/* Name buttons */}
        <div className="flex flex-wrap gap-2 justify-center mb-6">
          {data.names.map((name) => {
            const isMatched = !!matches[name];
            const isSelected = selectedName === name;
            const isCorrect = checked && data.correctMatches[name] === matches[name];
            const isWrong = checked && isMatched && data.correctMatches[name] !== matches[name];

            return (
              <button
                key={name}
                onClick={() => handleNameClick(name)}
                className={`px-4 py-2 rounded-xl text-lg font-bold transition-all shadow-sm ${
                  isSelected
                    ? 'bg-yellow-400 text-yellow-900 scale-110 shadow-lg'
                    : isCorrect
                    ? 'bg-green-400 text-white'
                    : isWrong
                    ? 'bg-red-400 text-white'
                    : isMatched
                    ? 'bg-purple-400 text-white'
                    : 'bg-white text-purple-700 border-2 border-purple-300 hover:bg-purple-50'
                }`}
                style={{ fontFamily: 'Fredoka, sans-serif' }}
              >
                {name}
              </button>
            );
          })}
        </div>

        {/* Scene image with clickable people overlay */}
        <div className="relative max-w-2xl mx-auto">
          <img src={data.sceneImage} alt="Scene with people" className="w-full rounded-xl shadow-md" />
          <div className="grid grid-cols-4 gap-2 mt-4">
            {data.people.map((person) => {
              const matchedBy = Object.entries(matches).find(([, pid]) => pid === person.id);
              return (
                <button
                  key={person.id}
                  onClick={() => handlePersonClick(person.id)}
                  className={`p-3 rounded-xl text-sm font-medium transition-all ${
                    matchedBy
                      ? 'bg-purple-200 text-purple-800 border-2 border-purple-400'
                      : selectedName
                      ? 'bg-yellow-100 text-yellow-800 border-2 border-yellow-300 hover:bg-yellow-200 cursor-pointer animate-pulse'
                      : 'bg-gray-100 text-gray-600 border-2 border-gray-200'
                  }`}
                  style={{ fontFamily: 'Fredoka, sans-serif' }}
                >
                  {matchedBy ? `${matchedBy[0]} → ${person.label}` : person.label}
                </button>
              );
            })}
          </div>
        </div>

        <div className="flex justify-center gap-4 mt-6">
          <button
            onClick={checkAnswers}
            disabled={checked}
            className="px-6 py-3 bg-gradient-to-r from-green-400 to-emerald-500 text-white rounded-xl font-bold text-lg hover:scale-105 transition-transform shadow-lg disabled:opacity-50"
            style={{ fontFamily: 'Fredoka, sans-serif' }}
          >
            ✅ Check Answers
          </button>
          <button
            onClick={reset}
            className="px-6 py-3 bg-gradient-to-r from-gray-300 to-gray-400 text-gray-700 rounded-xl font-bold text-lg hover:scale-105 transition-transform shadow-lg"
            style={{ fontFamily: 'Fredoka, sans-serif' }}
          >
            🔄 Try Again
          </button>
        </div>

        {checked && (
          <div className="mt-4 text-center">
            <p className="text-lg font-bold" style={{ fontFamily: 'Fredoka, sans-serif' }}>
              You got{' '}
              <span className="text-green-600">
                {Object.entries(matches).filter(([name, pid]) => data.correctMatches[name] === pid).length}
              </span>{' '}
              out of {Object.keys(data.correctMatches).length} correct! 🎉
            </p>
          </div>
        )}
      </div>
    </StartersPartCard>
  );
};

export default ListeningPart1;
