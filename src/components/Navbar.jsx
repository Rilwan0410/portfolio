import React from "react";
import { Icon, Text, Image } from "@chakra-ui/react";
import { FaCode } from "react-icons/fa";
;

export default function Navbar() {
  return (
    <nav className="bg-cyan-700 fixed top-0  justify-between right-0 left-0 z-10 flex items-center navbar">
      <div className="flex items-center gap-2 ">
        <Text className="inline" fontSize="xl">
          Rilwan
        </Text>
        <Icon size="lg">
          <FaCode />
        </Icon>
      </div>
      <div>
        <ul className="flex gap-4" style={{paddingInline:'10px'}}> 
            <li className="hover:underline transition-all duration-1000 ease-in-out"><a href="#About">About</a></li>
            <li className="hover:underline transition-all duration-1000 ease-in-out"><a href="#Projects">Projects</a></li>
        </ul>
      </div>
    </nav>
  );
}
