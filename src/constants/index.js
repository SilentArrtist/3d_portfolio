import {
  mobile,
  backend,
  web,
  javascript,
  typescript,
  html,
  photographer,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  observer,
  sharify,
  observerImage,
  sharifyImage,
  portfolioImage,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Fullstack Developer",
    icon: mobile,
  },
  {
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "Learning",
    company_name: "JS,TS,React,SASS",
    icon: javascript,
    iconBg: "#383E56",
    date: "January 2022 - Ever",
    points: [
      "Learning JavaScript",
      "Make some pet projects like currency converter.",
      "Make my graduate work on React.js + Node.js",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Observer",
    icon: observer,
    iconBg: "#E6DEDD",
    date: "October 2022 - January 2023",
    points: [
      "Developing and maintaining web application using React.js and other related technologies.",
      "Developing Backend API with Sqlite and Express for data storage and authorization.",
    ],
  },
  {
    title: "Frontend  Developer",
    company_name: "Sharify",
    icon: sharify,
    iconBg: "#E6DEDD",
    date: "October 2022 - January 2023",
    points: [
      "Developing and maintaining web application like Pinterest using React.js.",
      "Developing Backend by using Sanity.io with Google authorization.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Photographer portfolio",
    icon: photographer,
    iconBg: "#E6DEDD",
    date: "February 2023 - February 2023",
    points: [
      "Developing photographer portfolio using React.js.",
      "Deploying portfolio on Netlify.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "SCADA service App",
    description:
      "A web platform that makes it easier for engineers to maintain automation systems by storing all information on the devices themselves.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "sqlite3",
        color: "pink-text-gradient",
      },
    ],
    image: observerImage,
    source_code_link: "https://github.com/SilentArrtist/observerClient",
  },
  {
    name: "Pinterest clone",
    description:
      "Pinterest clone with the ability to add your own photos, upload others, comment and save them, and login with google.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "sanity",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: sharifyImage,
    source_code_link: "https://github.com/SilentArrtist/sharify",
  },
  {
    name: "Photographer Portfolio",
    description:
      "Portfolio for a photographer with uploading new photos from a JSON file.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "scss",
        color: "green-text-gradient",
      },
      {
        name: "json",
        color: "pink-text-gradient",
      },
    ],
    image: portfolioImage,
    source_code_link: "https://github.com/SilentArrtist/ferapontova_demo",
  },
];

export { services, technologies, experiences, testimonials, projects };
