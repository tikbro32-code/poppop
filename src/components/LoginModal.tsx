import React, { useState } from 'react';
import { X, QrCode, User, Facebook, MessageCircle, MessageSquare, Apple, Loader2, HelpCircle, ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../data/context/AuthContext';

const GoogleIcon = () => (
  <svg viewBox="0 0 24 24" width="22" height="22" xmlns="http://www.w3.org/2000/svg">
    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"/>
    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
  </svg>
);

interface Props {
  onClose: () => void;
}

export default function LoginModal({ onClose }: Props) {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleOAuthLogin = async (providerName: string) => {
    try {
      setIsLoading(true);
      setError(null);
      await login(providerName);
      onClose();
      navigate('/');
    } catch (err: any) {
      console.warn("OAuth Login Error:", err.message);
      setError(err.message || "Failed to log in. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const loginButtons = [
    { 
      icon: User, 
      text: 'Gunakan telefon / e-mel / nama peng...', 
      onClick: () => {
        onClose();
        navigate('/login-credentials');
      }
    },
    { 
      icon: Facebook, 
      text: 'Teruskan dengan Facebook', 
      color: '#1877F2', 
      fill: '#1877F2',
      onClick: () => handleOAuthLogin('Facebook')
    },
    { 
      icon: GoogleIcon, 
      text: 'Teruskan dengan Google', 
      isCustom: true,
      onClick: () => handleOAuthLogin('Google')
    },
    { 
      icon: MessageCircle, 
      text: 'Teruskan dengan LINE', 
      color: '#00C300', 
      fill: '#00C300',
      onClick: () => handleOAuthLogin('LINE')
    },
    { 
      icon: MessageSquare, 
      text: 'Teruskan dengan KakaoTalk', 
      color: '#000000', 
      fill: '#000000', 
      bgColor: '#FEE500',
      onClick: () => handleOAuthLogin('KakaoTalk')
    },
    { 
      icon: Apple, 
      text: 'Teruskan dengan Apple', 
      color: 'black', 
      fill: 'black',
      onClick: () => handleOAuthLogin('Apple')
    },
  ];

  return (
    <div className="fixed inset-0 bg-black/60 z-[100] flex items-end md:items-center justify-center p-0 md:p-4">
      <motion.div 
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white w-full h-[95vh] md:h-auto md:max-h-[90vh] md:max-w-[480px] relative flex flex-col overflow-hidden rounded-t-[12px] md:rounded-xl shadow-2xl"
      >
        <div className="sticky top-0 left-0 right-0 bg-white flex items-center justify-between px-4 py-3 z-30">
          <button className="p-2 text-gray-800">
             <HelpCircle size={24} strokeWidth={1.5} />
          </button>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full text-black transition-colors"
          >
            <X size={28} strokeWidth={1.5} />
          </button>
        </div>

        <div className="flex-1 px-8 pb-10 flex flex-col items-center overflow-y-auto scrollbar-hide">
          <h2 className="text-[28px] md:text-[32px] font-bold text-black mb-10 mt-4 text-center leading-tight">Log masuk ke Poppro</h2>

           {error && (
            <div className="w-full mb-6 p-4 bg-red-50 border border-red-200 rounded-xl text-red-600 text-sm flex flex-col gap-3">
              <p className="font-bold text-center">
                Login Error
              </p>
              <p className="text-xs leading-relaxed text-center">
                {error}
              </p>
            </div>
          )}

          <div className="w-full space-y-3 px-2 mb-10">
            {loginButtons.slice(0, 4).map((btn, index) => (
              <button
                key={index}
                onClick={btn.onClick}
                disabled={isLoading}
                className="w-full flex items-center h-[48px] bg-white hover:bg-gray-50 rounded-sm transition-all border border-gray-100 relative group disabled:opacity-50"
              >
                <div className="absolute left-3 flex items-center justify-center w-8">
                  {isLoading ? (
                    <Loader2 size={20} className="animate-spin text-gray-400" />
                  ) : btn.bgColor ? (
                    <div className="w-6 h-6 rounded-full flex items-center justify-center" style={{ backgroundColor: btn.bgColor }}>
                      <btn.icon size={14} color={btn.color} fill={btn.fill} />
                    </div>
                  ) : btn.isCustom ? (
                    <btn.icon />
                  ) : (
                    <btn.icon size={22} color={btn.color || 'black'} fill={btn.fill || 'none'} />
                  )}
                </div>
                <span className="flex-1 text-center font-bold text-[#161823] text-[15px]">
                  {btn.text}
                </span>
              </button>
            ))}

            <div className="flex items-center gap-4 py-4 w-full">
               <div className="flex-1 h-[1px] bg-gray-100"></div>
               <span className="text-gray-400 text-sm font-medium">atau</span>
               <div className="flex-1 h-[1px] bg-gray-100"></div>
            </div>

            <button
               onClick={() => {}}
               className="w-full flex items-center h-[48px] bg-gray-50 hover:bg-gray-100 rounded-sm transition-all relative group"
            >
               <span className="flex-1 text-center font-bold text-[#161823] text-[15px]">
                  Pilih akaun untuk log masuk
               </span>
            </button>
          </div>

          <div className="w-full px-2 mt-auto pb-6">
            <p className="text-gray-400 text-[11px] leading-relaxed text-center mb-6 px-4">
              Dengan meneruskan penggunaan akaun di lokasi <span className="font-bold text-[#2b5c87]">Malaysia</span>, anda bersetuju dengan <a href="#" className="font-bold text-[#2b5c87] hover:underline">Terma Perkhidmatan</a> kami dan mengakui bahawa anda telah membaca <a href="#" className="font-bold text-[#2b5c87] hover:underline">Dasar Privasi</a> kami.
            </p>

            {/* Black Pill Banner */}
            <div className="bg-black text-white rounded-full py-4 px-6 flex items-center justify-between shadow-lg">
               <span className="text-sm font-medium">Log masuk menggunakan cara lain</span>
               <button className="text-sm font-bold flex items-center gap-1 hover:text-white/80">
                 Lihat pilihan <ChevronRight size={14} strokeWidth={3} />
               </button>
            </div>
          </div>
        </div>
        
        <div className="bg-[#f8f8f8] border-t border-gray-100 py-6 px-8 shrink-0">
          <p className="text-[#161823] text-base text-center">
            Tidak mempunyai akaun? <span className="text-[#fe2c55] font-bold cursor-pointer hover:underline" onClick={() => { onClose(); navigate('/signup'); }}>Daftar</span>
          </p>
        </div>
      </motion.div>
    </div>
  );
}
