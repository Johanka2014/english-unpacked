import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { ArrowLeft, Star, Lock } from 'lucide-react';

const tests = [
  { id: 'test-1', title: 'Test 1', available: true, color: 'from-pink-400 to-purple-500' },
  { id: 'test-2', title: 'Test 2', available: false, color: 'from-green-400 to-teal-500' },
  { id: 'test-3', title: 'Test 3', available: false, color: 'from-amber-400 to-orange-500' },
];

const StartersPractice = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
      <Navigation />
      <main className="container mx-auto px-4 py-20">
        <Link
          to="/members/activities?tab=young-learners"
          className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-800 mb-8 font-medium"
        >
          <ArrowLeft className="h-4 w-4" /> Back to Young Learners
        </Link>

        {/* Hero */}
        <div className="relative rounded-3xl overflow-hidden mb-12 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 p-8 md:p-12 text-white">
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-4">
              <Star className="h-8 w-8 text-yellow-300 fill-yellow-300" />
              <Star className="h-6 w-6 text-yellow-300 fill-yellow-300" />
              <Star className="h-8 w-8 text-yellow-300 fill-yellow-300" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: 'Fredoka, sans-serif' }}>
              Practice Tests for Starters
            </h1>
            <p className="text-lg md:text-xl opacity-90 max-w-2xl">
              Get ready for the Cambridge Pre A1 Starters exam with fun practice tests! 🎉
            </p>
          </div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/3" />
          <div className="absolute bottom-0 left-1/2 w-48 h-48 bg-white/10 rounded-full translate-y-1/2" />
        </div>

        {/* Test tiles */}
        <div className="grid gap-8 md:grid-cols-3 max-w-4xl mx-auto">
          {tests.map((test) => (
            <div key={test.id} className="relative">
              {test.available ? (
                <Link to={`/starters-practice/${test.id}`}>
                  <div className={`bg-gradient-to-br ${test.color} rounded-2xl p-8 text-white shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer min-h-[200px] flex flex-col items-center justify-center`}>
                    <Star className="h-12 w-12 text-yellow-300 fill-yellow-300 mb-4" />
                    <h2 className="text-3xl font-bold" style={{ fontFamily: 'Fredoka, sans-serif' }}>
                      {test.title}
                    </h2>
                    <p className="mt-2 opacity-90">Listening • Reading & Writing • Speaking</p>
                  </div>
                </Link>
              ) : (
                <div className={`bg-gradient-to-br ${test.color} rounded-2xl p-8 text-white shadow-lg min-h-[200px] flex flex-col items-center justify-center opacity-50 cursor-not-allowed`}>
                  <Lock className="h-12 w-12 mb-4" />
                  <h2 className="text-3xl font-bold" style={{ fontFamily: 'Fredoka, sans-serif' }}>
                    {test.title}
                  </h2>
                  <p className="mt-2 opacity-90">Coming soon!</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default StartersPractice;
