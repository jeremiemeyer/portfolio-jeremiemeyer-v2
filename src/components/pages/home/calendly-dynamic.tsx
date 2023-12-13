import dynamic from "next/dynamic"

const Calendly = dynamic(() => import("@/components/pages/home/calendly"), {
  ssr: false,
})

export default function CalendlyDynamic() {
  return <Calendly />
}
