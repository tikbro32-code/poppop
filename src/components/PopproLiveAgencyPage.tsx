import React, { useState } from 'react';
import { 
  ArrowRight, 
  ChevronDown, 
  Star, 
  MessageCircle, 
  Video, 
  UserPlus, 
  FileText, 
  CheckCircle,
  HelpCircle,
  Globe,
  Plus,
  Compass,
  Zap,
  ArrowUpRight,
  Sparkles,
  Users,
  Award,
  BookOpen,
  Mail,
  ShieldAlert,
  ChevronRight,
  Menu,
  X
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useNavigate, Link } from 'react-router-dom';

export default function PopproLiveAgencyPage() {
  const navigate = useNavigate();
  const [selectedLang, setSelectedLang] = useState('Bahasa Melayu');
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Floating testimonial cards state / detail
  const testimonials = [
    {
      id: 1,
      username: 'joyachahine22',
      quote: 'Saya menyertai agensi yang mempunyai 60K pengikut dan mereka membantu saya mencapai 1.4J serta menjadikan saya seorang Live Pro.',
      tag: 'Live Creator',
      imageUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=80',
    },
    {
      id: 2,
      username: 'cece_caramel',
      quote: 'Hanya setelah menyertai agensi di Poppro LIVE, saya dapat meningkatkan potensi terbaik saya.',
      tag: 'Gaming Star',
      imageUrl: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=500&auto=format&fit=crop&q=80', // mic/studio
    },
    {
      id: 3,
      username: 'leonairunion',
      quote: 'Saya dapat bersiaran LIVE dengan pencahayaan, bunyi dan peralatan profesional lain selepas menyertai agensi tersebut.',
      tag: 'Musician Pro',
      imageUrl: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=500&auto=format&fit=crop&q=80', // ring light / studio vibe
    },
    {
      id: 4,
      username: 'mikmooka95',
      quote: 'Terima kasih kepada agensi saya yang hebat atas usaha mereka, pengikut saya meningkat daripada 200K kepada 1.5J, dan kandungan saya ditambahbaik dengan cemerlang.',
      tag: 'Top Streamer',
      imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=80', // microphone/smiling
    },
    {
      id: 5,
      username: 'perupines',
      quote: 'Agensi menyokong kami untuk menyediakan rakan kongsi Sepadan.',
      tag: 'Interactive Host',
      imageUrl: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=500&auto=format&fit=crop&q=80', // guitar/vocalist
    },
    {
      id: 6,
      username: 'cozywithronnie',
      quote: 'Menyertai agensi membuka banyak pintu kerjasama eksklusif serta pendedahan jenama yang menakjubkan.',
      tag: 'Vlogger',
      imageUrl: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=500&auto=format&fit=crop&q=80',
    }
  ];

  // Steps flow
  const steps = [
    {
      num: '1',
      title: 'Daftar',
      desc: 'Isi borang maklumat asas anda dan daftar di platform agensi kami.',
      icon: <UserPlus className="w-8 h-8 text-[#00C880]" />
    },
    {
      num: '2',
      title: 'Hantar permohonan',
      desc: 'Muat naik dokumen pengkakuan perniagaan atau portfolio pencipta anda untuk kelulusan pantas.',
      icon: <FileText className="w-8 h-8 text-[#00C880]" />
    },
    {
      num: '3',
      title: 'Log masuk di LIVE Backstage',
      desc: 'Gunakan papan pemuka pengurusan agensi anda untuk mula mengurus pencipta anda.',
      icon: (
        <div className="relative">
          <div className="w-8 h-8 rounded-full bg-[#00C880]/20 flex items-center justify-center animate-pulse">
            <Zap className="w-5 h-5 text-[#00C880]" />
          </div>
        </div>
      )
    }
  ];

  // Benefits
  const benefits = [
    {
      title: 'Dasar Insentif',
      desc: 'Untuk mendayakan kejayaan jangka panjang Agensi di Poppro LIVE, kami mempunyai set insentif dalam bentuk tugasan dan program terpilih.',
      icon: <Star className="w-10 h-10 text-[#00C880]" />
    },
    {
      title: 'Ekosistem yang Sihat',
      desc: 'Kami komited untuk melaksanakan strategi dan inisiatif dalam mencipta dan mengekalkan ekosistem yang sihat dan positif buat rakan kongsi utama kami.',
      icon: <MessageCircle className="w-10 h-10 text-[#00C880]" />
    },
    {
      title: 'Alatan Produk',
      desc: 'Agensi mendapat akses kepada hab pengurusan lengkap yang meningkatkan kecekapan operasi, dan mengoptimumkan prestasi perniagaan mereka sendiri dan pencipta.',
      icon: <Video className="w-10 h-10 text-[#00C880]" />
    }
  ];

  const handleOpenRegistration = () => {
    alert('Borang pendaftaran Agensi Poppro LIVE akan dibuka tidak lama lagi. Sila daftar minat anda di hubungi kami.');
  };

  return (
    <div className="min-h-screen bg-[#070909] text-white font-sans selection:bg-[#00C880]/20 overflow-x-hidden relative">
      
      {/* Background Decorative Rings/Glows to replicate official page with mint theme */}
      <div className="absolute top-0 left-0 right-0 h-[600px] bg-gradient-to-b from-[#00C880]/5 via-transparent to-transparent pointer-events-none" />
      <div className="absolute top-[800px] right-[-200px] w-[500px] h-[500px] rounded-full bg-[#00C880]/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[400px] left-[-200px] w-[500px] h-[500px] rounded-full bg-[#00C880]/5 blur-[120px] pointer-events-none" />

      {/* 1. Header Navigation */}
      <nav className="sticky top-0 z-50 bg-[#070909]/90 backdrop-blur-md border-b border-white/5 px-4 lg:px-8 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#00C880] to-emerald-500 flex items-center justify-center font-bold text-black shadow-lg shadow-[#00C880]/20 group-hover:scale-105 transition-transform">
              P
            </div>
            <div className="flex flex-col">
              <span className="font-sans font-bold text-sm tracking-widest text-white flex items-center gap-1.5">
                POPPRO <span className="text-[10px] bg-[#00C880]/10 text-[#00C880] px-1.5 py-0.5 rounded font-mono">LIVE</span>
              </span>
              <span className="text-[9px] text-gray-400 font-mono tracking-wider">CREATOR NETWORKS</span>
            </div>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8 text-sm text-gray-300 font-medium">
            <Link to="/" className="hover:text-[#00C880] transition-colors">Laman Utama</Link>
            <a href="#jadilah-agensi" className="hover:text-[#00C880] transition-colors">Jadilah Agensi</a>
            <a href="#manfaat" className="hover:text-[#00C880] transition-colors">Manfaat</a>
            <a href="#hubungi-kami" className="hover:text-[#00C880] transition-colors flex items-center gap-1">
              Hubungi kami
            </a>
          </div>

          {/* Language and Action Button */}
          <div className="hidden md:flex items-center gap-4 relative">
            {/* Language dropdown */}
            <div className="relative">
              <button 
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex items-center gap-2 text-xs font-semibold bg-white/5 hover:bg-white/10 px-3 py-2 rounded-full border border-white/10 transition-all cursor-pointer"
              >
                <Globe className="w-3.5 h-3.5 text-gray-400" />
                <span>{selectedLang}</span>
                <ChevronDown className="w-3.5 h-3.5 text-gray-400" />
              </button>
              
              <AnimatePresence>
                {isLangOpen && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute right-0 mt-2 w-40 bg-slate-950 border border-white/10 rounded-xl overflow-hidden shadow-2xl z-50 py-1"
                  >
                    {['Bahasa Melayu', 'English (UK)', 'Bahasa Indonesia'].map((lang) => (
                      <button
                        key={lang}
                        onClick={() => {
                          setSelectedLang(lang);
                          setIsLangOpen(false);
                        }}
                        className="w-full text-left px-4 py-2 text-xs hover:bg-white/5 text-gray-200 transition-colors cursor-pointer"
                      >
                        {lang}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <button 
              onClick={handleOpenRegistration}
              className="bg-[#00C880] text-black hover:bg-[#00E090] text-xs font-bold px-5 py-2.5 rounded-full transition-all flex items-center gap-1 hover:shadow-lg hover:shadow-[#00C880]/20 cursor-pointer"
            >
              Sediakan Agensi <ChevronRight className="w-4 h-4 text-black" />
            </button>
          </div>

          {/* Mobile menu toggle */}
          <div className="flex md:hidden items-center gap-3">
            <button 
              onClick={handleOpenRegistration}
              className="bg-[#00C880] text-black text-xs font-bold px-3 py-1.5 rounded-full transition-all cursor-pointer"
            >
              Sediakan
            </button>
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-white hover:bg-white/10 rounded-lg"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-slate-950 border-b border-white/5 overflow-hidden absolute w-full left-0 z-40"
          >
            <div className="px-6 py-6 flex flex-col gap-4 text-sm text-gray-300">
              <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#00C880] py-2 border-b border-white/5 transition-colors">Laman Utama</Link>
              <a href="#jadilah-agensi" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#00C880] py-2 border-b border-white/5 transition-colors">Jadilah Agensi</a>
              <a href="#manfaat" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#00C880] py-2 border-b border-white/5 transition-colors">Manfaat</a>
              <a href="#hubungi-kami" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#00C880] py-2 border-b border-white/5 transition-colors">Hubungi kami</a>
              
              <div className="flex items-center justify-between py-2">
                <span className="text-xs text-gray-400">Bahasa</span>
                <select 
                  value={selectedLang} 
                  onChange={(e) => setSelectedLang(e.target.value)}
                  className="bg-white/5 border border-white/10 rounded px-2 py-1 text-xs text-white"
                >
                  <option value="Bahasa Melayu" className="bg-slate-950">Bahasa Melayu</option>
                  <option value="English (UK)" className="bg-slate-950">English (UK)</option>
                  <option value="Bahasa Indonesia" className="bg-slate-950">Bahasa Indonesia</option>
                </select>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 2. Hero Section - Beautiful Staggered/Absolute Testimonials */}
      <header className="relative pt-12 pb-24 px-4 overflow-hidden max-w-7xl mx-auto">
        
        {/* Texts */}
        <div className="text-center max-w-3xl mx-auto mb-16 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-1.5 bg-[#00C880]/15 text-[#00C880] border border-[#00C880]/20 px-3.5 py-1 rounded-full text-xs font-semibold mb-6 tracking-wide"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Peneraju Pengurusan Strategik LIVE</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl font-black tracking-tight leading-tight uppercase font-sans text-white"
          >
            Bekerjasama dengan <br className="hidden md:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00C880] to-teal-400">Agensi</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-gray-300 text-sm md:text-base leading-relaxed"
          >
            Agensi Poppro LIVE ialah pakar agensi yang membantu pencipta berkembang dan merealisasikan impian mereka di Poppro LIVE dengan menyediakan strategi yang diperbadankan, sesi bimbingan serta maklum balas aktif.
          </motion.p>
        </div>

        {/* Testimonials Masonry/Grid (Replacing absolute random slots with structured, beautiful, responsive flex/grid that feels premium) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch relative z-10 px-2 lg:px-4">
          {testimonials.map((t, idx) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * idx }}
              className="bg-slate-900/40 backdrop-blur-md rounded-2xl border border-white/5 p-6 hover:border-[#00C880]/30 hover:shadow-[0_0_20px_rgba(0,200,128,0.1)] transition-all group flex flex-col justify-between"
            >
              <div>
                {/* Image Holder with subtle green outline */}
                <div className="relative w-full h-44 rounded-xl overflow-hidden mb-5 bg-[#00C880]/5">
                  <img 
                    src={t.imageUrl} 
                    alt={t.username}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500" 
                  />
                  <div className="absolute top-3 left-3 bg-black/70 backdrop-blur-xs text-[10px] text-emerald-400 font-bold px-2 py-0.5 rounded border border-[#00C880]/20 font-mono">
                    @{t.username}
                  </div>
                  <div className="absolute top-3 right-3 bg-[#00C880] text-black text-[9px] font-extrabold px-2 py-0.5 rounded uppercase font-mono">
                    {t.tag}
                  </div>
                </div>

                <p className="text-gray-200 text-xs md:text-sm italic leading-relaxed relative pl-4 border-l-2 border-[#00C880]/40">
                  "{t.quote}"
                </p>
              </div>

              <div className="mt-5 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] text-gray-400">
                <span className="font-mono text-[10px]">POPPRO PARTNERED</span>
                <span className="text-[#00C880] font-bold group-hover:underline flex items-center gap-0.5">
                  Profil penuh <ArrowUpRight className="w-3 h-3" />
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </header>

      {/* 3. Section 3: "Kami berpendapat" Quote banner with green accents */}
      <section className="py-24 bg-gradient-to-b from-[#070909] via-emerald-950/10 to-[#070909] border-t border-b border-white/5 relative overflow-hidden">
        
        {/* Ring and Circle Deco */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center gap-8 pointer-events-none opacity-20">
          <div className="w-32 h-32 rounded-full bg-[#00C880]/15 blur-lg" />
          <div className="w-24 h-24 rounded-full border border-[#00C880]/30" />
          <div className="w-16 h-16 rounded-full bg-[#00C880]/20" />
          <div className="w-20 h-20 rounded-full border border-teal-500/20" />
        </div>

        <div className="max-w-4xl mx-auto text-center px-4 relative z-10">
          <span className="text-7xl font-serif text-[#00C880] block h-8 select-none leading-none opacity-50 mb-4">“</span>
          
          <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight uppercase mb-6 text-[#00C880]">
            Kami berpendapat
          </h2>
          
          <p className="text-gray-300 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
            Agensi mempunyai kebolehan unik untuk menaikkan semangat pencipta dan membuka peluang kepada pencipta dalam mencari kemungkinan peluang dan berjaya melalui LIVE.
          </p>

          <p className="text-gray-100 font-bold text-sm md:text-base mt-8 tracking-wide">
            Bekerjasama dengan Agensi untuk meraih lebih banyak peluang.
          </p>

          <span className="text-7xl font-serif text-[#00C880] block h-8 select-none leading-none opacity-50 mt-4">”</span>
        </div>
      </section>

      {/* 4. Section 4: Jadilah Agensi with original text content and Poppro styling */}
      <section id="jadilah-agensi" className="py-24 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left: Creative Team visual block */}
          <div className="relative group">
            {/* Outer neon green decorative box layer */}
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-[#00C880] to-teal-500 opacity-20 blur-xl group-hover:opacity-40 transition-opacity" />
            
            <div className="relative bg-slate-950 rounded-2xl border border-white/10 overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop&q=80" 
                alt="Agensi Kolaborasi" 
                referrerPolicy="no-referrer"
                className="w-full h-80 object-cover opacity-80 group-hover:scale-[1.01] transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              
              {/* Overlay Content */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#00C880] animate-ping" />
                  <span className="text-[10px] text-gray-300 font-mono tracking-widest uppercase">POPSPORT / TALENT PARTNERS</span>
                </div>
                <h4 className="text-lg font-bold text-white uppercase">Mencapai kemuncak kecemerlangan bersiaran</h4>
              </div>
            </div>
          </div>

          {/* Right Text Content block */}
          <div className="lg:pl-6">
            <span className="text-xs uppercase tracking-widest text-[#00C880] font-bold">Kolaborasi Bersama</span>
            <h3 className="text-3xl md:text-4xl font-black uppercase text-white mt-2 mb-6">
              Jadilah Agensi
            </h3>

            <div className="space-y-6 text-gray-300 text-sm md:text-base leading-relaxed">
              <div>
                <h5 className="font-extrabold text-[#00C880] uppercase text-xs mb-1.5Tracking-wide">Apabila anda menjadi</h5>
                <p>
                  Agensi LIVE, anda boleh mendapatkan akses kepada sumber, alatan dan wawasan yang membolehkan anda merancang projek yang memudahkan perniagaan anda, sambil membantu pencipta membina perniagaan mereka.
                </p>
              </div>

              <p>
                Dengan berjuta-juta pencipta, kandungan yang pelbagai dan interaksi masa nyata yang inklusif, Poppro LIVE membantu membina hubungan penting dan mencipta peluang yang membolehkan Agensi dan pencipta di mana-mana peringkat perjalanan Poppro mencapai matlamat mereka.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <button 
                onClick={handleOpenRegistration}
                className="bg-[#00C880] text-black hover:bg-[#00E090] text-xs font-extrabold px-6 py-3 rounded-full transition-all flex items-center gap-1 hover:shadow-lg hover:shadow-[#00C880]/30 cursor-pointer uppercase"
              >
                Ketahui lebih lanjut <ChevronRight className="w-4 h-4 text-black" />
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* 5. Section 5: Manfaat (Benefits) cards matching the screenshot with original names */}
      <section id="manfaat" className="py-24 bg-slate-950 border-t border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4">
          
          <div className="text-center max-w-xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-widest text-[#00C880] font-bold">Kelebihan Eksklusif</span>
            <h3 className="text-3xl md:text-4xl font-black uppercase text-white mt-2">
              Manfaat
            </h3>
            <p className="text-gray-400 text-xs mt-3">
              Membangun dengan jaminan sokongan penuh dari ekosistem digital rasmi Poppro.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((b, idx) => (
              <div 
                key={idx}
                className="bg-slate-900/60 rounded-2xl border border-white/5 p-8 flex flex-col justify-between hover:border-[#00C880]/30 transition-all duration-300 group"
              >
                <div>
                  <div className="w-16 h-16 rounded-xl bg-white/5 dark:bg-emerald-950/20 border border-white/10 flex items-center justify-center mb-8 shadow-inner group-hover:bg-[#00C880]/15 group-hover:border-[#00C880]/20 transition-all">
                    {b.icon}
                  </div>
                  
                  <h4 className="text-xl font-bold uppercase tracking-tight text-white mb-4 group-hover:text-[#00C880] transition-colors">
                    {b.title}
                  </h4>
                  
                  <p className="text-gray-300 text-xs md:text-sm leading-relaxed">
                    {b.desc}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-white/5 flex justify-end">
                  <button 
                    onClick={handleOpenRegistration}
                    className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-[#00C880] hover:border-black hover:text-black text-gray-300 transition-all cursor-pointer"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 6. Section 6: Mari Bekerjasama Dengan Kami registration roadmap with custom style */}
      <section className="py-24 px-4 max-w-7xl mx-auto">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest text-[#00C880] font-bold font-mono">LANGKAH PERTAMA ANDA</span>
          <h3 className="text-3xl md:text-4xl font-black uppercase text-white mt-2 mb-4">
            Mari bekerjasama dengan kami
          </h3>
          <p className="text-gray-300 text-sm md:text-base leading-relaxed">
            Adakah anda berminat dengan Agensi Poppro LIVE? Mohon untuk menjadi salah seorang daripada mereka! Jika anda layak, anda akan mendapat akses kepada alat dan wawasan yang membolehkan perniagaan anda memacu kejayaan pencipta di LIVE.
          </p>
        </div>

        {/* Steps roadmap line */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 relative z-10 items-stretch">
          {steps.map((st, i) => (
            <div 
              key={i} 
              className="bg-[#091014] border border-white/5 hover:border-[#00C880]/10 rounded-2xl p-8 relative flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  {/* Step visual indicator */}
                  <div className="w-12 h-12 bg-[#00C880]/10 text-[#00C880] border border-[#00C880]/20 rounded-xl flex items-center justify-center">
                    {st.icon}
                  </div>
                  <span className="text-4xl font-mono font-black text-white/5">0{st.num}</span>
                </div>

                <h4 className="text-lg font-bold text-white uppercase tracking-tight mb-2">
                  {st.title}
                </h4>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {st.desc}
                </p>
              </div>

              {i < 2 && (
                <div className="hidden lg:block absolute top-[50%] -right-4 translate-y-[-50%] z-20">
                  <div className="w-8 h-8 rounded-full bg-slate-900 border border-white/5 flex items-center justify-center shadow-md">
                    <ChevronRight className="w-4 h-4 text-gray-500" />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Final Button Call to action */}
        <div className="text-center mt-12">
          <button 
            onClick={handleOpenRegistration}
            className="inline-flex bg-[#00C880] text-black hover:bg-[#00E090] text-sm font-black px-10 py-4 rounded-full transition-all items-center gap-1 hover:shadow-lg hover:shadow-[#00C880]/30 cursor-pointer uppercase"
          >
            Sediakan Agensi <ChevronRight className="w-4 h-4 text-black" />
          </button>
        </div>

      </section>

      {/* 7. Footer - Rich columns styled exactly like the official screenshot */}
      <footer id="hubungi-kami" className="bg-[#060808] border-t border-white/5 pt-20 pb-36 px-4">
        <div className="max-w-7xl mx-auto">
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-16">
            
            {/* Column 1 Logo */}
            <div className="col-span-2 flex flex-col gap-4">
              <Link to="/" className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#00C880] to-emerald-500 flex items-center justify-center font-bold text-black shadow-lg">
                  P
                </div>
                <span className="font-sans font-bold text-sm tracking-widest text-white flex items-center gap-1.5">
                  POPPRO <span className="text-[10px] bg-[#00C880]/10 text-[#00C880] px-1.5 py-0.5 rounded font-mono">LIVE</span>
                </span>
              </Link>
              <p className="text-xs text-gray-400 leading-relaxed max-w-xs">
                Membangun agensi pencipta bertaraf dunia di landasan hiburan digital dinamik Poppro. Sesi bimbingan, agihan dana & perkembangan komuniti sihat.
              </p>
            </div>

            {/* Column 2 */}
            <div className="flex flex-col gap-3 text-xs">
              <h5 className="font-bold text-white uppercase tracking-wider mb-2">Syarikat</h5>
              <Link to="/about" className="text-gray-400 hover:text-[#00C880] transition-colors">Perihal</Link>
              <Link to="/newsroom" className="text-gray-400 hover:text-[#00C880] transition-colors">Bilik Berita</Link>
              <Link to="/careers" className="text-gray-400 hover:text-[#00C880] transition-colors">Kerjaya</Link>
            </div>

            {/* Column 3 */}
            <div className="flex flex-col gap-3 text-xs">
              <h5 className="font-bold text-white uppercase tracking-wider mb-2">Program</h5>
              <Link to="/for-good" className="text-gray-400 hover:text-[#00C880] transition-colors">Poppro for Good</Link>
              <Link to="/ads" className="text-gray-400 hover:text-[#00C880] transition-colors">Agensi Poppro LIVE</Link>
              <Link to="/seller" className="text-gray-400 hover:text-[#00C880] transition-colors">Pembangun</Link>
              <Link to="/shop" className="text-gray-400 hover:text-[#00C880] transition-colors">Iklan</Link>
            </div>

            {/* Column 4 */}
            <div className="flex flex-col gap-3 text-xs">
              <h5 className="font-bold text-white uppercase tracking-wider mb-2">Sokongan</h5>
              <Link to="/support" className="text-gray-400 hover:text-[#00C880] transition-colors">Pusat Bantuan</Link>
              <Link to="/support/safety" className="text-gray-400 hover:text-[#00C880] transition-colors">Pusat Keselamatan</Link>
              <Link to="/support/creator" className="text-gray-400 hover:text-[#00C880] transition-colors">Creator Academy</Link>
            </div>

          </div>

          <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            
            <div className="flex items-center gap-2">
              <select 
                value={selectedLang} 
                onChange={(e) => setSelectedLang(e.target.value)}
                className="bg-black/40 text-xs text-gray-400 border border-white/10 rounded-full px-4 py-1.5 focus:outline-none focus:border-[#00C880] cursor-pointer"
              >
                <option value="Bahasa Melayu" className="bg-[#070909]">Bahasa Melayu</option>
                <option value="English (UK)" className="bg-[#070909]">English (UK)</option>
                <option value="Bahasa Indonesia" className="bg-[#070909]">Bahasa Indonesia</option>
              </select>
            </div>

            <div className="text-[11px] text-gray-500 font-mono">
              © 2026 Poppro LIVE. Hak Cipta Terpelihara.
            </div>

          </div>

        </div>
      </footer>

      {/* 8. Sticky Action Bottom Banner - Mirroring official "Hubungi sekarang" */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-[#070909] border-t border-white/10 shadow-2xl py-5 px-6 md:px-12 flex items-center justify-between backdrop-blur-md">
        <div className="max-w-7xl mx-auto w-full flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-2.5 h-2.5 rounded-full bg-[#00C880] animate-ping" />
            <p className="text-xs md:text-sm font-semibold tracking-wide text-white uppercase">
              Hubungi sekarang untuk jadual bimbingan agensi peribadi anda
            </p>
          </div>
          
          <button 
            onClick={() => {
              const email = 'tikbro32@gmail.com';
              window.location.href = `mailto:${email}?subject=Pertanyaan Agensi Poppro LIVE&body=Halo Poppro LIVE team, saya berminat untuk menubuhkan agensi kami.`;
            }}
            className="bg-[#00C880] hover:bg-[#00E090] text-black font-extrabold text-xs md:text-sm px-6 py-2.5 rounded-full transition-all flex items-center gap-1.5 cursor-pointer uppercase shadow-lg shadow-[#00C880]/15"
          >
            Hubungi kami <ArrowRight className="w-4 h-4 text-black" />
          </button>
        </div>
      </div>

    </div>
  );
}
