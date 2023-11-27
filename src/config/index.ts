import { contact, Contact } from './contact';
import { Course, courses } from './courses';
import { Project, projects } from './projects';
import { Prestation, prestations } from './prestations'

interface Config {
  contact: Contact;
  projects: Project[];
  courses: Course[];
  prestations: Prestation[];
}

const config: Config = {
  contact,
  projects,
  courses,
  prestations
};

export const POSTS_PER_PAGE = 10;

export default config;
