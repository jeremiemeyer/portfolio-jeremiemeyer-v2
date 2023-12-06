import HeadingText from "@/components/common/heading-text"
import Cv from "@/components/pages/cv/cv"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"

export const metadata = {
  title: "CV",
  description: "Mon CV",
}

export function ButtonWithIcon() {
  return (
    <Link
      href={`/static/cv_jeremie_meyer.pdf`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Button>
        <Download className="mr-2 h-4 w-4" /> Télécharger le PDF
      </Button>
    </Link>
  )
}

export default function page() {
  return (
    <main className="fade-in container py-4 sm:py-8 flex flex-col items-center mb-12 gap-4">
      <Cv />
      <ButtonWithIcon />
    </main>
  )
}
