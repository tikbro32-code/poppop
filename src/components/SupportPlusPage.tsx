import React, { useState } from 'react';
import { Search, MoreVertical, ChevronLeft, ChevronDown, ChevronUp, ThumbsUp, ThumbsDown } from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';
import Logo from './Logo';

export default function SupportPlusPage() {
  const navigate = useNavigate();
  const [feedbackGiven, setFeedbackGiven] = useState<string | null>(null);
  const [isIklanOpen, setIsIklanOpen] = useState(true);
  const [isPengalamanOpen, setIsPengalamanOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[var(--bg-dark)] text-[var(--text-main)] font-sans">
      <header className="h-[60px] border-b border-[var(--border-color)] flex items-center justify-between px-4 md:px-6 shrink-0 bg-[var(--header-bg)] z-10">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate('/')}>
          <Logo size="md" />
          <span className="text-2xl font-semibold text-[var(--text-secondary)] ml-1">Support</span>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="relative hidden md:block">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--text-secondary)]" size={18} />
            <input 
              type="text" 
              placeholder="Cari artikel bantuan" 
              className="bg-[var(--sidebar-bg)] hover:brightness-110 border border-[var(--border-color)] transition-colors rounded-full py-2.5 pl-11 pr-4 w-[300px] focus:outline-none text-sm text-[var(--text-main)] placeholder-[var(--text-secondary)]"
            />
          </div>
          <button className="bg-[var(--primary-green)] text-black px-6 py-2 rounded-md font-bold hover:brightness-110 transition-colors text-sm">
            Log masuk
          </button>
          <button className="text-[var(--text-main)] hover:bg-[var(--sidebar-bg)] p-1.5 rounded-full transition-colors">
            <MoreVertical size={24} />
          </button>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        <aside className="w-[320px] border-r border-[var(--border-color)] overflow-y-auto shrink-0 hidden lg:block bg-[var(--sidebar-bg)]">
          <div className="p-6">
            <button 
              onClick={() => navigate('/support')} 
              className="flex items-center gap-2 font-bold text-[17px] mb-6 hover:underline text-[var(--text-main)]"
            >
              <ChevronLeft size={20} strokeWidth={2.5} />
              Pengewangan
            </button>
            
            <div className="border-t border-[var(--border-color)] my-4"></div>
            
            <div className="space-y-4 mt-6">
              <div>
                <div 
                  className="flex items-center justify-between cursor-pointer text-[var(--text-main)] font-bold hover:underline mb-2"
                  onClick={() => setIsIklanOpen(!isIklanOpen)}
                >
                  <span className="text-[14px]">Iklan dan data</span>
                  {isIklanOpen ? <ChevronUp size={18} className="text-[var(--text-secondary)]" /> : <ChevronDown size={18} className="text-[var(--text-secondary)]" />}
                </div>
                
                {isIklanOpen && (
                  <div className="space-y-2 mt-2">
                    <div className="bg-[var(--primary-green)]/10 text-[var(--primary-green)] p-3 rounded-xl text-[14px] font-bold cursor-pointer leading-snug border border-[var(--primary-green)]/20">
                      Poppro Plus
                    </div>
                  </div>
                )}
              </div>
              
              <div>
                <div 
                  className="flex items-start justify-between cursor-pointer text-[var(--text-main)] font-bold hover:underline mb-2"
                  onClick={() => setIsPengalamanOpen(!isPengalamanOpen)}
                >
                  <span className="text-[14px] leading-snug pr-4">
                    Untuk memastikan pengalaman pembayaran yang lancar, sahkan kad pembayaran anda dengan menghantar ID dan maklumat kad anda.
                  </span>
                  {isPengalamanOpen ? <ChevronUp size={18} className="text-[var(--text-secondary)] shrink-0 mt-0.5" /> : <ChevronDown size={18} className="text-[var(--text-secondary)] shrink-0 mt-0.5" />}
                </div>
                
                {isIklanOpen && (
                  <div className="space-y-2 mt-2">
                    <Link to="/support/verify-card" className="block text-[var(--text-main)] hover:bg-[var(--border-color)] p-3 rounded-xl text-[14px] font-bold cursor-pointer leading-snug transition-colors">
                      Bagaimana boleh saya mengesahkan kad pembayaran saya?
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </aside>

        <main className="flex-1 overflow-y-auto bg-[var(--bg-dark)]">
          <div className="max-w-[800px] mx-auto px-6 md:px-12 py-10 md:py-16">
            <h1 className="text-3xl md:text-[32px] font-bold mb-8 leading-tight text-[var(--text-main)]">
              Poppro Plus
            </h1>
            
            <div className="space-y-8 text-[16px] text-[var(--text-secondary)] leading-[1.6]">
              
              <div className="bg-[var(--sidebar-bg)] border border-[var(--border-color)] p-6 rounded-xl">
                <h3 className="font-bold text-[var(--text-main)] mb-4">Pergi ke bahagian</h3>
                <ul className="space-y-3 text-[var(--primary-green)] font-semibold">
                  <li><button onClick={() => scrollToSection('apakah')} className="hover:underline text-left">Apakah itu Poppro Plus?</button></li>
                  <li><button onClick={() => scrollToSection('manfaat')} className="hover:underline text-left">Manfaat Poppro Plus</button></li>
                  <li><button onClick={() => scrollToSection('langgan')} className="hover:underline text-left">Bagaimanakah cara saya boleh langgan Poppro Plus?</button></li>
                  <li><button onClick={() => scrollToSection('urus')} className="hover:underline text-left">Urus langganan anda</button></li>
                  <li><button onClick={() => scrollToSection('iklan')} className="hover:underline text-left">Adakah saya masih akan melihat iklan dengan Poppro Plus?</button></li>
                  <li><button onClick={() => scrollToSection('harga')} className="hover:underline text-left">Mengapa saya melihat harga langganan yang berbeza?</button></li>
                </ul>
              </div>

              <section id="apakah" className="scroll-mt-8">
                <h2 className="text-2xl font-bold text-[var(--text-main)] mb-4">Apakah itu Poppro Plus?</h2>
                <p className="mb-4">
                  Poppro Plus merupakan langganan bulanan yang membolehkan anda menikmati iklan Poppro percuma sambil masih dapat menemukan produk yang disyorkan pencipta dalam video mereka. Dari semasa ke semasa, Poppro boleh membuat kandungan, alat dan perkhidmatan tambahan tersedia kepada pelanggan mengikut budi bicaranya sebagai sebahagian daripada langganan kepada Poppro Plus, contohnya, faedah tambahan suka Syiling bulanan dan diskaun untuk Promosi. Ketahui lebih lanjut tentang Terma Poppro Plus kami.
                </p>
                <p className="text-sm italic">
                  Nota: Poppro Plus hanya tersedia untuk mereka yang berumur sekurang-kurangnya 18 tahun yang merupakan penduduk New Zealand dan atau Emiriyah Arab Bersatu (UAE).
                </p>
              </section>

              <section id="manfaat" className="scroll-mt-8">
                <h2 className="text-2xl font-bold text-[var(--text-main)] mb-4">Manfaat Poppro Plus</h2>
                
                <h3 className="text-lg font-bold text-[var(--text-main)] mb-2">Poppro tanpa iklan</h3>
                <p className="mb-2">Dengan Poppro Plus, anda akan mendapat versi Poppro tanpa iklan *.</p>
                <p className="text-sm mb-6">
                  *Anda masih akan melihat kandungan komersial lain di Poppro. Contohnya, anda mungkin melihat kandungan disiarkan oleh pencipta yang mempromosikan jenama pihak ketiga atau produk atau perkhidmatannya dalam pertukaran untuk pembayaran atau insentif lain. Ketahui lebih lanjut tentang Dasar Kandungan Berjenama kami. Anda juga mungkin melihat bentuk kandungan komersial, suka kandungan lain yang disiarkan oleh perniagaan.
                </p>

                <h3 className="text-lg font-bold text-[var(--text-main)] mb-2">Syiling</h3>
                <p className="mb-6">
                  Syiling ialah item digital yang boleh digunakan pada Poppro untuk mengakses atau mengaktifkan item atau perkhidmatan maya lain yang ditawarkan oleh Poppro. Baca lebih lanjut tentang cara menghantar Hadiah dengan Syiling. Semasa langganan Poppro anda, anda akan menerima 100 Syiling sebulan. Dengan Syiling anda boleh menghantar Hadiah kepada pencipta dalam video Poppro LIVE atau suapan. Syiling juga boleh digunakan untuk membeli Promosi untuk meningkatkan video pencipta anda atau lain-lain untuk lebih banyak trafik dan suka. Syiling akan kekal dalam baki anda selepas langganan tamat tempoh melainkan bayaran balik berlaku. Syiling tertakluk pada dasar dan terma kami.
                </p>

                <h3 className="text-lg font-bold text-[var(--text-main)] mb-2">Diskaun Promosi</h3>
                <p>
                  Setiap bulan, anda akan menerima diskaun apabila anda membeli Promosi . Ketahui lebih lanjut tentang terma kupon dan diskaun .
                </p>
              </section>

              <section id="langgan" className="scroll-mt-8">
                <h2 className="text-2xl font-bold text-[var(--text-main)] mb-4">Bagaimanakah saya boleh melanggan Poppro Plus?</h2>
                <ol className="list-decimal pl-5 space-y-2 mb-4">
                  <li>Dalam apl Poppro, ketik Profil di bahagian bawah.</li>
                  <li>Ketik butang Menu ☰ di bahagian atas, kemudian pilih Tetapan dan privasi .</li>
                  <li>Ketik Dapatkan Poppro Plus dan ikut langkah-langkah untuk melanggan.</li>
                </ol>
                <p>
                  Anda juga boleh mengakses Poppro Plus dengan pergi ke Pelan & Iklan (di bawah Tetapan dan privasi ), kemudian pilih Tukar pelan .
                </p>
              </section>

              <section id="urus" className="scroll-mt-8">
                <h2 className="text-2xl font-bold text-[var(--text-main)] mb-4">Urus langganan anda</h2>
                
                <h3 className="text-lg font-bold text-[var(--text-main)] mb-2">Pembaharuan bulanan</h3>
                <p className="mb-6">
                  Langganan anda akan diperbaharui secara automatik pada akhir setiap kitaran pengebilan, melainkan anda membatalkannya secara manual.
                </p>

                <h3 className="text-lg font-bold text-[var(--text-main)] mb-2">Membatalkan Poppro Plus</h3>
                <p>
                  Anda boleh membatalkan langganan anda pada bila-bila masa. Untuk berbuat demikian, pergi ke tetapan Poppro Plus dan pilih Batalkan langganan anda . Selepas anda membatalkan langganan anda, anda masih akan menikmati Poppro Plus sehingga kitaran pengebilan semasa tamat. Syiling yang diperuntukkan akan kekal dalam baki anda. Tiada kos yang dikenakan selepas langganan anda tamat.
                </p>
              </section>

              <section id="iklan" className="scroll-mt-8">
                <h2 className="text-2xl font-bold text-[var(--text-main)] mb-4">Adakah saya masih akan melihat iklan dengan Poppro Plus?</h2>
                <p>
                  Anda tidak akan melihat iklan yang Poppro telah dibayar untuk ditunjukkan kepada anda. Anda masih akan melihat video di mana pencipta Poppro dibayar oleh jenama atau syarikat untuk mempromosikan produk atau perkhidmatan mereka. Jenis video ini akan dilabelkan dengan jelas dengan "perkongsian berbayar" atau "kandungan yang dipromosikan". Anda juga akan melihat video komersial asli, seperti kandungan yang disiarkan oleh perniagaan.
                </p>
              </section>

              <section id="harga" className="scroll-mt-8">
                <h2 className="text-2xl font-bold text-[var(--text-main)] mb-4">Mengapa saya melihat harga langganan yang berbeza?</h2>
                <p className="mb-2">Anda mungkin melihat harga yang berbeza kerana:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Turun naik kadar pertukaran mengubah jumlah mata wang tempatan.</li>
                  <li>Harga pada iOS dan Android boleh berbeza kerana Apple dan Google menggunakan yuran langganan yang berbeza.</li>
                </ul>
              </section>
            </div>

            <div className="mt-16 bg-[var(--sidebar-bg)] border border-[var(--border-color)] rounded-xl p-6 w-full flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
              <span className="font-bold text-[16px] text-[var(--text-main)]">Adakah ini berguna?</span>
              
              {feedbackGiven ? (
                <span className="text-[var(--primary-green)] font-semibold">Terima kasih atas maklum balas anda.</span>
              ) : (
                <div className="flex gap-3">
                  <button 
                    onClick={() => setFeedbackGiven('yes')}
                    className="flex items-center gap-2 px-6 py-2.5 bg-transparent border border-[var(--border-color)] text-[var(--text-main)] rounded-full hover:bg-[var(--bg-dark)] font-semibold text-[14px] transition-colors"
                  >
                    <ThumbsUp size={16} /> Ya
                  </button>
                  <button 
                    onClick={() => setFeedbackGiven('no')}
                    className="flex items-center gap-2 px-6 py-2.5 bg-transparent border border-[var(--border-color)] text-[var(--text-main)] rounded-full hover:bg-[var(--bg-dark)] font-semibold text-[14px] transition-colors"
                  >
                    <ThumbsDown size={16} /> Tidak
                  </button>
                </div>
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
