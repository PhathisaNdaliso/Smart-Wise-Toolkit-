import type React from "react"
import type { Metadata } from "next"
import {
  Playfair_Display,
  Inter,
  Fraunces,
  Satisfy as Satoshi,
  Familjen_Grotesk as Cabinet_Grotesk,
  Work_Sans,
  Outfit,
} from "next/font/google"
import "./globals.css"
import { cn } from "@/lib/utils"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { MobileNav } from "@/components/mobile-nav"
import { ThemeProvider } from "@/components/theme-provider"

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-playfair-display",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-fraunces",
})

const satoshi = Satoshi({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-satoshi",
})

// New fonts for playful theme
const cabinetGrotesk = Cabinet_Grotesk({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-cabinet-grotesk",
})

const workSans = Work_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-work-sans",
})

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-outfit",
})

export const metadata: Metadata = {
  title: "StartWise Toolkit",
  description: "StartWise: Designed for calm clarity. Built for founders with vision.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen antialiased",
          playfairDisplay.variable,
          inter.variable,
          fraunces.variable,
          satoshi.variable,
          cabinetGrotesk.variable,
          workSans.variable,
          outfit.variable,
        )}
      >
        <ThemeProvider>
          <div className="flex flex-col min-h-screen">
            <SiteHeader />
            <main className="flex-1">{children}</main>
            <SiteFooter />
            <MobileNav />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
