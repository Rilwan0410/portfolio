import { Icon, Text } from "@chakra-ui/react";
import React from "react";
import { FaCode, FaMoon, FaSun } from "react-icons/fa";
import { useColorMode } from "../components/ui/color-mode";
import { Switch } from "../components/ui/switch";
export default function Navbar() {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <nav
      className={`${
        colorMode === "dark" ? "bg-cyan-700" : "bg-cyan-400"
      } fixed top-0  justify-between right-0 left-0 z-10 flex items-center navbar`}
    >
      <div className="flex items-center gap-2 ">
        <Text className="inline" fontSize="xl">
          Rilwan
        </Text>
        <Icon size="lg">
          <FaCode />
        </Icon>
      </div>
      <div className="flex gap-4 ">
        <ul className="flex gap-4" style={{ paddingInline: "20px" }}>
          <li className="hover:underline">
            <a href="#About">About</a>
          </li>
          <li className="hover:underline">
            <a href="#Projects">Projects</a>
          </li>
        </ul>
        <div style={{paddingRight:'10px'}}>
            <Switch
              size="md"
              onCheckedChange={toggleColorMode}
              checked={colorMode === "light" ? true : false}
              trackLabel={{
                on: <FaMoon style={{ color: "lightgray" }} />,
                off: <FaSun style={{ color: "gold" }} />,
              }}
            />
        </div>
      </div>
    </nav>
  );
}
