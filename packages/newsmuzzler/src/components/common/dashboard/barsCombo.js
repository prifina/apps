import React, { useReducer } from "react";
import { Link, Link as ReachLink, useHistory } from "react-router-dom";
import {
  CSSReset,
  Box,
  Stack,
  Button,
  Image,
  Flex,
  Heading,
  InputGroup,
  InputLeftElement,
  Icon,
  Input,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverCloseButton,
  PopoverHeader,
  PopoverBody,
  Avatar,
} from "@chakra-ui/core";
import "../../../styles/leftMenu.css";
import Channels from "./channels";
import ContentPage from "./contentPage";
import SubscriptionCard from "./subscriptionCard";
import Logo from "../../../assets/icons/NewsMuzzlerAppIcon.svg";
import DashboardBG from "../../../assets/bg/DashboardBG.svg";

//auth
import { Auth } from "aws-amplify";

const recentNewsletters = [
  {
    id: 1,
    // title: "How do I Back Up my Computer?",
    // date: "June 9th, 2020 10:37AM",
    activity: "Sent by Source",
  },

  {
    id: 2,
    // title: "How do I remove Malware?",
    // date: "June 8th, 2020 10:37AM",
    activity: "Read by Me",
  },
];

const recentNewslettersTwo = [
  {
    id: 1,
    // title: "Title 1",
    // date: "June 5th, 2020 10:37AM",
    activity: "Sent by Source",
  },

  {
    id: 2,
    // title: "Title 2",
    // date: "June 2th, 2020 10:37AM",
    activity: "Read by Me",
  },
];

const newsletterInformation = [
  {
    id: 1,
    // name: "Ask Leo",
    // subscriptionEmail: "cal980@newsmuzzler.com",
    // forwardingEmail: "iosifweir@gmail.com",
    savedNumber: "0",
    likedNumber: "0",
    contents: recentNewsletters,
  },

  {
    id: 2,
    // name: "Harvard Business Review",
    // subscriptionEmail: "cal980@newsmuzzler.com",
    // forwardingEmail: "iosifweir@gmail.com",
    savedNumber: "0",
    likedNumber: "0",
    recievingEmail: "Work Email",
    contents: recentNewslettersTwo,
  },
];

const initialState = <Box> </Box>;
const reducer = (state, action) => {
  switch (action.type) {
    case "dashboard": {
      navProps.heading = "Dashboard";
      return <Box />;
    }
    case "channels": {
      navProps.heading = "Channels";
      return <Channels />;
    }
    case "content": {
      navProps.heading = "Content";
      return <ContentPage />;
    }
    case "subscriptions": {
      navProps.heading = "Subscriptions";
      return <SubscriptionCard information={newsletterInformation} />;
    }
    case "statistics": {
      navProps.heading = "Statistics";
      return <Box>This is the statistics page!</Box>;
    }
  }
};

const navProps = {
  heading: "Dashboard",
  userName: "",
  userImgUrl: "",
  notificationContent: "No New Notifications",
};

React.openLeftMenu = () => {
  document.getElementById("leftMenu").style.width = "17%";
  document.getElementById("mainPage").style.width = "83%";
  var leftMenu = document.getElementById("leftMenu-root");
  var leftMenu_Descriptions = leftMenu.getElementsByClassName(
    "leftMenu-description"
  );
  var i;
  for (i = 0; i < leftMenu_Descriptions.length; i++) {
    console.log(i);
    leftMenu_Descriptions[i].style.color = "#FFFFFF";
  }
};

