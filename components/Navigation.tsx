import React from 'react';
import { Home, PieChart, GraduationCap, Target, Settings } from 'lucide-react';
import { Tab } from '../types';

interface NavigationProps {
  activeTab: Tab;
  onSwitch: (tab: Tab) => void;
}

const Navigation: React.FC<NavigationProps> = ({ activeTab, onSwitch }) => {
  const navItems: { id: Tab; label: string; icon: React.ReactNode }[] = [
    { id: 'dashboard', label: 'Home', icon: <Home size={20} /> },
    { id: 'spending', label: 'Tracker', icon: <PieChart size={20} /> },
    { id: 'education', label: 'Learn', icon: <GraduationCap size={20} /> },
    { id: 'goals', label: 'Goals', icon: <Target size={20} /> },
    { id: 'controls', label: 'Controls', icon: <Settings size={20} /> },
  ];

  return (
    <div className="fixed bottom-0 w-full max-w-md bg-white border-t border-slate-100 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)] pb-6 pt-3 px-6 flex justify-between items-center z-50">
      {navItems.map((item) => (
        <button
          key={item.id}
          onClick={() => onSwitch(item.id)}
          className={`flex flex-col items-center space-y-1 transition-colors duration-200 ${
            activeTab === item.id ? 'text-olive-600 font-semibold' : 'text-slate-400 hover:text-slate-600'
          }`}
        >
          <div className={`p-1.5 rounded-xl ${activeTab === item.id ? 'bg-olive-50' : 'bg-transparent'}`}>
            {item.icon}
          </div>
          <span className="text-[10px] tracking-wide">{item.label}</span>
        </button>
      ))}
    </div>
  );
};

export default Navigation;
