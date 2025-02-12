import React from "react";
import { Icon, Text } from "@chakra-ui/react";
import { FaCode } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="bg-cyan-700 flex items-center navbar">
      <div className="flex items-center gap-2 ">
        <Text className="inline" fontSize="xl">
          Rilwan
        </Text>
        <Icon size="lg">
          <FaCode />
        </Icon>
      </div>
    </nav>
  );
}
