import React from 'react';
import { Search, ChevronDown, ArrowLeft, Globe, Linkedin, Youtube, Instagram, Video, ThumbsUp, ThumbsDown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Logo from './Logo';
import SafetyNav from './SafetyNav';

export default function CustomizingFeedPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white text-[#121212] font-sans">
      <SafetyNav />

      <main className="max-w-[1000px] mx-auto px-6 pt-16 pb-32">
        <div className="bg-[#0B3B24] text-white rounded-3xl p-12 md:p-16 mb-12">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-none">
            Menyesuaikan Paparan Untuk Anda
          </h1>
        </div>

        <div className="max-w-[800px] mx-auto">
          <div className="prose prose-lg text-[#121212]">
          <div className="space-y-6">
            <h2 className="text-[32px] font-bold text-black tracking-tight">Menjadikan suapan Untuk Anda khusus bagi anda</h2>
            <p>
              Suapan Untuk Anda merupakan teras pengalaman Poppro. Ia merupakan tempat bagi penonton meneroka minat baharu dan mengetahui lebih lanjut tentang topik yang mereka nikmati, dan tempat pencipta mencari penonton mereka dan membina komuniti yang berkembang maju.
            </p>
            <p>
              Sama seperti tiada dua orang yang serupa, tiada dua suapan Untuk Anda yang sama persis. Dalam panduan ini, anda boleh mengetahui lebih lanjut tentang cara untuk membentuk suapan Untuk Anda ideal anda, termasuk cara suapan ini berfungsi, cara kami berusaha untuk memastikannya selamat, serta ciri dan petua yang anda boleh gunakan untuk benar-benar menjadikan suapan ini milik anda.
            </p>
          </div>

          <div className="space-y-6">
            <h2 className="text-[32px] font-bold text-black tracking-tight">Bagaimanakah suapan Untuk Anda berfungsi?</h2>
            <p>
              Kebanyakan platform mempunyai suapan untuk menunjukkan kandungan baharu kepada anda yang dipilih oleh sistem atau algoritma pengesyoran. Sistem pengesyoran menggunakan teknologi untuk mencari, menyusun dan menunjukkan kandungan yang anda berkemungkinan akan nikmati.
            </p>
            
            <div className="bg-black w-full aspect-video rounded-[24px] flex items-center justify-center cursor-pointer my-8">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[12px] border-l-white border-b-[8px] border-b-transparent ml-1"></div>
              </div>
            </div>

            <p>
              Suapan Untuk Anda di Poppro adalah istimewa kerana ini menumpukan pada membantu anda meneroka topik dan pencipta baharu, di samping topik yang sudah anda ketahui. Untuk berbuat demikian, suapan ini belajar daripada interaksi masa lalu anda dengan kandungan, menapis siaran yang mungkin tidak sesuai dan berfungsi untuk meramalkan kandungan atau pencipta yang anda akan nikmati.
            </p>
            <p>
              Bagaimanakah ia melakukan semua itu? Ia mungkin kelihatan seperti sihir, namun ia sebenarnya lebih kepada matematik. Dengan memahami jenis kandungan yang anda telah nikmati sebelum ini, sistem pengesyoran kami boleh meramalkan siaran yang berkemungkinan besar akan anda nikmati pada masa hadapan. Terdapat beberapa faktor di bawah yang membentuk kandungan yang muncul pada suapan anda.
            </p>

            <div className="flex justify-center my-12">
              <img 
                src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Woman holding phone" 
                className="w-full max-w-[320px] rounded-[32px] aspect-[9/16] object-cover shadow-xl"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-[32px] font-bold text-black tracking-tight">Belajar tentang perkara yang anda suka</h2>
            <p>
              Apabila anda mula-mula membuat akaun Poppro, sistem pengesyoran kami mempunyai maklumat yang sangat asas tentang keutamaan anda, seperti negara, bahasa dan umur yang anda berikan. Kami juga akan meminta anda memilih beberapa topik umum untuk memberikan petunjuk awal kepada sistem kami.
            </p>
            <p>
              Langkah itu berguna, tetapi pengalaman itu <em>belum</em> cukup diperibadikan lagi. Sambil anda menonton lebih banyak kandungan dan memberi sistem kami lebih banyak maklumat tentang perkara yang anda nikmati, sistem ini boleh membuat ramalan yang lebih baik. Sebagai contoh, sistem boleh belajar daripada:
            </p>
            <ul className="list-disc pl-6 space-y-3">
              <li>Sama ada anda menyukai siaran, berkongsi siaran, menambahkan siaran pada kegemaran atau meninggalkan komen pada siaran</li>
              <li>Berapa lama anda menonton video, dan sama ada anda selesai menonton atau beralih kepada video yang lain sebelum selesai</li>
              <li>Orang yang anda ikuti di Poppro</li>
              <li>Topik yang anda baru cari</li>
              <li>Kandungan yang dinikmati oleh orang lain yang mempunyai minat yang sama dengan anda</li>
            </ul>
            <p>
              Ketahui lebih lanjut tentang <a href="#" className="underline hover:text-black">sistem pengesyoran kami</a> dalam Pusat Bantuan kami.
            </p>
          </div>

          <div className="space-y-6">
            <h2 className="text-[32px] font-bold text-black tracking-tight">Mengutamakan kandungan berkualiti</h2>
            <p>
              Sambil algoritma pengesyoran kami belajar daripada kandungan yang anda nikmati, algoritma ini berfungsi untuk mengenal pasti kandungan yang berkualiti tinggi dan berkaitan serta menunjukkan kandungan tersebut kepada anda dalam susunan yang terasa segar dan menarik. Untuk berbuat demikian, algoritma mempertimbangkan faktor tambahan dan mengikut panduan seperti:
            </p>
            <ul className="list-disc pl-6 space-y-3">
              <li>Mengelakkan pengesyoran berulang, seperti menunjukkan beberapa siaran yang serupa berturut-turut</li>
              <li>Mempromosikan pencipta tempatan</li>
              <li>Mengutamakan kandungan terkini berbanding dengan kandungan lama</li>
              <li>Menilai faktor seperti panjang siaran, masa kandungan disiarkan dan bunyi yang digunakan</li>
            </ul>
          </div>

          <div className="space-y-6">
            <h2 className="text-[32px] font-bold text-black tracking-tight">Menapis kandungan yang mungkin tidak sesuai untuk anda</h2>
            <p>
              Bagi membantu anda menemui dan meneroka Poppro dengan cara yang lebih selamat, kami menggunakan perlindungan tambahan sebelum kandungan dipaparkan pada suapan anda:
            </p>
            <ul className="list-disc pl-6 space-y-3">
              <li>Peraturan kelayakan suapan Untuk Anda kami melarang algoritma daripada mengesyorkan kandungan yang, walaupun dibenarkan di Poppro, mungkin tidak sesuai untuk semua orang. Ketahui lebih lanjut tentang <a href="#" className="underline hover:text-black">standard kelayakan suapan Untuk Anda</a> kami dalam <a href="#" className="underline hover:text-black">Garis Panduan Komuniti</a> kami.</li>
              <li>Kami menyemak semula siaran yang semakin popular untuk membantu dalam memastikan siaran itu sesuai untuk semua orang. Langkah ini langkah tambahan selain moderasi keselamatan yang telah dilakukan pada semua kandungan Poppro.</li>
              <li>Peraturan suapan Untuk Anda kami menghalang pengesyoran kerap kandungan tertentu yang mungkin elok apabila dilihat sekali-sekala, tetapi boleh menjadi masalah jika dilihat terlalu kerap, seperti kandungan berkaitan kecergasan yang melampau.</li>
              <li>Melalui <a href="#" className="underline hover:text-black">Tahap Kandungan</a>, kami juga berusaha untuk menghalang kandungan yang mempunyai tema matang atau kompleks daripada menjangkau golongan muda.</li>
            </ul>
          </div>

          <div className="space-y-6">
            <h2 className="text-[32px] font-bold text-black tracking-tight">Bagaimanakah boleh saya membentuk suapan Untuk Anda milik saya?</h2>
            <p>
              Pada bila-bila masa anda menatal Poppro, anda membentuk suapan Untuk Anda milik anda hanya dengan menonton kandungan yang anda nikmati dan melangkau kandungan yang anda tidak sukai. Untuk membentuk suapan Untuk Anda milik anda dengan lebih lanjut, anda juga boleh menggunakan ciri-ciri Poppro yang popular untuk meningkatkan pengalaman anda:
            </p>
            
            <div className="flex justify-center my-12">
              <img 
                src="https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Person with dog" 
                className="w-full max-w-[320px] rounded-[32px] aspect-[9/16] object-cover shadow-xl"
                referrerPolicy="no-referrer"
              />
            </div>

            <ul className="list-disc pl-6 space-y-3">
              <li><strong>Tambah pada Kegemaran atau sukakan kandungan</strong>: Jika anda benar-benar menyukai suatu siaran, tambahkan siaran itu pada Kegemaran anda atau sukakan kandungan itu untuk memberitahu sistem pengesyoran kami bahawa anda ingin melihat lebih banyak kandungan itu.</li>
              <li><strong>Ikuti pencipta</strong>: Mengikuti pencipta kegemaran anda memberi sistem kami konteks tambahan untuk meramal pencipta atau kandungan lain yang mungkin anda nikmati.</li>
              <li><strong>Pilih "Tidak berminat" pada kandungan</strong>: Jika anda melihat kandungan yang anda tidak minati, tekan dan tahan siaran, kemudian ketik <strong>Tidak berminat</strong> untuk memberitahu algoritma anda.</li>
              <li><strong>Carian</strong>: Apabila anda mencari topik, anda memberikan penunjuk yang kukuh tentang kandungan yang ingin anda terokai.</li>
            </ul>

            <p className="pt-4">
              Dalam tetapan keutamaan kandungan anda, kami menawarkan pelbagai alatan yang memperkasakan anda untuk memperibadikan suapan anda dengan lebih lanjut:
            </p>

            <ul className="list-disc pl-6 space-y-3">
              <li><strong>Tapis kata kunci</strong>: Membantu dalam mengurangkan jumlah kandungan yang anda lihat berkaitan dengan kata kunci yang telah anda tentukan.</li>
              <li><strong>Mod Terbatas</strong>: Hidupkan Mod Terbatas untuk mengehadkan pendedahan kepada kandungan yang mungkin tidak menyelesaikan untuk semua orang.</li>
              <li><strong>Urus topik</strong>: Pilih untuk melihat lebih banyak atau mengurangkan kandungan tentang topik tertentu dan kemas kini keutamaan ini pada bila-bila masa.</li>
              <li><strong>Segarkan semula suapan Untuk Anda</strong>: Lihat suapan Untuk Anda yang segar seolah-olah anda baru mendaftar di Poppro dan sesuaikan suapan dengan berinteraksi dengan pelbagai kandungan popular dan sohor kini.</li>
              <li><strong>Akaun dibisukan</strong>: Akaun yang dibisukan serta siarannya yang anda ingin kurangkan pada suapan anda.</li>
            </ul>

            <p className="pt-4">
              Jangan lupa bahawa jika anda ibu bapa atau penjaga, anda boleh mengurus banyak ciri ini serta akaun anak remaja anda menggunakan <a href="#" className="underline hover:text-black">Keselamatan Keluarga</a>. Lawati <a href="#" className="underline hover:text-black">Panduan Penjaga</a> kami untuk mendapatkan lebih banyak maklumat.
            </p>
          </div>
          
          <div className="flex items-center justify-between border-t border-gray-200 pt-8 mt-16">
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
