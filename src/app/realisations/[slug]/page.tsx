import React from "react"
import RenderProjectPage from "@/components/pages/realisations/RenderProjectPage"

export const metadata = {
  title: `Réalisations | Jeremie Meyer`,
  description: `Projets réalisés`,
}

export default function page({ params }: { params: { slug: string } }) {
  return (
      <RenderProjectPage params={params} />
  )
}
