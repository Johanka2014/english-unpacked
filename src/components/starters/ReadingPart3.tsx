import { useState } from 'react';
import StartersPartCard from './StartersPartCard';
import { test1ReadingPart3 } from '@/data/startersTestData';

const ReadingPart3 = () => {
  const data = test1ReadingPart3;
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [checked, setChecked] = useState(false);

  const handleChange = (id: number, value: string) => {
    if (checked) return;
    setAnswers({ ...answers, [id]: value });
  };

  const checkAnswers = () => setChecked(true);
  const reset = () => { setAnswers({}); setChecked(false); };

  const isCorrect = (id: number) => {
    const q = data.questions.find((q) => q.id === id);
    return q && answers[id]?.trim().toLowerCase() === q.answer.toLowerCase();
  };

  return (
    <StartersPartCard
      partNumber={3}
      title="Look at the letters"
      subtitle="5 questions — Unscramble the letters to make a word"
      color="from-amber-400 to-orange-500"
      icon="🔤"
    >
      {/* Example */}
      <div className="bg-amber-50 rounded-xl p-4 mb-6">
        <h4 className="font-bold text-amber-700 mb-3" style={{ fontFamily: 'Fredoka, sans-serif' }}>Example:</h4>
        <div className="flex items-center gap-4">
          <span className="text-3xl">{data.example.emoji}</span>
          <div className="flex gap-1">
            {data.example.letters.map((l, i) => (
              <span key={i} className="w-10 h-10 bg-amber-200 rounded-lg flex items-center justify-center text-xl font-bold text-amber-800">{l}</span>
            ))}
          </div>
          <span className="text-xl font-bold text-amber-800">→ {data.example.answer}</span>
        </div>
      </div>

      {/* Questions */}
      <div className="space-y-5">
        {data.questions.map((q) => {
          const correct = checked && isCorrect(q.id);
          const wrong = checked && answers[q.id] && !isCorrect(q.id);

          return (
            <div key={q.id} className={`flex flex-col md:flex-row items-center gap-4 p-5 rounded-xl border-2 transition-colors ${
              correct ? 'border-green-400 bg-green-50' : wrong ? 'border-red-400 bg-red-50' : 'border-amber-100 bg-white'
            }`}>
              <span className="w-8 h-8 rounded-full bg-amber-500 text-white flex items-center justify-center font-bold flex-shrink-0">
                {q.id}
              </span>
              <span className="text-4xl">{q.emoji}</span>
              <div className="flex gap-1">
                {q.scrambledLetters.map((l, i) => (
                  <span key={i} className="w-10 h-10 bg-gradient-to-br from-amber-200 to-orange-200 rounded-lg flex items-center justify-center text-xl font-bold text-amber-800 shadow-sm">
                    {l}
                  </span>
                ))}
              </div>
              <span className="text-xl text-gray-400">→</span>
              <input
                type="text"
                value={answers[q.id] || ''}
                onChange={(e) => handleChange(q.id, e.target.value)}
                placeholder="Type the word..."
                className={`px-4 py-2 rounded-xl border-2 text-lg font-bold w-36 text-center transition-colors ${
                  correct ? 'border-green-400 bg-green-50 text-green-700'
                  : wrong ? 'border-red-400 bg-red-50 text-red-700'
                  : 'border-amber-200 focus:border-amber-400'
                }`}
                style={{ fontFamily: 'Fredoka, sans-serif' }}
              />
              {checked && wrong && (
                <span className="text-sm font-bold text-green-600">→ {q.answer}</span>
              )}
            </div>
          );
        })}
      </div>

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
          You got <span className="text-green-600">{data.questions.filter((q) => isCorrect(q.id)).length}</span> out of {data.questions.length} correct! 🎉
        </p>
      )}
    </StartersPartCard>
  );
};

export default ReadingPart3;
