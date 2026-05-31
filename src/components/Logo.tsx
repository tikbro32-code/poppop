import React from 'react';

interface LogoProps {
  showText?: boolean;
}

export default function Logo({ showText = true, size = 'md' }: LogoProps & { size?: 'sm' | 'md' | 'lg' }) {
  const textSizes = {
    sm: 'text-lg',
    md: 'text-2xl',
    lg: 'text-3xl'
  };

  return (
    <div className="flex items-center gap-2">
      <div className={`relative ${size === 'sm' ? 'w-6 h-6' : 'w-8 h-8'} bg-[#0E2A24] rounded-[10px] flex items-center justify-center shadow-[0_0_15px_var(--primary-green)] border border-white/5`}>
        <span className={`font-black text-white ${size === 'sm' ? 'text-[14px]' : 'text-[18px]'} italic pr-1`}>P</span>
        <div className={`absolute -bottom-1 -right-1 ${size === 'sm' ? 'w-3 h-3' : 'w-4 h-4'} bg-[var(--primary-green)] rounded-tl-lg rounded-br-[10px] flex items-center justify-center`}>
          <div className={`${size === 'sm' ? 'w-1 h-1' : 'w-1.5 h-1.5'} bg-white rounded-full`}></div>
        </div>
      </div>
      {showText && (
        <span className={`${textSizes[size]} font-black tracking-tighter`}>
          <span className="text-[var(--primary-green)]">Pop</span>
          <span className="text-white">pro</span>
        </span>
      )}
    </div>
  );
}
