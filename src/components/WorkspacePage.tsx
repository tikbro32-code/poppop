import React, { useState } from 'react';
import { Clock, Calculator, Map, FileText } from 'lucide-react';
import Timer from './ClockApp';
import CalculatorApp from './CalculatorApp';
import MapApp from './MapApp';
import NotepadApp from './NotepadApp';

export default function WorkspacePage() {
  const [activeApp, setActiveApp] = useState<string | null>(null);

  const tools = [
    {
      id: 'clock',
      icon: Clock,
      labelGreen: 'Clo',
      labelWhite: 'ck',
    },
    {
      id: 'calculator',
      icon: Calculator,
      labelGreen: 'Calcu',
      labelWhite: 'lator',
    },
    {
      id: 'map',
      icon: Map,
      labelGreen: 'Ma',
      labelWhite: 'ps',
    },
    {
      id: 'notepad',
      icon: FileText,
      labelGreen: 'Note',
      labelWhite: 'pad',
    }
  ];

  return (
    <div className="flex-1 flex flex-col bg-[var(--bg-dark)] overflow-y-auto p-6 md:p-12 items-center justify-center relative">
      <div className="grid grid-cols-2 gap-4 md:gap-8 max-w-2xl w-full">
        {tools.map((tool) => (
          <button 
            key={tool.id}
            onClick={() => setActiveApp(tool.id)}
            className="flex flex-col items-center justify-center bg-[var(--sidebar-bg)] hover:bg-[var(--border-color)] border border-[var(--border-color)] rounded-2xl p-8 md:p-12 transition-all shadow-lg hover:scale-105 group"
          >
            <tool.icon size={56} className="text-[var(--primary-green)] mb-6 group-hover:scale-110 transition-transform duration-300" strokeWidth={1.5} />
            <span className="text-2xl md:text-3xl font-black tracking-tighter">
              <span className="text-[var(--accent-2)]">{tool.labelGreen}</span>
              <span className="text-[var(--accent-1)]">{tool.labelWhite}</span>
            </span>
          </button>
        ))}
      </div>

      {activeApp === 'clock' && <Timer onClose={() => setActiveApp(null)} />}
      {activeApp === 'calculator' && <CalculatorApp onClose={() => setActiveApp(null)} />}
      {activeApp === 'map' && <MapApp onClose={() => setActiveApp(null)} />}
      {activeApp === 'notepad' && <NotepadApp onClose={() => setActiveApp(null)} />}
    </div>
  );
}
