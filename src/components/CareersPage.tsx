import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Search, Globe, Instagram, Youtube, Twitter, Linkedin, ArrowUpRight, Play, Users, Briefcase, Shield, Heart, MapPin, ChevronRight, Pause, ChevronUp, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

const slides = [
  {
    id: 1,
    bg: '#ffffff',
    title: 'We are\nPoppro',
    titleColor: '#121212',
    images: [
      { src: 'https://picsum.photos/seed/poppro1/600/400', className: 'absolute bottom-0 left-[35%] w-[350px] h-[350px] z-10' },
      { src: 'https://picsum.photos/seed/poppro2/600/1000', className: 'absolute top-[-5%] left-[55%] w-[380px] h-[550px] z-20' },
      { src: 'https://picsum.photos/seed/poppro3/600/800', className: 'absolute top-[18%] left-[75%] w-[350px] h-[550px] z-10' }
    ]
  },
  {
    id: 2,
    bg: '#28ccc7',
    title: 'Discover',
    titleColor: '#121212',
    images: [
      { src: 'https://picsum.photos/seed/poppro4/600/400', className: 'absolute bottom-[-10%] left-[35%] w-[400px] h-[400px] z-10' },
      { src: 'https://picsum.photos/seed/poppro5/600/1000', className: 'absolute top-[-5%] left-[55%] w-[350px] h-[550px] z-20' },
      { src: 'https://picsum.photos/seed/poppro6/600/800', className: 'absolute top-[18%] left-[75%] w-[350px] h-[550px] z-10' }
    ]
  },
  {
    id: 3,
    bg: '#f0c2e3',
    title: 'Connect',
    titleColor: '#121212',
    images: [
      { src: 'https://picsum.photos/seed/poppro7/600/400', className: 'absolute bottom-0 left-[35%] w-[400px] h-[300px] z-10' },
      { src: 'https://picsum.photos/seed/poppro8/1000/800', className: 'absolute top-[5%] left-[55%] w-[700px] h-[450px] z-20' },
      { src: 'https://picsum.photos/seed/poppro9/600/300', className: 'absolute bottom-[-15%] left-[65%] w-[400px] h-[300px] z-10' }
    ]
  },
  {
    id: 4,
    bg: '#ffef42',
    title: 'Create\nimpact',
    subtitle: 'Do great things with great people',
    titleColor: '#121212',
    images: [
      { src: 'https://picsum.photos/seed/poppro10/600/800', className: 'absolute top-[12%] left-[70%] w-[350px] h-[550px] z-10' }
    ]
  }
];

