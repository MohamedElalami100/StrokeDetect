import React from "react";
import { Box, HStack, Icon, Text } from "@chakra-ui/react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <Box
      bg="#333333"
      color="white"
      paddingBottom={40}
      paddingTop={100}
      textAlign="center"
    >
      <HStack spacing={14} justify="center">
        <a
          href="https://github.com/MohamedElalami100"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon as={FaGithub} boxSize={30} color={"white"} />
        </a>
        <a
          href="https://www.linkedin.com/in/mohamed-elalami-005602216/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon as={FaLinkedin} boxSize={30} color={"white"} />
        </a>
      </HStack>
      <Text mt={2}>
        Designed and built with passion by Mohamed Elalami 🚀.
        <br /> Don't forget to connect with me for more information and updates
      </Text>
    </Box>
  );
};

export default Footer;
