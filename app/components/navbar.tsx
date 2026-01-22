import React from 'react'
import Image from 'next/image'

const Navbar = () => {
  return (
  <header className='w-full flex p-2 justify-center items-center'>
    <nav className="w-full flex justify-between items-center">
        <div className="flex items-center gap-3 font-nunito">
            <div>
                <Image src="/logo.png" alt="Logo" width={50} height={50} />
            </div>            
            <h2 className="ml-2 font-bold text-2xl">Women Of Recognition International</h2>
        </div>
        <div className='flex gap-8 items-center justify-end flex-1 bg-white/20 backdrop-blur-md border border-white/20  rounded-full px-8 py-3 font-nunito'>
            <ul className="flex space-x-6">
                <li><a href="#" className="text-gray-700 hover:text-gray-900">Home</a></li>
                <li><a href="#" className="text-gray-700 hover:text-gray-900">About</a></li>
                <li><a href="#" className="text-gray-700 hover:text-gray-900">Contact Us</a></li>
            </ul>
           <button className='px-8 py-2 bg-[#FFB81C] rounded-full hover:bg-[#4B2E6B] transition-colors'>
                    Help
                </button>
        </div>
         <div>
                
            </div>
        
    </nav>
  </header>
  )
}

export default Navbar