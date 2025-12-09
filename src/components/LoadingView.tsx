import { Utensils } from 'lucide-react';
import type { Theme } from '../types';

interface LoadingViewProps {
  theme: Theme;
}

export const LoadingView = ({ theme }: LoadingViewProps) => (
  <div className="flex flex-col items-center justify-center min-h-screen w-full pb-32">
    <div className="relative w-32 h-32 md:w-40 md:h-40">
      <div className="absolute inset-0 border-8 border-white/20 rounded-full"></div>
      <div className="absolute inset-0 border-8 border-white border-t-transparent rounded-full animate-spin"></div>
      <div className="absolute inset-0 flex items-center justify-center">
        <Utensils className="text-white animate-pulse" size={48} />
      </div>
    </div>
    <p className={`mt-10 text-3xl font-black ${theme.titleColor} animate-pulse tracking-tight`}>
      메뉴 고르는 중...
    </p>
  </div>
);
