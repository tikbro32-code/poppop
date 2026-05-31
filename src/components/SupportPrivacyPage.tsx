import React, { useState } from 'react';
import { Search, MoreVertical, ChevronLeft, ChevronDown, ChevronUp, ThumbsUp, ThumbsDown } from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';
import Logo from './Logo';

export default function SupportPrivacyPage() {
  const navigate = useNavigate();
  const [feedbackGiven, setFeedbackGiven] = useState<string | null>(null);

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
              placeholder="Search help articles" 
              className="bg-[var(--sidebar-bg)] hover:brightness-110 border border-[var(--border-color)] transition-colors rounded-full py-2.5 pl-11 pr-4 w-[300px] focus:outline-none text-sm text-[var(--text-main)] placeholder-[var(--text-secondary)]"
            />
          </div>
          <button className="bg-[var(--primary-green)] text-black px-6 py-2 rounded-md font-bold hover:brightness-110 transition-colors text-sm">
            Log in
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
              className="flex items-center gap-2 font-bold text-[17px] mb-6 hover:underline text-[var(--text-main)] truncate w-full"
            >
              <ChevronLeft size={20} strokeWidth={2.5} className="shrink-0" />
              <span className="truncate">Privacy & safety pe...</span>
            </button>
            
            <div className="border-t border-[var(--border-color)] my-4"></div>
            
            <div className="space-y-6 mt-6">
              <div>
                <div className="flex items-center justify-between cursor-pointer text-[var(--text-main)] font-bold hover:underline mb-3">
                  <span className="text-[15px]">Privacy</span>
                  <ChevronUp size={20} className="text-[var(--text-secondary)]" />
                </div>
                
                <div className="space-y-2 pl-4 border-l-2 border-[var(--border-color)] ml-2">
                  <div className="bg-[var(--primary-green)]/10 text-[var(--primary-green)] p-3 rounded-xl text-[14px] font-bold cursor-pointer leading-snug border border-[var(--primary-green)]/20">
                    How we process facial and voice information
                  </div>
                </div>
              </div>
            </div>
          </div>
        </aside>

        <main className="flex-1 overflow-y-auto bg-[var(--bg-dark)]">
          <div className="max-w-[800px] mx-auto px-6 md:px-12 py-10 md:py-16">
            <h1 className="text-3xl md:text-[32px] font-bold mb-8 leading-tight text-[var(--text-main)]">
              How we process facial and voice information
            </h1>
            
            <div className="space-y-5 text-[16px] text-[var(--text-secondary)] leading-[1.6]">
              <p>
                If you choose to use effects and filters related to face and voice, or similar features, we collect and analyze facial and voice information in Poppro videos, photos, and LIVE videos. For example, an effect that adds sunglasses to your face might need to know the position of your eyes on the screen to place the sunglasses correctly on your face. Similarly, voice filters may need to analyze the sound of your voice to make you sound more like a robot. We also offer features that allow you to upload images or audio recordings and use those images and audio, for example, to create digital avatars, a digital representation of your voice, or other personalized content based on your face or voice.
              </p>
              <p>
                We also collect and analyze facial and voice information in videos, photos, and LIVE Videos for non-personally identifiable purposes, such as improving user safety and moderating content. We do not use any facial or voice information to identify you or anyone else in your videos, photos, or LIVE videos, and we do not share such information with third parties.
              </p>
              <p>
                Additionally, if you choose to use facial age estimation to verify your age on Poppro, we work with <a href="#" className="text-[#20D5EC] hover:underline">Yoti</a>, a third-party age assurance service, to estimate your age using facial information collected from the selfie you submit.
              </p>
              <p>
                Perkara penting yang perlu diketahui apabila anda mencipta atau menyiarkan kandungan pada apl:
              </p>
              <ul className="space-y-2">
                <li>• Setelah penapis atau kesan yang menggunakan maklumat muka atau suara telah ditambahkan pada kandungan anda, maklumat muka atau suara itu dipadamkan.</li>
                <li>• Muka atau maklumat suara yang digunakan untuk mencipta avatar digital, suara digital atau kandungan peribadi lain berdasarkan muka atau suara anda juga dipadamkan apabila anda memadamkan akaun Poppro anda.</li>
                <li>• Setelah video, gambar atau LIVE anda dianalisis untuk sebarang tujuan lain yang diterangkan di atas, maklumat berkaitan muka dan suara yang dikumpulkan akan dipadamkan.</li>
              </ul>
              <p>
                Perkara penting yang perlu diketahui apabila anda menggunakan anggaran umur muka:
              </p>
              <ul className="space-y-2">
                <li>• Yoti hanya menggunakan maklumat swafoto dan muka anda untuk menganggarkan umur anda dan menilai sama ada imej itu ialah orang sebenar atau tidak. • Maklumat swafoto dan muka anda tidak digunakan untuk mengenal pasti identiti anda atau untuk sebarang tujuan lain.</li>
                <li>• Yoti tidak kongsi maklumat muka anda dengan Poppro atau pihak ketiga.</li>
                <li>• Yoti dan Poppro memadamkan swafoto anda dan sebarang maklumat muka sebaik sahaja proses anggaran umur selesai.</li>
                <li>• Jika terdapat masalah sepanjang proses tersebut atau anda lebih suka untuk tidak menggunakan anggaran umur wajah, anda boleh menggunakan kaedah lain untuk mengesahkan umur anda, seperti keizinan kad kredit.</li>
                <li>• Jika anda memadamkan akaun Poppro anda, sebarang maklumat berkaitan muka atau suara yang dikaitkan dengan akaun anda juga akan dipadamkan.</li>
              </ul>
              <p>
                Ketahui lebih lanjut tentang maklumat yang kami kumpulkan dan sebab kami mengumpulkan maklumat tersebut dalam Dasar Privasi kami.
              </p>
            </div>

            <div className="mt-16 bg-[var(--sidebar-bg)] border border-[var(--border-color)] rounded-xl p-6 w-full flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
              <span className="font-bold text-[16px] text-[var(--text-main)]">Was this helpful?</span>
              
              {feedbackGiven ? (
                <span className="text-[var(--primary-green)] font-semibold">Thank you for your feedback.</span>
              ) : (
                <div className="flex gap-3">
                  <button 
                    onClick={() => setFeedbackGiven('yes')}
                    className="flex items-center gap-2 px-6 py-2.5 bg-transparent border border-[var(--border-color)] text-[var(--text-main)] rounded-full hover:bg-[var(--bg-dark)] font-semibold text-[14px] transition-colors"
                  >
                    <ThumbsUp size={16} /> Yes
                  </button>
                  <button 
                    onClick={() => setFeedbackGiven('no')}
                    className="flex items-center gap-2 px-6 py-2.5 bg-transparent border border-[var(--border-color)] text-[var(--text-main)] rounded-full hover:bg-[var(--bg-dark)] font-semibold text-[14px] transition-colors"
                  >
                    <ThumbsDown size={16} /> No
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
