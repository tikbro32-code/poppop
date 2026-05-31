import React from 'react';
import { User, PlayCircle, PlusSquare, Tv, CircleDollarSign, ShieldCheck, MoreHorizontal } from 'lucide-react';
import { Link } from 'react-router-dom';

interface SupportSidebarProps {
  activePath: string;
}

export default function SupportSidebar({ activePath }: SupportSidebarProps) {
  const sidebarItems = [
    { title: 'Account', icon: User, path: '/support/account' },
    { title: 'Using Poppro', icon: PlayCircle, path: '/support/usage' },
    { title: 'Posting', icon: PlusSquare, path: '/support/posting' },
    { title: 'Poppro LIVE', icon: Tv, path: '/support/live' },
    { title: 'Monetization', icon: CircleDollarSign, path: '/support/monetization' },
    { title: 'Privacy & safety...', icon: ShieldCheck, path: '/support/privacy-safety' },
    { title: 'Others', icon: MoreHorizontal, path: '/support/other' },
  ];

  return (
    <aside className="w-[240px] border-r border-[var(--border-color)] overflow-y-auto shrink-0 hidden lg:block bg-[var(--sidebar-bg)]">
      <div className="py-4">
        {sidebarItems.map((item, index) => {
          const isActive = activePath === item.path;
          return (
            <Link 
              key={index}
              to={item.path}
              className={`flex items-center gap-3 px-6 py-3 cursor-pointer hover:bg-[var(--border-color)] transition-colors ${
                isActive ? 'text-[var(--primary-green)] font-bold' : 'text-[var(--text-main)] font-semibold'
              }`}
            >
              <item.icon size={22} className={isActive ? 'text-[var(--primary-green)]' : 'text-[var(--text-secondary)]'} />
              <span className="text-[15px]">{item.title}</span>
            </Link>
          );
        })}
      </div>
    </aside>
  );
}
