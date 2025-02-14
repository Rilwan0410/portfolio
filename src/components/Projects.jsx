import {
  Card,
  SimpleGrid,
  Heading,
  Image,
  Button,
  Badge,
  HStack,
} from "@chakra-ui/react";

import projectData from "../data/projectData";

import { useState } from "react";

export default function Projects() {
  const [projects, setProjects] = useState(projectData);

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
