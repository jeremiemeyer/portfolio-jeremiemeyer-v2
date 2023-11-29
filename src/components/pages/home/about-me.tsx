import { Badge } from "@/components/ui/badge"
import HeadingText from "@/components/common/heading-text"
import Image from "next/image"
import CircleSkills from "./circle-skills"
import Certifications from "./certifications"

export default function AboutMe() {
  // const competences = ["Création de site web", "SEO"]

  return (
    <section className="p-5 lg:p-8 rounded-3xl bg-gray-300 bg-opacity-20 dark:bg-gray-700 dark:bg-opacity-20 border border-gray-400 border-opacity-20 dark:border-slate-700 dark:border-opacity-30 mx-auto">
      <div className="flex flex-col lg:flex-col-reverse">
        <div className="space-y-4">
          <HeadingText title="Qui suis-je ?" />
          <div className="flex flex-col-reverse lg:flex-row items-center">
            <div>
              <p className="lg:text-lg text-zinc-500 dark:text-zinc-400 mb-6">
                Hello ! 👋 Je suis un développeur front-end freelance spécialisé dans la création de sites internet et de web-apps.
                <br /> <br />
                Mon domaine d'intervention :
                <ul className="px-8">
                  <li style={{ listStyleType: "circle" }}>
                    création de sites internet sur mesure pour sociétés et particuliers (sites vitrine, landing page)
                  </li>
                  <li style={{ listStyleType: "circle" }}>
                    création de web-apps interactives
                  </li>
                </ul>
              </p>
              <p className="lg:text-lg text-zinc-500 dark:text-zinc-400">
                J'utilise React.js et Next.js pour créer des web-apps modernes et rapides, avec un maximum de valeur ajoutée pour votre projet.
              </p>
            </div>

            {/* <Image
              loading="eager"
              src="/placeholder.png"
              height={400}
              width={400}
              style={{ width: "auto", height: "auto", maxWidth: "250px" }}
              alt="photo de l'auteur"
            /> */}
          </div>
        </div>
      </div>
    </section>
  )
}
