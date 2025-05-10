import type React from "react"
import { Inter } from "next/font/google"
import { Metadata } from "next"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/header"
import Footer from "@/components/footer"
import MouseFollower from "@/components/mouse-follower"
import { Suspense } from "react"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Kunj Mori",
  description: "Portfolio of Kunj Mroi, a Full Stack Developer and UI/UX Designer specializing in creating exceptional digital experiences.",
  generator: "next.dev",
  metadataBase: new URL("http://localhost:3000"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    title: "Kunj Mori - Full Stack Developer & UI/UX Designer",
    description: "Portfolio of Kunj Mori, a Full Stack Developer and UI/UX Designer specializing in creating exceptional digital experiences.",
    siteName: "Kunj Mori Portfolio"
  },
  twitter: {
    card: "summary_large_image",
    title: "Kunj Mori - Full Stack Developer & UI/UX Designer",
    description: "Portfolio of Kunj Mori, a Full Stack Developer and UI/UX Designer specializing in creating exceptional digital experiences.",
    creator: "@kunjmori"
  },
  robots: {
    index: true,
    follow: true
  }
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
      </body>
    </html>
  )
}
