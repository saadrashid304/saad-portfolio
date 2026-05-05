export default function NavigationBar() {
  return (
    // <!-- BEGIN: Navigation -->
    <nav className="w-full max-w-7xl mx-auto px-6 py-6 flex justify-between items-center z-10">
      <div className="text-xl font-bold tracking-tight text-slate-900">
        DevPortfolio
      </div>
      <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-600">
        <a className="hover:text-blue-600 transition-colors" href="#">
          Projects
        </a>
        <a className="hover:text-blue-600 transition-colors" href="#">
          Resume
        </a>
        <a className="hover:text-blue-600 transition-colors" href="#">
          Contact
        </a>
        <a
          className="bg-[#005bc4] text-white px-5 py-2.5 rounded-lg hover:bg-blue-700 transition-all shadow-sm"
          href="#"
        >
          Hire Me
        </a>
      </div>
    </nav>
  );
}
