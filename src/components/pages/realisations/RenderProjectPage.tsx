"use client"
import Conditional from "@/components/Conditional"
import { H1, H2, H3 } from "@/components/Form"
import DeploymentList from "@/components/list/DeploymentList"
import StackList from "@/components/list/StackList"
// import { PageSEO } from "@/components/SEO"
import config from "../../../config"
import type { Project, SubProject } from "@/config/projects"
import { defaultDimensions } from "@/config/projects"
import type { GetStaticProps, InferGetStaticPropsType } from "next"
import Image from "next/image"
import React, { useCallback, useRef, useState } from "react"
import ScrollContainer from "react-indiana-drag-scroll"
import Link from "next/link"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/zoom"
import "swiper/css/navigation"
import "swiper/css/pagination"
import { Zoom, Navigation, Pagination } from "swiper/modules"
import { unbounded } from "@/app/fonts"

const { projects } = config

export default function RenderProjectPage({
  params,
}: {
  params: { slug: string }
}) {
  const project: Project = projects.find(
    (project: Project) => project.slug === params?.slug
  )!
  const {
    title,
    description,
    shortDescription,
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

  // const renderSubProjectList = useCallback(
  //   ({ title, deployment, description }: SubProject) => (
  //     <>
  //       <H3>{title}</H3>
  //       <Conditional condition={!!deployment}>
  //         <DeploymentList deployment={deployment} />
  //       </Conditional>
  //       <p className="mt-2 mb-4 font-light">{description}</p>
  //     </>
  //   ),
  //   []
  // )

  const hasDeployments = !!deployment
  const hasDesktopScreenshots = !!screenshotsDesktop.length
  const hasMobileScreenshots = !!screenshotsMobile.length
  const hasSubProjects = !!subProjects.length

  return (
    <>
      <main className="fade-in flex flex-col pt-2">
        <div className="grid-bg ba-grid anim">
          <div className="mx-auto flex-row justify-center inner">
            {" "}
            {/* <PageSEO
              title={title}
              description={shortDescription || description}
              imageUrl={banner}
            /> */}
            <div className="relative flex justify-center py-2">
              <div className="flex flex-col z-50 container">
                <H1 className="mb-4 text-3xl font-bold lg:text-5x dark:text-white">
                  {/* <span className="text-xl font-light text-zinc-400">
                    <Link href="/realisations" className="hover:underline ">
                      Réalisations /
                    </Link>
                  </span>
                  <br /> */}
                  <span
                    className={`${unbounded.className} text-zinc-600 dark:text-zinc-500 uppercase text-base font-normal `}
                  >
                    {projectType}
                  </span>

                  <br />
                  <span
                    className={`${unbounded.className} dark:text-zinc-300 text-4xl md:text-6xl font-semibold flex break-words flex-col md:flex-row md:justify-between items-baseline`}
                  >
                    {title}
                    <div className="pt-2 md:pt-0">
                      <Conditional condition={hasDeployments}>
                        <DeploymentList deployment={deployment} />
                      </Conditional>
                    </div>
                  </span>
                </H1>
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

        <div className="pt-12 mx-auto container">
          <H2>Description</H2>
          <div className="font-light mb-12 max-w-3xl">{description}</div>

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
                      width: 1000,
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
                      width: 1000,
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

        {/* <Conditional condition={hasSubProjects}>
              <H2 className="mt-4">More Products</H2>
              <p className="mt-1 mb-4 font-light">Some additional products</p>
              {React.Children.toArray(subProjects.map(renderSubProjectList))}
            </Conditional> */}
      </main>
    </>
  )
}
