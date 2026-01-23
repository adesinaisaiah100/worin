"use client";

import Image from "next/image";
import Navbar from "./components/navbar";
import { Mail, MapPin, ArrowRight } from "lucide-react";
import { useMediaQuery } from 'react-responsive'

export default function Home() {


  const isMobile = useMediaQuery({ maxWidth: 767 })


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
            <button className="w-45 font-nunito  h-12 mt-2 bg-[#FFB81C] rounded-2xl hover:bg-[#fbb00e] transition-colors mr-4 max-sm:mb-5 ">
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
            src="/give3.jpeg"
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
     
      
    </main>
  );
}
