import React, { useState, useEffect } from "react";

// import { Text, Flex } from "@blend-ui/core";
import Select from "react-select";

// import Box from "@blend-ui/core/dist/esm/Box";

import ProgressContainer from "./components/ProgressContainer";
import ProgressCard from "./components/ProgressCard";
import Card from "./components/Card";

import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";

import Dashboard from "./pages/Dashboard";
import Graphs from "./pages/Graphs";

import { extendTheme, ThemeProvider, Text, Flex, Box } from "@chakra-ui/react";

import SleepIcon from "./assets/sleep.svg";
import HeartIcon from "./assets/heart.svg";
import TemperatureIcon from "./assets/temperature.svg";
import GreenArrowIcon from "./assets/greenArrow.svg";
import RedArrowIcon from "./assets/redArrow.svg";
import FireIcon from "./assets/fire.svg";
import WalkIcon from "./assets/walk.svg";
// import WeightIcon from "../assets/weight.svg";
// import RunIcon from "../assets/run.svg";

import { deviceOptions, getDeviceData } from "./data/helper";

import { selectStyleShadow } from "./styles/styles";

const timeOptions = [{ label: "This Month", value: "thisMonth" }];

const styles = {
  boxShadow: " 0px 5px 20px #F0F4F8",
};

const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const theme = extendTheme({ config });

function Home() {
  const [step, setStep] = useState(0);

  switch (step) {
    case 0:
      break;
    case 1:
      break;
    case 2:
      break;
    default:
  }

  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Sidebar
        onClick1={() => {
          setStep(0);
        }}
        onClick2={() => {
          setStep(1);
        }}
      />
      {step === 0 && <Dashboard />}
      {step === 1 && <Graphs />}
    </ThemeProvider>
  );
}

export default Home;
