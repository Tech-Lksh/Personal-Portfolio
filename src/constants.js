// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import reduxLogo from './assets/tech_logo/redux.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';

// Experience Section Logo's
import webverseLogo from './assets/company_logo/webverse_logo.png';
import agcLogo from './assets/company_logo/agc_logo.png';
import newtonschoolLogo from './assets/company_logo/newtonschool_logo.png';

// Education Section Logo's
import glaLogo from './assets/education_logo/global.png';
import bsaLogo from './assets/education_logo/sindhu.png';
import vpsLogo from './assets/education_logo/school.png';

// Project Section Logo's
import githubdetLogo from './assets/work_logo/E-ComWeb.png';
import csprepLogo from './assets/work_logo/weather.png.png';
import movierecLogo from './assets/work_logo/tic-tac-toe.png.png';
import npmLogo from './assets/work_logo/documentManager.png';
import blog from './assets/work_logo/Blog.png'
import passwordGen from './assets/work_logo/PasswordGenerator.png'


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Material UI', logo: materialuiLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'Firebase', logo: firebaseLogo },
      { name: 'PostgreSQL', logo: postgreLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'JavaScript', logo: javascriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
      { name: 'Figma', logo: figmaLogo },
    ],
  },
];

  export const experiences = [
    {
      id: 0,
      img: webverseLogo,
      role: "Fullstack Developer",
      company: "Webverse Digital",
      date: "April 2024 - Present",
      desc: "Developed dynamic and scalable web applications using the MERN stack, handling both frontend and backend development. Collaborated with cross-functional teams to build responsive UI, implement RESTful APIs, and optimize application performance in an agile environment.",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React JS",
        "TypeScript",
        "Node JS",
        "Tailwind CSS",
        "MongoDb",
        "Redux",
        " Next Js",
      ],
    },
    {
      id: 1,
      img: agcLogo,
      role: "Fullstack Engineer",
      company: "Agumentik Group of Companies",
      date: "July 2023 - March 2024",
      desc: "Contributed to innovative projects as a Fullstack Engineer, leading both frontend and backend development using technologies such as HTML, CSS, JavaScript, PHP, SQL, Bootstrap, and ReactJS. Worked closely with the team to deliver responsive, high-performance web applications and improve user experience through seamless integration of various technologies.",
      skills: [
        "ReactJS",
        "Redux",
        "JavaScript",
        "Tailwind CSS",
        "HTML",
        "CSS",
        "SQL",
      ],
    },
    {
      id: 2,
      img: newtonschoolLogo,
      role: "Frontend Intern",
      company: "Newton School",
      date: "September 2021 - August 2022",
      desc: "Worked as a Frontend Developer Intern, designing and implementing scalable UI components and responsive websites using HTML, CSS, JavaScript, Bootstrap, and Material UI. Collaborated with the design team to translate wireframes and prototypes from Figma into interactive, user-friendly web pages.",
      skills: [
        "HTML",
        "CSS",
        "Javascript",
        "Bootstrap",
        "Figma",
        "Material UI",
      ],
    },
  ];
  
  export const education = [
    {
      id: 0,
      img: glaLogo,
      school: " Baderia Global Institute Of Engineering and Management",
      date: "Sept 2023 - July 2027",
      grade: "7.81 CGPA",
      desc: "I have completed my Bachelors of Technology in Computer Science Engineering from Baderia Global Institute of Engineering and Management, Jabalpur. During my time at Global, I gained a strong foundation in programming, software development, and computer science principles. I have studied courses such as Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Web Development, and Software Engineering. I actively participated in various workshops and technical events, which enhanced my skills and knowledge. My experience at RGPV University has been instrumental in shaping my technical abilities and professional growth.",
      degree: "Bachelors of Technology - CSE",
    },
    {
      id: 1,
      img: bsaLogo,
      school: "Sindhu Collage - 12th",
      date: "Jan 2021 - Mar 2022",
      grade: "73.2%",
      desc: "I completed my General Science degree from Sindhu College, Nagpur. Throughout my studies, I was immersed in a variety of subjects that deepened my understanding of maths and technology. From exploring some subject.",
      degree: "General Science with Maths & Biology",
    },
    {
      id: 2,
      img: vpsLogo,
      school: "Shri Sai Parnath High Englis School, Nagpur",
      date: "Apr 2017 - March 2018",
      grade: "65%",
      desc: "I completed my class 10 education from Shri Sai Parnath English High School, Nagpur, under the Maharashtra State board.",
      degree: "Maharashtra State Board",
    },
    // {
    //   id: 3,
    //   img: vpsLogo,
    //   school: "Vatsalya Public School Govardhan, Mathura",
    //   date: "Apr 2015 - March 2016",
    //   grade: "87.5%",
    //   desc: "I completed my class 10 education from Vatsalya Public School, Govardhan, under the CBSE board, where I studied Science with Computer.",
    //   degree: "CBSE(X), Science with Computer Application",
    // },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "Document Manager",
      description:
        "The Document Manager Frontend is a responsive and user-friendly web application interface that enables users to upload, view, organize, and manage digital documents efficiently. Designed with usability and performance in mind, this frontend serves as the gateway for interacting with a backend document storage and retrieval system.",
      image: npmLogo,
      tags: ["React JS", "Tailwind CSS", "JavaScript"],
      github: "https://github.com/Tech-Lksh/Document-Manager",
      webapp: "https://document-manager-sooty.vercel.app/",
    },
    {
      id: 1,
      title: "Modern-Blog-Website",
      description:
        "A modern blog website is a dynamic, interactive platform that goes far beyond traditional blogging to create engaging digital experiences. Today's blogs serve as content hubs, community centers, and personal/brand storytelling platforms.",
      image: blog,
      tags: ["Html", "JavaScript", "CSS"],
      github: "https://github.com/Tech-Lksh/Modern-Blog-Website",
      webapp: "https://tech-lksh.github.io/Modern-Blog-Website/",
    },
    {
      id: 2,
      title: "Password Generator",
      description:
        "The Password Generator App is a secure and user-friendly tool built with React Hooks and TailwindCSS. It allows users to generate strong and customizable passwords instantly by adjusting the length (6–100 characters) and choosing whether to include numbers and special characters. The app provides a simple and clean interface with real-time password updates and a one-click copy-to-clipboard feature. Designed with modern React practices like useState, useEffect, useCallback, and useRef, this project showcases both functionality and performance along with a responsive, professional UI.",
      image: passwordGen,
      tags: ["React js"],
      github: "https://github.com/Tech-Lksh/PassWord-Genrator-",
      webapp: "https://pass-word-genrator.vercel.app/",
    },
    {
      id: 3,
      title: "E-Commerce Website",
      description:
        "Designed and developed a E-commerce website with a user-friendly interface, and seamless product management. Ensured a responsive and mobile-friendly design for a better user experience.  Implemented key features such as product, shopping cart, about, contact, footer section, social media links and customer authentication.",
      image: githubdetLogo,
      tags: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/Tech-Lksh/Padhiii-s-E-commers-Website",
      webapp: "https://tech-lksh.github.io/Padhiii-s-E-commers-Website/",
    },
    {
      id: 4,
      title: "Weather App",
      description:
        "Designed and developed a Weather App with a user-friendly interface, and seamless product management.Implemented key features such as customer authentication from real-time weather updates. Long-term technologies such as (tech stack of mention, e.g., HTML, CSS, JavaScript, API) to build a scalable and efficient platform showing current temperature, humidity, wind speed and visibility. Feels-like temperature and weather conditions (sunny, rainy, snowy, etc.)",
      image: csprepLogo,
      tags: ["HTML", "CSS", "JavaScript", "API"],
      github: "https://github.com/Tech-Lksh/Weather-App",
      webapp: "https://tech-lksh.github.io/Weather-App/",
    },
    {
      id: 5,
      title: "Book-My-Show",
      description:
        "The BookMyShow Clone is a full-stack web application that replicates the core functionality of the popular online movie ticket booking platform – BookMyShow. This application allows users to browse movies, view details, select show timings, and book tickets in a seamless and interactive interface.",
      image: movierecLogo,
      tags: ["React Js", "CSS", "Node js", "Express Js", "MongoDB"],
      github: "https://github.com/Tech-Lksh/Book-My-Show-Project",
      webapp: "https://book-my-show-project-tau.vercel.app/",
    },
    {
      id: 5,
      title: "Employee-Management-System",
      description:
        "The Employee Management System is a web-based application designed to streamline the interaction between administrators and employees. It provides a simple and efficient way to manage employee data and assign, track, and complete tasks.",
      image: movierecLogo,
      tags: ["React Js", "Tailwind CSS", "React-Router-DOM", "LocalStorage"],
      github: "https://github.com/Tech-Lksh/Employee-Management-System",
      webapp: "https://employee-management-system-bice-one.vercel.app/",
    },
  ];  
