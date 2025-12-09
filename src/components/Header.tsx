import { ChefHat } from 'lucide-react';

interface HeaderProps {
  themeText: string;
}

export const Header = ({ themeText }: HeaderProps) => (
  <header className="p-6 flex justify-between items-center fixed top-0 w-full z-20 pointer-events-none">
    <div className={`text-3xl font-black ${themeText} drop-shadow-lg flex items-center gap-3 pointer-events-auto`}>
      <ChefHat size={36} />
      <span>폰마카세</span>
    </div>
    <div className="bg-white/10 backdrop-blur-lg px-4 py-2 rounded-full text-sm font-bold text-white border border-white/20 shadow-lg pointer-events-auto">
      Franchise Only v2.0
    </div>
  </header>
);
