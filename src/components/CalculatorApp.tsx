import React, { useState } from 'react';
import { X, Calculator } from 'lucide-react';

interface Props {
  onClose: () => void;
}

export default function CalculatorApp({ onClose }: Props) {
  const [display, setDisplay] = useState('0');

  const handleBtn = (val: string) => {
    if (display === '0' && val !== '.') {
      setDisplay(val);
    } else {
      setDisplay(display + val);
    }
  };

  const calculate = () => {
    try {
      const expression = display.replace(/×/g, '*').replace(/÷/g, '/');
      const result = new Function('return ' + expression)();
      setDisplay(String(result));
    } catch {
      setDisplay('Error');
    }
  };

  const clear = () => setDisplay('0');

  const buttons = [
    '7', '8', '9', '÷',
    '4', '5', '6', '×',
    '1', '2', '3', '-',
    '0', '.', '=', '+'
  ];

  return (
    <div className="absolute inset-0 bg-black/40 backdrop-blur-xl z-50 flex items-center justify-center p-4 animate-in fade-in duration-200">
      <div className="bg-[var(--sidebar-bg)] backdrop-blur-2xl border border-[var(--border-color)] rounded-3xl p-6 w-full max-w-sm relative shadow-2xl">
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 text-[var(--text-secondary)] hover:text-[var(--text-main)] bg-[var(--sidebar-bg)] hover:bg-[var(--border-color)] p-2 rounded-full transition-colors"
        >
          <X size={20} />
        </button>
        
        <div className="flex items-center gap-3 mb-6">
          <Calculator className="text-[var(--primary-green)]" size={24} />
          <h2 className="text-xl font-bold drop-shadow-md">
            <span className="text-[var(--accent-2)]">Calcu</span>
            <span className="text-[var(--accent-1)]">lator</span>
          </h2>
        </div>
        
        <div className="bg-[var(--bg-dark)] rounded-2xl p-4 mb-6 text-right overflow-hidden border border-[var(--border-color)] shadow-inner">
          <span className="text-4xl font-mono text-[var(--text-main)] tracking-wider truncate block drop-shadow-md">{display}</span>
        </div>
        
        <div className="grid grid-cols-4 gap-3">
          <button 
            onClick={clear} 
            className="col-span-4 bg-red-500/20 text-red-300 hover:bg-red-500/30 py-3 rounded-xl font-bold transition-colors border border-red-500/30 backdrop-blur-md shadow-lg"
          >
            Clear
          </button>
          {buttons.map((btn) => (
            <button 
              key={btn} 
              onClick={() => btn === '=' ? calculate() : handleBtn(btn)}
              className={`py-4 rounded-xl font-bold text-xl transition-all backdrop-blur-md shadow-lg active:scale-95 ${
                ['÷', '×', '-', '+', '='].includes(btn) 
                  ? 'bg-[var(--primary-green)]/80 text-white hover:bg-[var(--primary-green)] border border-[var(--primary-green)]/50' 
                  : 'bg-[var(--sidebar-bg)] text-[var(--text-main)] hover:bg-[var(--border-color)] border border-[var(--border-color)]'
              }`}
            >
              {btn}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
