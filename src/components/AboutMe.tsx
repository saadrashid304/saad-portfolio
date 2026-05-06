import Image from "next/image";
import {
  MdOutlineLayers,
  MdOutlineApi,
  MdOutlineSpeed,
  MdOutlineArchitecture,
  MdOutlineDownload,
} from "react-icons/md";

import ProfilePicture from "@/assets/Profile_Image.png";

export default function AboutMe() {
  return (
    // <!-- About Me Section -->
    <section className="max-w-7xl mx-auto px-6 md:px-12 py-xxl flex flex-col md:flex-row items-center gap-xl md:gap-xxl">
      {/* <!-- Left Side: Profile Image --> */}
      <div className="w-full md:w-1/2 flex justify-center md:justify-start">
        <div className="relative group w-full">
          {/* <!-- Subtle border frame aesthetic from SCREEN_6 --> */}
          <div className="absolute -inset-4 border border-outline-variant rounded-xl opacity-50 group-hover:border-primary transition-colors duration-500"></div>
          <div className="relative w-full aspect-square overflow-hidden rounded-xl bg-surface-container-low shadow-soft border border-outline-variant">
            <Image
              priority
              alt="Alex Rivera Profile"
              className="w-full h-full object-cover grayscale-20 group-hover:grayscale-0 transition-all duration-700"
              data-alt="A professional, high-end portrait of a software engineer named Saad Rashid. He has a confident and approachable expression, set against a clean, minimalist studio background with soft, diffused lighting. The image captures him from the shoulders up, highlighting a modern tech-professional aesthetic. The color palette is dominated by neutral tones and soft whites to match the light-mode UI design, reflecting technical precision and maturity."
              src={ProfilePicture}
            />
          </div>
          {/* <!-- Status Indicator --> */}
          <div className="absolute bottom-4 right-4 bg-white px-4 py-2 rounded-full border border-outline-variant flex items-center gap-2 shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span className="text-xs font-semibold tracking-wider uppercase text-on-surface">
              Available for projects
            </span>
          </div>
        </div>
      </div>
      {/* <!-- Right Side: Content --> */}
      <div className="w-full md:w-1/2 flex flex-col gap-lg">
        <div className="flex flex-col gap-sm">
          <span className="text-primary font-bold text-label-sm uppercase tracking-[0.2em]">
            Engineering Excellence
          </span>
          <h1 className="font-h1 text-h1 font-bold text-on-surface">
            About Me
          </h1>
        </div>
        <div className="space-y-md">
          <p className="font-body-lg text-on-surface-variant leading-relaxed">
            I am <span className="font-bold text-on-surface">Saad Rashid</span>,
            a dedicated Software Engineer specializing in{" "}
            <span className="text-primary">React.js</span> and{" "}
            <span className="text-primary">Spring Boot</span>. With a deep
            commitment to technical excellence, I architect full-stack
            applications that prioritize clean code, exceptional performance,
            and robust scalability.
          </p>
          <p className="font-body-md text-on-surface-variant">
            My approach blends creative problem-solving with rigorous
            engineering standards. I am passionate about translating complex
            real-world challenges into seamless digital experiences that provide
            tangible value to users and stakeholders alike.
          </p>
        </div>
        {/* <!-- Highlights Grid --> */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-md pt-md">
          <div className="flex items-center gap-3 p-md bg-white border border-outline-variant rounded-lg hover:border-primary transition-colors duration-300 shadow-[0px_4px_20px_rgba(0,0,0,0.04)]">
            <MdOutlineLayers className="text-primary" size={25} />
            <span className="font-h3 text-body-md text-on-surface">
              Full-Stack Development
            </span>
          </div>
          <div className="flex items-center gap-3 p-md bg-white border border-outline-variant rounded-lg hover:border-primary transition-colors duration-300 shadow-[0px_4px_20px_rgba(0,0,0,0.04)]">
            <MdOutlineApi className="text-primary" size={25} />
            <span className="font-h3 text-body-md text-on-surface">
              API Design &amp; Integration
            </span>
          </div>
          <div className="flex items-center gap-3 p-md bg-white border border-outline-variant rounded-lg hover:border-primary transition-colors duration-300 shadow-[0px_4px_20px_rgba(0,0,0,0.04)]">
            <MdOutlineSpeed className="text-primary" size={25} />
            <span className="font-h3 text-body-md text-on-surface">
              Performance Optimization
            </span>
          </div>
          <div className="flex items-center gap-3 p-md bg-white border border-outline-variant rounded-lg hover:border-primary transition-colors duration-300 shadow-[0px_4px_20px_rgba(0,0,0,0.04)]">
            <MdOutlineArchitecture className="text-primary" size={30} />
            <span className="font-h3 text-body-md text-on-surface">
              Scalable System Architecture
            </span>
          </div>
        </div>
        <div className="pt-lg">
          <button className="bg-primary text-on-primary cursor-pointer px-8 py-4 rounded-lg font-bold text-label-sm uppercase tracking-widest flex items-center gap-2 hover:opacity-90 active:scale-95 transition-all shadow-lg shadow-primary/20">
            <MdOutlineDownload size={25} />
            Download Resume
          </button>
        </div>
      </div>
    </section>
  );
}
