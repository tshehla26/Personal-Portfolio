function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-slate-950 py-24 sm:py-32"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-cyan-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 bottom-20 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

        {/* Section heading */}
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            02 / About Me
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Where creativity meets{" "}
            <span className="text-cyan-400">technology.</span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-400">
            I'm a developer with a background in marketing, sales and
            technology. I enjoy combining creative thinking with technical
            skills to build useful digital experiences.
          </p>
        </div>

        {/* Main content */}
        <div className="mt-16 grid gap-8 lg:grid-cols-2">

          {/* About card */}
          <div className="rounded-3xl border border-white/10 bg-white/3 p-8 transition duration-300 hover:border-cyan-400/30 hover:bg-white/5 sm:p-10">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-400/10 text-xl">
                👨🏾‍💻
              </div>

              <div>
                <p className="text-sm text-slate-500">
                  A little about me
                </p>

                <h3 className="text-xl font-bold text-white">
                  Building with purpose
                </h3>
              </div>
            </div>

            <div className="mt-8 space-y-5 text-slate-400 leading-7">
              <p>
                My journey started in marketing, where I developed a strong
                interest in understanding people, solving problems and
                communicating ideas effectively.
              </p>

              <p>
                I then began developing my technical skills through hands-on
                projects, learning technologies such as HTML, CSS, JavaScript,
                React, Tailwind CSS and Git.
              </p>

              <p>
                I enjoy turning an idea into something people can actually
                interact with — from simple websites to more dynamic
                applications.
              </p>
            </div>
          </div>

          {/* What I bring card */}
          <div className="rounded-3xl border border-white/10 bg-linear-to-br from-cyan-400/8 to-white/2 p-8 sm:p-10">

            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-400/10 text-xl">
                ⚡
              </div>

              <div>
                <p className="text-sm text-slate-500">
                  What I bring
                </p>

                <h3 className="text-xl font-bold text-white">
                  More than just code
                </h3>
              </div>
            </div>

            <div className="mt-8 space-y-6">

              <div className="flex gap-4">
                <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-cyan-400/10 text-sm text-cyan-400">
                  01
                </div>

                <div>
                  <h4 className="font-semibold text-white">
                    Creative thinking
                  </h4>

                  <p className="mt-1 text-sm leading-6 text-slate-500">
                    I approach problems from both a technical and creative
                    perspective.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-cyan-400/10 text-sm text-cyan-400">
                  02
                </div>

                <div>
                  <h4 className="font-semibold text-white">
                    Communication
                  </h4>

                  <p className="mt-1 text-sm leading-6 text-slate-500">
                    My marketing and sales experience taught me how to
                    understand people and communicate clearly.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-cyan-400/10 text-sm text-cyan-400">
                  03
                </div>

                <div>
                  <h4 className="font-semibold text-white">
                    Continuous learning
                  </h4>

                  <p className="mt-1 text-sm leading-6 text-slate-500">
                    I'm constantly learning new technologies and improving
                    through practical projects.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-8 grid gap-4 sm:grid-cols-3">

          <div className="rounded-2xl border border-white/10 bg-white/3 p-6">
            <p className="text-3xl font-bold text-white">5+</p>
            <p className="mt-2 text-sm text-slate-500">
              Technologies explored
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/3 p-6">
            <p className="text-3xl font-bold text-white">3+</p>
            <p className="mt-2 text-sm text-slate-500">
              Projects built
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/3 p-6">
            <p className="text-3xl font-bold text-white">∞</p>
            <p className="mt-2 text-sm text-slate-500">
              Room to grow
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default About;
