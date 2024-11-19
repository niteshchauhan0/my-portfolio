/**
 *  @copyright 2024 niteshsingh
 * @license Apache-2.0
 */


/*Components */

import SkillCard from "./SkillCard";


const skillItem = [
  {
    imgSrc: '/images/java-icon.svg',
    label: 'Java',
    desc: 'Programming Language'
  },
  {
    imgSrc: '/images/w3_html5-icon.svg',
    label: 'HTML',
    desc: 'Markup Language'
  },
  {
    imgSrc: '/images/css3.svg',
    label: 'CSS',
    desc: 'User Interface'
  },
  {
    imgSrc: '/images/javascript.svg',
    label: 'JavaScript',
    desc: 'Interaction'
  },
  {
    imgSrc: '/images/react.svg',
    label: 'React',
    desc: 'Library of JS'
  },
  {
    imgSrc: '/images/mysql-icon.svg',
    label: 'MySQL',
    desc: 'Database'
  },
  {
    imgSrc: '/images/tailwindcss.svg',
    label: 'TailwindCSS',
    desc: 'User Interface'
  },
  {
    imgSrc: '/images/icons8-github.svg',
    label: 'GitHub',
    desc: 'Tool'
  },
];



const Skill = () => {
  return(
    <section className="section">
      <div className="container">

        <h2 className="headline-2 reveal-up">
          Skills
        </h2>

        <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch]">
        {/* Discover the powerful tools and technologies I use to create exceptional, high-performing websites & applications. */}
        </p>

        <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
          {
            skillItem.map(({imgSrc, label, desc },key) =>(
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
  )
}

export default Skill;