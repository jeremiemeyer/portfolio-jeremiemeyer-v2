'use client'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip } from "recharts"
import { Languages } from "@/types/api"


interface LanguagesProps {
  languages: Languages[]
}

const dimensions = {
  height: 400,
  width: 400,
}

export default async function Languages({ languages }: LanguagesProps) {
  const data = languages.slice(0, 10)

  const colorMapping: Record<string, string> = {
    TypeScript: "#3178c6",
    JavaScript: "#f1e05a",
    PHP: "#4f5d95",
    HTML: "#e34c26",
    C: "#555555",
    ["C++"]: "#f34b7d",
    ["C#"]: "#178600",
    SQL: "#e38c00",
    Markdown: "#083fa1",
    Java: "#b07219",
    Python: "#3572A5",
  }

  return (
    <>
      <Card className="w-full border border-gray-400 border-opacity-20 dark:border-slate-700 dark:border-opacity-30">
        <CardHeader>
          <CardTitle className="text-lg">Langages utilisés</CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-1 gap-2 sm:grid-cols-2 sm:gap-0">
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={50}
                outerRadius={100}
                paddingAngle={3}
                stroke="black"
                dataKey="hours"
              >
                {data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={colorMapping[entry.name] || "#1f9aef"}
                  />
                ))}
              </Pie>
              <Tooltip
                formatter={(text, name, entry) => [
                  `${entry.payload.text} (${entry.payload.percent}%)`,
                  entry.payload.name,
                ]}
              />
            </PieChart>
          </ResponsiveContainer>
          <div className="flex items-center justify-center">
            <div className="p-4">
              {data.map((entry, index) => (
                <div
                  key={`label-${index}`}
                  className="mb-2 flex items-center text-sm"
                >
                  <span
                    className="mr-2 inline-block h-4 w-4 shadow-sm"
                    style={{
                      backgroundColor: colorMapping[entry.name] || "#1f9aef",
                    }}
                  ></span>
                  {entry.name} - {entry.text}
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  )
}
