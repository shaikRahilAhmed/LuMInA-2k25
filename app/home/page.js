'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'

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
    <div className='px-6'>
      {/* Hero Section */}
      <div className='h-screen flex items-center justify-center'>
        <div className='max-w-6xl mx-auto w-full'>

          {/* Date Badge */}
          <div className='mt-25 flex justify-center mb-4 animate-fade-in'>
            <div className='inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-gradient-to-r from-red-500/10 to-pink-500/10 border border-red-500/30 backdrop-blur-sm'>
              <div className='w-2 h-2 bg-red-400 rounded-full animate-pulse'></div>
              <span className='text-red-400 text-xs md:text-sm font-semibold tracking-widest uppercase'>
                October 24 - 25
              </span>
            </div>
          </div>

          {/* Location */}
          <div className='text-center mb-4 animate-slide-up' style={{ animationDelay: '0.1s' }}>
            <p className='text-gray-400 text-xs md:text-sm uppercase tracking-[0.3em] font-light'>
              Mahatma Gandhi Block   -   St. Martin&apos;s
            </p>
          </div>

         {/* Main Title - Replaced with Image */}
                    <div className='text-center mb-3 animate-slide-up' style={{ animationDelay: '0.2s' }}>
                        <Image
                            src="/mainTitle.png"
                            alt="LuMInA"
                            width={600}
                            height={150}
                            className="mx-auto transform hover:scale-105 transition-transform duration-500"
                        />
                    </div>

          {/* Tagline */}
          <div className='text-center mb-6 animate-slide-up' style={{ animationDelay: '0.3s' }}>
            <p className='text-xl md:text-2xl font-light text-gray-300 tracking-wide'>
              Where <span className='text-red-400 font-semibold'>Culture</span> Meets <span className='text-orange-400 font-semibold'>Code</span>
            </p>
            <div className='flex justify-center mt-3'>
              <div className='w-20 h-0.5 bg-gradient-to-r from-red-500 via-pink-500 to-orange-500 rounded-full'></div>
            </div>
          </div>

          {/* Description */}
          <div className='text-center max-w-3xl mx-auto mb-8 animate-fade-in' style={{ animationDelay: '0.4s' }}>
            <p className='text-gray-400 text-sm md:text-base leading-relaxed font-light'>
              LuMInA 2K25 is the flagship tech & cultural fest of the <span className='text-red-400 font-medium'>AIML Department</span>, bringing together innovation and creativity under one roof.
              Across two exciting days, students compete in quizzes, debates, gaming, art and more.
              From code to culture, LuMInA celebrates <span className='text-orange-400 font-medium'>talent</span>, <span className='text-pink-400 font-medium'>teamwork</span> and <span className='text-red-500 font-medium'>passion</span>.
            </p>
          </div>

          {/* Countdown Timer */}
          <div className='flex justify-center animate-fade-in' style={{ animationDelay: '0.5s' }}>
            <div className='flex gap-3 md:gap-4'>
              {/* Days */}
              <div className='flex flex-col items-center'>
                <div className='relative group'>
                  <div className='absolute inset-0 bg-gradient-to-br from-red-500/20 to-orange-500/20 rounded-xl blur-lg group-hover:blur-xl transition-all duration-300'></div>
                  <div className='relative bg-zinc-900/80 backdrop-blur-sm border border-red-500/30 rounded-xl px-4 py-3 md:px-6 md:py-4 min-w-[60px] md:min-w-[80px]'>
                    <div className='text-3xl md:text-4xl font-bold bg-gradient-to-br from-red-400 to-orange-400 bg-clip-text text-transparent'>
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
                  <div className='absolute inset-0 bg-gradient-to-br from-orange-500/20 to-pink-500/20 rounded-xl blur-lg group-hover:blur-xl transition-all duration-300'></div>
                  <div className='relative bg-zinc-900/80 backdrop-blur-sm border border-orange-500/30 rounded-xl px-4 py-3 md:px-6 md:py-4 min-w-[60px] md:min-w-[80px]'>
                    <div className='text-3xl md:text-4xl font-bold bg-gradient-to-br from-orange-400 to-pink-400 bg-clip-text text-transparent'>
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
                  <div className='absolute inset-0 bg-gradient-to-br from-pink-500/20 to-red-500/20 rounded-xl blur-lg group-hover:blur-xl transition-all duration-300'></div>
                  <div className='relative bg-zinc-900/80 backdrop-blur-sm border border-pink-500/30 rounded-xl px-4 py-3 md:px-6 md:py-4 min-w-[60px] md:min-w-[80px]'>
                    <div className='text-3xl md:text-4xl font-bold bg-gradient-to-br from-pink-400 to-red-400 bg-clip-text text-transparent'>
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
                  <div className='absolute inset-0 bg-gradient-to-br from-red-500/20 to-orange-500/20 rounded-xl blur-lg group-hover:blur-xl transition-all duration-300'></div>
                  <div className='relative bg-zinc-900/80 backdrop-blur-sm border border-red-500/30 rounded-xl px-4 py-3 md:px-6 md:py-4 min-w-[60px] md:min-w-[80px]'>
                    <div className='text-3xl md:text-4xl font-bold bg-gradient-to-br from-red-400 to-orange-400 bg-clip-text text-transparent'>
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
      </div>

      {/* Divider Line */}
      <div className='max-w-6xl mx-auto my-16'>
        <div className='h-px bg-gradient-to-r from-transparent via-red-500/50 to-transparent'></div>
      </div>

      {/* About College Section */}
      <div className='max-w-6xl mx-auto pb-20'>
        
        {/* College Name Heading */}
        <div className='text-center mb-12'>
          <h2 className='text-3xl md:text-4xl font-bold mb-2'>
            <span className='bg-gradient-to-r from-red-400 via-pink-400 to-orange-400 bg-clip-text text-transparent'>
              ST. MARTIN&apos;S ENGINEERING COLLEGE
            </span>
          </h2>
          <div className='flex justify-center mt-4'>
            <div className='w-32 h-1 bg-gradient-to-r from-red-500 via-pink-500 to-orange-500 rounded-full'></div>
          </div>
        </div>

        {/* College Image */}
        <div className='flex justify-center mb-12'>
          <div className='relative group'>
            <div className='absolute inset-0 bg-gradient-to-r from-red-500/20 via-pink-500/20 to-orange-500/20 rounded-2xl blur-2xl group-hover:blur-3xl transition-all duration-500'></div>
            <div className='relative border border-red-500/30 rounded-2xl overflow-hidden backdrop-blur-sm'>
              <Image 
                src="/smec.jpeg"
                alt="St. Martin's Engineering College"
                width={600}
                height={400}
                className="rounded-2xl transform group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>

        {/* College Description */}
        <div className='max-w-4xl mx-auto text-center'>
          <p className='text-gray-400 text-base md:text-lg leading-relaxed font-light'>
            St. Martin&apos;s Engineering College (SMEC), established in <span className='text-red-400 font-medium'>2002</span> and located at Dhulapally near Kompally, Hyderabad, is a premier autonomous engineering institution affiliated with <span className='text-orange-400 font-medium'>JNTU Hyderabad</span>. Accredited by AICTE, NBA and awarded <span className='text-pink-400 font-medium'>NAAC A+ status</span>, SMEC prides itself on academic rigor and modern infrastructure. Spanning a well-equipped campus of about 17 acres, it offers cutting-edge labs, library resources, sports facilities and student services. With strong industry tie-ups, consistent placement records and holistic student development, SMEC stands as a beacon of <span className='text-red-500 font-medium'>quality education</span> in Hyderabad.
          </p>
        </div>

        {/* Divider Line */}
        <div className='mt-20 max-w-6xl mx-auto my-16'>
          <div className='h-px bg-gradient-to-r from-transparent via-red-500/50 to-transparent'></div>
        </div>

        {/* Special Thanks Section */}
        <div className='mb-16'>
          <h2 className='text-3xl md:text-4xl font-bold text-center mb-12'>
            <span className='bg-gradient-to-r from-red-400 via-pink-400 to-orange-400 bg-clip-text text-transparent'>
              SPECIAL THANKS TO
            </span>
            <div className='flex justify-center mt-4'>
              <div className='mt-1 w-32 h-1 bg-gradient-to-r from-red-500 via-pink-500 to-orange-500 rounded-full'></div>
            </div>
          </h2>
          
          {/* Director */}
          <div className='mt-10 mb-16 flex flex-col md:flex-row gap-8 items-center'>
            <div className='relative group flex-shrink-0 w-64'>
              <div className='absolute inset-0 bg-gradient-to-r from-red-500/20 via-pink-500/20 to-orange-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500'></div>
              <div className='relative border border-red-500/30 rounded-2xl overflow-hidden backdrop-blur-sm'>
                <Image
                  src="/directorSir.png"
                  alt="Dr. Ravindra Kasa"
                  width={300}
                  height={400}
                  className="rounded-2xl w-full h-auto transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <p className='text-center mt-3 text-base font-semibold bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent'>
                Dr. Ravindra Kasa
              </p>
              <p className='text-center text-xs text-gray-400'>Director</p>
            </div>
            
            <div className='flex-1'>
              <p className='text-gray-400 text-base leading-relaxed font-light '>
                Dr. Ravindra Kasa, Director of St. Martin&apos;s Engineering College, is a distinguished academic with degrees from <span className='text-red-400 font-medium'>Andhra University</span>, <span className='text-orange-400 font-medium'>IIT Roorkee (Gold Medalist)</span> and a Ph.D. from Osmania University. With over <span className='text-pink-400 font-medium'>36 years</span> of teaching, research and administrative leadership, he has served as Senior Scientist at Osmania University, Principal & Professor at MRITS, and Dean at Malla Reddy University. A visionary leader who actively mentors and supports students in all aspects, he is dedicated to fostering academic excellence, innovation and holistic development on campus.
              </p>
            </div>
          </div>

          {/* HOD */}
          <div className='flex flex-col md:flex-row gap-8 items-center'>
            <div className='relative group flex-shrink-0 w-48'>
              <div className='absolute inset-0 bg-gradient-to-r from-pink-500/20 via-red-500/20 to-orange-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500'></div>
              <div className='relative border border-pink-500/30 rounded-2xl overflow-hidden backdrop-blur-sm'>
                <Image
                  src="/hod.png"
                  alt="Dr. N. Krishnaiah"
                  width={150}
                  height={100}
                  className="rounded-2xl w-full h-auto transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <p className='text-center mt-3 text-base font-semibold bg-gradient-to-r from-pink-400 to-red-400 bg-clip-text text-transparent'>
                Dr. N. Krishnaiah
              </p>
              <p className='text-center text-xs text-gray-400'>HOD, AI & ML Department</p>
            </div>

            <div className='flex-1'>
              <p className='text-gray-400 text-base leading-relaxed font-light '>
                Dr. N. Krishnaiah, Professor and Head of the <span className='text-red-400 font-medium'>AI & ML Department</span> at St. Martin&apos;s Engineering College, is an accomplished academic and researcher with a Ph.D. in Computer Science & Engineering from JNTUK. Specializing in <span className='text-orange-400 font-medium'>Data Mining</span>, <span className='text-pink-400 font-medium'>Machine Learning</span>, and Computer Networks, he has published numerous papers, authored books, filed patents, and secured AICTE research funding. A recipient of the <span className='text-red-500 font-medium'>Best Faculty Award</span>, Dr. Krishnaiah actively mentors students, promotes innovation, and drives academic excellence while nurturing the department&apos;s growth in cutting-edge technologies.
              </p>
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