export default function BarsCombo() {
  const [selectedComponent, dispatch] = useReducer(reducer, initialState);

  //auth
  let history = useHistory();
  async function signOut() {
    try {
      await Auth.signOut();
      console.log("success logging out");
      history.push("/login");
    } catch (error) {
      console.log("error signing out: ", error);
    }
  }

  return (
    <Flex>
      <Box
        id={"leftMenu"}
        width={"17%"}
        transition="width 1s"
        style={{ backgroundImage: `url(${DashboardBG})` }}
      >
        <CSSReset />
        <Box style={{ backgroundImage: `url(${DashboardBG})` }}>
          <Stack spacing={0} id={"leftMenu-root"}>
            <Box paddingTop={"30px"} paddingBottom={"30px"} color={"#FFFFFF"}>
              <Flex
                flexWrap={"wrap"}
                alignItems={"center"}
                justifyContent={"flex-start"}
              >
                <Flex>
                  &nbsp;&nbsp;
                  <Image size="40px" src={Logo}></Image>
                </Flex>
                <p className={"leftMenu-description"}>NewsMuzzler</p>
              </Flex>
            </Box>

            <Button
              onClick={() => dispatch({ type: "dashboard" })}
              _hover={{ background: "#534488", stroke: "#534488" }}
              backgroundColor="transparent"
              className={"leftMenu-btnTxt"}
              height="90px"
            >
              <div className={"leftMenu-row-btn"}>
                <Box size="20px">
                  <Image src="https://iconsplace.com/wp-content/uploads/_icons/ffffff/256/png/dashboard-icon-18-256.png"></Image>
                </Box>

                <div className="leftMenu-description">
                  &nbsp;&nbsp; Dashboard
                </div>
              </div>
            </Button>

            <Button
              onClick={() => dispatch({ type: "channels" })}
              _hover={{ background: "#534488", stroke: "#534488" }}
              backgroundColor="transparent"
              className={"leftMenu-btnTxt"}
              height="90px"
            >
              <div className={"leftMenu-row-btn"}>
                <Box size="20px">
                  <Image src="https://iconsplace.com/wp-content/uploads/_icons/ffffff/64/png/channel-mosaic-icon-18-64.png"></Image>
                </Box>

                <div className="leftMenu-description">
                  &nbsp;&nbsp; Channels
                </div>
              </div>
            </Button>

            <Button
              onClick={() => dispatch({ type: "content" })}
              _hover={{ background: "#534488", stroke: "#FFF" }}
              backgroundColor="transparent"
              // _focus={{ background: "#FFF" }} to stay focused white color
              className={"leftMenu-btnTxt"}
              height="90px"
            >
              <div className={"leftMenu-row-btn"}>
                <Box size="20px">
                  <Image src="https://iconsplace.com/wp-content/uploads/_icons/ffffff/64/png/today-icon-18-64.png"></Image>
                </Box>

                <div className="leftMenu-description">&nbsp;&nbsp; Content</div>
              </div>
            </Button>

            <Button
              onClick={() => dispatch({ type: "subscriptions" })}
              _hover={{ background: "#534488", stroke: "#534488" }}
              backgroundColor="transparent"
              className={"leftMenu-btnTxt"}
              height="90px"
            >
              <div className={"leftMenu-row-btn"}>
                <Box size="20px">
                  <Image src="https://iconsplace.com/wp-content/uploads/_icons/ffffff/64/png/contacts-2-icon-18-64.png"></Image>
                </Box>

                <div className="leftMenu-description">
                  &nbsp;&nbsp; Subscriptions
                </div>
              </div>
            </Button>

            <Button
              onClick={() => dispatch({ type: "statistics" })}
              _hover={{ background: "#534488", stroke: "#534488" }}
              backgroundColor="transparent"
              className={"leftMenu-btnTxt"}
              height="90px"
            >
              <div className={"leftMenu-row-btn"}>
                <Box size="20px">
                  <Image src="https://iconsplace.com/wp-content/uploads/_icons/ffffff/256/png/combo-icon-256.png"></Image>
                </Box>

                <span className="leftMenu-description">
                  &nbsp;&nbsp; Statistics
                </span>
              </div>
            </Button>

            <div></div>
          </Stack>
          <Box h={500} />
        </Box>
      </Box>

      <Box
        id={"mainPage"}
        width={"83%"}
        transition="width 1s"
        backgroundColor={"#E5E5E5"}
      >
        <div className={"row"}>
          <Flex
            as="nav"
            align="center"
            flexDirection={"row"}
            justify="space-between"
            wrap="wrap"
            padding="4px"
            backgroundColor="#F2F2F2"
            color="#000000"
            height={"60px"}
            boxShadow={"0px 0px 4px rgba(0, 0, 0, 0.25)"}
            marginBottom={"2%"}
          >
            <box align="left" className={"col-2"}>
              <Heading
                onClick={React.openLeftMenu}
                as="h1"
                letterSpacing={""}
                fontSize={"20px"}
                color={"#000000"}
                paddingLeft={"10%"}
              >
                {navProps.heading}
              </Heading>
            </box>

            <div className={"col-6"}></div>
            <Flex
              className={"col-4"}
              flexDirection={"row"}
              justifyContent={"space-around"}
              alignItems={"center"}
            >
              <Box>
                <InputGroup borderColor={"#6E61BF"}>
                  <InputLeftElement
                    children={<Icon name="search" color="#595959" />}
                  />
                  <Input placeholder="Search" />
                </InputGroup>
              </Box>

              <Box
              // paddingLeft={'5%'}
              >
                <Popover>
                  <PopoverTrigger>
                    <Icon name={"bell"} size="24px" />
                  </PopoverTrigger>
                  <PopoverContent zIndex={4}>
                    <PopoverArrow />
                    <PopoverCloseButton />
                    <PopoverHeader>Notifications</PopoverHeader>
                    <PopoverBody>{navProps.notificationContent}</PopoverBody>
                  </PopoverContent>
                </Popover>
              </Box>
              <Popover>
                <PopoverTrigger>
                  <Box
                    // mr={'4%'}
                    borderRadius={"50%"}
                    boxShadow={"0px 4px 4px rgba(0, 0, 0, 0.29)"}
                  >
                    <Avatar
                      name={navProps.userName}
                      src={navProps.userImgUrl}
                    />
                  </Box>
                </PopoverTrigger>
                <PopoverContent zIndex={4}>
                  <PopoverArrow />
                  <PopoverCloseButton />

                  <PopoverBody>
                    <Link>Prifina Account</Link>
                  </PopoverBody>
                  <PopoverBody>
                    <Link>NewsMuzzler Settings</Link>
                  </PopoverBody>
                  <PopoverBody>
                    <Link onClick={signOut}>Logout</Link>
                  </PopoverBody>
                </PopoverContent>
              </Popover>
            </Flex>
          </Flex>
        </div>
        {selectedComponent}
      </Box>
    </Flex>
  );
}
