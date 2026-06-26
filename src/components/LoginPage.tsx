import React, { useState } from 'react';
import { 
  QrCode, 
  User, 
  Facebook, 
  MessageCircle, 
  MessageSquare, 
  Apple, 
  HelpCircle,
  Loader2
} from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import Logo from './Logo';
import { useAuth } from '../data/context/AuthContext';

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

export default function LoginPage() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleOAuthLogin = async (providerName: string) => {
    try {
      setIsLoading(true);
      setError(null);
      await login(providerName);
      navigate('/');
    } catch (err: any) {
      console.warn("Login Error:", err.message);
      setError(err.message || "Failed to log in. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const loginButtons = [
    { 
      icon: User, 
      text: 'Use phone / email / username', 
      onClick: () => navigate('/login-credentials')
    },
    { 
      icon: Facebook, 
      text: 'Continue with Facebook', 
      color: '#1877F2', 
      fill: '#1877F2',
      onClick: () => handleOAuthLogin('Facebook')
    },
    { 
      icon: GoogleIcon, 
      text: 'Continue with Google', 
      isCustom: true,
      onClick: () => handleOAuthLogin('Google')
    },
    { 
      icon: MessageCircle, 
      text: 'Continue with LINE', 
      color: '#00C300', 
      fill: '#00C300',
      onClick: () => handleOAuthLogin('LINE')
    },
    { 
      icon: MessageSquare, 
      text: 'Continue with KakaoTalk', 
      color: '#000000', 
      fill: '#000000', 
      bgColor: '#FEE500',
      onClick: () => handleOAuthLogin('KakaoTalk')
    },
    { 
      icon: Apple, 
      text: 'Continue with Apple', 
      color: 'black', 
      fill: 'black',
      onClick: () => handleOAuthLogin('Apple')
    },
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col text-black font-sans">
      <header className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
        <a href="/" className="flex items-center gap-2">
          <Logo />
        </a>
        <button className="flex items-center gap-2 text-gray-700 hover:text-black transition-colors text-sm font-semibold border border-gray-200 px-4 py-2 rounded-full">
          <HelpCircle size={18} />
          Feedback and help
        </button>
      </header>

      <main className="flex-1 flex flex-col items-center justify-center px-4 py-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-[480px] flex flex-col items-center"
        >
          <h1 className="text-[32px] font-bold text-center mb-10 text-black">Log in to Poppro</h1>

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

          <div className="w-full space-y-3.5 mb-10">
            {loginButtons.map((btn, index) => (
              <button
                key={index}
                onClick={btn.onClick}
                disabled={isLoading}
                className="w-full flex items-center px-5 py-3.5 bg-white hover:bg-gray-50 rounded-lg transition-all border border-gray-200 relative disabled:opacity-50"
              >
                <div className="absolute left-5 flex items-center justify-center">
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
                <span className="flex-1 text-center font-semibold text-[#161823] text-base">
                  {btn.text}
                </span>
              </button>
            ))}
          </div>

          <div className="text-center px-4">
            <p className="text-gray-500 text-[13px] leading-relaxed max-w-[360px] mx-auto">
              By continuing with an account located in <span className="font-semibold text-black">Malaysia</span>, you agree to our <a href="#" className="font-semibold text-black hover:underline">Terms of Service</a> and acknowledge that you have read our <a href="#" className="font-semibold text-black hover:underline">Privacy Policy</a>.
            </p>
          </div>
        </motion.div>
      </main>

      <div className="border-t border-gray-100 py-8 text-center bg-white">
        <p className="text-[#161823] text-base">
          Don't have an account? <Link to="/signup" className="text-[#00C880] font-bold hover:underline ml-1">Sign up</Link>
        </p>
      </div>

      <footer className="border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between px-6 py-6 gap-4 bg-gray-50">
        <div className="w-full sm:w-auto">
          <select className="bg-transparent border border-gray-200 text-gray-700 text-sm rounded px-3 py-2 outline-none focus:border-gray-400 appearance-none min-w-[140px]">
            <option value="en">English (US)</option>
            <option value="ms">Bahasa Melayu</option>
          </select>
        </div>
        
        <div className="text-gray-400 text-sm">
          © 2026 Poppro
        </div>
      </footer>
    </div>
  );
}
