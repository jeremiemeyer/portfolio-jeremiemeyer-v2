import Languages from "@/components/pages/dashboard/languages"
import CodeTime from "@/components/pages/dashboard/code-time"
import HeadingText from "@/components/common/heading-text"
import Link from "next/link"
import { Languages as LanguagesType } from "@/types"
import { getCodingStats } from "@/lib/api/wakatime"
import { getRepo } from "@/lib/api/github"
import GitHubRepo from "@/components/pages/dashboard/github-repo"
import { siteConfig } from "@/../config/site"
import CodeTimeSkeleton from "@/components/loaders/codetime-skeleton"

export const metadata = {
  title: "Dashboard | Jeremie Meyer",
  description: "Statistiques sur mon travail",
}

interface ResponseData {
  data: {
    human_readable_range: string
    human_readable_total_including_other_language: string
    languages: LanguagesType[]
  }
}

export default async function Dashboard() {
  const data = (await getCodingStats()) as ResponseData
  const started = data.data.human_readable_range
  const totalTime = data.data.human_readable_total_including_other_language
  const languages: LanguagesType[] = data.data.languages

  const repoData = (await getRepo()) as Repo[]

  return (
    <main className="fade-in container py-4 sm:py-8 flex flex-col items-center w-full">
      <section className="flex flex-col items-center space-y-2 text-center my-6 w-full">
        <HeadingText title="Dashboard" subtext="Statistiques sur mon travail" />
        <div className="flex flex-col gap-2 pt-4 w-full">
          <CodeTime
            started={started}
            totalTime={totalTime}
            languages={languages}
          />
          <Languages languages={languages} />
        </div>
        <div className="flex flex-col items-center">
          <p className="blue_gradient">
            Statistiques par{" "}
            <Link
              target="_blank"
              href="https://wakatime.com/"
              className="hover:underline"
            >
              WakaTime
            </Link>
          </p>
        </div>
      </section>

      <section className="py-16 space-y-4 text-left">
        <div className="px-6">
          <HeadingText title="GitHub Repo" />
        </div>

        <div className="flex flex-col items-end gap-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            <GitHubRepo repoData={repoData} />
          </div>
          <a
            target="_blank"
            href={`${siteConfig.links.github}?tab=repositories`}
            className="text-sm underline"
          >
            Tout parcourir...
          </a>
        </div>
      </section>
    </main>
  )
}
