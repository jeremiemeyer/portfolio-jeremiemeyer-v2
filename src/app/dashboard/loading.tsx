import DashboardSkeleton from "@/components/loaders/dashboard-skeleton"
import HeadingText from "@/components/common/heading-text"
import ProjectsSkeleton from "@/components/loaders/projects-skeleton"
import CodeTimeSkeleton from "@/components/loaders/codetime-skeleton"
import LanguagesSkeleton from "@/components/loaders/languages-skeleton"

export const metadata = {
  title: "Dashboard",
  description: "Statistics about my activities",
}

export default async function Dashboard() {
  return (
    <main className="fade-in container py-4 sm:py-8 flex flex-col items-center w-full">
      <section className="flex flex-col items-center space-y-2 text-center my-6">
        <HeadingText title="Dashboard" subtext="Statistiques sur mon travail" />
        <div className="flex flex-wrap gap-2 pt-4">
          <CodeTimeSkeleton />
          <LanguagesSkeleton />
        </div>
        <div className="flex flex-col items-center">
          <p className="blue_gradient">Statistiques par WakaTime</p>
        </div>
      </section>

      <section className="py-16 space-y-4 text-left">
        <div className="px-6">
          <HeadingText title="GitHub Repo" />
        </div>

        <div className="flex flex-col items-end gap-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            <ProjectsSkeleton />
          </div>
          <a target="_blank" className="text-sm underline">
            Tout parcourir...
          </a>
        </div>
      </section>
    </main>
  )
}
