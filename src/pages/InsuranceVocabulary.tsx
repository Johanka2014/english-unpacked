import { useState } from 'react';
import { Shield, CheckCircle, XCircle, RotateCcw, BookOpen, Target } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';

interface VocabTerm {
  term: string;
  definition: string;
  exampleSentence: string;
  category: 'basic' | 'advanced' | 'uk-specific';
}

const vocabularyData: VocabTerm[] = [
  {
    term: 'Insurance',
    definition: 'Protection against financial loss by paying a company to cover potential risks',
    exampleSentence: 'I booked the flights 6 months ago and bought the extra insurance.',
    category: 'basic'
  },
  {
    term: 'Assurance',
    definition: 'Confidence or certainty that something will be covered or protected',
    exampleSentence: 'Insurance gives me assurance that if anything goes wrong I can claim money for lost time or luggage.',
    category: 'basic'
  },
  {
    term: 'Policy',
    definition: 'A written contract between you and an insurance company that outlines the terms of coverage',
    exampleSentence: 'I have an independent annual travel insurance policy.',
    category: 'basic'
  },
  {
    term: 'Cover / Will Cover',
    definition: 'What the insurance protects or pays for when something goes wrong',
    exampleSentence: 'I am not sure if my insurance will cover that.',
    category: 'basic'
  },
  {
    term: 'Excess (UK) / Deductible (US)',
    definition: 'The amount you have to pay before the insurance company pays the rest of a claim',
    exampleSentence: 'If you have a £250 excess in your policy, you pay the first £250 and then the insurance company will pay the rest.',
    category: 'uk-specific'
  },
  {
    term: 'Make a Claim',
    definition: 'To officially request money back from insurance to pay for damage, delays, or losses',
    exampleSentence: 'When you make a claim, you pay the first £250 and then the insurance company will pay the rest.',
    category: 'advanced'
  },
  {
    term: 'Get Out Of (paying a claim)',
    definition: 'When an insurance company tries to avoid paying what they owe by using technical reasons or loopholes',
    exampleSentence: 'They will try to get out of paying a claim any way they can.',
    category: 'advanced'
  },
  {
    term: 'Cancelled',
    definition: 'When a scheduled service (like a flight) is officially stopped and will not happen',
    exampleSentence: 'When the flight is cancelled and it wasn\'t my fault, they will offer me a hotel room.',
    category: 'basic'
  },
  {
    term: 'Statutory Sick Pay (SSP)',
    definition: 'The legal minimum amount UK employers must pay employees who are off work sick for 4+ consecutive days',
    exampleSentence: 'In the UK, there is a system of Statutory Sick Pay (SSP) for absences of four or more consecutive days, up to 28 weeks.',
    category: 'uk-specific'
  },
  {
    term: 'Entitlement',
    definition: 'What you have a legal right to receive or claim',
    exampleSentence: 'Your entitlement to paid time off is primarily governed by your employment contract and company policy.',
    category: 'advanced'
  },
  {
    term: 'Annual',
    definition: 'Happening once a year or valid for one year',
    exampleSentence: 'I have an independent annual travel insurance policy.',
    category: 'basic'
  },
  {
    term: 'Delay',
    definition: 'When something happens later than scheduled or expected',
    exampleSentence: 'I wasn\'t sure if there would be any delays.',
    category: 'basic'
  }
];

const fillInBlankQuestions = [
  {
    sentence: 'I am not sure if my insurance will _____ that.',
    answer: 'cover',
    options: ['cover', 'assure', 'cancel', 'delay']
  },
  {
    sentence: 'If you have a £250 _____ in your policy, you pay the first £250.',
    answer: 'excess',
    options: ['excess', 'premium', 'claim', 'policy']
  },
  {
    sentence: 'When I _____ on insurance, I officially request money back.',
    answer: 'make a claim',
    options: ['make a claim', 'get assurance', 'pay excess', 'cancel policy']
  },
  {
    sentence: 'Insurance gives me _____ that if anything goes wrong I can get compensation.',
    answer: 'assurance',
    options: ['assurance', 'excess', 'delay', 'entitlement']
  }
];

