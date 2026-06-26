import React from 'react';
import { ChevronDown, ArrowLeft, Globe, Video, Linkedin, Youtube, Instagram, ThumbsUp, ThumbsDown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Logo from './Logo';
import SafetyNav from './SafetyNav';

export default function HarmfulMisinformationPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white text-[#121212] font-sans">
      <SafetyNav />

      <main className="max-w-[1000px] mx-auto px-6 pt-16 pb-32">
        <div className="bg-[#FFE500] rounded-[32px] p-12 md:p-20 mb-16">
          <h1 className="text-5xl md:text-[80px] font-bold tracking-tight text-black leading-none">
            Panduan maklumat salah yang berbahaya
          </h1>
        </div>

        <div className="max-w-[800px] mx-auto">
          <div className="prose prose-lg text-[#121212]">
            <p className="mb-16 leading-relaxed">
              Dalam mana-mana komuniti dalam talian atau di dunia sebenar, mempunyai pandangan yang berbeza adalah satu perkara biasa. Tetapi apabila tiba kepada topik yang menjejaskan keselamatan atau kesihatan, kami ingin beroperasi pada set fakta yang dikongsi bersama. Itulah sebabnya kami bekerja untuk menangani <a href="#" className="underline">maklumat salah yang berbahaya</a> di Poppro, menyambungkan anda dengan fakta dan memaklumkan kepada anda apabila kami mengenal pasti bahawa kandungan tersebut (atau mungkin tidak) tulen. Dalam panduan ini, anda boleh mengetahui lebih lanjut tentang peraturan, alat dan taktik yang boleh membantu anda mendapat pengalaman yang boleh dipercayai di Poppro dan melangkaunya.
            </p>

            <h2 className="text-[32px] font-bold mb-8 leading-tight tracking-tight">Peraturan kami tentang maklumat salah yang berbahaya</h2>
            
            <p className="mb-6 leading-relaxed">
              <a href="#" className="underline">Garis Panduan Komuniti</a> kami melarang maklumat salah yang berbahaya tentang kesihatan, pilihan raya, perubahan iklim dan banyak lagi. Apabila kandungan melanggar peraturan ini, kami mengeluarkannya atau menjadikannya tidak layak untuk suapan Untuk Anda seperti yang digariskan dalam dasar kami (ketahui lebih lanjut tentang dasar kami <a href="#" className="underline">di sini</a>). Kami mengambil tindakan tentang maklumat salah tanpa mengira tujuannya. Dasar kami terpakai kepada kedua-dua "maklumat salah" serta maklumat salah berbahaya yang disengajakan, mungkin tidak dikongsi dengan matlamat untuk menipu orang.
            </p>
            <p className="mb-6 leading-relaxed">
              Untuk membantu memastikan keputusan moderasi kami berasas dari segi fakta, kami bekerja dengan <a href="#" className="underline">rakan kongsi semakan fakta</a> bebas yang menilai sama ada maklumat tersebut benar, palsu atau tidak disahkan. Jika anda nampak maklumat salah yang mungkin melanggar peraturan kami, sila <a href="#" className="underline">laporkannya</a>.
            </p>
            <p className="mb-16 leading-relaxed">
              Apabila kami mengambil tindakan pada kandungan anda, kami akan memaklumkan kepada anda melalui pemberitahuan peti masuk atau dalam halaman "<a href="#" className="underline">Status Akaun</a>" dalam Pusat Keselamatan dalam apl anda. Anda juga boleh menyerahkan <a href="#" className="underline">rayuan</a> jika anda berasa bahawa keputusan moderasi adalah satu kesilapan. Apabila anda melaporkan maklumat salah yang berbahaya, anda boleh menjejak hasil laporan dalam halaman "Rekod Laporan" dalam Pusat Keselamatan anda.
            </p>

            <h2 className="text-[32px] font-bold mb-8 tracking-tight">Mencari petunjuk konteks</h2>
            
            <p className="mb-6 leading-relaxed">
              Apabila anda mengakses sesuatu yang anda nampak dalam talian, langkah pertama yang baik ialah untuk menyemak sama ada akaun atau kandungan tersebut <a href="#" className="underline">tulen</a>. Adakah orang, video atau audio ini benar seperti yang dikatakan?
            </p>
            <p className="mb-6 leading-relaxed">
              Terdapat petunjuk yang boleh membantu anda dengan perkara tersebut di seluruh Poppro. Sementara perkataan yang tepat boleh menjadi berbeza-beza, bergantung kepada di mana anda tinggal, mesej keseluruhan adalah sama. Contohnya, anda boleh memerhatikan:
            </p>
            
            <ul className="list-disc pl-6 mb-8 space-y-4">
              <li className="leading-relaxed">
                <strong>Tanda semak "Disahkan":</strong> Jika anda mengikuti pencipta yang beprofil tinggi seperti selebriti, pasukan sukan atau jenama kegemaran, anda boleh nampak tanda semak berwarna biru bersebelahan dengan nama pengguna mereka. Ini memberitahu kepada anda bahawa akaun tersebut adalah asal milik mereka. Tanda ini tidak boleh dibeli—ia telah disemak oleh pasukan kami. <a href="#" className="underline">Ketahui lebih lanjut</a>.
              </li>
              <li className="leading-relaxed">
                <strong>Label kandungan dijana AI (AIGC):</strong> AI membuka kunci kreativiti, tetapi ia juga boleh mengaburkan garisan antara fakta dan fiksyen. Pencipta mesti melabelkan mana-mana AIGC yang realistik apabila mereka memuat naiknya dan kami mempunyai alat untuk melakukannya dengan mudah. Poppro juga melabelkan beberapa kandungan yang dijana AI secara automatik. Jika anda nampak AIGC yang tidak dilabel, laporkannya. <a href="#" className="underline">Ketahui lebih lanjut</a>.
              </li>
            </ul>

            <div className="w-full max-w-sm mx-auto mb-8 relative">
              <div className="bg-black rounded-[40px] p-2 relative shadow-2xl aspect-[9/19]">
                <div className="bg-white rounded-[32px] w-full h-full overflow-hidden relative">
                  <div className="absolute top-4 left-4 right-4 flex justify-between items-center z-10">
                    <button className="p-2"><ArrowLeft size={24} /></button>
                    <span className="font-semibold">Post</span>
                    <div className="w-8"></div>
                  </div>
                  
                  <div className="mt-16 px-6">
                    <div className="flex gap-4">
                      <div className="w-20 h-28 bg-gray-200 rounded-lg"></div>
                      <div className="flex-1">
                        <h3 className="text-gray-400 font-semibold mb-1">Add a catchy title</h3>
                        <p className="text-gray-300 text-sm">Go into greater detail about your experience and remember to keep it clean! No profanities...</p>
                      </div>
                    </div>
                  </div>

                  <div className="absolute bottom-8 left-6 right-6 flex items-center justify-between">
                    <div className="flex gap-4 text-gray-400">
                      <span className="font-bold text-black">#</span>
                      <span className="font-bold">@</span>
                      <Video size={20} />
                    </div>
                    <div className="flex items-center gap-2 text-gray-500 bg-gray-100 px-3 py-1 rounded-full text-sm">
                      <Globe size={16} /> Only you
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <ul className="list-disc pl-6 mb-8 space-y-4">
              <li className="leading-relaxed">
                <strong>Label kandungan yang tidak disahkan:</strong> Kadangkala, terdapat kawasan kelabu apabila ia berkaitan dengan maklumat salah. Contohnya, dalam situasi yang bergerak pantas, faktanya sendiri masih belum jelas. Kami melabelkan video sebagai "tidak disahkan" apabila penyemak fakta kami sedang dalam proses menyemaknya atau jika semakan fakta mereka tidak membawa kepada sebarang kesimpulan.
              </li>
            </ul>

            <p className="mb-6 leading-relaxed">
              Jika anda cuba berkongsi kandungan dengan tuntutan yang tidak disahkan, kami boleh meminta anda untuk "mempertimbangkan sebelum berkongsi"—terutamanya semasa kecemasan dan peristiwa yang sedang berlaku. Ini membantu mencegah penyebaran maklumat yang salah.
            </p>
            <p className="mb-6 leading-relaxed">
              Anda perlu berfikir dengan kritikal tentang kandungan yang tidak dilabelkan sebagai tidak disahkan—dan laporan maklumat salah berbahaya yang berpotensi agar pasukan keselamatan kami boleh menilainya.
            </p>
            <p className="mb-16 text-sm text-gray-600">
              *Penampilan tepat bagi label-label ini mungkin berbeza mengikut pasaran. <a href="#" className="underline">Ketahui lebih lanjut</a>.
            </p>

            <h2 className="text-[32px] font-bold mb-8 tracking-tight">Menyambungkan anda dengan maklumat yang dipercayai</h2>
            
            <p className="mb-6 leading-relaxed">
              Untuk mengesan maklumat yang salah, ia membantu mengetahui tentang faktanya. Kami bekerjasama dengan pakar dan <a href="#" className="underline">organisasi semakan fakta</a> di seluruh dunia untuk membantu menyambungkan anda dengan maklumat yang dipercayai. Kami menawarkan ciri yang boleh membantu anda mencari sumber boleh dipercayai di Poppro. Cari sepanduk bermaklumat apabila anda menonton atau mencari kandungan yang mungkin berkaitan dengan maklumat salah, seperti:
            </p>

            <ul className="list-disc pl-6 mb-16 space-y-4">
              <li className="leading-relaxed">
                <strong>Peringatan carian:</strong> Apabila anda mencari topik yang mungkin berkaitan dengan maklumat salah di rantau anda—seperti covid-19, kesihatan mental atau perubahan iklim—anda mungkin nampak sepanduk yang mengingatkan anda untuk menyemak sumber anda dan menghalakan anda ke maklumat yang boleh dipercayai.
              </li>
              <li className="leading-relaxed">
                <strong>Notis peristiwa yang berubah dengan cepat:</strong> Apabila perkara bergerak pantas pada waktu krisis, perhatikan sepanduk atau pop timbul carian yang menunjukkan sumber autoritatif kepada anda dengan kemas kini yang anda boleh percayai.
              </li>
              <li className="leading-relaxed">
                <strong>Sepanduk bermaklumat LIVE dan video pendek:</strong> Semasa krisis setempat seperti bencana alam yang sedang berlaku, perhatikan peringatan sepanduk bermaklumat atau derma yang dipercayai ketika anda menonton kandungan di LIVE atau Suapan Video anda.
              </li>
              <li className="leading-relaxed">
                <strong>Pusat Pilihanraya:</strong> Kami bekerja dengan pakar atau pihak berkuasa tempatan lebih awal dari pilihanraya untuk melancarkan sepanduk carian dan Pusat Pilihanraya dalam apl bersama fakta tentang masa, lokasi dan cara untuk mengundi. Anda boleh mencari perkara ini melalui tag pada video, sepanduk LIVE dan carian yang berkaitan dengan pilihanraya. <a href="#" className="underline">Ketahui Lebih Lanjut</a>.
              </li>
            </ul>

            <h2 className="text-[32px] font-bold mb-8 tracking-tight">Mengesan maklumat salah dalam talian</h2>
            
            <p className="mb-6 leading-relaxed">
              Kami sentiasa bergabung dengan pencipta, pakar dan pegawai tempatan tentang kandungan pendidikan yang menarik mengenai cara mengesan maklumat salah dalam talian—kerana penemuan kandungan yang disemak di Poppro cuma satu langkah.
            </p>
            <p className="mb-6 leading-relaxed">
              Tip daripada pakar celik media <a href="#" className="underline">MediaWise</a> di bawah boleh membantu anda mengasingkan fakta daripada pecahan di mana-mana sahaja dalam talian.
            </p>
            <p className="mb-8 leading-relaxed">
              Dakwaan yang berani boleh mengelirukan atau memanipulasi kita, jadi sebelum anda berkongsi atau percaya dengan apa yang anda nampak dalam talian, ingat untuk berfikir sejenak dan <strong>bertanya kepada diri sendiri</strong>:
            </p>

            <h3 className="font-bold text-xl mb-4">Siapakah Yang Menyiarkannya?</h3>
            <ul className="list-disc pl-6 mb-8 space-y-2">
              <li>Adakah orang ini benar-benar seorang pakar tentang topik yang mereka bincangkan? Mencari akaun siaran lain boleh memberikan konteks kepada anda.</li>
              <li>Adakah mereka orang yang sebenar? Lencana kami yang disahkan boleh membantu memberikan kejelasan.</li>
            </ul>

            <h3 className="font-bold text-xl mb-4">Adakah faktanya masuk akal?</h3>
            <ul className="list-disc pl-6 mb-16 space-y-2">
              <li>Adakah anda mempunyai gambaran keseluruhan atau tiada maklumat penting yang boleh menjadikannya mengelirukan? Cari jurang dalam pertikaian, tokok tambah atau dakwaan yang tidak disandarkan kepada bukti yang kukuh.</li>
              <li>Adakah bukti tersebut telah disemak? Cari sumber asal.</li>
            </ul>

            <h2 className="text-[32px] font-bold mb-8 tracking-tight">Penafian</h2>
            <p className="mb-16 leading-relaxed">
              Kandungan yang disediakan dalam panduan ini bertujuan hanya bertujuan untuk menyampaikan maklumat dan pendidikan.
            </p>

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
