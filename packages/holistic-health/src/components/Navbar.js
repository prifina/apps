import React from "react";

// import { Text, Avatar, Flex } from "@blend-ui/core";

import { Text, Flex, Box, Avatar } from "@chakra-ui/react";

import LogoIcon from "../assets/logo.svg";

const styles = {
  position: "sticky",
  top: 0,
  zIndex: 1,
};

const Navbar = () => {
  return (
    <Flex
      height="69px"
      bg={"#F4F4F8"}
      paddingLeft={37}
      paddingTop={21}
      paddingRight={35}
      flexDirecton={"row"}
      justifyContent={"space-between"}
      style={styles}
    >
      <Flex
        width={200}
        alignItems={"center"}
        marginBottom={37}
        top={0}
        left={0}
        postion={"sticky"}
      >
        <img src={LogoIcon} alt="React Logo" />
        <Flex paddingLeft={20}>
          <Text color={"#5F6AC4"} fontSize={18}>
            Health app
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Navbar;
