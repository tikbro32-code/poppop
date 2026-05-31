import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Globe, Search, Instagram, Youtube, Twitter, Facebook, ArrowUpRight, Play, Heart, Users, Shield, Radio, Briefcase, Newspaper } from 'lucide-react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

export default function AboutPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [isCompanyOpen, setIsCompanyOpen] = useState(false);

  const companyLinks = [
    { label: 'Our Mission', icon: <Heart size={18} /> },
    { label: 'Global Team', icon: <Globe size={18} /> },
    { label: 'Social Impact', icon: <Users size={18} /> },
  ];

  const navItems = [
    { label: 'About', active: true },
    { label: 'Newsroom', active: false },
    { label: 'Careers', active: false },
    { label: 'Contact', active: false },
  ];

  const floatingImages = [
    { src: 'https://picsum.photos/seed/travel/600/900', height: 'h-[320px]', y: 'translate-y-20' },
    { src: 'https://picsum.photos/seed/happy/600/900', height: 'h-[400px]', y: 'translate-y-10' },
    { src: 'https://picsum.photos/seed/tech/600/900', height: 'h-[480px]', y: 'translate-y-0' },
    { src: 'https://picsum.photos/seed/design/600/900', height: 'h-[560px]', y: 'translate-y-10' },
  ];

  const impactStats = [
    { label: 'Small Business', value: '$14.7B', sub: 'contribution to US GDP in 2023' },
    { label: 'Job Opportunities', value: '224,000+', sub: 'jobs supported by SMBs on Poppro' },
    { label: 'Active Users', value: '1B+', sub: 'people come to Poppro every month' },
  ];

  const hashtags = [
    '#PopproFoundMe', '#SmallBusiness', '#LearnOnPoppro', '#PopproTravel', '#BookTok', '#EcoFriendly'
  ];

  const programs = [
    {
      title: 'Poppro for Good',
      desc: 'Empowering non-profits to share their stories and drive social impact.',
      image: 'https://picsum.photos/seed/good/800/600'
    },
    {
      title: 'Poppro Creator Academy',
      desc: 'Helping creators level up their skills and build sustainable communities.',
      image: 'https://picsum.photos/seed/academy/800/600'
    }
  ];

  return (
    <div className="min-h-screen bg-white text-[#121212] font-sans selection:bg-[#fe2c55] selection:text-white">
      <header className="fixed top-0 left-0 right-0 h-16 bg-white z-50 px-6 md:px-16 flex items-center justify-between">
        <div className="flex items-center">
           <Link to="/">
             <Logo size="sm" />
           </Link>
        </div>

        <nav className="flex items-center gap-6">
          <Link to="/about" className="text-[15px] font-bold text-[#fe2c55] bg-[#fe2c55]/5 px-4 py-2 rounded-lg transition-all">
            About
          </Link>
          <Link to="/newsroom" className="text-[15px] font-bold text-[#121212] px-4 py-2 hover:bg-gray-50 rounded-lg transition-all">
            Newsroom
          </Link>
          <Link to="/careers" className="text-[15px] font-bold text-[#121212] px-4 py-2 hover:bg-gray-50 rounded-lg transition-all">
            Careers
          </Link>
          <Link to="/contact" className="text-[15px] font-bold text-[#121212] px-4 py-2 hover:bg-gray-50 rounded-lg transition-all">
            Contact
          </Link>
        </nav>

        <div className="flex items-center">
          <button className="p-2 hover:bg-gray-100 rounded-full transition-all">
            <Search size={22} />
          </button>
        </div>
      </header>

      <section className="pt-32 pb-40 px-6 md:px-16 max-w-[1200px] mx-auto text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-[44px] md:text-[68px] font-black leading-[1.1] tracking-tighter mb-10 max-w-[1000px] mx-auto"
        >
          Our mission is to inspire creativity and bring joy.
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-[16px] md:text-[18px] text-black font-medium leading-relaxed max-w-[850px] mx-auto mb-32"
        >
          Poppro has global headquarters in Los Angeles and Singapore, and its offices include New York, London, Dublin, Paris, Berlin, Dubai, Jakarta, Seoul, and Tokyo.
        </motion.p>

        <div className="flex items-end justify-center gap-4 md:gap-8 h-[300px] md:h-[500px]">
          {[
            { src: 'https://picsum.photos/seed/p1/400/600', h: 'h-[200px] md:h-[300px]' },
            { src: 'https://picsum.photos/seed/p2/400/600', h: 'h-[250px] md:h-[400px]' },
            { src: 'https://picsum.photos/seed/p3/400/600', h: 'h-[300px] md:h-[500px]' },
            { src: 'https://picsum.photos/seed/p4/400/600', h: 'h-[350px] md:h-[550px]' },
            { src: 'https://picsum.photos/seed/p5/400/600', h: 'h-[400px] md:h-[600px]' },
          ].map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`${img.h} w-[80px] md:w-[220px] rounded-[16px] md:rounded-[32px] overflow-hidden shadow-xl flex-shrink-0`}
            >
              <img src={img.src} alt="" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </motion.div>
          ))}
        </div>
      </section>

      <section className="px-6 md:px-16 space-y-12 mb-32">
        {[
          {
            tag: 'Untuk anda, Oleh anda',
            title: 'Satu pengalaman yang disesuaikan dengan perkara yang anda suka.',
            bg: 'https://picsum.photos/seed/feature1/1920/1080',
            color: 'bg-black/40'
          },
          {
            tag: 'Penerokaan Tanpa Henti',
            title: 'Cari perkara yang sohor kini, bakat, dan topik yang memberikan inspirasi kepada anda.',
            bg: 'https://picsum.photos/seed/feature2/1920/1080',
            color: 'bg-blue-900/20'
          },
          {
            tag: 'Dipacu-Komuniti',
            title: 'Kreativiti, kolaborasi, dan hubungan.',
            bg: 'https://picsum.photos/seed/feature3/1920/1080',
            color: 'bg-black/30'
          }
        ].map((slide, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="relative w-full aspect-[16/9] md:aspect-[21/9] rounded-[48px] md:rounded-[64px] overflow-hidden group shadow-2xl"
          >
            <img src={slide.bg} alt={slide.tag} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2000ms]" referrerPolicy="no-referrer" />
            <div className={`absolute inset-0 ${slide.color} backdrop-blur-[2px] group-hover:backdrop-blur-none transition-all duration-700`} />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-10">
              <motion.span 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-white/80 font-bold text-lg md:text-2xl mb-4 tracking-wide"
              >
                {slide.tag}
              </motion.span>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-white text-[32px] md:text-[64px] font-black leading-tight max-w-[900px]"
              >
                {slide.title}
              </motion.h2>
            </div>
          </motion.div>
        ))}
      </section>

      <section className="py-24 px-6 md:px-16 bg-white border-t border-gray-50">
        <div className="max-w-4xl mx-auto text-center">
           <h3 className="text-2xl md:text-3xl font-black mb-8">Pehubung Global Kami</h3>
           <p className="text-xl text-gray-500 font-medium leading-[1.6]">
             Poppro mempunyai ibu pejabat global di <span className="text-black">Los Angeles</span> dan <span className="text-black">Singapura</span>, serta pejabat utama di New York, London, Dublin, Paris, Berlin, Dubai, Jakarta, Seoul, dan Tokyo.
           </p>
        </div>
      </section>

      <section className="py-40 bg-white text-center px-6 md:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-gray-400 font-bold text-xl md:text-2xl mb-12">Kesan Kami</div>
          <div className="space-y-6">
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-[48px] md:text-[96px] font-black leading-none"
            >
              $24.2 BILION
            </motion.div>
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-[48px] md:text-[96px] font-black leading-none"
            >
              £1.63 BILION
            </motion.div>
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-[48px] md:text-[96px] font-black leading-none"
            >
              €4.8 BILION
            </motion.div>
          </div>
          <div className="mt-20 space-y-4 text-gray-500 font-bold text-lg md:text-2xl">
            <p>Menyumbang kepada Ekonomi AS</p>
            <p>Menyumbang kepada KDNK UK</p>
            <p>Menyumbang dengan ketara kepada KDNK ekonomi Eropah</p>
          </div>
        </div>
      </section>

      <section className="py-32 bg-[#ffef60] text-center px-6 md:px-16">
        <div className="max-w-4xl mx-auto">
          <p className="text-lg md:text-2xl font-bold mb-20 leading-relaxed max-w-[600px] mx-auto">
            Poppro bukan sekadar mencari perkara yang anda suka —
          </p>
          <div className="space-y-4 mb-20">
            <h2 className="text-[40px] md:text-[68px] font-black italic">#BookTok</h2>
            <h2 className="text-[40px] md:text-[68px] font-black italic">#LearnOnPoppro</h2>
            <h2 className="text-[40px] md:text-[68px] font-black italic">#GamingOnPoppro</h2>
            <h3 className="text-[32px] md:text-[48px] font-black italic">#FoodTok</h3>
          </div>
          <p className="text-lg md:text-2xl font-bold leading-relaxed max-w-[600px] mx-auto">
            Ia menggambarkan kegembiraan menemukan sesuatu yang tidak anda sedari telah terlepas.
          </p>
        </div>
      </section>

      <section className="py-24 px-6 md:px-16 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-end justify-between gap-8 mb-16">
            <div className="max-w-[600px]">
              <h2 className="text-[36px] md:text-[54px] font-black tracking-tight mb-6 leading-tight">Di Mana Komuniti Berhimpun</h2>
              <p className="text-lg text-gray-600 font-medium leading-relaxed">
                Daripada pendidikan hingga ke perniagaan kecil, tanda pagar kami memacu perbualan global dan perubahan sebenar.
              </p>
            </div>
            <button className="flex items-center gap-2 font-bold text-lg hover:underline transition-all">
              Teroka Trend <ArrowRight size={20} />
            </button>
          </div>

          <div className="flex flex-wrap gap-4">
            {hashtags.map((tag, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.05 }}
                className="px-8 py-4 bg-white border-2 border-black rounded-full font-black text-xl cursor-default hover:bg-black hover:text-white transition-all shadow-md"
              >
                {tag}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white px-6 md:px-16 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-[36px] md:text-[54px] font-black tracking-tight mb-16 text-center">Cerita Komuniti</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: 'Sarah J.', role: 'Peniaga Kecil', img: 'https://picsum.photos/seed/sarah/400/600' },
              { name: 'Khairul A.', role: 'Pencipta Kandungan', img: 'https://picsum.photos/seed/khairul/400/600' },
              { name: 'Elena Z.', role: 'Artis Digital', img: 'https://picsum.photos/seed/elena/400/600' },
              { name: 'Danial H.', role: 'Usahawan Muda', img: 'https://picsum.photos/seed/danial/400/600' },
            ].map((story, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ scale: 1.02 }}
                className="relative aspect-[2/3] rounded-[32px] overflow-hidden group cursor-pointer shadow-lg"
              >
                <img src={story.img} alt={story.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/40">
                    <Play className="text-white fill-white" size={32} />
                  </div>
                </div>
                <div className="absolute bottom-8 left-8 right-8">
                  <div className="text-xl font-black text-white mb-1">{story.name}</div>
                  <div className="text-sm font-bold text-white/70 uppercase tracking-widest">{story.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#121212] text-white px-6 md:px-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-[36px] md:text-[54px] font-black tracking-tight mb-16 text-center">Program & Inisiatif</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {programs.map((prog, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
              >
                <div className="relative aspect-[16/9] rounded-[32px] overflow-hidden mb-8">
                  <img 
                    src={prog.image} 
                    alt={prog.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
                </div>
                <h3 className="text-3xl font-black mb-4 group-hover:text-[#fe2c55] transition-colors">{prog.title}</h3>
                <p className="text-xl text-gray-400 font-medium leading-relaxed mb-6">{prog.desc}</p>
                <button className="flex items-center gap-2 font-bold text-lg group-hover:translate-x-2 transition-transform">
                  Ketahui Lebih Lanjut <ArrowUpRight size={20} />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 px-6 md:px-16 bg-[#e0f7f4]">
        <div className="max-w-[1400px] mx-auto">
          <div className="max-w-2xl mb-20">
             <h2 className="text-[36px] md:text-[54px] font-black tracking-tight mb-8">Keutamaan tertinggi kami.</h2>
             <p className="text-xl text-gray-600 leading-relaxed font-medium mb-10">
               Kami memperkasakan komuniti kami dengan pelbagai alat untuk mengawal dan mengurus kehadiran mereka di platform kami.
             </p>
             <button className="flex items-center gap-2 font-black text-xl hover:underline">
                <ArrowRight className="bg-black text-white rounded-full p-1" size={24} />
                Pusat Keselamatan Poppro
             </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {[1, 2, 3, 4, 5].map((card) => (
              <motion.div 
                key={card}
                whileHover={{ y: -10 }}
                className="aspect-[3/4] bg-white/50 backdrop-blur-sm rounded-[32px] border border-white/20 flex flex-col items-center justify-center"
              >
                 <div className="w-1.5 h-1.5 rounded-full bg-black/20 animate-pulse" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 px-6 md:px-16 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-[36px] md:text-[54px] font-black tracking-tight mb-16">Bilik berita</h2>
          
          <div className="space-y-12 mb-20">
            {[
              { date: 'Mac 10, 2026', title: 'Beyond the Scroll: Poppro\'s Malaysia Socioeconomic Impact Report Reveals RM20 Billion Boost to the Digital Economy' },
              { date: 'Februari 26, 2026', title: 'The Discover List: Meet the 2026 Poppro Creators to Watch' },
              { date: 'Januari 21, 2026', title: 'Poppro Strengthens Malaysia\'s Scam Prevention Efforts with Multilingual #ThinkTwice Knowledge Hub' }
            ].map((item, idx) => (
              <motion.div key={idx} className="group cursor-pointer">
                <div className="text-gray-400 font-bold mb-4">{item.date} • News, Community, Company</div>
                <h3 className="text-2xl md:text-3xl font-black leading-tight group-hover:underline">{item.title}</h3>
              </motion.div>
            ))}
          </div>

          <button className="w-full py-6 bg-gray-50 hover:bg-gray-100 rounded-xl font-black text-xl transition-colors">
            Lihat bilik berita
          </button>
        </div>
      </section>

      <section className="py-40 bg-white text-center px-6 md:px-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-[40px] md:text-[64px] font-black tracking-tighter mb-12 uppercase italic">Terokai bab seterusnya bersama kami.</h2>
          <p className="text-xl text-gray-500 font-bold leading-relaxed">
            Poppro mempunyai ibu pejabat global di Los Angeles dan Singapura, dan pejabat termasuk di New York, London, Dublin, Paris, Berlin, Dubai, Jakarta, Seoul, dan Tokyo.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white px-6 md:px-16 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap items-center justify-center gap-4">
            {[
              { label: 'Operasi Global', color: 'bg-[#ffef60]' },
              { label: 'Fungsi Korporat', color: 'bg-[#004e42] text-white' },
              { label: 'Pengiklanan & Jualan', color: 'bg-[#f4c2d7]' },
              { label: 'Produk', color: 'bg-[#580d19] text-white' },
              { label: 'Reka Bentuk', color: 'bg-black text-white' },
              { label: 'Pemasaran & Komunikasi', color: 'bg-[#ff3b5c] text-white' },
              { label: 'Teknologi', color: 'bg-[#6fc4d3]' },
            ].map((tab, idx) => (
              <motion.button
                key={idx}
                whileHover={{ y: -5 }}
                className={`${tab.color} px-8 py-4 rounded-tl-[16px] rounded-br-[16px] rounded-tr-[4px] rounded-bl-[4px] font-black text-lg transition-transform`}
              >
                {tab.label}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-white border-t border-gray-100 pt-32 pb-20 px-6 md:px-16">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
            <div className="space-y-12">
               <div>
                  <h4 className="font-black text-xl mb-8">Bahasa</h4>
                  <div className="w-full p-4 border border-gray-200 rounded-lg flex items-center justify-between font-bold text-gray-500">
                     Bahasa Melayu
                     <ArrowUpRight size={18} className="rotate-90" />
                  </div>
               </div>
               <div>
                 <Logo size="sm" />
               </div>
            </div>

            <div>
              <h4 className="font-black text-xl mb-8">Syarikat</h4>
              <ul className="space-y-4 text-gray-500 font-bold">
                <li>Perihal</li>
                <li>Kedai</li>
                <li>Kerjaya</li>
                <li>Bilik Berita</li>
                <li>Hubungan</li>
                <li>ByteDance</li>
              </ul>
            </div>

            <div>
              <h4 className="font-black text-xl mb-8">Program</h4>
              <ul className="space-y-4 text-gray-500 font-bold">
                <li>Poppro for Good</li>
                <li>Effect House</li>
                <li>Semak imbas</li>
                <li>Ganjaran</li>
                <li>Poppro for Developers</li>
                <li>Iklan</li>
                <li>Terbenam</li>
                <li>Ganjaran LIVE berskala</li>
              </ul>
            </div>

            <div>
              <h4 className="font-black text-xl mb-8">Sumber</h4>
              <ul className="space-y-4 text-gray-500 font-bold">
                <li>Pusat Bantuan</li>
                <li>Pusat Privasi</li>
                <li>Garis Panduan Komuniti</li>
                <li>Pusat Keselamatan</li>
                <li>Akademi Pencipta</li>
                <li>Ketelusan</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
