//@ts-nocheck
"use client"
import Link from "next/link"
import config from "../../../config"
import React from "react"
import { unbounded } from "@/app/fonts"
import { BlogPost } from "@/config/blogposts"
import HeadingText from "@/components/common/heading-text"
import { Link as ReactScrollLink, Element } from "react-scroll"
import { readingTime, getArticleContentAsString } from "@/lib/utils"

const { blogposts } = config

export default function BlogArticle({ params }: { params: { slug: string } }) {
  const blogpost: BlogPost | undefined = blogposts.find(
    (blogpost: BlogPost) => blogpost.slug === params?.slug
  )
  if (!blogpost) {
    return <div>Blog post not found</div>
  }

  const { title, datePublished, href, shortDescription, slug, content } =
    blogpost

  const formattedDate = datePublished.toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  })

  const articleContent = getArticleContentAsString(blogpost)
  const readingTimeInMinutes = readingTime(articleContent)

  return (
    <>
      <main className="fade-in flex flex-col pt-2">
        <div className="grid-bg ba-grid anim">
          <div className="mx-auto flex-row justify-center inner pt-20">
            {" "}
            {/* <PageSEO
              title={title}
              description={shortDescription}
              imageUrl={banner}
            /> */}
            <div className="relative flex justify-center py-2">
              <div className="flex flex-col z-50 container">
                <div className="mb-4 text-3xl font-bold lg:text-5x dark:text-white">
                  <span className="text-xl font-light text-zinc-300">
                    <Link
                      href="/blog"
                      className="hover:underline text-zinc-500 text-[0.8em]"
                    >
                      {`< voir tous les articles`}
                    </Link>
                  </span>
                  <br />

                  <br />
                  <span
                    className={`${unbounded.className} dark:text-zinc-300 text-4xl md:text-6xl font-semibold flex break-words flex-col md:flex-row md:justify-between items-baseline pb-4`}
                  >
                    {title}
                  </span>
                  <span
                    className={` text-zinc-600 dark:text-zinc-400 text-base font-normal justify-between flex flex-row`}
                  >
                    <span className="font-semibold">{formattedDate} </span>{" "}
                    <span>Temps de lecture : {readingTimeInMinutes} min</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-[130px] flex flex-row container justify-between">
          {/* Contenu de l'article */}
          <div className="ml-0 md:w-2/3">
            {content.map((section) => (
              <div className="pb-12">
                {section.sectionContent ? (
                  <Element id={section.href}>
                    <HeadingText title={section.title}> </HeadingText>
                    <div className="pt-4 pb-8 text-zinc-700 dark:text-zinc-100">{section.sectionContent}</div>
                  </Element>
                ) : (
                  <>
                    <Element id={section.href}>
                      <HeadingText title={section.title}></HeadingText>
                      <div className="pt-4 pb-8 text-zinc-700 dark:text-zinc-100">{section.sectionContent}</div>
                    </Element>
                    {section.subSections?.map((subsection) => (
                      <Element id={subsection.href}>
                        <div className="pb-4">
                          <HeadingText title={subsection.title}></HeadingText>
                        </div>
                        <div className="pt-4 pb-12 text-zinc-700 dark:text-zinc-100">
                          {subsection.subSectionContent}
                        </div>
                      </Element>
                    ))}
                  </>
                )}
              </div>
            ))}
          </div>

          {/* Table des matières */}
          <aside className="hidden md:block">
            <nav
              className={`${unbounded.className} sticky top-40 flex flex-col`}
            >
              <h1 className="pb-4 text-l">Table des matières</h1>
              <ul className="font-light flex flex-col gap-2">
                {content.map((section) => (
                  <>
                    <li
                      className="cursor-pointer text-zinc-400 hover:text-zinc-500 dark:text-zinc-400 dark:hover:text-zinc-300"
                      href={`#${section.href}`}
                    >
                      <ReactScrollLink
                        activeClass="active"
                        smooth
                        spy
                        hashSpy={true}
                        to={section.href}
                        offset={-80}
                      >
                        {section.title}
                      </ReactScrollLink>
                    </li>

                    {section.subSections &&
                      section.subSections.map((subsection) => (
                        <li className="cursor-pointer text-zinc-400 hover:text-zinc-500 dark:text-zinc-400 dark:hover:text-zinc-300">
                          <ReactScrollLink
                            activeClass="active"
                            smooth
                            spy
                            hashSpy={true}
                            to={subsection.href}
                            href={`#${subsection.href}`}
                            className="pl-4 font-thin"
                            offset={-80}
                          >
                            {subsection.title}
                          </ReactScrollLink>
                        </li>
                      ))}
                  </>
                ))}
              </ul>
            </nav>
          </aside>
        </div>
      </main>
    </>
  )
}
