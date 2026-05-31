import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { Search, Filter, Play, Heart, MessageSquare, ArrowLeft } from 'lucide-react';
import { motion } from 'motion/react';

export default function SearchResultsPage() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('Top');

  const tabs = ['Top', 'Users', 'Videos', 'Sounds', 'LIVE', 'Hashtags'];

  const mockVideos = [
    { id: 1, title: `${query} challenge`, author: 'VideoCreator', likes: '1.2M', thumbnail: 'https://picsum.photos/seed/s1/300/400' },
    { id: 2, title: `How to ${query}`, author: 'TutorialMaster', likes: '890K', thumbnail: 'https://picsum.photos/seed/s2/300/400' },
    { id: 3, title: `${query} vlog`, author: 'TravelBug', likes: '450K', thumbnail: 'https://picsum.photos/seed/s3/300/400' },
    { id: 4, title: `Best ${query} moments`, author: 'FunnyMoments', likes: '2.1M', thumbnail: 'https://picsum.photos/seed/s4/300/400' },
  ];

  return (
    <div className="flex-1 bg-white flex flex-col min-h-screen">
      <div className="sticky top-0 z-20 bg-white border-b border-gray-100">
        <div className="flex items-center gap-3 px-4 py-2">
            <button onClick={() => navigate(-1)} className="p-1 hover:bg-gray-100 rounded-full transition-colors">
                <ArrowLeft size={24} />
            </button>
            <div className="flex-1 flex items-center bg-gray-100 rounded-full px-4 py-1.5">
                <Search size={18} className="text-gray-400 mr-2" />
                <input 
                    type="text" 
                    defaultValue={query}
                    className="bg-transparent border-none outline-none text-sm w-full"
                    placeholder="Search"
                />
            </div>
            <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                <Filter size={20} />
            </button>
        </div>
        
        <div className="flex overflow-x-auto scrollbar-hide px-4 gap-6 pt-2 pb-0.5">
            {tabs.map((tab) => (
                <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`pb-2 text-[15px] font-bold whitespace-nowrap transition-colors relative ${
                        activeTab === tab ? 'text-black' : 'text-gray-400 hover:text-gray-600'
                    }`}
                >
                    {tab}
                    {activeTab === tab && (
                        <motion.div 
                            layoutId="searchTab"
                            className="absolute bottom-0 left-0 right-0 h-[2px] bg-black rounded-full" 
                        />
                    )}
                </button>
            ))}
        </div>
      </div>

      <div className="flex-1 p-4">
        {activeTab === 'Top' && (
            <div className="space-y-8">
                {/* Users Section */}
                <section>
                    <h3 className="text-sm font-bold text-gray-500 uppercase mb-4">Users</h3>
                    <div className="space-y-4">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=searchuser" className="w-14 h-14 rounded-full bg-gray-50" />
                                <div>
                                    <p className="font-bold text-[16px]">{query.replace(/\s/g, '_')}_Official</p>
                                    <p className="text-sm text-gray-400">12.5M followers • 50 videos</p>
                                </div>
                            </div>
                            <button className="bg-[#FF0050] text-white font-bold px-6 py-2 rounded transition-transform active:scale-95">
                                Follow
                            </button>
                        </div>
                    </div>
                </section>

                {/* Videos Section */}
                <section>
                    <h3 className="text-sm font-bold text-gray-500 uppercase mb-4">Videos</h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
                        {mockVideos.map((video) => (
                            <div key={video.id} className="relative aspect-[3/4] bg-gray-200 rounded-lg overflow-hidden group cursor-pointer shadow-sm">
                                <img src={video.thumbnail} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-2">
                                    <p className="text-white text-[11px] font-medium line-clamp-2 mb-1">{video.title}</p>
                                    <div className="flex items-center justify-between text-white/90">
                                        <div className="flex items-center gap-1">
                                            <Play size={10} fill="currentColor" />
                                            <span className="text-[10px] font-bold">{video.likes}</span>
                                        </div>
                                        <span className="text-[9px] opacity-70">@{video.author}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        )}
        
        {activeTab !== 'Top' && (
            <div className="flex flex-col items-center justify-center py-20 text-gray-400">
                <Search size={48} className="mb-4 opacity-20" />
                <p>Showing results for {activeTab}</p>
            </div>
        )}
      </div>
    </div>
  );
}
