import React from 'react';
import { Search, ChevronDown, ArrowRight, Globe, Linkedin, Youtube, Instagram, Video, ArrowLeft, ThumbsUp, ThumbsDown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Logo from './Logo';
import SafetyNav from './SafetyNav';

export default function PrivacySettingsPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white text-[#121212] font-sans">
      <SafetyNav />

      <main className="pb-24">
        <div className="max-w-[1100px] mx-auto px-6 pt-12 pb-24">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 space-y-6">
              <p className="text-[#fe2c55] font-bold text-sm tracking-wider uppercase">Tetapan Privasi & Kandungan</p>
              <h1 className="text-[56px] md:text-[72px] font-bold text-black leading-[1.1] tracking-tight">
                Urus privasi anda
              </h1>
              <p className="text-[18px] text-gray-700 leading-relaxed max-w-md">
                Terokai tetapan dan kawalan akaun yang membantu anda melindungi privasi anda dan memastikan maklumat anda selamat.
              </p>
            </div>
            <div className="flex-1 w-full">
              <img
                src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Privacy"
                className="w-full h-[500px] object-cover rounded-[32px]"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>

        <div className="max-w-[1100px] mx-auto px-6 mb-24">
          <div className="bg-[#f2e1c8] rounded-[32px] p-16 text-center flex flex-col items-center">
            <p className="text-black font-bold text-sm tracking-wider uppercase mb-6">Tetapan Komuniti & Kandungan</p>
            <h2 className="text-[48px] font-bold text-black leading-[1.1] tracking-tight mb-6 max-w-2xl">
              Kawalan keselamatan & privasi
            </h2>
            <p className="text-[18px] text-gray-800 leading-relaxed max-w-2xl mb-10">
              Tinjauan terperinci tentang tetapan dan kawalan akaun untuk membantu anda melindungi keselamatan dan privasi anda di BroPro.
            </p>
            <button className="border border-black rounded-full px-8 py-3 font-semibold hover:bg-black hover:text-white transition-colors">
              Terokai
            </button>
          </div>
        </div>

        <div className="max-w-[1100px] mx-auto px-6 mb-24">
          <div className="text-center mb-16">
            <p className="text-[#fe2c55] font-bold text-sm tracking-wider uppercase mb-4">Privasi di BroPro</p>
            <h2 className="text-[48px] font-bold text-black leading-[1.1] tracking-tight">
              Urus & lindungi privasi anda
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="rounded-[32px] overflow-hidden min-h-[400px] h-full">
              <img
                src="https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Privacy and Security"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="space-y-6 flex flex-col justify-center">
              <div className="border border-gray-200 rounded-[24px] p-8 hover:shadow-lg transition-shadow cursor-pointer group">
                <h3 className="text-[24px] font-bold text-black mb-4">Panduan Privasi & Keselamatan</h3>
                <p className="text-[16px] text-gray-600 mb-6">
                  Terokai alat untuk melindungi log masuk anda, mengurus pilihan privasi dan memastikan maklumat peribadi anda selamat.
                </p>
                <div className="flex items-center font-bold text-black group-hover:underline">
                  Terokai <ArrowRight className="ml-2 w-5 h-5" />
                </div>
              </div>

              <div className="border border-gray-200 rounded-[24px] p-8 hover:shadow-lg transition-shadow cursor-pointer group">
                <h3 className="text-[24px] font-bold text-black mb-4">Pusat Privasi Global BroPro</h3>
                <p className="text-[16px] text-gray-600 mb-6">
                  Fahami cara kami mengumpul, menggunakan dan melindungi data peribadi serta cari alatan dan sumber untuk menyokong pengalaman BroPro anda.
                </p>
                <div className="flex items-center font-bold text-black group-hover:underline">
                  Terokai <ArrowRight className="ml-2 w-5 h-5" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

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
                <li><a href="#" className="hover:underline">Perihal BroPro</a></li>
                <li><a href="#" className="hover:underline">Bilik berita</a></li>
                <li><a href="#" className="hover:underline">Hubungi</a></li>
                <li><a href="#" className="hover:underline">Kerjaya</a></li>
                <li><a href="#" className="hover:underline">ByteDance</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-black mb-6 text-[14px] tracking-wide">PROGRAM</h4>
              <ul className="space-y-4 text-[14px] text-gray-600 font-medium">
                <li><a href="#" className="hover:underline">BroPro for Good</a></li>
                <li><a href="/developers" className="hover:underline">BroPro for Developers</a></li>
                <li><a href="#" className="hover:underline">Effect House</a></li>
                <li><a href="#" className="hover:underline">Iklankan di BroPro</a></li>
                <li><a href="#" className="hover:underline">BroPro Browse</a></li>
                <li><a href="/embeds" className="hover:underline">BroPro Embeds</a></li>
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
                <li><a href="#" className="hover:underline">Undang-undang BroPro</a></li>
              </ul>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-200 gap-6">
            <div className="text-[14px] text-gray-600 font-medium">
              © 2025 BroPro
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

