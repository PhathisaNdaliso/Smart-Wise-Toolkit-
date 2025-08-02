"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"
import { useTheme } from "@/components/theme-provider" // Import useTheme
import { cn } from "@/lib/utils" // Import cn

export default function WhatIsCashFlowPage() {
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
            What is Cash Flow?
          </h1>
          <p
            className={cn(
              "mb-10 opacity-90 font-light",
              theme === "classic" ? "hero-subtitle-classic" : "hero-subtitle-playful",
            )}
          >
            Understanding the lifeblood of your business.
          </p>
        </div>
        <Image
          src={`/placeholder.svg?height=500&width=800&query=${theme === "classic" ? "illustration of money flowing in and out, structured, serious" : "playful illustration of money flowing in and out, vibrant, abstract"}`}
          alt="Illustration of money flowing in and out"
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
          The Basics of Business Cash Flow
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
                Definition
              </CardTitle>
              <CardDescription
                className={cn(
                  "leading-relaxed",
                  theme === "classic" ? "card-description-classic" : "card-description-playful",
                )}
              >
                Cash flow refers to the total amount of money being transferred into and out of a business. It's like
                the blood circulating through your body – essential for life. Positive cash flow means more money is
                coming in than going out, while negative cash flow indicates the opposite. It's crucial to remember that
                cash flow is about actual cash movement, not just accounting profits. A business can be profitable on
                paper but still struggle with cash flow if money isn't coming in fast enough to cover expenses.
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
                Types of Cash Flow
              </CardTitle>
              <CardDescription
                className={cn(
                  "leading-relaxed",
                  theme === "classic" ? "card-description-classic" : "card-description-playful",
                )}
              >
                There are three main types of cash flow, each providing a different perspective on your business's
                financial health:
                <ul className="list-disc list-inside mt-2 space-y-1">
                  <li>
                    **Operating Cash Flow:** Money generated from your core business activities (sales, services) minus
                    the cash spent on daily operations (salaries, rent, utilities). This is often the most important
                    indicator of a business's health.
                  </li>
                  <li>
                    **Investing Cash Flow:** Cash used for or generated from investment activities, such as buying or
                    selling assets (property, equipment), or investments in other companies.
                  </li>
                  <li>
                    **Financing Cash Flow:** Money from debt (loans), equity (investor contributions), and dividends
                    paid out. This reflects how a company raises and repays capital.
                  </li>
                </ul>
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
                Cash Flow vs. Profit
              </CardTitle>
              <CardDescription
                className={cn(
                  "leading-relaxed",
                  theme === "classic" ? "card-description-classic" : "card-description-playful",
                )}
              >
                It's a common misconception that cash flow and profit are the same. Profit (or net income) is a measure
                of your business's financial performance over a period, calculated by subtracting expenses from revenue.
                It includes non-cash items like depreciation. Cash flow, on the other hand, is the actual movement of
                money. A business can show a profit on its income statement but still run out of cash if customers pay
                slowly or large investments are made. Conversely, a business might show a loss but have strong cash flow
                due to efficient collections or new financing.
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
                The Cash Flow Cycle
              </CardTitle>
              <CardDescription
                className={cn(
                  "leading-relaxed",
                  theme === "classic" ? "card-description-classic" : "card-description-playful",
                )}
              >
                The cash flow cycle illustrates how cash moves through your business. It typically starts with cash
                being used to purchase raw materials or inventory, which are then converted into products or services.
                These are sold to customers, generating accounts receivable (money owed to you). Finally, when customers
                pay, the accounts receivable are converted back into cash. Understanding and optimizing this cycle is
                key to maintaining healthy liquidity. A shorter cash flow cycle means cash returns to your business
                faster, allowing for quicker reinvestment and growth.
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
