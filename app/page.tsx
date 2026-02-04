"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Navbar from "./components/navbar";
import Testimonials from "./components/testimonials";
import CTA from "./components/cta";
import HelpForm from "./components/helpForm";
import Footer from "./components/footer";
import { Mail, MapPin, Heart, Shield, Users, ChevronLeft, ChevronRight } from "lucide-react";
import { useMediaQuery } from 'react-responsive'

export default function Home() {

  const isMobile = useMediaQuery({ maxWidth: 767 })
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const helpFormAnchorRef = useRef<HTMLDivElement>(null);
  const [isHelpOpen, setIsHelpOpen] = useState(false);

  const openHelp = () => {
    setIsHelpOpen(true);
    // Wait for the form to render, then scroll smoothly.
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        helpFormAnchorRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    });
  };

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400; // adjusts how far it scrolls
      scrollContainerRef.current.scrollBy({
        left: direction === 'right' ? scrollAmount : -scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const mediaItems = [
    { type: 'video', src: '/videos/video1.mp4', title: 'Community Outreach', id: 1 },
    { type: 'image', src: '/pic1.jpeg', title: 'Empowerment Moment', id: 1 },
    { type: 'video', src: '/videos/video2.mp4', title: 'Support Network', id: 2 },
    { type: 'image', src: '/pic2.jpeg', title: 'Community Support', id: 2 },
    { type: 'image', src: '/pic3.jpeg', title: 'Women Helping Women', id: 3 },
    { type: 'image', src: '/pic4.jpeg', title: 'Joyful Moments', id: 4 },
  ];


  return (
    <main className="flex bg-[#FDFBF7] min-h-screen flex-col items-center font-nunito">
      <div className="w-full p-2 h-screen max-sm:h-auto flex flex-col relative">
      <Navbar />
      <div className="sm:absolute top-0 left-0 w-full h-full sm:py-10 flex justify-between px-10 items-center max-sm:mt-10 max-sm:text-center">
        <div className="w-full flex max-sm:flex-col justify-between items-center">
        <div className="max-w-4xl flex flex-col gap-3 ">
          <h1 className="text-5xl md:text-7xl font-nunito font-bold leading-tight text-[#2E1A47]">
            Women <span className="text-[#feb10a] font-lobster">Empowerment.</span> Women Recognition.
          </h1>
          <p className="text-lg max-md:text-sm font-nunito text-[#2E1A47]">When you need us, we are here with hearts and hands you can trust</p>
          <div>
             <div className=" max-sm:text-[11px] sm:text-sm italic text-gray-600 mb-10 mt-1">
            Respect • Support • Encouragement • Dignity • Protection
          </div>
            <button className="w-45 font-nunito  h-12 mt-2 bg-[#FFB81C] rounded-full hover:bg-[#fbb00e] transition-colors mr-4 max-sm:mb-5 ">
              Help
            </button>
            
          </div>
           { isMobile &&
               <div className="relative w-full max-w-md h-[380px] md:h-[550px] rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white/80 ring-1 ring-gray-100/50  hover:rotate-0 transition-transform duration-500">
                <Image
                  src="/woman_pic.png"
                  alt="Empowered Woman"
                  fill
                  className="object-cover"
                  priority
                />
             </div>}
           {/* Contact Information Section - Elegantly placed below CTA */}
           <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 mt-6 pt-6 max-w-2xl max-sm:items-center border-t border-gray-300 mb-5">
            <a href="mailto:yembukad@yahoo.com" className="flex items-center gap-3 group cursor-pointer">
              <div className="p-2.5 bg-[#FDFBF7] border border-[#C5A059]/50 rounded-full text-[#C5A059] group-hover:bg-[#C5A059] group-hover:text-white transition-all duration-300">
                <Mail size={18} />
              </div>
              <span className="text-sm font-nunito font-bold text-[#2E1A47]/80 group-hover:text-[#2E1A47] transition-colors">yembukad@yahoo.com</span>
            </a>
             <div className="flex items-center gap-3 group cursor-pointer">
              <div className="p-2.5 bg-[#FDFBF7] border border-[#C5A059]/50 rounded-full text-[#C5A059] group-hover:bg-[#C5A059] group-hover:text-white transition-all duration-300">
                 <MapPin size={18} />
              </div>
              <span className="text-sm font-nunito font-bold text-[#2E1A47]/80 group-hover:text-[#2E1A47] transition-colors">18A magazine road, Jericho, Ibadan. Nigeria.</span>
            </div>
          </div>
    
        </div>
               { !isMobile &&
               <div className="relative w-full max-w-md h-[380px] md:h-[550px] rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white/80 ring-1 ring-gray-100/50  hover:rotate-0 transition-transform duration-500">
                <Image
                  src="/woman_pic.png"
                  alt="Empowered Woman"
                  fill
                  className="object-cover"
                  priority
                />
             </div>}
      </div>
       </div>
      </div>
 

      {/* --- HOW WE CAN HELP SECTION (Service) --- */}
      <section className="w-full py-20 px-6 bg-[#FDFBF7]" id="about">
        <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row gap-16 items-center">
          {/* Image Side */}
          <div className="w-full md:w-1/2 relative h-[400px] md:h-[600px] rounded-[3rem] overflow-hidden border-4 border-[#C5A059]/20 shadow-2xl">
             <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-400">
               <Image src='/hands2.png' alt='Helping Hands' fill className="object-cover" />
            </div>
          </div>

          {/* Content Side */}
          <div className="w-full md:w-1/2 space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-[#2E1A47] font-nunito">
              How We Can Help
            </h2>
            <p className="text-xl text-gray-600 font-nunito leading-relaxed">
              We provide a safe haven and a path forward. Our mission is to ensure every woman feels the strength of community.
            </p>
            
            <div className="space-y-6">
              {[
                { icon: Heart, title: "Emotional Support", desc: "Counseling and a shoulder to lean on in tough times." },
                { icon: Shield, title: "Protection & Safety", desc: "A secure environment where you can find peace." },
                { icon: Users, title: "Community Reintegration", desc: "Helping you find your place and voice again." }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4 items-start">
                  <div className="p-3 bg-[#C5A059]/10 rounded-xl text-[#C5A059]">
                    <item.icon size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#2E1A47]">{item.title}</h3>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            

          </div>
        </div>
      </section>
      
      <Testimonials />
       <section className="w-full flex flex-col items-center py-10 px-5 h-auto bg-[#2e1a47] text-white">
        <div>
          <h1 className="text-3xl md:text-6xl font-nunito font-bold leading-tight text-center mt-6">
            Women need recognition, not just empowerment, but respect, support, encouragement, dignity, and protection.
          </h1>
        </div>
                <div className="flex flex-col md:flex-row gap-10 w-full max-w-6xl px-4 mt-10 justify-between items-center">
          <div className="relative w-full md:w-1/3 aspect-[3/4] rounded-2xl border-4 border-[#C5A059] overflow-hidden shadow-xl shrink-0">
             <Image
              src="/give1.jpeg"
              alt="Give Image"
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>

          <div className="relative w-full md:w-1/3 aspect-[3/4] rounded-2xl border-4 border-[#C5A059] overflow-hidden shadow-xl shrink-0">
               <Image
            src="/give2.jpeg"
            alt="Give Image"
            fill
            className="object-cover hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
          </div>

          <div className="relative w-full md:w-1/3 aspect-[3/4] rounded-2xl border-4 border-[#C5A059] overflow-hidden shadow-xl shrink-0">
               <Image
            src="/give3.jpeg"
            alt="Give Image"
            fill
            className="object-cover hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
          </div>
        </div>

      </section>

      <CTA onHelpClick={openHelp} />

      {/* --- MEDIA & IMPACT SECTION (Gallery) --- */}
      <section className="w-full py-20 px-6 bg-[#2E1A47]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Journey in Motion</h2>
            <p className="text-[#FDFBF7]/80 text-lg max-w-2xl mx-auto">See the lives changed and the moments shared.</p>
          </div>

          {/* Carousel Layout */}
          <div className="relative group">
            
            {/* Left Button */}
            <button 
              onClick={() => scroll('left')}
              className="absolute left-0 top-1/2 -translate-y-1/2 max-sm:p-1 z-20 bg-[#C5A059] p-3 rounded-full text-[#2E1A47] shadow-xl hover:bg-[#FDFBF7] transition-all -ml-4 md:-ml-8 md:block"
            >
              <ChevronLeft size={32} />
            </button>

            {/* Scroll Container */}
            <div 
              ref={scrollContainerRef}
              className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory scrollbar-hide px-4"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {mediaItems.map((item, index) => (
                <div key={index} className="flex-shrink-0 w-[85vw] md:w-[450px] h-[600px] relative rounded-3xl overflow-hidden border-4 border-[#C5A059]/30 shadow-2xl snap-center bg-black">
                   {item.type === 'video' ? (
                     <div className="w-full h-full relative group">
                        <video className="w-full h-full object-cover" controls>
                            <source src={item.src} type="video/mp4" />
                        </video>
                        <div className="absolute top-4 left-4 bg-[#2E1A47]/80 px-4 py-1 rounded-full text-[#C5A059] font-bold text-sm backdrop-blur-sm border border-[#C5A059]/50">
                          Video
                        </div>
                     </div>
                   ) : (
                     <div className="w-full h-full relative">
                        <Image 
                          src={item.src} 
                          alt={item.title} 
                          fill 
                          className="object-cover"
                        />
                     </div>
                   )}
                   <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-[#2E1A47] to-transparent p-6 pt-20 pointer-events-none">
                      <h3 className="text-white text-xl font-nunito font-bold">{item.title}</h3>
                   </div>
                </div>
              ))}
            </div>

            {/* Right Button */}
            <button 
              onClick={() => scroll('right')}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-[#C5A059] p-3 max-sm:p-1 rounded-full text-[#2E1A47] shadow-xl hover:bg-[#FDFBF7] transition-all -mr-4 md:-mr-8  md:block"
            >
              <ChevronRight size={32} />
            </button>

          </div>
        </div>
      </section>

      <div ref={helpFormAnchorRef} className="w-full">
        {isHelpOpen && <HelpForm onClose={() => setIsHelpOpen(false)} />}
      </div>

      <Footer />
      
    </main>
  );
}
