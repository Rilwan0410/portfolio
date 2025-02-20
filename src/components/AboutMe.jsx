import { Heading, Text, Card, Icon, HStack, Image } from "@chakra-ui/react";

import React from "react";
import htmlLogo from "../assets/svg/html-logo.svg";
import javascriptLogo from "../assets/svg/javascript-logo.svg";
import expressLogo from "../assets/svg/expressjs.svg";
import cssLogo from "../assets/svg/css-logo.svg";
import reactLogo from "../assets/svg/react.svg";
import nodeLogo from "../assets/svg/nodejs.svg";
import mongoLogo from "../assets/svg/mongodb.svg";
import mysqlLogo from "../assets/svg/mysql.svg";
import jqueryLogo from "../assets/svg/jquery.svg";
import tailwindLogo from "../assets/svg/tailwindcss.svg";
import sassLogo from "../assets/svg/sass.svg";
import handlebarsLogo from "../assets/svg/handlebarsjs.svg";
import gitLogo from "../assets/svg/git-logo.svg";
import nextJsLogo from "../assets/svg/next-js.svg";
import reduxLogo from "../assets/svg/redux.svg";
import githubLogo from "../assets/svg/github.svg";
import UMCert from "../assets/img/um-bootcamp-cert.png";

export default function AboutMe() {
  return (
    <div id="About">
      <div className="about-me">
        <Heading size={{ sm: "2xl", md: "5xl", lg: "7xl" }}>
          Rilwan Etti
        </Heading>
        <Heading
          size={{ md: "3xl" }}
          fontWeight={"normal"}
          style={{ paddingBottom: "10px" }}
          className="text-cyan-500"
        >
          Full Stack Developer
        </Heading>
        <Text mt="3" style={{ lineHeight: "35px" }} fontSize={{ md: "lg" }}>
          {" "}
          My name is Rilwan Etti and I am a{" "}
          <span style={{ fontWeight: "bold" }}>
            Full Stack Web Developer
          </span>{" "}
          based in{" "}
          <span style={{ fontWeight: "bold" }}>Pembroke Pines Florida</span>. My
          passion for Web Development sparked in 2022 when I took a leap and
          decided to step into this unfamiliar field that I had no prior
          skillset in. Although I had no prior experience with coding or
          anything really computer related, I always loved the thought of being
          handy with computers. As I started to grow in my understanding for
          software engineering, my passion and interest for it grew much larger.
          I genuinely love the problem solving aspect of this career field, and
          the fact that you have to keep learning and staying sharp in order to
          thrive and continue to grow. I have graduated from a Full-Stack
          Bootcamp From the{" "}
          <span style={{ fontWeight: "bold" }}>
            <a href={UMCert} target="_blank">
              University Of Miami
            </a>
          </span>
          .
        </Text>
      </div>

      <HStack gap="5" pl="5" align={"center"} wrap={"wrap"}>
        <Image height="50px" src={htmlLogo} />
        <Image height="50px" src={cssLogo} />
        <Image height="35px" src={javascriptLogo} />
        <Image height="40px" src={reactLogo} />
        <Image height="40px" src={nextJsLogo} />
        <Image height="40px" src={reduxLogo} />
        <Image height="50px" src={nodeLogo} />
        <Image height="50px" src={expressLogo} />
        <Image height="50px" src={gitLogo} />
        <Image height="50px" src={githubLogo} />
        <Image height="50px" src={tailwindLogo} />
        <Image height="50px" src={sassLogo} />
        <Image height="50px" src={mysqlLogo} />
        <Image height="50px" src={mongoLogo} />
      </HStack>
    </div>
  );
}
