import {
  Card,
  SimpleGrid,
  Heading,
  Image,
  Button,
  Badge,
  HStack,
} from "@chakra-ui/react";
import videoGameAppScreenshot from "../assets/img/video-game-discovery-app.png";
import issueTrackerScreenshot from "../assets/img/issue-tracker.png";
import HBOCloneScreenshot from "../assets/img/hbo-clone.png";
import CLIEmployeeTrackerScreenshot from "../assets/img/cli-employee-tracker.png";
import { useState } from "react";

export default function Projects() {
  const projectsObj = [
    {
      id: 1,
      title: "Video Game Discovery App",
      collapse: false,
      technologies: ["React", "React Router", "Chakra UI", "Tailwind CSS"],
      imageSrc: videoGameAppScreenshot,
      description:
        "This is an Game application built using React, React Router, using Chakra UI and Tailwind CSS. This app allows you to look and find valuable information about any game you can think about. Using the Rawg database, there are over 800,000 video games that you can filter through and find out information about multiple games as well as the platforms they are available for and more.",
      liveSite: "https://video-game-discovery-app-nu.vercel.app/",
      videoURL: "",
      gitRepo: "https://github.com/Rilwan0410/video-game-discovery-app",
    },
    {
      id: 2,
      title: "Issue Tracker",
      collapse: false,
      technologies: ["NextJS", "Radix UI", "Prisma", "Tailwind CSS"],
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
        "This is clone of the popular App HBO built using, NextJS, React and Tailwind CSS. This is one of the first projects I built using NextJS and it taught me alot about the framework. This application allows you to look up movies and access a thirdy-party API from the movieDB. There are countless movies to search from, and with each movie search, you will have access to valuable information such, as the cast of the movie, the starring roles, of the movies and more.",
      liveSite: "https://re-hboclone.netlify.app/create",
      videoURL: "",
      gitRepo: "https://github.com/Rilwan0410/HBO_CLONE",
    },
    {
      id: 4,
      title: "CLI Employee Tracker",
      collapse: false,
      technologies: ["JavaScript", "Node JS", "MySQL"],
      imageSrc: CLIEmployeeTrackerScreenshot,
      description:
        "This is a Node JS application that allows you to create a database for employee information regarding the the name of the employee, their managers, the departments, salary and more. This app was created using inquirer to promot questions in the cli, as well as MySQL to query to a database to save and persist all of the data.",
      liveSite: "",
      videoURL: "https://watch.screencastify.com/v/zrqiK8EbHtwFVm4KKHPY",
      gitRepo: "https://github.com/Rilwan0410/cli-employee-tracker",
    },
  ];
  const [projects, setProjects] = useState(projectsObj);

  const collapseText = (id, val) => {
    let obj = projects.filter((proj) => proj.id === id);

    obj = Object.assign(...obj, { collapse: !val });

    setProjects([...projects]);
  };
  return (
    <div style={{ marginTop: "150px" }} id="Projects">
      <Heading style={{ fontFamily: "Montserrat" }} mb="10" size="5xl">
        Projects
      </Heading>
      <SimpleGrid
        columns={{ sm: "1", md: "2", lg: "3" }}
        justifyContent={"center"}
        gapX={{ md: "9", lg: "" }}
        gapY={"10"}
      >
        {projects.map((project, i) => (
          <Card.Root
            key={i}
            width={{ lg: "370px" }}
            height={`${
              project.description.length > 100 && project.collapse === true
                ? "fit-content"
                : "550px"
            }`}
            style={{ paddingTop: "20px", paddingBottom: "20px" }}
            p="2"
          >
            <div style={{ padding: "5px" }}>
              <Image src={project.imageSrc} />
            </div>
            <Card.Body>
              <Card.Title>{project.title}</Card.Title>
              <Card.Description>
                {project.description.length > 80 && project.collapse === false
                  ? `${project.description.substring(0, 80)}...`
                  : project.description}
                {project.description.length > 100 && (
                  <Button
                    size="2xs"
                    onClick={() => collapseText(project.id, project.collapse)}
                    variant="subtle"
                  >
                    {project.collapse === false ? "Read More" : "Read Less"}
                  </Button>
                )}
              </Card.Description>
              <div
                className="flex flex-wrap gap-3 "
                style={{ padding: "20px 0" }}
              >
                {project.technologies.map((tech, i) => (
                  <Badge
                    key={i}
                    colorPalette={"cyan"}
                    p={"2"}
                    style={{ borderRadius: "10px" }}
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </Card.Body>
            <div
              className="flex gap-4 justify-center"
              style={{ padding: "10px" }}
            >
              <a href={project.liveSite || project.videoURL} target="_blank">
                <Button variant="surface" p="2">
                  {project.videoURL ? "Video Walkthrough" : "Live Site"}
                </Button>
              </a>
              <a href={project.gitRepo} target="_blank">
                <Button variant="surface" p="2">
                  Git Repo
                </Button>
              </a>
            </div>
          </Card.Root>
        ))}
      </SimpleGrid>
    </div>
  );
}
