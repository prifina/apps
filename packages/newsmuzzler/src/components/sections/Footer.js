import React from "react";

import { Flex, Box, Text, Icon, Link } from "@chakra-ui/core";
import SearchField from "../common/SearchField";
import FooterList from "../common/FooterList";

export default function Footer() {
  return (
    <Flex
      className="main footer"
      backgroundColor="#2b2737"
      minHeight="279px"
      d="row"
    >
      <Flex
        justifyContent="space-between"
        ml={[15, 17, 19, 20]}
        mr={[10, 12, 14, 16]}
        pb={18}
        style={{ borderBottom: "1px solid white" }}
      >
        <Box className="text">
          <Text fontSize={20} fontWeight="600" color="white">
            Stay Connected
          </Text>
          <Text color="white">
            Sign up with your email to receive news and updates.
          </Text>
        </Box>
        <Box
          mr={[10, 12, 14, 16]}
          className="psuedo"
          mX="10px"
          justifyContent="center"
          alignSelf="center"
        >
          <SearchField />
        </Box>
      </Flex>

      <Flex
        className="list and social media"
        direction="row"
        justifyContent="space-between"
        ml={[15, 17, 19, 20]}
        pt={18}
      >
        <Flex>
          <FooterList
            title="Company"
            listItems={[{ text: "About" }, { text: "Press" }, { text: "Team" }]}
          ></FooterList>
          <FooterList
            title="Help"
            listItems={[
              { text: "Contact" },
              { text: "Developer" },
              { text: "FAQ" },
            ]}
          ></FooterList>
          <FooterList
            title="Privacy"
            listItems={[{ text: "Data" }]}
          ></FooterList>
        </Flex>
        <Box mr={[10, 12, 14, 20]} pt="36px">
          <Link href="https://chakra-ui.com" isExternal size="40px" >
            <Icon p="12px" name="facebook" size="40px" />
          </Link>

          <Icon p="12px" name="instagram" size="40px" />
          <Icon p="12px" name="youtube" size="40px" />
          <Icon p="12px" name="twitter" size="40px" />
          <Icon p="12px" name="linkedin" size="40px" />
        </Box>
      </Flex>
    </Flex>
  );
}
