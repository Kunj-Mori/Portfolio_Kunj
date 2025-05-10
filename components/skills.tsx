"use client"

import React, { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Code2,
  FileJson,
  Database,
  Server,
  Braces,
  Laptop,
  Globe,
  LayoutGrid,
  FileType,
  Boxes,
  Languages,
  Terminal,
  Cpu,
  ScrollText,
  Network,
  MessageSquare,
  Smartphone,
  Palette,
} from "lucide-react"

type Skill = {
  name: string
  icon: React.ReactNode
  category: string
}

const categories = ["Web App", "Mobile App", "Other"]

const skills: Skill[] = [
  // Web App Skills
  { name: "React", icon: <Globe className="w-6 h-6 sm:w-8 sm:h-8 md:w-9 md:h-9" />, category: "Web App" },
  { name: "Next.js", icon: <LayoutGrid className="w-6 h-6 sm:w-8 sm:h-8 md:w-9 md:h-9" />, category: "Web App" },
  { name: "TypeScript", icon: <Braces className="w-6 h-6 sm:w-8 sm:h-8 md:w-9 md:h-9" />, category: "Web App" },
  { name: "Node.js", icon: <Terminal className="w-6 h-6 sm:w-8 sm:h-8 md:w-9 md:h-9" />, category: "Web App" },
  { name: "Express", icon: <Server className="w-6 h-6 sm:w-8 sm:h-8 md:w-9 md:h-9" />, category: "Web App" },
  { name: "MongoDB", icon: <Database className="w-6 h-6 sm:w-8 sm:h-8 md:w-9 md:h-9" />, category: "Web App" },
  
  // Mobile App Skills
  { name: "React Native", icon: <Smartphone className="w-6 h-6 sm:w-8 sm:h-8 md:w-9 md:h-9" />, category: "Mobile App" },
  { name: "Flutter", icon: <Smartphone className="w-6 h-6 sm:w-8 sm:h-8 md:w-9 md:h-9" />, category: "Mobile App" },
  { name: "Android Development", icon: <Smartphone className="w-6 h-6 sm:w-8 sm:h-8 md:w-9 md:h-9" />, category: "Mobile App" },
  
  // Other Skills
  { name: "Git", icon: <Boxes className="w-6 h-6 sm:w-8 sm:h-8 md:w-9 md:h-9" />, category: "Other" },
  { name: "Docker", icon: <Boxes className="w-6 h-6 sm:w-8 sm:h-8 md:w-9 md:h-9" />, category: "Other" },
  { name: "AWS", icon: <Network className="w-6 h-6 sm:w-8 sm:h-8 md:w-9 md:h-9" />, category: "Other" },
  { name: "CI/CD", icon: <Network className="w-6 h-6 sm:w-8 sm:h-8 md:w-9 md:h-9" />, category: "Other" },
]

const otherSkills = [
  "Problem Solving",
  "Team Collaboration",
  "RESTful APIs",
  "Web Security",
  "Testing",
  "Performance Optimization",
  "SEO",
  "Accessibility",
  "Version Control"
]

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState("Web App")
  const [filteredSkills, setFilteredSkills] = useState(skills)

  useEffect(() => {
    setFilteredSkills(skills.filter((skill) => skill.category === activeCategory))
  }, [activeCategory])

  return (
    <section id="skills" className="py-20 md:py-32 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="section-heading">Technical Skills</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I've worked with a variety of technologies in web development. Here's an overview of my technical expertise.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-12">
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

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="bg-card border border-border/50 rounded-lg p-3 sm:p-4 md:p-6 flex flex-col items-center hover:bg-accent transition-colors duration-300"
            >
              <motion.div 
                className="mb-2 sm:mb-4 text-primary"
                whileHover={{ rotate: 5, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                {skill.icon}
              </motion.div>
              <h3 className="font-medium text-center text-sm sm:text-base">{skill.name}</h3>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-12 md:mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-lg md:text-xl font-bold mb-4 md:mb-6">Additional Skills</h3>
          <div className="flex flex-wrap justify-center gap-2">
            {otherSkills.map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                whileHover={{ scale: 1.05 }}
              >
                <Badge variant="outline" className="px-2 py-1 text-xs sm:text-sm hover:bg-accent">
                  {skill}
                </Badge>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
