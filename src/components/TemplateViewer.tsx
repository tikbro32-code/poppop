import React from 'react';
import { popproDatabase } from '../data/popproDatabase';

interface TemplateViewerProps {
  activeDocId: string;
  onClose: () => void;
  onNavigateLegal: (docId: string) => void;
}

export const TemplateViewer: React.FC<TemplateViewerProps> = ({
  activeDocId,
  onClose,
  onNavigateLegal,
}) => {
  const doc = popproDatabase[activeDocId];

  // Jika ID dokumen tiada dalam pangkalan data, papar ralat mesra pengguna
  if (!doc) {
    return (
      <div className="flex flex-col items-center justify-center p-8 bg-[#121212] rounded-xl border border-zinc-800">
        <p className="text-zinc-400 mb-4">Dokumen tidak ditemui.</p>
        <button onClick={onClose} className="px-4 py-2 bg-white text-black font-bold rounded-full">
          Kembali ke Feed
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col md:flex-row gap-6">
      {/* ================= SUB-SIDEBAR (Direktori Dokumen di Sebelah Kiri) ================= */}
      <div className="w-full md:w-64 shrink-0 bg-[#121212] rounded-xl border border-zinc-800 p-4 h-fit">
        <div className="flex items-center justify-between mb-4 pb-2 border-b border-zinc-800">
          <span className="text-xs font-bold text-[#FE2C55] uppercase tracking-wider">Direktori Dokumen</span>
          <button 
            onClick={onClose}
            className="text-[11px] text-zinc-400 hover:text-white border border-zinc-700 px-2 py-0.5 rounded"
          >
            ← Tutup
          </button>
        </div>
        
        <nav className="space-y-1">
          {Object.entries(popproDatabase).map(([id, item]) => (
            <button
              key={id}
              onClick={() => onNavigateLegal(id)}
              className={`w-full text-left text-xs px-3 py-2 rounded transition-colors block ${
                activeDocId === id
                  ? 'bg-zinc-800 text-[#00c285] font-bold border-l-2 border-[#00c285]'
                  : 'text-zinc-400 hover:bg-zinc-900 hover:text-white'
              }`}
            >
              {item.title}
            </button>
          ))}
        </nav>
      </div>

      {/* ================= PANEL PEMBACA UTAMA (Kanan) ================= */}
      <div className="flex-1 bg-[#121212] rounded-xl border border-zinc-800 p-6 md:p-8 flex flex-col justify-between min-h-[400px]">
        <div>
          <div className="flex items-center gap-2 text-xs text-zinc-500 mb-2">
            <span>Poppro Legal & Support</span>
            <span>•</span>
            <span>{doc.category}</span>
            <span>•</span>
            <span className="text-zinc-400">{doc.lastUpdated}</span>
          </div>
          
          <h1 className="text-2xl md:text-3xl font-black tracking-tight mb-6 text-white border-b border-zinc-800 pb-4">
            {doc.title}
          </h1>
          
          {/* Kandungan dinonjolkan secara selamat */}
          <div 
            className="prose prose-invert text-sm md:text-base leading-relaxed space-y-4 [&>h3]:text-lg [&>h3]:font-bold [&>h3]:text-white [&>h3]:pt-4 [&>p]:text-zinc-400"
            dangerouslySetInnerHTML={{ __html: doc.content }}
          />
        </div>
      </div>
    </div>
  );
};
