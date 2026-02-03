import React from 'react';
import Image from 'next/image';
import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="w-full scroll-mt-24 bg-[#2E1A47] text-[#FDFBF7] py-12 px-6 border-t border-[#C5A059]/30 font-nunito">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
        
        {/* Organization Info */}
        <div className="flex flex-col items-center md:items-start gap-4 max-w-md">
          <div className="flex items-center gap-3">
             <div className="relative w-12 h-12 rounded-full overflow-hidden bg-white/10">
                <Image 
                    src="/Womenlogo.jpeg" 
                    alt="Logo" 
                    fill 
                    className="object-cover"
                />
            </div>
            <h3 className="font-bold text-lg leading-tight text-[#C5A059]">
              Women Recognition For Leadership<br/>Development & Advancement Initiative
            </h3>
          </div>
          <p className="text-sm opacity-80">
            Empowering women, building leaders, and creating a supportive community for a brighter future.
          </p>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col gap-4">
          <h4 className="font-bold text-[#C5A059] text-xl">Contact Us</h4>
          <div className="flex flex-col gap-3">
            <a href="mailto:info@worin.org" className="flex items-center gap-2 hover:text-[#FFB81C] transition-colors group">
              <div className="p-2 bg-[#FDFBF7]/10 rounded-full group-hover:bg-[#FFB81C] group-hover:text-[#2E1A47] transition-all">
                <Mail size={18} />
              </div>
              <span>yembukad@yahoo.com</span>
            </a>
            <a href="https://wa.me/+2349036323604" className="flex items-center gap-2 hover:text-[#FFB81C] transition-colors group">
              <div className="p-2 bg-[#FDFBF7]/10 rounded-full group-hover:bg-[#FFB81C] group-hover:text-[#2E1A47] transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-whatsapp" viewBox="0 0 16 16">
  <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/>
</svg>
              </div>
              <span>+234 9036323604</span>
            </a>
          </div>
        </div>

        {/* Socials */}
        <div className="flex flex-col gap-4">
           <h4 className="font-bold text-[#C5A059] text-xl">Follow Us</h4>
           <div className="flex gap-4 justify-center items-center">
              <a href="https://www.facebook.com/share/g/1C32mNv3q2/?mibextid=wwXIfr" className="p-2 bg-[#FDFBF7]/10 rounded-full hover:bg-[#FFB81C] hover:text-[#2E1A47] transition-all flex gap-3" aria-label="Facebook">
                <Facebook size={20} />
              
             Facebook</a>
           </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-12 pt-6 border-t border-[#FDFBF7]/10 text-center text-sm opacity-60">
        <p>&copy; {new Date().getFullYear()} WORIN. All rights reserved.</p>
      </div>
    </footer>
  );
}
