'use client'

import React from 'react'
import Link from 'next/link'
import { Instagram, Linkedin, Github, Mail } from 'lucide-react'

const Footer = () => {
  return (
    <footer className=" relative bg-gradient-to-b from-black to-slate-900 border-t border-cyan-500/20">
      {/* Top glow effect */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          
          {/* Left Section - Event Branding */}
          <div className="md:col-span-4 space-y-4">
            <div className="flex items-center space-x-3">
              <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
                LuMInA
              </h2>
              <div className="bg-gradient-to-r from-red-500 to-pink-500 px-4 py-2 rounded-lg">
                <span className="text-3xl md:text-4xl font-bold text-white">25</span>
              </div>
            </div>
            
            <div className="space-y-1">
              <p className="text-gray-400 text-sm uppercase tracking-wider font-light">
                October 24-25 • SCB Block, St. Martin&apos;s
              </p>
              <p className="text-xs text-gray-500">
                © 2025 LuMInA, All Rights Reserved.
              </p>
            </div>
          </div>

          {/* Middle Section - Navigation */}
          <div className="md:col-span-4 flex justify-center">
            <div className="flex flex-wrap justify-center gap-6 md:gap-8">
              <Link 
                href="/" 
                className="relative group px-8 py-3 rounded-full overflow-hidden"
              >
                {/* Animated gradient background */}
                <span className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 transition-transform duration-500 group-hover:scale-110"></span>
                
                {/* Glow effect */}
                <span className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 blur-lg opacity-0 group-hover:opacity-75 transition-opacity duration-500"></span>
                
                {/* Text */}
                <span className="relative z-10 flex items-center space-x-2 text-white font-bold text-sm uppercase tracking-wider">
                  <span className="transition-transform duration-300 group-hover:-translate-y-0.5">Quick</span>
                  <span className="transition-transform duration-300 group-hover:-translate-y-0.5 delay-75">Up</span>
                  <svg className="w-4 h-4 transition-all duration-300 group-hover:translate-y-[-2px] group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                  </svg>
                </span>
              </Link>
            
            </div>
          </div>

          {/* Right Section - Social Links & Hashtag */}
          <div className="md:col-span-4 flex flex-col items-center md:items-end space-y-4">
            <div className="text-cyan-400 text-lg font-medium tracking-wide">
              #lumina25
            </div>
            
            <div className="flex items-center space-x-3">
              {/* Mail Icon */}
              <a 
                href="mailto:contact@lumina.com" 
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-500 rounded-full blur-md opacity-0 group-hover:opacity-75 transition-opacity duration-300"></div>
                <div className="relative w-10 h-10 bg-slate-800 hover:bg-slate-700 rounded-full flex items-center justify-center border border-slate-700 group-hover:border-orange-500 transform group-hover:scale-110 transition-all duration-300">
                  <Mail className="w-5 h-5 text-gray-400 group-hover:text-orange-400 transition-colors duration-300" />
                </div>
              </a>

              {/* Instagram */}
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-md opacity-0 group-hover:opacity-75 transition-opacity duration-300"></div>
                <div className="relative w-10 h-10 bg-slate-800 hover:bg-slate-700 rounded-full flex items-center justify-center border border-slate-700 group-hover:border-pink-500 transform group-hover:scale-110 transition-all duration-300">
                  <Instagram className="w-5 h-5 text-gray-400 group-hover:text-pink-400 transition-colors duration-300" />
                </div>
              </a>

              {/* LinkedIn */}
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="relative group"
              >
                <div className="absolute inset-0 bg-blue-500 rounded-full blur-md opacity-0 group-hover:opacity-75 transition-opacity duration-300"></div>
                <div className="relative w-10 h-10 bg-slate-800 hover:bg-slate-700 rounded-full flex items-center justify-center border border-slate-700 group-hover:border-blue-500 transform group-hover:scale-110 transition-all duration-300">
                  <Linkedin className="w-5 h-5 text-gray-400 group-hover:text-blue-400 transition-colors duration-300" />
                </div>
              </a>

              {/* GitHub */}
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="relative group"
              >
                <div className="absolute inset-0 bg-slate-500 rounded-full blur-md opacity-0 group-hover:opacity-75 transition-opacity duration-300"></div>
                <div className="relative w-10 h-10 bg-slate-800 hover:bg-slate-700 rounded-full flex items-center justify-center border border-slate-700 group-hover:border-slate-400 transform group-hover:scale-110 transition-all duration-300">
                  <Github className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors duration-300" />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient line */}
      <div className="h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-50"></div>
    </footer>
  )
}

export default Footer