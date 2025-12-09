import { Sun, Utensils, Moon } from 'lucide-react';
import type { MealTime, Theme, Tab } from '../types';

interface BottomNavProps {
  currentTab: MealTime;
  setTab: (tab: MealTime) => void;
  theme: Theme;
}

export const BottomNav = ({ currentTab, setTab, theme }: BottomNavProps) => {
  const tabs: Tab[] = [
    { id: 'lunch', label: '점심 추천', icon: Sun },
    { id: 'dinner', label: '저녁 추천', icon: Utensils },
    { id: 'latenight', label: '야식 추천', icon: Moon },
  ];

  return (
    <nav className="fixed bottom-0 w-full bg-white/90 backdrop-blur-xl border-t border-gray-100 flex justify-center gap-12 items-center pb-8 pt-4 z-20 shadow-2xl">
      {tabs.map((tab) => {
        const Icon = tab.icon;
        const isActive = currentTab === tab.id;
        return (
          <button
            key={tab.id}
            onClick={() => setTab(tab.id)}
            className={`flex flex-col items-center gap-2 p-2 transition-all duration-300 group ${
              isActive ? 'scale-110 -translate-y-2' : 'text-gray-400 hover:text-gray-600'
            }`}
          >
            <div className={`p-4 rounded-2xl transition-all duration-300 ${isActive ? `${theme.lightBg} ${theme.text} shadow-lg ring-4 ring-white` : 'bg-transparent group-hover:bg-gray-100'}`}>
              <Icon size={28} strokeWidth={isActive ? 2.5 : 2} />
            </div>
            <span className={`text-sm font-bold tracking-wide ${isActive ? theme.text : 'text-gray-400'}`}>
              {tab.label}
            </span>
          </button>
        );
      })}
    </nav>
  );
};
