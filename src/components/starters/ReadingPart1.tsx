import { useState } from 'react';
import StartersPartCard from './StartersPartCard';
import { test1ReadingPart1 } from '@/data/startersTestData';
import { Check, X } from 'lucide-react';

const ReadingPart1 = () => {
  const data = test1ReadingPart1;
  const [answers, setAnswers] = useState<Record<number, boolean | null>>({});
  const [checked, setChecked] = useState(false);

  const handleAnswer = (id: number, value: boolean) => {
    if (checked) return;
    setAnswers({ ...answers, [id]: value });
  };

  const checkAnswers = () => setChecked(true);
  const reset = () => { setAnswers({}); setChecked(false); };

  return (
    <StartersPartCard
      partNumber={1}
      title="Look and read"
      subtitle="5 questions — Put a tick ✓ or a cross ✗"
      color="from-pink-400 to-rose-500"
      icon="👀"
      defaultOpen={true}
    >
      {/* Examples */}
      <div className="bg-pink-50 rounded-xl p-4 mb-6">
        <h4 className="font-bold text-pink-700 mb-3" style={{ fontFamily: 'Fredoka, sans-serif' }}>Examples:</h4>
        {data.examples.map((ex, i) => (
          <div key={i} className="flex items-center gap-4 mb-2">
            <span className="text-3xl">{ex.emoji}</span>
            <span className="flex-1 text-gray-700 font-medium">{ex.statement}</span>
            <span className={`w-10 h-10 rounded-lg flex items-center justify-center text-white font-bold text-xl ${ex.answer ? 'bg-green-500' : 'bg-red-500'}`}>
              {ex.answer ? '✓' : '✗'}
            </span>
          </div>
        ))}
      </div>

      {/* Reference images */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        {data.images.map((img, i) => (
          <img key={i} src={img} alt={`Reference page ${i + 1}`} className="w-full rounded-xl shadow-md" />
        ))}
      </div>

      {/* Questions */}
      <div className="space-y-4">
        {data.questions.map((q) => {
          const userAnswer = answers[q.id];
          const isCorrect = checked && userAnswer === q.answer;
          const isWrong = checked && userAnswer !== undefined && userAnswer !== null && userAnswer !== q.answer;

          return (
            <div key={q.id} className={`flex items-center gap-4 p-4 rounded-xl border-2 transition-colors ${
              isCorrect ? 'border-green-400 bg-green-50' : isWrong ? 'border-red-400 bg-red-50' : 'border-pink-100 bg-white'
            }`}>
              <span className="w-8 h-8 rounded-full bg-pink-500 text-white flex items-center justify-center font-bold flex-shrink-0">
                {q.id}
              </span>
              <span className="text-3xl">{q.emoji}</span>
              <span className="flex-1 text-lg font-medium text-gray-700">{q.statement}</span>
              <div className="flex gap-2">
                <button
                  onClick={() => handleAnswer(q.id, true)}
                  className={`w-12 h-12 rounded-xl flex items-center justify-center text-xl font-bold transition-all ${
                    userAnswer === true
                      ? 'bg-green-500 text-white scale-110 shadow-md'
                      : 'bg-green-100 text-green-600 hover:bg-green-200'
                  }`}
                >
                  <Check className="h-6 w-6" />
                </button>
                <button
                  onClick={() => handleAnswer(q.id, false)}
                  className={`w-12 h-12 rounded-xl flex items-center justify-center text-xl font-bold transition-all ${
                    userAnswer === false
                      ? 'bg-red-500 text-white scale-110 shadow-md'
                      : 'bg-red-100 text-red-600 hover:bg-red-200'
                  }`}
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
              {checked && isWrong && (
                <span className="text-sm font-bold text-green-600">→ {q.answer ? '✓' : '✗'}</span>
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
          You got <span className="text-green-600">{data.questions.filter((q) => answers[q.id] === q.answer).length}</span> out of {data.questions.length} correct! 🎉
        </p>
      )}
    </StartersPartCard>
  );
};

export default ReadingPart1;
