/**
 *  @copyright 2024 niteshsingh
 * @license Apache-2.0
 */

/* Components */
import ProjectCard from "./ProjectCard";

const works = [
  {
    imgSrc: '/images/JobHook.png', 
    title: 'JobHook – Job Portal Application',
    desc: 'A full-stack job portal built using Spring Boot and React, enabling users to find jobs, post listings, apply, and manage profiles. It features role-based login (applicant/recruiter), JWT authentication, real-time notifications, and a responsive UI powered by Material UI. Backend APIs are secured and structured using REST principles. MongoDB is used for scalable data storage. The project is designed with performance, usability, and scalability in mind.',
    projectLink: 'https://jobportal-frontend-ynnl.onrender.com/'
  },
  {
    imgSrc: '/images/codo-file.jpg',
    title: 'Codo-File',
    desc: 'Codo-File is a versatile online code editor supporting live execution of JavaScript and Python. It includes advanced features like Image-to-Text extraction using OCR and Voice-to-Text conversion for real-time speech transcription. Built with Node.js, Express, and GSAP animations, it offers a responsive UI, interactive experience, and user feedback integration. Ideal for developers and learners seeking an all-in-one coding, testing, and productivity tool.',
    projectLink: 'https://github.com/niteshchauhan0/codo-file'
  },  
  {
    imgSrc: '/images/fit.jpg',
    title: 'Fitness Track',
    desc: 'FitnessTrack is a full-stack fitness tracking web application built using the MERN stack: MongoDB, Express.js, React.js, and Node.js. The app allows users to register, log in securely, add/edit/delete workouts, view weekly analytics, read fitness blogs, explore categorized workout tutorials, track progress, and stay motivated — all within a sleek, responsive, and modern UI powered by Tailwind CSS and smooth animations.',
    projectLink: 'https://github.com/niteshchauhan0/FitnessTrack'
  },
  {
    imgSrc: '/images/Air1.png',
    title: 'Airline Management System',
    desc: 'As a final project in college, our team developed an Airline Management System using Java, showcasing our expertise in software development and problem-solving. This system streamlines airline operations, enhancing efficiency and customer satisfaction.Integrated with database management system for data storage and retrieval.',
    projectLink: '/'
  },
  {
    imgSrc: '/images/emp-management.png',
    title: 'Employee Management System',
    desc: 'A modern Java-based web application for managing employee records efficiently. EMS offers seamless login, profile personalization, and a fluid user experience. Developed using Java Servlets, JSP, JDBC with MySQL for robust backend and data handling. Features a clean, responsive UI built with Bootstrap 5 and FontAwesome icons for enhanced usability.',
    projectLink: 'https://github.com/niteshchauhan0/EmployeeManagement'
  },  
  {
    imgSrc: '/images/E-commerce.png',
    title: 'Shopping Cart JSP Web App',
    desc: 'A sleek and modern shopping cart application built using JSP, Servlets, JDBC, and MySQL. Designed with Glassmorphism UI, Bootstrap 5, and Dark Mode support. Features include product selection and quantity update, live cart preview, checkout summary, toast notifications, and cart persistence using HttpSession, all following the MVC pattern.',
    projectLink: 'https://github.com/niteshchauhan0/shopping-cart-jsp'
  }
  
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
          {works.map(({ imgSrc, title, desc, projectLink }, key) => (
            <ProjectCard
              key={key}
              imgSrc={imgSrc}
              title={title}
              desc={desc}
              projectLink={projectLink}
              classes="reveal-up"
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Work;
