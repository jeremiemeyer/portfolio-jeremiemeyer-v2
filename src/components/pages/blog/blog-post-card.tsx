"use client"
import Link from "next/link"
import { unbounded } from "@/app/fonts"
import { Meta } from "@/types"
import { Badge } from "@/components/ui/badge"
import { FaHashtag } from "react-icons/fa6"
import getFormattedDate from "@/lib/utils"

type Props = {
  post: Meta
  highlightTag?: string
}

export default function BlogPostCard({ post, highlightTag }: Props) {
  const { id, title, summary, date, tags } = post

  return (
    <div
      className="w-full p-5 lg:p-6 rounded-3xl bg-gray-300 hover:bg-gray-400 hover:bg-opacity-20 bg-opacity-20 dark:bg-gray-700 dark:bg-opacity-20 dark:hover:bg-gray-600 dark:hover:bg-opacity-20 border border-gray-400 border-opacity-20 dark:border-slate-700 dark:border-opacity-30 mx-auto hover:text-blue-600"
      // style={{
      //   backgroundImage: `linear-gradient(to right, black, rgba(0, 0, 0, 0)), url("${banner}")`,
      // }}
    >
      <div className="flex-col ml-0 p-2 md:p-0 hover:text-blue-600">
        <p className="text-zinc-700 dark:text-zinc-300 pb-2 hover:text-zinc-700 dark:hover:text-zinc-300">
          {getFormattedDate(date)}
        </p>
        <p
          className={`${unbounded.className} text-xl hover:text-blue-600 font-semibold mb-2`}
        >
          <Link href={`/blog/posts/${id}`}>{title}</Link>
        </p>
        <p className="text-zinc-700 dark:text-zinc-300 pb-2 hover:text-zinc-700 dark:hover:text-zinc-300">
          {summary}
        </p>
        <div className="pb-8 text-zinc-700 dark:text-zinc-300 hover:text-zinc-700 dark:hover:text-zinc-300 flex flex-row items-center">
          <span className="flex flex-row space-x-3">
            {tags.map((tag) => (
              <>
                <span
                  className={`flex flex-row items-center ${
                    highlightTag === tag
                      ? "bg-blue-600 text-white dark:text-white"
                      : "text-zinc-400 dark:text-zinc-600"
                  }`}
                >
                  <FaHashtag className={``} />
                  <Link
                    className={` ${
                      highlightTag === tag
                        ? "text-white dark:text-white"
                        : "text-zinc-700 dark:text-zinc-400"
                    } hover:text-black dark:hover:text-white font-semibold `}
                    href={`/blog/tags/${tag}`}
                  >
                    {tag}
                  </Link>
                </span>
              </>
            ))}
          </span>
        </div>
        <Link href={`/blog/posts/${id}`}>
          <span className="pt-2 font-semibold">Lire l'article</span>
        </Link>
      </div>
    </div>
  )
}
