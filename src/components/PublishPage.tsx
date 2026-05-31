import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../data/context/AuthContext';
import { 
  X, 
  QrCode, 
  User, 
  Facebook, 
  MessageCircle, 
  MessageSquare, 
  Apple, 
  HelpCircle,
  ChevronDown,
  Search,
  PlayCircle,
  Video,
  Radio,
  DollarSign,
  ShieldCheck,
  ArrowRight,
  ArrowLeft,
  Sparkles
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import Logo from './Logo';
import AIPostTemplates from './AIPostTemplates';

const GoogleIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" xmlns="http://www.w3.org/2000/svg">
    <g transform="matrix(1, 0, 0, 1, 27.009001, -39.238998)">
      <path fill="#4285F4" d="M -3.264 51.509 C -3.264 50.719 -3.334 49.969 -3.454 49.239 L -14.754 49.239 L -14.754 53.749 L -8.284 53.749 C -8.574 55.229 -9.424 56.479 -10.684 57.329 L -10.684 60.329 L -6.824 60.329 C -4.564 58.239 -3.264 55.159 -3.264 51.509 Z"/>
      <path fill="#34A853" d="M -14.754 63.239 C -11.514 63.239 -8.804 62.159 -6.824 60.329 L -10.684 57.329 C -11.764 58.049 -13.134 58.489 -14.754 58.489 C -17.884 58.489 -20.534 56.379 -21.484 53.529 L -25.464 53.529 L -25.464 56.619 C -23.494 60.539 -19.444 63.239 -14.754 63.239 Z"/>
      <path fill="#FBBC05" d="M -21.484 53.529 C -21.734 52.809 -21.864 52.039 -21.864 51.239 C -21.864 50.439 -21.724 49.669 -21.484 48.949 L -21.484 45.859 L -25.464 45.859 C -26.284 47.479 -26.754 49.299 -26.754 51.239 C -26.754 53.179 -26.284 54.999 -25.464 56.619 L -21.484 53.529 Z"/>
      <path fill="#EA4335" d="M -14.754 43.989 C -12.984 43.989 -11.404 44.599 -10.154 45.789 L -6.734 42.369 C -8.804 40.429 -11.514 39.239 -14.754 39.239 C -19.444 39.239 -23.494 41.939 -25.464 45.859 L -21.484 48.949 C -20.534 46.099 -17.884 43.989 -14.754 43.989 Z"/>
    </g>
  </svg>
);

