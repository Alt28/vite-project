import React from 'react'
import dblogo from '../assets/dblogo.png'

function Navbar() {
  return (

    <nav className="min-h-20 w-full bg-black flex items-center px-10 shadow-md relative font-dokkan">
      <img src={dblogo} alt="Dragon Ball Logo" className="h-12 w-auto mr-4" />
      <ul className="font-extrabold text-2xl flex space-x-20 ml-auto uppercase tracking-wider drop-shadow-[2px_2px_0px_rgba(0,0,0,0.7)] text-sky-950 text-shadow-2xs text-shadow-sky-400">
        <li className="text-violet-400 hover:text-white transition-colors duration-200 cursor-pointer">Characters</li>
        <li className="text-red-400 hover:text-white transition-colors duration-200 cursor-pointer">Events</li>
        <li className="text-blue-300 hover:text-white transition-colors duration-200 cursor-pointer">News</li>
      </ul>
      <div className="absolute left-0 bottom-0 w-full h-3 flex flex-col z-20">
        <div className="w-full h-1.5 bg-red-600" />
        <div className="w-full h-1.5 bg-white" />
      </div>
    </nav>
  )
}

export default Navbar