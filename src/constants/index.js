import {
  backend,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  dawini,
  fairyTales,
  kasper,
  threejs,
} from '../../public/assets';

export const services = [
  {
    title: 'Web Developer',
    icon: web,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
];

// Roles for the "Work Experience" section, newest first. The section is hidden
// while this list is empty. Each entry looks like:
//   {
//     title: 'Job title',
//     company_name: 'Company',
//     icon: companyLogo, // optional, imported from public/assets; the company's initial is shown without it
//     iconBg: '#383E56',
//     date: 'Month YYYY - Present',
//     points: ['One line per responsibility or achievement.'],
//   },
export const experiences = [];

export const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'ReactJS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'NodeJS',
    icon: nodejs,
  },
  {
    name: 'MongoDB',
    icon: mongodb,
  },
  // {
  //   name: 'ThreeS',
  //   icon: threejs,
  // },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
  {
    name: 'docker',
    icon: docker,
  },
];

export const projects = [
  {
    name: 'Dawini',
    description: `Dawini Application is an ecommerce platform designed to cater to the needs of customers who require quick and easy access to medicines.
      With an extensive range of products available on the platform, customers can conveniently browse through different categories of medicines,
      view product details, and make purchases with just a few clicks. `,
    tags: [
      {
        name: 'angular',
        color: 'text-blue-500',
      },
      {
        name: 'node.js',
        color: ' text-green-500',
      },
      {
        name: 'express',
        color: ' text-pink-500',
      },
      {
        name: 'mongoose',
        color: 'text-yellow-500',
      },
    ],
    image: dawini,
    source_code_link: 'https://github.com/Med-org-ITI/API',
  },
  {
    name: 'Fairy Tales',
    description: 'Fairy Tales is a Website for Children’s Stories in Egypt.',
    tags: [
      {
        name: 'html',
        color: 'text-blue-500',
      },
      {
        name: 'css',
        color: ' text-green-500',
      },
      {
        name: 'js',
        color: ' text-pink-500',
      },
    ],
    image: fairyTales,
    source_code_link: 'https://github.com/MohamedYahia831/Fairy-Tales',
  },
  {
    name: 'Kasper Template',
    description:
      'Kasper is an organization for artboards founded in Italy and this website is a portfolio.',
    tags: [
      {
        name: 'html',
        color: 'text-blue-500',
      },
      {
        name: 'css',
        color: ' text-green-500',
      },
    ],
    image: kasper,
    source_code_link: 'https://github.com/MohamedYahia831/Kasper-Template',
  },
];

// Quotes for the "Testimonials" section. The section is hidden while this list
// is empty. Each entry: { testimonial, name, designation, company, image }.
export const testimonials = [];
