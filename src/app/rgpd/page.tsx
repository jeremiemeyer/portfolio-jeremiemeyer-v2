import HeadingText from "@/components/common/heading-text"
import { H1, H2, H3 } from "@/components/Form"
import Link from "next/link"

export const metadata = {
  title: "RGPD | Jeremie Meyer",
}

export default function Contact() {
  return (
    <main className="text-black dark:text-zinc-300 fade-in container py-4 sm:py-8 flex flex-col items-center">
      <div className="flex flex-col items-center text-center space-y-2 pb-12">
        <HeadingText
          title="RGPD"
          subtext="Déclaration relatives aux données personnelles"
        />
      </div>
      <div className="max-w-4xl">
        <H2>Collecte de données personnelles</H2>
        <p className="mb-8">
          Lorsque vous visitez ce site web, nous pouvons collecter certaines
          informations personnelles que vous choisissez de nous fournir, telles
          que votre nom, votre adresse e-mail et vos coordonnées
          professionnelles. Nous ne collectons ces informations que lorsque vous
          les soumettez volontairement via nos formulaires de contact ou
          d'autres moyens de communication.
        </p>

        <H2>Utilisation des données personnelles</H2>
        <p className="mb-4">
          Les données personnelles que vous nous fournissez peuvent être
          utilisées aux fins suivantes :
        </p>
        <ul className="px-8 mb-8">
          <li style={{ listStyleType: "circle" }}>
            Pour vous contacter et répondre à vos demandes.
          </li>
          <li style={{ listStyleType: "circle" }}>
            Pour vous fournir des informations sur nos services ou projets.
          </li>
          <li style={{ listStyleType: "circle" }}>
            Pour personnaliser votre expérience sur ce site web.
          </li>
        </ul>

        <H2>Protection des données personnelles</H2>
        <p className="mb-8">
          Nous prenons la protection de vos données personnelles au sérieux.
          Nous mettons en œuvre des mesures de sécurité appropriées pour
          protéger vos informations contre tout accès non autorisé, divulgation,
          altération ou destruction.
        </p>

        <H2>Cookies et technologies similaires</H2>
        <p className="mb-8">
          Ce site web utilise des cookies et d'autres technologies similaires
          pour améliorer votre expérience de navigation. Vous pouvez gérer vos
          préférences en matière de cookies via les paramètres de votre
          navigateur.
        </p>

        <H2>Partage des données personnelles</H2>
        <p className="mb-8">
          Nous ne vendons, ne louons ni ne partageons vos données personnelles
          avec des tiers à des fins de marketing. Cependant, dans certaines
          circonstances, nous pouvons être amenés à partager vos informations
          avec des prestataires de services tiers qui nous aident à gérer ce
          site web ou à répondre à vos demandes.
        </p>

        <H2>Vos droits</H2>
        <p className="mb-8">
          Vous avez le droit d'accéder, de corriger, de mettre à jour ou de
          supprimer vos données personnelles que nous détenons. Si vous
          souhaitez exercer l'un de ces droits, veuillez{" "}
          <Link href="/contact">
            <span className="blue_gradient">me contacter</span>
          </Link>
          .
        </p>

        <H2>Modifications de la déclaration de confidentialité</H2>
        <p className="mb-4">
          Nous nous réservons le droit de modifier cette déclaration relative
          aux données personnelles à tout moment. Les modifications seront
          publiées sur cette page, et la date de la dernière mise à jour sera
          révisée en conséquence.
        </p>

        <p className="mb-4">
          En utilisant ce site web, vous consentez à la collecte et à
          l'utilisation de vos données personnelles conformément à cette
          déclaration.
        </p>

        <p className="mb-8">
          Si vous avez des questions ou des préoccupations concernant notre
          politique de confidentialité, veuillez{" "}
          <Link href="/contact">
            <span className="blue_gradient">me contacter</span>
          </Link>
          .
        </p>
      </div>
    </main>
  )
}
