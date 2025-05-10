"use client"

import { useEffect, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Briefcase, Calendar } from "lucide-react"

const experienceData = [
  {
    position: "PHP Developer",
    company: "Mamo Techno Labs",
    location: "Vadodara, Gujarat",
    period: "May 2024 – Jun 2024",
    description:
      "Collaborated on three web development projects, including a productivity calculator. Focused on enhancing teamwork and technical communication.",
    achievements: [
      "Contributed to the development of three web-based solutions",
      "Improved team coordination and communication in a collaborative setting",
      "Gained practical experience in PHP and web development frameworks",
    ],
  },
  {
    position: "Java Developer",
    company: "Agile Infoways",
    location: "Ahmedabad, Gujarat",
    period: "Oct 2021 – Nov 2021",
    description:
      "Developed a mini project in Java, strengthening programming skills and understanding core Java concepts.",
    achievements: [
      "Completed a mini project in Java",
      "Gained foundational skills in Java programming",
      "Developed a solid understanding of object-oriented programming principles",
    ],
  },
]

export default function Experience() {
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
    <section id="experience" ref={sectionRef} className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 reveal">
          <h2 className="section-heading">Work Experience</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My professional journey in the tech industry, showcasing my roles and responsibilities at various companies.
          </p>
        </div>

        <div className="max-w-3xl mx-auto staggered-reveal">
          {experienceData.map((item, index) => (
            <div key={index} className="mb-8 relative">
              {index !== experienceData.length - 1 && (
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
                        <Briefcase className="h-6 w-6 text-primary" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-1">{item.position}</h3>
                      <h4 className="text-lg font-medium mb-2">
                        {item.company}, {item.location}
                      </h4>
                      <div className="flex items-center text-muted-foreground mb-4">
                        <Calendar className="h-4 w-4 mr-2" />
                        <span>{item.period}</span>
                      </div>
                      <p className="text-muted-foreground mb-4">{item.description}</p>
                      <div>
                        <h5 className="font-semibold mb-2">Key Achievements:</h5>
                        <ul className="list-disc list-inside text-muted-foreground space-y-1">
                          {item.achievements.map((achievement, i) => (
                            <li key={i} className="transition-all hover:translate-x-1 hover:text-primary">
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
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
