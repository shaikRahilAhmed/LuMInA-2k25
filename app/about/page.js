'use client'

import React from 'react'
import Image from 'next/image'

const AboutPage = () => {
  return (
    <div className='mt-15 min-h-screen px-6 py-20'>
      <div className='max-w-6xl mx-auto'>
        
        {/* Page Header */}
        <div className='text-center mb-16'>
          <h1 className='text-4xl md:text-6xl font-bold mb-4'>
            <span className='bg-gradient-to-r from-red-400 via-pink-400 to-orange-400 bg-clip-text text-transparent'>
              About LuMInA
            </span>
          </h1>
          <div className='flex justify-center mt-6'>
            <div className='w-32 h-1 bg-gradient-to-r from-red-500 via-pink-500 to-orange-500 rounded-full'></div>
          </div>
        </div>

        {/* Main Content Card */}
        <div className='relative group mb-16'>
          {/* Glow Effect */}
          <div className='absolute inset-0 bg-gradient-to-r from-red-500/20 via-pink-500/20 to-orange-500/20 rounded-3xl blur-2xl opacity-50 group-hover:opacity-75 transition-opacity duration-500'></div>
          
          {/* Content */}
          <div className='relative bg-zinc-900/70 backdrop-blur-sm border border-red-500/30 rounded-3xl p-8 md:p-12'>
            <div className='space-y-6'>
              <div>
                <h2 className='text-2xl md:text-3xl font-bold mb-6'>
                  <span className='bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent'>
                    Welcome to LuMInA 2K25!
                  </span>
                </h2>
              </div>

              <div className='text-gray-300 text-base md:text-lg leading-relaxed space-y-4'>
                <p>
                  LuMInA 2K25 is a vibrant two-day tech and cultural extravaganza organized by the <span className='text-red-400 font-medium'>Department of Artificial Intelligence & Machine Learning</span> at <span className='text-orange-400 font-medium'>St. Martin's Engineering College</span>. It celebrates innovation, creativity and teamwork, giving every student a platform to explore their interests and showcase their talents.
                </p>

                <p>
                  Beginning with a traditional inauguration and culminating in dazzling performances, LuMInA blends technical challenges with artistic expression. From quizzes, debates and gaming to music, dance and theme walks, it promises learning, networking and entertainment all in one place.
                </p>

                <p className='text-xl md:text-2xl font-semibold text-center py-4'>
                  <span className='bg-gradient-to-r from-red-400 via-pink-400 to-orange-400 bg-clip-text text-transparent'>
                    Join us and be part of this unforgettable celebration where culture meets code!
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>

      

        {/* Event Highlights */}
        <div className='relative group'>
          <div className='absolute inset-0 bg-gradient-to-r from-red-500/20 via-pink-500/20 to-orange-500/20 rounded-3xl blur-2xl opacity-50 group-hover:opacity-75 transition-opacity duration-500'></div>
          
          <div className='relative bg-zinc-900/70 backdrop-blur-sm border border-red-500/30 rounded-3xl p-8 md:p-12'>
            <h2 className='text-2xl md:text-3xl font-bold mb-8 text-center'>
              <span className='bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent'>
                Event Highlights
              </span>
            </h2>

            <div className='grid md:grid-cols-2 gap-6'>
              <div className='space-y-4'>
                <div className='flex items-start space-x-3'>
                  <span className='text-red-400 text-2xl'>🎯</span>
                  <div>
                    <h3 className='text-red-400 font-semibold mb-1'>Technical Events</h3>
                    <p className='text-gray-400 text-sm'>TechQuit, Tactical Showdown, Solution Pitching</p>
                  </div>
                </div>

                <div className='flex items-start space-x-3'>
                  <span className='text-orange-400 text-2xl'>🎨</span>
                  <div>
                    <h3 className='text-orange-400 font-semibold mb-1'>Creative Events</h3>
                    <p className='text-gray-400 text-sm'>Artify, Rangastalam Cultural Show</p>
                  </div>
                </div>

                <div className='flex items-start space-x-3'>
                  <span className='text-pink-400 text-2xl'>💡</span>
                  <div>
                    <h3 className='text-pink-400 font-semibold mb-1'>Intellectual Events</h3>
                    <p className='text-gray-400 text-sm'>Logic League Debate, Howzaat Quiz</p>
                  </div>
                </div>
              </div>

              <div className='space-y-4'>
                <div className='flex items-start space-x-3'>
                  <span className='text-red-400 text-2xl'>🎮</span>
                  <div>
                    <h3 className='text-red-400 font-semibold mb-1'>Gaming Events</h3>
                    <p className='text-gray-400 text-sm'>Free Fire, BGMI Tournaments</p>
                  </div>
                </div>

                <div className='flex items-start space-x-3'>
                  <span className='text-orange-400 text-2xl'>🎭</span>
                  <div>
                    <h3 className='text-orange-400 font-semibold mb-1'>Cultural Events</h3>
                    <p className='text-gray-400 text-sm'>Dance, Singing, Theme Walk</p>
                  </div>
                </div>

                <div className='flex items-start space-x-3'>
                  <span className='text-pink-400 text-2xl'>🏆</span>
                  <div>
                    <h3 className='text-pink-400 font-semibold mb-1'>Prizes & Recognition</h3>
                    <p className='text-gray-400 text-sm'>Exciting prizes and certificates</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @import url('https://fonts.cdnfonts.com/css/in-your-face-joffrey');
        
        * {
          font-family: 'In Your Face Joffrey', sans-serif !important;
        }
      `}</style>
    </div>
  )
}

export default AboutPage