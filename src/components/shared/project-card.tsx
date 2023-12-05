"use client"
import StackList from "@/components/list/stack-list"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { unbounded } from "@/app/fonts"
import { FaArrowRightLong } from "react-icons/fa6"

export default function ProjectCard({
  title,
  projectType,
  description,
  banner,
  href,
  stack,
}: {
  title: any
  projectType: string
  description: any
  banner: any
  href: any
  stack: any
}) {
  return (
    <div
      className="rounded-3xl w-full relative z-10 bg-cover bg-center "
      style={{
        backgroundImage: `linear-gradient(to right, black, rgba(0, 0, 0, 0)), url("${banner}")`,
      }}
    >
      <div className="boxhovereffect border border-gray-400 border-opacity-20 dark:border-slate-700 dark:border-opacity-30 rounded-3xl">
        <div className="flex-col ml-0 p-2 md:p-0 md:w-1/2">
          <p
            className={`${unbounded.className} uppercase text-xs text-zinc-300`}
          >
            {projectType}
          </p>
          <h1
            className={`${unbounded.className} text-2xl font-semibold text-white`}
          >
            {title}
          </h1>
          <p className="mt-4 mb-8 text-zinc-300">{description}</p>
          <StackList stack={stack} />
          <br />

          <Button
            variant="outlineCustom"
            className="group flex items-center hover:text-blue-600 hover:border-blue-600"
          >
            <Link href={href} className="flex items-center">
              {" "}
              En savoir plus{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 group-hover:text-blue-600 motion-reduce:transform-none">
                <FaArrowRightLong />
              </span>
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
