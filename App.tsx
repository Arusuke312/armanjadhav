import React, { useState } from 'react';
import { Tab } from './types';
import StartScreen from './screens/StartScreen';
import DashboardScreen from './screens/DashboardScreen';
import SpendingScreen from './screens/SpendingScreen';
import EducationScreen from './screens/EducationScreen';
import GoalsScreen from './screens/GoalsScreen';
import ControlsScreen from './screens/ControlsScreen';
import Navigation from './components/Navigation';

const App: React.FC = () => {
  const [currentTab, setCurrentTab] = useState<Tab>('dashboard');
  const [isOnboarded, setIsOnboarded] = useState(false);

  const renderScreen = () => {
    switch (currentTab) {
      case 'dashboard': return <DashboardScreen />;
      case 'spending': return <SpendingScreen />;
      case 'education': return <EducationScreen />;
      case 'goals': return <GoalsScreen />;
      case 'controls': return <ControlsScreen />;
      default: return <DashboardScreen />;
    }
  };

  if (!isOnboarded) {
    return <StartScreen onStart={() => setIsOnboarded(true)} />;
  }

  return (
    <div className="min-h-screen w-full flex justify-center bg-slate-100">
      <div className="w-full max-w-md bg-slate-50 min-h-screen relative shadow-2xl">
        
        {/* Main Content Area */}
        <div className="h-full overflow-y-auto no-scrollbar">
            {renderScreen()}
        </div>

        {/* Bottom Navigation */}
        <Navigation activeTab={currentTab} onSwitch={setCurrentTab} />
      </div>
    </div>
  );
};

export default App;
