import React from 'react';

interface LogoProps {
  showText?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export default function Logo({ showText = true, size = 'md' }: LogoProps) {
  const textSizes = {
    sm: 'text-xl',
    md: 'text-2xl',
    lg: 'text-3xl'
  };

  const containerSizes = {
    sm: 'w-6 h-6 rounded-[6px]',
    md: 'w-8 h-8 rounded-[8px]',
    lg: 'w-10 h-10 rounded-[10px]'
  };

  const pSizes = {
    sm: 'text-sm',
    md: 'text-lg',
    lg: 'text-xl'
  };

  const greenBoxSizes = {
    sm: 'w-2.5 h-2.5 -bottom-1 -right-0.5 rounded-[3px] rounded-tl-[4px]',
    md: 'w-3.5 h-3.5 -bottom-1 -right-1 rounded-[4px] rounded-tl-[6px]',
    lg: 'w-4.5 h-4.5 -bottom-1 -right-1 rounded-[5px] rounded-tl-[8px]'
  };

  const dotSizes = {
    sm: 'w-1 h-1',
    md: 'w-1.5 h-1.5',
    lg: 'w-2 h-2'
  };

  return (
    <div className="flex items-center gap-1.5 select-none transition-opacity hover:opacity-90">
      <div className="relative">
        <div className={`relative z-10 ${containerSizes[size]} bg-black flex items-center justify-center`}>
          <span className={`font-black text-white italic tracking-tighter ${pSizes[size]} pr-0.5 mt-0.5`}>
            P
          </span>
          <div className={`absolute z-20 ${greenBoxSizes[size]} bg-[var(--primary-green)] flex items-center justify-center`}>
            <div className={`${dotSizes[size]} bg-white rounded-full`}></div>
          </div>
        </div>
      </div>

      {showText && (
        <span className={`${textSizes[size]} font-black tracking-tighter flex items-center`}>
          <span className="text-[var(--primary-green)] italic">
            Pop
          </span>
          <span className="text-[var(--text-main)] italic">
            pro
          </span>
        </span>
      )}
    </div>
  );
}


