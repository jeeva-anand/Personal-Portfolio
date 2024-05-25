import emoji from "react-easy-emoji";
import {
  EducationType,
  ExperienceType,
  FeedbackType,
  ProjectType,
  SkillsSectionType,
  SkillBarsType,
  SEODataType,
  SocialLinksType,
  GreetingsType,
} from "./types/sections";

export const greetings: GreetingsType = {
  name: "Anand",
  title: "Hi all, I'm Anand",
  description:
    "I'm Anand, a results-driven software engineer with a profound background in " +
    "computer science and a keen interest in cutting-edge technologies. " +
    "I am pursuing a Master's in Computer Science at St. Joseph’s University, Bengaluru. ",
  resumeLink: "#",
};

export const openSource = {
  githubUserName: "jeeva-anand",
};

export const contact = {};

export const socialLinks: SocialLinksType = {
  email: "mailto:jeevaanand932002@gmail.com",
  linkedin: "https://www.linkedin.com/in/jeevaanand/",
  github: "https://github.com/jeeva-anand",
  medium: "https://medium.com/@jeevaanand93002",
  
};

export const skillsSection: SkillsSectionType = {
  title: "What I like to do",
  subTitle: "COMPETITIVE PROGRAMMER WHO WANTS TO EXPLORE EVERY TECH STACK",
  data: [
    {
      title: "Software Developer",
      lottieAnimationFile: "/lottie/skills/simple.json", 
      skills: [
        emoji("⚡ Data Structure and Algorithm using Java"),
        emoji("⚡ Building responsive Single-Page-Apps in React.js"),        
        emoji("⚡ Building real world Machine Learning Models"),
      ],
      softwareSkills: [
        {
          skillName: "Python",
          iconifyTag: "logos:python",
        },
        {
          skillName: "Java",
          iconifyTag: "vscode-icons:file-type-java",
        },
        {
          skillName: "JavaScript",
          iconifyTag: "logos:javascript",
        },
        {
          skillName: "Reactjs",
          iconifyTag: "vscode-icons:file-type-reactjs",
        },
        // {
        //   skillName: "Nextjs",
        //   iconifyTag: "vscode-icons:file-type-light-next",
        // },
        {
          skillName: "AWS",
          iconifyTag: "logos:aws",
        },
        // {
        //   skillName: "Heroku",
        //   iconifyTag: "logos:heroku-icon",
        // },
        {
          skillName: "Github",
          iconifyTag: "akar-icons:github-fill",
        },
        // {
        //   skillName: "Docker",
        //   iconifyTag: "logos:docker-icon",
        // },
      ],
    },
  ],
};

export const SkillBars: SkillBarsType[] = [
  {
    Stack: "Frontend", 
    progressPercentage: "85", 
  },
  {
    Stack: "Backend",
    progressPercentage: "90",
  },
  {
    Stack: "Programming",
    progressPercentage: "95",
  },
  {
    Stack: "DSA",
    progressPercentage: "90",
  },
  {
    Stack: "Data Analysis",
    progressPercentage: "80",
  },
];

export const educationInfo: EducationType[] = [
  {
    schoolName: "St Joseph's University",
    subHeader: "Master of Science in Computer Science",
    duration: "August 2022 - April 2024",
    desc: "",
    grade: "Grade A",
    descBullets: [], // Array of Strings
  },
  {
    schoolName: "Pioneer College",
    subHeader: "Bachelor of Science in Computer Science",
    duration: "June 2018 - May 2021",
    desc: "",
    grade: "Grade A",
    descBullets: [], // Array of Strings
  },
  
];

