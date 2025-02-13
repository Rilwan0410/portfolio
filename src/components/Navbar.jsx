import React from "react";
import { Icon, Text, Image } from "@chakra-ui/react";
import { FaCode } from "react-icons/fa";
import { Switch } from "../components/ui/switch";
import {
  ColorModeButton,
  DarkMode,
  LightMode,
  useColorMode,
  useColorModeValue,
} from "../components/ui/color-mode";
export default function Navbar() {
  const { setColorMode, colorMode } = useColorMode();

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
      <div className="flex gap-4 lg:gap-30">
        <Switch
          checked={colorMode === "light"}
          onCheckedChange={() =>
            setColorMode(colorMode === "light" ? "dark" : "light")
          }
        >
          {" "}
          <span className=" hidden md:inline pl-4">
            {colorMode === "dark" ? "Light Mode" : "Dark Mode"}
          </span>
        </Switch>
        <ul className="flex gap-4" style={{ paddingInline: "10px" }}>
          <li className="hover:underline">
            <a href="#About">About</a>
          </li>
          <li className="hover:underline">
            <a href="#Projects">Projects</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
