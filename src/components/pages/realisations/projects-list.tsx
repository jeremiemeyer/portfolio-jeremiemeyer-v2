import ProjectCard from "@/components/shared/project-card"
import config from "@/config"
import FadeInOnEntry from "@/components/fade-in-on-entry"

export default function ProjectsList() {
  const { projects } = config

  if (!projects) {
    return <p>Aucun projet disponible.</p>
  }

  return (
    <div className="flex flex-col w-full gap-2">
      <div className="mt-4  items-center grid gap-4 pb-12">
        {projects.map(
          ({ slug, title, projectType, shortDescription, banner, stack }) => (
            <FadeInOnEntry>
              <ProjectCard
                key={slug}
                title={title}
                projectType={projectType}
                description={shortDescription}
                banner={banner}
                stack={stack}
                href={`/realisations/${slug}`}
              />
            </FadeInOnEntry>
          )
        )}
      </div>
    </div>
  )
}
