import React from 'react';
import Image from 'next/image';
import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full bg-[#2E1A47] text-[#FDFBF7] py-12 px-6 border-t border-[#C5A059]/30 font-nunito">
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
            <a href="tel:+1234567890" className="flex items-center gap-2 hover:text-[#FFB81C] transition-colors group">
              <div className="p-2 bg-[#FDFBF7]/10 rounded-full group-hover:bg-[#FFB81C] group-hover:text-[#2E1A47] transition-all">
                <Phone size={18} />
              </div>
              <span>+1 (234) 567-890</span>
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
