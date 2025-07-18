/**
 *  @copyright 2024 niteshsingh
 * @license Apache-2.0
 */

/* Components */
import SkillCard from "./SkillCard";

const skillItem = [
  // 💻 Languages
  {
    imgSrc: '/images/java-icon.svg',
    label: 'Java',
    desc: 'Programming Language'
  },
  {
    imgSrc: '/images/cpp-icon.svg',
    label: 'C++',
    desc: 'Programming Language'
  },
  {
    imgSrc: '/images/csharp-icon.svg',
    label: 'C#',
    desc: 'Programming Language'
  },
  {
    imgSrc: '/images/javascript.svg',
    label: 'JavaScript',
    desc: 'Scripting Language'
  },

  // 🌐 Web / Backend
  {
    imgSrc: '/images/react.svg',
    label: 'React',
    desc: 'Frontend Library'
  },
  {
    imgSrc: '/images/springboot-icon.svg',
    label: 'Spring Boot',
    desc: 'Java Backend Framework'
  },
  {
    imgSrc: '/images/dotnet-icon.svg',
    label: '.NET',
    desc: 'C# Backend Framework'
  },
  {
    imgSrc: '/images/nodejs-icon.svg',
    label: 'Node.js',
    desc: 'JavaScript Runtime'
  },

  // 🗄️ Databases
  {
    imgSrc: '/images/mysql-icon.svg',
    label: 'MySQL',
    desc: 'Relational Database'
  },
  {
    imgSrc: '/images/mongodb-icon.svg',
    label: 'MongoDB',
    desc: 'NoSQL Database'
  },

  // 🎨 UI/Tools
  {
    imgSrc: '/images/w3_html5-icon.svg',
    label: 'HTML5',
    desc: 'Markup Language'
  },
  {
    imgSrc: '/images/css3.svg',
    label: 'CSS3',
    desc: 'Style Language'
  },
  {
    imgSrc: '/images/tailwindcss.svg',
    label: 'TailwindCSS',
    desc: 'Utility-first CSS'
  },
  {
    imgSrc: '/images/bootstrap-icon.svg',
    label: 'Bootstrap',
    desc: 'CSS Framework'
  },
  {
    imgSrc: '/images/icons8-github.svg',
    label: 'GitHub',
    desc: 'Version Control'
  },
  {
    imgSrc: '/images/postman-icon.svg',
    label: 'Postman',
    desc: 'API Testing Tool'
  },
];

const Skill = () => {
  return (
    <section className="section">
      <div className="container">
        <h2 className="headline-2 reveal-up">Skills</h2>
        <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch]">
          Tools and technologies I use to build modern web and backend applications.
        </p>

        <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
          {
            skillItem.map(({ imgSrc, label, desc }, key) => (
              <SkillCard
                key={key}
                imgSrc={imgSrc}
                label={label}
                desc={desc}
                classes="reveal-up"
              />
            ))
          }
        </div>
      </div>
    </section>
  );
};

export default Skill;
