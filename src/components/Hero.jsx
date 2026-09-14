function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-slate-950"
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "linear-gradient(rgba(148,163,184,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.08) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      {/* Glowing background */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-150 w-150-translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl" />

      <div className="relative mx-auto flex min-h-screen max-w-7xl items-center px-6 py-24 lg:px-8">

        <div className="grid w-full items-center gap-16 lg:grid-cols-2">

          {/* Left side */}
          <div>

            {/* Availability badge */}
            <div className="inline-flex items-center gap-3 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-2">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-60" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-cyan-400" />
              </span>

              <span className="text-sm font-medium text-cyan-300">
                Available for opportunities
              </span>
            </div>

            {/* Main heading */}
            <h1 className="mt-8 text-5xl font-black tracking-tight text-white sm:text-6xl lg:text-7xl">
              Hi, I'm{" "}
              <span className="text-cyan-400">
                Tshehla.
              </span>

              <br />

              I build things
              <br />

              <span className="text-slate-500">
                for the web.
              </span>
            </h1>

            {/* Description */}
            <p className="mt-8 max-w-xl text-lg leading-8 text-slate-400">
              I'm a developer with a background in{" "}
              <span className="font-medium text-slate-200">
                marketing and sales
              </span>
              , combining creativity, communication and technology to build
              useful digital experiences.
            </p>

            {/* Buttons */}
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">

              <a
                href="#projects"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-400 px-7 py-4 font-bold text-slate-950 transition duration-300 hover:-translate-y-1 hover:bg-cyan-300 hover:shadow-xl hover:shadow-cyan-500/20"
              >
                View My Work
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-xl border border-white/10 px-7 py-4 font-semibold text-white transition duration-300 hover:border-cyan-400/30 hover:bg-white/5"
              >
                Let's Talk
              </a>

            </div>

            {/* Quick stats */}
            <div className="mt-14 flex flex-wrap gap-10 border-t border-white/10 pt-8">

              <div>
                <p className="text-2xl font-bold text-white">3+</p>
                <p className="mt-1 text-sm text-slate-500">
                  Projects built
                </p>
              </div>

              <div>
                <p className="text-2xl font-bold text-white">8+</p>
                <p className="mt-1 text-sm text-slate-500">
                  Technologies
                </p>
              </div>

              <div>
                <p className="text-2xl font-bold text-white">∞</p>
                <p className="mt-1 text-sm text-slate-500">
                  Learning mindset
                </p>
              </div>

            </div>
          </div>

          {/* Right side */}
          <div className="relative hidden lg:block">

            {/* Main code card */}
            <div className="relative mx-auto max-w-lg">

              {/* Glow */}
              <div className="absolute -inset-4 rounded-3xl bg-cyan-400/10 blur-2xl" />

              <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-slate-900/90 shadow-2xl">

                {/* Window bar */}
                <div className="flex items-center gap-2 border-b border-white/10 px-5 py-4">
                  <span className="h-3 w-3 rounded-full bg-red-400/70" />
                  <span className="h-3 w-3 rounded-full bg-yellow-400/70" />
                  <span className="h-3 w-3 rounded-full bg-green-400/70" />

                  <span className="ml-3 text-xs text-slate-600">
                    portfolio.jsx
                  </span>
                </div>

                {/* Code */}
                <div className="p-7 font-mono text-sm leading-8">

                  <p>
                    <span className="text-purple-400">const</span>{" "}
                    <span className="text-cyan-300">developer</span>{" "}
                    = {"{"}
                  </p>

                  <p className="pl-6">
                    <span className="text-slate-500">name:</span>{" "}
                    <span className="text-green-300">
                      "Tshehla"
                    </span>
                    ,
                  </p>

                  <p className="pl-6">
                    <span className="text-slate-500">role:</span>{" "}
                    <span className="text-green-300">
                      "Web Developer"
                    </span>
                    ,
                  </p>

                  <p className="pl-6">
                    <span className="text-slate-500">skills:</span> [
                  </p>

                  <p className="pl-12 text-green-300">
                    "React",
                  </p>

                  <p className="pl-12 text-green-300">
                    "JavaScript",
                  </p>

                  <p className="pl-12 text-green-300">
                    "Tailwind CSS",
                  </p>

                  <p className="pl-6">],</p>

                  <p className="pl-6">
                    <span className="text-slate-500">mindset:</span>{" "}
                    <span className="text-green-300">
                      "Always learning"
                    </span>
                  </p>

                  <p>{"}"}</p>

                  <p className="mt-5">
                    <span className="text-purple-400">export default</span>{" "}
                    <span className="text-cyan-300">
                      developer
                    </span>
                    ;
                  </p>

                </div>
              </div>

              {/* Floating card */}
              <div className="absolute -bottom-8 -left-8 rounded-2xl border border-white/10 bg-slate-900 p-5 shadow-xl">
                <p className="text-xs uppercase tracking-wider text-slate-500">
                  Currently learning
                </p>

                <p className="mt-2 font-semibold text-white">
                  React + Tailwind
                </p>

                <div className="mt-3 h-1.5 w-32 overflow-hidden rounded-full bg-slate-800">
                  <div className="h-full w-3/4 rounded-full bg-cyan-400" />
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-slate-600 sm:flex">
        <span className="text-xs uppercase tracking-[0.3em]">
          Scroll
        </span>

        <span className="text-lg">↓</span>
      </div>
    </section>
  );
}

export default Hero;

