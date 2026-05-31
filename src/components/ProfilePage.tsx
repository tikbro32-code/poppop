import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAuth } from '../data/context/AuthContext';
import { useUI } from '../data/context/UIContext';
import { Lock, Grid, Bookmark, Heart, MessageCircle, Share2, Settings, UserPlus, UserCheck, X, Menu, User } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function ProfilePage() {
  const { username } = useParams();
  const { user, logout } = useAuth();
  const { openLoginModal } = useUI();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'videos' | 'saved' | 'liked'>('videos');
  const [isFollowing, setIsFollowing] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  
  const isOwnProfile = !username || (user && username === user.name);

  // Guest view for unauthorized users viewing their own (non-existent) profile
  if (!user && isOwnProfile) {
    return (
      <div className="flex-1 bg-white flex flex-col min-h-screen">
        <div className="w-full h-14 flex items-center justify-between px-4 border-b border-gray-100 bg-white sticky top-0 z-10">
           <div className="w-10"></div>
           <h1 className="font-bold text-[17px]">
             <span className="text-[var(--primary-green)]">Pro</span>
             <span className="text-black">file</span>
           </h1>
           <button className="p-1 text-black">
             <Menu size={24} strokeWidth={2} />
           </button>
        </div>
        <div className="flex-1 flex flex-col items-center justify-center p-8 bg-white -mt-20">
           <div className="w-[100px] h-[100px] mb-6 flex items-center justify-center rounded-full bg-white border-2 border-gray-100">
              <User size={65} className="text-[#D1D5DB]" strokeWidth={1} />
           </div>
           <p className="text-[#8A8B91] font-medium text-[15px] mb-8 tracking-tight">Log in to an existing account</p>
           <button 
             onClick={openLoginModal}
             className="bg-[var(--primary-green)] text-white font-bold h-[54px] w-full max-w-[320px] rounded-full text-[16px] active:scale-95 transition-transform shadow-lg shadow-[var(--primary-green)]/20"
           >
              Log in
           </button>
        </div>
      </div>
    );
  }

  const [isPrivateAccount, setIsPrivateAccount] = useState(false);
  
  const profileUser = isOwnProfile ? { ...user, isPrivate: isPrivateAccount } : {
    name: username || 'User',
    isPrivate: false,
    followers: 1200,
    following: 300,
    likes: 5000,
    bio: 'Welcome to my Poppro profile!',
  };

  const isPrivate = !isOwnProfile && profileUser?.isPrivate && !isFollowing;

  const [videos, setVideos] = useState<any[]>([]);
  const [loadingVideos, setLoadingVideos] = useState(true);

  useEffect(() => {
    const fetchUserVideos = async () => {
      setLoadingVideos(true);
      try {
        const authorUid = isOwnProfile ? (user?.uid || 'user_123') : 'user_123';
        
        const response = await fetch(`/api/videos?limit=30`);
        if (!response.ok) {
          throw new Error('Failed to fetch videos');
        }
        const data = await response.json();
        
        let fetchedVideos: any[] = [];
        if (data.success && data.data) {
          fetchedVideos = data.data.filter((v: any) => v.authorUid === authorUid);
        }
        
        setVideos(fetchedVideos);
      } catch (error) {
        console.error("Error fetching user videos from API:", error);
      } finally {
        setLoadingVideos(false);
      }
    };

    fetchUserVideos();
  }, [isOwnProfile, user, username]);

  return (
    <div className="flex-1 overflow-y-auto bg-[var(--bg-main)] text-[var(--text-main)] pt-20 pb-20 md:pb-0">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="flex flex-col items-center md:flex-row md:items-start gap-8 mb-12">
          <div className="w-28 h-28 md:w-32 md:h-32 rounded-full bg-gradient-to-tr from-[var(--primary-green)] to-[#00E0A0] flex items-center justify-center text-white font-bold text-4xl shadow-lg shadow-[var(--primary-green)]/20 shrink-0">
            {profileUser?.name?.charAt(0) || 'U'}
          </div>
          
          <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
            <h1 className="text-3xl font-bold mb-2">{profileUser?.name}</h1>
            <p className="text-[var(--text-secondary)] mb-4">{profileUser?.bio || 'No bio yet.'}</p>
            
            <div className="flex items-center gap-6 mb-6">
              <div className="flex flex-col items-center md:items-start">
                <span className="font-bold text-lg">{profileUser?.following || 0}</span>
                <span className="text-[var(--text-secondary)] text-sm">Following</span>
              </div>
              <div className="flex flex-col items-center md:items-start">
                <span className="font-bold text-lg">{profileUser?.followers || 0}</span>
                <span className="text-[var(--text-secondary)] text-sm">Followers</span>
              </div>
              <div className="flex flex-col items-center md:items-start">
                <span className="font-bold text-lg">{profileUser?.likes || 0}</span>
                <span className="text-[var(--text-secondary)] text-sm">Likes</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              {isOwnProfile ? (
                <>
                  <button className="px-6 py-2 bg-[var(--sidebar-bg)] hover:bg-[var(--bg-dark)] border border-[var(--border-color)] rounded-lg font-semibold transition-colors">
                    Edit profile
                  </button>
                  <button 
                    onClick={() => navigate('/manage-videos')}
                    className="px-6 py-2 bg-[var(--sidebar-bg)] hover:bg-[var(--bg-dark)] border border-[var(--border-color)] rounded-lg font-semibold transition-colors"
                  >
                    Manage Videos
                  </button>
                  <button 
                    onClick={() => setIsSettingsOpen(true)}
                    className="p-2 bg-[var(--sidebar-bg)] hover:bg-[var(--bg-dark)] border border-[var(--border-color)] rounded-lg transition-colors"
                  >
                    <Settings size={20} />
                  </button>
                </>
              ) : (
                <>
                  <button 
                    onClick={() => setIsFollowing(!isFollowing)}
                    className={`px-8 py-2 rounded-lg font-bold transition-all ${
                      isFollowing 
                        ? 'bg-[var(--sidebar-bg)] hover:bg-[var(--bg-dark)] border border-[var(--border-color)] text-[var(--text-main)]' 
                        : 'bg-[var(--primary-green)] hover:brightness-110 text-white shadow-lg shadow-[var(--primary-green)]/20'
                    }`}
                  >
                    {isFollowing ? 'Following' : 'Follow'}
                  </button>
                  <button 
                    onClick={() => navigate('/messages')}
                    className="px-6 py-2 bg-[var(--sidebar-bg)] hover:bg-[var(--bg-dark)] border border-[var(--border-color)] rounded-lg font-semibold transition-colors flex items-center gap-2"
                  >
                    <MessageCircle size={20} />
                    Message
                  </button>
                </>
              )}
            </div>
          </div>
        </div>

        <div className="flex items-center border-b border-[var(--border-color)] mb-6">
          <button 
            onClick={() => setActiveTab('videos')}
            className={`flex-1 flex justify-center items-center gap-2 py-4 font-semibold transition-colors relative ${activeTab === 'videos' ? 'text-[var(--text-main)]' : 'text-[var(--text-secondary)] hover:text-[var(--text-main)]'}`}
          >
            <Grid size={20} />
            Videos
            {activeTab === 'videos' && (
              <motion.div layoutId="profileTab" className="absolute bottom-0 left-0 right-0 h-0.5 bg-[var(--text-main)]" />
            )}
          </button>
          
          {isOwnProfile && (
            <button 
              onClick={() => setActiveTab('saved')}
              className={`flex-1 flex justify-center items-center gap-2 py-4 font-semibold transition-colors relative ${activeTab === 'saved' ? 'text-[var(--text-main)]' : 'text-[var(--text-secondary)] hover:text-[var(--text-main)]'}`}
            >
              <Bookmark size={20} />
              Saved
              {activeTab === 'saved' && (
                <motion.div layoutId="profileTab" className="absolute bottom-0 left-0 right-0 h-0.5 bg-[var(--text-main)]" />
              )}
            </button>
          )}

          <button 
            onClick={() => setActiveTab('liked')}
            className={`flex-1 flex justify-center items-center gap-2 py-4 font-semibold transition-colors relative ${activeTab === 'liked' ? 'text-[var(--text-main)]' : 'text-[var(--text-secondary)] hover:text-[var(--text-main)]'}`}
          >
            <Heart size={20} />
            Liked
            {activeTab === 'liked' && (
              <motion.div layoutId="profileTab" className="absolute bottom-0 left-0 right-0 h-0.5 bg-[var(--text-main)]" />
            )}
          </button>
        </div>

        {isPrivate ? (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <div className="w-20 h-20 bg-[var(--sidebar-bg)] rounded-full flex items-center justify-center mb-6">
              <Lock size={40} className="text-[var(--text-secondary)]" />
            </div>
            <h2 className="text-2xl font-bold mb-2">This account is private</h2>
            <p className="text-[var(--text-secondary)]">Follow this account to see their videos and likes</p>
          </div>
        ) : loadingVideos ? (
          <div className="flex justify-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[var(--primary-green)]"></div>
          </div>
        ) : videos.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <h2 className="text-xl font-bold mb-2">No videos</h2>
            <p className="text-[var(--text-secondary)]">This user hasn't uploaded any videos yet.</p>
          </div>
        ) : (
          <div className="grid grid-cols-3 gap-1 md:gap-4">
            {videos.map((video) => (
              <div key={video.id} className="aspect-[3/4] bg-[var(--sidebar-bg)] rounded-md overflow-hidden relative group cursor-pointer">
                <video 
                  src={video.url} 
                  poster={video.thumbnail}
                  className="w-full h-full object-cover"
                  muted
                  loop
                  playsInline
                  onMouseEnter={(e) => e.currentTarget.play()}
                  onMouseLeave={(e) => {
                    e.currentTarget.pause();
                    e.currentTarget.currentTime = 0;
                  }}
                />
                <div className="absolute bottom-2 left-2 flex items-center gap-1 text-white text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                  <svg width="18" height="18" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 39.513V8.48704C16 7.14668 17.4568 6.31464 18.6083 6.99127L44.9668 22.5042C46.0681 23.1523 46.0681 24.8477 44.9668 25.4958L18.6083 41.0087C17.4568 41.6854 16 40.8533 16 39.513Z" fill="currentColor"/>
                  </svg>
                  {video.views}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <AnimatePresence>
        {isSettingsOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setIsSettingsOpen(false)} />
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-md bg-[var(--bg-main)] rounded-2xl shadow-2xl border border-[var(--border-color)] overflow-hidden"
            >
              <div className="flex items-center justify-between p-4 border-b border-[var(--border-color)]">
                <h2 className="text-xl font-bold">Settings</h2>
                <button 
                  onClick={() => setIsSettingsOpen(false)}
                  className="p-2 hover:bg-[var(--sidebar-bg)] rounded-full transition-colors"
                >
                  <X size={20} />
                </button>
              </div>
              
              <div className="p-4 space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-4">Privacy</h3>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Private account</p>
                      <p className="text-sm text-[var(--text-secondary)] mt-1">
                        With a private account, only users you approve can follow you and watch your videos.
                      </p>
                    </div>
                    <button 
                      onClick={() => setIsPrivateAccount(!isPrivateAccount)}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${isPrivateAccount ? 'bg-[var(--primary-green)]' : 'bg-[var(--sidebar-bg)]'}`}
                    >
                      <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${isPrivateAccount ? 'translate-x-6' : 'translate-x-1'}`} />
                    </button>
                  </div>
                </div>
                
                <div className="pt-4 border-t border-[var(--border-color)]">
                  <button 
                    onClick={() => {
                      setIsSettingsOpen(false);
                      logout();
                      navigate('/');
                    }}
                    className="w-full py-3 text-red-500 font-bold hover:bg-red-500/10 rounded-xl transition-colors"
                  >
                    Log out
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
