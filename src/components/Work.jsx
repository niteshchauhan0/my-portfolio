import ProjectCard from "./ProjectCard";

const works = [
  {
    imgSrc: "/images/JobHook.png",
    title: "JobHook",
    desc: "JobHook is a full-stack job portal built for both applicants and recruiters, with JWT authentication, role-based workflows, profile management, and a responsive React interface backed by secure Spring Boot APIs. I designed it to cover the complete hiring journey, from posting jobs and managing listings to applying, tracking activity, and updating profiles. A major focus was making the experience feel organized for two very different user types without making the interface confusing. MongoDB helps the platform stay flexible as features grow, while the overall structure was planned with scalability and clean API design in mind.",
    stack: "React / Spring Boot / MongoDB",
    year: "2026",
    projectLink: "https://github.com/niteshchauhan0/JobHook",
  },
  {
    imgSrc: "/images/doc1.jpg",
    title: "DocSlot",
    desc: "DocSlot is an appointment scheduling platform created to make healthcare bookings easier for patients and simpler to manage for clinics. The system supports multiple roles including admin, doctor, receptionist, and patient, each with a tailored workflow that matches day-to-day responsibilities. While building it, I focused on reducing friction in booking, cancellation, and schedule management so the platform would feel practical in a real environment. The project helped me think carefully about role-based access, operational clarity, and how software can simplify repetitive administrative work.",
    stack: "Java Web App / Scheduling System",
    year: "2025",
    projectLink: "https://github.com/niteshchauhan0/docSlot",
  },
  {
    imgSrc: "/images/fit.jpg",
    title: "FitnessTrack",
    desc: "FitnessTrack is a MERN-based fitness platform that helps users log workouts, monitor consistency, explore tutorials, and stay engaged through analytics and motivational content. I wanted it to feel more supportive than clinical, so the experience combines progress tracking with educational features and a clean, energetic interface. Users can manage workouts, review their performance over time, and discover helpful fitness resources in one place instead of jumping between different tools. The project gave me room to work on CRUD flows, dashboard-style UI patterns, and the kind of responsive design that keeps a content-heavy product feeling approachable.",
    stack: "MERN Stack / Tailwind CSS",
    year: "2025",
    projectLink: "https://github.com/niteshchauhan0/FitnessTrack",
  },
  {
    imgSrc: "/images/codo-file.jpg",
    title: "Codo-File",
    desc: "Codo-File is an online code editor that combines live code execution with OCR and voice-to-text features, turning it into a broader productivity tool for developers and learners. Instead of limiting the project to a basic editor, I explored how extra utilities could make the platform more useful during studying, experimenting, and quick problem solving. The result is a more interactive experience where users can write code, extract text from images, and convert speech into text without leaving the same workspace. This project pushed me to balance feature variety with usability while keeping the interface responsive and engaging.",
    stack: "Node.js / Express / OCR",
    year: "2025",
    projectLink: "https://github.com/niteshchauhan0/codo-file",
  },
];

const Work = () => {
  return (
    <section id="work" className="section">
      <div className="container">
        <div className="mb-12 max-w-3xl">
          <span className="eyebrow reveal-up">Selected work</span>
          <h2 className="headline-2 reveal-up text-stone-50">Projects that show how I think about users, systems, and execution.</h2>
          <p className="section-copy mt-5 reveal-up">
            These projects are where I practice the kind of work I want to keep doing professionally: useful products, structured backend logic,
            clean interfaces, and details that make the experience feel complete.
          </p>
        </div>

        <div className="grid gap-6">
          {works.map((work) => (
            <ProjectCard key={work.title} {...work} classes="reveal-up" />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
