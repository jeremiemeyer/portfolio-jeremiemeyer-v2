import { Suspense } from "react"
import DashboardSkeleton from "@/components/loaders/dashboard-skeleton"
import Languages from "@/components/pages/dashboard/languages"
import CodeTime from "@/components/pages/dashboard/code-time"
import HeadingText from "@/components/common/heading-text"
import Link from "next/link"
import { Languages as LanguagesType } from "@/types"
import { getCodingStats } from "@/lib/api/wakatime"
import GitHubRepo from "@/components/pages/home/github-repo"
import ProjectsSkeleton from "@/components/loaders/projects-skeleton"
import { siteConfig } from "@/../config/site"

export const metadata = {
  title: "Dashboard | Jeremie Meyer",
}

interface ResponseData {
  data: {
    human_readable_range: string
    human_readable_total_including_other_language: string
    languages: LanguagesType[]
  }
}

// interface LanguagesProps {
//   languages: Languages[]
// }

export default async function Dashboard() {
  const data = (await getCodingStats()) as ResponseData
  // const totalTime = data.data.human_readable_total_including_other_language
  const languages: LanguagesType[] = data.data.languages

  return (
    <main className="fade-in container divide-y-2 divide-gray-100 dark:divide-gray-800 py-4 sm:py-8 flex flex-col items-center">
      <div className="flex flex-col items-center space-y-2 text-center my-6">
        <HeadingText title="Dashboard" subtext="Statistiques sur mon travail" />
        <div className="flex flex-wrap gap-2 pt-4">
          <Suspense fallback={<DashboardSkeleton />}>
            <CodeTime />
            <Languages languages={languages} />
          </Suspense>
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

          <section className="py-16 space-y-4 text-left">
            <div className="px-6">
              <HeadingText title="GitHub Repo" />
            </div>

            <div className="flex flex-col items-end gap-4">
              <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                <Suspense fallback={<ProjectsSkeleton />}>
                  <GitHubRepo />
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
          </section>
        </div>
      </div>
    </main>
  )
}
