import React from 'react';
import { ShoppingBag, Coffee, Gamepad2, Car, Search } from 'lucide-react';

const transactions = [
    { id: '1', name: 'Starbucks', category: 'Food', amount: 240, date: 'Today, 10:30 AM', icon: <Coffee size={18} /> },
    { id: '2', name: 'PlayStation Store', category: 'Games', amount: 1500, date: 'Yesterday', icon: <Gamepad2 size={18} /> },
    { id: '3', name: 'Uber', category: 'Transport', amount: 180, date: 'Oct 24', icon: <Car size={18} /> },
    { id: '4', name: 'H&M', category: 'Shopping', amount: 890, date: 'Oct 22', icon: <ShoppingBag size={18} /> },
];

const SpendingScreen: React.FC = () => {
  return (
    <div className="p-6 space-y-8 pb-32">
        {/* Header */}
        <div className="text-center">
            <p className="text-slate-400 text-xs font-medium uppercase tracking-widest mb-1">Total Balance</p>
            <h1 className="text-3xl font-bold text-slate-900">₹4,250.00</h1>
            <div className="inline-flex items-center bg-olive-50 px-2 py-1 rounded-md mt-2">
                <div className="w-1.5 h-1.5 rounded-full bg-olive-500 mr-2 animate-pulse" />
                <span className="text-[10px] font-bold text-olive-700 tracking-wide uppercase">Secure Connection</span>
            </div>
        </div>

        {/* Metrics */}
        <div className="flex space-x-4">
             <div className="flex-1 bg-white p-4 rounded-2xl border border-slate-100 shadow-sm text-center">
                 <p className="text-2xl font-bold text-slate-800">₹860</p>
                 <p className="text-xs text-slate-500 mt-1">Remaining Budget</p>
             </div>
             <div className="flex-1 bg-white p-4 rounded-2xl border border-slate-100 shadow-sm text-center">
                 <p className="text-2xl font-bold text-red-500">62%</p>
                 <p className="text-xs text-slate-500 mt-1">Spent Monthly</p>
             </div>
        </div>

        {/* Banner */}
        <div className="bg-olive-600 rounded-2xl p-4 text-white flex items-center justify-between shadow-lg shadow-olive-500/20">
            <div>
                <h3 className="font-bold">Save First Reminder</h3>
                <p className="text-olive-100 text-xs mt-0.5">You are ₹120 away from your weekly goal.</p>
            </div>
            <div className="bg-white/20 p-2 rounded-full">
                <span className="text-lg">🐷</span>
            </div>
        </div>

        {/* Categories */}
        <div>
            <div className="flex justify-between items-center mb-4">
                <h3 className="font-bold text-slate-800">Top Categories</h3>
            </div>
            <div className="flex space-x-4 overflow-x-auto no-scrollbar pb-2">
                {['Food', 'Games', 'Transport', 'Shop'].map((cat, i) => (
                    <div key={cat} className="flex flex-col items-center space-y-2 min-w-[70px]">
                        <div className={`w-14 h-14 rounded-full flex items-center justify-center ${i === 0 ? 'bg-olive-100 text-olive-700' : 'bg-white border border-slate-100 text-slate-500'}`}>
                            {i === 0 ? <Coffee size={20}/> : i === 1 ? <Gamepad2 size={20}/> : i === 2 ? <Car size={20} /> : <ShoppingBag size={20} />}
                        </div>
                        <span className="text-xs font-medium text-slate-600">{cat}</span>
                    </div>
                ))}
            </div>
        </div>

        {/* Recent Activity */}
        <div>
            <div className="flex justify-between items-center mb-4">
                <h3 className="font-bold text-slate-800">Recent Activity</h3>
                <Search size={18} className="text-slate-400" />
            </div>
            <div className="space-y-4">
                {transactions.map(tx => (
                    <div key={tx.id} className="flex items-center justify-between bg-white p-3 rounded-2xl border border-slate-50 shadow-sm">
                        <div className="flex items-center space-x-4">
                            <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-700">
                                {tx.icon}
                            </div>
                            <div>
                                <h4 className="font-bold text-slate-800 text-sm">{tx.name}</h4>
                                <p className="text-xs text-slate-400">{tx.date}</p>
                            </div>
                        </div>
                        <span className="font-bold text-slate-900">-₹{tx.amount}</span>
                    </div>
                ))}
            </div>
        </div>
    </div>
  );
};

export default SpendingScreen;
