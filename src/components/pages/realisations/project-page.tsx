//@ts-nocheck
"use client"
import Conditional from "@/components/conditional"
import Link from "next/link"
import { H2 } from "@/components/form"
import DeploymentList from "@/components/list/deployment-list"
import StackList from "@/components/list/stack-list"
import config from "@/config"
import type { Project } from "@/config/projects"
import { defaultDimensions } from "@/config/projects"
import Image from "next/image"
import React, { useCallback } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/zoom"
import "swiper/css/navigation"
import "swiper/css/pagination"
import { Zoom, Navigation, Pagination } from "swiper/modules"
import { unbounded } from "@/app/fonts"
import { MdArrowBackIos } from "react-icons/md"
import { AiOutlineLink } from "react-icons/ai"

const { projects } = config

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project: Project | undefined = projects.find(
    (project: Project) => project.slug === params?.slug
  )
  if (!project) {
    return <div>Project not found</div>
  }

  const {
    title,
    description,
    repository,
    projectType,
    banner,
    dimensions,
    stack,
    deployment,
    screenshotsDesktop,
    screenshotsMobile,
    subProjects,
  } = project

  const [height, width] = dimensions ?? defaultDimensions

  const renderScreenShotList = useCallback(
    (screenshot: string) => {
      const style: React.CSSProperties = {
        height,
        width,
      }

      return (
        <SwiperSlide>
          <div className="swiper-zoom-container">
            <img src={screenshot} />
          </div>
        </SwiperSlide>
      )
    },
    [height, width]
  )

  const hasDeployments = !!deployment
  const hasRepository = !!repository
  const hasDesktopScreenshots = !!screenshotsDesktop.length
  const hasMobileScreenshots = !!screenshotsMobile.length
  const hasSubProjects = !!subProjects.length

  return (
    <>
      <main className="fade-in flex flex-col pt-2">
        <div className="grid-bg ba-grid anim">
          <div className="mx-auto flex-row justify-center inner">
            {" "}
            <div className="relative flex justify-center py-2">
              <div className="flex flex-col z-50 container">
                <div className="mb-4 mt-6 font-bold  dark:text-white">
                  <span className="text-xl font-light text-zinc-300">
                    <Link
                      href="/realisations"
                      className="hover:underline text-zinc-500 text-[0.8em]"
                    >
                      <p className="group hover:text-blue-600 hover:underline flex flex-row items-center">
                        <span className="inline-block transition-transform group-hover:-translate-x-1 group- motion-reduce:transform-none">
                          <MdArrowBackIos className="mr-2" />
                        </span>

                        {`voir tous les projets`}
                      </p>
                    </Link>
                  </span>
                  <br />
                  <span
                    className={`${unbounded.className} text-zinc-600 dark:text-zinc-400 uppercase text-base font-normal `}
                  >
                    {projectType}
                  </span>

                  <br />
                  <span
                    className={`${unbounded.className} dark:text-zinc-300 text-4xl md:text-6xl font-semibold flex break-words flex-col md:flex-row md:justify-between items-baseline`}
                  >
                    {title}
                    <div className="pt-2 md:pt-0 flex flex-row">
                      <Conditional condition={hasDeployments}>
                        <DeploymentList deployment={deployment} />
                      </Conditional>

                      <Conditional condition={hasRepository}>
                        <a
                          className="mr-2 flex items-center px-2 py-1 text-xs font-medium text-white bg-green-800 hover:bg-green-700 rounded-xl h-8"
                          href={repository}
                          // style={{ background }}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <AiOutlineLink className="mr-1" size={15} />
                          code
                        </a>
                      </Conditional>
                    </div>
                  </span>
                </div>
                <Image
                  loading="eager"
                  src={banner}
                  height={height * 1.5}
                  width={width * 1.5}
                  objectFit="cover"
                  alt=""
                  className="mb-12 "
                />
                <StackList stack={stack} />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 mx-auto container">
          <div className="text-zinc-700 dark:text-zinc-300 mb-12 max-w-3xl">
            {description}
          </div>

          <div className="mb-2">
            <Conditional condition={hasDesktopScreenshots}>
              <div className="hidden md:block">
                <H2 className="my-4">Captures d'écran</H2>
                <Swiper
                  className="swiper-container"
                  loop={true}
                  zoom={true}
                  spaceBetween={10}
                  centeredSlides={true}
                  lazyPreloadPrevNext={4}
                  pagination={{
                    clickable: true,
                    el: ".swiper-custom-pagination",
                  }}
                  modules={[Navigation, Zoom, Pagination]}
                  breakpoints={{
                    300: {
                      width: 300,
                      slidesPerView: 1,
                    },
                    500: {
                      width: 400,
                      slidesPerView: 1,
                    },
                    640: {
                      width: 500,
                      slidesPerView: 1,
                    },
                    768: {
                      width: 600,
                      slidesPerView: 1,
                    },
                    1000: {
                      width: 800,
                      slidesPerView: 1,
                    },
                    1200: {
                      width: 950,
                      slidesPerView: 1,
                    },
                  }}
                >
                  {React.Children.toArray(
                    screenshotsDesktop.map(renderScreenShotList)
                  )}
                  <div className="swiper-custom-pagination mt-2 text-center" />
                </Swiper>
              </div>
            </Conditional>

            <Conditional condition={hasMobileScreenshots}>
              <div className="block md:hidden">
                <H2 className="my-4">Captures d'écran</H2>
                <Swiper
                  className="swiper-container"
                  loop={true}
                  zoom={true}
                  spaceBetween={10}
                  pagination={{
                    clickable: true,
                    el: ".swiper-custom-pagination",
                  }}
                  modules={[Navigation, Zoom, Pagination]}
                  breakpoints={{
                    300: {
                      width: 300,
                      slidesPerView: 1,
                    },
                    500: {
                      width: 400,
                      slidesPerView: 1,
                    },
                    640: {
                      width: 500,
                      slidesPerView: 1,
                    },
                    768: {
                      width: 600,
                      slidesPerView: 1,
                    },
                    1000: {
                      width: 800,
                      slidesPerView: 1,
                    },
                    1200: {
                      width: 950,
                      slidesPerView: 1,
                    },
                  }}
                >
                  {React.Children.toArray(
                    screenshotsMobile.map(renderScreenShotList)
                  )}
                  <div className="swiper-custom-pagination mt-2 text-center" />
                </Swiper>
              </div>
            </Conditional>
          </div>
        </div>
      </main>
    </>
  )
}
