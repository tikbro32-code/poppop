import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { ChevronDown, Play, ArrowRight, X, ChevronRight, Search } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import Logo from './Logo';

export default function PopproAdsPage() {
  const navigate = useNavigate();
  const resultsRef = useRef<HTMLElement>(null);
  const [showPromo, setShowPromo] = useState(true);
  const [heroState, setHeroState] = useState<'text' | 'grid'>('text');

  useEffect(() => {
    const timer = setTimeout(() => {
      setHeroState('grid');
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);

  const menuContent = {
    advertise: {
      sections: [
        {
          title: "Getting started",
          items: ["How it works", "Budgeting"]
        },
        {
          title: "Goals",
          items: ["Increase sales", "Increase video views", "Attract new customers", "Generate leads", "Promote your app"]
        },
        {
          title: "Industries",
          items: ["Overview", "Agencies", "CPG", "Education", "Gaming", "Retail", "Small Business"]
        },
        {
          title: "Tools",
          items: ["Ads Manager", "Business Account", "Business Center", "Poppro Shop"]
        }
      ]
    },
    products: {
      sections: [
        {
          title: "Solutions",
          items: ["In-Feed Ads", "TopView", "Branded Hashtag Challenge", "Branded Effects", "Promote"]
        },
        {
          title: "Creative Tools",
          items: ["Video Editor", "Creative Center", "Video Templates", "Creative Exchange"]
        },
        {
          title: "Commerce",
          items: ["Poppro Shop", "Product Links", "Live Shopping"]
        },
        {
          title: "Measurement",
          items: ["Overview", "Brand Lift", "Attribution"]
        },
        {
          title: "Performance",
          items: ["Overview", "Smart Performance Campaign"]
        }
      ]
    },
    resources: {
      sections: [
        {
          title: "Creative",
          items: ["Creative Center", "Poppro Insights"]
        },
        {
          title: "Learning",
          items: ["Case Studies", "Poppro Academy", "Blog"]
        },
        {
          title: "Partners",
          items: ["Creator Marketplace", "Creative Exchange", "Marketing Partners", "Poppro Affiliates"]
        },
        {
          title: "Support",
          items: ["Help Center", "Brand Safety", "Contact Us"]
        }
      ]
    }
  };

  const [heroIndex, setHeroIndex] = useState(0);
  const heroTitles = ["Love it.", "Want it.", "Get it."];

  useEffect(() => {
    const timer = setInterval(() => {
      setHeroIndex(prev => (prev + 1) % heroTitles.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-white text-black font-sans overflow-x-hidden">
      <nav 
        className="fixed top-0 left-0 right-0 h-16 bg-white border-b border-gray-100 z-[100] px-6 flex items-center justify-between"
        onMouseLeave={() => setHoveredMenu(null)}
      >
        <div className="flex items-center gap-10">
          <Link to="/" className="flex items-center gap-2 shrink-0">
            <Logo showText={true} />
            <span className="text-sm font-medium text-gray-400 border-l border-gray-200 pl-2">for Business</span>
          </Link>
          
          <div className="hidden lg:flex items-center gap-8 text-[15px] font-bold h-full">
            <div 
              className="relative h-full flex items-center"
              onMouseEnter={() => setHoveredMenu('advertise')}
            >
              <button className={`hover:text-[var(--primary-green)] transition-colors cursor-pointer py-5 flex items-center gap-1 ${hoveredMenu === 'advertise' ? 'text-[var(--primary-green)]' : ''}`}>
                Advertise on Poppro <ChevronDown size={14} className={`transition-transform duration-300 ${hoveredMenu === 'advertise' ? 'rotate-180' : ''}`} />
              </button>
            </div>

            <div 
              className="relative h-full flex items-center"
              onMouseEnter={() => setHoveredMenu('products')}
            >
              <button className={`hover:text-[var(--primary-green)] transition-colors cursor-pointer py-5 flex items-center gap-1 ${hoveredMenu === 'products' ? 'text-[var(--primary-green)]' : ''}`}>
                Products <ChevronDown size={14} className={`transition-transform duration-300 ${hoveredMenu === 'products' ? 'rotate-180' : ''}`} />
              </button>
            </div>

            <div 
              className="relative h-full flex items-center"
              onMouseEnter={() => setHoveredMenu('resources')}
            >
              <button className={`hover:text-[var(--primary-green)] transition-colors cursor-pointer py-5 flex items-center gap-1 ${hoveredMenu === 'resources' ? 'text-[var(--primary-green)]' : ''}`}>
                Resources <ChevronDown size={14} className={`transition-transform duration-300 ${hoveredMenu === 'resources' ? 'rotate-180' : ''}`} />
              </button>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button className="px-6 py-2 rounded-full border border-gray-200 font-bold hover:bg-gray-50 transition-colors text-sm">Log in</button>
          <button className="px-6 py-2 rounded-full bg-[#fe2c55] text-white font-bold hover:brightness-110 transition-all text-sm shadow-lg shadow-pink-100">Get started</button>
        </div>

        <AnimatePresence>
          {hoveredMenu && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="absolute top-16 left-0 right-0 bg-white border-b border-gray-100 shadow-xl z-[-1] overflow-hidden"
            >
              <div className="max-w-[1280px] mx-auto px-24 py-12 flex justify-start gap-16 xl:gap-24">
                {menuContent[hoveredMenu as keyof typeof menuContent].sections.map((section, idx) => (
                  <div key={idx} className="flex flex-col gap-6 min-w-[150px]">
                    <h4 className="text-[14px] text-gray-500 font-medium">{section.title}</h4>
                    <ul className="flex flex-col gap-5">
                      {section.items.map((item, itemIdx) => (
                        <li key={itemIdx}>
                          <a href="#" className="text-[17px] font-bold text-black hover:text-[var(--primary-green)] transition-colors block leading-tight">
                            {item}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <AnimatePresence>
        {showPromo && (
          <motion.div 
            initial={{ height: 0 }}
            animate={{ height: 'auto' }}
            exit={{ height: 0 }}
            className="mt-16 bg-[#F5D8B3] px-6 py-3 relative z-40 overflow-hidden"
          >
            <div className="max-w-7xl mx-auto flex items-center justify-center text-xs md:text-sm font-medium gap-2 text-black/80">
              <span>Don't miss out on up to <span className="font-bold text-red-600">MYR 28000</span> free ad credits. Sign up and earn ad credits as you spend.</span>
              <button className="underline font-bold hover:text-black">T&C</button>
              <button className="font-bold text-black border-b-2 border-black/20 hover:border-black flex items-center">Claim credits <ChevronRight size={14} /></button>
            </div>
            <button 
              onClick={() => setShowPromo(false)}
              className="absolute right-6 top-1/2 -translate-y-1/2 p-1 hover:bg-black/5 rounded-full"
            >
              <X size={16} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <section className="relative h-[85vh] bg-[#222] overflow-hidden">
        <div className="absolute inset-0">
          <motion.div 
            className="w-full h-full"
          >
            <img 
              src="https://images.unsplash.com/photo-1542435503-956c469947f6?auto=format&fit=crop&q=80&w=2000" 
              alt="Creative Hero" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
              <div className="h-[120px] md:h-[160px] flex items-center justify-center overflow-hidden mb-6">
                <AnimatePresence mode="wait">
                  <motion.h1 
                    key={heroIndex}
                    initial={{ y: 80, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -80, opacity: 0 }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className="text-white text-7xl md:text-9xl font-black tracking-tighter"
                  >
                    {heroTitles[heroIndex]}
                  </motion.h1>
                </AnimatePresence>
              </div>
              <motion.p 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-white text-lg md:text-xl max-w-2xl font-medium mb-12 opacity-90"
              >
                With Poppro ads, engagement fuels a full-funnel chain reaction from discovery to decision.
              </motion.p>
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="flex flex-col items-center gap-8"
              >
                <div className="relative group">
                  <button 
                    onClick={() => resultsRef.current?.scrollIntoView({ behavior: 'smooth' })}
                    className="bg-[#fe2c55] text-white px-10 py-5 rounded-full font-black text-lg hover:scale-105 transition-all duration-300 flex items-center gap-3 shadow-[0_20px_50px_rgba(254,44,85,0.3)]"
                  >
                    Get started <ChevronDown size={22} className="group-hover:translate-y-1 transition-transform" />
                  </button>
                </div>
                <div className="flex gap-3">
                   {heroTitles.map((_, i) => (
                     <div 
                      key={i} 
                      className={`h-1.5 rounded-full transition-all duration-500 ${i === heroIndex ? 'w-10 bg-white' : 'w-2 bg-white/30'}`} 
                     />
                   ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>


      <section ref={resultsRef} className="py-32 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start gap-20">
          <div className="md:w-1/3">
            <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight tracking-tight">
              Turn attention into results with Poppro for Business
            </h2>
            <p className="text-gray-600 font-medium mb-10 text-lg">
              Reach highly engaged audiences and turn attention into measurable business growth.
            </p>
            <button className="bg-[#fe2c55] text-white px-8 py-3 rounded-full font-bold hover:brightness-110 transition-all">
              Get started
            </button>
          </div>
          <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-16">
            <ResultItem 
              icon="👥"
              title="Expand reach"
              desc="Put your brand in front of over a billion users ready to discover it."
            />
            <ResultItem 
              icon="📈"
              title="Increase views"
              desc="Turn discovery into conversion with Poppro's full-screen, sound-on ads."
            />
            <ResultItem 
              icon="⚡"
              title="Drive engagement"
              desc="Activate Poppro's community with interactive ad solutions."
            />
            <ResultItem 
              icon="🤝"
              title="Attract customers"
              desc="Turn immersive Poppro ads into reach, discovery, and new customers."
            />
          </div>
        </div>
        <div className="mt-20 text-center">
          <button className="bg-gray-100 hover:bg-gray-200 text-black px-12 py-2 rounded-full font-bold transition-colors w-full md:w-auto">
            Show more
          </button>
        </div>
      </section>

      <section className="px-6 py-12">
         <div className="max-w-7xl mx-auto rounded-[40px] overflow-hidden bg-gradient-to-r from-[#FDE5F6] to-[#FAE8F9] flex flex-col md:flex-row min-h-[400px]">
            <div className="flex-1 p-12 md:p-20 flex flex-col justify-center">
              <span className="text-xs font-bold uppercase tracking-widest text-[#9C27B0] mb-6">Newsroom</span>
              <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight">Watch it. Love it. Want it.</h2>
              <p className="text-lg font-medium text-gray-700 max-w-lg mb-10">
                People come to Poppro to discover what's new, engage with what they love, and take part in what matters to them. Turn attention into action with Poppro for Business.
              </p>
              <button className="bg-black text-white w-fit px-8 py-3 rounded-full font-bold hover:bg-black/80 transition-colors">
                Learn more
              </button>
            </div>
            <div className="flex-1 relative">
               <img 
                src="https://images.unsplash.com/photo-1541280910158-c4e14f9c94a3?auto=format&fit=crop&q=80&w=1000" 
                alt="Campaign" 
                className="w-full h-full object-cover"
               />
               <div className="absolute inset-0 bg-pink-500/10 mix-blend-multiply" />
            </div>
         </div>
      </section>

      <section className="bg-black text-white py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-black mb-20 tracking-tight">Discover our products</h2>
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div className="space-y-4">
               {['Branding', 'Creative', 'Commerce', 'Measurement', 'Performance'].map((item, idx) => (
                 <div key={item} className={`group py-6 border-b border-white/20 flex justify-between items-center cursor-pointer ${idx === 0 ? 'text-[var(--primary-green)]' : 'text-white/60 hover:text-white'} transition-colors`}>
                    <span className="text-base font-bold uppercase tracking-widest">{item}</span>
                    <ArrowRight className={`transition-transform duration-300 ${idx === 0 ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100'}`} />
                 </div>
               ))}
            </div>
            <div className="relative">
               <div className="bg-white/10 rounded-[40px] p-6 aspect-square max-w-md mx-auto overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&q=80&w=800"
                    alt="Product view"
                    className="w-full h-full object-cover rounded-3xl"
                  />
               </div>
               <div className="mt-12 text-center md:text-left">
                  <h3 className="text-3xl font-bold mb-6">Make an impact on the For You feed and beyond</h3>
                  <p className="text-white/60 font-medium mb-10">Campaign solutions designed to boost visibility, engagement, and reach.</p>
                  <button className="flex items-center gap-2 font-bold hover:text-[var(--primary-green)] transition-colors">
                    Explore branding solutions <ArrowRight size={18} />
                  </button>
               </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#FAE8D0] py-40 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">
           <div>
              <span className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-6 block">Step 01</span>
              <h2 className="text-5xl font-black mb-8 leading-tight tracking-tight">Create your Ads Manager account</h2>
              <p className="text-lg font-medium text-gray-700 max-w-md mb-12">
                It all starts with the end-to-end Poppro ads platform. Create ads, then manage and optimize your ad campaigns, all in one place.
              </p>
              <button className="bg-black text-white px-10 py-4 rounded-full font-bold hover:bg-black/80 transition-colors">
                Learn more
              </button>
           </div>
           <div className="relative">
              <div className="bg-white rounded-[40px] shadow-2xl p-4 overflow-hidden transform rotate-2 max-w-sm mx-auto">
                 <img src="https://images.unsplash.com/photo-1551288049-bbdac8a28a76?auto=format&fit=crop&q=80&w=600" alt="Ads Dashboard" className="rounded-3xl" />
                 <div className="mt-8 p-4 space-y-4">
                    <div className="h-4 bg-gray-100 rounded w-full" />
                    <div className="h-4 bg-gray-100 rounded w-3/4" />
                    <button className="w-full bg-[#fe2c55] text-white py-3 rounded-xl font-bold mt-4">Sign up</button>
                 </div>
              </div>
           </div>
        </div>
      </section>

      <section className="py-32 px-6 max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-16">
          <h2 className="text-5xl font-black tracking-tight">See how brands grow on Poppro</h2>
          <button className="text-sm font-bold border-b-2 border-black/10 hover:border-black flex items-center gap-1 group pb-1">
            Explore all case studies <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
        
        <div className="flex gap-4 mb-20 overflow-x-auto scrollbar-hide">
          {['Retail', 'CPG', 'Auto', 'Travel', 'Beauty'].map((cat, i) => (
             <button key={cat} className={`px-6 py-2 rounded-full text-sm font-bold border transition-all whitespace-nowrap ${i === 0 ? 'bg-black text-white border-black' : 'border-gray-200 hover:border-black'}`}>
               {cat}
             </button>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-20">
           <div className="space-y-12">
              <div className="mb-8">
                 <h3 className="text-4xl font-bold mb-4">Poppro Shop</h3>
                 <p className="text-gray-600 font-medium max-w-lg">Poppro Shop provides a new way for businesses to reach and sell to Poppro's global audience.</p>
              </div>
              <div className="grid grid-cols-2 gap-12">
                 <div>
                    <span className="text-4xl font-black block mb-2">50%</span>
                    <span className="text-sm text-gray-500 font-medium">Decrease in Cost per Acquisition</span>
                 </div>
                 <div>
                    <span className="text-4xl font-black block mb-2">47%</span>
                    <span className="text-sm text-gray-500 font-medium">Increase in Conversion Rate</span>
                 </div>
              </div>
              <button className="flex items-center gap-2 font-bold text-[#fe2c55] hover:underline">
                See case study <ArrowRight size={18} />
              </button>
           </div>
           <div className="flex gap-4">
              <div className="flex-1 rounded-[40px] overflow-hidden shadow-2xl relative group">
                 <img src="https://images.unsplash.com/photo-1556228578-8c7c2f23d0b1?auto=format&fit=crop&q=80&w=800" alt="Brand case" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30">
                    <Play className="text-white fill-white ml-1" />
                 </div>
              </div>
              <div className="flex-1 flex flex-col gap-4">
                 <div className="flex-1 rounded-[30px] bg-gray-100 overflow-hidden relative group">
                    <img src="https://images.unsplash.com/photo-1513116476489-7635e79feb27?auto=format&fit=crop&q=80&w=400" alt="Sub case" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                 </div>
                 <div className="flex-1 rounded-[30px] bg-gray-100 overflow-hidden relative group">
                    <img src="https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&q=80&w=400" alt="Sub case" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                 </div>
              </div>
           </div>
        </div>
      </section>

      <section className="py-32 px-6 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-black mb-20 tracking-tight">Explore more</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
             <ExploreCard 
                title="Poppro Academy" 
                desc="Explore our catalog of e-learning courses, videos and webinars with curated learning paths tailored for your business goals."
                image="https://images.unsplash.com/photo-1516321318423-f06f85e504b3"
             />
             <ExploreCard 
                title="Business Center" 
                desc="Plan, manage and analyze your Poppro marketing activities in one place for quick collaboration and maximum flexibility."
                image="https://images.unsplash.com/photo-1519389950473-47ba0277781c"
             />
             <ExploreCard 
                title="Marketing Partners" 
                desc="Elevate your business presence with trusted best-in-class companies that help you get started, optimize, and achieve lasting results."
                image="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
             />
             <ExploreCard 
                title="Poppro Meets HubSpot" 
                desc="Marketers can now improve lead quality and visibility into full-funnel performance by connecting Poppro to HubSpot workflows."
                image="https://images.unsplash.com/photo-1460925895917-afdab827c52f"
             />
          </div>
        </div>
      </section>

      <section className="py-24 px-6 flex justify-center">
         <div className="max-w-7xl w-full bg-[#fe2c55] rounded-[50px] p-12 md:p-20 relative overflow-hidden flex flex-col md:flex-row items-center gap-16">
            <div className="absolute -left-20 -bottom-20 w-80 h-80 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute -right-20 -top-20 w-80 h-80 bg-white/10 rounded-full blur-3xl" />
            
            <div className="flex-1 text-white z-10">
               <h2 className="text-5xl md:text-6xl font-black mb-10 tracking-tight leading-tight">Start advertising in minutes</h2>
               <p className="text-xl font-medium text-white/90 max-w-lg mb-12">
                 Create your Poppro Ads Manager account and unlock ad credits to supercharge your first campaign.
               </p>
               <button className="bg-white text-[#fe2c55] px-12 py-4 rounded-full font-black text-lg hover:scale-105 transition-transform">
                 Get started
               </button>
               <div className="mt-20">
                  <p className="text-sm font-bold opacity-60">Already have an account? <span className="underline cursor-pointer hover:opacity-100">Log in</span></p>
               </div>
            </div>

            <div className="flex-1 w-full max-w-md bg-white rounded-[40px] p-8 shadow-2xl z-10">
               <div className="mb-10">
                  <div className="h-1 bg-gray-100 w-full mb-8 relative">
                     <div className="absolute top-0 left-0 h-full w-1/3 bg-[#fe2c55]" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Create account</h3>
                  <p className="text-sm text-gray-500">Sign up to start your first campaign</p>
               </div>
               <div className="space-y-6">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-widest pl-1">Email</label>
                    <input type="email" placeholder="example@business.com" className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-[#fe2c55]/20" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-widest pl-1">Password</label>
                    <input type="password" placeholder="Min. 8 characters" className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-[#fe2c55]/20" />
                  </div>
                  <label className="flex items-start gap-3 cursor-pointer group">
                    <div className="mt-1 w-4 h-4 rounded border border-gray-300 flex-shrink-0 group-hover:border-[#fe2c55]" />
                    <span className="text-[10px] text-gray-400 font-medium leading-tight">
                      By signing up, you agree to our Terms of Service and Privacy Policy. We may send you transactional and marketing emails.
                    </span>
                  </label>
                  <button className="w-full bg-[#fe2c55] text-white py-4 rounded-xl font-black shadow-lg shadow-pink-100 hover:brightness-110 transition-all">
                    Sign up
                  </button>
                  <button className="w-full bg-white border border-gray-200 text-black py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors">
                    Sign up with Poppro
                  </button>
               </div>
            </div>
         </div>
      </section>

      <section className="py-32 px-6 max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-16">
          <h2 className="text-4xl font-black">Your questions, answered</h2>
          <button className="bg-black text-white px-6 py-2 rounded-full font-bold text-sm">Business Help Center</button>
        </div>
        <div className="space-y-2">
           <FAQItem question="How can I get started with advertising on Poppro?" isOpen={true} />
           <FAQItem question="Where do Poppro ads appear?" />
           <FAQItem question="How much does it cost to run Poppro ads?" />
           <FAQItem question="How can I target potential customers on Poppro?" />
        </div>
      </section>

      <footer className="bg-black text-white py-24 px-12 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-12 mb-20">
             <div className="col-span-2 md:col-span-1">
                <Logo showText={true} />
                <p className="mt-6 text-white/40 text-sm font-medium">Elevating businesses through the power of collective joy.</p>
             </div>
             <FooterGroup 
                title="Company" 
                links={['About Poppro', 'ByteDance', 'Poppro.com', 'Poppro Affiliates', 'Poppro Careers', 'Poppro for Good', 'Safety']}
             />
             <FooterGroup 
                title="Products" 
                links={['Creative', 'Brand Marketing', 'Optimization', 'E-commerce']}
             />
             <FooterGroup 
                title="Resources" 
                links={['Creative Center', 'Poppro Insights', 'Poppro Academy', 'Blog', 'Creator Marketplace', 'Marketing Partners', 'Creative Exchange']}
             />
             <FooterGroup 
                title="Support" 
                links={['Help Center', 'Contact Us']}
             />
          </div>
          <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-white/40 font-bold uppercase tracking-widest">
             <div className="flex gap-8">
                <span>© 2026 Poppro</span>
                <span className="hover:text-white cursor-pointer transition-colors">Privacy & Terms</span>
             </div>
             <div className="flex gap-4 items-center">
                <span className="hover:text-white cursor-pointer transition-colors">English - Malaysia</span>
                <ChevronDown size={14} />
             </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function HeroCard({ src, height, shadow = false }: { src: string; height: string; shadow?: boolean }) {
  return (
    <motion.div 
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      className={`${height} w-full rounded-[30px] overflow-hidden ${shadow ? 'shadow-[0_40px_100px_-20px_rgba(0,0,0,0.2)] z-10' : 'opacity-60 scale-95'} transition-all duration-700`}
    >
      <img src={src + "?auto=format&fit=crop&q=80&w=600"} alt="Case" className="w-full h-full object-cover" />
    </motion.div>
  );
}

function ResultItem({ icon, title, desc }: { icon: string; title: string, desc: string }) {
  return (
    <div className="group cursor-pointer">
      <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center text-3xl mb-8 group-hover:scale-110 transition-transform shadow-xl">
        {icon}
      </div>
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <p className="text-gray-500 font-medium leading-relaxed mb-6">{desc}</p>
      <div className="w-10 h-10 rounded-full border border-gray-100 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all">
        <ArrowRight size={18} />
      </div>
    </div>
  );
}

function ExploreCard({ title, desc, image }: { title: string; desc: string; image: string }) {
  return (
    <div className="group cursor-pointer">
      <div className="aspect-[16/10] rounded-[30px] overflow-hidden mb-6 relative">
         <img src={image + "?auto=format&fit=crop&q=80&w=600"} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
         <div className="absolute inset-0 bg-black/5" />
      </div>
      <h4 className="text-xl font-bold mb-4">{title}</h4>
      <p className="text-sm text-gray-500 font-medium leading-relaxed mb-6 line-clamp-3">{desc}</p>
      <div className="flex items-center gap-2 font-bold text-sm tracking-wide group-hover:translate-x-1 transition-transform">
        LEARN MORE <ArrowRight size={16} />
      </div>
    </div>
  );
}

function FAQItem({ question, isOpen = false }: { question: string; isOpen?: boolean }) {
  return (
    <div className="border-b border-gray-100 last:border-none">
       <button className="w-full py-6 flex justify-between items-center text-left hover:text-[#fe2c55] transition-colors group">
          <span className="text-lg font-bold">{question}</span>
          <ChevronDown className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
       </button>
       {isOpen && (
         <div className="pb-8 text-gray-500 font-medium leading-relaxed">
            <p className="mb-4">Getting started is simple. Register for an Ads Manager account, set your campaign goal, define your audience, and upload your creative assets.</p>
            <button className="text-[#fe2c55] font-bold flex items-center gap-1 hover:underline">Get started <ArrowRight size={16} /></button>
         </div>
       )}
    </div>
  );
}

function FooterGroup({ title, links }: { title: string; links: string[] }) {
  return (
    <div className="space-y-4">
      <h5 className="font-bold text-xs uppercase tracking-widest text-[#fe2c55]">{title}</h5>
      <ul className="space-y-2">
        {links.map(link => (
          <li key={link}>
            <button className="text-sm font-medium text-white/40 hover:text-white transition-colors">{link}</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
