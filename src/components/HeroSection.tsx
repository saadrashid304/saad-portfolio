export default function HeroSection() {
  //   const code = `${(<span className="text-[#9ece6a]">const</span>)}const Portfolio = () => {
  //         const [projects, setProjects] = useState([]);

  //         useEffect(() => {
  //             const fetchWork = async () => {
  //                 const res = await api.get('/projects');
  //                 setProjects(res.data);
  //             };
  //             fetchWork();
  //         }, []);

  //         return (
  //             <Layout>
  //                 {projects.map(p => <ProjectCard key={p.id} {...p} />)}
  //             </Layout>
  //         );
  //     };`;

  return (
    // <!-- BEGIN: Hero Section -->
    <main className="grow flex items-center">
      <div className="w-full max-w-7xl mx-auto px-6 py-12 lg:py-20 grid lg:grid-cols-2 gap-12 items-center">
        {/* <!-- Left Content Column --> */}
        <div data-purpose="hero-text-content">
          {/* <!-- Status Badge --> */}
          <div className="inline-flex items-center space-x-2 bg-slate-100 border border-slate-200 px-3 py-1 rounded-full mb-6">
            <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-600">
              Available for Work
            </span>
          </div>
          <h1 className="text-5xl lg:text-7xl font-bold text-slate-900 leading-tight mb-4">
            {`Hi, I'm `}
            <span className="text-[#005bc4]">Saad Rashid</span>
          </h1>
          <h2 className="text-2xl lg:text-3xl font-medium text-slate-700 mb-6">
            Software Engineer | React.js &amp; Spring Boot Developer
          </h2>
          <p className="text-lg text-slate-500 max-w-120 leading-relaxed mb-10">
            Building scalable web applications with modern technologies. I
            specialize in crafting high-performance frontend experiences and
            robust backend architectures.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-[#005bc4] text-white px-8 py-4 rounded-xl font-semibold flex items-center justify-center space-x-2 hover:bg-blue-700 transition-all group cursor-pointer">
              <span>View Projects</span>
              <svg
                className="h-5 w-5 transform group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                ></path>
              </svg>
            </button>
            <button className="bg-white text-slate-700 border border-slate-200 px-8 py-4 rounded-xl font-semibold flex items-center justify-center space-x-2 hover:bg-slate-50 transition-all cursor-pointer">
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                ></path>
              </svg>
              <span>Download Resume</span>
            </button>
          </div>
          {/* <!-- Web Vitals Floating Card --> */}
          {/* <div className="mt-12 flex items-center space-x-4 bg-white p-4 rounded-2xl border border-slate-100 shadow-xl max-w-xs relative overflow-hidden">
            <div className="bg-blue-50 p-3 rounded-lg text-blue-600">
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                ></path>
              </svg>
            </div>
            <div>
              <div className="text-[10px] uppercase font-bold text-slate-400 tracking-widest leading-none mb-1">
                Web Vitals
              </div>
              <div className="text-2xl font-bold text-slate-800">99% Score</div>
            </div>
          </div> */}
        </div>
        {/* <!-- Right Code Column --> */}
        <div className="relative" data-purpose="hero-code-visual">
          <div className="terminal-window bg-[#1a1b26] rounded-xl overflow-hidden border border-slate-800">
            {/* <!-- Terminal Header --> */}
            <div className="bg-[#24283b] px-4 py-3 flex items-center justify-between border-b border-slate-800">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
              </div>
              <div className="text-xs text-slate-500 font-medium code-font">
                App.tsx
              </div>
              <div className="w-12"></div>
            </div>
            {/* <!-- Code Content --> */}
            <div className="p-6 code-font text-sm sm:text-base leading-relaxed overflow-x-auto bg-[#1a1b26] rounded-xl">
              <pre className="text-[#cfd8dc] whitespace-pre-wrap">
                <code>
                  <span className="text-[#9ece6a]">const</span>
                  {` `}
                  <span className="text-[#7aa2f7]">Portfolio</span>
                  {` = () => {\n  `}
                  <span className="text-[#9ece6a]">const</span>
                  {` [projects, setProjects] = `}
                  <span className="text-[#e0af68]">useState</span>
                  {`([]);\n\n  `}
                  <span className="text-[#e0af68]">useEffect</span>
                  {`(() => {\n    `}
                  <span className="text-[#9ece6a]">const</span>
                  {` `}
                  <span className="text-[#7aa2f7]">fetchWork</span>
                  {` = `}
                  <span className="text-[#9ece6a]">async</span>
                  {`() => {\n      `}
                  <span className="text-[#9ece6a]">const</span>
                  {` res = `}
                  <span className="text-[#9ece6a]">await</span>
                  {` api.`}
                  <span className="text-[#7aa2f7]">get</span>
                  {`(`}
                  <span className="text-[#ce9178]">{`'/projects'`}</span>
                  {`);\n      `}
                  <span className="text-[#7aa2f7]">setProjects</span>
                  {`(res.data);\n    }\n    `}
                  <span className="text-[#7aa2f7]">fetchWork</span>
                  {`();\n  }, [])\n\n  `}
                  <span className="text-[#bb9af7]">return</span>
                  {` (\n    <`}
                  <span className="text-[#f7768e]">Layout</span>
                  {`>\n      {projects.`}
                  <span className="text-[#7aa2f7]">map</span>
                  {`(p => <`}
                  <span className="text-[#f7768e]">ProjectCard</span>
                  {` key={p.id} {...p} \n      />)}\n    </`}
                  <span className="text-[#f7768e]">Layout</span>
                  {`>\n  );\n};`}
                </code>
              </pre>
            </div>
            {/* <!-- Terminal Footer --> */}
            <div className="bg-[#24283b] px-4 py-2 flex items-center border-t border-slate-800">
              <span className="text-[#27c93f] mr-2">
                <svg
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 13l4 4L19 7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  ></path>
                </svg>
              </span>
              <span className="text-[10px] text-slate-400 font-medium tracking-wide">
                Compilation successful in 240ms
              </span>
            </div>
          </div>
          {/* <!-- Decorative background glow for terminal --> */}
          <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-blue-400/5 blur-[100px] rounded-full"></div>
        </div>
      </div>
    </main>
  );
}
