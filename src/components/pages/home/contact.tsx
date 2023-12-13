'use client'
import HeadingText from "@/components/common/heading-text"
import ContactForm from "../../shared/contact-form"
import SectionCard from "./section-card"
import { PopupButton } from "react-calendly"

export default function Contact() {
  return (
    <>
    <SectionCard>
      <div id="root" className="flex flex-col lg:flex-row gap-6 align-top justify-between">
        <div className="md:w-1/2">
          <HeadingText title="Contactez-moi" />
          <p className="pt-6 lg:text-lg text-zinc-500 dark:text-zinc-400">
            Besoin d'aide pour un projet ? Vous souhaitez que l'on travaille
            ensemble ? Contactez-moi à l'aide du formulaire ci-joint ! Ou{" "}
            <PopupButton
              url="https://calendly.com/jeremiem/30min"
              className="font-semibold hover:text-black dark:hover:text-zinc-50"
              /*
               * react-calendly uses React's Portal feature (https://reactjs.org/docs/portals.html) to render the popup modal. As a result, you'll need to
               * specify the rootElement property to ensure that the modal is inserted into the correct domNode.
               */
              rootElement={document.body}
              text="réservez un call."
            />
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
