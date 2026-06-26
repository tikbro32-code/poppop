import React from 'react';
import { ChevronDown, ArrowLeft } from 'lucide-react';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import Logo from './Logo';

export default function SafetyNav() {
  const navigate = useNavigate();
  const location = useLocation();

  const alatLinks = [
    { name: 'Panduan Pengguna Baharu', path: '/new-user-guide' },
    { name: 'Tetapan Privasi & Kandungan', path: '/privacy-settings' },
    { name: 'Menyesuaikan Paparan Untuk Anda', path: '/customizing-feed' },
    { name: 'Cara Berkongsi Cerita Anda dengan Selamat', path: '/safe-sharing' },
    { name: 'Cara Melaporkan', path: '/reporting' },
    { name: 'Panduan Keterangkuman & Kekitaan', path: '/inclusivity-guide' },
    { name: 'Panduan Kesejahteraan', path: '/wellbeing-guide' },
    { name: 'Panduan Maklumat Salah yang Memudaratkan', path: '/harmful-misinformation' }
  ];

  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-white sticky top-0 z-50 border-b border-gray-100">
      <div className="flex items-center gap-4">
        <button onClick={() => navigate(-1)} className="p-2 rounded-full hover:bg-gray-100 transition-colors">
          <ArrowLeft size={24} className="text-black" />
        </button>
        <Link to="/">
          <Logo />
        </Link>
      </div>
      
      <div className="hidden lg:flex items-center gap-8 text-[15px] font-semibold">
        <div className="relative group">
          <div className="flex items-center gap-1 cursor-pointer border-b-2 border-transparent hover:text-gray-600 pb-1 transition-colors">
            Alat & Panduan <ChevronDown size={18} className="text-gray-500 group-hover:rotate-180 transition-transform" />
          </div>
          
          <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
            <div className="w-[750px] bg-white border border-gray-200 rounded-2xl shadow-2xl p-8 cursor-default">
              <div className="grid grid-cols-2 gap-12">
                <div className="space-y-4">
                  <h4 className="text-black font-bold text-[13px] tracking-wide">PENGALAMAN POPPRO ANDA</h4>
                  <ul className="space-y-3 font-normal">
                    {alatLinks.map(item => (
                      <li key={item.name}>
                        <Link 
                          to={item.path} 
                          className={`hover:text-black transition-colors block py-1 ${location.pathname === item.path ? 'text-black font-semibold' : 'text-gray-500'}`}
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                    <li>
                      <a href="#" className="text-gray-500 hover:text-black transition-colors block py-1 mt-4">
                        Garis Panduan Permintaan Pengalihan<br/>Keluar Kerajaan (Bahasa Inggeris)
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="space-y-8">
                  <div className="space-y-4">
                    <h4 className="text-black font-bold text-[13px] tracking-wide">REMAJA & PENJAGA</h4>
                    <ul className="space-y-3 font-normal">
                      <li><Link to="/youth-safety-center" className="text-gray-500 hover:text-black transition-colors block py-1">Pusat Keselamatan Remaja</Link></li>
                      <li><Link to="/guardians-guide" className="text-gray-500 hover:text-black transition-colors block py-1">Panduan Penjaga</Link></li>
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <h4 className="text-black font-bold text-[13px] tracking-wide">LIVE</h4>
                    <ul className="space-y-3 font-normal">
                      <li><Link to="/live-safety-guide" className="text-gray-500 hover:text-black transition-colors block py-1">Panduan Keselamatan LIVE</Link></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="mt-8 pt-6 flex justify-start">
                <Link to="/safety" className="bg-black text-white px-6 py-3 rounded-full font-bold hover:bg-gray-800 transition-colors w-fit text-[15px]">
                  Gambaran Keseluruhan Alat & Panduan
                </Link>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex items-center gap-1 cursor-pointer hover:text-gray-600 pb-1 border-b-2 border-transparent transition-colors">
          Sokongan Komuniti <ChevronDown size={18} className="text-gray-500" />
        </div>
        <div className="flex items-center gap-1 cursor-pointer hover:text-gray-600 pb-1 border-b-2 border-transparent transition-colors">
          Ketelusan <ChevronDown size={18} className="text-gray-500" />
        </div>
        <div className="relative group">
          <div className="flex items-center gap-1 cursor-pointer hover:text-gray-600 pb-1 border-b-2 border-transparent transition-colors">
            Dasar & Penglibatan <ChevronDown size={18} className="text-gray-500 group-hover:rotate-180 transition-transform" />
          </div>
          
          <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
            <div className="w-[300px] bg-white border border-gray-200 rounded-2xl shadow-2xl p-4 cursor-default">
              <ul className="space-y-1">
                <li><Link to="/content-moderation" className="text-gray-700 hover:bg-gray-100 transition-colors block px-4 py-2 rounded-lg">Komitmen Kami</Link></li>
                <li><Link to="/community-guidelines" className="text-gray-700 hover:bg-gray-100 transition-colors block px-4 py-2 rounded-lg">Garis Panduan Komuniti</Link></li>
                <li><Link to="/partnering-with-experts" className="text-gray-700 hover:bg-gray-100 transition-colors block px-4 py-2 rounded-lg">Penglibatan Kami</Link></li>
              </ul>
              <div className="mt-4 pt-4 border-t border-gray-100 px-2">
                <button className="w-full bg-black text-white rounded-full py-3 text-sm font-semibold hover:bg-gray-800 transition-colors">
                  Gambaran Keseluruhan Dasar & Penglibatan
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="hidden md:flex items-center gap-2 bg-gray-100 rounded-full px-4 py-2">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-500"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
          <input type="text" placeholder="Cari" className="bg-transparent border-none outline-none text-[15px] w-20" />
        </div>
      </div>
    </nav>
  );
}
