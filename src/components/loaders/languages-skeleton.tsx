import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Skeleton } from "../ui/skeleton"

const dimensions = {
  height: 400,
  width: 400,
}

export default async function LanguagesSkeleton() {
  return (
    <>
      <Card className="w-full border border-gray-400 border-opacity-20 dark:border-slate-700 dark:border-opacity-30">
        <CardHeader>
          <CardTitle className="text-lg">Langages utilisés</CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-1 gap-2 sm:grid-cols-2 sm:gap-0">
          <Skeleton className="h-[250] mx-auto" />
          {/* <ResponsiveContainer width="100%" height={250}></ResponsiveContainer> */}
          <div className="flex items-center justify-center">
            <div className="p-4">
              {Array.from({ length: 6 }).map((_, index) => (
                <Skeleton className="h-6 w-[9.6rem] mb-2" />
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  )
}
