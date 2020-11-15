
/* Change this file to get your personal Portfolio */

// Your Summary And Greeting Section

import emoji from "react-easy-emoji";

const githubRepoName = "/portfolio-react";

const greeting = {
  /* Your Summary And Greeting Section */
  username: "Jonas Bellemans",
  title: "Hi i'm ‘Jonas Bellemans’",
  introduction: emoji("A passionate Software Developer 🚀 having an experience of building web, mobile and desktop applications."),
  resumeLink: "https://jonas-bellemans.github.io/portfolio/CV/CV_A4.pdf"
};

// Your Social Media Links: none
const socialMediaLinks = {

};

// Your Skills Section
const skillsSection = {
  title: "What i do",
  subTitle: "FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji("⚡ Develop highly interactive front-end (user interfaces) for web, mobile and desktop applications"),
    emoji("⚡ Develop back-end API's"),
    emoji("⚡ Integration of third party services such as Firebase, external API's, ..."),
    emoji("⚡ Custom integration with existing software"),
  ],

  /* Make Sure You include correct Font Awesome Classname to view your icon
  https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "HTML5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "CSS3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "Angular",
      fontAwesomeClassname: "fab fa-angular"
    },
    {
      skillName: "Vue.JS",
      fontAwesomeClassname: "fab fa-vuejs"
    },
    {
      skillName: "MS-SQL database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "Firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "Android",
      fontAwesomeClassname: "fab fa-android"
    },
    {
      skillName: "Flutter",
      fontAwesomeClassname: "/",
      imagePath: require("./assets/images/flutterLogo.png")
    },
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: ".NET Core",
      fontAwesomeClassname: "/",
      imagePath: require("./assets/images/netCoreLogo.png"),
    }
  ]
};

// Your education background

const educationInfo = {
  viewEducation: true, // Set it to true to see education section
  schools: [
    {
      schoolName: "UGent University - campus Schoonmeersen",
      logo: require("./assets/images/UGentLogo.png"),
      subHeader: "Master of Science in de industriële wetenschappen: Elektronica-ICT - afstudeerrichting ICT",
      duration: "2016-2018",
    },
    {
      schoolName: "UGent University - campus Schoonmeersen",
      logo: require("./assets/images/UGentLogo.png"),
      subHeader: "Bachelor of Science in de industriële wetenschappen: Elektronica-ICT",
      duration: "2013-2017",
    },
    {
      schoolName: "VKO - Opwijk",
      logo: require("./assets/images/vkoLogo.png"),
      subHeader: "Wetenschappen-Wiskunde",
      duration: "2007-2012",
    }
  ]
}

// Your top N proficient stacks/tech experience
const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Backend (.NET/.NET Core)",
      progressPercentage: "85%"
    },
    {
      Stack: "Integration 3th party services: REST API (json), SOAP (xml), ...",
      progressPercentage: "75%"
    },
    {
      Stack: "Front-end (web): HTML, CSS, JS (Angular, Vue), Razor",
      progressPercentage: "60%"
    },
    {
      Stack: "Business (statistics) visualisations/reports: SQL, Python",
      progressPercentage: "55%"
    },
    {
      Stack: "Mobile app dev: Android, Flutter",
      progressPercentage: "50%"
    },
  ]
};


// Your top 3 work experiences

const workExperiences = {
  viewExperiences: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Full-stack developer",
      company: "SData NV (Dendermonde)",
      companylogo: require("./assets/images/sdataLogoIcon.png"),
      date: "October 2018 – Present",
      desc: `
        SData NV is small company that exists of a team of 3 people (including me). This allows SData to work together very closely with the customer. 
        This means there are no intermediate steps, all communication is directly from customer to developer.
        Every project you’re assigned to, you’re completely responsible from start to finish. 
      `,
      descBullets: [
        "front-end (mostly web: Razor, Vue.js, …)",
        "back-end (C# .NET Core)",
        "database: creation, maintenance, migrations (SQL server)",
        "dev-ops: custom local deploy script, github actions, manual FTP deploying",
        "first-line support (mail, Teams, Google Meet, …)",
      ]
    },
    {
      role: "Android developer (job student)",
      company: "Besocoft (Temse)",
      companylogo: require("./assets/images/becosoftLogoIcon.png"),
      date: "2  july 2018 – 30 july 2018",
      desc: `
        I was hired as jobstudent to finish their Android app. Originally the android app was outsourced to India. 
        The resulting app looked fine from the outside but behind the scenes alot of “magical tricks” happened. 
        The app contained some severe bugs (resulting into crashing the app). 
      `,
      descBullets: [
        "Added features: dashboard, barcode scanner, order history...",
        "Enhance UI",
        "Bugfixing",
        "Rewrite code blocks/files to clean and readable code",
      ]
    },
    {
      role: "Assembly line (job student)",
      company: "Barry callebaut",
      companylogo: require("./assets/images/BarryCallebautLogoIcon.jpg"),
      date: "15/07/2014 – 25/07/2014",
      desc: `
        Mainly assembly line worker. Due education as ‘industrial engineer’, 
        i got the opportunity to have a closer look at the maintenance of machines and robots.
      `
    },
  ]
};


// Work projects

const workProjectsSection = {

  title: "Work projects",
  subtitle: "With Love for Developing cool stuff. I love to write and teach others what I have learnt.",

  projects: [
    {
      title: "Car dealer: view available second hand cars",   // Main title
      link: "/work-projects/renault-dab-dendermonde",         // Link to post
      company: "Renault DAB Dendermonde",
      description: `
        Integration Carflow manager API into existing wordpress (<a href="https://www.renaultdab.be/occasies-stock/">website</a>). <br/> 
        Allows users to view all the second hand cars from a car dealer.
      `,
      labels: ["WordPress, PHP, JS, CSS, HTML"]
    },
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */
const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "Jonas-Bellemans", // Change to your github username to view your profile in Contact Section.
  showGithubProfile :"true" // Set true or false to show Contact profile using Github, defaults to false
};


// Some Big Projects You have worked with your company

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      link: "http://saayahealth.com/"
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      link: "http://nextu.se/"
    }
  ]
};

// Your Achievement Section Include Your Certification Talks and More

const achievementSection = {

  title: emoji("Achievements And Certifications 🏆 "),
  subtitle: "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achivementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle: "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      footerLink: [
        { name: "Certification", url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing" },
        { name: "Award Letter", url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing" },
        { name: "Google Code-in Blog", url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html" }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle: "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      footerLink: [{ name: "View Google Assistant Action", url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en" }]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      footerLink: [
        { name: "Certification", url: "" },
        { name: "Final Project", url: "https://pakistan-olx-1.firebaseapp.com/" }
      ]
    }
  ]
};

// Blogs Section

const blogSection = {

  title: "Blogs",
  subtitle: "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description: "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description: "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ]
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji("I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ]
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: ["https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"]
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+92-3243454077",
  email_address: "saadpasta70@gmail.com"
};

//Twitter Section

const twitterDetails = {

  userName : "twitter"//Replace "twitter" with your twitter username without @

};


// Allow other files to import these variables
export { 
  githubRepoName,
  greeting, socialMediaLinks, skillsSection, educationInfo, techStack, 
  workExperiences, openSource, bigProjects, achievementSection, blogSection, 
  talkSection, podcastSection, contactInfo , twitterDetails
};
