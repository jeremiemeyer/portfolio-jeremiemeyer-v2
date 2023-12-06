
import { Languages } from "@/types/api"
import SectionCard from "@/components/pages/home/section-card"
import { H2, H3 } from "@/components/form"

interface CodeTimeProps {
  started: string
  totalTime: string
  languages: Languages[]
}

export default async function CodeTime({
  started,
  totalTime,
  languages,
}: CodeTimeProps) {
  return (
    <SectionCard>
      <H2>Temps de codage</H2>
      <H3>La semaine dernière</H3>
      <span className="text-xl">{totalTime}</span>
    </SectionCard>
  )
}
