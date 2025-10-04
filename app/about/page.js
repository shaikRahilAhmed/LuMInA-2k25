'use client'

import React from 'react'

const AboutPage = () => {
  return (
    <section className="relative min-h-screen  text-gray-200 flex items-center justify-center px-6 py-16">
      <div className="max-w-4xl text-center">
        {/* Heading */}
        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-red-500 via-pink-500 to-orange-400 bg-clip-text text-transparent">
          ABOUT
        </h1>

        {/* Content */}
        <p className="text-lg md:text-xl leading-relaxed text-gray-300">
          <strong className="text-red-400">Welcome to LuMInA 2K25!</strong>
          <br /><br />
          LuMInA 2K25 is a vibrant two-day tech and cultural extravaganza organized by the Department of Artificial Intelligence &amp; Machine Learning at St. Martin’s Engineering College. It celebrates innovation, creativity and teamwork, giving every student a platform to explore their interests and showcase their talents. Beginning with a traditional inauguration and culminating in dazzling performances, LuMInA blends technical challenges with artistic expression. From quizzes, debates and gaming to music, dance and theme walks, it promises learning, networking and entertainment all in one place. <span className="font-semibold text-red-400">Join us and be part of this unforgettable celebration where culture meets code!</span>
        </p>
      </div>

     
    </section>
  )
}

export default AboutPage
