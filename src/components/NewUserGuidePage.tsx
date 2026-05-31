import React from 'react';
import { Search, ChevronDown, ArrowRight, Globe, Linkedin, Youtube, Instagram, Video, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Logo from './Logo';

export default function NewUserGuidePage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white text-[#121212] font-sans">
      <nav className="flex items-center justify-between px-6 py-4 bg-white sticky top-0 z-50">
        <div className="flex items-center gap-4">
          <button onClick={() => navigate(-1)} className="p-2 rounded-full hover:bg-gray-100 transition-colors">
            <ArrowLeft size={24} className="text-black" />
          </button>
          <Logo />
        </div>
        
        <div className="hidden lg:flex items-center gap-8 text-[15px] font-semibold">
          <div className="relative group">
            <div className="flex items-center gap-1 cursor-pointer border-b-2 border-[#ff0050] pb-1 text-black group-hover:text-gray-600 transition-colors">
              Alat & Panduan <ChevronDown size={18} className="text-gray-500 group-hover:rotate-180 transition-transform" />
            </div>
            <div className="absolute top-full left-0 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              <div className="w-[650px] bg-white border border-gray-200 rounded-2xl shadow-xl p-8">
                <div className="grid grid-cols-2 gap-12">
                  <div className="space-y-4">
                    <h4 className="text-black font-bold text-xs tracking-wider">PENGALAMAN POPPRO ANDA</h4>
                    <ul className="space-y-3 font-normal">
                      {['Panduan Pengguna Baharu', 'Tetapan Privasi & Kandungan', 'Menyesuaikan Paparan Untuk Anda', 'Cara Berkongsi Cerita Anda dengan Selamat', 'Cara Melaporkan', 'Panduan Keterangkuman & Kekitaan', 'Panduan Kesejahteraan', 'Panduan Maklumat Salah yang Memudaratkan'].map(item => (
                        <li key={item}>
                          <a href={item === 'Panduan Pengguna Baharu' ? '/new-user-guide' : item === 'Tetapan Privasi & Kandungan' ? '/privacy-settings' : item === 'Menyesuaikan Paparan Untuk Anda' ? '/customizing-feed' : '#'} className="text-gray-600 hover:text-black hover:underline transition-colors block py-1">
                            {item}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="space-y-8">
                    <div className="space-y-4">
                      <h4 className="text-black font-bold text-xs tracking-wider">REMAJA & PENJAGA</h4>
                      <ul className="space-y-3 font-normal">
                        {['Pusat Keselamatan Remaja', 'Panduan Penjaga'].map(item => (
                          <li key={item}><a href="#" className="text-gray-600 hover:text-black hover:underline transition-colors block py-1">{item}</a></li>
                        ))}
                      </ul>
                    </div>
                    <div className="space-y-4">
                      <h4 className="text-black font-bold text-xs tracking-wider">LIVE</h4>
                      <ul className="space-y-3 font-normal">
                        <li><a href="#" className="text-gray-600 hover:text-black hover:underline transition-colors block py-1">Panduan Keselamatan LIVE</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="mt-8 pt-6 border-t border-gray-100">
                  <button className="bg-gray-100 text-black px-6 py-3 rounded-full font-bold hover:bg-gray-200 transition-colors w-fit">
                    Gambaran Keseluruhan Alat & Panduan
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="relative group">
            <div className="flex items-center gap-1 cursor-pointer hover:text-gray-600 pb-1 border-b-2 border-transparent transition-colors">
              Sokongan Komuniti <ChevronDown size={18} className="text-gray-500 group-hover:rotate-180 transition-transform" />
            </div>
            <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              <div className="w-[850px] bg-white border border-gray-200 rounded-2xl shadow-xl p-8">
                <div className="grid grid-cols-3 gap-8">
                  <div className="space-y-4">
                    <h4 className="text-black font-bold text-xs tracking-wider">KESEJAHTERAAN</h4>
                    <ul className="space-y-3 font-normal">
                      {['Kecelaruan Pemakanan', 'Peristiwa Tragis', 'Penggunaan Bahan Terlarang', 'Perjudian', 'Bunuh Diri & Mencederakan Diri', 'Cabaran Dalam Talian'].map(item => (
                        <li key={item}><a href="#" className="text-gray-600 hover:text-black hover:underline transition-colors block py-1">{item}</a></li>
                      ))}
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <h4 className="text-black font-bold text-xs tracking-wider">PENDERAAN & EKSPLOITASI</h4>
                    <ul className="space-y-3 font-normal">
                      {['Kebajikan Haiwan', 'Pencegahan Buli', 'Menentang Ucapan dan Tingkah Laku Kebencian', 'Eksploitasi Manusia', 'Penderaan Seksual', 'Ugutan berunsur seksual'].map(item => (
                        <li key={item}><a href="#" className="text-gray-600 hover:text-black hover:underline transition-colors block py-1">{item}</a></li>
                      ))}
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <h4 className="text-black font-bold text-xs tracking-wider">AMALAN MENIPU</h4>
                    <ul className="space-y-3 font-normal">
                      {['Pemalsuan', 'Penipuan & Scam'].map(item => (
                        <li key={item}><a href="#" className="text-gray-600 hover:text-black hover:underline transition-colors block py-1">{item}</a></li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="mt-8 pt-6 border-t border-gray-100 flex items-center gap-8">
                  <button className="bg-gray-100 text-black px-6 py-3 rounded-full font-bold hover:bg-gray-200 transition-colors w-fit">
                    Gambaran Keseluruhan Sokongan Komuniti
                  </button>
                  <a href="#" className="flex items-center gap-2 text-[#ff0050] font-bold hover:underline">
                    Sumber Sokongan <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="relative group">
            <div className="flex items-center gap-1 cursor-pointer hover:text-gray-600 pb-1 border-b-2 border-transparent transition-colors">
              Ketelusan <ChevronDown size={18} className="text-gray-500 group-hover:rotate-180 transition-transform" />
            </div>
            <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              <div className="w-[350px] bg-white border border-gray-200 rounded-2xl shadow-xl p-8">
                <ul className="space-y-4 mb-8 font-normal">
                  {['Laporan Ketelusan', 'Langkah Serantau', 'Cerapan'].map(item => (
                    <li key={item}><a href="#" className="text-gray-600 hover:text-black hover:underline transition-colors block text-[15px]">{item}</a></li>
                  ))}
                </ul>
                <div className="pt-6 border-t border-gray-100">
                  <button className="bg-gray-100 text-black px-6 py-3 rounded-full font-bold hover:bg-gray-200 transition-colors w-full">
                    Gambaran Keseluruhan Ketelusan
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="relative group">
            <div className="flex items-center gap-1 cursor-pointer hover:text-gray-600 pb-1 border-b-2 border-transparent transition-colors">
              Dasar & Penglibatan <ChevronDown size={18} className="text-gray-500 group-hover:rotate-180 transition-transform" />
            </div>
            <div className="absolute top-full right-0 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              <div className="w-[350px] bg-white border border-gray-200 rounded-2xl shadow-xl p-8">
                <ul className="space-y-4 mb-8 font-normal">
                  {['Komitmen Kami', 'Garis Panduan Komuniti', 'Penglibatan Kami'].map(item => (
                    <li key={item}><a href="#" className="text-gray-600 hover:text-black hover:underline transition-colors block text-[15px]">{item}</a></li>
                  ))}
                </ul>
                <div className="pt-6 border-t border-gray-100">
                  <button className="bg-gray-100 text-black px-6 py-3 rounded-full font-bold hover:bg-gray-200 transition-colors w-full">
                    Gambaran Keseluruhan Dasar & Penglibatan
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative hidden md:block">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
          <input 
            type="text" 
            placeholder="Cari" 
            className="bg-[#f1f1f2] rounded-full py-2.5 pl-11 pr-4 text-[15px] focus:outline-none w-[240px] font-medium placeholder-gray-500" 
          />
        </div>
      </nav>

      <div className="max-w-[1100px] mx-auto px-6 pt-16 pb-20 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 pr-4">
          <h3 className="text-[#00f2ea] font-bold text-sm tracking-wide uppercase">TETAPAN PRIVASI & KANDUNGAN</h3>
          <h1 className="text-[56px] md:text-[72px] font-bold tracking-tight text-black leading-[1.1]">
            Urus privasi<br />anda
          </h1>
          <p className="text-[17px] text-gray-800 max-w-[400px] leading-relaxed">
            Terokai tetapan dan kawalan akaun yang membantu anda melindungi privasi anda dan memastikan maklumat anda selamat.
          </p>
        </div>
        <div className="rounded-[32px] overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1555243896-c709bfa0b564?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
            alt="Privacy" 
            className="w-full h-[540px] object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>

      <div className="max-w-[1100px] mx-auto px-6 mb-24">
        <div className="bg-[#f2e3c6] rounded-[32px] py-24 px-8 text-center">
          <h3 className="text-black font-bold text-sm tracking-wide uppercase mb-6">TETAPAN KOMUNITI & KANDUNGAN</h3>
          <h2 className="text-[40px] md:text-[52px] font-bold text-black mb-6 leading-[1.1]">
            Kawalan<br />keselamatan &<br />privasi
          </h2>
          <p className="text-gray-900 text-[17px] max-w-[600px] mx-auto mb-10 leading-relaxed">
            Tinjauan terperinci tentang tetapan dan kawalan akaun untuk membantu anda melindungi keselamatan dan privasi anda di Poppro.
          </p>
          <button className="border border-black text-black px-10 py-3.5 rounded-full font-semibold text-[15px] hover:bg-black hover:text-white transition-colors">
            Terokai
          </button>
        </div>
      </div>

      <div className="max-w-[1100px] mx-auto px-6 mb-32">
        <div className="text-center mb-14">
          <h3 className="text-[#ff0050] font-bold text-sm tracking-wide uppercase mb-4">PRIVASI DI POPPRO</h3>
          <h2 className="text-[40px] md:text-[48px] font-bold text-black">
            Urus & lindungi privasi anda
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 items-stretch">
          <div className="rounded-[32px] overflow-hidden h-full">
            <img 
              src="https://images.unsplash.com/photo-1546519638-68e109498ffc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
              alt="Basketball" 
              className="w-full h-full object-cover min-h-[440px]"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="flex flex-col gap-6">
            <div className="border border-gray-200 rounded-[32px] p-10 hover:shadow-md transition-shadow cursor-pointer flex-1 flex flex-col justify-center">
              <h3 className="text-[24px] font-bold text-black mb-4">Panduan Privasi & Keselamatan</h3>
              <p className="text-gray-700 text-[16px] mb-8 leading-relaxed">
                Terokai alat untuk melindungi log masuk anda, mengurus pilihan privasi dan memastikan maklumat peribadi anda selamat.
              </p>
              <div className="flex items-center gap-2 text-black font-bold mt-auto text-[15px]">
                Terokai <ArrowRight className="w-5 h-5" />
              </div>
            </div>

            <div className="border border-gray-200 rounded-[32px] p-10 hover:shadow-md transition-shadow cursor-pointer flex-1 flex flex-col justify-center">
              <h3 className="text-[24px] font-bold text-black mb-4">Pusat Privasi Global Poppro</h3>
              <p className="text-gray-700 text-[16px] mb-8 leading-relaxed">
                Fahami cara kami mengumpul, menggunakan dan melindungi data peribadi serta cari alatan dan sumber untuk menyokong pengalaman Poppro anda.
              </p>
              <div className="flex items-center gap-2 text-black font-bold mt-auto text-[15px]">
                Terokai <ArrowRight className="w-5 h-5" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="border-t border-gray-200 bg-white pt-16 pb-12 px-6">
        <div className="max-w-[1100px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-6">
            <Logo />
            <div className="flex items-center gap-2 text-[15px] font-semibold cursor-pointer hover:bg-gray-50 px-4 py-2 rounded-md transition-colors">
              <Globe size={20} />
              Bahasa Melayu
              <ChevronDown size={20} />
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            <div>
              <h4 className="font-bold text-black mb-6 text-[14px] tracking-wide">SYARIKAT</h4>
              <ul className="space-y-4 text-[14px] text-gray-600 font-medium">
                <li><a href="#" className="hover:underline">Perihal Poppro</a></li>
                <li><a href="#" className="hover:underline">Bilik berita</a></li>
                <li><a href="#" className="hover:underline">Hubungi</a></li>
                <li><a href="#" className="hover:underline">Kerjaya</a></li>
                <li><a href="#" className="hover:underline">Poppro Induk</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-black mb-6 text-[14px] tracking-wide">PROGRAM</h4>
              <ul className="space-y-4 text-[14px] text-gray-600 font-medium">
                <li><a href="#" className="hover:underline">Poppro for Good</a></li>
                <li><a href="#" className="hover:underline">Poppro for Developers</a></li>
                <li><a href="#" className="hover:underline">Effect House</a></li>
                <li><a href="#" className="hover:underline">Iklankan di Poppro</a></li>
                <li><a href="#" className="hover:underline">Poppro Browse</a></li>
                <li><a href="#" className="hover:underline">Poppro Embeds</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-black mb-6 text-[14px] tracking-wide">SUMBER</h4>
              <ul className="space-y-4 text-[14px] text-gray-600 font-medium">
                <li><a href="#" className="hover:underline">Pusat Bantuan</a></li>
                <li><a href="#" className="hover:underline">Pusat Keselamatan</a></li>
                <li><a href="#" className="hover:underline">Pusat Privasi</a></li>
                <li><a href="#" className="hover:underline">Akademi Pencipta</a></li>
                <li><a href="#" className="hover:underline">Garis Panduan Komuniti</a></li>
                <li><a href="#" className="hover:underline">Ketelusan</a></li>
                <li><a href="#" className="hover:underline">Kebolehcapaian</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-black mb-6 text-[14px] tracking-wide">PERUNDANGAN</h4>
              <ul className="space-y-4 text-[14px] text-gray-600 font-medium">
                <li><a href="#" className="hover:underline">Terma Perkhidmatan</a></li>
                <li><a href="#" className="hover:underline">Dasar Privasi</a></li>
                <li><a href="#" className="hover:underline">Dasar Harta Intelek</a></li>
                <li><a href="#" className="hover:underline">Garis Panduan Penguatkuasaan</a></li>
                <li><a href="#" className="hover:underline">Undang-undang Poppro</a></li>
              </ul>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-200 gap-6">
            <div className="text-[14px] text-gray-600 font-medium">
              © 2025 Poppro
            </div>
            <div className="flex items-center gap-3">
              <a href="#" className="w-9 h-9 bg-black rounded-full flex items-center justify-center text-white hover:bg-gray-800 transition-colors">
                <Video size={18} fill="white" />
              </a>
              <a href="#" className="w-9 h-9 bg-black rounded-full flex items-center justify-center text-white hover:bg-gray-800 transition-colors">
                <Linkedin size={18} fill="white" />
              </a>
              <a href="#" className="w-9 h-9 bg-black rounded-full flex items-center justify-center text-white hover:bg-gray-800 transition-colors">
                <Youtube size={18} fill="white" />
              </a>
              <a href="#" className="w-9 h-9 bg-black rounded-full flex items-center justify-center text-white hover:bg-gray-800 transition-colors">
                <Instagram size={18} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

