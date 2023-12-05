import { siteConfig } from "@/../config/site"
import Hero from "@/components/pages/home/hero"
// import Projects from "@/components/pages/home/old.projects"
import "./main.css"
import "./globals.css"
import AboutMe from "@/components/pages/home/about-me"
import Skills from "@/components/pages/home/skills"
import Projects from "@/components/pages/home/projects"
import Contact from "@/components/pages/home/contact"
import { Viewport } from "next/dist/lib/metadata/types/metadata-interface"

export const metadata = {
  title: {
    default: `${siteConfig.name} | Développement web freelance`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "Création site internet",
    "développpeur",
    "freelance",
    "Wordpress",
    "Next.js",
    "React",
    "Tailwind",
    "Portfolio",
  ],
  authors: [
    {
      name: siteConfig.author,
      url: siteConfig.url,
    },
  ],
  creator: siteConfig.author,

  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  // twitter: {
  //   card: "summary_large_image",
  //   title: siteConfig.name,
  //   description: siteConfig.description,
  //   images: [`${siteConfig.url}/xxx.jpg`],
  //   creator: "@",
  // },
  icons: {
    icon: "/favicon.ico",
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
}

export default function Home() {
  return (
    <>
      <div className="fade-in">
        <Hero />
        <main className="mb-12 container max-w-[1000px]">
          <AboutMe />
          <Skills />
          <Projects />
          <Contact />
        </main>
      </div>
    </>
  )
}
