import React from 'react';
import { Search, ChevronDown, ArrowRight, Globe, Linkedin, Youtube, Instagram, Video, ArrowLeft, ThumbsUp, ThumbsDown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Logo from './Logo';

export default function PrivacySettingsPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white text-[#121212] font-sans">
      <nav className="flex items-center justify-between px-6 py-4 bg-white sticky top-0 z-50 border-b border-gray-100">
        <div className="flex items-center gap-4">
          <button onClick={() => navigate(-1)} className="p-2 rounded-full hover:bg-gray-100 transition-colors">
            <ArrowLeft size={24} className="text-black" />
          </button>
          <Logo />
        </div>
        
        <div className="hidden lg:flex items-center gap-8 text-[15px] font-semibold">
          <div className="relative group">
            <div className="flex items-center gap-1 cursor-pointer border-b-2 border-transparent pb-1 text-black hover:text-gray-600 transition-colors">
              Alat & Panduan <ChevronDown size={18} className="text-gray-500 group-hover:rotate-180 transition-transform" />
            </div>
            <div className="absolute top-full left-0 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              <div className="w-[650px] bg-white border border-gray-200 rounded-2xl shadow-xl p-8">
                <div className="grid grid-cols-2 gap-12">
                  <div className="space-y-4">
                    <h4 className="text-black font-bold text-xs tracking-wider">YOUR POPPRO EXPERIENCE</h4>
                    <ul className="space-y-3 font-normal">
                      {['New User Guide', 'Privacy & Content Settings', 'Customizing Your For You Feed', 'How to Share Your Stories Safely', 'How to Report', 'Inclusivity & Belonging Guide', 'Well-being Guide', 'Harmful Misinformation Guide'].map(item => (
                        <li key={item}>
                          <a href={item === 'New User Guide' ? '/new-user-guide' : item === 'Privacy & Content Settings' ? '/privacy-settings' : item === 'Customizing Your For You Feed' ? '/customizing-feed' : '#'} className="text-gray-600 hover:text-black hover:underline transition-colors block py-1">
                            {item}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="space-y-8">
                    <div className="space-y-4">
                      <h4 className="text-black font-bold text-xs tracking-wider">TEENS & GUARDIANS</h4>
                      <ul className="space-y-3 font-normal">
                        {['Safety Center for Teens', 'Guardian\'s Guide'].map(item => (
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
          </div>

          <div className="relative group">
            <div className="flex items-center gap-1 cursor-pointer hover:text-gray-600 pb-1 border-b-2 border-transparent transition-colors">
              Ketelusan <ChevronDown size={18} className="text-gray-500 group-hover:rotate-180 transition-transform" />
            </div>
          </div>

          <div className="relative group">
            <div className="flex items-center gap-1 cursor-pointer hover:text-gray-600 pb-1 border-b-2 border-transparent transition-colors">
              Dasar & Penglibatan <ChevronDown size={18} className="text-gray-500 group-hover:rotate-180 transition-transform" />
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
                <li><a href="#" className="hover:underline">BroPro for Developers</a></li>
                <li><a href="#" className="hover:underline">Effect House</a></li>
                <li><a href="#" className="hover:underline">Iklankan di BroPro</a></li>
                <li><a href="#" className="hover:underline">BroPro Browse</a></li>
                <li><a href="#" className="hover:underline">BroPro Embeds</a></li>
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

