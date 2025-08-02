import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Theme-dependent colors via CSS variables
        "theme-primary-bg": "var(--theme-primary-bg)",
        "theme-primary-text": "var(--theme-primary-text)",
        "theme-accent-1": "var(--theme-accent-1)",
        "theme-accent-2": "var(--theme-accent-2)",
        "theme-card-bg": "var(--theme-card-bg)",
        "theme-border": "var(--theme-border)",
        "theme-link": "var(--theme-link)",
        "theme-link-hover": "var(--theme-link-hover)",
        "theme-button-bg": "var(--theme-button-bg)",
        "theme-button-text": "var(--theme-button-text)",
        "theme-button-hover-bg": "var(--theme-button-hover-bg)",
        "theme-input-bg": "var(--theme-input-bg)",
        "theme-input-border": "var(--theme-input-border)",
        "theme-input-focus": "var(--theme-input-focus)",
        "theme-progress-bg": "var(--theme-progress-bg)",
        "theme-progress-fill": "var(--theme-progress-fill)",
        "theme-hero-bg": "var(--theme-hero-bg)",
        "theme-hero-text": "var(--theme-hero-text)",
        "theme-hero-opacity": "var(--theme-hero-opacity)",
        "theme-quote-bg": "var(--theme-quote-bg)",
        "theme-quote-text": "var(--theme-quote-text)",
        "theme-quote-opacity": "var(--theme-quote-opacity)",
        "theme-footer-bg": "var(--theme-footer-bg)",
        "theme-footer-text": "var(--theme-footer-text)",
        "theme-footer-link": "var(--theme-footer-link)",
        "theme-footer-border": "var(--theme-footer-border)",
        "theme-header-bg": "var(--theme-header-bg)",
        "theme-header-text": "var(--theme-header-text)",
        "theme-header-border": "var(--theme-header-border)",
        "theme-header-hover": "var(--theme-header-hover)",
        "theme-mobile-nav-bg": "var(--theme-mobile-nav-bg)",
        "theme-mobile-nav-text": "var(--theme-mobile-nav-text)",
        "theme-mobile-nav-button-bg": "var(--theme-mobile-nav-button-bg)",
        "theme-mobile-nav-button-text": "var(--theme-mobile-nav-button-text)",
        "theme-mobile-nav-button-hover": "var(--theme-mobile-nav-button-hover)",
        "theme-checkbox-border": "var(--theme-checkbox-border)",
        "theme-checkbox-checked-bg": "var(--theme-checkbox-checked-bg)",
        "theme-checkbox-checked-text": "var(--theme-checkbox-checked-text)",
        "theme-icon-color": "var(--theme-icon-color)",
        "theme-icon-hover": "var(--theme-icon-hover)",
        "theme-tooltip-bg": "var(--theme-tooltip-bg)",
        "theme-tooltip-text": "var(--theme-tooltip-text)",
        "theme-chart-1": "var(--theme-chart-1)",
        "theme-chart-2": "var(--theme-chart-2)",

        // Semantic colors (keeping for consistency, adjust if needed)
        "success-state": "#66BB6A", // Muted Green for success messages
        "red-500": "#EF4444", // Standard red for errors/deficits
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        "playfair-display": ["var(--font-playfair-display)", "serif"],
        inter: ["var(--font-inter)", "sans-serif"],
        poppins: ["var(--font-poppins)", "sans-serif"],
        fraunces: ["var(--font-fraunces)", "serif"],
        satoshi: ["var(--font-satoshi)", "sans-serif"],
        "cabinet-grotesk": ["var(--font-cabinet-grotesk)", "sans-serif"], // New font
        "work-sans": ["var(--font-work-sans)", "sans-serif"], // New font
        outfit: ["var(--font-outfit)", "sans-serif"], // New font
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
