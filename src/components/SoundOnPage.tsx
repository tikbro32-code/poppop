import React, { useState } from 'react';
import { 
  ArrowRight, 
  ChevronDown, 
  Globe, 
  Music, 
  Disc, 
  Radio, 
  Tv, 
  Users, 
  Zap, 
  TrendingUp, 
  BarChart3, 
  Sparkles, 
  DollarSign, 
  CheckCircle2, 
  ArrowUpRight, 
  MessageSquare,
  HelpCircle,
  Menu,
  X,
  Plus
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useNavigate, Link } from 'react-router-dom';

export default function SoundOnPage() {
  const navigate = useNavigate();
  const [selectedLang, setSelectedLang] = useState('Bahasa Melayu');
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // SoundOn Demo Sign Up modal state
  const [showSignUpModal, setShowSignUpModal] = useState(false);
  const [demoArtistName, setDemoArtistName] = useState('');
  const [demoArtistEmail, setDemoArtistEmail] = useState('');
  const [demoGenre, setDemoGenre] = useState('Pop / Alternatif');
  const [demoLink, setDemoLink] = useState('');
  const [submittedDemo, setSubmittedDemo] = useState(false);

  // FAQ interactive state
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  // Dictionary for Bilingual content (Malay and English)
  const dict = {
    'Bahasa Melayu': {
      nav: {
        distribution: 'Pengedaran',
        promotion: 'Promosi',
        analytics: 'Analisis',
        earnings: 'Pendapatan',
        faq: 'Soalan Lazim',
        login: 'Log Masuk',
        signup: 'Daftar'
      },
      hero: {
        badge: 'Pengedaran Muzik Poppro',
        title: 'Edar dan promosikan muzik anda secara global',
        subtitle: 'Platform semua-dalam-satu daripada SoundOn kuasai ekosistem Poppro untuk artis bebas dan label rakaman.',
        ctaPrimary: 'Mula Sekarang',
        ctaSecondary: 'Teroka Artis Kami',
        statsCreators: '3,000,000+ Pencipta di Poppro bekerjasama dengan kami',
        statsTracks: '12J+ Lagu berjaya dipromosikan & viral'
      },
      distribute: {
        sectionTitle: 'Edarkan muzik anda ke seluruh dunia',
        poweredTitle: 'Dikuasakan oleh ekosistem unik Poppro',
        poweredDesc: 'Inspirasikan pencipta di seluruh dunia untuk menggunakan lagu anda dalam video mereka. Kongsi bunyi anda dengan komuniti global dan jana peluang pengewangan yang dipertingkatkan melalui Perpustakaan Muzik Komersial Poppro.',
        card1Title: 'Edaran Tanpa Batas',
        card1Desc: 'Bawa lagu anda ke Spotify, Apple Music, YouTube Music, Amazon Music, dan puluhan platform penstriman utama yang lain dalam beberapa klik mudah.',
        card2Title: 'Kekalkan 100% Hak Milik',
        card2Desc: 'Anda memegang penuh hak cipta master asal anda sambil menikmati bahagian royalti yang sangat kompetitif dan telus tanpa caj tersembunyi.'
      },
      promotion: {
        sectionTitle: 'Gandakan impak lagu anda dengan Poppro',
        feat1Title: 'Bekerjasama dengan pencipta kandungan',
        feat1Desc: 'Dapatkan akses terus kepada jutaan pencipta kandungan Poppro. Gunakan alatan promosi khas untuk mendorong lagu anda menjadi arah aliran (trending) dan viral.',
        feat2Title: 'Promosi Eksklusif di CapCut',
        feat2Desc: 'Cipta templat muzik yang digemari ramai. Jangkau penonton yang lebih luas melalui peluang editorial di aplikasi penyuntingan video percuma paling popular di dunia.',
        feat3Title: 'Sokongan Pemasaran DSP',
        feat3Desc: 'Hantar lagu anda untuk dimasukkan ke dalam senarai main rasmi (editorial playlist), aktifkan prapelancaran (pre-save), dan nikmati pelbagai penyelesaian promosi muzik pintar.',
        feat4Title: 'Bimbingan Pakar Industri',
        feat4Desc: 'Tingkatkan pertumbuhan kerjaya muzik anda dengan sokongan eksklusif daripada pasukan pakar runding muzik in-house kami (khusus untuk artis terpilih).'
      },
      analytics: {
        sectionTitle: 'Buat keputusan bijak berpandukan data nyata',
        subtitle: 'Papan pemuka SoundOn membantu anda memahami prestasi muzik di kalangan pencipta dan video Poppro melalui analitik yang mendalam.',
        bullet1: 'Metrik masa nyata bagi tontonan video, suka, dan jumlah perkongsian.',
        bullet2: 'Pemetaan demografi pendengar dan kategori kandungan pencipta paling berpengaruh.',
        bullet3: 'Penjejakan automatik prestasi lagu anda di platform penstriman utama berbanding trend video.'
      },
      earnings: {
        sectionTitle: 'Dapatkan royalti anda dengan mudah & pantas',
        card1Title: 'Agihan Royalti Percuma',
        card1Desc: 'Bahagikan hasil pendapatan dengan kolaborator atau ahli kumpulan anda secara automatik tanpa sebarang bayaran tambahan.',
        card2Title: 'Laporan Royalti Telus',
        card2Desc: 'Akses laporan data jualan harian dan bulanan yang diperinci untuk memudahkan analisis kewangan kerjaya anda.',
        card3Title: 'Bayaran Bulanan Konsisten',
        card3Desc: 'Terima pembayaran royalti anda setiap bulan dengan kemudahan pengeluaran dana pada bila-bila masa.',
        card4Title: 'Pengeluaran Pintar',
        card4Desc: 'Nikmati sistem pengeluaran wang pintar terus ke akaun bank tempatan anda atau E-wallet pilihan tanpa kerumitan.'
      },
      faqSection: {
        sectionTitle: 'Ada soalan? Kami sedia membantu',
        q1: 'Adakah saya perlu membayar untuk mengedarkan muzik melalui SoundOn?',
        a1: 'Tidak, pendaftaran dan pengedaran asas muzik anda ke platform utama melalui SoundOn adalah percuma. Kami menawarkan struktur royalti yang sangat menguntungkan di mana anda menyimpan majoriti hasil royalti anda.',
        q2: 'Berapa lamakah masa yang diambil untuk lagu saya berada di platform penstriman?',
        a2: 'Biasanya, ia mengambil masa antara 3 hingga 7 hari bekerja untuk lagu anda diluluskan dan dihantar ke semua platform seperti Spotify, Apple Music, dan Perpustakaan Komersial Poppro.',
        q3: 'Adakah saya mengekalkan pemilikan penuh ke atas lagu saya?',
        a3: 'Ya, 100%. Anda sentiasa mengekalkan hak milik master dan hak cipta untuk semua karya muzik yang anda edarkan bersama SoundOn.',
        q4: 'Bagaimanakah lagu saya boleh digunakan oleh pencipta di Poppro?',
        a4: 'Muzik anda akan dimasukkan ke dalam Perpustakaan Suara global Poppro, membolehkan jutaan pencipta menambah lagu anda ke dalam video mereka secara organik, yang boleh mencetuskan trend tular.'
      },
      ctaFooter: {
        title: 'Sedia untuk memulakan kerjaya muzik anda?',
        subtitle: 'Sertai kelas artisan muzik bebas dari seluruh dunia yang merakyatkan lagu mereka menerusi ekosistem muzik SoundOn.',
        button: 'Daftar Sebagai Artis'
      }
    },
    'English': {
      nav: {
        distribution: 'Distribution',
        promotion: 'Promotion',
        analytics: 'Analytics',
        earnings: 'Earnings',
        faq: 'FAQ',
        login: 'Log In',
        signup: 'Sign Up'
      },
      hero: {
        badge: 'Poppro Music Distribution',
        title: 'Distribute and promote your music globally',
        subtitle: 'SoundOn\'s all-in-one platform harnesses the Poppro ecosystem for independent artists and record labels.',
        ctaPrimary: 'Get Started',
        ctaSecondary: 'Explore Artists',
        statsCreators: '3,000,000+ Creators on Poppro partnering with us',
        statsTracks: '12M+ Songs successfully promoted & viralized'
      },
      distribute: {
        sectionTitle: 'Distribute your music globally',
        poweredTitle: 'Powered by Poppro\'s unique ecosystem',
        poweredDesc: 'Inspire creators worldwide to use your music in their videos. Share your sound with a global community and gain enhanced monetization opportunities through Poppro\'s Commercial Music Library.',
        card1Title: 'Limitless Distribution',
        card1Desc: 'Bring your tracks to Spotify, Apple Music, YouTube Music, Amazon Music, and dozens of other major streaming platforms in just a few clicks.',
        card2Title: 'Retain 100% Ownership',
        card2Desc: 'You keep master rights ownership of your tracks while enjoying competitive, transparent royalty splits with zero hidden fees.'
      },
      promotion: {
        sectionTitle: 'Multiply your music impact with Poppro',
        feat1Title: 'Partner with creators',
        feat1Desc: 'Gain direct access to millions of Poppro creators. Use specialized promotional tools to push your music into local and global trends.',
        feat2Title: 'Exclusive CapCut Promotion',
        feat2Desc: 'Create musical templates that listeners love. Reach wider audiences through editorial placements in the world\'s most popular video editing app.',
        feat3Title: 'DSP Marketing Support',
        feat3Desc: 'Pitch your tracks for official editorial playlists, enable pre-saves, and unlock intelligent release strategies across DSPs.',
        feat4Title: 'Industry Expert Guidance',
        feat4Desc: 'Amplify your music career growth with expert advice from our in-house artist relations specialists (for qualifying artists).'
      },
      analytics: {
        sectionTitle: 'Make decisions backed by real data',
        subtitle: 'SoundOn\'s creator analytics hub helps you understand tracking, viral triggers, and viewer engagements across all Poppro videos.',
        bullet1: 'Real-time metrics tracking on video views, likes, and shares.',
        bullet2: 'Detailed listener demographics and high-impact creator categories.',
        bullet3: 'Automatic correlation between video trends and streaming dashboard results.'
      },
      earnings: {
        sectionTitle: 'Get your earnings effortlessly & fast',
        card1Title: 'Free Royalty Splits',
        card1Desc: 'Instantly split incoming earnings with co-writers, vocalists, or band members with absolute ease.',
        card2Title: 'Transparent Reports',
        card2Desc: 'Review detailed daily and monthly data summaries to keep your music business running smoothly.',
        card3Title: 'Consistent Payments',
        card3Desc: 'Get paid on a steady, hassle-free monthly schedule with flexible payout requests.',
        card4Title: 'Secure Withdrawals',
        card4Desc: 'Transfer your funds safely and quickly into local bank accounts or popular regional e-wallets.'
      },
      faqSection: {
        sectionTitle: 'Questions? We\'ve got answers',
        q1: 'Do I have to pay to distribute music through SoundOn?',
        a1: 'No, basic distribution and signup with SoundOn are completely free. We keep our terms clear with highly friendly royalty divisions so you preserve the lion\'s share of your songs\' profits.',
        q2: 'How long does it take for my music to go live on digital platforms?',
        a2: 'Generally, it takes between 3 to 7 business days for our curation team to review, approve, and deliver your tracks live to Spotify, Apple Music, and Poppro Library.',
        q3: 'Do I keep full ownership of my music?',
        a3: 'Yes, absolutely. You retain 100% master ownership and publishing rights to all creative works you distribute with SoundOn.',
        q4: 'How do creators on Poppro find my track?',
        a4: 'Your tracks are added into Poppro\'s main audio browser catalogue, so millions of creators can discover and put your music natively in their videos.'
      },
      ctaFooter: {
        title: 'Ready to build your music career?',
        subtitle: 'Join a global class of independent music pioneers who elevate their art everyday through the SoundOn network.',
        button: 'Sign Up as Artist'
      }
    }
  };

  const t = dict[selectedLang as 'Bahasa Melayu' | 'English'];

  const toggleLang = () => {
    setSelectedLang(prev => (prev === 'Bahasa Melayu' ? 'English' : 'Bahasa Melayu'));
  };

  const handleArtistSignUp = () => {
    setShowSignUpModal(true);
  };

  return (
    <div className="min-h-screen bg-[#070909] text-white font-sans selection:bg-[#00C880]/20 overflow-x-hidden relative">
      
      {/* Dynamic Background Accents mirroring Poppro theme */}
      <div className="absolute top-0 left-0 right-0 h-[650px] bg-gradient-to-b from-[var(--primary-green)]/5 via-transparent to-transparent pointer-events-none" />
      <div className="absolute top-[400px] left-[-150px] w-[500px] h-[500px] rounded-full bg-[var(--primary-green)]/5 blur-[120px] pointer-events-none" />
      <div className="absolute top-[1200px] right-[-150px] w-[500px] h-[500px] rounded-full bg-emerald-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[200px] left-[-200px] w-[600px] h-[600px] rounded-full bg-[var(--primary-green)]/5 blur-[150px] pointer-events-none" />

      {/* Navigation Header */}
      <nav id="soundon-nav" className="sticky top-0 z-50 bg-[#070909]/90 backdrop-blur-md border-b border-white/5 px-4 lg:px-8 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[var(--primary-green)] to-emerald-500 flex items-center justify-center font-bold text-black shadow-lg shadow-[var(--primary-green)]/20 group-hover:scale-105 transition-transform">
              S
            </div>
            <div className="flex flex-col">
              <span className="font-sans font-bold text-sm tracking-widest text-white flex items-center gap-1.5">
                SOUNDON <span className="text-[9px] bg-[var(--primary-green)]/15 text-[var(--primary-green)] px-1.5 py-0.5 rounded font-mono">POPPRO</span>
              </span>
              <span className="text-[8px] text-gray-400 font-mono tracking-wider">MUSIC DISTRIBUTION</span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-8 text-sm text-gray-300 font-medium">
            <a href="#distribution" className="hover:text-[var(--primary-green)] transition-colors">{t.nav.distribution}</a>
            <a href="#promotion" className="hover:text-[var(--primary-green)] transition-colors">{t.nav.promotion}</a>
            <a href="#analytics" className="hover:text-[var(--primary-green)] transition-colors">{t.nav.analytics}</a>
            <a href="#earnings" className="hover:text-[var(--primary-green)] transition-colors">{t.nav.earnings}</a>
            <a href="#faq" className="hover:text-[var(--primary-green)] transition-colors">{t.nav.faq}</a>
          </div>

          {/* Desktop Right Actions */}
          <div className="hidden md:flex items-center gap-4">
            
            {/* Language Toggle Button */}
            <button 
              onClick={toggleLang}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/10 hover:border-white/20 text-xs text-gray-300 transition-colors"
            >
              <Globe className="w-3.5 h-3.5 text-[var(--primary-green)]" />
              <span>{selectedLang}</span>
            </button>

            <button 
              onClick={() => navigate('/login')}
              className="text-sm font-medium text-gray-300 hover:text-white px-3 py-1.5"
            >
              {t.nav.login}
            </button>
            <button 
              onClick={handleArtistSignUp}
              className="bg-[var(--primary-green)] hover:bg-[var(--primary-green)]/90 text-black font-semibold text-sm px-5 py-2 rounded-full transition-transform hover:scale-[1.02] shadow-md shadow-[var(--primary-green)]/10"
            >
              {t.nav.signup}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-3 md:hidden">
            <button 
              onClick={toggleLang}
              className="flex items-center gap-1 px-2.5 py-1 rounded-full border border-white/10 text-xs text-gray-300"
            >
              <Globe className="w-3.5 h-3.5 text-[var(--primary-green)]" />
              <span>{selectedLang === 'Bahasa Melayu' ? 'BM' : 'EN'}</span>
            </button>
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-300 hover:text-white p-1"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden fixed top-[69px] left-0 right-0 z-40 bg-[#070909]/95 border-b border-white/5 py-6 px-4 flex flex-col gap-4 text-center backdrop-blur-lg"
          >
            <a 
              href="#distribution" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-lg py-2 hover:text-[var(--primary-green)]"
            >
              {t.nav.distribution}
            </a>
            <a 
              href="#promotion" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-lg py-2 hover:text-[var(--primary-green)]"
            >
              {t.nav.promotion}
            </a>
            <a 
              href="#analytics" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-lg py-2 hover:text-[var(--primary-green)]"
            >
              {t.nav.analytics}
            </a>
            <a 
              href="#earnings" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-lg py-2 hover:text-[var(--primary-green)]"
            >
              {t.nav.earnings}
            </a>
            <a 
              href="#faq" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-lg py-2 hover:text-[var(--primary-green)]"
            >
              {t.nav.faq}
            </a>
            <hr className="border-white/5 my-2" />
            <div className="flex flex-col gap-2.5">
              <button 
                onClick={() => { setIsMobileMenuOpen(false); navigate('/login'); }}
                className="py-2.5 rounded-full border border-white/10 text-gray-300 font-medium"
              >
                {t.nav.login}
              </button>
              <button 
                onClick={() => { setIsMobileMenuOpen(false); handleArtistSignUp(); }}
                className="py-2.5 rounded-full bg-[var(--primary-green)] text-black font-bold"
              >
                {t.nav.signup}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="relative px-4 pt-16 md:pt-24 pb-20 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        <div className="flex-1 text-center lg:text-left z-10">
          
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-[var(--primary-green)]/10 border border-[var(--primary-green)]/20 rounded-full px-4 py-1.5 text-xs text-[var(--primary-green)] font-semibold mb-6"
          >
            <Music className="w-3.5 h-3.5" />
            <span>{t.hero.badge}</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black font-sans leading-tight tracking-tight text-white mb-6"
          >
            {t.hero.title}
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base md:text-xl text-gray-300 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed mb-8"
          >
            {t.hero.subtitle}
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
          >
            <button 
              onClick={handleArtistSignUp}
              className="w-full sm:w-auto bg-[var(--primary-green)] hover:bg-[var(--primary-green)]/90 text-black font-extrabold text-base px-8 py-4 rounded-full transition-transform hover:scale-[1.03] shadow-lg shadow-[var(--primary-green)]/20 flex items-center justify-center gap-2"
            >
              <span>{t.hero.ctaPrimary}</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <a 
              href="#promotion"
              className="w-full sm:w-auto text-center border border-white/10 hover:border-white/20 text-white font-semibold text-base px-8 py-4 rounded-full transition-colors bg-white/5 hover:bg-white/10 flex items-center justify-center"
            >
              {t.hero.ctaSecondary}
            </a>
          </motion.div>

          {/* Minimal Metric Tags */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="mt-12 pt-8 border-t border-white/5 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono text-gray-400"
          >
            <div className="flex items-center gap-2.5 justify-center lg:justify-start">
              <CheckCircle2 className="w-4 h-4 text-[var(--primary-green)]" />
              <span>{t.hero.statsCreators}</span>
            </div>
            <div className="flex items-center gap-2.5 justify-center lg:justify-start">
              <CheckCircle2 className="w-4 h-4 text-[var(--primary-green)]" />
              <span>{t.hero.statsTracks}</span>
            </div>
          </motion.div>

        </div>

        {/* Visual Showcase - Vinyl Vinyl discs layout matching Poppro Style */}
        <div className="flex-1 relative w-full max-w-lg mx-auto flex items-center justify-center">
          <div className="absolute inset-0 bg-[var(--primary-green)]/10 rounded-full blur-[100px] w-72 h-72 m-auto" />
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 25, ease: 'linear' }}
            className="relative z-10 w-64 h-64 md:w-80 md:h-80 rounded-full border-4 border-white/10 shadow-2xl shadow-black flex items-center justify-center bg-radial from-gray-900 to-black p-3"
          >
            {/* Spinning Record Lines */}
            <div className="absolute inset-2 rounded-full border border-dashed border-white/20 animate-spin" style={{ animationDuration: '40s' }} />
            <div className="absolute inset-6 rounded-full border border-dashed border-white/15 animate-spin" style={{ animationDuration: '30s' }} />
            <div className="absolute inset-12 rounded-full border border-white/5" />
            <div className="absolute inset-18 rounded-full border border-white/5" />
            
            {/* Record Label Center */}
            <div className="w-20 h-20 md:w-28 md:h-28 rounded-full bg-[var(--primary-green)] flex flex-col items-center justify-center p-2 text-center text-black font-extrabold z-20">
              <Disc className="w-6 h-6 animate-pulse text-black" />
              <span className="text-[10px] uppercase tracking-widest font-mono mt-1">SOUNDON</span>
              <span className="text-[7.5px] font-normal leading-tight">MASTER MASTER</span>
            </div>
          </motion.div>

          {/* Overlapping Artist Floating Card */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, type: 'spring', stiffness: 80 }}
            className="absolute right-[-10px] bottom-1/4 z-20 bg-[#0c0e0e]/90 border border-white/10 p-4 rounded-2xl shadow-xl flex items-center gap-3 backdrop-blur-md max-w-[210px]"
          >
            <div className="w-10 h-10 rounded-full overflow-hidden border border-[var(--primary-green)]/30">
              <img 
                src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&auto=format&fit=crop&q=80" 
                alt="Artist Avatar" 
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-xs font-bold truncate">Diana J.</div>
              <div className="text-[10px] text-[var(--primary-green)] font-mono flex items-center gap-1">
                <TrendingUp className="w-3 h-3" />
                <span>+12.8K Videos</span>
              </div>
            </div>
          </motion.div>

          {/* Listening Platform Badges Card */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, type: 'spring', stiffness: 80 }}
            className="absolute left-[-10px] top-1/4 z-20 bg-[#0c0e0e]/95 border border-white/10 px-3 py-2 rounded-xl text-[10px] font-mono font-medium backdrop-blur-md tracking-wider flex items-center gap-2"
          >
            <Radio className="w-3.5 h-3.5 text-[var(--primary-green)]" />
            <span className="text-white">Active Streamings</span>
          </motion.div>
        </div>
      </section>

      {/* Section 1: Global Distribution */}
      <section id="distribution" className="bg-[#0b0d0d] border-y border-white/5 py-24 px-4">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          
          {/* Distribute Mockup Illustration */}
          <div className="flex-1 relative w-full max-w-md mx-auto order-2 lg:order-1">
            <div className="bg-gradient-to-tr from-emerald-500/10 to-[#00C880]/15 w-full aspect-square rounded-3xl p-6 flex flex-col justify-between border border-white/10 relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(0,200,128,0.15),transparent)] pointer-events-none" />
              
              <div className="flex items-center justify-between border-b border-white/5 pb-4">
                <span className="text-xs font-mono text-gray-400">MUSIC_DELIVERY_PIPELINE</span>
                <span className="h-2 w-2 rounded-full bg-[#00C880] animate-ping" />
              </div>

              {/* Streaming Platform Rows */}
              <div className="flex flex-col gap-3 my-6 z-10">
                <div className="bg-[#070909] p-3 rounded-xl border border-white/5 flex items-center justify-between hover:border-[#00C880]/30 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-7 h-7 rounded bg-green-500/20 text-green-500 flex items-center justify-center font-bold text-xs">Sp</div>
                    <span className="text-sm font-semibold">Spotify</span>
                  </div>
                  <span className="text-[10px] font-mono text-[#00C880] bg-[#00C880]/10 px-2 py-0.5 rounded-full">LIVE</span>
                </div>
                <div className="bg-[#070909] p-3 rounded-xl border border-white/5 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-7 h-7 rounded bg-red-500/20 text-red-500 flex items-center justify-center font-bold text-xs">Ap</div>
                    <span className="text-sm font-semibold">Apple Music</span>
                  </div>
                  <span className="text-[10px] font-mono text-[#00C880] bg-[#00C880]/10 px-2 py-0.5 rounded-full">LIVE</span>
                </div>
                <div className="bg-[#070909] p-3 rounded-xl border border-white/5 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-7 h-7 rounded bg-red-600/20 text-red-600 flex items-center justify-center font-bold text-xs">Yt</div>
                    <span className="text-sm font-semibold">YouTube Music</span>
                  </div>
                  <span className="text-[10px] font-mono text-[#00C880] bg-[#00C880]/10 px-2 py-0.5 rounded-full">LIVE</span>
                </div>
                <div className="bg-[#070909] p-3 rounded-xl border border-white/5 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-7 h-7 rounded bg-blue-500/20 text-blue-400 flex items-center justify-center font-bold text-xs">Am</div>
                    <span className="text-sm font-semibold">Amazon Music</span>
                  </div>
                  <span className="text-[10px] font-mono text-[#00C880] bg-[#00C880]/10 px-2 py-0.5 rounded-full">LIVE</span>
                </div>
              </div>

              <div className="text-center font-mono text-[10px] text-gray-500 pt-2">
                RELEASING ACROSS 150+ DSPS SIMULTANEOUSLY
              </div>
            </div>
          </div>

          {/* Distribute Text & Content cards */}
          <div className="flex-1 order-1 lg:order-2">
            
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4 text-white">
              {t.distribute.sectionTitle}
            </h2>
            <div className="h-1.5 w-16 bg-[#00C880] rounded mb-8" />

            <div className="space-y-6 text-gray-300">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-[#00C880]/30 transition-colors">
                <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-[#00C880]" />
                  <span>{t.distribute.poweredTitle}</span>
                </h3>
                <p className="text-sm text-gray-300 leading-relaxed">
                  {t.distribute.poweredDesc}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-[#070909] border border-white/5 p-5 rounded-xl">
                  <Globe className="w-8 h-8 text-[#00C880] mb-3" />
                  <h4 className="text-base font-bold text-white mb-2">{t.distribute.card1Title}</h4>
                  <p className="text-xs text-gray-400 leading-relaxed">{t.distribute.card1Desc}</p>
                </div>
                
                <div className="bg-[#070909] border border-white/5 p-5 rounded-xl">
                  <CheckCircle2 className="w-8 h-8 text-[#00C880] mb-3" />
                  <h4 className="text-base font-bold text-white mb-2">{t.distribute.card2Title}</h4>
                  <p className="text-xs text-gray-400 leading-relaxed">{t.distribute.card2Desc}</p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Section 2: Promosi & Amplify */}
      <section id="promotion" className="py-24 px-4 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white mb-4">
            {t.promotion.sectionTitle}
          </h2>
          <p className="text-gray-400 text-sm md:text-base">
            SoundOn memberi anda kelebihan yang unik dan tidak ditawarkan oleh pengedar konvensional, menghubungkan karya anda terus ke tumpuan video viral.
          </p>
          <div className="h-1 w-16 bg-[#00C880] mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Card 1: Partner with Creators */}
          <div className="bg-[#0b0d0d] border border-white/5 p-8 rounded-3xl flex flex-col justify-between hover:border-[#00C880]/20 transition-all group">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#00C880]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Users className="w-6 h-6 text-[#00C880]" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{t.promotion.feat1Title}</h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                {t.promotion.feat1Desc}
              </p>
            </div>
            
            {/* Visual indicator in card */}
            <div className="mt-8 pt-6 border-t border-white/5 flex items-center gap-3">
              <div className="flex -space-x-2">
                <img className="w-8 h-8 rounded-full border border-black" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80" alt="Avatar" referrerPolicy="no-referrer" />
                <img className="w-8 h-8 rounded-full border border-black" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80" alt="Avatar" referrerPolicy="no-referrer" />
                <img className="w-8 h-8 rounded-full border border-black" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80" alt="Avatar" referrerPolicy="no-referrer" />
              </div>
              <span className="text-xs font-mono text-gray-400">Collaborating creators</span>
            </div>
          </div>

          {/* Card 2: CapCut */}
          <div className="bg-[#0b0d0d] border border-white/5 p-8 rounded-3xl flex flex-col justify-between hover:border-[#00C880]/20 transition-all group">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#00C880]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Tv className="w-6 h-6 text-[#00C880]" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{t.promotion.feat2Title}</h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                {t.promotion.feat2Desc}
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between text-xs font-mono text-[#00C880]">
              <span>CapCut Live Music Integrations</span>
              <ArrowUpRight className="w-4 h-4" />
            </div>
          </div>

          {/* Card 3: DSP Playlist Pitching */}
          <div className="bg-[#0b0d0d] border border-white/5 p-8 rounded-3xl flex flex-col justify-between hover:border-[#00C880]/20 transition-all group">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#00C880]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Radio className="w-6 h-6 text-[#00C880]" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{t.promotion.feat3Title}</h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                {t.promotion.feat3Desc}
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between text-xs font-mono text-gray-400">
              <span>Automatic Pre-Save Delivery ready</span>
            </div>
          </div>

          {/* Card 4: Expert guidance */}
          <div className="bg-[#0b0d0d] border border-white/5 p-8 rounded-3xl flex flex-col justify-between hover:border-[#00C880]/20 transition-all group">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#00C880]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Zap className="w-6 h-6 text-[#00C880]" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{t.promotion.feat4Title}</h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                {t.promotion.feat4Desc}
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-white/5 flex items-center gap-2.5 text-xs text-gray-400">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              <span>Available for eligible labels & solo artists</span>
            </div>
          </div>

        </div>
      </section>

      {/* Section 3: Data Analytics */}
      <section id="analytics" className="bg-[#0b0d0d] border-y border-white/5 py-24 px-4">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          
          <div className="flex-1">
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 bg-[#00C880]/10 border border-[#00C880]/20 rounded-full px-4 py-1.5 text-xs text-[#00C880] font-semibold mb-6"
            >
              <BarChart3 className="w-3.5 h-3.5" />
              <span>SOUNDON DATA PLATFORM</span>
            </motion.div>

            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-6 text-white">
              {t.analytics.sectionTitle}
            </h2>
            
            <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-8">
              {t.analytics.subtitle}
            </p>

            <ul className="space-y-4 text-sm text-gray-300 font-medium">
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-[#00C880]/15 flex items-center justify-center text-[#00C880] mt-0.5">✓</div>
                <span>{t.analytics.bullet1}</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-[#00C880]/15 flex items-center justify-center text-[#00C880] mt-0.5">✓</div>
                <span>{t.analytics.bullet2}</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-[#00C880]/15 flex items-center justify-center text-[#00C880] mt-0.5">✓</div>
                <span>{t.analytics.bullet3}</span>
              </li>
            </ul>
          </div>

          {/* Interactive Graph-like Mockup */}
          <div className="flex-1 w-full max-w-md mx-auto">
            <div className="bg-[#070909] border border-white/10 rounded-3xl p-6 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#00C880]/5 rounded-full blur-2xl pointer-events-none" />
              
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h4 className="font-bold text-sm">Trend Analyzer</h4>
                  <p className="text-[10px] text-gray-500 font-mono">POPPRO_VIRAL_METER</p>
                </div>
                <span className="text-xs text-[#00C880] font-mono font-bold bg-[#00C880]/10 px-2 py-0.5 rounded">Realtime</span>
              </div>

              {/* Fake Data Categories */}
              <div className="space-y-4 mb-6">
                <div>
                  <div className="flex justify-between text-xs text-gray-400 mb-1">
                    <span>Lifestyle & Vlogs</span>
                    <span className="font-bold text-white">43%</span>
                  </div>
                  <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-emerald-500 to-[#00C880]" style={{ width: '43%' }} />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs text-gray-400 mb-1">
                    <span>Dance Challenges</span>
                    <span className="font-bold text-white">31%</span>
                  </div>
                  <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-emerald-500 to-[#00C880]" style={{ width: '31%' }} />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs text-gray-400 mb-1">
                    <span>Lip Sync & Dubs</span>
                    <span className="font-bold text-white">18%</span>
                  </div>
                  <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-emerald-500 to-[#00C880]" style={{ width: '18%' }} />
                  </div>
                </div>
              </div>

              {/* Simple Sparkline Graph */}
              <div className="border-t border-white/5 pt-4">
                <div className="flex justify-between text-[11px] text-gray-400 mb-3 font-mono">
                  <span>DSP Performance</span>
                  <span className="text-emerald-400 font-bold">+28.4% this week</span>
                </div>
                {/* SVG Curve graph */}
                <svg className="w-full h-20 text-[#00C880]" viewBox="0 0 100 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 25 C10 20, 20 28, 30 18 C40 8, 50 15, 60 10 C70 5, 80 18, 90 4 C95 2, 98 1, 100 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <path d="M0 25 C10 20, 20 28, 30 18 C40 8, 50 15, 60 10 C70 5, 80 18, 90 4 C95 2, 98 1, 100 0 V30 H0 Z" fill="url(#grad)" opacity="0.1" />
                  <defs>
                    <linearGradient id="grad" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#00C880" />
                      <stop offset="100%" stopColor="#00C880" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* Section 4: Effortless Earnings */}
      <section id="earnings" className="py-24 px-4 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white mb-4">
            {t.earnings.sectionTitle}
          </h2>
          <p className="text-gray-450 text-sm md:text-base">
            Jangan pening memikirkan hal bil, invois, dan pecahan hasil. SoundOn memudahkan urusan kewangan kerjaya muzik anda sepenuhnya.
          </p>
          <div className="h-1 w-16 bg-[#00C880] mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <div className="bg-[#0b0d0d] border border-white/5 p-6 rounded-2xl hover:border-[#00C880]/30 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-[#00C880]/10 flex items-center justify-center text-[#00C880] mb-4">
              <Users className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white mb-2">{t.earnings.card1Title}</h3>
            <p className="text-xs text-gray-400 leading-relaxed">{t.earnings.card1Desc}</p>
          </div>

          <div className="bg-[#0b0d0d] border border-white/5 p-6 rounded-2xl hover:border-[#00C880]/30 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-[#00C880]/10 flex items-center justify-center text-[#00C880] mb-4">
              <BarChart3 className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white mb-2">{t.earnings.card2Title}</h3>
            <p className="text-xs text-gray-400 leading-relaxed">{t.earnings.card2Desc}</p>
          </div>

          <div className="bg-[#0b0d0d] border border-white/5 p-6 rounded-2xl hover:border-[#00C880]/30 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-[#00C880]/10 flex items-center justify-center text-[#00C880] mb-4">
              <DollarSign className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white mb-2">{t.earnings.card3Title}</h3>
            <p className="text-xs text-gray-400 leading-relaxed">{t.earnings.card3Desc}</p>
          </div>

          <div className="bg-[#0b0d0d] border border-white/5 p-6 rounded-2xl hover:border-[#00C880]/30 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-[#00C880]/10 flex items-center justify-center text-[#00C880] mb-4">
              <Zap className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white mb-2">{t.earnings.card4Title}</h3>
            <p className="text-xs text-gray-400 leading-relaxed">{t.earnings.card4Desc}</p>
          </div>

        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="bg-[#0b0d0d] border-t border-white/5 py-24 px-4">
        <div className="max-w-4xl mx-auto">
          
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-white mb-4">
              {t.faqSection.sectionTitle}
            </h2>
            <div className="h-1 w-12 bg-[#00C880] mx-auto" />
          </div>

          <div className="space-y-4">
            
            {/* FAQ 1 */}
            <div className="bg-[#070909] border border-white/5 rounded-2xl overflow-hidden transition-all duration-300">
              <button 
                onClick={() => setExpandedFaq(prev => prev === 1 ? null : 1)}
                className="w-full text-left p-6 font-bold text-sm sm:text-base text-white flex items-center justify-between hover:text-[#00C880]"
              >
                <span>{t.faqSection.q1}</span>
                <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform ${expandedFaq === 1 ? 'rotate-180 text-[#00C880]' : ''}`} />
              </button>
              <AnimatePresence>
                {expandedFaq === 1 && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden border-t border-white/5"
                  >
                    <p className="p-6 text-sm text-gray-450 leading-relaxed bg-white/[0.01]">
                      {t.faqSection.a1}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* FAQ 2 */}
            <div className="bg-[#070909] border border-white/5 rounded-2xl overflow-hidden transition-all duration-300">
              <button 
                onClick={() => setExpandedFaq(prev => prev === 2 ? null : 2)}
                className="w-full text-left p-6 font-bold text-sm sm:text-base text-white flex items-center justify-between hover:text-[#00C880]"
              >
                <span>{t.faqSection.q2}</span>
                <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform ${expandedFaq === 2 ? 'rotate-180 text-[#00C880]' : ''}`} />
              </button>
              <AnimatePresence>
                {expandedFaq === 2 && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden border-t border-white/5"
                  >
                    <p className="p-6 text-sm text-gray-450 leading-relaxed bg-white/[0.01]">
                      {t.faqSection.a2}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* FAQ 3 */}
            <div className="bg-[#070909] border border-white/5 rounded-2xl overflow-hidden transition-all duration-300">
              <button 
                onClick={() => setExpandedFaq(prev => prev === 3 ? null : 3)}
                className="w-full text-left p-6 font-bold text-sm sm:text-base text-white flex items-center justify-between hover:text-[#00C880]"
              >
                <span>{t.faqSection.q3}</span>
                <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform ${expandedFaq === 3 ? 'rotate-180 text-[#00C880]' : ''}`} />
              </button>
              <AnimatePresence>
                {expandedFaq === 3 && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden border-t border-white/5"
                  >
                    <p className="p-6 text-sm text-gray-450 leading-relaxed bg-white/[0.01]">
                      {t.faqSection.a3}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* FAQ 4 */}
            <div className="bg-[#070909] border border-white/5 rounded-2xl overflow-hidden transition-all duration-300">
              <button 
                onClick={() => setExpandedFaq(prev => prev === 4 ? null : 4)}
                className="w-full text-left p-6 font-bold text-sm sm:text-base text-white flex items-center justify-between hover:text-[#00C880]"
              >
                <span>{t.faqSection.q4}</span>
                <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform ${expandedFaq === 4 ? 'rotate-180 text-[#00C880]' : ''}`} />
              </button>
              <AnimatePresence>
                {expandedFaq === 4 && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden border-t border-white/5"
                  >
                    <p className="p-6 text-sm text-gray-450 leading-relaxed bg-white/[0.01]">
                      {t.faqSection.a4}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

          </div>

        </div>
      </section>

      {/* Bottom Call to Action Section with Mint gradient background */}
      <section className="relative overflow-hidden py-24 px-4 text-center border-t border-white/5">
        <div className="absolute inset-0 bg-gradient-to-t from-[#00C880]/10 via-transparent to-transparent pointer-events-none" />
        <div className="max-w-3xl mx-auto z-10 relative">
          
          <h2 className="text-3xl md:text-5xl font-black text-white mb-6">
            {t.ctaFooter.title}
          </h2>
          
          <p className="text-base md:text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto mb-10">
            {t.ctaFooter.subtitle}
          </p>

          <button 
            onClick={handleArtistSignUp}
            className="bg-[#00C880] hover:bg-[#00C880]/90 text-black font-extrabold text-base px-10 py-5 rounded-full transition-transform hover:scale-[1.03] shadow-xl shadow-[#00C880]/25 mb-4"
          >
            {t.ctaFooter.button}
          </button>

          <div className="text-xs text-gray-500 font-mono mt-4">
            NO SIGNUP FEES — CANCEL ANYTIME
          </div>

        </div>
      </section>

      {/* Small Standalone Footer */}
      <footer className="border-t border-white/5 bg-[#070909] py-8 text-center text-xs text-gray-550 font-medium">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="font-bold text-white tracking-widest text-[11px]">SOUNDON</span>
            <span className="text-gray-500 border-l border-white/10 pl-2">© {new Date().getFullYear()} Poppro Technologies Inc.</span>
          </div>
          <div className="flex items-center gap-4 text-gray-400">
            <Link to="/terms" className="hover:text-[#00C880]">Terms of Service</Link>
            <span className="text-white/10">•</span>
            <Link to="/safety" className="hover:text-[#00C880]">Privacy Policy</Link>
          </div>
        </div>
      </footer>

      {/* Modern Bilingual Demo Submission Modal */}
      <AnimatePresence>
        {showSignUpModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowSignUpModal(false)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm cursor-pointer"
            />
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative max-w-lg w-full bg-[#0d0f0f] border border-white/10 rounded-2xl p-6 md:p-8 shadow-2xl overflow-hidden z-10"
            >
              {/* Decorative Accent Glow */}
              <div className="absolute -top-12 -left-12 w-32 h-32 rounded-full bg-[#00C880]/10 blur-xl pointer-events-none" />

              {/* Close Button */}
              <button 
                onClick={() => {
                  setShowSignUpModal(false);
                  setSubmittedDemo(false);
                }}
                className="absolute top-4 right-4 text-gray-400 hover:text-white bg-white/5 hover:bg-white/10 p-1.5 rounded-full transition-colors cursor-pointer"
              >
                <X size={18} />
              </button>

              {!submittedDemo ? (
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#00C880]/15 flex items-center justify-center text-[#00C880]">
                      <Music size={20} className="animate-spin duration-3000" />
                    </div>
                    <div>
                      <h3 className="text-lg font-extrabold text-white">
                        {selectedLang === 'Bahasa Melayu' ? 'Pendaftaran Artis SoundOn' : 'SoundOn Artist Gateaway'}
                      </h3>
                      <p className="text-xs text-gray-500 font-mono tracking-wider">POPPRO CREATOR NETWORK</p>
                    </div>
                  </div>

                  <p className="text-xs text-gray-400 leading-relaxed">
                    {selectedLang === 'Bahasa Melayu' 
                      ? 'Portal pendaftaran automatik akan dibuka pada fasa perkembangan seterusnya. Sila serahkan butiran awal anda di bawah agar pasukan kurasi kami dapat menapis dan mengutamakan akaun artis anda!' 
                      : 'Our automated registration portal will release in the next phase. Submit your artist profile details below and get prioritised early access to our platform kurator!'}
                  </p>

                  <form 
                    onSubmit={(e) => {
                      e.preventDefault();
                      setSubmittedDemo(true);
                      localStorage.setItem('soundon_demo_submitted', 'true');
                    }}
                    className="space-y-4 text-left"
                  >
                    <div className="space-y-1">
                      <label className="text-[10px] text-gray-400 uppercase font-mono tracking-widest block">
                        {selectedLang === 'Bahasa Melayu' ? 'Nama Pentas / Artis' : 'Stage / Artist Name'}
                      </label>
                      <input 
                        type="text" 
                        required 
                        value={demoArtistName}
                        onChange={(e) => setDemoArtistName(e.target.value)}
                        placeholder="e.g. Sheila & Co"
                        className="w-full bg-[#050606] border border-white/10 focus:border-[#00C880] rounded px-3 py-2 text-xs text-white focus:outline-none"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-[10px] text-gray-400 uppercase font-mono tracking-widest block">
                        {selectedLang === 'Bahasa Melayu' ? 'Alamat Emel Rasmi' : 'Official Email Address'}
                      </label>
                      <input 
                        type="email" 
                        required 
                        value={demoArtistEmail}
                        onChange={(e) => setDemoArtistEmail(e.target.value)}
                        placeholder="nama@artisan.com"
                        className="w-full bg-[#050606] border border-white/10 focus:border-[#00C880] rounded px-3 py-2 text-xs text-white focus:outline-none"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <label className="text-[10px] text-gray-400 uppercase font-mono tracking-widest block">
                          Genre Utama
                        </label>
                        <select 
                          value={demoGenre}
                          onChange={(e) => setDemoGenre(e.target.value)}
                          className="w-full bg-[#050606] border border-white/10 focus:border-[#00C880] rounded px-3 py-2 text-xs text-white focus:outline-none"
                        >
                          <option value="Pop / Alternatif">Pop / Alternatif</option>
                          <option value="Hip Hop / Rap">Hip Hop / Rap</option>
                          <option value="Indie / Rock">Indie / Rock</option>
                          <option value="Electronic / EDM">Electronic / EDM</option>
                          <option value="R&B / Soul">R&B / Soul</option>
                        </select>
                      </div>

                      <div className="space-y-1">
                        <label className="text-[10px] text-gray-400 uppercase font-mono tracking-widest block">
                          Pautan Karya (Drive/YouTube/dsb)
                        </label>
                        <input 
                          type="url" 
                          required
                          value={demoLink}
                          onChange={(e) => setDemoLink(e.target.value)}
                          placeholder="https://" 
                          className="w-full bg-[#050606] border border-white/10 focus:border-[#00C880] rounded px-3 py-2 text-xs text-white focus:outline-none"
                        />
                      </div>
                    </div>

                    <button 
                      type="submit"
                      className="w-full bg-[#00C880] hover:bg-[#00E090] text-black text-xs font-black py-3 rounded-lg uppercase tracking-wider transition-all flex items-center justify-center gap-1.5 cursor-pointer mt-2"
                    >
                      <span>{selectedLang === 'Bahasa Melayu' ? 'Hantar Butiran Karya' : 'Submit Masterpiece Details'}</span>
                    </button>
                  </form>
                </div>
              ) : (
                <div className="text-center py-6 space-y-4">
                  <div className="w-14 h-14 rounded-full bg-[#00C880]/15 flex items-center justify-center text-[#00C880] mx-auto">
                    <CheckCircle2 size={32} />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-extrabold text-white">
                      {selectedLang === 'Bahasa Melayu' ? 'Butiran Anda Telah Diterima!' : 'Your Submission Has Been Received!'}
                    </h3>
                    <p className="text-xs text-gray-400 leading-relaxed max-w-sm mx-auto">
                      {selectedLang === 'Bahasa Melayu' 
                        ? `Terima kasih atas perkongsian karya anda, ${demoArtistName}! Pasukan A&R SoundOn kami akan meneliti pautan yang anda hantar dan menghubungi anda di alamat emel ${demoArtistEmail} dalam masa terdekat.`
                        : `Thank you for sharing your masterpiece with us, ${demoArtistName}! SoundOn's A&R kurators will review your link and reach back to you at ${demoArtistEmail} shortly.`}
                    </p>
                  </div>
                  <button 
                    onClick={() => {
                      setShowSignUpModal(false);
                      setSubmittedDemo(false);
                      // Reset
                      setDemoArtistName('');
                      setDemoArtistEmail('');
                      setDemoLink('');
                    }}
                    className="bg-white/5 hover:bg-white/10 border border-white/10 text-white hover:text-[#00C880] text-xs font-bold px-6 py-2.5 rounded-lg transition-colors cursor-pointer"
                  >
                    {selectedLang === 'Bahasa Melayu' ? 'Tutup Pintu Portal' : 'Return to Gateaway'}
                  </button>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
