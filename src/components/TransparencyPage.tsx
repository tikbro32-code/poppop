import React, { useState } from 'react';
import { ChevronRight, Play } from 'lucide-react';

export default function TransparencyPage() {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = [
    { id: 'All', green: 'A', white: 'll' },
    { id: 'Dance', green: 'Dan', white: 'ce' },
    { id: 'Show', green: 'Sh', white: 'ow' },
    { id: 'Beauty', green: 'Bea', white: 'uty' },
    { id: 'Dailylife', green: 'Dail', white: 'ylife' },
    { id: 'Technology', green: 'Tech', white: 'nology' },
    { id: 'Fitness', green: 'Fit', white: 'ness' },
    { id: 'Trand', green: 'Tra', white: 'nd' },
    { id: 'Drama', green: 'Dr', white: 'ama' },
    { id: 'Games', green: 'Ga', white: 'mes' },
  ];

  const dummyVideos = [
    { id: 1, title: 'Epic Dance Battle in the Rain', author: 'DanceKing', views: '1.2M', thumbnail: 'https://picsum.photos/seed/dance1/400/600', category: 'Dance' },
    { id: 2, title: 'Tech Review 2026: The Future is Here', author: 'TechGuru', views: '850K', thumbnail: 'https://picsum.photos/seed/tech1/400/600', category: 'Technology' },
    { id: 3, title: 'My Morning Routine', author: 'LifeStyle', views: '2.1M', thumbnail: 'https://picsum.photos/seed/daily1/400/600', category: 'Dailylife' },
    { id: 4, title: 'Pro Gamer Moves - Final Boss', author: 'GameMaster', views: '3.4M', thumbnail: 'https://picsum.photos/seed/game1/400/600', category: 'Games' },
    { id: 5, title: '10 Minute Makeup Tutorial', author: 'BeautyQueen', views: '500K', thumbnail: 'https://picsum.photos/seed/beauty1/400/600', category: 'Beauty' },
    { id: 6, title: 'Intense Workout Motivation', author: 'FitPro', views: '920K', thumbnail: 'https://picsum.photos/seed/fit1/400/600', category: 'Fitness' },
    { id: 7, title: 'Street Magic Show Illusion', author: 'MagicMan', views: '1.5M', thumbnail: 'https://picsum.photos/seed/show1/400/600', category: 'Show' },
    { id: 8, title: 'Viral Trend Challenge Compilation', author: 'TrendSetter', views: '4.2M', thumbnail: 'https://picsum.photos/seed/trend1/400/600', category: 'Trand' },
    { id: 9, title: 'Short Drama: The Betrayal', author: 'DramaStudio', views: '3.1M', thumbnail: 'https://picsum.photos/seed/drama1/400/600', category: 'Drama' },
    { id: 10, title: 'K-Pop Dance Cover', author: 'DanceCrew', views: '2.8M', thumbnail: 'https://picsum.photos/seed/dance2/400/600', category: 'Dance' },
    { id: 11, title: 'Unboxing the New AI Gadget', author: 'TechGuru', views: '1.1M', thumbnail: 'https://picsum.photos/seed/tech2/400/600', category: 'Technology' },
    { id: 12, title: 'Speedrun World Record', author: 'GameMaster', views: '5.5M', thumbnail: 'https://picsum.photos/seed/game2/400/600', category: 'Games' },
  ];

  const filteredVideos = activeCategory === 'All' 
    ? dummyVideos 
    : dummyVideos.filter(video => video.category === activeCategory);

  return (
    <div className="flex-1 flex flex-col bg-[var(--bg-dark)] overflow-hidden">
      <div className="relative border-b border-[var(--border-color)] bg-[var(--bg-dark)] z-20">
        <div className="flex items-center px-2 sm:px-4 py-2 sm:py-3 overflow-x-auto scrollbar-hide gap-1 sm:gap-3 whitespace-nowrap relative z-0">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 sm:px-5 py-1.5 sm:py-2 rounded-full font-black tracking-tighter text-base sm:text-lg transition-all active:scale-95 ${
                activeCategory === cat.id ? 'bg-[var(--primary-green)]/10' : 'hover:bg-gray-50 dark:hover:bg-white/5 bg-transparent'
              }`}
            >
              <span className="text-[var(--primary-green)]">{cat.green}</span>
              <span className="text-[var(--text-main)]">{cat.white}</span>
            </button>
          ))}
          <div className="w-10 flex-shrink-0"></div>
        </div>
        
        <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[var(--bg-dark)] via-[var(--bg-dark)]/80 to-transparent flex items-center justify-end pr-2 pointer-events-none z-10">
          <ChevronRight className="text-[var(--text-main)] opacity-50" size={20} />
        </div>
      </div>

      <div className="flex-1 p-4 overflow-y-auto scrollbar-hide">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {filteredVideos.map((video) => (
            <div key={video.id} className="relative aspect-[3/4] sm:aspect-[9/16] rounded-xl overflow-hidden group cursor-pointer bg-gray-50 dark:bg-white/5 border border-[var(--border-color)] shadow-sm">
              <img 
                src={video.thumbnail} 
                alt={video.title} 
                referrerPolicy="no-referrer" 
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-90"></div>
              
              <div className="absolute top-2 right-2 flex items-center gap-1 text-white text-xs font-bold bg-black/40 px-2 py-1 rounded-md backdrop-blur-sm">
                <Play size={12} className="fill-white" />
                {video.views}
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-3">
                <h3 className="text-white font-bold text-sm line-clamp-2 mb-1 group-hover:text-[var(--primary-green)] transition-colors">{video.title}</h3>
                <div className="flex items-center text-white/80 text-xs">
                  <span>@{video.author}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredVideos.length === 0 && (
          <div className="flex flex-col items-center justify-center h-64 text-[var(--text-secondary)]">
            <p>No videos for this category.</p>
          </div>
        )}
      </div>
    </div>
  );
}
