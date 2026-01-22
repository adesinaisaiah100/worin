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
    <nav className="w-full flex justify-between items-center px-2 md:px-4">
        <div className="flex items-center gap-3 font-nunito">
            <div>
                <Image src="/logo.png" alt="Logo" width={40} height={40} />
            </div>            
            <h2 className="ml-2 font-bold text-md md:text-2xl text-[#2E1A47] max-w-[200px] md:max-w-none leading-tight">Women Recognition For Leadership Development & Advancement Initiative.</h2>
        </div>

        {/* Desktop Menu */}
        <div className='hidden md:flex gap-8 items-center justify-end flex-1 bg-white/20 backdrop-blur-md  rounded-full px-8 py-3 font-nunito ml-4'>
            <ul className="flex space-x-6">
                <li><a href="#" className="text-[#2E1A47] hover:text-[#C5A059] transition-colors">Home</a></li>
                <li><a href="#" className="text-[#2E1A47] hover:text-[#C5A059] transition-colors">About</a></li>
                <li><a href="#" className="text-[#2E1A47] hover:text-[#C5A059] transition-colors">Contact Us</a></li>
            </ul>
            <button className='px-8 py-2 bg-[#FFB81C] text-[#2E1A47] font-bold rounded-full hover:bg-[#2E1A47] hover:text-[#FDFBF7] transition-colors'>
                Help
            </button>
        </div>

        {/* Mobile Hamburger Button */}
        <button 
            className="md:hidden text-[#2E1A47] p-2 hover:bg-[#2E1A47]/10 rounded-full transition-colors"
            onClick={toggleMenu}
            aria-label="Toggle menu"
        >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
            <div className="absolute top-full left-0 right-0 bg-[#2E1A47] shadow-xl md:hidden flex flex-col items-center py-8 gap-6 z-50 animate-in slide-in-from-top-2">
                <ul className="flex flex-col items-center space-y-8 text-[#FDFBF7] font-nunito text-lg">
                    <li><a href="#" onClick={toggleMenu} className="hover:text-[#FFB81C] transition-colors">Home</a></li>
                    <li><a href="#" onClick={toggleMenu} className="hover:text-[#FFB81C] transition-colors">About</a></li>
                    <li><a href="#" onClick={toggleMenu} className="hover:text-[#FFB81C] transition-colors">Contact Us</a></li>
                </ul>
                <button 
                    onClick={toggleMenu}
                    className='px-10 py-3 bg-[#FFB81C] text-[#2E1A47] font-bold rounded-full hover:bg-[#FDFBF7] transition-colors'
                >
                    Help
                </button>
            </div>
        )}
    </nav>
  </header>
  )
}

export default Navbar