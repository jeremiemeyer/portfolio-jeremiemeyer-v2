import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Skeleton } from "../ui/skeleton"

const dimensions = {
  height: 400,
  width: 400,
}

export default async function LanguagesSkeleton() {
  return (
    <>
      <Card className="w-full">
        <CardHeader>
          <CardTitle className="text-lg">Langages utilisés</CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-1 gap-2 sm:grid-cols-2 sm:gap-0">
            <Skeleton className="h-[250]"/>
          {/* <ResponsiveContainer width="100%" height={250}></ResponsiveContainer> */}
          <div className="flex items-center justify-center">
            <div className="p-4">
              {Array.from({ length: 10 }).map((_, index) => (
                  <Skeleton className="h-4 w-[9.6rem] p-2" />
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  )
}
