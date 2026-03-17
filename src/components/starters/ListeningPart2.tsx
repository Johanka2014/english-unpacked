import { useState } from 'react';
import StartersPartCard from './StartersPartCard';
import AudioPlayer from './AudioPlayer';
import { test1ListeningPart2 } from '@/data/startersTestData';
import sceneImage from '@/assets/starters/test1-listening-part2-scene.jpg';

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

      {/* 2-col layout: image left, activity right */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <img src={sceneImage} alt="Scene with children" className="w-full rounded-xl shadow-md" />

        <div className="flex flex-col gap-4">
          {/* Examples */}
          <div className="bg-purple-50 rounded-xl p-4">
            <h4 className="font-bold text-purple-700 mb-3" style={{ fontFamily: 'Fredoka, sans-serif' }}>Examples:</h4>
            {data.examples.map((ex, i) => (
              <div key={i} className="flex items-center gap-3 mb-2">
                <span className="text-gray-700">{ex.question}</span>
                <span className="px-3 py-1 bg-purple-200 text-purple-800 rounded-lg font-bold">{ex.answer}</span>
              </div>
            ))}
          </div>

          {/* Questions */}
          <div className="space-y-3">
            {data.questions.map((q) => (
              <div key={q.id} className="flex flex-col sm:flex-row sm:items-center gap-2 bg-white rounded-xl p-3 border-2 border-purple-100">
                <span className="w-8 h-8 rounded-full bg-purple-500 text-white flex items-center justify-center font-bold flex-shrink-0">
                  {q.id}
                </span>
                <span className="flex-1 text-gray-700 font-medium text-sm">{q.question}</span>
                <input
                  type="text"
                  value={answers[q.id] || ''}
                  onChange={(e) => handleChange(q.id, e.target.value)}
                  placeholder={q.type === 'name' ? 'Name...' : 'Number...'}
                  className={`px-3 py-2 rounded-xl border-2 text-base font-bold w-32 text-center transition-colors ${
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

          <div className="flex justify-center gap-4">
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
            <p className="text-center text-lg font-bold" style={{ fontFamily: 'Fredoka, sans-serif' }}>
              You got <span className="text-green-600">{data.questions.filter((q) => isCorrect(q.id)).length}</span> out of {data.questions.length} correct! 🎉
            </p>
          )}
        </div>
      </div>
    </StartersPartCard>
  );
};

export default ListeningPart2;
