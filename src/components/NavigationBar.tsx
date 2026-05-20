"use client";

import { useState } from "react";

export default function NavigationBar() {
  const [selectedLink, setSelectedLink] = useState("Home");

  return (
    // <!-- TopNavBar -->
    <header className="bg-white/80 backdrop-blur-md border-b border-slate-200/60 shadow-[0px_4px_20px_rgba(0,0,0,0.04)] docked full-width top-0 sticky z-50">
      <nav className="flex items-center justify-between max-w-7xl mx-auto px-6 md:px-12 h-20">
        <div className="text-xl font-bold tracking-tighter text-slate-900">
          SaadRashid
        </div>
        <ul className="hidden md:flex items-center gap-8">
          <li
            onClick={() => {
              setSelectedLink("Home");
              const element = document.getElementById("home");
              if (element) {
                const offset = 80;
                const elementPosition =
                  element.getBoundingClientRect().top + window.pageYOffset;
                const offsetPosition = elementPosition - offset;
                window.scrollTo({
                  top: offsetPosition,
                  behavior: "smooth",
                });
              }
            }}
            className={`${selectedLink === "Home" ? "text-blue-600 border-b-2 border-blue-600 pb-1" : "text-slate-500 hover:text-blue-600"} font-['Inter'] text-sm font-medium tracking-tight cursor-pointer`}
          >
            Home
          </li>
          <li
            onClick={() => {
              setSelectedLink("About");
              const element = document.getElementById("about");
              if (element) {
                const offset = 80;
                const elementPosition =
                  element.getBoundingClientRect().top + window.pageYOffset;
                const offsetPosition = elementPosition - offset;
                window.scrollTo({
                  top: offsetPosition,
                  behavior: "smooth",
                });
              }
            }}
            className={`${selectedLink === "About" ? "text-blue-600 border-b-2 border-blue-600 pb-1" : "text-slate-500 hover:text-blue-600"} font-['Inter'] text-sm font-medium tracking-tight cursor-pointer`}
          >
            About
          </li>
          <li
            onClick={() => {
              setSelectedLink("Skills");
              const element = document.getElementById("skills");
              if (element) {
                const offset = 80;
                const elementPosition =
                  element.getBoundingClientRect().top + window.pageYOffset;
                const offsetPosition = elementPosition - offset;
                window.scrollTo({
                  top: offsetPosition,
                  behavior: "smooth",
                });
              }
            }}
            className={`${selectedLink === "Skills" ? "text-blue-600 border-b-2 border-blue-600 pb-1" : "text-slate-500 hover:text-blue-600"} transition-colors font-['Inter'] text-sm font-medium tracking-tight cursor-pointer`}
          >
            Skills
          </li>
          <li
            onClick={() => {
              setSelectedLink("Projects");
              const element = document.getElementById("projects");
              if (element) {
                const offset = 80;
                const elementPosition =
                  element.getBoundingClientRect().top + window.pageYOffset;
                const offsetPosition = elementPosition - offset;
                window.scrollTo({
                  top: offsetPosition,
                  behavior: "smooth",
                });
              }
            }}
            className={`${selectedLink === "Projects" ? "text-blue-600 border-b-2 border-blue-600 pb-1" : "text-slate-500 hover:text-blue-600"} transition-colors font-['Inter'] text-sm font-medium tracking-tight cursor-pointer`}
          >
            Projects
          </li>
          {/* <li
            onClick={() => {
              setSelectedLink("Experience");
              const element = document.getElementById("experience");
              if (element) {
                const offset = 80;
                const elementPosition =
                  element.getBoundingClientRect().top + window.pageYOffset;
                const offsetPosition = elementPosition - offset;
                window.scrollTo({
                  top: offsetPosition,
                  behavior: "smooth",
                });
              }
            }}
            className={`${selectedLink === "Experience" ? "text-blue-600 border-b-2 border-blue-600 pb-1" : "text-slate-500 hover:text-blue-600"} transition-colors font-['Inter'] text-sm font-medium tracking-tight cursor-pointer`}
          >
            Experience
          </li> */}
          {/* <li
            onClick={() => {
              setSelectedLink("Education");
              const element = document.getElementById("education");
              if (element) {
                const offset = 80;
                const elementPosition =
                  element.getBoundingClientRect().top + window.pageYOffset;
                const offsetPosition = elementPosition - offset;
                window.scrollTo({
                  top: offsetPosition,
                  behavior: "smooth",
                });
              }
            }}
            className={`${selectedLink === "Education" ? "text-blue-600 border-b-2 border-blue-600 pb-1" : "text-slate-500 hover:text-blue-600"} transition-colors font-['Inter'] text-sm font-medium tracking-tight cursor-pointer`}
          >
            Education
          </li> */}
        </ul>
        <button
          onClick={() => {
            setSelectedLink("Contact");
            const element = document.getElementById("contact");
            if (element) {
              const offset = 80;
              const elementPosition =
                element.getBoundingClientRect().top + window.pageYOffset;
              const offsetPosition = elementPosition - offset;
              window.scrollTo({
                top: offsetPosition,
                behavior: "smooth",
              });
            }
          }}
          className="bg-primary text-on-primary px-6 py-2.5 rounded-lg font-medium text-sm hover:opacity-90 active:scale-95 duration-200 transition-all cursor-pointer"
        >
          Contact
        </button>
      </nav>
    </header>
  );
}
