import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SafetyNav from './SafetyNav';

export default function PartneringWithExpertsPage() {
  return (
    <div className="min-h-screen bg-white text-[#121212] font-sans">
      <SafetyNav />

      <main className="pb-32">
        <div className="max-w-[1200px] mx-auto px-6 pt-16">
          
          {/* Hero Section */}
          <div className="flex flex-col md:flex-row gap-12 items-center mb-32">
            <div className="flex-1 space-y-6">
              <h2 className="text-[#FF0050] font-bold text-sm tracking-wider uppercase">Penglibatan Kami</h2>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight">
                Bekerjasama<br/>dengan pakar
              </h1>
              <p className="text-lg text-gray-800 leading-relaxed max-w-[400px]">
                Kami mendengar komuniti dan pakar kami dari seluruh dunia untuk membantu kami menyampaikan pengalaman Poppro yang selamat dan positif.
              </p>
            </div>
            <div className="flex-1">
              <img 
                src="https://images.unsplash.com/photo-1530549387789-4c1017266635?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Perenang" 
                className="rounded-[32px] w-full h-[600px] object-cover"
              />
            </div>
          </div>

          {/* Banner */}
          <div className="bg-[#c8f5f0] rounded-[32px] p-16 md:p-24 text-center flex flex-col items-center justify-center mb-32">
            <h2 className="text-sm font-bold tracking-wider uppercase mb-6 text-[#121212]">Penglibatan Kami</h2>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight mb-8">
              Bekerjasama dengan pakar keselamatan
            </h1>
            <p className="text-lg text-gray-800 leading-relaxed max-w-[500px] mb-12">
              Kami mendengar komuniti dan pakar kami dari seluruh dunia untuk membantu kami menyampaikan pengalaman Poppro yang selamat dan positif.
            </p>
            <button className="border border-[#121212] text-[#121212] px-8 py-3 rounded-full font-bold hover:bg-[#121212] hover:text-white transition-colors">
              Teroka
            </button>
          </div>

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="flex-1">
              <img 
                src="https://images.unsplash.com/photo-1579227114347-15d08fc37cae?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Menyusun bunga" 
                className="rounded-[32px] w-full h-[400px] object-cover"
              />
            </div>
            <div className="flex-1 space-y-6">
              <h2 className="text-[#FF0050] font-bold text-sm tracking-wider uppercase">Majlis Penasihat</h2>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight">
                Membentuk Poppro dengan bimbingan pakar
              </h1>
              <p className="text-lg text-gray-800 leading-relaxed">
                Terokai cara Majlis Penasihat serantau dan Majlis Belia global kami membantu kami memahami dan menangani isu keselamatan dalam talian dengan lebih baik.
              </p>
              <div className="pt-6">
                <button className="border border-black text-black px-8 py-3 rounded-full font-bold hover:bg-black hover:text-white transition-colors">
                  Teroka
                </button>
              </div>
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
