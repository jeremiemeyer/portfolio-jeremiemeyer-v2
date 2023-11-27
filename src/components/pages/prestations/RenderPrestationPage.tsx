"use client"
import Conditional from "@/components/Conditional"
import { H1, H2, H3 } from "@/components/Form"
import DeploymentList from "@/components/list/DeploymentList"
import StackList from "@/components/list/StackList"
// import { PageSEO } from "@/components/SEO"
import config from "../../../config"
import type { Prestation } from "@/config/prestations"
import { defaultDimensions } from "@/config/prestations"
import type { GetStaticProps, InferGetStaticPropsType } from "next"
import Image from "next/image"
import React, { useCallback } from "react"
import ScrollContainer from 'react-indiana-drag-scroll';
import Link from "next/link"

const { prestations } = config

export default function RenderPrestationPage({ params }: { params: { slug: string } }) {
    const prestation: Prestation = prestations.find(
      (prestation: Prestation) => prestation.slug === params?.slug
    )!
    const {
      title,
      description,
      shortDescription,
      banner,
      dimensions,
      screenshots,
    } = prestation
  
    const [height, width] = dimensions ?? defaultDimensions
  
    const renderScreenShotList = useCallback(
      (screenshot: string) => {
        const style: React.CSSProperties = {
          height,
          width,
        }
  
        return (
          <div
            className="flex-shrink-0 mr-2 overflow-hidden rounded bg-placeholder-light dark:bg-placeholder-dark"
            // style={style}
          >
            <Image
              loading="eager"
              src={screenshot}
              height={height}
              width={width}
              objectFit="cover"
              alt=""
            />
          </div>
        )
      },
      [height, width]
    )
  

    const hasScreenshots = !!screenshots.length
  
    return (
      <>
      <main className="fade-in container py-4 sm:py-8 flex flex-col items-center max-w-5xl">
            {/* <PageSEO
              title={title}
              description={shortDescription || description}
              imageUrl={banner}
            /> */}
            <H1 className="mb-4 text-3xl font-bold lg:text-5x dark:text-white">
              
              <span className="text-xl font-light text-zinc-400">
                <Link href="/prestations" className="hover:underline ">
                    Prestations /
                </Link>
              </span>{" "} <span className="orange_gradient">{title}</span>
            </H1>
            <Image
              loading="eager"
              src={banner}
              height={height*1.5}
              width={width*1.5}
              objectFit="cover"
              alt=""
              className="mb-12"
            />
            <H2>Description</H2>
            <p className="font-light mb-12 max-w-3xl">{description}</p>
            {/*   
            <H2>Stack technique</H2> */}
  

  
            <Conditional condition={hasScreenshots}>
              <H2 className="my-4">Captures d'écran</H2>
              <ScrollContainer
                className='flex mt-4 mb-1 overflow-auto list'
                hideScrollbars={false}
              >
                {React.Children.toArray(screenshots.map(renderScreenShotList))}
              </ScrollContainer>
            </Conditional>
  
            {/* <Conditional condition={hasSubProjects}>
              <H2 className="mt-4">More Products</H2>
              <p className="mt-1 mb-4 font-light">Some additional products</p>
              {React.Children.toArray(subProjects.map(renderSubProjectList))}
            </Conditional> */}
      </main>
  
      
  
      </>
    )
  }