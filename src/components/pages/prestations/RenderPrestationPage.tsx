"use client"
import Conditional from "@/components/conditional"
import { H1, H2 } from "@/components/form"
import config from "../../../config"
import type { Prestation } from "@/config/prestations"
import { defaultDimensions } from "@/config/prestations"
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
  
            <Conditional condition={hasScreenshots}>
              <H2 className="my-4">Captures d'écran</H2>
              <ScrollContainer
                className='flex mt-4 mb-1 overflow-auto list'
                hideScrollbars={false}
              >
                {React.Children.toArray(screenshots.map(renderScreenShotList))}
              </ScrollContainer>
            </Conditional>
      </main>
  
      
  
      </>
    )
  }