import type React from "react"
import { Inter } from "next/font/google"
import { Metadata } from "next"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/header"
import Footer from "@/components/footer"
import MouseFollower from "@/components/mouse-follower"
import { Suspense } from "react"
import { Analytics } from '@vercel/analytics/react'

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Kunj Mori - Full Stack Developer & AI/ML Expert | Portfolio",
  description: "Kunj Mori is a Full Stack Developer and AI/ML expert from Gujarat, India. Specializing in React, Next.js, Node.js, Python, and Machine Learning. View projects, skills, and experience.",
  generator: "Next.js",
  applicationName: "Kunj Mori Portfolio",
  referrer: "origin-when-cross-origin",
  keywords: [
    "Kunj Mori",
    "Full Stack Developer",
    "AI/ML Developer",
    "Web Developer",
    "React Developer",
    "Next.js Developer",
    "Software Engineer",
    "Gujarat Developer",
    "Indian Developer",
    "Portfolio",
    "Machine Learning Expert",
    "Python Developer",
    "JavaScript Developer",
    "TypeScript Developer",
    "Vadodara Developer"
  ],
  authors: [{ name: "Kunj Mori", url: "https://kunjmori.vercel.app" }],
  creator: "Kunj Mori",
  publisher: "Kunj Mori",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://kunjmori.vercel.app"),
  alternates: {
    canonical: "https://kunjmori.vercel.app",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://kunjmori.vercel.app",
    title: "Kunj Mori - Full Stack Developer & AI/ML Expert",
    description: "Portfolio of Kunj Mori, a Full Stack Developer and AI/ML expert specializing in creating exceptional digital experiences. View projects, skills, and experience in web development and machine learning.",
    siteName: "Kunj Mori Portfolio",
    images: [{
      url: "/og-image.jpg",
      width: 1200,
      height: 630,
      alt: "Kunj Mori - Full Stack Developer and AI/ML Expert"
    }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Kunj Mori - Full Stack Developer & AI/ML Expert",
    description: "Portfolio of Kunj Mori, a Full Stack Developer and AI/ML expert specializing in creating exceptional digital experiences. View projects, skills, and experience.",
    creator: "@kunjmori",
    images: ["/og-image.jpg"],
    site: "@kunjmori",
    creatorId: "1234567890"
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "yandex-verification-code",
    yahoo: "yahoo-verification-code",
    bing: "bing-verification-code"
  },
  category: "technology",
  classification: "Portfolio Website"
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/kunj.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://kunjmori.vercel.app" />
        <link rel="alternate" hrefLang="en" href="https://kunjmori.vercel.app" />
        <meta name="theme-color" content="#000000" />
        <meta name="msapplication-TileColor" content="#000000" />
        <link rel="icon" type="image/webp" href="/logo.webp" />
        <link rel="manifest" href="/manifest.json" crossOrigin="use-credentials" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Kunj Mori",
              url: "https://kunjmori.vercel.app",
              sameAs: [
                "https://github.com/Kunj-Mori",
                "https://www.linkedin.com/in/kunj-mori/",
                "https://x.com/KunjMori1420"
              ],
              jobTitle: "Full Stack Developer",
              worksFor: {
                "@type": "Organization",
                name: "Freelance"
              },
              image: "/logo.webp",
              description: "Full Stack Developer and AI/ML Expert from Gujarat, India",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Vadodara",
                addressRegion: "Gujarat",
                addressCountry: "India"
              },
              alumniOf: {
                "@type": "CollegeOrUniversity",
                name: "Your University Name"
              }
            })
          }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <MouseFollower />
          <div className="relative flex min-h-screen flex-col">
            <Header />
            <Suspense>
              <div className="flex-1">{children}</div>
            </Suspense>
            <Footer />
          </div>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
