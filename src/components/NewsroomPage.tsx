import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Search, Globe, Instagram, Youtube, Twitter, Facebook, ArrowUpRight, Grid, List } from 'lucide-react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

export default function NewsroomPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const categories = ['All', 'Community', 'Company', 'News', 'Product', 'Safety'];

  const newsItems = [
    {
      date: 'April 15, 2026',
      category: 'News',
      title: "Poppro Celebrates Olivia Rodrigo's New Single with \"drop dead\" Karaoke",
      img: 'https://picsum.photos/seed/olivia/800/800',
      description: "Olivia's latest release is all about fans grabbing the mic and making it their own. Olivia Rodrigo (@livbedumb) is bringing heartbreak, high notes, and relatable sing-along energy to Poppro with her..."
    },
    {
      date: 'April 10, 2026',
      category: 'Community, News',
      title: "Poppro Brings Ella Langley's Dandelion to Life With Exclusive In-App Experience",
      img: 'https://picsum.photos/seed/ella/800/600',
      description: "Discover Ella Langley's new album on Poppro now."
    },
    {
      date: 'April 09, 2026',
      category: 'News, Company, Community',
      title: "Poppro and International Chamber of Commerce Partner on Global Initiative to ...",
      img: 'https://picsum.photos/seed/icc/800/600',
    },
    {
      date: 'April 08, 2026',
      category: 'News',
      title: "Poppro Bolsters Micro-Series Content with First-of-its-kind Partnership with HOORAE",
      img: 'https://picsum.photos/seed/hoorae/800/600',
    },
    {
      date: 'April 02, 2026',
      category: 'News, Product',
      title: "SoundOn partners with ACRCloud's new Derivative Works Detection service",
      img: 'https://picsum.photos/seed/soundon/800/600',
    },
    {
      date: 'March 31, 2026',
      category: 'Product, Community',
      title: "Poppro Partners with Cameo to Unlock New Monetization Opportunities for ...",
      img: 'https://picsum.photos/seed/cameo/800/600',
    },
    {
      date: 'March 26, 2026',
      category: 'News',
      title: "Poppro For Business Introduces Watch it. Love it. Want it.",
      img: 'https://picsum.photos/seed/business/800/600',
    },
    {
      date: 'March 24, 2026',
      category: 'News, Product',
      title: "NewFronts '26: Poppro Unveils New High-Impact Ad Solutions",
      img: 'https://picsum.photos/seed/newfronts/800/600',
    },
    {
      date: 'March 23, 2026',
      category: 'News',
      title: "Poppro announces Charlie Puth as the latest guest on 'Poppro In The Mix', ...",
      img: 'https://picsum.photos/seed/puth/800/600',
    }
  ];

  return (
    <div className="min-h-screen bg-[#fafafa] text-[#121212] font-sans">
      <header className="fixed top-0 left-0 right-0 h-16 bg-white z-50 px-6 md:px-16 flex items-center justify-between border-b border-gray-100">
        <div className="flex items-center">
           <Link to="/">
             <Logo size="sm" />
           </Link>
        </div>

        <nav className="flex items-center gap-6">
          <Link to="/about" className="text-[15px] font-bold text-[#121212] px-4 py-2 hover:bg-gray-50 rounded-lg transition-all">
            Perihal
          </Link>
          <Link to="/newsroom" className="text-[15px] font-bold text-[#fe2c55] bg-[#fe2c55]/5 px-4 py-2 rounded-lg transition-all">
            Bilik Berita
          </Link>
          <Link to="/careers" className="text-[15px] font-bold text-[#121212] px-4 py-2 hover:bg-gray-50 rounded-lg transition-all">
            Kerjaya
          </Link>
          <Link to="/contact" className="text-[15px] font-bold text-[#121212] px-4 py-2 hover:bg-gray-50 rounded-lg transition-all">
            Hubungi
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <Link to="/" className="text-[15px] font-bold hover:underline flex items-center gap-1">
            Tonton Poppro <ArrowRight size={16} />
          </Link>
        </div>
      </header>

      {/* Featured Story Header - PDF/Screenshot Style */}
      <section className="pt-32 pb-16 bg-white px-6 md:px-16">
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 relative">
            <div className="aspect-square max-w-[600px] rounded-full overflow-hidden border-[12px] border-[#fde2e9] shadow-xl">
              <img src={newsItems[0].img} alt="Hero" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </div>
          </div>
          <div className="flex-1 max-w-[600px]">
            <div className="text-gray-400 font-bold mb-4">{newsItems[0].date} • {newsItems[0].category}</div>
            <h1 className="text-[40px] md:text-[56px] font-bold leading-[1.1] mb-8 tracking-tight">
              {newsItems[0].title}
            </h1>
            <p className="text-gray-500 text-lg leading-relaxed mb-8">
              {newsItems[0].description}
            </p>
            <button className="flex items-center gap-2 font-bold text-lg hover:underline">
              <ArrowRight className="bg-black text-white rounded-full p-1" size={20} />
              Read more
            </button>
          </div>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="sticky top-16 bg-white z-40 border-y border-gray-100 px-6 md:px-16 py-4">
        <div className="max-w-[1400px] mx-auto flex items-center justify-between">
          <div className="flex items-center gap-8 overflow-x-auto scrollbar-hide">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`text-[15px] font-bold whitespace-nowrap transition-colors ${
                  activeCategory === cat ? 'text-[#fe2c55] bg-[#fe2c55]/5 px-4 py-2 rounded-full' : 'text-gray-500 hover:text-black'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-4 border-l pl-8 hidden md:flex">
            <button 
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded-lg ${viewMode === 'grid' ? 'bg-gray-100 text-[#fe2c55]' : 'text-gray-400'}`}
            >
              <Grid size={20} />
            </button>
            <button 
              onClick={() => setViewMode('list')}
              className={`p-2 rounded-lg ${viewMode === 'list' ? 'bg-gray-100 text-[#fe2c55]' : 'text-gray-400'}`}
            >
              <List size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-16 px-6 md:px-16">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
            {newsItems.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
              >
                <div className="aspect-[4/3] rounded-[16px] overflow-hidden mb-6 bg-gray-100">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" referrerPolicy="no-referrer" />
                </div>
                <div className="text-sm font-bold text-gray-400 mb-3 uppercase tracking-wider">{item.date} • {item.category}</div>
                <h3 className="text-[22px] font-bold leading-tight group-hover:underline mb-4 h-16 line-clamp-2">
                  {item.title}
                </h3>
                <button className="flex items-center gap-2 font-bold text-sm hover:underline">
                  <ArrowRight className="bg-black text-white rounded-full p-1" size={14} />
                  Read more
                </button>
              </motion.div>
            ))}
          </div>

          <div className="mt-20 flex justify-center">
            <button className="px-12 py-3 bg-white border border-gray-200 rounded-full font-bold text-lg hover:bg-gray-50 transition-all shadow-sm">
              Load more
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100 pt-32 pb-20 px-6 md:px-16">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-16 mb-24">
            <div className="space-y-12">
               <div>
                  <h4 className="font-black text-xl mb-8">Language</h4>
                  <div className="w-full p-4 border border-gray-200 rounded-lg flex items-center justify-between font-bold text-gray-500">
                     English (US)
                     <ArrowUpRight size={18} className="rotate-90" />
                  </div>
               </div>
            </div>

            <div>
              <h4 className="font-black text-xl mb-8">Company</h4>
              <ul className="space-y-4 text-gray-500 font-bold">
                <li>About</li>
                <li>Newsroom</li>
                <li>Store</li>
                <li>Contact</li>
                <li>Careers</li>
                <li>ByteDance</li>
              </ul>
            </div>

            <div>
              <h4 className="font-black text-xl mb-8">Programs</h4>
              <ul className="space-y-4 text-gray-500 font-bold">
                <li>Poppro For Good</li>
                <li>Poppro For Developers</li>
                <li>Effect House</li>
                <li>Advertise</li>
                <li>Browse</li>
                <li>Embed</li>
                <li>Rewards</li>
                <li>Scaled LIVE Rewards</li>
              </ul>
            </div>

            <div>
              <h4 className="font-black text-xl mb-8">Resources</h4>
              <ul className="space-y-4 text-gray-500 font-bold">
                <li>Help Center</li>
                <li>Safety Center</li>
                <li>Privacy Center</li>
                <li>Creator Academy</li>
                <li>Community Guidelines</li>
                <li>Transparency</li>
                <li>Accessibility</li>
              </ul>
            </div>

            <div>
              <h4 className="font-black text-xl mb-8">Social</h4>
              <ul className="space-y-6">
                <li className="flex items-center gap-3 font-bold text-gray-500"><div className="w-6"><Logo size="sm" /></div> Poppro</li>
                <li className="flex items-center gap-3 font-bold text-gray-500"><Instagram size={20} /> Instagram</li>
                <li className="flex items-center gap-3 font-bold text-gray-500"><Youtube size={20} /> Youtube</li>
                <li className="flex items-center gap-3 font-bold text-gray-500"><Twitter size={20} /> Twitter</li>
              </ul>
            </div>
          </div>

          <div className="pt-12 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-6">
            <Logo size="sm" />
            <div className="flex flex-wrap justify-center gap-8 text-sm font-bold text-gray-500">
              <span>Terms of Service</span>
              <span>Privacy</span>
              <span>Intellectual Property Policy</span>
              <span>Law Enforcement</span>
            </div>
            <div className="text-[14px] text-gray-400 font-medium">
              © 2026 Poppro
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
