import HeadingText from "@/components/common/heading-text"
import ContactForm from "../../shared/contact-form"
import SectionCard from "./section-card"

export default function Contact() {
  return (
    <SectionCard>
      <div className="flex flex-col lg:flex-row gap-6 align-top justify-between">
        <div className="md:w-1/2">
          <HeadingText title="Contactez-moi" />
          <p className="pt-6 lg:text-lg text-zinc-500 dark:text-zinc-400">
            Besoin d'aide pour un projet ? Vous souhaitez que l'on travaille
            ensemble ? Contactez-moi à l'aide du formulaire ci-joint !
            <br />
            <br />
            Votre message me parviendra directement sur ma boîte mail.
          </p>
        </div>
        <ContactForm />
      </div>
    </SectionCard>
  )
}
