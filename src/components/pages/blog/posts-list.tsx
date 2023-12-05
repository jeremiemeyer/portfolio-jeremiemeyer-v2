import { getPostsMeta } from "@/lib/posts"
import BlogPostCard from "./blog-post-card"

export default async function PostsList() {
  const posts = await getPostsMeta()

  if (!posts) {
    return <p>Aucun article disponible.</p>
  }
  return (
    <>
      <div className="flex w-full">
        <div className="mt-4 items-center grid gap-4 w-full pb-12">
          {posts.map((post) => (
            <BlogPostCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </>
  )
}
