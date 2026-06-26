import React from 'react';
import { ChevronDown, ArrowLeft, Globe, Video, Linkedin, Youtube, Instagram, ThumbsUp, ThumbsDown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Logo from './Logo';
import SafetyNav from './SafetyNav';

export default function ReportingPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white text-[#121212] font-sans">
      <SafetyNav />

      <main className="max-w-[1000px] mx-auto px-6 pt-16 pb-32">
        <div className="bg-[#FFE500] rounded-[32px] p-12 md:p-20 mb-16">
          <h1 className="text-5xl md:text-[80px] font-bold tracking-tight text-black leading-none">
            Pelaporan di Poppro
          </h1>
        </div>

        <div className="max-w-[800px] mx-auto">
          <div className="prose prose-lg text-[#121212]">
            
            <h2 className="text-[32px] font-bold mb-8 leading-tight tracking-tight">Apakah yang akan berlaku apabila saya menyerahkan laporan di Poppro?</h2>
            
            <p className="mb-6 leading-relaxed">
              Poppro mengambil pendekatan proaktif untuk memastikan komuniti kami selamat. Kami menggunakan penilaian automatik dan manusia untuk mengesan dan mengambil tindakan terhadap pelanggaran <a href="#" className="underline">Garis Panduan Komuniti</a> kami. Walaupun Poppro boleh mengeluarkan kebanyakan kandungan ini sebelum kandungan dilaporkan kepada kami, kami menggalakkan semua orang dalam komuniti kami untuk mengambil langkah aktif untuk memastikan Poppro tempat yang selamat dan mesra dengan melaporkan kandungan yang mereka berpendapat melanggar garis panduan kami.
            </p>
            <p className="mb-16 leading-relaxed">
              Jika anda ingin menghantar laporan, anda dijamin selamat bahawa <strong>Poppro tidak akan mendedahkan identiti anda kepada orang yang kandungan atau akaunnya anda laporkan.</strong>
            </p>

            <h2 className="text-[32px] font-bold mb-8 tracking-tight">Cara melaporkan kandungan di Poppro</h2>
            
            <p className="mb-6 leading-relaxed">
              Anda boleh menyokong komuniti dengan melaporkan sebarang siaran, komen, akaun, mesej langsung atau masalah lain yang anda berpendapat melanggar Garis Panduan Komuniti kami. Laporan anda membantu kami mengambil tindakan yang sewajarnya jika perlu.
            </p>
            <p className="mb-6 leading-relaxed">
              Lawati Pusat Bantuan kami untuk mendapatkan butiran lanjut tentang cara melaporkan masalah, termasuk cara:
            </p>
            
            <ul className="list-disc pl-6 mb-16 space-y-2">
              <li><a href="#" className="underline">Melaporkan akaun</a></li>
              <li><a href="#" className="underline">Melaporkan komen</a></li>
              <li><a href="#" className="underline">Melaporkan mesej langsung</a></li>
              <li><a href="#" className="underline">Melaporkan LIVE</a></li>
              <li><a href="#" className="underline">Melaporkan siaran</a></li>
            </ul>

            <div className="w-full max-w-sm mx-auto mb-16 relative">
              <div className="bg-black rounded-[40px] p-2 relative shadow-2xl aspect-[9/19]">
                <div className="bg-[#121212] rounded-[32px] w-full h-full overflow-hidden relative text-white">
                  {/* Phone screen UI mock for reporting */}
                  <div className="absolute inset-0 bg-gray-900 flex flex-col">
                    <div className="flex justify-between items-center px-4 pt-12 pb-4">
                      <ArrowLeft size={24} />
                      <div className="flex gap-4">
                        <span className="font-semibold text-gray-400">Following</span>
                        <span className="font-semibold">For You</span>
                      </div>
                      <div className="w-6 h-6"></div>
                    </div>
                    
                    <div className="flex-1 flex flex-col justify-end p-4 pb-20 relative">
                      {/* Interaction buttons */}
                      <div className="absolute right-4 bottom-24 flex flex-col gap-6 items-center">
                        <div className="w-12 h-12 bg-white/20 rounded-full border border-white"></div>
                        <div className="flex flex-col items-center gap-1">
                          <ThumbsUp fill="white" size={32} />
                          <span className="text-xs font-semibold">991K</span>
                        </div>
                        <div className="flex flex-col items-center gap-1">
                          <svg width="32" height="32" viewBox="0 0 24 24" fill="white" className="transform scale-x-[-1]"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
                          <span className="text-xs font-semibold">3456</span>
                        </div>
                        <div className="flex flex-col items-center gap-1">
                          <svg width="32" height="32" viewBox="0 0 24 24" fill="white"><path d="M14.7 3.3a1 1 0 0 0-1.4 0l-4 4a1 1 0 0 0 1.4 1.4L13 6.4V15a1 1 0 1 0 2 0V6.4l2.3 2.3a1 1 0 0 0 1.4-1.4l-4-4zM9 11a1 1 0 0 0-1 1v5a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-5a1 1 0 1 0-2 0v5H10v-5a1 1 0 0 0-1-1z"></path></svg>
                          <span className="text-xs font-semibold">12.6K</span>
                        </div>
                        <div className="w-12 h-12 bg-gray-600 rounded-full flex items-center justify-center relative animate-spin-slow">
                           <div className="w-4 h-4 bg-white rounded-full"></div>
                        </div>
                      </div>

                      <div className="w-3/4">
                        <h3 className="font-bold text-lg mb-2">@user</h3>
                        <p className="text-sm text-gray-200 mb-2">I can discover more of what I like on Poppro and really enjoy watching...</p>
                        <div className="flex items-center gap-2 text-sm text-gray-300">
                          <Video size={16} /> Ultra Instinct - user audio
                        </div>
                      </div>
                    </div>

                    <div className="h-16 border-t border-white/20 flex items-center justify-around px-2">
                      <div className="flex flex-col items-center text-white"><svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg><span className="text-[10px] mt-1">Home</span></div>
                      <div className="flex flex-col items-center text-gray-500"><svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg><span className="text-[10px] mt-1">Discover</span></div>
                      <div className="w-12 h-8 bg-white text-black rounded-lg flex items-center justify-center font-bold text-xl">+</div>
                      <div className="flex flex-col items-center text-gray-500"><svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg><span className="text-[10px] mt-1">Inbox</span></div>
                      <div className="flex flex-col items-center text-gray-500"><svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg><span className="text-[10px] mt-1">Me</span></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-[32px] font-bold mb-8 tracking-tight">Bagaimanakah pengesanan dan penguatkuasaan berfungsi di Poppro?</h2>
            
            <p className="mb-6 leading-relaxed">
              Poppro menyasarkan untuk mengeluarkan kandungan atau akaun yang melanggar garis panduan kami sebelum kandungan ditonton atau dikongsi oleh orang lain bagi mengurangkan kemungkinan berlakunya bahaya.
            </p>
            <p className="mb-6 leading-relaxed">
              Untuk menyokong usaha ini, kami menggunakan kaedah pengesanan proaktif:
            </p>

            <ol className="list-decimal pl-6 mb-8 space-y-4">
              <li className="leading-relaxed">Poppro menggunakan teknologi yang menyemak kandungan menurut Garis Panduan Komuniti kami.</li>
              <li className="leading-relaxed">Jika teknologi kami mengenal pasti kandungan yang mungkin melanggar dasar, kandungan tersebut akan dikeluarkan secara automatik daripada platform atau dibenarkan untuk menjalani semakan tambahan oleh moderator kami.</li>
              <li className="leading-relaxed">Kandungan yang berbahaya berkemungkinan mendatangkan risiko kepada komuniti kami. Untuk mengurangkan risiko ini, sebagai semakan tambahan, sistem moderasi automatik kami mungkin menghantar siaran dengan bilangan tontonan yang tinggi kepada moderator kami untuk semakan lanjut berdasarkan Garis Panduan Komuniti kami.</li>
            </ol>

            <p className="mb-6 leading-relaxed">
              Jika laporan diserahkan, kami akan menyemak kandungan yang dilaporkan untuk memastikan sama ada kandungan tersebut melanggar dasar kami atau tidak. Jika kandungan tersebut melanggar dasar, kami akan mengambil tindakan terhadap kandungan tersebut, termasuk mengeluarkan kandungan. Kami juga akan membuat penilaian sama ada kandungan tersebut <a href="#" className="underline">menyalahi undang-undang</a> di satu atau beberapa negara atau rantau.
            </p>
            <p className="mb-16 leading-relaxed">
              Ketahui lebih lanjut tentang usaha penguatkuasaan dan moderasi kandungan kami dalam <a href="#" className="underline">Garis Panduan Komuniti</a> dan <a href="#" className="underline">Pusat Ketelusan</a> kami.
            </p>

            <h2 className="text-[32px] font-bold mb-8 tracking-tight">Apakah yang berlaku apabila kandungan yang dilaporkan melanggar Garis Panduan Komuniti kami?</h2>
            
            <p className="mb-6 leading-relaxed">
              Jika kami mendapati bahawa kandungan atau akaun melanggar Garis Panduan Komuniti kami, Poppro mungkin akan mengambil tindakan yang merangkumi:
            </p>

            <ul className="list-disc pl-6 mb-16 space-y-4">
              <li className="leading-relaxed">Mengeluarkan kandungan yang melanggar garis panduan tersebut daripada platform</li>
              <li className="leading-relaxed">Menyekat akaun tersebut</li>
              <li className="leading-relaxed">Melaporkan kejadian penderaan seksual dan eksploitasi remaja kepada <a href="#" className="underline">National Center for Missing and Exploited Children (NCMEC)</a>. Kami juga akan membuat laporan kepada pihak berkuasa penguatkuasaan undang-undang yang berkenaan apabila terdapat ancaman yang khusus, boleh dipercayai dan akan berlaku kepada nyawa manusia atau mendatangkan kecederaan fizikal yang serius.</li>
            </ul>

            <h2 className="text-[32px] font-bold mb-8 tracking-tight">Apakah jenis laporan yang akan mengakibatkan kandungan tidak layak untuk suapan Untuk Anda?</h2>
            
            <p className="mb-6 leading-relaxed">
              Walaupun kespontanan suapan Untuk Anda yang membuatkan Poppro unik, suapan ini disasarkan untuk audiens luas yang merangkumi semua orang daripada golongan remaja sehingga warga emas. Ada kalanya kami memastikan kandungan tertentu <a href="#" className="underline">tidak layak untuk suapan Untuk Anda</a> jika kandungan tersebut tidak sesuai untuk audiens yang luas. Contohnya, ini termasuk kandungan yang berkaitan dengan:
            </p>

            <ul className="list-disc pl-6 mb-8 space-y-2">
              <li className="leading-relaxed">Kesihatan perilaku</li>
              <li className="leading-relaxed">Tema sensitif dan matang</li>
              <li className="leading-relaxed">Integriti dan kesahihan</li>
              <li className="leading-relaxed">Barang, perkhidmatan dan aktiviti komersial yang terkawal</li>
            </ul>

            <p className="mb-16 leading-relaxed">
              Kami juga akan menjadikan kandungan seperti ini lebih sukar untuk ditemukan dalam hasil carian. Ketahui lebih lanjut tentang <a href="#" className="underline">pelanggaran kandungan, sekatan dan ketidaklayakan suapan Untuk Anda</a> dalam Pusat Bantuan kami.
            </p>

            <h2 className="text-[32px] font-bold mb-8 tracking-tight">Apakah jenis pemberitahuan yang akan dihantar selepas laporan diserahkan?</h2>
            
            <p className="mb-6 leading-relaxed">
              Selepas anda menghantar laporan, kami mungkin akan memaklumkan anda tentang status dan kemajuan laporan anda dalam peti masuk anda. Anda juga boleh melihat sejarah laporan anda daripada tetapan anda.
            </p>
            <p className="mb-6 leading-relaxed">
              Untuk melihat sejarah laporan anda di Poppro:
            </p>

            <ol className="list-decimal pl-6 mb-8 space-y-4">
              <li className="leading-relaxed">Dalam apl Poppro, ketik <strong>Profil</strong> pada bahagian bawah.</li>
              <li className="leading-relaxed">Ketik butang <strong>Menu ☰</strong> pada bahagian atas, kemudian pilih <strong>Tetapan dan privasi</strong>.</li>
              <li className="leading-relaxed">Ketik <strong>Sokongan</strong>.</li>
              <li className="leading-relaxed">Ketik <strong>Pusat Keselamatan</strong>.</li>
              <li className="leading-relaxed">Ketik <strong>Rekod laporan</strong>, kemudian pilih laporan.</li>
            </ol>

            <p className="mb-6 leading-relaxed">
              Jika kami memutuskan kandungan (video, gambar, komen, audio atau LIVE) tidak layak untuk suapan Untuk Anda atau mengehadkan kandungan tersebut, kami mungkin memaklumkan pencipta dan berkongsi sebab pelanggaran. <strong>Walau bagaimanapun, kami tidak akan sekali-kali menyertakan maklumat tentang orang yang melaporkan kandungan mereka.</strong>
            </p>
            <p className="mb-16 leading-relaxed">
              Jika akaun orang tersebut telah disekat disebabkan oleh pelanggaran, mereka akan menerima pemberitahuan sepanduk apabila mereka membuka apl selepas itu, yang memaklumkan mereka tentang perubahan ini dalam status akaun.
            </p>

            <h2 className="text-[32px] font-bold mb-8 tracking-tight">Bolehkah anda membuat rayuan terhadap keputusan laporan?</h2>
            
            <p className="mb-6 leading-relaxed">
              Jika anda berpendapat bahawa akaun atau siaran anda telah tersilap dikeluarkan atau disekat, anda boleh menyerahkan rayuan. Kami tidak akan mendedahkan maklumat tentang orang yang melaporkan kandungan ini melalui proses rayuan.
            </p>

            <ul className="list-disc pl-6 mb-16 space-y-2">
              <li><a href="#" className="underline">Pelanggaran dan sekatan kandungan</a></li>
              <li><a href="#" className="underline">Rayuan bawah umur di Poppro</a></li>
            </ul>

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
