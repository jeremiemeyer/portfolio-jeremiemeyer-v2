import { getCodingStats } from "@/lib/api/wakatime"
import {
  Card,
  CardDescription,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

interface ResponseData {
  data: {
    human_readable_range: string
    human_readable_total: string
  }
}

export default async function CodeTime() {
  const data = (await getCodingStats()) as ResponseData
  const started = data.data.human_readable_range
  const totalTime = data.data.human_readable_total

  return (
    <Card className="flex-grow h-full bg-gray-300 bg-opacity-20 dark:bg-gray-700 dark:bg-opacity-20 border border-gray-400 border-opacity-20 dark:border-slate-700 dark:border-opacity-30">
      <CardHeader>
        <CardTitle>Temps de codage</CardTitle>
        <CardDescription>la semaine dernière</CardDescription>
        {/* <CardDescription>{started}</CardDescription> */}
      </CardHeader>
      <CardContent className="text-xl font-medium">{totalTime}</CardContent>
    </Card>
  )
}
