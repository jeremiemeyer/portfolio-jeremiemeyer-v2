import { contact, Contact } from "./contact"
import { Course, courses } from "./courses"
import { Project, projects } from "./projects"
import { Prestation, prestations } from "./prestations"
import { BlogPost, blogposts } from "./blogposts"

interface Config {
  contact: Contact
  projects: Project[]
  courses: Course[]
  prestations: Prestation[]
  blogposts: BlogPost[]
}

const config: Config = {
  contact,
  projects,
  courses,
  prestations,
  blogposts,
}

export const POSTS_PER_PAGE = 10

export default config
