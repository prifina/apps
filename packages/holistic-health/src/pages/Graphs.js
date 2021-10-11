import React, { useState, useEffect } from "react";

import { Text, Flex } from "@blend-ui/core";
import Box from "@blend-ui/core/dist/esm/Box";
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  AreaChart,
  Area,
  ResponsiveContainer,
} from "recharts";

import { extendTheme, ThemeProvider } from "@chakra-ui/react";
import Select from "react-select";

import {
  timeOptions,
  deviceOptions,
  dataOptions,
  getDeviceData,
  getDeviceDataTwo,
  customTheme,
} from "../data/helper";

import {
  selectStyle,
  selectStyleOutline,
  selectStyleSmall,
} from "../styles/styles";

// -----------------------FUNCTIONS----------------------

const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

//function for getting the sum of object arrays with string values
function sumProperty(arr, type) {
  return arr.reduce((total, obj) => {
    if (typeof obj[type] === "string") {
      return total + Number(obj[type]);
    }
    return total + obj[type];
  }, 0);
}

const theme = extendTheme({ config });

// -------------DATA----------------

const styles = {
  boxShadow: " 0px 5px 20px #F0F4F8",
};

const defaultDevice = deviceOptions[0];

const defaultData = {};

// --------------------------APP FUNCTION--------------------------------

