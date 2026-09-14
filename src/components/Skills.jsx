function Skills() {
  const skills = [
    {
      name: "HTML",
      category: "Frontend",
      icon: "</>",
      description: "Building semantic and accessible web pages.",
    },
    {
      name: "CSS",
      category: "Frontend",
      icon: "✦",
      description: "Creating responsive layouts and polished interfaces.",
    },
    {
      name: "JavaScript",
      category: "Programming",
      icon: "JS",
      description: "Adding logic, interaction and dynamic functionality.",
    },
    {
      name: "React",
      category: "Frontend",
      icon: "⚛",
      description: "Building reusable components and interactive UIs.",
    },
    {
      name: "Tailwind CSS",
      category: "Styling",
      icon: "TW",
      description: "Designing modern responsive interfaces efficiently.",
    },
    {
      name: "Git",
      category: "Version Control",
      icon: "⌘",
      description: "Managing code versions and development workflows.",
    },
    {
      name: "GitHub",
      category: "Collaboration",
      icon: "GH",
      description: "Collaborating on projects and managing repositories.",
    },
    {
      name: "APIs",
      category: "Development",
      icon: "↔",
      description: "Working with external data and web services.",
    },
  ];

  return (
    <section
      id="skills"
      className="relative overflow-hidden border-b border-white/10 bg-slate-950 py-24 sm:py-32"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute -right-40 top-20 h-96 w-96 rounded-full bg-cyan-500/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

        {/* Heading */}
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            My Skills
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Tools I use to{" "}
            <span className="text-cyan-400">bring ideas to life.</span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-400">
            I'm continuously developing my technical skills through practical
            projects, teamwork and hands-on development.
          </p>
        </div>

        {/* Skills grid */}
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/3 p-6 transition duration-300 hover:-translate-y-2 hover:border-cyan-400/30 hover:bg-white/5 hover:shadow-xl hover:shadow-cyan-500/5"
            >
              {/* Hover glow */}
              <div className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-cyan-400/10 opacity-0 blur-2xl transition duration-300 group-hover:opacity-100" />

              {/* Icon */}
              <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 font-mono text-lg font-bold text-cyan-300 transition duration-300 group-hover:scale-110 group-hover:border-cyan-400/40">
                {skill.icon}
              </div>

              {/* Text */}
              <p className="mt-6 text-xs font-semibold uppercase tracking-wider text-cyan-400">
                {skill.category}
              </p>

              <h3 className="mt-2 text-xl font-bold text-white">
                {skill.name}
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-500">
                {skill.description}
              </p>

              {/* Bottom accent */}
              <div className="mt-6 h-px w-0 bg-cyan-400 transition-all duration-500 group-hover:w-full" />
            </div>
          ))}
        </div>

        {/* Learning statement */}
        <div className="mt-10 rounded-2xl border border-cyan-400/10 bg-cyan-400/3 p-6 sm:p-8">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-semibold text-cyan-400">
                Currently learning
              </p>

              <h3 className="mt-2 text-xl font-bold text-white">
                Growing from fundamentals to full-stack development.
              </h3>

              <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">
                My current focus is strengthening JavaScript and React while
                building practical projects that solve real problems.
              </p>
            </div>

            <div className="shrink-0 text-4xl">
              🚀
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Skills;

