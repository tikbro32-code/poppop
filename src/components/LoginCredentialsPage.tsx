import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ChevronLeft, HelpCircle, Eye, EyeOff, Loader2 } from 'lucide-react';
import Logo from './Logo';

export default function LoginCredentialsPage() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    identifier: '',
    password: ''
  });
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    
    setTimeout(() => {
      setIsLoading(false);
      setError("Email/Password login is not enabled in this demo. Please use social login (Google, Facebook, etc.)");
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col text-black font-sans">
      <header className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
        <button 
          onClick={() => navigate(-1)}
          className="p-2 hover:bg-gray-100 rounded-full transition-colors text-gray-700"
        >
          <ChevronLeft size={24} />
        </button>
        <a href="/" className="flex items-center gap-2">
          <Logo />
        </a>
        <button className="flex items-center gap-2 text-gray-700 hover:text-black transition-colors text-sm font-semibold border border-gray-200 px-4 py-2 rounded-full">
          <HelpCircle size={18} />
          Feedback and help
        </button>
      </header>

      <main className="flex-1 flex flex-col items-center justify-center px-4 py-12 text-black">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-[400px] flex flex-col"
        >
          <h1 className="text-[32px] font-bold text-center mb-10">Log in</h1>
          
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1.5 ml-1">
                Email or username
              </label>
              <input
                type="text"
                required
                value={formData.identifier}
                onChange={(e) => setFormData({ ...formData, identifier: e.target.value })}
                className="w-full bg-gray-50 border border-gray-200 focus:border-gray-400 rounded-lg py-3.5 px-4 outline-none transition-all text-black placeholder:text-gray-400"
                placeholder="Email or username"
              />
            </div>

            <div className="relative">
              <label className="block text-sm font-semibold text-gray-700 mb-1.5 ml-1">
                Password
              </label>
              <input
                type={showPassword ? 'text' : 'password'}
                required
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                className="w-full bg-gray-50 border border-gray-200 focus:border-gray-400 rounded-lg py-3.5 px-4 outline-none transition-all text-black placeholder:text-gray-400"
                placeholder="Password"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 bottom-3.5 text-gray-400 hover:text-black transition-colors"
                title={showPassword ? 'Hide password' : 'Show password'}
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>

            <button type="button" className="text-xs font-semibold text-gray-500 hover:text-black transition-colors hover:underline">
              Forgot password?
            </button>

            {error && (
              <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-red-600 text-sm text-center">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={isLoading || !formData.identifier || !formData.password}
              className="w-full py-4 bg-[#00C880] hover:brightness-105 disabled:bg-gray-100 disabled:text-gray-400 disabled:cursor-not-allowed rounded-lg font-bold transition-all mt-4 flex items-center justify-center text-white text-base"
            >
              {isLoading ? <Loader2 className="animate-spin" size={20} /> : 'Log in'}
            </button>
          </form>

          <div className="mt-12 text-center px-4">
            <p className="text-gray-500 text-[13px] leading-relaxed max-w-[360px] mx-auto">
              By continuing, you agree to Poppro's <a href="#" className="font-semibold text-black hover:underline">Terms of Service</a> and acknowledge that you have read our <a href="#" className="font-semibold text-black hover:underline">Privacy Policy</a>.
            </p>
          </div>
        </motion.div>
      </main>

      <div className="border-t border-gray-100 py-8 text-center bg-white">
        <p className="text-[#161823] text-base">
          Don't have an account? <Link to="/signup" className="text-[#00C880] font-bold hover:underline ml-1">Sign up</Link>
        </p>
      </div>
    </div>
  );
}
