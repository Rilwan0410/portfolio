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

export default function Projects() {
  const projects = [
    {
      title: "Video Game Discovery App",
      technologies: ["React", "React Router", "Tailwind Css"],
      imageSrc: videoGameAppScreenshot,
      description: "This is an Game application built using react",
      liveSite: "https://video-game-discovery-app-nu.vercel.app/",
      gitRepo: "https://github.com/Rilwan0410/video-game-discovery-app",
    },
  ];
  return (
    <div style={{ marginTop: "150px" }}>
      <Heading style={{ fontFamily: "Montserrat" }} mb="5" size="5xl">
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
              <Image src={videoGameAppScreenshot} />
            </div>
            <Card.Body>
              <Card.Title>{project.title}</Card.Title>
              <Card.Description>{project.description}</Card.Description>
              <div
                className="flex gap-3 justify-center"
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
              <a href={project.liveSite} target="_blank">
                <Button variant="surface" p="2">
                  Live Site
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
