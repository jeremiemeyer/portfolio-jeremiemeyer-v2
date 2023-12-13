import { Skeleton } from "@/components/ui/skeleton"
import SectionCard from "@/components/pages/home/section-card"
import { H2, H3 } from "@/components/form"

export default function CodeTimeSkeleton() {
  return (
    <SectionCard>
      <H2>Temps de codage</H2>
      <H3>7 derniers jours</H3>
      <Skeleton className="text-xl h-6 w-[12rem] flex mx-auto" />
    </SectionCard>
  )
}
