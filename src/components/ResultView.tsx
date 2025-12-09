import { ThumbsUp, ThumbsDown, Share2, RotateCcw } from 'lucide-react';
import { Card } from './Card';
import { getIconByType } from '../utils/icons';
import type { MenuItem, Theme } from '../types';

interface ResultViewProps {
  recommendation: MenuItem | null;
  theme: Theme;
  onShare: () => void;
  onReset: () => void;
}

export const ResultView = ({ recommendation, theme, onShare, onReset }: ResultViewProps) => (
  <div className="flex flex-col items-center justify-center min-h-screen w-full px-4 pb-32 animate-fade-in-up">
    {recommendation && (
      <>
        <Card className="w-full max-w-lg aspect-[3/4] md:aspect-auto md:h-[600px] flex flex-col relative group hover:-translate-y-2 transition-transform duration-500">
          {/* Background Pattern Icon */}
          <div className="absolute top-[-20%] right-[-20%] z-0 transform rotate-12 opacity-50 group-hover:rotate-[20deg] group-hover:scale-110 transition-all duration-700">
            {getIconByType(recommendation.type)}
          </div>

          <div className="flex-1 p-10 flex flex-col items-center justify-center text-center bg-white relative z-10">
            <div className={`inline-block px-6 py-2 rounded-2xl ${theme.lightBg} mb-8`}>
              <span className={`text-xl md:text-2xl font-black ${theme.text} tracking-tight`}>
                {recommendation.brand}
              </span>
            </div>

            <h2 className="text-5xl md:text-6xl font-black text-gray-900 leading-[1.1] word-keep-all tracking-tight mb-4">
              {recommendation.name}
            </h2>

            <div className="w-20 h-2 bg-gray-100 rounded-full mt-8"></div>
          </div>
        </Card>

        <div className="flex gap-4 mt-8 w-full max-w-lg">
          <button className="flex-1 bg-white hover:bg-blue-50 text-blue-600 py-5 rounded-2xl shadow-xl font-black text-xl flex items-center justify-center gap-3 active:scale-95 transition-transform">
            <ThumbsUp size={28} strokeWidth={2.5} />
            <span>좋아요</span>
          </button>
          <button className="flex-1 bg-white hover:bg-red-50 text-red-500 py-5 rounded-2xl shadow-xl font-black text-xl flex items-center justify-center gap-3 active:scale-95 transition-transform">
            <ThumbsDown size={28} strokeWidth={2.5} />
            <span>별로...</span>
          </button>
        </div>

        <div className="flex gap-4 mt-4 w-full max-w-lg">
          <button
            onClick={onShare}
            className="flex-[3] bg-gray-900 hover:bg-black text-white py-4 rounded-2xl shadow-xl font-bold text-lg flex items-center justify-center gap-3 active:scale-95 transition-transform"
          >
            <Share2 size={24} />
            <span>친구에게 공유하기</span>
          </button>
          <button
            onClick={onReset}
            className="flex-[1] bg-white/20 backdrop-blur-md text-white hover:bg-white/30 rounded-2xl shadow-xl flex items-center justify-center active:scale-95 transition-transform border-2 border-white/30"
            title="다시하기"
          >
            <RotateCcw size={28} />
          </button>
        </div>
      </>
    )}
  </div>
);
