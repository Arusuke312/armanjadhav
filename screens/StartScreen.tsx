import React from 'react';
import { CreditCard, ChevronRight } from 'lucide-react';

interface StartScreenProps {
  onStart: () => void;
}

const StartScreen: React.FC<StartScreenProps> = ({ onStart }) => {
  return (
    <div className="h-screen w-full bg-slate-50 flex flex-col items-center justify-between p-8 relative overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-[-20%] right-[-20%] w-96 h-96 bg-olive-200 rounded-full blur-3xl opacity-30" />
      <div className="absolute bottom-[-10%] left-[-10%] w-72 h-72 bg-olive-300 rounded-full blur-3xl opacity-30" />

      <div className="w-full flex-1 flex flex-col items-center justify-center space-y-12 z-10">
        <div className="text-center space-y-2">
            <h1 className="text-olive-800 font-bold text-3xl tracking-tight">Instant UPI</h1>
            <p className="text-olive-600 font-medium tracking-widest text-xs uppercase">Smart Investing for Teens</p>
        </div>

        {/* 3D Card Visual Placeholder */}
        <div className="relative w-full aspect-[1.6/1] max-w-[320px]">
          <div className="absolute inset-0 bg-gradient-to-br from-olive-500 to-olive-700 rounded-3xl shadow-2xl transform rotate-[-10deg] translate-y-4 translate-x-4 opacity-50"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-black rounded-3xl shadow-2xl flex flex-col justify-between p-6 text-white transform transition-transform hover:scale-105 duration-500">
             <div className="flex justify-between items-start">
                 <CreditCard className="text-olive-400" size={32} />
                 <span className="font-mono text-sm opacity-60">DEBIT</span>
             </div>
             <div className="space-y-4">
                 <div className="flex space-x-3">
                     <div className="w-10 h-6 bg-yellow-400/80 rounded flex items-center justify-center">
                        <div className="w-6 h-4 border border-black/20 rounded-sm"></div>
                     </div>
                     <span className="font-mono text-lg tracking-widest opacity-90">•••• 8832</span>
                 </div>
                 <div className="flex justify-between items-end">
                     <div className="text-xs opacity-70">
                         <p>Card Holder</p>
                         <p className="font-semibold text-sm tracking-wide">ALEX JOHNSON</p>
                     </div>
                     <div className="text-olive-400 font-bold italic text-xl">VISA</div>
                 </div>
             </div>
          </div>
        </div>

        <div className="text-center space-y-4 max-w-xs">
            <h2 className="text-2xl font-bold text-slate-900">Grow your money, not just your spending.</h2>
            <p className="text-slate-500 text-sm leading-relaxed">
                Send money, scan QRs, and master your savings with bite-sized investment lessons powered by AI.
            </p>
        </div>
      </div>

      <div className="w-full space-y-4 z-10 mb-8">
        <button 
            onClick={onStart}
            className="w-full bg-olive-600 text-white font-bold py-4 rounded-2xl shadow-lg shadow-olive-500/30 flex items-center justify-center hover:bg-olive-700 transition-all active:scale-95"
        >
            Get Started <ChevronRight className="ml-2" size={20} />
        </button>
        <p className="text-center text-slate-500 text-sm">
            Already have an account? <span className="text-olive-600 font-semibold cursor-pointer">Login</span>
        </p>
      </div>
    </div>
  );
};

export default StartScreen;
