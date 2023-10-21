import { Button, Flex, Heading, Image, Stack, Text } from "@chakra-ui/react";
import { stroke } from "../assets";

export default function Hero() {
  const scrollToPredict = () => {
    const predictComponent = document.getElementById(
      "scrollToPredictComponent"
    );
    if (predictComponent) {
      predictComponent.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Stack
      height={["160vh", "100vh"]}
      direction={["column", "row"]}
      gap={0}
      backgroundColor={"black"}
      overflow={"hidden"}
    >
      <Flex
        flex={1}
        align={"center"}
        justify={"center"}
        background={`linear-gradient(to left, black, purple)`}
      >
        <Stack
          spacing={0}
          width={"350px"}
          paddingLeft={"60px"}
          paddingRight={"160px"}
        >
          <Heading fontSize={["3xl", "4xl", "3rem"]} color={"#4299e1"}>
            StrokeDetect
          </Heading>
          <Text fontSize={["md", "lg"]} color={"white"}>
            Your rapid, deep learning-powered lifeline for precise stroke
            prediction based on brain images. Unmatched accuracy when it matters
            most.
          </Text>
          <Stack direction={["column", "row"]} spacing={4}>
            <Button
              rounded={"9999px"}
              bg={"#4299e1"}
              color={"white"}
              _hover={{
                bg: "#3182ce",
                cursor: "pointer",
              }}
              paddingX={40}
              paddingY={10}
              border="0"
              fontSize={"1.3rem"}
              onClick={scrollToPredict}
            >
              Try Model
            </Button>
          </Stack>
        </Stack>
      </Flex>
      <Flex flex={1} boxSize={"90%"} height={"100%"}>
        <Image alt={"Login Image"} src={stroke} />
      </Flex>
    </Stack>
  );
}
