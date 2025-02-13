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
import issueTrackerScreenshot from "../assets/img/issue-tracker.png"
import HBOCloneScreenshot from "../assets/img/hbo-clone.png";
import CLIEmployeeTrackerScreenshot from "../assets/img/cli-employee-tracker.png";
import { useState } from "react";

export default function Projects() {
  const [collapse, setCollapse] = useState(false);
  const projects = [
    {
      title: "Video Game Discovery App",
      technologies: ["React", "React Router", "Chakra UI", "Tailwind CSS"],
      imageSrc: videoGameAppScreenshot,
      description: "This is an Game application built using react",
      liveSite: "https://video-game-discovery-app-nu.vercel.app/",
      videoURL: "",
      gitRepo: "https://github.com/Rilwan0410/video-game-discovery-app",
    },
    {
      title: "Issue Tracker",
      technologies: ["NextJS", "Radix UI", "Prisma", "Tailwind CSS",],
      imageSrc: issueTrackerScreenshot,
      description:
        "This is an issue tracker application that allows you to create issues",
      liveSite: "",
      videoURL: "",
      gitRepo: "https://github.com/Rilwan0410/issue_tracker",
      
    },
    {
      title: "HBO Clone",
      technologies: ["NextJS", "React", "Tailwind CSS"],
      imageSrc: HBOCloneScreenshot,
      description: "This is clone of the popular App HBO",
      liveSite: "https://re-hboclone.netlify.app/create",
      videoURL: "",
      gitRepo: "https://github.com/Rilwan0410/HBO_CLONE",
    },
    {
      title: "CLI Employee Tracker",
      technologies: ["JavaScript", "Node JS", "MySQL"],
      imageSrc: CLIEmployeeTrackerScreenshot,
      description:
        "This is a Node JS application that allows you to create a database for employee information regarding the the name of the employee, their managers, the departments, salary and more. This app was created using inquirer to promot questions in the cli, as well as MySQL to query to a database to save and persist all of the data.",
      liveSite: "",
      videoURL: "https://watch.screencastify.com/v/zrqiK8EbHtwFVm4KKHPY",
      gitRepo: "https://github.com/Rilwan0410/cli-employee-tracker",
    },
  ];
  return (
    <div style={{ marginTop: "150px" }} id='Projects'>
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
            style={{ paddingTop: "20px", paddingBottom: "20px" }}
            p="2"
          >
            <div style={{ padding: "5px" }}>
              <Image src={project.imageSrc} />
            </div>
            <Card.Body>
              <Card.Title>{project.title}</Card.Title>
              <Card.Description>
                {project.description.length > 100 && collapse === false
                  ? `${project.description.substring(0, 100)}...`
                  : project.description}
                {project.description.length > 100 && (
                  <Button
                    size="2xs"
                    onClick={() => setCollapse(!collapse)}
                    variant="subtle"
                  >
                    {collapse === false ? "Read More" : "Read Less"}
                  </Button>
                )}
              </Card.Description>
              <div
                className="flex flex-wrap gap-3 "
                style={{ padding: "20px 0" }}
              >
                {project.technologies.map((tech) => (
                  <Badge
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
