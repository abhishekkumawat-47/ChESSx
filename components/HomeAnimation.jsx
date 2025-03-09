'use client'

import { useEffect, useRef } from 'react'

export default function HomeAnimation() {
  const canvasRef = useRef(null)

  useEffect(() => {
    // Handle canvas animation with improved particle effects
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Make canvas responsive with higher resolution
    function resizeCanvas() {
      const dpr = window.devicePixelRatio || 1
      canvas.width = window.innerWidth * dpr
      canvas.height = window.innerHeight * dpr
      canvas.style.width = `${window.innerWidth}px`
      canvas.style.height = `${window.innerHeight}px`
      ctx.scale(dpr, dpr)
    }

    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    const particles = []
    // Adjust particle count based on device performance
    const isMobile = window.innerWidth < 768
    const particleCount = isMobile ? 50 : Math.min(window.innerWidth / 15, 120)
    // Updated colors to match the new theme
    const colors = ['rgba(255, 255, 255, 0.8)', 'rgba(255, 165, 0, 0.6)', 'rgba(255, 215, 0, 0.6)']
    const connectionDistance = isMobile ? 100 : 150

    function Particle() {
      this.x = Math.random() * window.innerWidth
      this.y = Math.random() * window.innerHeight
      this.size = Math.random() * 4 + 1
      this.baseSize = this.size
      this.speedX = Math.random() * 1 - 0.5
      this.speedY = Math.random() * 1 - 0.5
      this.color = colors[Math.floor(Math.random() * colors.length)]
      
      this.update = function() {
        // Update position without mouse attraction
        this.x += this.speedX
        this.y += this.speedY
        
        // Improved edge wrapping with smoother transition
        if (this.x < -50) this.x = window.innerWidth + 50
        if (this.x > window.innerWidth + 50) this.x = -50
        if (this.y < -50) this.y = window.innerHeight + 50
        if (this.y > window.innerHeight + 50) this.y = -50
      }

      this.draw = function() {
        ctx.fillStyle = this.color
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.closePath()
        ctx.fill()
      }
    }

    // Optimized connection drawing with limit per particle
    function drawConnections() {
      for (let i = 0; i < particles.length; i++) {
        let connectionsDrawn = 0
        const maxConnections = 5 // Limit connections per particle for performance
        
        for (let j = i + 1; j < particles.length && connectionsDrawn < maxConnections; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)
          
          if (distance < connectionDistance) {
            ctx.beginPath()
            // Updated connection color to white with opacity
            ctx.strokeStyle = `rgba(255, 255, 255, ${0.2 * (1 - distance / connectionDistance)})`
            ctx.lineWidth = 0.5
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.stroke()
            connectionsDrawn++
          }
        }
      }
    }

    function init() {
      particles.length = 0 // Clear existing particles on resize
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle())
      }
    }

    let animationFrame
    function animate() {
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight)
      
      for (let i = 0; i < particles.length; i++) {
        particles[i].update()
        particles[i].draw()
      }
      
      drawConnections()
      animationFrame = requestAnimationFrame(animate)
    }

    init()
    animate()

    // Reinitialize particles on resize for better responsiveness
    const handleResize = () => {
      resizeCanvas()
      init()
    }
    
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      window.removeEventListener('resize', handleResize)
      cancelAnimationFrame(animationFrame)
    }
  }, [])



  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-gradient-to-b from-black via-black to-gray-900">
      <canvas ref={canvasRef} className="absolute inset-0" />
      
      {/* Responsive decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 w-full h-16 sm:h-24 md:h-32 bg-gradient-to-t from-black/30 to-transparent pointer-events-none"></div>
      <div className="absolute top-10 right-10 w-16 sm:w-24 md:w-32 h-16 sm:h-24 md:h-32 rounded-full bg-orange-500/20 blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 left-10 w-24 sm:w-32 md:w-48 h-24 sm:h-32 md:h-48 rounded-full bg-yellow-400/10 blur-3xl pointer-events-none"></div>
      
      {/* Additional responsive decorative elements */}
      <div className="absolute top-1/4 left-1/4 w-12 sm:w-16 h-12 sm:h-16 rounded-full bg-orange-500/10 blur-2xl pointer-events-none hidden sm:block"></div>
      <div className="absolute bottom-1/3 right-1/4 w-16 sm:w-24 h-16 sm:h-24 rounded-full bg-yellow-300/10 blur-2xl pointer-events-none hidden sm:block"></div>
    </section>
  )
}