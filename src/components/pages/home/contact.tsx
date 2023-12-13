"use client"
import HeadingText from "@/components/common/heading-text"
import ContactForm from "../../shared/contact-form"
import SectionCard from "./section-card"
import { PopupButton } from "react-calendly"
import CalendlyDynamic from "./calendly-dynamic"

export default function Contact() {
  return (
    <>
      <SectionCard>
        <div
          id="root"
          className="flex flex-col lg:flex-row gap-6 align-top justify-between"
        >
          <div className="md:w-1/2">
            <HeadingText title="Contactez-moi" />
            <p className="pt-6 lg:text-lg text-zinc-500 dark:text-zinc-400">
              Besoin d'aide pour un projet ? Vous souhaitez que l'on travaille
              ensemble ? Contactez-moi à l'aide du formulaire ci-joint ! Ou{" "}
              <CalendlyDynamic />
              <br />
              <br />
              Votre message me parviendra directement sur ma boîte mail.
            </p>
          </div>
          <ContactForm />
        </div>
      </SectionCard>
      {}
    </>
  )
}
