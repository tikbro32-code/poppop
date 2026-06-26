import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Instagram, Youtube, Linkedin, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white text-[#121212] font-sans overflow-x-hidden">
      <header className="fixed top-0 left-0 right-0 h-16 bg-white z-[60] px-6 md:px-16 flex items-center justify-between border-b border-gray-50">
        <div className="flex items-center">
           <Link to="/">
             <Logo size="sm" />
           </Link>
        </div>

        <nav className="flex items-center gap-2">
          <Link to="/about" className="text-[15px] font-medium text-[#121212] px-4 py-2 hover:bg-gray-50 rounded-lg transition-all">
            About
          </Link>
          <Link to="/newsroom" className="text-[15px] font-medium text-[#121212] px-4 py-2 hover:bg-gray-50 rounded-lg transition-all">
            Newsroom
          </Link>
          <Link to="/careers" className="text-[15px] font-medium text-[#121212] px-4 py-2 hover:bg-gray-50 rounded-lg transition-all">
            Careers
          </Link>
          <Link to="/contact" className="text-[15px] font-medium text-[#fe2c55] bg-[#fe2c55]/5 px-4 py-2 rounded-lg transition-all">
            Contact
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <Link to="/" className="text-[15px] font-bold hover:underline flex items-center gap-1">
            Watch Poppro <ArrowRight size={16} />
          </Link>
        </div>
      </header>

      <section className="pt-28 pb-16 px-4">
        <div className="max-w-[1600px] mx-auto flex flex-col md:flex-row gap-4 h-[300px] md:h-[500px]">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex-[0.7] rounded-[24px] overflow-hidden"
          >
            <img src="https://picsum.photos/seed/poppro-off1/600/1000" alt="Office 1" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="flex-[1.6] rounded-[24px] overflow-hidden"
          >
            <img src="https://picsum.photos/seed/poppro-off2/1200/800" alt="Office 2" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="flex-[0.7] rounded-[24px] overflow-hidden"
          >
            <img src="https://picsum.photos/seed/poppro-off3/600/1000" alt="Office 3" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-6 md:px-16 text-center">
        <div className="max-w-[1000px] mx-auto">
          <span className="font-bold text-[14px] mb-4 block text-[#121212]">Get in Touch with Poppro</span>
          <h1 className="text-[40px] md:text-[52px] font-bold leading-[1.15] mb-8 tracking-tight max-w-[850px] mx-auto">
            Whether you’ve got a question, need support, or just want to say hi — we’re here to help.
          </h1>
        </div>
      </section>

      <section className="py-10 px-4 md:px-16 mb-20">
        <div className="max-w-[1300px] mx-auto space-y-12">
          <div className="flex flex-col md:flex-row items-center bg-[#f7f8f9] rounded-[32px] overflow-hidden min-h-[450px]">
            <div className="md:w-1/2 h-[350px] md:h-[550px] p-8 md:p-12">
              <img src="https://picsum.photos/seed/off-worker1/1000/1000" alt="Support" className="w-full h-full object-cover rounded-[24px]" referrerPolicy="no-referrer" />
            </div>
            <div className="md:w-1/2 p-12 md:p-16">
              <h2 className="text-[32px] font-bold mb-4">Help Center</h2>
              <p className="text-lg text-gray-500 mb-8 leading-relaxed max-w-sm">
                Explore tips, guides, and support for everything from account settings to content questions.
              </p>
              <button className="flex items-center gap-3 font-bold text-[15px] hover:underline transition-all">
                 <ArrowRight className="bg-black text-white rounded-full p-1" size={18} />
                 Go to Help Center
              </button>
            </div>
          </div>

          <div className="flex flex-col md:flex-row-reverse items-center bg-[#f7f8f9] rounded-[32px] overflow-hidden min-h-[450px]">
            <div className="md:w-1/2 h-[350px] md:h-[550px] p-8 md:p-12">
              <img src="https://picsum.photos/seed/off-worker2/1000/1000" alt="Partners" className="w-full h-full object-cover rounded-[24px]" referrerPolicy="no-referrer" />
            </div>
            <div className="md:w-1/2 p-12 md:p-16">
              <h2 className="text-[32px] font-bold mb-4">Our Partners</h2>
              <p className="text-lg text-gray-500 mb-8 leading-relaxed max-w-sm">
                Resources and guidance to help you get the most out of working with Poppro.
              </p>
              <button className="flex items-center gap-3 font-bold text-[15px] hover:underline transition-all">
                 <ArrowRight className="bg-black text-white rounded-full p-1" size={18} />
                 Go to Partner Hub
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 md:px-16 mb-20 text-white">
        <div className="max-w-[1300px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="aspect-[4/3] md:h-[350px] bg-[#ebd1f0] text-[#121212] rounded-tl-[40px] rounded-br-[40px] p-12 flex flex-col justify-center items-center group cursor-pointer hover:shadow-lg transition-all text-center">
              <h3 className="text-[20px] font-bold">Media Inquiries</h3>
          </div>
          <div className="aspect-[4/3] md:h-[350px] bg-[#410610] rounded-tl-[40px] rounded-br-[40px] p-12 flex flex-col justify-center items-center group cursor-pointer hover:shadow-lg transition-all text-center">
              <h3 className="text-[20px] font-bold">Legal Inquiries</h3>
          </div>
          <div className="aspect-[4/3] md:h-[350px] bg-black rounded-tl-[40px] rounded-br-[40px] p-12 flex flex-col justify-center items-center group cursor-pointer hover:shadow-lg transition-all text-center">
              <h3 className="text-[20px] font-bold">Privacy Inquiries</h3>
          </div>
        </div>
      </section>

      <footer className="bg-white border-t border-gray-100 pt-32 pb-20 px-6 md:px-16">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-16 mb-24">
            <div>
               <Logo size="sm" />
            </div>
            <div>
              <h4 className="font-black text-lg mb-8 uppercase tracking-widest text-gray-400">Company</h4>
              <ul className="space-y-4 font-bold text-[#121212]">
                <li className="hover:underline cursor-pointer">About</li>
                <li className="hover:underline cursor-pointer">Newsroom</li>
                <li className="hover:underline cursor-pointer">Store</li>
                <li className="hover:underline cursor-pointer">Contact</li>
                <li className="hover:underline cursor-pointer">Careers</li>
                <li className="hover:underline cursor-pointer text-gray-400">ByteDance</li>
              </ul>
            </div>
            <div>
              <h4 className="font-black text-lg mb-8 uppercase tracking-widest text-gray-400">Programs</h4>
              <ul className="space-y-4 font-bold text-[#121212]">
                <li className="hover:underline cursor-pointer">Poppro For Good</li>
                <li className="hover:underline cursor-pointer">Poppro For Developers</li>
                <li className="hover:underline cursor-pointer">Effect House</li>
                <li className="hover:underline cursor-pointer">Advertise</li>
                <li className="hover:underline cursor-pointer">Browse</li>
                <li className="hover:underline cursor-pointer">Embed</li>
                <li className="hover:underline cursor-pointer">Rewards</li>
                <li className="hover:underline cursor-pointer text-gray-400">Scaled LIVE Rewards</li>
              </ul>
            </div>
            <div>
              <h4 className="font-black text-lg mb-8 uppercase tracking-widest text-gray-400">Resources</h4>
              <ul className="space-y-4 font-bold text-[#121212]">
                <li className="hover:underline cursor-pointer">Help Center</li>
                <li className="hover:underline cursor-pointer">Safety Center</li>
                <li className="hover:underline cursor-pointer">Privacy Center</li>
                <li className="hover:underline cursor-pointer">Creator Academy</li>
                <li className="hover:underline cursor-pointer">Community Guidelines</li>
                <li className="hover:underline cursor-pointer">Transparency</li>
                <li className="hover:underline cursor-pointer">Accessibility</li>
              </ul>
            </div>
            <div>
              <h4 className="font-black text-lg mb-8 uppercase tracking-widest text-gray-400">Social</h4>
              <ul className="space-y-6">
                <li className="flex items-center gap-3 font-bold"><Logo size="sm" showText={false} /> <span className="hover:underline cursor-pointer">Poppro</span></li>
                <li className="flex items-center gap-3 font-bold"><Linkedin size={20} /> <span className="hover:underline cursor-pointer">LinkedIn</span></li>
                <li className="flex items-center gap-3 font-bold"><Youtube size={20} /> <span className="hover:underline cursor-pointer">Youtube</span></li>
                <li className="flex items-center gap-3 font-bold"><Instagram size={20} /> <span className="hover:underline cursor-pointer">Instagram</span></li>
              </ul>
            </div>
          </div>
          <div className="pt-12 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="w-48 p-4 border border-gray-200 rounded-lg flex items-center justify-between font-bold text-gray-500">
               English (US)
               <ArrowUpRight size={18} className="rotate-90" />
            </div>
            <div className="flex gap-8 text-sm font-bold text-gray-500">
               <span className="hover:underline cursor-pointer">Terms of Service</span>
               <span className="hover:underline cursor-pointer">Privacy</span>
               <Link to="/intellectual-property" className="hover:underline cursor-pointer">Intellectual Property Policy</Link>
               <span className="hover:underline cursor-pointer">Law Enforcement</span>
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
