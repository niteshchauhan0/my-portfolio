const About = () => {
  return (
    <section id="about" className="section py-16">
      <div className="container max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-white mb-8 reveal-up">About Me</h2>

        <div className="bg-zinc-800/50 p-6 md:p-10 rounded-2xl reveal-up">
          <p className="text-zinc-300 text-base md:text-lg leading-relaxed space-y-4">
            <span className="block mb-4">
              Hi! I'm <strong className="text-white">Nitesh Singh</strong>, a passionate software developer with a solid foundation in Java, C++, and C#, and a growing expertise across both frontend and backend technologies.
            </span>
            <span className="block mb-4">
              I recently graduated with an engineering degree and have honed my skills in Data Structures & Algorithms, Object-Oriented Programming, and full-stack application development.
            </span>
            <span className="block mb-4">
              On the frontend, I specialize in React, enhanced with TailwindCSS, Bootstrap, HTML5, and CSS3 to build responsive, modern user interfaces.
            </span>
            <span className="block mb-4">
              On the backend, I work confidently with Java (Spring Boot) and C# (.NET), and also enjoy building with Node.js when working in the JavaScript ecosystem.
            </span>
            <span className="block mb-4">
              I’m experienced in managing databases like MySQL and MongoDB, and have a strong grasp on using tools like Postman for API testing and GitHub for version control and collaboration.
            </span>
            <span className="block mb-4">
              I love solving real-world problems and bridging the gap between design and logic. I'm always eager to learn, adapt, and contribute to impactful projects.
            </span>
            <span className="block">
              Whether it's a clean UI or a scalable backend, I bring energy and precision to everything I build. Let’s connect and create something awesome—check out my work below or reach out for collaboration opportunities!
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
