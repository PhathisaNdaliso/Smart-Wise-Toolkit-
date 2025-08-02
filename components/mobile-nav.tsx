"use client"

import Link from "next/link"
import { X, Menu, Brain, Sparkles } from "lucide-react" // Import Brain and Sparkles icons
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { useTheme } from "@/components/theme-provider" // Import useTheme
import { cn } from "@/lib/utils" // Import cn
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip" // Import Tooltip components

export function MobileNav() {
  const { theme, setTheme } = useTheme() // Use the theme context

  const toggleTheme = () => {
    setTheme(theme === "classic" ? "playful" : "classic")
  }

  return (
    <TooltipProvider>
      <Sheet>
        <SheetTrigger asChild>
          {/* This button is only visible on mobile */}
          <Button
            variant="ghost"
            size="icon"
            className={cn(
              "fixed bottom-4 right-4 md:hidden shadow-lg z-50",
              theme === "classic" ? "mobile-nav-button-classic" : "mobile-nav-button-playful",
            )}
            aria-label="Open mobile navigation"
          >
            <Menu className="h-7 w-7" />
          </Button>
        </SheetTrigger>
        <SheetContent
          side="right"
          className={cn(theme === "classic" ? "mobile-nav-sheet-classic" : "mobile-nav-sheet-playful")}
        >
          <div className="flex justify-end">
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Close mobile navigation">
                <X className="h-6 w-6 text-theme-primary-text" />
                <span className="sr-only">Close mobile navigation menu</span>
              </Button>
            </SheetTrigger>
          </div>
          <nav className={cn("grid gap-6 text-xl font-medium", theme === "classic" ? "font-inter" : "font-outfit")}>
            <Link
              href="/checklist"
              className={cn(
                "transition-colors duration-200",
                theme === "classic" ? "mobile-nav-link-classic" : "mobile-nav-link-playful",
              )}
            >
              Checklist
            </Link>
            <Link
              href="/forecaster"
              className={cn(
                "transition-colors duration-200",
                theme === "classic" ? "mobile-nav-link-classic" : "mobile-nav-link-playful",
              )}
            >
              Forecaster
            </Link>
            <Link
              href="/contact"
              className={cn(
                "transition-colors duration-200",
                theme === "classic" ? "mobile-nav-link-classic" : "mobile-nav-link-playful",
              )}
            >
              Contact
            </Link>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="ghost"
                  onClick={toggleTheme}
                  className={cn(
                    "justify-start text-xl font-medium transition-colors duration-200",
                    theme === "classic" ? "mobile-nav-link-classic" : "mobile-nav-link-playful",
                  )}
                >
                  {theme === "classic" ? (
                    <>
                      <Brain className="mr-2 h-5 w-5" /> Structured
                    </>
                  ) : (
                    <>
                      <Sparkles className="mr-2 h-5 w-5" /> Creative
                    </>
                  )}
                </Button>
              </TooltipTrigger>
              <TooltipContent
                className={cn(
                  "p-3 rounded-md shadow-lg max-w-xs",
                  theme === "classic" ? "tooltip-content-classic" : "tooltip-content-playful",
                )}
              >
                <p>Change your founder mindset</p>
              </TooltipContent>
            </Tooltip>
          </nav>
        </SheetContent>
      </Sheet>
    </TooltipProvider>
  )
}