function Graphs() {
  const [device, setDevice] = useState(defaultDevice.value);
  const [deviceTwo, setDeviceTwo] = useState(defaultDevice.value);

  const [graphOne, setGraphOne] = useState(defaultData);
  const [graphTwo, setGraphTwo] = useState(defaultData);

  const [updatedGraphOne, setUpdatedGraphOne] = useState(graphOne);
  const [updatedGraphTwo, setUpdatedGraphTwo] = useState(graphTwo);

  const [dataType, updateDataType] = useState([
    "totalCalories",
    "activeCalories",
    "totalSteps",
    "totalDistance",
    "inactiveMinutes",
    "lowActiveMinutes",
    "mediumActiveMinutes",
    "highActiveMinutes",
    "lightSleepTime",
    "deepSleepTime",
    "timeSpentInBed",
    "totalSleepTime",
    "REMSleepTime",
    "totalAwakeTime",
    "restlessSleep",
    "averageHRV",
    "averageRestingHR",
    "respiratoryRate",
    "temperatureDeviation",
  ]);
  const [dataTypeTwo, updateDataTypeTwo] = useState([
    "totalCalories",
    "activeCalories",
    "totalSteps",
    "totalDistance",
    "inactiveMinutes",
    "lowActiveMinutes",
    "mediumActiveMinutes",
    "highActiveMinutes",
    "lightSleepTime",
    "deepSleepTime",
    "timeSpentInBed",
    "totalSleepTime",
    "REMSleepTime",
    "totalAwakeTime",
    "restlessSleep",
    "averageHRV",
    "averageRestingHR",
    "respiratoryRate",
    "temperatureDeviation",
  ]);

  const [time, updateTime] = useState(["thisWeek", "lastWeek", "thisMonth"]);
  const [timeTwo, updateTimeTwo] = useState([
    "thisWeek",
    "lastWeek",
    "thisMonth",
  ]);

  const [sum, setSum] = useState("");

  const handleDeviceChange = (value) => {
    const device = value.value;
    setDevice(device);
  };
  const handleDeviceChangeTwo = (value) => {
    const deviceTwo = value.value;
    setDeviceTwo(deviceTwo);
  };

  const handleDataChange = (value) => {
    const number = value.value;
    // const array = graphOne;
    updateDataType(number);
    // console.log(number);
    // console.log(graphOne);

    // let totalAmount = sumProperty(array, dataType).toFixed(0);
    // console.log(totalAmount);
    // setSum(totalAmount);
  };

  const handleDataChangeTwo = (value) => {
    const dataTypeTwo = value.value;
    updateDataTypeTwo(dataTypeTwo);
  };

  const handleTimeChange = (value) => {
    const time = value.value;
    if (time === "thisWeek") {
      const array = graphOne.slice(21, 28);
      setUpdatedGraphOne(array);
    } else if (time === "lastWeek") {
      const array = graphOne.slice(14, 21);
      setUpdatedGraphOne(array);
    } else {
      setUpdatedGraphOne(graphOne);
    }
  };

  const handleTimeChangeTwo = (value) => {
    const timeTwo = value.value;
    if (timeTwo === "thisWeek") {
      const array = graphTwo.slice(21, 28);
      setUpdatedGraphTwo(array);
    } else if (timeTwo === "lastWeek") {
      const array = graphTwo.slice(14, 21);
      setUpdatedGraphTwo(array);
    } else {
      setUpdatedGraphTwo(graphTwo);
    }
  };

  // const handleGraphColor = (value) => {
  //   const device = value.value;

  //   if (device === "fitbit") return "#FFD46A";
  //   else if (device === "oura") return "#5F6AC4";
  // };

  useEffect(() => {
    getDeviceData(device).then((updatedGraphOne) => {
      setUpdatedGraphOne(updatedGraphOne);
    });
  }, [device]);

  useEffect(() => {
    getDeviceData(device).then((graphOne) => {
      setGraphOne(graphOne);
    });
  }, [device]);

  useEffect(() => {
    getDeviceDataTwo(deviceTwo).then((updatedGraphTwo) => {
      setUpdatedGraphTwo(updatedGraphTwo);
    });
  }, [deviceTwo]);

  useEffect(() => {
    getDeviceDataTwo(deviceTwo).then((graphTwo) => {
      setGraphTwo(graphTwo);
    });
  }, [deviceTwo]);

  return (
    <ThemeProvider theme={theme}>
      <Flex
        marginLeft={251}
        justifyContent={"space-between"}
        flexDirection={"column"}
      >
        <Flex paddingTop={55} paddingLeft={70}>
          <Text fontSize={34} color="#5F6AC4">
            Graphs
          </Text>
        </Flex>
        <Flex
          paddingLeft={70}
          paddingRight={140}
          justifyContent={"space-between"}
        >
          <Box>
            <Flex marginTop={40}>
              <Box style={styles} width={431} height={535} borderRadius={10}>
                <Flex
                  justifyContent={"space-between"}
                  alignItems={"center"}
                  paddingLeft={30}
                  paddingRight={30}
                  paddingTop={20}
                >
                  <Flex>
                    <div style={{ minWidth: 200 }}>
                      <Select
                        styles={selectStyle}
                        options={dataOptions}
                        defaultValue="Data"
                        placeholder="Data"
                        onChange={handleDataChange}
                        width="100px"
                      />
                    </div>
                  </Flex>
                  <Flex>
                    <Text
                      color={"#5F6AC4"}
                      fontSize={28}
                      fontFamily="Circular Std"
                      fontWeight={900}
                      fontStyle="normal"
                    >
                      {/* {sum} */}
                    </Text>
                  </Flex>
                </Flex>
                <Flex
                  justifyContent={"space-between"}
                  alignItems={"center"}
                  paddingLeft={30}
                  paddingRight={30}
                >
                  <Flex>
                    <Flex>
                      <div style={{ minWidth: 150 }}>
                        <Select
                          options={timeOptions}
                          styles={selectStyleSmall}
                          defaultValue="Time"
                          placeholder="Time"
                          onChange={handleTimeChange}
                          width="100px"
                        />
                      </div>
                    </Flex>
                  </Flex>
                  <Flex>
                    <div style={{ minWidth: 100 }}>
                      <Select
                        options={deviceOptions}
                        styles={selectStyleOutline}
                        defaultValue="Device"
                        placeholder="Device"
                        onChange={handleDeviceChange}
                        width="100px"
                      />
                    </div>
                  </Flex>
                </Flex>
                <ResponsiveContainer>
                  <AreaChart
                    data={updatedGraphOne}
                    syncId="anyId"
                    margin={{
                      top: 0,
                      right: 0,
                      left: -60,
                      bottom: 75,
                    }}
                  >
                    <CartesianGrid
                      strokeDasharray="3 3"
                      horizontal={false}
                      vertical={false}
                    />
                    <XAxis dataKey="name" tick={false} axisLine={false} />
                    <YAxis tick={false} axisLine={false} />
                    <Tooltip />
                    <defs>
                      <linearGradient
                        id="colorUv2"
                        x1="0%"
                        y1="0%"
                        x2="0%"
                        y2="100%"
                        spreadMethod="reflect"
                      >
                        <stop offset="0" stopColor="#5F6AC4" />
                        <stop offset="1" stopColor="white" />
                      </linearGradient>
                    </defs>
                    <Area
                      type="monotone"
                      dataKey={dataType}
                      stroke="blue"
                      fill="url(#colorUv2)"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </Box>
            </Flex>
          </Box>
          <Box>
            <Flex marginTop={40}>
              <Box style={styles} width={431} height={535} borderRadius={10}>
                <Flex
                  justifyContent={"space-between"}
                  alignItems={"center"}
                  paddingLeft={30}
                  paddingRight={30}
                  paddingTop={20}
                >
                  <Flex>
                    <div style={{ minWidth: 180 }}>
                      <Select
                        options={dataOptions}
                        styles={selectStyle}
                        defaultValue="Data"
                        onChange={handleDataChangeTwo}
                        width="100px"
                        placeholder="Data"
                      />
                    </div>
                  </Flex>
                  <Flex>
                    <Text
                      color={"#5F6AC4"}
                      fontSize={28}
                      fontFamily="Circular Std"
                      fontWeight={900}
                      fontStyle="normal"
                    >
                      {/* 25354 calories */}
                    </Text>
                  </Flex>
                </Flex>
                <Flex
                  justifyContent={"space-between"}
                  alignItems={"center"}
                  paddingLeft={30}
                  paddingRight={30}
                >
                  <Flex>
                    <Flex>
                      <div style={{ minWidth: 150 }}>
                        <Select
                          options={timeOptions}
                          styles={selectStyleSmall}
                          defaultValue="Time"
                          onChange={handleTimeChangeTwo}
                          width="100px"
                          placeholder="Time"
                        />
                      </div>
                    </Flex>
                  </Flex>
                  <Flex>
                    <div style={{ minWidth: 100 }}>
                      <Select
                        options={deviceOptions}
                        styles={selectStyleOutline}
                        defaultValue="Device"
                        onChange={handleDeviceChangeTwo}
                        width="100px"
                        placeholder="Device"
                      />
                    </div>
                  </Flex>
                </Flex>
                <ResponsiveContainer>
                  <AreaChart
                    data={updatedGraphTwo}
                    syncId="anyId"
                    margin={{
                      top: 0,
                      right: 0,
                      left: -60,
                      bottom: 75,
                    }}
                  >
                    <CartesianGrid
                      strokeDasharray="3 3"
                      horizontal={false}
                      vertical={false}
                    />
                    <XAxis dataKey="name" tick={false} axisLine={false} />
                    <YAxis tick={false} axisLine={false} />
                    <Tooltip />
                    <defs>
                      <linearGradient
                        id="colorUv"
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="100%"
                        spreadMethod="reflect"
                      >
                        <stop offset="0" stopColor="#FFD46A" />
                        <stop offset="1" stopColor="white" />
                      </linearGradient>
                    </defs>
                    <Area
                      type="monotone"
                      dataKey={dataTypeTwo}
                      stroke="orange"
                      fill="url(#colorUv)"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </Box>
            </Flex>
          </Box>
        </Flex>
      </Flex>
    </ThemeProvider>
  );
}

export default Graphs;
