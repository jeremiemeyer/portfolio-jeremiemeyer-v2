import { SiteConfig } from "../src/types"
import { env } from "../env.mjs"

export const siteConfig: SiteConfig = {
  name: "Jeremie Meyer",
  author: "Jeremie Meyer",
  description: "Développement web freelance",
  url: env.NEXT_PUBLIC_APP_URL,
  links: {
    github: "https://github.com/jeremiemeyer",
    // facebook: "",
    // twitter: "",
    linkedin: "https://www.linkedin.com/in/jeremiemeyer/",
    personal: "https://www.jeremiemeyer.fr",
  },
}
