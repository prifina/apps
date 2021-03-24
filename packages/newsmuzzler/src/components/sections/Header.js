import React from "react";
import Logo from "../../assets/icons/NewsMuzzlerAppIcon.svg";

import { Flex, Image, Button, Text, Link } from "@chakra-ui/core";
// import { Link as ReachLink } from "@reach/router";

import { Link as ReachLink } from "react-router-dom";

export default function Header() {
  return (
    <Flex
      align="center"
      size="75px"
      justify="space-between"
      width="100%"
      borderStyle="none none solid none"
      borderWidth="3px"
      borderColor="#a8a6b9"
    >
      <Flex
        marginLeft={[10, 12, 14, 16]}
        justify="space-between"
        align="center"
      >
        <Image src={Logo} />

        <Text marginLeft="10px" as="b">
          NewsMuzzler
        </Text>
      </Flex>
      <Flex marginRight={[2, 4, 6, 8]}>
        <Link as={ReachLink} to="/login">
          <Button
            variantColor="purpleBright"
            variant="outline"
            marginRight={[1, 2, 3, 4]}
          >
            LOGIN
          </Button>
        </Link>
        <Link as={ReachLink} to="/signup">
          <Button variantColor="purpleBright">SIGN UP</Button>
        </Link>
      </Flex>
    </Flex>
  );
}
