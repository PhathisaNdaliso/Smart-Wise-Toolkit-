"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { FileText, Banknote, Shield, Briefcase, Layout, Settings, Receipt, Handshake } from "lucide-react" // Added Brain, Lightbulb, Sparkles
import { motion } from "framer-motion"
import { useTheme } from "@/components/theme-provider" // Import useTheme
import { cn } from "@/lib/utils" // Import cn

interface ChecklistItem {
  id: string
  title: string
  explainer: string
  link: string
  icon: React.ElementType
}

const checklistItems: ChecklistItem[] = [
  {
    id: "1",
    title: "Register your business with CIPC",
    explainer: "This is the first legal step to establish your business entity in South Africa.",
    link: "/checklist/register-cipc",
    icon: FileText,
  },
  {
    id: "2",
    title: "Open a business bank account",
    explainer: "Separate your personal and business finances for clarity and legal compliance.",
    link: "/checklist/open-bank-account",
    icon: Banknote,
  },
  {
    id: "3",
    title: "Get a tax reference number",
    explainer: "Essential for tax compliance and business operations in South Africa.",
    link: "/checklist/sars-tax",
    icon: Receipt,
  },
  {
    id: "4",
    title: "Choose your business structure",
    explainer: "Decide between Sole Proprietor, Partnership, Pty Ltd, etc., based on your needs.",
    link: "/checklist/business-structure",
    icon: Briefcase,
  },
  {
    id: "5",
    title: "Draft a basic business plan",
    explainer: "Outline your goals, strategies, and how you'll achieve them.",
    link: "/checklist/draft-business-plan",
    icon: Layout,
  },
  {
    id: "6",
    title: "Set up accounting software",
    explainer: "Track income and expenses efficiently from day one.",
    link: "/checklist/accounting-software",
    icon: Settings,
  },
  {
    id: "7",
    title: "Register for relevant licenses",
    explainer: "Ensure you comply with industry-specific regulations and tax requirements.",
    link: "/checklist/register-licenses",
    icon: Handshake,
  },
  {
    id: "8",
    title: "Get business insurance quotes",
    explainer: "Protect your business from unforeseen risks and liabilities.",
    link: "/checklist/insurance-quotes",
    icon: Shield,
  },
]

const founderQuotes = [
  "The best way to predict the future is to create it. – Peter Drucker",
  "Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. – Steve Jobs",
  "The critical ingredient is getting off your butt and doing something. It’s as simple as that. – Nolan Bushnell",
  "Don't be afraid to give up the good to go for the great. – John D. Rockefeller",
  "Success is not final, failure is not fatal: It is the courage to continue that counts. – Winston Churchill",
  "The only way to do great work is to love what you do. – Steve Jobs",
  "If you are not embarrassed by the first version of your product, you’ve launched too late. – Reid Hoffman",
  "It's not about ideas. It's about making ideas happen. – Scott Belsky",
]