export const experience: ExperienceType[] = [
  {
    role: "Artificial Intelligence Research Assistant",
    company: "",
    companyLogo: "/img/icons/common/sjc.png",
    date: "July 2023 - April 2024",
    desc: "Specialized in developing and deploying machine learning models for precise classification of human activities based on sensor data. Proficient in analyzing and preprocessing extensive datasets from wearable sensors, such as accelerometers and gyroscopes, to enhance model accuracy. Conducted comprehensive feature extraction and selection to pinpoint the most pertinent features for activity classification. Presented original research findings at the esteemed International Conference on Advances in Intelligent Systems, Cloud Computing, and Security (ICAICS 2024).",
  },
  {
    role: "Postgraduate Research Assistant",
    company: "",
    companyLogo: "/img/icons/common/sjc.png",
    date: "July 2023 - December 2023",
    desc: "Innovated a software solution to streamline timetable creation for the department, enhancing efficiency and productivity. Designed and implemented a user-friendly interface enabling faculty members to input data seamlessly and generate timetables effortlessly. Authored comprehensive documentation encompassing usage guidelines and technical specifications to facilitate user adoption and understanding.",
  }, 
  {
    role: "Backend Developer",
    company: "AINQA",
    companyLogo: "/img/icons/common/Ainqa.jpg",
    date: "June 2021 - June 2022",
    desc: "Experienced in bug fixing within the Spring Boot environment, adept at promptly addressing issues to enhance system performance. Demonstrated leadership in identifying and resolving backend system issues for optimal functionality. Proactively engaged in code reviews to elevate code quality and foster a collaborative development environment. Skilled at collaborating with front-end developers to tackle intricate technical challenges and ensure seamless integration."


  },  
  // {
  //   role: "Full Stack Developer",
  //   company: "",
  //   companyLogo: "/",
  //   date: "",
  //   desc: "",
  //   // descBullets: [
  //   // 	"Lorem ipsum dolor sit amet, consdfgectetur adipiscing elit",
  //   // 	"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  //   // ],
  // },
];




export const projects: ProjectType[] = [
  {
    name: "Portfolio",
    desc: "Developed a personal portfolio for a software engineer using the Next.js framework along with various React libraries and tools. Utilized Next.js for server-side rendering and routing, ensuring fast performance. Utilized Reactstrap for building responsive UI components based on Bootstrap styles. Incorporated React Reveal for adding animations and transitions to elements, enhancing user engagement. Integrated React Lottie for rendering animations in JSON format, providing dynamic visual effects.",
    link: "",
  },
  {
    name: "Time Table generator",
    desc: "I designed a software solution to automate the creation of departmental timetables, developing a user-friendly interface that allows faculty to easily input data and generate schedules. Additionally, I created comprehensive documentation for technical specifications.",
    link: "https://timetable-application.vercel.app/",
  },
  {
    name: "COVID-2022 Tracker",
    desc: "This project provides real-time updates on the status of the coronavirus (Infected, Deaths, and Recovered) for each country. It is a fully functional COVID-22 Tracker application that delivers insights and the latest numbers on the coronavirus. ",
    link: "https://covid-19-d718e.web.app/",
  },
  {
    name: "Netflix Clone ",
    desc: "Crafted a Netflix clone for Android utilizing the Android stack. Engineered the frontend using Java/Kotlin and XML layouts, incorporating Android Jetpack components for seamless navigation and user interaction.Implemented key features such as video streaming, personalized recommendations, user profiles, and offline viewing capabilities, mimicking the functionalities of the original Netflix platform. ",
    github:"https://github.com/jeeva-anand/Android-Projects/tree/main"
  },
  {
    name: "YouTube Clone",
    desc: "Developed a YouTube clone for Android using the Android stack. Engineered the frontend with Java/Kotlin, XML layouts, and Android Jetpack components for a seamless user experience. Leveraged Firebase for backend services such as authentication, real-time database, and cloud storage, ensuring efficient data management and synchronization.  ",
    github:"https://github.com/jeeva-anand/Android-Projects/tree/main/Youtube-Clone"
  },
  {
    name: "What's App Clone",
    desc: "Created a WhatsApp clone for Android using the Android stack.Designed a user-friendly interface following Material Design guidelines, providing a familiar and seamless messaging experience for Android users. ",
    github:"https://github.com/jeeva-anand/Android-Projects/tree/main/Youtube-Clone"
  },
   {
    name: "Machine Learning Models",
    desc: "Linear Regression, a fundamental supervised learning algorithm used for predicting continuous target variables. Naive Bayes classifier, a simple yet powerful probabilistic classifier based on Bayes' theorem with strong independence assumptions between the features. Naive Bayes is often used for text classification tasks, spam filtering, and sentiment analysis.... ",
    github:"https://github.com/jeeva-anand/Machine-Learning-Project"
  },
];


export const seoData: SEODataType = {
  title: "Jeeva Anand",
  description: greetings.description,
  author: "Jeeva Anand",
  image: "",
  url: "", // versal url
  keywords: [
    
  ],
};
