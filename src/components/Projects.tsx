import Image from "next/image";
// import { FaCode } from "react-icons/fa6";

import { FaRegCheckCircle } from "react-icons/fa";

import LawfulInterceptionThumbnail from "@/assets/thumbnails/LawfulThumbnail.png";
import BulletLocalizationThumbnail from "@/assets/thumbnails/BulletThumbnail.png";
import IJournalistThumbnail from "@/assets/thumbnails/IJournalistThumbnail.png";
import QaisThumbnail from "@/assets/thumbnails/QaisThumbnail.png";
import NorasolThumbnail from "@/assets/thumbnails/NoraSolThumbnail.png";

import ProjectDetailsButton from "./ProjectDetailsButton";

const projects = [
  {
    id: 1,
    thumbnail: (
      <Image
        priority
        alt="LawfulInterceptionThumbnail"
        className="w-full h-full object-cover"
        data-alt="A secure surveillance and monitoring platform developed for authorized agencies to manage lawful interception workflows and communication data analysis."
        src={LawfulInterceptionThumbnail}
      />
    ),
    title: "Lawful Interception System",
    description:
      "A secure surveillance and monitoring platform developed for authorized agencies to manage lawful interception workflows and communication data analysis.",
    features: [
      {
        id: 1,
        description: "Role-based access control and secure authentication",
      },
      {
        id: 2,
        description: "Real-time monitoring dashboard and data visualization",
      },
    ],
    techStack: [
      {
        id: 1,
        name: "React.js",
      },
      {
        id: 2,
        name: "Spring Boot",
      },
      {
        id: 3,
        name: "MongoDB",
      },
    ],
    slug: "LawfulInterception",
  },
  {
    id: 2,
    thumbnail: (
      <Image
        priority
        alt="BulletLocalizationThumbnail"
        className="w-full h-full object-cover"
        data-alt="A real-time shot detection and visualization platform designed to capture bullet impact coordinates from sensors and display precise hit locations for training, accuracy analysis, and target monitoring."
        src={BulletLocalizationThumbnail}
      />
    ),
    title: "Bullet Localization System",
    description:
      "A real-time shot detection and visualization platform designed to capture bullet impact coordinates from sensors and display precise hit locations for training, accuracy analysis, and target monitoring.",
    features: [
      {
        id: 1,
        description: "Real-time bullet impact localization and visualization",
      },
      {
        id: 2,
        description: "Session-based shot tracking and history management",
      },
    ],
    techStack: [
      {
        id: 1,
        name: "Python",
      },
      {
        id: 2,
        name: "Reflex",
      },
      {
        id: 3,
        name: "Recharts",
      },
      {
        id: 4,
        name: "SQLite",
      },
    ],
    slug: "BulletLocalization",
  },
  {
    id: 3,
    thumbnail: (
      <Image
        priority
        alt="IJournalistThumbnail"
        className="w-full h-full object-cover"
        data-alt="An AI-powered media intelligence platform that analyzes news articles from multiple sources using large language models to generate sentiment insights, reports, and real-time monitoring dashboards."
        src={IJournalistThumbnail}
      />
    ),
    title: "IJournalist",
    description:
      "An AI-powered media intelligence platform that analyzes news articles from multiple sources using large language models to generate sentiment insights, reports, and real-time monitoring dashboards.",
    features: [
      {
        id: 1,
        description:
          "Automated news collection and sentiment analysis workflows",
      },
      {
        id: 2,
        description:
          "Interactive dashboards with charts, filters, and reporting",
      },
    ],
    techStack: [
      {
        id: 1,
        name: "React.js",
      },
      {
        id: 2,
        name: "Express.js",
      },
      {
        id: 3,
        name: "LLM APIs",
      },
    ],
    slug: "IJournalist",
  },
  {
    id: 4,
    thumbnail: (
      <Image
        priority
        alt="QaisThumbnail"
        className="w-full h-full object-cover"
        data-alt="A modern corporate website developed for QAIS to showcase enterprise solutions, services, and technology expertise through a clean, responsive, and professional digital presence."
        src={QaisThumbnail}
      />
    ),
    title: "QAIS Website",
    description:
      "A modern corporate website developed for QAIS to showcase enterprise solutions, services, and technology expertise through a clean, responsive, and professional digital presence.",
    features: [
      {
        id: 1,
        description: "Modern responsive UI with premium user experience",
      },
      {
        id: 2,
        description: "Optimized performance and cross-device compatibility",
      },
    ],
    techStack: [
      {
        id: 1,
        name: "React.js",
      },
      {
        id: 2,
        name: "Tailwind CSS",
      },
      {
        id: 3,
        name: "Framer Motion",
      },
    ],
    slug: "Qais",
  },
  {
    id: 5,
    thumbnail: (
      <Image
        priority
        alt="NoraSolThumbnail"
        className="w-full h-full object-cover"
        data-alt="A modern solar energy solutions website developed for NoraSol to showcase premium solar inverters, battery storage systems, and renewable energy products through a clean and responsive digital experience."
        src={NorasolThumbnail}
      />
    ),
    title: "NoraSol Website",
    description:
      "A modern solar energy solutions website developed for NoraSol to showcase premium solar inverters, battery storage systems, and renewable energy products through a clean and responsive digital experience.",
    features: [
      {
        id: 1,
        description:
          "Product showcase for solar inverters, lithium batteries, and energy solutions",
      },
      {
        id: 2,
        description:
          "Professional branding focused on clean energy and sustainability",
      },
    ],
    techStack: [
      {
        id: 1,
        name: "Next.js",
      },
      {
        id: 2,
        name: "Tailwind CSS",
      },
      {
        id: 3,
        name: "TypeScript",
      },
    ],
    slug: "NoraSol",
  },
];

