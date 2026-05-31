import React from 'react';
import { Search, ChevronDown, ArrowLeft, Globe, Linkedin, Youtube, Instagram, Video, ThumbsUp, ThumbsDown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Logo from './Logo';

export default function CustomizingFeedPage() {
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

      <main className="max-w-[800px] mx-auto px-6 pt-12 pb-24">
        <div className="bg-[#fceb4f] rounded-[32px] p-12 md:p-16 mb-16">
            <h1 className="text-[48px] md:text-[64px] font-bold text-black leading-[1.1] tracking-tight">
            Making your feed For You
          </h1>
        </div>

        <div className="space-y-12 text-[17px] text-gray-800 leading-relaxed">
          <div className="space-y-6">
            <h2 className="text-[32px] font-bold text-black tracking-tight">Making your feed For You</h2>
            <p>
              The For You feed is at the core of the Poppro experience. It's where viewers can explore new interests and learn more about topics they enjoy, and where creators find their audience and build thriving communities.
            </p>
            <p>
              Just as no two people are alike, no two For You feeds are exactly the same. In this guide, you can learn more about how to shape your ideal For You feed, including how the feed works, how we strive to keep it safe, and the features and tips you can use to truly make your feed your own.
            </p>
          </div>

          <div className="space-y-6">
            <h2 className="text-[32px] font-bold text-black tracking-tight">How does the For You feed work?</h2>
            <p>
              Most platforms have a feed to show you new content selected by a recommendation system or algorithm. Recommendation systems use technology to find, sort, and show content you're likely to enjoy.
            </p>
            
            <div className="bg-black w-full aspect-video rounded-[24px] flex items-center justify-center cursor-pointer my-8">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[12px] border-l-white border-b-[8px] border-b-transparent ml-1"></div>
              </div>
            </div>

            <p>
              The For You feed on Poppro is special because it focuses on helping you explore new topics and creators, in addition to the topics you already know. To do so, it learns from your past interactions with content, filters out posts that may not be appropriate, and works to predict the content or creators you'll enjoy.
            </p>
            <p>
              How does it do that? It might seem like magic, but it’s actually more about math. By understanding the types of content you’ve enjoyed before, our recommendation system can predict what posts you're most likely to enjoy in the future. There are several factors below that shape the content that appears on your feed.
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
              Apabila anda mula-mula membuat akaun BroPro, sistem pengesyoran kami mempunyai maklumat yang sangat asas tentang keutamaan anda, seperti negara, bahasa dan umur yang anda berikan. Kami juga akan meminta anda memilih beberapa topik umum untuk memberikan petunjuk awal kepada sistem kami.
            </p>
            <p>
              Langkah itu berguna, tetapi pengalaman itu <em>belum</em> cukup diperibadikan lagi. Sambil anda menonton lebih banyak kandungan dan memberi sistem kami lebih banyak maklumat tentang perkara yang anda nikmati, sistem ini boleh membuat ramalan yang lebih baik. Sebagai contoh, sistem boleh belajar daripada:
            </p>
            <ul className="list-disc pl-6 space-y-3">
              <li>Sama ada anda menyukai siaran, berkongsi siaran, menambahkan siaran pada kegemaran atau meninggalkan komen pada siaran</li>
              <li>Berapa lama anda menonton video, dan sama ada anda selesai menonton atau beralih kepada video yang lain sebelum selesai</li>
              <li>Orang yang anda ikuti di BroPro</li>
              <li>Topik yang anda baru cari</li>
              <li>Kandungan yang dinikmati oleh orang lain yang mempunyai minat yang sama dengan anda</li>
            </ul>
            <p>
              Ketahui lebih lanjut tentang <a href="#" className="underline hover:text-black">sistem pengesyoran kami</a> dalam Pusat Bantuan kami.
            </p>
          </div>

          <div className="space-y-6">
            <h2 className="text-[32px] font-bold text-black tracking-tight">Prioritizing quality content</h2>
            <p>
              As our recommendation algorithm learns from what you enjoy, it works to identify high-quality and relevant content and shows that content to you in an order that feels fresh and interesting. To do so, the algorithm considers additional factors and follows guidelines such as:
            </p>
            <ul className="list-disc pl-6 space-y-3">
              <li>Mengelakkan pengesyoran berulang, seperti menunjukkan beberapa siaran yang serupa berturut-turut</li>
              <li>Mempromosikan pencipta tempatan</li>
              <li>Mengutamakan kandungan terkini berbanding dengan kandungan lama</li>
              <li>Menilai faktor seperti panjang siaran, masa kandungan disiarkan dan bunyi yang digunakan</li>
            </ul>
          </div>

          <div className="space-y-6">
            <h2 className="text-[32px] font-bold text-black tracking-tight">Filtering content that may not be right for you</h2>
            <p>
              To help you discover and explore Poppro in a safer way, we use additional protections before content appears on your feed:
            </p>
            <ul className="list-disc pl-6 space-y-3">
              <li>Peraturan kelayakan suapan Untuk Anda kami melarang algoritma daripada mengesyorkan kandungan yang, walaupun dibenarkan di BroPro, mungkin tidak sesuai untuk semua orang. Ketahui lebih lanjut tentang <a href="#" className="underline hover:text-black">standard kelayakan suapan Untuk Anda</a> kami dalam <a href="#" className="underline hover:text-black">Garis Panduan Komuniti</a> kami.</li>
              <li>Kami menyemak semula siaran yang semakin popular untuk membantu dalam memastikan siaran itu sesuai untuk semua orang. Langkah ini langkah tambahan selain moderasi keselamatan yang telah dilakukan pada semua kandungan BroPro.</li>
              <li>Peraturan suapan Untuk Anda kami menghalang pengesyoran kerap kandungan tertentu yang mungkin elok apabila dilihat sekali-sekala, tetapi boleh menjadi masalah jika dilihat terlalu kerap, seperti kandungan berkaitan kecergasan yang melampau.</li>
              <li>Melalui <a href="#" className="underline hover:text-black">Tahap Kandungan</a>, kami juga berusaha untuk menghalang kandungan yang mempunyai tema matang atau kompleks daripada menjangkau golongan muda.</li>
            </ul>
          </div>

          <div className="space-y-6">
            <h2 className="text-[32px] font-bold text-black tracking-tight">Bagaimanakah boleh saya membentuk suapan Untuk Anda milik saya?</h2>
            <p>
              Pada bila-bila masa anda menatal BroPro, anda membentuk suapan Untuk Anda milik anda hanya dengan menonton kandungan yang anda nikmati dan melangkau kandungan yang anda tidak sukai. Untuk membentuk suapan Untuk Anda milik anda dengan lebih lanjut, anda juga boleh menggunakan ciri-ciri BroPro yang popular untuk meningkatkan pengalaman anda:
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
              <li><strong>Segarkan semula suapan Untuk Anda</strong>: Lihat suapan Untuk Anda yang segar seolah-olah anda baru mendaftar di BroPro dan sesuaikan suapan dengan berinteraksi dengan pelbagai kandungan popular dan sohor kini.</li>
              <li><strong>Akaun dibisukan</strong>: Akaun yang dibisukan serta siarannya yang anda ingin kurangkan pada suapan anda.</li>
            </ul>

            <p className="pt-4">
              Jangan lupa bahawa jika anda ibu bapa atau penjaga, anda boleh mengurus banyak ciri ini serta akaun anak remaja anda menggunakan <a href="#" className="underline hover:text-black">Keselamatan Keluarga</a>. Lawati <a href="#" className="underline hover:text-black">Panduan Penjaga</a> kami untuk mendapatkan lebih banyak maklumat.
            </p>
          </div>
        </div>

        <div className="mt-24 pt-8 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-6">
          <h3 className="text-[20px] font-bold text-black">Adakah ini membantu?</h3>
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-2 px-8 py-3 bg-gray-100 hover:bg-gray-200 rounded-md font-semibold transition-colors">
              <ThumbsUp className="w-5 h-5" /> Ya
            </button>
            <button className="flex items-center gap-2 px-8 py-3 bg-gray-100 hover:bg-gray-200 rounded-md font-semibold transition-colors">
              <ThumbsDown className="w-5 h-5" /> Tidak
            </button>
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
