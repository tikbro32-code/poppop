import React, { useState, useEffect } from 'react';
import { Palette, Monitor, Check, Sliders, X } from 'lucide-react';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';

const textColors = [
  { name: 'Neon Green', value: '#00FF95' },
  { name: 'White', value: '#FFFFFF' },
  { name: 'Red', value: '#FF4D4D' },
  { name: 'Yellow', value: '#FFD700' },
  { name: 'Cyan', value: '#00F0FF' },
  { name: 'Magenta', value: '#FF00FF' },
  { name: 'Orange', value: '#FF8A00' },
  { name: 'Purple', value: '#9D00FF' },
  { name: 'Lime', value: '#CCFF00' },
];

const bgColors = [
  { name: 'White', value: '#FFFFFF' },
  { name: 'Black', value: '#000000' },
  { name: 'Dark Gray', value: '#121212' },
  { name: 'Deep Blue', value: '#0A0F1E' },
  { name: 'Navy', value: '#1E1029' },
  { name: 'Charcoal', value: '#1A1A1A' },
  { name: 'Midnight', value: '#050505' },
  { name: 'Dark Purple', value: '#1A0B2E' },
  { name: 'Forest', value: '#0A1A11' },
];

export default function ThemesPage({ onClose }: { onClose?: () => void }) {
  const [selectedText, setSelectedText] = useState('#00FF95');
  const [selectedBg, setSelectedBg] = useState('#1E1029');
  const navigate = useNavigate();

  useEffect(() => {
    const savedText = localStorage.getItem('poppro-text-color');
    const savedBg = localStorage.getItem('poppro-bg-color');
    if (savedText) setSelectedText(savedText);
    if (savedBg) setSelectedBg(savedBg);
  }, []);

  const handleTextChange = (color: string) => {
    setSelectedText(color);
    localStorage.setItem('poppro-text-color', color);
    document.documentElement.style.setProperty('--primary-green', color);
  };

  const handleBgChange = (color: string) => {
    setSelectedBg(color);
    localStorage.setItem('poppro-bg-color', color);
    document.documentElement.style.setProperty('--bg-dark', color);
    document.body.style.backgroundColor = color;
    
    const isLight = color.toLowerCase() === '#ffffff' || color.toLowerCase() === '#f3f4f6';
    const theme = isLight ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('poppro-theme', theme);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center md:items-end justify-center p-4 pointer-events-none transition-colors duration-500">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        className="pointer-events-auto w-[95%] max-w-[1000px] bg-gray-900/60 md:mb-8 backdrop-blur-md border border-white/20 rounded-[24px] p-4 md:p-6 shadow-2xl flex flex-col xl:flex-row items-center gap-6 xl:gap-8"
      >
        <div className="flex flex-col items-center xl:items-start shrink-0">
          <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center border border-white/20 mb-3">
            <Sliders className="text-[var(--primary-green)] w-5 h-5" />
          </div>
          <h1 className="text-sm md:text-base font-black tracking-[0.15em] uppercase italic text-white text-center xl:text-left leading-tight">
            Konfigurasi<br/><span className="text-[var(--primary-green)]">Tema Visual</span>
          </h1>
        </div>

        <div className="flex-1 flex flex-col md:flex-row gap-6 w-full justify-center border-y xl:border-y-0 xl:border-x border-white/10 py-4 xl:py-0 xl:px-8">
          <div className="flex flex-col items-center xl:items-start gap-3">
            <div className="flex items-center gap-2">
              <h2 className="text-[10px] font-black tracking-widest uppercase italic text-white/70">
                Warna Teks
              </h2>
              <span className="text-[9px] font-mono text-[var(--primary-green)] uppercase bg-white/10 px-2 py-0.5 rounded border border-white/10">
                {selectedText}
              </span>
            </div>
            
            <div className="flex flex-wrap justify-center xl:justify-start gap-2 max-w-[220px]">
              {textColors.map((color) => (
                <button
                  key={color.value}
                  onClick={() => handleTextChange(color.value)}
                  className="relative group transition-all duration-300 flex justify-center"
                >
                  <div 
                    className={`w-7 h-7 rounded-full transition-all duration-300 group-hover:scale-110 active:scale-95 flex items-center justify-center ${
                      selectedText === color.value 
                        ? 'shadow-[0_0_15px_rgba(0,0,0,0.5)]' 
                        : 'shadow-md'
                    }`}
                    style={{ 
                      backgroundColor: color.value,
                      boxShadow: selectedText === color.value ? `0 0 15px ${color.value}66` : 'none'
                    }}
                  >
                    {selectedText === color.value && (
                      <Check size={12} className="text-white drop-shadow-md" strokeWidth={4} />
                    )}
                  </div>
                  {selectedText === color.value && (
                    <motion.div 
                      layoutId="text-active"
                      className="absolute -inset-1 border border-[var(--primary-green)] rounded-full pointer-events-none"
                    />
                  )}
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-col items-center xl:items-start gap-3">
            <div className="flex items-center gap-2">
              <h2 className="text-[10px] font-black tracking-widest uppercase italic text-white/70">
                Warna Latar
              </h2>
              <span className="text-[9px] font-mono text-white/70 uppercase bg-white/10 px-2 py-0.5 rounded border border-white/10">
                {selectedBg}
              </span>
            </div>
            
            <div className="flex flex-wrap justify-center xl:justify-start gap-2 max-w-[220px]">
              {bgColors.map((color) => (
                <button
                  key={color.value}
                  onClick={() => handleBgChange(color.value)}
                  className="relative group transition-all duration-300 flex justify-center"
                >
                  <div 
                    className={`w-7 h-7 rounded-full border border-white/20 transition-all duration-300 group-hover:scale-110 active:scale-95 flex items-center justify-center ${
                      selectedBg === color.value 
                        ? 'shadow-[0_0_15px_rgba(0,0,0,0.5)]' 
                        : 'shadow-md'
                    }`}
                    style={{ 
                      backgroundColor: color.value,
                      boxShadow: selectedBg === color.value ? `0 0 15px ${color.value}66` : 'none'
                    }}
                  >
                    {selectedBg === color.value && (
                      <Check size={12} className={`${color.value === '#FFFFFF' ? 'text-[var(--primary-green)]' : 'text-white'}`} strokeWidth={4} />
                    )}
                  </div>
                  {selectedBg === color.value && (
                    <motion.div 
                      layoutId="bg-active"
                      className="absolute -inset-1 border border-white rounded-full pointer-events-none"
                    />
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-row xl:flex-col gap-3 shrink-0 w-full xl:w-auto justify-center">
          <button 
            onClick={() => onClose ? onClose() : navigate(-1)}
            className="flex-1 xl:flex-none px-6 py-2.5 bg-white/10 hover:bg-white/20 text-white font-bold text-xs rounded-full transition-all active:scale-95 border border-white/10 uppercase tracking-wider"
          >
            Tutup
          </button>
          <button 
            onClick={() => onClose ? onClose() : window.location.reload()}
            className="flex-1 xl:flex-none px-6 py-2.5 bg-[var(--primary-green)] hover:brightness-110 text-black font-bold text-xs rounded-full transition-all active:scale-95 uppercase tracking-wider"
          >
            Simpan
          </button>
        </div>
      </motion.div>
    </div>
  );
}
