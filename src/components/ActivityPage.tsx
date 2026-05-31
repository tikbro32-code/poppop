import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, UserPlus, Heart, MessageCircle, MoreVertical, Bell, Info, Plus } from 'lucide-react';
import { motion } from 'motion/react';
import { useAuth } from '../data/context/AuthContext';
import { useUI } from '../data/context/UIContext';
import Logo from './Logo';

export default function ActivityPage() {
  const navigate = useNavigate();
  const { user } = useAuth();
  const { openLoginModal } = useUI();
  const [filter, setFilter] = useState('All');

  if (!user) {
    return (
      <div className="flex-1 bg-white flex flex-col min-h-screen">
        <div className="w-full h-14 flex items-center justify-between px-4 border-b border-gray-100 bg-white sticky top-0 z-10">
           <div className="w-10"></div>
           <h1 className="font-bold text-[17px] text-black">Activity</h1>
           <div className="w-10"></div>
        </div>
        <div className="flex-1 flex flex-col items-center justify-center p-8 bg-white">
           <div className="mb-6 w-20 h-20 rounded-full bg-gray-50 flex items-center justify-center">
              <Bell size={50} className="text-[#E0E0E0]" strokeWidth={1.5} />
           </div>
           <p className="text-[#161823] font-bold text-[18px] mb-2 tracking-tight">All activity</p>
           <p className="text-[#8A8B91] mb-10 text-[15px] text-center px-4 leading-normal max-w-[280px]">
              Notifications about video interactions, new followers, and more will appear here.
           </p>
           <button 
             onClick={openLoginModal}
             className="bg-[#00C880] text-white font-bold h-[52px] w-full max-w-[280px] rounded-full text-[17px] active:scale-95 transition-transform"
           >
              Log in
           </button>
        </div>
      </div>
    );
  }

  const notifications = [
    { 
        id: 1, 
        type: 'follow', 
        user: 'AriffZaki', 
        message: 'started following you.', 
        time: '2m', 
        avatar: 'https://picsum.photos/seed/a1/100/100',
        isNew: true 
    },
    { 
        id: 2, 
        type: 'like', 
        user: 'Sarah_19', 
        message: 'liked your video.', 
        time: '12m', 
        avatar: 'https://picsum.photos/seed/a2/100/100',
        contentImage: 'https://picsum.photos/seed/v1/100/150',
        isNew: true 
    },
    { 
        id: 3, 
        type: 'comment', 
        user: 'DigitalNomad', 
        message: 'commented: Great content! 🔥', 
        time: '1h', 
        avatar: 'https://picsum.photos/seed/a3/100/100',
        contentImage: 'https://picsum.photos/seed/v1/100/150',
        isNew: false 
    },
    { 
        id: 4, 
        type: 'system', 
        user: 'Poppro System', 
        message: 'Your video is trending in #Travel!', 
        time: '3h', 
        avatar: '',
        isNew: false 
    },
  ];

  const getIcon = (type: string) => {
    switch(type) {
      case 'follow': return <UserPlus size={14} className="text-blue-500" />;
      case 'like': return <Heart size={14} className="text-red-500" />;
      case 'comment': return <MessageCircle size={14} className="text-[#00C880]" />;
      default: return <Info size={14} className="text-gray-500" />;
    }
  };

  const filters = ['All', 'Likes', 'Comments', 'Mentions', 'Followers', 'From Poppro'];

  return (
    <div className="flex-1 bg-white flex flex-col min-h-screen">
      <div className="w-full h-14 flex items-center justify-between px-4 border-b border-gray-100 sticky top-0 bg-white z-20">
        <button onClick={() => navigate(-1)} className="p-1 hover:bg-gray-100 rounded-full transition-colors md:hidden">
          <ArrowLeft size={24} />
        </button>
        <div className="flex items-center gap-2">
            <h1 className="font-bold text-[18px]">All activity</h1>
            <button className="flex items-center gap-1 text-[var(--primary-green)] text-xs font-bold bg-green-50 px-2 py-1 rounded">
                All <MoreVertical size={12} />
            </button>
        </div>
        <div className="w-10"></div>
      </div>

      <div className="flex overflow-x-auto scrollbar-hide px-4 py-3 gap-2 border-b border-gray-50">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-4 py-1.5 rounded-full text-sm font-bold whitespace-nowrap transition-all ${
              filter === f ? 'bg-black text-white' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="flex-1 overflow-y-auto">
        <div className="p-4">
            <p className="text-[13px] font-bold text-gray-500 uppercase tracking-widest mb-4 mt-2">New</p>
            <div className="space-y-6">
                {notifications.map((notif) => (
                    <div key={notif.id} className="flex items-center justify-between gap-3 group cursor-pointer active:bg-gray-50 transition-colors">
                        <div className="flex items-center gap-3 flex-1">
                            <div className="relative">
                                {notif.avatar ? (
                                    <img src={notif.avatar} className="w-12 h-12 rounded-full border border-gray-100" />
                                ) : (
                                    <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center">
                                        <Logo showText={false} size="sm" />
                                    </div>
                                )}
                                <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-white flex items-center justify-center shadow-sm border border-gray-100">
                                    {getIcon(notif.type)}
                                </div>
                            </div>
                            <div className="flex flex-col flex-1 leading-tight">
                                <p className="text-sm font-bold text-[#161823]">
                                    {notif.user} <span className="font-normal text-gray-600">{notif.message}</span>
                                    <span className="text-gray-400 text-xs ml-2 font-normal">{notif.time}</span>
                                </p>
                            </div>
                        </div>
                        {notif.contentImage ? (
                            <div className="w-11 aspect-[3/4] rounded-sm overflow-hidden border border-gray-100">
                                <img src={notif.contentImage} className="w-full h-full object-cover" />
                            </div>
                        ) : notif.type === 'follow' ? (
                            <button className="bg-[#FF0050] text-white text-xs font-bold px-4 py-2 rounded shadow-sm active:scale-95 transition-transform">
                                Follow back
                            </button>
                        ) : null}
                    </div>
                ))}
            </div>
        </div>

        <div className="p-4 mt-8 border-t border-gray-50">
             <p className="text-[13px] font-bold text-gray-500 uppercase tracking-widest mb-4">Previous</p>
             <div className="flex flex-col items-center justify-center py-10 opacity-40">
                <Bell size={40} className="text-gray-300 mb-2" />
                <p className="text-sm">No more notifications</p>
             </div>
        </div>
      </div>
    </div>
  );
}
