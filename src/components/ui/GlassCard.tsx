import { ReactNode } from 'react';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
}

const GlassCard = ({ children, className = '' }: GlassCardProps) => {
  return (
    <div className={`glass-panel rounded-3xl p-6 transition-all duration-300 hover:border-white/15 hover:bg-white/[0.06] ${className}`}>
      {children}
    </div>
  );
};

export default GlassCard;