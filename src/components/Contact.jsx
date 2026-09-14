
function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-slate-950 py-24 sm:py-32"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-125 w-125 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            04 / Contact
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Let's build something{" "}
            <span className="text-cyan-400">together.</span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-400">
            Have a project, opportunity or idea you'd like to discuss?
            I'd love to hear from you.
          </p>
        </div>

        {/* Contact content */}
        <div className="mx-auto mt-16 grid max-w-5xl gap-8 lg:grid-cols-2">

          {/* Left - Contact information */}
          <div className="rounded-3xl border border-white/10 bg-white/3 p-8 sm:p-10">

            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-400/10 text-2xl">
              👋
            </div>

            <h3 className="mt-7 text-2xl font-bold text-white">
              Get in touch
            </h3>

            <p className="mt-4 leading-7 text-slate-400">
              I'm always open to discussing new opportunities, projects,
              collaborations or simply connecting with people in the
              technology space.
            </p>

            {/* Contact details */}
            <div className="mt-8 space-y-5">

              <a
                href="mailto:your.email@example.com"
                className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/3 p-4 transition duration-300 hover:border-cyan-400/30 hover:bg-cyan-400/5"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cyan-400/10 text-lg">
                  ✉
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                    Email
                  </p>

                  <p className="mt-1 text-sm font-medium text-slate-200 group-hover:text-cyan-300">
                    tshehlamakoala26@gmail.com
                  </p>
                </div>
              </a>

              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/3 p-4 transition duration-300 hover:border-cyan-400/30 hover:bg-cyan-400/5"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cyan-400/10 text-lg">
                  in
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                    LinkedIn
                  </p>

                  <p className="mt-1 text-sm font-medium text-slate-200 group-hover:text-cyan-300">
                    Connect with me
                  </p>
                </div>
              </a>

              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/3 p-4 transition duration-300 hover:border-cyan-400/30 hover:bg-cyan-400/5"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cyan-400/10 text-lg">
                  GH
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                    GitHub
                  </p>

                  <p className="mt-1 text-sm font-medium text-slate-200 group-hover:text-cyan-300">
                    View my projects
                  </p>
                </div>
              </a>

            </div>
          </div>

          {/* Right - Contact form */}
          <div className="rounded-3xl border border-white/10 bg-linear-to-br from-white/5 to-white/2 p-8 sm:p-10">

            <h3 className="text-2xl font-bold text-white">
              Send me a message
            </h3>

            <p className="mt-3 text-sm leading-6 text-slate-500">
              Fill in the form below and I'll get back to you.
            </p>

            <form className="mt-8 space-y-5">

              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium text-slate-300"
                >
                  Your Name
                </label>

                <input
                  id="name"
                  type="text"
                  placeholder="John Doe"
                  className="w-full rounded-xl border border-white/10 bg-slate-950/70 px-4 py-3.5 text-sm text-white outline-none placeholder:text-slate-600 transition focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/10"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-slate-300"
                >
                  Email Address
                </label>

                <input
                  id="email"
                  type="email"
                  placeholder="john@example.com"
                  className="w-full rounded-xl border border-white/10 bg-slate-950/70 px-4 py-3.5 text-sm text-white outline-none placeholder:text-slate-600 transition focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/10"
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-slate-300"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  rows="5"
                  placeholder="Tell me about your project..."
                  className="w-full resize-none rounded-xl border border-white/10 bg-slate-950/70 px-4 py-3.5 text-sm text-white outline-none placeholder:text-slate-600 transition focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/10"
                ></textarea>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="group w-full rounded-xl bg-cyan-400 px-6 py-3.5 font-bold text-slate-950 transition duration-300 hover:-translate-y-1 hover:bg-cyan-300 hover:shadow-lg hover:shadow-cyan-500/10"
              >
                Send Message
                <span className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </button>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Contact;