export default function CareersPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isPlaying]);

  const handleNext = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const handlePrev = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  const activeSlide = slides[currentSlide];

  const teams = [
    'Advertising & Sales',
    'Corporate Functions',
    'Design',
    'E-commerce',
    'Engineering & Technology',
    'Global Operations',
    'Marketing & Communications',
    'Product',
    'Poppro U.S. Data Security',
    'Early Careers & Internships'
  ];

  const locations = [
    { city: 'Singapore', img: 'https://picsum.photos/seed/singapore/800/600', title: 'Explore Singapore' },
    { city: 'Sydney', img: 'https://picsum.photos/seed/sydney/800/600', title: 'Check out Sydney' },
  ];

  return (
    <div className="min-h-screen bg-white text-[#121212] font-sans overflow-x-hidden">
      <header className="fixed top-0 left-0 right-0 h-16 bg-white z-[60] px-6 md:px-16 flex items-center justify-between border-b border-gray-100">
        <div className="flex items-center">
           <Link to="/">
             <Logo size="sm" />
           </Link>
        </div>

        <nav className="flex items-center gap-6">
          <Link to="/about" className="text-[15px] font-bold text-[#121212] px-4 py-2 hover:bg-gray-50 rounded-lg transition-all">
            Perihal
          </Link>
          <Link to="/newsroom" className="text-[15px] font-bold text-[#121212] px-4 py-2 hover:bg-gray-50 rounded-lg transition-all">
            Bilik Berita
          </Link>
          <Link to="/careers" className="text-[15px] font-bold text-[#fe2c55] bg-[#fe2c55]/5 px-4 py-2 rounded-lg transition-all">
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

      <div className="fixed top-16 left-0 right-0 h-12 bg-white z-[50] border-b border-gray-100 flex items-center px-16 justify-center gap-8 overflow-x-auto scrollbar-hide hidden md:flex">
         {['#LifeAtPoppro', 'Teams', 'How we hire', 'Locations', 'Early Careers', 'Blog', 'Jobs'].map((item) => (
           <button key={item} className="text-[14px] font-bold text-gray-500 hover:text-black transition-colors whitespace-nowrap">
             {item}
           </button>
         ))}
         <button className="bg-black text-white px-4 py-1.5 rounded-full text-[14px] font-bold">Apply</button>
      </div>

      <section className="relative h-screen overflow-hidden transition-colors duration-1000" style={{ backgroundColor: activeSlide.bg }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 flex items-center px-6 md:px-16"
          >
            <div className="relative z-30 max-w-[800px] mt-20">
              <motion.h1 
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-[70px] md:text-[120px] font-black leading-[0.9] tracking-tighter whitespace-pre-line"
                style={{ color: activeSlide.titleColor }}
              >
                {activeSlide.title}
              </motion.h1>
              {activeSlide.subtitle && (
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-2xl md:text-4xl font-black mt-8 tracking-tight"
                >
                  {activeSlide.subtitle}
                </motion.p>
              )}
            </div>

            <div className="absolute inset-0 pointer-events-none">
              {activeSlide.images.map((img, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 + idx * 0.1, duration: 0.8 }}
                  className={`${img.className} rounded-[24px] overflow-hidden shadow-2xl`}
                >
                  <img src={img.src} alt={`Slide ${currentSlide} - ${idx}`} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="absolute left-6 md:left-10 top-1/2 -translate-y-1/2 flex flex-col items-center gap-4 z-[40]">
           <button 
             onClick={handlePrev}
             className="w-8 h-8 rounded-full bg-black/5 border border-black/10 flex items-center justify-center hover:bg-black hover:text-white transition-all shadow-sm"
           >
             <ChevronUp size={20} />
           </button>
           <button 
             onClick={() => setIsPlaying(!isPlaying)}
             className="w-8 h-8 rounded-full bg-black/5 border border-black/10 flex items-center justify-center hover:bg-black hover:text-white transition-all shadow-sm"
           >
             {isPlaying ? <Pause size={16} /> : <Play size={16} />}
           </button>
           <button 
             onClick={handleNext}
             className="w-8 h-8 rounded-full bg-black/5 border border-black/10 flex items-center justify-center hover:bg-black hover:text-white transition-all shadow-sm"
           >
             <ChevronDown size={20} />
           </button>
        </div>

        <div className="absolute bottom-16 left-[53%] -translate-x-1/2 z-[40] w-full max-w-[800px] px-6">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white p-3 rounded-full flex items-center gap-4 shadow-2xl border border-gray-100"
          >
            <div className="flex-1 flex items-center gap-4 px-6 border-r border-gray-100">
              <Search className="text-gray-400" size={24} />
              <input 
                type="text" 
                placeholder="Search by role or keyword"
                className="w-full bg-transparent outline-none text-xl font-medium"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="px-6 flex items-center gap-4 border-r border-gray-100 hidden md:flex">
              <MapPin className="text-gray-400" size={24} />
              <span className="text-lg font-medium text-gray-800">Locations</span>
            </div>
            <button className="bg-[#fe2c55] text-white p-5 rounded-full hover:bg-[#e0244c] transition-all">
              <ArrowRight size={24} />
            </button>
          </motion.div>
        </div>
      </section>

      <section className="py-12 px-6 md:px-16 relative -mt-10">
         <div className="max-w-[1000px] mx-auto">
            <h2 className="text-2xl font-bold mb-6">Explore roles at Poppro</h2>
            <div className="flex flex-col md:flex-row gap-4">
               <div className="flex-1 relative">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                  <input 
                    type="text" 
                    placeholder="Enter title, skill, or location"
                    className="w-full h-14 pl-12 pr-4 bg-white border border-gray-200 rounded-full text-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#fe2c55]/20 focus:border-[#fe2c55]"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
               </div>
               <button className="px-10 h-14 bg-black text-white rounded-full font-bold text-lg hover:opacity-90 transition-opacity">
                  Search now
               </button>
            </div>
         </div>
      </section>

      <section className="py-10">
        <div className="flex gap-4 overflow-hidden px-4">
        </div>
      </section>

      <section className="py-24 bg-[#baf4ee] rounded-t-[60px] px-6 md:px-16 text-center">
         <div className="max-w-[1000px] mx-auto">
            <span className="font-bold uppercase tracking-widest text-sm mb-6 block">Our Mission</span>
            <h2 className="text-[48px] md:text-[80px] font-bold leading-tight mb-12">
               Inspire creativity & <br /> bring joy
            </h2>
            
            <div className="relative max-w-[800px] mx-auto group">
               <div className="aspect-video rounded-[32px] overflow-hidden shadow-2xl relative">
                  <img src="https://picsum.photos/seed/popprooffice/1200/800" alt="Poppro Office" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 bg-black/10 flex items-center justify-center">
                     <div className="w-20 h-20 bg-[#fe2c55] rounded-full flex items-center justify-center text-white shadow-lg transition-transform group-hover:scale-110">
                        <Play size={40} fill="currentColor" />
                     </div>
                  </div>
               </div>
               <div className="absolute -bottom-6 -right-6 w-16 h-16 bg-black rounded-full flex items-center justify-center">
                 <Logo showText={false} size="sm" />
               </div>
            </div>
         </div>
      </section>

      <section className="pb-32 bg-[#baf4ee] px-6 md:px-16">
         <div className="max-w-[1000px] mx-auto pt-24 text-left">
            <h3 className="text-3xl font-bold mb-6">At Poppro, we build products that <br /> help imaginations thrive</h3>
            <p className="text-lg text-gray-700 mb-16 max-w-2xl">
               We're part of an innovative global organization that makes it easy and fun for people to create, connect, and express themselves.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
               <div className="relative group cursor-pointer aspect-[4/5] rounded-[40px] overflow-hidden">
                  <img src="https://picsum.photos/seed/shop/800/1000" alt="Shop" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-12">
                     <h4 className="text-white text-[44px] font-bold leading-tight mb-4">Poppro Shop</h4>
                     <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white">
                        <ChevronRight size={24} />
                     </div>
                  </div>
               </div>
               <div className="relative group cursor-pointer aspect-[4/5] rounded-[40px] overflow-hidden">
                  <img src="https://picsum.photos/seed/live/800/1000" alt="LIVE" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-12">
                     <h4 className="text-white text-[44px] font-bold leading-tight mb-4">Poppro LIVE</h4>
                     <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white">
                        <ChevronRight size={24} />
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      <section className="py-32 bg-white px-6 md:px-16">
         <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row gap-20">
            <div className="flex-1">
               <h2 className="text-[54px] font-bold leading-tight tracking-tight">
                  Find a team <br /> that matches <br /> your talents
               </h2>
            </div>
            <div className="flex-1 space-y-2">
               {teams.map((team) => (
                  <button key={team} className="w-full text-left py-6 border-b border-gray-100 flex items-center justify-between group hover:pl-4 transition-all">
                     <span className="text-[24px] font-bold text-[#121212]">{team}</span>
                     <ArrowRight className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </button>
               ))}
            </div>
         </div>
      </section>

      <section className="py-32 bg-white px-6 md:px-16 border-t border-gray-50">
         <div className="max-w-[1400px] mx-auto">
            <h2 className="text-[80px] font-black tracking-tighter mb-20 italic">#LifeAtPoppro</h2>
            
            <div className="flex flex-col md:flex-row gap-16 items-start">
               <div className="max-w-md space-y-12">
                  <div className="space-y-6">
                     <h3 className="text-[44px] font-bold leading-tight">Connect with a community that values you</h3>
                     <div className="flex gap-2">
                        {[1, 2, 3].map(i => (
                           <div key={i} className="w-16 h-20 bg-gray-100 rounded-md border border-gray-200"></div>
                        ))}
                     </div>
                     <p className="text-[#555] text-lg leading-relaxed">
                        The values we share at Poppro, called ByteStyle, guide how we work and treat each other. Our employee community is grounded, courageous, open-minded, and humble. We collaborate freely, work effectively, and champion one another.
                     </p>
                     <button className="bg-black text-white px-8 py-3 rounded-full font-bold">Learn more about our culture</button>
                  </div>
               </div>

               <div className="flex-1 flex justify-center">
                  <div className="relative">
                     <div className="w-[300px] h-[600px] rounded-[48px] bg-[#f8f8f8] border-[10px] border-black overflow-hidden shadow-2xl relative">
                        <img src="https://picsum.photos/seed/employee/600/1200" alt="Video" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                        <div className="absolute inset-0 flex items-center justify-center">
                           <div className="w-14 h-14 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white">
                              <Play size={24} fill="white" />
                           </div>
                        </div>
                        <div className="absolute bottom-10 left-6 text-white">
                           <div className="flex items-center gap-2 mb-2">
                              <div className="w-8 h-8 rounded-full bg-gray-400"></div>
                              <span className="font-bold text-sm">@popproinfo</span>
                           </div>
                        </div>
                     </div>
                     <div className="absolute top-[20%] -right-12 space-y-4">
                        <div className="p-3 bg-white shadow-xl rounded-full cursor-pointer hover:scale-110 transition-transform"><ChevronRight className="-rotate-90" size={24} /></div>
                        <div className="p-3 bg-white shadow-xl rounded-full cursor-pointer hover:scale-110 transition-transform"><ChevronRight className="rotate-90" size={24} /></div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      <section className="py-32 bg-white px-6 md:px-16 text-center border-t border-gray-50">
         <div className="max-w-[1400px] mx-auto">
            <span className="font-bold uppercase text-sm mb-6 block tracking-[0.2em]">Our Locations</span>
            <h2 className="text-[64px] font-bold mb-10">Inspire the world with us</h2>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto mb-20 font-medium">
               Poppro's global headquarters are in Los Angeles and Singapore. Join us and share your unique perspective to make an impact on millions around the globe.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
               {locations.map((loc, idx) => (
                  <div key={idx} className="group">
                     <div className="aspect-square rounded-[32px] overflow-hidden mb-6 relative">
                        <img src={loc.img} alt={loc.city} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/30">
                               <Play size={24} fill="white" />
                            </div>
                        </div>
                        <div className="absolute top-6 left-6 px-4 py-2 bg-black/40 backdrop-blur-sm rounded-lg text-white font-bold text-sm">
                           Poppro office in {loc.city}!
                        </div>
                     </div>
                     <h4 className="text-2xl font-bold mb-4">{loc.title}</h4>
                     <button className="flex items-center gap-2 font-bold text-[#fe2c55] hover:underline">
                        <Play size={16} fill="#fe2c55" /> Watch the office tour
                     </button>
                  </div>
               ))}
               <div className="bg-[#410610] rounded-[32px] p-12 flex flex-col justify-between text-white border-4 border-transparent hover:border-white/20 transition-all cursor-pointer">
                  <h4 className="text-3xl font-bold leading-tight">
                     Berlin, London, Dubai, Mexico City, New York, Seattle, Tokyo, <br /> and more
                  </h4>
                  <button className="text-xl font-bold flex items-center gap-2 group underline-offset-8 hover:underline">
                     See our global locations
                  </button>
               </div>
            </div>
         </div>
      </section>

      <section className="py-24 bg-[#ffef42] px-6 md:px-16 rounded-t-[60px]">
         <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-center gap-16">
            <div className="flex-1 space-y-8">
               <span className="font-bold text-sm uppercase tracking-widest">Early Careers</span>
               <h2 className="text-[64px] font-bold leading-tight">Bring your passion and ambition</h2>
               <p className="text-lg text-black font-medium leading-relaxed">
                  We're excited to see what you can achieve! Poppro aims for a culture of creativity, open-mindedness, and courage, encouraging you to help meet and exceed your career goals. There's no limit to what you can accomplish with endless opportunities and possibilities.
               </p>
               <button className="bg-black text-white px-10 py-4 rounded-full font-bold text-lg">Learn about our opportunities</button>
            </div>
            <div className="flex-1 relative">
               <img src="https://picsum.photos/seed/colleagues/1000/800" alt="Team" className="rounded-[40px] shadow-2xl relative z-10" referrerPolicy="no-referrer" />
               <div className="absolute -bottom-10 -right-10 w-80 h-80 rounded-[40px] overflow-hidden border-8 border-[#ffef42] shadow-2xl z-20 hidden md:block">
                  <img src="https://picsum.photos/seed/office-party/600/600" alt="Party" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
               </div>
            </div>
         </div>
      </section>

      <section className="py-32 bg-[#e6dbce] px-6 md:px-16 rounded-t-[60px]">
         <div className="max-w-[1400px] mx-auto text-center mb-20">
            <span className="font-bold text-sm uppercase tracking-widest mb-6 block">Applying to Poppro</span>
            <h2 className="text-[64px] font-bold">Discover a career as big as your imagination</h2>
         </div>

         <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white rounded-[40px] overflow-hidden group cursor-pointer shadow-lg hover:shadow-2xl transition-all">
               <div className="h-[300px] overflow-hidden">
                  <img src="https://picsum.photos/seed/hiring/1000/600" alt="Hiring" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
               </div>
               <div className="p-10">
                  <h3 className="text-3xl font-bold mb-4">How we hire</h3>
                  <button className="text-[#fe2c55] font-bold text-lg hover:underline underline-offset-4">Learn about our recruitment process</button>
               </div>
            </div>
            <div className="bg-white rounded-[40px] overflow-hidden group cursor-pointer shadow-lg hover:shadow-2xl transition-all">
               <div className="h-[300px] overflow-hidden">
                  <img src="https://picsum.photos/seed/interview/1000/600" alt="Interview" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
               </div>
               <div className="p-10">
                  <h3 className="text-3xl font-bold mb-4">Interview tips</h3>
                  <button className="text-[#fe2c55] font-bold text-lg hover:underline underline-offset-4">Read our helpful advice</button>
               </div>
            </div>
         </div>
      </section>

      <section className="py-32 px-6 md:px-16 bg-white">
         <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-center gap-16">
            <div className="flex-1 space-y-12">
               <h2 className="text-[72px] font-bold leading-[0.9]">Ready for a career <br /> at Poppro?</h2>
               <div className="space-y-6">
                  <p className="text-xl font-bold">Discover a career that energizes and excites you every day.</p>
                  <div className="flex flex-col md:flex-row gap-4 max-w-xl">
                      <div className="flex-1 relative">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                        <input 
                          type="text" 
                          placeholder="Enter title, skill, or location"
                          className="w-full h-14 pl-12 pr-4 bg-gray-50 border border-transparent rounded-full text-lg focus:outline-none focus:ring-2 focus:ring-[#fe2c55]/20 focus:bg-white focus:border-[#fe2c55]"
                        />
                      </div>
                      <button className="px-10 h-14 bg-black text-white rounded-full font-bold text-lg">Search now</button>
                  </div>
               </div>
            </div>
            <div className="flex-1 flex justify-end">
               <div className="w-[500px] aspect-square rounded-[40px] overflow-hidden relative shadow-2xl">
                  <img src="https://picsum.photos/seed/working/800/800" alt="Working" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 bg-[#fe2c55]/10"></div>
               </div>
            </div>
         </div>
      </section>

      <footer className="bg-white border-t border-gray-100 pt-32 pb-20 px-6 md:px-16">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-16 mb-24">
            <div className="space-y-12">
               <Logo size="sm" />
            </div>

            <div>
              <h4 className="font-black text-xl mb-8">Company</h4>
              <ul className="space-y-4 text-gray-500 font-bold">
                <li>About Poppro</li>
                <li>Newsroom</li>
                <li>Contact</li>
              </ul>
            </div>

            <div>
              <h4 className="font-black text-xl mb-8">Programs</h4>
              <ul className="space-y-4 text-gray-500 font-bold">
                <li>Poppro For Good</li>
                <li>Poppro For Developers</li>
                <li>Effect House</li>
                <li>Advertise on Poppro</li>
                <li>Poppro Rewards</li>
                <li>Poppro Browse</li>
                <li>Poppro Embeds</li>
              </ul>
            </div>

            <div>
              <h4 className="font-black text-xl mb-8">Resources</h4>
              <ul className="space-y-4 text-gray-500 font-bold">
                <li>Help center</li>
                <li>Safety Center</li>
                <li>Creator Portal</li>
                <li>Community Guidelines</li>
                <li>Transparency</li>
                <li>Accessibility</li>
              </ul>
            </div>

            <div>
              <h4 className="font-black text-xl mb-8">Legal</h4>
              <ul className="space-y-4 text-gray-500 font-bold">
                <li>Privacy Policy</li>
                <li>Candidate Privacy Policy</li>
                <li>Terms of Service</li>
              </ul>
            </div>
          </div>

          <div className="pt-12 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="w-48 p-4 border border-gray-200 rounded-lg flex items-center justify-between font-bold text-gray-500">
               English
               <ArrowUpRight size={18} className="rotate-90" />
            </div>
            <div className="text-[14px] text-gray-400 font-medium">
              ©2026 Poppro
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
