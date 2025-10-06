'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import HeadContent from '../head/page'
import TeamsContent from '../teams/page'
import VolunteersContent from '../volunteers/page'
import { Instagram, Linkedin } from 'lucide-react'

const Team = () => {
  const [activeTab, setActiveTab] = useState('head')

  const tabs = [
    { id: 'head', label: 'Head', Component: HeadContent },
    { id: 'teams', label: 'Teams', Component: TeamsContent },
    { id: 'volunteers', label: 'Volunteers', Component: VolunteersContent },
  ]

  return (
    <div className="px-4 max-w-5xl mx-auto pb-20">
      {/* Headline */}
      <div className="text-center mb-12 mt-10">
        <h2 className="mt-35 text-3xl md:text-4xl font-bold mb-2">
          <span className="bg-gradient-to-r from-red-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">
            LuMInA 25 – TEAM
          </span>
        </h2>
        <div className="flex justify-center mt-4">
          <div className="w-32 h-1 bg-gradient-to-r from-red-500 via-pink-500 to-orange-500 rounded-full"></div>
        </div>
      </div>

      {/* About Team */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <p className="text-gray-400 text-base md:text-lg leading-relaxed font-light">
          Our team has poured their heart and soul into making this event a reality.
          Every member from every domain worked with full passion, dedication, and creativity —
          collaborating tirelessly to build something truly special.
          Their collective effort and commitment are the driving force behind the success of this event.
        </p>
      </div>

      {/* Divider Line */}
      <div className="my-16">
        <div className="h-px bg-gradient-to-r from-transparent via-red-500/50 to-transparent"></div>
      </div>

      {/* Faculty Coordinator */}
      <div className="mb-16">
  <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
    <span className="bg-gradient-to-r from-red-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">
      FACULTY COORDINATOR
    </span>
    <div className="flex justify-center mt-4">
      <div className="mt-1 w-32 h-1 bg-gradient-to-r from-red-500 via-pink-500 to-orange-500 rounded-full"></div>
    </div>
  </h2>

  <div className="flex flex-col md:flex-row gap-8 items-center">
    {/* Photo + Name */}
    <div className="relative group flex-shrink-0 w-32">
      <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 via-red-500/20 to-orange-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
      <div className="relative border border-pink-500/30 rounded-2xl overflow-hidden backdrop-blur-sm">
        <Image
          src="/faculty.png"
          alt="Mr. B. Ramesh"
          width={100}
          height={80}
          className="rounded-2xl w-full h-auto transform group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <p className="text-center mt-3 text-sm font-semibold bg-gradient-to-r from-pink-400 to-red-400 bg-clip-text text-transparent">
        Mr. B. Ramesh
      </p>
      <p className="text-center text-xs text-gray-400">Faculty Coordinator</p>
    </div>

    {/* Description */}
    <div className="flex-1">
      <p className="text-gray-400 text-base leading-relaxed font-light">
        Mr. B. Ramesh, our esteemed Faculty Coordinator, is a dedicated computer
        science faculty with expertise in deep learning, highlighted by his
        paper on predicting Parkinson&apos;s disease progression. He has actively
        participated in national-level workshops on machine learning and data
        science and is currently pursuing a Ph.D. in artificial intelligence and
        computing at Amrita Vishwa Vidyapeetam, Amaravati. Throughout LuMInA 25,
        he guided our team with constant support and mentorship, ensuring smooth
        execution, valuable learning, and the event&apos;s successful realization.
      </p>
    </div>
  </div>
</div>


      {/* Divider Line */}
      <div className="my-16">
        <div className="h-px bg-gradient-to-r from-transparent via-red-500/50 to-transparent"></div>
      </div>

      {/* Student Coordinators */}
      <div className="mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          <span className="bg-gradient-to-r from-red-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">
            STUDENT COORDINATORS
          </span>
          <div className="flex justify-center mt-4">
            <div className="mt-1 w-32 h-1 bg-gradient-to-r from-red-500 via-pink-500 to-orange-500 rounded-full"></div>
          </div>
        </h2>

        {/* now two columns even on small devices */}
        <div className="grid grid-cols-2 gap-6 max-w-2xl mx-auto">
          {[
            {
              name: 'Keerthi',
              year: 'AIML 3rd Year',
              image: '/keerthi.jpg',
              instagram: 'https://instagram.com/keerthi',
              linkedin: 'https://linkedin.com/in/keerthi'
            },
            {
              name: 'Sushanth',
              year: 'AIML 4th Year',
              image: '/sushanth.jpg',
              instagram: 'https://instagram.com/sushanth',
              linkedin: 'https://linkedin.com/in/sushanth'
            }
          ].map((coordinator, index) => (
            <div key={index} className="relative perspective-1000">
              <div className="relative w-full h-80 transition-transform duration-700 preserve-3d group hover:rotate-y-180">
                {/* Front */}
                <div className="absolute inset-0 backface-hidden">
                  <div className="relative h-full bg-zinc-900/50 backdrop-blur-sm border border-red-500/20 rounded-2xl overflow-hidden">
                    <div className="relative h-56 overflow-hidden">
                      <Image
                        src={coordinator.image}
                        alt={coordinator.name}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent"></div>
                    </div>
                    <div className="relative p-4 text-center">
                      <h3 className="text-lg font-bold mb-1">
                        <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
                          {coordinator.name}
                        </span>
                      </h3>
                      <p className="text-sm text-gray-400">{coordinator.year}</p>
                    </div>
                  </div>
                </div>
                {/* Back */}
                <div className="absolute inset-0 backface-hidden rotate-y-180">
                  <div className="relative h-full bg-gradient-to-br from-red-500 to-orange-500 rounded-2xl overflow-hidden flex flex-col items-center justify-center p-6">
                    <h3 className="text-xl font-bold text-white mb-2 text-center">
                      {coordinator.name}
                    </h3>
                    <p className="text-sm text-white/80 mb-6 text-center">{coordinator.year}</p>
                    <div className="flex space-x-4">
                      <a
                        href={coordinator.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Instagram className="w-6 h-6 text-white" />
                      </a>
                      <a
                        href={coordinator.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Linkedin className="w-6 h-6 text-white" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Divider Line */}
      <div className="my-16">
        <div className="h-px bg-gradient-to-r from-transparent via-red-500/50 to-transparent"></div>
      </div>

      {/* Secondary Navbar / Tabs */}
      <div className="flex justify-center mb-8">
        <div className="flex items-center space-x-6 bg-white/5 backdrop-blur-sm rounded-full px-4 py-2 border border-white/10">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeTab === tab.id
                  ? 'text-red-400'
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              {tab.label}
              {activeTab === tab.id && (
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-red-400 to-pink-400 rounded-full"></span>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Render active tab content */}
      <div className="mt-8">
        {tabs.map(tab => tab.id === activeTab && <tab.Component key={tab.id} />)}
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

export default Team
