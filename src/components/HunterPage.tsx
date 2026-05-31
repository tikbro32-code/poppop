import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

interface HunterProfile {
  id: number;
  name: string;
  username: string;
  avatar: string;
  thumbnail: string;
}

const hunterProfiles: HunterProfile[] = [
  {
    id: 1,
    name: 'Janna Nick',
    username: 'jannanickofficial',
    avatar: 'https://picsum.photos/seed/janna/100/100',
    thumbnail: 'https://picsum.photos/seed/jannavid/400/600',
  },
  {
    id: 2,
    name: 'Mira Filzah',
    username: 'therealmfmirafilzah',
    avatar: 'https://picsum.photos/seed/mira/100/100',
    thumbnail: 'https://picsum.photos/seed/miravid/400/600',
  },
  {
    id: 3,
    name: 'Siti Nurhaliza',
    username: 'toktititok',
    avatar: 'https://picsum.photos/seed/siti/100/100',
    thumbnail: 'https://picsum.photos/seed/sitivid/400/600',
  },
  {
    id: 4,
    name: 'Nur Fazura',
    username: 'miss.fazura',
    avatar: 'https://picsum.photos/seed/fazura/100/100',
    thumbnail: 'https://picsum.photos/seed/fazuravid/400/600',
  },
  {
    id: 5,
    name: 'Danish Nora',
    username: 'noradanishhanif',
    avatar: 'https://picsum.photos/seed/nora/100/100',
    thumbnail: 'https://picsum.photos/seed/noravid/400/600',
  },
  {
    id: 6,
    name: 'Neelofa',
    username: 'neelofa',
    avatar: 'https://picsum.photos/seed/neelofa/100/100',
    thumbnail: 'https://picsum.photos/seed/neelofavid/400/600',
  },
  {
    id: 7,
    name: 'Nelydia',
    username: 'nelydiarose',
    avatar: 'https://picsum.photos/seed/nelydia/100/100',
    thumbnail: 'https://picsum.photos/seed/nelydiavid/400/600',
  },
  {
    id: 8,
    name: 'JJ Lin',
    username: 'drifterjjlin',
    avatar: 'https://picsum.photos/seed/jjlin/100/100',
    thumbnail: 'https://picsum.photos/seed/jjlinvid/400/600',
  },
  {
    id: 9,
    name: 'Dato Seri Vida',
    username: 'datoserividaofficial',
    avatar: 'https://picsum.photos/seed/vida/100/100',
    thumbnail: 'https://picsum.photos/seed/vidavid/400/600',
  },
];

export default function HunterPage() {
  return (
    <div className="flex-1 overflow-y-auto scrollbar-hide bg-[var(--bg-dark)] pt-0 pb-20">
      <div className="max-w-[800px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-3 gap-y-4">
          {hunterProfiles.map((profile) => (
            <motion.div
              key={profile.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: profile.id * 0.05 }}
              className="relative aspect-[10/14] rounded-md overflow-hidden group cursor-pointer shadow-xl bg-black/20"
            >
              <img 
                src={profile.thumbnail} 
                alt={profile.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              
              <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/80"></div>
              
              <div className="absolute inset-0 flex flex-col items-center justify-center p-3 text-center">
                
                <div className="flex flex-col items-center w-full">
                  <div className="w-12 h-12 rounded-full border border-white/30 overflow-hidden mb-2 shadow-xl ring-2 ring-black/5">
                    <img src={profile.avatar} alt={profile.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  </div>
                  
                  <h3 className="text-[14px] font-bold text-white drop-shadow-lg leading-tight mb-0">{profile.name}</h3>
                  <div className="flex items-center justify-center gap-1">
                    <span className="text-white/90 text-[11px] font-medium drop-shadow-md">{profile.username}</span>
                    <CheckCircle2 size={10} className="text-[var(--primary-green)]" fill="currentColor" />
                  </div>
                </div>
                
                <div className="absolute bottom-4 left-0 right-0 px-3">
                  <button className="w-full py-1.5 bg-[var(--primary-green)] hover:opacity-90 text-white font-bold rounded-sm transition-all transform active:scale-[0.98] shadow-lg text-[14px] tracking-wide">
                    Follow
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
