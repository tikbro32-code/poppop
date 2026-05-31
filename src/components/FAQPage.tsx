import React, { useState } from 'react';
import { Search, MoreVertical } from 'lucide-react';
import Logo from './Logo';

const UserIcon = () => <svg width="24" height="24" viewBox="0 0 48 48" fill="currentColor"><path d="M24 11.2a8.47 8.47 0 1 1 0 16.94 8.47 8.47 0 0 1 0-16.94Z"/><path d="M15.87 36.25a12.65 12.65 0 0 1 16.26 0A15.94 15.94 0 0 0 24 30c-4.1 0-7.85 1.55-10.69 4.1Z"/><path d="M2 24a22 22 0 1 1 44 0 22 22 0 0 1-44 0Z"/></svg>;
const PlayIcon = () => <svg width="24" height="24" viewBox="0 0 48 48" fill="currentColor"><path d="M33.41 23.6l-11.7-6.75c-.32-.03-.7.2-1.5.65v13.5c.8.46 1.18.68 1.5.64l11.7-6.75a1 1 0 0 0 0-.82Z"/><path d="M46 24a22 22 0 1 1-44 0 22 22 0 0 1 44 0Z"/></svg>;
const PostIcon = () => <svg width="24" height="24" viewBox="0 0 48 48" fill="currentColor"><path d="M22 16h2v6h6v2h-6v6h-2v-6h-6v-2h6v-6Z"/><path d="M24 2a22 22 0 1 1 0 44 22 22 0 0 1 0-44Z"/></svg>;
const LiveIcon = () => <svg width="24" height="24" viewBox="0 0 48 48" fill="currentColor"><path d="M21.9 33.85h4.2V19.26h-4.2v14.59ZM14.85 34.89h2.11V26.7h-2.11v8.19ZM30 33.85h2.11V23.73H30v10.12Z"/><path d="M40.08 9.95C37.92 8.61 30.06 8.37 30.06 8.37l-7 7h-.26L16.89 1.4c-5.02.03-9.99 1.58-9.99 1.58S5.3 16.02 5.3 23.02s0 10.47 1.6 13.02c2.55 1.59 13.02 1.59 13.02 1.59h6.12s10.47 0 13.02-1.59c1.59-2.55 1.59-13.02 1.59-13.02s0-10.47-1.59-13.02Z"/></svg>;
const MoneyIcon = () => <svg width="24" height="24" viewBox="0 0 48 48" fill="currentColor"><path d="M26.41 13.14c3.17.47 6.18 5.15l-4.2 1.1c-2.1-2.95-4.12-2.95s-3.23 1.01-3.23 2.44.75 2.18 2.35 2.69l3.7 1.05c3.31.96 5.5 2.6 5.5 6.34 0 3.58-6.18 6.46V38h-4v-2.52c-7-6.35l4.24-1.01c4.75 4.07 4.75 4.07 3.7-2.98 0-1.55-2.82-3.1l-3.9-1.14c-4.8-5.71 5.83-6.1V10h4v3.14Z"/><path d="M24 2a22 22 0 1 1 0 44 22 22 0 0 1 0-44Z"/></svg>;
const ShieldIcon = () => <svg width="24" height="24" viewBox="0 0 48 48" fill="currentColor"><path d="M22 16h2v6h6v2h-6v6h-2v-6h-6v-2h6v-6Z"/><path d="M5 10.53V23.2c0 14.16 18.26 23.47 18.26 23.47s18.26-9.31 18.26-23.47V10.53c-3.06-.26-15.35-7-15.35-7s-12.3 6.74-15.35 7Z"/></svg>;
const DotsIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 25" fill="none">
    <circle cx="4.5" cy="12.5" r="2.5" fill="currentColor"/>
    <circle cx="12" cy="12.5" r="2.5" fill="currentColor"/>
    <circle cx="19.5" cy="12.5" r="2.5" fill="currentColor"/>
  </svg>
);

interface Category {
  id: string;
  name: string;
  icon: React.ReactNode;
  sections: { title: string; items: string[] }[];
}

const FAQ_DATA: Category[] = [
  { id: 'akaun', name: 'Account', icon: <UserIcon />, sections: [] },
  { id: 'penggunaan', name: 'Using Poppro', icon: <PlayIcon />, sections: [] },
  { id: 'siaran', name: 'Posting', icon: <PostIcon />, sections: [] },
  { id: 'live', name: 'Poppro LIVE', icon: <LiveIcon />, sections: [] },
  { 
    id: 'pengewangan', 
    name: 'Monetization', 
    icon: <MoneyIcon />, 
    sections: [
      {
        title: 'Ads and data',
        items: ['Poppro Plus']
      },
      {
        title: 'To ensure a smooth payment experience, verify your payment card by submitting your ID and card information.',
        items: ['How can I verify my payment card?']
      }
    ] 
  },
  { 
    id: 'privasi', 
    name: 'Privacy & safety...', 
    icon: <ShieldIcon />, 
    sections: [
      {
        title: 'Privacy',
        items: ['How we process facial and voice information']
      }
    ] 
  },
  { 
    id: 'lain', 
    name: 'Others', 
    icon: <DotsIcon />, 
    sections: [
      {
        title: 'Other',
        items: ['Suggestion', 'Network Problem']
      }
    ] 
  },
];

export default function FAQPage() {
  const [selectedCategory, setSelectedCategory] = useState<Category>(FAQ_DATA[5]);

  return (
    <div className="min-h-screen bg-white text-[#121212] font-sans flex flex-col">
      <nav className="flex items-center justify-between px-6 py-3 bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="flex items-center gap-2">
          <Logo />
          <span className="text-[20px] font-semibold text-gray-600">Support</span>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="relative hidden md:block">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input 
              type="text" 
              placeholder="Search help articles" 
              className="bg-[#f1f1f2] rounded-full py-2 pl-11 pr-4 text-[15px] focus:outline-none w-[300px] font-medium placeholder-gray-500" 
            />
          </div>
          <button className="bg-[#fe2c55] text-white px-6 py-2 rounded-md font-semibold hover:bg-[#e62a4d] transition-colors">
            Log in
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <MoreVertical size={24} className="text-gray-600" />
          </button>
        </div>
      </nav>

      <div className="flex flex-1 w-full">
        <aside className="w-[352px] p-6 border-r border-[#eee]">
          <nav className="flex flex-col">
            {FAQ_DATA.map((category) => (
              <div
                key={category.id}
                onClick={() => setSelectedCategory(category)}
                className={`flex items-center py-4 cursor-pointer text-[20px] font-semibold transition-colors ${
                  selectedCategory.id === category.id
                    ? 'text-[#FE2C55]'
                    : 'text-[#000] hover:text-[#FE2C55]'
                }`}
              >
                <div className="mr-3 flex">
                  {category.icon}
                </div>
                <span>{category.name}</span>
              </div>
            ))}
          </nav>
        </aside>

        <main className="flex-1 px-[56px] py-[40px]">
          <div className="space-y-10">
            {selectedCategory.sections.map((section, index) => (
              <div key={index}>
                <div className="text-[24px] font-bold mb-5 text-black">
                  {section.title}
                </div>
                <div className="flex flex-col">
                  {section.items.map((item, itemIndex) => (
                    <div 
                      key={itemIndex}
                      className="py-[14px] border-b border-[#f1f1f2] cursor-pointer hover:bg-gray-50 transition-colors"
                    >
                      <span className="text-[17px] text-black">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
            {selectedCategory.sections.length === 0 && (
              <p className="text-gray-500 text-[17px]">No articles for this category.</p>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
