"use client"

import Link from "next/link"
import { Mountain } from "lucide-react"
import { useTheme } from "@/components/theme-provider" // Import useTheme
import { cn } from "@/lib/utils" // Import cn

export function SiteFooter() {
  const { theme } = useTheme() // Use the theme context

  return (
    <footer className={cn("py-12 px-4 md:px-8 lg:px-12", theme === "classic" ? "footer-classic" : "footer-playful")}>
      <div className="container max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
        <div className="flex flex-col items-center md:items-start">
          <Link
            href="/"
            className={cn(
              "flex items-center gap-3 font-playfair-display text-2xl font-bold mb-3",
              theme === "classic" ? "text-theme-footer-text" : "text-theme-footer-text",
            )}
          >
            <Mountain
              className={cn("h-8 w-8", theme === "classic" ? "text-theme-footer-text" : "text-theme-footer-text")}
            />
            StartWise Toolkit
          </Link>
          <p
            className={cn(
              "text-base leading-relaxed",
              theme === "classic" ? "font-inter text-theme-footer-text/80" : "font-work-sans text-theme-footer-text/90",
            )}
          >
            Designed for calm clarity. Built for founders with vision.
          </p>
        </div>
        <div className="flex flex-col items-center md:items-start">
          <h3
            className={cn(
              "font-playfair-display text-xl font-semibold mb-4",
              theme === "classic" ? "text-theme-footer-text" : "font-cabinet-grotesk text-theme-footer-text",
            )}
          >
            Quick Links
          </h3>
          <nav className={cn("flex flex-col gap-3 text-base", theme === "classic" ? "font-inter" : "font-outfit")}>
            <Link
              href="/checklist"
              className={cn(
                "transition-colors duration-200",
                theme === "classic" ? "footer-link-classic" : "footer-link-playful",
              )}
            >
              Startup Checklist
            </Link>
            <Link
              href="/forecaster"
              className={cn(
                "transition-colors duration-200",
                theme === "classic" ? "footer-link-classic" : "footer-link-playful",
              )}
            >
              Cash Flow Forecaster
            </Link>
            <Link
              href="/contact"
              className={cn(
                "transition-colors duration-200",
                theme === "classic" ? "footer-link-classic" : "footer-link-playful",
              )}
            >
              Contact Us
            </Link>
          </nav>
        </div>
        <div className="flex flex-col items-center md:items-start">
          <h3
            className={cn(
              "font-playfair-display text-xl font-semibold mb-4",
              theme === "classic" ? "text-theme-footer-text" : "font-cabinet-grotesk text-theme-footer-text",
            )}
          >
            Contact
          </h3>
          <address
            className={cn(
              "not-italic text-base leading-relaxed",
              theme === "classic" ? "font-inter text-theme-footer-text/80" : "font-work-sans text-theme-footer-text/90",
            )}
          >
            123 Entrepreneur Way, <br />
            Cape Town, South Africa <br />
            Email:{" "}
            <a
              href="mailto:info@startwise.co.za"
              className={cn(
                "transition-colors duration-200",
                theme === "classic" ? "footer-link-classic" : "footer-link-playful",
              )}
            >
              info@startwise.co.za
            </a>{" "}
            <br />
            Phone:{" "}
            <a
              href="tel:+27115551234"
              className={cn(
                "transition-colors duration-200",
                theme === "classic" ? "footer-link-classic" : "footer-link-playful",
              )}
            >
              +27 11 555 1234
            </a>
          </address>
        </div>
      </div>
      <div
        className={cn(
          "border-t mt-10 pt-8 text-center text-sm",
          theme === "classic"
            ? "border-theme-footer-border text-theme-footer-text/60 font-inter"
            : "border-theme-footer-border text-theme-footer-text/70 font-outfit",
        )}
      >
        <p className="mb-2 text-base font-semibold text-theme-footer-text/90">
          Developed by Phathisa Ndaliso with love ❤️
        </p>
        &copy; {new Date().getFullYear()} StartWise Toolkit. All rights reserved. |{" "}
        <Link
          href="#"
          className={cn(
            "transition-colors duration-200",
            theme === "classic" ? "footer-link-classic" : "footer-link-playful",
          )}
        >
          Terms of Service
        </Link>{" "}
        |{" "}
        <Link
          href="#"
          className={cn(
            "transition-colors duration-200",
            theme === "classic" ? "footer-link-classic" : "footer-link-playful",
          )}
        >
          Privacy Policy
        </Link>
      </div>
    </footer>
  )
}
