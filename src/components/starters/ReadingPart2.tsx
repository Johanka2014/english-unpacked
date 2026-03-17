import { useState } from 'react';
import StartersPartCard from './StartersPartCard';
import { test1ReadingPart2 } from '@/data/startersTestData';

const ReadingPart2 = () => {
  const data = test1ReadingPart2;
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [checked, setChecked] = useState(false);

  const handleAnswer = (id: number, value: string) => {
    if (checked) return;
    setAnswers({ ...answers, [id]: value });
  };

  const checkAnswers = () => setChecked(true);
  const reset = () => { setAnswers({}); setChecked(false); };

  const isCorrect = (id: number) => {
    const q = data.questions.find((q) => q.id === id);
    return q && answers[id] === q.answer;
  };

  return (
    <StartersPartCard
      partNumber={2}
      title="Look and read"
      subtitle="5 questions — Write yes or no"
      color="from-violet-400 to-purple-500"
      icon="📖"
    >
      {/* Examples */}
      <div className="bg-violet-50 rounded-xl p-4 mb-6">
        <h4 className="font-bold text-violet-700 mb-3" style={{ fontFamily: 'Fredoka, sans-serif' }}>Examples:</h4>
        {data.examples.map((ex, i) => (
          <div key={i} className="flex items-center gap-3 mb-2">
            <span className="flex-1 text-gray-700">{ex.statement}</span>
            <span className={`px-3 py-1 rounded-lg font-bold ${ex.answer === 'yes' ? 'bg-green-200 text-green-800' : 'bg-red-200 text-red-800'}`}>
              {ex.answer}
            </span>
          </div>
        ))}
      </div>

      {/* Scene image */}
      <img src={data.sceneImage} alt="Scene" className="w-full max-w-2xl mx-auto rounded-xl shadow-md mb-6" />

      {/* Questions */}
      <div className="space-y-4">
        {data.questions.map((q) => {
          const userAnswer = answers[q.id];
          const correct = checked && isCorrect(q.id);
          const wrong = checked && userAnswer && !isCorrect(q.id);

          return (
            <div key={q.id} className={`flex items-center gap-4 p-4 rounded-xl border-2 transition-colors ${
              correct ? 'border-green-400 bg-green-50' : wrong ? 'border-red-400 bg-red-50' : 'border-violet-100 bg-white'
            }`}>
              <span className="w-8 h-8 rounded-full bg-violet-500 text-white flex items-center justify-center font-bold flex-shrink-0">
                {q.id}
              </span>
              <span className="flex-1 text-gray-700 font-medium">{q.statement}</span>
              <div className="flex gap-2">
                <button
                  onClick={() => handleAnswer(q.id, 'yes')}
                  className={`px-4 py-2 rounded-xl font-bold text-lg transition-all ${
                    userAnswer === 'yes'
                      ? 'bg-green-500 text-white scale-110 shadow-md'
                      : 'bg-green-100 text-green-600 hover:bg-green-200'
                  }`}
                  style={{ fontFamily: 'Fredoka, sans-serif' }}
                >
                  Yes
                </button>
                <button
                  onClick={() => handleAnswer(q.id, 'no')}
                  className={`px-4 py-2 rounded-xl font-bold text-lg transition-all ${
                    userAnswer === 'no'
                      ? 'bg-red-500 text-white scale-110 shadow-md'
                      : 'bg-red-100 text-red-600 hover:bg-red-200'
                  }`}
                  style={{ fontFamily: 'Fredoka, sans-serif' }}
                >
                  No
                </button>
              </div>
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

export default ReadingPart2;
