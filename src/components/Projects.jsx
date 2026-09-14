import ProjectCard from "./ProjectCard";

function Projects() {
  const projects = [
    {
      title: "Digital Clock",
      description:
        "A responsive digital clock built with JavaScript, featuring a 12/24-hour format toggle and a clean user interface.",
      technologies: ["HTML", "CSS", "JavaScript"],
      live: "https://fanciful-creponne-2c6862.netlify.app/",
    },

    {
      title: "Interactive Quiz Application",
      description:
        "An interactive quiz application with multiple categories, timed gameplay, navigation and engaging question cards.",
      technologies: ["HTML", "CSS", "JavaScript"],
      live: "https://quizzooo.netlify.app/",
    },

    {
      title: "Team Portfolio — Group 3",
      description:
        "A collaborative team portfolio website showcasing team members, skills and project work.",
      technologies: ["HTML", "CSS", "JavaScript"],
      live: "https://teamtechtitans.netlify.app/",
    },
  ];

  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-slate-950 py-24 sm:py-32"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-20 h-96 w-96 -translate-x-1/2 rounded-full bg-cyan-500/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

        {/* Section heading */}
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            03 / Projects
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Things I've{" "}
            <span className="text-cyan-400">built.</span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-400">
            A selection of projects I've worked on while developing my
            skills in web development and building practical digital
            experiences.
          </p>
        </div>

        {/* Projects */}
        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              project={project}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

export default Projects;