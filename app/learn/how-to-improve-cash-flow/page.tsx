"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"
import { useTheme } from "@/components/theme-provider" // Import useTheme
import { cn } from "@/lib/utils" // Import cn

export default function HowToImproveCashFlowPage() {
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
    <div className="flex flex-col gap-16 py-12 px-4 md:px-8 lg:px-12 max-w-7xl mx-auto bg-theme-primary-bg">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={cn(
          "relative overflow-hidden shadow-xl text-center",
          theme === "classic" ? "hero-section-classic" : "hero-section-playful",
        )}
      >
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1
            className={cn(
              "font-bold leading-tight mb-6",
              theme === "classic" ? "hero-title-classic" : "hero-title-playful",
            )}
          >
            How to Improve Cash Flow
          </h1>
          <p
            className={cn(
              "mb-10 opacity-90 font-light",
              theme === "classic" ? "hero-subtitle-classic" : "hero-subtitle-playful",
            )}
          >
            Practical strategies to optimize your financial health.
          </p>
        </div>
        <Image
          src={`/placeholder.svg?height=500&width=800&query=${theme === "classic" ? "illustration of gears optimizing financial processes, structured, serious" : "playful illustration of gears optimizing financial processes, vibrant, abstract"}`}
          alt="Illustration of gears optimizing financial processes"
          width={800}
          height={500}
          className="absolute inset-0 w-full h-full object-cover opacity-10"
        />
      </motion.section>

      {/* Content Section */}
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
        className="grid gap-12"
      >
        <h2
          className={cn(
            "font-semibold text-theme-accent-1 text-center",
            theme === "classic" ? "section-title-classic" : "section-title-playful",
          )}
        >
          Strategies for a Healthy Cash Flow
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div variants={itemVariants}>
            <Card
              className={cn(
                "shadow-md border p-8",
                theme === "classic" ? "card-grid-item-classic" : "card-grid-item-playful",
              )}
            >
              <CardTitle
                className={cn(
                  "text-theme-accent-1 mb-3",
                  theme === "classic" ? "card-title-classic" : "card-title-playful",
                )}
              >
                Accelerate Receivables
              </CardTitle>
              <CardDescription
                className={cn(
                  "leading-relaxed",
                  theme === "classic" ? "card-description-classic" : "card-description-playful",
                )}
              >
                Encourage faster payments from customers by offering early payment discounts (e.g., 2% discount if paid
                within 10 days), sending timely and clear invoices, and following up promptly on overdue accounts.
                Consider implementing stricter credit policies for new clients or using automated invoicing and payment
                reminders. The quicker you collect, the better your cash position.
              </CardDescription>
            </Card>
          </motion.div>
          <motion.div variants={itemVariants}>
            <Card
              className={cn(
                "shadow-md border p-8",
                theme === "classic" ? "card-grid-item-classic" : "card-grid-item-playful",
              )}
            >
              <CardTitle
                className={cn(
                  "text-theme-accent-1 mb-3",
                  theme === "classic" ? "card-title-classic" : "card-title-playful",
                )}
              >
                Manage Payables Wisely
              </CardTitle>
              <CardDescription
                className={cn(
                  "leading-relaxed",
                  theme === "classic" ? "card-description-classic" : "card-description-playful",
                )}
              >
                Negotiate longer payment terms with suppliers without damaging relationships. Pay bills strategically to
                maintain cash in your account for as long as possible, but always pay on time to avoid penalties and
                maintain good vendor relationships. Automate bill payments to avoid late fees, but ensure you have
                sufficient cash before the payment date.
              </CardDescription>
            </Card>
          </motion.div>
          <motion.div variants={itemVariants}>
            <Card
              className={cn(
                "shadow-md border p-8",
                theme === "classic" ? "card-grid-item-classic" : "card-grid-item-playful",
              )}
            >
              <CardTitle
                className={cn(
                  "text-theme-accent-1 mb-3",
                  theme === "classic" ? "card-title-classic" : "card-title-playful",
                )}
              >
                Control Expenses
              </CardTitle>
              <CardDescription
                className={cn(
                  "leading-relaxed",
                  theme === "classic" ? "card-description-classic" : "card-description-playful",
                )}
              >
                Regularly review and cut unnecessary costs. Look for ways to reduce operational expenses, such as
                optimizing utility usage, negotiating better deals with vendors for supplies or services, and
                streamlining processes to reduce labor costs. Every rand saved directly contributes to improved cash
                flow. Prioritize essential spending and defer non-critical purchases.
              </CardDescription>
            </Card>
          </motion.div>
          <motion.div variants={itemVariants}>
            <Card
              className={cn(
                "shadow-md border p-8",
                theme === "classic" ? "card-grid-item-classic" : "card-grid-item-playful",
              )}
            >
              <CardTitle
                className={cn(
                  "text-theme-accent-1 mb-3",
                  theme === "classic" ? "card-title-classic" : "card-title-playful",
                )}
              >
                Maintain a Cash Reserve
              </CardTitle>
              <CardDescription
                className={cn(
                  "leading-relaxed",
                  theme === "classic" ? "card-description-classic" : "card-description-playful",
                )}
              >
                Build an emergency fund to cover unexpected expenses or periods of low income. A healthy cash reserve
                (ideally 3-6 months of operating expenses) provides a crucial buffer and peace of mind during
                challenging times, such as economic downturns, unexpected repairs, or slow sales periods. This prevents
                you from having to take on high-interest debt or make desperate decisions.
              </CardDescription>
            </Card>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mt-8">
          <motion.div variants={itemVariants}>
            <Card
              className={cn(
                "shadow-md border p-8",
                theme === "classic" ? "card-grid-item-classic" : "card-grid-item-playful",
              )}
            >
              <CardTitle
                className={cn(
                  "text-theme-accent-1 mb-3",
                  theme === "classic" ? "card-title-classic" : "card-title-playful",
                )}
              >
                Optimize Inventory
              </CardTitle>
              <CardDescription
                className={cn(
                  "leading-relaxed",
                  theme === "classic" ? "card-description-classic" : "card-description-playful",
                )}
              >
                For product-based businesses, excess inventory ties up significant cash. Implement efficient inventory
                management systems to minimize holding costs and reduce the risk of obsolescence. Aim for a
                "just-in-time" approach where possible, ensuring you have enough stock to meet demand without
                over-ordering. Regularly analyze sales data to forecast demand accurately and avoid overstocking
                slow-moving items.
              </CardDescription>
            </Card>
          </motion.div>
          <motion.div variants={itemVariants}>
            <Card
              className={cn(
                "shadow-md border p-8",
                theme === "classic" ? "card-grid-item-classic" : "card-grid-item-playful",
              )}
            >
              <CardTitle
                className={cn(
                  "text-theme-accent-1 mb-3",
                  theme === "classic" ? "card-title-classic" : "card-title-playful",
                )}
              >
                Strategic Pricing
              </CardTitle>
              <CardDescription
                className={cn(
                  "leading-relaxed",
                  theme === "classic" ? "card-description-classic" : "card-description-playful",
                )}
              >
                Review your pricing strategy regularly to ensure it covers costs and generates sufficient profit margins
                to support healthy cash flow. Consider offering tiered pricing, subscription models, or retainer fees to
                create more predictable revenue streams. For services, consider requiring upfront deposits or progress
                payments for larger projects to improve cash inflow during the project lifecycle.
              </CardDescription>
            </Card>
          </motion.div>
        </div>

        <div className="text-center mt-8">
          <Button
            asChild
            className={cn(
              "px-10 py-7 text-xl shadow-lg transition-all duration-300 ease-in-out",
              theme === "classic" ? "button-primary-classic" : "button-primary-playful",
            )}
          >
            <Link href="/forecaster">Back to Forecasting</Link>
          </Button>
        </div>
      </motion.section>
    </div>
  )
}
