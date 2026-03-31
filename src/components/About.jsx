const highlights = [
  {
    title: "Full-stack mindset",
    text: "I enjoy owning the whole flow: UI, API design, database modeling, and the details that make everything feel cohesive.",
  },
  {
    title: "Backend-first confidence",
    text: "Spring Boot, Node.js, and .NET projects taught me to care about structure, auth flows, and maintainable services.",
  },
  {
    title: "Frontend polish",
    text: "I use React and Tailwind to build layouts that feel modern, responsive, and easier for people to trust and use.",
  },
];

const About = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="mb-12 max-w-3xl">
          <span className="eyebrow reveal-up">About</span>
          <h2 className="headline-2 reveal-up text-stone-50">I build with equal attention to engineering depth and visual clarity.</h2>
          <p className="section-copy mt-5 reveal-up">
            I recently completed my engineering degree and have been using personal projects to sharpen how I think about product building:
            choosing the right stack, structuring scalable features, and making interfaces feel intentional rather than generic.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="surface reveal-up p-8 sm:p-10">
            <p className="text-sm uppercase tracking-[0.2em] text-orange-200">What drives me</p>
            <p className="mt-5 text-lg leading-8 text-stone-200">
              I like solving practical problems with products that are easy to understand and enjoyable to use. That means clear information
              architecture, strong backend fundamentals, and enough craft in the interface that the product feels considered from the first
              screen to the last.
            </p>
            <p className="mt-5 text-base leading-7 text-stone-300">
              My recent work spans healthcare scheduling, job platforms, code tooling, fitness tracking, and admin systems. Across all of them,
              I keep coming back to the same idea: software should make complicated tasks feel simple.
            </p>
          </div>

          <div className="grid gap-4">
            {highlights.map(({ title, text }) => (
              <article key={title} className="surface reveal-up p-6">
                <p className="text-sm uppercase tracking-[0.18em] text-stone-400">Focus area</p>
                <h3 className="mt-2 text-2xl text-stone-50">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-stone-300">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
