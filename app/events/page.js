'use client'

import React from 'react'
import Image from 'next/image'

const EventsPage = () => {
  const events = [
    // Day 1 Events
    {
      day: "Day 1",
      date: "October 24, 2025",
      time: "10:00 AM - 11:30 AM",
      name: "Inaugural Ceremony",
      description: "Join us for the grand opening of LuMInA 2K25 featuring welcome dance, speeches from dignitaries, Director and HOD, event highlights, and ceremonial candle lighting.",
      location: "Seminar Hall",
      ticket: "Free",
      image: "/inauguration.jpg",
      expectedPeople: "200"
    },
    {
      day: "Day 1",
      date: "October 24, 2025",
      time: "11:30 AM - 12:40 PM",
      name: "TechQuit - Round 1",
      description: "A Technical Quiz competition where students test their knowledge in computer science, electronics, software, hardware, and emerging technologies. Encourages learning, critical thinking, and healthy competition.",
      location: "CC Lab",
      ticket: "₹120/team (Group of 2)",
      image: "/techquit.jpg",
      expectedPeople: "100"
    },
    {
      day: "Day 1",
      date: "October 24, 2025",
      time: "11:30 AM - 12:40 PM",
      name: "Artify - Art Gallery",
      description: "A timed art competition where students create original artworks, showcasing their creativity, skill, and imagination within a specified period.",
      location: "Classroom",
      ticket: "₹50/person",
      image: "/artify.jpg",
      expectedPeople: "40"
    },
    {
      day: "Day 1",
      date: "October 24, 2025",
      time: "1:20 PM - 3:00 PM",
      name: "Logic League - Debate",
      description: "A battle of words, a clash of ideas. Two teams present their views - one in favour and one against the given topic. Focus on latest technologies, innovations, and their impact on society.",
      location: "Classroom",
      ticket: "₹50/person",
      image: "/debate.jpg",
      expectedPeople: "10 Teams"
    },
    {
      day: "Day 1",
      date: "October 24, 2025",
      time: "2:10 PM - 3:50 PM",
      name: "Howzaat - Non-Technical Quiz",
      description: "A fun and engaging event testing general awareness, creativity, communication skills, and quick thinking. An opportunity to shine beyond academics.",
      location: "SCB Block Auditorium",
      ticket: "₹60/team (Group of 2)",
      image: "/quiz.jpg",
      expectedPeople: "300"
    },
    // Day 2 Events
    {
      day: "Day 2",
      date: "October 25, 2025",
      time: "10:00 AM - 11:30 AM",
      name: "Tactical Showdown",
      description: "An electrifying e-sports event featuring Free Fire and BGMI. Gaming enthusiasts showcase their strategic thinking, teamwork, and reflexes in intense competition.",
      location: "Classroom",
      ticket: "₹200/team (4 members)",
      image: "/showdown.jpg",
      expectedPeople: "24 Teams"
    },
    {
      day: "Day 2",
      date: "October 25, 2025",
      time: "11:00 AM - 12:30 PM",
      name: "TechQuit - Round 2",
      description: "Solution Pitching round featuring code building, error detection, debugging questions, and output prediction. Tests knowledge of programming languages and algorithms.",
      location: "CC Lab",
      ticket: "Qualified from Round 1",
      image: "/techquit.jpg",
      expectedPeople: "Qualified Teams"
    },
    {
      day: "Day 2",
      date: "October 25, 2025",
      time: "1:30 PM - 3:30 PM",
      name: "Rangastalam - Cultural Events",
      description: "A platform where students showcase artistic talents through dance performances, melodious singing, instrumental play, and dazzling fashion walk. Express creativity and passion for the arts.",
      location: "Rabindranath Tagore Auditorium",
      ticket: "Dance: ₹60-₹200 | Song: ₹50 | Theme Walk: ₹50 | Audience: ₹60",
      image: "/cultural.jpg",
      expectedPeople: "500"
    },
    {
      day: "Day 2",
      date: "October 25, 2025",
      time: "3:30 PM - 3:50 PM",
      name: "Closing Ceremony",
      description: "Prize distribution and closing remarks celebrating two days of innovation, creativity, and talent at LuMInA 2K25.",
      location: "Rabindranath Tagore Auditorium",
      ticket: "Free",
      image: "/closing.jpg",
      expectedPeople: "500"
    }
  ]

  return (
    <div className='mt-15 min-h-screen px-6 py-20'>
      <div className='max-w-7xl mx-auto'>
        
        {/* Page Header */}
        <div className='text-center mb-16'>
          <h1 className='text-4xl md:text-6xl font-bold mb-4'>
            <span className='bg-gradient-to-r from-red-400 via-pink-400 to-orange-400 bg-clip-text text-transparent'>
              Events Schedule
            </span>
          </h1>
          <p className='text-gray-400 text-lg'>
            Two days of tech, culture, and creativity
          </p>
          <div className='flex justify-center mt-6'>
            <div className='w-32 h-1 bg-gradient-to-r from-red-500 via-pink-500 to-orange-500 rounded-full'></div>
          </div>
        </div>

        {/* Events List */}
        <div className='space-y-8'>
          {events.map((event, index) => (
            <div key={index} className='relative group'>
              {/* Glow Effect */}
              <div className='absolute inset-0 bg-gradient-to-r from-red-500/10 via-pink-500/10 to-orange-500/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>
              
              {/* Event Card */}
              <div className='relative bg-zinc-900/50 backdrop-blur-sm border border-red-500/20 rounded-3xl p-6 hover:border-red-500/40 transition-all duration-300'>
                <div className='grid grid-cols-1 md:grid-cols-12 gap-6 items-center'>
                  
                  {/* Day Box */}
                  <div className='md:col-span-2'>
                    <div className='bg-gradient-to-br from-red-500 to-orange-500 rounded-2xl p-4 text-center'>
                      <div className='text-sm font-bold text-white/80 uppercase tracking-wider'>
                        {event.day}
                      </div>
                      <div className='text-xs text-white/70 mt-1'>
                        {event.date.split(',')[0]}
                      </div>
                      <div className='text-xs text-white/70 mt-2 border-t border-white/20 pt-2'>
                        {event.time}
                      </div>
                    </div>
                  </div>

                  {/* Event Image */}
                  <div className='md:col-span-3'>
                    <div className='relative h-48 rounded-xl overflow-hidden border border-red-500/30'>
                      <Image
                        src={event.image}
                        alt={event.name}
                        fill
                        className='object-cover'
                      />
                    </div>
                  </div>

                  {/* Event Details */}
                  <div className='md:col-span-7'>
                    <h3 className='text-2xl font-bold mb-3'>
                      <span className='bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent'>
                        {event.name}
                      </span>
                    </h3>
                    
                    <p className='text-gray-400 text-sm leading-relaxed mb-4'>
                      {event.description}
                    </p>

                    <div className='flex flex-wrap gap-4 mb-4'>
                      <div className='flex items-center space-x-2'>
                        <span className='text-red-400'>📍</span>
                        <span className='text-sm text-gray-300'>
                          <span className='text-gray-500'>Location:</span> {event.location}
                        </span>
                      </div>
                      <div className='flex items-center space-x-2'>
                        <span className='text-orange-400'>🎫</span>
                        <span className='text-sm text-gray-300'>
                          <span className='text-gray-500'>Ticket:</span> {event.ticket}
                        </span>
                      </div>
                    </div>

                    {/* Register Button */}
                    {event.name !== "Inaugural Ceremony" && 
                     event.name !== "TechQuit - Round 2" && 
                     event.name !== "Closing Ceremony" && (
                      <button className='relative px-6 py-2.5 rounded-full overflow-hidden group/btn'>
                        <span className='absolute inset-0 bg-gradient-to-r from-red-500 to-orange-500 transition-transform duration-300 group-hover/btn:scale-105'></span>
                        <span className='absolute inset-0 bg-gradient-to-r from-red-400 to-orange-400 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300'></span>
                        <span className='relative z-10 text-white font-semibold text-sm uppercase tracking-wider'>
                          Register Now
                        </span>
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
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

export default EventsPage