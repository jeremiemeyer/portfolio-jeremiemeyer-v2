// "use client"
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
import React, { useCallback } from "react"
import ScrollContainer from "react-indiana-drag-scroll"
import Link from "next/link"
import RenderProjectPage from "@/components/pages/realisations/RenderProjectPage"

const { projects } = config

// export const metadata = {
//   title: `Réalisations | Jeremie Meyer`,
//   description: `Projets réalisés`,
// }

export default function page({ params }: { params: { slug: string } }) {
  return <RenderProjectPage params={params} />
}
