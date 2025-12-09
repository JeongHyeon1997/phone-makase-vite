import { Share2 } from 'lucide-react';

interface ToastProps {
  message: string;
  visible: boolean;
}

export const Toast = ({ message, visible }: ToastProps) => (
  <div className={`fixed bottom-32 left-1/2 transform -translate-x-1/2 bg-gray-900/90 text-white px-8 py-4 rounded-full shadow-2xl transition-all duration-300 z-50 flex items-center gap-3 backdrop-blur-md ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}>
    <Share2 size={20} className="text-green-400" />
    <span className="text-lg font-bold tracking-tight">{message}</span>
  </div>
);
