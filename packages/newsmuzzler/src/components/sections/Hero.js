import React from "react";
import SlidesBg from "../../assets/bg/SlidesBG.svg";

import {
  Flex,
  Image,
  Button,
  Box,
  Text,
  Modal,
  useDisclosure,
} from "@chakra-ui/core";
import "../../styles/styles.css";

import WiPModal from "../sections/WiPModal";

export default function Hero() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box
      style={{ backgroundImage: `url(${SlidesBg})` }} // failed to use Chakra's bgImage..
      backgroundPosition="center"
      backgroundSize="cover"
      borderStyle="none none solid none"
      borderWidth="3px"
      borderColor="#a8a6b9"
    >
      <Flex
        direction="column"
        align="center"
        justify="center"
        height="300px"
        weight="100%"
      >
        <Text fontSize={33} fontWeight="600" color="white" textAlign="center">
          A better newsletter experience.
        </Text>
        <Text
          fontSize={20}
          color="white"
          marginBottom="25px"
          marginTop="-10px"
          textAlign="center"
        >
          Reroute your newsletters via anonymized email to your normal email.
        </Text>

        <Button onClick={onOpen} variantColor="purpleBright" variant="solid">
          LEARN MORE
        </Button>
        <Modal
          size="900px"
          width={[
            "100%", // base
            "50%", // 480px upwards
            "25%", // 768px upwards
            "15%", // 992px upwards
          ]}
          position="relative"
          isOpen={isOpen}
          onClose={onClose}
        >
          <WiPModal />
        </Modal>
      </Flex>
    </Box>
  );
}
