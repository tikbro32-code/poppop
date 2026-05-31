import React, { useState } from 'react';
import { X, FileText, Save, Trash2 } from 'lucide-react';

interface Props {
  onClose: () => void;
}

export default function NotepadApp({ onClose }: Props) {
  const [note, setNote] = useState('');

  return (
    <div className="absolute inset-0 bg-black/40 backdrop-blur-xl z-50 flex items-center justify-center p-4 animate-in fade-in duration-200">
      <div className="bg-[var(--sidebar-bg)] backdrop-blur-2xl border border-[var(--border-color)] rounded-3xl p-6 w-full max-w-2xl h-[80vh] relative shadow-2xl flex flex-col">
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 text-[var(--text-secondary)] hover:text-[var(--text-main)] bg-[var(--border-color)] hover:bg-[var(--border-color)] p-2 rounded-full transition-colors"
        >
          <X size={20} />
        </button>
        
        <div className="flex items-center gap-3 mb-6">
          <FileText className="text-[var(--primary-green)]" size={24} />
          <h2 className="text-xl font-bold text-[var(--text-main)] drop-shadow-md">Notepad</h2>
        </div>
        
        <textarea 
          value={note}
          onChange={(e) => setNote(e.target.value)}
          placeholder="Type your note here..." 
          className="flex-1 bg-[var(--bg-dark)] border border-[var(--border-color)] rounded-2xl p-5 text-[var(--text-main)] placeholder:text-[var(--text-secondary)] resize-none focus:outline-none focus:border-[var(--primary-green)]/50 transition-colors text-lg leading-relaxed shadow-inner backdrop-blur-md"
        />
        
        <div className="flex justify-end gap-3 mt-4">
          <button 
            onClick={() => setNote('')} 
            className="flex items-center gap-2 px-5 py-2.5 bg-red-500/20 text-red-300 hover:bg-red-500/30 rounded-xl font-medium transition-colors border border-red-500/30 backdrop-blur-md shadow-lg"
          >
            <Trash2 size={18} /> Clear
          </button>
          <button 
            className="flex items-center gap-2 px-6 py-2.5 bg-[var(--primary-green)]/80 text-white hover:bg-[var(--primary-green)] border border-[var(--primary-green)]/50 rounded-xl font-bold transition-colors backdrop-blur-md shadow-lg"
          >
            <Save size={18} /> Save
          </button>
        </div>
      </div>
    </div>
  );
}
