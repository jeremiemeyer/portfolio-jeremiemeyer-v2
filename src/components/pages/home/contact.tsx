import HeadingText from "@/components/common/heading-text"
import ContactForm from "../contact-form"

export default function Contact() {
  return (
    <section className="mt-16 p-8 lg:p-8 rounded-3xl bg-gray-300 bg-opacity-20 dark:bg-gray-700 dark:bg-opacity-20 border border-gray-400 border-opacity-20 dark:border-slate-700 dark:border-opacity-30 mx-auto">
      <div className="flex flex-col lg:flex-col-reverse gap-6">
        <div className="space-y-4">
          <div className="flex flex-col lg:flex-row gap-6 align-top justify-between">
            <div className="md:w-1/3">
              <HeadingText title="Contactez-moi" />
              <p className="pt-6 lg:text-lg text-zinc-500 dark:text-zinc-400">
                Besoin d'aide pour un projet ? Vous souhaitez que l'on travaille ensemble ? Contactez-moi à
                l'aide du formulaire ci-joint !
                <br />
                <br />
                Votre message me parviendra directement sur ma boîte mail.
              </p>
            </div>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  )
}
