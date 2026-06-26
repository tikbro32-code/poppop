import React from 'react';
import { ChevronDown, ArrowLeft, Globe, Video, Linkedin, Youtube, Instagram, ThumbsUp, ThumbsDown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Logo from './Logo';
import SafetyNav from './SafetyNav';

export default function SafeSharingPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white text-[#121212] font-sans">
      <SafetyNav />

      <main className="max-w-[1000px] mx-auto px-6 pt-16 pb-32">
        <div className="bg-[#0B3B24] text-white rounded-3xl p-12 md:p-16 mb-12">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-none">
            Cara Berkongsi Cerita Anda dengan Selamat
          </h1>
        </div>

        <div className="max-w-[800px] mx-auto">
          <div className="prose prose-lg text-[#121212]">
            
            <p className="mb-6 leading-relaxed">
              Di Poppro, kami percaya bahawa perkongsian cerita dan ekspresi kreatif adalah nadi komuniti kami. Sama ada anda berkongsi pengalaman peribadi, bakat, atau idea, adalah penting untuk melakukannya dalam persekitaran yang selamat dan positif.
            </p>
            <p className="mb-16 leading-relaxed">
              Panduan ini akan memberikan anda maklumat dan alat untuk membantu anda berkongsi cerita anda sambil melindungi privasi dan kesejahteraan anda di platform kami.
            </p>

            <h2 className="text-[32px] font-bold mb-8 tracking-tight">Kawal Siapa Yang Melihat Kandungan Anda</h2>
            
            <p className="mb-6 leading-relaxed">
              Anda sentiasa mengawal siapa yang boleh berinteraksi dengan cerita anda. Poppro menyediakan pelbagai tetapan privasi yang membolehkan anda menyesuaikan khalayak untuk setiap siaran:
            </p>
            
            <ul className="list-disc pl-6 mb-8 space-y-4">
              <li className="leading-relaxed"><strong>Tetapan Akaun Peribadi:</strong> Anda boleh menetapkan keseluruhan akaun anda kepada peribadi, bermakna hanya pengikut yang anda luluskan sahaja boleh melihat siaran anda.</li>
              <li className="leading-relaxed"><strong>Privasi Siaran Individu:</strong> Anda boleh melaraskan privasi untuk setiap video yang anda muat naik, memilih antara "Semua orang," "Kawan," atau "Hanya saya."</li>
              <li className="leading-relaxed"><strong>Kawal Komen:</strong> Anda boleh memilih siapa yang boleh meninggalkan komen pada video anda, atau mematikan komen sepenuhnya untuk video tertentu.</li>
              <li className="leading-relaxed"><strong>Penapisan Komen:</strong> Gunakan penapis kata kunci untuk menyembunyikan komen yang mengandungi perkataan atau frasa tertentu secara automatik.</li>
            </ul>

            <h2 className="text-[32px] font-bold mb-8 tracking-tight">Menjaga Privasi Maklumat Peribadi</h2>
            
            <p className="mb-6 leading-relaxed">
              Apabila berkongsi cerita peribadi, adalah penting untuk berhati-hati tentang maklumat yang anda dedahkan:
            </p>

            <ul className="list-disc pl-6 mb-16 space-y-4">
              <li className="leading-relaxed">Elakkan daripada berkongsi maklumat yang boleh dikenal pasti secara peribadi (PII) seperti alamat rumah, nombor telefon, atau butiran kewangan.</li>
              <li className="leading-relaxed">Berhati-hati dengan apa yang kelihatan di latar belakang video anda. Pastikan dokumen peribadi atau tanda tempat yang boleh mendedahkan lokasi sebenar anda tidak kelihatan.</li>
              <li className="leading-relaxed">Gunakan ciri kabur atau pelekat jika perlu untuk menyembunyikan maklumat sensitif sebelum memuat naik.</li>
            </ul>

            <div className="bg-gray-50 p-8 rounded-2xl mb-16">
              <h3 className="font-bold text-lg mb-4">Sokongan Komuniti</h3>
              <p className="mb-4 text-sm leading-relaxed">
                Jika anda pernah berasa tidak selesa atau terancam dengan interaksi di Poppro, sila ketahui bahawa sokongan tersedia. Anda boleh <a href="/reporting" className="underline font-semibold">melaporkan sebarang kandungan atau akaun</a> yang melanggar Garis Panduan Komuniti kami.
              </p>
              <p className="text-sm leading-relaxed">
                Selain itu, pastikan anda menyemak <a href="/wellbeing-guide" className="underline font-semibold">Panduan Kesejahteraan</a> kami untuk sumber kesihatan mental dan tip kesejahteraan digital.
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
