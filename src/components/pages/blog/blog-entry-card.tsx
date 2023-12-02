import Link from "next/link"
import { unbounded } from "@/app/fonts"

export default function BlogEntryCard({
  title,
  datePublished,
  shortDescription,
  slug,
}: {
  title: string
  datePublished: Date
  shortDescription: string
  content: React.ReactNode
  slug: string
}) {
  const formattedDate = datePublished.toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  })

  return (
    <Link href={`/blog/${slug}`}>
      <div
        className="p-5 lg:p-6 rounded-3xl bg-gray-300 hover:bg-gray-400 hover:bg-opacity-20 bg-opacity-20 dark:bg-gray-700 dark:bg-opacity-20 dark:hover:bg-gray-600 dark:hover:bg-opacity-20 border border-gray-400 border-opacity-20 dark:border-slate-700 dark:border-opacity-30 mx-auto hover:text-blue-600"
        // style={{
        //   backgroundImage: `linear-gradient(to right, black, rgba(0, 0, 0, 0)), url("${banner}")`,
        // }}
      >
        <div className="flex-col ml-0 p-2 md:p-0 md:w-1/2 hover:text-blue-600">
          <p className="text-zinc-700 dark:text-zinc-300 pb-2 hover:text-zinc-700 dark:hover:text-zinc-300">{formattedDate}</p>
          <p className={`${unbounded.className} text-xl hover:text-blue-600 font-semibold`}>{title}</p>
          <p className="text-zinc-700 dark:text-zinc-300 pb-2 hover:text-zinc-700 dark:hover:text-zinc-300">{shortDescription}</p>
          <p className="pt-2 font-semibold">Lire l'article</p>
        </div>
      </div>
    </Link>
  )
}
