'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { Instagram, Linkedin } from 'lucide-react'

const TeamPage = () => {
  const [flippedCard, setFlippedCard] = useState(null)

  const teamMembers = [
    // Marketing
    
    {
      name: "D. Dharma Teja",
      domain: "Marketing",
      image: "/team/member2.jpg",
      instagram: "https://instagram.com/username",
      linkedin: "https://linkedin.com/in/username"
    },
    {
      name: "Manaswini",
      domain: "Marketing",
      image: "/team/member3.jpg",
      instagram: "https://instagram.com/username",
      linkedin: "https://linkedin.com/in/username"
    },
    {
      name: "Sravani",
      domain: "Marketing",
      image: "/team/member4.jpg",
      instagram: "https://instagram.com/username",
      linkedin: "https://linkedin.com/in/username"
    },
    // Designing & Editing
    
    {
      name: "Yash",
      domain: "Designing & Editing",
      image: "/team/member6.jpg",
      instagram: "https://instagram.com/username",
      linkedin: "https://linkedin.com/in/username"
    },
    // Finance
    {
      name: "Sameeksha",
      domain: "Finance",
      image: "/team/member7.jpg",
      instagram: "https://instagram.com/username",
      linkedin: "https://linkedin.com/in/username"
    },
    
    {
      name: "Ruthika",
      domain: "Finance",
      image: "/team/member9.jpg",
      instagram: "https://instagram.com/username",
      linkedin: "https://linkedin.com/in/username"
    },
    // Photography
    
    // Event Planning
  
    {
      name: "Rahil",
      domain: "Event Planning",
      image: "/team/member12.jpg",
      instagram: "https://instagram.com/username",
      linkedin: "https://linkedin.com/in/username"
    },
    {
      name: "Tharuni Sai",
      domain: "Event Planning",
      image: "/team/member13.jpg",
      instagram: "https://instagram.com/username",
      linkedin: "https://linkedin.com/in/username"
    },
    {
      name: "Keerthi",
      domain: "Event Planning",
      image: "/team/member14.jpg",
      instagram: "https://instagram.com/username",
      linkedin: "https://linkedin.com/in/username"
    },
    // Logistics
    {
      name: "Manish",
      domain: "Logistics",
      image: "/team/member15.jpg",
      instagram: "https://instagram.com/username",
      linkedin: "https://linkedin.com/in/username"
    },
    {
      name: "Abhinay",
      domain: "Logistics",
      image: "/team/member16.jpg",
      instagram: "https://instagram.com/username",
      linkedin: "https://linkedin.com/in/username"
    },
   
    // Permission
   
    {
      name: "Srihitha",
      domain: "Permission",
      image: "/team/member19.jpg",
      instagram: "https://instagram.com/username",
      linkedin: "https://linkedin.com/in/username"
    },
    // Technical
    {
      name: "Karthikeya",
      domain: "Technical",
      image: "/team/member20.jpg",
      instagram: "https://instagram.com/username",
      linkedin: "https://linkedin.com/in/username"
    },
    {
      name: "Kaushik",
      domain: "Technical",
      image: "/team/member21.jpg",
      instagram: "https://instagram.com/username",
      linkedin: "https://linkedin.com/in/username"
    },
    {
      name: "Sai Kumar",
      domain: "Technical",
      image: "/team/member22.jpg",
      instagram: "https://instagram.com/username",
      linkedin: "https://linkedin.com/in/username"
    }
  ]

  return (
    <div className='min-h-screen px-6 py-20'>
      <div className='max-w-7xl mx-auto'>
        
        {/* Page Header */}
        <div className='text-center mb-16'>
          <h1 className='text-4xl md:text-6xl font-bold mb-4'>
            <span className='bg-gradient-to-r from-red-400 via-pink-400 to-orange-400 bg-clip-text text-transparent'>
              Our Team
            </span>
          </h1>
          <p className='text-gray-400 text-lg'>
            Meet the brilliant minds behind LuMInA 2K25
          </p>
          <div className='flex justify-center mt-6'>
            <div className='w-32 h-1 bg-gradient-to-r from-red-500 via-pink-500 to-orange-500 rounded-full'></div>
          </div>
        </div>

        {/* Team Grid */}
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className='relative perspective-1000'
              onMouseEnter={() => setFlippedCard(index)}
              onMouseLeave={() => setFlippedCard(null)}
            >
              <div className={`relative w-full h-80 transition-transform duration-700 preserve-3d ${
                flippedCard === index ? 'rotate-y-180' : ''
              }`}>
                
                {/* Front Side */}
                <div className='absolute inset-0 backface-hidden'>
                  <div className='relative h-full bg-zinc-900/50 backdrop-blur-sm border border-red-500/20 rounded-2xl overflow-hidden group hover:border-red-500/40 transition-all duration-300'>
                    {/* Glow Effect */}
                    <div className='absolute inset-0 bg-gradient-to-br from-red-500/10 to-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>
                    
                    {/* Image */}
                    <div className='relative h-56 overflow-hidden'>
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className='object-cover'
                      />
                      <div className='absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent'></div>
                    </div>

                    {/* Info */}
                    <div className='relative p-4 text-center'>
                      <h3 className='text-lg font-bold mb-1'>
                        <span className='bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent'>
                          {member.name}
                        </span>
                      </h3>
                      <p className='text-sm text-gray-400'>{member.domain}</p>
                    </div>
                  </div>
                </div>

                {/* Back Side */}
                <div className='absolute inset-0 backface-hidden rotate-y-180'>
                  <div className='relative h-full bg-gradient-to-br from-red-500 to-orange-500 rounded-2xl overflow-hidden flex flex-col items-center justify-center p-6'>
                    <h3 className='text-xl font-bold text-white mb-2 text-center'>
                      {member.name}
                    </h3>
                    <p className='text-sm text-white/80 mb-6 text-center'>{member.domain}</p>
                    
                    <div className='flex space-x-4'>
                      {/* Instagram */}
                      <a
                        href={member.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className='w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110'
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Instagram className='w-6 h-6 text-white' />
                      </a>

                      {/* LinkedIn */}
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className='w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110'
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Linkedin className='w-6 h-6 text-white' />
                      </a>
                    </div>
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

        .perspective-1000 {
          perspective: 1000px;
        }

        .preserve-3d {
          transform-style: preserve-3d;
        }

        .backface-hidden {
          backface-visibility: hidden;
        }

        .rotate-y-180 {
          transform: rotateY(180deg);
        }
      `}</style>
    </div>
  )
}

export default TeamPage