import React from "react";
import { Flex, Button, Image } from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa";
import { cblogo } from "../assets";

const NavBar = () => {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      paddingX="1rem"
      paddingY={"0.5rem"}
      background="white"
      color="white"
    >
      {/* Logo on the left */}
      <Image src={cblogo} alt="Logo" h="40px" />

      {/* GitHub button on the right */}
      <Button
        bg="gray.700" // Set your desired button background color
        color="white"
        backgroundColor={"#333333"}
        border={0}
        leftIcon={<FaGithub />}
        _hover={{
          bg: "black",
          cursor: "pointer",
        }}
        fontSize={"1.2rem"}
        rounded={"9999px"}
        paddingX={30}
        paddingY={6}
        onClick={() =>
          window.open("https://github.com/MohamedElalami100", "_blank")
        }
      >
        GitHub
      </Button>
    </Flex>
  );
};

export default NavBar;
