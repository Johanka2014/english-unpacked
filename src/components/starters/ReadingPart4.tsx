import { useState } from 'react';
import StartersPartCard from './StartersPartCard';
import { test1ReadingPart4 } from '@/data/startersTestData';
import wordBoxImage from '@/assets/starters/test1-reading-part4-wordbox.png';

const ReadingPart4 = () => {
  const data = test1ReadingPart4;
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [draggedWord, setDraggedWord] = useState<string | null>(null);
  const [checked, setChecked] = useState(false);

  const usedWords = Object.values(answers);

  const handleDragStart = (word: string) => {
    setDraggedWord(word);
  };

  const handleDrop = (gapId: number) => {
    if (checked || !draggedWord) return;
    // Remove word from other gap if used
    const newAnswers = { ...answers };
    Object.entries(newAnswers).forEach(([key, val]) => {
      if (val === draggedWord) delete newAnswers[Number(key)];
    });
    newAnswers[gapId] = draggedWord;
    setAnswers(newAnswers);
    setDraggedWord(null);
  };

  const handleClickWord = (word: string) => {
    if (checked) return;
    setDraggedWord(draggedWord === word ? null : word);
  };

  const handleClickGap = (gapId: number) => {
    if (checked) return;
    if (draggedWord) {
      handleDrop(gapId);
    } else if (answers[gapId]) {
      // Remove word from gap
      const newAnswers = { ...answers };
      delete newAnswers[gapId];
      setAnswers(newAnswers);
    }
  };

  const checkAnswers = () => setChecked(true);
  const reset = () => { setAnswers({}); setChecked(false); setDraggedWord(null); };

  const isCorrect = (gapId: number) => answers[gapId] === data.answers[gapId];

  // Render passage with gaps
  const renderPassage = () => {
    const parts = data.passage.split(/\{(\w+)\}/g);
    return parts.map((part, i) => {
      if (part === 'example') {
        return <span key={i} className="px-2 py-1 bg-blue-200 text-blue-800 rounded-lg font-bold mx-1 inline-block">{data.example.word}</span>;
      }
      const gapNum = parseInt(part);
      if (!isNaN(gapNum) && gapNum >= 1 && gapNum <= 5) {
        const word = answers[gapNum];
        const correct = checked && isCorrect(gapNum);
        const wrong = checked && word && !isCorrect(gapNum);

        return (
          <button
            key={i}
            onClick={() => handleClickGap(gapNum)}
            onDragOver={(e) => e.preventDefault()}
            onDrop={() => handleDrop(gapNum)}
            className={`inline-flex items-center justify-center min-w-[80px] px-3 py-1 rounded-lg font-bold mx-1 border-2 border-dashed transition-all ${
              correct ? 'bg-green-200 border-green-400 text-green-800'
              : wrong ? 'bg-red-200 border-red-400 text-red-800'
              : word ? 'bg-purple-200 border-purple-400 text-purple-800'
              : draggedWord ? 'bg-yellow-100 border-yellow-400 text-yellow-600 animate-pulse'
              : 'bg-gray-100 border-gray-300 text-gray-400'
            }`}
            style={{ fontFamily: 'Fredoka, sans-serif' }}
          >
            {word || `(${gapNum})`}
          </button>
        );
      }
      return <span key={i}>{part}</span>;
    });
  };

  return (
    <StartersPartCard
      partNumber={4}
      title="Fill the gaps"
      subtitle="5 questions — Choose words from the box"
      color="from-indigo-400 to-blue-500"
      icon="📝"
    >
      {/* Word box image */}
      <img src={wordBoxImage} alt="Word box with pictures" className="w-full max-w-xl mx-auto rounded-xl shadow-md mb-6" />

      {/* Word box */}
      <div className="bg-indigo-50 rounded-xl p-4 mb-6">
        <h4 className="font-bold text-indigo-700 mb-3" style={{ fontFamily: 'Fredoka, sans-serif' }}>Word Box:</h4>
        <div className="flex flex-wrap gap-2">
          {data.wordBox.map((word) => {
            const isUsed = usedWords.includes(word);
            const isExample = word === data.example.word;
            const isActive = draggedWord === word;

            return (
              <button
                key={word}
                draggable={!checked && !isUsed && !isExample}
                onDragStart={() => handleDragStart(word)}
                onClick={() => !isUsed && !isExample && handleClickWord(word)}
                className={`px-4 py-2 rounded-xl font-bold text-lg transition-all ${
                  isExample ? 'bg-blue-200 text-blue-400 cursor-not-allowed line-through'
                  : isUsed ? 'bg-gray-200 text-gray-400 cursor-not-allowed opacity-50'
                  : isActive ? 'bg-yellow-400 text-yellow-900 scale-110 shadow-lg cursor-grab'
                  : 'bg-white text-indigo-700 border-2 border-indigo-200 hover:bg-indigo-100 cursor-grab shadow-sm'
                }`}
                style={{ fontFamily: 'Fredoka, sans-serif' }}
              >
                {word}
              </button>
            );
          })}
        </div>
      </div>

      {/* Passage */}
      <div className="bg-white rounded-xl p-6 border-2 border-indigo-100 text-lg leading-relaxed">
        <h3 className="text-2xl font-bold text-indigo-700 mb-4" style={{ fontFamily: 'Fredoka, sans-serif' }}>🦎 Lizards</h3>
        <p className="leading-loose">{renderPassage()}</p>
      </div>

      {checked && Object.keys(answers).length > 0 && (
        <div className="mt-4 bg-white rounded-xl p-4 border-2 border-indigo-100">
          <h4 className="font-bold text-indigo-700 mb-2" style={{ fontFamily: 'Fredoka, sans-serif' }}>Correct answers:</h4>
          {Object.entries(data.answers).map(([gap, word]) => (
            <span key={gap} className="inline-block mr-3 text-sm">
              ({gap}) <span className="font-bold text-green-600">{word}</span>
            </span>
          ))}
        </div>
      )}

      <div className="flex justify-center gap-4 mt-6">
        <button onClick={checkAnswers} disabled={checked}
          className="px-6 py-3 bg-gradient-to-r from-green-400 to-emerald-500 text-white rounded-xl font-bold text-lg hover:scale-105 transition-transform shadow-lg disabled:opacity-50"
          style={{ fontFamily: 'Fredoka, sans-serif' }}>
          ✅ Check Answers
        </button>
        <button onClick={reset}
          className="px-6 py-3 bg-gradient-to-r from-gray-300 to-gray-400 text-gray-700 rounded-xl font-bold text-lg hover:scale-105 transition-transform shadow-lg"
          style={{ fontFamily: 'Fredoka, sans-serif' }}>
          🔄 Try Again
        </button>
      </div>

      {checked && (
        <p className="mt-4 text-center text-lg font-bold" style={{ fontFamily: 'Fredoka, sans-serif' }}>
          You got <span className="text-green-600">{Object.keys(data.answers).filter((k) => isCorrect(Number(k))).length}</span> out of 5 correct! 🎉
        </p>
      )}
    </StartersPartCard>
  );
};

export default ReadingPart4;
