import React, { useState } from 'react';
import { Calendar, History, PauseCircle, Send, Check, X, Globe, DollarSign, Wifi } from 'lucide-react';

const ControlsScreen: React.FC = () => {
    const [gamingLimit, setGamingLimit] = useState(50);
    const [foodLimit, setFoodLimit] = useState(75);

  return (
    <div className="p-6 space-y-8 pb-32">
        
        {/* Allowance Header */}
        <div className="bg-olive-600 rounded-3xl p-6 text-white shadow-lg shadow-olive-500/30">
            <p className="text-olive-200 text-xs font-bold uppercase tracking-wider mb-1">Current Allowance</p>
            <h1 className="text-3xl font-bold">₹5,000<span className="text-lg font-normal text-olive-200">/mo</span></h1>
            <div className="flex items-center mt-4 space-x-2 text-sm bg-olive-700/50 w-fit px-3 py-1.5 rounded-lg border border-olive-500/30">
                <Calendar size={14} />
                <span>Next payout: Mon, Jan 2026</span>
            </div>
            
            {/* Quick Actions */}
            <div className="grid grid-cols-4 gap-2 mt-6">
                <button className="flex flex-col items-center space-y-2">
                    <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                        <Calendar size={18} />
                    </div>
                    <span className="text-[10px] opacity-80">Edit</span>
                </button>
                <button className="flex flex-col items-center space-y-2">
                    <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                        <Send size={18} />
                    </div>
                    <span className="text-[10px] opacity-80">Bonus</span>
                </button>
                <button className="flex flex-col items-center space-y-2">
                    <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                        <PauseCircle size={18} />
                    </div>
                    <span className="text-[10px] opacity-80">Pause</span>
                </button>
                <button className="flex flex-col items-center space-y-2">
                    <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                        <History size={18} />
                    </div>
                    <span className="text-[10px] opacity-80">History</span>
                </button>
            </div>
        </div>

        {/* Pending Requests */}
        <div>
            <h3 className="font-bold text-slate-800 mb-4">Pending Requests</h3>
            <div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm flex items-center justify-between">
                <div>
                    <h4 className="font-bold text-slate-900 text-sm">Roblox Premium</h4>
                    <p className="text-xs text-slate-500">₹499/month subscription</p>
                </div>
                <div className="flex space-x-2">
                    <button className="p-2 bg-red-50 text-red-500 rounded-full hover:bg-red-100">
                        <X size={18} />
                    </button>
                    <button className="p-2 bg-green-50 text-green-500 rounded-full hover:bg-green-100">
                        <Check size={18} />
                    </button>
                </div>
            </div>
        </div>

        {/* Spending Limits */}
        <div>
            <h3 className="font-bold text-slate-800 mb-4">Category Limits</h3>
            <div className="space-y-6 bg-white p-5 rounded-3xl border border-slate-100 shadow-sm">
                
                {/* Gaming Slider */}
                <div>
                    <div className="flex justify-between text-sm mb-2">
                        <span className="text-slate-600 font-medium">Gaming</span>
                        <span className="text-slate-900 font-bold">₹{gamingLimit * 100}</span>
                    </div>
                    <input 
                        type="range" 
                        min="0" 
                        max="100" 
                        value={gamingLimit} 
                        onChange={(e) => setGamingLimit(Number(e.target.value))}
                        className="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-olive-500"
                    />
                </div>

                {/* Food Slider */}
                <div>
                    <div className="flex justify-between text-sm mb-2">
                        <span className="text-slate-600 font-medium">Food & Dining</span>
                        <span className="text-slate-900 font-bold">₹{foodLimit * 100}</span>
                    </div>
                    <input 
                        type="range" 
                        min="0" 
                        max="100" 
                        value={foodLimit} 
                        onChange={(e) => setFoodLimit(Number(e.target.value))}
                        className="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-olive-500"
                    />
                </div>

            </div>
        </div>

        {/* Permissions */}
        <div className="space-y-3">
             <h3 className="font-bold text-slate-800">Card Permissions</h3>
             {[
                 { label: 'Online Transactions', icon: <Wifi size={16} />, active: true },
                 { label: 'ATM Withdrawal', icon: <DollarSign size={16} />, active: false },
                 { label: 'International Use', icon: <Globe size={16} />, active: false },
             ].map((perm, idx) => (
                 <div key={idx} className="flex items-center justify-between bg-white p-4 rounded-2xl border border-slate-100 shadow-sm">
                     <div className="flex items-center space-x-3 text-slate-700">
                         <div className="w-8 h-8 bg-slate-50 rounded-lg flex items-center justify-center">
                             {perm.icon}
                         </div>
                         <span className="text-sm font-medium">{perm.label}</span>
                     </div>
                     <div className={`w-10 h-6 rounded-full p-1 cursor-pointer transition-colors ${perm.active ? 'bg-olive-500' : 'bg-slate-200'}`}>
                         <div className={`w-4 h-4 bg-white rounded-full shadow-sm transform transition-transform ${perm.active ? 'translate-x-4' : ''}`}></div>
                     </div>
                 </div>
             ))}
        </div>
    </div>
  );
};

export default ControlsScreen;
