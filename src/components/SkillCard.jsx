function About() {
  const highlights = [
    {
      title: "Curious",
      description: "Always looking for opportunities to learn and improve.",
    },
    {
      title: "Creative",
      description: "I enjoy turning ideas into useful and engaging experiences.",
    },
    {
      title: "Growth-focused",
      description: "Focused on developing practical skills and creating meaningful work.",
    },
  ];

  return (
    <section id="about" className="border-b border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          {/* Heading */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
              About Me
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
              A little about my journey.
            </h2>
          </div>

          {/* Content */}
          <div>
            <p className="text-lg leading-8 text-slate-400">
              [YOUR BIO]. Write a short introduction about yourself,
              your background, and what interests you about technology.
            </p>

            <p className="mt-6 text-lg leading-8 text-slate-400">
              [YOUR TECHNOLOGY JOURNEY]. Explain briefly how you became
              interested in development and what you are currently learning.
            </p>

            <p className="mt-6 text-lg leading-8 text-slate-400">
              [YOUR CAREER GOALS]. Explain the type of work you would like
              to pursue and the skills you hope to develop.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {highlights.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-white/10 bg-white/3 p-5 transition hover:-translate-y-1 hover:border-cyan-400/30"
                >
                  <h3 className="font-semibold text-white">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <h3 className="text-lg font-semibold text-white">
                Outside of coding
              </h3>

              <p className="mt-3 leading-7 text-slate-400">
                [YOUR INTERESTS]. Add a few hobbies or interests that help
                visitors get to know you beyond your technical skills.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;