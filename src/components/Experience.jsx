const milestones = [
  {
    title: "Associate Software Engineer",
    company: "Bristlecone",
    period: "Current",
    summary:
      "I have started my professional journey as an Associate Software Engineer at Bristlecone, part of the Mahindra Group, where I am stepping into real-world product and engineering workflows. This role marks an important shift from academic and personal projects to delivering in a collaborative professional environment.",
  },
  {
    title: "What I am focused on",
    company: "Growth and contribution",
    period: "Now",
    summary:
      "Right now, my focus is on learning quickly, strengthening engineering discipline, and contributing meaningfully to the team. I am especially excited about understanding production-grade development practices, collaborating with experienced engineers, and improving how I approach problem solving at scale.",
  },
  {
    title: "Why it matters",
    company: "Career direction",
    period: "Next chapter",
    summary:
      "This opportunity reflects the kind of work I want to keep building toward: impactful software, thoughtful collaboration, and steady growth as a developer. I am grateful for the start, and even more motivated by how much there is to learn from here.",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="section">
      <div className="container">
        <div className="mb-12 max-w-3xl">
          <span className="eyebrow reveal-up">Experience</span>
          <h2 className="headline-2 reveal-up text-stone-50">The beginning of my professional journey in software engineering.</h2>
          <p className="section-copy mt-5 reveal-up">
            I recently started working as an Associate Software Engineer at Bristlecone, part of the Mahindra Group. It is an exciting step
            forward, and it gives me the chance to learn from experienced teams while contributing to meaningful, real-world projects.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
          <article className="surface reveal-up p-8 sm:p-10">
            <p className="text-sm uppercase tracking-[0.18em] text-orange-200">Role</p>
            <h3 className="mt-3 text-3xl text-stone-50">Associate Software Engineer</h3>
            <p className="mt-2 text-base text-stone-300">Bristlecone, part of the Mahindra Group</p>
            <div className="mt-6 inline-flex rounded-full border border-white/10 bg-stone-950/50 px-4 py-2 text-xs uppercase tracking-[0.18em] text-stone-300">
              Professional experience
            </div>

            <p className="mt-6 text-base leading-8 text-stone-300">
              I am looking forward to learning, growing, and contributing to impactful projects while collaborating with a talented team. This
              experience is helping me turn strong technical foundations into professional execution, communication, and delivery.
            </p>
          </article>

          <div className="grid gap-4">
            {milestones.map(({ title, company, period, summary }) => (
              <article key={title} className="surface reveal-up p-6">
                <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.18em] text-stone-400">
                  <span>{company}</span>
                  <span className="h-1 w-1 rounded-full bg-stone-500" />
                  <span>{period}</span>
                </div>
                <h3 className="mt-3 text-2xl text-stone-50">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-stone-300">{summary}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
