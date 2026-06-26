import React, { useState } from 'react';
import { ChevronDown, ArrowLeft, Globe, Video, Linkedin, Youtube, Instagram, ThumbsUp, ThumbsDown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Logo from './Logo';
import SafetyNav from './SafetyNav';

export default function WellbeingGuidePage() {
  const navigate = useNavigate();
  const [openTip, setOpenTip] = useState<number | null>(null);
  const [openHelp, setOpenHelp] = useState<number | null>(null);

  const tips = [
    { title: "Sebelum penggunaan", content: "Fikirkan tentang tujuan anda menggunakan platform hari ini." },
    { title: "Semasa penggunaan", content: "Perhatikan perasaan anda dan berehat jika perlu." },
    { title: "Selepas penggunaan", content: "Renungkan pengalaman anda dan bagaimana ia mempengaruhi mood anda." }
  ];

  const helpTopics = [
    { title: "Tanda orang yang mengalami masalah", content: "Perubahan mood yang ketara, penarikan diri dari interaksi sosial, atau menyatakan rasa putus asa." },
    { title: "Langkah untuk MENCIPTA hubungan", content: "Dengar tanpa menghakimi, tawarkan sokongan, dan galakkan mereka mendapatkan bantuan profesional." },
    { title: "Peringatan", content: "Sentiasa utamakan keselamatan. Jika kecemasan, hubungi pihak berkuasa tempatan." }
  ];

  return (
    <div className="min-h-screen bg-white text-[#121212] font-sans">
      <SafetyNav />

      <main className="max-w-[1000px] mx-auto px-6 pt-16 pb-32">
        <div className="bg-[#FFE500] rounded-[32px] p-12 md:p-20 mb-16">
          <h1 className="text-5xl md:text-[80px] font-bold tracking-tight text-black leading-none">
            Panduan kesejahteraan
          </h1>
        </div>

        <div className="max-w-[800px] mx-auto">
          <div className="prose prose-lg text-[#121212]">
            <p className="mb-16 leading-relaxed">
              Kesejahteraan anda, dalam dan luar talian, penting bagi kami. Kami ingin anda berasa anda sentiasa boleh mengawal pengalaman Poppro anda dan berinteraksi dengan teknologi yang sesuai untuk anda. Untuk membantu anda dan komuniti kita yang lebih luas dengan lebih baik, Poppro bekerjasama dengan pakar untuk membangunkan set peralatan agar semua orang dapat mengetahui lebih lanjut tentang cara meningkatkan kesejahteraan diri mereka dan untuk membina komuniti dalam talian yang saling membantu.
            </p>

            <h2 className="text-[32px] font-bold mb-8 leading-tight tracking-tight">Cara mengakses kesejahteraan digital anda</h2>
            
            <p className="mb-12 leading-relaxed">
              Kesejahteraan Digital merujuk kepada keadaan kesihatan mental dan fizikal dalam konteks aktiviti digital atau dalam talian. Keadaan ini termasuk cara orang berinteraksi dengan teknologi dan Internet dan membantu menyokong hubungan sihat dan seimbang dengan peranti digital dan kandungan dalam talian.
            </p>
            <p className="mb-12 leading-relaxed">
              Penilaian kesejahteraan digital memerlukan kesedaran diri. Anda boleh menilai cara tabiat digital anda mempengaruhi kesihatan fizikal dan mental anda dengan:
            </p>

            <div className="space-y-12 mb-16">
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center shrink-0">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>
                </div>
                <p className="font-semibold text-xl">Mengimbas masa skrin anda</p>
              </div>
              
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center shrink-0">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
                </div>
                <p className="font-semibold text-xl">Menilai keadaan emosi selepas waktu skrin</p>
              </div>

              <div className="flex items-center gap-6">
                <div className="w-16 h-16 bg-purple-50 rounded-full flex items-center justify-center shrink-0">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-500"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
                </div>
                <p className="font-semibold text-xl">Memberikan tumpuan kepada pola dan kualiti tidur</p>
              </div>

              <div className="flex items-center gap-6">
                <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center shrink-0">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red-500"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>
                </div>
                <p className="font-semibold text-xl">Menilai produktiviti selepas aktiviti dalam talian</p>
              </div>
              
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 bg-yellow-50 rounded-full flex items-center justify-center shrink-0">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-yellow-500"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                </div>
                <p className="font-semibold text-xl">Menilai interaksi dalam talian</p>
              </div>

              <div className="flex items-center gap-6">
                <div className="w-16 h-16 bg-indigo-50 rounded-full flex items-center justify-center shrink-0">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-indigo-500"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                </div>
                <p className="font-semibold text-xl">Menilai amalan privasi dan keselamatan dalam talian</p>
              </div>

              <div className="flex items-center gap-6">
                <div className="w-16 h-16 bg-pink-50 rounded-full flex items-center justify-center shrink-0">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-pink-500"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
                </div>
                <p className="font-semibold text-xl">Membuat pertimbangan tentang penggunaan kandungan dalam talian</p>
              </div>
            </div>

            <h2 className="text-[32px] font-bold mb-8 tracking-tight">Tip untuk pertimbangan Masa Skrin</h2>
            <p className="mb-8 leading-relaxed">
              Sementara teknologi terus melengkapi kehidupan seharian kita, kita semua boleh menggunakan semua cara untuk mengimbangi pengalaman kesejahteraan digital kita.
            </p>
            <p className="mb-8 leading-relaxed">
              Di sini terdapat 7 soalan yang dibina dengan para pakar di <a href="#" className="underline">Internet Matters</a> yang boleh membantu anda ketika anda menimbangkan dan cuba mewujudkan tabiat digital yang sihat dan seimbang bersama-sama.
            </p>
            
            <div className="space-y-4 mb-16">
              {tips.map((tip, idx) => (
                <div key={idx} className="border border-gray-200 rounded-xl overflow-hidden">
                  <button 
                    onClick={() => setOpenTip(openTip === idx ? null : idx)}
                    className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
                  >
                    <span className="font-semibold text-lg">{tip.title}</span>
                    <ChevronDown size={20} className={`transform transition-transform ${openTip === idx ? 'rotate-180' : ''}`} />
                  </button>
                  {openTip === idx && (
                    <div className="px-6 pb-6 text-gray-600">
                      {tip.content}
                    </div>
                  )}
                </div>
              ))}
            </div>

            <h2 className="text-[32px] font-bold mb-8 tracking-tight">Alat untuk membantu kesejahteraan digital anda di platform</h2>
            
            <p className="mb-6 leading-relaxed">
              Ciri kesejahteraan digital di Poppro — atau remaja di bawah penjagaan anda — sentiasa awasi masa anda dalam talian. Ciri ini juga mengehadkan kandungan yang mungkin tidak sesuai untuk semua audiens. Tetapan ini mungkin berbeza-beza mengikut rantau anda dan versi apl.
            </p>
            
            <ul className="space-y-6 mb-8 text-gray-800">
              <li className="leading-relaxed">
                <strong>Masa skrin harian</strong> ialah <a href="#" className="underline">ciri</a> yang membolehkan anda menentukan jumlah masa yang ingin anda luangkan di Poppro setiap hari. Di Poppro, setiap akaun yang dipunyai oleh pengguna yang berumur bawah 18 tahun ditetapkan secara automatik kepada had masa skrin harian selama 60 minit.
              </li>
              <li className="leading-relaxed">
                <strong>Papan pemuka masa skrin</strong> ialah <a href="#" className="underline">ciri</a> akses mudah, menyediakan keterlihatan tentang cara atau masa anda menggunakan Poppro. Anda juga boleh memilih agar 'Laporan masa skrin mingguan' untuk wawasan ini dihantar terus ke peti masuk anda. Dengan cara ini, anda boleh membuat keputusan yang lebih waras tentang penggunaan anda, dan lebih memberikan tumpuan apabila anda menggunakannya.
              </li>
              <li className="leading-relaxed">
                <strong>Rehat masa skrin</strong> ialah ciri yang akan menggesa anda berehat selepas menikmati sejumlah masa skrin tidak terganggu yang tertentu, yang boleh anda tetapkan.
              </li>
              <li className="leading-relaxed">
                <strong>Mod Terbatas</strong> ialah <a href="#" className="underline">pilihan</a> yang mengehadkan kemunculan kandungan yang mungkin tidak sesuai untuk semua penonton. Ia boleh dihidupkan atau dimatikan melalui tetapan akaun anda. Mod Terbatas ialah salah satu ciri ibu bapa boleh mengawal secara langsung apabila Keselamatan Keluarga dihidupkan.
              </li>
            </ul>

            <p className="mb-4 leading-relaxed">Berikut ialah beberapa sumber tambahan untuk mengetahui lebih lanjut tentang kesejahteraan digital.</p>
            <ul className="list-disc pl-6 mb-16 space-y-2">
              <li><a href="#" className="underline">Mencipta diet digital yang seimbang</a></li>
              <li><a href="#" className="underline">Dapatkan set alatan digital diperibadikan milik anda</a></li>
            </ul>

            <h2 className="text-[32px] font-bold mb-8 tracking-tight">Bantuan Untuk Ahli Komuniti Yang Mengalami Tekanan</h2>
            
            <p className="mb-6 leading-relaxed">
              Keselamatan dan kesejahteraan ahli komuniti Poppro merupakan keutamaan kami. Kita semua mempunyai peranan dalam membantu sesama kita agar kekal selamat dan dibantu sewaktu mengalami masalah kesihatan mental.
            </p>
            <p className="mb-6 leading-relaxed">
              Apabila terfikir tentang membunuh diri atau mudarat kendiri, orang akan berkecenderungan untuk menghubungi rakan dan ahli komuniti. Rakan dan ahli komuniti juga biasanya akan dapat mengenal pasti apabila seseorang mengalami masalah. <em>Namun, adakah anda mengetahui tindakan yang perlu dilakukan apabila anda melihat seseorang yang mungkin memerlukan bantuan?</em>
            </p>
            <p className="mb-8 leading-relaxed">
              Kajian menunjukkan bahawa sesetengah cara menawarkan bantuan adalah lebih selamat dan lebih berkesan daripada cara yang lain. Berikut ialah beberapa tip untuk membantu anda memberi respons kepada seseorang yang bergelut dengan niat <a href="#" className="underline">membunuh diri atau melakukan mudarat kendiri</a>.
            </p>

            <div className="space-y-4 mb-16">
              {helpTopics.map((topic, idx) => (
                <div key={idx} className="border border-gray-200 rounded-xl overflow-hidden">
                  <button 
                    onClick={() => setOpenHelp(openHelp === idx ? null : idx)}
                    className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
                  >
                    <span className="font-semibold text-lg">{topic.title}</span>
                    <ChevronDown size={20} className={`transform transition-transform ${openHelp === idx ? 'rotate-180' : ''}`} />
                  </button>
                  {openHelp === idx && (
                    <div className="px-6 pb-6 text-gray-600">
                      {topic.content}
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl mb-16">
              <h3 className="font-bold text-lg mb-4">Sumber</h3>
              <p className="mb-4 text-sm leading-relaxed">
                Untuk mendapatkan sumber lanjutan, termasuk senarai talian bantuan percuma untuk sesiapa yang mempunyai masalah emosi, lihat <a href="#" className="underline">Pusat Keselamatan Poppro</a>.
              </p>
              <p className="mb-8 text-sm leading-relaxed">
                Set peralatan ini dibangunkan dengan pakar perunding daripada <a href="#" className="underline">Pertubuhan Antarabangsa untuk Pencegahan Bunuh Diri</a>, <a href="#" className="underline">Crisis Text Line</a>, <a href="#" className="underline">ThroughLine</a>, <a href="#" className="underline">Samaritans of Singapore</a> dan <a href="#" className="underline">Samaritans (UK)</a>. Penghargaan istimewa kepada Dr. Thomas Niederkrotenthaler, Rory O'Connor, Daniel Reidenberg dan Jo Robinson atas nasihat dan penyelidikan mereka.
              </p>

              <h3 className="font-bold text-lg mb-4">Penafian</h3>
              <p className="mb-4 text-sm leading-relaxed">
                Jika anda atau seseorang yang anda mempunyai niat atau pembentukan idea untuk membunuh diri, sila hubungi penyedia penjagaan kesihatan atau talian penting bunuh siri segera. Kandungan dalam panduan ini dan/atau set peralatan adalah untuk tujuan maklumat dan penggunaan pendidikan sahaja dan bukanlah bertujuan untuk memberikan perkhidmatan kesihatan atau perubatan.
              </p>
              <p className="text-sm leading-relaxed">
                "Bantuan Untuk Ahli Komuniti Yang Mengalami Tekanan" di Poppro bukanlah pengganti untuk diagnosis, rawatan atau nasihat perubatan, psikologi atau psikiatri. Jangan ketepikan keperluan atau berlengah untuk mendapatkan nasihat pakar perubatan disebabkan oleh mana-mana kandungan dan/atau bahan yang dibaca dan/atau didengari di Poppro. Anda tidak perlu terlibat dalam perbualan ini jika anda belum bersedia untuk berbuat demikian. Dengan berkongsi kisah dan/atau pengalaman anda di Poppro, sama ada peribadi atau sebaliknya, anda mengakui dan bersetuju bahawa tiada jangkaan privasi dalam mana-mana maklumat yang anda kongsi.
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
