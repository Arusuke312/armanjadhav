import React from 'react';
import { Bell, ShieldCheck, ArrowUpRight, Wallet, TrendingUp, Target } from 'lucide-react';
import { Cell, Pie, PieChart, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Food', value: 400, color: '#7a9629' }, // Olive 500
  { name: 'Travel', value: 300, color: '#98b33e' }, // Olive 400
  { name: 'Subs', value: 300, color: '#b4c866' }, // Olive 300
  { name: 'Edu', value: 200, color: '#d0dc99' }, // Olive 200
];

const DashboardScreen: React.FC = () => {
  return (
    <div className="p-6 space-y-8 pb-32">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <p className="text-slate-500 text-sm">Welcome Back,</p>
          <h2 className="text-2xl font-bold text-slate-900">Alex Johnson</h2>
        </div>
        <div className="p-2 bg-white rounded-full shadow-sm border border-slate-100">
            <Bell size={20} className="text-slate-600" />
        </div>
      </div>

      {/* Main Balance */}
      <div className="bg-slate-900 text-white p-6 rounded-3xl shadow-xl relative overflow-hidden">
        <div className="absolute right-0 top-0 p-4 opacity-10">
            <Wallet size={120} />
        </div>
        <div className="relative z-10">
            <div className="flex items-center space-x-2 text-slate-300 mb-2">
                <ShieldCheck size={14} className="text-olive-400" />
                <span className="text-xs font-medium tracking-wide">SECURE INTEGRATION</span>
            </div>
            <h1 className="text-4xl font-bold tracking-tight">₹4,250.00</h1>
            <div className="mt-6 flex space-x-4">
                <button className="flex-1 bg-olive-500 hover:bg-olive-600 text-white py-2.5 rounded-xl font-semibold text-sm transition-colors flex items-center justify-center">
                    Add Money
                </button>
                <button className="flex-1 bg-slate-800 hover:bg-slate-700 text-white py-2.5 rounded-xl font-semibold text-sm transition-colors flex items-center justify-center">
                    Scan QR
                </button>
            </div>
        </div>
      </div>

      {/* Monthly Spending Overview */}
      <div className="bg-white p-5 rounded-3xl border border-slate-100 shadow-sm">
        <div className="flex justify-between items-end mb-4">
            <div>
                <h3 className="font-bold text-slate-800">Monthly Spending</h3>
                <p className="text-olive-600 text-xs font-semibold mt-1">Budget Remaining: 78%</p>
            </div>
            <div className="text-xs text-slate-400">Oct 2023</div>
        </div>
        
        <div className="flex items-center space-x-4">
            <div className="h-24 w-24 relative">
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                    <Pie
                        data={data}
                        innerRadius={30}
                        outerRadius={45}
                        paddingAngle={5}
                        dataKey="value"
                        stroke="none"
                    >
                        {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                    </Pie>
                    </PieChart>
                </ResponsiveContainer>
                <div className="absolute inset-0 flex items-center justify-center text-xs font-bold text-slate-400">
                    22%
                </div>
            </div>
            <div className="flex-1 grid grid-cols-2 gap-2">
                {data.map(d => (
                    <div key={d.name} className="flex items-center space-x-1.5">
                        <div className="w-2 h-2 rounded-full" style={{backgroundColor: d.color}} />
                        <span className="text-xs text-slate-500 font-medium">{d.name}</span>
                    </div>
                ))}
            </div>
        </div>
      </div>

      {/* Savings Stats */}
      <div className="flex space-x-4">
          <div className="flex-1 bg-olive-50 p-4 rounded-3xl border border-olive-100">
              <div className="p-2 bg-olive-100 w-fit rounded-lg mb-3">
                  <TrendingUp size={18} className="text-olive-700" />
              </div>
              <p className="text-xs text-olive-600 font-medium">This Month</p>
              <p className="text-xl font-bold text-olive-800">+ ₹86 Saved</p>
          </div>
          <div className="flex-1 bg-white p-4 rounded-3xl border border-slate-100">
             <div className="p-2 bg-slate-100 w-fit rounded-lg mb-3">
                  <Target size={18} className="text-slate-700" />
              </div>
              <p className="text-xs text-slate-500 font-medium">Goal Target</p>
              <p className="text-xl font-bold text-slate-800">60% Reached</p>
          </div>
      </div>

      {/* Promo */}
      <div className="bg-gradient-to-r from-slate-900 to-slate-800 p-5 rounded-3xl text-white flex justify-between items-center shadow-lg">
          <div>
              <p className="text-olive-400 text-xs font-bold uppercase tracking-wider mb-1">PRO</p>
              <h3 className="font-bold text-lg leading-tight">Expert Advice</h3>
              <p className="text-slate-400 text-xs mt-1">Unlock premium tips.</p>
          </div>
          <button className="bg-white text-slate-900 px-4 py-2 rounded-xl text-xs font-bold hover:bg-slate-100">
              Upgrade
          </button>
      </div>

      {/* Quick Goals */}
      <div>
          <h3 className="font-bold text-slate-800 mb-4">Quick Goals</h3>
          <div className="space-y-3">
              {[
                  { name: 'Smartphone', current: 450, target: 850, color: 'bg-olive-500' },
                  { name: 'Summer Trip', current: 200, target: 1500, color: 'bg-yellow-500' }
              ].map(goal => (
                  <div key={goal.name} className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm">
                      <div className="flex justify-between text-sm font-semibold mb-2">
                          <span className="text-slate-700">{goal.name}</span>
                          <span className="text-slate-500">₹{goal.current} / ₹{goal.target}</span>
                      </div>
                      <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                          <div 
                            className={`h-full ${goal.color}`} 
                            style={{ width: `${(goal.current / goal.target) * 100}%` }}
                          />
                      </div>
                  </div>
              ))}
          </div>
      </div>

    </div>
  );
};

export default DashboardScreen;