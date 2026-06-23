import emoji from "react-easy-emoji";
import {
  EducationType,
  ExperienceType,  
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
    "I am a Machine Learning Engineer and currently pursuing an MSc in Artificial Intelligence at De Montfort University Dubai. I am passionate about building intelligent systems that transform data into actionable insights. My experience includes developing end-to-end machine learning applications involving data preprocessing, feature engineering, model training, evaluation, and deployment.",
  resumeLink: "https://drive.google.com/file/d/13CJdFag86FhBb2O0ZoPSu-dDCX1KyVoe/view?usp=sharing",
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
  subTitle: "Transforming raw data into Intelligent systems",
  data: [
    {
      title: "Machine Learning Engineer",
      lottieAnimationFile: "/lottie/skills/ML.json", 
      skills: [
        emoji("⚡ Data Collection, Cleaning, and Feature Engineering"),
        emoji("⚡ Building real world Machine Learning Models"),
        emoji("⚡ Web Scraping and Data Acquisition"),
        emoji("⚡ End-to-End Machine Learning Pipelines"),
        emoji("⚡ Deploy Intelligent Models for Real-World Impact"),
        emoji("⚡ Data Structure and Algorithm using Java")      
        
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
          skillName: "Scikit learn",
          iconifyTag: "devicon:scikitlearn",
        },
        {
          skillName: "Numpy",
          iconifyTag: "devicon:numpy",
        },
        {
          skillName: "Pandas",
          iconifyTag: "devicon:pandas",
        },
        {
          skillName: "AWS",
          iconifyTag: "logos:aws",
        },
        {
          skillName: "Heroku",
          iconifyTag: "logos:heroku-icon",
        },
        {
          skillName: "Github",
          iconifyTag: "akar-icons:github-fill",
        },
        {
          skillName: "Streamlit",
          iconifyTag: "simple-icons:streamlit",
        },
      ],
    },
  ],
};

export const SkillBars: SkillBarsType[] = [
  {
    Stack: "Data Analysis",
    progressPercentage: "90",
  },
  {
    Stack: "Machine Learning", 
    progressPercentage: "85", 
  },
  {
    Stack: "Natural Language Processing",
    progressPercentage: "85",
  },
  {
    Stack: "Model Development",
    progressPercentage: "90",
  },  
  {
    Stack: "DSA",
    progressPercentage: "90",
  }
  
];

export const educationInfo: EducationType[] = [
  {
    schoolName: "De Montfort University",
    subHeader: "Master of Science in Artificial intelligence",
    duration: "Feb 2026 - Feb 2027",
    desc: "",
    grade: "",
    descBullets: [], // Array of Strings
  },
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
  }
  
];

export const experience: ExperienceType[] = [
  {
    role: "Assistant Professor",
    company: "St Joseph's University",
    companyLogo: "/img/icons/common/sjc.png",
    date: "July 2023 - April 2024",
    desc: "",
  },
  {
    role: "Assistant Professor",
    company: "HKBK College of Engineering",
    companyLogo: "/img/icons/common/HKBK-logo.jpg",
    date: "July 2023 - April 2024",
    desc: "",
  },
  {
    role: "Artificial Intelligence Research Assistant",
    company: "St Joseph's University",
    companyLogo: "/img/icons/common/sjc.png",
    date: "July 2023 - April 2024",
    desc: "",
  }, 
  {
    role: "Software Engineer",
    company: "AINQA",
    companyLogo: "/img/icons/common/Ainqa.jpg",
    date: "June 2021 - June 2022",
    desc: ""


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
    name: "Semantic Sentiment Classification",
    desc: "Semantic sentiment classification system using NLP and Machine Learning. Compares BoW, TF-IDF, Word2Vec, and Doc2Vec embeddings with multiple classifiers to understand contextual sentiment in real-world text.",
    link: "",
    github:"https://github.com/jeeva-anand/Semantic-Sentiment-Classification"
  },
  {
    name: "IPL Win Prediction",
    desc: "IPL Win Predictor using Machine Learning and Streamlit. The project performs data preprocessing, feature engineering, model training, and real-time match outcome prediction based on live match conditions.",
    link: "https://what-schatanalysis-hqh3vsmo3ekacakmdewwq8.streamlit.app/",
    github:"https://github.com/jeeva-anand/IPL-Win-Prediction"
  },
  {
    name: "Loan Eligibility Classifier",
    desc: "",
    link: "",
    github:"https://github.com/jeeva-anand/Loan-Eligibility-Classifier"
  },
  {
    name: "WhatsApp Chat Analysis",
    desc: "A data-driven NLP application that transforms raw WhatsApp chat exports into actionable insights using Python and Streamlit. Explore conversation trends, user behavior, emoji patterns, word usage, and communication dynamics through interactive analytics.",
    link: "https://what-schatanalysis-hqh3vsmo3ekacakmdewwq8.streamlit.app/",
    github:"https://github.com/jeeva-anand/WhatsApp-Chat-Analysis"
  },
  {
    name: "Course Recommendation System",
    desc: "A Content based recommendation System that suggests similar courses using Natural Language Processing and cosine similarity on course metadata.",
    link: "https://course-recommendation-system-ia4mbvmbnmpz6tw2ldsx6e.streamlit.app/",
    github:"https://github.com/jeeva-anand/Course-Recommendation-System"
  },
  {
    name: "Mall Customer Segmentation",
    desc: "Customer segmentation system using unsupervised machine learning (K-Means clustering) to group mall customers based on income, age, and spending behavior for targeted marketing strategies.",
    link: "",
    github:"https://github.com/jeeva-anand/Mall-Customer-Segmentation"
  }
];



// See object prototype on /types/section.ts page

export const seoData: SEODataType = {
  title: "Jeeva Anand",
  description: greetings.description,
  author: "Jeeva Anand",
  image: "",
  url: "", // versal url
  keywords: [
    
  ],
};
