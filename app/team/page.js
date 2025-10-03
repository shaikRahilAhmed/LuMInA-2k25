'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import HeadContent from '../head/page'
import TeamsContent from '../teams/page'
import VolunteersContent from '../volunteers/page'

import Link from 'next/link'

const Team = () => {
  const [activeTab, setActiveTab] = useState('head')

  const tabs = [
    { id: 'head', label: 'Head', Component: HeadContent },
    { id: 'teams', label: 'Teams', Component: TeamsContent },
    { id: 'volunteers', label: 'Volunteers', Component: VolunteersContent },
  ]

  return (
    <div className="px-6 max-w-6xl mx-auto pb-20">
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
      <div className="text-center max-w-4xl mx-auto mb-12">
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

          <div className="flex-1">
            <p className="text-gray-400 text-base leading-relaxed font-light">
              Mr. B. Ramesh, our esteemed Faculty Coordinator, is a dedicated computer science faculty with expertise in deep learning, highlighted by his paper on predicting Parkinson's disease progression. He has actively participated in national-level workshops on machine learning and data science and is currently pursuing a Ph.D. in artificial intelligence and computing at Amrita Vishwa Vidyapeetam, Amaravati. Throughout LuMInA 25, he guided our team with constant support and mentorship, ensuring smooth execution, valuable learning, and the event&apos;s successful realization.
            </p>
          </div>
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
    </div>
  )
}

export default Team
