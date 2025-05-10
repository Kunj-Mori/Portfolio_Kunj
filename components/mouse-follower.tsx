"use client"

import { useState, useEffect } from "react"

export default function MouseFollower() {
  const [mounted, setMounted] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    setMounted(true)
    
    const updateMousePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
      if (!isVisible) setIsVisible(true)
    }

    const handleMouseEnter = () => {
      setIsVisible(true)
    }

    const handleMouseLeave = () => {
      setIsVisible(false)
    }

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button")
      ) {
        setIsHovering(true)
      } else {
        setIsHovering(false)
      }
    }

    window.addEventListener("mousemove", updateMousePosition)
    window.addEventListener("mouseenter", handleMouseEnter)
    window.addEventListener("mouseleave", handleMouseLeave)
    document.addEventListener("mouseover", handleMouseOver)

    return () => {
      window.removeEventListener("mousemove", updateMousePosition)
      window.removeEventListener("mouseenter", handleMouseEnter)
      window.removeEventListener("mouseleave", handleMouseLeave)
      document.removeEventListener("mouseover", handleMouseOver)
    }
  }, [])

  if (!mounted) return null

  return mounted ? (
    <div
      className={`fixed pointer-events-none z-50 rounded-full transition-[width,height,opacity] duration-200 ${
        isHovering ? "w-16 h-16 opacity-20" : "w-6 h-6 opacity-30"
      } ${isVisible ? "opacity-30" : "opacity-0"} bg-primary`}
      style={{
        transform: `translate(${position.x - (isHovering ? 32 : 12)}px, ${
          position.y - (isHovering ? 32 : 12)
        }px)`
      }}
    />
  ) : null
}
