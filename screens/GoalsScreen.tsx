import React from 'react';
import { Plus, Edit2, Zap, Trophy, Smartphone, Footprints, Music } from 'lucide-react';

const GoalsScreen: React.FC = () => {
  return (
    <div className="p-6 space-y-8 pb-32">
        {/* Stats Header */}
        <div className="grid grid-cols-2 gap-4">
            <div className="col-span-2 bg-slate-900 text-white p-6 rounded-3xl shadow-xl">
                <p className="text-slate-400 text-xs font-bold uppercase tracking-wider mb-2">Total Savings</p>
                <div className="flex items-end justify-between">
                    <h1 className="text-4xl font-bold">₹12,450</h1>
                    <span className="text-olive-400 text-sm font-bold mb-1">+ ₹1,200 this month</span>
                </div>
                <div className="mt-6">
                    <div className="flex justify-between text-xs mb-2">
                        <span className="text-slate-400">Total Goal Progress</span>
                        <span className="text-white font-bold">70%</span>
                    </div>
                    <div className="h-3 w-full bg-slate-800 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-olive-600 to-olive-400 w-[70%]"></div>
                    </div>
                </div>
            </div>
        </div>

        {/* Gamification Status */}
        <div className="bg-white border border-slate-100 rounded-2xl p-4 flex items-center justify-between shadow-sm">
            <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center text-orange-500">
                    <Zap size={20} fill="currentColor" />
                </div>
                <div>
                    <h4 className="font-bold text-slate-800 text-sm">7 Day Streak!</h4>
                    <p className="text-xs text-slate-500">Keep saving to maintain streak</p>
                </div>
            </div>
            <div className="text-right">
                <p className="text-xs font-bold text-slate-800">Level 5</p>
                <p className="text-[10px] text-slate-400">68% to Level 6</p>
            </div>
        </div>

        {/* Active Goals */}
        <div className="space-y-4">
            <div className="flex justify-between items-center">
                <h3 className="font-bold text-slate-800">Active Goals</h3>
                <button className="text-olive-600 text-xs font-bold flex items-center">
                    <Plus size={14} className="mr-1" /> New Goal
                </button>
            </div>

            {/* Goal 1 */}
            <div className="bg-white p-5 rounded-3xl border border-slate-100 shadow-sm relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                    <Smartphone size={100} />
                </div>
                <div className="relative z-10">
                    <div className="flex justify-between items-start mb-4">
                        <div className="w-12 h-12 bg-blue-50 text-blue-500 rounded-2xl flex items-center justify-center">
                            <Smartphone size={24} />
                        </div>
                        <button className="p-2 hover:bg-slate-50 rounded-full text-slate-400 transition-colors">
                            <Edit2 size={16} />
                        </button>
                    </div>
                    <h4 className="font-bold text-lg text-slate-900">New Smartphone</h4>
                    <p className="text-xs text-slate-500 mb-4">Target: Dec 25, 2024</p>
                    
                    <div className="flex justify-between items-end mb-2">
                         <span className="text-2xl font-bold text-slate-800">₹15,000</span>
                         <span className="text-xs text-slate-400 font-medium mb-1">of ₹25,000</span>
                    </div>
                    <div className="h-2.5 w-full bg-slate-100 rounded-full overflow-hidden">
                        <div className="h-full bg-blue-500 w-[60%] rounded-full"></div>
                    </div>
                    
                    <div className="mt-4 flex space-x-2">
                        <button className="flex-1 py-2 rounded-xl bg-slate-900 text-white text-xs font-bold">Add Funds</button>
                    </div>
                </div>
            </div>

             {/* Goal 2 */}
             <div className="bg-white p-5 rounded-3xl border border-slate-100 shadow-sm relative overflow-hidden">
                 <div className="absolute top-0 right-0 p-4 opacity-5">
                    <Footprints size={100} />
                </div>
                <div className="relative z-10 flex items-center space-x-4">
                    <div className="w-12 h-12 bg-purple-50 text-purple-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                        <Footprints size={24} />
                    </div>
                    <div className="flex-1">
                        <h4 className="font-bold text-slate-900">New Kicks</h4>
                        <div className="h-1.5 w-full bg-slate-100 rounded-full mt-2 overflow-hidden">
                            <div className="h-full bg-purple-500 w-[30%]"></div>
                        </div>
                        <div className="flex justify-between mt-1">
                             <span className="text-[10px] text-slate-400">₹2,400 / ₹8,000</span>
                        </div>
                    </div>
                </div>
             </div>

             {/* Goal 3 */}
             <div className="bg-white p-5 rounded-3xl border border-slate-100 shadow-sm relative overflow-hidden">
                 <div className="absolute top-0 right-0 p-4 opacity-5">
                    <Music size={100} />
                </div>
                <div className="relative z-10 flex items-center space-x-4">
                    <div className="w-12 h-12 bg-pink-50 text-pink-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                        <Music size={24} />
                    </div>
                    <div className="flex-1">
                        <h4 className="font-bold text-slate-900">Summer Fest</h4>
                        <div className="h-1.5 w-full bg-slate-100 rounded-full mt-2 overflow-hidden">
                            <div className="h-full bg-pink-500 w-[15%]"></div>
                        </div>
                        <div className="flex justify-between mt-1">
                             <span className="text-[10px] text-slate-400">₹450 / ₹3,000</span>
                        </div>
                    </div>
                </div>
             </div>
        </div>
    </div>
  );
};

export default GoalsScreen;
