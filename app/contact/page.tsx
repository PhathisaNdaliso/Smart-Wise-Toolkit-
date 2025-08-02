"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { motion } from "framer-motion"
import { useTheme } from "@/components/theme-provider" // Import useTheme
import { cn } from "@/lib/utils" // Import cn

export default function ContactPage() {
  const { theme } = useTheme() // Use the theme context

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
          "relative overflow-hidden shadow-2xl text-center",
          theme === "classic" ? "hero-section-classic" : "hero-section-playful",
        )}
      >
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1
            className={cn(
              "font-bold leading-tight mb-8",
              theme === "classic" ? "hero-title-classic" : "hero-title-playful",
            )}
          >
            Get in Touch
          </h1>
          <p
            className={cn(
              "mb-12 opacity-90 font-light",
              theme === "classic" ? "hero-subtitle-classic" : "hero-subtitle-playful",
            )}
          >
            Have questions or need support? We're here to help you on your entrepreneurial journey.
          </p>
        </div>
        <Image
          src={`/placeholder.svg?height=600&width=1000&query=${theme === "classic" ? "illustration of contact us, structured, serious" : "playful illustration of people connecting, vibrant, friendly"}`}
          alt="Illustration of a person reaching out for contact"
          width={1000}
          height={600}
          className="absolute inset-0 w-full h-full object-cover opacity-10"
        />
      </motion.section>

      {/* Contact Form Section */}
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
          Send Us a Message
        </h2>
        <motion.div variants={itemVariants}>
          <Card
            className={cn(
              "p-10 max-w-3xl mx-auto w-full shadow-md border",
              theme === "classic" ? "card-grid-item-classic" : "card-grid-item-playful",
            )}
          >
            <CardHeader className="pb-6">
              <CardTitle
                className={cn("text-theme-accent-1", theme === "classic" ? "card-title-classic" : "card-title-playful")}
              >
                Contact Form
              </CardTitle>
              <CardDescription
                className={cn(
                  "text-base",
                  theme === "classic" ? "card-description-classic" : "card-description-playful",
                )}
              >
                Fill out the form below and we'll get back to you as soon as possible.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="grid gap-6">
                <div className="grid gap-2">
                  <Label
                    htmlFor="name"
                    className={cn("font-medium", theme === "classic" ? "label-classic" : "label-playful")}
                  >
                    Name
                  </Label>
                  <Input
                    id="name"
                    placeholder="Your Name"
                    className={cn(
                      "focus:ring-theme-input-focus",
                      theme === "classic" ? "input-classic" : "input-playful",
                    )}
                  />
                </div>
                <div className="grid gap-2">
                  <Label
                    htmlFor="email"
                    className={cn("font-medium", theme === "classic" ? "label-classic" : "label-playful")}
                  >
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@example.com"
                    className={cn(
                      "focus:ring-theme-input-focus",
                      theme === "classic" ? "input-classic" : "input-playful",
                    )}
                  />
                </div>
                <div className="grid gap-2">
                  <Label
                    htmlFor="subject"
                    className={cn("font-medium", theme === "classic" ? "label-classic" : "label-playful")}
                  >
                    Subject
                  </Label>
                  <Input
                    id="subject"
                    placeholder="Regarding..."
                    className={cn(
                      "focus:ring-theme-input-focus",
                      theme === "classic" ? "input-classic" : "input-playful",
                    )}
                  />
                </div>
                <div className="grid gap-2">
                  <Label
                    htmlFor="message"
                    className={cn("font-medium", theme === "classic" ? "label-classic" : "label-playful")}
                  >
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="Your message..."
                    rows={6}
                    className={cn(
                      "focus:ring-theme-input-focus",
                      theme === "classic" ? "input-classic" : "input-playful",
                    )}
                  />
                </div>
                <Button
                  type="submit"
                  className={cn(
                    "px-12 py-5 text-lg shadow-md transition-all duration-300 ease-in-out",
                    theme === "classic" ? "button-primary-classic" : "button-primary-playful",
                  )}
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </motion.section>

      {/* Additional Contact Info Section */}
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
          Other Ways to Connect
        </h2>
        <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto w-full">
          <motion.div variants={itemVariants}>
            <Card
              className={cn(
                "p-10 text-center shadow-md border",
                theme === "classic" ? "card-grid-item-classic" : "card-grid-item-playful",
              )}
            >
              <CardTitle className={cn("mb-4", theme === "classic" ? "card-title-classic" : "card-title-playful")}>
                Email Us
              </CardTitle>
              <CardDescription
                className={cn(
                  "leading-relaxed",
                  theme === "classic" ? "card-description-classic" : "card-description-playful",
                )}
              >
                For general inquiries, send us an email.
              </CardDescription>
              <p className={cn("mt-6 font-medium text-lg", theme === "classic" ? "link-classic" : "link-playful")}>
                info@startwise.co.za
              </p>
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
                Call Us
              </CardTitle>
              <CardDescription
                className={cn(
                  "leading-relaxed",
                  theme === "classic" ? "card-description-classic" : "card-description-playful",
                )}
              >
                Speak directly with our support team.
              </CardDescription>
              <p className={cn("mt-6 font-medium text-lg", theme === "classic" ? "link-classic" : "link-playful")}>
                +27 11 555 1234
              </p>
            </Card>
          </motion.div>
        </div>
      </motion.section>
    </div>
  )
}
