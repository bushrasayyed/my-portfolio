"use client"

import { useEffect, useRef } from "react"

export default function StarField() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    const stars: Array<{
      x: number
      y: number
      size: number
      opacity: number
      twinkleSpeed: number
      color: string
    }> = []

    const shootingStars: Array<{
      x: number
      y: number
      length: number
      speed: number
      angle: number
      opacity: number
    }> = []

    for (let i = 0; i < 300; i++) {
      const colors = ["#ffffff", "#00ffff", "#00ff88", "#88ff00", "#ffff00"]
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 3 + 0.5,
        opacity: Math.random(),
        twinkleSpeed: Math.random() * 0.02 + 0.005,
        color: colors[Math.floor(Math.random() * colors.length)],
      })
    }

    // Create shooting stars
    const createShootingStar = () => {
      if (Math.random() < 0.003) {
        shootingStars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height * 0.5,
          length: Math.random() * 80 + 20,
          speed: Math.random() * 6 + 4,
          angle: (Math.random() * Math.PI) / 4 + Math.PI / 4,
          opacity: 1,
        })
      }
    }

    const hexToRgba = (hex: string, alpha: number) => {
      const r = Number.parseInt(hex.slice(1, 3), 16)
      const g = Number.parseInt(hex.slice(3, 5), 16)
      const b = Number.parseInt(hex.slice(5, 7), 16)
      return `rgba(${r}, ${g}, ${b}, ${alpha})`
    }

    let animationId: number

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw regular stars
      stars.forEach((star) => {
        star.opacity += star.twinkleSpeed
        if (star.opacity > 1 || star.opacity < 0.1) {
          star.twinkleSpeed = -star.twinkleSpeed
        }

        ctx.beginPath()
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2)

        const gradient = ctx.createRadialGradient(star.x, star.y, 0, star.x, star.y, star.size * 3)
        gradient.addColorStop(0, hexToRgba(star.color, star.opacity))
        gradient.addColorStop(1, "transparent")

        ctx.fillStyle = gradient
        ctx.fill()

        ctx.beginPath()
        ctx.arc(star.x, star.y, star.size * 0.5, 0, Math.PI * 2)
        ctx.fillStyle = hexToRgba(star.color, star.opacity)
        ctx.fill()
      })

      createShootingStar()

      shootingStars.forEach((shootingStar, index) => {
        const dx = Math.cos(shootingStar.angle) * shootingStar.speed
        const dy = Math.sin(shootingStar.angle) * shootingStar.speed

        shootingStar.x += dx
        shootingStar.y += dy
        shootingStar.opacity -= 0.01

        if (shootingStar.opacity <= 0 || shootingStar.x > canvas.width || shootingStar.y > canvas.height) {
          shootingStars.splice(index, 1)
          return
        }

        // Draw shooting star trail
        const gradient = ctx.createLinearGradient(
          shootingStar.x,
          shootingStar.y,
          shootingStar.x - (dx * shootingStar.length) / shootingStar.speed,
          shootingStar.y - (dy * shootingStar.length) / shootingStar.speed,
        )
        gradient.addColorStop(0, `rgba(255, 255, 255, ${shootingStar.opacity})`)
        gradient.addColorStop(1, "transparent")

        ctx.beginPath()
        ctx.moveTo(shootingStar.x, shootingStar.y)
        ctx.lineTo(
          shootingStar.x - (dx * shootingStar.length) / shootingStar.speed,
          shootingStar.y - (dy * shootingStar.length) / shootingStar.speed,
        )
        ctx.strokeStyle = gradient
        ctx.lineWidth = 2
        ctx.stroke()
      })

      animationId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{
        background: "radial-gradient(ellipse at center, rgba(20, 30, 60, 0.4) 0%, rgba(0, 0, 0, 0.9) 100%)",
      }}
    />
  )
}
