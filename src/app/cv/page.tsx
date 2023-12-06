import HeadingText from "@/components/common/heading-text"
import Cv from "@/components/pages/cv/cv"
import Link from "next/link"

export const metadata = {
  title: "CV",
  description: "Mon CV",
}

export default function page() {
  return (
    <main className="fade-in container py-4 sm:py-8 flex flex-col items-center">
      <div className="flex flex-col items-center text-center space-y-2 my-6 pb-8">
        <HeadingText title="Jeremie Meyer" />
      </div>
      <Cv />
    </main>
  )
}
