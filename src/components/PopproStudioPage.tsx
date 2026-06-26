import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  ChevronDown, 
  Globe, 
  ChevronRight, 
  Menu, 
  X, 
  Sparkles, 
  Layers, 
  ShieldCheck, 
  Tv, 
  CheckCircle, 
  Smartphone, 
  BookOpen, 
  ShoppingBag, 
  TrendingUp, 
  Download, 
  Lock, 
  Code, 
  Share2, 
  Cpu, 
  Zap, 
  Maximize2,
  Users,
  Terminal,
  Grid,
  Bell,
  Eye,
  Search,
  ExternalLink,
  ChevronUp,
  Inbox,
  Play,
  Heart,
  MessageSquare,
  Gift,
  Award,
  Compass,
  Laptop,
  Check
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useNavigate, Link } from 'react-router-dom';

export default function PopproStudioPage() {
  const navigate = useNavigate();
  const [selectedLang, setSelectedLang] = useState('Bahasa Melayu');
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<'Semua' | 'AI' | 'Permainan' | 'Kecantikan' | 'Muzik' | 'Skrin Hijau'>('Semua');
  const [aiPrompt, setAiPrompt] = useState('I want to generate a ');
  const [isAiGenerating, setIsAiGenerating] = useState(false);
  const [aiProgress, setAiProgress] = useState(0);
  const [aiResultVisible, setAiResultVisible] = useState(false);

  // Typewriter prompts for Cipta Dengan AI
  const samplePrompts = [
    'Racing Game with Cyberpunk Neon theme...',
    'Glitch Retro VHS Camcorder view...',
    'Cute Talking Bubble Boba Tea on head...',
    'Fantasy Elf Wings with stardust particle trail...'
  ];
  const [promptIdx, setPromptIdx] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPromptIdx((prev) => (prev + 1) % samplePrompts.length);
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  // Update prompt whenever placeholder shifts
  useEffect(() => {
    setAiPrompt('I want to generate a ' + samplePrompts[promptIdx]);
    setIsAiGenerating(true);
    setAiProgress(0);
    setAiResultVisible(false);
    
    let timer: any;
    let counts = 0;
    const progressInterval = setInterval(() => {
      counts += 5;
      setAiProgress(counts);
      if (counts >= 100) {
        clearInterval(progressInterval);
        setIsAiGenerating(false);
        setAiResultVisible(true);
      }
    }, 120);

    return () => {
      clearInterval(progressInterval);
    };
  }, [promptIdx]);

  // Cards for "Bina dunia, bentuk semula realiti" matching reference exactly
  const creatorShowcases = [
    {
      id: 1,
      name: 'Linbo',
      handle: '@linbo',
      category: 'Kecantikan',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&auto=format&fit=crop&q=80',
      bgImg: 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=400&auto=format&fit=crop&q=80', // detailed 3D animated figure looking like a realistic model with puffer jacket
      tag: 'Retro Wool Hat'
    },
    {
      id: 2,
      name: 'Samuela_oficial',
      handle: '@samuela1222',
      category: 'Muzik',
      avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=80&auto=format&fit=crop&q=80',
      bgImg: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&auto=format&fit=crop&q=80', // girl with glowing makeup / stars
      tag: 'Starry Tiara'
    },
    {
      id: 3,
      name: 'Aokijy7',
      handle: '@aokijy7',
      category: 'AI',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&auto=format&fit=crop&q=80',
      bgImg: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop&q=80', // smiling guy with sun crown
      tag: 'Solar Flare'
    },
    {
      id: 4,
      name: 'Kangxuting',
      handle: '@kangxutingtok3',
      category: 'Skrin Hijau',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&auto=format&fit=crop&q=80',
      bgImg: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?w=400&auto=format&fit=crop&q=80', // Mount Fuji scenic background with van illustration
      tag: 'Scenic Escape'
    }
  ];

  const filteredShowcases = creatorShowcases.filter(item => {
    if (activeCategory === 'Semua') return true;
    return item.category === activeCategory;
  });

  return (
    <div className="min-h-screen bg-[#050606] text-white font-sans selection:bg-[var(--primary-green)]/20 overflow-x-hidden relative">
      
      {/* Dynamic Background Tech Grids & Overlay Blurs */}
      <div className="absolute top-0 left-0 right-0 h-[850px] bg-gradient-to-b from-[var(--primary-green)]/5 via-transparent to-transparent pointer-events-none" />
      <div className="absolute top-[20%] left-[-200px] w-[500px] h-[500px] rounded-full bg-[var(--primary-green)]/5 blur-[150px] pointer-events-none" />
      <div className="absolute top-[50%] right-[-200px] w-[500px] h-[500px] rounded-full bg-emerald-500/5 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-[10%] left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-[var(--primary-green)]/5 blur-[200px] pointer-events-none" />

      {/* Tech line grid animation mimicking Effect House background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,_transparent_1px),_linear-gradient(90deg,_rgba(255,255,255,0.015)_1px,_transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_35%,_#000_65%,_transparent_100%)] pointer-events-none" />

      {/* 1. Header Navigation */}
      <nav id="studio-nav" className="sticky top-0 z-50 bg-[#050606]/90 backdrop-blur-md border-b border-white/5 px-4 lg:px-8 py-3.5">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-8.5 h-8.5 rounded-lg bg-gradient-to-br from-[var(--primary-green)] to-emerald-500 flex items-center justify-center font-black text-black shadow-lg shadow-[var(--primary-green)]/15 group-hover:scale-105 transition-transform">
              S
            </div>
            <div className="flex flex-col">
              <span className="font-sans font-black text-sm tracking-wider text-white">
                STUDIO <span className="text-[10px] bg-[var(--primary-green)]/10 text-[var(--primary-green)] px-1.5 py-0.5 rounded font-mono font-bold">POPPRO</span>
              </span>
              <span className="text-[8.5px] text-gray-400 font-mono tracking-widest font-semibold uppercase leading-none mt-0.5">EFFECT CREATOR PLATFORM</span>
            </div>
          </Link>

          {/* Nav Links */}
          <div className="hidden md:flex items-center gap-8 text-sm font-bold text-gray-300">
            <a href="#terkini" className="hover:text-[var(--primary-green)] transition-all">Terkini</a>
            <a href="#belajar" className="hover:text-[var(--primary-green)] transition-all">Belajar</a>
            <a href="#pencipta-teratas" className="hover:text-[var(--primary-green)] transition-all">Pencipta Teratas</a>
            <a href="#hadiah-live" className="hover:text-[var(--primary-green)] transition-all">Hadiah LIVE</a>
          </div>

          {/* Actions */}
          <div className="hidden md:flex items-center gap-4">
            <div className="relative">
              <button 
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex items-center gap-1.5 text-xs font-extrabold bg-white/5 hover:bg-white/10 px-3.5 py-1.5 rounded-full border border-white/10 transition-all cursor-pointer"
              >
                <Globe className="w-3.5 h-3.5 text-[var(--primary-green)]" />
                <span>{selectedLang}</span>
                <ChevronDown className="w-3 h-3 text-gray-400" />
              </button>
              
              <AnimatePresence>
                {isLangOpen && (
                  <motion.div 
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    className="absolute right-0 mt-2 w-44 bg-[#0a0c0c] border border-white/10 rounded-xl overflow-hidden shadow-2xl z-50 py-1"
                  >
                    {['Bahasa Melayu', 'English (UK)', 'Bahasa Indonesia'].map((lang) => (
                      <button
                        key={lang}
                        onClick={() => {
                          setSelectedLang(lang);
                          setIsLangOpen(false);
                        }}
                        className="w-full text-left px-4 py-2.5 text-xs hover:bg-white/5 text-gray-200 transition-colors cursor-pointer font-medium"
                      >
                        {lang}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <a
              href="#muat-turun"
              className="bg-[var(--primary-green)] hover:bg-[#00E090] text-black text-xs font-black px-6 py-2 rounded-full uppercase tracking-wider transition-all scale-100 hover:scale-[1.02] shadow-md shadow-[var(--primary-green)]/10"
            >
              Muat Turun
            </a>
          </div>

          {/* Mobile Menu Icon */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-gray-400 hover:text-white"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#0a0c0c] border-b border-white/5 px-6 py-8 space-y-6 overflow-hidden z-40 relative text-center"
          >
            <div className="flex flex-col gap-4 text-base font-bold text-gray-200">
              <a href="#terkini" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[var(--primary-green)]">Terkini</a>
              <a href="#belajar" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[var(--primary-green)]">Belajar</a>
              <a href="#pencipta-teratas" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[var(--primary-green)]">Pencipta Teratas</a>
              <a href="#hadiah-live" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[var(--primary-green)]">Hadiah LIVE</a>
            </div>
            
            <div className="h-px bg-white/5" />
            
            <div className="flex flex-col gap-3 max-w-sm mx-auto">
              <button 
                onClick={() => {
                  setSelectedLang(prev => prev === 'Bahasa Melayu' ? 'English (UK)' : 'Bahasa Melayu');
                  setIsMobileMenuOpen(false);
                }}
                className="w-full flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-full border border-white/10 text-xs font-bold text-gray-300"
              >
                <Globe className="w-4 h-4 text-[var(--primary-green)]" />
                <span>{selectedLang}</span>
              </button>
              <a 
                href="#muat-turun"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-center py-3 rounded-full bg-[var(--primary-green)] text-black font-black text-xs uppercase tracking-wider"
              >
                Muat Turun
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 2. Hero Section: Detailed Effect House Styling */}
      <section className="relative pt-12 pb-24 px-4 lg:px-8 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left column info */}
        <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
          
          <div className="inline-flex items-center gap-2 bg-[var(--primary-green)]/10 border border-[var(--primary-green)]/20 rounded-full px-4 py-1.5 text-[11px] text-[var(--primary-green)] font-extrabold tracking-wider uppercase mb-2">
            <Sparkles className="w-3.5 h-3.5 animate-pulse" />
            <span>STUDIO AR & EDITING BARU</span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-sans font-black tracking-tighter leading-none text-white">
            effect house <br/>
            <span className="text-[var(--primary-green)] bg-clip-text">Poppro</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-300 max-w-xl mx-auto lg:mx-0 font-medium leading-relaxed">
            Bina kesan yang menyeronokkan dan kreatif untuk Poppro. Sediakan penapis visual, bunyi, dan simulasi 3D interaktif yang berskala dinamik.
          </p>

          {/* Floating avatar/badge stacked elements matching reference */}
          <div className="flex items-center justify-center lg:justify-start gap-4 py-2">
            <div className="flex -space-x-3.5">
              <div className="w-11 h-11 rounded-full border-2 border-[#050606] bg-[#FF2A54] flex items-center justify-center text-xs font-bold shadow-lg shadow-[#FF2A54]/20 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=50&auto=format&fit=crop&q=80" className="w-full h-full object-cover" />
              </div>
              <div className="w-11 h-11 rounded-full border-2 border-[#050606] bg-[var(--primary-green)] flex items-center justify-center shadow-lg shadow-[var(--primary-green)]/20">
                <Sparkles className="w-4 h-4 text-black" />
              </div>
              <div className="w-11 h-11 rounded-full border-2 border-[#050606] bg-cyan-400 flex items-center justify-center shadow-lg shadow-cyan-400/20">
                <Code className="w-4 h-4 text-black" />
              </div>
              <div className="w-11 h-11 rounded-full border-2 border-[#050606] bg-purple-500 flex items-center justify-center shadow-lg shadow-purple-500/20">
                <Cpu className="w-4 h-4 text-white" />
              </div>
            </div>
            <div className="text-left">
              <p className="text-xs font-black text-gray-200">100,000+ Effects Built</p>
              <p className="text-[10px] text-gray-400 font-mono">Dikuasai oleh Enjin Grafik Poppro Studio</p>
            </div>
          </div>

          <div className="space-y-3">
            <button 
              onClick={() => alert('Memulakan muat turun untuk versi desktop (Mac / PC)...')}
              className="w-full sm:w-auto bg-[var(--primary-green)] hover:bg-[#00E090] text-black font-extrabold text-sm px-10 py-5 rounded-full transition-transform hover:scale-[1.03] shadow-xl shadow-[var(--primary-green)]/25 flex items-center justify-center gap-2.5 mx-auto lg:mx-0 cursor-pointer uppercase tracking-wider"
            >
              <span>Muat turun Studio Poppro</span>
              <Download className="w-4.5 h-4.5 stroke-[2.5]" />
            </button>
            <p className="text-[10.5px] text-gray-400 font-mono tracking-wider">
              Apl desktop percuma untuk Mac (Apple Silicon / Intel) atau PC Windows 10/11
            </p>
          </div>

        </div>

        {/* Right column: Beautiful Tilted Screenshots replicating the blueprint graphic */}
        <div id="muat-turun" className="lg:col-span-5 relative flex items-center justify-center">
          
          <div className="relative w-full max-w-md h-[400px] flex items-center justify-center">
            
            {/* Concentric Circle Tech Decors */}
            <div className="absolute w-[360px] h-[360px] rounded-full border border-white/5 flex items-center justify-center">
              <div className="absolute w-[280px] h-[280px] rounded-full border border-[var(--primary-green)]/15 border-dashed" />
              <div className="absolute w-[200px] h-[200px] rounded-full border border-white/5" />
            </div>

            {/* Background glowing sphere */}
            <div className="absolute w-72 h-72 rounded-full bg-[var(--primary-green)]/10 blur-[90px] pointer-events-none" />

            {/* Isometric Tilted screenshot of the desktop environment */}
            <motion.div 
              style={{ transform: "perspective(800px) rotateY(-15deg) rotateX(15deg) rotateZ(-10deg)" }}
              className="absolute w-[280px] h-[380px] bg-[#0c0f0f] border border-white/10 rounded-2xl shadow-2xl p-3 flex flex-col justify-between overflow-hidden z-20 group"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              {/* Fake editor window menu */}
              <div className="flex items-center justify-between border-b border-white/5 pb-2">
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                </div>
                <span className="text-[8px] font-mono text-gray-500">POPPRO_STUDIO_V3.ENV</span>
              </div>

              {/* Fake editor UI canvas */}
              <div className="flex-1 my-3 bg-black/60 rounded-lg p-2.5 border border-white/5 flex flex-col justify-between relative overflow-hidden">
                <div className="absolute right-2 top-2 bg-[var(--primary-green)]/25 text-[var(--primary-green)] px-1 py-0.5 rounded text-[7px] font-mono font-bold animate-pulse">
                  PREVIEW STAGE
                </div>

                <div className="flex-1 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full border border-[var(--primary-green)]/20 animate-spin flex items-center justify-center p-1.5 bg-black">
                    <div className="w-full h-full rounded-full bg-[var(--primary-green)]/10 flex items-center justify-center text-[var(--primary-green)]">
                      <Sparkles className="w-6 h-6" />
                    </div>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <div className="h-1 bg-[var(--primary-green)] rounded w-3/4" />
                  <div className="h-1 bg-white/10 rounded w-1/2" />
                  <div className="h-1 bg-white/5 rounded w-5/6" />
                </div>
              </div>

              {/* App Status Footer */}
              <div className="flex items-center justify-between text-[8px] font-mono text-gray-400">
                <div className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--primary-green)] animate-ping" />
                  <span>Dihubungkan ke PC</span>
                </div>
                <span>FPS: 60.0</span>
              </div>
            </motion.div>

            {/* Smaller secondary overlap layout item */}
            <motion.div 
              style={{ transform: "perspective(800px) rotateY(15deg) rotateX(10deg) rotateZ(5deg)" }}
              className="absolute -right-6 bottom-10 w-[180px] h-[220px] bg-[#0d1212]/95 border border-white/10 rounded-xl shadow-2xl p-2.5 flex flex-col justify-between z-10"
              whileHover={{ scale: 1.08 }}
            >
              <div className="flex items-center gap-1.5 border-b border-white/5 pb-1">
                <Sparkles className="w-3 h-3 text-[var(--primary-green)]" />
                <span className="text-[7.5px] font-mono text-gray-300 font-bold">ASSETS LIBRARY</span>
              </div>

              <div className="flex-1 grid grid-cols-2 gap-1.5 my-2">
                <div className="bg-white/5 rounded p-1 flex flex-col items-center justify-center text-center">
                  <span className="text-[6.5px] text-gray-400">3D Face</span>
                  <div className="w-4 h-4 bg-purple-500/20 rounded mt-1" />
                </div>
                <div className="bg-white/5 rounded p-1 flex flex-col items-center justify-center text-center">
                  <span className="text-[6.5px] text-gray-400">Particles</span>
                  <div className="w-4 h-4 bg-emerald-500/20 rounded mt-1" />
                </div>
                <div className="bg-white/5 rounded p-1 flex flex-col items-center justify-center text-center">
                  <span className="text-[6.5px] text-gray-400">Shaders</span>
                  <div className="w-4 h-4 bg-blue-500/20 rounded mt-1" />
                </div>
                <div className="bg-white/5 rounded p-1 flex flex-col items-center justify-center text-center">
                  <span className="text-[6.5px] text-gray-400">Audio Synth</span>
                  <div className="w-4 h-4 bg-pink-500/20 rounded mt-1" />
                </div>
              </div>

              <div className="h-3 bg-[var(--primary-green)]/15 rounded flex items-center justify-center">
                <span className="text-[6px] text-[var(--primary-green)] font-extrabold uppercase tracking-wider">MULA PROJEK BARU</span>
              </div>
            </motion.div>

          </div>

        </div>

      </section>

      {/* 3. Section "Bina dunia, bentuk semula realiti" */}
      <section id="pencipta-teratas" className="relative py-20 bg-black/40 border-t border-b border-white/5 px-4 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-12">
          
          <div className="text-center space-y-3">
            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white leading-tight">
              Bina dunia, bentuk semula realiti
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base font-medium">
              Cipta dunia khayalan, watak maya, permainan, penapis, bunyi dan banyak lagi dengan alat bersepadu kami.
            </p>
          </div>

          {/* Filtering Category Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2.5">
            {(['Semua', 'AI', 'Permainan', 'Kecantikan', 'Muzik', 'Skrin Hijau'] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  activeCategory === cat 
                    ? 'bg-white text-black scale-103' 
                    : 'bg-white/5 hover:bg-white/10 text-gray-300 border border-white/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid of 4 beautifully stylized phone screen mockups with creator info */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
            <AnimatePresence mode="popLayout">
              {filteredShowcases.map((creator) => (
                <motion.div
                  key={creator.id}
                  layout
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.92 }}
                  transition={{ duration: 0.35 }}
                  className="bg-[#0b0c0c] border border-white/10 rounded-3xl overflow-hidden aspect-[9/16] relative flex flex-col justify-end p-5 group shadow-xl"
                >
                  
                  {/* Visual Background image overlay */}
                  <div className="absolute inset-0 bg-cover bg-center transition-all duration-700 group-hover:scale-105" style={{ backgroundImage: `url(${creator.bgImg})` }} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-black/30 opacity-80" />

                  {/* Top Category Badge */}
                  <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md border border-white/10 px-3 py-1 rounded-full text-[9px] font-extrabold tracking-wider text-[var(--primary-green)] uppercase">
                    {creator.category}
                  </div>

                  {/* Sparkle icon at center that reveals on hover */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
                    <div className="w-12 h-12 rounded-full bg-[var(--primary-green)] flex items-center justify-center text-black shadow-lg shadow-[var(--primary-green)]/40 scale-90 group-hover:scale-100 transition-transform">
                      <Sparkles className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Bottom creator info aligned perfectly with the reference */}
                  <div className="relative space-y-3 z-10">
                    <div className="bg-white/10 backdrop-blur-md rounded-xl p-2 border border-white/10 flex items-center gap-2.5">
                      <div className="w-8.5 h-8.5 rounded-full overflow-hidden border border-white/20">
                        <img src={creator.avatar} alt="creator" className="w-full h-full object-cover" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-[11px] font-black leading-tight text-white">{creator.name}</p>
                        <p className="text-[9px] text-gray-300 font-mono truncate leading-none mt-0.5">{creator.handle}</p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-[11px]">
                      <span className="text-gray-300 font-medium">Uji Filter:</span>
                      <strong className="text-[var(--primary-green)] font-extrabold">{creator.tag}</strong>
                    </div>
                  </div>

                </motion.div>
              ))}
            </AnimatePresence>
          </div>

        </div>
      </section>

      {/* 4. Section "Satu apl, kemungkinan tanpa had" */}
      <section id="terkini" className="relative py-24 max-w-7xl mx-auto px-4 lg:px-8 space-y-16">
        
        <div className="text-center space-y-3">
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white">
            Satu apl, kemungkinan tanpa had
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base font-medium">
            Terokai ciri hebat yang memudahkan lagi penciptaan kesan berkualiti tinggi dan responsif.
          </p>
        </div>

        {/* Column Layout structure replica of the reference screenshot */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Left card (large): "Editor Penskripan Maya" */}
          <div className="lg:col-span-7 bg-[#0b0c0c] border border-white/5 rounded-3xl p-8 flex flex-col justify-between overflow-hidden relative group">
            
            <div className="absolute top-0 right-0 w-80 h-80 bg-[var(--primary-green)]/5 rounded-full blur-[90px] pointer-events-none" />

            <div className="space-y-3 relative z-10 max-w-md">
              <h3 className="text-xl sm:text-2xl font-black tracking-tight text-white">
                Editor Penskripan Maya
              </h3>
              <p className="text-xs text-gray-400 leading-relaxed font-semibold">
                Cipta kesan interaktif dengan lebih cepat — pengalaman pengekodan atau penulisan skrip tidak diperlukan langsung. Hubungkan nod logik visual kami.
              </p>
            </div>

            {/* Simulated Node graph representation inside container */}
            <div className="bg-black/40 border border-white/5 rounded-2xl p-4.5 space-y-4 my-8 relative overflow-hidden backdrop-blur-sm min-h-[190px] flex flex-col justify-center">
              
              <div className="flex items-center justify-between">
                {/* Node Box 1 */}
                <div className="bg-slate-900/90 border border-white/10 rounded-xl p-3 w-[150px] shadow-lg relative">
                  <div className="h-1.5 w-full bg-[var(--primary-green)] absolute top-0 left-0 rounded-t-xl" />
                  <p className="text-[10px] font-mono font-bold text-white mb-2 uppercase tracking-wider">Face Trigger</p>
                  <div className="space-y-1 text-[8px] font-mono text-gray-400 flex flex-col">
                    <div className="flex items-center justify-between">
                      <span>On Smile</span>
                      <span className="w-1.5 h-1.5 bg-[var(--primary-green)] rounded-full" />
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Open Mouth</span>
                      <span className="w-1.5 h-1.5 bg-white/20 rounded-full" />
                    </div>
                  </div>
                </div>

                {/* Connecting glowing vector path */}
                <div className="flex-1 h-0.5 bg-gradient-to-r from-[var(--primary-green)]/80 to-[#2ef2a3]/80 relative flex items-center justify-center">
                  <div className="absolute top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-white shadow-md shadow-[var(--primary-green)] animate-ping" />
                </div>

                {/* Node Box 2 */}
                <div className="bg-slate-900/90 border border-white/10 rounded-xl p-3 w-[150px] shadow-lg relative">
                  <div className="h-1.5 w-full bg-cyan-500 absolute top-0 left-0 rounded-t-xl" />
                  <p className="text-[10px] font-mono font-bold text-white mb-2 uppercase tracking-wider">Particle Emitter</p>
                  <div className="space-y-1 text-[8px] font-mono text-gray-400">
                    <div className="flex items-center gap-1">
                      <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full" />
                      <span>Emit Stars</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="w-1.5 h-1.5 bg-white/20 rounded-full" />
                      <span>Sound trigger</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-center text-[9px] font-mono text-gray-500">
                Sistem Nod Visual v2.8 (Sedia Digunakan)
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs font-bold text-[var(--primary-green)] hover:underline cursor-pointer group-hover:translate-x-1 transition-transform">
              <span>Muat turun untuk cuba penskripan maya</span>
              <ArrowRight className="w-4 h-4" />
            </div>

          </div>

          {/* Right columns stacked: "Editor AI" and "Cipta Dengan AI" */}
          <div className="lg:col-span-5 flex flex-col gap-6 justify-between">
            
            {/* Upper stacked block: "Editor AI" */}
            <div className="bg-[#0b0c0c] border border-white/5 rounded-3xl p-6 flex items-center gap-5 overflow-hidden relative group h-1/2 justify-between">
              
              <div className="space-y-3 max-w-[200px]">
                <div className="inline-flex items-center gap-1.5 bg-[var(--primary-green)]/15 text-[var(--primary-green)] px-2.5 py-0.5 rounded-full text-[9px] font-extrabold tracking-wider uppercase">
                  <span>NEW</span>
                </div>
                <h4 className="text-lg font-black text-white">Editor AI</h4>
                <p className="text-[11px] text-gray-400 font-sans leading-relaxed">
                  Gunakan AI berprestasi tinggi kami untuk mencipta gaya dan aset 3D tersuai untuk kesan anda.
                </p>
              </div>

              {/* Graphic container simulating face-filter generated style */}
              <div className="w-32 h-32 rounded-2xl bg-white/5 border border-white/10 relative flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=120&auto=format&fit=crop&q=80')" }} />
                <div className="absolute inset-0 bg-[var(--primary-green)]/15 backdrop-blur-[1px]" />
                <Sparkles className="w-8 h-8 text-[var(--primary-green)] absolute animate-bounce" />
                <div className="absolute bottom-1.5 right-1.5 bg-black/60 px-1.5 py-0.5 rounded text-[7.5px] font-mono">
                  STYLE_01_GEN
                </div>
              </div>

            </div>

            {/* Lower stacked block: "Cipta Dengan AI" */}
            <div className="bg-[#0b0c0c] border border-white/5 rounded-3xl p-6.5 flex flex-col justify-between overflow-hidden relative group h-1/2">
              
              <div className="space-y-2">
                <h4 className="text-lg font-black text-white">Cipta Dengan AI</h4>
                <p className="text-[11px] text-gray-400">
                  Jana kesan penuh yang interaktif dengan beberapa klik sahaja.
                </p>
              </div>

              {/* Interactive prompt typing */}
              <div className="bg-black/60 rounded-xl p-3 border border-white/10 space-y-2.5 my-3">
                <div className="flex items-center justify-between text-[9px] font-mono text-gray-400">
                  <span>PROMPT GENERATOR</span>
                  <span className="text-[var(--primary-green)]">SYSTEM ACTIVE</span>
                </div>
                
                <div className="bg-slate-900 py-1.5 px-2.5 rounded text-xs text-white font-mono flex items-center justify-between">
                  <span className="truncate">{aiPrompt}</span>
                  <span className="w-1.5 h-3.5 bg-[var(--primary-green)] rounded-sm animate-pulse" />
                </div>

                {isAiGenerating ? (
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between text-[8px] font-mono text-gray-400">
                      <span>Menganalisis konsep...</span>
                      <span>{aiProgress}%</span>
                    </div>
                    <div className="w-full bg-white/10 h-1 rounded-full overflow-hidden">
                      <div className="h-full bg-[var(--primary-green)] transition-all duration-100" style={{ width: `${aiProgress}%` }} />
                    </div>
                  </div>
                ) : (
                  <div className="flex items-center gap-1.5 text-[9px] font-mono text-[var(--primary-green)] animate-pulse">
                    <Check className="w-3 h-3 stroke-[3]" />
                    <span>Effect generated. Ready!</span>
                  </div>
                )}
              </div>

            </div>

          </div>

        </div>

      </section>

      {/* 5. Middle Tagline Banner replicating BM reference and tagline */}
      <section className="bg-black py-20 border-t border-b border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--primary-green)]/5 via-transparent to-transparent pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6 relative z-10">
          <p className="text-xs uppercase font-black text-[var(--primary-green)] tracking-widest leading-none font-mono">
            Amplify your reach as a creator
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white leading-tight">
            Kongsi kesan anda pada platform sosial dan hiburan terbesar di dunia.
          </h2>
          <div className="w-16 h-1 bg-[var(--primary-green)] mx-auto rounded mt-4" />
        </div>
      </section>

      {/* 6. Mobile Features 3-Column Phone Preview Grid */}
      <section className="relative py-24 max-w-7xl mx-auto px-4 lg:px-8 space-y-16">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          
          {/* Card 1: Poppro LIVE */}
          <div className="bg-[#0b0c0c] border border-white/5 p-6 rounded-3xl flex flex-col justify-between hover:border-[var(--primary-green)]/20 transition-all group shadow-xl">
            <div className="space-y-3">
              <div className="flex items-center gap-2.5">
                <span className="text-xs font-bold bg-[#FF2A54]/10 text-[#FF2A54] px-2 py-0.5 rounded font-mono uppercase">LIVE</span>
                <h4 className="text-lg font-black text-white">Poppro LIVE</h4>
              </div>
              <p className="text-xs text-gray-400 leading-relaxed font-semibold">
                Jangkau jutaan pengguna dalam sekelip mata apabila kesan anda digunakan dalam video streaming Poppro LIVE.
              </p>
            </div>

            {/* Realistic stylized mockup phone with vertical avatar streaming */}
            <div className="bg-[#050606] border border-white/10 rounded-2xl p-3 aspect-[10/14] mt-6 relative overflow-hidden flex flex-col justify-between">
              <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&auto=format&fit=crop&q=80')" }} />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent opacity-85" />

              {/* Streaming layout decor */}
              <div className="relative flex items-center justify-between text-[8px] font-mono z-10">
                <div className="bg-black/60 px-2 py-0.5 rounded-full flex items-center gap-1 text-white border border-white/10">
                  <span className="w-1 h-1 rounded-full bg-[var(--primary-green)] animate-ping" />
                  <span>34.2K Penonton</span>
                </div>
                <div className="bg-[var(--primary-green)] text-black px-2 py-0.5 rounded font-extrabold font-mono uppercase tracking-wider">
                  STUDIO_ACTIVE
                </div>
              </div>

              {/* Sparkles effect overlay */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <Sparkles className="w-20 h-20 text-[var(--primary-green)] opacity-40 animate-pulse" />
              </div>

              {/* Bottom stream message tag */}
              <div className="relative z-10 space-y-1 bg-black/40 p-2 rounded-lg border border-white/5 backdrop-blur-sm">
                <div className="flex items-center gap-1.5">
                  <div className="w-4 h-4 rounded-full bg-cyan-400" />
                  <span className="text-[8px] text-white font-bold">@sarah_creator</span>
                </div>
                <p className="text-[7.5px] text-gray-300">"Kesan ini memang nampak gila gempak guys! Cuba sekarang!"</p>
              </div>
            </div>
          </div>

          {/* Card 2: Suapan Untuk Anda */}
          <div className="bg-[#0b0c0c] border border-white/5 p-6 rounded-3xl flex flex-col justify-between hover:border-[var(--primary-green)]/20 transition-all group shadow-xl">
            <div className="space-y-3">
              <div className="flex items-center gap-2.5">
                <TrendingUp className="w-4 h-4 text-[var(--primary-green)]" />
                <h4 className="text-lg font-black text-white">Suapan Untuk Anda</h4>
              </div>
              <p className="text-xs text-gray-400 leading-relaxed font-semibold">
                Pastikan anda ditemukan pada suapan utama Untuk Anda apabila pencipta menggunakan kesan visual anda.
              </p>
            </div>

            {/* Realistic stylized mockup phone representing FYP layout */}
            <div className="bg-[#050606] border border-white/10 rounded-2xl p-3 aspect-[10/14] mt-6 relative overflow-hidden flex flex-col justify-between">
              <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&auto=format&fit=crop&q=80')" }} />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/15 to-transparent opacity-90" />

              <div className="relative flex justify-end z-10">
                <div className="flex flex-col gap-2.5 items-center">
                  <div className="w-7 h-7 rounded-full bg-black/50 flex items-center justify-center text-white"><Heart className="w-3.5 h-3.5 text-white/90" /></div>
                  <span className="text-[7px] font-mono">1.2M</span>
                  <div className="w-7 h-7 rounded-full bg-black/50 flex items-center justify-center text-white"><MessageSquare className="w-3.5 h-3.5 text-white/90" /></div>
                  <span className="text-[7px] font-mono">24.5K</span>
                </div>
              </div>

              {/* FYP Effect Sticker box replicated exactly */}
              <div className="relative z-10 bg-black/60 p-2.5 rounded-xl border border-white/10 flex items-center gap-2 text-left">
                <div className="w-6 h-6 rounded bg-[var(--primary-green)] flex items-center justify-center text-black">
                  <Sparkles className="w-3.5 h-3.5" />
                </div>
                <div className="flex-1 min-w-0">
                  <span className="text-[8.5px] font-black text-white block truncate">Efek: Retro Wool Hat</span>
                  <span className="text-[7.5px] text-gray-400 block font-mono">Oleh @linbo</span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3: Pelekat interaktif */}
          <div className="bg-[#0b0c0c] border border-white/5 p-6 rounded-3xl flex flex-col justify-between hover:border-[var(--primary-green)]/20 transition-all group shadow-xl">
            <div className="space-y-3">
              <div className="flex items-center gap-2.5">
                <Grid className="w-4 h-4 text-[var(--primary-green)]" />
                <h4 className="text-lg font-black text-white">Pelekat & Aset</h4>
              </div>
              <p className="text-xs text-gray-400 leading-relaxed font-semibold">
                Buat kesan pelekat 3D yang interaktif yang boleh diguna & dikongsikan oleh pencipta dengan rakan.
              </p>
            </div>

            {/* Realistic stylized mockup phone stickers array */}
            <div className="bg-[#050606] border border-white/10 rounded-2xl p-4 aspect-[10/14] mt-6 relative overflow-hidden flex flex-col justify-between">
              
              <div className="text-[10px] uppercase tracking-wider font-mono text-gray-400 border-b border-white/5 pb-2 flex items-center justify-between">
                <span>Stickers Panel</span>
                <span className="text-[var(--primary-green)]">12 ITEMS</span>
              </div>

              <div className="flex-1 grid grid-cols-3 gap-2 py-4">
                <div className="bg-white/5 hover:bg-white/10 border border-white/5 rounded-xl flex flex-col items-center justify-center gap-1 opacity-100 cursor-pointer">
                  <div className="text-lg">👑</div>
                  <span className="text-[6.5px] text-gray-300">Gold Tiara</span>
                </div>
                <div className="bg-white/5 hover:bg-white/10 border border-white/5 rounded-xl flex flex-col items-center justify-center gap-1 opacity-100 cursor-pointer">
                  <div className="text-lg">🕶️</div>
                  <span className="text-[6.5px] text-gray-300">Neon Shade</span>
                </div>
                <div className="bg-white/5 hover:bg-white/10 border border-white/5 rounded-xl flex flex-col items-center justify-center gap-1 opacity-100 cursor-pointer">
                  <div className="text-lg">🌟</div>
                  <span className="text-[6.5px] text-gray-300">Vibe Orbit</span>
                </div>
                <div className="bg-white/5 hover:bg-white/10 border border-white/5 rounded-xl flex flex-col items-center justify-center gap-1 opacity-100 cursor-pointer">
                  <div className="text-lg">🐱</div>
                  <span className="text-[6.5px] text-gray-300">Cute Cats</span>
                </div>
                <div className="bg-white/5 hover:bg-white/10 border border-white/5 rounded-xl flex flex-col items-center justify-center gap-1 opacity-100 cursor-pointer">
                  <div className="text-lg">🔥</div>
                  <span className="text-[6.5px] text-gray-300">Flame Aura</span>
                </div>
                <div className="bg-white/5 hover:bg-white/10 border border-white/5 rounded-xl flex flex-col items-center justify-center gap-1 opacity-100 cursor-pointer">
                  <div className="text-lg">🌈</div>
                  <span className="text-[6.5px] text-gray-300">Prism Cam</span>
                </div>
              </div>

              <div className="text-[7px] text-center font-mono text-gray-500">
                Pelekat bertindak balas kepada pengesan satah wajah
              </div>

            </div>
          </div>

        </div>

      </section>

      {/* 7. Section "Dapatkan ganjaran atas kreativiti anda" */}
      <section id="hadiah-live" className="relative py-20 bg-black/40 border-t border-b border-white/5 px-4 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-16">
          
          <div className="text-center md:text-left flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-3">
              <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white">
                Dapatkan ganjaran atas <span className="text-[var(--primary-green)]">kreativiti</span> anda
              </h2>
              <p className="text-gray-400 max-w-2xl text-sm sm:text-base font-medium">
                Buka kunci peluang untuk memperoleh ganjaran dana pencipta dan bekerjasama dengan jenama terkemuka.
              </p>
            </div>
            <div>
              <a href="#belajar" className="inline-flex items-center gap-1.5 text-xs font-bold text-[var(--primary-green)] hover:underline">
                <span>Ketahui lebih lanjut tentang ganjaran</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left stacked phone preview showcasing Creator Benefits dashboard */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="bg-[#0b0c0c] border border-white/15 p-6 rounded-[32px] w-full max-w-sm aspect-[9/16] relative overflow-hidden flex flex-col justify-between shadow-2xl">
                
                <div className="absolute top-0 right-0 w-44 h-44 bg-[var(--primary-green)]/10 rounded-full blur-[40px] pointer-events-none" />

                <div className="space-y-4">
                  {/* Top Bar replica */}
                  <div className="flex items-center justify-between border-b border-white/5 pb-3">
                    <span className="text-xxs font-mono text-gray-400">called Effect Creator Rewards</span>
                    <Gift className="w-4 h-4 text-[var(--primary-green)]" />
                  </div>

                  <div className="space-y-1">
                    <p className="text-xs text-gray-400 uppercase font-mono">Jumlah Dana Tersedia</p>
                    <p className="text-3xl font-black tracking-tight text-[var(--primary-green)]">$45,280.50</p>
                  </div>

                  {/* Graph Simulator */}
                  <div className="bg-white/5 border border-white/15 rounded-2xl p-4 space-y-3">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-bold text-gray-200">Sungkapan Filter</span>
                      <span className="text-[var(--primary-green)] font-mono font-bold">+184% bulan ini</span>
                    </div>
                    <div className="h-16 flex items-end gap-1.5 pt-2">
                      <div className="bg-white/10 h-1/4 rounded-sm flex-1" />
                      <div className="bg-white/10 h-1/3 rounded-sm flex-1" />
                      <div className="bg-white/10 h-1/2 rounded-sm flex-1" />
                      <div className="bg-[var(--primary-green)] h-3/4 rounded-sm flex-1" />
                      <div className="bg-[var(--primary-green)] h-full rounded-sm flex-1" />
                    </div>
                  </div>
                </div>

                <div className="space-y-2.5">
                  <div className="bg-white/5 border border-white/10 p-3 rounded-xl flex items-center gap-3">
                    <Award className="w-5 h-5 text-[var(--primary-green)] flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <p className="text-xxs font-black text-white">Anugerah Penunjuk Terbaik</p>
                      <p className="text-[9px] text-gray-400">Filter anda mencapai 10 juta tontonan!</p>
                    </div>
                  </div>

                  <button className="w-full bg-[var(--primary-green)] hover:bg-[#00E090] text-black text-xxs font-black py-3 rounded-lg uppercase tracking-wider transition-all">
                    Tebus Ganjaran Saya
                  </button>
                </div>

              </div>
            </div>

            {/* Right bullet point details */}
            <div className="lg:col-span-7 space-y-8">
              
              <div className="space-y-6">
                
                {/* 1. Ganjaran */}
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-[var(--primary-green)]/10 flex items-center justify-center text-[var(--primary-green)] flex-shrink-0 border border-[var(--primary-green)]/20 shadow-md">
                    <Gift className="w-6 h-6" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-lg font-black text-white">Ganjaran Tunai</h3>
                    <p className="text-sm text-gray-400 leading-relaxed font-semibold">
                      Kumpulkan ganjaran tunai dan lencana dinamik semasa anda mengembangkan pendedahan khalayak effect anda.
                    </p>
                  </div>
                </div>

                {/* 2. Cabaran */}
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-[var(--primary-green)]/10 flex items-center justify-center text-[var(--primary-green)] flex-shrink-0 border border-[var(--primary-green)]/20 shadow-md">
                    <Award className="w-6 h-6" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-lg font-black text-white">Cabaran Bulanan</h3>
                    <p className="text-sm text-gray-400 leading-relaxed font-semibold">
                      Semarakkan kreativiti anda dan menangi pelbagai barangan perkakasan fizikal dengan cabaran rasmi kami.
                    </p>
                  </div>
                </div>

                {/* 3. Kerjasama Jenama */}
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-[var(--primary-green)]/10 flex items-center justify-center text-[var(--primary-green)] flex-shrink-0 border border-[var(--primary-green)]/20 shadow-md">
                    <Users className="w-6 h-6" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-lg font-black text-white">Kerjasama Jenama Termasyhur</h3>
                    <p className="text-sm text-gray-400 leading-relaxed font-semibold">
                      Bekerjasama secara langsung dengan jenama dan agensi penajaan terbesar untuk membawa penapis berbayar tajaan.
                    </p>
                  </div>
                </div>

              </div>

              {/* Three horizontal games card decks slot replica */}
              <div className="space-y-3.5 pt-4">
                <p className="text-xs uppercase font-mono text-gray-400 tracking-wider">Cabaran Paling Hangat Sekarang:</p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  
                  {/* Deck Item 1: Squid Game */}
                  <div className="bg-[#0b0c0c] border border-[#FF2A54]/20 p-4.5 rounded-2xl flex flex-col justify-between hover:scale-[1.03] transition-all cursor-pointer relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-12 h-12 bg-[#FF2A54]/5 rounded-full blur-lg" />
                    <div>
                      <p className="text-xs font-black text-white group-hover:text-[#FF2A54] transition-colors">Squid Game</p>
                      <p className="text-[10px] text-gray-400 font-mono mt-0.5">6.7M Posts</p>
                    </div>
                    <ChevronRight className="w-4 h-4 text-gray-500 self-end mt-4 group-hover:text-white transition-colors" />
                  </div>

                  {/* Deck Item 2: Toxic Till the End */}
                  <div className="bg-[#0b0c0c] border border-yellow-500/20 p-4.5 rounded-2xl flex flex-col justify-between hover:scale-[1.03] transition-all cursor-pointer relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-12 h-12 bg-yellow-500/5 rounded-full blur-lg" />
                    <div>
                      <p className="text-xs font-black text-white group-hover:text-yellow-500 transition-colors">Toxic till the end</p>
                      <p className="text-[10px] text-gray-400 font-mono mt-0.5">579.6k posts</p>
                    </div>
                    <ChevronRight className="w-4 h-4 text-gray-500 self-end mt-4 group-hover:text-white transition-colors" />
                  </div>

                  {/* Deck Item 3: MLBB Games */}
                  <div className="bg-[#0b0c0c] border border-[var(--primary-green)]/20 p-4.5 rounded-2xl flex flex-col justify-between hover:scale-[1.03] transition-all cursor-pointer relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-12 h-12 bg-[var(--primary-green)]/5 rounded-full blur-lg" />
                    <div>
                      <p className="text-xs font-black text-white group-hover:text-[var(--primary-green)] transition-colors">MLBB Games</p>
                      <p className="text-[10px] text-gray-400 font-mono mt-0.5">881.6K posts</p>
                    </div>
                    <ChevronRight className="w-4 h-4 text-gray-500 self-end mt-4 group-hover:text-white transition-colors" />
                  </div>

                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* 8. Section "Belajar dan bekerjasama" */}
      <section id="belajar" className="relative py-24 max-w-7xl mx-auto px-4 lg:px-8 space-y-16">
        
        <div className="text-center space-y-3">
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white">
            Belajar dan bekerjasama
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base font-medium">
            Kembangkan kemahiran reka bentuk kesan anda dan berhubung dengan pencipta profesional di seluruh dunia.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          
          {/* Left Card: "Tingkatkan tahap kemahiran anda" */}
          <div className="bg-[#0b0c0c] border border-white/5 rounded-3xl p-8 flex flex-col justify-between hover:border-[var(--primary-green)]/15 transition-all relative overflow-hidden group shadow-lg">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--primary-green)]/5 rounded-full blur-xl pointer-events-none" />
            
            <div className="space-y-4">
              <div className="bg-[var(--primary-green)]/15 w-12 h-12 rounded-2xl flex items-center justify-center text-[var(--primary-green)] border border-[var(--primary-green)]/25">
                <BookOpen className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-black text-white leading-tight">Tingkatkan tahap kemahiran anda</h3>
              <p className="text-xs text-gray-400 leading-relaxed font-semibold">
                Ketahui cara mencipta kesan dengan panduan langkah demi langkah dan tunjuk cara interaktif yang mesra pemula. Bermula daripada pemasangan sehinggalah penerbitan akhir.
              </p>
            </div>

            <div className="pt-8">
              <button 
                onClick={() => alert('Membuka dokumentasi panduan belajar Poppro Studio...')}
                className="inline-flex items-center gap-1 bg-white hover:bg-gray-100 text-black text-xs font-black px-6 py-3 rounded-full uppercase tracking-wider transition-transform hover:scale-[1.02] cursor-pointer"
              >
                <span>Belajar</span>
                <ChevronRight className="w-4 h-4 stroke-[2.5]" />
              </button>
            </div>
          </div>

          {/* Right Card: "Sertai komuniti global kami" */}
          <div className="bg-[#0b0c0c] border border-white/5 rounded-3xl p-8 flex flex-col justify-between hover:border-[var(--primary-green)]/15 transition-all relative overflow-hidden group shadow-lg">
            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 rounded-full blur-xl pointer-events-none" />
            
            <div className="space-y-4">
              <div className="bg-indigo-500/15 w-12 h-12 rounded-2xl flex items-center justify-center text-indigo-400 border border-indigo-500/25">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-black text-white leading-tight">Sertai komuniti global kami</h3>
              <p className="text-xs text-gray-400 leading-relaxed font-semibold">
                Sertai forum berbincang mampan & komuniti Discord rasmi kami bersama ribuan pembina kesan, artis 3D, dan pembangun penapis dari seluruh pelusuk negara.
              </p>
            </div>

            <div className="pt-8">
              <button 
                onClick={() => alert('Membuka jemputan Discord Komuniti Poppro Studio...')}
                className="inline-flex items-center gap-1 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-black px-6 py-3 rounded-full uppercase tracking-wider transition-transform hover:scale-[1.02] cursor-pointer"
              >
                <span>Sertai Discord</span>
                <ChevronRight className="w-4 h-4 stroke-[2.5]" />
              </button>
            </div>
          </div>

        </div>

      </section>

      {/* 9. Centered Creative Footer CTA panel */}
      <section className="relative py-24 bg-gradient-to-t from-black to-[#050606] px-4">
        
        <div className="max-w-3xl mx-auto text-center space-y-8 relative z-10">
          
          <div className="w-20 h-20 rounded-[28px] bg-gradient-to-tr from-[var(--primary-green)] to-emerald-400 flex items-center justify-center text-black font-black text-3xl shadow-2xl shadow-[var(--primary-green)]/20 mx-auto animate-bounce duration-[3000ms]">
            S
          </div>

          <div className="space-y-3">
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-white uppercase">
              Mulakan perjalanan kreatif anda
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto text-sm">
              Muat turun alat pembina penapis AR terbaik industri hari ini secara percuma pada komputer riba anda.
            </p>
          </div>

          <div>
            <button 
              onClick={() => alert('Memulakan muat turun untuk versi desktop (Mac / PC)...')}
              className="bg-[var(--primary-green)] hover:bg-[#00E090] text-black font-black text-xs px-10 py-5 rounded-full uppercase tracking-wider transition-transform hover:scale-[1.03] shadow-xl shadow-[var(--primary-green)]/25 cursor-pointer"
            >
              Muat turun Studio Poppro
            </button>
          </div>

        </div>

      </section>

      {/* 10. Footer Section with links and language toggle */}
      <footer className="bg-black border-t border-white/5 py-12 px-4 lg:px-8 text-xs text-gray-500 font-mono text-center md:text-left">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          
          <div className="flex items-center gap-3">
            <span className="font-sans font-black text-white text-sm tracking-widest text-[#FF2A54]">
              POPPRO <span className="text-[var(--primary-green)]">STUDIO</span>
            </span>
            <span>|</span>
            <span>Hak Cipta © 2026. Hak cipta terpelihara.</span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-gray-400">
            <button onClick={() => alert('Kebijakan Privasi diterbitkan')} className="hover:text-[var(--primary-green)] transition-all cursor-pointer">Dasar Privasi</button>
            <button onClick={() => alert('Terma Perkhidmatan diterbitkan')} className="hover:text-[var(--primary-green)] transition-all cursor-pointer">Terma Perkhidmatan</button>
            <button onClick={() => alert('Pengedaran siri diterbitkan')} className="hover:text-[var(--primary-green)] transition-all cursor-pointer">Garis Panduan Komuniti</button>
          </div>

        </div>
      </footer>

    </div>
  );
}
