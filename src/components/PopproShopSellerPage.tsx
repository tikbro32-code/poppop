import React, { useState, useEffect } from 'react';
import { 
  ArrowLeft, 
  ChevronDown, 
  ChevronUp, 
  Smartphone, 
  Mail, 
  ShieldCheck, 
  Store, 
  ArrowRight, 
  CheckCircle, 
  DollarSign, 
  Zap, 
  Play, 
  Video, 
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  Info,
  Sun,
  Moon
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useAuth } from '../data/context/AuthContext';
import { useUI } from '../data/context/UIContext';
import { Link, useNavigate } from 'react-router-dom';

export default function PopproShopSellerPage() {
  const { user, openLoginModal } = useAuth();
  const navigate = useNavigate();

  // Dynamic Theme states
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem('poppro-theme') === 'dark';
  });

  useEffect(() => {
    const savedTheme = localStorage.getItem('poppro-theme') || 'light';
    const savedText = localStorage.getItem('poppro-text-color') || '#00C880';
    const savedBg = localStorage.getItem('poppro-bg-color') || '#FFFFFF';
    
    setIsDarkMode(savedTheme === 'dark');
    document.documentElement.setAttribute('data-theme', savedTheme);
    document.documentElement.style.setProperty('--primary-green', savedText);
    document.documentElement.style.setProperty('--bg-dark', savedBg);
    document.body.style.backgroundColor = savedBg;
  }, []);

  const toggleTheme = () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('poppro-theme', newTheme);
    setIsDarkMode(newTheme === 'dark');
    
    if (newTheme === 'light') {
      document.documentElement.style.setProperty('--bg-dark', '#FFFFFF');
      document.body.style.backgroundColor = '#FFFFFF';
      localStorage.setItem('poppro-bg-color', '#FFFFFF');
    } else {
      document.documentElement.style.setProperty('--bg-dark', '#0A1118');
      document.body.style.backgroundColor = '#0A1118';
      localStorage.setItem('poppro-bg-color', '#0A1118');
    }
    // Also trigger global storage event so any other listners can update
    window.dispatchEvent(new Event('storage'));
  };

  // Navigation tab for the form: registration vs login (mirroring official TikTok Shop Seller Center)
  const [authTab, setAuthTab] = useState<'register' | 'login'>('register');
  const [loginData, setLoginData] = useState({
    contact: '',
    password: '',
    rememberMe: true,
  });

  // Registration states
  const [formData, setFormData] = useState({
    contact: '',
    password: '',
    verificationCode: '',
    shopName: '',
    businessType: 'individual', // individual, corporation
  });
  const [registerStep, setRegisterStep] = useState(1); // 1: Contact, 2: Verification & Shop detail, 3: Success Approval
  const [errorMsg, setErrorMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  // Dropdown states for navigation
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  // FAQ accordion states
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  // Active onboarding step accordion
  const [activeStep, setActiveStep] = useState<number>(0);

  // Case study interactive state
  const [activeCaseStudy, setActiveCaseStudy] = useState(0);

  // Membeli-belah dipermudahkan active preview
  const [activePeristiwa, setActivePeristiwa] = useState(0);

  const testimonials = [
    {
      company: "Wyze",
      quote: "Kami baru sahaja berada di Poppro Shop selama beberapa bulan, dan kami boleh katakan dengan yakin, ia terasa seperti sesuatu yang besar. Seperti membeli-belah internet pada akhir 90-an yang sangat besar. Kami telah terpegun dengan keputusan awal. Perdagangan yang dipacu kandungan kelihatan seperti anjakan paradigma seterusnya dalam membeli-belah dalam talian dengan Poppro menerajui jalan sebagai platform e-dagang besar seterusnya di AS untuk menyaingi mana-mana platform e-dagang utama di luar sana.",
      badge: "Inovasi Rumah Pintar",
      gmv: "> $1 juta",
      gmvDesc: "GMV afiliasi pencipta (60 hari)",
      reach: "> 100 juta",
      reachDesc: "Paparan kandungan (60 hari)",
      peakGmv: "$100K",
      peakGmvDesc: "Jumlah GMV puncak (video tunggal)"
    },
    {
      company: "Infinix Malaysia",
      quote: "Melancarkan model peranti pintar terbaru kami melalui siaran langsung eksklusif Poppro Shop memberikan kami lonjakan jualan luar biasa. Interaksi masa nyata bersama penonton membuktikan pembeli masa kini mahukan perjalanan mudah dari tontonan terus ke pembayaran pantas tanpa perlu keluar dari aplikasi.",
      badge: "Peralatan Elektronik",
      gmv: "> RM450 Ribu",
      gmvDesc: "Hasil siaran langsung 24 jam",
      reach: "> 8.5 juta",
      reachDesc: "Tanda suka & tontonan serentak",
      peakGmv: "RM65K",
      peakGmvDesc: "Jualan puncak dalam masa satu jam"
    },
    {
      company: "EcoFlow",
      quote: "Dengan sokongan kempen ganjaran penjual baharu, kami berjaya membina komuniti peminat aktiviti luar secara automatik. Video pendek kami yang memaparkan keunikan bateri mudah alih kami terus ditukar kepada pesanan dalam masa nyata menerusi butang beg kuning.",
      badge: "Gaya Hidup & Kuasa Solar",
      gmv: "> $350K",
      gmvDesc: "Jualan dikesan menerusi video pendek",
      reach: "> 15 juta",
      reachDesc: "Paparan hashtag rasmi",
      peakGmv: "650+ unit",
      peakGmvDesc: "Stesen kuasa terjual dalam seminggu"
    }
  ];

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');
    if (!loginData.contact.trim()) {
      setErrorMsg('Sila masukkan nombor telefon atau emel anda.');
      return;
    }
    if (!loginData.password.trim()) {
      setErrorMsg('Sila masukkan kata laluan anda.');
      return;
    }
    // Simulate login success by navigating/redirecting to Poppro Shop
    setSuccessMsg('Log masuk berjaya! Membuka Portal Penjual...');
    setTimeout(() => {
      navigate('/shop');
    }, 1200);
  };

  const handleRegisterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (registerStep === 1) {
      if (!formData.contact.trim()) {
        setErrorMsg('Sila masukkan nombor telefon atau emel anda.');
        return;
      }
      // Proceed to verification details
      setRegisterStep(2);
    } else if (registerStep === 2) {
      if (!formData.verificationCode.trim()) {
        setErrorMsg('Sila masukkan kod pengesahan / OTP.');
        return;
      }
      if (!formData.shopName.trim()) {
        setErrorMsg('Sila berikan nama kedai anda.');
        return;
      }
      
      // Simulate successful activation
      setRegisterStep(3);
      setSuccessMsg(`Tahniah! Kedai "${formData.shopName}" berjaya didaftarkan di Poppro Shop.`);
    }
  };

  const handleSocialClick = (platform: string) => {
    // If logged in, automatically import profile
    if (user) {
      setFormData(prev => ({
        ...prev,
        contact: user.email || user.name || 'poppro_merchant',
        shopName: `${user.name || 'PopPro'} Official Store`
      }));
      setRegisterStep(2);
    } else {
      openLoginModal();
    }
  };

  const faqs = [
    {
      q: "Dokumen apa yang diperlukan untuk mendaftar di Poppro Shop?",
      a: "Bagi akaun Individu, anda memerlukan Kad Pengenalan (MyKad) atau Pasport warganegara. Bagi akaun Syarikat/Perniagaan COR, pihak kami memerlukan sijil pendaftaran perniagaan sah daripada badan berkuasa tempatan (seperti SSM Malaysia) berserta dokumen pemilik berkuasa syarikat."
    },
    {
      q: "Apakah kos yang terlibat?",
      a: "Pendaftaran adalah percuma tanpa yuran bulanan tetap! Yuran komisen hanya dikenakan pada kadar minimum (%) bagi setiap transaksi jualan yang berjaya. Selain itu, sebagai penjual baharu, anda layak mendapat faedah insentif ganjaran penjual bernilai sehingga $11,900 termasuk pengecualian yuran permulaan dan kupon promosi pembeli."
    },
    {
      q: "Adakah terdapat sebarang syarat pengikut (followers) untuk menyertai Poppro Shop sebagai penjual?",
      a: "Sama sekali TIADA syarat minimum pengikut! Sesiapa sahaja yang mempunyai perniagaan sah boleh membuka kedai dan mula menjual. Kandungan kreatif anda dan bantuan komuniti pencipta bersekutu Poppro akan membantu anda memacu penonton dan jualan dengan pantas."
    },
    {
      q: "Produk manakah yang dilarang atau dihadkan untuk dijual di Poppro Shop?",
      a: "Produk seperti senjata api, barangan tiruan, dadah terlarang, bahan mudah terbakar, produk tembakau/vape, serta perkhidmatan kewangan tertentu adalah dilarang sama sekali. Barangan kosmetik atau suplemen kesihatan memerlukan lesen kelulusan khas (KKM/pihak berkuasa tempatan) sebelum duluskan untuk jualan."
    }
  ];

  const menuItems = [
    { name: 'Penjual', sub: ['Pusat Penjual', 'Akademi Penjual', 'Ganjaran Insentif', 'Kisah Kejayaan'] },
    { name: 'Pencipta', sub: ['Creator Marketplace', 'Hub Kongsi', 'Syarat Afiliasi'] },
    { name: 'Rakan kongsi', sub: ['Agensi Rakan Kongsi', 'Penyedia Perkhidmatan TAP', 'Rujukan Sukan'] },
  ];

  const handleBackToPoppro = () => {
    navigate('/');
  };

  return (
    <div className={`min-h-screen font-sans overflow-x-hidden selection:bg-[var(--primary-green)]/20 transition-colors duration-300 ${
      isDarkMode ? 'bg-[#070909] text-slate-100' : 'bg-[#f4f6f9] text-slate-800'
    }`} style={{ backgroundColor: 'var(--bg-dark)' }}>
      
      {/* 1. Header Navigation */}
      <nav className={`sticky top-0 z-50 transition-all border-b ${
        isDarkMode 
          ? 'bg-[#070909]/95 border-zinc-800/80 text-white backdrop-blur-md shadow-lg shadow-black/20' 
          : 'bg-white border-slate-200 text-slate-800 shadow-xs'
      }`} style={{ backgroundColor: 'var(--header-bg)', borderColor: 'var(--border-color)' }}>
        <div className="max-w-7xl mx-auto px-4 md:px-8 h-18 flex items-center justify-between">
          
          <div className="flex items-center gap-6">
            <button 
              onClick={handleBackToPoppro}
              className={`group flex items-center gap-2 text-xs font-semibold px-3 py-1.5 rounded-full transition-all cursor-pointer shadow-xs ${
                isDarkMode 
                  ? 'bg-zinc-900 border-zinc-800 hover:bg-zinc-800 text-slate-300 border' 
                  : 'bg-white hover:bg-slate-50 text-slate-600 border border-slate-300'
              }`}
            >
              <ArrowLeft size={14} className="group-hover:-translate-x-0.5 transition-transform text-slate-500" />
              <span>Kembali</span>
            </button>
            
            {/* Logo */}
            <div className="flex items-center gap-1.5 cursor-pointer" onClick={handleBackToPoppro}>
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-[var(--primary-green,#00C880)] to-teal-400 p-[2px]">
                <div className="w-full h-full bg-slate-950 rounded-[6px] flex items-center justify-center font-black text-sm tracking-tighter text-white">
                  Pp
                </div>
              </div>
              <span className={`font-extrabold tracking-tight text-lg ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                Poppro <span className="text-[var(--primary-green,#00C880)] font-semibold text-sm">Shop</span>
                <span className={`ml-1 text-[10px] border px-1.5 py-0.5 rounded font-bold uppercase tracking-wide ${
                  isDarkMode ? 'bg-zinc-900 text-zinc-400 border-zinc-800' : 'bg-slate-100 text-slate-500 border-slate-200'
                }`}>Seller</span>
              </span>
            </div>

            {/* Desktop Center Links */}
            <div className={`hidden lg:flex items-center gap-6 ml-8 text-[14px] font-semibold ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}>
              {menuItems.map((menu, i) => (
                <div 
                  key={i} 
                  className="relative group py-2"
                  onMouseEnter={() => setActiveDropdown(menu.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button className="flex items-center gap-1 hover:text-[var(--primary-green,#00C880)] transition-colors cursor-pointer py-1">
                    {menu.name}
                    <ChevronDown size={14} className="opacity-60 group-hover:rotate-180 transition-transform duration-200 text-slate-400" />
                  </button>
                  {activeDropdown === menu.name && (
                    <div className={`absolute top-full left-0 w-48 py-2 rounded-xl shadow-2xl z-50 mt-1 border ${
                      isDarkMode ? 'bg-zinc-900 border-[#00C880]/10 text-slate-200' : 'bg-white border-slate-200 text-slate-700'
                    }`}>
                      {menu.sub.map((sub, key) => (
                        <div key={key} className={`px-4 py-2 text-xs font-semibold cursor-pointer transition-colors hover:text-[var(--primary-green,#00C880)] font-sans ${
                          isDarkMode ? 'text-slate-300 hover:bg-zinc-800/80' : 'hover:bg-slate-50 text-slate-700 hover:text-slate-900'
                        }`}>
                          {sub}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <span className="hover:text-[var(--primary-green,#00C880)] cursor-pointer transition-colors py-1">Pelanggan</span>
              <span className="hover:text-[var(--primary-green,#00C880)] cursor-pointer transition-colors py-1">Blog</span>
            </div>
          </div>

          <div className="flex items-center gap-4 text-xs font-semibold">
            {/* Country Selector */}
            <div className={`hidden sm:flex items-center gap-1 cursor-pointer px-3 py-1.5 rounded-lg border ${
              isDarkMode 
                ? 'bg-zinc-900 border-zinc-805 text-slate-300 hover:bg-zinc-800' 
                : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100'
            }`}>
              <span className="text-sm">🇲🇾</span>
              <span>Malaysia (BM)</span>
              <ChevronDown size={12} className="opacity-60" />
            </div>

            {/* Theme Toggle Button */}
            <button 
              onClick={toggleTheme}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border cursor-pointer transition-all ${
                isDarkMode 
                  ? 'bg-zinc-900 border-zinc-800 text-amber-400 hover:bg-zinc-800' 
                  : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100'
              }`}
              title="Tukar Tema"
            >
              {isDarkMode ? <Sun size={14} /> : <Moon size={14} />}
              <span className="hidden md:inline">Tema</span>
            </button>

            <button 
              onClick={() => {
                setAuthTab('login');
                const element = document.getElementById('registerCard');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
              className={`px-4 py-2 rounded-lg transition-colors cursor-pointer ${
                authTab === 'login' 
                  ? (isDarkMode ? 'bg-zinc-800 text-white font-bold' : 'bg-slate-100 text-slate-900 font-bold') 
                  : (isDarkMode ? 'text-slate-400 hover:text-white hover:bg-zinc-900' : 'text-slate-600 hover:text-[#00C880] hover:bg-slate-50')
              }`}
            >
              Log Masuk
            </button>

            <button 
              onClick={() => {
                setAuthTab('register');
                const element = document.getElementById('registerCard');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-[var(--primary-green,#00C880)] hover:opacity-90 text-black px-5 py-2.5 rounded-lg shadow-md hover:scale-101 transition-all cursor-pointer font-extrabold"
            >
              Sertai Sekarang
            </button>
          </div>

        </div>
      </nav>

      {/* 2. Hero Section - Styled Exactly Like official split screen with glowing left banner */}
      <header className="relative py-6 md:py-12 px-4 max-w-7xl mx-auto overflow-hidden">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          
          {/* Hero Left Info Panel: Re-styled as official deep brand slider/incentives pane */}
          <div className="lg:col-span-7 bg-slate-950 rounded-3xl border border-slate-900 p-8 md:p-12 text-white flex flex-col justify-between relative overflow-hidden shadow-2xl min-h-[540px]">
            {/* Ambient glows replicating official glowing mesh backdrop */}
            <div className="absolute top-[-50px] right-[-50px] w-96 h-96 bg-[var(--primary-green,#00C880)]/10 rounded-full blur-[120px] pointer-events-none"></div>
            <div className="absolute bottom-[-50px] left-[-50px] w-96 h-96 bg-teal-500/10 rounded-full blur-[120px] pointer-events-none"></div>
            
            <div className="space-y-8 relative z-10">
              {/* Dynamic Interactive Tag */}
              <div className="inline-flex items-center gap-2 bg-[var(--primary-green,#00C880)]/10 border border-[var(--primary-green,#00C880)]/20 px-4 py-1.5 rounded-full text-[11px] font-black text-[var(--primary-green,#00C880)] tracking-wider uppercase">
                <span className="w-2 h-2 rounded-full bg-[var(--primary-green,#00C880)] animate-ping"></span>
                Insentif Penjual Baharu 2026
              </div>
 
              <div className="space-y-3">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.12]">
                  Bina perniagaan anda <br/>
                  di <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-400 via-white to-[var(--primary-green,#00C880)] font-black">Poppro Shop</span>
                </h1>
                <p className="text-slate-400 text-sm md:text-md max-w-xl font-medium leading-relaxed">
                  Platform e-dagang berpandukan kandungan tercanggih. Jual produk anda terus melalui aliran siaran langsung (LIVE), video kreatif, dan beg kuning.
                </p>
              </div>
 
              {/* List of Perks with Clean TikTok-style Checkmarks */}
              <div className="space-y-4 pt-4 max-w-2xl">
                
                <div className="flex items-start gap-3.5">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0 mt-0.5">
                    <svg className="w-3 px-0.5" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="3"><path d="M2.5 6L5 8.5L9.5 3.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white leading-tight">Yuran Komisen Jualan 0%</h3>
                    <p className="text-xs text-slate-400 mt-0.5 leading-normal">
                      Pengecualian penuh yuran komisen untuk semua penjual baharu selama 30 hari pertama perniagaan anda didaftarkan.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0 mt-0.5">
                    <svg className="w-3 px-0.5" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="3"><path d="M2.5 6L5 8.5L9.5 3.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white leading-tight">Ganjaran Insentif sehingga $11,900 / RM50,000</h3>
                    <p className="text-xs text-slate-400 mt-0.5 leading-normal">
                      Dapatkan rebat tunai pengiklanan, diskaun baucar disokong platform, subsidi penghantaran percuma, serta latihan bengkel eksklusif.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0 mt-0.5">
                    <svg className="w-3 px-0.5" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="3"><path d="M2.5 6L5 8.5L9.5 3.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white leading-tight">Syor Trafik Pintar & Beg Kuning</h3>
                    <p className="text-xs text-slate-400 mt-0.5 leading-normal">
                      Kandungan viral anda ditukar terus kepada nilai jualan. Sambungkan beg kuning pada produk dengan sekali klik sahaja.
                    </p>
                  </div>
                </div>
 
              </div>
            </div>
 
            {/* Bottom mini showcase ticker inside gradient panel */}
            <div className="mt-8 pt-5 border-t border-slate-900 flex flex-wrap items-center gap-8 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <span className="text-cyan-400 text-lg">⚡</span>
                <div>
                  <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Pendaftaran</p>
                  <p className="font-extrabold text-white">Mudah & Percuma</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[var(--primary-green,#00C880)] text-lg">📈</span>
                <div>
                  <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Potensi Trafik</p>
                  <p className="font-extrabold text-white">Jutaan Pembeli Aktif</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-amber-400 text-lg">🛡️</span>
                <div>
                  <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Rangkaian Pembayaran</p>
                  <p className="font-extrabold text-white">Selesa & Selamat 100%</p>
                </div>
              </div>
            </div>
 
          </div>
 
          {/* Interactive "Daftar" Registry Card: Clean White TikTok-Theme Split */}
          <div className="lg:col-span-4 lg:col-start-9 flex flex-col justify-center" id="registerCard">
            <div className={`rounded-3xl border p-6 md:p-8 relative transition-all duration-300 ${
              isDarkMode 
                ? 'bg-[#0b0c0c] border-zinc-900 text-white shadow-[0_20px_50px_rgba(0,0,0,0.5)]' 
                : 'bg-white border-slate-200/80 text-slate-800 shadow-[0_20px_50px_rgba(0,0,0,0.06)]'
            }`}>
              
              {/* Floating registration flag */}
              <div className="absolute top-0 right-10 -translate-y-1/2 bg-[var(--primary-green,#00C880)] text-[10px] font-black tracking-widest uppercase px-4 py-1.5 rounded-full text-black shadow-md">
                Pendaftaran Selamat
              </div>
 
              {/* TABS SELECTOR - Mirroring TikTok Shop Seller Center */}
              <div className={`flex border-b mb-6 font-extrabold text-sm relative ${isDarkMode ? 'border-zinc-900' : 'border-slate-100'}`}>
                <button
                  type="button"
                  onClick={() => {
                    setAuthTab('register');
                    setErrorMsg('');
                  }}
                  className={`flex-1 pb-3 text-center border-b-[3px] transition-all cursor-pointer relative z-10 ${
                    authTab === 'register' 
                      ? 'border-[var(--primary-green,#00C880)] text-[var(--primary-green,#00C880)] font-black' 
                      : (isDarkMode ? 'border-transparent text-slate-500 hover:text-slate-300' : 'border-transparent text-slate-400 hover:text-slate-600')
                  }`}
                >
                  Daftar
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setAuthTab('login');
                    setErrorMsg('');
                  }}
                  className={`flex-1 pb-3 text-center border-b-[3px] transition-all cursor-pointer relative z-10 ${
                    authTab === 'login' 
                      ? 'border-[var(--primary-green,#00C880)] text-[var(--primary-green,#00C880)] font-black' 
                      : (isDarkMode ? 'border-transparent text-slate-500 hover:text-slate-300' : 'border-transparent text-slate-400 hover:text-slate-600')
                  }`}
                >
                  Log Masuk
                </button>
              </div>
 
              <AnimatePresence mode="wait">
                
                {authTab === 'login' ? (
                  <motion.form 
                    key="login-tab"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    onSubmit={handleLoginSubmit} 
                    className="space-y-4"
                  >
                    <div className="space-y-1">
                      <h2 className={`text-lg font-extrabold ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>Selamat Pulang!</h2>
                      <p className="text-slate-400 text-xs">Akses Portal Seller Center anda untuk memantau prestasi kedai.</p>
                    </div>
 
                    <div className="space-y-4 pt-2">
                      <div>
                        <label className="block text-slate-500 text-[10px] font-bold uppercase tracking-wider mb-1.5">
                          E-mel atau Nombor Telefon
                        </label>
                        <div className="relative">
                          <input 
                            type="text"
                            placeholder="Contoh: seller@perniagaan.com"
                            value={loginData.contact}
                            onChange={(e) => setLoginData({...loginData, contact: e.target.value})}
                            className={`w-full rounded-xl px-4 py-3 text-xs outline-none transition-all font-semibold border ${
                              isDarkMode 
                                ? 'bg-zinc-950 border-zinc-850 text-white focus:border-[var(--primary-green,#00C880)] focus:ring-4 focus:ring-[var(--primary-green,#00C880)]/15 placeholder-zinc-650' 
                                : 'bg-slate-50 border-slate-200 text-slate-950 focus:border-[#00C880] focus:bg-white focus:ring-4 focus:ring-[#00C880]/10 placeholder-slate-400'
                            }`}
                            required
                          />
                          <Mail size={14} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                        </div>
                      </div>
 
                      <div>
                        <label className="block text-slate-500 text-[10px] font-bold uppercase tracking-wider mb-1.5">
                          Kata Laluan
                        </label>
                        <div className="relative">
                          <input 
                            type="password"
                            placeholder="Kata Laluan Anda"
                            value={loginData.password}
                            onChange={(e) => setLoginData({...loginData, password: e.target.value})}
                            className={`w-full rounded-xl px-4 py-3 text-xs outline-none transition-all font-semibold border ${
                              isDarkMode 
                                ? 'bg-zinc-950 border-zinc-850 text-white focus:border-[var(--primary-green,#00C880)] focus:ring-4 focus:ring-[var(--primary-green,#00C880)]/15 placeholder-zinc-650' 
                                : 'bg-slate-50 border-slate-200 text-slate-950 focus:border-[var(--primary-green,#00C880)] focus:bg-white focus:ring-4 focus:ring-[var(--primary-green,#00C880)]/10 placeholder-slate-400'
                            }`}
                            required
                          />
                        </div>
                      </div>
 
                      <div className="flex items-center justify-between text-xs pt-1">
                        <label className="flex items-center gap-2 cursor-pointer text-slate-500">
                          <input 
                            type="checkbox" 
                            checked={loginData.rememberMe}
                            onChange={(e) => setLoginData({...loginData, rememberMe: e.target.checked})}
                            className="rounded border-slate-300 text-[var(--primary-green,#00C880)] focus:ring-[var(--primary-green,#00C880)] w-4 h-4 cursor-pointer"
                          />
                          <span>Ingat saya</span>
                        </label>
                        <span className="text-[var(--primary-green,#00C880)] hover:underline cursor-pointer font-bold">Lupa kata laluan?</span>
                      </div>
                    </div>
 
                    {errorMsg && (
                      <div className="text-red-500 text-xs font-semibold bg-red-500/10 rounded-lg p-3 flex items-center gap-2 border border-red-500/25 mt-2">
                        <Info size={14} className="shrink-0" />
                        <span>{errorMsg}</span>
                      </div>
                    )}
 
                    {successMsg && (
                      <div className="text-emerald-500 text-xs font-semibold bg-emerald-500/10 rounded-lg p-3 flex items-center gap-2 border border-emerald-500/25 mt-2">
                        <CheckCircle size={14} className="shrink-0" />
                        <span>{successMsg}</span>
                      </div>
                    )}
 
                    <button 
                      type="submit"
                      className="w-full bg-[var(--primary-green,#00C880)] hover:opacity-90 text-black py-3.5 rounded-xl text-xs font-extrabold shadow-md hover:shadow-[0_8px_20px_rgba(0,200,128,0.2)] transition-all hover:scale-[1.01] cursor-pointer mt-4"
                    >
                      Log Masuk ke Portal Penjual
                    </button>
 
                    <p className="text-[11px] text-slate-500 text-center leading-normal pt-2">
                      Belum mempunyai akaun? <span className="text-[var(--primary-green,#00C880)] font-black cursor-pointer hover:underline" onClick={() => setAuthTab('register')}>Daftar Sekarang</span>
                    </p>
                  </motion.form>
                ) : (
                  <div className="space-y-4">
                    
                    {registerStep === 1 && (
                      <motion.form 
                        key="register-step-1"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -25 }}
                        onSubmit={handleRegisterSubmit} 
                        className="space-y-4"
                      >
                        <div className="space-y-1">
                          <h2 className={`text-lg font-extrabold ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>Dua Langkah Mudah</h2>
                          <p className="text-slate-400 text-xs">Sertai sebagai rakan kongsi penjual rasmi hari ini.</p>
                        </div>
 
                        <div>
                          <label className="block text-slate-500 text-[10px] font-bold uppercase tracking-wider mb-2">
                            Nombor telefon atau emel perniagaan
                          </label>
                          <div className="relative">
                            <input 
                              type="text"
                              placeholder="telefon@contoh.com atau +601xxxxxxx"
                              value={formData.contact}
                              onChange={(e) => setFormData({...formData, contact: e.target.value})}
                              className={`w-full rounded-xl px-4 py-3.5 text-xs outline-none transition-all font-semibold border ${
                                isDarkMode 
                                  ? 'bg-zinc-950 border-zinc-850 text-white focus:border-[var(--primary-green,#00C880)] focus:ring-4 focus:ring-[var(--primary-green,#00C880)]/15 placeholder-zinc-650' 
                                  : 'bg-slate-50 border-slate-200 text-slate-950 focus:border-[var(--primary-green,#00C880)] focus:bg-white focus:ring-4 focus:ring-[var(--primary-green,#00C880)]/10 placeholder-slate-400'
                              }`}
                              required
                            />
                            <div className="absolute right-3.5 top-1/2 -translate-y-1/2 flex gap-1.5 text-slate-400">
                              <Smartphone size={15} />
                              <span className="text-slate-200">|</span>
                              <Mail size={15} />
                            </div>
                          </div>
                        </div>
 
                        {errorMsg && (
                          <div className="text-red-500 text-xs font-semibold bg-red-500/10 rounded-lg p-3 flex items-center gap-2 border border-red-500/25">
                            <Info size={14} className="shrink-0" />
                            <span>{errorMsg}</span>
                          </div>
                        )}
 
                        <button 
                          type="submit"
                          className="w-full bg-[var(--primary-green,#00C880)] hover:opacity-90 text-black py-3.5 rounded-xl text-xs font-extrabold shadow-md hover:shadow-[0_8px_20px_rgba(0,200,128,0.2)] transition-all hover:scale-[1.01] cursor-pointer"
                        >
                          Teruskan
                        </button>
 
                        <div className="relative flex items-center justify-center my-4">
                          <div className="absolute inset-0 flex items-center">
                            <div className={`w-full border-t ${isDarkMode ? 'border-zinc-900' : 'border-slate-100'}`}></div>
                          </div>
                          <span className={`relative px-3 text-[10px] font-bold tracking-widest uppercase ${isDarkMode ? 'bg-[#0b0c0c] text-zinc-500' : 'bg-white text-slate-400'}`}>Atau Daftar Dengan</span>
                        </div>
 
                        {/* Social Buttons list */}
                        <div className="space-y-2.5">
                          <button 
                            type="button" 
                            onClick={() => handleSocialClick('poppro')}
                            className={`w-full py-3 rounded-xl text-xs font-bold flex items-center justify-center gap-2.5 transition-all text-left px-4 border cursor-pointer ${
                              isDarkMode 
                                ? 'bg-zinc-950 border-zinc-900 hover:bg-zinc-900 text-slate-200' 
                                : 'bg-slate-50 border-slate-200 hover:bg-slate-100/80 text-slate-700'
                            }`}
                          >
                            <div className="w-5 h-5 rounded bg-gradient-to-tr from-[var(--primary-green,#00C880)] to-teal-400 flex items-center justify-center p-[1px]">
                              <div className="w-full h-full bg-black rounded flex items-center justify-center font-black text-[9px] text-white">Pp</div>
                            </div>
                            <span className="flex-1">Teruskan dengan Poppro</span>
                            <ArrowRight size={12} className="opacity-60 text-slate-400" />
                          </button>
 
                          <button 
                            type="button" 
                            onClick={() => handleSocialClick('business')}
                            className={`w-full py-3 rounded-xl text-xs font-bold flex items-center justify-center gap-2.5 transition-all text-left px-4 border cursor-pointer ${
                              isDarkMode 
                                ? 'bg-zinc-950 border-zinc-900 hover:bg-zinc-900 text-slate-200' 
                                : 'bg-slate-50 border-slate-200 hover:bg-slate-100/80 text-slate-700'
                            }`}
                          >
                            <ShieldCheck size={18} className="text-[var(--primary-green,#00C880)]" />
                            <span className="flex-1">Teruskan dengan Poppro Bisnes</span>
                            <ArrowRight size={12} className="opacity-60 text-slate-400" />
                          </button>
                        </div>
 
                        <p className="text-[10px] text-slate-400 text-center leading-normal mt-4">
                          Dengan mendaftar, anda bersetuju dengan <span className="underline cursor-pointer hover:text-slate-500">Terma Perkhidmatan</span>, <span className="underline cursor-pointer hover:text-slate-500">Dasar Privasi Penjual</span> serta <span className="underline cursor-pointer hover:text-slate-500">Peraturan Kedai</span>.
                        </p>
                      </motion.form>
                    )}
 
                    {registerStep === 2 && (
                      <motion.form 
                        key="register-step-2"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        onSubmit={handleRegisterSubmit} 
                        className="space-y-4"
                      >
                        <div className="space-y-1">
                          <h2 className={`text-lg font-extrabold ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>Butiran Kedai</h2>
                          <p className="text-xs text-emerald-600 font-semibold flex items-center gap-1.5 bg-emerald-500/10 px-2.5 py-1.5 rounded-lg border border-emerald-500/15">
                            <CheckCircle size={14} className="shrink-0" /> Hubungan disahkan: {formData.contact}
                          </p>
                        </div>
 
                        <div className="space-y-3 pt-1">
                          <div>
                            <label className="block text-slate-500 text-[10px] font-bold uppercase tracking-wider mb-1.5">
                              Jenis Perniagaan
                            </label>
                            <div className="grid grid-cols-2 gap-2">
                              <button 
                                type="button" 
                                onClick={() => setFormData({...formData, businessType: 'individual'})}
                                className={`py-2 rounded-lg border text-xs font-bold transition-all cursor-pointer ${
                                  formData.businessType === 'individual' 
                                    ? 'bg-[var(--primary-green,#00C880)]/15 border-[var(--primary-green,#00C880)] text-[var(--primary-green,#00C880)]' 
                                    : (isDarkMode ? 'bg-zinc-950 border-zinc-900 text-zinc-400 hover:bg-zinc-900' : 'bg-slate-50 border-slate-200 text-slate-500 hover:bg-slate-100')
                                }`}
                              >
                                Organisasi / Individu
                              </button>
                              <button 
                                type="button" 
                                onClick={() => setFormData({...formData, businessType: 'corporation'})}
                                className={`py-2 rounded-lg border text-xs font-bold transition-all cursor-pointer ${
                                  formData.businessType === 'corporation' 
                                    ? 'bg-[var(--primary-green,#00C880)]/15 border-[var(--primary-green,#00C880)] text-[var(--primary-green,#00C880)]' 
                                    : (isDarkMode ? 'bg-zinc-950 border-zinc-900 text-zinc-400 hover:bg-zinc-900' : 'bg-slate-50 border-slate-200 text-slate-500 hover:bg-slate-100')
                                }`}
                              >
                                Syarikat Sdn Bhd/Co
                              </button>
                            </div>
                          </div>
 
                          <div>
                            <label className="block text-slate-500 text-[10px] font-bold uppercase tracking-wider mb-1.5">
                              Nama Kedai Poppro Shop
                            </label>
                            <div className="relative">
                              <input 
                                type="text"
                                placeholder="Contoh: Kedai Buku PopPro"
                                value={formData.shopName}
                                onChange={(e) => setFormData({...formData, shopName: e.target.value})}
                                className={`w-full rounded-xl px-4 py-3 text-xs outline-none transition-all font-semibold border ${
                                  isDarkMode 
                                    ? 'bg-zinc-950 border-zinc-850 text-white focus:border-[var(--primary-green,#00C880)] focus:ring-4 focus:ring-[var(--primary-green,#00C880)]/15 placeholder-zinc-650' 
                                    : 'bg-slate-50 border-slate-200 text-slate-950 focus:border-[var(--primary-green,#00C880)] focus:bg-white focus:ring-4 focus:ring-[var(--primary-green,#00C880)]/10 placeholder-slate-400'
                                }`}
                                required
                              />
                              <Store size={14} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                            </div>
                          </div>
 
                          <div>
                            <label className="block text-slate-500 text-[10px] font-bold uppercase tracking-wider mb-1.5">
                              Kod SMS / Emel OTP
                            </label>
                            <div className="flex gap-2">
                              <input 
                                type="text"
                                placeholder="Masukkan 6 Digit OTP"
                                value={formData.verificationCode}
                                onChange={(e) => setFormData({...formData, verificationCode: e.target.value})}
                                className={`flex-1 rounded-xl px-4 py-3 text-xs outline-none transition-all font-mono tracking-widest text-center border ${
                                  isDarkMode 
                                    ? 'bg-zinc-950 border-zinc-850 text-white focus:border-[var(--primary-green,#00C880)] focus:ring-4 focus:ring-[var(--primary-green,#00C880)]/15 placeholder-zinc-650' 
                                    : 'bg-slate-50 border-slate-200 text-slate-950 focus:border-[var(--primary-green,#00C880)] focus:bg-white focus:ring-4 focus:ring-[var(--primary-green,#00C880)]/10 placeholder-slate-400'
                                }`}
                              />
                              <button 
                                type="button"
                                onClick={() => alert("Kod OTP telah dihantar ke nombor telefon anda.")}
                                className="bg-[var(--primary-green,#00C880)]/10 hover:bg-[var(--primary-green,#00C880)]/20 text-[var(--primary-green,#00C880)] text-xs font-bold px-4 py-2 rounded-xl border border-[var(--primary-green,#00C880)]/20 cursor-pointer transition-colors"
                              >
                                Hantar OTP
                              </button>
                            </div>
                            <p className="text-[10px] text-slate-400 mt-1">Sila klik &quot;Hantar OTP&quot; untuk mengisi kod dummy secara automatik.</p>
                          </div>
                        </div>
 
                        {errorMsg && (
                          <div className="text-red-500 text-xs font-semibold bg-red-500/10 rounded-lg p-2.5 flex items-center gap-2 border border-red-500/25 font-sans">
                            <Info size={14} className="shrink-0" />
                            <span>{errorMsg}</span>
                          </div>
                        )}
 
                        <div className="flex gap-2.5 pt-2">
                          <button 
                            type="button"
                            onClick={() => setRegisterStep(1)}
                            className={`flex-1 py-3 rounded-xl text-xs font-bold transition-transform cursor-pointer shadow-xs ${
                              isDarkMode ? 'bg-zinc-900 hover:bg-zinc-800 text-zinc-300' : 'bg-slate-100 hover:bg-slate-200 text-slate-600'
                            }`}
                          >
                            Kembali
                          </button>
                          <button 
                            type="submit"
                            className="flex-[2] bg-[var(--primary-green,#00C880)] hover:opacity-90 text-black py-3 rounded-xl text-xs font-extrabold shadow-lg shadow-[var(--primary-green,#00C880)]/10 hover:scale-[1.01] transition-all cursor-pointer"
                          >
                            Lengkapkan Pendaftaran
                          </button>
                        </div>
                      </motion.form>
                    )}
 
                    {registerStep === 3 && (
                      <motion.div 
                        key="register-step-3"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-center py-4 space-y-4"
                      >
                        <div className="w-14 h-14 rounded-full bg-emerald-500/10 border border-emerald-500/25 flex items-center justify-center mx-auto text-emerald-500">
                          <CheckCircle size={32} />
                        </div>
                        <div className="space-y-1">
                          <h3 className={`text-md font-extrabold ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>Pendaftaran Berhasil!</h3>
                          <p className="text-slate-400 text-xs leading-relaxed">
                            Kedai digital anda telah disemak secara pra-kelulusan. Anda sedia untuk menghubungkan akaun dan mula memuat naik produk.
                          </p>
                        </div>
 
                        <div className={`p-4 rounded-xl border text-left space-y-2 ${isDarkMode ? 'bg-zinc-950 border-zinc-900' : 'bg-slate-50 border-slate-100'}`}>
                          <div className="flex justify-between text-xs">
                            <span className="text-slate-400">Nama Kedai:</span>
                            <span className={`font-bold ${isDarkMode ? 'text-slate-200' : 'text-slate-800'}`}>{formData.shopName || 'KEDAI POPPRO'}</span>
                          </div>
                          <div className="flex justify-between text-xs">
                            <span className="text-slate-400">Kawasan Jualan:</span>
                            <span className={`font-bold ${isDarkMode ? 'text-slate-200' : 'text-slate-800'}`}>Malaysia (MYR)</span>
                          </div>
                          <div className="flex justify-between text-xs">
                            <span className="text-slate-400">Ganjaran Layak:</span>
                            <span className="font-extrabold text-[var(--primary-green,#00C880)]">Pengecualian Yuran Komisen 0% (30 Hari)</span>
                          </div>
                        </div>
 
                        <div className="flex gap-2">
                          <button 
                            onClick={() => setRegisterStep(1)}
                            className={`flex-1 text-xs font-semibold py-3 rounded-xl cursor-pointer ${
                              isDarkMode ? 'bg-zinc-900 hover:bg-zinc-800 text-zinc-300' : 'bg-slate-100 hover:bg-slate-200 text-slate-600'
                            }`}
                          >
                            Daftar Lain
                          </button>
                          <button 
                            onClick={() => navigate('/shop')}
                            className="flex-[2] bg-[var(--primary-green,#00C880)] hover:opacity-90 text-black text-xs font-bold py-3 rounded-xl shadow-lg cursor-pointer"
                          >
                            Pergi Ke Poppro Shop
                          </button>
                        </div>
                      </motion.div>
                    )}
 
                  </div>
                )}
 
              </AnimatePresence>
            </div>
          </div>
 
        </div>
      </header>

      {/* 3. Section 2: Membeli-belah Dipermudahkan (Interactive Features Grid) */}
      <section className="py-20 px-4 max-w-7xl mx-auto border-t border-slate-900 bg-slate-950">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            Membeli-belah dipermudahkan
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Dikuasakan oleh enjin penemuan yang unik, Poppro Shop membolehkan jenama dan penjual memamerkan dan menjual produk secara langsung di Poppro, melalui rangkaian titik sentuh beli-belah bersepadu dalam aplikasi.
          </p>
        </div>

        {/* Interactive Features Display */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Feature switcher list - Left Side */}
          <div className="lg:col-span-5 space-y-4">
            
            <button 
              onClick={() => setActivePeristiwa(0)}
              className={`w-full text-left p-6 rounded-2xl border transition-all cursor-pointer ${activePeristiwa === 0 ? 'bg-slate-900 border-slate-800 shadow-xl' : 'bg-transparent border-transparent hover:bg-slate-900/40'}`}
            >
              <h3 className="text-sm font-extrabold text-white mb-2 flex items-center gap-2">
                <span className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] ${activePeristiwa === 0 ? 'bg-[var(--primary-green)] text-black font-black' : 'bg-slate-800 text-slate-400'}`}>01</span>
                Membeli-belah Secara Langsung (LIVE Shopping)
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed ml-8">
                Promosikan, jual, dan libatkan diri secara langsung dengan khalayak anda. Optimumkan siaran langsung dengan membolehkan penonton membeli terus daripada pin produk masa nyata yang dipamerkan.
              </p>
            </button>

            <button 
              onClick={() => setActivePeristiwa(1)}
              className={`w-full text-left p-6 rounded-2xl border transition-all cursor-pointer ${activePeristiwa === 1 ? 'bg-slate-900 border-slate-800 shadow-xl' : 'bg-transparent border-transparent hover:bg-slate-900/40'}`}
            >
              <h3 className="text-sm font-extrabold text-white mb-2 flex items-center gap-2">
                <span className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] ${activePeristiwa === 1 ? 'bg-[#25f4ee] bg-opacity-20 text-[#25f4ee]' : 'bg-slate-800 text-slate-400'}`}>02</span>
                Video yang Boleh Dibeli (Shoppable Videos)
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed ml-8">
                Dapatkan pesanan berterusan dari kandungan video yang viral. Pasang pautan label beg produk kuning pada video pendek anda dengan hanya satu sentuhan mudah.
              </p>
            </button>

            <button 
              onClick={() => setActivePeristiwa(2)}
              className={`w-full text-left p-6 rounded-2xl border transition-all cursor-pointer ${activePeristiwa === 2 ? 'bg-slate-900 border-slate-800 shadow-xl' : 'bg-transparent border-transparent hover:bg-slate-900/40'}`}
            >
              <h3 className="text-sm font-extrabold text-white mb-2 flex items-center gap-2">
                <span className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] ${activePeristiwa === 2 ? 'bg-indigo-500/20 text-indigo-400' : 'bg-slate-800 text-slate-400'}`}>03</span>
                Halaman Kedai Digital (Storefront Tab)
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed ml-8">
                Berikan pelanggan halaman katalog tersusun yang kemas. Paparkan senarai inventori, ulasan, voucher, dan status penghantaran dalam profil perniagaan anda.
              </p>
            </button>

          </div>

          {/* Phone device mockup display layout - Right Side */}
          <div className="lg:col-span-7 flex justify-center">
            <div className="relative w-full max-w-sm h-[520px] bg-slate-900 rounded-[40px] border-4 border-slate-850 p-3 shadow-2xl overflow-hidden flex flex-col">
              
              {/* Speaker camera bar notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-4 bg-slate-950 rounded-b-xl z-30 flex items-center justify-center">
                <div className="w-12 h-1 bg-slate-800 rounded-full"></div>
              </div>

              {/* Internal Screen App Canvas */}
              <div className="w-full h-full bg-slate-950 rounded-[30px] overflow-hidden relative flex flex-col justify-between">
                
                {/* Active Peristiwa 0: LIVE Stream View */}
                {activePeristiwa === 0 && (
                  <div className="absolute inset-0 flex flex-col justify-between p-3.5 pt-6 bg-cover bg-center" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1542435503-956c469947f6?auto=format&fit=crop&q=80&w=600")' }}>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/50 pointer-events-none"></div>
                    
                    {/* Top User Info inside Phone */}
                    <div className="relative z-10 flex justify-between items-center">
                      <div className="flex items-center gap-1.5 bg-black/40 px-2 py-0.5 rounded-full text-[10px]">
                        <img src="https://picsum.photos/seed/host/100/100" className="w-5 h-5 rounded-full" alt="Host avatar" />
                        <div>
                          <p className="font-bold whitespace-nowrap">Pop Pro Live</p>
                          <p className="text-[7px] text-green-400">4.5K Penonton</p>
                        </div>
                      </div>
                      <div className="bg-[var(--primary-green)] text-[9px] px-2 py-0.5 rounded-full font-black text-black uppercase tracking-wider">LIVE</div>
                    </div>

                    {/* Bottom Product Showcase Popover overlay */}
                    <div className="relative z-15 space-y-3">
                      
                      <div className="bg-slate-900/95 border border-slate-800 backdrop-blur-md rounded-xl p-2.5 flex gap-2.5 shadow-xl">
                        <img src="https://picsum.photos/seed/fan/200/200" className="w-12 h-12 object-cover rounded-lg" alt="product" />
                        <div className="flex-1 min-w-0">
                          <p className="text-[10px] font-black text-[#25f4ee] uppercase tracking-widest">Pin Produk #1</p>
                          <h4 className="text-[10px] font-bold text-white truncate leading-tight mt-0.5">Kipas Pintar Portable Super Hebat</h4>
                          <p className="text-xs text-[var(--primary-green)] font-black mt-0.5">RM19.98 <span className="text-[9px] text-slate-400 line-through">RM129.00</span></p>
                        </div>
                        <button className="bg-[var(--primary-green)] hover:opacity-90 text-[9px] font-black text-black px-2.5 rounded-lg h-7 self-end shrink-0 cursor-pointer">Beli</button>
                      </div>

                      {/* Comments Feed Mockup */}
                      <div className="space-y-1.5 max-h-24 overflow-hidden text-[9px]">
                        <p className="text-slate-300"><span className="font-bold text-[#25f4ee]">ali_99:</span> Wow penghantaran percuma ke Sarawak? 🚚</p>
                        <p className="text-slate-300"><span className="font-bold text-[#25f4ee]">sarah.com:</span> Dah beli 2 unit tadi! Seller peramah 👍</p>
                        <p className="text-slate-300"><span className="font-bold text-[#25f4ee]">zack_8:</span> Memang jimat gila promosi ni.</p>
                      </div>

                    </div>
                  </div>
                )}

                {/* Active Peristiwa 1: Shoppable Videos View */}
                {activePeristiwa === 1 && (
                  <div className="absolute inset-0 flex flex-col justify-between p-3.5 pt-6 bg-cover bg-center" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1579310962131-aa21f240d986?auto=format&fit=crop&q=80&w=600")' }}>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none"></div>
                    
                    {/* Sidebar action tags */}
                    <div className="relative z-10 self-end ml-auto flex flex-col gap-3.5 items-center text-[10px] mt-12 pr-1">
                      <div className="flex flex-col items-center">
                        <div className="w-8 h-8 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center">❤️</div>
                        <span className="text-[8px] font-semibold mt-0.5">76.6K</span>
                      </div>
                      <div className="flex flex-col items-center">
                        <div className="w-8 h-8 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center">💬</div>
                        <span className="text-[8px] font-semibold mt-0.5">302</span>
                      </div>
                      <div className="flex flex-col items-center">
                        <div className="w-8 h-8 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center">🌟</div>
                        <span className="text-[8px] font-semibold mt-0.5">15.6K</span>
                      </div>
                    </div>

                    {/* Bottom label strip with Yellow Bag */}
                    <div className="relative z-10 space-y-2 mt-auto">
                      
                      <div className="bg-amber-400 text-slate-950 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full font-bold text-[9px] shadow-lg">
                        <span className="w-3.5 h-3.5 rounded-full bg-slate-950 text-amber-400 flex items-center justify-center font-bold text-[8px]">🛒</span>
                        <span>Beg Kuning: Beg Penjagaan Kulit Premium</span>
                        <ChevronRight size={10} className="stroke-[3]" />
                      </div>

                      <div className="space-y-1 text-left">
                        <p className="font-bold text-xs">@poppro_user</p>
                        <p className="text-[10px] text-slate-300 leading-snug">Epic moments today! Don&apos;t forget to share with friends. 🔥 #Poppro #Trending #Viral</p>
                        <div className="flex items-center gap-1.5 text-[8px] text-slate-400">
                          <span className="p-0.5 bg-slate-900 rounded">🎵</span>
                          <span>Bunyi asal - poppro_user</span>
                        </div>
                      </div>

                    </div>
                  </div>
                )}

                {/* Active Peristiwa 2: Storefront Tab View */}
                {activePeristiwa === 2 && (
                  <div className="absolute inset-0 flex flex-col bg-slate-950 p-3 pt-6 text-slate-100 overflow-y-auto">
                    
                    {/* Store Profile Header */}
                    <div className="flex items-center gap-3 border-b border-slate-900 pb-3 mt-2">
                      <img src="https://picsum.photos/seed/shoplogo/100/100" className="w-12 h-12 rounded-full border border-slate-800 bg-slate-900" alt="logo" />
                      <div>
                        <h4 className="text-xs font-black text-white flex items-center gap-1">
                          Pop Pro Official Store 
                          <span className="text-xs text-blue-400">✔️</span>
                        </h4>
                        <p className="text-[8px] text-slate-400">99.2% Ulasan Positif | Pengikut: 45K</p>
                        <div className="flex gap-1 mt-1">
                          <span className="text-[8px] bg-[var(--primary-green)]/10 text-[var(--primary-green)] border border-[var(--primary-green)]/20 px-1 py-0.2 rounded font-bold">Top Brand</span>
                          <span className="text-[8px] bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 px-1 py-0.2 rounded font-bold">Free Ship</span>
                        </div>
                      </div>
                    </div>

                    {/* Navigation Filter in Shop Page mockup */}
                    <div className="grid grid-cols-4 gap-1 py-2 border-b border-slate-900 text-center text-[9px] font-bold text-slate-400">
                      <span className="text-white border-b border-white pb-1 font-black">Semua</span>
                      <span>Diskaun</span>
                      <span>Terlaris</span>
                      <span>Baharu</span>
                    </div>

                    {/* Product Mockup Grid inside phone screen */}
                    <div className="grid grid-cols-2 gap-2 pt-3 overflow-hidden">
                      
                      <div className="bg-slate-900 rounded-lg p-1.5 border border-slate-850">
                        <img src="https://picsum.photos/seed/skin1/200/200" className="w-full aspect-square object-cover rounded-md" alt="product" />
                        <h5 className="text-[9px] font-bold text-white truncate mt-1">Set Penjagaan Kulit JHSARI</h5>
                        <p className="text-[10px] text-[var(--primary-green)] font-bold mt-0.5">RM15.80</p>
                        <div className="flex items-center gap-0.5 text-[7px] text-slate-500 mt-0.5">
                          <span>⭐ 4.7</span>
                          <span>|</span>
                          <span>70 Terjual</span>
                        </div>
                      </div>

                      <div className="bg-slate-900 rounded-lg p-1.5 border border-slate-850">
                        <img src="https://picsum.photos/seed/book1/200/200" className="w-full aspect-square object-cover rounded-md" alt="product" />
                        <h5 className="text-[9px] font-bold text-white truncate mt-1">Surat Cinta Dari Tuhan (30 Juz)</h5>
                        <p className="text-[10px] text-[var(--primary-green)] font-bold mt-0.5">RM41.00</p>
                        <div className="flex items-center gap-0.5 text-[7px] text-slate-500 mt-0.5">
                          <span>⭐ 4.9</span>
                          <span>|</span>
                          <span>1.2K Terjual</span>
                        </div>
                      </div>

                    </div>

                  </div>
                )}

              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 4. Section 3: Merchant Success Testimony & Slidesshow */}
      <section className="py-20 px-4 bg-slate-900">
        <div className="max-w-7xl mx-auto">
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
            <div className="space-y-2">
              <span className="text-[var(--primary-green)] text-xs font-bold uppercase tracking-widest">Kisah Rakan Niaga</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Kejayaan penjual di Poppro Shop</h2>
            </div>
            
            {/* Custom Carousel controls */}
            <div className="flex gap-2.5">
              <button 
                onClick={() => setActiveCaseStudy(prev => prev === 0 ? testimonials.length - 1 : prev - 1)}
                className="w-10 h-10 rounded-full border border-slate-700 bg-slate-950 flex items-center justify-center text-slate-300 hover:text-white hover:bg-slate-800 cursor-pointer transition-colors"
              >
                <ChevronLeft size={18} />
              </button>
              <button 
                onClick={() => setActiveCaseStudy(prev => (prev + 1) % testimonials.length)}
                className="w-10 h-10 rounded-full border border-slate-700 bg-slate-950 flex items-center justify-center text-slate-300 hover:text-white hover:bg-slate-800 cursor-pointer transition-colors"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>

          {/* Testimonial Active Display Card with Fade Animation */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Main content quote */}
            <div className="lg:col-span-8 bg-slate-950 rounded-2xl border border-slate-800 p-8 flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-[var(--primary-green)]/5 rounded-bl-[100px] pointer-events-none"></div>
              
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <span className="w-2.5 h-2.5 bg-[var(--primary-green)] rounded-full"></span>
                  <span className="text-xs font-bold text-[var(--primary-green)] tracking-widest uppercase">{testimonials[activeCaseStudy].badge}</span>
                </div>
                
                <p className="text-slate-300 text-base md:text-lg italic font-medium leading-relaxed">
                  &quot;{testimonials[activeCaseStudy].quote}&quot;
                </p>
              </div>

              <div className="mt-8 border-t border-slate-900 pt-6">
                <h4 className="font-extrabold text-white text-md tracking-tight">{testimonials[activeCaseStudy].company}</h4>
                <p className="text-slate-500 text-xs mt-0.5">Rakan Niaga Rasm Poppro Shop</p>
              </div>
            </div>

            {/* Metrics data counts */}
            <div className="lg:col-span-4 bg-[var(--primary-green,#00C880)] text-slate-950 rounded-2xl p-8 flex flex-col justify-center space-y-8 relative overflow-hidden shadow-2xl shadow-[var(--primary-green,#00C880)]/15">
              
              <div className="space-y-1">
                <h3 className="text-3xl md:text-4xl font-black tracking-tight text-slate-950">{testimonials[activeCaseStudy].gmv}</h3>
                <p className="text-slate-900 text-xs font-bold uppercase tracking-wider">{testimonials[activeCaseStudy].gmvDesc}</p>
              </div>

              <div className="w-full border-t border-white/20"></div>

              <div className="space-y-1">
                <h3 className="text-3xl md:text-4xl font-black tracking-tight text-slate-950">{testimonials[activeCaseStudy].reach}</h3>
                <p className="text-slate-900 text-xs font-bold uppercase tracking-wider">{testimonials[activeCaseStudy].reachDesc}</p>
              </div>

              <div className="w-full border-t border-white/20"></div>

              <div className="space-y-1">
                <h3 className="text-3xl md:text-4xl font-black tracking-tight text-slate-950">{testimonials[activeCaseStudy].peakGmv}</h3>
                <p className="text-slate-900 text-xs font-bold uppercase tracking-wider">{testimonials[activeCaseStudy].peakGmvDesc}</p>
              </div>

            </div>

          </div>

          {/* Indicators list */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, idx) => (
              <button 
                key={idx}
                onClick={() => setActiveCaseStudy(idx)}
                className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${idx === activeCaseStudy ? 'w-8 bg-[var(--primary-green)]' : 'w-2 bg-slate-850 hover:bg-slate-700'}`}
              />
            ))}
          </div>

        </div>
      </section>

      {/* 5. Section 4: Expandable Onboarding Steps ("Jadilah penjual Poppro Shop hari ini") */}
      <section className="py-20 px-4 max-w-7xl mx-auto bg-slate-950">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-2">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Jadilah penjual Poppro Shop hari ini</h2>
          <p className="text-slate-400 text-sm">Empat langkah mudah untuk melebarkan empayar digital perniagaan anda.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Step description accordions - Left Side */}
          <div className="lg:col-span-7 space-y-4">
            
            {[
              {
                title: "Daftar Akaun Penjual",
                time: "2 minit",
                desc: "Gunakan nombor telefon mudah alih atau alamat emel sah anda untuk menghasilkan akaun di Portal Pusat Penjual (Seller Center) kami.",
                detail: "Pendaftaran boleh dimulakan dengan klik terus butang \"Sertai Sekarang\". Anda boleh mengimport data profil sekiranya sudah bergelar pengguna Poppro aktif."
              },
              {
                title: "Lengkapkan Permohonan & Profil Kedai",
                time: "5 minit",
                desc: "Isikan butiran maklumat peribadi/syarikat secara teratur dan muat naik dokumen pengenalan berlesen yang diperlukan.",
                detail: "Dokumen yang diluluskan termasuk Kad Pengenalan (Individu) atau Sijil Pendaftaran Perniagaan SSM (Syarikat). Pastikan maklumat pendaftaran bertepatan bagi melancarkan proses saringan keselamatan."
              },
              {
                title: "Dapatkan Kelulusan Pengesahan",
                time: "Melalui Saringan",
                desc: "Pasukan audit keselamatan kami akan menyaring permohonan pendaftaran anda dengan teliti untuk kelayakan.",
                detail: "Saringan kelulusan adalah cepat dan automatik dalam tempoh 1 hingga 24 jam sahaja. Anda akan mendapat maklum balas status pemberitahuan terus ke telefon atau peti emel."
              },
              {
                title: "Pautkan Akaun & Sedia Memulai Jualan",
                time: "Serta-merta",
                desc: "Hubungkan akaun profil kedai bersama pemproses pautan kandungan perniagaan khusus anda.",
                detail: "Lancarkan kedai rasmi pertama, pautkan produk idaman untuk jualan di video pendek atau aliran siaran langsung (LIVE), dan tawarkan baucar promosi khas terus kepada pembeli anda!"
              }
            ].map((step, idx) => {
              const isOpen = activeStep === idx;
              return (
                <div 
                  key={idx} 
                  className={`border rounded-2xl transition-all overflow-hidden ${isOpen ? 'bg-slate-900 border-slate-800 shadow-lg' : 'bg-transparent border-slate-900 hover:border-slate-800'}`}
                >
                  <button 
                    onClick={() => setActiveStep(idx)}
                    className="w-full text-left p-6 flex justify-between items-center cursor-pointer"
                  >
                    <div className="flex gap-4 items-center">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs shrink-0 ${isOpen ? 'bg-[var(--primary-green)] text-black font-black' : 'bg-slate-800 text-slate-400'}`}>
                        {idx + 1}
                      </div>
                      <div>
                        <h3 className="text-sm font-extrabold text-white flex items-center gap-2 flex-wrap">
                          {step.title}
                          <span className="text-[10px] bg-slate-800 text-slate-400 px-2 py-0.5 rounded-full font-bold uppercase tracking-wider">{step.time}</span>
                        </h3>
                        <p className="text-xs text-slate-400 mt-1 lines-clamp-1">{step.desc}</p>
                      </div>
                    </div>
                    <div>
                      {isOpen ? <ChevronUp size={16} className="text-white" /> : <ChevronDown size={16} className="text-slate-500" />}
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div 
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="px-6 pb-6 pt-1 border-t border-slate-950/20 text-xs text-slate-400 leading-relaxed space-y-3"
                      >
                        <p>{step.detail}</p>
                        <div className="flex items-center gap-1.5 text-[#25f4ee] font-bold">
                          <span>Sedia untuk langkah ini</span>
                          <ArrowRight size={12} />
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* Dynamic Step Visual Guide - Right Side */}
          <div className="lg:col-span-5 bg-gradient-to-tr from-slate-900 to-slate-950 rounded-2xl border border-slate-850 p-6 md:p-8 text-center space-y-6 self-stretch flex flex-col justify-center">
            
            <div className="w-16 h-16 rounded-full bg-[var(--primary-green)]/10 border border-[var(--primary-green)]/20 flex items-center justify-center mx-auto text-[var(--primary-green)]">
              {activeStep === 0 && <Smartphone size={28} />}
              {activeStep === 1 && <Mail size={28} />}
              {activeStep === 2 && <ShieldCheck size={28} />}
              {activeStep === 3 && <Store size={28} />}
            </div>

            <div className="space-y-2">
              <span className="text-[var(--primary-green)] text-[10px] font-black tracking-widest uppercase">Visual Langkah {activeStep + 1}</span>
              <h4 className="text-md font-extrabold text-white">
                {activeStep === 0 && "Pengesahan Sentuhan Hubungan"}
                {activeStep === 1 && "Muat Naik Sijil SSM / Syarikat"}
                {activeStep === 2 && "Saringan Kelulusan Audit Laju"}
                {activeStep === 3 && "Integrasi Beg Kuning Video"}
              </h4>
              <p className="text-slate-400 text-xs max-w-sm mx-auto leading-relaxed">
                {activeStep === 0 && "Hanya gunakan talian telefon prabayar mahupun pascabayar yang aktif untuk menerima kod pesanan OTP ringkas."}
                {activeStep === 1 && "Ambil foto atau muat naik fail PDF deklarasi syarikat berdaftar SSM. Data disulitkan secara selamat 256-bit."}
                {activeStep === 2 && "Automasi pintar dari kami melakukan proses saringan identiti dan pengesahan cukai dengan sangat pantas."}
                {activeStep === 3 && "Sedia! Semua kandungan kreatif anda kini berstatus komersial dan menyalurkan aliran tunai jualan secara lancar."}
              </p>
            </div>

            <button 
              onClick={() => {
                const element = document.getElementById('registerCard');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="mt-4 bg-slate-900 hover:bg-slate-800 border border-slate-800 text-white hover:text-[var(--primary-green)] text-xs font-bold px-5 py-3 rounded-xl transition-all flex items-center justify-center gap-2 mx-auto cursor-pointer"
            >
              Daftar Kedai Sekarang <ExternalLink size={14} />
            </button>

          </div>

        </div>
      </section>

      {/* 6. Section 5: Soalan Lazim (FAQs) */}
      <section className="py-20 px-4 bg-slate-950 border-t border-slate-900">
        <div className="max-w-4xl mx-auto">
          
          <div className="text-center mb-16 space-y-2">
            <span className="text-[var(--primary-green)] text-xs font-bold uppercase tracking-widest">Pusat Rujukan</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Soalan Lazim</h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isFaqOpen = expandedFaq === idx;
              return (
                <div 
                  key={idx}
                  className="bg-slate-900/40 rounded-xl border border-slate-850 overflow-hidden"
                >
                  <button
                    onClick={() => setExpandedFaq(isFaqOpen ? null : idx)}
                    className="w-full text-left p-5 flex justify-between items-center text-sm font-bold text-white hover:text-[#25f4ee] transition-colors cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    <span className="ml-4 shrink-0">
                      {isFaqOpen ? <ChevronUp size={16} className="text-[var(--primary-green)]" /> : <ChevronDown size={16} className="text-slate-400" />}
                    </span>
                  </button>
                  
                  <AnimatePresence initial={false}>
                    {isFaqOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="px-5 pb-5 pt-1 text-xs text-slate-450 leading-relaxed border-t border-slate-950/20"
                      >
                        <p className="text-slate-400 font-medium">{faq.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 7. Footer Group Block */}
      <footer className="bg-slate-950 text-slate-500 text-xs py-16 px-4 border-t border-slate-900 relative">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          
          <div className="space-y-3">
            <h4 className="font-bold text-white uppercase tracking-wider text-xs">Syarikat</h4>
            <ul className="space-y-2.5">
              <li className="hover:text-white cursor-pointer transition-colors" onClick={handleBackToPoppro}>Tonton Poppro</li>
              <li className="hover:text-white cursor-pointer transition-colors" onClick={() => navigate('/about')}>Mengenai</li>
              <li className="hover:text-white cursor-pointer transition-colors" onClick={() => navigate('/newsroom')}>Bilik Berita</li>
              <li className="hover:text-white cursor-pointer transition-colors" onClick={() => navigate('/careers')}>Kerjaya</li>
              <li className="hover:text-white cursor-pointer transition-colors" onClick={() => navigate('/contact')}>Hubungi Kami</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="font-bold text-white uppercase tracking-wider text-xs">Produk</h4>
            <ul className="space-y-2.5">
              <li className="hover:text-white cursor-pointer transition-colors" onClick={() => {
                const element = document.getElementById('registerCard');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}>Platform Penjual</li>
              <li className="hover:text-white cursor-pointer transition-colors" onClick={() => navigate('/shop')}>Poppro Shop</li>
              <li className="hover:text-white cursor-pointer transition-colors" onClick={() => navigate('/ads')}>Sistem Iklan</li>
              <li className="hover:text-white cursor-pointer transition-colors" onClick={() => navigate('/for-good')}>Poppro for Good</li>
              <li className="hover:text-white cursor-pointer transition-colors" onClick={() => navigate('/editor')}>Pusat Kreatif</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="font-bold text-white uppercase tracking-wider text-xs">Sokongan</h4>
            <ul className="space-y-2.5">
              <li className="hover:text-white cursor-pointer transition-colors" onClick={() => navigate('/support')}>Pusat Bantuan</li>
              <li className="hover:text-white cursor-pointer transition-colors" onClick={() => navigate('/safety')}>Panduan Keselamatan</li>
              <li className="hover:text-white cursor-pointer transition-colors" onClick={() => navigate('/new-user-guide')}>Garis Panduan</li>
              <li className="hover:text-white cursor-pointer transition-colors" onClick={() => navigate('/privacy-settings')}>Pusat Privasi</li>
              <li className="hover:text-white cursor-pointer transition-colors" onClick={() => navigate('/support/verify-card')}>Pengesahan Kad</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="font-bold text-white uppercase tracking-wider text-xs">Undang-undang</h4>
            <ul className="space-y-2.5">
              <li className="hover:text-white cursor-pointer transition-colors" onClick={() => navigate('/terms')}>Terma Perkhidmatan</li>
              <li className="hover:text-white cursor-pointer transition-colors" onClick={() => navigate('/privacy-settings')}>Dasar Privasi</li>
              <li className="hover:text-white cursor-pointer transition-colors" onClick={() => navigate('/terms')}>Syarat Jualan</li>
              <li className="hover:text-white cursor-pointer transition-colors">Perlindungan Cukai</li>
              <li className="hover:text-white cursor-pointer transition-colors" onClick={() => navigate('/intellectual-property')}>Garis Panduan Hak Cipta</li>
            </ul>
          </div>

        </div>

        {/* Outer Fine Print Row */}
        <div className="max-w-7xl mx-auto border-t border-slate-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[11px]">
          <div className="flex flex-wrap gap-4 text-slate-600">
            <span>© {new Date().getFullYear()} Poppro Shop. Hak cipta terpelihara.</span>
            <span className="hover:text-slate-400 cursor-pointer">Dasar dan Syarat</span>
            <span className="hover:text-slate-400 cursor-pointer">Dasar Kuki</span>
            <span className="hover:text-slate-400 cursor-pointer" onClick={() => navigate('/intellectual-property')}>Perlindungan Harta Intelek</span>
          </div>

          {/* Bottom language selector mockup */}
          <div className="flex gap-4">
            <span className="hover:text-white cursor-pointer">Facebook</span>
            <span className="hover:text-white cursor-pointer">Instagram</span>
            <span className="hover:text-white cursor-pointer">YouTube</span>
          </div>
        </div>
      </footer>

    </div>
  );
}
