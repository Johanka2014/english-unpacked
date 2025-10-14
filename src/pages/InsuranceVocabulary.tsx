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
    term: 'Actuary',
    definition: 'A person who calculates risks for insurance companies',
    exampleSentence: 'The actuary analyzed the data to determine appropriate premium rates.',
    category: 'advanced'
  },
  {
    term: 'Assessor',
    definition: 'A person who calculates the value of something (e.g., a building, car, etc.)',
    exampleSentence: 'The assessor came to evaluate the damage to my property.',
    category: 'advanced'
  },
  {
    term: 'Claim',
    definition: 'An application for payment under an insurance policy',
    exampleSentence: 'I need to make a claim for the damage to my vehicle.',
    category: 'basic'
  },
  {
    term: 'Comprehensive',
    definition: 'All-inclusive insurance providing complete protection',
    exampleSentence: 'I opted for comprehensive coverage to ensure I am fully protected.',
    category: 'advanced'
  },
  {
    term: 'Consequential Loss',
    definition: 'A loss that happens as a consequence of or as a result of another',
    exampleSentence: 'The fire caused consequential losses including lost business revenue.',
    category: 'advanced'
  },
  {
    term: 'Cover (UK)',
    definition: 'The protection given by an insurance policy (e.g., public liability cover)',
    exampleSentence: 'I am not sure if my insurance will cover that.',
    category: 'uk-specific'
  },
  {
    term: "Employer's Liability",
    definition: 'Liability or responsibility of a firm for damage caused to one of its employees',
    exampleSentence: "Employers must have employer's liability insurance by law in the UK.",
    category: 'advanced'
  },
  {
    term: 'Goods in Transit',
    definition: 'Property, merchandise or any goods in the process of being transported',
    exampleSentence: 'The goods in transit insurance covered the shipment during delivery.',
    category: 'advanced'
  },
  {
    term: 'Insurance Broker',
    definition: 'Agent who arranges insurance; middleman between insurer and policyholder',
    exampleSentence: 'Go to an insurance broker and see if you can get a better deal.',
    category: 'basic'
  },
  {
    term: 'Liability',
    definition: 'The state of being liable; anything for which a person is liable',
    exampleSentence: 'His insurance company told him not to admit liability, even though it was clearly his fault.',
    category: 'basic'
  },
  {
    term: 'Liable',
    definition: 'Legally obliged to pay for damage, injury etc; responsible',
    exampleSentence: 'The company was found liable for the accident.',
    category: 'advanced'
  },
  {
    term: 'Loss',
    definition: 'Death, injury, damage etc that is the basis for a claim',
    exampleSentence: 'The policy covers loss of personal belongings during travel.',
    category: 'basic'
  },
  {
    term: 'Loss Adjuster',
    definition: 'A person who assesses the amount of compensation arising from a claim',
    exampleSentence: 'The loss adjuster will inspect the damage before approving the payout.',
    category: 'advanced'
  },
  {
    term: 'Policy',
    definition: 'A contract of insurance (e.g., a product liability policy)',
    exampleSentence: 'I have an independent annual travel insurance policy.',
    category: 'basic'
  },
  {
    term: 'Policyholder',
    definition: 'The person to whom an insurance policy is issued',
    exampleSentence: 'As the policyholder, you have certain rights and responsibilities.',
    category: 'basic'
  },
  {
    term: 'Premium',
    definition: 'A payment, usually monthly, yearly etc, for an insurance policy',
    exampleSentence: "You're allowed 30 days' grace for the payment of the renewal premium.",
    category: 'basic'
  },
  {
    term: 'Product Liability',
    definition: 'Liability or responsibility of a firm for damage caused by one of its products',
    exampleSentence: 'The manufacturer has product liability insurance for any defects.',
    category: 'advanced'
  },
  {
    term: 'Public Liability',
    definition: 'Responsibility of a firm for damage caused to a member of the public',
    exampleSentence: 'My insurance company offers a wide range of public liability cover.',
    category: 'advanced'
  },
  {
    term: 'Reinsurance',
    definition: 'The insuring of a risk by one insurance company with another',
    exampleSentence: 'Large insurers use reinsurance to spread their risk.',
    category: 'advanced'
  },
  {
    term: 'Risk',
    definition: 'Chance or possibility of injury, loss etc; person or thing causing risk',
    exampleSentence: 'Insurance companies can be considered as professional risk takers.',
    category: 'basic'
  },
  {
    term: 'Excess (UK) / Deductible (US)',
    definition: 'The amount you have to pay before the insurance company pays the rest of a claim',
    exampleSentence: 'If you have a £250 excess in your policy, you pay the first £250 and then the insurance company will pay the rest.',
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

interface PassiveVoiceQuestion {
  number: number;
  text: string;
  verb: string;
  correctAnswer: string;
}

const passiveVoiceQuestions: PassiveVoiceQuestion[] = [
  { number: 1, text: "Virtually anything", verb: "can / insure", correctAnswer: "can be insured" },
  { number: 2, text: "most celebrated insurance company", verb: "ask", correctAnswer: "has been asked" },
  { number: 3, text: "the very first car", verb: "insure", correctAnswer: "to be insured" },
  { number: 4, text: "", verb: "cover", correctAnswer: "was covered" },
  { number: 5, text: "motor policies", verb: "write", correctAnswer: "were written" },
  { number: 6, text: "her famous legs", verb: "might / injure", correctAnswer: "might be injured" },
  { number: 7, text: "", verb: "insure", correctAnswer: "were insured" },
  { number: 8, text: "Bruce Springsteen's", verb: "believe", correctAnswer: "is believed" }
];

const passiveVoiceText = {
  title: "Lloyd's: Insuring the famous and the bizarre",
  paragraphs: [
    {
      before: "Virtually anything (1) ",
      blank: 1,
      after: " at Lloyd's. In fact, over the last hundred years London's most celebrated insurance company (2) ",
      blank2: 2,
      after2: " to issue some of the most bizarre policies ever! Here are just a few."
    },
    {
      before: "Car insurance is big business these days. But the very first car (3) ",
      blank: 3,
      after: " at Lloyd's (4) ",
      blank2: 4,
      after2: " by a marine policy. Cars were such a novelty in those days, motor policies (5) ",
      blank3: 5,
      after3: " on the basis that cars were just ships that sailed on the land!"
    },
    {
      before: "Actors have always been paranoid. Hollywood film idol, Betty Grable, was so worried her famous legs (6) ",
      blank: 6,
      after: " during filming, they (7) ",
      blank2: 7,
      after2: " by Lloyd's for a million dollars."
    },
    {
      before: "Multi-millionaire rock stars worry too. Bob Dylan, Eric Clapton, Michael Jackson, Elton John, Rod Stewart and the Rolling Stones have all insured their voices. Bruce Springsteen's (8) ",
      blank: 8,
      after: " to be worth £3.5 million."
    }
  ]
};

const InsuranceVocabulary = () => {
  const [flippedCards, setFlippedCards] = useState<Set<number>>(new Set());
  const [fillInAnswers, setFillInAnswers] = useState<{ [key: number]: string }>({});
  const [fillInResults, setFillInResults] = useState<{ [key: number]: boolean | null }>({});
  const [quizAnswers, setQuizAnswers] = useState<{ [key: number]: number }>({});
  const [showQuizResults, setShowQuizResults] = useState(false);
  const [advancedAnswers, setAdvancedAnswers] = useState<{ [key: number]: string }>({});
  const [showAdvancedResults, setShowAdvancedResults] = useState(false);
  const [passiveAnswers, setPassiveAnswers] = useState<{ [key: number]: string }>({});
  const [showPassiveResults, setShowPassiveResults] = useState(false);

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

  const submitPassiveQuiz = () => {
    setShowPassiveResults(true);
  };

  const resetPassiveQuiz = () => {
    setPassiveAnswers({});
    setShowPassiveResults(false);
  };

  const passiveScore = showPassiveResults
    ? passiveVoiceQuestions.reduce((score, q) => {
        const userAnswer = passiveAnswers[q.number]?.toLowerCase().trim();
        const correctAnswer = q.correctAnswer.toLowerCase();
        return score + (userAnswer === correctAnswer ? 1 : 0);
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

            {/* Passive Voice Practice Section */}
            <section className="mb-16">
              <div className="flex items-center gap-2 mb-6">
                <Target className="w-5 h-5 text-brand-royal" />
                <h2 className="text-2xl font-bold text-brand-navy font-merriweather">
                  Practice 3: Passive Voice
                </h2>
              </div>
              
              <Card>
                <CardHeader>
                  <CardTitle>{passiveVoiceText.title}</CardTitle>
                  <CardDescription>
                    Complete the article using the correct passive form of the verbs in brackets
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Paragraph 1 */}
                  <div className="space-y-4 p-4 bg-slate-50 rounded-lg">
                    <p className="leading-relaxed text-brand-navy">
                      Virtually anything (1)
                      <input
                        type="text"
                        placeholder="(can / insure)"
                        value={passiveAnswers[1] || ''}
                        onChange={(e) => setPassiveAnswers({ ...passiveAnswers, 1: e.target.value })}
                        className={`mx-2 px-3 py-1 border rounded-md w-48 ${
                          showPassiveResults
                            ? passiveAnswers[1]?.toLowerCase().trim() === passiveVoiceQuestions[0].correctAnswer.toLowerCase()
                              ? 'border-green-500 bg-green-50'
                              : 'border-red-500 bg-red-50'
                            : 'border-border'
                        }`}
                        disabled={showPassiveResults}
                      />
                      at Lloyd's. In fact, over the last hundred years London's most celebrated insurance company (2)
                      <input
                        type="text"
                        placeholder="(ask)"
                        value={passiveAnswers[2] || ''}
                        onChange={(e) => setPassiveAnswers({ ...passiveAnswers, 2: e.target.value })}
                        className={`mx-2 px-3 py-1 border rounded-md w-48 ${
                          showPassiveResults
                            ? passiveAnswers[2]?.toLowerCase().trim() === passiveVoiceQuestions[1].correctAnswer.toLowerCase()
                              ? 'border-green-500 bg-green-50'
                              : 'border-red-500 bg-red-50'
                            : 'border-border'
                        }`}
                        disabled={showPassiveResults}
                      />
                      to issue some of the most bizarre policies ever! Here are just a few.
                    </p>
                  </div>

                  {/* Paragraph 2 */}
                  <div className="space-y-4 p-4 bg-slate-50 rounded-lg">
                    <p className="leading-relaxed text-brand-navy">
                      Car insurance is big business these days. But the very first car (3)
                      <input
                        type="text"
                        placeholder="(insure)"
                        value={passiveAnswers[3] || ''}
                        onChange={(e) => setPassiveAnswers({ ...passiveAnswers, 3: e.target.value })}
                        className={`mx-2 px-3 py-1 border rounded-md w-48 ${
                          showPassiveResults
                            ? passiveAnswers[3]?.toLowerCase().trim() === passiveVoiceQuestions[2].correctAnswer.toLowerCase()
                              ? 'border-green-500 bg-green-50'
                              : 'border-red-500 bg-red-50'
                            : 'border-border'
                        }`}
                        disabled={showPassiveResults}
                      />
                      at Lloyd's (4)
                      <input
                        type="text"
                        placeholder="(cover)"
                        value={passiveAnswers[4] || ''}
                        onChange={(e) => setPassiveAnswers({ ...passiveAnswers, 4: e.target.value })}
                        className={`mx-2 px-3 py-1 border rounded-md w-48 ${
                          showPassiveResults
                            ? passiveAnswers[4]?.toLowerCase().trim() === passiveVoiceQuestions[3].correctAnswer.toLowerCase()
                              ? 'border-green-500 bg-green-50'
                              : 'border-red-500 bg-red-50'
                            : 'border-border'
                        }`}
                        disabled={showPassiveResults}
                      />
                      by a marine policy. Cars were such a novelty in those days, motor policies (5)
                      <input
                        type="text"
                        placeholder="(write)"
                        value={passiveAnswers[5] || ''}
                        onChange={(e) => setPassiveAnswers({ ...passiveAnswers, 5: e.target.value })}
                        className={`mx-2 px-3 py-1 border rounded-md w-48 ${
                          showPassiveResults
                            ? passiveAnswers[5]?.toLowerCase().trim() === passiveVoiceQuestions[4].correctAnswer.toLowerCase()
                              ? 'border-green-500 bg-green-50'
                              : 'border-red-500 bg-red-50'
                            : 'border-border'
                        }`}
                        disabled={showPassiveResults}
                      />
                      on the basis that cars were just ships that sailed on the land!
                    </p>
                  </div>

                  {/* Paragraph 3 */}
                  <div className="space-y-4 p-4 bg-slate-50 rounded-lg">
                    <p className="leading-relaxed text-brand-navy">
                      Actors have always been paranoid. Hollywood film idol, Betty Grable, was so worried her famous legs (6)
                      <input
                        type="text"
                        placeholder="(might / injure)"
                        value={passiveAnswers[6] || ''}
                        onChange={(e) => setPassiveAnswers({ ...passiveAnswers, 6: e.target.value })}
                        className={`mx-2 px-3 py-1 border rounded-md w-48 ${
                          showPassiveResults
                            ? passiveAnswers[6]?.toLowerCase().trim() === passiveVoiceQuestions[5].correctAnswer.toLowerCase()
                              ? 'border-green-500 bg-green-50'
                              : 'border-red-500 bg-red-50'
                            : 'border-border'
                        }`}
                        disabled={showPassiveResults}
                      />
                      during filming, they (7)
                      <input
                        type="text"
                        placeholder="(insure)"
                        value={passiveAnswers[7] || ''}
                        onChange={(e) => setPassiveAnswers({ ...passiveAnswers, 7: e.target.value })}
                        className={`mx-2 px-3 py-1 border rounded-md w-48 ${
                          showPassiveResults
                            ? passiveAnswers[7]?.toLowerCase().trim() === passiveVoiceQuestions[6].correctAnswer.toLowerCase()
                              ? 'border-green-500 bg-green-50'
                              : 'border-red-500 bg-red-50'
                            : 'border-border'
                        }`}
                        disabled={showPassiveResults}
                      />
                      by Lloyd's for a million dollars.
                    </p>
                  </div>

                  {/* Paragraph 4 */}
                  <div className="space-y-4 p-4 bg-slate-50 rounded-lg">
                    <p className="leading-relaxed text-brand-navy">
                      Multi-millionaire rock stars worry too. Bob Dylan, Eric Clapton, Michael Jackson, Elton John, Rod Stewart and the Rolling Stones have all insured their voices. Bruce Springsteen's (8)
                      <input
                        type="text"
                        placeholder="(believe)"
                        value={passiveAnswers[8] || ''}
                        onChange={(e) => setPassiveAnswers({ ...passiveAnswers, 8: e.target.value })}
                        className={`mx-2 px-3 py-1 border rounded-md w-48 ${
                          showPassiveResults
                            ? passiveAnswers[8]?.toLowerCase().trim() === passiveVoiceQuestions[7].correctAnswer.toLowerCase()
                              ? 'border-green-500 bg-green-50'
                              : 'border-red-500 bg-red-50'
                            : 'border-border'
                        }`}
                        disabled={showPassiveResults}
                      />
                      to be worth £3.5 million.
                    </p>
                  </div>

                  {/* Answer Key (shown after submission) */}
                  {showPassiveResults && (
                    <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
                      <h3 className="font-semibold text-brand-navy mb-3">Answer Key:</h3>
                      <div className="grid md:grid-cols-2 gap-2 text-sm">
                        {passiveVoiceQuestions.map((q) => (
                          <div key={q.number} className="flex items-center gap-2">
                            <span className="font-semibold">({q.number})</span>
                            <span className="text-muted-foreground">{q.verb}:</span>
                            <span className="font-semibold text-brand-royal">{q.correctAnswer}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  <div className="mt-6 flex items-center gap-4">
                    {!showPassiveResults ? (
                      <Button
                        onClick={submitPassiveQuiz}
                        disabled={Object.keys(passiveAnswers).length !== passiveVoiceQuestions.length}
                      >
                        Check Answers
                      </Button>
                    ) : (
                      <>
                        <div className="flex items-center gap-2">
                          <span className="text-lg font-semibold text-brand-navy">
                            Score: {passiveScore} / {passiveVoiceQuestions.length}
                          </span>
                          {passiveScore === passiveVoiceQuestions.length && (
                            <Badge className="bg-green-600">Perfect!</Badge>
                          )}
                          {passiveScore >= passiveVoiceQuestions.length * 0.7 && passiveScore < passiveVoiceQuestions.length && (
                            <Badge className="bg-blue-600">Great Job!</Badge>
                          )}
                        </div>
                        <Button onClick={resetPassiveQuiz} variant="outline">
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