export default function Projects() {
  return (
    <main id="projects" className="max-w-[90%] mx-auto px-6 md:px-12 py-10">
      {/* <!-- Section Header --> */}
      <div className="mb-xl text-center md:text-left">
        <div className="flex items-center gap-sm mb-md">
          <span className="w-3 h-3 bg-primary rounded-full animate-pulse"></span>
          <span className="font-label-sm text-primary uppercase tracking-widest">
            Portfolio
          </span>
        </div>
        <h1 className="font-h1 text-h1 font-bold text-on-surface mb-md">
          Featured Projects
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
          A selection of high-performance web applications and technical
          solutions crafted with precision and modern engineering principles.
        </p>
      </div>
      {/* <!-- Project Grid --> */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
        {projects.map((project) => (
          <article
            key={project.id}
            className="project-card flex flex-col bg-surface-container-lowest border border-outline-variant rounded-xl overflow-hidden transition-all duration-300 shadow-[0px_4px_20px_rgba(0,0,0,0.04)]"
          >
            <div className="aspect-video overflow-hidden">
              {project.thumbnail}
            </div>
            <div className="p-lg flex flex-col grow">
              <div className="flex flex-wrap gap-2 mb-md">
                {project.techStack.map((item) => (
                  <span
                    key={item.id}
                    className="px-3 py-1 bg-surface-container-high text-on-surface-variant rounded-full font-label-sm text-label-sm"
                  >
                    {item.name}
                  </span>
                ))}
                {/* <span className="px-3 py-1 bg-surface-container-high text-on-surface-variant rounded-full font-label-sm text-label-sm">
                  React
                </span>
                <span className="px-3 py-1 bg-surface-container-high text-on-surface-variant rounded-full font-label-sm text-label-sm">
                  Tailwind CSS
                </span>
                <span className="px-3 py-1 bg-surface-container-high text-on-surface-variant rounded-full font-label-sm text-label-sm">
                  Redux
                </span> */}
              </div>
              <h3 className="font-h3 text-h3 font-bold text-on-surface mb-sm">
                {project.title}
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant mb-md grow">
                {project.description}
              </p>
              <ul className="space-y-2 mb-lg">
                {project.features.map((feature) => (
                  <li
                    key={feature.id}
                    className="flex items-center gap-2 text-on-surface-variant text-label-sm font-label-sm"
                  >
                    <FaRegCheckCircle size={18} className="text-primary" />
                    {feature.description}
                  </li>
                ))}
              </ul>
              <div className="grid grid-cols-1 gap-sm pt-md border-t border-outline-variant/30">
                <ProjectDetailsButton slug={project.slug} />
                {/* <button className="px-4 py-2 border border-outline-variant text-secondary rounded-lg font-label-sm text-label-sm flex items-center justify-center gap-2 hover:bg-surface-container-low transition-colors cursor-pointer">
                  View Code <FaCode size={20} />
                </button> */}
              </div>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
