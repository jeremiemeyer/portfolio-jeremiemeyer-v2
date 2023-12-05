import HeadingText from "@/components/common/heading-text"
import { Badge } from "@/components/ui/badge"

export default function Skills() {
  const skills = [
    "React.js",
    "Next.js",
    "Redux",
    "TypeScript",
    "JavaScript",
    "TailwindCSS",
    "Node.js",
    "Express.js",
    "GitHub",
  ]

  return (
    <>
      <section className="mt-8 p-5 lg:p-8 rounded-3xl bg-gray-300 bg-opacity-20 dark:bg-gray-700 dark:bg-opacity-20 border border-gray-400 border-opacity-20 dark:border-slate-700 dark:border-opacity-30 mx-auto">
        <div className="flex flex-col lg:flex-col-reverse gap-16">
          <div className="space-y-4">
            <HeadingText title="Compétences" />
            <div className="flex flex-row lg:flex-row gap-16 items-center">
              <div className="space-x-2 space-y-2">
                {skills.map((skill) => (
                  <Badge
                    className="lg:text-sm bg-blue-500 hover:bg-blue-400 dark:bg-blue-800 dark:hover:bg-blue-700"
                    key={skill}
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
