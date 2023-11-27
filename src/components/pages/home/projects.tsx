import HeadingText from "@/components/common/heading-text"
import { Badge } from "@/components/ui/badge"
import ProjectCard from "./project-card"
import config from "@/config"

export default function Projects() {
  return (
    <>
      <section className="mt-8 p-5 lg:p-8 rounded-3xl bg-gray-300 bg-opacity-20 dark:bg-gray-700 dark:bg-opacity-20 border border-gray-400 border-opacity-20 dark:border-slate-700 dark:border-opacity-30 mx-auto">
        <div className="flex flex-col lg:flex-col-reverse gap-16">
          <div className="space-y-4">
            <HeadingText title="Projets réalisés" />
            <div className="flex flex-col-reverse lg:flex-col gap-6 items-center">
              {config.projects.map(
                ({ slug, title, projectType, shortDescription, banner, stack }) => (
                  <ProjectCard
                    key={slug}
                    title={title}
                    projectType={projectType}
                    description={shortDescription}
                    banner={banner}
                    stack={stack}
                    href={`/realisations/${slug}`}
                  />
                )
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
