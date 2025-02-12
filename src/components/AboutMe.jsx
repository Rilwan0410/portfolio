import { Heading, Text, Card} from "@chakra-ui/react";

export default function AboutMe() {
  return (
    <Card.Root mt='10'>
        <Card.Body>
            <div className="about-me">
              <Heading size="7xl">Rilwan Etti</Heading>
              <Heading size="3xl" fontWeight={"normal"} className="text-cyan-500">
                Full Stack Developer
              </Heading>
              <Text mt="3" style={{ lineHeight: "35px" }} fontSize="lg">
                {" "}
                My Name is Rilwan Etti and I am a{" "}
                <span style={{ fontWeight: "bold" }}>
                  Full Stack Web Developer
                </span>{" "}
                Based in{" "}
                <span style={{ fontWeight: "bold" }}>Pembroke Pines Florida</span>. My
                passion for Web Development sparked in 2022 when I took a leap and
                decided to step into this unfamiliar field that I had no prior skillset
                in. Although I had no prior experience with coding or anything really
                computer related, I always loved the thought of being handy with
                computers. As I started to grow in my understanding for software
                engineering, my passion and interest for it grew much larger. I
                genuinely love the problem solving aspect of this career field, and the
                fact that you have to keep learning and staying sharp in order to thrive
                and continue to grow. I have graduated from a Full-Stack Bootcamp From
                the <span style={{ fontWeight: "bold" }}>University Of Miami</span>.
              </Text>
            </div>
        </Card.Body>
    </Card.Root>
  );
}
