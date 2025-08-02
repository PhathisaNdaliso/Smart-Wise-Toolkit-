"use client"

import Link from "next/link"

import { useState, useEffect, useMemo } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
} from "@/components/ui/chart"
import { Line, LineChart, CartesianGrid, XAxis, YAxis } from "recharts"
import { motion } from "framer-motion"
import { useTheme } from "@/components/theme-provider" // Import useTheme
import { cn } from "@/lib/utils" // Import cn

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

interface MonthlyData {
  month: string
  income: number
  expenses: number
  net: number
}

export default function CashFlowForecasterPage() {
  const [income, setIncome] = useState<number[]>(new Array(12).fill(0))
  const [expenses, setExpenses] = useState<number[]>(new Array(12).fill(0))
  const [forecastData, setForecastData] = useState<MonthlyData[]>([])
  const { theme } = useTheme() // Use the theme context

  useEffect(() => {
    const savedIncome = localStorage.getItem("startwise-forecaster-income")
    const savedExpenses = localStorage.getItem("startwise-forecaster-expenses")

    if (savedIncome) {
      setIncome(JSON.parse(savedIncome))
    }
    if (savedExpenses) {
      setExpenses(JSON.parse(savedExpenses))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("startwise-forecaster-income", JSON.stringify(income))
  }, [income])

  useEffect(() => {
    localStorage.setItem("startwise-forecaster-expenses", JSON.stringify(expenses))
  }, [expenses])

  const handleIncomeChange = (index: number, value: string) => {
    const newIncome = [...income]
    newIncome[index] = Number.parseFloat(value) || 0
    setIncome(newIncome)
  }

  const handleExpenseChange = (index: number, value: string) => {
    const newExpenses = [...expenses]
    newExpenses[index] = Number.parseFloat(value) || 0
    setExpenses(newExpenses)
  }

  const generateForecast = () => {
    const data: MonthlyData[] = months.map((month, index) => ({
      month,
      income: income[index],
      expenses: expenses[index],
      net: income[index] - expenses[index],
    }))
    setForecastData(data)
  }

  const resetForm = () => {
    setIncome(new Array(12).fill(0))
    setExpenses(new Array(12).fill(0))
    setForecastData([])
    localStorage.removeItem("startwise-forecaster-income")
    localStorage.removeItem("startwise-forecaster-expenses")
  }

  const totalIncome = useMemo(() => forecastData.reduce((sum, d) => sum + d.income, 0), [forecastData])
  const totalExpenses = useMemo(() => forecastData.reduce((sum, d) => sum + d.expenses, 0), [forecastData])
  const finalCashPosition = useMemo(() => totalIncome - totalExpenses, [totalIncome, totalExpenses])

  const bonusInsights = useMemo(() => {
    if (forecastData.length === 0) return null

    const deficits = forecastData.filter((d) => d.net < 0)
    if (deficits.length > 0) {
      const deficitMonths = deficits.map((d) => d.month).join(", ")
      const largestDeficit = Math.min(...deficits.map((d) => d.net))
      return (
        <p className="text-red-500 font-inter">
          Watch out for {deficitMonths} – your expenses exceed income by R
          {Math.abs(largestDeficit).toLocaleString("en-ZA")}.
        </p>
      )
    } else if (finalCashPosition > 0) {
      return (
        <p className="text-success-state font-inter">Great job! Your forecast is net positive across all months.</p>
      )
    } else if (finalCashPosition === 0) {
      return (
        <p className="text-theme-primary-text font-inter">Your forecast is balanced, with income matching expenses.</p>
      )
    } else {
      return <p className="text-red-500 font-inter">Overall, your expenses exceed your income. Consider adjustments.</p>
    }
  }, [forecastData, finalCashPosition])

  const chartConfig = {
    income: {
      label: "Income",
      color: "hsl(var(--theme-chart-1))",
    },
    expenses: {
      label: "Expenses",
      color: "hsl(var(--theme-chart-2))",
    },
  }

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
            Your Cash Flow at a Glance
          </h1>
          <p
            className={cn(
              "mb-12 opacity-90 font-light",
              theme === "classic" ? "hero-subtitle-classic" : "hero-subtitle-playful",
            )}
          >
            Plan your business income and expenses over the next 12 months.
          </p>
        </div>
        <Image
          src={`/placeholder.svg?height=600&width=1000&query=${theme === "classic" ? "illustration of a person analyzing charts and a money bag, structured, serious" : "playful illustration of financial growth, vibrant, abstract"}`}
          alt="Illustration of charts and money bag"
          width={1000}
          height={600}
          className="absolute inset-0 w-full h-full object-cover opacity-10"
        />
      </motion.section>

      {/* Input Form Section */}
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
          Input Your Monthly Figures
        </h2>
        <div className="grid lg:grid-cols-2 gap-10">
          {/* Monthly Income */}
          <motion.div variants={itemVariants}>
            <Card
              className={cn(
                "p-10 shadow-md border",
                theme === "classic" ? "card-grid-item-classic" : "card-grid-item-playful",
              )}
            >
              <CardHeader className="pb-6">
                <CardTitle
                  className={cn(
                    "text-theme-accent-1",
                    theme === "classic" ? "card-title-classic" : "card-title-playful",
                  )}
                >
                  Monthly Income
                </CardTitle>
                <CardDescription
                  className={cn(
                    "text-base",
                    theme === "classic" ? "card-description-classic" : "card-description-playful",
                  )}
                >
                  Enter your expected income for each month.
                </CardDescription>
              </CardHeader>
              <CardContent className="grid gap-6">
                {months.map((month, index) => (
                  <div key={month} className="grid grid-cols-2 items-center gap-4">
                    <Label
                      htmlFor={`income-${month}`}
                      className={cn("font-medium", theme === "classic" ? "label-classic" : "label-playful")}
                    >
                      {month}
                    </Label>
                    <Input
                      id={`income-${month}`}
                      type="number"
                      placeholder="0"
                      value={income[index] === 0 ? "" : income[index]}
                      onChange={(e) => handleIncomeChange(index, e.target.value)}
                      className={cn(
                        "focus:ring-theme-input-focus",
                        theme === "classic" ? "input-classic" : "input-playful",
                      )}
                    />
                  </div>
                ))}
              </CardContent>
            </Card>
          </motion.div>

          {/* Monthly Expenses */}
          <motion.div variants={itemVariants}>
            <Card
              className={cn(
                "p-10 shadow-md border",
                theme === "classic" ? "card-grid-item-classic" : "card-grid-item-playful",
              )}
            >
              <CardHeader className="pb-6">
                <CardTitle
                  className={cn(
                    "text-theme-accent-1",
                    theme === "classic" ? "card-title-classic" : "card-title-playful",
                  )}
                >
                  Monthly Expenses
                </CardTitle>
                <CardDescription
                  className={cn(
                    "text-base",
                    theme === "classic" ? "card-description-classic" : "card-description-playful",
                  )}
                >
                  Enter your expected expenses for each month.
                </CardDescription>
              </CardHeader>
              <CardContent className="grid gap-6">
                {months.map((month, index) => (
                  <div key={month} className="grid grid-cols-2 items-center gap-4">
                    <Label
                      htmlFor={`expenses-${month}`}
                      className={cn("font-medium", theme === "classic" ? "label-classic" : "label-playful")}
                    >
                      {month}
                    </Label>
                    <Input
                      id={`expenses-${month}`}
                      type="number"
                      placeholder="0"
                      value={expenses[index] === 0 ? "" : expenses[index]}
                      onChange={(e) => handleExpenseChange(index, e.target.value)}
                      className={cn(
                        "focus:ring-theme-input-focus",
                        theme === "classic" ? "input-classic" : "input-playful",
                      )}
                    />
                  </div>
                ))}
              </CardContent>
            </Card>
          </motion.div>
        </div>
        <div className="flex flex-col sm:flex-row gap-6 justify-center mt-8">
          <Button
            onClick={generateForecast}
            className={cn(
              "px-12 py-5 text-lg shadow-md transition-all duration-300 ease-in-out",
              theme === "classic" ? "button-primary-classic" : "button-primary-playful",
            )}
          >
            See My Forecast
          </Button>
          <Button
            onClick={resetForm}
            variant="outline"
            className={cn(
              "px-12 py-5 text-lg shadow-md bg-transparent transition-all duration-300 ease-in-out",
              theme === "classic" ? "button-outline-classic" : "button-outline-playful",
            )}
          >
            Clear All
          </Button>
        </div>
      </motion.section>

      {/* Forecast Graph and Financial Insights */}
      {forecastData.length > 0 && (
        <motion.section
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="grid lg:grid-cols-3 gap-10"
        >
          <div className="lg:col-span-2">
            <h2
              className={cn(
                "font-semibold text-theme-accent-1 text-center mb-10",
                theme === "classic" ? "section-title-classic" : "section-title-playful",
              )}
            >
              Your Cash Flow Forecast
            </h2>
            <motion.div variants={itemVariants}>
              <Card
                className={cn(
                  "p-10 shadow-md border",
                  theme === "classic" ? "card-grid-item-classic" : "card-grid-item-playful",
                )}
              >
                <CardContent>
                  <ChartContainer config={chartConfig} className="min-h-[400px] w-full">
                    <LineChart accessibilityLayer data={forecastData}>
                      <CartesianGrid vertical={false} strokeDasharray="3 3" stroke="var(--theme-border)" />
                      <XAxis
                        dataKey="month"
                        tickLine={false}
                        tickMargin={10}
                        axisLine={false}
                        className={cn("text-base", theme === "classic" ? "font-inter" : "font-outfit")}
                      />
                      <YAxis
                        tickLine={false}
                        tickMargin={10}
                        axisLine={false}
                        className={cn("text-base", theme === "classic" ? "font-inter" : "font-outfit")}
                      />
                      <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
                      <ChartLegend content={<ChartLegendContent />} />
                      <Line
                        dataKey="income"
                        type="monotone"
                        stroke="hsl(var(--theme-chart-1))"
                        strokeWidth={3}
                        dot={{ r: 4 }}
                        activeDot={{ r: 6 }}
                      />
                      <Line
                        dataKey="expenses"
                        type="monotone"
                        stroke="hsl(var(--theme-chart-2))"
                        strokeWidth={3}
                        dot={{ r: 4 }}
                        activeDot={{ r: 6 }}
                      />
                    </LineChart>
                  </ChartContainer>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Financial Insights Panel */}
          <motion.div variants={itemVariants} className="lg:col-span-1">
            <Card
              className={cn(
                "p-10 h-full flex flex-col shadow-md border",
                theme === "classic" ? "card-grid-item-classic" : "card-grid-item-playful",
              )}
            >
              <CardHeader className="pb-6">
                <CardTitle
                  className={cn(
                    "text-theme-accent-1",
                    theme === "classic" ? "card-title-classic" : "card-title-playful",
                  )}
                >
                  Financial Insights
                </CardTitle>
                <CardDescription
                  className={cn(
                    "text-base",
                    theme === "classic" ? "card-description-classic" : "card-description-playful",
                  )}
                >
                  Key takeaways from your forecast.
                </CardDescription>
              </CardHeader>
              <CardContent className="grid gap-6 flex-1">
                <div className="flex justify-between items-center">
                  <span className={cn("font-medium text-lg", theme === "classic" ? "font-inter" : "font-outfit")}>
                    Total Income:
                  </span>
                  <span
                    className={cn(
                      "text-success-state font-bold text-lg",
                      theme === "classic" ? "font-inter" : "font-outfit",
                    )}
                  >
                    R{totalIncome.toLocaleString("en-ZA")}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className={cn("font-medium text-lg", theme === "classic" ? "font-inter" : "font-outfit")}>
                    Total Expenses:
                  </span>
                  <span
                    className={cn("text-red-500 font-bold text-lg", theme === "classic" ? "font-inter" : "font-outfit")}
                  >
                    R{totalExpenses.toLocaleString("en-ZA")}
                  </span>
                </div>
                <div className="flex justify-between items-center border-t border-theme-border pt-6 mt-6">
                  <span className={cn("font-bold text-xl", theme === "classic" ? "font-inter" : "font-outfit")}>
                    Final Cash Position:
                  </span>
                  <span
                    className={cn(
                      "font-bold text-xl",
                      finalCashPosition >= 0 ? "text-success-state" : "text-red-500",
                      theme === "classic" ? "font-inter" : "font-outfit",
                    )}
                  >
                    R{finalCashPosition.toLocaleString("en-ZA")}
                  </span>
                </div>
                <div className={cn("mt-4 text-base italic", theme === "classic" ? "font-inter" : "font-outfit")}>
                  {bonusInsights}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.section>
      )}

      {/* Learn More Section */}
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
          Learn More About Cash Flow
        </h2>
        <div className="grid md:grid-cols-3 gap-10">
          <motion.div variants={itemVariants}>
            <Card
              className={cn(
                "p-10 shadow-md border",
                theme === "classic" ? "card-grid-item-classic" : "card-grid-item-playful",
              )}
            >
              <CardTitle className={cn("mb-4", theme === "classic" ? "card-title-classic" : "card-title-playful")}>
                What is Cash Flow?
              </CardTitle>
              <CardDescription
                className={cn(
                  "leading-relaxed",
                  theme === "classic" ? "card-description-classic" : "card-description-playful",
                )}
              >
                Understand the movement of money in and out of your business.
              </CardDescription>
              <Link
                href="/learn/what-is-cash-flow"
                className={cn(
                  "underline text-base font-medium mt-6 block transition-colors duration-200",
                  theme === "classic" ? "link-classic" : "link-playful",
                )}
              >
                Read More &rarr;
              </Link>
            </Card>
          </motion.div>
          <motion.div variants={itemVariants}>
            <Card
              className={cn(
                "p-10 shadow-md border",
                theme === "classic" ? "card-grid-item-classic" : "card-grid-item-playful",
              )}
            >
              <CardTitle className={cn("mb-4", theme === "classic" ? "card-title-classic" : "card-title-playful")}>
                Why it Matters
              </CardTitle>
              <CardDescription
                className={cn(
                  "leading-relaxed",
                  theme === "classic" ? "card-description-classic" : "card-description-playful",
                )}
              >
                Learn why managing cash flow is crucial for business survival and growth.
              </CardDescription>
              <Link
                href="/learn/why-cash-flow-matters"
                className={cn(
                  "underline text-base font-medium mt-6 block transition-colors duration-200",
                  theme === "classic" ? "link-classic" : "link-playful",
                )}
              >
                Discover &rarr;
              </Link>
            </Card>
          </motion.div>
          <motion.div variants={itemVariants}>
            <Card
              className={cn(
                "p-10 shadow-md border",
                theme === "classic" ? "card-grid-item-classic" : "card-grid-item-playful",
              )}
            >
              <CardTitle className={cn("mb-4", theme === "classic" ? "card-title-classic" : "card-title-playful")}>
                How to Improve It
              </CardTitle>
              <CardDescription
                className={cn(
                  "leading-relaxed",
                  theme === "classic" ? "card-description-classic" : "card-description-playful",
                )}
              >
                Practical strategies to optimize your cash flow and financial health.
              </CardDescription>
              <Link
                href="/learn/how-to-improve-cash-flow"
                className={cn(
                  "underline text-base font-medium mt-6 block transition-colors duration-200",
                  theme === "classic" ? "link-classic" : "link-playful",
                )}
              >
                Get Tips &rarr;
              </Link>
            </Card>
          </motion.div>
        </div>
        <div className="text-center mt-10">
          <Button
            className={cn(
              "px-12 py-8 text-xl shadow-lg transition-all duration-300 ease-in-out",
              theme === "classic" ? "button-primary-classic" : "button-primary-playful",
            )}
          >
            Download Free Budgeting Template
          </Button>
        </div>
      </motion.section>
    </div>
  )
}
