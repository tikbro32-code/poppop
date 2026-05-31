import React, { useState, useEffect } from 'react';
import { Shield, Users, Lock, Eye, Menu, X, Play, Info, ArrowRight, ChevronRight, Search, Globe, ArrowLeft, ChevronDown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Logo from './Logo';

export default function SafetyPage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[var(--bg-dark)] text-[var(--text-main)] font-sans">
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-[var(--bg-dark)]/90 backdrop-blur-md shadow-lg border-b border-[var(--border-color)] py-2' : 'bg-transparent py-4'}`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-4">
              <button onClick={() => navigate(-1)} className="p-2 rounded-full hover:bg-white/10 transition-colors">
                <ArrowLeft size={24} />
              </button>
              <Logo />
            </div>
            <div className="hidden md:flex items-center gap-2 text-sm font-semibold text-[var(--text-secondary)]">
              <div className="relative group">
                <button className="flex items-center gap-1 px-4 py-2 rounded-lg hover:text-[var(--primary-green)] group-hover:bg-white/5 group-hover:text-[var(--text-main)] transition-colors">
                  Alat & Panduan
                  <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform" />
                </button>
                
                <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="w-[650px] bg-[var(--bg-dark)] border border-[var(--border-color)] rounded-2xl shadow-2xl p-8">
                    <div className="grid grid-cols-2 gap-12">
                      <div className="space-y-4">
                        <h4 className="text-[var(--text-main)] font-bold text-xs tracking-wider">PENGALAMAN POPPRO ANDA</h4>
                        <ul className="space-y-3">
                          {['Panduan Pengguna Baharu', 'Tetapan Privasi & Kandungan', 'Menyesuaikan Paparan Untuk Anda', 'Cara Berkongsi Cerita Anda dengan Selamat', 'Cara Melaporkan', 'Panduan Keterangkuman & Kekitaan', 'Panduan Kesejahteraan', 'Panduan Maklumat Salah yang Memudaratkan'].map(item => (
                            <li key={item}>
                              <a 
                                href={item === 'Panduan Pengguna Baharu' ? '/new-user-guide' : item === 'Tetapan Privasi & Kandungan' ? '/privacy-settings' : item === 'Menyesuaikan Paparan Untuk Anda' ? '/customizing-feed' : '#'} 
                                className="text-[var(--text-secondary)] hover:text-[var(--primary-green)] transition-colors block py-1"
                              >
                                {item}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="space-y-8">
                        <div className="space-y-4">
                          <h4 className="text-[var(--text-main)] font-bold text-xs tracking-wider">REMAJA & PENJAGA</h4>
                          <ul className="space-y-3">
                            {['Pusat Keselamatan Remaja', 'Panduan Penjaga'].map(item => (
                              <li key={item}><a href="#" className="text-[var(--text-secondary)] hover:text-[var(--primary-green)] transition-colors block py-1">{item}</a></li>
                            ))}
                          </ul>
                        </div>
                        <div className="space-y-4">
                          <h4 className="text-[var(--text-main)] font-bold text-xs tracking-wider">LIVE</h4>
                          <ul className="space-y-3">
                            <li><a href="#" className="text-[var(--text-secondary)] hover:text-[var(--primary-green)] transition-colors block py-1">Panduan Keselamatan LIVE</a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-8 pt-6 border-t border-[var(--border-color)]">
                      <button className="bg-white text-black px-6 py-3 rounded-full font-bold hover:bg-gray-200 transition-colors w-fit">
                        Gambaran Keseluruhan Alat & Panduan
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative group">
                <button className="flex items-center gap-1 px-4 py-2 rounded-lg hover:text-[var(--primary-green)] group-hover:bg-white/5 group-hover:text-[var(--text-main)] transition-colors">
                  Sokongan Komuniti
                  <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform" />
                </button>
                
                <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="w-[850px] bg-[var(--bg-dark)] border border-[var(--border-color)] rounded-2xl shadow-2xl p-8">
                    <div className="grid grid-cols-3 gap-8">
                      <div className="space-y-4">
                        <h4 className="text-[var(--text-main)] font-bold text-xs tracking-wider">KESEJAHTERAAN</h4>
                        <ul className="space-y-3">
                          {['Kecelaruan Pemakannya', 'Peristiwa Tragis', 'Penggunaan Bahan Terlarang', 'Perjudian', 'Bunuh Diri & Mencederakan Diri', 'Cabaran Dalam Talian'].map(item => (
                            <li key={item}><a href="#" className="text-[var(--text-secondary)] hover:text-[var(--primary-green)] transition-colors block py-1">{item}</a></li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="space-y-4">
                        <h4 className="text-[var(--text-main)] font-bold text-xs tracking-wider">PENDERAAN & EKSPLOITASI</h4>
                        <ul className="space-y-3">
                          {['Kebajikan Haiwan', 'Pencegahan Buli', 'Menentang Ucapan dan Tingkah Laku Kebencian', 'Eksploitasi Manusia', 'Penderaan Seksual', 'Ugutan berunsur seksual'].map(item => (
                            <li key={item}><a href="#" className="text-[var(--text-secondary)] hover:text-[var(--primary-green)] transition-colors block py-1">{item}</a></li>
                          ))}
                        </ul>
                      </div>

                      <div className="space-y-4">
                        <h4 className="text-[var(--text-main)] font-bold text-xs tracking-wider">AMALAN MENIPU</h4>
                        <ul className="space-y-3">
                          {['Pemalsuan', 'Penipuan & Scam'].map(item => (
                            <li key={item}><a href="#" className="text-[var(--text-secondary)] hover:text-[var(--primary-green)] transition-colors block py-1">{item}</a></li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    
                    <div className="mt-8 pt-6 border-t border-[var(--border-color)] flex items-center gap-8">
                      <button className="bg-white text-black px-6 py-3 rounded-full font-bold hover:bg-gray-200 transition-colors w-fit">
                        Gambaran Keseluruhan Sokongan Komuniti
                      </button>
                      <a href="#" className="flex items-center gap-2 text-[#ff3b5c] font-bold hover:underline">
                        Sumber Sokongan <ArrowRight className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative group">
                <button className="flex items-center gap-1 px-4 py-2 rounded-lg hover:text-[var(--primary-green)] group-hover:bg-white/5 group-hover:text-[var(--text-main)] transition-colors">
                  Ketelusan
                  <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform" />
                </button>
                
                <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="w-[350px] bg-[var(--bg-dark)] border border-[var(--border-color)] rounded-2xl shadow-2xl p-8">
                    <ul className="space-y-4 mb-8">
                      {['Laporan Ketelusan', 'Langkah Serantau', 'Cerapan'].map(item => (
                        <li key={item}><a href="#" className="text-[var(--text-secondary)] hover:text-[var(--primary-green)] transition-colors block text-base">{item}</a></li>
                      ))}
                    </ul>
                    
                    <div className="pt-6 border-t border-[var(--border-color)]">
                      <button className="bg-white text-black px-6 py-3 rounded-full font-bold hover:bg-gray-200 transition-colors w-full">
                        Gambaran Keseluruhan Ketelusan
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative group">
                <button className="flex items-center gap-1 px-4 py-2 rounded-lg hover:text-[var(--primary-green)] group-hover:bg-white/5 group-hover:text-[var(--text-main)] transition-colors">
                  Dasar & Penglibatan
                  <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform" />
                </button>
                
                <div className="absolute top-full right-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="w-[350px] bg-[var(--bg-dark)] border border-[var(--border-color)] rounded-2xl shadow-2xl p-8">
                    <ul className="space-y-4 mb-8">
                      {['Komitmen Kami', 'Garis Panduan Komuniti', 'Penglibatan Kami'].map(item => (
                        <li key={item}><a href="#" className="text-[var(--text-secondary)] hover:text-[var(--primary-green)] transition-colors block text-base">{item}</a></li>
                      ))}
                    </ul>
                    
                    <div className="pt-6 border-t border-[var(--border-color)]">
                      <button className="bg-white text-black px-6 py-3 rounded-full font-bold hover:bg-gray-200 transition-colors w-full">
                        Gambaran Keseluruhan Dasar & Penglibatan
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative hidden lg:block">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--text-secondary)]" />
              <input 
                type="text" 
                placeholder="Cari" 
                className="bg-[var(--sidebar-bg)] border border-[var(--border-color)] rounded-full py-2 pl-10 pr-4 text-sm w-64 focus:outline-none focus:ring-2 focus:ring-[var(--primary-green)] text-[var(--text-main)]"
              />
            </div>
            <button className="md:hidden">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h1 className="text-[32px] md:text-[40px] font-bold text-[var(--text-main)] mb-10">
              Keselamatan di Poppro
            </h1>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-4 text-[#757575] font-bold text-[15px] max-w-4xl">
              <button onClick={() => navigate('/support')} className="hover:text-[var(--text-main)] text-left block">Bantuan</button>
              <button onClick={() => navigate('/safety')} className="hover:text-[var(--text-main)] text-left block text-[var(--primary-green)]">Keselamatan</button>
              <button onClick={() => navigate('/terms')} className="hover:text-[var(--text-main)] text-left block">Terma</button>
              
              <button onClick={() => navigate('/privacy-settings')} className="hover:text-[var(--text-main)] text-left block">Dasar Privasi</button>
              <button className="hover:text-[var(--text-main)] text-left block">Kebolehcapaian</button>
              <div className="hidden md:block"></div>

              <button onClick={() => navigate('/support/privacy-safety')} className="hover:text-[var(--text-main)] text-left block">Pusat Privasi</button>
              <button className="hover:text-[var(--text-main)] text-left block">Akademi Pencipta</button>
              <div className="hidden md:block"></div>

              <button onClick={() => navigate('/new-user-guide')} className="hover:text-[var(--text-main)] text-left block">Garis Panduan Komuniti</button>
              <button className="hover:text-[var(--text-main)] text-left block">Hak cipta</button>
              <div className="hidden md:block"></div>

              <button className="hover:text-[var(--text-main)] text-left block md:col-span-2">Garis Panduan Penguatkuasaan Undang-undang</button>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center border-t border-[var(--border-color)] pt-20">
            <div className="space-y-8">
              <span className="text-[var(--primary-green)] font-bold text-xs uppercase tracking-widest">Amanah & Keselamatan</span>
              <h2 className="text-6xl md:text-7xl font-extrabold leading-tight tracking-tight">
                Cipta, temui dan berhubung dengan selamat di Poppro
              </h2>
            <div className="flex gap-4">
               <button className="bg-[var(--primary-green)] text-black px-8 py-3 rounded-full font-bold hover:brightness-110 transition-all">
                Terokai dasar
              </button>
            </div>
          </div>
          <div className="relative">
             <div className="rounded-[40px] overflow-hidden shadow-2xl aspect-[3/4] max-w-sm mx-auto relative group border border-[var(--border-color)]">
                <img 
                  src="https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&q=80&w=800" 
                  alt="Safety focus" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-all"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 cursor-pointer hover:scale-110 transition-transform">
                  <Play className="text-white fill-white w-6 h-6 ml-1" />
                </div>
                <div className="absolute bottom-6 left-6 bg-black/60 backdrop-blur-md px-4 py-2 rounded-full text-xs font-bold shadow-lg border border-white/10 text-white">
                  Safety & privacy controls
                </div>
             </div>
          </div>
        </div>
      </div>
      </section>

      <section className="py-24 bg-[var(--sidebar-bg)] border-y border-[var(--border-color)] px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="text-[var(--primary-green)] font-bold text-xs uppercase tracking-widest">Tindakan Kami</span>
              <h2 className="text-4xl md:text-5xl font-bold mt-4 leading-tight max-w-2xl">Ruang yang lebih selamat, dibina untuk anda</h2>
            </div>
            <button className="border border-[var(--border-color)] hover:bg-white/5 px-6 py-3 rounded-full font-bold transition-colors whitespace-nowrap w-fit">
              Terokai dasar
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Memperkasakan kreativiti dengan membina untuk keselamatan",
                img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=600"
              },
              {
                title: "Menguatkuasakan peraturan kami secara adil dan konsisten",
                img: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=600"
              },
              {
                title: "Bekerjasama dengan pakar untuk Poppro yang lebih selamat",
                img: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=600"
              }
            ].map((item, idx) => (
              <div key={idx} className="group cursor-pointer space-y-6">
                <div className="w-full rounded-3xl overflow-hidden aspect-[4/3] relative border border-[var(--border-color)]">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <h3 className="text-2xl font-bold leading-snug group-hover:text-[var(--primary-green)] transition-colors">{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 border-b border-[var(--border-color)] overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <h2 className="text-4xl md:text-5xl font-bold max-w-2xl">Kemajuan yang terbuka dan telus</h2>
            <button className="border border-[var(--border-color)] hover:bg-white/5 px-6 py-3 rounded-full font-bold transition-colors text-sm whitespace-nowrap w-fit">
              Pusat Ketelusan
            </button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-emerald-900/20 border border-emerald-500/20 p-8 rounded-[32px] hover:bg-emerald-900/30 transition-colors flex flex-col justify-between min-h-[380px]">
               <div>
                 <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">Majlis Belia Global</span>
                 <h4 className="text-6xl font-extrabold text-emerald-300 mt-6">30</h4>
                 <p className="text-base font-medium text-emerald-100/80 leading-relaxed mt-4">remaja dari 20 negara mengangkat suara belia di Poppro</p>
               </div>
               <button className="flex items-center gap-2 font-bold text-emerald-400 hover:underline w-fit mt-8">
                 Baca artikel <ArrowRight className="w-4 h-4" />
               </button>
            </div>
            {/* Card 2 */}
            <div className="bg-[var(--primary-green)] text-black p-8 rounded-[32px] hover:brightness-105 transition-colors flex flex-col justify-between min-h-[380px]">
               <div>
                 <span className="text-xs font-bold uppercase tracking-widest opacity-80">Penyemakan Fakta Global</span>
                 <h4 className="text-6xl font-extrabold mt-6">20+</h4>
                 <p className="text-base font-medium opacity-90 leading-relaxed mt-4">rakan kongsi penyemakan fakta menilai ketepatan kandungan</p>
               </div>
               <button className="flex items-center gap-2 font-bold hover:underline w-fit mt-8">
                 Baca artikel <ArrowRight className="w-4 h-4" />
               </button>
            </div>
            {/* Card 3 */}
            <div className="bg-gray-800/50 border border-gray-700 p-8 rounded-[32px] hover:bg-gray-800/80 transition-colors flex flex-col justify-between min-h-[380px]">
               <div>
                 <span className="text-xs font-bold uppercase tracking-widest text-gray-400">Pusat Ketelusan</span>
                 <h4 className="text-6xl font-extrabold text-gray-200 mt-6">790+</h4>
                 <p className="text-base font-medium text-gray-400 leading-relaxed mt-4">pelawat fizikal ke empat pusat global kami pada tahun 2025</p>
               </div>
            </div>
            {/* Card 4 */}
            <div className="bg-blue-900/20 border border-blue-500/20 p-8 rounded-[32px] hover:bg-blue-900/30 transition-colors flex flex-col justify-between min-h-[380px]">
               <div>
                 <span className="text-xs font-bold uppercase tracking-widest text-blue-400">Penyelidikan</span>
                 <h4 className="text-6xl font-extrabold text-blue-300 mt-6">40+</h4>
                 <p className="text-base font-medium text-blue-100/80 leading-relaxed mt-4">rakan penyelidik bebas melayari data Poppro</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-20 px-6 bg-[var(--bg-dark)]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12 text-sm">
          <div className="space-y-6">
            <Logo />
            <div className="flex items-center gap-2 text-[var(--text-secondary)] font-bold border border-[var(--border-color)] rounded-full px-3 py-1 w-fit cursor-pointer hover:bg-white/5 transition-colors">
              <Globe className="w-4 h-4" />
              <span>Bahasa Melayu</span>
            </div>
          </div>
          <div>
            <h5 className="font-bold mb-6 text-[var(--text-main)]">SYARIKAT</h5>
            <ul className="space-y-4 text-[var(--text-secondary)]">
              <li><a href="#" className="hover:text-[var(--primary-green)] transition-colors">Perihal Poppro</a></li>
              <li><a href="#" className="hover:text-[var(--primary-green)] transition-colors">Bilik berita</a></li>
              <li><a href="#" className="hover:text-[var(--primary-green)] transition-colors">Hubungi</a></li>
              <li><a href="#" className="hover:text-[var(--primary-green)] transition-colors">Kerjaya</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold mb-6 text-[var(--text-main)]">PROGRAM</h5>
            <ul className="space-y-4 text-[var(--text-secondary)]">
              <li><a href="#" className="hover:text-[var(--primary-green)] transition-colors">Poppro for Good</a></li>
              <li><a href="#" className="hover:text-[var(--primary-green)] transition-colors">Poppro for Developers</a></li>
              <li><a href="#" className="hover:text-[var(--primary-green)] transition-colors">Effect House</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold mb-6 text-[var(--text-main)]">SUMBER</h5>
            <ul className="space-y-4 text-[var(--text-secondary)]">
              <li><a href="#" className="hover:text-[var(--primary-green)] transition-colors">Pusat Bantuan</a></li>
              <li><a href="#" className="hover:text-[var(--primary-green)] transition-colors">Pusat Keselamatan</a></li>
              <li><a href="#" className="hover:text-[var(--primary-green)] transition-colors">Dasar Privasi</a></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-[var(--border-color)] text-xs text-[var(--text-secondary)]">
          © 2026 Poppro
        </div>
      </footer>
    </div>
  );
}
