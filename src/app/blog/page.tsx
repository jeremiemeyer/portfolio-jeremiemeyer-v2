import HeadingText from "@/components/common/heading-text"
import PostsList from "@/components/pages/blog/posts-list"
import { Suspense } from "react"

export const revalidate = 86400

export const metadata = {
  title: "Blog | Jeremie Meyer",
}

export default async function page() {
  return (
    <>
      <main className="fade-in container flex flex-col items-center py-4 divide-y-2 divide-gray-100 dark:divide-gray-800 sm:py-8">
        <div className="flex flex-col items-center space-y-2 text-center my-6">
          <HeadingText title="Blog" />
        </div>
        <PostsList />
      </main>
    </>
  )
}
