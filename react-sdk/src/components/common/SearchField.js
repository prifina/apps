import React from "react";

import { Flex, PseudoBox } from "@chakra-ui/core";

export default function SearchField() {
  return (
    <Flex>
      <PseudoBox
        as="input"
        placeholder="Your email"
        type="email"
        py={2}
        px={6}
        rounded="md"
        bg="gray.100"
        borderWidth="0px"
        _hover={{ borderColor: "gray.200", bg: "gray.200" }}
        _focus={{
          outline: "none",
          bg: "white",
          boxShadow: "outline",
          borderColor: "gray.300",
        }}
      />
      <PseudoBox
        as="button"
        bg="purple.400"
        py={2}
        px={4}
        rounded="md"
        fontWeight="semibold"
        color="white"
        _hover={{ bg: "purpleBright" }}
        _focus={{ boxShadow: "outline" }}
      >
        SUBSCRIBE
      </PseudoBox>
    </Flex>
  );
}
