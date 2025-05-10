"use client"

import { useEffect, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, Calendar } from "lucide-react"

const educationData = [
  {
    degree: "Bachelor of Technology (B.Tech), Information Technology",
    institution: "CHARUSAT University",
    location: "Anand, Gujarat",
    period: "2023 - Present",
    description:
      "Focuses on programming, networking, databases, and web development, preparing students for careers in software development and IT.",
  },
  {
    degree: "Diploma in Computer Engineering",
    institution: "Parul University",
    location: "Vadodara, Gujarat",
    period: "2020 - 2023",
    description:
      "Covers programming, digital electronics, and computer systems, providing foundational skills for entry-level roles in IT or further studies.",
  },
]

export default function Education() {
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

    const staggeredElements = document.querySelectorAll(".staggered-reveal")
    staggeredElements.forEach((el) => observer.observe(el))

    return () => {
      revealElements.forEach((el) => observer.unobserve(el))
      staggeredElements.forEach((el) => observer.unobserve(el))
    }
  }, [])

  return (
    <section id="education" ref={sectionRef} className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 reveal">
          <h2 className="section-heading">Education</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My academic journey that has shaped my knowledge and skills in computer science and web development.
          </p>
        </div>

        <div className="max-w-3xl mx-auto staggered-reveal">
          {educationData.map((item, index) => (
            <div key={index} className="mb-8 relative">
              {index !== educationData.length - 1 && (
                <div className="absolute left-6 top-12 bottom-0 w-0.5 bg-primary/20 animate-pulse" />
              )}
              <Card className="border-border/50 hover:shadow-md transition-all card-hover">
                <CardContent className="p-0">
                  <div className="flex p-6">
                    <div className="mr-6 flex-shrink-0">
                      <div
                        className="bg-primary/10 p-3 rounded-full animate-pulse"
                        style={{ animationDelay: `${index * 0.2}s` }}
                      >
                        <GraduationCap className="h-6 w-6 text-primary" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-1">{item.degree}</h3>
                      <h4 className="text-lg font-medium mb-2">
                        {item.institution}, {item.location}
                      </h4>
                      <div className="flex items-center text-muted-foreground mb-4">
                        <Calendar className="h-4 w-4 mr-2" />
                        <span>{item.period}</span>
                      </div>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
