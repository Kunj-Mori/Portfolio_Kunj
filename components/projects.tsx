"use client"

import { useState, useEffect, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"

const categories = ["All", "Web App", "Mobile App"]

const projectsData = [
  {
    title: "Eklavya - Modern Learning Management System",
    category: "Web App",
    image: "/projects/projects_eklavya.png?height=400&width=600",
    description: "Eklavya is a full-featured Learning Management System (LMS) providing an exceptional learning experience with course discovery, enrollment, AI-powered examinations, and an interactive UI for students and teachers.",
    technologies: ["React", "Next.js", "TailwindCSS", "TypeScript", "Framer Motion", "Prisma", "MySQL", "Clerk", "Razor Pay", "Uploadthing", "Vercel"],
    liveLink: "https://eklavya-lms-z19t.onrender.com/",
    githubLink: "https://github.com/Kunj-Mori/Eklavya-LMS",
    featured: true
},

  {
    title: "Diet Recommendation System",
    category: "Web App",
    image: "/projects/projects_diet.png?height=400&width=600",
    description:
      "An ML-based recommendation system using the Random Forest algorithm. Built with a Streamlit UI, the system calculates BMI and BMR and suggests personalized diet and exercise plans.",
    technologies: ["Streamlit", "Python", "Random Forest", "Machine Learning"],
    liveLink: "https://diet-exercise-planner.streamlit.app/",
    githubLink: "https://github.com/JiwansOza/Diet-Exercise-Planner",
    featured: true,
  },
  {
    title: "Gemini AI Voice Assistant",
    category: "Mobile App",
    image: "projects/projects_aichat.png?height=400&width=600",
    description: "A modern, feature-rich voice assistant powered by Google's Gemini 1.5 Flash API. Interact naturally through voice or text and receive intelligent responses with a beautiful, responsive UI.",
    technologies: ["Flutter", "Dart", "Google Gemini API", "Speech-to-Text", "Text-to-Speech", "Provider", "Lottie", "Shared Preferences"],
    liveLink: "https://chatapiassistant.vercel.app/",
    githubLink: "https://github.com/Kunj-Mori/Ai_Voice_Assistant_APP",
    featured: true
},
  {
    title: "Farmer Assistant App",
    category: "Mobile App",
    image: "projects/projects_farmer.png?height=400&width=600",
    description: "A comprehensive mobile application designed to assist farmers with real-time weather updates, APMC market prices, and agricultural information.",
    technologies: ["Flutter", "Firebase", "Geolocator", "Provider", "http", "Cloud Firestore", "Dart"],
    liveLink: "NA",
    githubLink: "https://github.com/Kunj-Mori/Farmer-Assistant",
    featured: true
},
{
  title: "MERN Workout Application",
  category: "Web App",
  image: "/projects/projects_workout.png?height=400&width=600",
  description: "A full-stack workout tracking application built with the MERN (MongoDB, Express.js, React.js, Node.js) stack. This application allows users to track their workouts with features like authentication, real-time updates, and a modern responsive UI.",
  technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "CSS", "Font Awesome", "date-fns"],
  liveLink: "NA",
  githubLink: "https://github.com/Kunj-Mori/Workout_MERN",
  featured: true
},

{
  title: "Weather Web App (Weather.io)",
  category: "Web App",
  image: "/projects/projects_weather.png?height=400&width=600",
  description: "A simple and intuitive weather web app that allows users to check current weather conditions for any city globally. It provides real-time data such as temperature, humidity, wind speed, and weather description using the OpenWeatherMap API.",
  technologies: ["HTML", "CSS", "JavaScript", "OpenWeatherMap API"],
  liveLink: "NA",
  githubLink: "https://github.com/Kunj-Mori/Weather-Web-App-2024",
  featured: true
},


]

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [filteredProjects, setFilteredProjects] = useState(projectsData)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (activeCategory === "All") {
      setFilteredProjects(projectsData)
    } else {
      setFilteredProjects(projectsData.filter((project) => project.category === activeCategory))
    }
  }, [activeCategory])

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
    <section id="projects" ref={sectionRef} className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 reveal">
          <h2 className="section-heading">My Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work, personal projects, and contributions. Each project represents different skills
            and technologies.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-12 reveal">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              className="rounded-full"
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 staggered-reveal">
          {filteredProjects.map((project, index) => (
            <Card
              key={index}
              className={`overflow-hidden border-border/50 card-hover ${
                project.featured ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <div className="relative overflow-hidden group">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <Button
                    size="sm"
                    variant="outline"
                    className="rounded-full bg-background/20 backdrop-blur-sm hover:bg-background/40 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300"
                    asChild
                  >
                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" /> Live Demo
                    </a>
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="rounded-full bg-background/20 backdrop-blur-sm hover:bg-background/40 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 delay-100"
                    asChild
                  >
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" /> Code
                    </a>
                  </Button>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  <Badge variant="outline" className="animate-pulse-border">
                    {project.category}
                  </Badge>
                </div>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <Badge key={i} variant="secondary" className="transition-all hover:bg-primary/20">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
