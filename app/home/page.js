'use client'

import React, { useState, useEffect } from 'react'

const Page = () => {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    })

    useEffect(() => {
        const eventDate = new Date('2025-10-24T00:00:00').getTime()

        const updateTimer = () => {
            const now = new Date().getTime()
            const difference = eventDate - now

            if (difference > 0) {
                setTimeLeft({
                    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                    minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
                    seconds: Math.floor((difference % (1000 * 60)) / 1000)
                })
            }
        }

        updateTimer()
        const interval = setInterval(updateTimer, 1000)

        return () => clearInterval(interval)
    }, [])

    return (
        <div className='h-screen flex items-center justify-center px-6'>
            <div className='max-w-6xl mx-auto w-full'>

                {/* Date Badge */}
                <div className='flex justify-center mt-6 mb-4 animate-fade-in'>
                    <div className='inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 backdrop-blur-sm'>
                        <div className='w-2 h-2 bg-cyan-400 rounded-full animate-pulse'></div>
                        <span className='text-cyan-400 text-xs md:text-sm font-semibold tracking-widest uppercase'>
                            October 24 - 25
                        </span>
                    </div>
                </div>

                {/* Location */}
                <div className='text-center mb-4 animate-slide-up' style={{ animationDelay: '0.1s' }}>
                    <p className='text-gray-400 text-xs md:text-sm uppercase tracking-[0.3em] font-light'>
                        Subhas Chandrabose Block · St. Martin&apos;s
                    </p>
                </div>

                {/* Main Title */}
                <div className='text-center mb-3 animate-slide-up' style={{ animationDelay: '0.2s' }}>
                    <h1 className='text-6xl md:text-8xl lg:text-9xl font-black tracking-tight'>
                        <span className='bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent inline-block transform hover:scale-105 transition-transform duration-500'>
                            LuMInA
                        </span>
                    </h1>
                </div>

                {/* Tagline */}
                <div className='text-center mb-6 animate-slide-up' style={{ animationDelay: '0.3s' }}>
                    <p className='text-xl md:text-2xl font-light text-gray-300 tracking-wide'>
                        Where <span className='text-cyan-400 font-semibold'>Culture</span> Meets <span className='text-blue-400 font-semibold'>Code</span>
                    </p>
                    <div className='flex justify-center mt-3'>
                        <div className='w-20 h-0.5 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-full'></div>
                    </div>
                </div>

                {/* Description */}
                <div className='text-center max-w-3xl mx-auto mb-8 animate-fade-in' style={{ animationDelay: '0.4s' }}>
                    <p className='text-gray-400 text-sm md:text-base leading-relaxed font-light'>
                        LuMInA 2K25 is the flagship tech & cultural fest of the <span className='text-cyan-400 font-medium'>AIML Department</span>, bringing together innovation and creativity under one roof.
                        Across two exciting days, students compete in quizzes, debates, gaming, art and more.
                        From code to culture, LuMInA celebrates <span className='text-blue-400 font-medium'>talent</span>, <span className='text-purple-400 font-medium'>teamwork</span> and <span className='text-pink-400 font-medium'>passion</span>.
                    </p>
                </div>

                {/* Countdown Timer */}
                <div className='flex justify-center animate-fade-in' style={{ animationDelay: '0.5s' }}>
                    <div className='flex gap-3 md:gap-4'>
                        {/* Days */}
                        <div className='flex flex-col items-center'>
                            <div className='relative group'>
                                <div className='absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-xl blur-lg group-hover:blur-xl transition-all duration-300'></div>
                                <div className='relative bg-slate-900/80 backdrop-blur-sm border border-cyan-500/30 rounded-xl px-4 py-3 md:px-6 md:py-4 min-w-[60px] md:min-w-[80px]'>
                                    <div className='text-3xl md:text-4xl font-bold bg-gradient-to-br from-cyan-400 to-blue-400 bg-clip-text text-transparent'>
                                        {String(timeLeft.days).padStart(2, '0')}
                                    </div>
                                </div>
                            </div>
                            <div className='text-gray-400 text-[10px] md:text-xs uppercase tracking-widest mt-2 font-light'>
                                Days
                            </div>
                        </div>

                        {/* Hours */}
                        <div className='flex flex-col items-center'>
                            <div className='relative group'>
                                <div className='absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl blur-lg group-hover:blur-xl transition-all duration-300'></div>
                                <div className='relative bg-slate-900/80 backdrop-blur-sm border border-blue-500/30 rounded-xl px-4 py-3 md:px-6 md:py-4 min-w-[60px] md:min-w-[80px]'>
                                    <div className='text-3xl md:text-4xl font-bold bg-gradient-to-br from-blue-400 to-purple-400 bg-clip-text text-transparent'>
                                        {String(timeLeft.hours).padStart(2, '0')}
                                    </div>
                                </div>
                            </div>
                            <div className='text-gray-400 text-[10px] md:text-xs uppercase tracking-widest mt-2 font-light'>
                                Hours
                            </div>
                        </div>

                        {/* Minutes */}
                        <div className='flex flex-col items-center'>
                            <div className='relative group'>
                                <div className='absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl blur-lg group-hover:blur-xl transition-all duration-300'></div>
                                <div className='relative bg-slate-900/80 backdrop-blur-sm border border-purple-500/30 rounded-xl px-4 py-3 md:px-6 md:py-4 min-w-[60px] md:min-w-[80px]'>
                                    <div className='text-3xl md:text-4xl font-bold bg-gradient-to-br from-purple-400 to-pink-400 bg-clip-text text-transparent'>
                                        {String(timeLeft.minutes).padStart(2, '0')}
                                    </div>
                                </div>
                            </div>
                            <div className='text-gray-400 text-[10px] md:text-xs uppercase tracking-widest mt-2 font-light'>
                                Minutes
                            </div>
                        </div>

                        {/* Seconds */}
                        <div className='flex flex-col items-center'>
                            <div className='relative group'>
                                <div className='absolute inset-0 bg-gradient-to-br from-pink-500/20 to-red-500/20 rounded-xl blur-lg group-hover:blur-xl transition-all duration-300'></div>
                                <div className='relative bg-slate-900/80 backdrop-blur-sm border border-pink-500/30 rounded-xl px-4 py-3 md:px-6 md:py-4 min-w-[60px] md:min-w-[80px]'>
                                    <div className='text-3xl md:text-4xl font-bold bg-gradient-to-br from-pink-400 to-red-400 bg-clip-text text-transparent'>
                                        {String(timeLeft.seconds).padStart(2, '0')}
                                    </div>
                                </div>
                            </div>
                            <div className='text-gray-400 text-[10px] md:text-xs uppercase tracking-widest mt-2 font-light'>
                                Seconds
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
        }

        .animate-slide-up {
          animation: slide-up 1s ease-out forwards;
        }
      `}</style>
        </div>
    )
}

export default Page
