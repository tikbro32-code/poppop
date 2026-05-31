import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Link as LinkIcon, Facebook, Twitter, Mail, MessageCircle } from 'lucide-react';

interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoUrl?: string;
}

export default function ShareModal({ isOpen, onClose, videoUrl = 'https://poppro.app/v/12345' }: ShareModalProps) {
  const handleCopyLink = () => {
    navigator.clipboard.writeText(videoUrl);
    onClose();
  };

  const shareOptions = [
    { icon: LinkIcon, label: 'Copy Link', action: handleCopyLink, color: 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white' },
    { icon: MessageCircle, label: 'WhatsApp', action: () => window.open(`https://wa.me/?text=${encodeURIComponent(videoUrl)}`), color: 'bg-[#25D366] text-white' },
    { icon: Facebook, label: 'Facebook', action: () => window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(videoUrl)}`), color: 'bg-[#1877F2] text-white' },
    { icon: Twitter, label: 'Twitter', action: () => window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(videoUrl)}`), color: 'bg-[#1DA1F2] text-white' },
    { icon: Mail, label: 'Email', action: () => window.open(`mailto:?subject=Check out this video on Poppro&body=${encodeURIComponent(videoUrl)}`), color: 'bg-gray-500 text-white' },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-0 sm:p-4">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
          <motion.div
            initial={{ opacity: 0, y: '100%', sm: { y: 0, scale: 0.95 } }}
            animate={{ opacity: 1, y: 0, sm: { scale: 1 } }}
            exit={{ opacity: 0, y: '100%', sm: { y: 0, scale: 0.95 } }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full sm:max-w-md bg-[var(--bg-main)] rounded-t-2xl sm:rounded-2xl shadow-2xl border-t sm:border border-[var(--border-color)] overflow-hidden"
          >
            <div className="flex items-center justify-between p-4 border-b border-[var(--border-color)]">
              <h2 className="text-xl font-bold text-[var(--text-main)]">Share to</h2>
              <button 
                onClick={onClose}
                className="p-2 hover:bg-[var(--sidebar-bg)] rounded-full transition-colors text-[var(--text-main)]"
              >
                <X size={20} />
              </button>
            </div>
            
            <div className="p-6">
              <div className="grid grid-cols-4 sm:grid-cols-5 gap-4">
                {shareOptions.map((option, index) => (
                  <button 
                    key={index}
                    onClick={option.action}
                    className="flex flex-col items-center gap-2 group"
                  >
                    <div className={`w-14 h-14 rounded-full flex items-center justify-center transition-transform group-hover:scale-110 ${option.color}`}>
                      <option.icon size={24} />
                    </div>
                    <span className="text-xs font-medium text-[var(--text-secondary)] text-center">
                      {option.label}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
