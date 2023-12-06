import HeadingText from "@/components/common/heading-text"
import { Badge } from "@/components/ui/badge"
import SectionCard from "./section-card"

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
    <SectionCard>
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
    </SectionCard>
  )
}
