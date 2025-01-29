/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["var(--font-roboto)", "sans-serif"],
        dmSans: ["var(--font-dm-sans)", "sans-serif"],
      },
      fontSize: {
        xs: [
          "0.975rem",
          {
            lineHeight: "1.5",
          },
        ],
        sm: [
          "1rem",
          {
            lineHeight: "1.5715",
          },
        ],
        base: [
          "1.125rem",
          {
            lineHeight: "1.5",
            letterSpacing: "-0.017em",
          },
        ],
        lg: [
          "1.25rem",
          {
            lineHeight: "1.5",
            letterSpacing: "-0.017em",
          },
        ],
        xl: [
          "1.5rem",
          {
            lineHeight: "1.5",
            letterSpacing: "-0.017em",
          },
        ],
        "2xl": [
          "1.875rem",
          {
            lineHeight: "1.415",
            letterSpacing: "-0.017em",
          },
        ],
        "3xl": [
          "2.25rem",
          {
            lineHeight: "1.333",
            letterSpacing: "-0.017em",
          },
        ],
        "4xl": [
          "3rem",
          {
            lineHeight: "1.277",
            letterSpacing: "-0.017em",
          },
        ],
        "5xl": [
          "3.5rem",
          {
            lineHeight: "1.2",
            letterSpacing: "-0.017em",
          },
        ],
        "6xl": [
          "4rem",
          {
            lineHeight: "1",
            letterSpacing: "-0.017em",
          },
        ],
        "7xl": [
          "5rem",
          {
            lineHeight: "1",
            letterSpacing: "-0.017em",
          },
        ],
      },
      letterSpacing: {
        tighter: "-0.02em",
        tight: "-0.01em",
        normal: "0",
        wide: "0.01em",
        wider: "0.02em",
        widest: "0.4em",
      },
      animation: {
        endless: "endless 20s linear infinite",
        shine: "shine 2s ease-in-out 500ms infinite",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",

        // tweets marquee
        "infinite-scroll": "infinite-scroll 60s linear infinite",
        "infinite-scroll-inverse":
          "infinite-scroll-inverse 60s linear infinite",
      },
      keyframes: {
        endless: {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(-245px)" },
        },
        shine: {
          "0%": { top: "0", transform: "scaleY(5)", opacity: "0" },
          "10%": { opacity: ".8" },
          "50%": { top: "100%", transform: "scaleY(10)", opacity: "0" },
          "100%": { top: "100%", transform: "scaleY(1)", opacity: "0" },
        },
        "infinite-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
        "infinite-scroll-inverse": {
          from: { transform: "translateX(-100%)" },
          to: { transform: "translateX(0)" },
        },
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      colors: {
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        neutral: {
          50: "#F5F5F5",
          100: "#FFF",
          200: "#E6E2D4",
        },
        accent: {
          success: "#16704C",
          highlight: "#5F3131",
          attention: "#EF546B",
          secondaryAttention: "#D9CD9C",
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        gradient: {
          light: "#F5F5F5",
          red: "#E35134",
          primary: "#FF914D",
          darkRed: "#BE2C1B",
          darkestRed: "#6F0A0D",
        },
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          1: "hsl(var(--chart-1))",
          2: "hsl(var(--chart-2))",
          3: "hsl(var(--chart-3))",
          4: "hsl(var(--chart-4))",
          5: "hsl(var(--chart-5))",
        },
        theme: {
          primary: "hsl(var(--theme-primary))",
          secondary: "hsl(var(--theme-secondary))",
          background: "hsl(var(--theme-background))",
        },
        borderRadius: {
          lg: "var(--radius)",
          md: "calc(var(--radius) - 2px)",
          sm: "calc(var(--radius) - 4px)",
        },
      },
    },
    plugins: [require("@tailwindcss/forms"), require("tailwindcss-animate")],
  },
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["var(--font-roboto)", "sans-serif"],
        dmSans: ["var(--font-dm-sans)", "sans-serif"],
      },
      fontSize: {
        xs: [
          "0.975rem",
          {
            lineHeight: "1.5",
          },
        ],
        sm: [
          "1rem",
          {
            lineHeight: "1.5715",
          },
        ],
        base: [
          "1.125rem",
          {
            lineHeight: "1.5",
            letterSpacing: "-0.017em",
          },
        ],
        lg: [
          "1.25rem",
          {
            lineHeight: "1.5",
            letterSpacing: "-0.017em",
          },
        ],
        xl: [
          "1.5rem",
          {
            lineHeight: "1.5",
            letterSpacing: "-0.017em",
          },
        ],
        "2xl": [
          "1.875rem",
          {
            lineHeight: "1.415",
            letterSpacing: "-0.017em",
          },
        ],
        "3xl": [
          "2.25rem",
          {
            lineHeight: "1.333",
            letterSpacing: "-0.017em",
          },
        ],
        "4xl": [
          "3rem",
          {
            lineHeight: "1.277",
            letterSpacing: "-0.017em",
          },
        ],
        "5xl": [
          "3.5rem",
          {
            lineHeight: "1.2",
            letterSpacing: "-0.017em",
          },
        ],
        "6xl": [
          "4rem",
          {
            lineHeight: "1",
            letterSpacing: "-0.017em",
          },
        ],
        "7xl": [
          "5rem",
          {
            lineHeight: "1",
            letterSpacing: "-0.017em",
          },
        ],
      },
      letterSpacing: {
        tighter: "-0.02em",
        tight: "-0.01em",
        normal: "0",
        wide: "0.01em",
        wider: "0.02em",
        widest: "0.4em",
      },
      animation: {
        endless: "endless 20s linear infinite",
        shine: "shine 2s ease-in-out 500ms infinite",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",

        // tweets marquee
        "infinite-scroll": "infinite-scroll 60s linear infinite",
        "infinite-scroll-inverse":
          "infinite-scroll-inverse 60s linear infinite",
      },
      keyframes: {
        endless: {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(-245px)" },
        },
        shine: {
          "0%": { top: "0", transform: "scaleY(5)", opacity: "0" },
          "10%": { opacity: ".8" },
          "50%": { top: "100%", transform: "scaleY(10)", opacity: "0" },
          "100%": { top: "100%", transform: "scaleY(1)", opacity: "0" },
        },
        "infinite-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
        "infinite-scroll-inverse": {
          from: { transform: "translateX(-100%)" },
          to: { transform: "translateX(0)" },
        },
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      colors: {
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        neutral: {
          50: "#F5F5F5",
          100: "#FFF",
          200: "#E6E2D4",
        },
        accent: {
          success: "#16704C",
          highlight: "#5F3131",
          attention: "#EF546B",
          secondaryAttention: "#D9CD9C",
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        gradient: {
          light: "#F5F5F5",
          red: "#E35134",
          primary: "#FF914D",
          darkRed: "#BE2C1B",
          darkestRed: "#6F0A0D",
        },
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          1: "hsl(var(--chart-1))",
          2: "hsl(var(--chart-2))",
          3: "hsl(var(--chart-3))",
          4: "hsl(var(--chart-4))",
          5: "hsl(var(--chart-5))",
        },
        theme: {
          primary: "hsl(var(--theme-primary))",
          secondary: "hsl(var(--theme-secondary))",
          background: "hsl(var(--theme-background))",
        },
        borderRadius: {
          lg: "var(--radius)",
          md: "calc(var(--radius) - 2px)",
          sm: "calc(var(--radius) - 4px)",
        },
      },
    },
    plugins: [require("@tailwindcss/forms"), require("tailwindcss-animate")],
  },
};
