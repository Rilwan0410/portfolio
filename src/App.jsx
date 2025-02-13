import { Button } from "@chakra-ui/react";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <>
      <AboutMe />
      <Projects />
    </>
  );
}

export default App;
