import type { Metadata } from "next"
import Hero from "@/components/hero"
import About from "@/components/about"
import Skills from "@/components/skills"
import Education from "@/components/education"
import Experience from "@/components/experience"
import Projects from "@/components/projects"
import Contact from "@/components/contact"
import ScrollToTop from "@/components/scroll-to-top"
import Certifications from "@/components/certifications"

export const metadata: Metadata = {
  title: "Kunj Mori | Full Stack Developer",
  description: "Portfolio of Kunj Mori, a passionate Full Stack Developer specializing in modern web technologies",
  keywords: ["developer", "portfolio", "full stack", "web developer", "javascript", "react", "next.js"],
  openGraph: {
    title: "Kunj Mori | Developer",
    description: "Portfolio of Kunj Mori, a passionate Full Stack Developer specializing in modern web technologies",
    // url: "https://kunjmori.dev",
    siteName: "Kunj Mori Portfolio",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Kunj Mori Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
}

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Certifications />
      <Education />
      <Contact />
      <ScrollToTop />
    </main>
  )
}
