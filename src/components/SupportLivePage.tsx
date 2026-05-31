import React from 'react';
import { Search, MoreVertical } from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';
import Logo from './Logo';
import SupportSidebar from './SupportSidebar';

export default function SupportLivePage() {
  const navigate = useNavigate();

  const sections = [
    {
      title: 'About LIVE',
      links: [
        'What is Poppro LIVE?',
        'Who can go LIVE?'
      ]
    },
    {
      title: 'Watching LIVE',
      links: [
        'Finding LIVE videos',
        'Interacting with creators',
        'Virtual gifts'
      ]
    },
    {
      title: 'Hosting LIVE',
      links: [
        'How to go LIVE',
        'LIVE settings',
        'Moderators'
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[var(--bg-dark)] text-[var(--text-main)] font-sans">
      <header className="h-[60px] border-b border-[var(--border-color)] flex items-center justify-between px-4 md:px-6 shrink-0 bg-[var(--header-bg)] z-10">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate('/')}>
          <Logo size="md" />
          <span className="text-2xl font-semibold text-[var(--text-secondary)] ml-1">Support</span>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="relative hidden md:block">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--text-secondary)]" size={18} />
            <input 
              type="text" 
              placeholder="Cari artikel bantuan" 
              className="bg-[var(--sidebar-bg)] hover:brightness-110 border border-[var(--border-color)] transition-colors rounded-full py-2.5 pl-11 pr-4 w-[300px] focus:outline-none text-sm text-[var(--text-main)] placeholder-[var(--text-secondary)]"
            />
          </div>
          <button className="bg-[var(--primary-green)] text-black px-6 py-2 rounded-md font-bold hover:brightness-110 transition-colors text-sm">
            Log masuk
          </button>
          <button className="text-[var(--text-main)] hover:bg-[var(--sidebar-bg)] p-1.5 rounded-full transition-colors">
            <MoreVertical size={24} />
          </button>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        <SupportSidebar activePath="/support/live" />

        <main className="flex-1 overflow-y-auto bg-[var(--bg-dark)]">
          <div className="max-w-[1000px] px-8 md:px-12 py-10">
            <div className="space-y-12">
              {sections.map((section, index) => (
                <div key={index}>
                  <h2 className="text-[20px] font-bold text-[var(--text-main)] mb-6">{section.title}</h2>
                  {section.links.length > 0 && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-y-5 gap-x-20">
                      {section.links.map((link, linkIndex) => (
                        <Link 
                          key={linkIndex} 
                          to="/support/article"
                          className="text-[15px] text-[var(--text-main)] hover:underline cursor-pointer block"
                        >
                          {link}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
