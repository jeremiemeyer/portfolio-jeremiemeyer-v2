import { Suspense } from "react"
import { siteConfig } from "@/../config/site"
import Hero from "@/components/pages/home/hero"
// import Projects from "@/components/pages/home/old.projects"
import HeadingText from "@/components/common/heading-text"
import ProjectsSkeleton from "@/components/loaders/projects-skeleton"
import './main.css'
import './globals.css'
import AboutMe from "@/components/pages/home/about-me"
import Skills from "@/components/pages/home/skills"
import Projects from "@/components/pages/home/projects"
import Contact from "@/components/pages/home/contact"

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
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
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
  //   images: [`${siteConfig.url}/og.jpg`],
  //   creator: "@_rdev7",
  // },
  icons: {
    icon: "/favicon.ico",
  },
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
          {/* <section className="py-16 px-8 md:px-0 lg:py-32 space-y-4">
          <HeadingText
            title="GitHub Repo"
          />
            <div className="flex flex-col items-end gap-4">
              <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                <Suspense fallback={<ProjectsSkeleton />}>
                  <Projects />
                </Suspense>
              </div>
              <a
                target="_blank"
                href={`${siteConfig.links.github}?tab=repositories`}
                className="text-sm underline"
              >
                Tout parcourir...
              </a>
            </div>
          </section> */}
        </main>
      </div>
    </>
  )
}
