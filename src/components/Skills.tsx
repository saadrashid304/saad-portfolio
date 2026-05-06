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
import { SiMysql, SiDocker } from "react-icons/si";
import { ImGit } from "react-icons/im";
import { FaAws, FaJenkins } from "react-icons/fa6";

export default function Skills() {
  return (
    <>
      {/* <!-- Hero Header for Tech Stack --> */}
      <header className="max-w-7xl mx-auto px-6 md:px-12 pt-xxl pb-xl">
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
      <main className="max-w-7xl mx-auto px-6 md:px-12 pb-xxl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
          {/* <!-- Frontend Card --> */}
          <div className="bg-surface-container-lowest border border-outline-variant p-lg rounded-xl shadow-[0px_4px_20px_rgba(0,0,0,0.04)] hover:border-primary transition-all duration-300 group">
            <div className="flex items-center justify-between mb-lg">
              <div className="flex items-center gap-md">
                <div className="bg-primary-fixed w-12 h-12 flex items-center justify-center rounded-lg text-primary">
                  <MdOutlineLaptopMac size={25} />
                </div>
                <h3 className="font-h3 text-h3 text-on-surface">Frontend</h3>
              </div>
              <span className="text-surface-dim font-code text-code">
                UI/UX
              </span>
            </div>
            <p className="font-body-md text-body-md text-secondary mb-lg">
              Crafting responsive, accessible, and performant user interfaces
              with a focus on type safety and visual precision.
            </p>
            <div className="flex flex-wrap gap-sm">
              <div className="bg-surface-container-low px-md py-sm rounded-lg flex items-center gap-sm hover:bg-primary-fixed transition-colors">
                <RiReactjsLine size={18} />
                <span className="font-label-sm text-on-surface-variant">
                  React.js
                </span>
              </div>
              <div className="bg-surface-container-low px-md py-sm rounded-lg flex items-center gap-sm hover:bg-primary-fixed transition-colors">
                <RiNextjsLine size={18} />
                <span className="font-label-sm text-on-surface-variant">
                  Next.js
                </span>
              </div>
              <div className="bg-surface-container-low px-md py-sm rounded-lg flex items-center gap-sm hover:bg-primary-fixed transition-colors">
                <RiTailwindCssLine size={18} />
                <span className="font-label-sm text-on-surface-variant">
                  Tailwind CSS
                </span>
              </div>
              <div className="bg-surface-container-low px-md py-sm rounded-lg flex items-center gap-sm hover:bg-primary-fixed transition-colors">
                <RiJavascriptLine size={18} />
                <span className="font-label-sm text-on-surface-variant">
                  JavaScript
                </span>
              </div>
            </div>
          </div>
          {/* <!-- Backend Card --> */}
          <div className="bg-surface-container-lowest border border-outline-variant p-lg rounded-xl shadow-[0px_4px_20px_rgba(0,0,0,0.04)] hover:border-primary transition-all duration-300 group">
            <div className="flex items-center justify-between mb-lg">
              <div className="flex items-center gap-md">
                <div className="bg-tertiary-fixed w-12 h-12 flex items-center justify-center rounded-lg text-tertiary">
                  <MdOutlineDns size={25} />
                </div>
                <h3 className="font-h3 text-h3 text-on-surface">Backend</h3>
              </div>
              <span className="text-surface-dim font-code text-code">
                Logic
              </span>
            </div>
            <p className="font-body-md text-body-md text-secondary mb-lg">
              Building robust server-side systems and secure APIs using
              enterprise-grade frameworks and clean code principles.
            </p>
            <div className="flex flex-wrap gap-sm">
              <div className="bg-surface-container-low px-md py-sm rounded-lg flex items-center gap-sm hover:bg-tertiary-fixed transition-colors">
                <BiLogoSpringBoot size={18} />
                <span className="font-label-sm text-on-surface-variant">
                  Spring Boot
                </span>
              </div>
              <div className="bg-surface-container-low px-md py-sm rounded-lg flex items-center gap-sm hover:bg-tertiary-fixed transition-colors">
                <RiJavaLine size={18} />
                <span className="font-label-sm text-on-surface-variant">
                  Java
                </span>
              </div>
              <div className="bg-surface-container-low px-md py-sm rounded-lg flex items-center gap-sm hover:bg-tertiary-fixed transition-colors">
                <MdOutlineApi size={18} />
                <span className="font-label-sm text-on-surface-variant">
                  REST APIs
                </span>
              </div>
            </div>
          </div>
          {/* <!-- Database Card --> */}
          <div className="bg-surface-container-lowest border border-outline-variant p-lg rounded-xl shadow-[0px_4px_20px_rgba(0,0,0,0.04)] hover:border-primary transition-all duration-300 group">
            <div className="flex items-center justify-between mb-lg">
              <div className="flex items-center gap-md">
                <div className="bg-secondary-fixed w-12 h-12 flex items-center justify-center rounded-lg text-on-secondary-fixed-variant">
                  <FiDatabase size={25} />
                </div>
                <h3 className="font-h3 text-h3 text-on-surface">Database</h3>
              </div>
              <span className="text-surface-dim font-code text-code">
                Storage
              </span>
            </div>
            <p className="font-body-md text-body-md text-secondary mb-lg">
              Designing efficient data models and optimizing query performance
              for both relational and document-based architectures.
            </p>
            <div className="flex flex-wrap gap-sm">
              <div className="bg-surface-container-low px-md py-sm rounded-lg flex items-center gap-sm hover:bg-secondary-fixed transition-colors">
                <BiLogoMongodb size={18} />
                <span className="font-label-sm text-on-surface-variant">
                  MongoDB
                </span>
              </div>
              <div className="bg-surface-container-low px-md py-sm rounded-lg flex items-center gap-sm hover:bg-secondary-fixed transition-colors">
                <SiMysql size={18} />
                <span className="font-label-sm text-on-surface-variant">
                  MySQL
                </span>
              </div>
            </div>
          </div>
          {/* <!-- Tools & DevOps Card --> */}
          <div className="bg-surface-container-lowest border border-outline-variant p-lg rounded-xl shadow-[0px_4px_20px_rgba(0,0,0,0.04)] hover:border-primary transition-all duration-300 group">
            <div className="flex items-center justify-between mb-lg">
              <div className="flex items-center gap-md">
                <div className="bg-outline-variant/30 w-12 h-12 flex items-center justify-center rounded-lg text-primary">
                  <MdOutlineSettingsSuggest size={30} />
                  {/* <span
                    className="material-symbols-outlined"
                    style="font-variation-settings: 'FILL' 1;"
                  >
                    settings_suggest
                  </span> */}
                </div>
                <h3 className="font-h3 text-h3 text-on-surface">
                  Tools &amp; DevOps
                </h3>
              </div>
              <span className="text-surface-dim font-code text-code">
                Infra
              </span>
            </div>
            <p className="font-body-md text-body-md text-secondary mb-lg">
              Streamlining deployment workflows and managing cloud
              infrastructure to ensure continuous delivery and high
              availability.
            </p>
            <div className="flex flex-wrap gap-sm">
              <div className="bg-surface-container-low px-md py-sm rounded-lg flex items-center gap-sm hover:bg-primary-fixed transition-colors">
                <ImGit size={18} />
                <span className="font-label-sm text-on-surface-variant">
                  Git
                </span>
              </div>
              <div className="bg-surface-container-low px-md py-sm rounded-lg flex items-center gap-sm hover:bg-primary-fixed transition-colors">
                <SiDocker size={18} />
                <span className="font-label-sm text-on-surface-variant">
                  Docker
                </span>
              </div>
              <div className="bg-surface-container-low px-md py-sm rounded-lg flex items-center gap-sm hover:bg-primary-fixed transition-colors">
                <FaAws size={18} />
                <span className="font-label-sm text-on-surface-variant">
                  AWS
                </span>
              </div>
              <div className="bg-surface-container-low px-md py-sm rounded-lg flex items-center gap-sm hover:bg-primary-fixed transition-colors">
                <FaJenkins size={18} />
                <span className="font-label-sm text-on-surface-variant">
                  CI/CD
                </span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
