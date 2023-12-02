import { getCodingStats } from "@/lib/api/wakatime"
import {
  Card,
  CardDescription,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"


interface CodeTimeProps {
  started: string
  totalTime: string
  languages: Languages[]
}

export default async function CodeTime({ started, totalTime, languages }: CodeTimeProps) {

  return (
    <Card className="flex-grow h-full  border border-gray-400 border-opacity-20 dark:border-slate-700 dark:border-opacity-30">
      <CardHeader>
        <CardTitle>Temps de codage</CardTitle>
        <CardDescription>la semaine dernière</CardDescription>
        {/* <CardDescription>{started}</CardDescription> */}
      </CardHeader>
      <CardContent className="text-xl font-medium">{totalTime}</CardContent>
    </Card>
  )
}
