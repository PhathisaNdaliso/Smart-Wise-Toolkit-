"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"
import { useTheme } from "@/components/theme-provider" // Import useTheme
import { cn } from "@/lib/utils" // Import cn

export default function WhyCashFlowMattersPage() {
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
            Why Cash Flow Matters
          </h1>
          <p
            className={cn(
              "mb-10 opacity-90 font-light",
              theme === "classic" ? "hero-subtitle-classic" : "hero-subtitle-playful",
            )}
          >
            The critical role of cash flow in business survival and growth.
          </p>
        </div>
        <Image
          src={`/placeholder.svg?height=500&width=800&query=${theme === "classic" ? "illustration of a growing plant with business elements, structured, serious" : "playful illustration of a growing plant with business elements, vibrant, abstract"}`}
          alt="Illustration of a growing plant with business elements"
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
          More Than Just Profit
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
                Operational Stability
              </CardTitle>
              <CardDescription
                className={cn(
                  "leading-relaxed",
                  theme === "classic" ? "card-description-classic" : "card-description-playful",
                )}
              >
                Positive cash flow ensures you can pay your employees, suppliers, and rent on time. Without sufficient
                cash, even a profitable business can face liquidity issues and be forced to shut down. Think of cash
                flow as the oxygen for your business; without it, even a healthy body cannot survive. It allows you to
                cover day-to-day expenses, manage unexpected costs, and maintain smooth operations without constant
                worry about immediate financial shortfalls.
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
                Growth and Investment
              </CardTitle>
              <CardDescription
                className={cn(
                  "leading-relaxed",
                  theme === "classic" ? "card-description-classic" : "card-description-playful",
                )}
              >
                Strong cash flow provides the financial muscle to reinvest in your business, expand operations, develop
                new products, or seize new market opportunities. It gives you the flexibility to grow organically
                without relying heavily on external financing, which can be costly or dilute ownership. Whether it's
                upgrading technology, hiring more staff, or launching a new marketing campaign, healthy cash flow makes
                these strategic investments possible.
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
                Attracting Investors
              </CardTitle>
              <CardDescription
                className={cn(
                  "leading-relaxed",
                  theme === "classic" ? "card-description-classic" : "card-description-playful",
                )}
              >
                Investors, lenders, and potential buyers scrutinize a company's cash flow statement as a primary
                indicator of its financial health and viability. Consistent positive cash flow demonstrates a business's
                ability to generate sufficient funds from its operations, pay its debts, and fund its growth. This makes
                your business a more attractive prospect for investment, as it signals stability and a lower risk
                profile compared to businesses that rely heavily on external funding to stay afloat.
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
                Avoiding Liquidity Crises
              </CardTitle>
              <CardDescription
                className={cn(
                  "leading-relaxed",
                  theme === "classic" ? "card-description-classic" : "card-description-playful",
                )}
              >
                Many businesses, even profitable ones, fail due to a lack of liquidity – the inability to meet
                short-term obligations. A liquidity crisis occurs when a business doesn't have enough cash to pay its
                immediate bills, regardless of its long-term profitability. Understanding and forecasting your cash flow
                helps you anticipate potential shortfalls and take proactive measures, such as securing a line of credit
                or adjusting payment terms, to avoid a crisis that could force your business to shut down.
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
