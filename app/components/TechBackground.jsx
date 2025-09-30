'use client'

import React, { useEffect, useRef } from 'react'

const TechBackground = () => {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    let animationFrameId
    let particles = []

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    // Particle class
    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.size = Math.random() * 2 + 0.5
        this.speedX = Math.random() * 0.5 - 0.25
        this.speedY = Math.random() * 0.5 - 0.25
        this.opacity = Math.random() * 0.5 + 0.2
      }

      update() {
        this.x += this.speedX
        this.y += this.speedY

        if (this.x > canvas.width) this.x = 0
        if (this.x < 0) this.x = canvas.width
        if (this.y > canvas.height) this.y = 0
        if (this.y < 0) this.y = canvas.height
      }

      draw() {
        ctx.fillStyle = `rgba(34, 211, 238, ${this.opacity})`
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    // Create particles
    const initParticles = () => {
      particles = []
      const numberOfParticles = Math.floor((canvas.width * canvas.height) / 15000)
      for (let i = 0; i < numberOfParticles; i++) {
        particles.push(new Particle())
      }
    }
    initParticles()

    // Connect particles
    const connectParticles = () => {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 120) {
            ctx.strokeStyle = `rgba(34, 211, 238, ${0.15 * (1 - distance / 120)})`
            ctx.lineWidth = 0.5
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.stroke()
          }
        }
      }
    }

    // Animation loop
    const animate = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      particles.forEach(particle => {
        particle.update()
        particle.draw()
      })

      connectParticles()
      animationFrameId = requestAnimationFrame(animate)
    }
    animate()

    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <>
      {/* Canvas for particles */}
      <canvas
        ref={canvasRef}
        className="fixed top-0 left-0 w-full h-full -z-10"
        style={{ background: 'black' }}
      />

      {/* Gradient overlays */}
      <div className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none">
        {/* Radial gradient from top */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-radial from-cyan-500/20 via-transparent to-transparent blur-3xl" />
        
        {/* Radial gradient from bottom right */}
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-gradient-radial from-blue-500/15 via-transparent to-transparent blur-3xl" />
        
        {/* Radial gradient from left */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-radial from-purple-500/10 via-transparent to-transparent blur-3xl" />

        {/* Grid overlay */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(34, 211, 238, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(34, 211, 238, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        />

        {/* Noise texture */}
        <div 
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 400 400\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")'
          }}
        />

        {/* Vignette effect */}
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black/60" />
      </div>
    </>
  )
}

export default TechBackground