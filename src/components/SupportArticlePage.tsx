import React, { useState } from 'react';
import { Search, MoreVertical, ChevronLeft, ChevronDown, ChevronUp, ThumbsUp, ThumbsDown } from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';
import Logo from './Logo';

export default function SupportArticlePage() {
  const navigate = useNavigate();
  const [feedbackGiven, setFeedbackGiven] = useState<string | null>(null);
  const [isIklanOpen, setIsIklanOpen] = useState(false);
  const [isPengalamanOpen, setIsPengalamanOpen] = useState(true);

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
                    <Link to="/support/poppro-plus" className="block text-[var(--text-main)] hover:bg-[var(--border-color)] p-3 rounded-xl text-[14px] font-bold cursor-pointer leading-snug transition-colors">
                      Poppro Plus
                    </Link>
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
                
                {isPengalamanOpen && (
                  <div className="space-y-2 mt-2">
                    <div className="bg-[var(--primary-green)]/10 text-[var(--primary-green)] p-3 rounded-xl text-[14px] font-bold cursor-pointer leading-snug border border-[var(--primary-green)]/20">
                      Bagaimana boleh saya mengesahkan kad pembayaran saya?
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </aside>

        <main className="flex-1 overflow-y-auto bg-[var(--bg-dark)]">
          <div className="max-w-[800px] mx-auto px-6 md:px-12 py-10 md:py-16">
            <h1 className="text-3xl md:text-[32px] font-bold mb-8 leading-tight text-[var(--text-main)]">
              Bagaimana boleh saya mengesahkan kad pembayaran saya?
            </h1>
            
            <div className="space-y-5 text-[16px] text-[var(--text-secondary)] leading-[1.6]">
              <p>
                Kami menghargai setiap bayaran yang anda buat pada Poppro. Untuk memastikan bayaran anda selamat dan pengalaman pengisian semula Syiling yang lancar pada Poppro, ikut langkah di bawah untuk mengesahkan kad anda:
              </p>
              <p>1. Klik "Perlukan bantuan lanjut?" di bawah untuk membuka halaman penyerahan maklum balas.</p>
              <p>2. Masukkan "Sahkan kad saya" dalam kotak teks.</p>
              <p>3. Muat naik dokumen yang berikut untuk semakan:</p>
              <p className="pl-4">
                a. Bahagian hadapan dan belakang dokumen pengenalan yang dikeluarkan oleh kerajaan anda (contoh: ID Kebangsaan, pasport, lesen memandu).
              </p>
              <p className="pl-4">
                b. Gambar kad debit atau kad kredit fizikal anda yang digunakan untuk membuat transaksi pada Poppro. Kad ini perlu menunjukkan 4 digit terakhir nombor kad dan nama pemegang kad. Pastikan 12 digit pertama kad anda dan nombor CVV ditutup sebelum memuat naik gambar.
              </p>
              <p>
                Ini akan membantu kami melindungi bayaran anda daripada aktiviti penipuan dan membina platform yang lebih selamat untuk semua orang.
              </p>
            </div>

            <div className="mt-16 bg-[var(--sidebar-bg)] border border-[var(--border-color)] rounded-xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="font-bold text-[16px] text-[var(--text-main)]">Adakah ini berguna?</span>
              
              {feedbackGiven ? (
                <span className="text-[var(--primary-green)] font-semibold">Terima kasih atas maklum balas anda.</span>
              ) : (
                <div className="flex gap-3">
                  <button 
                    onClick={() => setFeedbackGiven('yes')}
                    className="flex items-center gap-2 px-5 py-2 bg-transparent border border-[var(--border-color)] text-[var(--text-main)] rounded-full hover:bg-[var(--bg-dark)] font-semibold text-[14px] transition-colors shadow-sm"
                  >
                    <ThumbsUp size={16} /> Ya
                  </button>
                  <button 
                    onClick={() => setFeedbackGiven('no')}
                    className="flex items-center gap-2 px-5 py-2 bg-transparent border border-[var(--border-color)] text-[var(--text-main)] rounded-full hover:bg-[var(--bg-dark)] font-semibold text-[14px] transition-colors shadow-sm"
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
