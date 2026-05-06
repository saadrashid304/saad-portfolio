import Image from "next/image";
import {
  MdOutlineSecurity,
  MdOutlineAccountTree,
  MdOutlineNewspaper,
} from "react-icons/md";

export default function Education() {
  return (
    <main className="pt-xxl pb-xxl">
      {/* <!-- Hero/Header Section --> */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 mt-16 mb-xl">
        <div className="flex flex-col gap-sm">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-primary-container animate-pulse"></div>
            <span className="font-label-sm text-label-sm text-primary uppercase">
              Academic Journey
            </span>
          </div>
          <h1 className="font-h1 text-h1 font-bold text-slate-900 max-w-2xl">
            Educational Foundation &amp; Technical Training.
          </h1>
          <p className="font-body-lg text-body-lg text-secondary max-w-130 mt-4">
            A chronological overview of my academic background and specialized
            training in software engineering and sciences.
          </p>
        </div>
      </section>
      {/* <!-- Education Section --> */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
          {/* <!-- Left: Visual/Status --> */}
          <div className="lg:col-span-4 flex flex-col gap-lg">
            <div className="bg-surface-container-lowest p-lg rounded-xl border border-[#E5E5E7] soft-shadow">
              <div className="flex items-center gap-md mb-md">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <span
                    className="material-symbols-outlined text-primary"
                    data-icon="school"
                  >
                    school
                  </span>
                </div>
                <h3 className="font-h3 text-h3 text-slate-900">Credentials</h3>
              </div>
              <ul className="flex flex-col gap-sm">
                <li className="flex items-center gap-2 text-sm text-secondary">
                  <span
                    className="material-symbols-outlined text-xs"
                    data-icon="check_circle"
                  >
                    check_circle
                  </span>
                  Verified Degree &amp; Transcripts
                </li>
                <li className="flex items-center gap-2 text-sm text-secondary">
                  <span
                    className="material-symbols-outlined text-xs"
                    data-icon="check_circle"
                  >
                    check_circle
                  </span>
                  Engineering Certification
                </li>
                <li className="flex items-center gap-2 text-sm text-secondary">
                  <span
                    className="material-symbols-outlined text-xs"
                    data-icon="check_circle"
                  >
                    check_circle
                  </span>
                  Mathematical Background
                </li>
              </ul>
            </div>
            <div className="relative rounded-xl overflow-hidden h-48 border border-[#E5E5E7] soft-shadow">
              <Image
                priority
                width={512}
                height={512}
                alt=""
                className="w-full h-full object-cover"
                data-alt="A clean, high-key photograph of a modern university library with bright natural light streaming through large windows. The scene captures the essence of a premium academic environment with minimalist furniture and a scholarly atmosphere. The color palette is dominated by soft whites and light woods, reflecting the high-performance technical maturity of the engineering portfolio style."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDHs8rRpnNnpUWOrNTrB0Zc9LfdKjfYlJEhAjLBOgLrIggiVROJo58N98vFDtn104i4ca2GDFBP3QMT9H5zEdUA0jO7nKkku_Tl8rswCH2JV3sl0LGZLlMWivNi9Rvi6rdkqG-xZeXcF1pbkVxUuF07e2acTQfpnKzE2M7_YhkKV33SyxuYC_xEHbDuM0qfRSzk5zKRT38IYYH8oO7q0RICFy_fGE3uOvSuFfVRDmcf1eiVGZNPpJbosyHSGQK5j4wdlwFDgn5k7ho"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent flex items-end p-md">
                <span className="text-white font-label-sm text-xs">
                  COMSATs Campus, Islamabad
                </span>
              </div>
            </div>
          </div>
          {/* <!-- Right: Timeline --> */}

          <div className="lg:col-span-8 relative">
            <div className="absolute left-4 top-0 bottom-0 timeline-rail hidden md:block"></div>
            <div className="flex flex-col gap-xl">
              {/* <!-- Education Item 1 --> */}
              <div className="relative md:pl-12 flex flex-col gap-2 group">
                <div className="absolute -left-0.5 top-0 w-6 h-6 md:w-10 md:h-10 bg-white border-2 border-primary rounded-full flex items-center justify-center z-10">
                  <MdOutlineSecurity size={20} className="text-primary" />
                </div>
                {/* <div className="absolute left-2.5 top-2 w-3 h-3 rounded-full border-2 border-primary bg-white z-10 hidden md:block group-hover:bg-primary transition-colors"></div> */}
                <div className="bg-white p-lg rounded-xl border border-[#E5E5E7] soft-shadow group-hover:border-primary/40 transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                    <h3 className="font-h3 text-h3 text-slate-900">
                      {`Bachelor's in Software Engineering`}
                    </h3>
                    <span className="font-label-sm text-label-sm text-secondary bg-surface-container px-3 py-1 rounded-full mt-2 md:mt-0">
                      2019 - 2023
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-primary font-medium mb-4">
                    <span
                      className="material-symbols-outlined text-sm"
                      data-icon="location_on"
                    >
                      location_on
                    </span>
                    <span>COMSATS University, Islamabad</span>
                  </div>
                  <p className="text-secondary font-body-md leading-relaxed">
                    Specialized in Software Architecture, Web Technologies, and
                    Distributed Systems. Completed a capstone project focused on
                    real-time data processing and microservices architecture.
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    <span className="bg-[#F0F0F2] text-slate-600 font-label-sm text-xs px-3 py-1 rounded-md">
                      Algorithms
                    </span>
                    <span className="bg-[#F0F0F2] text-slate-600 font-label-sm text-xs px-3 py-1 rounded-md">
                      OS Design
                    </span>
                    <span className="bg-[#F0F0F2] text-slate-600 font-label-sm text-xs px-3 py-1 rounded-md">
                      Database Systems
                    </span>
                  </div>
                </div>
              </div>
              {/* <!-- Education Item 2 --> */}
              <div className="relative md:pl-12 flex flex-col gap-2 group">
                <div className="absolute -left-0.5 top-1 w-6 h-6 md:w-10 md:h-10 bg-white border-2 border-slate-300 rounded-full flex items-center justify-center z-10">
                  <MdOutlineAccountTree size={20} className="text-slate-400" />
                </div>
                {/* <div className="absolute left-2.5 top-2 w-3 h-3 rounded-full border-2 border-slate-300 bg-white z-10 hidden md:block group-hover:border-primary transition-colors"></div> */}
                <div className="bg-white p-lg rounded-xl border border-[#E5E5E7] soft-shadow group-hover:border-primary/20 transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                    <h3 className="font-h3 text-h3 text-slate-900">
                      Intermediate (Pre-Engineering)
                    </h3>
                    <span className="font-label-sm text-label-sm text-secondary bg-surface-container px-3 py-1 rounded-full mt-2 md:mt-0">
                      2017 - 2019
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-secondary font-medium mb-4">
                    <span
                      className="material-symbols-outlined text-sm"
                      data-icon="school"
                    >
                      school
                    </span>
                    <span>FBISE</span>
                  </div>
                  <p className="text-secondary font-body-md leading-relaxed">
                    Focused on Mathematics, Physics, and Chemistry. Developed
                    strong analytical and problem-solving skills as a foundation
                    for engineering studies.
                  </p>
                </div>
              </div>
              {/* <!-- Education Item 3 --> */}
              <div className="relative md:pl-12 flex flex-col gap-2 group">
                <div className="absolute -left-0.5 top-1 w-6 h-6 md:w-10 md:h-10 bg-white border-2 border-slate-300 rounded-full flex items-center justify-center z-10">
                  <MdOutlineNewspaper size={20} className="text-slate-400" />
                </div>
                {/* <div className="absolute left-2.5 top-2 w-3 h-3 rounded-full border-2 border-slate-300 bg-white z-10 hidden md:block group-hover:border-primary transition-colors"></div> */}
                <div className="bg-white p-lg rounded-xl border border-[#E5E5E7] soft-shadow group-hover:border-primary/20 transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                    <h3 className="font-h3 text-h3 text-slate-900">
                      Matriculation
                    </h3>
                    <span className="font-label-sm text-label-sm text-secondary bg-surface-container px-3 py-1 rounded-full mt-2 md:mt-0">
                      2015 - 2017
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-secondary font-medium mb-4">
                    <span
                      className="material-symbols-outlined text-sm"
                      data-icon="book"
                    >
                      book
                    </span>
                    <span>FBISE</span>
                  </div>
                  <p className="text-secondary font-body-md leading-relaxed">
                    Core science subjects with a focus on logic and scientific
                    methodology. Consistently ranked in the top percentile of
                    the cohort.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
