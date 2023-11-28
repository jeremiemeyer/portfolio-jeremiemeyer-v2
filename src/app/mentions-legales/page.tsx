import HeadingText from "@/components/common/heading-text"
import Link from "next/link"

export const metadata = {
  title: "Mentions légales | Jeremie Meyer",
  description: "Mentions légales",
}

export default function Contact() {
  return (
    <main className="fade-in container py-4 sm:py-8 flex flex-col items-center">
      <div className="flex flex-col items-center text-center space-y-2 my-6 pb-8">
        <HeadingText title="Mentions légales" />
      </div>
      <ul>
        <li className="text-xl">Jeremie Meyer, autoentreprise</li>
        <li>SIREN : 947 456 414</li>
        <li>Contact : <span className="blue_gradient"><Link href="mailto:jeremie.meyer357@gmail.com">jeremie.meyer357@gmail.com</Link></span></li>
        {/* <li>Numéro TVA : xxx</li> */}
        <li>
          Site hébergé par :{" "}
          <Link 
            target="_blank"  
            href="https://www.o2switch.fr/">
            <span className="blue_gradient">o2switch</span>
          </Link>
        </li>
      </ul>
    </main>
  )
}
