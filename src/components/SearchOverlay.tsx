import React, { useState } from 'react';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Search, Mic, X } from 'lucide-react';
import { useUI } from '../data/context/UIContext';

export default function SearchOverlay() {
  const { closeSearch } = useUI();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    if (searchQuery.trim()) {
      closeSearch();
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      className="fixed inset-0 bg-white z-[100] flex flex-col"
    >
      <div className="flex items-center gap-3 px-4 py-2 border-b border-gray-100">
        <button onClick={closeSearch} className="p-1 hover:bg-gray-100 rounded-full transition-colors">
          <ArrowLeft size={24} className="text-[#121212]" />
        </button>

        <div className="flex-1 flex items-center bg-[#f1f1f2] rounded-full px-4 py-1.5 focus-within:ring-1 focus-within:ring-gray-300 transition-all">
          <Search size={18} className="text-[#121212] opacity-50 mr-2" />
          <input
            type="text"
            autoFocus
            placeholder="baju t shirt perempuan"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
            className="flex-1 bg-transparent border-none outline-none text-[15px] text-[#121212] placeholder-gray-500"
          />
          {searchQuery && (
            <button onClick={() => setSearchQuery('')} className="p-1 hover:bg-gray-200 rounded-full mr-1">
              <X size={14} className="text-gray-500" />
            </button>
          )}
          <Mic size={18} className="text-[#121212] ml-2" />
        </div>

        <button 
          onClick={handleSearch}
          className="font-bold text-base px-3 py-1 active:opacity-60 transition-opacity whitespace-nowrap flex-shrink-0"
        >
          <span className="text-[var(--primary-green)]">Car</span>
          <span className="text-black">ian</span>
        </button>
      </div>

      <div className="flex-1 overflow-y-auto px-4 py-4">
        {/* Recent searches or trending can go here */}
        <div className="mt-4">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-widest">Carian Terkini</h3>
            <button className="text-xs font-bold text-[var(--primary-green)]">Padam semua</button>
          </div>
          <div className="space-y-4">
             <div className="flex items-center gap-3 group cursor-pointer" onClick={() => setSearchQuery('fajar dan keyla')}>
               <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                 <Search size={16} className="text-gray-500" />
               </div>
               <span className="text-[15px] font-medium text-[#121212] group-hover:underline">fajar dan keyla</span>
             </div>
             <div className="flex items-center gap-3 group cursor-pointer" onClick={() => setSearchQuery('trending podcas')}>
               <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                 <Search size={16} className="text-gray-500" />
               </div>
               <span className="text-[15px] font-medium text-[#121212] group-hover:underline">trending podcast</span>
             </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
