'use client'

import React from 'react'
import Link from 'next/link'

const HeroSection = () => {
  return (
    <div className="absolute top-0 left-0 h-screen w-full overflow-hidden">
      <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-yellow-500/10 blur-3xl animate-[float_8s_ease-in-out_infinite]"></div>
      <div className="absolute bottom-1/3 left-1/4 w-80 h-80 rounded-full bg-orange-500/10 blur-3xl animate-[float_6s_ease-in-out_infinite]"></div>
      <div className="absolute top-2/3 right-1/3 w-48 h-48 rounded-full bg-yellow-400/10 blur-3xl animate-[float_7s_ease-in-out_infinite_alternate]"></div>
    
      
      <div className="absolute inset-0 flex justify-center items-center flex-col px-6 sm:px-10 text-center z-10">
       
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-2 drop-shadow-lg">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">Chemical Engineering</span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600"> Student </span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">Society</span>
        </h1>
        
       
        <p className="text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto my-6 text-gray-300 font-light leading-relaxed">
          Connecting students with chemistry professionals and fostering 
          <span className="px-1 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400 font-medium">
            a community of support and innovation
          </span>.
        </p>
       
       
        <Link href="/about" 
          className="mt-6 py-4 px-12 rounded-full text-black font-semibold text-lg bg-gradient-to-r from-yellow-500 to-orange-400 hover:from-yellow-400 hover:to-orange-400 transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-orange-500/30 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50"
        >
          <span className="flex items-center gap-2">
            Learn More
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </span>
        </Link>
        
       
        <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/40 to-transparent pointer-events-none"></div>
        
        
        <div className="absolute bottom-8 flex gap-6 opacity-70 hover:opacity-100 transition-opacity">
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-orange-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection