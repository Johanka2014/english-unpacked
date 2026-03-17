import { useState } from 'react';
import StartersPartCard from './StartersPartCard';
import AudioPlayer from './AudioPlayer';
import { test1ListeningPart3 } from '@/data/startersTestData';
import exampleImage from '@/assets/starters/test1-listening-part3-example.jpg';
import q2Image from '@/assets/starters/test1-listening-part3-q2.jpg';

const ListeningPart3 = () => {
  const data = test1ListeningPart3;
  const [selected, setSelected] = useState<Record<number, string>>({});
  const [checked, setChecked] = useState(false);

  const handleSelect = (qId: number, optId: string) => {
    if (checked) return;
    setSelected({ ...selected, [qId]: optId });
  };

  const checkAnswers = () => setChecked(true);
  const reset = () => { setSelected({}); setChecked(false); };

  const optionColors = ['from-blue-200 to-blue-300', 'from-pink-200 to-pink-300', 'from-green-200 to-green-300'];

  return (
    <StartersPartCard
      partNumber={3}
      title="Tick the box"
      subtitle="5 questions — Listen and choose the right picture"
      color="from-green-400 to-teal-500"
      icon="☑️"
    >
      <AudioPlayer src={data.audio} label="Listen to Part 3" />

      <div className="mt-6 space-y-6">
        {data.questions.map((q) => (
          <div key={q.id} className="bg-white rounded-xl p-5 border-2 border-green-100">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-8 rounded-full bg-teal-500 text-white flex items-center justify-center font-bold">
                {q.id}
              </span>
              <span className="text-lg font-medium text-gray-700">{q.question}</span>
            </div>
            {q.id === 1 && (
              <img src={exampleImage} alt="Example: What's Kim wearing?" className="w-full max-w-lg mx-auto rounded-xl shadow-md mb-4" />
            )}
            <div className="grid grid-cols-3 gap-3">
              {q.options.map((opt, i) => {
                const isSelected = selected[q.id] === opt.id;
                const isCorrect = checked && opt.id === q.correctOption;
                const isWrong = checked && isSelected && opt.id !== q.correctOption;

                return (
                  <button
                    key={opt.id}
                    onClick={() => handleSelect(q.id, opt.id)}
                    className={`p-4 rounded-xl border-3 text-center font-medium transition-all ${
                      isCorrect
                        ? 'border-green-500 bg-green-100 ring-2 ring-green-400'
                        : isWrong
                        ? 'border-red-500 bg-red-100 ring-2 ring-red-400'
                        : isSelected
                        ? 'border-yellow-500 bg-yellow-100 ring-2 ring-yellow-400 scale-105'
                        : `border-transparent bg-gradient-to-br ${optionColors[i]} hover:scale-105`
                    } shadow-sm`}
                    style={{ fontFamily: 'Fredoka, sans-serif' }}
                  >
                    <div className="text-2xl font-bold mb-1">{opt.id}</div>
                    <div className="text-sm">{opt.description}</div>
                  </button>
                );
              })}
            </div>
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
          You got <span className="text-green-600">{data.questions.filter((q) => selected[q.id] === q.correctOption).length}</span> out of {data.questions.length} correct! 🎉
        </p>
      )}
    </StartersPartCard>
  );
};

export default ListeningPart3;
