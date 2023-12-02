import HeadingText from "@/components/common/heading-text"
import Card from "@/components/card"
import config from "./../../config"

export const metadata = {
    title: "Prestations | Jeremie Meyer",
  }

export default function page() {
  return (
    <>
      <main className="fade-in container flex flex-col items-center py-4 divide-y-2 divide-gray-100 dark:divide-gray-800 sm:py-8">
        <div className="flex flex-col items-center space-y-2 text-center">
          <HeadingText title="Prestations" />
        </div>
        <div className="flex flex-wrap gap-2">
          <div className="mt-4 flex flex-wrap items-center">
            {config.prestations.map(({ slug, title, shortDescription, banner }) => (
              <Card
                key={slug}
                title={title}
                description={shortDescription}
                banner={banner}
                href={`/prestations/${slug}`}
              />
            ))}
          </div>
        </div>
      </main>
    </>
  )
}