export default function PublishPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const { user, login } = useAuth();
  const [isSignUp, setIsSignUp] = React.useState(false);
  const [activeView, setActiveView] = React.useState<'main' | 'qr' | 'phone' | 'feedback' | 'upload'>(
    (location.state as any)?.view === 'feedback' ? 'feedback' : 'main'
  );

  React.useEffect(() => {
    if (user && activeView !== 'feedback') {
      setActiveView('upload');
    } else if (!user && activeView === 'upload') {
      setActiveView('main');
    }
  }, [user]);

  React.useEffect(() => {
    if ((location.state as any)?.view === 'feedback') {
      setActiveView('feedback');
    }
  }, [location.state]);
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = React.useState(false);
  const [selectedLanguage, setSelectedLanguage] = React.useState('English (UK)');
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);

  const handleOAuthLogin = async (providerName: string) => {
    try {
      setIsLoading(true);
      setError(null);
      await login(providerName);
      navigate('/dashboard');
    } catch (err: any) {
      console.error("OAuth Login Error:", err);
      setError(err.message || "Failed to log in. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const [isDayOpen, setIsDayOpen] = React.useState(false);
  const [isMonthOpen, setIsMonthOpen] = React.useState(false);
  const [isYearOpen, setIsYearOpen] = React.useState(false);
  const [selectedDay, setSelectedDay] = React.useState('Day');
  const [selectedMonth, setSelectedMonth] = React.useState('Month');
  const [selectedYear, setSelectedYear] = React.useState('Year');

  const fileInputRef = React.useRef<HTMLInputElement>(null);
  const [selectedFile, setSelectedFile] = React.useState<File | null>(null);
  const [videoPreview, setVideoPreview] = React.useState<string | null>(null);
  const [caption, setCaption] = React.useState('');
  const [category, setCategory] = React.useState('Dance');
  const [uploadProgress, setUploadProgress] = React.useState(0);
  const [isUploading, setIsUploading] = React.useState(false);

  const [isAITemplatesOpen, setIsAITemplatesOpen] = React.useState(false);

  const categories = ["Dance", "Show", "Beauty", "Dailylife", "Technology", "Fitness", "Trand", "Drama", "Games"];

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      const url = URL.createObjectURL(file);
      setVideoPreview(url);
    }
  };

  const handleUpload = async () => {
    if (!selectedFile || !user) return;

    setIsUploading(true);
    setUploadProgress(10);
    setError(null);

    try {
      const token = await user.getIdToken();
      
      const formData = new FormData();
      formData.append('video', selectedFile);
      
      const vResponse = await fetch('/api/upload/video', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`
        },
        body: formData
      });

      if (!vResponse.ok) throw new Error('Gagal memuat naik video');
      const vData = await vResponse.json();
      setUploadProgress(60);

      const createResponse = await fetch('/api/videos', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          author: user.displayName || user.email?.split('@')[0] || 'User',
          authorUid: user.uid,
          description: caption,
          category: category,
          url: vData.url,
          thumbnail: vData.thumbnailUrl || 'https://picsum.photos/seed/vid/400/800'
        })
      });

      if (!createResponse.ok) throw new Error('Gagal menyimpan maklumat video');
      
      setUploadProgress(100);
      setTimeout(() => {
        navigate('/manage-videos');
      }, 500);

    } catch (err: any) {
      console.error("Upload Error:", err);
      setError(err.message || "Gagal memuat naik. Sila cuba lagi.");
    } finally {
      setIsUploading(false);
    }
  };

  const [isRegionOpen, setIsRegionOpen] = React.useState(false);
  const [selectedRegion, setSelectedRegion] = React.useState({ name: 'Malaysia', code: '+60' });
  const [searchQuery, setSearchQuery] = React.useState('');

  const languages = [
    'Azərbaycan', 'Bahasa Indonesia', 'Bahasa Melayu', 'Basa Jawa', 
    'Català', 'Cebuano', 'Čeština', 'Dansk', 'Deutsch', 'Eesti', 
    'English (UK)', 'English (US)', 'Español', 'Español (Latinoamérica)', 
    'Filipino', 'Français', 'Français (Canada)', 'Gaeilge', 'Hrvatski', 
    'Íslenska', 'Italiano', 'Kiswahili', 'Latviešu', 'Lietuvių', 
    'Magyar', 'Nederlands', 'norsk (bokmål)', 'Oʻzbek', 'Polski'
  ];

  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  const days = Array.from({ length: 31 }, (_, i) => (i + 1).toString());
  const years = Array.from({ length: 2026 - 1900 + 1 }, (_, i) => (2026 - i).toString());

  const countries = [
    { name: 'Malaysia', code: '+60' },
    { name: 'Afghanistan', code: '+93' },
    { name: 'Åland Islands', code: '+35818' },
    { name: 'Albania', code: '+355' },
    { name: 'Algeria', code: '+213' },
    { name: 'American Samoa', code: '+1684' },
    { name: 'Andorra', code: '+376' },
    { name: 'Angola', code: '+244' },
    { name: 'Anguilla', code: '+1264' },
    { name: 'Antigua & Barbuda', code: '+1268' },
    { name: 'Argentina', code: '+54' },
    { name: 'Armenia', code: '+374' },
    { name: 'Aruba', code: '+297' },
    { name: 'Ascension Island', code: '+247' },
    { name: 'Australia', code: '+61' },
    { name: 'Austria', code: '+43' },
    { name: 'Azerbaijan', code: '+994' },
    { name: 'Bahamas', code: '+1242' },
    { name: 'Bahrain', code: '+973' },
    { name: 'Bangladesh', code: '+880' },
    { name: 'Barbados', code: '+1246' },
    { name: 'Barbuda', code: '+1268' },
    { name: 'Belarus', code: '+375' },
    { name: 'Belgium', code: '+32' },
    { name: 'Belize', code: '+501' },
    { name: 'Benin', code: '+229' },
    { name: 'Bermuda', code: '+1441' },
    { name: 'Bhutan', code: '+975' },
    { name: 'Bolivia', code: '+591' },
    { name: 'Bosnia & Herzegovina', code: '+387' },
    { name: 'Botswana', code: '+267' },
    { name: 'Brazil', code: '+55' },
    { name: 'British Indian Ocean Territory', code: '+246' },
    { name: 'British Virgin Islands', code: '+1284' },
    { name: 'Brunei', code: '+673' },
    { name: 'Bulgaria', code: '+359' },
    { name: 'Burkina-faso', code: '+226' },
    { name: 'Burundi', code: '+257' },
    { name: 'Cameroon', code: '+237' },
    { name: 'Canada', code: '+1' },
    { name: 'Cape Verde', code: '+238' },
    { name: 'Caribbean Netherlands', code: '+5997' },
    { name: 'Cayman Is.', code: '+1345' },
    { name: 'Central African Republic', code: '+236' },
    { name: 'Chad', code: '+235' },
    { name: 'Chile', code: '+56' },
    { name: 'China mainland', code: '+86' },
    { name: 'Christmas Island', code: '+61' },
    { name: 'Cocos (Keeling) Islands', code: '+61' },
    { name: 'Colombia', code: '+57' },
    { name: 'Comoros', code: '+269' },
    { name: 'Congo - Brazzaville', code: '+242' },
    { name: 'Congo - Kinshasa', code: '+243' },
    { name: 'Cook Is.', code: '+682' },
    { name: 'Costa Rica', code: '+506' },
    { name: 'Croatia', code: '+385' },
    { name: 'Curaçao', code: '+5999' },
    { name: 'Cyprus', code: '+357' },
    { name: 'Czechia', code: '+420' },
    { name: 'Denmark', code: '+45' },
    { name: 'Diego Garcia', code: '+246' },
    { name: 'Djibouti', code: '+253' },
    { name: 'Dominica', code: '+1767' },
    { name: 'Dominican Republic', code: '+1' },
    { name: 'EI Salvador', code: '+503' },
    { name: 'Ecuador', code: '+593' },
    { name: 'Egypt', code: '+20' },
    { name: 'Equatorial Guinea', code: '+240' },
    { name: 'Eritrea', code: '+291' },
    { name: 'Estonia', code: '+372' },
    { name: 'Eswatini', code: '+268' },
    { name: 'Ethiopia', code: '+251' },
    { name: 'Falkland Islands', code: '+500' },
    { name: 'Faroe Islands', code: '+298' },
    { name: 'Fiji', code: '+679' },
    { name: 'Finland', code: '+358' },
    { name: 'France', code: '+33' },
    { name: 'French Guiana', code: '+594' },
    { name: 'French Polynesia', code: '+689' },
    { name: 'Gabon', code: '+241' },
    { name: 'Gambia', code: '+220' },
    { name: 'Georgia', code: '+995' },
    { name: 'Germany', code: '+49' },
    { name: 'Ghana', code: '+233' },
    { name: 'Gibraltar', code: '+350' },
    { name: 'Greece', code: '+30' },
    { name: 'Greenland', code: '+299' },
    { name: 'Grenada', code: '+1473' },
    { name: 'Guadeloupe', code: '+590' },
    { name: 'Guam', code: '+1671' },
    { name: 'Guatemala', code: '+502' },
    { name: 'Guernsey', code: '+44' },
    { name: 'Guinea', code: '+224' },
    { name: 'Guinea-Bissau', code: '+245' },
    { name: 'Guyana', code: '+592' },
    { name: 'Haiti', code: '+509' },
    { name: 'Honduras', code: '+504' },
    { name: 'Hongkong', code: '+852' },
    { name: 'Hungary', code: '+36' },
    { name: 'Iceland', code: '+354' },
    { name: 'India', code: '+91' },
    { name: 'Indonesia', code: '+62' },
    { name: 'Iraq', code: '+964' },
    { name: 'Ireland', code: '+353' },
    { name: 'Israel', code: '+972' },
    { name: 'Isle of Man', code: '+44' },
    { name: 'Italy', code: '+39' },
    { name: 'Ivory Coast', code: '+225' },
    { name: 'Jamaica', code: '+1876' },
    { name: 'Japan', code: '+81' },
    { name: 'Jersey', code: '+44' },
    { name: 'Jordan', code: '+962' },
    { name: 'Kampuchea (Cambodia )', code: '+855' },
    { name: 'Kazakhstan', code: '+76' },
    { name: 'Kazakhstan', code: '+77' },
    { name: 'Kenya', code: '+254' },
    { name: 'Kiribati', code: '+686' },
    { name: 'Korea', code: '+82' },
    { name: 'Kosovo', code: '+383' },
    { name: 'Kuwait', code: '+965' },
    { name: 'Kyrgyzstan', code: '+996' },
    { name: 'Laos', code: '+856' },
    { name: 'Latvia', code: '+371' },
    { name: 'Lebanon', code: '+961' },
    { name: 'Lesotho', code: '+266' },
    { name: 'Liberia', code: '+231' },
    { name: 'Libya', code: '+218' },
    { name: 'Liechtenstein', code: '+423' },
    { name: 'Lithuania', code: '+370' },
    { name: 'Luxembourg', code: '+352' },
    { name: 'Macao', code: '+853' },
    { name: 'Madagascar', code: '+261' },
    { name: 'Malawi', code: '+265' },
    { name: 'Malaysia', code: '+60' },
    { name: 'Maldives', code: '+960' },
    { name: 'Mali', code: '+223' },
    { name: 'Malta', code: '+356' },
    { name: 'Marshall Islands', code: '+692' },
    { name: 'Martinique', code: '+596' },
    { name: 'Mauritania', code: '+222' },
    { name: 'Mauritius', code: '+230' },
    { name: 'Mayotte', code: '+262' },
    { name: 'Mexico', code: '+52' },
    { name: 'Micronesia', code: '+691' },
    { name: 'Moldova, Republic of', code: '+373' },
    { name: 'Monaco', code: '+377' },
    { name: 'Mongolia', code: '+976' },
    { name: 'Montenegro', code: '+382' },
    { name: 'Montserrat', code: '+1664' },
    { name: 'Morocco', code: '+212' },
    { name: 'Mozambique', code: '+258' },
    { name: 'Myanmar (Burma)', code: '+95' },
    { name: 'Namibia', code: '+264' },
    { name: 'Nauru', code: '+674' },
    { name: 'Nepal', code: '+977' },
    { name: 'Netherlands', code: '+31' },
    { name: 'New Caledonia', code: '+687' },
    { name: 'New Zealand', code: '+64' },
    { name: 'Nicaragua', code: '+505' },
    { name: 'Niger', code: '+227' },
    { name: 'Nigeria', code: '+234' },
    { name: 'Niue', code: '+683' },
    { name: 'Norfolk Island', code: '+672' },
    { name: 'North Macedonia', code: '+389' },
    { name: 'Northern Mariana Islands', code: '+1670' },
    { name: 'Norway', code: '+47' },
    { name: 'Oman', code: '+968' },
    { name: 'Pakistan', code: '+92' },
    { name: 'Palau', code: '+680' },
    { name: 'Palestinian Territories', code: '+970' },
    { name: 'Panama', code: '+507' },
    { name: 'Papua New Cuinea', code: '+675' },
    { name: 'Paraguay', code: '+595' },
    { name: 'Peru', code: '+51' },
    { name: 'Philippines', code: '+63' },
    { name: 'Pitcairn Islands', code: '+64' },
    { name: 'Poland', code: '+48' },
    { name: 'Portugal', code: '+351' },
    { name: 'Puerto Rico', code: '+1787' },
    { name: 'Puerto Rico', code: '+1939' },
    { name: 'Qatar', code: '+974' },
    { name: 'Réunion', code: '+262' },
    { name: 'Romania', code: '+40' },
    { name: 'Russia', code: '+7' },
    { name: 'Rwanda', code: '+250' },
    { name: 'Samoa', code: '+685' },
    { name: 'San Marino', code: '+378' },
    { name: 'Sao Tome and Principe', code: '+239' },
    { name: 'Saudi Arabia', code: '+966' },
    { name: 'Senegal', code: '+221' },
    { name: 'Serbia', code: '+381' },
    { name: 'Seychelles', code: '+248' },
    { name: 'Sierra Leone', code: '+232' },
    { name: 'Singapore', code: '+65' },
    { name: 'Sint Maarten', code: '+1721' },
    { name: 'Slovakia', code: '+421' },
    { name: 'Slovenia', code: '+386' },
    { name: 'Solomon Is', code: '+677' },
    { name: 'Somali', code: '+252' },
    { name: 'South Africa', code: '+27' },
    { name: 'So. Georgia & So. Sandwich Isl.', code: '+500' },
    { name: 'South Sudan', code: '+211' },
    { name: 'Spain', code: '+34' },
    { name: 'Sri Lanka', code: '+94' },
    { name: 'St. Barthélemy', code: '+590' },
    { name: 'St. Helena', code: '+290' },
    { name: 'St. Kitts & Nevis', code: '+1869' },
    { name: 'St. Martin', code: '+590' },
    { name: 'St. Pierre & Miquelon', code: '+508' },
    { name: 'St.Lucia', code: '+1758' },
    { name: 'St. Vincent & Grenadines', code: '+1784' },
    { name: 'Sudan', code: '+249' },
    { name: 'Suriname', code: '+597' },
    { name: 'Svalbard & Jan Mayen', code: '+4779' },
    { name: 'Sweden', code: '+46' },
    { name: 'Switzerland', code: '+41' },
    { name: 'Taiwan', code: '+886' },
    { name: 'Tajikstan', code: '+992' },
    { name: 'Tanzania', code: '+255' },
    { name: 'Thailand', code: '+66' },
    { name: 'Timor-Leste', code: '+670' },
    { name: 'Togo', code: '+228' },
    { name: 'Tokelau', code: '+690' },
    { name: 'Tonga', code: '+676' },
    { name: 'Trinidad & Tobago', code: '#1868' },
    { name: 'Tunisia', code: '+216' },
    { name: 'Turkey', code: '+90' },
    { name: 'Turkmenistan', code: '+993' },
    { name: 'Turks & Caicos Islands', code: '+1649' },
    { name: 'Tuvalu', code: '+688' },
    { name: 'U.S. Virgin Islands', code: '+1340' },
    { name: 'Uganda', code: '+256' },
    { name: 'Ukraine', code: '+380' },
    { name: 'United Arab Emirates', code: '+971' },
    { name: 'United Kingdom', code: '+44' },
    { name: 'United States', code: '+1' },
    { name: 'Uruguay', code: '+598' },
    { name: 'Uzbekistan', code: '+998' },
    { name: 'Vanuatu', code: '+678' },
    { name: 'Vatican City', code: '+379' },
    { name: 'Vatican City', code: '+3906698' },
    { name: 'Venezuela', code: '+58' },
    { name: 'Vietnam', code: '+84' },
    { name: 'Wallis & Futuna', code: '+681' },
    { name: 'Western Sahara', code: '+212' },
    { name: 'Yemen', code: '+967' },
    { name: 'Zambia', code: '+260' },
    { name: 'Zimbabwe', code: '+263' },
  ];

  const filteredCountries = countries.filter(c => 
    c.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    c.code.includes(searchQuery)
  );

  const loginButtons = isSignUp ? [
    { 
      icon: User, 
      label: <><span className="text-[var(--accent-2)]">Use phone </span><span className="text-[var(--accent-1)]">or email</span></>,
      view: 'phone' as const
    },
    { 
      icon: Facebook, 
      label: <><span className="text-[var(--accent-2)]">Continue wi</span><span className="text-[var(--accent-1)]">th Facebook</span></>, 
      color: '#1877F2',
      provider: 'Facebook'
    },
    { 
      icon: GoogleIcon, 
      label: <><span className="text-[var(--accent-2)]">Continue </span><span className="text-[var(--accent-1)]">with Google</span></>, 
      isCustom: true,
      provider: 'Google',
      badge: 'Last login'
    },
    { 
      icon: MessageCircle, 
      label: <><span className="text-[var(--accent-2)]">Continue wi</span><span className="text-[var(--accent-1)]">th LINE</span></>, 
      color: '#06C755',
      provider: 'LINE'
    },
    { 
      icon: MessageSquare, 
      label: <><span className="text-[var(--accent-2)]">Continue wi</span><span className="text-[var(--accent-1)]">th KakaoTalk</span></>, 
      color: '#000000', 
      bgColor: '#FEE500',
      provider: 'KakaoTalk'
    },
    { 
      icon: Apple, 
      label: <><span className="text-[var(--accent-2)]">Continue wi</span><span className="text-[var(--accent-1)]">th Apple</span></>,
      provider: 'Apple'
    },
  ] : [
    { 
      icon: QrCode, 
      label: <><span className="text-[var(--accent-2)]">Use Q</span><span className="text-[var(--accent-1)]">R code</span></>,
      view: 'qr' as const
    },
    { 
      icon: User, 
      label: <><span className="text-[var(--accent-2)]">Use phone</span><span className="text-[var(--accent-1)]"> / email / username</span></>,
      view: 'phone' as const
    },
    { 
      icon: Facebook, 
      label: <><span className="text-[var(--accent-2)]">Continue wi</span><span className="text-[var(--accent-1)]">th Facebook</span></>, 
      color: '#1877F2',
      provider: 'Facebook'
    },
    { 
      icon: GoogleIcon, 
      label: <><span className="text-[var(--accent-2)]">Continue </span><span className="text-[var(--accent-1)]">with Google</span></>, 
      isCustom: true,
      provider: 'Google',
      badge: 'Last login'
    },
    { 
      icon: MessageCircle, 
      label: <><span className="text-[var(--accent-2)]">Continue wi</span><span className="text-[var(--accent-1)]">th LINE</span></>, 
      color: '#06C755',
      provider: 'LINE'
    },
    { 
      icon: MessageSquare, 
      label: <><span className="text-[var(--accent-2)]">Continue wi</span><span className="text-[var(--accent-1)]">th KakaoTalk</span></>, 
      color: '#000000', 
      bgColor: '#FEE500',
      provider: 'KakaoTalk'
    },
    { 
      icon: Apple, 
      label: <><span className="text-[var(--accent-2)]">Continue wi</span><span className="text-[var(--accent-1)]">th Apple</span></>,
      provider: 'Apple'
    },
  ];

  const handleBack = () => setActiveView('main');

  return (
    <div className="flex-1 bg-[var(--bg-dark)] text-[var(--text-main)] flex flex-col relative">
      <header className="px-8 py-4 flex justify-end items-center z-20 w-full bg-[var(--bg-dark)]">
        <button 
          className="flex items-center gap-2 cursor-pointer group hover:bg-white/5 px-3 py-1.5 rounded-sm transition-colors"
          onClick={() => setActiveView('feedback')}
        >
          <HelpCircle size={18} className="text-[var(--text-secondary)] group-hover:text-[var(--text-main)]" />
          <span className="text-sm font-bold text-[var(--text-secondary)] group-hover:text-[var(--text-main)]">
            Feedback and help
          </span>
        </button>
      </header>

      <main className="flex-1 flex flex-col items-center justify-start pt-12 pb-12 px-4 min-h-[600px]">
        <AnimatePresence mode="wait">
          {activeView === 'upload' && (
            <motion.div
              key="upload-view"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="w-full max-w-[1100px] h-full flex flex-col items-center"
            >
              <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-8 bg-[var(--sidebar-bg)] border border-[var(--border-color)] rounded-xl p-8 shadow-2xl overflow-y-auto lg:overflow-visible">
                <div className="lg:col-span-1">
                  <h2 className="text-xl font-black mb-6 flex items-center gap-2">
                    <Video className="text-[var(--primary-green)]" />
                    Muat Naik Video
                  </h2>

                  <div 
                    onClick={() => fileInputRef.current?.click()}
                    className={`relative aspect-[9/16] w-full max-w-[280px] mx-auto border-2 border-dashed border-[var(--border-color)] rounded-xl flex flex-col items-center justify-center cursor-pointer hover:border-[var(--primary-green)] transition-all group overflow-hidden ${videoPreview ? 'border-solid border-[var(--primary-green)]' : ''}`}
                  >
                    <input 
                      type="file" 
                      ref={fileInputRef} 
                      onChange={handleFileSelect} 
                      className="hidden" 
                      accept="video/*"
                    />
                    
                    {videoPreview ? (
                      <video 
                        src={videoPreview} 
                        className="w-full h-full object-cover"
                        controls
                      />
                    ) : (
                      <div className="flex flex-col items-center text-center p-6">
                        <div className="w-16 h-16 bg-[var(--bg-dark)] rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                          <PlayCircle size={32} className="text-[var(--text-secondary)] group-hover:text-[var(--primary-green)]" />
                        </div>
                        <p className="text-sm font-bold mb-1">Pilih video untuk dimuat naik</p>
                        <p className="text-xs text-[var(--text-secondary)]">Atau seret dan lepas fail di sini</p>
                        <p className="text-[10px] text-[var(--text-secondary)] mt-8">MP4 atau WebM<br/>Hingga 500MB</p>
                      </div>
                    )}
                  </div>
                </div>

                <div className="lg:col-span-2 space-y-6 flex flex-col">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                       <label className="text-sm font-black block">Kapsyen</label>
                       <button 
                        onClick={() => setIsAITemplatesOpen(true)}
                        className="flex items-center gap-1.5 text-[10px] font-black uppercase tracking-tighter bg-[var(--primary-green)]/10 text-[var(--primary-green)] px-2.5 py-1 rounded-full border border-[var(--primary-green)]/30 hover:bg-[var(--primary-green)] hover:text-white transition-all shadow-sm"
                       >
                         <Sparkles size={10} />
                         Guna Templat AI
                       </button>
                    </div>
                    <div className="relative">
                      <textarea 
                        value={caption}
                        onChange={(e) => setCaption(e.target.value)}
                        placeholder="Khabarkan sesuatu tentang video anda..." 
                        className="w-full bg-[var(--bg-dark)] border border-[var(--border-color)] rounded-lg p-4 h-32 focus:border-[var(--primary-green)] outline-none resize-none text-sm"
                      />
                      <div className="absolute bottom-3 right-3 text-[10px] text-[var(--text-secondary)] font-bold">
                        {caption.length} / 2200
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-black mb-2 block">Kategori</label>
                      <select 
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        className="w-full bg-[var(--bg-dark)] border border-[var(--border-color)] rounded-lg h-11 px-4 text-sm focus:border-[var(--primary-green)] outline-none appearance-none cursor-pointer"
                      >
                        {categories.map(c => <option key={c} value={c}>{c}</option>)}
                      </select>
                    </div>
                    <div>
                      <label className="text-sm font-black mb-2 block">Siapa yang boleh menonton</label>
                      <select className="w-full bg-[var(--bg-dark)] border border-[var(--border-color)] rounded-lg h-11 px-4 text-sm focus:border-[var(--primary-green)] outline-none appearance-none cursor-pointer">
                        <option>Semua orang</option>
                        <option>Rakan</option>
                        <option>Peribadi</option>
                      </select>
                    </div>
                  </div>

                  <div className="flex-1" />

                  <div className="space-y-4">
                    {error && (
                      <p className="text-red-500 text-xs font-bold bg-red-500/10 p-3 rounded border border-red-500/20">{error}</p>
                    )}
                    
                    {isUploading && (
                      <div className="w-full">
                        <div className="flex justify-between text-[10px] font-black mb-1">
                          <span>Memuat naik...</span>
                          <span>{uploadProgress}%</span>
                        </div>
                        <div className="w-full h-1 bg-[var(--bg-dark)] rounded-full overflow-hidden">
                          <motion.div 
                            initial={{ width: 0 }}
                            animate={{ width: `${uploadProgress}%` }}
                            className="h-full bg-[var(--primary-green)]"
                          />
                        </div>
                      </div>
                    )}

                    <div className="flex gap-4">
                      <button 
                        onClick={() => {
                          setSelectedFile(null);
                          setVideoPreview(null);
                          setCaption('');
                        }}
                        className="flex-1 h-12 bg-transparent border border-[var(--border-color)] hover:bg-white/5 rounded-lg font-black transition-colors"
                      >
                        Buang
                      </button>
                      <button 
                        disabled={!selectedFile || isUploading}
                        onClick={handleUpload}
                        className="flex-[2] h-12 bg-[var(--primary-green)] hover:brightness-110 disabled:opacity-50 disabled:cursor-not-allowed text-black font-black rounded-lg transition-all shadow-lg shadow-[var(--primary-green)]/20"
                      >
                        {isUploading ? 'Sedang Diproses...' : 'Siarkan'}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {activeView === 'main' && (
            <motion.div 
              key={isSignUp ? 'signup' : 'login'}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="w-full max-w-[440px] text-center"
            >
              <h1 className="text-[32px] font-bold mb-2 text-[var(--text-main)]">
                {isSignUp ? 'Sign up for Poppro' : 'Log in to Poppro'}
              </h1>
              
              <p className="text-[var(--text-secondary)] text-[15px] mb-8 leading-relaxed">
                {isSignUp ? (
                  <>Create a profile, follow other accounts, make your own videos and more.</>
                ) : (
                  <>Manage your account, check notifications, comment on videos and more.</>
                )}
              </p>

              <div className="space-y-3 w-full">
                {error && (
                  <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-sm text-red-500 text-xs font-bold mb-4">
                    {error}
                  </div>
                )}
                {loginButtons.map((btn, idx) => (
                  <button
                    key={idx}
                    disabled={isLoading}
                    onClick={() => {
                      if (btn.view) setActiveView(btn.view);
                      if (btn.provider) handleOAuthLogin(btn.provider);
                    }}
                    className={`w-full h-11 flex items-center px-4 bg-[var(--sidebar-bg)] hover:bg-white/10 border border-[var(--border-color)] rounded-sm transition-all relative group ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
                  >
                    <div className="absolute left-4 flex items-center justify-center w-6 h-6">
                      {btn.isCustom ? (
                        <btn.icon />
                      ) : btn.bgColor ? (
                        <div className="w-5 h-5 rounded-full flex items-center justify-center" style={{ backgroundColor: btn.bgColor }}>
                          <btn.icon size={12} color={btn.color} fill={btn.color} />
                        </div>
                      ) : (
                        <btn.icon size={20} color={btn.color || 'var(--text-main)'} fill={btn.color || 'none'} />
                      )}
                    </div>
                    <span className="flex-1 text-center font-bold text-[13px] px-10">
                      {btn.label}
                    </span>
                    {btn.badge && (
                      <div className="absolute -top-2 -right-2 bg-[var(--primary-green)] text-white text-[10px] font-black px-1.5 py-0.5 rounded-sm shadow-lg z-10">
                        {btn.badge}
                      </div>
                    )}
                  </button>
                ))}
              </div>

              <div className="mt-12">
                <p className="text-[12px] text-[var(--text-secondary)] leading-relaxed max-w-[360px] mx-auto">
                  By continuing with an account located in <span className="font-bold text-[var(--text-main)]">Malaysia</span>, you agree to our <a href="#" className="font-bold text-[var(--text-main)] hover:underline">Terms of Service</a> and acknowledge that you have read our <a href="#" className="font-bold text-[var(--text-main)] hover:underline">Privacy Policy</a>.
                </p>
              </div>
            </motion.div>
          )}

          {activeView === 'qr' && (
            <motion.div
              key="qr-view"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="w-full max-w-[440px] text-center"
            >
              <h1 className="text-[32px] font-black tracking-tighter mb-8">
                <span className="text-[var(--text-main)]">Log in with </span>
                <span className="text-[var(--primary-green)]">QR code</span>
              </h1>

              <div className="bg-white p-4 rounded-lg inline-block mb-8 border-4 border-[var(--primary-green)]">
                <div className="w-[180px] h-[180px] bg-black flex items-center justify-center">
                  <QrCode size={160} color="white" />
                </div>
              </div>

              <div className="space-y-2 mb-8">
                <p className="text-sm text-[var(--text-secondary)]">1. Scan with your mobile device's camera</p>
                <p className="text-sm text-[var(--text-secondary)]">2. Confirm login or sign up</p>
              </div>

              <button 
                onClick={handleBack}
                className="flex items-center gap-2 mx-auto text-sm font-bold text-[var(--text-secondary)] hover:text-[var(--text-main)] transition-colors"
              >
                <span className="text-[var(--primary-green)]">{'<'}</span> Go back
              </button>
            </motion.div>
          )}

          {activeView === 'phone' && (
            <motion.div
              key="phone-view"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="w-full max-w-[440px] text-center"
            >
              <h1 className="text-[32px] font-black tracking-tighter mb-8">
                <span className="text-[var(--text-main)]">{isSignUp ? 'Sign up' : 'Log in'}</span>
              </h1>

              {isSignUp && (
                <div className="text-left mb-6">
                  <label className="text-sm font-bold text-[var(--text-main)] mb-2 block">When's your birthday?</label>
                  <div className="grid grid-cols-3 gap-2">
                    <div className="relative">
                      <button 
                        onClick={() => setIsMonthOpen(!isMonthOpen)}
                        className="w-full bg-[var(--sidebar-bg)] border border-[var(--border-color)] rounded-sm h-11 px-3 text-sm flex items-center justify-between focus:border-[var(--primary-green)] outline-none"
                      >
                        <span className={selectedMonth === 'Month' ? 'text-[var(--text-secondary)]' : 'text-[var(--text-main)]'}>{selectedMonth}</span>
                        <ChevronDown size={14} className="text-[var(--text-secondary)]" />
                      </button>
                      <AnimatePresence>
                        {isMonthOpen && (
                          <>
                            <div className="fixed inset-0 z-40" onClick={() => setIsMonthOpen(false)} />
                            <motion.div 
                              initial={{ opacity: 0, y: -10 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -10 }}
                              className="absolute top-full left-0 w-full bg-[var(--bg-dark)] rounded-sm shadow-2xl z-50 mt-1 py-1 max-h-[240px] overflow-y-auto scrollbar-hide"
                            >
                              {months.map(m => (
                                <button 
                                  key={m}
                                  onClick={() => { setSelectedMonth(m); setIsMonthOpen(false); }}
                                  className="w-full text-left px-4 py-2 text-sm text-[var(--text-main)] hover:bg-white/10 transition-colors"
                                >
                                  {m}
                                </button>
                              ))}
                            </motion.div>
                          </>
                        )}
                      </AnimatePresence>
                    </div>

                    <div className="relative">
                      <button 
                        onClick={() => setIsDayOpen(!isDayOpen)}
                        className="w-full bg-[var(--sidebar-bg)] border border-[var(--border-color)] rounded-sm h-11 px-3 text-sm flex items-center justify-between focus:border-[var(--primary-green)] outline-none"
                      >
                        <span className={selectedDay === 'Day' ? 'text-[var(--text-secondary)]' : 'text-[var(--text-main)]'}>{selectedDay}</span>
                        <ChevronDown size={14} className="text-[var(--text-secondary)]" />
                      </button>
                      <AnimatePresence>
                        {isDayOpen && (
                          <>
                            <div className="fixed inset-0 z-40" onClick={() => setIsDayOpen(false)} />
                            <motion.div 
                              initial={{ opacity: 0, y: -10 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -10 }}
                              className="absolute top-full left-0 w-full bg-[var(--bg-dark)] rounded-sm shadow-2xl z-50 mt-1 py-1 max-h-[240px] overflow-y-auto scrollbar-hide"
                            >
                              {days.map(d => (
                                <button 
                                  key={d}
                                  onClick={() => { setSelectedDay(d); setIsDayOpen(false); }}
                                  className="w-full text-left px-4 py-2 text-sm text-[var(--text-main)] hover:bg-white/10 transition-colors"
                                >
                                  {d}
                                </button>
                              ))}
                            </motion.div>
                          </>
                        )}
                      </AnimatePresence>
                    </div>

                    <div className="relative">
                      <button 
                        onClick={() => setIsYearOpen(!isYearOpen)}
                        className="w-full bg-[var(--sidebar-bg)] border border-[var(--border-color)] rounded-sm h-11 px-3 text-sm flex items-center justify-between focus:border-[var(--primary-green)] outline-none"
                      >
                        <span className={selectedYear === 'Year' ? 'text-[var(--text-secondary)]' : 'text-[var(--text-main)]'}>{selectedYear}</span>
                        <ChevronDown size={14} className="text-[var(--text-secondary)]" />
                      </button>
                      <AnimatePresence>
                        {isYearOpen && (
                          <>
                            <div className="fixed inset-0 z-40" onClick={() => setIsYearOpen(false)} />
                            <motion.div 
                              initial={{ opacity: 0, y: -10 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -10 }}
                              className="absolute top-full left-0 w-full bg-[var(--bg-dark)] rounded-sm shadow-2xl z-50 mt-1 py-1 max-h-[240px] overflow-y-auto scrollbar-hide"
                            >
                              {years.map(y => (
                                <button 
                                  key={y}
                                  onClick={() => { setSelectedYear(y); setIsYearOpen(false); }}
                                  className="w-full text-left px-4 py-2 text-sm text-[var(--text-main)] hover:bg-white/10 transition-colors"
                                >
                                  {y}
                                </button>
                              ))}
                            </motion.div>
                          </>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                  <p className="text-[10px] text-[var(--text-secondary)] mt-2">Your birthday won't be shown publicly.</p>
                </div>
              )}

              <div className="text-left mb-6">
                <div className="flex justify-between items-center mb-2">
                  <label className="text-sm font-bold text-[var(--text-main)]">Phone</label>
                  <button className="text-[10px] font-bold text-[var(--text-secondary)] hover:underline">
                    {isSignUp ? 'Sign up with email' : 'Log in with email'}
                  </button>
                </div>
                <div className="flex gap-2 mb-3">
                  <div className="relative w-[140px]">
                    <button 
                      onClick={() => setIsRegionOpen(!isRegionOpen)}
                      className="w-full bg-[var(--sidebar-bg)] border border-[var(--border-color)] rounded-sm h-11 px-3 text-sm flex items-center justify-between focus:border-[var(--primary-green)] outline-none"
                    >
                      <span className="text-[var(--text-main)] truncate mr-1">{selectedRegion.name} {selectedRegion.code}</span>
                      <ChevronDown size={14} className="text-[var(--text-secondary)] flex-shrink-0" />
                    </button>
                    <AnimatePresence>
                      {isRegionOpen && (
                        <>
                          <div className="fixed inset-0 z-40" onClick={() => setIsRegionOpen(false)} />
                          <motion.div 
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="absolute top-full left-0 w-[280px] bg-[var(--bg-dark)] rounded-sm shadow-2xl z-50 mt-1 py-1 overflow-hidden"
                          >
                            <div className="p-2 border-b border-[var(--border-color)]">
                              <div className="relative">
                                <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--text-secondary)]" />
                                <input 
                                  type="text"
                                  placeholder="Search"
                                  value={searchQuery}
                                  onChange={(e) => setSearchQuery(e.target.value)}
                                  className="w-full bg-[var(--sidebar-bg)] rounded-sm h-9 pl-9 pr-3 text-sm text-[var(--text-main)] outline-none focus:ring-1 focus:ring-[var(--primary-green)]"
                                  onClick={(e) => e.stopPropagation()}
                                />
                              </div>
                            </div>
                            <div className="max-h-[300px] overflow-y-auto scrollbar-hide">
                              {filteredCountries.map(c => (
                                <button 
                                  key={`${c.name}-${c.code}`}
                                  onClick={() => { setSelectedRegion(c); setIsRegionOpen(false); setSearchQuery(''); }}
                                  className="w-full text-left px-4 py-2 text-sm text-[var(--text-main)] hover:bg-white/10 transition-colors flex justify-between items-center"
                                >
                                  <span className="truncate mr-2">{c.name}</span>
                                  <span className="text-[var(--text-secondary)] flex-shrink-0">{c.code}</span>
                                </button>
                              ))}
                              {filteredCountries.length === 0 && (
                                <div className="px-4 py-8 text-center text-sm text-[var(--text-secondary)]">No results found</div>
                              )}
                            </div>
                          </motion.div>
                        </>
                      )}
                    </AnimatePresence>
                  </div>
                  <input 
                    type="text" 
                    placeholder="Phone number"
                    className="flex-1 bg-[var(--sidebar-bg)] border border-[var(--border-color)] rounded-sm h-11 px-4 text-sm focus:border-[var(--primary-green)] outline-none"
                  />
                </div>
                <div className="flex gap-2">
                  <input 
                    type="text" 
                    placeholder="Enter 6-digit code"
                    className="flex-1 bg-[var(--sidebar-bg)] border border-[var(--border-color)] rounded-sm h-11 px-4 text-sm focus:border-[var(--primary-green)] outline-none"
                  />
                  <button className="px-4 bg-[var(--sidebar-bg)] border border-[var(--border-color)] rounded-sm text-xs font-bold text-[var(--text-secondary)] hover:bg-white/10 transition-colors">
                    Send code
                  </button>
                </div>
              </div>

              <button className="w-full h-11 bg-[var(--sidebar-bg)] border border-[var(--border-color)] rounded-sm font-bold text-[var(--text-secondary)] mb-8 hover:bg-white/10 transition-colors">
                Next
              </button>

              <button 
                onClick={handleBack}
                className="flex items-center gap-2 mx-auto text-sm font-bold text-[var(--text-secondary)] hover:text-[var(--text-main)] transition-colors"
              >
                <span className="text-[var(--primary-green)]">{'<'}</span> Go back
              </button>
            </motion.div>
          )}

          {activeView === 'feedback' && (
            <motion.div
              key="feedback-view"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="w-full max-w-[1000px] text-center"
            >
              <div className="flex flex-col items-center mb-12">
                <h1 className="text-[32px] md:text-[48px] font-black tracking-tighter mb-8 text-[var(--text-main)]">
                  Bagaimanakah kami boleh membantu?
                </h1>
                <div className="relative w-full max-w-[600px]">
                  <Search size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--text-secondary)]" />
                  <input 
                    type="text" 
                    placeholder="Cari artikel bantuan"
                    className="w-full bg-[var(--sidebar-bg)] border border-[var(--border-color)] rounded-full h-14 pl-12 pr-6 text-lg focus:border-[var(--primary-green)] outline-none transition-all"
                  />
                </div>
              </div>

              <div className="text-left mb-12">
                <h2 className="text-xl font-black mb-6 text-[var(--text-main)]">Soalan lazim</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
                  {[
                    "Cara log masuk",
                    "Nombor telefon ini telah didaftarkan",
                    "Akaun digantung",
                    "Mengapa saya tidak menerima syiling saya selepas membuat pembayaran?",
                    "Tetapkan semula kata laluan",
                    "Kata laluan yang hilang atau dicuri"
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3 group cursor-pointer">
                      <div className="w-1.5 h-1.5 rounded-full border border-[var(--primary-green)] group-hover:bg-[var(--primary-green)] transition-colors" />
                      <span className="text-[var(--text-main)] hover:text-[var(--primary-green)] transition-colors text-sm font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
                {[
                  { title: "Akaun", desc: "Urus profil, maklumat log masuk dan tetapan akaun anda.", icon: User },
                  { title: "menggunakan poppro", desc: "Ketahui cara menggunakan aplikasi ini dan berinteraksi dengan orang lain.", icon: PlayCircle },
                  { title: "Siaran", desc: "Cipta, urus dan betulkan video anda.", icon: Video },
                  { title: "poppro langsung", desc: "Dapatkan petua dan sokongan untuk Poppro LIVE.", icon: Radio },
                  { title: "Pengewangan", desc: "Dapatkan sokongan dengan pengewangan, pembayaran dan e-...", icon: DollarSign },
                  { title: "Privasi & keselamatan...", desc: "Ketahui tentang privasi, keselamatan pengguna dan pelaporan kandungan...", icon: ShieldCheck },
                ].map((cat, idx) => (
                  <div key={idx} className="bg-[var(--sidebar-bg)] border border-[var(--border-color)] p-6 rounded-xl text-left hover:bg-white/10 transition-all cursor-pointer group relative overflow-hidden">
                    <div className="relative z-10">
                      <h3 className="font-black text-lg mb-2 text-[var(--text-main)] group-hover:text-[var(--primary-green)] transition-colors">{cat.title}</h3>
                      <p className="text-[var(--text-secondary)] text-xs leading-relaxed">{cat.desc}</p>
                    </div>
                    <cat.icon size={48} className="absolute -bottom-2 -right-2 text-[var(--text-secondary)] opacity-10 group-hover:text-[var(--primary-green)]/10 transition-colors" />
                  </div>
                ))}
              </div>

              <div className="flex justify-between items-center pt-8 border-t border-[var(--border-color)]">
                <button 
                  onClick={handleBack}
                  className="flex items-center gap-2 text-sm font-bold text-[var(--text-secondary)] hover:text-[var(--text-main)] transition-colors"
                >
                  <ArrowLeft size={16} className="text-[var(--primary-green)]" /> Go back
                </button>
                <button className="flex items-center gap-2 text-sm font-bold text-[var(--text-secondary)] hover:text-[var(--text-main)] transition-colors group">
                  Lihat topik lain <ArrowRight size={16} className="text-[var(--primary-green)] group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <footer className="w-full z-10 mt-auto bg-[var(--bg-dark)]">
        <div className="flex flex-col items-center pt-12 border-t border-[var(--border-color)]">
          <div className="text-center mb-12">
            <span className="text-[15px] font-medium">
              <span className="text-[var(--text-main)]">{isSignUp ? 'Already have an account? ' : "Don't have an account? "}</span>
              <button 
                onClick={() => {
                  setIsSignUp(!isSignUp);
                  setActiveView('main');
                }}
                className="text-[var(--primary-green)] font-bold hover:underline"
              >
                {isSignUp ? 'Log in' : 'Sign up'}
              </button>
            </span>
          </div>

          <div className="w-full px-8 flex justify-between items-center py-6 border-t border-[var(--border-color)]">
            <div className="relative">
              <button 
                onClick={() => setIsLanguageMenuOpen(!isLanguageMenuOpen)}
                className="flex items-center gap-2 px-3 py-1.5 border border-[var(--border-color)] rounded-sm text-xs font-bold text-[var(--text-secondary)] hover:bg-white/5 transition-colors"
              >
                {selectedLanguage}
                <ChevronDown size={14} className={isLanguageMenuOpen ? 'rotate-180' : ''} />
              </button>
              
              <AnimatePresence>
                {isLanguageMenuOpen && (
                  <>
                    <div className="fixed inset-0 z-40" onClick={() => setIsLanguageMenuOpen(false)} />
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95, y: 10 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95, y: 10 }}
                      className="absolute bottom-full left-0 mb-2 w-48 bg-[var(--sidebar-bg)] border border-[var(--border-color)] rounded-sm shadow-2xl z-50 py-1 max-h-64 overflow-y-auto scrollbar-hide"
                    >
                      {languages.map((lang) => (
                        <button
                          key={lang}
                          onClick={() => {
                            setSelectedLanguage(lang);
                            setIsLanguageMenuOpen(false);
                          }}
                          className={`w-full text-left px-4 py-2 text-sm transition-colors ${
                            selectedLanguage === lang ? 'bg-white/10 text-[var(--text-main)]' : 'text-[var(--text-secondary)] hover:bg-white/5 hover:text-[var(--text-main)]'
                          }`}
                        >
                          {lang}
                        </button>
                      ))}
                    </motion.div>
                  </>
                )}
              </AnimatePresence>
            </div>

            <div className="text-[12px] text-[var(--text-secondary)] opacity-50 font-bold">
              © 2026 Poppro
            </div>
          </div>
        </div>
      </footer>

      <AnimatePresence>
        {isAITemplatesOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsAITemplatesOpen(false)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-2xl max-h-[90vh] overflow-hidden"
            >
              <AIPostTemplates 
                onSelectTemplate={(text) => setCaption(text)}
                onClose={() => setIsAITemplatesOpen(false)}
              />
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
