//@ts-nocheck
import { Maybe, Tuple } from '../types';
import { Stack } from './stack';
import React from 'react';
import { H1, H2, H3 } from '@/components/Form';

export type Deployment = {
  web?: string;
  android?: string;
  ios?: string;
};

export interface SubProject {
  title: string;
  description: React.ReactNode;
  repository: Maybe<string>;
  deployment: Deployment;
}

export const defaultDimensions: Tuple<number> = [450, 220];

export interface Project {
  title: string;
  projectType: string;
  slug: string;
  website: string;
  banner: string;
  description: React.ReactNode;
  shortDescription?: string;
  repository: Maybe<string>;
  stack: Stack[];
  dimensions?: Tuple<number>; // Tuple of [height, width]
  screenshotsDesktop: string[];
  screenshotsMobile: string[];
  deployment: Deployment;
  subProjects: SubProject[];
}


export const projects: Project[] = [
  {
    title: 'Buffroo',
    projectType: 'Projet personnel',
    slug: 'buffroo',
    banner: '/static/projects/buffroo/mockup.jpg',
    website: 'https://buffroo.vercel.app',
    //I want to put a JSX element here (instead of '') so that it gets used in place of the {description} in the RenderProjectPage.tsx file
    description: React.createElement('div', null,
    React.createElement('p', null, 'Une web app permettant de renseigner le détail de ses séances de sport et de suivre sa progression au fil des semaines.'),
    React.createElement('br', null),
    React.createElement('p', null, 'Ce projet full-stack comprend :'),
    React.createElement('ul', { style: { listStyleType: 'circle', marginLeft: '20px' } },
      React.createElement('li', null, 'un front-end React.js & Vite ;'),
      React.createElement('li', null, 'un backend Express.js/Node.js ;'),
      React.createElement('li', null, 'une base de données MongoDB.'),
    ),

    React.createElement('br', null),
    React.createElement('br', null),
    React.createElement(H2,  { style : { fontSize: '20px', fontWeight: '600', marginBottom: '12px'} }, 'Fonctionnalités'),
    React.createElement(H3,  { style : { fontSize: '16px', fontWeight: '600', marginTop: '16px', marginBottom: '4px'} }, 'Entraînement'),
    React.createElement('ul', { style : { fontSize: '16px'} },
      React.createElement('li', { style : { marginBottom: '2px'} }, `🏋️‍♀️ Accédez à une bibliothèque exhaustive d'exercises ;`),
      React.createElement('li', { style : { marginBottom: '2px'} }, `✅ Ajoutez vos propres exercices ;`),
      React.createElement('li', { style : { marginBottom: '2px'} }, `📝 Renseignez vos séances en temps réel (exercices, poids, nombre répétitions) ;`),
      React.createElement('li', { style : { marginBottom: '2px'} }, `🧾 Créez des templates pour démarrer un entraînement avec une liste prédéfinie d'exercices ;`),
    ), 

    React.createElement(H3,  { style : { fontSize: '16px', fontWeight: '600', marginTop: '16px', marginBottom: '4px'} }, 'Objectifs'),
    React.createElement('ul', { style : { fontSize: '16px'} },
      React.createElement('li', { style : { marginBottom: '2px'} }, `🎯 Définissez vos objectifs ;`),
      React.createElement('li', { style : { marginBottom: '2px'} }, `🗓️ Accédez à l'historique de vos entraînements ;`),
      React.createElement('li', { style : { marginBottom: '2px'} }, `📈 Suivez votre progression au fil des semaines ;`),
    ),        

    React.createElement(H3,  { style : { fontSize: '16px', fontWeight: '600', marginTop: '16px', marginBottom: '4px'} }, 'Expérience utilisateur'),
    React.createElement('ul', { style : { fontSize: '16px'} },
      React.createElement('li', { style : { marginBottom: '2px'} }, `⏰ Chronomètres intégrés à l'interface ;`),
      React.createElement('li', { style : { marginBottom: '2px'} }, `📊 Personnalisez votre tableau de bord ;`),
      React.createElement('li', { style : { marginBottom: '2px'} }, `🌙 Mode lumineux / mode sombre ;`),
    ),
    React.createElement(H3,  { style : { fontSize: '16px', fontWeight: '600', marginTop: '16px', marginBottom: '4px'} }, 'Sécurité'),
    React.createElement('ul', { style : { fontSize: '16px'} },
      React.createElement('li', { style : { marginBottom: '2px'} }, `🔒 Chiffrage de vos données sensibles sur nos serveurs ;`),
    ),        

    React.createElement('br', null),
    React.createElement('br', null),
    React.createElement(H3,  { style : { fontSize: '20px', fontWeight: '600', marginBottom: '12px'} }, 'Bibliothèques utilisées'),
    React.createElement('ul', { style: { fontSize: '16px' } },
    React.createElement('li', { style: { listStyleType: 'circle', marginLeft: '20px', marginBottom: '2px' } },
      React.createElement('a', { href: 'https://chakra-ui.com/', target: '_blank' }, 'Chakra UI')
    ),
    React.createElement('li', { style: { listStyleType: 'circle', marginLeft: '20px', marginBottom: '2px' } },
      React.createElement('a', { href: 'https://ui.shadcn.com/', target: '_blank' }, 'shadcn/ui')
    ),
    React.createElement('li', { style: { listStyleType: 'circle', marginLeft: '20px', marginBottom: '2px' } },
      React.createElement('a', { href: 'https://recharts.org/en-US/', target: '_blank' }, 'recharts (graphiques)')
    ),
    React.createElement('li', { style: { listStyleType: 'circle', marginLeft: '20px', marginBottom: '2px' } },
      React.createElement('a', { href: 'https://react-hot-toast.com/', target: '_blank' }, 'react-hot-toast')
    ),
    React.createElement('li', { style: { listStyleType: 'circle', marginLeft: '20px', marginBottom: '2px' } },
      React.createElement('a', { href: 'https://www.npmjs.com/package/react-paginate', target: '_blank' }, 'react-paginate')
    ),
    React.createElement('li', { style: { listStyleType: 'circle', marginLeft: '20px', marginBottom: '2px' } },
      React.createElement('a', { href: 'https://www.npmjs.com/package/react-timer-hook', target: '_blank' }, 'react-timer-hook')
    )
  ),
  ),
    shortDescription:
      'Une web app pour suivre sa progression en musculation.'
      ,
    repository: '',
    stack: [
      Stack.react,
      Stack.typescript,
      Stack.tailwindcss,
      Stack.node,
      Stack.express,
      Stack.mongo,
    ],
    dimensions: [360, 640],
    screenshotsDesktop: ['/static/projects/buffroo/screenshots/desktop/000.jpg', '/static/projects/buffroo/screenshots/desktop/001.jpg', '/static/projects/buffroo/screenshots/desktop/002.jpg', '/static/projects/buffroo/screenshots/desktop/003.jpg', '/static/projects/buffroo/screenshots/desktop/004.jpg'],
    screenshotsMobile: ['/static/projects/buffroo/screenshots/mobile/001.jpg', '/static/projects/buffroo/screenshots/mobile/002.jpg', '/static/projects/buffroo/screenshots/mobile/003.jpg', '/static/projects/buffroo/screenshots/mobile/004.jpg', '/static/projects/buffroo/screenshots/mobile/005.jpg', '/static/projects/buffroo/screenshots/mobile/006.jpg', '/static/projects/buffroo/screenshots/mobile/007.jpg'],
    deployment: {
      web: 'https://buffroo.vercel.app/',
    },
    subProjects: [],
  },
  {
    title: 'Portfolio',
    projectType: 'Projet personnel',
    slug: 'portfolio-jm',
    banner: '/static/projects/portfolio-jm/mockup.jpg',
    website: 'https://www.jeremiemeyer.fr',
    description:
      "Création de mon portfolio personnel en Next.js, avec un back-end Node.js/Express.js.",
    shortDescription:
      'Mon portfolio personnel.',
    repository: '',
    stack: [
      Stack.javascript,
      Stack.node,
      Stack.react
    ],
    dimensions: [360, 640],
    screenshotsDesktop: ['/static/projects/portfolio-jm/screenshots/desktop/screenshot01.jpg'],
    screenshotsMobile: ['/static/projects/portfolio-jm/screenshots/desktop/screenshot01.jpg'],
    deployment: {
      web: 'https://www.jeremiemeyer.fr',
    },
    subProjects: [],
  },
  {
    title: 'Denat Environnement',
    projectType: 'Projet client',
    slug: 'denat-environnement',
    banner: '/static/projects/denat-environnement/mockup.jpg',
    website: 'https://www.denat-environnement.fr',
    description:
    React.createElement('div', null,
    React.createElement('p', null, `Création d'un site vitrine sur mesure pour une société de dénaturation de bouteilles de gaz.`),
    React.createElement('br', null),
    React.createElement('ul', { style: { listStyleType: 'circle', marginLeft: '20px' } },
      React.createElement('li', null, `Front-end JavaScript natif ;`),
      React.createElement('li', null, 'Back-end Node.js/Express.js minimaliste (gestion formulaire de contact, envoi de mails avec nodemailer)'),
    ),),
    shortDescription:
      'Site web vitrine sur mesure pour une entreprise de dénaturation de bouteilles de gaz.',
    repository: '',
    stack: [
      Stack.javascript,
      Stack.node,
    ],
    dimensions: [360, 640],
    screenshotsDesktop: ['/static/projects/denat-environnement/screenshots/desktop/screenshot01.jpg',
    '/static/projects/denat-environnement/screenshots/desktop/screenshot02.jpg', '/static/projects/denat-environnement/screenshots/desktop/screenshot03.jpg', '/static/projects/denat-environnement/screenshots/desktop/screenshot04.jpg'],
    screenshotsMobile: ['/static/projects/denat-environnement/screenshots/desktop/screenshot01.jpg',
    '/static/projects/denat-environnement/screenshots/desktop/screenshot02.jpg', '/static/projects/denat-environnement/screenshots/desktop/screenshot03.jpg', '/static/projects/denat-environnement/screenshots/desktop/screenshot04.jpg'],
    deployment: {
      web: 'https://www.denat-environnement.fr',
    },
    subProjects: [],
  },


  // {
  //   title: 'Peapods',
  //   slug: 'peapods',
  //   banner: '/static/projects/peapods/banner.png',
  //   website: 'https://peapods.com',
  //   description: `Peapods is a new type of decentralized social network that values real human interaction. The platform helps you become closer with your friends and make new ones. We value kindness, friendship, user privacy, and genuine connection. Together we can cure boredom, conquer loneliness, and fulfill the original promise of the internet to connect us in ways that matter.`,
  //   shortDescription:
  //     'Peapods is a new type of decentralized social network that values real human interaction.',
  //   repository: null,
  //   stack: [
  //     Stack.javascript,
  //     Stack.react,
  //     Stack.node,
  //     Stack.graphql,
  //     Stack.aws,
  //     Stack.arangodb,
  //   ],
  //   screenshots: [],
  //   deployment: {
  //     web: 'https://peapods.com',
  //   },
  //   subProjects: [],
  // },
  // {
  //   title: 'Proximity',
  //   slug: 'proximity',
  //   website: 'https://proximity-mobile.web.app',
  //   banner: '/static/projects/proximity/banner.jpeg',
  //   description:
  //     'An open source social media app that does not use your data against you.',
  //   repository: 'https://github.com/karanpratapsingh/Proximity',
  //   stack: [
  //     Stack.typescript,
  //     Stack.reactnative,
  //     Stack.node,
  //     Stack.graphql,
  //     Stack.postgres,
  //   ],
  //   screenshots: [
  //     'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fproximity%2Fscreenshots%2Fscreenshot-1.png?alt=media&token=a9b5a094-8a16-4c84-af16-65bf2378d7d9',
  //     'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fproximity%2Fscreenshots%2Fscreenshot-2.png?alt=media&token=fca4c07e-c922-445e-a259-a06c038e0974',
  //     'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fproximity%2Fscreenshots%2Fscreenshot-3.png?alt=media&token=31dafec8-fc20-4d6f-96e7-312a4c847ac5',
  //     'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fproximity%2Fscreenshots%2Fscreenshot-4-.png?alt=media&token=4067a226-5b7b-4ffa-859e-401323a864c4',
  //     'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fproximity%2Fscreenshots%2Fscreenshot-5.png?alt=media&token=c349a959-ab54-4e2d-8f8e-2393466bb5c0',
  //     'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fproximity%2Fscreenshots%2Fscreenshot-6.png?alt=media&token=f2c25e34-38e8-4886-b247-dc6f270c36d0',
  //     'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fproximity%2Fscreenshots%2Fscreenshot-7.png?alt=media&token=2af284b0-4266-4072-a900-cc9ef8521f74',
  //     'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fproximity%2Fscreenshots%2Fscreenshot-8.png?alt=media&token=e041e4bd-50fc-49a7-8a22-f6e98d3e1bc6',
  //   ],
  //   deployment: {
  //     web: 'https://proximity-mobile.web.app',
  //     android:
  //       'https://play.google.com/store/apps/details?id=com.proximity.app',
  //     ios: 'https://apps.apple.com/us/app/proximity-app/id1489041006',
  //   },
  //   subProjects: [],
  // },
];
