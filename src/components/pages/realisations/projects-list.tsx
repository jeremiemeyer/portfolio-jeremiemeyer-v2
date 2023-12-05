import ProjectCard from "@/components/shared/project-card"
import config from "@/config"

export default function ProjectsList() {
  const { projects } = config

  if (!projects) {
    return <p>Aucun projet disponible.</p>
  }

  return (
    <div className="flex flex-wrap gap-2">
      <div className="mt-4 flex flex-wrap items-center gap-4 pb-12">
        {projects.map(
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
  )
}
