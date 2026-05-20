import Image from "next/image";
import {
  MdOutlineSchool,
  MdOutlineCheckCircle,
  MdOutlineLocationOn,
} from "react-icons/md";
import { FaUniversity } from "react-icons/fa";
import { LuUniversity, LuSchool } from "react-icons/lu";

import comsats from "@/assets/comsats.jpeg";

export default function Education() {
  return (
    <main id="education" className="max-w-7xl mx-auto px-6 md:px-12 py-10">
      {/* <!-- Hero/Header Section --> */}
      <section className="mb-xl">
        <div className="flex flex-col gap-sm">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 bg-primary rounded-full animate-pulse"></span>
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
      <section className="">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
          {/* <!-- Left: Visual/Status --> */}
          <div className="lg:col-span-4 flex flex-col gap-lg">
            <div className="bg-surface-container-lowest p-lg rounded-xl border border-[#E5E5E7] soft-shadow">
              <div className="flex items-center gap-md mb-md">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <MdOutlineSchool size={25} className="text-primary" />
                </div>
                <h3 className="font-h3 text-h3 text-slate-900">Credentials</h3>
              </div>
              <ul className="flex flex-col gap-sm">
                <li className="flex items-center gap-2 text-sm text-secondary">
                  <MdOutlineCheckCircle />
                  Original Degree &amp; Transcripts
                </li>
                <li className="flex items-center gap-2 text-sm text-secondary">
                  <MdOutlineCheckCircle />
                  Udemy Certification
                </li>
                {/* <li className="flex items-center gap-2 text-sm text-secondary">
                  <MdOutlineCheckCircle />
                  Mathematical Background
                </li> */}
              </ul>
            </div>
            <div className="relative rounded-xl overflow-hidden h-48 border border-[#E5E5E7] soft-shadow">
              <Image
                priority
                alt="COMSATS University"
                className="w-full h-full object-cover"
                data-alt="A clean, high-key photograph of a modern university library with bright natural light streaming through large windows. The scene captures the essence of a premium academic environment with minimalist furniture and a scholarly atmosphere. The color palette is dominated by soft whites and light woods, reflecting the high-performance technical maturity of the engineering portfolio style."
                src={comsats}
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent flex items-end p-md">
                <span className="text-white font-label-sm text-xs">
                  COMSATS University, Islamabad
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
                  <FaUniversity size={20} className="text-primary" />
                </div>
                {/* <div className="absolute left-2.5 top-2 w-3 h-3 rounded-full border-2 border-primary bg-white z-10 hidden md:block group-hover:bg-primary transition-colors"></div> */}
                <div className="bg-white p-lg rounded-xl border border-[#E5E5E7] soft-shadow group-hover:border-primary/40 transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                    <h3 className="font-h3 text-h3 text-slate-900">
                      {`BS Software Engineering`}
                    </h3>
                    <span className="font-label-sm text-label-sm text-secondary bg-surface-container px-3 py-1 rounded-full mt-2 md:mt-0">
                      2018 - 2022
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-primary font-medium mb-4">
                    <MdOutlineLocationOn />
                    <span>COMSATS University, Islamabad</span>
                  </div>
                  <div className="flex items-center gap-2 text-secondary font-medium mb-4">
                    <MdOutlineSchool />
                    <span>HEC Recognized</span>
                  </div>
                  <p className="text-secondary font-body-md leading-relaxed">
                    Focused on Software Engineering principles, Web Development,
                    Database Management, and System Design. Worked on academic
                    and practical projects involving full-stack web
                    applications, distributed systems, and modern software
                    architectures using technologies such as React.js, Spring
                    Boot, and MongoDB.
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    <span className="bg-[#F0F0F2] text-slate-600 font-label-sm text-xs px-3 py-1 rounded-md">
                      Software Engineering
                    </span>
                    <span className="bg-[#F0F0F2] text-slate-600 font-label-sm text-xs px-3 py-1 rounded-md">
                      Web Development
                    </span>
                    <span className="bg-[#F0F0F2] text-slate-600 font-label-sm text-xs px-3 py-1 rounded-md">
                      Database Systems
                    </span>
                  </div>
                </div>
              </div>
              {/* <!-- Education Item 2 --> */}
              <div className="relative md:pl-12 flex flex-col gap-2 group">
                <div className="absolute -left-0.5 top-1 w-6 h-6 md:w-10 md:h-10 bg-white border-2 border-primary rounded-full flex items-center justify-center z-10">
                  <LuUniversity size={20} className="text-primary" />
                </div>
                {/* <div className="absolute left-2.5 top-2 w-3 h-3 rounded-full border-2 border-slate-300 bg-white z-10 hidden md:block group-hover:border-primary transition-colors"></div> */}
                <div className="bg-white p-lg rounded-xl border border-[#E5E5E7] soft-shadow group-hover:border-primary/20 transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                    <h3 className="font-h3 text-h3 text-slate-900">
                      Intermediate (Pre-Engineering)
                    </h3>
                    <span className="font-label-sm text-label-sm text-secondary bg-surface-container px-3 py-1 rounded-full mt-2 md:mt-0">
                      2016 - 2018
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-primary font-medium mb-4">
                    <MdOutlineLocationOn />
                    <span>Steps College, Rawalpindi</span>
                  </div>
                  <div className="flex items-center gap-2 text-secondary font-medium mb-4">
                    <MdOutlineSchool />
                    <span>BISE Rawalpindi</span>
                  </div>
                  <p className="text-secondary font-body-md leading-relaxed">
                    Focused on Mathematics, Physics, and Chemistry with a strong
                    emphasis on analytical thinking and problem-solving. Built a
                    solid foundation in engineering concepts and quantitative
                    reasoning, which later supported advanced studies in
                    Software Engineering and technology-related fields.
                  </p>
                </div>
              </div>
              {/* <!-- Education Item 3 --> */}
              <div className="relative md:pl-12 flex flex-col gap-2 group">
                <div className="absolute -left-0.5 top-1 w-6 h-6 md:w-10 md:h-10 bg-white border-2 border-primary rounded-full flex items-center justify-center z-10">
                  <LuSchool size={20} className="text-primary" />
                </div>
                {/* <div className="absolute left-2.5 top-2 w-3 h-3 rounded-full border-2 border-slate-300 bg-white z-10 hidden md:block group-hover:border-primary transition-colors"></div> */}
                <div className="bg-white p-lg rounded-xl border border-[#E5E5E7] soft-shadow group-hover:border-primary/20 transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                    <h3 className="font-h3 text-h3 text-slate-900">
                      Matriculation
                    </h3>
                    <span className="font-label-sm text-label-sm text-secondary bg-surface-container px-3 py-1 rounded-full mt-2 md:mt-0">
                      2014 - 2016
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-primary font-medium mb-4">
                    <MdOutlineLocationOn />
                    <span>F.G. Fazaia Secondary School, Rawalpindi</span>
                  </div>
                  <div className="flex items-center gap-2 text-secondary font-medium mb-4">
                    <MdOutlineSchool />
                    <span>FBISE</span>
                  </div>
                  <p className="text-secondary font-body-md leading-relaxed">
                    Studied core science subjects with a focus on Mathematics,
                    Physics, and Computer Science. Developed strong logical
                    reasoning, analytical thinking, and problem-solving skills
                    through academic coursework and science-based learning.
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
