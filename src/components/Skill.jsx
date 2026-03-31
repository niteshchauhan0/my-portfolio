import SkillCard from "./SkillCard";

const skillGroups = [
  {
    title: "Languages and logic",
    copy: "Core programming tools I rely on for problem solving and system implementation.",
    items: [
      { imgSrc: "/images/java-icon.svg", label: "Java", desc: "Primary backend language" },
      { imgSrc: "/images/cpp-icon.svg", label: "C++", desc: "DSA and problem solving" },
      { imgSrc: "/images/csharp-icon.svg", label: "C#", desc: ".NET application development" },
      { imgSrc: "/images/javascript.svg", label: "JavaScript", desc: "Interactive frontend and Node.js" },
    ],
  },
  {
    title: "Frameworks and UI",
    copy: "Libraries and frameworks I use to ship responsive, maintainable apps.",
    items: [
      { imgSrc: "/images/react.svg", label: "React", desc: "Component-driven frontend development" },
      { imgSrc: "/images/springboot-icon.svg", label: "Spring Boot", desc: "REST APIs and backend architecture" },
      { imgSrc: "/images/dotnet-icon.svg", label: ".NET", desc: "Service and enterprise app workflows" },
      { imgSrc: "/images/nodejs-icon.svg", label: "Node.js", desc: "JavaScript backend runtime" },
      { imgSrc: "/images/tailwindcss.svg", label: "Tailwind CSS", desc: "Fast design-system styling" },
      { imgSrc: "/images/bootstrap-icon.svg", label: "Bootstrap", desc: "Rapid layout and utility work" },
    ],
  },
  {
    title: "Data and delivery",
    copy: "The tools I use to persist data, test APIs, and collaborate effectively.",
    items: [
      { imgSrc: "/images/mysql-icon.svg", label: "MySQL", desc: "Structured relational data" },
      { imgSrc: "/images/mongodb-icon.svg", label: "MongoDB", desc: "Flexible document modeling" },
      { imgSrc: "/images/icons8-github.svg", label: "GitHub", desc: "Version control and collaboration" },
      { imgSrc: "/images/postman-icon.svg", label: "Postman", desc: "Endpoint testing and debugging" },
    ],
  },
];

const Skill = () => {
  return (
    <section id="skills" className="section">
      <div className="container">
        <div className="mb-12 max-w-3xl">
          <span className="eyebrow reveal-up">Capabilities</span>
          <h2 className="headline-2 reveal-up text-stone-50">A toolkit shaped around shipping complete products, not isolated screens.</h2>
          <p className="section-copy mt-5 reveal-up">
            I move comfortably between interface work, backend implementation, databases, and testing workflows, which helps me build projects
            that are consistent from the first click to the final API response.
          </p>
        </div>

        <div className="grid gap-6">
          {skillGroups.map(({ title, copy, items }) => (
            <section key={title} className="surface reveal-up p-6 sm:p-8">
              <div className="mb-6 max-w-2xl">
                <p className="text-sm uppercase tracking-[0.18em] text-orange-200">{title}</p>
                <p className="mt-3 text-sm leading-7 text-stone-300">{copy}</p>
              </div>

              <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {items.map((item) => (
                  <SkillCard key={item.label} {...item} />
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skill;
