import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Search, Play, Facebook, Twitter, Instagram, ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';
import Logo from './Logo';

export default function PopproForGoodPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white text-black font-sans">
      <nav className="fixed top-0 left-0 right-0 h-16 bg-white border-b border-gray-200 z-50 px-6 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Link to="/" className="flex items-center gap-2">
            <Logo showText={true} />
            <span className="font-bold text-lg">For Good</span>
          </Link>
          <div className="hidden md:flex items-center gap-6 text-sm font-semibold text-gray-600">
            <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="hover:text-black">Home</button>
            <button className="hover:text-black">Success stories</button>
            <button className="hover:text-black">How to</button>
            <button className="hover:text-black">About us</button>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="relative hidden sm:block">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input 
              type="text" 
              placeholder="Search" 
              className="bg-gray-100 rounded-full py-2 pl-10 pr-4 outline-none w-64 focus:ring-2 focus:ring-[var(--primary-green)] transition-all"
            />
          </div>
        </div>
      </nav>

      <section className="relative h-[60vh] mt-16 overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&q=80&w=2000" 
          alt="Community impact" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center pointer-events-none">
          <div className="flex items-center gap-4 text-white">
             <span className="text-7xl font-black italic tracking-tighter drop-shadow-2xl">
              <span className="text-[var(--primary-green)]">Pop</span>
              <span className="text-white">pro</span>
            </span>
            <span className="text-7xl font-bold drop-shadow-2xl uppercase tracking-wider">For Good</span>
          </div>
        </div>
      </section>

      <div className="flex justify-center gap-4 py-8">
        <button className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center hover:scale-110 transition-transform">
          <Facebook size={20} />
        </button>
        <button className="w-10 h-10 rounded-full bg-sky-400 text-white flex items-center justify-center hover:scale-110 transition-transform">
          <Twitter size={20} />
        </button>
        <button className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center hover:scale-110 transition-transform">
          <span className="font-black italic text-xs">P</span>
        </button>
      </div>

      <section className="max-w-4xl mx-auto px-6 text-center py-16">
        <h1 className="text-5xl md:text-6xl font-black mb-8 tracking-tight">Create real change on Poppro</h1>
        <p className="text-xl text-gray-600 leading-relaxed font-medium">
          See the good our creators are doing all around the world. And be the good by using Poppro to make a positive impact in your community.
        </p>
      </section>

      <section className="bg-gray-50 py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Success stories</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <StoryCard 
              title="Change Makers" 
              image="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&q=80&w=800"
            />
            <StoryCard 
              title="Sustainability" 
              image="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=800"
            />
            <StoryCard 
              title="Well-being" 
              image="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=800"
            />
          </div>
          <div className="text-center mt-12">
            <button className="text-[var(--primary-green)] font-bold hover:underline">See all</button>
          </div>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">How to</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <HowToCard 
              title="Poppro For Good 101" 
              image="https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?auto=format&fit=crop&q=80&w=800"
            />
            <HowToCard 
              title="Creating Impactful Content" 
              image="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800"
            />
            <HowToCard 
              title="Engaging the Community" 
              image="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800"
            />
          </div>
          <div className="text-center mt-12">
            <button className="text-[var(--primary-green)] font-bold hover:underline">See all</button>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-24 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-16">Our Partners</h2>
          <div className="bg-white p-12 rounded-2xl shadow-sm inline-block">
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Ulta_Beauty_logo.svg/1024px-Ulta_Beauty_logo.svg.png" 
              alt="Partner Logo" 
              className="h-16 opacity-80 hover:opacity-100 transition-opacity"
            />
          </div>
        </div>
      </section>

      <footer className="bg-black text-white py-20 px-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between gap-12 mb-20">
            <Link to="/" className="flex items-center gap-2">
              <span className="text-4xl font-black italic tracking-tighter">
                <span className="text-[var(--primary-green)]">Pop</span>
                <span>pro</span>
              </span>
            </Link>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-12 flex-1 max-w-4xl ml-auto">
              <FooterGroup title="Company" links={["About Poppro", "Poppro Browse", "Newsroom", "Contact", "Careers"]} />
              <FooterGroup title="Programs" links={["Poppro for Good", "Poppro Embeds", "Effect House", "Poppro for Developers", "Transparency"]} />
              <FooterGroup title="Resources" links={["Help Center", "Safety Center", "Creator Academy", "Community Guidelines", "Accessibility"]} />
              <FooterGroup title="Legal" links={["Cookies Policy", "Privacy Policy", "Law Enforcement", "Terms of Service"]} />
            </div>
          </div>
          
          <div className="pt-10 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
            <p>© 2026 Poppro</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function StoryCard({ title, image }: { title: string; image: string }) {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 group cursor-pointer"
    >
      <div className="aspect-[4/3] overflow-hidden relative">
        <img src={image} alt={title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          <Play className="text-white fill-white" size={48} />
        </div>
      </div>
      <div className="p-8 text-center">
        <h3 className="text-2xl font-bold text-gray-800">{title}</h3>
      </div>
    </motion.div>
  );
}

function HowToCard({ title, image }: { title: string; image: string }) {
  return (
    <motion.div 
      whileHover={{ scale: 1.02 }}
      className="rounded-3xl overflow-hidden shadow-sm relative group cursor-pointer aspect-[16/9]"
    >
      <img src={image} alt={title} className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-8">
        <h3 className="text-2xl font-bold text-white group-hover:translate-x-2 transition-transform duration-300 flex items-center gap-2">
          {title} <ChevronRight />
        </h3>
      </div>
    </motion.div>
  );
}

function FooterGroup({ title, links }: { title: string; links: string[] }) {
  return (
    <div className="space-y-4">
      <h4 className="font-bold text-gray-200 uppercase text-xs tracking-widest">{title}</h4>
      <ul className="space-y-2 text-sm text-gray-400">
        {links.map(link => (
          <li key={link}><button className="hover:text-white transition-colors">{link}</button></li>
        ))}
      </ul>
    </div>
  );
}
