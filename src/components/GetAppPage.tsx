import React, { useState } from 'react';
import { Apple, Smartphone, QrCode } from 'lucide-react';
import { motion } from 'motion/react';

export default function GetAppPage() {
  const [platform, setPlatform] = useState<'ios' | 'android'>('ios');

  return (
    <div className="flex-1 bg-[var(--bg-dark)] overflow-y-auto scrollbar-hide">
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-24 flex flex-col md:flex-row items-center justify-between gap-12">
        
        <div className="flex-1 text-center md:text-left">
          <div className="inline-flex p-1 bg-gray-100 dark:bg-white/5 rounded-full border border-[var(--border-color)] mb-12">
            <button 
              onClick={() => setPlatform('ios')}
              className={`flex items-center gap-2 px-8 py-2 rounded-full transition-all ${platform === 'ios' ? 'bg-[var(--primary-green)] text-white shadow-md' : 'text-[var(--text-secondary)] hover:text-[var(--text-main)]'}`}
            >
              <Apple size={20} fill={platform === 'ios' ? 'white' : 'none'} />
              <span className="font-bold">iOS</span>
            </button>
            <button 
              onClick={() => setPlatform('android')}
              className={`flex items-center gap-2 px-8 py-2 rounded-full transition-all ${platform === 'android' ? 'bg-[var(--primary-green)] text-white shadow-md' : 'text-[var(--text-secondary)] hover:text-[var(--text-main)]'}`}
            >
              <Smartphone size={20} />
              <span className="font-bold">Android</span>
            </button>
          </div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-[var(--text-secondary)] text-lg mb-4 font-medium">
              Download the latest official Poppro app for {platform === 'ios' ? 'iOS' : 'Android'}
            </p>
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-tight mb-8 text-[var(--text-main)]">
              Download <span className="text-[var(--primary-green)]">Poppro</span> - <br />
              <span>Make Your Day</span>
            </h1>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button className="px-10 py-4 bg-[var(--primary-green)] hover:bg-[var(--primary-green)]/90 text-white font-black text-xl rounded-xl transition-all transform active:scale-95 shadow-xl">
                INSTALL NOW
              </button>
              <button className="px-10 py-4 bg-gray-100 dark:bg-white/10 hover:bg-gray-200 dark:hover:bg-white/20 text-[var(--text-main)] font-black text-xl rounded-xl transition-all border border-[var(--border-color)]">
                LEARN MORE
              </button>
            </div>
          </motion.div>
        </div>

        <div className="flex-1 relative flex justify-center items-center">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative w-[280px] h-[580px] bg-black rounded-[3rem] border-[8px] border-gray-800 shadow-2xl overflow-hidden z-10"
          >
            <img 
              src="https://picsum.photos/seed/popproapp/400/800" 
              alt="App Preview" 
              className="w-full h-full object-cover opacity-80"
              referrerPolicy="no-referrer"
            />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-black rounded-b-2xl mt-2"></div>
          </motion.div>

          <motion.div
            animate={{ 
              y: [0, -20, 0],
              rotate: [0, 5, 0]
            }}
            transition={{ 
              duration: 4, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute -left-10 top-20 z-20 w-32 h-32 bg-gradient-to-br from-[var(--primary-green)] to-cyan-400 rounded-3xl shadow-2xl flex items-center justify-center transform -rotate-12 border border-white/20 backdrop-blur-md"
          >
            <span className="text-white text-5xl font-black">P</span>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="absolute -right-10 bottom-10 z-30 bg-[var(--primary-green)] p-4 rounded-2xl shadow-2xl w-56 border border-white/20"
          >
            <p className="text-white font-bold text-sm mb-3">Scan QR code to download</p>
            <div className="bg-white p-3 rounded-xl aspect-square flex items-center justify-center relative">
              <QrCode size={140} className="text-black" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center border-2 border-white">
                   <span className="text-[var(--primary-green)] font-black text-xs">P</span>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="absolute inset-0 bg-[var(--primary-green)]/20 blur-[120px] rounded-full -z-10"></div>
        </div>
      </div>

      <div className="bg-gray-50 dark:bg-black/40 border-t border-[var(--border-color)] py-12">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center gap-8 opacity-60 grayscale hover:grayscale-0 transition-all">
           <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="App Store" className="h-12" />
           <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Play Store" className="h-12" />
           <img src="https://upload.wikimedia.org/wikipedia/commons/f/f7/Get_it_from_Microsoft_Badge.svg" alt="Microsoft" className="h-12" />
        </div>
      </div>
    </div>
  );
}
