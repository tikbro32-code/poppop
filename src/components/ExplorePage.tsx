import React, { useState } from 'react';
import { Search, TrendingUp, Music, Hash, Flame, ChevronRight, Play } from 'lucide-react';
import { motion } from 'motion/react';

export default function ExplorePage() {
  const [searchTerm, setSearchTerm] = useState('');

  const banners = [
    { id: 1, title: 'Summer Collection 2026', subtitle: 'Trending Now', image: 'https://picsum.photos/seed/summer/800/400' },
    { id: 2, title: '#DanceChallenge', subtitle: 'Join the party', image: 'https://picsum.photos/seed/dance/800/400' },
  ];

  const trends = [
    { id: 1, title: 'TravelVlog', icon: Hash, stats: '25.4B views', color: 'bg-blue-500' },
    { id: 2, title: 'CookingTips', icon: Flame, stats: '12.1B views', color: 'bg-orange-500' },
    { id: 3, title: 'GamingMoments', icon: Play, stats: '8.9B views', color: 'bg-purple-500' },
    { id: 4, title: 'PopProTutorial', icon: Music, stats: '5.2B views', color: 'bg-green-500' },
  ];

  const suggestedVideos = [
    { id: 1, thumbnail: 'https://picsum.photos/seed/exp1/300/400', views: '1.2M' },
    { id: 2, thumbnail: 'https://picsum.photos/seed/exp2/300/400', views: '890K' },
    { id: 3, thumbnail: 'https://picsum.photos/seed/exp3/300/400', views: '2.5M' },
    { id: 4, thumbnail: 'https://picsum.photos/seed/exp4/300/400', views: '450K' },
    { id: 5, thumbnail: 'https://picsum.photos/seed/exp5/300/400', views: '1.8M' },
    { id: 6, thumbnail: 'https://picsum.photos/seed/exp6/300/400', views: '670K' },
  ];

  return (
    <div className="flex-1 bg-white md:bg-gray-50 flex flex-col min-h-screen">
      {/* Mobile Search Bar */}
      <div className="md:hidden p-4 bg-white sticky top-0 z-10">
        <div className="relative flex items-center">
          <Search size={18} className="absolute left-3 text-gray-400" />
          <input
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-gray-100 rounded-lg py-2 pl-10 pr-4 outline-none text-sm focus:ring-1 focus:ring-[var(--primary-green)]"
          />
        </div>
      </div>

      <div className="flex-1 p-0 md:p-8 md:max-w-7xl md:mx-auto w-full">
        {/* Banner Section */}
        <div className="px-4 md:px-0 mb-8 mt-4 md:mt-0">
          <div className="flex overflow-x-auto scrollbar-hide gap-4 pb-2">
            {banners.map((banner) => (
              <div 
                key={banner.id}
                className="relative min-w-[85%] md:min-w-[600px] h-48 md:h-64 rounded-2xl overflow-hidden shadow-lg group cursor-pointer"
              >
                <img 
                  src={banner.image} 
                  alt={banner.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6">
                  <span className="text-white/80 text-sm font-medium mb-1">{banner.subtitle}</span>
                  <h2 className="text-white text-3xl font-bold tracking-tight">{banner.title}</h2>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Categories / Trends Chips */}
        <div className="px-4 md:px-0 mb-8">
          <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
            <TrendingUp size={20} className="text-[var(--primary-green)]" />
            Trending Topics
          </h3>
          <div className="flex flex-wrap gap-2">
            {trends.map((trend) => (
              <div 
                key={trend.id}
                className="flex items-center gap-2 bg-white border border-gray-100 rounded-full px-4 py-2 shadow-sm hover:shadow-md hover:border-gray-200 transition-all cursor-pointer group"
              >
                <div className={`${trend.color} p-1.5 rounded-full text-white`}>
                  <trend.icon size={14} />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-gray-800">#{trend.title}</span>
                  <span className="text-[10px] text-gray-400">{trend.stats}</span>
                </div>
                <ChevronRight size={14} className="text-gray-300 group-hover:text-gray-500 ml-1" />
              </div>
            ))}
          </div>
        </div>

        {/* Grid Section */}
        <div className="px-4 md:px-0 mb-20">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold">Discover More</h3>
            <button className="text-sm font-bold text-[var(--primary-green)] hover:underline">View all</button>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2">
            {suggestedVideos.map((video) => (
              <motion.div 
                key={video.id}
                whileHover={{ y: -5 }}
                className="relative aspect-[3/4] bg-gray-200 rounded-lg overflow-hidden cursor-pointer shadow-sm group"
              >
                <img 
                  src={video.thumbnail} 
                  alt="Recommended" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors" />
                <div className="absolute bottom-2 left-2 flex items-center gap-1 text-white drop-shadow-md">
                  <Play size={12} fill="currentColor" />
                  <span className="text-[10px] font-bold">{video.views}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