const multipleChoiceQuestions = [
  {
    question: 'What is an "excess" in UK insurance terms?',
    options: [
      'The total cost of your insurance',
      'The amount you pay before insurance pays the rest',
      'Extra insurance you can buy',
      'Money the insurance company owes you'
    ],
    correctAnswer: 1,
    explanation: 'An excess (or deductible in the US) is the amount you must pay first before the insurance company covers the remaining costs.'
  },
  {
    question: 'What does "make a claim" mean?',
    options: [
      'To buy insurance',
      'To cancel your policy',
      'To officially request money from insurance',
      'To increase your coverage'
    ],
    correctAnswer: 2,
    explanation: 'Making a claim means officially requesting payment from your insurance company for a covered loss or damage.'
  },
  {
    question: 'What is Statutory Sick Pay (SSP)?',
    options: [
      'Extra pay for working while sick',
      'Insurance for health problems',
      'Legal minimum sick pay from UK employers',
      'Payment from travel insurance'
    ],
    correctAnswer: 2,
    explanation: 'SSP is the legal minimum amount UK employers must pay employees who are off work sick for 4 or more consecutive days, up to 28 weeks.'
  }
];

const advancedVocabQuestions = [
  {
    sentence: 'Insurance companies can be considered as professional _______ takers.',
    options: ['life', 'risk', 'chance', 'misfortune'],
    correctAnswer: 'risk',
    explanation: 'Insurance companies are professional "risk takers" - they assess and take on financial risks in exchange for premiums.'
  },
  {
    sentence: 'Some of the language in insurance _______ is incomprehensible to most ordinary people.',
    options: ['premiums', 'policies', 'rates', 'invoices'],
    correctAnswer: 'policies',
    explanation: 'Insurance policies (the written contracts) often contain complex legal language that can be difficult for ordinary people to understand.'
  },
  {
    sentence: 'The company will _______ the policy-holder against loss of or damage to the insured vehicle.',
    options: ['identify', 'respect', 'indemnify', 'engage'],
    correctAnswer: 'indemnify',
    explanation: 'To "indemnify" means to compensate for harm or loss. Insurance companies indemnify policyholders by covering their losses.'
  },
  {
    sentence: 'Insurance companies like you to _______ your claim as soon as possible.',
    options: ['process', 'submit', 'assure', 'proceed'],
    correctAnswer: 'submit',
    explanation: 'To "submit" a claim means to officially send your claim to the insurance company for review and processing.'
  },
  {
    sentence: 'Go to an insurance _______ and see if you can get a better deal.',
    options: ['breaker', 'broker', 'speculator', 'merchant'],
    correctAnswer: 'broker',
    explanation: 'An insurance broker is a professional who helps you find and compare insurance policies from different companies.'
  },
  {
    sentence: 'In these inflationary times it is important to keep the value of your policy closely _______ to the value of your property.',
    options: ['adapted', 'linked', 'indicated', 'dependent'],
    correctAnswer: 'linked',
    explanation: 'Your policy value should be "linked" (connected) to your property value to ensure adequate coverage as prices rise.'
  },
  {
    sentence: 'My insurance company offers a wide _______ of cover.',
    options: ['range', 'branch', 'rank', 'standard'],
    correctAnswer: 'range',
    explanation: 'A "range" of cover means the insurance company offers many different types of coverage options.'
  },
  {
    sentence: 'His insurance company had told him not to admit _______, even though it was clearly his fault.',
    options: ['legality', 'likelihood', 'liability', 'crime'],
    correctAnswer: 'liability',
    explanation: '"Liability" means legal responsibility. Admitting liability means accepting legal responsibility for an accident or damage.'
  },
  {
    sentence: 'My endowment policy will _______ when I\'m sixty-five.',
    options: ['ripen', 'mature', 'flourish', 'break'],
    correctAnswer: 'mature',
    explanation: 'An insurance or investment policy "matures" when it reaches the end of its term and pays out the agreed amount.'
  },
  {
    sentence: '_______ insurance originated in the fifteenth century.',
    options: ['Boat', 'Sea', 'Navy', 'Marine'],
    correctAnswer: 'Marine',
    explanation: 'Marine insurance covers ships, cargo, and related maritime risks. It was one of the earliest forms of insurance.'
  },
  {
    sentence: 'The _______ form you fill in is the basis of your contract with the insurance company.',
    options: ['proposition', 'application', 'enrolment', 'proposal'],
    correctAnswer: 'application',
    explanation: 'The application form contains your information and becomes the basis of your legal contract with the insurer.'
  },
  {
    sentence: 'The insurance will be _______ if you omit any relevant information.',
    options: ['void', 'valid', 'invaluable', 'priceless'],
    correctAnswer: 'void',
    explanation: '"Void" means the insurance becomes invalid and worthless. Not disclosing relevant information can cancel your coverage.'
  },
  {
    sentence: 'You\'re allowed 30 days\' _______ for the payment of the renewal premium.',
    options: ['grace', 'favour', 'way', 'permission'],
    correctAnswer: 'grace',
    explanation: 'A "grace period" is extra time allowed to make a payment before the policy is cancelled.'
  },
  {
    sentence: 'Make sure all this equipment is insured _______ accidental damage.',
    options: ['over', 'against', 'with', 'from'],
    correctAnswer: 'against',
    explanation: 'We insure "against" risks or damages - meaning the insurance protects you from those specific events.'
  }
];

