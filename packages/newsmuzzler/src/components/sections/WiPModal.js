import React from "react";

import {
  Image,
  Text,
  Heading,
  Box,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/core";

import PrifinaLogo from "../../assets/icons/Prifinavectoricon.svg";
import WiPImage from "../../assets/images/WiPImage.svg";

export default function WiPModal() {
  return (
    <>
      <ModalOverlay />
      <ModalContent alignItems="center">
        <Image
          src={PrifinaLogo}
          h="24px"
          w="30px"
          mt={["12px", "16px", "20px", "24px"]}
        />
        <ModalHeader
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          py="24px"
        >
          <Heading fontSize="24px" fontWeight="600" margin="0px">
            What is Prifina?
          </Heading>
        </ModalHeader>
        <ModalCloseButton />
        <Box px="130px" pb="24px">
          <Text
            fontSize="20px"
            fontWeight="400"
            textAlign="center"
            lineHeight="28px"
            margin="0px"
          >
            Prifina is a platform that enables to keep your data separate from
            the applications that you use. NewsMuzzler uses this type of
            approach.
          </Text>
        </Box>
        <ModalBody p="0px" justifyContent="center">
          <Image src={WiPImage} />
        </ModalBody>

        <ModalFooter px="130px" pb="42px" pt="36px">
          <Text
            fontSize="20px"
            fontWeight="400"
            textAlign="center"
            lineHeight="28px"
            margin="0px"
          >
            During the registration process, you have also created your own
            personal data cloud that only you have full control over and access
            to. You can activate your Prifina account to take full advantage of
            your personal data cloud and explore other applications that build
            personal value for you based on your data.
          </Text>
        </ModalFooter>
      </ModalContent>
    </>
  );
}
