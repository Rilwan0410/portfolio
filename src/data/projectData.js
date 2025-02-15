import videoGameAppScreenshot from "../assets/img/video-game-discovery-app.png";
import issueTrackerScreenshot from "../assets/img/issue-tracker.png";
import HBOCloneScreenshot from "../assets/img/hbo-clone.png";
import CLIEmployeeTrackerScreenshot from "../assets/img/cli-employee-tracker.png";
import personalPortfolioScreenshot from "../assets/img/personal-portfolio.png";



export default [
  {
    id: 1,
    title: "Video Game Discovery App",
    collapse: false,
    technologies: ["React", "React Router", "Chakra UI", "Tailwind CSS"],
    imageSrc: videoGameAppScreenshot,
    description:
      "This is an Game application built using React, React Router, using Chakra UI and Tailwind CSS. This app allows you to look and find valuable information about any game you can think about. Using the Rawg API database, there are over 800,000 video games that you can filter through and find out information about multiple games as well as the platforms they are available for and more.",
    liveSite: "https://video-game-discovery-app-nu.vercel.app/",
    videoURL: "",
    gitRepo: "https://github.com/Rilwan0410/video-game-discovery-app",
  },
  {
    id: 2,
    title: "Issue Tracker",
    collapse: false,
    technologies: [
      "NextJS",
      "Radix UI",
      "Prisma",
      "Tailwind CSS",
      "MySQL",
      "CRUD",
    ],
    imageSrc: issueTrackerScreenshot,
    description:
      "This is an issue tracker application that allows you to Create, Edit, Update and Delete issues. This application was built from using NextJS, NextAuth for authentication, Prisma as the ORM, MySQL for the database, tailwind for the styling, as well as Radix for the front-end component library. This app connects to an external database and saves user information, regarding issues, and their login information.",
    liveSite: "",
    videoURL: "",
    gitRepo: "https://github.com/Rilwan0410/issue_tracker",
  },
  {
    id: 3,
    title: "HBO Clone",
    collapse: false,
    technologies: ["NextJS", "React", "Tailwind CSS"],
    imageSrc: HBOCloneScreenshot,
    description:
      "This is clone of the popular App HBO, built using NextJS, React and Tailwind CSS. This is one of the first projects I built using NextJS and it taught me a lot about the framework. This application allows you to look up movies and access a thirdy-party API from the movieDB. There are countless movies to search from, and with each movie search, you will have access to valuable information such, as the cast of the movie, the starring roles, of the movies and more.",
    liveSite: "https://re-hboclone.netlify.app/create",
    videoURL: "",
    gitRepo: "https://github.com/Rilwan0410/HBO_CLONE",
  },
  {
    id: 4,
    title: "CLI Employee Tracker",
    collapse: false,
    technologies: ["JavaScript", "Node JS", "MySQL", "CRUD"],
    imageSrc: CLIEmployeeTrackerScreenshot,
    description:
      "This is a Node JS application that allows you to create a database for employee information regarding the the name of the employee, their managers, the departments, salary and more. This app was created using inquirer to promot questions in the cli, as well as MySQL to query to a database to save and persist all of the data.",
    liveSite: "",
    videoURL: "https://watch.screencastify.com/v/zrqiK8EbHtwFVm4KKHPY",
    gitRepo: "https://github.com/Rilwan0410/cli-employee-tracker",
  },
  {
    id: 5,
    title: "Personal Portfolio",
    collapse: false,
    technologies: ["React", "Tailwind CSS", "Chakra UI"],
    imageSrc: personalPortfolioScreenshot,
    description:
      "This is project is my personal portfolio built using, React, Tailwind CSS and Chakra UI, This application utilizes dark mode and light mode for viewers personal preferences. I plan to continue to make gradual improvements to this portfolio overtime including adding routing for a page dedicated to more information about the projects.",
    liveSite: "/",
    videoURL: "",
    gitRepo: "https://github.com/Rilwan0410/portfolio",
  },
];


