import React, { useState, useRef } from 'react';
import { Play, Pause, Volume2, VolumeX, RefreshCw, ChevronUp, ChevronDown, Users, Maximize, ChevronRight, BarChart2 } from 'lucide-react';

export default function LivePage() {
  const categories = [
    'For You', 'Following', 'Gaming', 'Lifestyle', 'Garena Free Fire', 
    'Fortnite', 'Minecraft', 'Call of Duty', 'VALORANT', 'League of Legends', 
    'Marvel Rivals', 'Apex Legends', 'PUBG: BATTLEGROUNDS'
  ];
  const [activeCategory, setActiveCategory] = useState('For You');
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="flex-1 flex flex-col bg-[var(--bg-dark)] overflow-y-auto h-full">
      <div className="relative flex items-center px-6 py-4 shrink-0">
        <div className="flex items-center gap-3 overflow-x-auto scrollbar-hide w-full pr-10">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`whitespace-nowrap px-4 py-1.5 rounded-md text-sm font-semibold transition-colors ${
                activeCategory === cat 
                  ? 'bg-white text-black' 
                  : 'bg-[var(--sidebar-bg)] text-[var(--text-main)] hover:bg-[var(--border-color)]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
        <div className="absolute right-6 top-1/2 -translate-y-1/2 w-8 h-8 bg-[var(--sidebar-bg)] rounded-full flex items-center justify-center cursor-pointer hover:bg-[var(--border-color)] shadow-lg">
          <ChevronRight size={18} className="text-[var(--text-main)]" />
        </div>
      </div>

      <div className="px-6 pb-8 flex flex-col gap-8">
        <div className="relative w-full h-[70vh] min-h-[500px] bg-[#1a1a1a] rounded-xl overflow-hidden flex justify-center items-center group">
          <div className="absolute inset-0 opacity-40">
            <video 
              src="/1.mp4" 
              className="w-full h-full object-cover blur-3xl scale-110"
              autoPlay muted loop playsInline
            />
          </div>

          <div className="relative h-full aspect-[9/16] bg-black shadow-2xl">
            <video 
              ref={videoRef}
              src="/1.mp4" 
              className="w-full h-full object-cover"
              autoPlay muted={isMuted} loop playsInline
            />
            
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60 pointer-events-none"></div>

            <div className="absolute top-6 left-6 flex flex-col gap-2 z-10">
              <div className="bg-[#ff0050] text-white text-[11px] font-bold px-1.5 py-0.5 rounded w-max tracking-wider">
                LIVE
              </div>
              <h2 className="text-white text-3xl font-bold drop-shadow-md mt-1">Personal Branding</h2>
              <div className="flex items-center gap-3 mt-2">
                <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Norm" alt="Avatar" className="w-10 h-10 rounded-full border border-white/50" />
                <div className="flex flex-col">
                  <span className="text-white font-bold text-base drop-shadow-md">Norm Usoff</span>
                  <span className="text-white/90 text-sm flex items-center gap-1 drop-shadow-md">
                    126 watching
                  </span>
                </div>
              </div>
            </div>

            <div className="absolute bottom-24 left-1/2 -translate-x-1/2 z-10 w-full max-w-[280px]">
              <button className="w-full bg-black/40 hover:bg-black/60 backdrop-blur-md border border-white/20 text-white px-6 py-3 rounded-full font-semibold flex items-center justify-center gap-2 transition-all">
                <BarChart2 size={18} className="rotate-90" /> Click to watch LIVE <Maximize size={16} className="ml-1 opacity-70" />
              </button>
            </div>

            <div className="absolute bottom-6 left-6 right-6 flex justify-between items-center z-10">
              <div className="flex items-center gap-5">
                <button onClick={togglePlay} className="text-white hover:text-[var(--primary-green)] transition-colors">
                  {isPlaying ? <Pause size={22} /> : <Play size={22} />}
                </button>
                <button className="text-white hover:text-[var(--primary-green)] transition-colors">
                  <RefreshCw size={20} />
                </button>
              </div>
              <button onClick={toggleMute} className="text-white hover:text-[var(--primary-green)] transition-colors">
                {isMuted ? <VolumeX size={22} /> : <Volume2 size={22} />}
              </button>
            </div>
          </div>

          <div className="absolute right-6 top-1/2 -translate-y-1/2 flex flex-col gap-3 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
            <button className="w-10 h-10 rounded-full bg-black/40 hover:bg-black/60 backdrop-blur-md text-white flex items-center justify-center transition-colors">
              <ChevronUp size={24} />
            </button>
            <button className="w-10 h-10 rounded-full bg-black/40 hover:bg-black/60 backdrop-blur-md text-white flex items-center justify-center transition-colors">
              <ChevronDown size={24} />
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex justify-between items-end">
            <h3 className="text-xl font-bold text-[var(--text-main)]">Gaming</h3>
            <button className="text-sm font-semibold text-[var(--text-secondary)] hover:text-[var(--text-main)] transition-colors">See all</button>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {[2, 3, 4, 5, 6].map((num) => (
              <div key={num} className="relative aspect-[16/9] md:aspect-[9/16] rounded-xl overflow-hidden group cursor-pointer bg-[var(--sidebar-bg)]">
                <video 
                  src={`/${num}.mp4`} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  muted loop playsInline
                  onMouseEnter={(e) => e.currentTarget.play()}
                  onMouseLeave={(e) => {
                    e.currentTarget.pause();
                    e.currentTarget.currentTime = 0;
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/80 pointer-events-none"></div>
                
                <div className="absolute top-2 left-2 flex items-center gap-1">
                  <div className="bg-[#ff0050] text-white text-[10px] font-bold px-1.5 py-0.5 rounded">LIVE</div>
                  <div className="bg-black/50 backdrop-blur-md rounded px-1.5 py-0.5 flex items-center gap-1">
                    <Users size={10} className="text-white"/> 
                    <span className="text-white text-[10px]">{Math.floor(Math.random() * 100)}</span>
                  </div>
                </div>

                <div className="absolute bottom-2 left-2 right-2 flex flex-col gap-1">
                  <h4 className="text-white text-sm font-semibold truncate">Live Stream {num}</h4>
                  <span className="text-white/80 text-xs truncate">Creator {num}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
