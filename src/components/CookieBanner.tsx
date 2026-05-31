import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Shield, X, Check, Globe, Settings } from 'lucide-react';
import appConfig from './config/appConfig.json';

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem('cookie-consent', 'all');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookie-consent', 'essential');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-6 left-6 right-6 md:left-auto md:right-8 md:w-[420px] z-[100]"
        >
          <div className="bg-[var(--sidebar-bg)] border border-[var(--border-color)] rounded-[2rem] shadow-2xl shadow-black/50 overflow-hidden">
            <div className="p-6 space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-[var(--primary-green)]/10 rounded-xl text-[var(--primary-green)]">
                    <Shield size={20} />
                  </div>
                  <h3 className="text-lg font-black tracking-tight text-[var(--text-main)]">
                    {appConfig.cookieBanner.title}
                  </h3>
                </div>
                <button 
                  onClick={() => setIsVisible(false)}
                  className="p-2 hover:bg-[var(--border-color)] rounded-full text-[var(--text-secondary)] transition-colors"
                >
                  <X size={18} />
                </button>
              </div>

              <div className="space-y-3">
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  {appConfig.cookieBanner.subTitle}
                </p>
                <p className="text-[13px] text-[var(--text-secondary)] opacity-70 leading-relaxed">
                  {appConfig.cookieBanner.description}
                </p>
                <div className="flex items-center gap-2 text-[11px] font-bold text-[var(--primary-green)] uppercase tracking-widest">
                  <Globe size={12} />
                  <span>Region: {appConfig.appProps.region}</span>
                  <span className="text-[var(--text-secondary)] opacity-20">•</span>
                  <span>IDC: {appConfig.appProps.idcRegion}</span>
                </div>
              </div>

              <div className="pt-2 space-y-2">
                <button
                  onClick={handleAcceptAll}
                  className="w-full py-3 bg-[var(--primary-green)] hover:opacity-90 text-[var(--text-main)] font-black rounded-2xl transition-all active:scale-[0.98] shadow-lg shadow-[var(--primary-green)]/10"
                >
                  {appConfig.cookieBanner.btnAccept}
                </button>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={handleDecline}
                    className="py-2.5 bg-[var(--border-color)] hover:opacity-80 text-[var(--text-secondary)] text-xs font-bold rounded-xl transition-colors"
                  >
                    {appConfig.cookieBanner.btnDecline}
                  </button>
                  <button
                    onClick={() => setShowSettings(!showSettings)}
                    className="py-2.5 bg-[var(--border-color)] hover:opacity-80 text-[var(--text-secondary)] text-xs font-bold rounded-xl transition-colors flex items-center justify-center gap-2"
                  >
                    <Settings size={14} />
                    Manage
                  </button>
                </div>
              </div>
            </div>

            <AnimatePresence>
              {showSettings && (
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: 'auto' }}
                  exit={{ height: 0 }}
                  className="bg-[var(--bg-dark)] border-t border-[var(--border-color)] overflow-hidden"
                >
                  <div className="p-6 space-y-4">
                    {appConfig.cookieBanner.settings.map((setting, i) => (
                      <div key={i} className="flex items-center justify-between gap-4">
                        <div className="flex-1">
                          <p className="text-xs font-bold text-[var(--text-main)]">{setting.groupName}</p>
                          <p className="text-[10px] text-[var(--text-secondary)]">{setting.description}</p>
                        </div>
                        <div className={`w-10 h-5 rounded-full relative transition-colors ${setting.disabled ? 'bg-[var(--primary-green)]/40 cursor-not-allowed' : 'bg-[var(--primary-green)] cursor-pointer'}`}>
                          <div className="absolute right-1 top-1 w-3 h-3 bg-white rounded-full" />
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="px-6 py-3 bg-[var(--bg-dark)] border-t border-[var(--border-color)] flex justify-between items-center">
              <a href={appConfig.cookieBanner.policyUrl} target="_blank" rel="noopener noreferrer" className="text-[10px] font-bold text-[var(--text-secondary)] opacity-50 hover:opacity-100 hover:text-[var(--primary-green)] transition-colors uppercase tracking-widest">
                Cookies Policy
              </a>
              <div className="flex gap-1">
                <div className="w-1.5 h-1.5 rounded-full bg-[var(--primary-green)]" />
                <div className="w-1.5 h-1.5 rounded-full bg-[var(--primary-green)]/40" />
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
