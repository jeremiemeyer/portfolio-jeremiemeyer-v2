"use client"

import "./globals.css"
import { siteConfig } from "@/../config/site"
import { Cookie, Inter, Noto_Sans, Unbounded, Work_Sans } from "next/font/google"
import Navbar from "../components/layout/navbar"
import Footer from "../components/layout/footer"
import { ThemeProvider } from "@/components/theme-provider"
import { AppProgressBar as ProgressBar } from "next-nprogress-bar"
import "./main.css"
import "./globals.css"
import "@fortawesome/fontawesome-svg-core/styles.css"
import { config } from "@fortawesome/fontawesome-svg-core"
config.autoAddCss = false
import CookiesConsent from "@/components/CookiesConsent"
import { worksans, lato } from "./fonts"



// change : remettre ça qq part ailleurs
// export const metadata = {
//   title: {
//     default: siteConfig.name,
//     template: `%s | ${siteConfig.name}`,
//   },
//   description: siteConfig.description,
//   keywords: [
//     "Next.js",
//     "React",
//     "Tailwind CSS",
//     "Radix UI",
//     "shadcn/ui",
//     "React Query",
//     "Portfolio",
//   ],
//   authors: [
//     {
//       name: siteConfig.author,
//       url: siteConfig.url,
//     },
//   ],
//   creator: siteConfig.author,
//   themeColor: [
//     { media: "(prefers-color-scheme: light)", color: "white" },
//     { media: "(prefers-color-scheme: dark)", color: "black" },
//   ],
//   openGraph: {
//     type: "website",
//     locale: "en_US",
//     url: siteConfig.url,
//     title: siteConfig.name,
//     description: siteConfig.description,
//     siteName: siteConfig.name,
//   },
//   twitter: {
//     card: "summary_large_image",
//     title: siteConfig.name,
//     description: siteConfig.description,
//     images: [`${siteConfig.url}/og.jpg`],
//     creator: "@_rdev7",
//   },
//   icons: {
//     icon: "/favicon.ico",
//   },
// }

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html lang="en">
        <body
          className={`${worksans.className} flex flex-col min-h-screen bg-background text-zinc-800 dark:text-zinc-200`}
        >
          <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
            <ProgressBar
              height="4px"
              color="#2563eb"
              options={{ showSpinner: false }}
              shallowRouting
            />
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
