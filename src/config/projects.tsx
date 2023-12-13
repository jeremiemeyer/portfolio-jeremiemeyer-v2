//@ts-nocheck
import { Maybe, Tuple } from "../types"
import { Stack } from "./stack"
import React from "react"
import { H1, H2, H3 } from "@/components/form"
import Video from "@/components/pages/blog/video"

export type Deployment = {
  web?: string
  android?: string
  ios?: string
}

export interface SubProject {
  title: string
  description: React.ReactNode
  repository: Maybe<string>
  deployment: Deployment
}

export const defaultDimensions: Tuple<number> = [450, 220]

export interface Project {
  title: string
  projectType: string
  slug: string
  website: string
  banner: string
  description: React.ReactNode
  shortDescription?: string
  repository: Maybe<string>
  stack: Stack[]
  dimensions?: Tuple<number> // Tuple of [height, width]
  screenshotsDesktop: string[]
  screenshotsMobile: string[]
  deployment: Deployment
  subProjects: SubProject[]
}

export const projects: Project[] = [
  {
    title: "Buffroo",
    projectType: "Projet personnel",
    slug: "buffroo",
    banner: "/static/projects/buffroo/mockup.jpg",
    website: "https://buffroo.vercel.app",
    description: (
      <div>
        <div className="pb-12">
          <H2
            className="text-black dark:text-white"
            style={{
              fontSize: "20px",
              fontWeight: "600",
              marginBottom: "12px",
            }}
          >
            Vidéo de présentation
          </H2>
          <Video id={"a0kHGjz2oIQ"} />
        </div>
        <H2
          className="text-black dark:text-white dark:text-white"
          style={{ fontSize: "20px", fontWeight: "600", marginBottom: "12px" }}
        >
          Description
        </H2>

        <p>
          Une web-app permettant de renseigner le détail de ses séances de sport
          (musculation) et de suivre sa progression au fil des semaines.
        </p>
        <br />
        <p>Ce projet full-stack comprend :</p>
        <ul style={{ listStyleType: "circle", marginLeft: "20px" }}>
          <li>un front-end React.js & Vite ;</li>
          <li>un backend, API REST Express.js/Node.js ;</li>
          <li>une base de données MongoDB.</li>
        </ul>

        <br />
        <br />

        <H2
          className="text-black dark:text-white"
          style={{ fontSize: "20px", fontWeight: "600", marginBottom: "12px" }}
        >
          Fonctionnalités
        </H2>

        <H3
          className="text-black dark:text-white"
          style={{
            fontSize: "16px",
            fontWeight: "600",
            marginTop: "16px",
            marginBottom: "4px",
          }}
        >
          Entraînement
        </H3>
        <ul style={{ fontSize: "16px" }}>
          <li style={{ marginBottom: "2px" }}>
            🏋️‍♀️ Accédez à une bibliothèque exhaustive d'exercices ;
          </li>
          <li style={{ marginBottom: "2px" }}>
            ✅ Ajoutez vos propres exercices ;
          </li>
          <li style={{ marginBottom: "2px" }}>
            📝 Renseignez vos séances en temps réel (exercices, poids, nombre de
            répétitions) ;
          </li>
          <li style={{ marginBottom: "2px" }}>
            🧾 Créez des templates pour démarrer un entraînement avec une liste
            prédéfinie d'exercices ;
          </li>
        </ul>

        <H3
          className="text-black dark:text-white"
          style={{
            fontSize: "16px",
            fontWeight: "600",
            marginTop: "16px",
            marginBottom: "4px",
          }}
        >
          Objectifs
        </H3>
        <ul style={{ fontSize: "16px" }}>
          <li style={{ marginBottom: "2px" }}>🎯 Définissez vos objectifs ;</li>
          <li style={{ marginBottom: "2px" }}>
            🗓️ Accédez à l'historique de vos entraînements ;
          </li>
          <li style={{ marginBottom: "2px" }}>
            📈 Suivez votre progression au fil des semaines à l'aide de
            graphiques ;
          </li>
        </ul>

        <H3
          className="text-black dark:text-white"
          style={{
            fontSize: "16px",
            fontWeight: "600",
            marginTop: "16px",
            marginBottom: "4px",
          }}
        >
          Expérience utilisateur
        </H3>
        <ul style={{ fontSize: "16px" }}>
          <li style={{ marginBottom: "2px" }}>
            ⏰ Chronomètres intégrés à l'interface ;
          </li>
          <li style={{ marginBottom: "2px" }}>
            📊 Personnalisez votre tableau de bord ;
          </li>
          <li style={{ marginBottom: "2px" }}>
            🌙 Mode lumineux / mode sombre ;
          </li>
        </ul>

        <H3
          className="text-black dark:text-white"
          style={{
            fontSize: "16px",
            fontWeight: "600",
            marginTop: "16px",
            marginBottom: "4px",
          }}
        >
          Sécurité
        </H3>
        <ul style={{ fontSize: "16px" }}>
          <li style={{ marginBottom: "2px" }}>
            🔒 Chiffrage des données sensibles.
          </li>
        </ul>

        <br />
        <br />

        <H2
          className="text-black dark:text-white"
          style={{ fontSize: "20px", fontWeight: "600", marginBottom: "12px" }}
        >
          Bibliothèques utilisées
        </H2>

        <ul style={{ fontSize: "16px" }}>
          <li
            style={{
              listStyleType: "circle",
              marginLeft: "20px",
              marginBottom: "2px",
            }}
          >
            <a href="https://chakra-ui.com/" target="_blank">
              Chakra UI
            </a>
          </li>
          <li
            style={{
              listStyleType: "circle",
              marginLeft: "20px",
              marginBottom: "2px",
            }}
          >
            <a href="https://ui.shadcn.com/" target="_blank">
              shadcn/ui
            </a>
          </li>
          <li
            style={{
              listStyleType: "circle",
              marginLeft: "20px",
              marginBottom: "2px",
            }}
          >
            <a href="https://recharts.org/en-US/" target="_blank">
              recharts (graphiques)
            </a>
          </li>
          <li
            style={{
              listStyleType: "circle",
              marginLeft: "20px",
              marginBottom: "2px",
            }}
          >
            <a href="https://react-hot-toast.com/" target="_blank">
              react-hot-toast
            </a>
          </li>
          <li
            style={{
              listStyleType: "circle",
              marginLeft: "20px",
              marginBottom: "2px",
            }}
          >
            <a
              href="https://www.npmjs.com/package/react-paginate"
              target="_blank"
            >
              react-paginate
            </a>
          </li>
          <li
            style={{
              listStyleType: "circle",
              marginLeft: "20px",
              marginBottom: "2px",
            }}
          >
            <a
              href="https://www.npmjs.com/package/react-timer-hook"
              target="_blank"
            >
              react-timer-hook
            </a>
          </li>
          <li
            style={{
              listStyleType: "circle",
              marginLeft: "20px",
              marginBottom: "2px",
            }}
          >
            <a href="https://www.npmjs.com/package/bcryptjs" target="_blank">
              bcryptjs
            </a>
          </li>
          <li
            style={{
              listStyleType: "circle",
              marginLeft: "20px",
              marginBottom: "2px",
            }}
          >
            <a
              href="https://www.npmjs.com/package/jsonwebtoken"
              target="_blank"
            >
              jsonwebtoken
            </a>
          </li>
        </ul>
      </div>
    ),

    shortDescription: "Une web-app pour suivre sa progression en musculation.",
    repository: "",
    stack: [
      Stack.reactjs,
      Stack.typescript,
      Stack.tailwindcss,
      Stack.nodejs,
      Stack.express,
      Stack.mongo,
    ],
    dimensions: [360, 640],
    screenshotsDesktop: [
      "/static/projects/buffroo/screenshots/desktop/000.jpg",
      "/static/projects/buffroo/screenshots/desktop/001.jpg",
      "/static/projects/buffroo/screenshots/desktop/002.jpg",
      "/static/projects/buffroo/screenshots/desktop/003.jpg",
      "/static/projects/buffroo/screenshots/desktop/004.jpg",
    ],
    screenshotsMobile: [
      "/static/projects/buffroo/screenshots/mobile/001.jpg",
      "/static/projects/buffroo/screenshots/mobile/002.jpg",
      "/static/projects/buffroo/screenshots/mobile/003.jpg",
      "/static/projects/buffroo/screenshots/mobile/004.jpg",
      "/static/projects/buffroo/screenshots/mobile/005.jpg",
      "/static/projects/buffroo/screenshots/mobile/006.jpg",
      "/static/projects/buffroo/screenshots/mobile/007.jpg",
    ],
    deployment: {
      web: "https://buffroo.vercel.app/",
    },
    subProjects: [],
  },
  {
    title: "Portfolio",
    projectType: "Projet personnel",
    slug: "portfolio-jm",
    banner: "/static/projects/portfolio-jm/mockup.jpg",
    website: "https://www.jeremiemeyer.fr",
    description: (
      <div>
        <H2
          className="text-black dark:text-white"
          style={{ fontSize: "20px", fontWeight: "600", marginBottom: "12px" }}
        >
          Description
        </H2>
        <p>Mon portfolio personnel, réalisé avec Next.js/TypeScript (T3 Stack).</p>
        <br />
        <br />
        <H2
          className="text-black dark:text-white"
          style={{ fontSize: "20px", fontWeight: "600", marginBottom: "12px" }}
        >
          Fonctionnalités
        </H2>
        <ul style={{ fontSize: "16px" }}>
          <li
            style={{
              listStyleType: "circle",
              marginLeft: "20px",
              marginBottom: "2px",
            }}
          >
            Blog avec pages ISR générées périodiquement sur base de repository de fichiers MDX
          </li>
          <li
            style={{
              listStyleType: "circle",
              marginLeft: "20px",
              marginBottom: "2px",
            }}
          >
            Formulaire de contact nodemailer
          </li>
          <li
            style={{
              listStyleType: "circle",
              marginLeft: "20px",
              marginBottom: "2px",
            }}
          >
            Utilisation d'APIs pour récupérer les stats GitHub et VSCode
          </li>
        </ul>
        <br />
        <br />
        <H2
          className="text-black dark:text-white"
          style={{ fontSize: "20px", fontWeight: "600", marginBottom: "12px" }}
        >
          Bibliothèques utilisées
        </H2>
        <ul style={{ fontSize: "16px" }}>
          <li
            style={{
              listStyleType: "circle",
              marginLeft: "20px",
              marginBottom: "2px",
            }}
          >
            <a href="https://ui.shadcn.com/" target="_blank">
              shadcn/ui
            </a>
          </li>
          <li
            style={{
              listStyleType: "circle",
              marginLeft: "20px",
              marginBottom: "2px",
            }}
          >
            <a href="https://lucide.dev/" target="_blank">
              lucide
            </a>
          </li>
          <li
            style={{
              listStyleType: "circle",
              marginLeft: "20px",
              marginBottom: "2px",
            }}
          >
            <a href="https://recharts.org/en-US/" target="_blank">
              recharts (graphiques)
            </a>
          </li>
          <li
            style={{
              listStyleType: "circle",
              marginLeft: "20px",
              marginBottom: "2px",
            }}
          >
            <a href="https://nodemailer.com/" target="_blank">
              nodemailer (envoi de mails avec le formulaire)
            </a>
          </li>
          <li
            style={{
              listStyleType: "circle",
              marginLeft: "20px",
              marginBottom: "2px",
            }}
          >
            <a href="https://www.npmjs.com/package/next-mdx-remote" target="_blank">
              next-mdx-remote
            </a>
          </li>
          <li
            style={{
              listStyleType: "circle",
              marginLeft: "20px",
              marginBottom: "2px",
            }}
          >
            <a href="https://zod.dev/" target="_blank">
              zod (bibliothèque de validation de schémas TypeScript)
            </a>
          </li>
        </ul>
      </div>
    ),

    shortDescription: "Mon portfolio personnel.",
    repository: "",
    stack: [Stack.nextjs, Stack.reactjs, Stack.typescript, Stack.nodejs],
    dimensions: [360, 640],
    screenshotsDesktop: [],
    screenshotsMobile: [],
    deployment: {
      web: "https://www.jeremiemeyer.fr",
    },
    subProjects: [],
  },
  {
    title: "Denat Environnement",
    projectType: "Projet client",
    slug: "denat-environnement",
    banner: "/static/projects/denat-environnement/mockup.jpg",
    website: "https://www.denat-environnement.fr",
    description: (
      <div>
        <div className="pb-12">
          <H2
            className="text-black dark:text-white"
            style={{
              fontSize: "20px",
              fontWeight: "600",
              marginBottom: "12px",
            }}
          >
            Vidéo de présentation
          </H2>
          <p className="pb-2 italic">
            Mise à jour à venir du site : une refonte à l'aide de Next.js !
            Présentation en vidéo.
          </p>
          <Video id={"7sYjFOM8Vvw"} />
        </div>

        <H2
          style={{ fontSize: "20px", fontWeight: "600", marginBottom: "12px" }}
        >
          Description
        </H2>
        <p>
          Création d'un site vitrine sur mesure pour une société de dénaturation
          de bouteilles de gaz.
        </p>
        <br />
        <ul style={{ listStyleType: "circle", marginLeft: "20px" }}>
          <li>Front-end JavaScript natif ;</li>
          <li>Styles CSS sur mesure ;</li>
          <li>
            Back-end Node.js/Express.js minimaliste (formulaire de contact,
            envoi de mails) ;
          </li>
          <li>Mise en production, hébergement chez O2switch ;</li>
          <br />
        </ul>
        <br />
        <H2
          style={{ fontSize: "20px", fontWeight: "600", marginBottom: "12px" }}
        >
          Bibliothèques utilisées
        </H2>
        <ul style={{ fontSize: "16px" }}>
          <li
            style={{
              listStyleType: "circle",
              marginLeft: "20px",
              marginBottom: "2px",
            }}
          >
            <a href="https://nodemailer.com/" target="_blank">
              nodemailer (envoi de mails avec le formulaire)
            </a>
          </li>
        </ul>
      </div>
    ),
    shortDescription:
      "Site web vitrine sur mesure pour une entreprise de dénaturation de bouteilles de gaz.",
    repository: "",
    stack: [Stack.javascript, Stack.nodejs, Stack.express],
    dimensions: [360, 640],
    screenshotsDesktop: [
      "/static/projects/denat-environnement/screenshots/desktop/screenshot01.jpg",
      "/static/projects/denat-environnement/screenshots/desktop/screenshot02.jpg",
      "/static/projects/denat-environnement/screenshots/desktop/screenshot03.jpg",
      "/static/projects/denat-environnement/screenshots/desktop/screenshot04.jpg",
    ],
    screenshotsMobile: [
      "/static/projects/denat-environnement/screenshots/desktop/screenshot01.jpg",
      "/static/projects/denat-environnement/screenshots/desktop/screenshot02.jpg",
      "/static/projects/denat-environnement/screenshots/desktop/screenshot03.jpg",
      "/static/projects/denat-environnement/screenshots/desktop/screenshot04.jpg",
    ],
    deployment: {
      web: "https://www.denat-environnement.fr",
    },
    subProjects: [],
  },
]
