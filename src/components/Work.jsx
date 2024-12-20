/**
 *  @copyright 2024 niteshsingh
 * @license Apache-2.0
 */



/* Components */

import ProjectCard from "./ProjectCard";


const works = [
  {
    imgSrc: '/images/Citizen.png',
    title: 'Citizen Safety App',
    desc: 'Detects and flags malicious fraud attempts through messages, links, UPl IDs and applications, alerting users before they proceed with payments. Allows users to copy and paste suspected links to verify their association with fraudulent accounts. Improve citizen safety through technology-driven solutions.'
    // projectLink: 'https://musify-5al0.onrender.com/'
  },
  {
    imgSrc: '/images/E-commerce.png',
    title: 'eCommerce Website',
    desc: 'Responsive Design: Adapts to various devices and screen sizes for optimal user experience. Product Catalog: Robust filtering and sorting capabilities for easy product discovery. Secure Checkout: Smooth transactions with payment gateway integration. Interactive Elements: JavaScript-powered carousels and modal windows for enhanced engagement.'
    // projectLink: 'https://pixstock-official.vercel.app/'
  },
  {
    imgSrc: '/images/f2.avif',
    title: 'The Fat Burner',
    // tags: ['Development', 'API'],
    desc: 'Predicts and tracks calories burned during diverse exercises with high accuracy, helping users optimize their fitness routines. Enables users to input exercise details and receive precise data on calorie expenditure. Improves personal fitness and wellness through technology-driven, machine learning-powered solutions.'
    // projectLink: ''
  },
  {
    imgSrc: '/images/Air1.png',
    title: 'Airline Management System',
    desc: 'As a final project in college, our team developed an Airline Management System using Java, showcasing our expertise in software development and problem-solving. This system streamlines airline operations, enhancing efficiency and customer satisfaction.Integrated with database management system for data storage and retrieval.'
    // projectLink: 'https://github.com/codewithsadee/anon-ecommerce-website'
  },
  {
    imgSrc: '/images/SRA.png',
    title: 'Student Registration System',
    // tags: ['Web-design', 'Development'],
    desc: 'Created a student registration system using Java and MySQL, allowing administrators to manage student records. Designed a user-friendly interface for data entry and retrieval. Implemented secure data storage and retrieval using SQL. It ensures efficiency, accuracy, and ease of use for educational institutions.'
  },
  {
    imgSrc: '/images/rps4.jpg',
    title: 'Rock Paper Scissors Game',
    desc: 'Provides an interactive gaming experience where user play the classic Rock-Paper-Scissors game against the computer. Utilizes HTML, CSS, and JavaScript for smooth functionality and dynamic visuals. Enables user to make their choice and displays real-time outcomes with a user-friendly interface. Promotes learning and entertainment through a simple, technology-driven solution.'
    // projectLink: 'https://github.com/codewithsadee/vcard-personal-portfolio'
  },
];

const Work = () => {
  return (
    <section 
     id="work"
     className="section"
    >

      <div className="container">

        <h2 className="headline-2 mb-8 reveal-up">
           Recent Projects
        </h2>

        <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
          {works.map(({ imgSrc, title, desc},key) => (
            <ProjectCard
             key={key}
             imgSrc={imgSrc}
             title={title}
             desc={desc}
            //  projectLink={projectLink}
             classes="reveal-up"
            />
          ))}
        </div>

      </div>
    </section>
  )
}

export default Work;