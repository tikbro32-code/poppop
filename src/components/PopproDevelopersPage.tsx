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
  Inbox
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useNavigate, Link } from 'react-router-dom';

export default function PopproDevelopersPage() {
  const navigate = useNavigate();
  const [selectedLang, setSelectedLang] = useState('Bahasa Melayu');
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'login' | 'share' | 'post' | 'embed'>('login');
  const [expandedAccordion, setExpandedAccordion] = useState<string | null>('sandbox');
  const [emailInput, setEmailInput] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  // Dynamic typewriter text for hero title
  const targetWords = ['Researchers', 'Creators', 'Developers', 'Innovators'];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentWord, setCurrentWord] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    let timer: any;
    const fullWord = targetWords[currentWordIndex];

    if (isDeleting) {
      timer = setTimeout(() => {
        setCurrentWord(prev => prev.slice(0, -1));
        setTypingSpeed(70);
      }, typingSpeed);
    } else {
      timer = setTimeout(() => {
        setCurrentWord(fullWord.slice(0, currentWord.length + 1));
        setTypingSpeed(150);
      }, typingSpeed);
    }

    if (!isDeleting && currentWord === fullWord) {
      // Pause before starting deletion
      timer = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && currentWord === '') {
      setIsDeleting(false);
      setCurrentWordIndex((prev) => (prev + 1) % targetWords.length);
    }

    return () => clearTimeout(timer);
  }, [currentWord, isDeleting, currentWordIndex]);

  const handleSubscribeSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (emailInput.trim()) {
      setIsSubscribed(true);
      setTimeout(() => {
        setEmailInput('');
        setIsSubscribed(false);
      }, 4000);
    }
  };

  return (
    <div className="min-h-screen bg-[#070909] text-white font-sans selection:bg-[#00C880]/20 overflow-x-hidden relative">
      
      {/* Glow Rings & Neon Lines */}
      <div className="absolute top-0 left-0 right-0 h-[700px] bg-gradient-to-b from-[#00C880]/5 via-transparent to-transparent pointer-events-none" />
      <div className="absolute top-[300px] right-[-300px] w-[600px] h-[600px] rounded-full bg-[#00C880]/5 blur-[150px] pointer-events-none animate-pulse duration-[10000ms]" />
      <div className="absolute top-[1200px] left-[-300px] w-[600px] h-[600px] rounded-full bg-[#00C880]/5 blur-[150px] pointer-events-none" />

      {/* 1. Header Navigation */}
      <nav className="sticky top-0 z-50 bg-[#070909]/90 backdrop-blur-md border-b border-white/5 px-4 lg:px-8 py-3.5">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          {/* Logo */}
          <div className="flex items-center gap-3">
            <Link to="/" className="flex items-center gap-2.5 group">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#00C880] to-emerald-500 flex items-center justify-center font-bold text-black shadow-md shadow-[#00C880]/15 group-hover:scale-105 transition-transform">
                P
              </div>
              <div className="flex flex-col">
                <span className="font-sans font-black text-sm tracking-widest text-white flex items-center gap-1">
                  POPPRO
                </span>
                <span className="text-[10px] text-gray-400 font-semibold tracking-wider">for developers</span>
              </div>
            </Link>
          </div>

          {/* Nav Links */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
            {/* Products Dropdown simulator */}
            <div className="relative group cursor-pointer">
              <span className="hover:text-[#00C880] transition-colors flex items-center gap-1 py-2">
                Products <ChevronDown className="w-3.5 h-3.5" />
              </span>
              {/* Flyout panel */}
              <div className="absolute left-0 mt-2 w-[480px] bg-slate-950 border border-white/10 rounded-2xl shadow-2xl p-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 grid grid-cols-2 gap-4">
                <div>
                  <h4 className="text-[10px] font-mono text-gray-500 uppercase tracking-widest mb-3">Core Kits</h4>
                  <div className="space-y-2.5">
                    <button onClick={() => { setActiveTab('login'); document.getElementById('featured-products')?.scrollIntoView({ behavior: 'smooth' }); }} className="text-left block w-full group/item">
                      <p className="text-xs font-semibold text-white group-hover/item:text-[#00C880] transition-colors">Login Kit</p>
                      <p className="text-[10px] text-gray-400">Secure user authentication</p>
                    </button>
                    <button onClick={() => { setActiveTab('share'); document.getElementById('featured-products')?.scrollIntoView({ behavior: 'smooth' }); }} className="text-left block w-full group/item">
                      <p className="text-xs font-semibold text-white group-hover/item:text-[#00C880] transition-colors">Share Kit</p>
                      <p className="text-[10px] text-gray-400">Export content seamlessly</p>
                    </button>
                    <button onClick={() => { setActiveTab('post'); document.getElementById('featured-products')?.scrollIntoView({ behavior: 'smooth' }); }} className="text-left block w-full group/item">
                      <p className="text-xs font-semibold text-white group-hover/item:text-[#00C880] transition-colors">Content Posting API</p>
                      <p className="text-[10px] text-gray-400">Directly publish drafts</p>
                    </button>
                  </div>
                </div>
                <div>
                  <h4 className="text-[10px] font-mono text-gray-500 uppercase tracking-widest mb-3">Embeds & Data</h4>
                  <div className="space-y-2.5">
                    <button onClick={() => { setActiveTab('embed'); document.getElementById('featured-products')?.scrollIntoView({ behavior: 'smooth' }); }} className="text-left block w-full group/item">
                      <p className="text-xs font-semibold text-white group-hover/item:text-[#00C880] transition-colors">Embed Videos</p>
                      <p className="text-[10px] text-gray-400">Integrate Poppro onto websites</p>
                    </button>
                    <a href="#more-products" className="text-left block w-full group/item">
                      <p className="text-xs font-semibold text-white group-hover/item:text-[#00C880] transition-colors">More APIs</p>
                      <p className="text-[10px] text-gray-400">Display API, Webhooks & Scopes</p>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <a href="#use-cases" className="hover:text-[#00C880] transition-colors">Use cases</a>
            <a href="#whats-new" className="hover:text-[#00C880] transition-colors">Sandbox</a>
            <a href="#blog" className="hover:text-[#00C880] transition-colors">Blog</a>
          </div>

          {/* Actions */}
          <div className="hidden md:flex items-center gap-4">
            {/* Lang switcher */}
            <div className="relative">
              <button 
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex items-center gap-1.5 text-xs font-semibold bg-white/5 hover:bg-white/10 px-3 py-1.5 rounded-full border border-white/10 transition-all cursor-pointer"
              >
                <Globe className="w-3.5 h-3.5 text-gray-400" />
                <span>{selectedLang}</span>
                <ChevronDown className="w-3 h-3 text-gray-400" />
              </button>
              
              <AnimatePresence>
                {isLangOpen && (
                  <motion.div 
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
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
              onClick={() => alert('Daftar portal pembangun Poppro akan datang tidak lama lagi! Terima kasih atas minat anda.')}
              className="bg-[#00C880] hover:bg-[#00E090] text-black font-extrabold text-xs px-5 py-2.5 rounded-full transition-all flex items-center gap-1 shadow-lg shadow-[#00C880]/15"
            >
              Get started <ChevronRight className="w-4 h-4 text-black" />
            </button>
          </div>

          {/* Mobile hamburger */}
          <div className="flex md:hidden items-center gap-2">
            <button 
              onClick={() => alert('Daftar portal pembangun Poppro akan datang tidak lama lagi! Terima kasih atas minat anda.')}
              className="bg-[#00C880] text-black text-xs font-bold px-3 py-1.5 rounded-full transition-all"
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

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-slate-950 border-b border-white/5 overflow-hidden absolute w-full left-0 z-40 px-6 py-6"
          >
            <div className="flex flex-col gap-4 text-sm text-gray-300">
              <a href="#use-cases" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#00C880] py-2 border-b border-white/5">Use cases</a>
              <a href="#featured-products" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#00C880] py-2 border-b border-white/5">Featured products</a>
              <a href="#whats-new" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#00C880] py-2 border-b border-white/5">Sandbox Hub</a>
              <a href="#blog" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#00C880] py-2 border-b border-white/5">Engineering Blog</a>
              
              <div className="flex items-center justify-between py-2">
                <span className="text-xs text-gray-400">Bahasa</span>
                <select 
                  value={selectedLang} 
                  onChange={(e) => setSelectedLang(e.target.value)}
                  className="bg-slate-900 border border-white/10 rounded px-2 py-1 text-xs text-white"
                >
                  <option value="Bahasa Melayu">Bahasa Melayu</option>
                  <option value="English (UK)">English (UK)</option>
                  <option value="Bahasa Indonesia">Bahasa Indonesia</option>
                </select>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 2. Hero Section - Deep black space vibe with typewriter and premium graphics */}
      <section className="relative pt-16 pb-24 px-4 overflow-hidden max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        
        {/* Left column info */}
        <div className="flex-1 text-left relative z-10 max-w-2xl">
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-1.5 bg-[#00C880]/10 text-[#00C880] border border-[#00C880]/20 px-3.5 py-1 rounded-full text-xs font-semibold mb-6 tracking-wide"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Introducing Poppro for Developers</span>
          </motion.div>

          <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-none uppercase font-sans text-white mb-6">
            Develop for <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00C880] via-teal-400 to-emerald-300 min-h-[50px] inline-block font-mono">
              &gt;{currentWord}
              <span className="animate-pulse font-sans font-thin text-[#00C880]">|</span>
            </span>
          </h1>

          <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-8 max-w-md">
            Create, connect, and explore with the Poppro developer experience. Leverage our stable tools and APIs to tap into the world's most creative global community.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <button 
              onClick={() => alert('Mengalihkan ke Portal Pembangun!')}
              className="bg-[#00C880] hover:bg-[#00E090] text-black font-extrabold text-xs md:text-sm px-7 py-3.5 rounded-full transition-all flex items-center gap-1.5 cursor-pointer uppercase shadow-lg shadow-[#00C880]/20"
            >
              Get started <ChevronRight className="w-4 h-4 text-black" />
            </button>
            <button 
              onClick={() => document.getElementById('use-cases')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white/5 hover:bg-white/10 text-white font-bold text-xs md:text-sm px-6 py-3.5 rounded-full border border-white/10 transition-all cursor-pointer uppercase"
            >
              Explore Use cases
            </button>
          </div>
        </div>

        {/* Right column premium visual code board schematic */}
        <div className="flex-1 w-full relative z-10 max-w-lg lg:max-w-none">
          <div className="relative aspect-video lg:aspect-square bg-slate-950/40 rounded-3xl border border-white/10 p-6 flex flex-col justify-between overflow-hidden shadow-2xl backdrop-blur-xs group">
            {/* Glow spot and dot matrix grids */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full bg-[#00C880]/10 blur-[80px] pointer-events-none" />
            <div className="absolute top-0 right-0 w-32 h-32 bg-radial from-[#00C880]/20 to-transparent pointer-events-none opacity-40" />

            {/* Simulated file explorer header */}
            <div className="flex items-center justify-between pb-4 border-b border-white/5">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                <span className="text-[10px] text-gray-500 font-mono ml-2">sandbox-env_main.json</span>
              </div>
              <div className="flex items-center gap-1.5 text-gray-500">
                <Terminal className="w-3.5 h-3.5" />
                <span className="text-[9px] font-mono text-emerald-400 font-extrabold uppercase bg-emerald-500/10 px-1.5 py-0.5 rounded">CONNECTED</span>
              </div>
            </div>

            {/* Custom SVG tech schematic inside */}
            <div className="my-6 flex-1 flex flex-col justify-center items-center gap-4">
              <div className="relative w-full max-w-sm">
                
                {/* SVG Schematic map */}
                <svg viewBox="0 0 400 180" className="w-full h-auto">
                  <defs>
                    <linearGradient id="glowG" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#00C880" stopOpacity="0.4" />
                      <stop offset="100%" stopColor="#00A870" stopOpacity="0" />
                    </linearGradient>
                    <linearGradient id="cyanLine" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#38bdf8" />
                      <stop offset="100%" stopColor="#00C880" />
                    </linearGradient>
                  </defs>

                  {/* Nodes connection trails */}
                  <g opacity="0.6">
                    <line x1="50" y1="90" x2="140" y2="40" stroke="#00C880" strokeWidth="1" strokeDasharray="4 2" />
                    <line x1="50" y1="90" x2="140" y2="140" stroke="#00C880" strokeWidth="1" strokeDasharray="4 2" />
                    <line x1="140" y1="40" x2="260" y2="40" stroke="#38bdf8" strokeWidth="1.5" />
                    <line x1="140" y1="140" x2="260" y2="140" stroke="#00C880" strokeWidth="1.5" />
                    <line x1="260" y1="40" x2="350" y2="90" stroke="#00C880" strokeWidth="1" strokeDasharray="2 3" />
                    <line x1="260" y1="140" x2="350" y2="90" stroke="#00C880" strokeWidth="1" strokeDasharray="2 3" />
                  </g>

                  {/* Left Node: Poppro Core App */}
                  <g transform="translate(50, 90)" className="cursor-pointer">
                    <circle r="22" fill="#070909" stroke="#00C880" strokeWidth="2" />
                    <circle r="16" fill="url(#glowG)" />
                    <text textAnchor="middle" y="4" fill="#00C880" fontSize="10" fontWeight="bold" fontFamily="sans-serif">POPPro</text>
                  </g>

                  {/* Mid-top Node: API endpoint */}
                  <g transform="translate(140, 40)">
                    <rect x="-24" y="-12" width="48" height="24" rx="4" fill="#091014" stroke="#38bdf8" strokeWidth="1" />
                    <text textAnchor="middle" y="4" fill="#38bdf8" fontSize="8" fontFamily="monospace">API V2</text>
                  </g>

                  {/* Mid-bot Node: Webhook dispatcher */}
                  <g transform="translate(140, 140)">
                    <rect x="-24" y="-12" width="48" height="24" rx="4" fill="#091014" stroke="#00C880" strokeWidth="1" />
                    <text textAnchor="middle" y="4" fill="#00C880" fontSize="8" fontFamily="monospace">WEBHOOK</text>
                  </g>

                  {/* Third Columns Nodes */}
                  <g transform="translate(260, 40)">
                    <circle r="12" fill="#070909" stroke="#38bdf8" strokeWidth="1.5" />
                    <path d="M-4 -4 L4 4 M4 -4 L-4 4" stroke="#38bdf8" strokeWidth="1" />
                  </g>
                  <g transform="translate(260, 140)">
                    <circle r="12" fill="#070909" stroke="#00C880" strokeWidth="1.5" />
                    <path d="M-3 -1 L0 2 L5 -3" stroke="#00C880" strokeWidth="1" fill="none" />
                  </g>

                  {/* Right Node: Developer App Endpoint */}
                  <g transform="translate(350, 90)">
                    <polygon points="0,-18 16,-6 10,14 -10,14 -16,-6" fill="#070909" stroke="#00C880" strokeWidth="1.5" />
                    <text textAnchor="middle" y="4" fill="#ffffff" fontSize="9" fontWeight="bold">APP</text>
                  </g>
                </svg>

                {/* Floating overlay chip code snippet */}
                <div className="absolute top-[-25px] right-2 bg-slate-900 border border-white/10 rounded-lg p-2.5 shadow-xl font-mono text-[8px] text-gray-400 max-w-[150px] pointer-events-none group-hover:scale-105 transition-transform">
                  <span className="text-[#00C880]">GET</span> <span className="text-white">/api/v2/user</span>
                  <div className="text-[7px] text-gray-500 mt-1">Bearer poppro_sec_9...</div>
                </div>

                {/* Left overlay badge card for academic researchers */}
                <div className="absolute bottom-[-15px] left-2 bg-slate-900 border border-[#00C880]/30 rounded-lg p-2.5 shadow-xl flex items-center gap-1.5 pointer-events-none group-hover:translate-x-1 transition-transform">
                  <div className="w-5 h-5 rounded bg-emerald-500/15 flex items-center justify-center font-mono text-[9px] text-[#00C880] font-bold">R</div>
                  <div className="text-[8px]">
                    <p className="font-bold text-white leading-tight">Researcher API</p>
                    <p className="text-emerald-400 font-mono text-[7px]">APPROVED</p>
                  </div>
                </div>

              </div>
            </div>

            {/* Mini Footer metadata */}
            <div className="flex items-center justify-between text-[10px] text-gray-500 font-mono pt-3 border-t border-white/5">
              <span>RATE LIMITS: 2,000 req/min</span>
              <span>ENVIRONMENT: SANDBOX ACTIVE</span>
            </div>

          </div>
        </div>

      </section>

      {/* 3. Use Cases - 4 Columns Grid */}
      <section id="use-cases" className="py-24 border-t border-white/5 bg-[#080d0d]/40">
        <div className="max-w-7xl mx-auto px-4">
          
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold uppercase tracking-tight text-white mb-4">
              Use cases
            </h2>
            <p className="text-gray-400 text-sm max-w-xl">
              Leverage Poppro's various integrations to build solutions for your platform.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Card 1 */}
            <div className="bg-[#091014] border border-white/5 hover:border-[#00C880]/30 rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 group hover:-translate-y-1">
              <div>
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 group-hover:bg-[#00C880]/10 group-hover:border-[#00C880]/20 group-hover:text-[#00C880] transition-colors mb-6">
                  <Smartphone className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-white mb-3 leading-tight uppercase group-hover:text-[#00C880] transition-colors">
                  Tap into the Poppro content ecosystem
                </h4>
                <p className="text-xs text-gray-400 leading-relaxed">
                  Expand your platform's reach with our integrations to log in with Poppro, share, and post content.
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] text-gray-500 font-semibold">
                <span className="font-mono text-[9px] tracking-wider uppercase group-hover:text-white">POPSHARE</span>
                <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-[#00C880] group-hover:translate-x-1 transition-all" />
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-[#091014] border border-white/5 hover:border-[#00C880]/30 rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 group hover:-translate-y-1">
              <div>
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 group-hover:bg-[#00C880]/10 group-hover:border-[#00C880]/20 group-hover:text-[#00C880] transition-colors mb-6">
                  <BookOpen className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-white mb-3 leading-tight uppercase group-hover:text-[#00C880] transition-colors">
                  Conduct research on Poppro's data
                </h4>
                <p className="text-xs text-gray-400 leading-relaxed">
                  Securely access Poppro's public data for insights on user behavior, trends, and commercial content.
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] text-gray-500 font-semibold">
                <span className="font-mono text-[9px] tracking-wider uppercase group-hover:text-white">POPDATA</span>
                <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-[#00C880] group-hover:translate-x-1 transition-all" />
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-[#091014] border border-white/5 hover:border-[#00C880]/30 rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 group hover:-translate-y-1">
              <div>
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 group-hover:bg-[#00C880]/10 group-hover:border-[#00C880]/20 group-hover:text-[#00C880] transition-colors mb-6">
                  <ShoppingBag className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-white mb-3 leading-tight uppercase group-hover:text-[#00C880] transition-colors">
                  Extend the Poppro Shop experience
                </h4>
                <p className="text-xs text-gray-400 leading-relaxed">
                  Make the most out of Poppro Shop's e-commerce services to accelerate and grow your business.
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] text-gray-500 font-semibold">
                <span className="font-mono text-[9px] tracking-wider uppercase group-hover:text-white">POPSHOP.SK</span>
                <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-[#00C880] group-hover:translate-x-1 transition-all" />
              </div>
            </div>

            {/* Card 4 */}
            <div className="bg-[#091014] border border-white/5 hover:border-[#00C880]/30 rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 group hover:-translate-y-1">
              <div>
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 group-hover:bg-[#00C880]/10 group-hover:border-[#00C880]/20 group-hover:text-[#00C880] transition-colors mb-6">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-white mb-3 leading-tight uppercase group-hover:text-[#00C880] transition-colors">
                  Advertise or market for businesses
                </h4>
                <p className="text-xs text-gray-400 leading-relaxed">
                  Connect with Poppro for Business platforms to build innovative solutions for advertisers.
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] text-gray-500 font-semibold">
                <span className="font-mono text-[9px] tracking-wider uppercase group-hover:text-white">POPMARKETING</span>
                <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-[#00C880] group-hover:translate-x-1 transition-all" />
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 4. Featured Products with Interactive tab switching exactly like screenshots */}
      <section id="featured-products" className="py-24 px-4 max-w-7xl mx-auto scroll-mt-16">
        
        <div className="mb-16 text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold uppercase tracking-tight text-white mb-4">
            Featured products
          </h2>
          <p className="text-gray-400 text-sm">
            Core building blocks designed to interface cleanly with Poppro social metrics.
          </p>
        </div>

        {/* 2-Column layout for vertical tabs + graphic */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left vertical tabs (4 parts) */}
          <div className="lg:col-span-4 flex flex-row lg:flex-col overflow-x-auto lg:overflow-x-visible gap-2 border-b lg:border-b-0 lg:border-r border-white/5 pb-4 lg:pb-0 lg:pr-6 scrollbar-hide">
            
            {/* Tab 1 */}
            <button 
              onClick={() => setActiveTab('login')}
              className={`flex-1 text-left px-5 py-4 rounded-xl transition-all font-sans uppercase font-bold text-xs cursor-pointer block shrink-0 ${
                activeTab === 'login' 
                  ? 'bg-[#00C880]/10 border-l-2 lg:border-l-4 border-[#00C880] text-white' 
                  : 'hover:bg-white/5 text-gray-400 hover:text-white'
              }`}
            >
              Login Kit
            </button>

            {/* Tab 2 */}
            <button 
              onClick={() => setActiveTab('share')}
              className={`flex-1 text-left px-5 py-4 rounded-xl transition-all font-sans uppercase font-bold text-xs cursor-pointer block shrink-0 ${
                activeTab === 'share' 
                  ? 'bg-[#00C880]/10 border-l-2 lg:border-l-4 border-[#00C880] text-white' 
                  : 'hover:bg-white/5 text-gray-400 hover:text-white'
              }`}
            >
              Share Kit
            </button>

            {/* Tab 3 */}
            <button 
              onClick={() => setActiveTab('post')}
              className={`flex-1 text-left px-5 py-4 rounded-xl transition-all font-sans uppercase font-bold text-xs cursor-pointer block shrink-0 ${
                activeTab === 'post' 
                  ? 'bg-[#00C880]/10 border-l-2 lg:border-l-4 border-[#00C880] text-white' 
                  : 'hover:bg-white/5 text-gray-400 hover:text-white'
              }`}
            >
              Content Posting API
            </button>

            {/* Tab 4 */}
            <button 
              onClick={() => setActiveTab('embed')}
              className={`flex-1 text-left px-5 py-4 rounded-xl transition-all font-sans uppercase font-bold text-xs cursor-pointer block shrink-0 ${
                activeTab === 'embed' 
                  ? 'bg-[#00C880]/10 border-l-2 lg:border-l-4 border-[#00C880] text-white' 
                  : 'hover:bg-white/5 text-gray-400 hover:text-white'
              }`}
            >
              Embed Videos
            </button>

          </div>

          {/* Right graphics panel with animated presence */}
          <div className="lg:col-span-8 bg-slate-900/30 rounded-3xl border border-white/10 p-8 flex flex-col justify-between relative overflow-hidden">
            
            <AnimatePresence mode="wait">
              {activeTab === 'login' && (
                <motion.div 
                  key="login"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col md:flex-row items-center gap-8 h-full justify-between"
                >
                  <div className="flex-1 space-y-4">
                    <span className="text-[10px] bg-sky-500/10 text-sky-400 border border-sky-500/20 px-2.5 py-0.5 rounded font-mono font-bold tracking-wider uppercase">SECURE OAUTH</span>
                    <h3 className="text-xl md:text-2xl font-black uppercase text-white leading-tight">
                      Allow Poppro’s global community of users to securely log into your app or website using their Poppro login credentials.
                    </h3>
                    <p className="text-xs text-gray-400 leading-relaxed">
                      Simplify user boarding. With our OAuth integration, obtain consensual access to basic creator public data, custom avatars and live feed preferences with strict data containment protocols.
                    </p>
                    <div className="pt-2 text-xs font-semibold text-[#00C880] flex items-center gap-1 hover:underline cursor-pointer">
                      Read Login Kit Docs <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </div>

                  {/* Graphic */}
                  <div className="w-full max-w-[240px] shrink-0 bg-slate-950 rounded-2xl border border-white/5 p-4 shadow-xl">
                    <div className="bg-slate-900 rounded-lg p-3 text-center space-y-6">
                      <div className="flex justify-center">
                        <div className="w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center font-bold text-lg text-[#00C880] border border-[#00C880]/20 shadow-inner">
                          P
                        </div>
                      </div>
                      <div className="space-y-1">
                        <p className="text-[11px] font-bold text-white">Authorize Developer App</p>
                        <p className="text-[9px] text-gray-400">Request permission to link account info</p>
                      </div>

                      {/* Fake Login Button with original styling */}
                      <button className="w-full bg-[#00C880] hover:bg-[#00E090] text-black font-extrabold text-[10px] py-2 rounded-lg flex items-center justify-center gap-1.5 transition-colors">
                        <Lock className="w-3 h-3 text-black" />
                        Sign in with Poppro
                      </button>

                      <p className="text-[7px] text-gray-500 leading-tight">
                        By signing-in, you agree to our Dev Policy terms & authorize basic sharing scopes.
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === 'share' && (
                <motion.div 
                  key="share"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col md:flex-row items-center gap-8 h-full justify-between"
                >
                  <div className="flex-1 space-y-4">
                    <span className="text-[10px] bg-amber-500/10 text-amber-400 border border-amber-500/20 px-2.5 py-0.5 rounded font-mono font-bold tracking-wider uppercase">SOCIAL MEDIA INTEGRATION</span>
                    <h3 className="text-xl md:text-2xl font-black uppercase text-white leading-tight">
                      Share a variety of content to Poppro with just a tap. Let users create content in your mobile app then share directly to Poppro.
                    </h3>
                    <p className="text-xs text-gray-400 leading-relaxed">
                      Enable users to export custom mobile highlights, gameplay recordings, or audio files instantly, increasing your organic app exposure across millions of active Poppro feeds.
                    </p>
                    <div className="pt-2 text-xs font-semibold text-[#00C880] flex items-center gap-1 hover:underline cursor-pointer">
                      Read Share Kit Docs <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </div>

                  {/* Graphic */}
                  <div className="w-full max-w-[240px] shrink-0 bg-slate-950 rounded-2xl border border-white/5 p-4 shadow-xl">
                    <div className="relative aspect-[9/16] rounded-xl overflow-hidden bg-slate-900 border border-white/10 flex flex-col justify-end p-3">
                      <img 
                        src="https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&auto=format&fit=crop&q=80" 
                        alt="Mobile Game Share" 
                        referrerPolicy="no-referrer"
                        className="absolute inset-0 w-full h-full object-cover opacity-60"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
                      
                      <div className="relative space-y-3 z-10 text-center">
                        <p className="text-[10px] font-bold text-white uppercase tracking-wider">Level Completed!</p>
                        <div className="bg-black/60 rounded-lg p-2 border border-white/5 text-[9px] text-emerald-400 font-mono font-bold">
                          🏆 SCORE: 124,500
                        </div>
                        <button className="w-full bg-[#00C880] text-black text-[9px] font-extrabold py-2 rounded flex items-center justify-center gap-1 uppercase tracking-wide">
                          <Share2 className="w-3 h-3 text-black" />
                          Share directly to Poppro
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === 'post' && (
                <motion.div 
                  key="post"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col md:flex-row items-center gap-8 h-full justify-between"
                >
                  <div className="flex-1 space-y-4">
                    <span className="text-[10px] bg-rose-500/10 text-rose-400 border border-rose-500/20 px-2.5 py-0.5 rounded font-mono font-bold tracking-wider uppercase">PUBLISHING PIPELINES</span>
                    <h3 className="text-xl md:text-2xl font-black uppercase text-white leading-tight">
                      Empower users to seamlessly post content or upload drafts from your app to their Poppro profiles.
                    </h3>
                    <p className="text-xs text-gray-400 leading-relaxed">
                      Optimize workflows for creative desktop or tablet software tools. Bypass manual file exports, letting designers dispatch video blocks, captions, and hashtag presets straight to their draft queue.
                    </p>
                    <div className="pt-2 text-xs font-semibold text-[#00C880] flex items-center gap-1 hover:underline cursor-pointer">
                      Read Posting API Docs <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </div>

                  {/* Graphic */}
                  <div className="w-full max-w-[240px] shrink-0 bg-slate-950 rounded-2xl border border-white/5 p-4 shadow-xl text-xs space-y-3 font-mono">
                    <div className="bg-slate-900 border border-white/10 rounded-lg p-2">
                      <div className="flex items-center justify-between text-[7px] text-gray-500 mb-1 pb-1 border-b border-white/5">
                        <span>request_header.js</span>
                        <span className="text-emerald-400">POST</span>
                      </div>
                      <pre className="text-[7.5px] text-gray-400 leading-tight">
{`curl -X POST \\
  "https://open-api.poppro.com/v2/post" \\
  -H "Authorization: Bearer dev_token" \\
  -H "Content-Type: application/json" \\
  -d '{
    "video_id": "vid_9528",
    "title": "Creative render #poppro",
    "is_draft": true
  }'`}
                      </pre>
                    </div>
                    {/* Simulated visual progress dispatch */}
                    <div className="bg-slate-900 rounded-lg p-2.5 flex items-center justify-between border border-emerald-500/20">
                      <div>
                        <p className="text-[8px] font-bold text-white">CreativeRender_Final...mp4</p>
                        <p className="text-[7px] text-emerald-400">Uploading draft...</p>
                      </div>
                      <div className="w-8 h-8 rounded-full border-2 border-t-[#00C880] border-white/5 animate-spin" />
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === 'embed' && (
                <motion.div 
                  key="embed"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col md:flex-row items-center gap-8 h-full justify-between"
                >
                  <div className="flex-1 space-y-4">
                    <span className="text-[10px] bg-purple-500/10 text-purple-400 border border-purple-500/20 px-2.5 py-0.5 rounded font-mono font-bold tracking-wider uppercase">WEB & PRESS TOOLKITS</span>
                    <h3 className="text-xl md:text-2xl font-black uppercase text-white leading-tight">
                      Conveniently show Poppro videos and creator profiles on articles or websites with embeds.
                    </h3>
                    <p className="text-xs text-gray-400 leading-relaxed">
                      Embed highly customizable player widgets onto standard journalistic articles, blogs, or forums. Increase reader engagement while preserving the dynamic comment stream & hover follow metrics directly.
                    </p>
                    <div className="pt-2 text-xs font-semibold text-[#00C880] flex items-center gap-1 hover:underline cursor-pointer">
                      Read Embed SDK Docs <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </div>

                  {/* Graphic */}
                  <div className="w-full max-w-[240px] shrink-0 bg-slate-950 rounded-2xl border border-white/5 p-4 shadow-xl">
                    <div className="bg-slate-900 rounded-xl p-2.5 border border-white/10 space-y-3">
                      <div className="flex items-center gap-1.5 pb-2 border-b border-white/5">
                        <div className="w-4 h-4 rounded-full bg-[#00C880]" />
                        <div>
                          <p className="text-[8px] font-bold text-white">@alexstreamer</p>
                          <p className="text-[7px] text-gray-400">Poppro Partner creator</p>
                        </div>
                      </div>
                      <div className="relative aspect-video rounded-lg overflow-hidden bg-black/60">
                        <img 
                          src="https://images.unsplash.com/photo-1546519638-68e109498ffc?w=400&auto=format&fit=crop&q=80" 
                          alt="Video Thumbnail"
                          referrerPolicy="no-referrer" 
                          className="w-full h-full object-cover opacity-60" 
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <button className="w-8 h-8 rounded-full bg-[#00C880] flex items-center justify-center text-black font-extrabold hover:scale-110 transition-transform">
                            ▶
                          </button>
                        </div>
                      </div>
                      <div className="flex items-center justify-between text-[7px] text-gray-500 font-mono">
                        <span>♥ 4.2M Likes</span>
                        <span>🗨 82,900 Comments</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

          </div>

        </div>

      </section>

      {/* 5. More Products Column Grid */}
      <section id="more-products" className="py-24 bg-[#080d0d]/40 border-t border-b border-white/5 scroll-mt-16">
        <div className="max-w-7xl mx-auto px-4">
          
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold uppercase tracking-tight text-white mb-4">
              More products
            </h2>
            <p className="text-gray-400 text-sm max-w-lg">
              Unlock refined programmatic paths ensuring strict security and developer transparency.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Card Webhooks */}
            <div className="bg-[#091014] border border-white/5 rounded-2xl p-6 flex flex-col justify-between hover:border-sky-500/30 transition-all duration-300">
              <div>
                <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400 mb-6 font-bold">
                  <Bell className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-white mb-3">Webhooks</h4>
                <p className="text-xs text-gray-400 leading-relaxed">
                  Get notifications for events on Poppro with lightweight subscriptions integrated to your app or website. Receive data in real-time without making API requests.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-[10px] text-gray-500">
                <span className="font-mono">EVENTS & CHANNELS</span>
                <span className="text-[#00C880] font-bold">Details &rarr;</span>
              </div>
            </div>

            {/* Card Data Portability API */}
            <div className="bg-[#091014] border border-white/5 rounded-2xl p-6 flex flex-col justify-between hover:border-[#00C880]/30 transition-all duration-300">
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#00C880]/10 border border-[#00C880]/20 flex items-center justify-center text-[#00C880] mb-6 font-bold">
                  <Layers className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-white mb-3">Data Portability API</h4>
                <p className="text-xs text-gray-400 leading-relaxed">
                  Allow users to transfer from Poppro to your app. Available only to Poppro users in the EEA and UK, compliant with latest GDPR provisions.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-[10px] text-gray-500">
                <span className="font-mono">PORTABILITY COMPLIANT</span>
                <span className="text-[#00C880] font-bold">Details &rarr;</span>
              </div>
            </div>

            {/* Card Scopes */}
            <div className="bg-[#091014] border border-white/5 rounded-2xl p-6 flex flex-col justify-between hover:border-[#00C880]/30 transition-all duration-300">
              <div>
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 mb-6 font-bold">
                  <Lock className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-white mb-3">Scopes</h4>
                <p className="text-xs text-gray-400 leading-relaxed">
                  Request access to scopes so your app can request user authorization for data, query Poppro's APIs, and perform different operations.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-[10px] text-gray-500">
                <span className="font-mono">OAUTH GRANTED</span>
                <span className="text-[#00C880] font-bold">Details &rarr;</span>
              </div>
            </div>

            {/* Card Green Screen Kit */}
            <div className="bg-[#091014] border border-white/5 rounded-2xl p-6 flex flex-col justify-between hover:border-emerald-500/30 transition-all duration-300">
              <div>
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-6 font-bold">
                  <Tv className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-white mb-3">Green Screen Kit</h4>
                <p className="text-xs text-gray-400 leading-relaxed">
                  Share images or videos from your app directly to Poppro to use as a green screen background. Maximize visual creator flexibility.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-[10px] text-gray-500">
                <span className="font-mono">CREATIVE ASSETS</span>
                <span className="text-[#00C880] font-bold">Details &rarr;</span>
              </div>
            </div>

            {/* Card Display API */}
            <div className="bg-[#091014] border border-white/5 rounded-2xl p-6 flex flex-col justify-between hover:border-amber-500/30 transition-all duration-300">
              <div>
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-500 mb-6 font-bold">
                  <Eye className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-white mb-3">Display API</h4>
                <p className="text-xs text-gray-400 leading-relaxed">
                  Display Poppro creators' recent or self-selected videos and their profile information on your app. Highly optimized for quick layouts.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-[10px] text-gray-500">
                <span className="font-mono">PROFILE DISPLAY</span>
                <span className="text-[#00C880] font-bold">Details &rarr;</span>
              </div>
            </div>

            {/* Card Research Tools */}
            <div className="bg-[#091014] border border-white/5 rounded-2xl p-6 flex flex-col justify-between hover:border-rose-500/30 transition-all duration-300">
              <div>
                <div className="w-10 h-10 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center text-rose-400 mb-6 font-bold">
                  <Search className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-white mb-3">Research Tools</h4>
                <p className="text-xs text-gray-400 leading-relaxed">
                  Access Poppro's public data on user profiles, videos, comments, and more. Available only to approved academic and social researchers.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-[10px] text-gray-500">
                <span className="font-mono">ACADEMIC TRUSTED</span>
                <span className="text-[#00C880] font-bold">Details &rarr;</span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 6. What's New? Dashboard + Interactive Accordions exactly like screenshots */}
      <section id="whats-new" className="py-24 px-4 max-w-7xl mx-auto scroll-mt-16">
        
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold uppercase tracking-tight text-white mb-4">
            What's new?
          </h2>
          <p className="text-gray-400 text-sm max-w-md">
            Continuous deployment of sandbox improvements and credential layers built for developers.
          </p>
        </div>

        {/* Left visually rich Dashboard mockup / Right Accordion items */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left panel column 5 */}
          <div className="lg:col-span-5 bg-slate-950 border border-white/10 rounded-3xl p-5 shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#00C880] to-sky-400" />
            
            {/* Dashboard Header UI control */}
            <div className="flex items-center justify-between text-[10px] text-gray-500 mb-4 font-mono">
              <div className="flex items-center gap-1.5 ">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                <span className="text-white font-bold uppercase">Sandbox Org Panel</span>
              </div>
              <span>ID: poppro-dev-9285</span>
            </div>

            {/* Simulated UI list of inputs for credentials as seen in the mockup screenshot */}
            <div className="space-y-4 text-xs font-mono">
              
              {/* App details block */}
              <div className="bg-slate-900 rounded-lg p-3 border border-white/5">
                <p className="text-[9px] text-gray-400 uppercase tracking-widest mb-1.5">App Details</p>
                <div className="flex items-center justify-between bg-black/40 px-3 py-2 rounded border border-white/5">
                  <span className="text-white font-bold">My_First_Sandbox_App</span>
                  <span className="text-[9px] bg-sky-500/10 text-sky-400 px-1.5 py-0.5 rounded uppercase">SANDBOX</span>
                </div>
              </div>

              {/* Developer credentials array */}
              <div className="bg-slate-900 rounded-lg p-3 border border-white/5 space-y-3">
                <p className="text-[9px] text-gray-400 uppercase tracking-widest">Credentials</p>
                
                <div className="space-y-1">
                  <span className="text-[10px] text-slate-500">Client ID</span>
                  <div className="flex items-center justify-between bg-black/30 px-3 py-1.5 rounded border border-white/5 text-[10px] text-gray-400">
                    <span>cl_id_817293102aa85</span>
                    <button className="text-[#00C880] hover:underline text-[9px] cursor-pointer">Copy</button>
                  </div>
                </div>

                <div className="space-y-1">
                  <span className="text-[10px] text-slate-500">Client Secret</span>
                  <div className="flex items-center justify-between bg-black/30 px-3 py-1.5 rounded border border-white/5 text-[10px] text-gray-400">
                    <span>••••••••••••••••••••••••••••</span>
                    <button className="text-[#00C880] hover:underline text-[9px] cursor-pointer">Reveal</button>
                  </div>
                </div>

                <div className="space-y-1">
                  <span className="text-[10px] text-slate-500">Redirect URI</span>
                  <div className="flex items-center justify-between bg-black/30 px-3 py-1.5 rounded border border-white/5 text-[10px] text-gray-400">
                    <span>https://my-app.dev/callback</span>
                    <button className="text-[#00C880] hover:underline text-[9px] cursor-pointer">Edit</button>
                  </div>
                </div>

              </div>

              {/* Scope selectors checkboxes */}
              <div className="bg-slate-900 rounded-lg p-3 border border-white/5 space-y-2">
                <p className="text-[9px] text-gray-400 uppercase tracking-widest">Selected Authorization Scopes</p>
                <div className="flex items-center justify-between text-[10px] text-slate-300">
                  <div className="flex items-center gap-1.5">
                    <div className="w-3 h-3 rounded bg-emerald-500/15 border border-[#00C880] flex items-center justify-center text-[8px] text-[#00C880] font-bold">✓</div>
                    <span>user.info.basic</span>
                  </div>
                  <span className="text-[8px] bg-emerald-500/10 text-emerald-400 px-1 py-0.5 rounded uppercase">APPROVED</span>
                </div>
                <div className="flex items-center justify-between text-[10px] text-slate-400">
                  <div className="flex items-center gap-1.5 opacity-60">
                    <div className="w-3 h-3 rounded bg-slate-900 border border-white/20" />
                    <span>video.publish.direct</span>
                  </div>
                  <span className="text-[8px] bg-yellow-500/15 text-yellow-400 px-1 py-0.5 rounded uppercase">PENDING REVIEW</span>
                </div>
              </div>

            </div>
          </div>

          {/* Right Accordion items column 7 */}
          <div className="lg:col-span-7 space-y-4">
            
            {/* Item 1 - Introducing Sandbox */}
            <div className="bg-slate-900/40 rounded-2xl border border-white/10 overflow-hidden">
              <button 
                onClick={() => setExpandedAccordion(expandedAccordion === 'sandbox' ? null : 'sandbox')}
                className="w-full text-left px-6 py-5 flex items-center justify-between font-bold text-white hover:bg-white/5 transition-colors cursor-pointer uppercase text-sm"
              >
                <span>Introducing Sandbox</span>
                <ChevronDown className={`w-4 h-4 text-gray-500 transition-transform duration-300 ${expandedAccordion === 'sandbox' ? 'rotate-180 text-[#00C880]' : ''}`} />
              </button>

              <AnimatePresence>
                {expandedAccordion === 'sandbox' && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden border-t border-white/5"
                  >
                    <div className="px-6 py-5 text-xs md:text-sm text-gray-300 space-y-4 leading-relaxed">
                      <p>
                        Smoothly collaborate on developer projects with our latest feature. Register your apps under organizations to obtain shared access for enhanced teamwork, enabling frictionless deployments, API keys sharing, and continuous integration controls.
                      </p>
                      <button 
                        onClick={() => alert('Informasi sandbox dibuka')}
                        className="text-xs font-bold text-[#00C880] hover:underline flex items-center gap-1 cursor-pointer"
                      >
                        Learn More <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Item 2 - Effortless Sharing with Direct Post */}
            <div className="bg-slate-900/40 rounded-2xl border border-white/10 overflow-hidden">
              <button 
                onClick={() => setExpandedAccordion(expandedAccordion === 'sharing' ? null : 'sharing')}
                className="w-full text-left px-6 py-5 flex items-center justify-between font-bold text-white hover:bg-white/5 transition-colors cursor-pointer uppercase text-sm"
              >
                <span>How creative partners enabled effortless sharing with Direct Post</span>
                <ChevronDown className={`w-4 h-4 text-gray-500 transition-transform duration-300 ${expandedAccordion === 'sharing' ? 'rotate-180 text-[#00C880]' : ''}`} />
              </button>

              <AnimatePresence>
                {expandedAccordion === 'sharing' && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden border-t border-white/5"
                  >
                    <div className="px-6 py-5 text-xs md:text-sm text-gray-300 space-y-3 leading-relaxed">
                      <p>
                        Publish with confidence. Through deep client-side app partnerships, designers can render and dispatch final edits directly into local user drafts without manual intermediate exports. Over 40 global software utilities have registered live integrations.
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Item 3 - Collaborating with organizations */}
            <div className="bg-slate-900/40 rounded-2xl border border-white/10 overflow-hidden">
              <button 
                onClick={() => setExpandedAccordion(expandedAccordion === 'orgs' ? null : 'orgs')}
                className="w-full text-left px-6 py-5 flex items-center justify-between font-bold text-white hover:bg-white/5 transition-colors cursor-pointer uppercase text-sm"
              >
                <span>Collaborating with organizations</span>
                <ChevronDown className={`w-4 h-4 text-gray-500 transition-transform duration-300 ${expandedAccordion === 'orgs' ? 'rotate-180 text-[#00C880]' : ''}`} />
              </button>

              <AnimatePresence>
                {expandedAccordion === 'orgs' && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden border-t border-white/5"
                  >
                    <div className="px-6 py-5 text-xs md:text-sm text-gray-300 leading-relaxed">
                      <p>
                        Organize your engineering teams. Set granular permission hierarchies (Dev Lead, Viewer, Auditor) on key API dispatchers across shared client applications to ensure complete enterprise data isolation and accountability.
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

          </div>

        </div>

      </section>

      {/* 7. Blog Section with original titles from screenshot but Poppro colors */}
      <section id="blog" className="py-24 border-t border-white/5 bg-[#080d0d]/30 scroll-mt-16">
        <div className="max-w-7xl mx-auto px-4">
          
          <div className="flex flex-col md:flex-row items-baseline justify-between mb-16 gap-4">
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold uppercase tracking-tight text-white mb-2">
                Engineering Blog
              </h2>
              <p className="text-gray-400 text-sm">
                Browse our articles for insights into Poppro's innovations, engineering updates, and more tech topics.
              </p>
            </div>
            <button className="text-xs font-bold text-[#00C880] border border-[#00C880]/20 hover:bg-[#00C880]/10 px-4 py-2 rounded-full cursor-pointer uppercase inline-shrink-0">
              View all posts
            </button>
          </div>

          {/* 3 Columns Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Blog 1 */}
            <div className="bg-slate-900/40 rounded-2xl border border-white/5 overflow-hidden flex flex-col justify-between hover:border-[#00C880]/30 transition-all duration-300 group">
              <div>
                <div className="relative aspect-video overflow-hidden bg-slate-950">
                  <img 
                    src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=500&auto=format&fit=crop&q=80" 
                    alt="AI linguistic loops"
                    referrerPolicy="no-referrer" 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500" 
                  />
                  <span className="absolute top-3 left-3 bg-[#00C880]/15 text-[#00C880] border border-[#00C880]/30 text-[9px] font-bold px-2 py-0.5 rounded font-mono">RESEARCH</span>
                </div>
                <div className="p-6 space-y-3">
                  <p className="text-[10px] text-gray-500 font-mono">March 25, 2026</p>
                  <h4 className="text-base font-bold text-white group-hover:text-[#00C880] uppercase leading-tight transition-colors">
                    Beyond Hallucinations: Uncovering Linguistic Bias in Vision-Language Models
                  </h4>
                  <p className="text-xs text-gray-400 leading-relaxed line-clamp-3">
                    AI-generated descriptions often get stuck in linguistic loops—repeating labels, flooding attributes, propagating roots. We detect these bias patterns using attribution before they skew creative outputs.
                  </p>
                </div>
              </div>
              <div className="px-6 pb-6 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] text-[#00C880] font-sans font-bold">
                <span>Read article</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            {/* Blog 2 */}
            <div className="bg-slate-900/40 rounded-2xl border border-white/5 overflow-hidden flex flex-col justify-between hover:border-[#00C880]/30 transition-all duration-300 group">
              <div>
                <div className="relative aspect-video overflow-hidden bg-slate-950">
                  <img 
                    src="https://images.unsplash.com/photo-1607799279861-4dd421887fb3?w=500&auto=format&fit=crop&q=80" 
                    alt="Multi-turn prompt security" 
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500" 
                  />
                  <div className="absolute top-3 left-3 flex gap-1">
                    <span className="bg-[#00C880]/15 text-[#00C880] border border-[#00C880]/30 text-[9px] font-bold px-2 py-0.5 rounded font-mono">RESEARCH</span>
                    <span className="bg-sky-500/15 text-sky-400 border border-sky-500/30 text-[9px] font-bold px-2 py-0.5 rounded font-mono">PRIVACY</span>
                  </div>
                </div>
                <div className="p-6 space-y-3">
                  <p className="text-[10px] text-gray-500 font-mono">February 28, 2026</p>
                  <h4 className="text-base font-bold text-white group-hover:text-[#00C880] uppercase leading-tight transition-colors">
                    When Tools Become Prompts: Why Multi-Turn MCP Systems Break Traditional Security Assumptions
                  </h4>
                  <p className="text-xs text-gray-400 leading-relaxed line-clamp-3">
                    How multi-turn MCP systems enable direct prompt propagation and cross-server security risks, revealing critical security breaches that do not show in single-turn tool evaluations.
                  </p>
                </div>
              </div>
              <div className="px-6 pb-6 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] text-[#00C880] font-sans font-bold">
                <span>Read article</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            {/* Blog 3 */}
            <div className="bg-slate-900/40 rounded-2xl border border-white/5 overflow-hidden flex flex-col justify-between hover:border-[#00C880]/30 transition-all duration-300 group">
              <div>
                <div className="relative aspect-video overflow-hidden bg-slate-950">
                  <img 
                    src="https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=500&auto=format&fit=crop&q=80" 
                    alt="University hackathon Jam" 
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500" 
                  />
                  <span className="absolute top-3 left-3 bg-[#00C880]/15 text-[#00C880] border border-[#00C880]/30 text-[9px] font-bold px-2 py-0.5 rounded font-mono">COMMUNITY</span>
                </div>
                <div className="p-6 space-y-3">
                  <p className="text-[10px] text-gray-500 font-mono">January 6, 2026</p>
                  <h4 className="text-base font-bold text-white group-hover:text-[#00C880] uppercase leading-tight transition-colors">
                    Poppro TechJam 2025 Highlights: Building with Joy, Coding for Change
                  </h4>
                  <p className="text-xs text-gray-400 leading-relaxed line-clamp-3">
                    Poppro TechJam brings university students together to push boundaries and showcase creativity. This year's edition drew 2,000+ applications from 30+ schools to tackle real-world development challenges.
                  </p>
                </div>
              </div>
              <div className="px-6 pb-6 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] text-[#00C880] font-sans font-bold">
                <span>Read article</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 8. Newsletter Email Sign-up with micro success state */}
      <section className="py-24 px-4 max-w-7xl mx-auto text-center border-b border-white/5">
        <div className="max-w-2xl mx-auto space-y-6 relative z-10">
          
          <div className="w-12 h-12 rounded-2xl bg-[#00C880]/10 border border-[#00C880]/20 flex items-center justify-center text-[#00C880] mx-auto">
            <Inbox className="w-6 h-6" />
          </div>

          <h3 className="text-3xl font-black uppercase text-white mb-2">Want to stay in the loop?</h3>
          <p className="text-gray-300 text-sm max-w-md mx-auto leading-relaxed">
            Subscribe to our mailing list to be the first to know about future blog articles, SDK releases, and developer workshops.
          </p>

          <AnimatePresence mode="wait">
            {!isSubscribed ? (
              <motion.form 
                key="sub-form"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                onSubmit={handleSubscribeSubmit}
                className="flex flex-col sm:flex-row items-stretch justify-center max-w-md mx-auto gap-3 pt-4"
              >
                <input 
                  type="email" 
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                  placeholder="Enter your email" 
                  required
                  className="flex-1 bg-slate-900 border border-white/10 rounded-full px-5 py-3 text-xs text-white focus:outline-none focus:border-[#00C880] text-center sm:text-left focus:ring-1 focus:ring-[#00C880]"
                />
                <button 
                  type="submit"
                  className="bg-[#00C880] hover:bg-[#00E090] text-black font-extrabold text-xs px-6 py-3 rounded-full transition-all uppercase cursor-pointer shadow-lg shadow-[#00C880]/15"
                >
                  Subscribe
                </button>
              </motion.form>
            ) : (
              <motion.div 
                key="sub-success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="bg-emerald-950/20 border border-emerald-500/20 max-w-md mx-auto rounded-2xl p-5 text-center text-emerald-400 font-semibold text-xs space-y-1.5"
              >
                <p>✓ Awesome! You are on the list.</p>
                <p className="text-gray-400 font-normal text-[11px]">We've sent a verification link to your inbox. Stay tuned!</p>
              </motion.div>
            )}
          </AnimatePresence>

          <p className="text-[10px] text-gray-500 leading-normal max-w-sm mx-auto">
            By subscribing, you consent to Poppro sending email updates in accordance with our Privacy Policy. You can unsubscribe at any time.
          </p>
        </div>
      </section>

      {/* 9. Footer */}
      <footer className="bg-[#060808] pt-20 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-8 mb-16">
            
            {/* Column 1 info */}
            <div className="col-span-2 space-y-4">
              <Link to="/" className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#00C880] to-emerald-500 flex items-center justify-center font-bold text-black shadow-lg">
                  P
                </div>
                <div className="flex flex-col">
                  <span className="font-sans font-black text-sm tracking-widest text-white flex items-center gap-1">
                    POPPRO
                  </span>
                  <span className="text-[9px] text-gray-400 font-semibold tracking-wider">for developers</span>
                </div>
              </Link>
              <p className="text-xs text-gray-400 leading-relaxed max-w-xs">
                Empowering the developer community to build seamless, interactive social tooling. From deep authorization flow to media posting APIs, build real.
              </p>
            </div>

            {/* Column 2 */}
            <div className="flex flex-col gap-3.5 text-xs text-gray-400">
              <h5 className="font-bold text-white uppercase tracking-wider mb-2">Products</h5>
              <button onClick={() => { setActiveTab('login'); document.getElementById('featured-products')?.scrollIntoView({ behavior: 'smooth' }); }} className="text-left hover:text-[#00C880] transition-colors cursor-pointer">Login Kit</button>
              <button onClick={() => { setActiveTab('share'); document.getElementById('featured-products')?.scrollIntoView({ behavior: 'smooth' }); }} className="text-left hover:text-[#00C880] transition-colors cursor-pointer">Share Kit</button>
              <button onClick={() => { setActiveTab('post'); document.getElementById('featured-products')?.scrollIntoView({ behavior: 'smooth' }); }} className="text-left hover:text-[#00C880] transition-colors cursor-pointer">Posting API</button>
              <button onClick={() => { setActiveTab('embed'); document.getElementById('featured-products')?.scrollIntoView({ behavior: 'smooth' }); }} className="text-left hover:text-[#00C880] transition-colors cursor-pointer">Embed Videos</button>
            </div>

            {/* Column 3 */}
            <div className="flex flex-col gap-3.5 text-xs text-gray-400">
              <h5 className="font-bold text-white uppercase tracking-wider mb-2">Other platforms</h5>
              <Link to="/seller" className="hover:text-[#00C880] transition-colors">Poppro Shop Seller</Link>
              <Link to="/ads" className="hover:text-[#00C880] transition-colors">Poppro Commercial Ads</Link>
              <Link to="/live-agency" className="hover:text-[#00C880] transition-colors">Poppro LIVE Agency</Link>
              <Link to="/for-good" className="hover:text-[#00C880] transition-colors">Poppro for Good</Link>
            </div>

            {/* Column 4 */}
            <div className="flex flex-col gap-3.5 text-xs text-gray-400">
              <h5 className="font-bold text-white uppercase tracking-wider mb-2">Company</h5>
              <Link to="/about" className="hover:text-[#00C880] transition-colors">About Us</Link>
              <Link to="/newsroom" className="hover:text-[#00C880] transition-colors">Newsroom</Link>
              <Link to="/careers" className="hover:text-[#00C880] transition-colors">Careers</Link>
              <Link to="/support" className="hover:text-[#00C880] transition-colors">Help Center</Link>
            </div>

          </div>

          {/* Bottom links and details */}
          <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
            <div className="flex items-center gap-2">
              <span className="text-gray-500">Language:</span>
              <select 
                value={selectedLang} 
                onChange={(e) => setSelectedLang(e.target.value)}
                className="bg-black/40 text-xs text-gray-300 border border-white/10 rounded-full px-3 py-1.5 focus:outline-none focus:border-[#00C880] cursor-pointer"
              >
                <option value="Bahasa Melayu">Bahasa Melayu</option>
                <option value="English (UK)">English (UK)</option>
                <option value="Bahasa Indonesia">Bahasa Indonesia</option>
              </select>
            </div>

            <div className="flex flex-wrap gap-4 text-[11px] text-gray-500 font-medium">
              <span className="hover:underline cursor-pointer">Terms of Service</span>
              <span>•</span>
              <span className="hover:underline cursor-pointer">Privacy Policy</span>
              <span>•</span>
              <span className="hover:underline cursor-pointer">Developer Guidelines</span>
            </div>

            <div className="text-[11px] text-gray-500 font-mono">
              © 2026 Poppro Developers. Hak Cipta Terpelihara.
            </div>

          </div>

        </div>
      </footer>

    </div>
  );
}
