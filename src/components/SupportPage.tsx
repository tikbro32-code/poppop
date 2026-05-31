import React from 'react';
import { Search, MoreVertical, ArrowRight, User, PlaySquare, Camera, Tv, Coins, Lock } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import Logo from './Logo';

export default function SupportPage() {
  const navigate = useNavigate();

  const categories = [
    {
      title: 'Akaun',
      description: 'Urus profil anda, maklumat log masuk dan tetapan akaun.',
      icon: User
    },
    {
      title: 'Penggunaan Poppro',
      description: 'Teroka cara menggunakan apl dan berinteraksi dengan orang lain.',
      icon: PlaySquare
    },
    {
      title: 'Siaran',
      description: 'Cipta, urus dan baiki video anda.',
      icon: Camera
    },
    {
      title: 'Poppro LIVE',
      description: 'Dapatkan petua dan sokongan untuk Poppro LIVE.',
      icon: Tv
    },
    {
      title: 'Pengewangan',
      description: 'Dapatkan sokongan tentang pengewangan, pembayaran dan e-...',
      icon: Coins
    },
    {
      title: 'Privasi & keselamatan...',
      description: 'Ketahui tentang privasi, keselamatan pengguna dan melaporkan kandungan...',
      icon: Lock
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
          <button className="bg-[var(--primary-green)] text-black px-6 py-2 rounded-md font-bold hover:brightness-110 transition-colors text-sm">
            Log masuk
          </button>
          <button className="text-[var(--text-main)] hover:bg-[var(--sidebar-bg)] p-1.5 rounded-full transition-colors">
            <MoreVertical size={24} />
          </button>
        </div>
      </header>

      <main className="flex-1 overflow-y-auto bg-[var(--bg-dark)]">
        <div className="max-w-[1000px] mx-auto px-6 md:px-12 py-12 md:py-20">
          
          <h1 className="text-4xl md:text-[44px] font-bold text-[var(--text-main)] mb-8 leading-tight">
            Bagaimanakah kami boleh<br />membantu?
          </h1>
          
          <div className="relative max-w-[600px] mb-16">
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-[var(--text-secondary)]" size={20} />
            <input 
              type="text" 
              placeholder="Cari artikel bantuan" 
              className="w-full bg-[var(--sidebar-bg)] border border-[var(--border-color)] hover:brightness-110 transition-colors rounded-full py-3.5 pl-12 pr-6 focus:outline-none text-[15px] text-[var(--text-main)] placeholder-[var(--text-secondary)]"
            />
          </div>

          <div className="mb-16">
            <h2 className="text-xl font-bold text-[var(--text-main)] mb-6">Soalan lazim</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-5 gap-x-8">
              <Link to="/support/verify-card" className="flex items-start gap-3 text-[var(--text-main)] hover:underline group">
                <div className="mt-1.5 w-3.5 h-3.5 rounded-full border-[1.5px] border-[var(--primary-green)] flex-shrink-0"></div>
                <span className="text-[15px]">Bagaimana boleh saya mengesahkan kad pembayaran saya?</span>
              </Link>
              <Link to="/support/privacy-face-voice" className="flex items-start gap-3 text-[var(--text-main)] hover:underline group">
                <div className="mt-1.5 w-3.5 h-3.5 rounded-full border-[1.5px] border-[var(--primary-green)] flex-shrink-0"></div>
                <span className="text-[15px]">Cara kami memproses maklumat muka dan suara</span>
              </Link>
              <Link to="/support/poppro-plus" className="flex items-start gap-3 text-[var(--text-main)] hover:underline group">
                <div className="mt-1.5 w-3.5 h-3.5 rounded-full border-[1.5px] border-[var(--primary-green)] flex-shrink-0"></div>
                <span className="text-[15px]">Poppro Plus</span>
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
            {categories.map((cat, i) => {
              let path = '#';
              if (cat.title === 'Akaun') path = '/support/account';
              else if (cat.title === 'Penggunaan Poppro') path = '/support/usage';
              else if (cat.title === 'Siaran') path = '/support/posting';
              else if (cat.title === 'Poppro LIVE') path = '/support/live';
              else if (cat.title === 'Pengewangan') path = '/support/monetization';
              else if (cat.title === 'Privasi & keselamatan...') path = '/support/privacy-safety';
              else if (cat.title === 'Lain-lain') path = '/support/other';

              return (
                <Link 
                  key={i} 
                  to={path} 
                  className="block p-6 bg-[var(--sidebar-bg)] border border-[var(--border-color)] rounded-2xl hover:shadow-lg transition-all duration-300 relative overflow-hidden group"
                >
                  <h3 className="text-[17px] font-bold text-[var(--text-main)] mb-2 relative z-10">{cat.title}</h3>
                  <p className="text-[13px] text-[var(--text-secondary)] leading-relaxed relative z-10">{cat.description}</p>
                  
                  <div className="absolute -bottom-4 -right-4 text-[var(--text-secondary)] opacity-[0.08] group-hover:scale-110 group-hover:opacity-[0.15] transition-all duration-500">
                    <cat.icon size={100} strokeWidth={1} />
                  </div>
                </Link>
              );
            })}
          </div>

          <div className="flex justify-end mt-8">
            <a href="#" className="flex items-center gap-1 text-[15px] font-bold text-[var(--text-main)] hover:underline">
              Lihat topik lain <ArrowRight size={18} />
            </a>
          </div>

        </div>
      </main>
    </div>
  );
}
