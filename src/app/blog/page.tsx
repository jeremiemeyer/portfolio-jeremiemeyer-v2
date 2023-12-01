// @ts-nocheck
import HeadingText from "@/components/common/heading-text"
import BlogEntryCard from "@/components/pages/blog/blog-entry-card"
import config from "@/config"

export default function page() {
  return (
    <>
      <main className="fade-in container flex flex-col items-center py-4 divide-y-2 divide-gray-100 dark:divide-gray-800 sm:py-8">
        <div className="flex flex-col items-center space-y-2 text-center my-6">
          <HeadingText title="Blog" />
        </div>
        <div className="flex flex-wrap gap-2 w-full">
          <div className="mt-4  items-center gap-4 w-full">
            {config.blogposts.map(({ slug, title, datePublished, shortDescription, content }) => (
              <BlogEntryCard
                key={slug}
                {...{ title, datePublished, shortDescription, content, slug }}
                href={`/blog/${slug}`}
              />
            ))}
          </div>
        </div>
      </main>
    </>
  )
}
