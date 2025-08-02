"use client"

import Link from "next/link"
import { Mountain, Brain, Sparkles } from "lucide-react" // Import Brain and Sparkles icons
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"
import { useTheme } from "@/components/theme-provider" // Import useTheme
import { cn } from "@/lib/utils" // Import cn
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip" // Import Tooltip components

export function SiteHeader() {
  const { theme, setTheme } = useTheme() // Use the theme context

  const toggleTheme = () => {
    setTheme(theme === "classic" ? "playful" : "classic")
  }

  return (
    <TooltipProvider>
      <header className={cn("w-full shadow-sm", theme === "classic" ? "header-classic" : "header-playful")}>
        <div className="container flex h-20 items-center justify-between px-4 md:px-8">
          <Link
            href="/"
            className={cn(
              "flex items-center gap-3 font-playfair-display text-2xl font-bold",
              theme === "classic" ? "text-theme-header-text" : "text-theme-header-text",
            )}
          >
            <Mountain className={cn("h-8 w-8", theme === "classic" ? "text-theme-accent-1" : "text-theme-accent-1")} />
            StartWise Toolkit
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link
                      href="/checklist"
                      className={cn(
                        "transition-colors disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-theme-header-hover data-[state=open]:bg-theme-header-hover",
                        theme === "classic" ? "header-link-classic" : "header-link-playful",
                      )}
                    >
                      Checklist
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link
                      href="/forecaster"
                      className={cn(
                        "transition-colors disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-theme-header-hover data-[state=open]:bg-theme-header-hover",
                        theme === "classic" ? "header-link-classic" : "header-link-playful",
                      )}
                    >
                      Forecaster
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link
                      href="/contact"
                      className={cn(
                        "transition-colors disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-theme-header-hover data-[state=open]:bg-theme-header-hover",
                        theme === "classic" ? "header-link-classic" : "header-link-playful",
                      )}
                    >
                      Contact
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={toggleTheme}
                        className={cn(
                          "text-theme-header-text hover:bg-theme-header-hover",
                          theme === "classic" ? "rounded-md" : "rounded-full",
                        )}
                        aria-label="Toggle theme"
                      >
                        {theme === "classic" ? <Brain className="h-6 w-6" /> : <Sparkles className="h-6 w-6" />}
                        <span className="sr-only">Toggle theme</span>
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
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </nav>
          {/* The mobile trigger button in the header is now hidden on all screen sizes,
              as the MobileNav component provides a fixed bottom button for mobile. */}
          <div className="hidden md:hidden">
            {/* This section is intentionally left empty as MobileNav handles mobile trigger */}
          </div>
        </div>
      </header>
    </TooltipProvider>
  )
}
