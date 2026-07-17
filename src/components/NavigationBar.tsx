"use client";

import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const links = [
  ["Home", "home"],
  ["About", "about"],
  ["Skills", "skills"],
  ["Projects", "projects"],
] as const;

export default function NavigationBar() {
  const [selectedLink, setSelectedLink] = useState("Home");
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (label: string, id: string) => {
    setSelectedLink(label);
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/60 bg-white/80 shadow-[0px_4px_20px_rgba(0,0,0,0.04)] backdrop-blur-md">
      <nav className="mx-auto flex min-h-16 w-[90%] max-w-7xl items-center justify-between px-4 py-3 sm:px-6 md:min-h-20 md:px-12">
        <button type="button" onClick={() => scrollTo("Home", "home")} className="text-xl font-bold tracking-tighter text-slate-900">
          SaadRashid
        </button>

        <div className="hidden items-center gap-8 md:flex">
          {links.map(([label, id]) => (
            <button key={id} type="button" onClick={() => scrollTo(label, id)} className={`${selectedLink === label ? "border-b-2 border-blue-600 text-blue-600" : "text-slate-500 hover:text-blue-600"} pb-1 text-sm font-medium transition-colors`}>
              {label}
            </button>
          ))}
          <button type="button" onClick={() => scrollTo("Contact", "contact")} className="rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-on-primary transition-transform hover:opacity-90 active:scale-95">
            Contact
          </button>
        </div>

        <button type="button" aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen} onClick={() => setMenuOpen((open) => !open)} className="rounded-lg p-2 text-slate-700 transition-colors hover:bg-slate-100 md:hidden">
          {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </nav>

      {menuOpen && (
        <div className="border-t border-slate-200/60 bg-white px-6 py-4 shadow-lg md:hidden">
          <div className="mx-auto flex w-[90%] flex-col gap-2">
            {links.map(([label, id]) => (
              <button key={id} type="button" onClick={() => scrollTo(label, id)} className={`${selectedLink === label ? "bg-primary/10 text-primary" : "text-slate-600"} rounded-lg px-4 py-3 text-left text-sm font-medium transition-colors hover:bg-primary/10 hover:text-primary`}>
                {label}
              </button>
            ))}
            <button type="button" onClick={() => scrollTo("Contact", "contact")} className="mt-2 rounded-lg bg-primary px-4 py-3 text-sm font-medium text-on-primary">
              Contact
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
