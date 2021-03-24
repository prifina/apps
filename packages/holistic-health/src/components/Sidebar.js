import React from "react";
import { NavLink } from "react-router-dom";

import { Flex } from "@blend-ui/core";

import DashboardIcon from "../assets/dashboard.svg";
import GraphsIcon from "../assets/graphs.svg";

function Sidebar() {
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
        <Flex>
          <Flex marginRight={16}>
            <img src={DashboardIcon} alt="React Logo" />
          </Flex>
          <NavLink
            exact
            to="/"
            style={{
              textDecoration: "none",
              fontWeight: 400,
              color: "#95A4B7",
            }}
            activeStyle={{
              fontWeight: 700,
              color: "#5F6AC4",
            }}
          >
            Dashboard
          </NavLink>
        </Flex>
      </Flex>
      <Flex>
        <Flex marginRight={16}>
          <img src={GraphsIcon} alt="React Logo" />
        </Flex>
        <NavLink
          exact
          to="/graphs"
          style={{
            textDecoration: "none",
            fontWeight: 400,
            color: "#95A4B7",
          }}
          activeStyle={{
            fontWeight: 700,
            color: "#5F6AC4",
          }}
        >
          Graphs
        </NavLink>
      </Flex>
    </Flex>
  );
}

export default Sidebar;
