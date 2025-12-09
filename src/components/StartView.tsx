import type { Theme } from '../types';

interface StartViewProps {
  theme: Theme;
  onRecommend: () => void;
}

export const StartView = ({ theme, onRecommend }: StartViewProps) => (
  <div className="flex flex-col items-center justify-center min-h-screen w-full animate-fade-in pb-32">
    <div className="text-center mb-16 space-y-4">
      <h2 className={`text-6xl md:text-8xl font-black ${theme.titleColor} drop-shadow-xl tracking-tight`}>
        오늘은<br/>뭐 먹지?
      </h2>
      <p className={`text-xl md:text-2xl font-bold opacity-80 ${theme.titleColor} tracking-widest`}>
        NO MORE THINKING
      </p>
    </div>

    <button
      onClick={onRecommend}
      className="group relative w-80 h-32 md:w-96 md:h-40 bg-white rounded-3xl shadow-[0_20px_40px_rgba(0,0,0,0.2)] hover:shadow-[0_25px_50px_rgba(0,0,0,0.3)] active:scale-95 transition-all duration-300 flex items-center justify-center overflow-hidden"
    >
      <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity ${theme.bg}`}></div>
      <span className="text-5xl md:text-6xl font-black text-gray-800 tracking-widest group-hover:scale-110 transition-transform duration-300">
        딸깍!
      </span>
      <div className="absolute right-6 bottom-4 text-sm text-gray-400 font-bold uppercase tracking-wider">Tap to Pick</div>
    </button>
  </div>
);
