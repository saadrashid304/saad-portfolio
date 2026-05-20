export default function Footer() {
  return (
    // <!-- Footer -->
    <footer className="bg-white border-t border-slate-200 full-width py-12">
      <div className="flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto px-8 gap-8">
        <div className="flex flex-col gap-2">
          <div className="text-lg font-black text-slate-900 tracking-tighter">
            SaadRashid
          </div>
          <div className="font-['Inter'] text-xs uppercase tracking-widest text-slate-400">
            © 2026 Saad Rashid. All rights reserved.
          </div>
        </div>
        <div className="flex gap-8">
          <a
            className="text-slate-500 hover:text-blue-600 dark:hover:text-blue-400 font-['Inter'] text-xs uppercase tracking-widest hover:-translate-y-0.5 transition-transform duration-300"
            href="https://github.com/saadrashid304"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            className="text-slate-500 hover:text-blue-600 dark:hover:text-blue-400 font-['Inter'] text-xs uppercase tracking-widest hover:-translate-y-0.5 transition-transform duration-300"
            href="https://www.linkedin.com/in/saadrashid304"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            className="text-slate-500 hover:text-blue-600 dark:hover:text-blue-400 font-['Inter'] text-xs uppercase tracking-widest hover:-translate-y-0.5 transition-transform duration-300"
            href="mailto:saadrashid304@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Email
          </a>
          <a
            className="text-slate-500 hover:text-blue-600 dark:hover:text-blue-400 font-['Inter'] text-xs uppercase tracking-widest hover:-translate-y-0.5 transition-transform duration-300"
            href="tel:+923135163383"
            target="_blank"
            rel="noopener noreferrer"
          >
            Phone
          </a>
        </div>
      </div>
    </footer>
  );
}
