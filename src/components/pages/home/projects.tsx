import HeadingText from "@/components/common/heading-text"
import ProjectCard from "../../shared/project-card"
import config from "@/config"

export default function Projects() {
  return (
    <>
      <section className="flex flex-col mb-12">
          <div className="p-5 lg:p-8">
            <HeadingText title="Projets réalisés" />
          </div>
          <div className="flex flex-col gap-6 items-center">
            {config.projects.map(
              ({
                slug,
                title,
                projectType,
                shortDescription,
                banner,
                stack,
              }) => (
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
      </section>
    </>
  )
}
