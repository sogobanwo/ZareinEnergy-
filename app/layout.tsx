import type React from "react"
import type { Metadata } from "next"
import { Inter, Instrument_Serif } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/header"
import { PageTransition } from "@/components/page-transition"
import CTASection from "@/components/cta-section"
import FooterSection from "@/components/footer-section"
import { PageShell } from "@/components/page-shell"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  preload: true,
})

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  variable: "--font-instrument-serif",
  weight: ["400"],
  display: "swap",
  preload: true,
})

export const metadata: Metadata = {
  title: "Zarein Energy - Powering the Future with Sustainable Power Generation",
  description:
    "Innovative sustainable energy solutions for power generation, distribution, and grid modernization. Zarein Energy delivers renewable energy and smart grid technologies for a cleaner tomorrow.",
  keywords: ["renewable energy", "solar power", "wind energy", "smart grid", "energy storage", "power distribution"],
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    title: "Zarein Energy - Powering the Future",
    description: "Leading sustainable energy company specializing in power generation and grid solutions",
  },
  generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${instrumentSerif.variable} antialiased`}>
      <body className="font-sans antialiased">
        <Header />
        <PageTransition>
          <PageShell>
            
              {children}
              <CTASection />
              <FooterSection />
          </PageShell>
        </PageTransition>

      </body>
    </html>
  )
}
