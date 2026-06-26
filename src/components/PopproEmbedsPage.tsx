import React, { useState, useEffect } from 'react';
import { 
  ArrowLeft, 
  ChevronDown, 
  Globe, 
  MessageSquare, 
  Check, 
  Copy, 
  Code, 
  Video, 
  User, 
  Hash, 
  Music, 
  Sparkles, 
  Heart, 
  Play, 
  Pause, 
  X, 
  Eye, 
  UserPlus, 
  Bookmark, 
  Sliders, 
  Laptop, 
  ExternalLink,
  Plus
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useNavigate, Link } from 'react-router-dom';
import ThemesPage from './ThemesPage';

export default function PopproEmbedsPage() {
  const navigate = useNavigate();
  const [selectedLang, setSelectedLang] = useState('Bahasa Melayu');
  const [isLangOpen, setIsLangOpen] = useState(false);
  
  // Theme Toggle Modal State
  const [isThemesOpen, setIsThemesOpen] = useState(false);
  
  // Interactive tab state
  const [activeTab, setActiveTab] = useState<'basic' | 'custom'>('basic');
  const [embedType, setEmbedType] = useState<'video' | 'profile' | 'hashtag' | 'sound'>('video');
  const [urlInput, setUrlInput] = useState('');
  const [isPreviewActive, setIsPreviewActive] = useState(false);

  // Custom configuration options (Cipta benaman anda sendiri)
  const [customWidth, setCustomWidth] = useState('488');
  const [customHeight, setCustomHeight] = useState('878');
  const [showCaption, setShowCaption] = useState(true);
  const [enableAutoplay, setEnableAutoplay] = useState(false);
  const [playerTheme, setPlayerTheme] = useState<'dark' | 'light'>('dark');

  // Video playback simulation hook
  const [isPlaying, setIsPlaying] = useState(true);
  const [likeCount, setLikeCount] = useState(128.4);
  const [isLiked, setIsLiked] = useState(false);

  // Popup Modal states
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const [feedbackOpen, setFeedbackOpen] = useState(false);
  const [feedbackSuccess, setFeedbackSuccess] = useState(false);
  const [feedbackEmail, setFeedbackEmail] = useState('');
  const [feedbackText, setFeedbackText] = useState('');

  // Example placeholders dictionary
  const examples = {
    video: 'https://poppro.com/@gaming_world/video/849204',
    profile: 'https://poppro.com/@creative_mind',
    hashtag: 'https://poppro.com/tag/malaysiacreator',
    sound: 'https://poppro.com/music/sunset-vibes-924823'
  };

  // Switch Embed Type
  const handleTypeChange = (type: 'video' | 'profile' | 'hashtag' | 'sound') => {
    setEmbedType(type);
    setUrlInput('');
    setIsPreviewActive(false);
  };

  // Inject Preset Examples
  const handleApplyPreset = (type: 'video' | 'profile' | 'hashtag' | 'sound') => {
    setUrlInput(examples[type]);
    setIsPreviewActive(true);
  };

  // Handle get code modal trigger
  const handleGetCode = () => {
    if (urlInput.trim()) {
      setIsModalOpen(true);
    }
  };

  // Copy code method
  const handleCopyCode = () => {
    const codeSnippet = generateEmbedCode();
    navigator.clipboard.writeText(codeSnippet);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 3000);
  };

  // Generate iframe code snippet based on parameters
  const generateEmbedCode = () => {
    const themeParam = playerTheme === 'light' ? '&theme=light' : '';
    const captionParam = !showCaption ? '&caption=0' : '';
    const autoplayParam = enableAutoplay ? '&autoplay=1' : '';
    return `<blockquote class="poppro-embed" data-embed-type="${embedType}" data-url="${urlInput}">
  <iframe 
    src="https://poppro.com/embed?url=${encodeURIComponent(urlInput)}${themeParam}${captionParam}${autoplayParam}" 
    width="${customWidth}px" 
    height="${customHeight}px" 
    style="border: 0; box-shadow: 0 4px 20px rgba(0,0,0,0.15); border-radius: 12px; max-width: 100%;"
    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture" 
    allowfullscreen
  ></iframe>
  <script async src="https://poppro.com/embed.js"></script>
</blockquote>`;
  };

  // Close modals
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleFeedbackSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (feedbackEmail && feedbackText) {
      setFeedbackSuccess(true);
      setTimeout(() => {
        setFeedbackOpen(false);
        setFeedbackSuccess(false);
        setFeedbackEmail('');
        setFeedbackText('');
      }, 3000);
    }
  };

  // Translate labels based on Malay/English toggle
  const dict = {
    'Bahasa Melayu': {
      title: 'Poppro Embeds',
      subtitle: 'Tunjukkan kandungan daripada Poppro pada laman web anda. Pilih daripada video, profil, tanda pagar dan bunyi yang popular. Anda juga boleh mencipta senarai main anda sendiri untuk ditemukan oleh orang lain. Embeds memberi anda kebebasan untuk memilih kandungan yang ingin ditunjukkan kepada audiens anda.',
      back: 'Kembali',
      feedback: 'Berikan maklum balas',
      feedbackTitle: 'Maklum Balas Benaman',
      feedbackSub: 'Bantu kami meningkatkan pembina benaman Poppro. Apa-apa cadangan adalah amat berharga.',
      email: 'E-mel Anda',
      message: 'Ulasan atau masalah yang anda hadapi',
      send: 'Hantar Maklum Balas',
      success: 'Terima kasih atas maklum balas anda!',
      tabBasic: 'Benaman Asas',
      tabCustom: 'Cipta benaman anda sendiri',
      hint: 'Masukkan pautan video, profil, tanda pagar atau bunyi Poppro kegemaran anda dan benamkan pautan tersebut pada laman web anda.',
      question: 'Apakah jenis benaman yang ingin anda cipta?',
      urlLabel: 'URL Pautan',
      urlPlaceholder: 'Masukkan URL untuk mencipta kod benaman',
      getCode: 'Dapatkan kod',
      examples: 'Pilih Contoh Pautan segera:',
      previewTitle: 'Pratonton Benaman',
      videoPlaceholder: 'Benaman video. Masukkan URL atau klik "Contoh" di bawah untuk melihat pratonton.',
      profilePlaceholder: 'Benaman profil. Masukkan URL atau klik "Contoh" di bawah untuk melihat pratonton.',
      hashtagPlaceholder: 'Benaman tanda pagar. Masukkan URL atau klik "Contoh" di bawah untuk melihat pratonton.',
      soundPlaceholder: 'Benaman bunyi. Masukkan URL atau klik "Contoh" di bawah untuk melihat pratonton.',
      modalTitle: 'Salin Kod Benaman anda',
      modalSubtitle: 'Lekatkan kod HTML ini ke dalam laman perumah anda.',
      copy: 'Salin Kod',
      copied: 'Ditiru ke Papan Klip!',
      close: 'Tutup',
      playText: 'Menyapu',
      pauseText: 'Jeda'
    },
    'English (UK)': {
      title: 'Poppro Embeds',
      subtitle: 'Display content from Poppro on your website. Choose from trending videos, accounts, hashtags and soundtracks. You can also craft custom playlists to be discovered. Embeds give you the control to render the exact content suited for your audience.',
      back: 'Back',
      feedback: 'Give feedback',
      feedbackTitle: 'Embeds Feedback',
      feedbackSub: 'Help us improve the Poppro embed builder. Any suggestion is highly valued.',
      email: 'Your EmailAddress',
      message: 'Review or issues encountered',
      send: 'Send Feedback',
      success: 'Thank you for your valuable feedback!',
      tabBasic: 'Basic Embeds',
      tabCustom: 'Create your own embed',
      hint: 'Insert your favorite Poppro video, profile, hashtag, or sound link and seamlessly embed the item into your website layout.',
      question: 'What type of embed do you want to create?',
      urlLabel: 'Link URL',
      urlPlaceholder: 'Enter URL code to generate embed snippet',
      getCode: 'Get code',
      examples: 'Quick Example Presets:',
      previewTitle: 'Live Embed Preview',
      videoPlaceholder: 'Video preview placeholder. Enter URL or click "Example" preset to test.',
      profilePlaceholder: 'Profile preview placeholder. Enter URL or click "Example" preset to test.',
      hashtagPlaceholder: 'Hashtag preview placeholder. Enter URL or click "Example" to test.',
      soundPlaceholder: 'Audio preview placeholder. Enter URL or click "Example" to test.',
      modalTitle: 'Copy your embed code',
      modalSubtitle: 'Insert this responsive HTML snippet within your webpage template.',
      copy: 'Copy Code',
      copied: 'Copied to Clipboard!',
      close: 'Close',
      playText: 'Play',
      pauseText: 'Pause'
    }
  };

  const t = dict[selectedLang as keyof typeof dict] || dict['Bahasa Melayu'];

  return (
    <div className="min-h-screen bg-[#070909] text-white font-sans selection:bg-[#00C880]/20 overflow-x-hidden relative pb-16">
      
      {/* Background radial soft lights to establish our premium "emerald / slate" brand theme */}
      <div className="absolute top-0 left-0 right-0 h-[650px] bg-gradient-to-b from-[#00C880]/5 via-transparent to-transparent pointer-events-none" />
      <div className="absolute top-[250px] right-[-250px] w-[500px] h-[500px] rounded-full bg-[#00C880]/4 blur-[130px] pointer-events-none animate-pulse duration-[8000ms]" />
      <div className="absolute top-[750px] left-[-200px] w-[500px] h-[500px] rounded-full bg-teal-500/3 blur-[140px] pointer-events-none" />

      {/* 1. Header Area with exact alignment to mockup */}
      <header className="sticky top-0 z-40 bg-[#070909]/90 backdrop-blur-md border-b border-white/5 py-4 px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          {/* Logo & Back */}
          <div className="flex items-center gap-6">
            <button 
              onClick={() => navigate(-1)}
              className="flex items-center gap-2 text-xs font-semibold text-gray-400 hover:text-[#00C880] transition-colors border border-white/5 bg-white/5 px-3.5 py-1.5 rounded-full hover:border-[#00C880]/30"
              id="back-button"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>{t.back}</span>
            </button>
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-[#00C880] text-sm md:text-base tracking-tighter">Pop<span className="text-white">pro</span></span>
              <span className="text-xs text-gray-400 border-l border-white/10 pl-2">Embeds API</span>
            </div>
          </div>

          {/* Right Header Navigation - Language Selector + Give Feedback */}
          <div className="flex items-center gap-3">
            {/* Lang Dropdown */}
            <div className="relative">
              <button 
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex items-center gap-1.5 text-xs font-bold bg-white/5 hover:bg-white/10 px-3 py-2 rounded-full border border-white/5 transition-all text-gray-300"
                id="lang-selector-button"
              >
                <Globe className="w-3.5 h-3.5 text-emerald-400" />
                <span>{selectedLang}</span>
                <ChevronDown className="w-3 h-3 text-gray-500" />
              </button>
              
              <AnimatePresence>
                {isLangOpen && (
                  <motion.div 
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 6 }}
                    className="absolute right-0 mt-2 w-44 bg-slate-950 border border-white/10 rounded-xl overflow-hidden shadow-2xl z-50 py-1"
                  >
                    {['Bahasa Melayu', 'English (UK)'].map((lang) => (
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

            {/* Give feedback */}
            <button 
              onClick={() => setFeedbackOpen(true)}
              className="bg-white/5 hover:bg-white/10 text-xs text-gray-200 font-bold px-4 py-2 rounded-full border border-white/10 flex items-center gap-1.5 transition-all"
              id="feedback-button"
            >
              <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
              <span>{t.feedback}</span>
            </button>
          </div>

        </div>
      </header>

      {/* Hero Container */}
      <main className="max-w-7xl mx-auto px-6 md:px-12 pt-12">
        
        {/* Intro Grid section exactly replicating the TikTok Embeds layout */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-20">
          
          {/* Left Title block - customized theme */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center gap-1.5 bg-[#00C880]/10 text-[#00C880] border border-[#00C880]/20 px-3 py-1 rounded-full text-xs font-bold tracking-wide">
              <Sparkles className="w-3 h-3 animate-spin duration-3000" />
              <span>TEMPRESI GENERASI BARU 2026</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-none text-white uppercase font-sans">
              POPPRO <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00C880] to-teal-400">EMBEDS</span>
            </h1>

            <p className="text-gray-300 text-sm md:text-base leading-relaxed text-left max-w-2xl font-light">
              {t.subtitle}
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <a 
                href="#embeds-playground"
                className="bg-[#00C880] hover:bg-[#00E090] text-black font-extrabold text-xs md:text-sm px-6 py-3 rounded-full transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#00C880]/20 uppercase tracking-wider"
              >
                <span>Lihat Kod Sandbox</span> &darr;
              </a>
              <button 
                onClick={() => handleApplyPreset('video')}
                className="bg-white/5 hover:bg-white/10 text-white font-bold text-xs md:text-sm px-6 py-3 rounded-full border border-white/10 transition-all uppercase tracking-wider"
              >
                Pratonton Video
              </button>
            </div>
          </div>

          {/* Right Collage Block replicating the top images from original screenshot but with refined emerald overlay styling */}
          <div className="lg:col-span-5 relative">
            <div className="grid grid-cols-2 gap-4">
              
              {/* Image 1 - Top Left */}
              <div className="space-y-4">
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-xl border border-white/5 group">
                  <img 
                    src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&auto=format&fit=crop&q=80" 
                    alt="Creators laughing" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent flex flex-col justify-end p-4">
                    <span className="text-[10px] text-[#00C880] font-mono tracking-widest font-extrabold">TRENDING</span>
                    <span className="text-xs font-bold text-white uppercase">#TravelVlogs</span>
                  </div>
                </div>

                <div 
                  onClick={() => setIsThemesOpen(true)} 
                  className="relative aspect-square rounded-2xl overflow-hidden shadow-xl border border-white/5 group cursor-pointer hover:ring-2 hover:ring-[var(--primary-green)]/50 transition-all"
                  title="Klik untuk Tukar Tema"
                >
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=80" 
                    alt="Active boy" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent flex flex-col justify-end p-4">
                    <span className="text-xs font-bold text-white uppercase">@sound_master</span>
                  </div>
                </div>
              </div>

              {/* Image 2 - Right column stacked higher */}
              <div className="space-y-4 pt-8">
                <div 
                  onClick={() => setIsThemesOpen(true)} 
                  className="relative aspect-[3.2/5] rounded-2xl overflow-hidden shadow-xl border border-white/5 group cursor-pointer hover:ring-2 hover:ring-[var(--primary-green)]/50 transition-all"
                  title="Klik untuk Tukar Tema"
                >
                  <img 
                    src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&auto=format&fit=crop&q=80" 
                    alt="Man recording video" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-[#00C880]/10 mix-blend-color pointer-events-none" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent flex flex-col justify-end p-4">
                    <span className="text-[10px] text-teal-400 font-mono tracking-widest font-extrabold flex items-center gap-1">
                      <Play className="w-2.5 h-2.5 fill-teal-400 text-teal-400" /> MUSIC VIRAL
                    </span>
                    <span className="text-xs font-bold text-white uppercase">Vlog Harian</span>
                  </div>
                </div>

                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl border border-white/5 group">
                  <img 
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=80" 
                    alt="Creative model" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-4">
                    <span className="text-xs font-bold text-white uppercase">#PopproFashion</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </section>

        {/* Separator Section Title - "Lihat Embeds" with tab selector exactly replicating screenshot but using emerald and slate theme */}
        <section id="embeds-playground" className="scroll-mt-24 pt-10 border-t border-white/5">
          <div className="text-center space-y-4 mb-10">
            <h2 className="text-3xl font-extrabold uppercase tracking-tight text-white">
              Lihat Embeds
            </h2>

            {/* Tab layout exactly replicating the mockup button states */}
            <div className="inline-flex bg-slate-950 p-1.5 rounded-full border border-white/10">
              <button
                onClick={() => {
                  setActiveTab('basic');
                  setIsPreviewActive(false);
                  setUrlInput('');
                  setCustomWidth('488');
                  setCustomHeight('878');
                }}
                className={`px-6 py-2.5 rounded-full text-xs font-extrabold tracking-wider transition-all uppercase cursor-pointer ${
                  activeTab === 'basic' 
                    ? 'bg-[#00C880] text-black shadow-lg shadow-[#00C880]/10' 
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
                id="tab-basic-button"
              >
                {t.tabBasic}
              </button>
              
              <button
                onClick={() => {
                  setActiveTab('custom');
                  setUrlInput(examples[embedType]);
                  setIsPreviewActive(true);
                  setCustomWidth('488');
                  setCustomHeight('878');
                }}
                className={`px-6 py-2.5 rounded-full text-xs font-extrabold tracking-wider transition-all uppercase cursor-pointer ${
                  activeTab === 'custom' 
                    ? 'bg-[#00C880] text-black shadow-lg shadow-[#00C880]/10' 
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
                id="tab-custom-button"
              >
                {t.tabCustom}
              </button>
            </div>

            <p className="text-gray-400 text-xs md:text-sm max-w-3xl mx-auto pt-2">
              {t.hint}
            </p>
          </div>

          {/* Interactive Widget Card */}
          <div className="bg-[#091014] border border-white/5 rounded-3xl p-6 lg:p-10 shadow-2xl relative overflow-hidden">
            
            {/* Soft decorative glow inside container */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-radial from-[#00C880]/15 to-transparent pointer-events-none rounded-full" />
            
            {/* Embed Category selection radio group */}
            <div className="space-y-4 mb-8">
              <p className="text-xs font-bold tracking-widest text-[#00C880] uppercase">
                {t.question}
              </p>
              
              {/* Radio Group with active visual highlights */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                
                {/* 1. Video Choice */}
                <label className={`flex items-center gap-3 p-4 rounded-xl border transition-all cursor-pointer ${
                  embedType === 'video' 
                    ? 'bg-[#00C880]/10 border-[#00C880] text-white shadow-md shadow-[#00C880]/5' 
                    : 'bg-black/40 border-white/5 text-gray-400 hover:border-white/15 hover:text-white'
                }`}>
                  <input 
                    type="radio" 
                    name="embedType" 
                    checked={embedType === 'video'} 
                    onChange={() => handleTypeChange('video')}
                    className="sr-only" 
                  />
                  <div className={`w-4 h-4 rounded-full border flex items-center justify-center transition-colors ${
                    embedType === 'video' ? 'border-[#00C880]' : 'border-gray-600'
                  }`}>
                    {embedType === 'video' && <div className="w-2 h-2 rounded-full bg-[#00C880]" />}
                  </div>
                  <Video className={`w-4 h-4 ${embedType === 'video' ? 'text-[#00C880]' : 'text-gray-500'}`} />
                  <span className="text-xs font-bold uppercase tracking-wider">Video</span>
                </label>

                {/* 2. Profil Choice */}
                <label className={`flex items-center gap-3 p-4 rounded-xl border transition-all cursor-pointer ${
                  embedType === 'profile' 
                    ? 'bg-[#00C880]/10 border-[#00C880] text-white shadow-md shadow-[#00C880]/5' 
                    : 'bg-black/40 border-white/5 text-gray-400 hover:border-white/15 hover:text-white'
                }`}>
                  <input 
                    type="radio" 
                    name="embedType" 
                    checked={embedType === 'profile'} 
                    onChange={() => handleTypeChange('profile')}
                    className="sr-only" 
                  />
                  <div className={`w-4 h-4 rounded-full border flex items-center justify-center transition-colors ${
                    embedType === 'profile' ? 'border-[#00C880]' : 'border-gray-600'
                  }`}>
                    {embedType === 'profile' && <div className="w-2 h-2 rounded-full bg-[#00C880]" />}
                  </div>
                  <User className={`w-4 h-4 ${embedType === 'profile' ? 'text-[#00C880]' : 'text-gray-500'}`} />
                  <span className="text-xs font-bold uppercase tracking-wider">Profil</span>
                </label>

                {/* 3. Tanda Pagar Choice */}
                <label className={`flex items-center gap-3 p-4 rounded-xl border transition-all cursor-pointer ${
                  embedType === 'hashtag' 
                    ? 'bg-[#00C880]/10 border-[#00C880] text-white shadow-md shadow-[#00C880]/5' 
                    : 'bg-black/40 border-white/5 text-gray-400 hover:border-white/15 hover:text-white'
                }`}>
                  <input 
                    type="radio" 
                    name="embedType" 
                    checked={embedType === 'hashtag'} 
                    onChange={() => handleTypeChange('hashtag')}
                    className="sr-only" 
                  />
                  <div className={`w-4 h-4 rounded-full border flex items-center justify-center transition-colors ${
                    embedType === 'hashtag' ? 'border-[#00C880]' : 'border-gray-600'
                  }`}>
                    {embedType === 'hashtag' && <div className="w-2 h-2 rounded-full bg-[#00C880]" />}
                  </div>
                  <Hash className={`w-4 h-4 ${embedType === 'hashtag' ? 'text-[#00C880]' : 'text-gray-500'}`} />
                  <span className="text-xs font-bold uppercase tracking-wider">Tanda Pagar</span>
                </label>

                {/* 4. Bunyi Choice */}
                <label className={`flex items-center gap-3 p-4 rounded-xl border transition-all cursor-pointer ${
                  embedType === 'sound' 
                    ? 'bg-[#00C880]/10 border-[#00C880] text-white shadow-md shadow-[#00C880]/5' 
                    : 'bg-black/40 border-white/5 text-gray-400 hover:border-white/15 hover:text-white'
                }`}>
                  <input 
                    type="radio" 
                    name="embedType" 
                    checked={embedType === 'sound'} 
                    onChange={() => handleTypeChange('sound')}
                    className="sr-only" 
                  />
                  <div className={`w-4 h-4 rounded-full border flex items-center justify-center transition-colors ${
                    embedType === 'sound' ? 'border-[#00C880]' : 'border-gray-600'
                  }`}>
                    {embedType === 'sound' && <div className="w-2 h-2 rounded-full bg-[#00C880]" />}
                  </div>
                  <Music className={`w-4 h-4 ${embedType === 'sound' ? 'text-[#00C880]' : 'text-gray-500'}`} />
                  <span className="text-xs font-bold uppercase tracking-wider">Bunyi</span>
                </label>

              </div>
            </div>

            {/* Custom layout mirroring screenshot with URL Input & Live Frame Preview */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
              
              {/* LEFT Preview Box - Exact visual placement as the TikTok Embed mockup but themed */}
              <div className="lg:col-span-5 flex flex-col justify-center items-center bg-black/50 border-2 border-dashed border-white/10 rounded-2xl p-6 min-h-[380px] text-center relative group/preview">
                
                {/* Active Size Indicator Badge */}
                <div className="absolute top-3 right-3 bg-zinc-950/85 border border-[#00C880]/20 px-2 py-1 rounded text-[9.5px] font-mono text-[#00C880] flex items-center gap-1 z-10 shadow-sm">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#00C880] animate-pulse"></span>
                  <span>SIZE: {customWidth} × {customHeight} px</span>
                </div>
                
                <AnimatePresence mode="wait">
                  {!isPreviewActive ? (
                    <motion.div 
                      key="inactive"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      className="space-y-4 max-w-xs"
                    >
                      <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-500 mx-auto">
                        {embedType === 'video' && <Video className="w-6 h-6" />}
                        {embedType === 'profile' && <User className="w-6 h-6" />}
                        {embedType === 'hashtag' && <Hash className="w-6 h-6" />}
                        {embedType === 'sound' && <Music className="w-6 h-6" />}
                      </div>
                      <p className="text-xs font-bold text-gray-300">
                        {embedType === 'video' && 'Pratonton Video'}
                        {embedType === 'profile' && 'Pratonton Profile'}
                        {embedType === 'hashtag' && 'Pratonton Tanda Pagar'}
                        {embedType === 'sound' && 'Pratonton Bunyi'}
                      </p>
                      <p className="text-[11px] text-gray-500 leading-relaxed font-mono">
                        {embedType === 'video' && t.videoPlaceholder}
                        {embedType === 'profile' && t.profilePlaceholder}
                        {embedType === 'hashtag' && t.hashtagPlaceholder}
                        {embedType === 'sound' && t.soundPlaceholder}
                      </p>
                    </motion.div>
                  ) : (
                    <motion.div 
                      key="active"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="w-full h-full flex flex-col justify-center items-center"
                    >
                      {/* Sub-components rendering gorgeous simulated widgets based on type */}

                      {/* A. If Video type embed */}
                      {embedType === 'video' && (
                        <div className={`w-full max-w-[280px] rounded-xl overflow-hidden shadow-2xl border transition-all ${
                          playerTheme === 'dark' ? 'bg-[#0f1418] border-white/10 text-white' : 'bg-white border-gray-200 text-black'
                        }`}>
                          {/* Visual Header */}
                          <div className="p-3.5 border-b border-white/5 flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <div className="w-7 h-7 rounded-full bg-emerald-500/20 flex items-center justify-center font-black text-[10px] text-[#00C880]">G</div>
                              <div>
                                <p className="text-[10px] font-bold">@gaming_world</p>
                                <p className="text-[8px] text-gray-400">Poppro Partner</p>
                              </div>
                            </div>
                            <button className="text-[9px] bg-[#00C880] text-black font-extrabold px-2.5 py-1 rounded-full uppercase">Follow</button>
                          </div>

                          {/* Video Box Canvas */}
                          <div className="relative aspect-[9/13] bg-black group/player cursor-pointer" onClick={() => setIsPlaying(!isPlaying)}>
                            <img 
                              src="https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&auto=format&fit=crop&q=80" 
                              alt="Gaming Video Render" 
                              className={`w-full h-full object-cover transition-all ${isPlaying ? 'opacity-90 animate-pulse duration-[3000ms]' : 'opacity-60'}`}
                              referrerPolicy="no-referrer"
                            />
                            
                            {/* Play Overlay indicator */}
                            <div className="absolute inset-0 flex items-center justify-center bg-black/10 opacity-0 group-hover/player:opacity-100 transition-opacity">
                              <div className="w-12 h-12 rounded-full bg-[#00C880]/80 flex items-center justify-center text-black">
                                {isPlaying ? <Pause className="w-5 h-5 fill-black" /> : <Play className="w-5 h-5 fill-black" />}
                              </div>
                            </div>

                            {/* Live Floating statistics */}
                            <div className="absolute right-2.5 bottom-12 flex flex-col gap-3 text-white z-10">
                              <button 
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setIsLiked(!isLiked);
                                  setLikeCount(isLiked ? 128.4 : 129.4);
                                }}
                                className="flex flex-col items-center group/btn"
                              >
                                <div className={`w-8 h-8 rounded-full bg-black/60 flex items-center justify-center border border-white/10 ${isLiked ? 'text-rose-500' : 'text-white'}`}>
                                  <Heart className="w-4 h-4 fill-current" />
                                </div>
                                <span className="text-[8px] font-mono mt-0.5">{likeCount}K</span>
                              </button>
                              
                              <div className="flex flex-col items-center">
                                <div className="w-8 h-8 rounded-full bg-black/60 flex items-center justify-center border border-white/10">
                                  <MessageSquare className="w-3.5 h-3.5" />
                                </div>
                                <span className="text-[8px] font-mono mt-0.5">384</span>
                              </div>
                            </div>

                            {/* Floating bottom progress */}
                            <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20">
                              <div className="h-full bg-[#00C880]" style={{ width: isPlaying ? '45%' : '15%' }} />
                            </div>
                          </div>

                          {/* Caption */}
                          {showCaption && (
                            <div className="p-3.5 space-y-1.5 text-left">
                              <p className="text-[10px] leading-relaxed">
                                Epic gaming setup highlights for the final tournament render. <span className="text-[#00C880] font-mono">#fyp</span> <span className="text-teal-400 font-mono">#levelup</span>
                              </p>
                              <div className="flex items-center gap-1.5 text-[8px] text-gray-400 font-mono">
                                <Music className="w-2.5 h-2.5" /> 
                                <span className="truncate">Sunset Vibes - sound_master</span>
                              </div>
                            </div>
                          )}
                        </div>
                      )}

                      {/* B. If Profile type embed */}
                      {embedType === 'profile' && (
                        <div className={`w-full max-w-[310px] rounded-xl overflow-hidden shadow-2xl border transition-all ${
                          playerTheme === 'dark' ? 'bg-[#0f1418] border-white/10 text-white' : 'bg-white border-gray-200 text-black'
                        }`}>
                          <div className="p-5 text-center space-y-4">
                            <div className="relative inline-block">
                              <img 
                                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80" 
                                alt="Creative Mind Avatar" 
                                className="w-16 h-16 rounded-full object-cover border-2 border-[#00C880]"
                                referrerPolicy="no-referrer"
                              />
                              <div className="absolute bottom-0 right-0 bg-[#00C880] p-1 rounded-full text-black">
                                <Check className="w-2.5 h-2.5 stroke-[4.5]" />
                              </div>
                            </div>

                            <div className="space-y-0.5">
                              <h4 className="text-xs font-bold tracking-tight">Creative Mind</h4>
                              <p className="text-[10px] text-gray-400 font-mono">@creative_mind</p>
                            </div>

                            <div className="flex justify-center items-center gap-6 py-2 border-y border-white/5 font-mono text-[10px]">
                              <div>
                                <p className="font-extrabold text-white">492K</p>
                                <p className="text-[8px] text-gray-500">PENGASIH</p>
                              </div>
                              <div className="w-px h-6 bg-white/5" />
                              <div>
                                <p className="font-extrabold text-white">8.5M</p>
                                <p className="text-[8px] text-gray-500">SUKAAN</p>
                              </div>
                              <div className="w-px h-6 bg-white/5" />
                              <div>
                                <p className="font-extrabold text-white">128</p>
                                <p className="text-[8px] text-gray-500">VIDEO</p>
                              </div>
                            </div>

                            <button className="w-full bg-[#00C880] hover:bg-[#00E090] text-black font-extrabold text-xs py-2 rounded-lg flex items-center justify-center gap-1 uppercase transition-colors">
                              <UserPlus className="w-3.5 h-3.5" /> Follow on Poppro
                            </button>
                            
                            {/* Grid preview videos */}
                            <div className="grid grid-cols-3 gap-1.5 pt-1">
                              {[
                                'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=200',
                                'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=200',
                                'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=200'
                              ].map((img, i) => (
                                <div key={i} className="aspect-square bg-slate-850 rounded-md overflow-hidden relative group/grid flex items-end p-1">
                                  <img src={img} alt="Video mock" className="w-full h-full object-cover opacity-80" referrerPolicy="no-referrer" />
                                  <span className="absolute bottom-1 left-1 font-mono text-[7px] text-white flex items-center gap-0.5 bg-black/60 px-1 py-0.5 rounded">
                                    <Play className="w-1.5 h-1.5 fill-current" /> 18K
                                  </span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}

                      {/* C. If Hashtag type embed */}
                      {embedType === 'hashtag' && (
                        <div className={`w-full max-w-[310px] rounded-xl overflow-hidden shadow-2xl border transition-all ${
                          playerTheme === 'dark' ? 'bg-[#0f1418] border-white/10 text-white' : 'bg-white border-gray-200 text-black'
                        }`}>
                          <div className="p-4 space-y-4">
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 rounded-xl bg-[#00C880]/10 flex items-center justify-center text-[#00C880] border border-[#00C880]/20 font-bold text-lg">
                                #
                              </div>
                              <div className="text-left">
                                <h4 className="text-xs font-black">malaysiacreator</h4>
                                <p className="text-[9px] text-[#00C880] font-mono">1.2 Trillion Views</p>
                              </div>
                            </div>

                            <p className="text-[10px] text-gray-400 text-left leading-relaxed">
                              Sertai tag rasmi untuk pencipta tempatan Malaysia. Tunjukkan hasil karya seni, vlog dan cabaran memasak anda sekarang!
                            </p>

                            <button className="w-full bg-[#00C880]/10 text-[#00C880] hover:bg-[#00C880]/20 border border-[#00C880]/30 font-bold text-[10px] py-1.5 rounded-lg flex items-center justify-center gap-1 uppercase transition-colors">
                              <Hash className="w-3.5 h-3.5" /> View Challenge Hub
                            </button>

                            {/* Feed grid rows */}
                            <div className="grid grid-cols-2 gap-2 pt-2">
                              {[
                                { view: '4.2M', tag: '@sheila_vlog', img: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=200' },
                                { view: '920K', tag: '@chef_danial', img: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200' }
                              ].map((item, i) => (
                                <div key={i} className="aspect-[4/5] bg-slate-900 rounded-lg overflow-hidden relative group/row flex flex-col justify-end p-1.5">
                                  <img src={item.img} alt="Post preview" className="absolute inset-0 w-full h-full object-cover opacity-70" referrerPolicy="no-referrer" />
                                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent pointer-events-none" />
                                  <div className="relative text-left space-y-0.5">
                                    <p className="text-[8px] font-bold text-white truncate">{item.tag}</p>
                                    <p className="text-[7px] text-gray-400 font-mono">{item.view} views</p>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}

                      {/* D. If Sound/Music type embed */}
                      {embedType === 'sound' && (
                        <div className={`w-full max-w-[310px] rounded-xl overflow-hidden shadow-2xl border transition-all ${
                          playerTheme === 'dark' ? 'bg-[#0f1418] border-white/10 text-white' : 'bg-white border-gray-200 text-black'
                        }`}>
                          <div className="p-5 space-y-4">
                            <div className="flex items-center gap-4">
                              {/* Rotating vinyl record effect */}
                              <div className="relative">
                                <div className="w-14 h-14 rounded-full bg-slate-950 border border-white/5 flex items-center justify-center relative animate-spin duration-15000">
                                  <div className="w-4 h-4 rounded-full bg-black border border-white/10 flex items-center justify-center">
                                    <div className="w-1 h-1 rounded-full bg-white" />
                                  </div>
                                </div>
                                <div className="absolute inset-0 flex items-center justify-center text-emerald-400 pointer-events-none">
                                  <Music className="w-4 h-4" />
                                </div>
                              </div>

                              <div className="text-left flex-1 min-w-0">
                                <h4 className="text-xs font-black truncate">Sunset Vibes (Acoustic Cover)</h4>
                                <p className="text-[9px] text-gray-400 truncate">Symphony Collective</p>
                                <p className="text-[8.5px] text-[#00C880] font-mono mt-1">428.9K Videos Posted</p>
                              </div>
                            </div>

                            {/* Audio play bar waveform visualization */}
                            <div className="bg-black/40 rounded-lg p-3 space-y-2 border border-white/5">
                              <div className="flex items-center justify-between text-[7px] text-gray-500 font-mono">
                                <span>0:45</span>
                                <div className="flex gap-0.5 items-end h-4">
                                  <span className="w-0.5 bg-[#00C880] h-2 animate-bounce" style={{ animationDelay: '0.1s' }} />
                                  <span className="w-0.5 bg-emerald-500 h-3 animate-bounce" style={{ animationDelay: '0.3s' }} />
                                  <span className="w-0.5 bg-[#00C880] h-4 animate-bounce" style={{ animationDelay: '0s' }} />
                                  <span className="w-0.5 bg-sky-400 h-1 animate-bounce" style={{ animationDelay: '0.5s' }} />
                                  <span className="w-0.5 bg-[#00C880] h-2.5 animate-bounce" style={{ animationDelay: '0.2s' }} />
                                </div>
                                <span>3:12</span>
                              </div>
                              <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
                                <div className="h-full bg-[#00C880] rounded-full w-2/5" />
                              </div>
                            </div>

                            <button className="w-full bg-[#00C880] hover:bg-[#00E090] text-black font-extrabold text-[10px] py-1.5 rounded-lg flex items-center justify-center gap-1 uppercase transition-colors">
                              <Music className="w-3.5 h-3.5 text-black" /> Gunakan Bunyi Ini
                            </button>

                            {/* Mini Creator gallery */}
                            <div className="flex items-center justify-between text-[8px] text-gray-500 pt-1">
                              <span>Dipopularkan oleh:</span>
                              <div className="flex -space-x-1.5 overflow-hidden">
                                <img className="inline-block h-4 w-4 rounded-full ring-2 ring-[#0f1418] object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=50" alt="" referrerPolicy="no-referrer" />
                                <img className="inline-block h-4 w-4 rounded-full ring-2 ring-[#0f1418] object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50" alt="" referrerPolicy="no-referrer" />
                                <img className="inline-block h-4 w-4 rounded-full ring-2 ring-[#0f1418] object-cover" src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=50" alt="" referrerPolicy="no-referrer" />
                              </div>
                            </div>

                          </div>
                        </div>
                      )}

                    </motion.div>
                  )}
                </AnimatePresence>

              </div>

              {/* RIGHT Input/Control Panel */}
              <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
                
                {/* Basic / Customized Controls panel wrapper */}
                <div className="space-y-6">
                  
                  {/* General input block */}
                  <div className="space-y-2 text-left">
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-widest block font-mono">
                      {t.urlLabel}
                    </label>
                    <div className="flex gap-2">
                      <div className="relative flex-1">
                        <input 
                          type="text" 
                          value={urlInput}
                          onChange={(e) => {
                            setUrlInput(e.target.value);
                            setIsPreviewActive(e.target.value.trim().length > 0);
                          }}
                          placeholder={t.urlPlaceholder}
                          className="w-full bg-slate-950 border border-white/10 focus:border-[#00C880] rounded-xl px-4 py-3.5 text-sm text-white placeholder-gray-500 font-sans focus:outline-none focus:ring-1 focus:ring-[#00C880]/30 transition-all"
                          id="url-input"
                        />
                        {urlInput && (
                          <button 
                            onClick={() => {
                              setUrlInput('');
                              setIsPreviewActive(false);
                            }}
                            className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-500 hover:text-white"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        )}
                      </div>

                      {/* CTA Button Trigger */}
                      <button
                        onClick={handleGetCode}
                        disabled={!urlInput.trim()}
                        className={`font-semibold text-xs py-3 px-6 rounded-xl uppercase transition-all flex items-center justify-center gap-1 cursor-pointer ${
                          urlInput.trim() 
                            ? 'bg-[#00C880] hover:bg-[#00E090] text-black font-extrabold shadow-lg shadow-[#00C880]/15' 
                            : 'bg-white/5 border border-white/5 text-gray-500 cursor-not-allowed'
                        }`}
                        id="get-code-button"
                      >
                        <Code className="w-3.5 h-3.5" />
                        <span>{t.getCode}</span>
                      </button>
                    </div>
                  </div>

                  {/* Examples Quick Buttons (mockups) */}
                  <div className="space-y-2 text-left bg-slate-950/40 p-4 rounded-xl border border-white/5">
                    <p className="text-[10px] font-mono text-gray-500 uppercase tracking-wider">
                      {t.examples}
                    </p>
                    <div className="flex flex-wrap gap-2 pt-1">
                      <button 
                        onClick={() => {
                          setEmbedType('video');
                          handleApplyPreset('video');
                        }}
                        className={`text-[9.5px] font-bold px-3 py-1.5 rounded-md border flex items-center gap-1 uppercase tracking-wider cursor-pointer ${
                          embedType === 'video' && isPreviewActive 
                            ? 'bg-[#00C880]/15 text-[#00C880] border-[#00C880]/30' 
                            : 'bg-white/5 text-gray-400 border-white/5 hover:text-white'
                        }`}
                      >
                        <Video className="w-3 h-3" /> Contoh Video
                      </button>
                      
                      <button 
                        onClick={() => {
                          setEmbedType('profile');
                          handleApplyPreset('profile');
                        }}
                        className={`text-[9.5px] font-bold px-3 py-1.5 rounded-md border flex items-center gap-1 uppercase tracking-wider cursor-pointer ${
                          embedType === 'profile' && isPreviewActive 
                            ? 'bg-[#00C880]/15 text-[#00C880] border-[#00C880]/30' 
                            : 'bg-white/5 text-gray-400 border-white/5 hover:text-white'
                        }`}
                      >
                        <User className="w-3 h-3" /> Contoh Profil
                      </button>

                      <button 
                        onClick={() => {
                          setEmbedType('hashtag');
                          handleApplyPreset('hashtag');
                        }}
                        className={`text-[9.5px] font-bold px-3 py-1.5 rounded-md border flex items-center gap-1 uppercase tracking-wider cursor-pointer ${
                          embedType === 'hashtag' && isPreviewActive 
                            ? 'bg-[#00C880]/15 text-[#00C880] border-[#00C880]/30' 
                            : 'bg-white/5 text-gray-400 border-white/5 hover:text-white'
                        }`}
                      >
                        <Hash className="w-3 h-3" /> Contoh Hashtag
                      </button>

                      <button 
                        onClick={() => {
                          setEmbedType('sound');
                          handleApplyPreset('sound');
                        }}
                        className={`text-[9.5px] font-bold px-3 py-1.5 rounded-md border flex items-center gap-1 uppercase tracking-wider cursor-pointer ${
                          embedType === 'sound' && isPreviewActive 
                            ? 'bg-[#00C880]/15 text-[#00C880] border-[#00C880]/30' 
                            : 'bg-white/5 text-gray-400 border-white/5 hover:text-white'
                        }`}
                      >
                        <Music className="w-3 h-3" /> Contoh Bunyi
                      </button>
                    </div>
                  </div>

                  {/* Secondary interactive config tab parameters (Cipta benaman anda sendiri) */}
                  {activeTab === 'custom' && (
                    <motion.div 
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      className="border-t border-white/5 pt-6 space-y-5 text-left"
                    >
                      <div className="flex items-center gap-2 mb-2 text-xs font-bold text-gray-400 uppercase tracking-widest font-mono">
                        <Sliders className="w-3.5 h-3.5 text-emerald-400" />
                        <span>Kustomisasi Parameter Benaman</span>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {/* Width / height inputs */}
                        <div className="space-y-1.5">
                          <span className="text-[10px] text-gray-400 font-mono">WIDTH (Pixel)</span>
                          <input 
                            type="number" 
                            value={customWidth}
                            onChange={(e) => setCustomWidth(e.target.value)}
                            className="w-full bg-slate-950 border border-white/10 rounded px-3 py-1.5 text-xs text-white"
                          />
                        </div>
                        <div className="space-y-1.5">
                          <span className="text-[10px] text-gray-400 font-mono">HEIGHT (Pixel)</span>
                          <input 
                            type="number" 
                            value={customHeight}
                            onChange={(e) => setCustomHeight(e.target.value)}
                            className="w-full bg-slate-950 border border-white/10 rounded px-3 py-1.5 text-xs text-white"
                          />
                        </div>
                      </div>

                      {/* Enforced Size Info Banner and Reset Trigger for 488x878 as strictly requested */}
                      <div className="bg-[#00C880]/5 border border-[#00C880]/15 rounded-lg p-3 space-y-2 mt-2">
                        <div className="flex items-center gap-2 text-[10.5px] font-bold text-[#00C880]">
                          <Check className="w-3.5 h-3.5 stroke-[3]" />
                          <span>Dimensi Rasmi Tersedia: 488 × 878 px</span>
                        </div>
                        <p className="text-[10px] text-gray-400 leading-relaxed font-sans">
                          Sistem diprogramkan mengikut arahan khusus anda. Saiz optimum benaman ditetapkan kepada <strong className="text-white">488 × 878 piksel</strong> untuk mengelakkan ralat paparan.
                        </p>
                        <button
                          type="button"
                          onClick={() => {
                            setCustomWidth('488');
                            setCustomHeight('878');
                          }}
                          className="text-[9px] bg-[#00C880] hover:bg-[#00E090] text-black font-extrabold px-3 py-1 rounded-md uppercase tracking-wider transition-colors cursor-pointer"
                        >
                          Set Semula ke 488 × 878 px
                        </button>
                      </div>

                      <div className="space-y-3 pt-2">
                        {/* Checkbox show caption */}
                        <label className="flex items-center gap-2.5 text-xs text-gray-300 cursor-pointer">
                          <input 
                            type="checkbox" 
                            checked={showCaption} 
                            onChange={(e) => setShowCaption(e.target.checked)}
                            className="rounded border-white/10 bg-slate-950 text-[#00C880] focus:ring-0 focus:ring-offset-0"
                          />
                          <span>Sertakan kapsyen pembikin (Show Caption)</span>
                        </label>
                        
                        {/* Checkbox autoplay */}
                        <label className="flex items-center gap-2.5 text-xs text-gray-300 cursor-pointer">
                          <input 
                            type="checkbox" 
                            checked={enableAutoplay} 
                            onChange={(e) => setEnableAutoplay(e.target.checked)}
                            className="rounded border-white/10 bg-slate-950 text-[#00C880] focus:ring-0 focus:ring-offset-0"
                          />
                          <span>Mainkan secara automatik (Autoplay video)</span>
                        </label>
                      </div>

                      <div className="space-y-1.5 pt-1">
                        <span className="text-[10px] text-gray-400 font-mono uppercase block">Pemain Tema</span>
                        <div className="flex gap-2">
                          <button 
                            onClick={() => setPlayerTheme('dark')}
                            className={`flex-1 text-[9.5px] font-bold py-1 px-3 border rounded uppercase tracking-wider transition-colors cursor-pointer ${
                              playerTheme === 'dark' ? 'bg-[#00C880]/15 text-[#00C880] border-[#00C880]' : 'border-white/5 text-gray-400'
                            }`}
                          >
                            Tema Gelap (Dark)
                          </button>
                          <button 
                            onClick={() => setPlayerTheme('light')}
                            className={`flex-1 text-[9.5px] font-bold py-1 px-3 border rounded uppercase tracking-wider transition-colors cursor-pointer ${
                              playerTheme === 'light' ? 'bg-white text-black border-white' : 'border-white/5 text-gray-400'
                            }`}
                          >
                            Tema Cerah (Light)
                          </button>
                        </div>
                      </div>

                    </motion.div>
                  )}

                </div>

                {/* Info Disclaimer */}
                <div className="text-[10px] text-gray-500 font-mono text-left leading-relaxed">
                  Laman ini dioptimumkan sepenuhnya untuk pematuhan GDPR, perlindungan kuki, dan had tindak balas server API Poppro. Setiap rujukan dilesenkan di bawah terma API Pembangun 2026.
                </div>

              </div>

            </div>

          </div>

        </section>

      </main>

      {/* Footer Group */}
      <footer className="max-w-7xl mx-auto px-6 md:px-12 mt-28 pt-10 border-t border-white/5 text-center">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>© 2026 Poppro Embeds API. Hak Cipta Terpelihara.</p>
          <div className="flex gap-4">
            <Link to="/terms" className="hover:underline">Terma Perkhidmatan</Link>
            <Link to="/safety" className="hover:underline">Dasar Keselamatan</Link>
            <Link to="/developers" className="hover:underline">Hub Pembangun</Link>
          </div>
        </div>
      </footer>

      {/* 1. Modal Output Embeds Code Dialog */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleCloseModal}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />
            
            <motion.div 
              initial={{ scale: 0.95, opacity: 0, y: 15 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 15 }}
              className="bg-slate-950 border border-white/10 rounded-2xl p-6 md:p-8 max-w-2xl w-full relative z-10 shadow-2xl text-left"
            >
              <button 
                onClick={handleCloseModal}
                className="absolute right-4 top-4 text-gray-500 hover:text-white bg-white/5 hover:bg-white/10 p-2 rounded-full transition-colors"
                id="close-modal-button"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg md:text-xl font-extrabold uppercase tracking-tight text-white flex items-center gap-2">
                    <Code className="w-5 h-5 text-emerald-400" />
                    {t.modalTitle}
                  </h3>
                  <p className="text-xs text-gray-400 mt-1">
                    {t.modalSubtitle}
                  </p>
                </div>

                {/* Script box */}
                <div className="bg-[#091014] border border-white/10 rounded-xl p-4 relative font-mono text-[10.5px] leading-relaxed text-emerald-400/90 max-h-[220px] overflow-y-auto overflow-x-hidden relative group/code">
                  <pre className="whitespace-pre-wrap break-all pr-8 select-all">
                    {generateEmbedCode()}
                  </pre>
                  
                  {/* Floating Action Badge */}
                  <div className="absolute right-3.5 top-3.5">
                    <button 
                      onClick={handleCopyCode}
                      className="bg-white/5 hover:bg-white/10 text-white border border-white/10 p-2 rounded-lg transition-all flex items-center gap-1.5 text-[9.5px] font-bold uppercase cursor-pointer"
                      id="copy-code-badge"
                    >
                      {isCopied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-gray-400" />}
                      <span>{isCopied ? t.copied : t.copy}</span>
                    </button>
                  </div>
                </div>

                <div className="flex gap-3 justify-end">
                  <button 
                    onClick={handleCloseModal}
                    className="bg-white/5 hover:bg-white/10 text-white font-bold text-xs px-5 py-2.5 rounded-xl border border-white/10 uppercase transition-all"
                  >
                    {t.close}
                  </button>
                  <button 
                    onClick={handleCopyCode}
                    className="bg-[#00C880] hover:bg-[#00E090] text-black font-extrabold text-xs px-6 py-2.5 rounded-xl uppercase transition-all flex items-center gap-1.5"
                    id="copy-code-btn"
                  >
                    <Copy className="w-3.5 h-3.5" />
                    <span>{t.copy}</span>
                  </button>
                </div>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* 2. Modal Feedback Form Dialog */}
      <AnimatePresence>
        {feedbackOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setFeedbackOpen(false)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />
            
            <motion.div 
              initial={{ scale: 0.95, opacity: 0, y: 15 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 15 }}
              className="bg-[#091014] border border-white/10 rounded-2xl p-6 max-w-md w-full relative z-10 shadow-2xl text-left"
            >
              <button 
                onClick={() => setFeedbackOpen(false)}
                className="absolute right-4 top-4 text-gray-500 hover:text-white bg-white/5 p-1.5 rounded-full"
              >
                <X className="w-4 h-4" />
              </button>

              <form onSubmit={handleFeedbackSubmit} className="space-y-4">
                <div className="space-y-1">
                  <h3 className="text-base font-extrabold text-white flex items-center gap-2">
                    <MessageSquare className="w-5 h-5 text-emerald-400" />
                    {t.feedbackTitle}
                  </h3>
                  <p className="text-[10px] text-gray-400">
                    {t.feedbackSub}
                  </p>
                </div>

                {feedbackSuccess ? (
                  <motion.div 
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-6 text-center space-y-2 bg-[#00C880]/10 border border-[#00C880]/20 rounded-xl"
                  >
                    <div className="w-8 h-8 rounded-full bg-[#00C880] flex items-center justify-center text-black font-bold mx-auto leading-none">
                      <Check className="w-4 h-4 stroke-[3]" />
                    </div>
                    <p className="text-xs font-bold text-emerald-400">{t.success}</p>
                  </motion.div>
                ) : (
                  <>
                    <div className="space-y-1">
                      <label className="text-[9.5px] font-mono text-gray-400 uppercase tracking-wider block">{t.email}</label>
                      <input 
                        type="email" 
                        required
                        value={feedbackEmail}
                        onChange={(e) => setFeedbackEmail(e.target.value)}
                        placeholder="contoh@melayu.com"
                        className="w-full bg-slate-950 border border-white/10 focus:border-[#00C880] rounded px-3 py-2 text-xs text-white focus:outline-none"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-[9.5px] font-mono text-gray-400 uppercase tracking-wider block">{t.message}</label>
                      <textarea 
                        required
                        rows={4}
                        value={feedbackText}
                        onChange={(e) => setFeedbackText(e.target.value)}
                        placeholder="Masukkan maklum balas anda..."
                        className="w-full bg-slate-950 border border-white/10 focus:border-[#00C880] rounded px-3 py-2 text-xs text-white focus:outline-none resize-none"
                      />
                    </div>

                    <button 
                      type="submit"
                      className="w-full bg-[#00C880] hover:bg-[#00E090] text-black text-xs font-extrabold py-2.5 rounded-lg uppercase tracking-wider transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <span>{t.send}</span>
                    </button>
                  </>
                )}
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {isThemesOpen && (
        <ThemesPage onClose={() => setIsThemesOpen(false)} />
      )}

    </div>
  );
}
