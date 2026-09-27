"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
  <header className='w-full flex p-2 justify-center items-center relative z-50'>
    <nav className="w-full relative flex justify-between items-center px-2 md:px-4">
        {/* Brand: Logo & Site Name */}
        <a href="#home" className="flex items-center gap-2 sm:gap-3 font-nunito text-left min-w-0 max-w-[calc(100%-3.5rem)] md:max-w-none group">
            <div className="shrink-0 relative w-9 h-9 sm:w-11 sm:h-11 md:w-14 md:h-14 rounded-full overflow-hidden bg-[#2E1A47]/10 flex items-center justify-center">
                <Image 
                    src="/Womenlogo.jpeg" 
                    alt="Women Recognition Logo" 
                    width={56} 
                    height={56} 
                    className="object-cover w-full h-full"
                    priority
                />
            </div>            
            <h2 className="font-bold text-xs xs:text-sm sm:text-lg md:text-2xl text-[#2E1A47]/90 text-left leading-tight tracking-tight break-all sm:break-normal group-hover:text-[#2E1A47] transition-colors">
                womenrecognition.ng
            </h2>
        </a>

        {/* Desktop Menu */}
        <div className='hidden md:flex items-center gap-8 font-nunito ml-auto'>
            <ul className="flex space-x-6 lg:space-x-8">
                <li><a href="#home" className="text-[#2E1A47]/80 hover:text-[#C5A059] font-medium transition-colors">Home</a></li>
                <li><a href="#about" className="text-[#2E1A47]/80 hover:text-[#C5A059] font-medium transition-colors">About</a></li>
                <li><a href="#contact" className="text-[#2E1A47]/80 hover:text-[#C5A059] font-medium transition-colors">Contact Us</a></li>
            </ul>
        </div>

        {/* Mobile Hamburger Button */}
        <button 
            className="md:hidden shrink-0 text-[#2E1A47]/80 p-2 hover:bg-[#2E1A47]/10 rounded-full transition-colors ml-2"
            onClick={toggleMenu}
            aria-label="Toggle menu"
        >
            {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
            <div className="absolute top-full left-0 right-0 bg-[#2E1A47] shadow-xl md:hidden flex flex-col items-center py-8 gap-6 z-50 animate-in slide-in-from-top-2">
                <ul className="flex flex-col items-center space-y-8 text-[#FDFBF7] font-nunito text-lg">
                    <li><a href="#home" onClick={() => setIsMenuOpen(false)} className="hover:text-[#FFB81C] transition-colors">Home</a></li>
                    <li><a href="#about" onClick={() => setIsMenuOpen(false)} className="hover:text-[#FFB81C] transition-colors">About</a></li>
                    <li><a href="#contact" onClick={() => setIsMenuOpen(false)} className="hover:text-[#FFB81C] transition-colors">Contact Us</a></li>
                </ul>
                
            </div>
        )}
    </nav>
  </header>
  )
}

export default Navbar