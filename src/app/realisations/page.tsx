// "use client"
import HeadingText from "@/components/common/heading-text"
import config from "@/config"
import ProjectCard from "@/components/shared/project-card"
import ProjectsList from "@/components/pages/realisations/projects-list"

export const revalidate = 86400

export const metadata = {
  title: "Réalisations | Jeremie Meyer",
  description: "Projets réalisés",
}

export default function Projects() {
  return (
    <main className="fade-in container flex flex-col items-center py-4 divide-y-2 divide-gray-100 dark:divide-gray-800 sm:py-8">
      <div className="flex flex-col items-center space-y-2 text-center my-6">
        <HeadingText title="Réalisations" />
      </div>
      <ProjectsList />
    </main>
  )
}
