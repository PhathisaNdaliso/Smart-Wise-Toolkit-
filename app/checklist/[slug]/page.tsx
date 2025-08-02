"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardTitle } from "@/components/ui/card"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { motion } from "framer-motion"
import { useTheme } from "@/components/theme-provider" // Import useTheme
import { cn } from "@/lib/utils" // Import cn

// Define the content for each checklist step
const checklistStepsContent: {
  [key: string]: {
    title: string
    subtitle: string
    whatIs: { heading: string; description: string }
    whyItMatters: { heading: string; points: string[] }
    howToRegister: {
      heading: string
      steps: { text: string; link?: string }[]
    }
    insight: string
    portalLink: string
    portalText: string
  }
} = {
  "register-cipc": {
    title: "Register Your Business with CIPC",
    subtitle: "Laying the legal foundation for your business in South Africa.",
    whatIs: {
      heading: "What is CIPC?",
      description:
        "CIPC (Companies and Intellectual Property Commission) is the South African government agency responsible for business registrations, intellectual property rights, and maintaining a register of companies.",
    },
    whyItMatters: {
      heading: "Why it matters:",
      points: [
        "Legal protection for your business name and assets.",
        "Enhances business credibility and trust with clients and partners.",
        "Opens doors to formal funding, tenders, and contracts.",
        "Ensures compliance with South African company law.",
      ],
    },
    howToRegister: {
      heading: "How to Register:",
      steps: [
        { text: "Visit the CIPC Portal", link: "https://www.cipc.co.za/" },
        { text: "Create your customer profile and verify your identity." },
        { text: "Choose your company name and reserve it." },
        { text: "Submit required documents (e.g., certified ID, power of attorney)." },
        { text: "Pay the registration fee." },
        { text: "Receive your COR9.1 and COR14.3 registration documents." },
      ],
    },
    insight: "A strong business begins with clear structure. Registering isn’t red tape — it’s your foundation.",
    portalLink: "https://www.cipc.co.za/",
    portalText: "Visit CIPC Portal",
  },
  "open-bank-account": {
    title: "Open a Business Bank Account",
    subtitle: "Separating your personal and business finances for clarity.",
    whatIs: {
      heading: "Why a Business Bank Account?",
      description:
        "A business bank account is a financial account specifically for your company's transactions. It keeps your business income and expenses separate from your personal funds.",
    },
    whyItMatters: {
      heading: "Why it matters:",
      points: [
        "Simplifies accounting and tax preparation.",
        "Protects personal assets from business liabilities.",
        "Enhances professionalism and credibility with clients and suppliers.",
        "Makes it easier to track business performance.",
      ],
    },
    howToRegister: {
      heading: "How to Open:",
      steps: [
        { text: "Choose a bank that offers business accounts (e.g., FNB, Standard Bank, Absa, Nedbank)." },
        { text: "Gather required documents (CIPC registration, ID, proof of address, business plan)." },
        { text: "Visit a branch or apply online." },
        { text: "Complete the application form and submit documents." },
        { text: "Activate your account and set up online banking." },
      ],
    },
    insight: "Clear financial boundaries are key to sustainable growth. Your business deserves its own financial home.",
    portalLink: "#", // Dummy link
    portalText: "Find Business Bank Accounts",
  },
  "sars-tax": {
    title: "Get a Tax Reference Number from SARS",
    subtitle: "Ensuring your business is tax compliant in South Africa.",
    whatIs: {
      heading: "What is a SARS Tax Reference Number?",
      description:
        "A tax reference number is a unique identifier issued by SARS (South African Revenue Service) to individuals and entities for tax purposes. Your business will need one to file taxes and comply with regulations.",
    },
    whyItMatters: {
      heading: "Why it matters:",
      points: [
        "Mandatory for all registered businesses in South Africa.",
        "Enables you to file various tax returns (e.g., Income Tax, VAT, PAYE).",
        "Ensures legal compliance and avoids penalties.",
        "Necessary for issuing tax invoices and receiving payments from certain clients.",
      ],
    },
    howToRegister: {
      heading: "How to Obtain:",
      steps: [
        { text: "Register your business with CIPC first." },
        { text: "Visit the SARS eFiling website or a SARS branch." },
        { text: "Complete the registration form for your business type." },
        { text: "Submit required supporting documents (e.g., CIPC documents, bank details)." },
        { text: "Receive your unique tax reference number." },
      ],
    },
    insight: "Tax compliance is a cornerstone of responsible business. Get your numbers in order early.",
    portalLink: "https://www.sars.gov.za/client-segments/businesses/",
    portalText: "Go to SARS eFiling",
  },
  "business-structure": {
    title: "Choose Your Business Structure",
    subtitle: "Deciding the legal framework for your entrepreneurial venture.",
    whatIs: {
      heading: "Understanding Business Structures",
      description:
        "Your business structure defines the legal and operational framework of your company. Common types in South Africa include Sole Proprietorship, Partnership, Private Company (Pty Ltd), and Non-Profit Company.",
    },
    whyItMatters: {
      heading: "Why it matters:",
      points: [
        "Impacts your personal liability for business debts.",
        "Affects how your business is taxed.",
        "Determines administrative and compliance requirements.",
        "Influences your ability to raise capital and attract investors.",
      ],
    },
    howToRegister: {
      heading: "How to Choose:",
      steps: [
        { text: "Assess your personal liability tolerance." },
        { text: "Consider the number of owners and their roles." },
        { text: "Evaluate your tax implications and potential tax benefits." },
        { text: "Think about future growth plans and capital needs." },
        { text: "Consult with a legal or financial advisor for tailored advice." },
      ],
    },
    insight: "The right structure provides a solid foundation. Choose wisely to support your vision.",
    portalLink: "#", // Dummy link
    portalText: "Learn More About Business Structures",
  },
  "draft-business-plan": {
    title: "Draft a Basic Business Plan",
    subtitle: "Mapping out your vision and strategy for success.",
    whatIs: {
      heading: "What is a Business Plan?",
      description:
        "A business plan is a formal document outlining your company's goals, the strategies for achieving them, and the timeline for reaching those goals. It typically includes market analysis, financial projections, and operational details.",
    },
    whyItMatters: {
      heading: "Why it matters:",
      points: [
        "Provides a clear roadmap for your business.",
        "Helps identify potential challenges and opportunities.",
        "Essential for securing funding from investors or banks.",
        "Clarifies your target market, products/services, and competitive advantage.",
      ],
    },
    howToRegister: {
      heading: "How to Draft:",
      steps: [
        { text: "Start with an Executive Summary: overview of your business." },
        { text: "Describe your Company: mission, vision, legal structure." },
        { text: "Analyze the Market: target audience, competition." },
        { text: "Outline Products/Services: what you offer and why it's unique." },
        { text: "Detail Marketing & Sales Strategy: how you'll reach customers." },
        { text: "Plan Operations: daily activities, management team." },
        { text: "Project Financials: startup costs, income, expenses, cash flow." },
      ],
    },
    insight: "A well-crafted plan is your compass. It guides your decisions and keeps your vision clear.",
    portalLink: "#", // Dummy link
    portalText: "Download Business Plan Template",
  },
  "accounting-software": {
    title: "Set Up Accounting Software",
    subtitle: "Streamlining your financial tracking from day one.",
    whatIs: {
      heading: "Why Accounting Software?",
      description:
        "Accounting software helps businesses manage their financial transactions, track income and expenses, generate reports, and simplify tax preparation. It automates many manual bookkeeping tasks.",
    },
    whyItMatters: {
      heading: "Why it matters:",
      points: [
        "Accurate and up-to-date financial records.",
        "Saves time on manual data entry and calculations.",
        "Provides insights into your business's financial health.",
        "Simplifies tax filing and compliance.",
        "Helps in budgeting and financial planning.",
      ],
    },
    howToRegister: {
      heading: "How to Set Up:",
      steps: [
        { text: "Research popular options (e.g., Xero, QuickBooks, Sage, Wave)." },
        { text: "Choose software that fits your business size and needs." },
        { text: "Set up your chart of accounts." },
        { text: "Connect your business bank account for automatic feeds." },
        { text: "Input opening balances and historical data (if any)." },
        { text: "Familiarize yourself with key features like invoicing and expense tracking." },
      ],
    },
    insight: "Good accounting is the backbone of financial control. Invest in tools that empower your decisions.",
    portalLink: "#", // Dummy link
    portalText: "Explore Accounting Software",
  },
  "register-licenses": {
    title: "Register for Relevant Licenses",
    subtitle: "Ensuring compliance with industry-specific regulations.",
    whatIs: {
      heading: "What are Business Licenses?",
      description:
        "Business licenses and permits are official authorizations issued by government agencies that allow your business to operate legally within specific industries or locations. Requirements vary widely.",
    },
    whyItMatters: {
      heading: "Why it matters:",
      points: [
        "Legal requirement for many industries and activities.",
        "Avoids hefty fines, penalties, or even business closure.",
        "Builds trust and credibility with customers and partners.",
        "Ensures your business meets health, safety, and environmental standards.",
      ],
    },
    howToRegister: {
      heading: "How to Register:",
      steps: [
        { text: "Identify your industry and specific business activities." },
        { text: "Research national, provincial, and local government requirements." },
        {
          text: "Common licenses include: trading licenses, health permits, environmental permits, BEE certificates, VAT registration (if applicable).",
        },
        { text: "Gather necessary documents and complete application forms." },
        { text: "Submit applications to the relevant authorities and pay fees." },
      ],
    },
    insight: "Compliance is not a burden, but a shield. Protect your venture by understanding the rules of the game.",
    portalLink: "#", // Dummy link
    portalText: "Find Relevant Licenses",
  },
  "insurance-quotes": {
    title: "Get Business Insurance Quotes",
    subtitle: "Protecting your business from unforeseen risks and liabilities.",
    whatIs: {
      heading: "Why Business Insurance?",
      description:
        "Business insurance protects your company from financial losses due to unexpected events like property damage, lawsuits, theft, or employee injuries. It's a crucial safety net for your assets and operations.",
    },
    whyItMatters: {
      heading: "Why it matters:",
      points: [
        "Protects your assets (property, equipment, inventory).",
        "Covers legal costs and damages from lawsuits.",
        "Safeguards against business interruption due to unforeseen events.",
        "May be legally required for certain industries or contracts.",
        "Provides peace of mind for you and your stakeholders.",
      ],
    },
    howToRegister: {
      heading: "How to Get Quotes:",
      steps: [
        { text: "Identify potential risks specific to your business (e.g., fire, theft, liability)." },
        { text: "Common types: Public Liability, Professional Indemnity, Business Interruption, Property, Cyber." },
        { text: "Contact multiple insurance providers or brokers for quotes." },
        { text: "Compare coverage, deductibles, and premiums." },
        { text: "Read policy documents carefully before committing." },
      ],
    },
    insight: "Uncertainty is part of entrepreneurship. Insurance is your strategic defense against the unexpected.",
    portalLink: "#", // Dummy link
    portalText: "Get Insurance Quotes",
  },
}

