import { useState } from 'react';
import StartersPartCard from './StartersPartCard';
import AudioPlayer from './AudioPlayer';
import { test1ListeningPart2 } from '@/data/startersTestData';

const ListeningPart2 = () => {
  const data = test1ListeningPart2;
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
      partNumber={2}
      title="Write a name or a number"
      subtitle="5 questions — Listen and write the answer"
      color="from-purple-400 to-pink-500"
      icon="✏️"
    >
      <AudioPlayer src={data.audio} label="Listen to Part 2" />

      {/* Examples */}
      <div className="mt-6 bg-purple-50 rounded-xl p-4 mb-6">
        <h4 className="font-bold text-purple-700 mb-3" style={{ fontFamily: 'Fredoka, sans-serif' }}>Examples:</h4>
        {data.examples.map((ex, i) => (
          <div key={i} className="flex items-center gap-3 mb-2">
            <span className="text-gray-700">{ex.question}</span>
            <span className="px-3 py-1 bg-purple-200 text-purple-800 rounded-lg font-bold">{ex.answer}</span>
          </div>
        ))}
      </div>

      {/* Questions */}
      <div className="space-y-4">
        {data.questions.map((q) => (
          <div key={q.id} className="flex flex-col md:flex-row md:items-center gap-3 bg-white rounded-xl p-4 border-2 border-purple-100">
            <span className="w-8 h-8 rounded-full bg-purple-500 text-white flex items-center justify-center font-bold flex-shrink-0">
              {q.id}
            </span>
            <span className="flex-1 text-gray-700 font-medium">{q.question}</span>
            <input
              type="text"
              value={answers[q.id] || ''}
              onChange={(e) => handleChange(q.id, e.target.value)}
              placeholder={q.type === 'name' ? 'Write a name...' : 'Write a number...'}
              className={`px-4 py-2 rounded-xl border-2 text-lg font-bold w-40 text-center transition-colors ${
                checked
                  ? isCorrect(q.id)
                    ? 'border-green-400 bg-green-50 text-green-700'
                    : 'border-red-400 bg-red-50 text-red-700'
                  : 'border-purple-200 focus:border-purple-400'
              }`}
              style={{ fontFamily: 'Fredoka, sans-serif' }}
            />
            {checked && !isCorrect(q.id) && (
              <span className="text-sm text-green-600 font-bold">→ {q.answer}</span>
            )}
          </div>
        ))}
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

export default ListeningPart2;
