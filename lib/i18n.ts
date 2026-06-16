export type Language = "en" | "hr";

export const languages: Language[] = ["en", "hr"];

export const languageLabels: Record<Language, string> = {
  en: "EN",
  hr: "HR",
};

export const translations = {
  en: {
    nav: {
      home: "Home",
      projects: "Projects",
      skills: "Skills",
      experience: "Experience",
    },
    pages: {
      projects: {
        title: "Selected work.",
        descriptions: {
          medmax:
            "Healthcare web application landing page built with Next.js and Tailwind CSS for a polished and responsive user experience.",
          chaton:
            "Social networking platform built with React, TypeScript, Express.js, and PostgreSQL, including real-time messaging and user profiles.",
          shopon:
            "E-commerce website built with Next.js, TypeScript, and MongoDB, featuring product management, checkout flow, and responsive design.",
          halvingHerald:
            "Bitcoin news aggregator created with Next.js and TypeScript, delivering a clean reading experience with up-to-date market insights.",
        },
      },
      skills: {
        title: "Tools + tech.",
      },
      experience: {
        title: "Selected experience.",
        details: {
          frukFintech: {
            1: "Developed and maintained advanced web applications across frontend and backend stacks.",
            2: "Collaborated on planning, design, implementation, and testing of software solutions.",
            3: "Delivered scalable applications with a focus on performance and maintainability.",
          },
        },
      },
    },
    labels: {
      projects: "Projects",
      skills: "Skills",
      experienceSection: "Experience",
      education: "Education",
    },
    actions: {
      viewPage: "View Page",
      viewCode: "View Code",
    },
  },
  hr: {
    nav: {
      home: "Početna",
      projects: "Projekti",
      skills: "Vještine",
      experience: "Iskustvo",
    },
    pages: {
      projects: {
        title: "Odabrani radovi.",
        descriptions: {
          medmax:
            "Landing stranica zdravstvene aplikacije izrađena s Next.js i Tailwind CSS, s ThreeJs animacijama.",
          chaton:
            "Platforma za društvenu mrežu izrađena s Reactom, TypeScriptom, Express.js i PostgreSQL-om, s real-time porukama i korisničkim profilima.",
          shopon:
            "E-commerce web stranica izrađena s Next.js, TypeScriptom i MongoDB-om, s upravljanjem proizvodima, checkout procesom i responzivnim dizajnom.",
          halvingHerald:
            "Agregator vijesti o Bitcoinu izrađen s Next.js i TypeScriptom, s čistim prikazom i ažurnim tržišnim podacima.",
        },
      },
      skills: {
        title: "Alati i tehnologije.",
      },
      experience: {
        title: "Dosadašnje iskustvo.",
        details: {
          frukFintech: {
            1: "Razvijao sam i održavao web aplikacije na frontendu i backendu.",
            2: "Sudjelovao u planiranju, dizajnu, implementaciji i testiranju softverskih rješenja.",
            3: "Isporučivao sam aplikacije, te sudjelovao u njihovom održavanju.",
          },
        },
      },
    },
    labels: {
      projects: "Projekti",
      skills: "Vještine",
      experienceSection: "Iskustvo",
      education: "Obrazovanje",
    },
    actions: {
      viewPage: "Pogledaj stranicu",
      viewCode: "Pogledaj kod",
    },
  },
};

export function getTranslation(locale: Language, key: string): string {
  const path = key.split(".");
  let value: any = translations[locale];

  for (const segment of path) {
    value = value?.[segment];
    if (value == null) {
      return key;
    }
  }

  return typeof value === "string" ? value : key;
}
