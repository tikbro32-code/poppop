import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Search, MoreVertical, Send, Image as ImageIcon, Smile, Phone, Video, MessageCircle } from 'lucide-react';
import { useAuth } from '../data/context/AuthContext';

import { useUI } from '../data/context/UIContext';

export default function MessagesPage() {
  const navigate = useNavigate();
  const { user } = useAuth();
  const { openLoginModal } = useUI();
  const [activeChat, setActiveChat] = useState<number | null>(null);
  const [messageInput, setMessageInput] = useState('');

  if (!user) {
    return (
      <div className="flex-1 bg-white flex flex-col min-h-screen">
        <div className="w-full h-14 flex items-center justify-between px-4 border-b border-gray-100 bg-white sticky top-0 z-10">
           <div className="w-10"></div>
           <h1 className="font-bold text-[17px] text-black">Peti Masuk</h1>
           <div className="w-10"></div>
        </div>
        <div className="flex-1 flex flex-col items-center justify-center p-8 bg-white">
           <div className="mb-6 w-20 h-20 rounded-full bg-gray-50 flex items-center justify-center">
              <MessageCircle size={50} className="text-[#E0E0E0]" strokeWidth={1.5} />
           </div>
           <p className="text-[#161823] font-bold text-[18px] mb-2 tracking-tight">Peti Masuk</p>
           <p className="text-[#8A8B91] mb-10 text-[15px] text-center px-4 leading-normal max-w-[280px]">
              Log masuk untuk melihat mesej dan pemberitahuan anda
           </p>
           <button 
             onClick={openLoginModal}
             className="bg-[#FF0050] text-white font-bold h-[52px] w-full max-w-[280px] rounded-full text-[17px] active:scale-95 transition-transform shadow-lg shadow-red-500/10"
           >
              Log masuk
           </button>
        </div>
      </div>
    );
  }

  const mockChats = [
    { id: 1, name: 'Alice', avatar: 'A', lastMessage: 'Hey, did you see that video?', time: '2m ago', unread: 2 },
    { id: 2, name: 'Bob', avatar: 'B', lastMessage: 'Haha yes! 😂', time: '1h ago', unread: 0 },
    { id: 3, name: 'Charlie', avatar: 'C', lastMessage: 'Let\'s collaborate soon.', time: 'Yesterday', unread: 0 },
  ];

  const mockMessages = [
    { id: 1, senderId: 1, text: 'Hey, did you see that video?', time: '10:00 AM' },
    { id: 2, senderId: 'me', text: 'Which one?', time: '10:05 AM' },
    { id: 3, senderId: 1, text: 'The one with the dancing cat!', time: '10:06 AM' },
  ];

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (messageInput.trim()) {
      setMessageInput('');
    }
  };

  return (
    <div className="flex-1 flex bg-[var(--bg-main)] h-[calc(100vh-60px)] md:h-screen overflow-hidden">
      <div className={`w-full md:w-80 border-r border-[var(--border-color)] flex flex-col ${activeChat ? 'hidden md:flex' : 'flex'}`}>
        <div className="p-4 border-b border-[var(--border-color)] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button className="md:hidden p-2 hover:bg-[var(--sidebar-bg)] rounded-full" onClick={() => navigate(-1)}>
              <ArrowLeft size={20} />
            </button>
            <h1 className="text-xl font-bold">Peti Masuk</h1>
          </div>
          <MoreVertical size={20} className="text-[var(--text-secondary)]" />
        </div>
        
        <div className="p-4">
          <div className="relative">
            <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--text-secondary)]" />
            <input 
              type="text" 
              placeholder="Cari mesej" 
              className="w-full bg-[var(--sidebar-bg)] border border-[var(--border-color)] rounded-full py-2 pl-10 pr-4 text-sm focus:outline-none focus:border-[var(--primary-green)] transition-colors"
            />
          </div>
        </div>

        <div className="flex-1 overflow-y-auto">
          {mockChats.map(chat => (
            <div 
              key={chat.id}
              onClick={() => setActiveChat(chat.id)}
              className={`flex items-center gap-3 p-4 cursor-pointer hover:bg-[var(--sidebar-bg)] transition-colors ${activeChat === chat.id ? 'bg-[var(--sidebar-bg)]' : ''}`}
            >
              <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-[var(--primary-green)] to-[#00E0A0] flex items-center justify-center text-white font-bold shrink-0">
                {chat.avatar}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-semibold truncate">{chat.name}</h3>
                  <span className="text-xs text-[var(--text-secondary)] shrink-0">{chat.time}</span>
                </div>
                <p className="text-sm text-[var(--text-secondary)] truncate">{chat.lastMessage}</p>
              </div>
              {chat.unread > 0 && (
                <div className="w-5 h-5 rounded-full bg-[var(--primary-green)] flex items-center justify-center text-white text-xs font-bold shrink-0">
                  {chat.unread}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className={`flex-1 flex flex-col ${!activeChat ? 'hidden md:flex' : 'flex'}`}>
        {activeChat ? (
          <>
            <div className="p-4 border-b border-[var(--border-color)] flex items-center justify-between bg-[var(--bg-main)]">
              <div className="flex items-center gap-3">
                <button className="md:hidden p-2 hover:bg-[var(--sidebar-bg)] rounded-full" onClick={() => setActiveChat(null)}>
                  <ArrowLeft size={20} />
                </button>
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[var(--primary-green)] to-[#00E0A0] flex items-center justify-center text-white font-bold">
                  {mockChats.find(c => c.id === activeChat)?.avatar}
                </div>
                <div>
                  <h2 className="font-bold">{mockChats.find(c => c.id === activeChat)?.name}</h2>
                  <span className="text-xs text-[var(--text-secondary)]">Active now</span>
                </div>
              </div>
              <div className="flex items-center gap-2 text-[var(--text-secondary)]">
                <button className="p-2 hover:bg-[var(--sidebar-bg)] rounded-full transition-colors"><Phone size={20} /></button>
                <button className="p-2 hover:bg-[var(--sidebar-bg)] rounded-full transition-colors"><Video size={20} /></button>
                <button className="p-2 hover:bg-[var(--sidebar-bg)] rounded-full transition-colors"><MoreVertical size={20} /></button>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-[var(--bg-dark)]">
              {mockMessages.map(msg => (
                <div key={msg.id} className={`flex ${msg.senderId === 'me' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[70%] rounded-2xl px-4 py-2 ${
                    msg.senderId === 'me' 
                      ? 'bg-[var(--primary-green)] text-white rounded-br-sm' 
                      : 'bg-[var(--sidebar-bg)] text-[var(--text-main)] rounded-bl-sm border border-[var(--border-color)]'
                  }`}>
                    <p>{msg.text}</p>
                    <span className={`text-[10px] mt-1 block ${msg.senderId === 'me' ? 'text-white/70 text-right' : 'text-[var(--text-secondary)]'}`}>
                      {msg.time}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-4 border-t border-[var(--border-color)] bg-[var(--bg-main)]">
              <form onSubmit={handleSendMessage} className="flex items-center gap-2">
                <button type="button" className="p-2 text-[var(--text-secondary)] hover:text-[var(--primary-green)] transition-colors">
                  <ImageIcon size={24} />
                </button>
                <div className="flex-1 relative">
                  <input 
                    type="text" 
                    value={messageInput}
                    onChange={(e) => setMessageInput(e.target.value)}
                    placeholder="Send a message..." 
                    className="w-full bg-[var(--sidebar-bg)] border border-[var(--border-color)] rounded-full py-3 pl-4 pr-10 focus:outline-none focus:border-[var(--primary-green)] transition-colors"
                  />
                  <button type="button" className="absolute right-3 top-1/2 -translate-y-1/2 text-[var(--text-secondary)] hover:text-[var(--primary-green)] transition-colors">
                    <Smile size={20} />
                  </button>
                </div>
                <button 
                  type="submit"
                  disabled={!messageInput.trim()}
                  className={`p-3 rounded-full transition-colors ${
                    messageInput.trim() 
                      ? 'bg-[var(--primary-green)] text-white hover:brightness-110' 
                      : 'bg-[var(--sidebar-bg)] text-[var(--text-secondary)] cursor-not-allowed'
                  }`}
                >
                  <Send size={20} className={messageInput.trim() ? 'ml-1' : ''} />
                </button>
              </form>
            </div>
          </>
        ) : (
          <div className="flex-1 flex flex-col items-center justify-center text-[var(--text-secondary)]">
            <MessageCircle size={64} className="mb-4 opacity-20" />
            <h2 className="text-xl font-bold text-[var(--text-main)] mb-2">Your Messages</h2>
            <p>Select a chat or start a new conversation</p>
          </div>
        )}
      </div>
    </div>
  );
}
