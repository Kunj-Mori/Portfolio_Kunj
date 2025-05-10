"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Download, Mail } from "lucide-react"

export default function About() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active")
          }
        })
      },
      { threshold: 0.1 },
    )

    const revealElements = document.querySelectorAll(".reveal, .reveal-left, .reveal-right, .reveal-up, .reveal-down")
    revealElements.forEach((el) => observer.observe(el))

    return () => {
      revealElements.forEach((el) => observer.unobserve(el))
    }
  }, [])

  const handleDownloadCV = () => {
    window.open("/resume.pdf", "_blank")
  }

  const handleContactMe = () => {
    document.querySelector("#contact")?.scrollIntoView({
      behavior: "smooth",
    })
  }

  return (
    <section id="about" ref={sectionRef} className="py-20 md:py-32 bg-muted/30 relative">
      <div className="bg-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
      </div>
      <div className="container mx-auto px-4">
        <h2 className="section-heading">About Me</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="reveal-left">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-primary/10 rounded-lg blur-sm animate-pulse"></div>
              <Card className="overflow-hidden card-hover">
                <CardContent className="p-0">
                  <img
                    src="/profile.png?height=600&width=800"
                    alt="Kunj Mori working"
                    className="w-full h-auto"
                    width={800}
                    height={600}
                  />
                </CardContent>
              </Card>
            </div>
          </div>
          <div className="reveal-right">
            <h3 className="text-2xl font-bold mb-4">A passionate AI-ML Developer based in Gujarat, India</h3>
            <p className="text-muted-foreground mb-6">
            I am a Full Stack Developer. I specialize in AI/ML, PHP, MERN Stack development, and modern web technologies. My passion lies in creating intuitive and performant user experiences that bridge the gap between technology and user needs.
            </p>
            <p className="text-muted-foreground mb-6">
            Throughout my career, I’ve worked with startups and established companies to deliver innovative and efficient solutions that solve real-world problems. I am a strong team player with a knack for communication and logical thinking, and I am constantly learning and exploring new technologies to stay at the forefront of web development.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="p-3 bg-card rounded-lg shadow-sm border border-border/50 hover:border-primary/50 transition-colors">
                <h4 className="font-bold">Name:</h4>
                <p className="text-muted-foreground">Kunj Mori</p>
              </div>
              <div className="p-3 bg-card rounded-lg shadow-sm border border-border/50 hover:border-primary/50 transition-colors">
                <h4 className="font-bold">Email:</h4>
                <p className="text-muted-foreground">kunjmori9876@gmail.com</p>
              </div>
              <div className="p-3 bg-card rounded-lg shadow-sm border border-border/50 hover:border-primary/50 transition-colors">
                <h4 className="font-bold">Location:</h4>
                <p className="text-muted-foreground">Vadodara, Gujarat, India</p>
              </div>
              <div className="p-3 bg-card rounded-lg shadow-sm border border-border/50 hover:border-primary/50 transition-colors">
                <h4 className="font-bold">Availability:</h4>
                <p className="text-muted-foreground">Open to opportunities</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button className="rounded-full animate-pulse-border" size="lg" onClick={handleDownloadCV}>
                <Download className="mr-2 h-4 w-4" /> Download CV
              </Button>
              <Button variant="outline" className="rounded-full animate-pulse-border" size="lg" onClick={handleContactMe}>
                <Mail className="mr-2 h-4 w-4" /> Contact Me
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
