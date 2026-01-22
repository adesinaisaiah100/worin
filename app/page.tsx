import Image from "next/image";
import Navbar from "./components/navbar";
import { Mail, MapPin } from "lucide-react";

export default function Home() {
  return (
    <main className="flex bg-[#FDFBF7] min-h-screen flex-col items-center font-nunito">
      <div className="w-full p-2 h-screen flex flex-col relative">
      <Navbar />
      <div className="sm:absolute top-0 left-0 w-full h-full sm:py-10 flex justify-between px-10 items-center max-sm:mt-15 max-sm:text-center">
        <div className="w-full flex max-sm:flex-col justify-between items-center">
        <div className="max-w-4xl flex flex-col gap-3 ">
          <h1 className="text-5xl md:text-7xl font-nunito font-bold leading-tight text-[#2E1A47]">
            Woman <span className="text-[#feb10a] font-lobster">Empowerment.</span> Woman Recognition.
          </h1>
          <p className="text-lg max-md:text-sm font-nunito text-[#2E1A47]">When you need us, we are here with hearts and hands you can trust</p>
          <div>
             <div className=" max-sm:text-[11px] sm:text-sm italic text-gray-600 mb-10 mt-1">
            Respect • Support • Encouragement • Dignity • Protection
          </div>
            <button className="w-45 font-nunito  h-12 mt-2 bg-[#FFB81C] rounded-2xl hover:bg-[#fbb00e] transition-colors mr-4 max-sm:mb-5">
              Help
            </button>
            
          </div>
          
           {/* Contact Information Section - Elegantly placed below CTA */}
           <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 mt-6 pt-6 max-w-2xl max-sm:items-center">
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
               <div className="relative w-full max-w-md h-[380px] md:h-[550px] rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white/80 ring-1 ring-gray-100/50 transform rotate-2 hover:rotate-0 transition-transform duration-500">
                <Image
                  src="/woman3.png"
                  alt="Empowered Woman"
                  fill
                  className="object-cover"
                  priority
                />
             </div>
      </div>
      </div>
      </div>
    </main>
  );
}
