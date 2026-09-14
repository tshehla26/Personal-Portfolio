function ProjectCard({ project }) {
  return (
    <div className="group overflow-hidden rounded-3xl border border-white/10 bg-white/3 transition duration-300 hover:-translate-y-2 hover:border-cyan-400/30 hover:bg-white/5">

      {/* Project Preview */}
      <div className="flex h-56 items-center justify-center bg-linear-to-br from-slate-900 via-slate-800 to-cyan-950/40">
        <div className="text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-2xl font-bold text-cyan-400">
            &lt;/&gt;
          </div>

          <p className="mt-4 text-sm text-slate-500">
            Project Preview
          </p>
        </div>
      </div>

      {/* Project Information */}
      <div className="p-7">

        {/* Project Name */}
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">
          Project
        </p>

        <h3 className="mt-2 text-2xl font-bold text-white">
          {project.title}
        </h3>

        {/* Description */}
        <p className="mt-4 text-sm leading-7 text-slate-400">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="mt-6 flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <span
              key={technology}
              className="rounded-full border border-white/10 bg-slate-900 px-3 py-1.5 text-xs font-medium text-slate-300"
            >
              {technology}
            </span>
          ))}
        </div>

        {/* Project Link */}
        <div className="mt-7">
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full rounded-xl bg-cyan-400 px-4 py-3 text-center text-sm font-bold text-slate-950 transition duration-300 hover:bg-cyan-300 hover:shadow-lg hover:shadow-cyan-500/20"
          >
            View Project →
          </a>
        </div>

      </div>
    </div>
  );
}

export default ProjectCard;