const InsuranceVocabulary = () => {
  const [flippedCards, setFlippedCards] = useState<Set<number>>(new Set());
  const [fillInAnswers, setFillInAnswers] = useState<{ [key: number]: string }>({});
  const [fillInResults, setFillInResults] = useState<{ [key: number]: boolean | null }>({});
  const [quizAnswers, setQuizAnswers] = useState<{ [key: number]: number }>({});
  const [showQuizResults, setShowQuizResults] = useState(false);
  const [advancedAnswers, setAdvancedAnswers] = useState<{ [key: number]: string }>({});
  const [showAdvancedResults, setShowAdvancedResults] = useState(false);

  const toggleCard = (index: number) => {
    const newFlipped = new Set(flippedCards);
    if (newFlipped.has(index)) {
      newFlipped.delete(index);
    } else {
      newFlipped.add(index);
    }
    setFlippedCards(newFlipped);
  };

  const progressPercentage = (flippedCards.size / vocabularyData.length) * 100;

  const checkFillInAnswer = (questionIndex: number) => {
    const userAnswer = fillInAnswers[questionIndex]?.toLowerCase().trim();
    const correctAnswer = fillInBlankQuestions[questionIndex].answer.toLowerCase();
    const isCorrect = userAnswer === correctAnswer;
    setFillInResults({ ...fillInResults, [questionIndex]: isCorrect });
  };

  const submitQuiz = () => {
    setShowQuizResults(true);
  };

  const resetQuiz = () => {
    setQuizAnswers({});
    setShowQuizResults(false);
  };

  const quizScore = showQuizResults
    ? multipleChoiceQuestions.reduce((score, q, index) => {
        return score + (quizAnswers[index] === q.correctAnswer ? 1 : 0);
      }, 0)
    : 0;

  const submitAdvancedQuiz = () => {
    setShowAdvancedResults(true);
  };

  const resetAdvancedQuiz = () => {
    setAdvancedAnswers({});
    setShowAdvancedResults(false);
  };

  const advancedScore = showAdvancedResults
    ? advancedVocabQuestions.reduce((score, q, index) => {
        return score + (advancedAnswers[index]?.toLowerCase() === q.correctAnswer.toLowerCase() ? 1 : 0);
      }, 0)
    : 0;

  return (
    <>
      <SEO
        title="Insurance Vocabulary Practice"
        description="Master essential insurance terminology for business and travel with interactive exercises"
        canonical="https://english-unpacked.lovable.app/insurance-vocabulary"
      />
      <div className="min-h-screen flex flex-col bg-white">
        <Navigation />
        
        <main className="flex-1 pt-24 pb-16">
          <div className="container mx-auto px-4 max-w-6xl">
            {/* Header */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 mb-4">
                <Shield className="w-8 h-8 text-blue-600" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-brand-navy mb-4 font-merriweather">
                Insurance Vocabulary Practice
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Master essential insurance terminology through interactive exercises
              </p>
              
              {/* Progress Bar */}
              <div className="mt-8 max-w-md mx-auto">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-muted-foreground">Cards Studied</span>
                  <span className="text-sm font-semibold text-brand-royal">
                    {flippedCards.size} / {vocabularyData.length}
                  </span>
                </div>
                <Progress value={progressPercentage} className="h-2" />
              </div>
            </div>

            {/* Vocabulary Cards Section */}
            <section className="mb-16">
              <div className="flex items-center gap-2 mb-6">
                <BookOpen className="w-5 h-5 text-brand-royal" />
                <h2 className="text-2xl font-bold text-brand-navy font-merriweather">
                  Vocabulary Cards
                </h2>
                <Badge variant="secondary" className="ml-2">
                  Click to flip
                </Badge>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {vocabularyData.map((vocab, index) => (
                  <Card
                    key={index}
                    className={`cursor-pointer transition-all duration-300 hover:shadow-lg ${
                      flippedCards.has(index) ? 'bg-blue-50 border-blue-200' : 'bg-white'
                    }`}
                    onClick={() => toggleCard(index)}
                  >
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <CardTitle className="text-xl text-brand-royal">
                          {vocab.term}
                        </CardTitle>
                        <Badge
                          variant={
                            vocab.category === 'basic'
                              ? 'secondary'
                              : vocab.category === 'uk-specific'
                              ? 'default'
                              : 'outline'
                          }
                          className="text-xs"
                        >
                          {vocab.category === 'uk-specific' ? 'UK' : vocab.category}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      {!flippedCards.has(index) ? (
                        <p className="text-muted-foreground italic">
                          Click to see definition
                        </p>
                      ) : (
                        <div className="space-y-4">
                          <div>
                            <p className="font-semibold text-sm text-brand-navy mb-1">
                              Definition:
                            </p>
                            <p className="text-sm">{vocab.definition}</p>
                          </div>
                          <div>
                            <p className="font-semibold text-sm text-brand-navy mb-1">
                              Example:
                            </p>
                            <p className="text-sm italic text-muted-foreground">
                              "{vocab.exampleSentence}"
                            </p>
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* Fill in the Blanks Section */}
            <section className="mb-16">
              <div className="flex items-center gap-2 mb-6">
                <Target className="w-5 h-5 text-brand-royal" />
                <h2 className="text-2xl font-bold text-brand-navy font-merriweather">
                  Fill in the Blanks
                </h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                {fillInBlankQuestions.map((question, index) => (
                  <Card key={index} className="bg-blue-50/50">
                    <CardContent className="pt-6">
                      <p className="mb-4 text-lg">
                        {question.sentence.split('_____')[0]}
                        <span className="font-bold text-brand-royal">_____</span>
                        {question.sentence.split('_____')[1]}
                      </p>
                      
                      <div className="space-y-3">
                        <select
                          className="w-full p-2 border rounded-md bg-white"
                          value={fillInAnswers[index] || ''}
                          onChange={(e) =>
                            setFillInAnswers({ ...fillInAnswers, [index]: e.target.value })
                          }
                          disabled={fillInResults[index] !== undefined && fillInResults[index] !== null}
                        >
                          <option value="">Select answer...</option>
                          {question.options.map((option, optIndex) => (
                            <option key={optIndex} value={option}>
                              {option}
                            </option>
                          ))}
                        </select>
                        
                        <div className="flex items-center gap-2">
                          <Button
                            onClick={() => checkFillInAnswer(index)}
                            disabled={
                              !fillInAnswers[index] ||
                              (fillInResults[index] !== undefined && fillInResults[index] !== null)
                            }
                            size="sm"
                          >
                            Check Answer
                          </Button>
                          
                          {fillInResults[index] === true && (
                            <div className="flex items-center gap-1 text-green-600">
                              <CheckCircle className="w-5 h-5" />
                              <span className="text-sm font-semibold">Correct!</span>
                            </div>
                          )}
                          
                          {fillInResults[index] === false && (
                            <div className="flex items-center gap-1 text-red-600">
                              <XCircle className="w-5 h-5" />
                              <span className="text-sm">
                                Try again. Correct answer: <strong>{question.answer}</strong>
                              </span>
                            </div>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* Multiple Choice Quiz Section */}
            <section className="mb-16">
              <div className="flex items-center gap-2 mb-6">
                <CheckCircle className="w-5 h-5 text-brand-royal" />
                <h2 className="text-2xl font-bold text-brand-navy font-merriweather">
                  Multiple Choice Quiz
                </h2>
              </div>
              
              <Card className="bg-white">
                <CardContent className="pt-6">
                  <div className="space-y-8">
                    {multipleChoiceQuestions.map((question, qIndex) => (
                      <div key={qIndex} className="pb-6 border-b last:border-0">
                        <p className="font-semibold text-lg mb-4 text-brand-navy">
                          {qIndex + 1}. {question.question}
                        </p>
                        
                        <div className="space-y-2">
                          {question.options.map((option, oIndex) => (
                            <label
                              key={oIndex}
                              className={`flex items-center gap-3 p-3 rounded-lg border cursor-pointer transition-colors ${
                                showQuizResults && oIndex === question.correctAnswer
                                  ? 'bg-green-50 border-green-300'
                                  : showQuizResults && quizAnswers[qIndex] === oIndex
                                  ? 'bg-red-50 border-red-300'
                                  : 'hover:bg-blue-50'
                              }`}
                            >
                              <input
                                type="radio"
                                name={`question-${qIndex}`}
                                value={oIndex}
                                checked={quizAnswers[qIndex] === oIndex}
                                onChange={() =>
                                  setQuizAnswers({ ...quizAnswers, [qIndex]: oIndex })
                                }
                                disabled={showQuizResults}
                                className="w-4 h-4"
                              />
                              <span>{option}</span>
                              
                              {showQuizResults && oIndex === question.correctAnswer && (
                                <CheckCircle className="w-5 h-5 text-green-600 ml-auto" />
                              )}
                              {showQuizResults &&
                                quizAnswers[qIndex] === oIndex &&
                                oIndex !== question.correctAnswer && (
                                  <XCircle className="w-5 h-5 text-red-600 ml-auto" />
                                )}
                            </label>
                          ))}
                        </div>
                        
                        {showQuizResults && (
                          <div className="mt-3 p-3 bg-blue-50 rounded-lg">
                            <p className="text-sm text-brand-navy">
                              <strong>Explanation:</strong> {question.explanation}
                            </p>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-6 flex items-center gap-4">
                    {!showQuizResults ? (
                      <Button
                        onClick={submitQuiz}
                        disabled={
                          Object.keys(quizAnswers).length !== multipleChoiceQuestions.length
                        }
                      >
                        Submit Quiz
                      </Button>
                    ) : (
                      <>
                        <div className="flex items-center gap-2">
                          <span className="text-lg font-semibold text-brand-navy">
                            Score: {quizScore} / {multipleChoiceQuestions.length}
                          </span>
                          {quizScore === multipleChoiceQuestions.length && (
                            <Badge className="bg-green-600">Perfect!</Badge>
                          )}
                        </div>
                        <Button onClick={resetQuiz} variant="outline">
                          <RotateCcw className="w-4 h-4 mr-2" />
                          Try Again
                        </Button>
                      </>
                    )}
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Advanced Vocabulary Practice Section */}
            <section className="mb-16">
              <div className="flex items-center gap-2 mb-6">
                <Target className="w-5 h-5 text-brand-royal" />
                <h2 className="text-2xl font-bold text-brand-navy font-merriweather">
                  Advanced Vocabulary Practice
                </h2>
                <Badge variant="secondary" className="ml-2">
                  Professional Level
                </Badge>
              </div>
              
              <Card className="bg-white">
                <CardHeader>
                  <CardTitle>Choose the Best Alternative</CardTitle>
                  <CardDescription>
                    Complete each sentence with the most appropriate word
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {advancedVocabQuestions.map((question, qIndex) => (
                      <div key={qIndex} className="pb-6 border-b last:border-0">
                        <p className="text-base mb-3 text-brand-navy">
                          <span className="font-semibold">{qIndex + 1}.</span>{' '}
                          {question.sentence.split('_______')[0]}
                          <span className="font-bold text-brand-royal">_______</span>
                          {question.sentence.split('_______')[1]}
                        </p>
                        
                        <div className="grid grid-cols-2 gap-2">
                          {question.options.map((option, oIndex) => (
                            <label
                              key={oIndex}
                              className={`flex items-center gap-2 p-2 rounded-lg border cursor-pointer transition-colors text-sm ${
                                showAdvancedResults && option.toLowerCase() === question.correctAnswer.toLowerCase()
                                  ? 'bg-green-50 border-green-300'
                                  : showAdvancedResults && advancedAnswers[qIndex]?.toLowerCase() === option.toLowerCase()
                                  ? 'bg-red-50 border-red-300'
                                  : 'hover:bg-blue-50'
                              }`}
                            >
                              <input
                                type="radio"
                                name={`advanced-${qIndex}`}
                                value={option}
                                checked={advancedAnswers[qIndex] === option}
                                onChange={() =>
                                  setAdvancedAnswers({ ...advancedAnswers, [qIndex]: option })
                                }
                                disabled={showAdvancedResults}
                                className="w-4 h-4"
                              />
                              <span className="font-mono">
                                {String.fromCharCode(97 + oIndex)}.
                              </span>
                              <span>{option}</span>
                              
                              {showAdvancedResults && option.toLowerCase() === question.correctAnswer.toLowerCase() && (
                                <CheckCircle className="w-4 h-4 text-green-600 ml-auto" />
                              )}
                              {showAdvancedResults &&
                                advancedAnswers[qIndex]?.toLowerCase() === option.toLowerCase() &&
                                option.toLowerCase() !== question.correctAnswer.toLowerCase() && (
                                  <XCircle className="w-4 h-4 text-red-600 ml-auto" />
                                )}
                            </label>
                          ))}
                        </div>
                        
                        {showAdvancedResults && (
                          <div className="mt-3 p-3 bg-blue-50 rounded-lg">
                            <p className="text-sm text-brand-navy">
                              <strong>Explanation:</strong> {question.explanation}
                            </p>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-6 flex items-center gap-4">
                    {!showAdvancedResults ? (
                      <Button
                        onClick={submitAdvancedQuiz}
                        disabled={
                          Object.keys(advancedAnswers).length !== advancedVocabQuestions.length
                        }
                      >
                        Submit Answers
                      </Button>
                    ) : (
                      <>
                        <div className="flex items-center gap-2">
                          <span className="text-lg font-semibold text-brand-navy">
                            Score: {advancedScore} / {advancedVocabQuestions.length}
                          </span>
                          {advancedScore === advancedVocabQuestions.length && (
                            <Badge className="bg-green-600">Perfect!</Badge>
                          )}
                          {advancedScore >= advancedVocabQuestions.length * 0.8 && advancedScore < advancedVocabQuestions.length && (
                            <Badge className="bg-blue-600">Excellent!</Badge>
                          )}
                        </div>
                        <Button onClick={resetAdvancedQuiz} variant="outline">
                          <RotateCcw className="w-4 h-4 mr-2" />
                          Try Again
                        </Button>
                      </>
                    )}
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Contextual Usage Section */}
            <section>
              <h2 className="text-2xl font-bold text-brand-navy mb-6 font-merriweather">
                Learn from Real Conversation
              </h2>
              
              <Card className="bg-blue-50/50">
                <CardHeader>
                  <CardTitle>Student Conversation Excerpts</CardTitle>
                  <CardDescription>
                    See how these terms are used in natural conversation
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 bg-white rounded-lg">
                    <p className="leading-relaxed">
                      "I <span className="font-semibold text-brand-royal">booked</span> the flights 6 months ago and bought the extra{' '}
                      <span className="font-semibold text-brand-royal">insurance</span>. I have an independent annual travel{' '}
                      <span className="font-semibold text-brand-royal">insurance policy</span>."
                    </p>
                  </div>
                  
                  <div className="p-4 bg-white rounded-lg">
                    <p className="leading-relaxed">
                      "Insurance gives me <span className="font-semibold text-brand-royal">assurance</span> that if anything goes wrong I can{' '}
                      <span className="font-semibold text-brand-royal">claim</span> money for lost time or luggage."
                    </p>
                  </div>
                  
                  <div className="p-4 bg-white rounded-lg">
                    <p className="leading-relaxed">
                      "If you have a £250 <span className="font-semibold text-brand-royal">excess</span> in your policy, then when you{' '}
                      <span className="font-semibold text-brand-royal">make a claim</span>, you pay the first £250 and then the insurance company will pay the rest."
                    </p>
                  </div>
                  
                  <div className="p-4 bg-white rounded-lg">
                    <p className="leading-relaxed">
                      "They will try to <span className="font-semibold text-brand-royal">get out of paying a claim</span> any way they can."
                    </p>
                  </div>
                </CardContent>
              </Card>
            </section>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default InsuranceVocabulary;
