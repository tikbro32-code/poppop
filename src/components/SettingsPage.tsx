import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { 
  ChevronLeft, 
  User, 
  Lock, 
  Bell, 
  ShieldCheck, 
  Globe, 
  Smartphone, 
  HelpCircle, 
  Info, 
  LogOut, 
  CreditCard, 
  Share2,
  ChevronRight,
  Eye,
  Trash2,
  FileText
} from 'lucide-react';
import { useAuth } from '../data/context/AuthContext';

export default function SettingsPage() {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const settingGroups = [
    {
      title: 'Akaun',
      items: [
        { icon: User, label: 'Akaun', path: '/support/account' },
        { icon: Lock, label: 'Privasi', path: '/privacy-settings' },
        { icon: ShieldCheck, label: 'Keselamatan & keizinan', path: '/safety' },
        { icon: Share2, label: 'Kongsi profil', path: '#' },
      ]
    },
    {
      title: 'Kandungan & Paparan',
      items: [
        { icon: Bell, label: 'Pemberitahuan', path: '#' },
        { icon: Eye, label: 'Keutamaan kandungan', path: '/customizing-feed' },
        { icon: Globe, label: 'Bahasa', path: '#' },
        { icon: Smartphone, label: 'Data Simpanan', path: '#' },
      ]
    },
    {
      title: 'Sokongan & Tentang',
      items: [
        { icon: HelpCircle, label: 'Laporkan masalah', path: '/contact' },
        { icon: Info, label: 'Pusat Bantuan', path: '/support' },
        { icon: ShieldCheck, label: 'Pusat Keselamatan', path: '/safety' },
        { icon: FileText, label: 'Terma dan dasar', path: '/terms' },
      ]
    }
  ];

  return (
    <div className="flex-1 bg-white md:bg-gray-50 flex flex-col min-h-screen">
      <div className="w-full h-14 flex items-center justify-between px-4 border-b border-gray-100 bg-white sticky top-0 z-20">
        <button onClick={() => navigate(-1)} className="p-1 hover:bg-gray-100 rounded-full transition-colors">
          <ChevronLeft size={28} />
        </button>
        <h1 className="font-bold text-[17px]">Tetapan dan privasi</h1>
        <div className="w-10"></div>
      </div>

      <div className="flex-1 md:max-w-2xl md:mx-auto w-full md:py-8 lg:max-w-3xl">
        <div className="space-y-6 md:space-y-8">
            {settingGroups.map((group) => (
                <div key={group.title} className="bg-white md:rounded-xl shadow-sm overflow-hidden md:border md:border-gray-100">
                    <h2 className="px-4 py-3 text-[13px] font-bold text-gray-500 uppercase tracking-wider bg-gray-50 md:bg-white border-b border-gray-50 md:border-none">
                        {group.title}
                    </h2>
                    <div className="divide-y divide-gray-50">
                        {group.items.map((item, idx) => (
                            <Link 
                                key={idx}
                                to={item.path}
                                className="flex items-center justify-between px-4 py-4 hover:bg-gray-50 transition-colors group"
                            >
                                <div className="flex items-center gap-3">
                                    <div className="text-gray-600 group-hover:text-black transition-colors">
                                        <item.icon size={22} strokeWidth={1.5} />
                                    </div>
                                    <span className="text-[16px] font-medium text-gray-800">{item.label}</span>
                                </div>
                                <ChevronRight size={20} className="text-gray-300 group-hover:text-gray-500 transition-colors" />
                            </Link>
                        ))}
                    </div>
                </div>
            ))}

            <div className="px-4 md:px-0 space-y-4 mb-20">
                <button 
                    onClick={handleLogout}
                    className="w-full py-4 text-center text-red-500 font-bold bg-white md:bg-white md:rounded-xl shadow-sm md:border md:border-gray-100 hover:bg-red-50 transition-colors"
                >
                    Log keluar
                </button>
                <div className="text-center py-6">
                    <p className="text-xs text-gray-400 font-medium">Versi 35.8.4 (2026102030)</p>
                    <div className="mt-2 flex items-center justify-center gap-2 opacity-20 filter grayscale">
                        <span className="text-xs font-black uppercase italic tracking-tighter">PopPro</span>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}
