// "use client"
import RenderPrestationPage from "@/components/pages/prestations/RenderPrestationPage"

export default function page({ params }: { params: { slug: string } }) {
  return (
    <RenderPrestationPage params={params } />
  )
}
