"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Twitter, ChevronDown } from "lucide-react"
import { TypeAnimation } from "react-type-animation"
import Image from "next/image"

export default function Hero() {
  const parallaxRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!parallaxRef.current) return

      const layers = parallaxRef.current.querySelectorAll(".parallax-layer")
      const centerX = window.innerWidth / 2
      const centerY = window.innerHeight / 2
      const mouseX = e.clientX - centerX
      const mouseY = e.clientY - centerY

      layers.forEach((layer, i) => {
        const depth = (i + 1) * 0.01
        const moveX = mouseX * depth
        const moveY = mouseY * depth
        ;(layer as HTMLElement).style.transform = `translate(${moveX}px, ${moveY}px)`
      })
    }

    document.addEventListener("mousemove", handleMouseMove)
    return () => document.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const handleDownloadResume = () => {
    // Replace with your actual resume file path
    window.open("/resume.pdf", "_blank")
  }

  const handleViewProjects = () => {
    document.querySelector("#projects")?.scrollIntoView({
      behavior: "smooth",
    })
  }

  const handleSocialClick = (url: string) => {
    window.open(url, "_blank")
  }

  const handleScrollDown = () => {
    document.querySelector("#about")?.scrollIntoView({
      behavior: "smooth",
    })
  }

  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-background/50" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(var(--primary-rgb),0.1)_0,rgba(var(--background-rgb),0)_50%)]" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-20 right-10 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "-2s" }}
        />

        {/* Animated shapes */}
        <div
          className="absolute top-1/4 left-1/4 w-4 h-4 bg-primary/30 rounded-full animate-float"
          style={{ animationDuration: "6s" }}
        />
        <div
          className="absolute top-1/3 right-1/4 w-6 h-6 bg-primary/20 rounded-full animate-float"
          style={{ animationDuration: "8s" }}
        />
        <div
          className="absolute bottom-1/4 left-1/3 w-8 h-8 bg-primary/10 rounded-full animate-float"
          style={{ animationDuration: "10s" }}
        />
        <div
          className="absolute top-2/3 right-1/3 w-5 h-5 bg-primary/20 rounded-full animate-float"
          style={{ animationDuration: "7s" }}
        />
      </div>

      <div ref={parallaxRef} className="container mx-auto px-4 relative parallax">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="parallax-layer">
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-in"
              style={{ animationDelay: "0.2s" }}
            >
              Hi, I'm <span className="text-primary">Kunj Mori</span>
            </h1>
            <div
              className="text-xl md:text-2xl lg:text-3xl font-medium mb-6 h-12 animate-in"
              style={{ animationDelay: "0.4s" }}
            >
              <TypeAnimation
                sequence={["Full Stack Developer", 1000, "AI-ML Developer", 1000, "Web Developer", 1000]}
                wrapper="span"
                speed={50}
                repeat={Number.POSITIVE_INFINITY}
              />
            </div>
            <p className="text-muted-foreground text-lg mb-8 max-w-lg animate-in" style={{ animationDelay: "0.6s" }}>
            "The only way to do great work is to love what you do."
            </p>
            <div className="flex flex-wrap gap-4 animate-in" style={{ animationDelay: "0.8s" }}>
              <Button size="lg" className="rounded-full animate-pulse-border" onClick={handleDownloadResume}>
                Download Resume
              </Button>
              <Button size="lg" variant="outline" className="rounded-full animate-pulse-border" onClick={handleViewProjects}>
                View Projects
              </Button>
            </div>
            <div className="flex space-x-4 mt-8 animate-in" style={{ animationDelay: "1s" }}>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full hover:bg-primary/10 transition-colors"
                onClick={() => handleSocialClick("https://github.com/Kunj-Mori")}
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full hover:bg-primary/10 transition-colors"
                onClick={() => handleSocialClick("https://www.linkedin.com/in/kunj-mori/")}
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full hover:bg-primary/10 transition-colors"
                onClick={() => handleSocialClick("https://x.com/KunjMori1420")}
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Button>
            </div>
          </div>
          <div className="parallax-layer hidden lg:block">
            <div className="relative flex justify-center">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/30 via-primary/20 to-primary/30 rounded-full blur-md animate-pulse" />
              <div className="relative w-64 h-64 bg-card rounded-full overflow-hidden border-2 border-primary/50 shadow-xl">
                <Image
                  src="/logo.webp"
                  alt="Kunj Mori"
                  className="w-full h-full object-cover"
                  width={300}
                  height={300}
                  priority
                  quality={90}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Down Arrow */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 animate-bounce">
        <Button
          variant="ghost"
          size="icon"
          className="rounded-full hover:bg-primary/10 transition-colors bg-background/50 backdrop-blur-sm"
          onClick={handleScrollDown}
          aria-label="Scroll to About section"
        >
          <ChevronDown className="h-6 w-6" />
        </Button>
      </div>
    </section>
  )
}
