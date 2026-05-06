export default function NavigationBar() {
  return (
    // <!-- TopNavBar -->
    <header className="bg-white/80 backdrop-blur-md border-b border-slate-200/60 shadow-[0px_4px_20px_rgba(0,0,0,0.04)] docked full-width top-0 sticky z-50">
      <nav className="flex items-center justify-between max-w-7xl mx-auto px-6 md:px-12 h-20">
        <div className="text-xl font-bold tracking-tighter text-slate-900">
          Portfolio.dev
        </div>
        <div className="hidden md:flex items-center gap-8">
          <a
            className="text-blue-600 border-b-2 border-blue-600 pb-1 font-['Inter'] text-sm font-medium tracking-tight"
            href="#"
          >
            About
          </a>
          <a
            className="text-slate-500 hover:text-blue-600 transition-colors font-['Inter'] text-sm font-medium tracking-tight"
            href="#"
          >
            Projects
          </a>
          <a
            className="text-slate-500 hover:text-blue-600 transition-colors font-['Inter'] text-sm font-medium tracking-tight"
            href="#"
          >
            Experience
          </a>
          <a
            className="text-slate-500 hover:text-blue-600 transition-colors font-['Inter'] text-sm font-medium tracking-tight"
            href="#"
          >
            Stack
          </a>
        </div>
        <button className="bg-primary text-on-primary px-6 py-2.5 rounded-lg font-medium text-sm hover:opacity-90 active:scale-95 duration-200 transition-all">
          Contact Me
        </button>
      </nav>
    </header>
  );
}
