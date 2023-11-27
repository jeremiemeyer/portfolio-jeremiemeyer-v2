import { Maybe, Tuple } from '../types';

export type Deployment = {
  web?: string;
  android?: string;
  ios?: string;
};

export const defaultDimensions: Tuple<number> = [450, 220];

export interface Prestation {
  title: string;
  slug: string;
  banner: string;
  description: string;
  shortDescription?: string;
  dimensions?: Tuple<number>; // Tuple of [height, width]
  screenshots: string[];
}

export const prestations: Prestation[] = [
  {
    title: 'Création de site web WordPress',
    slug: 'creation-site-wp',
    banner: '/static/prestations/site-web-wp/banner.jpg',
    description:
      "Création d'un site WordPress sur mesure pour votre projet de société ou pour votre site personnel. WordPress est un logiciel de gestion de contenu (ou CMS pour Content Management Software), créé en 2003 et largement utilisé sur le web puisqu'à ce jour, il représente environ 40% des sites web.",
    shortDescription:
      "Création d'un site web sur mesure pour votre société.",
    dimensions: [360, 640],
    screenshots: [],
  },
  {
    title: 'Création de site web JS/HTML/CSS',
    slug: 'creation-site-js',
    banner: '/static/prestations/site-web-js/banner.jpg',
    description:
      "À travers cette prestation, je vous propose de vous créer un site web de A à Z pour votre société (ou vous-même). Qu'il s'agisse d'un simple site vitrine ou d'un site plus complexe, je prendrai en main le projet en vous proposant une solution adaptée.",
    shortDescription:
      "Création d'un site web Javascript pour votre société.",
    dimensions: [360, 640],
    screenshots: [],
  },


];
