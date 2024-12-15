/**
 *  @copyright 2024 niteshsingh
 * @license Apache-2.0
 */


// const aboutItems = [
//   {
//     label: 'Project done',
//     number: 45
//   },
//   {
//     label: 'Years of experience',
//     number: 10
//   }
// ];

const About = () => {
  return (
    <section
    id="about"
    className="section"
    >
      <div className="container">
      <h2 className="headline-2 mb-6 reveal-up">
          About Me
        </h2>

       <div className="bg-zinc-800/50 p-7 rounded-2xl mid:p-12 reveal-up">

        <p className="text-zinc-300 mb-4 md:mb-8 md:text-xl ">
          {/* md:max-w-[60ch] */}
        {/* Welcome! I&apos;m Nitesh Singh, a professional web developer with a knack for crafting visually stunning and highly functional websites. Combining creativity and technical expertise. I transform your vision into digital masterpiece that excels in both appearance and performance. */}
        Hi! I'm Nitesh Singh, recently graduate engineer with a strong foundation in programming languages like Java and JavaScript. I'm proficient in DSA and software engineering principles.
        I have hands-on experience with technologies like Java, HTML, CSS, JavaScript, React, and databases such as MySQL. I enjoy bridging the gap between front-end aesthetics and back-end functionality to create seamless user experiences.
        I thrive on solving complex problems and constantly strive to learn new tools and technologies to stay ahead in this ever-evolving field.
        I'm eager to apply my skills and knowledge in a real-world projects and learn from experienced professionals. I'm looking for an opportunity to grow and develop as a software developer and contribute to innovative projects.
        Feel free to check out my work below or reach out-I'd love to collaborate on your next project!
        </p>

        {/* <div className="flex flex-wrap items-center gap-4 md:gap-7">
          {
            aboutItems.map(({label, number },key) => (
              <div key={key}>
                <div className="flex items-center md:mb-2">
                  <span className="text-2xl font-semibold md:text-4xl">{number}</span>
                  <span className="text-sky-400 font-semibold md:text-3xl">+</span>
                </div>

                <p className="text-sm text-zinc-400">{label}</p>
                </div>
            ))
          } */}

          {/* <img 
          src="/images/logo.svg" 
          alt="Logo"
          width={30}
          height={30} 
          className="ml-auto md:w-[40px] md:h-[40px]"
           />
        </div> */}
       </div>

      </div>
    </section>
  )
}

export default About;