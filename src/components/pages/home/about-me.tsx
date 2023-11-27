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
              <p className="lg:text-lg text-zinc-500 dark:text-zinc-400">
                Hello ! 👋 Je créé des applications modernes et rapides avec
                React.js et Next.js.
                <br /> <br />
                Je peux m'occuper de :
                <ul className="px-8">
                  <li style={{ listStyleType: "circle" }}>
                    votre site internet sur mesure
                  </li>
                  <li style={{ listStyleType: "circle" }}>
                    votre landing page
                  </li>
                  <li style={{ listStyleType: "circle" }}>
                    votre web-app etc.
                  </li>
                </ul>
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
