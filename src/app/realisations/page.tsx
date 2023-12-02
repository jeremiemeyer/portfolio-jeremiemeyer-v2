// "use client"
import HeadingText from "@/components/common/heading-text"
import config from "@/config"
import ProjectCard from "@/components/shared/project-card"

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
        <div className="flex flex-wrap gap-2">
          <div className="mt-4 flex flex-wrap items-center gap-4">
            {config.projects.map(({ slug, title, projectType, shortDescription, banner, stack }) => (
              <ProjectCard
                key={slug}
                title={title}
                projectType={projectType}
                description={shortDescription}
                banner={banner}
                stack={stack}
                href={`/realisations/${slug}`}
              />
            ))}
          </div>
        </div>
      </main>
  )
}
