import {
  MdOutlineSecurity,
  MdOutlineAccountTree,
  MdOutlineNewspaper,
} from "react-icons/md";

export default function Experience() {
  return (
    <main
      id="experience"
      className="max-w-7xl mx-auto px-6 md:px-12 py-10"
    >
      <div className="w-full">
        {/* <!-- Section Header --> */}
        <div className="flex items-center gap-sm mb-md">
          <span className="w-3 h-3 bg-primary rounded-full animate-pulse"></span>
          <span className="font-label-sm text-primary uppercase tracking-widest">
            Professional Journey
          </span>
        </div>
        <div className="mb-xl text-center md:text-left">
          <h1 className="font-h1 text-h1 font-bold text-on-background mb-sm">
            Professional Experience
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
            A chronological overview of technical leadership and architectural
            impact across enterprise-scale systems.
          </p>
        </div>
        {/* <!-- Experience Timeline Container --> */}
        <div className="relative">
          {/* <!-- Vertical Rail --> */}
          <div className="absolute left-2.75 md:left-4.75 top-4 bottom-4 timeline-line"></div>
          {/* <!-- Experience Entry 1 --> */}
          <div className="relative pl-12 md:pl-16 mb-xxl">
            {/* <!-- Marker --> */}
            <div className="absolute left-0 top-1 w-6 h-6 md:w-10 md:h-10 bg-white border-2 border-primary rounded-full flex items-center justify-center z-10">
              <MdOutlineSecurity size={20} className="text-primary" />
            </div>
            <div className="experience-card bg-surface-container-lowest p-lg rounded-xl soft-shadow">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-md gap-sm">
                <div>
                  <h3 className="font-h3 text-h3 text-on-background">
                    Lawful Interception Project
                  </h3>
                  <span className="font-label-sm text-label-sm text-primary uppercase tracking-widest mt-xs block">
                    Lead Full-Stack Developer
                  </span>
                </div>
                <div className="text-right">
                  <span className="font-label-sm text-label-sm bg-secondary-container px-3 py-1 rounded-full text-on-secondary-fixed">
                    2023 — Present
                  </span>
                </div>
              </div>
              <div className="mb-lg">
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  Orchestrated the architecture and deployment of critical
                  security infrastructure focused on high-speed data
                  acquisition. Designed and implemented secure data ingestion
                  pipelines and monitoring dashboards for national security
                  protocols.
                </p>
              </div>
              {/* <!-- Tech Stack --> */}
              <div className="flex flex-wrap gap-sm mb-lg">
                <span className="tech-chip px-3 py-1 rounded font-label-sm text-label-sm">
                  Spring Boot
                </span>
                <span className="tech-chip px-3 py-1 rounded font-label-sm text-label-sm">
                  Java
                </span>
                <span className="tech-chip px-3 py-1 rounded font-label-sm text-label-sm">
                  PostgreSQL
                </span>
                <span className="tech-chip px-3 py-1 rounded font-label-sm text-label-sm">
                  React
                </span>
              </div>
              {/* <!-- Achievements --> */}
              <div className="border-t border-slate-100 pt-lg">
                <h4 className="font-label-sm text-label-sm text-on-surface mb-sm flex items-center gap-xs">
                  <span className="material-symbols-outlined text-primary text-body-md">
                    verified
                  </span>
                  KEY ACHIEVEMENTS
                </h4>
                <ul className="space-y-sm">
                  <li className="flex items-start gap-sm">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary shrink-0"></span>
                    <p className="font-body-md text-body-md text-on-surface-variant">
                      Reduced system latency by 30% through advanced database
                      indexing and query optimization.
                    </p>
                  </li>
                  <li className="flex items-start gap-sm">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary shrink-0"></span>
                    <p className="font-body-md text-body-md text-on-surface-variant">
                      Ensured 99.9% uptime for critical security infrastructure
                      using automated failover strategies.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* <!-- Experience Entry 2 --> */}
          <div className="relative pl-12 md:pl-16 mb-xxl">
            {/* <!-- Marker --> */}
            <div className="absolute left-0 top-1 w-6 h-6 md:w-10 md:h-10 bg-white border-2 border-slate-300 rounded-full flex items-center justify-center z-10">
              <MdOutlineAccountTree size={20} className="text-slate-400" />
            </div>
            <div className="experience-card bg-surface-container-lowest p-lg rounded-xl soft-shadow">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-md gap-sm">
                <div>
                  <h3 className="font-h3 text-h3 text-on-background">
                    Netsis Integration
                  </h3>
                  <span className="font-label-sm text-label-sm text-primary uppercase tracking-widest mt-xs block">
                    Backend Engineer
                  </span>
                </div>
                <div className="text-right">
                  <span className="font-label-sm text-label-sm bg-secondary-container px-3 py-1 rounded-full text-on-secondary-fixed">
                    2021 — 2023
                  </span>
                </div>
              </div>
              <div className="mb-lg">
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  Bridged the gap between enterprise ERP systems and bespoke
                  business logic. Integrated ERP systems with custom business
                  logic modules for automated reporting and financial tracking.
                </p>
              </div>
              {/* <!-- Tech Stack --> */}
              <div className="flex flex-wrap gap-sm mb-lg">
                <span className="tech-chip px-3 py-1 rounded font-label-sm text-label-sm">
                  Spring Boot
                </span>
                <span className="tech-chip px-3 py-1 rounded font-label-sm text-label-sm">
                  REST APIs
                </span>
                <span className="tech-chip px-3 py-1 rounded font-label-sm text-label-sm">
                  MSSQL
                </span>
              </div>
              {/* <!-- Achievements --> */}
              <div className="border-t border-slate-100 pt-lg">
                <h4 className="font-label-sm text-label-sm text-on-surface mb-sm flex items-center gap-xs">
                  <span className="material-symbols-outlined text-primary text-body-md">
                    verified
                  </span>
                  KEY ACHIEVEMENTS
                </h4>
                <ul className="space-y-sm">
                  <li className="flex items-start gap-sm">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary shrink-0"></span>
                    <p className="font-body-md text-body-md text-on-surface-variant">
                      Streamlined financial reporting processes, cutting manual
                      data entry time by 50%.
                    </p>
                  </li>
                  <li className="flex items-start gap-sm">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary shrink-0"></span>
                    <p className="font-body-md text-body-md text-on-surface-variant">
                      Developed robust error-handling middleware for third-party
                      ERP communication.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* <!-- Experience Entry 3 --> */}
          <div className="relative pl-12 md:pl-16">
            {/* <!-- Marker --> */}
            <div className="absolute left-0 top-1 w-6 h-6 md:w-10 md:h-10 bg-white border-2 border-slate-300 rounded-full flex items-center justify-center z-10">
              <MdOutlineNewspaper size={20} className="text-slate-400" />
            </div>
            <div className="experience-card bg-surface-container-lowest p-lg rounded-xl soft-shadow">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-md gap-sm">
                <div>
                  <h3 className="font-h3 text-h3 text-on-background">
                    IJournalist
                  </h3>
                  <span className="font-label-sm text-label-sm text-primary uppercase tracking-widest mt-xs block">
                    Frontend Developer
                  </span>
                </div>
                <div className="text-right">
                  <span className="font-label-sm text-label-sm bg-secondary-container px-3 py-1 rounded-full text-on-secondary-fixed">
                    2019 — 2021
                  </span>
                </div>
              </div>
              <div className="mb-lg">
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  Revolutionized the digital newsroom experience by focusing on
                  performance and user engagement. Built a highly interactive
                  news aggregation and publishing platform.
                </p>
              </div>
              {/* <!-- Tech Stack --> */}
              <div className="flex flex-wrap gap-sm mb-lg">
                <span className="tech-chip px-3 py-1 rounded font-label-sm text-label-sm">
                  React.js
                </span>
                <span className="tech-chip px-3 py-1 rounded font-label-sm text-label-sm">
                  Tailwind CSS
                </span>
                <span className="tech-chip px-3 py-1 rounded font-label-sm text-label-sm">
                  Redux
                </span>
              </div>
              {/* <!-- Achievements --> */}
              <div className="border-t border-slate-100 pt-lg">
                <h4 className="font-label-sm text-label-sm text-on-surface mb-sm flex items-center gap-xs">
                  <span className="material-symbols-outlined text-primary text-body-md">
                    verified
                  </span>
                  KEY ACHIEVEMENTS
                </h4>
                <ul className="space-y-sm">
                  <li className="flex items-start gap-sm">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary shrink-0"></span>
                    <p className="font-body-md text-body-md text-on-surface-variant">
                      Implemented a dynamic content management system with
                      real-time editing capabilities.
                    </p>
                  </li>
                  <li className="flex items-start gap-sm">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary shrink-0"></span>
                    <p className="font-body-md text-body-md text-on-surface-variant">
                      Enhanced mobile responsiveness, resulting in a 25%
                      increase in user session duration.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