export default function ChecklistPage() {
  const [completedItems, setCompletedItems] = useState<string[]>([])
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0)
  const { theme } = useTheme() // Use the theme context

  useEffect(() => {
    const savedCompleted = localStorage.getItem("startwise-checklist-progress")
    if (savedCompleted) {
      setCompletedItems(JSON.parse(savedCompleted))
    }

    // Scroll to anchor if present in URL on page load
    if (window.location.hash) {
      const id = window.location.hash.substring(1) // Remove '#'
      const element = document.getElementById(id)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    }

    const interval = setInterval(() => {
      setCurrentQuoteIndex((prevIndex) => (prevIndex + 1) % founderQuotes.length)
    }, 10000) // Change quote every 10 seconds
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    localStorage.setItem("startwise-checklist-progress", JSON.stringify(completedItems))
  }, [completedItems])

  const handleCheckboxChange = (id: string, checked: boolean) => {
    if (checked) {
      setCompletedItems((prev) => [...prev, id])
    } else {
      setCompletedItems((prev) => prev.filter((item) => item !== id))
    }
  }

  const progress = (completedItems.length / checklistItems.length) * 100

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  }

  return (
    <div className="flex flex-col gap-20 py-16 px-4 md:px-8 lg:px-12 max-w-7xl mx-auto bg-theme-primary-bg">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={cn(
          "relative overflow-hidden shadow-2xl",
          theme === "classic" ? "hero-section-classic" : "hero-section-playful",
        )}
      >
        <div className="relative z-10 max-w-4xl">
          <h1
            className={cn(
              "font-bold leading-tight mb-8",
              theme === "classic" ? "hero-title-classic" : "hero-title-playful",
            )}
          >
            Start Smart. Build Strong.
          </h1>
          <p
            className={cn(
              "mb-12 opacity-90 font-light",
              theme === "classic" ? "hero-subtitle-classic" : "hero-subtitle-playful",
            )}
          >
            A free toolkit to help you launch your business with clarity and confidence.
          </p>
          <Button
            asChild
            className={cn(
              "px-12 py-8 text-xl shadow-lg transition-all duration-300 ease-in-out",
              theme === "classic" ? "button-primary-classic" : "button-primary-playful",
            )}
          >
            <Link href="#interactive-checklist">Let's Get Started ↓</Link>
          </Button>
        </div>
        <Image
          src={`/placeholder.svg?height=600&width=1000&query=${theme === "classic" ? "illustration of a person planning a business, structured, serious" : "playful illustration of a person brainstorming ideas, creative, vibrant"}`}
          alt="Illustration of a person planning a business"
          width={1000}
          height={600}
          className="absolute inset-0 w-full h-full object-cover opacity-10"
        />
      </motion.section>

      {/* Interactive Checklist Section */}
      <motion.section
        id="interactive-checklist"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
        className="grid gap-16"
      >
        <h2
          className={cn(
            "font-semibold text-theme-accent-1 text-center",
            theme === "classic" ? "section-title-classic" : "section-title-playful",
          )}
        >
          Your Startup Checklist
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
          {checklistItems.map((item) => {
            const Icon = item.icon
            return (
              <motion.div key={item.id} variants={itemVariants}>
                <Card
                  className={cn(
                    "shadow-xl border group",
                    theme === "classic" ? "card-grid-item-classic" : "card-grid-item-playful",
                  )}
                >
                  <CardHeader className="pb-6">
                    <div className="flex items-center space-x-4">
                      <Checkbox
                        id={`item-${item.id}`}
                        checked={completedItems.includes(item.id)}
                        onCheckedChange={(checked) => handleCheckboxChange(item.id, checked as boolean)}
                        className={cn(
                          "data-[state=checked]:bg-theme-checkbox-checked-bg data-[state=checked]:text-theme-checkbox-checked-text",
                          theme === "classic" ? "checkbox-classic" : "checkbox-playful",
                        )}
                      />
                      <Icon
                        className={cn(
                          "group-hover:text-theme-icon-hover",
                          theme === "classic" ? "icon-classic" : "icon-playful",
                        )}
                      />
                      <CardTitle
                        className={cn(
                          "leading-snug",
                          theme === "classic" ? "card-title-classic" : "card-title-playful",
                        )}
                      >
                        {item.title}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="grid gap-5 pt-0">
                    <CardDescription
                      className={cn(
                        "leading-relaxed",
                        theme === "classic" ? "card-description-classic" : "card-description-playful",
                      )}
                    >
                      {item.explainer}
                    </CardDescription>
                    <Link
                      href={item.link}
                      className={cn(
                        "underline transition-colors duration-200",
                        theme === "classic" ? "link-classic" : "link-playful",
                      )}
                    >
                      Learn More &rarr;
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </motion.section>

      {/* Progress Tracker Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
        className="grid gap-8 text-center"
      >
        <h2
          className={cn(
            "font-semibold text-theme-accent-1",
            theme === "classic" ? "section-title-classic" : "section-title-playful",
          )}
        >
          Your Progress
        </h2>
        <div className="w-full max-w-lg mx-auto">
          <Progress
            value={progress}
            className={cn(
              "h-5 rounded-full",
              theme === "classic"
                ? "bg-theme-progress-bg [&::-webkit-progress-bar]:rounded-full [&::-webkit-progress-value]:rounded-full [&::-webkit-progress-value]:bg-theme-progress-fill"
                : "bg-theme-progress-bg [&::-webkit-progress-bar]:rounded-full [&::-webkit-progress-value]:rounded-full [&::-webkit-progress-value]:bg-theme-progress-fill",
            )}
          />
          <p className={cn("mt-4 text-xl", theme === "classic" ? "font-inter" : "font-outfit")}>
            {Math.round(progress)}% Complete
          </p>
        </div>
      </motion.section>

      {/* Founder Wisdom Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
        className={cn(
          "p-12 md:p-20 text-center shadow-2xl",
          theme === "classic" ? "quote-section-classic" : "quote-section-playful",
        )}
      >
        <h2
          className={cn(
            "font-bold mb-10 leading-tight",
            theme === "classic" ? "quote-text-classic" : "quote-text-playful",
          )}
        >
          &ldquo;{founderQuotes[currentQuoteIndex]}&rdquo;
        </h2>
      </motion.section>

      {/* Tips for First-Time Founders Section */}
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
        className="grid gap-16"
      >
        <h2
          className={cn(
            "font-semibold text-theme-accent-1 text-center",
            theme === "classic" ? "section-title-classic" : "section-title-playful",
          )}
        >
          Tips for First-Time Founders
        </h2>
        <div className="grid md:grid-cols-3 gap-10">
          <motion.div variants={itemVariants}>
            <Card
              className={cn(
                "p-10 text-center shadow-md border",
                theme === "classic" ? "card-grid-item-classic" : "card-grid-item-playful",
              )}
            >
              <CardTitle className={cn("mb-4", theme === "classic" ? "card-title-classic" : "card-title-playful")}>
                Separate Finances
              </CardTitle>
              <CardDescription
                className={cn(
                  "leading-relaxed",
                  theme === "classic" ? "card-description-classic" : "card-description-playful",
                )}
              >
                Keep your business and personal finances distinct from day one to avoid confusion and simplify
                accounting.
              </CardDescription>
            </Card>
          </motion.div>
          <motion.div variants={itemVariants}>
            <Card
              className={cn(
                "p-10 text-center shadow-md border",
                theme === "classic" ? "card-grid-item-classic" : "card-grid-item-playful",
              )}
            >
              <CardTitle className={cn("mb-4", theme === "classic" ? "card-title-classic" : "card-title-playful")}>
                Start Lean
              </CardTitle>
              <CardDescription
                className={cn(
                  "leading-relaxed",
                  theme === "classic" ? "card-description-classic" : "card-description-playful",
                )}
              >
                Avoid unnecessary upfront expenses. Begin with essential tools and scale as your business grows.
              </CardDescription>
            </Card>
          </motion.div>
          <motion.div variants={itemVariants}>
            <Card
              className={cn(
                "p-10 text-center shadow-md border",
                theme === "classic" ? "card-grid-item-classic" : "card-grid-item-playful",
              )}
            >
              <CardTitle className={cn("mb-4", theme === "classic" ? "card-title-classic" : "card-title-playful")}>
                Track Every Expense
              </CardTitle>
              <CardDescription
                className={cn(
                  "leading-relaxed",
                  theme === "classic" ? "card-description-classic" : "card-description-playful",
                )}
              >
                Meticulously record all expenditures to understand your cash flow and for tax purposes.
              </CardDescription>
            </Card>
          </motion.div>
        </div>
      </motion.section>

      {/* Motivational Footer */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
        className={cn(
          "p-12 md:p-20 text-center shadow-2xl",
          theme === "classic" ? "quote-section-classic" : "quote-section-playful",
        )}
      >
        <h2
          className={cn(
            "font-bold mb-10 leading-tight",
            theme === "classic" ? "quote-text-classic" : "quote-text-playful",
          )}
        >
          Ready to take the next step?
        </h2>
        <Button
          asChild
          className={cn(
            "px-12 py-8 text-xl shadow-lg transition-all duration-300 ease-in-out",
            theme === "classic" ? "button-primary-classic" : "button-primary-playful",
          )}
        >
          <Link href="/forecaster">Let's Forecast My Finances →</Link>
        </Button>
      </motion.section>
    </div>
  )
}
