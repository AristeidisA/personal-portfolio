import LFC from "./assets/lfc-portfolio.jpg";
import STQ from "./assets/societeQ-logo-portfolio.jpg";
import TL from "./assets/Travel-list-porfolio.jpg";
import PP from "./assets/personal-portfolio.jpg";
import MM from "./assets/mapty-portfolio.jpg";
import PH from "./assets/Porto-Heli-portfolio.jpg";

export const PROJECTS = [
  {
    title: "Legends Final Combat website",
    image: LFC,
    description: `Developed and designed a responsive and user-friendly WordPress website 
        for a kickboxing organization, integrating custom code for tailored functionality. 
        Highlighted upcoming tournaments and past event archives with an accessible design. 
        Optimized the site for seamless navigation across devices.`,
    technologies: ["WordPress", "Elementor", "CSS", "Photoshop"],
    link: {
      url: "https://lfcgreece.com/",
      name: "Visit Legends Final Combat",
    },
  },

  {
    title: "SocieTeQ website",
    image: STQ,
    description: `Designed and developed SocieTeQs' website with a focus on a modern, sleek design and seamless navigation. 
    Ensured a user-friendly and responsive experience, effectively showcasing the company's mission and purpose.`,
    technologies: [
      "WordPress",
      "Elementor",
      "Javascript",
      "Particles.js library",
    ],
    link: {
      url: "https://societeq.gr",
      name: "Visit SocieTeQ",
    },
  },

  {
    title: "Travel List Web App",
    image: TL,
    description: `Built a React.js travel list web app as part of my React learning course. 
        The app allows users to add, edit, and check off items, ensuring everything is packed for trips. 
        It features an intuitive interface, reinforcing my skills in state management and component-based development.`,
    technologies: ["React", "CSS"],
    link: {
      url: "https://aristeidisa.github.io/travel-list-react-app/",
      name: "Visit Travel List Web App",
    },
  },

  {
    title: "Personal Portfolio",
    image: PP,
    description: `Developed and designed my personal portfolio website to showcase my work and experience.`,
    technologies: ["React", "Tailwind.css", "Framer Motion"],
    link: {
      url: "https://aristeidisa.github.io/personal-portfolio/",
      name: "Visit Personal Portfolio",
    },
  },
  {
    title: "Mapty Web App",
    image: MM,
    description: `Developed a Web App to help users track their fitness goals on an interactive map. 
    Designed for ease of use and high-quality performance. 
    Built as part of the Complete Javascript Course 2023, showcasing skills in modern web technologies and providing value to fitness enthusiasts.`,
    technologies: ["Html", "CSS", "Javascript", "Leaflet.js Library"],
    link: {
      url: "https://aristeidisa.github.io/Mapty-JS-Project/",
      name: "Visit Mapty Web App",
    },
  },

  {
    title: "Visit Porto Heli Blog Website",
    image: PH,
    description: `Developed a blog website for a client to showcase Porto Heli, featuring articles and travel tips about the area. 
    Focused on creating a user-friendly, visually appealing platform to highlight the region's attractions and engage readers.`,
    technologies: ["WordPress", "Elementor", "Javascript", "CSS"],
    link: {
      url: "https://portoheligreece.gr/",
      name: "Visit Porto Heli Blog Website",
    },
  },
];
