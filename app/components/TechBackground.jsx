'use client'

import React, { useEffect, useRef } from 'react'

const TechBackground = () => {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    let animationFrameId
    let stars = []

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    class Star {
      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.size = Math.random() * 3 + 1   // Increased size range
        this.speed = Math.random() * 0.2 + 0.05
        this.opacity = Math.random() * 0.8 + 0.2
        this.opacityDirection = Math.random() > 0.5 ? 1 : -1
      }

      update() {
        this.opacity += 0.005 * this.opacityDirection
        if (this.opacity >= 1 || this.opacity <= 0.2) this.opacityDirection *= -1
        this.x -= this.speed
        if (this.x < 0) this.x = canvas.width
      }

      draw() {
        ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    const initStars = () => {
      stars = []
      const numberOfStars = Math.floor((canvas.width * canvas.height) / 8000)
      for (let i = 0; i < numberOfStars; i++) {
        stars.push(new Star())
      }
    }
    initStars()

    const animate = () => {
      ctx.fillStyle = 'black'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      stars.forEach(star => {
        star.update()
        star.draw()
      })

      animationFrameId = requestAnimationFrame(animate)
    }
    animate()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <>
      <canvas
        ref={canvasRef}
        className="fixed top-0 left-0 w-full h-full -z-10"
      />

      {/* Optional subtle glow overlay for stars */}
      <div className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent" />
      </div>
    </>
  )
}

export default TechBackground
