import React, { useState, useEffect } from 'react';
import { X, Hourglass, Plus, PenLine, Save, Play, Pause, RotateCcw, ChevronUp, ChevronDown, Maximize2, AppWindow } from 'lucide-react';

interface Props {
  onClose: () => void;
}

interface Timer {
  id: string;
  name: string;
  initialTime: number;
  remainingTime: number;
  isRunning: boolean;
}

export default function ClockApp({ onClose }: Props) {
  const [timers, setTimers] = useState<Timer[]>([]);
  const [showModal, setShowModal] = useState(false);

  const [inputHours, setInputHours] = useState(0);
  const [inputMinutes, setInputMinutes] = useState(0);
  const [inputSeconds, setInputSeconds] = useState(0);
  const [inputName, setInputName] = useState('Timer (1)');

  useEffect(() => {
    const interval = setInterval(() => {
      setTimers(prev => prev.map(timer => {
        if (timer.isRunning && timer.remainingTime > 0) {
          return { ...timer, remainingTime: timer.remainingTime - 1 };
        } else if (timer.isRunning && timer.remainingTime === 0) {
          return { ...timer, isRunning: false };
        }
        return timer;
      }));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleIncrement = (type: 'h' | 'm' | 's') => {
    if (type === 'h') setInputHours(h => (h + 1) % 100);
    if (type === 'm') setInputMinutes(m => (m + 1) % 60);
    if (type === 's') setInputSeconds(s => (s + 1) % 60);
  };

  const handleDecrement = (type: 'h' | 'm' | 's') => {
    if (type === 'h') setInputHours(h => (h - 1 + 100) % 100);
    if (type === 'm') setInputMinutes(m => (m - 1 + 60) % 60);
    if (type === 's') setInputSeconds(s => (s - 1 + 60) % 60);
  };

  const handleSave = () => {
    const totalSeconds = inputHours * 3600 + inputMinutes * 60 + inputSeconds;
    if (totalSeconds === 0) return;

    const newTimer: Timer = {
      id: Date.now().toString(),
      name: inputName || 'Timer',
      initialTime: totalSeconds,
      remainingTime: totalSeconds,
      isRunning: true,
    };

    setTimers([...timers, newTimer]);
    setShowModal(false);
    
    setInputHours(0);
    setInputMinutes(0);
    setInputSeconds(0);
    setInputName(`Timer (${timers.length + 2})`);
  };

  const toggleTimer = (id: string) => {
    setTimers(prev => prev.map(t =>
      t.id === id ? { ...t, isRunning: !t.isRunning && t.remainingTime > 0 } : t
    ));
  };

  const resetTimer = (id: string) => {
    setTimers(prev => prev.map(t =>
      t.id === id ? { ...t, remainingTime: t.initialTime, isRunning: false } : t
    ));
  };

  const deleteTimer = (id: string) => {
    setTimers(prev => prev.filter(t => t.id !== id));
  };

  const formatTime = (totalSeconds: number) => {
    const h = Math.floor(totalSeconds / 3600);
    const m = Math.floor((totalSeconds % 3600) / 60);
    const s = totalSeconds % 60;
    return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const handleWheel = (e: React.WheelEvent, type: 'h' | 'm' | 's') => {
    if (e.deltaY < 0) {
      handleIncrement(type);
    } else {
      handleDecrement(type);
    }
  };

  return (
    <div className="absolute inset-0 bg-[var(--bg-dark)]/95 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-in fade-in duration-200">
      <div className="bg-[var(--sidebar-bg)] border border-[var(--border-color)] rounded-3xl p-6 w-full max-w-4xl h-[80vh] relative shadow-2xl flex flex-col overflow-hidden">
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 text-[var(--text-secondary)] hover:text-[var(--text-main)] bg-[var(--border-color)] hover:bg-[var(--border-color)] p-2 rounded-full transition-colors z-20"
        >
          <X size={20} />
        </button>

        <div className="flex-1 flex flex-col relative overflow-y-auto scrollbar-hide">
          {timers.length === 0 && !showModal && (
            <div className="flex-1 flex flex-col items-center justify-center text-center animate-in fade-in duration-500">
              <Hourglass size={48} className="text-[var(--text-main)] mb-6" strokeWidth={1.5} />
              <h2 className="text-2xl font-bold mb-3 text-[var(--text-main)]">You don't have any timers.</h2>
              <p className="text-[var(--text-secondary)] text-sm">Select "+" below to add a new timer.</p>
            </div>
          )}

          {timers.length > 0 && (
            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-in fade-in duration-500 items-start p-2">
              {timers.map(timer => {
                const progress = timer.initialTime > 0 
                  ? ((timer.initialTime - timer.remainingTime) / timer.initialTime) * 100 
                  : 0;

                return (
                  <div key={timer.id} className="bg-[var(--sidebar-bg)] backdrop-blur-xl border border-[var(--border-color)] rounded-2xl p-6 relative shadow-2xl flex flex-col">
                    <div className="flex justify-between items-center mb-8">
                      <span className="font-medium text-sm text-[var(--text-main)] truncate pr-4">{timer.name}</span>
                      <div className="flex gap-3 text-[var(--text-secondary)] shrink-0">
                        <button className="hover:text-[var(--text-main)] transition-colors"><Maximize2 size={16} /></button>
                        <button className="hover:text-[var(--text-main)] transition-colors"><AppWindow size={16} /></button>
                        <button onClick={() => deleteTimer(timer.id)} className="hover:text-red-400 transition-colors ml-2"><X size={18} /></button>
                      </div>
                    </div>

                    <div className="flex justify-center mb-10 relative">
                      <div className="relative w-48 h-48 flex items-center justify-center">
                        <svg className="w-full h-full transform -rotate-90 absolute inset-0">
                          <circle
                            cx="96"
                            cy="96"
                            r="88"
                            stroke="currentColor"
                            strokeWidth="6"
                            fill="transparent"
                            className="text-white/5"
                          />
                          <circle
                            cx="96"
                            cy="96"
                            r="88"
                            stroke="currentColor"
                            strokeWidth="6"
                            fill="transparent"
                            strokeDasharray={2 * Math.PI * 88}
                            strokeDashoffset={(2 * Math.PI * 88) * (progress / 100)}
                            className="text-[var(--primary-green)] transition-all duration-1000 ease-linear"
                            strokeLinecap="round"
                          />
                        </svg>
                        <span className="text-4xl font-light tabular-nums tracking-tight text-[var(--text-main)] z-10">
                          {formatTime(timer.remainingTime)}
                        </span>
                      </div>
                    </div>

                    <div className="flex justify-center gap-4 mt-auto">
                      <button
                        onClick={() => toggleTimer(timer.id)}
                        className="w-12 h-12 rounded-full bg-[var(--primary-green)] text-[var(--text-main)] flex items-center justify-center hover:bg-[var(--primary-green)]/90 transition-transform active:scale-95"
                      >
                        {timer.isRunning ? <Pause size={20} fill="currentColor" /> : <Play size={20} fill="currentColor" className="ml-1" />}
                      </button>
                      <button
                        onClick={() => resetTimer(timer.id)}
                        className="w-12 h-12 rounded-full bg-[var(--border-color)] text-[var(--text-main)] flex items-center justify-center hover:bg-[var(--border-color)] border border-[var(--border-color)] transition-transform active:scale-95"
                      >
                        <RotateCcw size={18} />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        <div className="absolute bottom-6 right-6 flex gap-3 z-30">
          <button
            onClick={() => setShowModal(true)}
            className="p-3.5 bg-[var(--border-color)] backdrop-blur-md hover:bg-[var(--border-color)] rounded-xl border border-[var(--border-color)] transition-all shadow-lg text-[var(--text-secondary)] hover:text-[var(--text-main)]"
          >
            <Plus size={20} />
          </button>
        </div>

        {showModal && (
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 animate-in fade-in duration-200">
            <div className="bg-[var(--sidebar-bg)] border border-[var(--border-color)] rounded-2xl p-8 w-full max-w-[420px] shadow-2xl transform transition-all">
              <h3 className="text-xl font-bold mb-8 text-[var(--text-main)] text-center">Add new timer</h3>

              <div className="flex flex-col items-center mb-10">
                <div className="flex items-center justify-center gap-4 w-full pb-8 border-b border-[var(--border-color)]">
                  <div className="flex flex-col items-center group">
                    <button onClick={() => handleIncrement('h')} className="p-2 mb-2 text-[var(--text-secondary)] hover:text-[var(--primary-green)] hover:bg-[var(--primary-green)]/10 rounded-full transition-all active:scale-95"><ChevronUp size={28}/></button>
                    <div className="relative">
                      <div 
                        onWheel={(e) => handleWheel(e, 'h')}
                        className="text-5xl font-medium w-20 h-24 flex items-center justify-center tabular-nums text-[var(--text-main)] bg-[var(--bg-dark)] rounded-xl border-2 border-[var(--border-color)] group-hover:border-[var(--primary-green)]/50 transition-colors shadow-inner cursor-ns-resize"
                      >
                        {String(inputHours).padStart(2, '0')}
                      </div>
                      <span className="absolute -bottom-7 left-1/2 -translate-x-1/2 text-[11px] font-bold text-[var(--text-secondary)] uppercase tracking-wider">Hours</span>
                    </div>
                    <button onClick={() => handleDecrement('h')} className="p-2 mt-8 text-[var(--text-secondary)] hover:text-[var(--primary-green)] hover:bg-[var(--primary-green)]/10 rounded-full transition-all active:scale-95"><ChevronDown size={28}/></button>
                  </div>
                  
                  <span className="text-4xl font-light text-[var(--text-secondary)] -mt-6 animate-pulse">:</span>
                  
                  <div className="flex flex-col items-center group">
                    <button onClick={() => handleIncrement('m')} className="p-2 mb-2 text-[var(--text-secondary)] hover:text-[var(--primary-green)] hover:bg-[var(--primary-green)]/10 rounded-full transition-all active:scale-95"><ChevronUp size={28}/></button>
                    <div className="relative">
                      <div 
                        onWheel={(e) => handleWheel(e, 'm')}
                        className="text-5xl font-medium w-20 h-24 flex items-center justify-center tabular-nums text-[var(--text-main)] bg-[var(--bg-dark)] rounded-xl border-2 border-[var(--border-color)] group-hover:border-[var(--primary-green)]/50 transition-colors shadow-inner cursor-ns-resize"
                      >
                        {String(inputMinutes).padStart(2, '0')}
                      </div>
                      <span className="absolute -bottom-7 left-1/2 -translate-x-1/2 text-[11px] font-bold text-[var(--text-secondary)] uppercase tracking-wider">Min</span>
                    </div>
                    <button onClick={() => handleDecrement('m')} className="p-2 mt-8 text-[var(--text-secondary)] hover:text-[var(--primary-green)] hover:bg-[var(--primary-green)]/10 rounded-full transition-all active:scale-95"><ChevronDown size={28}/></button>
                  </div>
                  
                  <span className="text-4xl font-light text-[var(--text-secondary)] -mt-6 animate-pulse">:</span>
                  
                  <div className="flex flex-col items-center group">
                    <button onClick={() => handleIncrement('s')} className="p-2 mb-2 text-[var(--text-secondary)] hover:text-[var(--primary-green)] hover:bg-[var(--primary-green)]/10 rounded-full transition-all active:scale-95"><ChevronUp size={28}/></button>
                    <div className="relative">
                      <div 
                        onWheel={(e) => handleWheel(e, 's')}
                        className="text-5xl font-medium w-20 h-24 flex items-center justify-center tabular-nums text-[var(--text-main)] bg-[var(--bg-dark)] rounded-xl border-2 border-[var(--border-color)] group-hover:border-[var(--primary-green)]/50 transition-colors shadow-inner cursor-ns-resize"
                      >
                        {String(inputSeconds).padStart(2, '0')}
                      </div>
                      <span className="absolute -bottom-7 left-1/2 -translate-x-1/2 text-[11px] font-bold text-[var(--text-secondary)] uppercase tracking-wider">Sec</span>
                    </div>
                    <button onClick={() => handleDecrement('s')} className="p-2 mt-8 text-[var(--text-secondary)] hover:text-[var(--primary-green)] hover:bg-[var(--primary-green)]/10 rounded-full transition-all active:scale-95"><ChevronDown size={28}/></button>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3 bg-[var(--bg-dark)] border border-[var(--border-color)] rounded-xl p-3.5 mb-8 focus-within:border-[var(--primary-green)]/50 transition-colors shadow-inner">
                <PenLine size={20} className="text-[var(--text-secondary)]" />
                <input
                  type="text"
                  value={inputName}
                  onChange={(e) => setInputName(e.target.value)}
                  className="bg-transparent outline-none flex-1 text-[var(--text-main)] placeholder:text-[var(--text-secondary)] font-medium"
                  placeholder="Timer name"
                />
              </div>

              <div className="flex gap-4">
                <button
                  onClick={() => setShowModal(false)}
                  className="flex-1 bg-[var(--bg-dark)] text-[var(--text-main)] font-bold py-3.5 rounded-xl flex items-center justify-center gap-2 hover:bg-[var(--border-color)] border border-[var(--border-color)] transition-all active:scale-95"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSave}
                  className="flex-1 bg-[var(--primary-green)] text-[var(--bg-dark)] font-bold py-3.5 rounded-xl flex items-center justify-center gap-2 hover:brightness-110 transition-all active:scale-95 shadow-lg shadow-[var(--primary-green)]/20"
                >
                  <Play size={18} fill="currentColor" /> Start
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
