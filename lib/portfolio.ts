export interface Project {
  title: string;
  description: string;
  descriptionKey: string;
  demoLink: string;
  codeLink: string;
  tags: string[];
}

export interface SkillCategory {
  category: string;
  items: string[];
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  location?: string;
  details: string[];
  detailKeys?: string[];
}

export interface EducationItem {
  title: string;
  organization: string;
  period: string;
  description: string;
}

export const projects: Project[] = [
  {
    title: "Medmax",
    description:
      "Healthcare web application landing page built with Next.js and Tailwind CSS for a polished and responsive user experience.",
    descriptionKey: "pages.projects.descriptions.medmax",
    demoLink: "https://medmax.vercel.app",
    codeLink: "https://github.com/damirgros/medmax",
    tags: ["Next.js", "TypeScript", "TailwindCSS"],
  },

  {
    title: "Chaton",
    description:
      "Social networking platform built with React, TypeScript, Express.js, and PostgreSQL, including real-time messaging and user profiles.",
    descriptionKey: "pages.projects.descriptions.chaton",
    demoLink: "https://chaton-server-bgsr.onrender.com",
    codeLink: "https://github.com/damirgros/chaton",
    tags: ["React", "Express.js", "PostgreSQL"],
  },
  {
    title: "Shopon",
    description:
      "E-commerce website built with Next.js, TypeScript, and MongoDB, featuring product management, checkout flow, and responsive design.",
    descriptionKey: "pages.projects.descriptions.shopon",
    demoLink: "https://shopon-ten.vercel.app",
    codeLink: "https://github.com/damirgros/shopon",
    tags: ["Next.js", "MongoDB", "TypeScript"],
  },
  {
    title: "Halving Herald",
    description:
      "Bitcoin news aggregator created with Next.js and TypeScript, delivering a clean reading experience with up-to-date market insights.",
    descriptionKey: "pages.projects.descriptions.halvingHerald",
    demoLink: "https://halving-herald.vercel.app",
    codeLink: "https://github.com/damirgros/halving-herald",
    tags: ["Next.js", "TypeScript"],
  },
];

export const skills: SkillCategory[] = [
  {
    category: "Frontend",
    items: [
      "React",
      "Next.js",
      "JavaScript",
      "TypeScript",
      "HTML",
      "CSS",
      "TailwindCSS",
      "SCSS",
      "Bootstrap",
      "React Native",
    ],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express.js"],
  },
  {
    category: "Databases",
    items: ["MongoDB", "PostgreSQL"],
  },
  {
    category: "Testing",
    items: ["Jest"],
  },
];

export const experience: ExperienceItem[] = [
  {
    role: "Software Developer",
    company: "Fruk Fintech d.o.o.",
    period: "05/2025 – 05/2026",
    location: "Vrbanja",
    details: [
      "Developed and maintained advanced web applications across frontend and backend stacks.",
      "Collaborated on planning, design, implementation, and testing of software solutions.",
      "Delivered scalable applications with a focus on performance and maintainability.",
    ],
    detailKeys: [
      "pages.experience.details.frukFintech.1",
      "pages.experience.details.frukFintech.2",
      "pages.experience.details.frukFintech.3",
    ],
  },
];

export const education: EducationItem[] = [
  {
    title: "Frontend Development",
    organization: "Algebra University",
    period: "07/2024 – 02/2025",
    description:
      "Completed an intensive program covering fundamental and advanced web technologies, including HTML, CSS, JavaScript, and React. Gained experience with Git, Webpack, Babel, SCSS, and Redux while building responsive, scalable web applications.",
  },
  {
    title: "Frontend & Backend Development",
    organization: "The Odin Project",
    period: "Online course",
    description:
      "Completed a project-oriented curriculum in modern web development, covering HTML, CSS, JavaScript, DOM manipulation, asynchronous programming, Node.js, Express.js, and database management with a focus on real-world projects.",
  },
];
