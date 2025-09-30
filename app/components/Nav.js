'use client'

import React, { useState, useEffect } from 'react'
import Link from "next/link"
import Image from 'next/image'

const Nav = () => {
  const [scrolled, setScrolled] = useState(false)
  const [activeLink, setActiveLink] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'Events' },
    { href: '/features', label: 'Team' }
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled ? 'bg-black/80 backdrop-blur-xl py-3 shadow-lg shadow-cyan-500/10' : 'bg-transparent py-6'
    }`}>
      <div className='max-w-7xl mx-auto px-6'>
        <div className='flex items-center justify-between'>
          {/* Logo Section */}
          <div className='flex items-center space-x-3 group'>
            <div className='relative'>
              <div className='absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full blur-md opacity-0 group-hover:opacity-75 transition-opacity duration-500'></div>
              <Image
                src="/Logo.png"
                width={60}
                height={60}
                alt="Logo"
                className='relative z-10 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6'
              />
            </div>
            <div className='hidden sm:block'>
              <div className='text-xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent'>
                AI & ML
              </div>
              <div className='text-xs text-gray-400 font-light tracking-widest'>
                DEPARTMENT
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className='flex items-center space-x-1 bg-white/5 backdrop-blur-sm rounded-full px-2 py-2 border border-white/10'>
            {navLinks.map((link) => (
              <Link 
                key={link.href}
                href={link.href}
                onMouseEnter={() => setActiveLink(link.href)}
                onMouseLeave={() => setActiveLink('')}
                className='relative px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 group'
              >
                {/* Hover background effect */}
                <span className={`absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full transition-all duration-300 ${
                  activeLink === link.href ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                }`}></span>
                
                {/* Active indicator */}
                <span className={`absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-cyan-400 transition-all duration-300 ${
                  activeLink === link.href ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
                }`}></span>
                
                {/* Text */}
                <span className={`relative z-10 transition-all duration-300 ${
                  activeLink === link.href 
                    ? 'text-cyan-400' 
                    : 'text-gray-300 group-hover:text-white'
                }`}>
                  {link.label}
                </span>

                {/* Animated underline */}
                <span className='absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-cyan-400 to-blue-400 group-hover:w-full transition-all duration-500'></span>
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className='hidden md:block'>
            <button className='relative px-6 py-2.5 rounded-full font-medium text-sm overflow-hidden group'>
              <span className='absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 transition-transform duration-300 group-hover:scale-105'></span>
              <span className='absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300'></span>
              <span className='relative z-10 flex items-center space-x-2'>
                <span>Register</span>
                <span className='transition-transform duration-300 group-hover:translate-x-1'>→</span>
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Animated border bottom */}
      <div className='absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent'></div>
    </nav>
  )
}

export default Nav