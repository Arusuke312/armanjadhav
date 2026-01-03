import React, { useState, useEffect } from 'react';
import { PlayCircle, FileText, Lock, Award, Sparkles, RefreshCcw } from 'lucide-react';
import { generateFinancialTip, generateQuizQuestion } from '../services/geminiService';

const EducationScreen: React.FC = () => {
  const [dailyTip, setDailyTip] = useState<string>("Loading your daily tip...");
  const [quiz, setQuiz] = useState<{question: string, options: string[], answer: string} | null>(null);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [quizState, setQuizState] = useState<'idle' | 'correct' | 'wrong'>('idle');

  useEffect(() => {
    loadContent();
  }, []);

  const loadContent = async () => {
    setDailyTip("Connecting to AI Coach...");
    const tip = await generateFinancialTip();
    setDailyTip(tip);
    
    const newQuiz = await generateQuizQuestion();
    setQuiz(newQuiz);
    setQuizState('idle');
    setSelectedOption(null);
  }

  const handleQuizAnswer = (option: string) => {
      if(!quiz) return;
      setSelectedOption(option);
      if(option === quiz.answer) {
          setQuizState('correct');
      } else {
          setQuizState('wrong');
      }
  }

  return (
    <div className="p-6 space-y-8 pb-32">
       {/* Header */}
       <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold text-slate-900">Smart Investing Academy</h2>
          <div className="bg-olive-100 text-olive-700 px-3 py-1 rounded-full text-xs font-bold flex items-center">
              <Award size={14} className="mr-1" /> Lvl 5
          </div>
       </div>

       {/* Featured Lesson */}
       <div className="bg-slate-900 rounded-3xl p-6 text-white relative overflow-hidden shadow-xl">
           <div className="absolute top-0 right-0 w-32 h-32 bg-olive-500 rounded-full blur-3xl opacity-20 transform translate-x-10 -translate-y-10"></div>
           <p className="text-olive-400 text-xs font-bold uppercase tracking-wider mb-2">Continue Learning</p>
           <h3 className="text-xl font-bold mb-4">Bite-sized Investment Lessons</h3>
           
           <div className="space-y-2">
               <div className="flex justify-between text-xs text-slate-400">
                   <span>Progress</span>
                   <span>65%</span>
               </div>
               <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                   <div className="h-full bg-olive-500 w-[65%]"></div>
               </div>
           </div>
           <button className="mt-6 w-full bg-white text-slate-900 py-3 rounded-xl font-bold text-sm hover:bg-slate-100 transition-colors">
               Resume Lesson
           </button>
       </div>

       {/* AI Gamification Section */}
       <div className="bg-gradient-to-br from-olive-50 to-white border border-olive-100 rounded-3xl p-5 shadow-sm">
            <div className="flex items-center space-x-2 mb-3">
                <Sparkles className="text-olive-500" size={20} />
                <h3 className="font-bold text-slate-800">Daily AI Coach</h3>
            </div>
            <div className="bg-white p-4 rounded-2xl border border-olive-50 mb-4">
                <p className="text-slate-600 text-sm italic">"{dailyTip}"</p>
            </div>
            
            {quiz && (
                <div className="space-y-3">
                    <p className="font-medium text-slate-800 text-sm">{quiz.question}</p>
                    <div className="space-y-2">
                        {quiz.options.map(opt => (
                            <button 
                                key={opt}
                                onClick={() => handleQuizAnswer(opt)}
                                disabled={quizState !== 'idle'}
                                className={`w-full text-left px-4 py-3 rounded-xl text-sm transition-all border ${
                                    selectedOption === opt 
                                        ? quizState === 'correct' 
                                            ? 'bg-green-100 border-green-200 text-green-800'
                                            : 'bg-red-100 border-red-200 text-red-800'
                                        : 'bg-white border-slate-100 text-slate-600 hover:bg-slate-50'
                                }`}
                            >
                                {opt}
                            </button>
                        ))}
                    </div>
                    {quizState === 'correct' && <p className="text-green-600 text-xs font-bold text-center animate-bounce">Correct! +50 Points</p>}
                </div>
            )}
             <button onClick={loadContent} className="mt-4 flex items-center justify-center w-full py-2 text-xs text-olive-600 font-medium hover:text-olive-700">
                <RefreshCcw size={12} className="mr-1" /> Refresh AI Content
            </button>
       </div>

       {/* Content List */}
       <div className="space-y-4">
           <h3 className="font-bold text-slate-800">Library</h3>
           <div className="flex items-center p-4 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow cursor-pointer">
               <div className="w-12 h-12 bg-blue-50 text-blue-500 rounded-xl flex items-center justify-center mr-4">
                   <PlayCircle size={24} />
               </div>
               <div>
                   <h4 className="font-bold text-slate-800 text-sm">Basics of Mutual Funds</h4>
                   <p className="text-xs text-slate-500">Video • 5 mins</p>
               </div>
           </div>
           <div className="flex items-center p-4 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow cursor-pointer">
               <div className="w-12 h-12 bg-purple-50 text-purple-500 rounded-xl flex items-center justify-center mr-4">
                   <FileText size={24} />
               </div>
               <div>
                   <h4 className="font-bold text-slate-800 text-sm">How Compound Interest Works</h4>
                   <p className="text-xs text-slate-500">Article • 3 mins read</p>
               </div>
           </div>
       </div>

       {/* Expert Section (Locked) */}
       <div className="bg-slate-100 rounded-2xl p-4 flex items-center justify-between opacity-80">
           <div className="flex items-center space-x-3">
                <div className="p-2 bg-slate-200 rounded-lg">
                    <Lock size={16} className="text-slate-500" />
                </div>
                <div>
                    <h4 className="font-bold text-slate-700 text-sm">Premium Expert Advice</h4>
                    <p className="text-xs text-slate-500">Unlock with Premium</p>
                </div>
           </div>
       </div>
    </div>
  );
};

export default EducationScreen;
