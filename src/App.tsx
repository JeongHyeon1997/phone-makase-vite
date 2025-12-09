import { useState, useEffect } from 'react';
import { Header, BottomNav, Toast, StartView, LoadingView, ResultView } from './components';
import { MENUS } from './constants/menus';
import { THEMES } from './constants/themes';
import type { MealTime, ViewState, MenuItem, Theme } from './types';

export default function App() {
  const [currentTab, setCurrentTab] = useState<MealTime>('lunch');
  const [viewState, setViewState] = useState<ViewState>('start');
  const [recommendation, setRecommendation] = useState<MenuItem | null>(null);
  const [toastVisible, setToastVisible] = useState(false);
  const [theme, setTheme] = useState<Theme>(THEMES.lunch);

  useEffect(() => {
    setViewState('start');
    setRecommendation(null);
    setTheme(THEMES[currentTab]);
  }, [currentTab]);

  const handleRecommend = () => {
    setViewState('loading');
    setTimeout(() => {
      const items = MENUS[currentTab];
      const randomItem = items[Math.floor(Math.random() * items.length)];
      setRecommendation(randomItem);
      setViewState('result');
    }, 1000);
  };

  const handleShare = () => {
    if (!recommendation) return;

    const mealTimeLabel = currentTab === 'lunch' ? '점심' : currentTab === 'dinner' ? '저녁' : '야식';
    const tempInput = document.createElement("input");
    tempInput.value = `[폰마카세] 오늘의 ${mealTimeLabel} 추천!\n🍽️ ${recommendation.brand} - ${recommendation.name}`;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);

    setToastVisible(true);
    setTimeout(() => setToastVisible(false), 2000);
  };

  const handleReset = () => {
    setViewState('start');
  };

  return (
    <div className={`min-h-screen w-full transition-colors duration-700 ease-in-out ${theme.bg}`}>
      <div className="w-full min-h-screen flex flex-col relative overflow-hidden">
        <Header themeText={theme.titleColor} />

        <main className="flex-1 w-full max-w-7xl mx-auto relative z-10">
          {viewState === 'start' && <StartView theme={theme} onRecommend={handleRecommend} />}
          {viewState === 'loading' && <LoadingView theme={theme} />}
          {viewState === 'result' && (
            <ResultView
              recommendation={recommendation}
              theme={theme}
              onShare={handleShare}
              onReset={handleReset}
            />
          )}
        </main>

        <BottomNav currentTab={currentTab} setTab={setCurrentTab} theme={theme} />
        <Toast message="추천 메뉴가 복사되었습니다!" visible={toastVisible} />
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in { animation: fadeIn 0.6s ease-out forwards; }
        .animate-fade-in-up { animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        .word-keep-all { word-break: keep-all; }
      `}</style>
    </div>
  );
}
