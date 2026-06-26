import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { TemplateViewer } from './TemplateViewer';
import { ArrowLeft } from 'lucide-react';

export default function LegalDocsPage() {
  const { docId } = useParams();
  const navigate = useNavigate();

  const handleClose = () => {
    navigate('/');
  };

  const handleNavigateLegal = (newDocId: string) => {
    navigate(`/legal/${newDocId}`);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[var(--bg-dark)]">
      <header className="sticky top-0 z-50 bg-[var(--bg-dark)]/80 backdrop-blur-md border-b border-[var(--border-color)] px-4 py-4 flex items-center">
        <button 
          onClick={handleClose} 
          className="p-2 mr-4 rounded-full hover:bg-[var(--sidebar-bg)] transition-colors flex items-center gap-2"
        >
          <ArrowLeft className="text-[var(--text-main)]" size={24} />
        </button>
        <h1 className="text-xl font-bold text-[var(--text-main)]">Kembali ke Laman Utama</h1>
      </header>
      
      <div className="flex-1 overflow-y-auto p-4 md:p-8">
        <div className="max-w-5xl mx-auto">
          <TemplateViewer 
            activeDocId={docId || 'terms'} 
            onClose={handleClose}
            onNavigateLegal={handleNavigateLegal}
          />
        </div>
      </div>
    </div>
  );
}

