/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/LoadingAnimation.json"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 4000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Vineeth Hamilpur",
  title: "Hey, I'm Vineeth",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 having an experience of building Web applications."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1JQ5MDtWMxeIeSsR2R7zge8azxfzlsKeM/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};


// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/VineethHamilpur590",
  linkedin: "https://www.linkedin.com/in/vineeth-hamilpur-bb5034182/",
  gmail: "vineeth.hamilpur99@gmail.com",
  facebook: "https://www.facebook.com/hamilpur.vineeth/",
  instagram: "https://www.instagram.com/vineeth_hamilpur?igsh=OGQ5ZDc2ODk2ZA%3D%3D&utm_source=qr",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Experienced Software Engineer with a strong foundation in Java, Javascript, Spring Boot, React, and experience in AWS cloud services, I bring 2 years of expertise in end-to-end web development."
    ),
    emoji("⚡ Proficient in Scrum methodologies and establishment of robust CI/CD pipelines using Azure DevOps."),
    emoji(
      "⚡ Committed to innovation and continuous learning."
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "San Jose State University",
      logo: require("./assets/images/SJSULogo.png"),
      subHeader: "Master of Science in Computer Science",
      duration: "August 2022 - May 2024",
      desc: "CGPA: 3.7"
    },
    {
      schoolName: "National Institute of Technology Durgapur",
      logo: require("./assets/images/NIT_Durgapur_Logo.png"),
      subHeader: "Bachelor of Technology in Information Technology",
      duration: "August 2016 - May 2020",
      desc: "CGPA: 3.3",
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "70%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "60%"
    },
    {
      Stack: "Programming",
      progressPercentage: "80%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "Kantar",
      companylogo: require("./assets/images/Logo_kantar.jpg"),
      date: "Feb 2021 – July 2022",
      descBullets: [
        " Developed intuitive marketing data insights dashboard using React.js, enhancing real-time analytics.",
        " Implemented interactive D3.js charts seamlessly and integrated with analytics data, delivering visually compelling insights.",
        " Streamlined project interface by integrating REST APIs enhancing overall system performance and efficiency.",
        " Built a web service layer using Spring Boot to render data from a SQL server, improving data retrieval efficiency.",
        " Designed and implemented A/B testing experiments.",
        " Collaborated with the team to establish a robust CI/CD pipeline using Azure DevOps for depolyment of applications.",
        " Employed Agile methodologies within the team, consistently delivering positive outcomes."
      ]
    },
    {
      role: "Web Developer Intern",
      company: "Team4Progress Technologies",
      companylogo: require("./assets/images/Team4Progress.jpeg"),
      date: "May 2019 – July 2019",
      descBullets: [
        " Collaborated with the development team to design and implement a user-friendly web interface for the automated posting application using HTML, CSS, and React.js.",
        " Integrated with various social media platforms' APIs including Facebook and Twitter to facilitate automated posting.",
        " Implemented user authentication and authorization using JWT (JSON Web Tokens) and API keys to secure user access to the auto posting platform.",
        " Assisted in writing detailed documentation, including API integration guides and user manuals, to facilitate seamless onboarding of new users."
      ]
    },
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Academic Projects",
  subtitle: "Some Projects I've Worked On",
  projects: [
    {
      image: require("./assets/images/CloudApp.png"),
      projectName: "Cloud-based IOT and Smart Meter management System ",
      projectDesc: "This project provides users the ability to manage various IOT devices, view generated bills, and monitor their usage.",
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/VineethHamilpur590/Cloud-based-IOT-and-Smart-Meter-management-System-"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/VitalityFitness.png"),
      projectName: "Vitality Fitness app",
      projectDesc: "Participated in a hackathon to pioneer the Vitality Fitness app, integrating LLM for personalized workout plans, adaptive challenges, and real-time progress tracking.",
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/VineethHamilpur590/Vitality-Fitness-Application"
        }
      ]
    },
    {
      image: require("./assets/images/HealthClub.png"),
      projectName: "Health club Membership Management ",
      projectDesc: " Used React, Spring Boot, MySQL, and AWS services to create a web-based health club application.",
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/VineethHamilpur590/HealthClub-Memebership-Management"
        }
      ]
    },
    {
      image: require("./assets/images/MachineLearningProject.jpg"),
      projectName: "Applying Machine Learning and Crowdsourcing in Utility Management ",
      projectDesc: "Cloud-based automation system designed for non-smart meters, utilizing image recognition techniques, and human-in-the-loop verification framework with continuous retraining.",
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/Smart-meter/smartmeter_appServer"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section


// Talks Sections

const talkSection = {
  title: emoji("Music 🎙️"),
  subtitle: emoji(
    "I Love Listening to Hip Hop Music. Blend with me on Spotify and share your playlist 😅."
  ),

  talks: [
    {
      // title: "Build Actions For Google Assistant",
      // subtitle: "Codelab at GDG DevFest Karachi 2019",
      // slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://open.spotify.com/blend/taste-match/2dc07d92f4c70cb6?si=x8dIv9r4SJia2Jq8BlIVGA&fallback=getapp&blendDecoration=5f9c38d2"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Music 🎙️"),
  subtitle: "I Love Listening to Hip Hop Music. Blend with me on Spotify and share your playlist.",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://open.spotify.com/blend/taste-match/2dc07d92f4c70cb6?si=x8dIv9r4SJia2Jq8BlIVGA&fallback=getapp&blendDecoration=5f9c38d2"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+1-408-690-9235",
  email_address: "vineeth.hamilpur99@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
