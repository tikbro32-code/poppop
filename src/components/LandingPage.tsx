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
  VolumeX,
  Play,
  X
} from "lucide-react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";

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

const VideoPlayer = React.memo(({ video, isMuted, setIsMuted, isActive }: { video: VideoData, isMuted: boolean, setIsMuted: (m: boolean) => void, isActive: boolean }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const lastTapRef = useRef<number>(0);
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

  const [isPlaying, setIsPlaying] = useState(isActive);
  const [isLiked, setIsLiked] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [isFollowed, setIsFollowed] = useState(false);
  const [hearts, setHearts] = useState<{ id: number; x: number; y: number }[]>([]);
  const [isCommentsOpen, setIsCommentsOpen] = useState(false);
  const [commentsList, setCommentsList] = useState([
    { id: 1, author: 'ali_ahmad', text: 'Terbaiklah video ni! Suka tengok editing. 🔥', likes: 142, time: '2j', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=ali' },
    { id: 2, author: 'sarah.l', text: 'Ratio 8:9 ni memang mantap lah! Fills the screen beautifully.', likes: 89, time: '5j', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=sarah' },
    { id: 3, author: 'tech_guru', text: 'Bagaimana cara buat video ratio macam ni? Guna editor apa?', likes: 23, time: '1h', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=guru' },
    { id: 4, author: 'nurul_hidayah', text: 'Cantiknya aesthetic video ni. 😍 #fyp', likes: 54, time: '2h', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=nurul' },
    { id: 5, author: 'badrul_shah', text: 'Super app! Sangat lancar.', likes: 12, time: '3h', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=badrul' }
  ]);
  const [newCommentText, setNewCommentText] = useState('');

  useEffect(() => {
    setIsPlaying(isActive);
  }, [isActive]);

  useEffect(() => {
    if (hearts.length === 0) return;
    const timer = setTimeout(() => {
      setHearts(prev => prev.slice(1));
    }, 1000);
    return () => clearTimeout(timer);
  }, [hearts]);

  useEffect(() => {
    const videoElement = videoRef.current;
    if (!videoElement) return;

    let hls: Hls | null = null;

    if (video.url.endsWith('.m3u8')) {
      if (Hls.isSupported()) {
        hls = new Hls({
          capLevelToPlayerSize: true,
        });
        hls.loadSource(video.url);
        hls.attachMedia(videoElement);
        hls.on(Hls.Events.MANIFEST_PARSED, () => {
          if (isPlaying) {
            videoElement.play().catch(e => {
              console.log("Autoplay prevented:", e);
              setIsPlaying(false);
            });
          }
        });
      } else if (videoElement.canPlayType('application/vnd.apple.mpegurl')) {
        videoElement.src = video.url;
        if (isPlaying) {
          videoElement.play().catch(e => {
            console.log("Autoplay prevented:", e);
            setIsPlaying(false);
          });
        }
      }
    } else {
      videoElement.src = video.url;
      if (isPlaying) {
        videoElement.play().catch(e => {
          console.log("Autoplay prevented:", e);
          setIsPlaying(false);
        });
      }
    }

    return () => {
      if (hls) {
        hls.destroy();
      }
    };
  }, [video.url, video.category]);

  useEffect(() => {
    const videoElement = videoRef.current;
    if (!videoElement) return;

    if (isPlaying) {
      videoElement.play().catch(e => {
        console.log("Autoplay prevented:", e);
        setIsPlaying(false);
      });
    } else {
      videoElement.pause();
    }
  }, [isPlaying]);

  const togglePlayMode = (e: React.MouseEvent) => {
    if ((e.target as HTMLElement).closest('button') || (e.target as HTMLElement).closest('a')) {
      return;
    }
    const videoElement = videoRef.current;
    if (videoElement) {
      if (videoElement.paused) {
        videoElement.play().then(() => setIsPlaying(true)).catch(e => console.log("Play failed", e));
      } else {
        videoElement.pause();
        setIsPlaying(false);
      }
    }
  };

  const handleTap = (e: React.MouseEvent) => {
    if ((e.target as HTMLElement).closest('button') || (e.target as HTMLElement).closest('a') || (e.target as HTMLElement).closest('form') || (e.target as HTMLElement).closest('.drawer-content')) {
      return;
    }

    const now = Date.now();
    const DOUBLE_PRESS_DELAY = 300;
    if (now - lastTapRef.current < DOUBLE_PRESS_DELAY) {
      setIsLiked(true);
      const rect = e.currentTarget.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      setHearts(prev => [...prev, { id: Date.now(), x, y }]);
    } else {
      togglePlayMode(e);
    }
    lastTapRef.current = now;
  };

  return (
    <div 
      className={`relative w-full h-full md:h-full ${getAspectRatioClass(video.aspectRatio)} md:rounded-[12px] overflow-hidden bg-black md:shadow-2xl cursor-pointer group`}
      onClick={handleTap}
    >
      <>
        <video 
          ref={videoRef}
          className="w-full h-full object-cover"
          loop
          playsInline
          muted={isMuted}
          autoPlay={isActive}
        />
        <AnimatePresence>
          {!isPlaying && isActive && (
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none"
            >
              <div className="w-16 h-16 bg-black/40 backdrop-blur-md rounded-full flex items-center justify-center text-white pl-1">
                <Play size={32} fill="white" />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {hearts.map(heart => (
          <motion.div
            key={heart.id}
            initial={{ opacity: 1, scale: 0.3, y: 0, rotate: Math.random() * 40 - 20 }}
            animate={{ opacity: 0, scale: 2.0, y: -180, rotate: Math.random() * 60 - 30 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            style={{
              position: 'absolute',
              left: heart.x - 24,
              top: heart.y - 24,
              zIndex: 30,
              pointerEvents: 'none'
            }}
          >
            <Heart size={48} className="text-[#FF0050] drop-shadow-[0_4px_12px_rgba(255,0,80,0.4)]" fill="#FF0050" />
          </motion.div>
        ))}
      </>
      
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/60 pointer-events-none"></div>
      
      <button 
        onClick={(e) => {
          e.stopPropagation();
          setIsMuted(!isMuted);
        }}
        className="absolute top-4 right-4 md:top-6 md:right-6 z-20 w-10 h-10 bg-black/40 backdrop-blur-sm rounded-full flex items-center justify-center text-white opacity-70 hover:opacity-100 transition-opacity"
      >
        {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
      </button>

      <div className="absolute bottom-[80px] md:bottom-0 left-0 right-16 md:right-0 p-4 md:pb-5 flex flex-col z-10 pointer-events-none">
        <div className="flex items-center gap-2 mb-1 pointer-events-auto">
          <Link to={`/@${video.author}`} className="font-bold text-[17px] text-white hover:underline cursor-pointer drop-shadow-md">@{video.author}</Link>
        </div>
        <p className="text-white text-[15px] mb-2 line-clamp-2 drop-shadow-md leading-snug max-w-[95%] font-normal">
          {video.description}
        </p>
        <button className="flex items-center gap-1 text-white text-[13px] font-bold mb-3 pointer-events-auto drop-shadow-md text-left">
           Lihat Asal <ChevronRight size={14} strokeWidth={3} />
        </button>
        <div className="flex items-center gap-2 text-sm font-semibold text-white/90 hover:underline cursor-pointer drop-shadow-md">
          <Music2 size={14} className="animate-bounce" />
          <span className="truncate max-w-[180px]">Bunyi asal - {video.author}</span>
        </div>
      </div>

      <div className="absolute right-2 bottom-[90px] flex flex-col items-center gap-4.5 z-20 md:hidden">
        <div className="relative mb-2">
          <Link to={`/@${video.author}`} className="block w-[48px] h-[48px] rounded-full bg-white border border-white overflow-hidden cursor-pointer shadow-lg">
            <img src={`https://picsum.photos/seed/${video.author}/100/100`} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
          </Link>
          <AnimatePresence>
            {!isFollowed && (
              <motion.button 
                initial={{ scale: 1 }}
                exit={{ scale: 0 }}
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setIsFollowed(true);
                }}
                className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-5.5 h-5.5 bg-[#FF0050] rounded-full flex items-center justify-center text-white border border-white cursor-pointer active:scale-90 transition-transform shadow-md"
              >
                <Plus size={14} strokeWidth={4} />
              </motion.button>
            )}
          </AnimatePresence>
        </div>

        <button 
          onClick={(e) => {
            e.stopPropagation();
            setIsLiked(!isLiked);
          }}
          className="flex flex-col items-center gap-0.5"
        >
          <motion.div
            whileTap={{ scale: 1.3 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Heart 
              size={34} 
              className={`${isLiked ? "text-[#FF0050]" : "text-white"} drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)] transition-colors`} 
              fill={isLiked ? "#FF0050" : "none"} 
              strokeWidth={isLiked ? 0 : 2}
            />
          </motion.div>
          <span className="text-white text-[12px] font-bold drop-shadow-md select-none">{isLiked ? '4.6M' : video.likes}</span>
        </button>

        <button 
          onClick={(e) => {
            e.stopPropagation();
            setIsCommentsOpen(true);
          }}
          className="flex flex-col items-center gap-0.5"
        >
          <MessageCircle size={34} className="text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]" fill="none" strokeWidth={2} />
          <span className="text-white text-[12px] font-bold drop-shadow-md select-none">{commentsList.length}</span>
        </button>

        <button 
          onClick={(e) => {
            e.stopPropagation();
            setIsBookmarked(!isBookmarked);
          }}
          className="flex flex-col items-center gap-0.5"
        >
          <motion.div
            whileTap={{ scale: 1.3 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Bookmark 
              size={34} 
              className={`${isBookmarked ? "text-[#FACE15]" : "text-white"} drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)] transition-colors`} 
              fill={isBookmarked ? "#FACE15" : "none"}
              strokeWidth={isBookmarked ? 0 : 2}
            />
          </motion.div>
          <span className="text-white text-[12px] font-bold drop-shadow-md select-none">{isBookmarked ? '17.9K' : '17.8K'}</span>
        </button>

        <button 
          onClick={(e) => {
            e.stopPropagation();
            // Try to share
          }}
          className="flex flex-col items-center gap-0.5"
        >
          <Share2 size={34} className="text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]" fill="none" strokeWidth={2} />
          <span className="text-white text-[12px] font-bold drop-shadow-md select-none">{video.shares}</span>
        </button>

        <div className="relative mt-1.5 flex items-center justify-center">
          <div className="w-9 h-9 rounded-full bg-gradient-to-r from-gray-900 to-black flex items-center justify-center border-[3px] border-white/20 animate-spin" style={{ animationDuration: '4s' }}>
            <img 
              src={`https://picsum.photos/seed/${video.author}/40/40`} 
              className="w-4.5 h-4.5 rounded-full object-cover" 
              referrerPolicy="no-referrer" 
            />
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isCommentsOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsCommentsOpen(false)}
              className="fixed inset-0 bg-black/60 z-40 md:hidden"
            />
            <motion.div 
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 220 }}
              className="fixed bottom-0 left-0 right-0 h-[65vh] bg-[#121314] rounded-t-[16px] z-50 flex flex-col md:hidden pb-safe text-white drawer-content shadow-2xl"
            >
              <div className="w-10 h-1 bg-white/20 rounded-full mx-auto mt-2 mb-1"></div>

              <div className="relative flex items-center justify-center py-2.5 border-b border-white/5">
                <span className="font-bold text-[13px] tracking-wide text-white/90">{commentsList.length} komen</span>
                <button 
                  onClick={() => setIsCommentsOpen(false)}
                  className="absolute right-4 p-1 hover:bg-white/10 rounded-full transition-colors text-gray-400 hover:text-white"
                >
                  <X size={18} />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto px-4 py-3 space-y-4">
                {commentsList.map((c) => (
                  <div key={c.id} className="flex gap-3 items-start">
                    <img src={c.avatar} className="w-8 h-8 rounded-full bg-white/10 object-cover" />
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-xs text-gray-400">{c.author}</span>
                      </div>
                      <p className="text-sm mt-0.5 text-gray-100 font-normal leading-relaxed">{c.text}</p>
                      <div className="flex items-center gap-3 mt-1 text-[11px] text-gray-500 font-semibold">
                        <span>{c.time}</span>
                        <button className="hover:text-gray-300">Balas</button>
                      </div>
                    </div>
                    <button className="flex flex-col items-center text-gray-500 hover:text-red-500 transition-colors mt-0.5">
                      <Heart size={14} className="opacity-70" />
                      <span className="text-[10px] mt-0.5">{c.likes}</span>
                    </button>
                  </div>
                ))}
              </div>

              <form 
                onSubmit={(e) => {
                  e.preventDefault();
                  if (!newCommentText.trim()) return;
                  setCommentsList(prev => [
                    ...prev,
                    {
                      id: Date.now(),
                      author: user ? user.name || 'User' : 'pelawat_pro',
                      text: newCommentText,
                      likes: 0,
                      time: 'Sekarang',
                      avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${Math.random()}`
                    }
                  ]);
                  setNewCommentText('');
                }}
                className="p-3 border-t border-white/5 bg-[#18191a] flex gap-2 items-center"
              >
                <input 
                  type="text"
                  placeholder="Tambahkan komen..."
                  value={newCommentText}
                  onChange={(e) => setNewCommentText(e.target.value)}
                  className="flex-1 bg-white/5 border border-white/10 rounded-full px-4 py-2.5 text-sm text-white outline-none focus:border-white/20 placeholder-gray-500 font-normal"
                />
                <button 
                  type="submit"
                  disabled={!newCommentText.trim()}
                  className="px-4.5 py-2 bg-[#FF0050] text-white rounded-full text-xs font-bold disabled:opacity-50 disabled:bg-gray-700 active:scale-95 transition-all cursor-pointer"
                >
                  Hantar
                </button>
              </form>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
});

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
        const mockVideos: VideoData[] = [
          {
            id: '1',
            url: '/Upload/1.mp4',
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
            url: '/Upload/2.mp4',
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
            url: '/Upload/3.mp4',
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
            url: '/Upload/4.mp4',
            author: 'sukarr_45',
            likes: '1.5M',
            comments: '5.6K',
            shares: '34K',
            description: '4:3 Meme/Retro Ratio. Best for specific gaming content. #gaming #retro',
            category: 'Gaming',
            thumbnail: 'https://picsum.photos/seed/retro/768/576',
            views: '8.2M',
            aspectRatio: '4:3'
          },
          {
            id: '5',
            url: '/Upload/5.mp4',
            author: 'kiana.d12',
            likes: '450K',
            comments: '8K',
            shares: '12K',
            description: 'Daily vlog scenes. #vlog #daily',
            category: 'Vlog',
            thumbnail: 'https://picsum.photos/seed/vlog/576/1024',
            views: '1.2M',
            aspectRatio: '9:16'
          }
        ];

        // Retrieve local videos from localStorage
        const storedVideos = localStorage.getItem('poppro_local_videos');
        let localVideos: VideoData[] = [];
        if (storedVideos) {
          try {
            localVideos = JSON.parse(storedVideos);
          } catch (e) {
            console.warn('Failed to parse local videos', e);
          }
        }
        
        setVideos([...localVideos, ...mockVideos]);
      } catch (error: any) {
        console.warn("Error fetching videos from API:", error?.message);
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
    <div className="relative flex-1 w-full h-full overflow-hidden bg-black md:bg-[var(--bg-dark)]">
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

