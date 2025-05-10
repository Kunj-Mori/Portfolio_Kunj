"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Award } from "lucide-react"

const certifications = [
  {
    title: "Ethical Hacking",
    organization: "NPTEL",
    date: "2024",
    credentialId: "NPTEL24CS94S359300072",
    certificateLink: "https://archive.nptel.ac.in/content/noc/NOC24/SEM2/Ecertificates/106/noc24-cs94/Course/NPTEL24CS94S35930007203986206.pdf",
    description: "Ethical Hacking involves legally testing and securing computer systems by identifying vulnerabilities before malicious hackers can exploit them.",
    skills: ["Ethical hacking", "Cryptography", "Security"],
  },
  {
    title: "Operating System Fundamentals",
    organization: "NPTEL",
    date: "2024",
    credentialId: "NPTEL24CS108S559300168",
    certificateLink: "https://archive.nptel.ac.in/content/noc/NOC24/SEM2/Ecertificates/106/noc24-cs108/Course/NPTEL24CS108S55930016803986206.pdf",
    description: "Operating System is system software that manages computer hardware and provides services for running application programs.",
    skills: ["Operating Systems", "Scheduling", "process Management"],
  },
  {
    title: "Google Cloud Cybersecurity Certificate",
    organization: "Google",
    date: "2024",
    credentialId: "NA",
    certificateLink: "https://www.credly.com/badges/cfd0dbba-0c06-483e-a708-862ce8a96650/linked_in_profile",
    description: "The Google Cloud Cybersecurity Certificate prepares learners for roles in cloud security by teaching essential skills in threat detection, risk management, and incident response.",
    skills: ["Cybersecurity", "Security", "Cloud Computing", "Google Cloud"],
  },
  {
    title: "Python for Data Science",
    organization: "IBM",
    date: "2024",
    credentialId: "NA",
    certificateLink: "https://www.credly.com/badges/a082f1c5-99cd-4c85-86ca-a66e440f726e/linked_in_profile",
    description: "An introductory course teaching Python programming and basic data analysis using Jupyter notebooks, developed by IBM.",
    skills: ["Data Science", "Pandas", "Python"],
  },
  {
    title: "Introduction to Security Principles in Cloud Computing",
    organization: "Google",
    date: "2024",
    credentialId: "9733622",
    certificateLink: "https://www.cloudskillsboost.google/public_profiles/5d8b93a5-b840-453c-9311-6ac5cc733370/badges/9733622",
    description: "An introductory course that covers fundamental cloud security concepts, including data protection, access control, risk management, and compliance in cloud environments.",
    skills: ["Security", "Hacking"],
  },
  {
    title: "Google Data Analytics Specialization",
    organization: "Coursera-Google",
    date: "2024",
    credentialId: "W36882C54EDB",
    certificateLink: "https://www.coursera.org/account/accomplishments/specialization/W36882C54EDB",
    description: "A comprehensive, beginner-friendly program by Google that teaches data cleaning, analysis, visualization, and tools like SQL, R, Tableau, and spreadsheets to prepare for entry-level data analyst roles.",
    skills: ["Data Management", "Data Analysis", "SQL", "Data Visualization"],
  },
]

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 md:py-32 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-12">
          <motion.h2
            className="text-3xl font-bold tracking-tight mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Certifications
          </motion.h2>
          <motion.div
            className="w-20 h-1.5 bg-primary mb-6"
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          />
          <motion.p
            className="text-muted-foreground max-w-2xl"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Professional certifications and achievements that validate my expertise and commitment to continuous learning.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {certifications.map((cert, index) => (
            <motion.div
              key={`${cert.title}-${cert.organization}-${index}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2">{cert.title}</h3>
                      <p className="text-muted-foreground">{cert.organization}</p>
                    </div>
                    <Award className="h-6 w-6 text-primary flex-shrink-0" />
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">{cert.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {cert.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between mt-4">
                    <div className="text-sm text-muted-foreground">
                      Issued: {cert.date}
                      <br />
                      ID: {cert.credentialId}
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      className="rounded-full"
                      onClick={() => window.open(cert.certificateLink, "_blank")}
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      View Certificate
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 