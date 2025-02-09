"use client"

import { useState } from "react"
import { motion, useAnimation, useAnimationFrame } from "framer-motion"
import Image from "next/image"

const logos = [
  {
    name: "v0",
    image: "/placeholder.svg?height=40&width=100",
    width: 100,
  },
  {
    name: "Vercel",
    image: "/placeholder.svg?height=40&width=120",
    width: 120,
  },
  {
    name: "Cursor",
    image: "/placeholder.svg?height=40&width=110",
    width: 110,
  },
  {
    name: "Windsurf",
    image: "/placeholder.svg?height=40&width=130",
    width: 130,
  },
  {
    name: "GitHub Copilot",
    image: "/placeholder.svg?height=40&width=140",
    width: 140,
  },
  {
    name: "Amazon CodeWhisperer",
    image: "/placeholder.svg?height=40&width=150",
    width: 150,
  },
]

// Duplicate logos to create seamless loop
const duplicatedLogos = [...logos, ...logos]

export function LogoCarousel() {
  const [hovering, setHovering] = useState(false)
  const controls = useAnimation()
  const [scrollX, setScrollX] = useState(0)

  // Calculate total width of all logos plus gaps
  const totalWidth = logos.reduce((acc, logo) => acc + logo.width + 64, 0) // 64px for gap

  useAnimationFrame((time) => {
    if (!hovering) {
      // Move 50px per second
      setScrollX((prev) => {
        const newScrollX = prev - 1
        // Reset position when we've scrolled the width of the original logos
        return newScrollX <= -totalWidth ? 0 : newScrollX
      })
    }
  })

  return (
    <div className="w-full pb-12 pt-14 bg-secondary/30">
      <div className="container mx-auto px-4">
        <h3 className="text-center text-2xl font-semibold mb-8">Powered by Leading AI Engineering Tools</h3>
        <div
          className="relative overflow-hidden"
          onMouseEnter={() => setHovering(true)}
          onMouseLeave={() => setHovering(false)}
        >
          <motion.div
            className="flex items-center gap-16"
            animate={{ x: scrollX }}
            transition={{ type: "tween", ease: "linear" }}
          >
            {duplicatedLogos.map((logo, idx) => (
              <div key={`${logo.name}-${idx}`} className="flex-shrink-0 relative group" style={{ width: logo.width }}>
                <Image
                  src={logo.image || "/placeholder.svg"}
                  alt={logo.name}
                  width={logo.width}
                  height={40}
                  className="object-contain transition-opacity group-hover:opacity-80"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-sm font-medium bg-white/90 dark:bg-black/90 px-2 py-1 rounded-md shadow-sm">
                    {logo.name}
                  </span>
                </div>
              </div>
            ))}
          </motion.div>
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white dark:from-neutral-950 to-transparent pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white dark:from-neutral-950 to-transparent pointer-events-none" />
        </div>
      </div>
    </div>
  )
}

