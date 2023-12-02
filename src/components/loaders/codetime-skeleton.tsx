import { Skeleton } from "@/components/ui/skeleton"
import { Card, CardTitle, CardDescription, CardHeader } from "@/components/ui/card"

export default function CodeTimeSkeleton() {
  return (
    <Card className="flex-grow h-full w-full border border-gray-400 border-opacity-20 dark:border-slate-700 dark:border-opacity-30">
      <CardHeader>
        <CardTitle>Temps de codage</CardTitle>
        <CardDescription>la semaine dernière</CardDescription>
        {/* <CardDescription>{started}</CardDescription> */}
      </CardHeader>
      <Skeleton className="h-8 w-[16rem]" />
    </Card>
  )
}
