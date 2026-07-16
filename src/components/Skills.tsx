import {
  MdOutlineLaptopMac,
  MdOutlineDns,
  MdOutlineSettingsSuggest,
  MdOutlineApi,
} from "react-icons/md";
import { FiDatabase } from "react-icons/fi";
import {
  RiReactjsLine,
  RiNextjsLine,
  RiTailwindCssLine,
  RiJavascriptLine,
  RiJavaLine,
} from "react-icons/ri";
import { BiLogoSpringBoot, BiLogoMongodb } from "react-icons/bi";
import {
  SiMysql,
  SiDocker,
  SiRedux,
  SiMui,
  SiExpress,
  SiApachekafka,
  SiKeycloak,
} from "react-icons/si";
import { ImGit } from "react-icons/im";
import { FaAws } from "react-icons/fa6";
import { TbBrandTypescript } from "react-icons/tb";
import { AiOutlinePython } from "react-icons/ai";

const skills = [
  {
    id: 1,
    icon: (
      <div className="bg-primary-fixed w-12 h-12 flex items-center justify-center rounded-lg text-primary">
        <MdOutlineLaptopMac size={25} />
      </div>
    ),
    title: "Frontend",
    category: "UI/UX",
    description:
      "Crafting responsive, accessible, and performant user interfaces with a focus on type safety and visual precision.",
    hoverColor: "bg-primary-fixed",
    technologies: [
      {
        id: 1,
        icon: <RiReactjsLine size={18} />,
        name: "React.js",
      },
      {
        id: 2,
        icon: <RiNextjsLine size={18} />,
        name: "Next.js",
      },
      {
        id: 3,
        icon: <RiTailwindCssLine size={18} />,
        name: "Tailwind CSS",
      },
      {
        id: 4,
        icon: <TbBrandTypescript size={18} />,
        name: "TypeScript",
      },
      {
        id: 5,
        icon: <RiJavascriptLine size={18} />,
        name: "JavaScript",
      },
      {
        id: 6,
        icon: <SiRedux size={15} />,
        name: "Redux Toolkit",
      },
      {
        id: 7,
        icon: <SiMui size={15} />,
        name: "Material UI",
      },
    ],
  },
  {
    id: 2,
    icon: (
      <div className="bg-tertiary-fixed w-12 h-12 flex items-center justify-center rounded-lg text-tertiary">
        <MdOutlineDns size={25} />
      </div>
    ),
    title: "Backend",
    category: "Logic",
    description:
      "Building robust server-side systems and secure APIs using enterprise-grade frameworks and clean code principles.",
    hoverColor: "bg-tertiary-fixed",
    technologies: [
      {
        id: 1,
        icon: <BiLogoSpringBoot size={18} />,
        name: "Spring Boot",
      },
      {
        id: 2,
        icon: <RiJavaLine size={18} />,
        name: "Java",
      },
      {
        id: 3,
        icon: <MdOutlineApi size={18} />,
        name: "REST APIs",
      },
      {
        id: 4,
        icon: <SiExpress size={18} />,
        name: "Express.js",
      },
      {
        id: 5,
        icon: <AiOutlinePython size={18} />,
        name: "Python",
      },
    ],
  },
  {
    id: 3,
    icon: (
      <div className="bg-secondary-fixed w-12 h-12 flex items-center justify-center rounded-lg text-on-secondary-fixed-variant">
        <FiDatabase size={25} />
      </div>
    ),
    title: "Database",
    category: "Storage",
    description:
      "Designing efficient data models and optimizing query performance for both relational and document-based architectures.",
    hoverColor: "bg-secondary-fixed",
    technologies: [
      {
        id: 1,
        icon: <BiLogoMongodb size={18} />,
        name: "MongoDB",
      },
      {
        id: 2,
        icon: <SiMysql size={18} />,
        name: "MySQL",
      },
    ],
  },
  {
    id: 4,
    icon: (
      <div className="bg-outline-variant/30 w-12 h-12 flex items-center justify-center rounded-lg text-primary">
        <MdOutlineSettingsSuggest size={30} />
      </div>
    ),
    title: "DevOps & Tools",
    category: "Infra",
    description:
      "Streamlining deployment workflows and managing cloud infrastructure to ensure continuous delivery and high availability.",
    hoverColor: "bg-primary-fixed",
    technologies: [
      {
        id: 1,
        icon: <ImGit size={18} />,
        name: "Git",
      },
      {
        id: 2,
        icon: <SiDocker size={18} />,
        name: "Docker",
      },
      {
        id: 3,
        icon: <SiApachekafka size={18} />,
        name: "Apache Kafka",
      },
      {
        id: 4,
        icon: <SiKeycloak size={15} />,
        name: "Keycloak",
      },
      {
        id: 5,
        icon: <FaAws size={18} />,
        name: "AWS (Basics)",
      },
    ],
  },
];

export default function Skills() {
  return (
    <main id="skills" className="max-w-[90%] mx-auto px-6 md:px-12 py-10">
      {/* <!-- Hero Header for Tech Stack --> */}
      <header className="w-full mb-10">
        <div className="flex items-center gap-sm mb-md">
          <span className="w-3 h-3 bg-primary rounded-full animate-pulse"></span>
          <span className="font-label-sm text-primary uppercase tracking-widest">
            Core Capabilities
          </span>
        </div>
        <h1 className="font-h1 text-h1 font-bold text-on-surface mb-md max-w-200">
          A specialized toolkit for{" "}
          <span className="text-primary">high-performance</span> engineering.
        </h1>
        <p className="font-body-lg text-body-lg text-secondary max-w-145">
          Leveraging modern frameworks and robust infrastructure to build
          scalable, production-ready software solutions with a focus on clean
          architecture.
        </p>
      </header>
      {/* <!-- Tech Stack Grid Section --> */}
      <main className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
          {/* CARD */}
          {skills.map((skill) => (
            <div
              key={skill.id}
              className="bg-surface-container-lowest border border-outline-variant p-lg rounded-xl shadow-[0px_4px_20px_rgba(0,0,0,0.04)] hover:border-primary transition-all duration-300 group"
            >
              <div className="flex items-center justify-between mb-lg">
                <div className="flex items-center gap-md">
                  {skill.icon}
                  <h3 className="font-h3 text-h3 font-bold text-on-surface">
                    {skill.title}
                  </h3>
                </div>
                <span className="text-surface-dim font-code text-code">
                  {skill.category}
                </span>
              </div>
              <p className="font-body-md text-body-md text-secondary mb-lg">
                {skill.description}
              </p>
              <div className="flex flex-wrap gap-sm">
                {skill.technologies.map((technology) => (
                  <div
                    key={technology.id}
                    className={`bg-surface-container-low px-md py-sm rounded-lg flex items-center gap-sm hover:${skill.hoverColor} transition-colors`}
                  >
                    {technology.icon}
                    <span className="font-label-sm text-on-surface-variant">
                      {technology.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </main>
    </main>
  );
}
