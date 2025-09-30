'use client'

import React from 'react'
import Link from 'next/link'
import { Instagram, Linkedin, Github } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-b from-black to-slate-900 border-t border-cyan-500/20">
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
                January 23-24 • SCB Block, St. Martin's
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
                className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm font-medium uppercase tracking-wider"
              >
                Home
              </Link>
              <Link 
                href="/events" 
                className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm font-medium uppercase tracking-wider"
              >
                Events
              </Link>
              <Link 
                href="/team" 
                className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm font-medium uppercase tracking-wider"
              >
                Team
              </Link>
              <Link 
                href="/about" 
                className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm font-medium uppercase tracking-wider"
              >
                About
              </Link>
            </div>
          </div>

          {/* Right Section - Social Links & Hashtag */}
          <div className="md:col-span-4 flex flex-col items-center md:items-end space-y-4">
            <div className="text-cyan-400 text-lg font-medium tracking-wide">
              #lumina25
            </div>
            
            <div className="flex items-center space-x-3">
              {/* Fire/Flame Icon */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-500 rounded-full blur-md opacity-0 group-hover:opacity-75 transition-opacity duration-300"></div>
                <div className="relative w-10 h-10 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300 cursor-pointer">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 23C7.03 23 3 18.97 3 14c0-3.15 1.58-6.14 4.23-8.01.4-.28.95-.2 1.26.2.31.39.24.96-.16 1.27C6.06 9.14 5 11.5 5 14c0 3.86 3.14 7 7 7s7-3.14 7-7c0-1.9-.76-3.65-2.14-4.93-.39-.37-.41-.98-.04-1.37.37-.39.98-.41 1.37-.04C20.07 9.43 21 11.64 21 14c0 4.97-4.03 9-9 9zm-1-9.5v-7c0-.28.22-.5.5-.5s.5.22.5.5v7c0 .28-.22.5-.5.5s-.5-.22-.5-.5z"/>
                  </svg>
                </div>
              </div>

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