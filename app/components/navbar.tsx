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
  <header className='w-full  flex p-2 justify-center items-center relative z-50'>
    <nav className="w-full relative flex justify-start items-center px-2 md:px-4">
        <div className="flex items-center gap-3 font-nunito">
            <div>
                <Image src="/Womenlogo.jpeg" alt="Logo" width={60} height={60} />
            </div>            
            <h2 className="ml-2 font-bold text-md md:text-2xl text-[#2E1A47]/80 max-w-[200px] md:max-w-none leading-tight">WORLDA.NG</h2>
        </div>

        {/* Desktop Menu */}
        <div className='hidden md:flex gap-8 items-center justify-center  px-8 py-3 font-nunito ml-4'>
        <div className='flex absolute w-full left-0 justify-center items-center'>
            <ul className="flex space-x-6">
                <li><a href="#home" className="text-[#2E1A47]/80 hover:text-[#C5A059] transition-colors">Home</a></li>
                <li><a href="#about" className="text-[#2E1A47]/80 hover:text-[#C5A059] transition-colors">About</a></li>
                <li><a href="#contact" className="text-[#2E1A47]/80 hover:text-[#C5A059] transition-colors">Contact Us</a></li>
            </ul>
           </div>
        </div>

        {/* Mobile Hamburger Button */}
        <button 
            className="md:hidden text-[#2E1A47]/80 p-2 hover:bg-[#2E1A47]/10 rounded-full transition-colors"
            onClick={toggleMenu}
            aria-label="Toggle menu"
        >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
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