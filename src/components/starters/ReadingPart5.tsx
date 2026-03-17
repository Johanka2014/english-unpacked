import { useState } from 'react';
import StartersPartCard from './StartersPartCard';
import { test1ReadingPart5 } from '@/data/startersTestData';
import readingPart5P3 from '@/assets/starters/test1-reading-part5-p3.jpg';

const ReadingPart5 = () => {
  const data = test1ReadingPart5;
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

  const renderQuestion = (q: typeof data.questions[0]) => {
    const correct = checked && isCorrect(q.id);
    const wrong = checked && answers[q.id] && !isCorrect(q.id);
    return (
      <div key={q.id} className={`flex flex-col md:flex-row md:items-center gap-3 p-4 rounded-xl border-2 transition-colors ${
        correct ? 'border-green-400 bg-green-50' : wrong ? 'border-red-400 bg-red-50' : 'border-teal-100 bg-white'
      }`}>
        <span className="w-8 h-8 rounded-full bg-teal-500 text-white flex items-center justify-center font-bold flex-shrink-0">{q.id}</span>
        <span className="flex-1 text-gray-700 font-medium">{q.question}</span>
        <div className="flex items-center gap-2">
          <input type="text" value={answers[q.id] || ''} onChange={(e) => handleChange(q.id, e.target.value)} placeholder="Write one word..."
            className={`px-4 py-2 rounded-xl border-2 text-lg font-bold w-36 text-center transition-colors ${
              correct ? 'border-green-400 bg-green-50 text-green-700' : wrong ? 'border-red-400 bg-red-50 text-red-700' : 'border-teal-200 focus:border-teal-400'
            }`} style={{ fontFamily: 'Fredoka, sans-serif' }} />
          {q.partialAnswer && <span className="text-gray-500 font-medium">{q.partialAnswer}</span>}
        </div>
        {checked && wrong && <span className="text-sm font-bold text-green-600">→ {q.answer}</span>}
      </div>
    );
  };

  return (
    <StartersPartCard
      partNumber={5}
      title="One-word answers"
      subtitle="5 questions — Look at the picture and write one word"
      color="from-teal-400 to-cyan-500"
      icon="🖼️"
    >
      {/* First image */}
      <img src={data.images[0]} alt="Scene 1" className="w-full rounded-xl shadow-md mb-6" />

      {/* Examples */}
      <div className="bg-teal-50 rounded-xl p-4 mb-6">
        <h4 className="font-bold text-teal-700 mb-3" style={{ fontFamily: 'Fredoka, sans-serif' }}>Examples:</h4>
        {data.examples.map((ex, i) => (
          <div key={i} className="flex items-center gap-3 mb-2">
            <span className="flex-1 text-gray-700">{ex.question}</span>
            <span className="px-3 py-1 bg-teal-200 text-teal-800 rounded-lg font-bold">{ex.answer}</span>
          </div>
        ))}
      </div>

      {/* Question 1 */}
      {renderQuestion(data.questions[0])}

      {/* Second image */}
      <img src={data.images[1]} alt="Scene 2" className="w-full rounded-xl shadow-md my-6" />

      {/* Remaining questions */}
      <div className="space-y-4">
        {data.questions.slice(1).map(renderQuestion)}
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

export default ReadingPart5;
