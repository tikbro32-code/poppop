import React, { useRef, useState, useEffect } from "react";
import { useAuth } from "../data/context/AuthContext";
import { useUI } from "../data/context/UIContext";
import ShareModal from "./ShareModal";
import { 
  Heart, 
  MessageCircle, 
  Bookmark, 
  Share2, 
  Music2,
  CheckCircle2,
  Plus,
  ChevronUp,
  ChevronDown,
  ChevronRight,
  Volume2,
  VolumeX
} from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";

interface VideoData {
  id: string;
  url: string;
  author: string;
  likes: string;
  comments: string;
  shares: string;
  description: string;
  category: string;
  thumbnail: string;
  views: string;
  aspectRatio: '16:9' | '9:16' | '8:9' | '4:3' | 'square';
}

import Hls from 'hls.js';

const VideoPlayer = ({ video, isMuted, setIsMuted, isActive }: { video: VideoData, isMuted: boolean, setIsMuted: (m: boolean) => void, isActive: boolean }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const { user } = useAuth();
  const { openLoginModal } = useUI();

  const getAspectRatioClass = (ratio: string) => {
    switch (ratio) {
      case '16:9': return 'md:aspect-[16/9]';
      case '9:16': return 'md:aspect-[9/16]';
      case '8:9': return 'md:aspect-[8/9]';
      case '4:3': return 'md:aspect-[4/3]';
      case 'square': return 'md:aspect-square';
      default: return 'md:aspect-[9/16]';
    }
  };

  useEffect(() => {
    const videoElement = videoRef.current;
    if (!videoElement) return;

    let hls: Hls | null = null;

    if (video.category === 'Gaming') return; // Skip video loading for the image grid version

    if (video.url.endsWith('.m3u8')) {
      if (Hls.isSupported()) {
        hls = new Hls({
          capLevelToPlayerSize: true,
        });
        hls.loadSource(video.url);
        hls.attachMedia(videoElement);
        hls.on(Hls.Events.MANIFEST_PARSED, () => {
          if (isActive) {
            videoElement.play().catch(e => console.log("Autoplay prevented:", e));
          }
        });
      } else if (videoElement.canPlayType('application/vnd.apple.mpegurl')) {
        videoElement.src = video.url;
        if (isActive) {
          videoElement.play().catch(e => console.log("Autoplay prevented:", e));
        }
      }
    } else {
      videoElement.src = video.url;
      if (isActive) {
        videoElement.play().catch(e => console.log("Autoplay prevented:", e));
      }
    }

    return () => {
      if (hls) {
        hls.destroy();
      }
    };
  }, [video.url, video.category, isActive]);

  useEffect(() => {
    const videoElement = videoRef.current;
    if (!videoElement || video.category === 'Gaming') return;

    if (isActive) {
      videoElement.play().catch(e => console.log("Autoplay prevented:", e));
    } else {
      videoElement.pause();
    }
  }, [isActive, video.category]);

  const isGaming = video.category === 'Gaming';

  return (
    <div 
      className={`relative w-full h-full md:h-full ${getAspectRatioClass(video.aspectRatio)} md:rounded-[12px] overflow-hidden bg-black md:shadow-2xl cursor-pointer group`}
      onClick={() => setIsMuted(!isMuted)}
    >
      {isGaming ? (
        <div className="grid grid-cols-2 grid-rows-2 w-full h-full gap-0">
          <div className="relative w-full h-full overflow-hidden border-b border-r border-white/5">
            <img 
              src="/image_0.png" 
              className="w-full h-full object-cover" 
              alt="ML Match 0" 
              referrerPolicy="no-referrer"
              onError={(e) => {
                (e.target as HTMLImageElement).src = 'https://picsum.photos/seed/ml0/400/300';
              }}
            />
          </div>
          <div className="relative w-full h-full overflow-hidden border-b border-white/5">
            <img 
              src="/image_1.png" 
              className="w-full h-full object-cover" 
              alt="ML Match 1" 
              referrerPolicy="no-referrer"
              onError={(e) => {
                (e.target as HTMLImageElement).src = 'https://picsum.photos/seed/ml1/400/300';
              }}
            />
          </div>
          <div className="relative w-full h-full overflow-hidden border-r border-white/5">
            <img 
              src="/image_2.png" 
              className="w-full h-full object-cover" 
              alt="ML Match 2" 
              referrerPolicy="no-referrer"
              onError={(e) => {
                (e.target as HTMLImageElement).src = 'https://picsum.photos/seed/ml2/400/300';
              }}
            />
          </div>
          <div className="relative w-full h-full overflow-hidden">
            <img 
              src="/image_3.png" 
              className="w-full h-full object-cover" 
              alt="ML Match 3" 
              referrerPolicy="no-referrer"
              onError={(e) => {
                (e.target as HTMLImageElement).src = 'https://picsum.photos/seed/ml3/400/300';
              }}
            />
            <div className="absolute inset-0 flex items-center justify-center p-2">
              <motion.div 
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ repeat: Infinity, repeatType: "reverse", duration: 1 }}
                className="bg-black/60 backdrop-blur-sm px-3 py-1 rounded-full border border-white/20 whitespace-nowrap"
              >
                <span className="text-white font-black text-[10px] md:text-sm tracking-tighter uppercase drop-shadow-lg">
                  Follow For More!
                </span>
              </motion.div>
            </div>
          </div>
        </div>
      ) : (
        <video 
          ref={videoRef}
          className="w-full h-full object-cover"
          loop
          playsInline
          muted={isMuted}
        />
      )}
      
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/60 pointer-events-none"></div>
      
      <div className="absolute top-4 right-4 md:top-6 md:right-6 z-20 w-10 h-10 bg-black/40 backdrop-blur-sm rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
        {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
      </div>

      <div className="absolute bottom-[90px] md:bottom-0 left-0 right-16 md:right-0 p-4 md:pb-5 flex flex-col z-10 pointer-events-none">
        <div className="flex items-center gap-2 mb-1 pointer-events-auto">
          <Link to={`/@${video.author}`} className="font-bold text-[17px] text-white hover:underline cursor-pointer drop-shadow-md">{video.author}</Link>
        </div>
        <p className="text-white text-[15px] mb-2 line-clamp-2 drop-shadow-md leading-snug max-w-[90%] font-normal">
          {video.description}
        </p>
        <button className="flex items-center gap-1 text-white text-[13px] font-bold mb-3 pointer-events-auto drop-shadow-md">
           Lihat Asal <ChevronRight size={14} strokeWidth={3} />
        </button>
        <div className="flex items-center gap-2 text-sm font-semibold text-white/90 hover:underline cursor-pointer drop-shadow-md">
          <Music2 size={14} />
          <span className="truncate">Bunyi asal - {video.author}</span>
        </div>
      </div>

      <div className="absolute right-2 bottom-[100px] flex flex-col items-center gap-5 z-20 md:hidden">
        <div className="relative mb-2">
          <Link to={`/@${video.author}`} className="block w-[48px] h-[48px] rounded-full bg-white border border-white overflow-hidden cursor-pointer">
            <img src={`https://picsum.photos/seed/${video.author}/100/100`} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
          </Link>
          <button 
            onClick={(e) => {
              e.preventDefault();
              if (!user) {
                openLoginModal();
              }
            }}
            className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-6 h-6 bg-[#FF0050] rounded-full flex items-center justify-center text-white border-2 border-white"
          >
            <Plus size={16} strokeWidth={4} />
          </button>
        </div>
        <button className="flex flex-col items-center gap-1">
          <Heart size={36} className="text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]" fill="white" />
          <span className="text-white text-xs font-semibold drop-shadow-md">{video.likes}</span>
        </button>
        <button className="flex flex-col items-center gap-1">
          <MessageCircle size={36} className="text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]" fill="white" />
          <span className="text-white text-xs font-semibold drop-shadow-md">{video.comments}</span>
        </button>
        <button className="flex flex-col items-center gap-1">
          <Bookmark size={36} className="text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]" fill="white" />
          <span className="text-white text-xs font-semibold drop-shadow-md">17.8K</span>
        </button>
        <button className="flex flex-col items-center gap-1">
          <Share2 size={36} className="text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]" fill="white" />
          <span className="text-white text-xs font-semibold drop-shadow-md">{video.shares}</span>
        </button>
      </div>
    </div>
  );
};

