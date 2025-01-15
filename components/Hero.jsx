'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import Link from 'next/link'

export default function Hero() {
  const canvasRef = useRef(null)
  const titleRef = useRef(null)
  const subtitleRef = useRef(null)
  const buttonRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const particles = []
    const particleCount = 100

    function Particle() {
      this.x = Math.random() * canvas.width
      this.y = Math.random() * canvas.height
      this.size = Math.random() * 5 + 1
      this.speedX = Math.random() * 2 - 1.5
      this.speedY = Math.random() * 2 - 1.5

      this.update = function() {
        this.x += this.speedX
        this.y += this.speedY

        if (this.size > 0.2) this.size -= 0.1
      }

      this.draw = function() {
        ctx.fillStyle = 'rgba(255, 255, 255, 0.8)'
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.8)'
        ctx.lineWidth = 2

        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.closePath()
        ctx.fill()
      }
    }

    function init() {
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle())
      }
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      for (let i = 0; i < particles.length; i++) {
        particles[i].update()
        particles[i].draw()

        if (particles[i].size <= 0.2) {
          particles.splice(i, 1)
          i--
          particles.push(new Particle())
        }
      }
      requestAnimationFrame(animate)
    }

    init()
    animate()

    return () => {
      cancelAnimationFrame(animate)
    }
  }, [])

  useEffect(() => {
    const tl = gsap.timeline()

    tl.from(titleRef.current, {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
    })
    .from(subtitleRef.current, {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
    }, '-=0.5')
    .from(buttonRef.current, {
      scale: 0,
      opacity: 0,
      duration: 0.5,
      ease: 'back.out(1.7)',
    }, '-=0.5')
  }, [])

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0" />
      <div className="relative z-10 text-center">
        <h1 ref={titleRef} className="text-3xl mx-5 font-serif text-white md:text-5xl lg:text-7xl font-bold mb-4">
          Chemical Engineering Society
        </h1>
        <p ref={subtitleRef} className="text-md  lg:text-2xl md:text-xl mb-8">
          Innovating the future of chemical engineering
        </p>
        <Link
          href="/about"
          ref={buttonRef}
          className="bg-yellow-500 font-sans  text-black px-8 py-3 rounded-full text-lg font-bold hover:bg-yellow-300 transition-colors duration-300"
        >
          About Us
        </Link>
      </div>
    </section>
  )
}

