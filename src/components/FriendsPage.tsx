import React, { useState } from 'react';
import { Camera, Search, UserPlus, MessageCircle, Heart, Share2, Play, Plus } from 'lucide-react';
import { motion } from 'motion/react';
import { useAuth } from '../data/context/AuthContext';
import { useUI } from '../data/context/UIContext';

export default function FriendsPage() {
  const { user } = useAuth();
  const { openLoginModal } = useUI();

  if (!user) {
    return (
      <div className="flex-1 bg-white flex flex-col items-center justify-center p-8 bg-white min-h-[70vh]">
         <div className="mb-6 w-24 h-24 rounded-full bg-gray-50 flex items-center justify-center">
            <Camera size={50} className="text-[#E0E0E0]" strokeWidth={1.5} />
         </div>
         <p className="text-[#161823] font-bold text-[20px] mb-2 tracking-tight">Videos from friends</p>
         <p className="text-[#8A8B91] mb-10 text-[15px] text-center px-4 leading-relaxed max-w-[320px]">
            Follow your friends, see their videos, and share your moments.
         </p>
         <button 
           onClick={openLoginModal}
           className="bg-[#00C880] text-white font-bold h-[54px] w-full max-w-[300px] rounded-lg text-[18px] active:scale-95 transition-transform"
         >
            Log in to see friends
         </button>
      </div>
    );
  }

  const friends = [
    { id: 1, name: 'Alex Rivera', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=alex', lastPost: 'Hiking in the Alps', time: '2h ago' },
    { id: 2, name: 'Jordan Smith', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=jordan', lastPost: 'New recipe alert!', time: '5h ago' },
    { id: 3, name: 'Elena Gilbert', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=elena', lastPost: 'Morning coffee', time: '12h ago' },
    { id: 4, name: 'Sam Wilson', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=sam', lastPost: 'Workout session', time: '1d ago' },
  ];

  return (
    <div className="flex-1 bg-white flex flex-col min-h-screen pb-20">
      <div className="md:max-w-4xl md:mx-auto w-full px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-2xl font-bold">Friends</h1>
          <div className="flex gap-2">
            <button className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors">
              <Search size={20} />
            </button>
            <button className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors">
              <UserPlus size={20} />
            </button>
          </div>
        </div>

        {/* Stories-like friends row */}
        <div className="flex overflow-x-auto scrollbar-hide gap-4 mb-10 pb-2 border-b border-gray-50">
          <button className="flex flex-col items-center gap-2 group min-w-[70px]">
            <div className="relative">
              <div className="w-16 h-16 rounded-full border-2 border-[var(--primary-green)] p-0.5 group-hover:scale-105 transition-transform">
                <img src={user.avatar || 'https://api.dicebear.com/7.x/avataaars/svg?seed=me'} className="w-full h-full rounded-full object-cover" />
              </div>
              <div className="absolute bottom-0 right-0 w-5 h-5 bg-[var(--primary-green)] rounded-full border-2 border-white flex items-center justify-center">
                <Plus size={12} className="text-white" />
              </div>
            </div>
            <span className="text-xs font-bold text-gray-500">Your story</span>
          </button>
          {friends.map((friend) => (
            <button key={friend.id} className="flex flex-col items-center gap-2 group min-w-[70px]">
              <div className="w-16 h-16 rounded-full border-2 border-gray-100 p-0.5 group-hover:scale-105 transition-transform">
                <img src={friend.avatar} className="w-full h-full rounded-full bg-gray-50 object-cover" />
              </div>
              <span className="text-xs font-medium text-gray-800 truncate w-full text-center">{friend.name.split(' ')[0]}</span>
            </button>
          ))}
        </div>

        {/* Content Feed */}
        <div className="space-y-12">
          {friends.slice(0, 2).map((friend) => (
            <div key={friend.id} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100">
               <div className="p-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img src={friend.avatar} className="w-10 h-10 rounded-full bg-gray-50" />
                    <div>
                      <p className="font-bold text-sm">{friend.name}</p>
                      <p className="text-xs text-gray-400">{friend.time} • Suggested for you</p>
                    </div>
                  </div>
                  <button className="text-[var(--primary-green)] font-bold text-sm hover:bg-green-50 px-3 py-1.5 rounded-full transition-colors active:scale-95">
                    Follow
                  </button>
               </div>
               <div className="aspect-[4/5] bg-black relative group cursor-pointer">
                  <img 
                    src={`https://picsum.photos/seed/friend${friend.id}/600/800`} 
                    className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity" 
                  />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-16 h-16 rounded-full bg-black/40 flex items-center justify-center backdrop-blur-sm text-white">
                       <Play size={32} fill="currentColor" className="ml-1" />
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                     <p className="text-white font-bold drop-shadow-lg mb-1">{friend.lastPost}</p>
                     <p className="text-white/80 text-sm drop-shadow-sm">#friends #lifestyle #2026</p>
                  </div>
               </div>
               <div className="p-4 flex items-center justify-between">
                  <div className="flex items-center gap-6">
                     <button className="flex items-center gap-1.5 group">
                        <Heart size={24} className="group-hover:text-red-500 transition-colors" />
                        <span className="text-sm font-bold">1.2K</span>
                     </button>
                     <button className="flex items-center gap-1.5 group">
                        <MessageCircle size={24} className="group-hover:text-[var(--primary-green)] transition-colors" />
                        <span className="text-sm font-bold">48</span>
                     </button>
                     <button className="flex items-center gap-1.5 group">
                        <Share2 size={24} className="group-hover:text-blue-500 transition-colors" />
                        <span className="text-sm font-bold">Share</span>
                     </button>
                  </div>
               </div>
            </div>
          ))}

          {/* Connect Friends Section */}
          <div className="bg-gray-50 rounded-2xl p-8 text-center border-2 border-dashed border-gray-200">
             <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                <UserPlus size={32} className="text-[var(--primary-green)]" />
             </div>
             <h3 className="font-bold text-lg mb-2">Find more friends</h3>
             <p className="text-gray-500 text-sm mb-6 max-w-xs mx-auto">See who from your contacts or Facebook is on Poppro.</p>
             <div className="flex flex-col gap-2">
                <button className="bg-black text-white font-bold py-3 px-6 rounded-lg hover:bg-gray-900 transition-colors">
                  Sync Contacts
                </button>
                <button className="text-gray-500 hover:text-black font-bold py-2 transition-colors">
                  Not now
                </button>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}
