import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SafetyNav from './SafetyNav';

export default function YouthSafetyCenterPage() {
  return (
    <div className="min-h-screen bg-white text-[#121212] font-sans">
      <SafetyNav />

      <main className="pb-32">
        <div className="max-w-[1200px] mx-auto px-6">
          
          {/* Top Banner */}
          <div className="bg-gray-100 rounded-xl p-4 flex items-center gap-3 mt-6 mb-12">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-black">
              <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
              <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
            </svg>
            <p className="text-[15px]">
              <span className="font-semibold">Pusat Keselamatan Remaja</span> diwujudkan dengan Kerjasama <a href="#" className="underline font-semibold hover:text-gray-700">Majlis Belia Poppro.</a>
            </p>
          </div>

          {/* Hero Section */}
          <div className="flex flex-col md:flex-row gap-12 items-center mb-32">
            <div className="flex-1 space-y-6">
              <h2 className="text-[#FF0050] font-bold text-sm tracking-wider uppercase">Pusat Keselamatan Remaja</h2>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight">
                Memperkasakan<br/>remaja di Poppro
              </h1>
              <p className="text-lg text-gray-800 leading-relaxed max-w-[400px]">
                Pusat Keselamatan Remaja ialah tempat untuk anda menemui ciri, kawalan dan alat keselamatan untuk menyesuaikan pengalaman Poppro terbaik anda. Ingat, anda perlu berumur sekurang-kurangnya 13 tahun untuk membuat akaun Poppro. Di sesetengah negara, umur minimum mungkin berbeza berdasarkan undang-undang tempatan.
              </p>
            </div>
            <div className="flex-1">
              <img 
                src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Remaja dengan fon kepala" 
                className="rounded-[32px] w-full h-[600px] object-cover"
              />
            </div>
          </div>

          {/* Manage your experience */}
          <div className="mb-32">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Urus pengalaman anda</h2>
            
            <div className="flex flex-col md:flex-row gap-8">
              <div className="flex-1">
                <img 
                  src="https://images.unsplash.com/photo-1546519638-68e109498ffc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                  alt="Bermain bola keranjang" 
                  className="rounded-[32px] w-full h-[400px] object-cover"
                />
              </div>
              <div className="flex-1 flex flex-col gap-6">
                <div className="border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition-shadow cursor-pointer h-full flex flex-col justify-center">
                  <h3 className="text-2xl font-bold mb-4">Terokai ciri keselamatan Poppro</h3>
                  <p className="text-gray-600 mb-8">
                    Lindungi akaun anda dengan ciri keselamatan dan perlindungan ini.
                  </p>
                  <div className="flex items-center gap-2 font-semibold">
                    Terokai <ArrowRight size={20} />
                  </div>
                </div>

                <div className="border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition-shadow cursor-pointer h-full flex flex-col justify-center">
                  <h3 className="text-2xl font-bold mb-4">Poppro, cara anda</h3>
                  <p className="text-gray-600 mb-8">
                    Urus siapa yang anda berhubung dengan di Poppro dan gunakan tetapan keselamatan kami untuk menyesuaikan pengalaman anda.
                  </p>
                  <div className="flex items-center gap-2 font-semibold">
                    Terokai <ArrowRight size={20} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Digital Wellbeing */}
          <div className="flex flex-col md:flex-row gap-12 mb-32">
            <div className="flex-1 space-y-6">
              <h2 className="text-[#FF0050] font-bold text-sm tracking-wider uppercase">Kesejahteraan Digital</h2>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight">
                Cipta pengalaman<br/>dalam talian yang<br/>positif
              </h1>
              <p className="text-lg text-gray-800 leading-relaxed mb-8">
                Terokai petua kami tentang pengurusan masa skrin, tabiat digital yang seimbang dan banyak lagi.
              </p>
              
              <div className="flex flex-col border-l-2 border-black ml-2 pl-6 space-y-6 py-2">
                <Link to="/guardians-guide" className="text-lg hover:font-bold transition-all">Panduan Penjaga</Link>
                <Link to="/wellbeing-guide" className="text-lg hover:font-bold transition-all">Panduan Kesejahteraan</Link>
              </div>
            </div>
            
            <div className="flex-1 bg-[#0B3B24] rounded-[32px] p-12 text-white flex flex-col justify-center">
              <h2 className="text-3xl font-bold leading-tight mb-12">
                Ketahui cara Poppro menyokong pengalaman yang selamat dan kreatif untuk remaja anda dengan alatan seperti Family Pairing.
              </h2>
              <Link to="/guardians-guide" className="border border-white text-white px-8 py-3 rounded-full font-bold hover:bg-white hover:text-[#0B3B24] transition-colors w-fit">
                Panduan Penjaga
              </Link>
            </div>
          </div>

        </div>
      </main>

      <footer className="border-t border-gray-200 py-16 px-6">
        <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
          <div className="text-4xl font-bold">P</div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-16 flex-1 text-[13px] text-gray-600">
            <div className="space-y-4">
              <h4 className="font-bold text-black tracking-wide uppercase">Syarikat</h4>
              <ul className="space-y-3">
                <li><a href="#" className="hover:underline">Perihal Poppro</a></li>
                <li><a href="#" className="hover:underline">Bilik berita</a></li>
                <li><a href="#" className="hover:underline">Hubungi</a></li>
                <li><a href="#" className="hover:underline">Kerjaya</a></li>
                <li><a href="#" className="hover:underline">ByteDance</a></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="font-bold text-black tracking-wide uppercase">Program</h4>
              <ul className="space-y-3">
                <li><a href="#" className="hover:underline">Poppro for Good</a></li>
                <li><a href="#" className="hover:underline">Poppro for Developers</a></li>
                <li><a href="#" className="hover:underline">Effect House</a></li>
                <li><a href="#" className="hover:underline">Iklankan di Poppro</a></li>
                <li><a href="#" className="hover:underline">Poppro Browse</a></li>
                <li><a href="#" className="hover:underline">Poppro Embeds</a></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="font-bold text-black tracking-wide uppercase">Sumber</h4>
              <ul className="space-y-3">
                <li><a href="#" className="hover:underline">Pusat Bantuan</a></li>
                <li><a href="#" className="hover:underline">Pusat Keselamatan</a></li>
                <li><a href="#" className="hover:underline">Pusat Privasi</a></li>
                <li><a href="#" className="hover:underline">Akademi Pencipta</a></li>
                <li><a href="#" className="hover:underline">Garis Panduan Komuniti</a></li>
                <li><a href="#" className="hover:underline">Ketelusan</a></li>
                <li><a href="#" className="hover:underline">Kebolehcapaian</a></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="font-bold text-black tracking-wide uppercase">Perundangan</h4>
              <ul className="space-y-3">
                <li><a href="#" className="hover:underline">Terma Perkhidmatan</a></li>
                <li><a href="#" className="hover:underline">Dasar Privasi</a></li>
                <li><a href="#" className="hover:underline">Dasar Harta Intelek</a></li>
                <li><a href="#" className="hover:underline">Garis Panduan Penguatkuasaan Undang-undang Poppro</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="max-w-[1200px] mx-auto mt-16 pt-8 border-t border-gray-200 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <p>© 2026 Poppro</p>
          <div className="flex gap-4">
            <span className="font-bold text-black flex items-center gap-2 border border-gray-200 rounded px-3 py-1 cursor-pointer">
              Bahasa Melayu <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6"/></svg>
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
