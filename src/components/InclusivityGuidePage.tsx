import React from 'react';
import { ChevronDown, ArrowLeft, Globe, Video, Linkedin, Youtube, Instagram, ThumbsUp, ThumbsDown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Logo from './Logo';
import SafetyNav from './SafetyNav';

export default function InclusivityGuidePage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white text-[#121212] font-sans">
      <SafetyNav />

      <main className="max-w-[1000px] mx-auto px-6 pt-16 pb-32">
        <div className="bg-[#FFE500] rounded-[32px] p-12 md:p-20 mb-16">
          <h1 className="text-5xl md:text-[80px] font-bold tracking-tight text-black leading-none">
            Panduan Keterangkuman & Kekitaan
          </h1>
        </div>

        <div className="max-w-[800px] mx-auto">
          <div className="prose prose-lg text-[#121212]">
            <p className="mb-16 leading-relaxed">
              Di Poppro, kami percaya bahawa setiap suara berhak didengari. Keterangkuman dan kekitaan adalah teras kepada komuniti kami yang pelbagai dan kreatif. Panduan ini bertujuan untuk memberikan pandangan tentang cara kami membina persekitaran yang mengalu-alukan semua orang, tanpa mengira latar belakang, identiti, atau pengalaman mereka.
            </p>

            <h2 className="text-[32px] font-bold mb-8 leading-tight tracking-tight">Komitmen Kami Terhadap Kepelbagaian</h2>
            
            <p className="mb-8 leading-relaxed">
              Kami berdedikasi untuk memupuk komuniti global di mana pengguna berasa selamat untuk menyatakan diri mereka secara tulen. Ini bermakna kami secara aktif menentang diskriminasi, ucapan kebencian, dan sebarang bentuk gangguan yang menyasarkan individu berdasarkan kaum, etnik, agama, keupayaan, orientasi seksual, atau identiti jantina.
            </p>

            <h2 className="text-[32px] font-bold mb-8 tracking-tight">Membina Ruang Yang Selamat</h2>
            
            <p className="mb-6 leading-relaxed">
              Kesejahteraan komuniti kami adalah keutamaan kami. Kami menggunakan gabungan teknologi dan semakan manusia untuk memantau dan membuang kandungan yang melanggar Garis Panduan Komuniti kami. Kami juga memperkasakan pengguna dengan alat untuk mengurus pengalaman mereka:
            </p>
            
            <ul className="list-disc pl-6 mb-16 space-y-4 text-gray-800">
              <li className="leading-relaxed">
                <strong>Kawalan Komen:</strong> Pengguna boleh menapis atau mengehadkan komen pada video mereka untuk mencegah interaksi negatif.
              </li>
              <li className="leading-relaxed">
                <strong>Penyekatan dan Pelaporan:</strong> Menyediakan cara mudah untuk menyekat pengguna lain atau melaporkan kandungan yang tidak wajar.
              </li>
              <li className="leading-relaxed">
                <strong>Gesaan Kebaikan:</strong> Ciri yang menggalakkan pengguna untuk mempertimbangkan semula sebelum memuat naik komen yang mungkin menyinggung perasaan.
              </li>
            </ul>

            <h2 className="text-[32px] font-bold mb-8 tracking-tight">Menyokong Pencipta Yang Pelbagai</h2>
            
            <p className="mb-8 leading-relaxed">
              Kami meraikan pelbagai pencipta yang menjadikan Poppro tempat yang unik. Melalui pelbagai program dan inisiatif, kami berusaha untuk menonjolkan suara-suara yang kurang diwakili dan menyediakan mereka dengan sumber yang mereka perlukan untuk berkembang maju di platform kami.
            </p>

            <div className="bg-gray-50 p-8 rounded-2xl mb-16">
              <h3 className="font-bold text-lg mb-4">Pusat Keselamatan & Sumber</h3>
              <p className="mb-4 text-sm leading-relaxed">
                Untuk maklumat lanjut tentang dasar kami dan alat yang tersedia untuk melindungi diri anda, sila lawati <a href="#" className="underline font-semibold text-black">Pusat Keselamatan Poppro</a>.
              </p>
            </div>

            <div className="flex items-center justify-between border-t border-gray-200 pt-8">
              <span className="font-semibold">Adakah ini membantu?</span>
              <div className="flex gap-4">
                <button className="flex items-center gap-2 px-6 py-2 border border-gray-200 rounded-full hover:bg-gray-50 transition-colors font-medium">
                  <ThumbsUp size={18} /> Ya
                </button>
                <button className="flex items-center gap-2 px-6 py-2 border border-gray-200 rounded-full hover:bg-gray-50 transition-colors font-medium">
                  <ThumbsDown size={18} /> Tidak
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="border-t border-gray-200 bg-white pt-16 pb-12 px-6 mt-20">
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
                <li><a href="/developers" className="hover:underline">Poppro for Developers</a></li>
                <li><a href="#" className="hover:underline">Effect House</a></li>
                <li><a href="#" className="hover:underline">Iklankan di Poppro</a></li>
                <li><a href="#" className="hover:underline">Poppro Browse</a></li>
                <li><a href="/embeds" className="hover:underline">Poppro Embeds</a></li>
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
                <li><a href="/intellectual-property" className="hover:underline">Dasar Harta Intelek</a></li>
                <li><a href="#" className="hover:underline">Garis Panduan Penguatkuasaan</a></li>
                <li><a href="#" className="hover:underline">Undang-undang Poppro</a></li>
              </ul>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-200 gap-6">
            <div className="text-[14px] text-gray-600 font-medium">
              © {new Date().getFullYear()} Poppro
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
