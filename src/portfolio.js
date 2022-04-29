/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Kishor Reddy ",
  title: "Hi all, I'm Kishor",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 having an experience of building Web and Mobile applications with JavaScript / Reactjs / Nodejs / React Native and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/181o-wSJod3q4DpRzVmFoczVBQAwpWYDJ/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/KishorReddy524",
  linkedin: "https://www.linkedin.com/in/kishor-reddy/",
  gmail: "kishorreddycmasai@gmail.com",
  // facebook: "https://www.facebook.com/people/Mukesh-Kumar/100010327233253/",
  // instagram: "https://www.instagram.com/iammukundha/",
  // twitter: "https://twitter.com/MUKUNDAK15?t=sPZKpRyb_b2ygmXuAN4-sA&s=09",
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    )
  ],

  softwareSkills: [
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
    }
    // {
    //   skillName: "firebase",
    //   fontAwesomeClassname: "fas fa-fire"
    // },
    // {
    //   skillName: "python",
    //   fontAwesomeClassname: "fab fa-python"
    // },
    // {
    //   skillName: "docker",
    //   fontAwesomeClassname: "fab fa-docker"
    // }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Masai School",
      logo: require("./assets/images/masai.358f8f1f.jpeg"),
      subHeader: "MERN STACK",
      duration: "NOVEMBER 2021 - JULY 2022",
      desc: "Learned MERN stack And DATA STRUCTURES ALGORITHM",
      descBullets: ["Solved more than 600+ DSA problems"]
    },
    {
      schoolName: "AMC ENGINEERING COLLEGE",
      logo: require("./assets/images/AMCCOLLEGELOGO.png"),
      subHeader: "Bachlor Of Engineering in Electronics And Communications",
      //duration: "September 2017 - April 2019",
      desc:
        "Participated in the research of Embedded system and published 2 papers.",
      descBullets: [
        "Took courses about Software Engineering, ",
        "Web Security, Operating Systems, "
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "85%"
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
  display: false, //Set it to true to show workExperiences Section
  experience: []
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "false", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",

  subtitle: "SOME PROJECTS THAT I TRIED TO CLONE AND CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/bestBuy.comLogo.png"),
      projectName: "BEST BUY.COM CLONE",
      projectDesc:
        "A web application to provide the online store for shopping electronics gadgets all over the country ",
      footerLink: [
        {
          name: "Visit Github",
          url: "https://github.com/KishorReddy524/bestbuy.com.git"
        },
        {
          name: "Website Demo",
          url: "https://bestbuy-clone-website.netlify.app/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/upGradeLogo.png"),
      projectName: "UPGRADE CLONE",
      projectDesc:
        "An online higher education platform providing industry-relevant programs designed and delivered in collaboration with world-class",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://github.com/KishorReddy524/UpGradeBackEnd.git"
        },
        {
          name: "Website Demo",
          url: "https://bestbuy-clone-website.netlify.app/"
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
      title: "introduction to data science using python",
      subtitle:
        "Completed Certifcation from coursera for Introduction to data science using python",
      image: require("./assets/images/python.jpg"),
      footerLink: [
        {
          name: "Certification",
          url:
            "https://drive.google.com/file/d/1DsE2m7ThOJRm5FEckLinfdbpxBmcMmO8/view?usp=sharing"
        }
        /* {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }*/
      ]
    }
  ],
  display: false
  // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url:
        "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or want to hire me  or just want to say hi? My Inbox is open for all.",
  number: "+91-9113205485",
  email_address: "kishorreddycmasai@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails
};
