import React from 'react';
import { ChevronDown } from 'lucide-react';
import SafetyNav from './SafetyNav';

export default function ContentModerationPage() {
  return (
    <div className="min-h-screen bg-white text-[#121212] font-sans">
      <SafetyNav />

      <main className="pb-32">
        <div className="max-w-[1200px] mx-auto px-6 pt-12">
          
          {/* Header Banner */}
          <div className="bg-[#0B3B24] text-white rounded-3xl p-12 md:p-16 mb-12">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              Penyederhanaan<br/>Kandungan
            </h1>
          </div>

          <div className="max-w-[800px] mx-auto">
            <p className="text-lg text-gray-800 mb-8 font-semibold">
              Kami komited untuk mengekalkan persekitaran yang selamat dan positif untuk pengguna kami. Ketahui lebih lanjut tentang cara kami menyederhanakan kandungan di platform kami.
            </p>

            <div className="space-y-6 text-gray-800 leading-relaxed text-[15px]">
              <h3 className="text-2xl font-bold text-black pt-4">Pendekatan Kami</h3>
              <p>
                Kami menggunakan gabungan teknologi dan penyederhanaan manusia untuk memastikan kandungan di platform kami mematuhi Garis Panduan Komuniti kami. Pendekatan kami direka bentuk untuk menjadi proaktif, adil dan telus.
              </p>

              <h4 className="font-bold text-black pt-4 text-xl">Sistem Automatik</h4>
              <p>
                Sistem automatik kami dikuasakan oleh kecerdasan buatan termaju dan direka bentuk untuk mengesan dan membuang kandungan yang melanggar dasar kami dengan pantas. Sistem ini mengimbas video, imej, audio dan teks, membantu kami menangkap kandungan yang memudaratkan sebelum ia dilihat oleh khalayak yang lebih luas.
              </p>

              <h4 className="font-bold text-black pt-4 text-xl">Penyederhanaan Manusia</h4>
              <p>
                Walaupun sistem automatik kami sangat berkesan, pemahaman konteks dan nuansa manusia selalunya diperlukan. Pasukan penyederhana global kami meneliti kandungan yang dilaporkan oleh komuniti kami atau ditandakan oleh sistem kami, membuat keputusan berasaskan Garis Panduan Komuniti komprehensif kami.
              </p>
              
              <h4 className="font-bold text-black pt-4 text-xl">Dasar Komprehensif</h4>
              <p>Dasar kami melindungi spektrum isu yang luas, daripada pencegahan ucapan kebencian hingga ke perlindungan kanak-kanak. Untuk maklumat terperinci, lawati <a href="/community-guidelines" className="text-blue-600 hover:underline">Garis Panduan Komuniti</a> kami.</p>

              <h3 className="text-2xl font-bold text-black pt-8">Melaporkan Kandungan</h3>
              <p>
                Pengguna memainkan peranan penting dalam memastikan keselamatan platform kami. Kami memudahkan anda melaporkan sebarang kandungan atau tingkah laku yang anda percaya melanggar panduan kami. Apabila laporan diterima, kami akan mengambil tindakan pantas dan membetulkan isu tersebut.
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
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
                <li><a href="/community-guidelines" className="hover:underline">Garis Panduan Komuniti</a></li>
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
              Bahasa Melayu <ChevronDown size={14} />
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
