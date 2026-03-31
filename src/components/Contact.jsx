const socialLinks = [
  { href: "https://github.com/niteshchauhan0", label: "GitHub" },
  { href: "https://www.linkedin.com/in/nitesh-singh-1a6159245", label: "LinkedIn" },
  { href: "https://leetcode.com/u/niteshrajputtt/", label: "LeetCode" },
];

const contactNotes = [
  "Open to internships, freelance projects, and junior developer opportunities.",
  "Best fit: full-stack products, admin dashboards, API-backed web apps, and frontend refresh work.",
];

const Contact = () => {
  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="surface reveal-up p-8 sm:p-10">
            <span className="eyebrow">Contact</span>
            <h2 className="headline-2 text-stone-50">Let&apos;s turn your idea into something clean, usable, and production-minded.</h2>
            <p className="mt-5 text-base leading-7 text-stone-300">
              If you have a project, role, or collaboration in mind, send me a note. I&apos;m especially interested in opportunities where I can
              contribute across both frontend and backend development.
            </p>

            <div className="mt-8 grid gap-3">
              {contactNotes.map((note) => (
                <div key={note} className="rounded-2xl border border-white/10 bg-stone-950/40 p-4 text-sm leading-7 text-stone-300 transition duration-300 hover:bg-stone-950/55">
                  {note}
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {socialLinks.map(({ href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-stone-200 transition hover:-translate-y-0.5 hover:border-orange-200/30 hover:text-orange-100"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>

          <form action="https://getform.io/f/bpjjzjnb" method="POST" className="surface reveal-up rounded-[32px] p-8 sm:p-10">
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="label">Name</label>
                <input type="text" name="name" id="name" autoComplete="name" placeholder="Your name" className="text-field" required />
              </div>

              <div>
                <label htmlFor="email" className="label">Email</label>
                <input type="email" name="email" id="email" autoComplete="email" placeholder="you@example.com" className="text-field" required />
              </div>
            </div>

            <div className="mt-5">
              <label htmlFor="subject" className="label">Project type</label>
              <input type="text" name="subject" id="subject" placeholder="Portfolio, dashboard, API app..." className="text-field" />
            </div>

            <div className="mt-5">
              <label htmlFor="message" className="label">Message</label>
              <textarea
                name="message"
                id="message"
                placeholder="Tell me what you're building, the stack you're considering, or the role you're hiring for."
                required
                className="text-field min-h-40 resize-y"
              />
            </div>

            <button type="submit" className="btn btn-primary mt-6 w-full">
              Send message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