export default function LandingPage() {
  const { user } = useAuth();
  const { openLoginModal } = useUI();
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [videos, setVideos] = useState<VideoData[]>([]);
  const [loading, setLoading] = useState(true);
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);
  const [currentShareUrl, setCurrentShareUrl] = useState('');
  const [savedVideos, setSavedVideos] = useState<Set<number>>(new Set());
  const [activeVideoIndex, setActiveVideoIndex] = useState(0);

  const handleShare = (videoId: string) => {
    setCurrentShareUrl(`https://poppro.app/v/${videoId}`);
    setIsShareModalOpen(true);
  };

  const toggleSave = (videoId: string) => {
    setSavedVideos(prev => {
      const newSet = new Set(prev);
      if (newSet.has(videoId as any)) {
        newSet.delete(videoId as any);
      } else {
        newSet.add(videoId as any);
      }
      return newSet;
    });
  };

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await fetch('/api/videos');
        if (!response.ok) {
          throw new Error('Failed to fetch videos');
        }
        const data = await response.json();
        
        if (data.success && data.data && data.data.length > 0) {
          setVideos(data.data);
        } else {
          const mockVideos: VideoData[] = [
            {
              id: '1',
              url: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
              author: 'maven.stark',
              likes: '4.5M',
              comments: '23.4K',
              shares: '120K',
              description: '8:9 Viral Ratio 2025 Test 🔥 This fills the whole phone screen perfectly. #viral #8:9',
              category: 'Movies',
              thumbnail: 'https://picsum.photos/seed/viral/576/658',
              views: '25M',
              aspectRatio: '8:9'
            },
            {
              id: '2',
              url: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
              author: 'alertpudding9yt',
              likes: '890K',
              comments: '12K',
              shares: '45K',
              description: 'Standard 9:16 Vertical Video. The classic Poppro look. #fyp',
              category: 'News',
              thumbnail: 'https://picsum.photos/seed/vertical/576/1024',
              views: '3.4M',
              aspectRatio: '9:16'
            },
            {
              id: '3',
              url: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
              author: 'yaseer9494',
              likes: '2.1M',
              comments: '45K',
              shares: '89K',
              description: '16:9 Landscape Video. Perfect for cinematic shots. #cinema',
              category: 'Sports',
              thumbnail: 'https://picsum.photos/seed/landscape/1024/576',
              views: '12M',
              aspectRatio: '16:9'
            },
            {
              id: '4',
              url: 'https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
              author: 'sukarr_45',
              likes: '1.5M',
              comments: '5.6K',
              shares: '34K',
              description: '4:3 Meme/Retro Ratio. Best for specific gaming content. #gaming #retro',
              category: 'Gaming',
              thumbnail: 'https://picsum.photos/seed/retro/768/576',
              views: '8.2M',
              aspectRatio: '4:3'
            }
          ];
          setVideos(mockVideos);
        }
      } catch (error) {
        console.error("Error fetching videos from API:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchVideos();
  }, []);

  useEffect(() => {
    if (videos.length === 0) return;
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute('data-index'));
            setActiveVideoIndex(index);
          }
        });
      },
      { threshold: 0.6 }
    );

    const videoContainers = document.querySelectorAll('.video-container');
    videoContainers.forEach((container) => observer.observe(container));

    return () => {
      videoContainers.forEach((container) => observer.unobserve(container));
    };
  }, [videos]);

  const scroll = (direction: 'up' | 'down') => {
    if (!containerRef.current) return;
    const { scrollTop, clientHeight } = containerRef.current;
    const targetScroll = direction === 'up' 
      ? scrollTop - clientHeight 
      : scrollTop + clientHeight;
    
    containerRef.current.scrollTo({
      top: targetScroll,
      behavior: 'smooth'
    });
  };

  if (loading) {
    return (
      <div className="flex-1 w-full h-full flex items-center justify-center bg-[var(--bg-dark)]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[var(--primary-green)]"></div>
      </div>
    );
  }

  return (
    <div className="relative flex-1 w-full h-full overflow-hidden bg-[var(--bg-dark)]">
      <div className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col gap-4">
        <button 
          onClick={() => scroll('up')}
          className="w-12 h-12 rounded-full bg-[var(--sidebar-bg)] hover:bg-[var(--border-color)] border border-[var(--border-color)] flex items-center justify-center text-[var(--text-main)] transition-all shadow-lg group"
          title="Previous Video"
        >
          <ChevronUp size={28} className="group-hover:-translate-y-0.5 transition-transform" />
        </button>
        <button 
          onClick={() => scroll('down')}
          className="w-12 h-12 rounded-full bg-[var(--sidebar-bg)] hover:bg-[var(--border-color)] border border-[var(--border-color)] flex items-center justify-center text-[var(--text-main)] transition-all shadow-lg group"
          title="Next Video"
        >
          <ChevronDown size={28} className="group-hover:translate-y-0.5 transition-transform" />
        </button>
      </div>

      <div 
        ref={containerRef}
        className="w-full h-full overflow-y-scroll scrollbar-hide snap-y snap-mandatory"
      >
      
      {videos.map((video, index) => (
        <div key={video.id || index} data-index={index} className="video-container w-full h-full flex-shrink-0 flex justify-center items-center snap-start py-0 overflow-hidden">
          <div className="relative w-full h-full md:w-auto md:h-full md:max-h-[82vh] flex justify-center items-center md:-translate-x-[60px] lg:-translate-x-[120px]">
            <VideoPlayer 
              video={video} 
              isMuted={isMuted} 
              setIsMuted={setIsMuted} 
              isActive={activeVideoIndex === index}
            />

            <div className="hidden md:flex absolute bottom-0 -right-[64px] flex-col items-center gap-4 pb-4">
              <div className="relative mb-2">
                <Link to={`/@user${index}`} className="block w-12 h-12 rounded-full bg-gray-100 dark:bg-white/10 border border-[var(--border-color)] overflow-hidden cursor-pointer hover:scale-105 transition-transform">
                  <img src={`https://picsum.photos/seed/avatar${index}/100/100`} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </Link>
                {!user && (
                  <button className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-5 h-5 bg-[var(--primary-green)] rounded-full flex items-center justify-center text-white border-2 border-[var(--bg-dark)]">
                    <Plus size={12} strokeWidth={4} />
                  </button>
                )}
              </div>
              <button className="flex flex-col items-center gap-1 group">
                <div className="w-12 h-12 rounded-full bg-[var(--sidebar-bg)] group-hover:bg-[var(--border-color)] transition-all flex items-center justify-center border border-[var(--border-color)]">
                  <Heart size={24} className="text-[var(--text-main)] group-hover:scale-110 transition-transform" />
                </div>
                <span className="text-[var(--text-secondary)] text-[13px] font-bold">{video.likes}</span>
              </button>
              <button className="flex flex-col items-center gap-1 group">
                <div className="w-12 h-12 rounded-full bg-[var(--sidebar-bg)] group-hover:bg-[var(--border-color)] transition-all flex items-center justify-center border border-[var(--border-color)]">
                  <MessageCircle size={24} className="text-[var(--text-main)] group-hover:scale-110 transition-transform" />
                </div>
                <span className="text-[var(--text-secondary)] text-[13px] font-bold">{video.comments}</span>
              </button>
              <button onClick={() => toggleSave(video.id)} className="flex flex-col items-center gap-1 group">
                <div className="w-12 h-12 rounded-full bg-[var(--sidebar-bg)] group-hover:bg-[var(--border-color)] transition-all flex items-center justify-center border border-[var(--border-color)]">
                  <Bookmark size={24} className={`${savedVideos.has(video.id as any) ? "text-[var(--primary-green)] fill-current" : "text-[var(--text-main)]"} group-hover:scale-110 transition-transform`} />
                </div>
                <span className="text-[var(--text-secondary)] text-[13px] font-bold">{Math.floor(Math.random() * 5000) + (savedVideos.has(video.id as any) ? 1 : 0)}</span>
              </button>
              <button onClick={() => handleShare(video.id)} className="flex flex-col items-center gap-1 group">
                <div className="w-12 h-12 rounded-full bg-[var(--sidebar-bg)] group-hover:bg-[var(--border-color)] transition-all flex items-center justify-center border border-[var(--border-color)]">
                  <Share2 size={24} className="text-[var(--text-main)] group-hover:scale-110 transition-transform" />
                </div>
                <span className="text-[var(--text-secondary)] text-[13px] font-bold">{video.shares}</span>
              </button>
            </div>
          </div>
        </div>
      ))}
      </div>
      <ShareModal 
        isOpen={isShareModalOpen} 
        onClose={() => setIsShareModalOpen(false)} 
        videoUrl={currentShareUrl} 
      />
    </div>
  );
}

