import type { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
}

export const Card = ({ children, className = "" }: CardProps) => (
  <div className={`bg-white rounded-[2.5rem] shadow-2xl overflow-hidden ${className}`}>
    {children}
  </div>
);
