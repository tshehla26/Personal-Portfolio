function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950">
      <div className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">

          {/* Logo / Name */}
          <div className="text-center sm:text-left">
            <a
              href="#"
              className="text-xl font-bold tracking-tight text-white"
            >
              Tshehla<span className="text-cyan-400">.dev</span>
            </a>

            <p className="mt-2 text-sm text-slate-500">
              Building ideas into digital experiences.
            </p>
          </div>

          {/* Navigation */}
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm">
            <a
              href="#home"
              className="text-slate-400 transition hover:text-cyan-400"
            >
              Home
            </a>

            <a
              href="#about"
              className="text-slate-400 transition hover:text-cyan-400"
            >
              About
            </a>

            <a
              href="#skills"
              className="text-slate-400 transition hover:text-cyan-400"
            >
              Skills
            </a>

            <a
              href="#projects"
              className="text-slate-400 transition hover:text-cyan-400"
            >
              Projects
            </a>

            <a
              href="#contact"
              className="text-slate-400 transition hover:text-cyan-400"
            >
              Contact
            </a>
          </nav>

        </div>

        {/* Bottom row */}
        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-sm sm:flex-row">

          <p className="text-slate-600">
            © {new Date().getFullYear()} Tshehla. All rights reserved.
          </p>

          <div className="flex items-center gap-5">

            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-slate-500 transition hover:text-cyan-400"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-slate-500 transition hover:text-cyan-400"
            >
              LinkedIn
            </a>

            <a
              href="#contact"
              className="text-slate-500 transition hover:text-cyan-400"
            >
              Contact
            </a>

          </div>

        </div>
      </div>
    </footer>
  );
}

export default Footer;

