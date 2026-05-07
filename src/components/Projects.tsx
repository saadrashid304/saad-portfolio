import Image from "next/image";
import { FaCode } from "react-icons/fa6";
import { FiExternalLink } from "react-icons/fi";
import { FaRegCheckCircle } from "react-icons/fa";

export default function Projects() {
  return (
    <main
      id="projects"
      className="max-w-7xl mx-auto px-6 md:px-12 py-10"
    >
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
        {/* <!-- Card 1 --> */}
        <article className="project-card flex flex-col bg-surface-container-lowest border border-outline-variant rounded-xl overflow-hidden transition-all duration-300 shadow-[0px_4px_20px_rgba(0,0,0,0.04)]">
          <div className="aspect-video overflow-hidden">
            <Image
              priority
              width={512}
              height={512}
              alt=""
              className="w-full h-full object-cover"
              data-alt="A professional, high-end e-commerce interface for audiophiles featuring sleek black headphones and minimalist typography. The UI is clean with high-key lighting, soft shadows, and a sophisticated electric blue accent color. The environment is a bright, modern studio setting reflecting technical precision and premium hardware aesthetics."
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAeFurpJLh2ECA-LgBtjWrzHKyN-v9yQaFC9RkAuUBQqtQTndV3VNd5qvnZ4PeA6m9AQwf1NPBvCxgC9Fc_G3K2_dQWbDT3pHDIMyao1sUBCADGxgkN49UttdIr3EDTxp2QP_zB9pnaCu1JCbMnMb5ykVjkiJvezTkXxTatIFSWArRbcHUC0jEz5HwKEIzcA69vnDHOOyEFnmGGZ0Dg2Flz2bMgscgc12_qO0TR2-72Jpnlxgo_fxdntGLKbQmS4IsIL0d1U32OOPg"
            />
          </div>
          <div className="p-lg flex flex-col grow">
            <div className="flex flex-wrap gap-2 mb-md">
              <span className="px-3 py-1 bg-surface-container-high text-on-surface-variant rounded-full font-label-sm text-label-sm">
                React
              </span>
              <span className="px-3 py-1 bg-surface-container-high text-on-surface-variant rounded-full font-label-sm text-label-sm">
                Tailwind CSS
              </span>
              <span className="px-3 py-1 bg-surface-container-high text-on-surface-variant rounded-full font-label-sm text-label-sm">
                Redux
              </span>
            </div>
            <h3 className="font-h3 text-h3 text-on-surface mb-sm">
              Audiophile E-commerce Website
            </h3>
            <p className="font-body-md text-body-md text-on-surface-variant mb-md grow">
              A premium audio equipment store built with React.js, featuring a
              complex cart system and checkout flow.
            </p>
            <ul className="space-y-2 mb-lg">
              <li className="flex items-center gap-2 text-on-surface-variant text-label-sm font-label-sm">
                <FaRegCheckCircle size={18} className="text-primary" />
                Multi-step checkout validation
              </li>
              <li className="flex items-center gap-2 text-on-surface-variant text-label-sm font-label-sm">
                <FaRegCheckCircle size={18} className="text-primary" />
                Persistent shopping cart state
              </li>
            </ul>
            <div className="grid grid-cols-2 gap-sm pt-md border-t border-outline-variant/30">
              <button className="px-4 py-2 bg-primary text-on-primary rounded-lg font-label-sm text-label-sm flex items-center justify-center gap-2 hover:opacity-90 transition-opacity cursor-pointer">
                Live Demo <FiExternalLink size={20} />
              </button>
              <button className="px-4 py-2 border border-outline-variant text-secondary rounded-lg font-label-sm text-label-sm flex items-center justify-center gap-2 hover:bg-surface-container-low transition-colors cursor-pointer">
                View Code <FaCode size={20} />
              </button>
            </div>
          </div>
        </article>
        {/* <!-- Card 2 --> */}
        <article className="project-card flex flex-col bg-surface-container-lowest border border-outline-variant rounded-xl overflow-hidden transition-all duration-300 shadow-[0px_4px_20px_rgba(0,0,0,0.04)]">
          <div className="aspect-video overflow-hidden">
            <Image
              priority
              width={512}
              height={512}
              alt=""
              className="w-full h-full object-cover"
              data-alt="A futuristic personal branding website mockup displayed on a sleek laptop screen. The design uses heavy whitespace, fluid asymmetric layouts, and elegant motion trails. The color palette is a clean tech aesthetic with white surfaces and deep electric blue highlights. Professional lighting creates a tactile, high-performance atmosphere."
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDidyGVnsP2rkjNBk7rywNCGSN9GEwNCeRpHn7Bq1ACwWCqxme0XYkpWV2pwU317mfOJQyBUEnou5QX2GE_mau-pvLIoTtTw3eqXrHLu6RBQXWqBhDUETKhMN90oWQ29nL6NDN_s4SFoZSnUoH3O5XLt__RJn3eu6v5S853y0gHl0bVUUzCwizEq9Bbl_w8JDfexNdJlkbQOS-cYhiOa3IGIfcu-lTABcwGalzQcuqYpJamyBVTL2GRfZYoTOEAdi_CeQuoYYTGm-8"
            />
          </div>
          <div className="p-lg flex flex-col grow">
            <div className="flex flex-wrap gap-2 mb-md">
              <span className="px-3 py-1 bg-surface-container-high text-on-surface-variant rounded-full font-label-sm text-label-sm">
                React
              </span>
              <span className="px-3 py-1 bg-surface-container-high text-on-surface-variant rounded-full font-label-sm text-label-sm">
                Framer Motion
              </span>
              <span className="px-3 py-1 bg-surface-container-high text-on-surface-variant rounded-full font-label-sm text-label-sm">
                Kinetic Logic DS
              </span>
            </div>
            <h3 className="font-h3 text-h3 text-on-surface mb-sm">
              Personal Portfolio
            </h3>
            <p className="font-body-md text-body-md text-on-surface-variant mb-md grow">
              A high-performance personal branding site with smooth animations
              and deep design system integration.
            </p>
            <ul className="space-y-2 mb-lg">
              <li className="flex items-center gap-2 text-on-surface-variant text-label-sm font-label-sm">
                <FaRegCheckCircle size={18} className="text-primary" />
                Custom motion orchestration
              </li>
              <li className="flex items-center gap-2 text-on-surface-variant text-label-sm font-label-sm">
                <FaRegCheckCircle size={18} className="text-primary" />
                Component-driven architecture
              </li>
            </ul>
            <div className="grid grid-cols-2 gap-sm pt-md border-t border-outline-variant/30">
              <button className="px-4 py-2 bg-primary text-on-primary rounded-lg font-label-sm text-label-sm flex items-center justify-center gap-2 hover:opacity-90 transition-opacity cursor-pointer">
                Live Demo <FiExternalLink size={20} />
              </button>
              <button className="px-4 py-2 border border-outline-variant text-secondary rounded-lg font-label-sm text-label-sm flex items-center justify-center gap-2 hover:bg-surface-container-low transition-colors cursor-pointer">
                View Code <FaCode size={20} />
              </button>
            </div>
          </div>
        </article>
        {/* <!-- Card 3 --> */}
        <article className="project-card flex flex-col bg-surface-container-lowest border border-outline-variant rounded-xl overflow-hidden transition-all duration-300 shadow-[0px_4px_20px_rgba(0,0,0,0.04)]">
          <div className="aspect-video overflow-hidden">
            <Image
              priority
              width={512}
              height={512}
              alt=""
              className="w-full h-full object-cover"
              data-alt="A modern software agency landing page with minimalist high-end aesthetics. Large bold typography contrasts against vast white space. Geometric glassmorphism elements overlap in an asymmetric layout. The lighting is soft and ambient, creating a clean tech vibe with deep blue and soft grey tones for a professional agency look."
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuA3XoowlRDf1oEFarFmlvVbLsfxI2OEvOHOwgGraCdbK90SgGO30AnFLIAzEyc0e1qMukAtCTV8sjukLyR_9QjAjBo0MjBPymGPjEyWzcvUMNCCYaQrRTBGaGpqCvtwEFB1IYKX3uvH4anJMLaH0dKKusOwTg1v_RpPRZndFfwkI7ZbP_EklQjt8H67HSDIvM9mHNV4tyhWkOlSTCE9TPD-gTtj-ZP1XbmcH26vScWkV1vOytMwgpd525e5_2C5m1Yagm5kpQhgle8"
            />
          </div>
          <div className="p-lg flex flex-col grow">
            <div className="flex flex-wrap gap-2 mb-md">
              <span className="px-3 py-1 bg-surface-container-high text-on-surface-variant rounded-full font-label-sm text-label-sm">
                Next.js
              </span>
              <span className="px-3 py-1 bg-surface-container-high text-on-surface-variant rounded-full font-label-sm text-label-sm">
                GSAP
              </span>
              <span className="px-3 py-1 bg-surface-container-high text-on-surface-variant rounded-full font-label-sm text-label-sm">
                React
              </span>
            </div>
            <h3 className="font-h3 text-h3 text-on-surface mb-sm">
              Creative Agency Site
            </h3>
            <p className="font-body-md text-body-md text-on-surface-variant mb-md grow">
              A modern, minimalist landing page for a software agency focused on
              sleek visuals and rapid performance.
            </p>
            <ul className="space-y-2 mb-lg">
              <li className="flex items-center gap-2 text-on-surface-variant text-label-sm font-label-sm">
                <FaRegCheckCircle size={18} className="text-primary" />
                Scroll-triggered animations
              </li>
              <li className="flex items-center gap-2 text-on-surface-variant text-label-sm font-label-sm">
                <FaRegCheckCircle size={18} className="text-primary" />
                SSR for optimal SEO ranking
              </li>
            </ul>
            <div className="grid grid-cols-2 gap-sm pt-md border-t border-outline-variant/30">
              <button className="px-4 py-2 bg-primary text-on-primary rounded-lg font-label-sm text-label-sm flex items-center justify-center gap-2 hover:opacity-90 transition-opacity cursor-pointer">
                Live Demo <FiExternalLink size={20} />
              </button>
              <button className="px-4 py-2 border border-outline-variant text-secondary rounded-lg font-label-sm text-label-sm flex items-center justify-center gap-2 hover:bg-surface-container-low transition-colors cursor-pointer">
                View Code <FaCode size={20} />
              </button>
            </div>
          </div>
        </article>
        {/* <!-- Card 4 --> */}
        <article className="project-card flex flex-col bg-surface-container-lowest border border-outline-variant rounded-xl overflow-hidden transition-all duration-300 shadow-[0px_4px_20px_rgba(0,0,0,0.04)]">
          <div className="aspect-video overflow-hidden">
            <Image
              priority
              width={512}
              height={512}
              alt=""
              className="w-full h-full object-cover"
              data-alt="A bright, colorful and graphic landing page featuring citrus fruits and sunny summer vibes. The layout is perfectly responsive with clear sections and playful typography. The aesthetic is clean and modern, using high-contrast colors and sharp photographic elements within a structured grid system for a responsive web design showcase."
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDhOOv37MZS6BQsqcwyCCtL0Cp9XDSAeFDIIf4e9Lh0zEqiQuCAZgLBc9s6CeWhZvQdX19kWPkpqIOiuGsQsmq5UtOW4nif7OKMfvSa1IVwe0oI5Cm2x5siSCzuOcbDZdtDfQVmJ3d3CYZciGwtfeGDazHML_8kW2fDLMBIm56DUxCZgcwxn3Wp-fRa49dlO9wTvbaFxh73ZrwjGr81BtxfHNys_9AjiGT8wMFotc5XCJZ2PWHcLAopr_htnoLOtiEtNoHQ8yvLeHg"
            />
          </div>
          <div className="p-lg flex flex-col grow">
            <div className="flex flex-wrap gap-2 mb-md">
              <span className="px-3 py-1 bg-surface-container-high text-on-surface-variant rounded-full font-label-sm text-label-sm">
                HTML
              </span>
              <span className="px-3 py-1 bg-surface-container-high text-on-surface-variant rounded-full font-label-sm text-label-sm">
                CSS
              </span>
              <span className="px-3 py-1 bg-surface-container-high text-on-surface-variant rounded-full font-label-sm text-label-sm">
                JavaScript
              </span>
            </div>
            <h3 className="font-h3 text-h3 text-on-surface mb-sm">
              Sunnyside Landing Page
            </h3>
            <p className="font-body-md text-body-md text-on-surface-variant mb-md grow">
              A bright, graphic landing page showcasing advanced responsive
              design skills and vanilla JS interactions.
            </p>
            <ul className="space-y-2 mb-lg">
              <li className="flex items-center gap-2 text-on-surface-variant text-label-sm font-label-sm">
                <FaRegCheckCircle size={18} className="text-primary" />
                Mobile-first layout logic
              </li>
              <li className="flex items-center gap-2 text-on-surface-variant text-label-sm font-label-sm">
                <FaRegCheckCircle size={18} className="text-primary" />
                Zero-framework optimization
              </li>
            </ul>
            <div className="grid grid-cols-2 gap-sm pt-md border-t border-outline-variant/30">
              <button className="px-4 py-2 bg-primary text-on-primary rounded-lg font-label-sm text-label-sm flex items-center justify-center gap-2 hover:opacity-90 transition-opacity cursor-pointer">
                Live Demo <FiExternalLink size={20} />
              </button>
              <button className="px-4 py-2 border border-outline-variant text-secondary rounded-lg font-label-sm text-label-sm flex items-center justify-center gap-2 hover:bg-surface-container-low transition-colors cursor-pointer">
                View Code <FaCode size={20} />
              </button>
            </div>
          </div>
        </article>
        {/* <!-- Card 5 --> */}
        <article className="project-card flex flex-col bg-surface-container-lowest border border-outline-variant rounded-xl overflow-hidden transition-all duration-300 shadow-[0px_4px_20px_rgba(0,0,0,0.04)]">
          <div className="aspect-video overflow-hidden">
            <Image
              priority
              width={512}
              height={512}
              alt=""
              className="w-full h-full object-cover"
              data-alt="A technical visualization of a cloud architecture or API network. Deep slate backgrounds contrast with glowing nodes and data flow lines in electric blue. The style is technical and abstract, suggesting robust backend infrastructure, microservices, and high-performance server logic in a clean, professional software engineering aesthetic."
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAIbbzo5nDyeo5pPdlSimcAdP8W6FNC-O4qKIqmUsjfsr5fYuGmk6J5npRsdmT_M0ct5-Rk1c9AxmEVbgIKZW8vIN2ZFdmfzWyAlCDUWQDp4O06q7bDErQFIX7S7AhXSLscSuamx1pxE7bRNb2jv8Ls4brO6OIoOc73gXQTZB-nQhu19RJyVEQa0hmxC6szeewTdoKmBIrL35iF9GFN8gtnIEOxmowdtnRlsuD7qYqLEtjPGlOxuqta63Y7MqKVauLDfkMiFPdwxV0"
            />
          </div>
          <div className="p-lg flex flex-col grow">
            <div className="flex flex-wrap gap-2 mb-md">
              <span className="px-3 py-1 bg-surface-container-high text-on-surface-variant rounded-full font-label-sm text-label-sm">
                Spring Boot
              </span>
              <span className="px-3 py-1 bg-surface-container-high text-on-surface-variant rounded-full font-label-sm text-label-sm">
                Java
              </span>
              <span className="px-3 py-1 bg-surface-container-high text-on-surface-variant rounded-full font-label-sm text-label-sm">
                Docker
              </span>
            </div>
            <h3 className="font-h3 text-h3 text-on-surface mb-sm">
              Microservices API
            </h3>
            <p className="font-body-md text-body-md text-on-surface-variant mb-md grow">
              A robust Spring Boot backend for an inventory management system
              featuring containerized deployment.
            </p>
            <ul className="space-y-2 mb-lg">
              <li className="flex items-center gap-2 text-on-surface-variant text-label-sm font-label-sm">
                <FaRegCheckCircle size={18} className="text-primary" />
                RESTful API architecture
              </li>
              <li className="flex items-center gap-2 text-on-surface-variant text-label-sm font-label-sm">
                <FaRegCheckCircle size={18} className="text-primary" />
                PostgreSQL data persistence
              </li>
            </ul>
            <div className="grid grid-cols-2 gap-sm pt-md border-t border-outline-variant/30">
              <button className="px-4 py-2 bg-primary text-on-primary rounded-lg font-label-sm text-label-sm flex items-center justify-center gap-2 hover:opacity-90 transition-opacity cursor-pointer">
                Live Demo <FiExternalLink size={20} />
              </button>
              <button className="px-4 py-2 border border-outline-variant text-secondary rounded-lg font-label-sm text-label-sm flex items-center justify-center gap-2 hover:bg-surface-container-low transition-colors cursor-pointer">
                View Code <FaCode size={20} />
              </button>
            </div>
          </div>
        </article>
      </div>
    </main>
  );
}
