import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { 
  Shield, 
  Zap, 
  LayoutDashboard, 
  Video, 
  Activity,
  User, 
  UserCheck,
  Book,
  Laptop,
  Plus, 
  Search,
  MoreHorizontal,
  MessageSquare,
  Send,
  Bell,
  Home,
  Compass,
  ArrowLeft,
  Wrench,
  RefreshCw,
  Coins,
  Smartphone,
  Globe,
  Upload,
  Target,
  Palette,
  Settings,
  Moon,
  Sun,
  HelpCircle,
  MoreVertical,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  Check,
  X,
  ShoppingBag,
  Calculator,
  Clock,
  FileText,
  Map as MapIcon
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useAuth } from '../data/context/AuthContext';
import { useUI } from '../data/context/UIContext';
import Logo from './Logo';
import LoginModal from './LoginModal';
import SearchOverlay from './SearchOverlay';
import FloatingLogo from './FloatingLogo';
import CookieBanner from './CookieBanner';
import ThemesPage from './ThemesPage';
import CalculatorApp from './CalculatorApp';
import ClockApp from './ClockApp';
import NotepadApp from './NotepadApp';
import MapApp from './MapApp';

interface MainLayoutProps {
  children: React.ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  const { user, logout } = useAuth();
  const { isLoginModalOpen, openLoginModal, closeLoginModal, isSearchOpen, openSearch } = useUI();
  const location = useLocation();
  const navigate = useNavigate();
  const [isMoreMenuOpen, setIsMoreMenuOpen] = useState(false);
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);
  const [isHeaderMoreMenuOpen, setIsHeaderMoreMenuOpen] = useState(false);
  const [isComputerMenuOpen, setIsComputerMenuOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('English (UK)');
  const [isThemesModalOpen, setIsThemesModalOpen] = useState(false);
  const [isCalculatorModalOpen, setIsCalculatorModalOpen] = useState(false);
  const [isClockModalOpen, setIsClockModalOpen] = useState(false);
  const [isNotepadModalOpen, setIsNotepadModalOpen] = useState(false);
  const [isMapModalOpen, setIsMapModalOpen] = useState(false);
  const [isSetTimeExpanded, setIsSetTimeExpanded] = useState(location.pathname === '/books');
  const [isSuperExpanded, setIsSuperExpanded] = useState(location.pathname === '/themes');
  const [isTermsExpanded, setIsTermsExpanded] = useState(false);
  const [isSyarikatExpanded, setIsSyarikatExpanded] = useState(false);
  const [isProgramExpanded, setIsProgramExpanded] = useState(false);

  useEffect(() => {
    const savedText = localStorage.getItem('poppro-text-color');
    const savedBg = localStorage.getItem('poppro-bg-color');
    const savedTheme = localStorage.getItem('poppro-theme') || 'light';
    
    if (savedText) {
      document.documentElement.style.setProperty('--primary-green', savedText);
    }
    if (savedBg) {
      document.documentElement.style.setProperty('--bg-dark', savedBg);
      document.body.style.backgroundColor = savedBg;
    }
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, []);

  const toggleTheme = () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('poppro-theme', newTheme);
    
    if (newTheme === 'light') {
      document.documentElement.style.setProperty('--bg-dark', '#FFFFFF');
      document.body.style.backgroundColor = '#FFFFFF';
      localStorage.setItem('poppro-bg-color', '#FFFFFF');
    } else {
      document.documentElement.style.setProperty('--bg-dark', '#0A1118');
      document.body.style.backgroundColor = '#0A1118';
      localStorage.setItem('poppro-bg-color', '#0A1118');
    }
  };

  const languages = [
    'English (UK)', 'Azərbaycan', 'Bahasa Indonesia', 'Bahasa Melayu', 'Basa Jawa', 
    'Català', 'Cebuano', 'Čeština', 'Dansk', 'Deutsch', 'Eesti', 'English (US)', 
    'Español', 'Español (Latinoamérica)', 'Filipino', 'Français', 'Français (Canada)', 
    'Gaeilge', 'Hrvatski', 'Íslenska', 'Italiano', 'Kiswahili', 'Latviešu', 
    'Lietuvių', 'Magyar', 'Nederlands', 'norsk (bokmål)', 'Oʻzbek', 'Polski', 
    'Português', 'Português (Brasil)', 'Română', 'Shqip', 'Slovenčina', 
    'Slovenščina', 'Suomi', 'Svenska', 'Tiếng Việt', 'Türkçe', 'Ελληνικά', 
    'Български', 'Қазақsha', 'Русский', 'Українська', 'עברית', 'اردو', 
    'العربية', 'हिंदी', 'বাংলা', 'ภาษาไทย', 'မြန်မာ', 'ខ្មែر', '日本語', 
    '中文 (繁體)', '中文 (简体)', '한국어'
  ];

  const navItems = [
    { 
      icon: Zap, 
      labelGreen: 'Su', 
      labelWhite: 'per', 
      path: '/',
      subItems: [
        { icon: Palette, labelGreen: 'Tha', labelWhite: 'mes', action: 'themes' },
        { icon: Calculator, labelGreen: 'Cal', labelWhite: 'culator', action: 'calculator' },
        { icon: Clock, labelGreen: 'Clo', labelWhite: 'ck', action: 'clock' },
        { icon: FileText, labelGreen: 'Not', labelWhite: 'epad', action: 'notepad' },
        { icon: MapIcon, labelGreen: 'Ma', labelWhite: 'ps', action: 'maps' },
      ]
    },
    { icon: UserCheck, labelGreen: 'Hun', labelWhite: 'ter', path: '/hunter' },
    { icon: Compass, labelGreen: 'Exp', labelWhite: 'lore', path: '/explore' },
    { icon: UserCheck, labelGreen: 'Fri', labelWhite: 'ends', path: '/friends' },
    { icon: Shield, labelGreen: 'Trans', labelWhite: 'parency', path: '/transparency' },
    { 
      icon: LayoutDashboard, 
      labelGreen: 'Work', 
      labelWhite: 'space', 
      path: '/following',
      subItems: [
        { icon: Book, labelGreen: 'Boo', labelWhite: 'ks', path: '/books' }
      ]
    },
    { icon: Video, labelGreen: 'LI', labelWhite: 'VE', path: '/live' },
    { icon: Upload, labelGreen: 'Pub', labelWhite: 'lish', path: '/editor' },
    { icon: Activity, labelGreen: 'Mon', labelWhite: 'itor', path: '/monitor' },
    { icon: User, labelGreen: 'Pro', labelWhite: 'file', path: '/profile' },
  ];

  const moreMenuGroups = [
    {
      title: 'Settings',
      items: [
        { icon: Globe, labelGreen: 'Englis', labelWhite: 'h (UK)', isLanguage: true },
        { icon: Moon, labelGreen: 'Dark ', labelWhite: 'mode', isThemeToggle: true },
      ]
    },
    {
      title: 'Tools',
      items: [
        { icon: Video, labelGreen: 'poppro ', labelWhite: 'Studio', action: 'studio' },
        { icon: Sparkles, labelGreen: 'Create ', labelWhite: 'poppro effects' },
      ]
    },
    {
      title: 'Other',
      items: [
        { icon: HelpCircle, labelGreen: 'Supp', labelWhite: 'ort' },
      ]
    }
  ];

  const liveNavItems = [
    { icon: ArrowLeft, labelGreen: 'Ba', labelWhite: 'ck', path: '/' },
    { icon: Video, labelGreen: 'Explore ', labelWhite: 'LIVE', path: '/live' },
    { icon: Video, labelGreen: 'Go ', labelWhite: 'LIVE', path: '/live/go' },
    { icon: Wrench, labelGreen: 'Creator ', labelWhite: 'Tools', path: '/live/tools' },
    { icon: MoreHorizontal, labelGreen: 'Mo', labelWhite: 're', path: '/live/more' },
  ];

  const recommendedLiveCreators = [
    { id: 1, name: 'pakman35...', handle: 'TUAN MAN', viewers: 349, avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=pakman' },
    { id: 2, name: 'cgazilahaini', handle: 'cgazilahaini', viewers: 92, avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=cgazilahaini' },
    { id: 3, name: 'kuashraf11', handle: 'rey', viewers: 400, avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=kuashraf' },
    { id: 4, name: 'pusat.sum...', handle: 'PUSAT SUMBER...', viewers: 75, avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=pusat' },
    { id: 5, name: 'putrnz', handle: 'AL', viewers: 68, avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=putrnz' },
    { id: 6, name: 'timtim.mm...', handle: 'Timtim...', viewers: 59, avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=timtim' },
    { id: 7, name: 'piyedkikan...', handle: 'piyedkikanmurah', viewers: 910, avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=piyed' },
    { id: 8, name: 'smk.abaka...', handle: 'TVPSS SMK Aba...', viewers: 120, avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=smk' },
    { id: 9, name: 'azmiziikan...', handle: 'azmiziazmizi743', viewers: 53, avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=azmizi' },
    { id: 10, name: 'thebigat94', handle: 'Adnan', viewers: 89, avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=thebigat' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="flex flex-col md:flex-row h-[100dvh] bg-[var(--bg-dark)] text-[var(--text-main)] overflow-hidden transition-colors duration-500 justify-between">
      <aside className="hidden md:flex w-[240px] flex-shrink-0 flex-col pt-2 pb-4 px-2 overflow-y-auto scrollbar-hide bg-[var(--bg-dark)] border-r border-[var(--border-color)]">
        <div className="mb-0 px-2">
          <a href="/" className="flex items-center gap-2 mb-2">
            <span className="text-2xl font-black italic tracking-tighter">
              <span className="text-[var(--primary-green)]">Pop</span>
              <span className="text-[var(--text-main)]">pro</span>
            </span>
          </a>
          
          <div className="mb-2 relative">
            <input
              type="text"
              placeholder="Search"
              className="w-full bg-[var(--bg-dark)] border border-[var(--border-color)] rounded-lg py-1 px-4 outline-none transition-all text-sm"
            />
          </div>
        </div>

        <nav className="space-y-0 relative">
          {location.pathname.startsWith('/live') ? (
            <div className="flex flex-col h-full">
              <div className="space-y-1 mb-6">
                {liveNavItems.map((item: any) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`flex items-center gap-2.5 p-2.5 rounded-lg transition-colors ${
                      isActive(item.path) 
                        ? 'text-[var(--primary-green)]' 
                        : 'hover:bg-[var(--bg-dark)] text-[var(--text-main)]'
                    }`}
                  >
                    <item.icon size={24} strokeWidth={isActive(item.path) ? 3 : 2} />
                    <span className={`text-lg font-bold tracking-tight ${isActive(item.path) ? 'text-[var(--primary-green)]' : ''}`}>
                      <span className={isActive(item.path) ? 'text-[var(--primary-green)]' : 'text-[var(--primary-green)]'}>{item.labelGreen}</span>
                      <span className={isActive(item.path) ? 'text-[var(--primary-green)]' : 'text-[var(--text-main)]'}>{item.labelWhite}</span>
                    </span>
                  </Link>
                ))}
              </div>

              {!user && (
                <div className="px-3 mb-6">
                  <button 
                    onClick={openLoginModal}
                    className="w-full bg-[var(--primary-green)] hover:bg-[var(--primary-green)]/90 text-[var(--bg-dark)] font-bold py-3 px-4 rounded-lg transition-colors"
                  >
                    Log in
                  </button>
                </div>
              )}

              <div className="flex-1 overflow-y-auto scrollbar-hide border-t border-[var(--border-color)] pt-4">
                <div className="flex items-center justify-between px-3 mb-4">
                  <h3 className="text-sm font-semibold text-[var(--text-secondary)]">Pencipta LIVE yang disyorkan</h3>
                  <RefreshCw size={14} className="text-[var(--text-secondary)] cursor-pointer hover:text-[var(--text-main)]" />
                </div>
                <div className="space-y-3 px-2">
                  {recommendedLiveCreators.map(creator => (
                    <div key={creator.id} className="flex items-center justify-between group cursor-pointer p-1 hover:bg-[var(--bg-dark)] rounded-lg">
                      <div className="flex items-center gap-3 overflow-hidden">
                        <div className="relative shrink-0">
                          <img src={creator.avatar} alt={creator.name} className="w-8 h-8 rounded-full bg-[var(--sidebar-bg)]" />
                          <div className="absolute -bottom-1 -right-1 bg-[#ff0050] text-white text-[8px] font-bold px-1 rounded-sm border border-[var(--bg-dark)]">
                            LIVE
                          </div>
                        </div>
                        <div className="flex flex-col overflow-hidden">
                          <span className="text-sm font-bold text-[var(--text-main)] truncate">{creator.name}</span>
                          <span className="text-xs text-[var(--text-secondary)] truncate">{creator.handle}</span>
                        </div>
                      </div>
                      <span className="text-xs font-medium text-[var(--text-main)] shrink-0 pl-2">{creator.viewers}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            navItems.map((item: any) => {
              const isProfile = item.path === '/profile';
              const hasSubItems = item.subItems && item.subItems.length > 0;
              const isExpanded = item.labelGreen === 'Work' ? isSetTimeExpanded : (item.labelGreen === 'Su' ? isSuperExpanded : false);
              
              return (
                <div key={item.path} className="flex flex-col">
                  <Link
                    to={item.path}
                    onClick={(e) => {
                      if (isProfile && !user) {
                        e.preventDefault();
                        openLoginModal();
                      }
                      if (hasSubItems) {
                        if (item.labelGreen === 'Work') {
                          setIsSetTimeExpanded(!isSetTimeExpanded);
                        }
                        if (item.labelGreen === 'Su') {
                          setIsSuperExpanded(!isSuperExpanded);
                        }
                      }
                    }}
                  className={`flex items-center gap-2.5 p-1.5 rounded-lg transition-colors ${
                    isActive(item.path) 
                      ? 'bg-[var(--primary-green)]/5' 
                      : 'hover:bg-[var(--bg-dark)]'
                  }`}
                >
                  <item.icon size={26} strokeWidth={isActive(item.path) ? 3 : 2} className={isActive(item.path) ? 'text-[var(--primary-green)]' : 'text-[var(--text-main)]'} />
                  <span className="text-xl font-black tracking-tighter flex-1">
                    <span className="text-[var(--primary-green)]">{item.labelGreen}</span>
                    <span className="text-[var(--text-main)]">{item.labelWhite}</span>
                  </span>
                </Link>

                <AnimatePresence>
                  {hasSubItems && isExpanded && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="pl-8 space-y-1 mt-1 overflow-hidden"
                    >
                      {item.subItems.map((subItem: any) => {
                        if (subItem.action) {
                          return (
                            <button
                              key={subItem.action}
                              onClick={() => {
                                if (subItem.action === 'themes') {
                                  setIsThemesModalOpen(true);
                                }
                                if (subItem.action === 'calculator') {
                                  setIsCalculatorModalOpen(true);
                                }
                                if (subItem.action === 'clock') {
                                  setIsClockModalOpen(true);
                                }
                                if (subItem.action === 'notepad') {
                                  setIsNotepadModalOpen(true);
                                }
                                if (subItem.action === 'maps') {
                                  setIsMapModalOpen(true);
                                }
                              }}
                              className="w-full flex items-center gap-3 p-2 rounded-lg transition-colors hover:bg-[var(--bg-dark)]"
                            >
                              <subItem.icon size={20} className="text-[var(--text-secondary)]" />
                              <span className="text-lg font-bold tracking-tight text-left">
                                <span className="text-[var(--primary-green)]">{subItem.labelGreen}</span>
                                <span className="text-[var(--text-main)]">{subItem.labelWhite}</span>
                              </span>
                            </button>
                          );
                        }
                        return (
                          <Link
                            key={subItem.path}
                            to={subItem.path}
                            className={`flex items-center gap-3 p-2 rounded-lg transition-colors ${
                              isActive(subItem.path) 
                                ? 'bg-[var(--primary-green)]/10' 
                                : 'hover:bg-[var(--bg-dark)]'
                            }`}
                          >
                            <subItem.icon size={20} className={isActive(subItem.path) ? 'text-[var(--primary-green)]' : 'text-[var(--text-secondary)]'} />
                            <span className="text-lg font-bold tracking-tight">
                              <span className="text-[var(--primary-green)]">{subItem.labelGreen}</span>
                              <span className="text-[var(--text-main)]">{subItem.labelWhite}</span>
                            </span>
                          </Link>
                        );
                      })}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })
        )}
        </nav>

        <div className="mt-6 space-y-0 relative">
          <AnimatePresence>
            {isMoreMenuOpen && (
              <motion.div 
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                className="absolute bottom-full left-0 w-full mb-2 bg-[var(--sidebar-bg)] border border-[var(--border-color)] rounded-xl shadow-2xl overflow-hidden z-50 min-h-[100px]"
              >
                {!isLanguageMenuOpen ? (
                  <div className="flex flex-col">
                    <div className="flex items-center justify-between px-4 py-3 border-b border-[var(--border-color)]">
                      <span className="text-xl font-bold text-[var(--text-main)]">More</span>
                      <button 
                        onClick={() => setIsMoreMenuOpen(false)}
                        className="p-1.5 hover:bg-[var(--bg-dark)] rounded-full transition-colors"
                      >
                        <X size={20} className="text-[var(--text-main)]" />
                      </button>
                    </div>

                    <div className="py-2">
                      {moreMenuGroups.map((group, groupIdx) => (
                      <div key={groupIdx}>
                        {groupIdx > 0 && <div className="mx-4 my-2"></div>}
                        <div className="px-4 py-2 text-[13px] font-semibold text-[var(--text-secondary)]">
                          {group.title}
                        </div>
                        {group.items.map((item, idx) => (
                          <button
                            key={idx}
                            onClick={() => {
                              if (item.isLanguage) {
                                setIsLanguageMenuOpen(true);
                              }
                              if (item.isThemeToggle) {
                                toggleTheme();
                              }
                            }}
                            className="w-full flex items-center justify-between px-4 py-2.5 hover:bg-[var(--bg-dark)] transition-colors text-left group"
                          >
                            <div className="flex items-center gap-3">
                              <item.icon size={20} className="text-[var(--text-secondary)] group-hover:text-[var(--text-main)] transition-colors" />
                              <span className="text-lg font-bold tracking-tight">
                                <span className="text-[var(--primary-green)]">{item.labelGreen}</span>
                                <span className="text-[var(--text-main)]">{item.isLanguage ? selectedLanguage.replace('Englis', '') : item.labelWhite}</span>
                              </span>
                            </div>
                            {item.isLanguage ? (
                              <ChevronRight size={16} className="text-[var(--text-secondary)]" />
                            ) : item.isThemeToggle ? (
                              <div className="flex items-center bg-[var(--bg-dark)] p-1 rounded-full border border-[var(--border-color)]">
                                <div className={`p-1 ${document.documentElement.getAttribute('data-theme') === 'dark' ? 'text-[var(--text-secondary)]' : 'bg-[var(--primary-green)] rounded-full text-white shadow-sm'}`}><Sun size={14} /></div>
                                <div className={`p-1 ${document.documentElement.getAttribute('data-theme') === 'dark' ? 'bg-[var(--primary-green)] rounded-full text-white shadow-sm' : 'text-[var(--text-secondary)]'}`}><Moon size={14} fill="currentColor" /></div>
                              </div>
                            ) : null}
                          </button>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
                ) : (
                  <div className="flex flex-col h-[400px]">
                    <div className="px-4 py-2 flex items-center gap-2">
                      <button 
                        onClick={() => setIsLanguageMenuOpen(false)}
                        className="p-1 hover:bg-[var(--bg-dark)] rounded-full transition-colors"
                      >
                        <ChevronLeft size={20} className="text-[var(--text-main)]" />
                      </button>
                      <span className="font-bold text-lg text-[var(--text-main)]">Language</span>
                    </div>
                    <div className="flex-1 overflow-y-auto scrollbar-hide py-2">
                      {languages.map((lang) => (
                        <button
                          key={lang}
                          onClick={() => {
                            setSelectedLanguage(lang);
                            setIsLanguageMenuOpen(false);
                          }}
                          className="w-full flex items-center justify-between px-4 py-2 hover:bg-[var(--bg-dark)] transition-colors text-left"
                        >
                          <span className={`text-base ${selectedLanguage === lang ? 'text-[var(--primary-green)] font-bold' : 'text-[var(--text-main)]'}`}>
                            {lang}
                          </span>
                          {selectedLanguage === lang && <Check size={16} className="text-[var(--primary-green)]" />}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>

          <button 
            onClick={() => {
              setIsMoreMenuOpen(!isMoreMenuOpen);
              if (isMoreMenuOpen) setIsLanguageMenuOpen(false);
            }}
            className={`w-full flex items-center gap-2.5 p-2 rounded-lg transition-colors ${isMoreMenuOpen ? 'bg-[var(--bg-dark)]' : 'hover:bg-[var(--bg-dark)]'}`}
          >
            <MoreHorizontal size={26} className="text-[var(--text-main)]" />
            <span className="text-xl font-black tracking-tighter">
              <span className="text-[var(--primary-green)]">Mo</span>
              <span className="text-[var(--text-main)]">re</span>
            </span>
          </button>

          {!user && !location.pathname.startsWith('/live') && (
            <div className="px-1 py-0.5">
              <button 
                onClick={openLoginModal}
                className="w-full py-2 bg-[#00c685] hover:brightness-110 text-white rounded-lg font-bold text-lg"
              >
                Log in
              </button>
            </div>
          )}

          <div className="mt-1 mb-1 border-t border-[var(--border-color)] w-3/4 mx-2"></div>

          <div className="text-[12px] text-[var(--text-main)] px-2 font-bold select-none cursor-default">
              <div className="space-y-0.5">
                <div>
                  <button 
                    onClick={() => setIsSyarikatExpanded(!isSyarikatExpanded)}
                    className="hover:underline text-[12px] font-bold text-[var(--text-main)]"
                  >
                    Company
                  </button>
                  <AnimatePresence>
                    {isSyarikatExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="flex flex-wrap gap-x-2 gap-y-0.5 mt-1 overflow-hidden"
                      >
                        <Link to="/about" className="text-[11px] font-normal text-[var(--text-secondary)] hover:underline">About</Link>
                        <Link to="/newsroom" className="text-[11px] font-normal text-[var(--text-secondary)] hover:underline">Newsroom</Link>
                        <Link to="/contact" className="text-[11px] font-normal text-[var(--text-secondary)] hover:underline">Contact</Link>
                        <Link to="/careers" className="text-[11px] font-normal text-[var(--text-secondary)] hover:underline">Careers</Link>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <div>
                  <button 
                    onClick={() => setIsProgramExpanded(!isProgramExpanded)}
                    className="hover:underline text-[12px] font-bold text-[var(--text-main)]"
                  >
                    Programs
                  </button>
                  <AnimatePresence>
                    {isProgramExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="flex flex-wrap gap-x-2 gap-y-0.5 mt-1 overflow-hidden"
                      >
                        <Link to="/for-good" className="text-[11px] font-normal text-[var(--text-secondary)] hover:underline whitespace-nowrap">Poppro for Good</Link>
                        <Link to="/ads" className="text-[11px] font-normal text-[var(--text-secondary)] hover:underline whitespace-nowrap">Ads</Link>
                        <Link to="#" className="text-[11px] font-normal text-[var(--text-secondary)] hover:underline whitespace-nowrap">Sell on Poppro Shop</Link>
                        <Link to="#" className="text-[11px] font-normal text-[var(--text-secondary)] hover:underline whitespace-nowrap">Poppro LIVE Agency</Link>
                        <Link to="#" className="text-[11px] font-normal text-[var(--text-secondary)] hover:underline whitespace-nowrap">Developers</Link>
                        <Link to="/transparency" className="text-[11px] font-normal text-[var(--text-secondary)] hover:underline whitespace-nowrap">Transparency</Link>
                        <Link to="#" className="text-[11px] font-normal text-[var(--text-secondary)] hover:underline whitespace-nowrap">Poppro Embeds</Link>
                        <Link to="#" className="text-[11px] font-normal text-[var(--text-secondary)] hover:underline whitespace-nowrap">SoundOn Music Distribution</Link>
                        <Link to="/live" className="text-[11px] font-normal text-[var(--text-secondary)] hover:underline whitespace-nowrap">Poppro Live</Link>
                        <Link to="#" className="text-[11px] font-normal text-[var(--text-secondary)] hover:underline whitespace-nowrap">Poppro Shop</Link>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <div>
                  <button 
                    onClick={() => setIsTermsExpanded(!isTermsExpanded)}
                    className="hover:underline text-[12px] font-bold text-[var(--text-main)]"
                  >
                    Terms & Policies
                  </button>
                  <AnimatePresence>
                    {isTermsExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="flex flex-wrap gap-x-2 gap-y-0.5 mt-1 overflow-hidden"
                      >
                        <Link to="/support" className="text-[11px] font-normal text-[var(--text-secondary)] hover:underline whitespace-nowrap">Help</Link>
                        <Link to="/safety" className="text-[11px] font-normal text-[var(--text-secondary)] hover:underline whitespace-nowrap">Safety</Link>
                        <Link to="/terms" className="text-[11px] font-normal text-[var(--text-secondary)] hover:underline whitespace-nowrap">Terms</Link>
                        <Link to="/privacy-settings" className="text-[11px] font-normal text-[var(--text-secondary)] hover:underline whitespace-nowrap">Privacy Policy</Link>
                        <Link to="#" className="text-[11px] font-normal text-[var(--text-secondary)] hover:underline whitespace-nowrap">Accessibility</Link>
                        <Link to="/support/privacy-safety" className="text-[11px] font-normal text-[var(--text-secondary)] hover:underline whitespace-nowrap">Privacy Center</Link>
                        <Link to="#" className="text-[11px] font-normal text-[var(--text-secondary)] hover:underline whitespace-nowrap">Creator Academy</Link>
                        <Link to="/new-user-guide" className="text-[11px] font-normal text-[var(--text-secondary)] hover:underline whitespace-nowrap">Community Guidelines</Link>
                        <Link to="#" className="text-[11px] font-normal text-[var(--text-secondary)] hover:underline whitespace-nowrap">Copyright</Link>
                        <Link to="#" className="text-[11px] font-normal text-[var(--text-secondary)] hover:underline whitespace-nowrap">Law Enforcement Guidelines</Link>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
                <p className="font-normal text-[var(--text-secondary)]">© 2026 Poppro</p>
              </div>
            </div>
          </div>
        </aside>

      <div className="flex-1 flex flex-col min-w-0 relative">
        <header className="hidden md:flex h-16 items-center justify-between px-8 bg-[var(--bg-dark)] z-10">
          <div className="flex-1"></div>

          <div className="flex items-center bg-[var(--bg-dark)] border border-[var(--border-color)] rounded-full p-1 ml-auto">
            <div className="relative flex items-center">
              <button 
                onClick={() => setIsComputerMenuOpen(!isComputerMenuOpen)}
                className="flex items-center gap-2 px-4 py-1.5 hover:bg-[var(--sidebar-bg)] rounded-full font-bold transition-colors text-sm group"
              >
                <Laptop size={18} className="text-[var(--text-secondary)] group-hover:text-[var(--text-main)] transition-colors" />
                <span className="text-[var(--text-main)]">
                  {user ? 'Creator Studio' : 'Computer'}
                </span>
                <ChevronDown size={14} className={`text-[var(--text-secondary)] transition-transform ${isComputerMenuOpen ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {isComputerMenuOpen && (
                  <>
                    <div className="fixed inset-0 z-40" onClick={() => setIsComputerMenuOpen(false)} />
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      className="absolute top-full right-0 mt-2 w-[220px] bg-[var(--sidebar-bg)] border border-[var(--border-color)] rounded-xl shadow-2xl overflow-hidden z-50"
                    >
                      <div className="py-1">
                        {user && (
                          <Link 
                            to="/editor" 
                            onClick={() => setIsComputerMenuOpen(false)}
                            className="w-full flex items-center gap-3 px-4 py-3 hover:bg-[var(--bg-dark)] transition-colors text-left group"
                          >
                            <Video size={20} className="text-[var(--text-secondary)] group-hover:text-[var(--primary-green)] transition-colors" />
                            <span className="text-base font-bold tracking-tight text-[var(--text-main)]">
                              Studio Dashboard
                            </span>
                          </Link>
                        )}
                        <Link 
                          to="/get-coins" 
                          onClick={() => setIsComputerMenuOpen(false)}
                          className="w-full flex items-center gap-3 px-4 py-3 hover:bg-[var(--bg-dark)] transition-colors text-left group"
                        >
                          <Coins size={20} className="text-[var(--text-secondary)] group-hover:text-[var(--primary-green)] transition-colors" />
                          <span className="text-base font-bold tracking-tight text-[var(--text-main)]">
                            Get Coins
                          </span>
                        </Link>
                        <Link 
                          to="/get-app" 
                          onClick={() => setIsComputerMenuOpen(false)}
                          className="w-full flex items-center gap-3 px-4 py-3 hover:bg-[var(--bg-dark)] transition-colors text-left group"
                        >
                          <Smartphone size={20} className="text-[var(--text-secondary)] group-hover:text-[var(--primary-green)] transition-colors" />
                          <span className="text-base font-bold tracking-tight text-[var(--text-main)]">
                            Get App
                          </span>
                        </Link>
                      </div>
                    </motion.div>
                  </>
                )}
              </AnimatePresence>
            </div>

            <div className="h-4 w-[1px] bg-[var(--border-color)] mx-2"></div>

            {user ? (
              <div className="flex items-center gap-2 pr-1 relative">
                <button 
                  onClick={() => navigate('/messages')}
                  className="p-2 rounded-full text-[var(--text-secondary)] hover:text-[var(--text-main)] hover:bg-[var(--sidebar-bg)] transition-colors"
                >
                  <Send size={20} />
                </button>
                <div 
                  onClick={() => navigate('/profile')}
                  className="flex items-center gap-3 px-3 py-1.5 hover:bg-[var(--sidebar-bg)] rounded-full transition-colors cursor-pointer"
                >
                  <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-[var(--primary-green)] to-[#00E0A0] flex items-center justify-center text-white font-bold text-xs shadow-lg shadow-[var(--primary-green)]/20">
                    {user.name?.charAt(0) || 'U'}
                  </div>
                  <span className="text-sm font-semibold text-[var(--text-main)]">{user.name}</span>
                </div>
                <button 
                  onClick={() => setIsHeaderMoreMenuOpen(!isHeaderMoreMenuOpen)}
                  className={`p-2 rounded-full text-[var(--text-secondary)] hover:text-[var(--text-main)] transition-colors ${isHeaderMoreMenuOpen ? 'bg-[var(--sidebar-bg)] text-[var(--text-main)]' : 'hover:bg-[var(--sidebar-bg)]'}`}
                >
                  <MoreHorizontal size={20} />
                </button>

                <AnimatePresence>
                  {isHeaderMoreMenuOpen && (
                    <>
                      <div className="fixed inset-0 z-40" onClick={() => setIsHeaderMoreMenuOpen(false)} />
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        className="absolute top-full right-0 mt-2 w-[220px] bg-[var(--sidebar-bg)] border border-[var(--border-color)] rounded-xl shadow-2xl overflow-hidden z-50"
                      >
                        <div className="py-1">
                          <button 
                            onClick={() => {
                              setIsHeaderMoreMenuOpen(false);
                              navigate('/editor');
                            }}
                            className="w-full flex items-center gap-3 px-4 py-3 hover:bg-[var(--bg-dark)] transition-colors text-left group"
                          >
                            <Video size={20} className="text-[var(--text-secondary)] group-hover:text-[var(--primary-green)] transition-colors" />
                            <span className="text-base font-bold tracking-tight">
                              <span className="text-[var(--primary-green)]">Creator </span>
                              <span className="text-[var(--text-main)]">tools</span>
                            </span>
                          </button>
                          <button 
                            onClick={() => {
                              setIsHeaderMoreMenuOpen(false);
                              navigate('/settings');
                            }}
                            className="w-full flex items-center gap-3 px-4 py-3 hover:bg-[var(--bg-dark)] transition-colors text-left group"
                          >
                            <Settings size={20} className="text-[var(--text-secondary)] group-hover:text-[var(--primary-green)] transition-colors" />
                            <span className="text-base font-bold tracking-tight">
                              <span className="text-[var(--primary-green)]">Set</span>
                              <span className="text-[var(--text-main)]">tings</span>
                            </span>
                          </button>
                          <button 
                            onClick={() => {
                              setIsHeaderMoreMenuOpen(false);
                              setIsMoreMenuOpen(true);
                              setIsLanguageMenuOpen(true);
                            }}
                            className="w-full flex items-center gap-3 px-4 py-3 hover:bg-[var(--bg-dark)] transition-colors text-left group"
                          >
                            <Globe size={20} className="text-[var(--text-secondary)] group-hover:text-[var(--primary-green)] transition-colors" />
                            <span className="text-base font-bold tracking-tight">
                              <span className="text-[var(--primary-green)]">Englis</span>
                              <span className="text-[var(--text-main)]">h (UK)</span>
                            </span>
                          </button>
                          <button 
                            onClick={() => {
                              setIsHeaderMoreMenuOpen(false);
                              navigate('/upload', { state: { view: 'feedback' } });
                            }}
                            className="w-full flex items-center gap-3 px-4 py-3 hover:bg-[var(--bg-dark)] transition-colors text-left group"
                          >
                            <HelpCircle size={20} className="text-[var(--text-secondary)] group-hover:text-[var(--primary-green)] transition-colors" />
                            <span className="text-base font-bold tracking-tight">
                              <span className="text-[var(--primary-green)]">Feedback </span>
                              <span className="text-[var(--text-main)]">and help</span>
                            </span>
                          </button>
                          <div className="h-[1px] bg-[var(--border-color)] my-1"></div>
                          <button 
                            onClick={() => {
                              setIsHeaderMoreMenuOpen(false);
                              logout();
                              navigate('/');
                            }}
                            className="w-full flex items-center gap-3 px-4 py-3 hover:bg-[var(--bg-dark)] transition-colors text-left group"
                          >
                            <span className="text-base font-bold tracking-tight text-[var(--text-main)]">
                              Log out
                            </span>
                          </button>
                        </div>
                      </motion.div>
                    </>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <div className="flex items-center gap-1 pr-1 relative">
                <button 
                  onClick={openLoginModal}
                  className="px-6 py-1.5 bg-[var(--primary-green)] hover:brightness-110 text-white rounded-full font-bold transition-all active:scale-[0.95] shadow-lg shadow-[var(--primary-green)]/10 text-sm"
                >
                  Log in
                </button>

                <button 
                  onClick={() => setIsHeaderMoreMenuOpen(!isHeaderMoreMenuOpen)}
                  className={`p-2 rounded-full text-[var(--text-secondary)] hover:text-[var(--text-main)] transition-colors ${isHeaderMoreMenuOpen ? 'bg-[var(--sidebar-bg)] text-[var(--text-main)]' : 'hover:bg-[var(--sidebar-bg)]'}`}
                >
                  <MoreHorizontal size={20} />
                </button>

                <AnimatePresence>
                  {isHeaderMoreMenuOpen && (
                    <>
                      <div className="fixed inset-0 z-40" onClick={() => setIsHeaderMoreMenuOpen(false)} />
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        className="absolute top-full right-0 mt-2 w-[220px] bg-[var(--sidebar-bg)] border border-[var(--border-color)] rounded-xl shadow-2xl overflow-hidden z-50"
                      >
                        <div className="py-1">
                          <button 
                            onClick={() => {
                              setIsHeaderMoreMenuOpen(false);
                              navigate('/editor');
                            }}
                            className="w-full flex items-center gap-3 px-4 py-3 hover:bg-[var(--bg-dark)] transition-colors text-left group"
                          >
                            <Video size={20} className="text-[var(--text-secondary)] group-hover:text-[var(--primary-green)] transition-colors" />
                            <span className="text-base font-bold tracking-tight">
                              <span className="text-[var(--primary-green)]">Creator </span>
                              <span className="text-[var(--text-main)]">tools</span>
                            </span>
                          </button>
                          <button 
                            onClick={() => {
                              setIsHeaderMoreMenuOpen(false);
                              navigate('/settings');
                            }}
                            className="w-full flex items-center gap-3 px-4 py-3 hover:bg-[var(--bg-dark)] transition-colors text-left group"
                          >
                            <Settings size={20} className="text-[var(--text-secondary)] group-hover:text-[var(--primary-green)] transition-colors" />
                            <span className="text-base font-bold tracking-tight">
                              <span className="text-[var(--primary-green)]">Set</span>
                              <span className="text-[var(--text-main)]">tings</span>
                            </span>
                          </button>
                          <button 
                            onClick={() => {
                              setIsHeaderMoreMenuOpen(false);
                              setIsMoreMenuOpen(true);
                              setIsLanguageMenuOpen(true);
                            }}
                            className="w-full flex items-center gap-3 px-4 py-3 hover:bg-[var(--bg-dark)] transition-colors text-left group"
                          >
                            <Globe size={20} className="text-[var(--text-secondary)] group-hover:text-[var(--primary-green)] transition-colors" />
                            <span className="text-base font-bold tracking-tight">
                              <span className="text-[var(--primary-green)]">Englis</span>
                              <span className="text-[var(--text-main)]">h (UK)</span>
                            </span>
                          </button>
                          <button 
                            onClick={() => {
                              setIsHeaderMoreMenuOpen(false);
                              navigate('/upload', { state: { view: 'feedback' } });
                            }}
                            className="w-full flex items-center gap-3 px-4 py-3 hover:bg-[var(--bg-dark)] transition-colors text-left group"
                          >
                            <HelpCircle size={20} className="text-[var(--text-secondary)] group-hover:text-[var(--primary-green)] transition-colors" />
                            <span className="text-base font-bold tracking-tight">
                              <span className="text-[var(--primary-green)]">Feedback </span>
                              <span className="text-[var(--text-main)]">and help</span>
                            </span>
                          </button>
                        </div>
                      </motion.div>
                    </>
                  )}
                </AnimatePresence>
              </div>
            )}
          </div>
        </header>

        {!((location.pathname === '/profile' || location.pathname === '/shop' || location.pathname === '/messages' || location.pathname.startsWith('/@'))) && (
          <header className="md:hidden sticky top-0 left-0 right-0 flex items-center justify-between px-4 py-3 z-50 bg-black border-b border-white/5">
            <div className="flex-1 flex justify-start">
              {location.pathname === '/' ? (
                 <div className="w-8 h-8">
                    <FloatingLogo />
                 </div>
              ) : (
                 <button onClick={() => navigate(-1)} className="text-white">
                    <ChevronLeft size={28} />
                 </button>
              )}
            </div>
            
            <div className="flex items-center justify-center gap-3">
              {location.pathname === '/' ? (
                <div className="flex items-center gap-3">
                  <button 
                    onClick={() => navigate('/explore')}
                    className={`text-[13px] font-bold whitespace-nowrap ${isActive('/explore') ? '' : 'opacity-60'}`}
                  >
                    <span className="text-[var(--primary-green)]">Tero</span>
                    <span className="text-white">kai</span>
                  </button>
                  <button className="text-[13px] font-bold whitespace-nowrap opacity-60">
                    <span className="text-[var(--primary-green)]">Meng</span>
                    <span className="text-white">ikuti</span>
                  </button>
                  <button className="text-[13px] font-bold whitespace-nowrap opacity-60">
                    <span className="text-[var(--primary-green)]">Rak</span>
                    <span className="text-white">an</span>
                  </button>
                  <div className="relative flex flex-col items-center">
                    <button className="text-[13px] font-bold whitespace-nowrap">
                      <span className="text-[var(--primary-green)]">Untuk</span>
                      <span className="text-white"> anda</span>
                    </button>
                    <div className="absolute -bottom-1.5 w-4 h-[2px] bg-white rounded-full"></div>
                  </div>
                </div>
              ) : location.pathname === '/shop' ? (
                 <span className="text-white font-bold text-lg">Kedai</span>
              ) : (
                <div className="flex items-center gap-4">
                  <Link to="/" className={`relative flex flex-col items-center ${isActive('/') ? '' : 'opacity-60'}`}>
                    <span className="text-[15px] font-bold transition-colors">
                      <span className="text-[var(--primary-green)]">Su</span>
                      <span className="text-white">per</span>
                    </span>
                    {isActive('/') && <div className="absolute -bottom-2 w-5 h-[3px] bg-[var(--primary-green)] rounded-full"></div>}
                  </Link>
                  <Link to="/hunter" className={`relative flex flex-col items-center ${isActive('/hunter') ? '' : 'opacity-60'}`}>
                    <span className="text-[15px] font-bold transition-colors">
                      <span className="text-[var(--primary-green)]">Hun</span>
                      <span className="text-white">ter</span>
                    </span>
                    {isActive('/hunter') && <div className="absolute -bottom-2 w-5 h-[3px] bg-[var(--primary-green)] rounded-full"></div>}
                  </Link>
                  <button className="relative flex flex-col items-center group opacity-60 hover:opacity-100 transition-opacity">
                    <span className="text-[15px] font-bold transition-colors">
                      <span className="text-[var(--primary-green)]">Mem</span>
                      <span className="text-white">ber</span>
                    </span>
                  </button>
                  <Link to="/transparency" className={`relative flex flex-col items-center ${isActive('/transparency') ? '' : 'opacity-60'}`}>
                    <span className="text-[15px] font-bold transition-colors">
                      <span className="text-[var(--primary-green)]">Tr</span>
                      <span className="text-white">ans</span>
                    </span>
                    {isActive('/transparency') && <div className="absolute -bottom-2 w-5 h-[3px] bg-[var(--primary-green)] rounded-full"></div>}
                  </Link>
                </div>
              )}
            </div>

            <div className="flex-1 flex justify-end">
              <button onClick={openSearch} className="active:scale-95 transition-transform">
                <Search size={22} className="text-white opacity-90" />
              </button>
            </div>
          </header>
        )}

        <main className={`flex-1 overflow-y-auto pb-[76px] md:pb-0 flex flex-col scrollbar-hide transition-colors duration-200 ${
          (location.pathname === '/profile' || location.pathname === '/shop' || location.pathname === '/messages' || location.pathname.startsWith('/@')) 
            ? 'bg-white' 
            : 'bg-[var(--bg-dark)]'
        }`}>
          {children}
        </main>

        <nav className={`md:hidden fixed bottom-0 left-0 right-0 flex items-center justify-around px-2 pt-2 pb-6 z-50 border-t transition-colors duration-200 ${
          (location.pathname === '/profile' || location.pathname === '/shop' || location.pathname === '/messages' || location.pathname.startsWith('/@')) 
            ? 'bg-white border-gray-100' 
            : 'bg-black border-white/5'
        }`}>
          <Link to="/" className={`flex flex-col items-center transition-colors ${
            (location.pathname === '/profile' || location.pathname === '/shop' || location.pathname === '/messages' || location.pathname.startsWith('/@'))
              ? (isActive('/') ? 'text-black' : 'text-gray-400')
              : (isActive('/') ? 'text-white' : 'text-white/60')
          }`}>
            <Home size={26} strokeWidth={isActive('/') ? 2.5 : 2} />
            <span className="text-[10px] mt-1 font-medium">
              <span className="text-[var(--primary-green)]">Recom</span>
              <span className={
                (location.pathname === '/profile' || location.pathname === '/shop' || location.pathname === '/messages' || location.pathname.startsWith('/@'))
                  ? (isActive('/') ? 'text-black' : 'text-gray-400')
                  : (isActive('/') ? 'text-white' : 'text-white/60')
              }>mendation</span>
            </span>
          </Link>
          <Link to="/friends" className={`flex flex-col items-center transition-colors ${
            (location.pathname === '/profile' || location.pathname === '/shop' || location.pathname === '/messages' || location.pathname.startsWith('/@'))
              ? (isActive('/friends') ? 'text-black' : 'text-gray-400')
              : (isActive('/friends') ? 'text-white' : 'text-white/60')
          }`}>
            <UserCheck size={25} strokeWidth={isActive('/friends') ? 2.5 : 2} />
            <span className="text-[10px] mt-1 font-medium">
              <span className="text-[var(--primary-green)]">Fri</span>
              <span className={
                (location.pathname === '/profile' || location.pathname === '/shop' || location.pathname === '/messages' || location.pathname.startsWith('/@'))
                  ? (isActive('/friends') ? 'text-black' : 'text-gray-400')
                  : (isActive('/friends') ? 'text-white' : 'text-white/60')
              }>ends</span>
            </span>
          </Link>
          <Link 
            to="/upload" 
            onClick={(e) => {
              if (!user) {
                e.preventDefault();
                openLoginModal();
              }
            }}
            className="relative group active:scale-95 transition-transform flex items-center justify-center"
          >
             <div className={`w-[45px] h-[30px] rounded-[8px] flex items-center justify-center relative ${
               (location.pathname === '/profile' || location.pathname === '/shop' || location.pathname === '/messages' || location.pathname.startsWith('/@'))
                 ? 'bg-black'
                 : 'bg-white'
             }`}>
                <div className="absolute left-[-4px] w-full h-full bg-[var(--primary-green)] rounded-[8px] -z-10"></div>
                <div className="absolute right-[-4px] w-full h-full bg-white rounded-[8px] -z-20"></div>
                <Plus size={22} className={
                  (location.pathname === '/profile' || location.pathname === '/shop' || location.pathname === '/messages' || location.pathname.startsWith('/@'))
                    ? "text-white font-black"
                    : "text-black font-black"
                } />
             </div>
          </Link>
          <Link 
            to="/activity" 
            onClick={(e) => {
              if (!user) {
                e.preventDefault();
                openLoginModal();
              }
            }}
            className={`flex flex-col items-center transition-colors ${
              (location.pathname === '/profile' || location.pathname === '/shop' || location.pathname === '/messages' || location.pathname.startsWith('/@'))
                ? (isActive('/activity') ? 'text-black' : 'text-gray-400')
                : (isActive('/activity') ? 'text-white' : 'text-white/60')
          }`}>
            <Bell size={26} strokeWidth={isActive('/activity') ? 2.5 : 2} fill={isActive('/activity') ? 'currentColor' : 'none'} />
            <span className="text-[10px] mt-1 font-medium">
              <span className="text-[var(--primary-green)]">In</span>
              <span className={
                (location.pathname === '/profile' || location.pathname === '/shop' || location.pathname === '/messages' || location.pathname.startsWith('/@'))
                  ? (isActive('/activity') ? 'text-black' : 'text-gray-400')
                  : (isActive('/activity') ? 'text-white' : 'text-white/60')
              }>box</span>
            </span>
          </Link>
          <Link 
            to="/profile" 
            onClick={(e) => {
              if (!user) {
                e.preventDefault();
                openLoginModal();
              }
            }}
            className={`flex flex-col items-center transition-colors ${
              (location.pathname === '/profile' || location.pathname === '/shop' || location.pathname === '/messages' || location.pathname.startsWith('/@'))
                ? (isActive('/profile') ? 'text-black' : 'text-gray-400')
                : (isActive('/profile') ? 'text-white' : 'text-white/60')
            }`}
          >
            <User size={26} strokeWidth={isActive('/profile') ? 2.5 : 2} fill={isActive('/profile') && (location.pathname === '/profile' || location.pathname.startsWith('/@')) ? 'currentColor' : 'none'} />
            <span className="text-[10px] mt-1 font-medium">
              <span className="text-[var(--primary-green)]">Pro</span>
              <span className={
                (location.pathname === '/profile' || location.pathname === '/shop' || location.pathname === '/messages' || location.pathname.startsWith('/@'))
                  ? (isActive('/profile') ? 'text-black' : 'text-gray-400')
                  : (isActive('/profile') ? 'text-white' : 'text-white/60')
              }>file</span>
            </span>
          </Link>
        </nav>
      </div>

      <AnimatePresence>
        {isSearchOpen && <SearchOverlay />}
      </AnimatePresence>

      {isLoginModalOpen && <LoginModal onClose={closeLoginModal} />}
      <AnimatePresence>
        {isThemesModalOpen && (
          <ThemesPage onClose={() => setIsThemesModalOpen(false)} />
        )}
        {isCalculatorModalOpen && (
          <CalculatorApp onClose={() => setIsCalculatorModalOpen(false)} />
        )}
        {isClockModalOpen && (
          <ClockApp onClose={() => setIsClockModalOpen(false)} />
        )}
        {isNotepadModalOpen && (
          <NotepadApp onClose={() => setIsNotepadModalOpen(false)} />
        )}
        {isMapModalOpen && (
          <MapApp onClose={() => setIsMapModalOpen(false)} />
        )}
      </AnimatePresence>
      <CookieBanner />
    </div>
  );
}
