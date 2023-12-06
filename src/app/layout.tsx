"use client"
import "./globals.css"
import Navbar from "../components/layout/navbar"
import Footer from "../components/layout/footer"
import { ThemeProvider } from "@/components/theme-provider"
// import { AppProgressBar as ProgressBar } from "next-nprogress-bar"
import { Next13ProgressBar } from "next13-progressbar"
import "./main.css"
import "./globals.css"
import "@fortawesome/fontawesome-svg-core/styles.css"
import { config } from "@fortawesome/fontawesome-svg-core"
config.autoAddCss = false
import { worksans } from "./fonts"

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html lang="fr">
        <body
          className={`${worksans.className} flex flex-col min-h-screen bg-background dark:bg-gray-950 text-zinc-800 dark:text-zinc-200`}
        >
          <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
            <Navbar />
            {children}
            <Footer />
          </ThemeProvider>
        </body>
        {/* <CookiesConsent /> */}
      </html>
    </>
  )
}
