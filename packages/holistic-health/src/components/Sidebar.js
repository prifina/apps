import React from "react";

// import { Flex } from "@blend-ui/core";

import { Flex, Button } from "@chakra-ui/react";

import DashboardIcon from "../assets/dashboard.svg";
import GraphsIcon from "../assets/graphs.svg";
import { color } from "styled-system";

const Sidebar = ({ onClick1, onClick2 }) => {
  return (
    <Flex
      height="100%"
      flexDirection={"column"}
      paddingLeft="37px"
      paddingTop={60}
      width={251}
      position={"fixed"}
      bg={"#F4F4F8"}
      zIndex={1}
    >
      <Flex marginBottom={40} flexDirecton={"row"}>
        <Flex alignItems="center">
          <Flex marginRight={16}>
            <img src={DashboardIcon} alt="React Logo" />
          </Flex>
          <Button
            variant="ghost"
            style={{ border: 0, color: "#5F6AC4" }}
            onClick={onClick1}
            isActive={{ background: "blue" }}
          >
            Dashboard
          </Button>
        </Flex>
      </Flex>
      <Flex alignItems="center">
        <Flex marginRight={16}>
          <img src={GraphsIcon} alt="React Logo" />
        </Flex>
        <Button style={{ border: 0, color: "#5F6AC4" }} onClick={onClick2}>
          Graphs
        </Button>
      </Flex>
    </Flex>
  );
};

export default Sidebar;
