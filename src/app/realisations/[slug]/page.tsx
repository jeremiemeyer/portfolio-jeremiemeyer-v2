// "use client"
// import { PageSEO } from "@/components/SEO"
import config from "@/config"
import React, { useCallback } from "react"
import RenderProjectPage from "@/components/pages/realisations/RenderProjectPage"

const { projects } = config

// export const metadata = {
//   title: `Réalisations | Jeremie Meyer`,
//   description: `Projets réalisés`,
// }

export default function page({ params }: { params: { slug: string } }) {
  return <RenderProjectPage params={params} />
}
