import BlogArticle from "@/components/pages/blog/blog-article"

export default function page({ params }: { params: { slug: string } }) {
  return (
    <BlogArticle params={params} />
  )
}