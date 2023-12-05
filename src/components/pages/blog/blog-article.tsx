//@ts-nocheck
"use client"
import Link from "next/link"
import config from "../../../config"
import React from "react"
import { unbounded } from "@/app/fonts"
import { BlogPost } from "@/config/blogposts"
import HeadingText from "@/components/common/heading-text"
import { Link as ReactScrollLink, Element } from "react-scroll"
import { readingTime, extractTextContent } from "@/lib/utils"
import { log } from "console"
import { Badge } from "@/components/ui/badge"
import { FaHashtag } from "react-icons/fa6"
import { MdArrowBackIos } from "react-icons/md"

const { blogposts } = config

export default function BlogArticle({ title, pubDate, content, tags }) {
  const textContent = extractTextContent(content)
  const readingTimeInMinutes = readingTime(textContent)

  function groupContentByHeadings(content) {
    let groupedContent = []
    let currentSection = {
      id: null,
      level: null,
      title: null,
      content: [],
    }

    content.forEach((element) => {
      if (element.type && element.type.startsWith("h")) {
        // If the element is a heading, start a new section
        if (currentSection.content.length > 0) {
          groupedContent.push(currentSection)
          currentSection = {
            id: element.props && element.props.id,
            level: parseInt(element.type.charAt(1)),
            title: element.props && element.props.children.props.children,
            content: [],
          }
        }
      }

      // If not a heading, add to the current section's content
      currentSection.content.push(element)
    })

    // Add the last section
    groupedContent.push(currentSection)

    return groupedContent
  }

  const tableOfContents = content.reduce((toc, section) => {
    if (section.type === "h1") {
      const id = section.props && section.props.id
      if (id) {
        toc.push({
          title: section.props.children.props.children,
          href: `${id}`,
          sectionType: "h1",
        })
      }
    } else if (section.type === "h2") {
      const id = section.props && section.props.id
      if (id) {
        toc.push({
          title: section.props.children.props.children,
          href: `${id}`,
          sectionType: "h2",
        })
      }
    }
    return toc
  }, [])

  const groupedContent = groupContentByHeadings(content)

  return (
    <>
      <main className="fade-in flex flex-col pt-2">
        <div className="grid-bg ba-grid anim">
          <div className="mx-auto flex-row justify-center inner pt-20">
            <div className="relative flex justify-center py-2 flex-col z-50 container mb-4 text-3xl font-bold lg:text-5x dark:text-white">
              <span className="text-xl font-light text-zinc-300">
                <Link
                  href="/blog"
                  className="hover:underline text-zinc-500 text-[0.8em]"
                >
                  <p className="hover:underline flex flex-row items-center"><MdArrowBackIos className="mr-2" />{`voir tous les articles`}</p>
                </Link>
              </span>
              <br />
              <span
                className={`${unbounded.className} dark:text-zinc-300 text-4xl md:text-6xl font-semibold flex break-words flex-col md:flex-row md:justify-between items-baseline pb-8`}
              >
                {title}
              </span>
              <span
                className={` text-zinc-600 dark:text-zinc-400 text-base font-normal flex flex-col md:flex-row`}
              >
                <span className="font-semibold">{pubDate}</span><span className="hidden md:block">{" / "}</span>
                <span>Temps de lecture : {readingTimeInMinutes} min</span>
              </span>
            </div>
          </div>
        </div>

        <div className="mt-[130px] container justify-between flex flex-row">
          {/* Contenu de l'article */}
          <div>
            <article className="prose dark:prose-invert pb-[150px]">
              <button onClick={() => console.log(readingTimeInMinutes)}>zeizeu</button>
              {groupedContent.map((section, index) => (
                <div key={index} id={section.id}>
                  {section.content}
                </div>
              ))}
            </article>
            <div className="pb-8">
              Articles similaires :{" "}
              <div className="space-x-2 flex flex-row">
                {tags.map((tag) => (
                  <span className="flex flex-row items-center">
                    <FaHashtag className="text-gray-400 dark:text-gray-600" />
                    <Link
                      className="hover:text-black dark:hover:text-white font-semibold"
                      href={`/blog/tags/${tag}`}
                    >
                      {tag}
                    </Link>
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Table des matières */}
          {tableOfContents.length > 1 && (
            <aside className="hidden md:block w-1/4">
              <nav
                className={`${unbounded.className} sticky top-40 flex flex-col`}
              >
                <h1 className="pb-4 text-l">Table des matières</h1>
                <ul className="font-light flex flex-col gap-2">
                  {tableOfContents.map((item) => (
                    <li
                      key={item.href} // Ensure a unique key for each list item
                      className={`cursor-pointer text-zinc-400 hover:text-zinc-500 dark:text-zinc-400 dark:hover:text-zinc-300 ${
                        item.sectionType === "h2" ? "pl-4" : ""
                      }`}
                    >
                      <ReactScrollLink
                        activeClass="active"
                        smooth
                        spy
                        hashSpy={true}
                        to={item.href}
                        offset={-80}
                      >
                        {item.title}
                      </ReactScrollLink>
                    </li>
                  ))}
                </ul>
              </nav>
            </aside>
          )}
        </div>
      </main>
    </>
  )
}