export default function ChecklistStepPage({ params }: { params: { slug: string } }) {
  const { slug } = params
  const content = checklistStepsContent[slug]
  const { theme } = useTheme() // Use the theme context

  if (!content) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4 bg-theme-primary-bg">
        <h1 className="text-4xl font-playfair-display font-bold text-theme-primary-text mb-4">Page Not Found</h1>
        <p className="text-lg font-inter text-theme-primary-text/80 mb-8">
          The checklist step you are looking for does not exist.
        </p>
        <Button
          asChild
          className={cn(
            "px-8 py-4 shadow-md",
            theme === "classic" ? "button-primary-classic" : "button-primary-playful",
          )}
        >
          <Link href="/checklist">← Return to Checklist</Link>
        </Button>
      </div>
    )
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
    <TooltipProvider>
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
              {content.title}
            </h1>
            <p
              className={cn(
                "mb-12 opacity-90 font-light",
                theme === "classic" ? "hero-subtitle-classic" : "hero-subtitle-playful",
              )}
            >
              {content.subtitle}
            </p>
          </div>
          <Image
            src={`/placeholder.svg?height=600&width=1000&query=${theme === "classic" ? `minimalist line art illustration related to ${content.title}, structured style` : `soft vector illustration related to ${content.title}, playful style`}`}
            alt={`Illustration related to ${content.title}`}
            width={1000}
            height={600}
            className="absolute inset-0 w-full h-full object-cover opacity-10"
          />
        </motion.section>

        {/* Content Sections */}
        <motion.section
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="grid gap-16"
        >
          {/* What is section */}
          <motion.div variants={itemVariants}>
            <Card
              className={cn(
                "p-10 shadow-md border",
                theme === "classic" ? "card-grid-item-classic" : "card-grid-item-playful",
              )}
            >
              <CardTitle
                className={cn(
                  "text-theme-accent-1 mb-4",
                  theme === "classic" ? "card-title-classic" : "card-title-playful",
                )}
              >
                {content.whatIs.heading}
              </CardTitle>
              <CardDescription
                className={cn(
                  "leading-relaxed",
                  theme === "classic" ? "card-description-classic" : "card-description-playful",
                )}
              >
                {content.whatIs.description.includes("CIPC") ? (
                  <>
                    CIPC (Companies and Intellectual Property Commission) is the South African government agency
                    responsible for business registrations, intellectual property rights, and maintaining a register of
                    companies.
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <span
                          className={cn(
                            "underline cursor-help ml-1 transition-colors duration-200",
                            theme === "classic" ? "link-classic" : "link-playful",
                          )}
                        >
                          CIPC
                        </span>
                      </TooltipTrigger>
                      <TooltipContent
                        className={cn(
                          "p-3 rounded-md shadow-lg max-w-xs",
                          theme === "classic" ? "tooltip-content-classic" : "tooltip-content-playful",
                        )}
                      >
                        <p>
                          The Companies and Intellectual Property Commission (CIPC) is an agency of the Department of
                          Trade and Industry in South Africa, responsible for the registration of companies,
                          co-operatives, and intellectual property rights.
                        </p>
                      </TooltipContent>
                    </Tooltip>
                  </>
                ) : (
                  content.whatIs.description
                )}
              </CardDescription>
            </Card>
          </motion.div>

          {/* Why it matters section */}
          <motion.div variants={itemVariants}>
            <Card
              className={cn(
                "p-10 shadow-md border",
                theme === "classic" ? "card-grid-item-classic" : "card-grid-item-playful",
              )}
            >
              <CardTitle
                className={cn(
                  "text-theme-accent-1 mb-4",
                  theme === "classic" ? "card-title-classic" : "card-title-playful",
                )}
              >
                {content.whyItMatters.heading}
              </CardTitle>
              <ul
                className={cn(
                  "list-disc list-inside space-y-3 text-lg leading-relaxed",
                  theme === "classic" ? "card-description-classic" : "card-description-playful",
                )}
              >
                {content.whyItMatters.points.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            </Card>
          </motion.div>

          {/* How to Register/Obtain/Choose section */}
          <motion.div variants={itemVariants}>
            <Card
              className={cn(
                "p-10 shadow-md border",
                theme === "classic" ? "card-grid-item-classic" : "card-grid-item-playful",
              )}
            >
              <CardTitle
                className={cn(
                  "text-theme-accent-1 mb-4",
                  theme === "classic" ? "card-title-classic" : "card-title-playful",
                )}
              >
                {content.howToRegister.heading}
              </CardTitle>
              <ol
                className={cn(
                  "list-decimal list-inside space-y-3 text-lg leading-relaxed",
                  theme === "classic" ? "card-description-classic" : "card-description-playful",
                )}
              >
                {content.howToRegister.steps.map((step, index) => (
                  <li key={index}>
                    {step.link ? (
                      <Link
                        href={step.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={cn(
                          "underline transition-colors duration-200",
                          theme === "classic" ? "link-classic" : "link-playful",
                        )}
                      >
                        {step.text}
                      </Link>
                    ) : (
                      step.text
                    )}
                  </li>
                ))}
              </ol>
            </Card>
          </motion.div>

          {/* StartWise Insight */}
          <motion.div variants={itemVariants}>
            <Card
              className={cn(
                "p-10 shadow-md border",
                theme === "classic" ? "quote-section-classic" : "quote-section-playful",
              )}
            >
              <CardTitle
                className={cn("font-bold mb-4", theme === "classic" ? "quote-text-classic" : "quote-text-playful")}
              >
                StartWise Insight:
              </CardTitle>
              <CardDescription
                className={cn(
                  "text-xl leading-relaxed opacity-90",
                  theme === "classic" ? "card-description-classic" : "card-description-playful",
                )}
              >
                &ldquo;{content.insight}&rdquo;
              </CardDescription>
            </Card>
          </motion.div>
        </motion.section>

        {/* Navigation Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="flex flex-col sm:flex-row gap-6 justify-center mt-10"
        >
          <Button
            asChild
            className={cn(
              "px-12 py-5 text-lg shadow-md transition-all duration-300 ease-in-out",
              theme === "classic" ? "button-primary-classic" : "button-primary-playful",
            )}
          >
            <Link href={content.portalLink} target="_blank" rel="noopener noreferrer">
              {content.portalText}
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className={cn(
              "px-12 py-5 text-lg shadow-md bg-transparent transition-all duration-300 ease-in-out",
              theme === "classic" ? "button-outline-classic" : "button-outline-playful",
            )}
          >
            <Link href="/checklist">← Return to Checklist</Link>
          </Button>
        </motion.div>
      </div>
    </TooltipProvider>
  )
}
