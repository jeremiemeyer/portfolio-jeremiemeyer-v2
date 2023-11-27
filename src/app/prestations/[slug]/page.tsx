// "use client"
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
import RenderPrestationPage from "@/components/pages/prestations/RenderPrestationPage"

const { prestations } = config


export default function page({ params }: { params: { slug: string } }) {
  return (
    <RenderPrestationPage params={params } />
  )
}
