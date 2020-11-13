import React from "react";

import { Box, Heading, List, ListItem } from "@chakra-ui/core";

const FooterList = ({ title, listItems }) => (
  //this needs fixing
  <Box pr="138px">
    <Heading
      textTransform="uppercase"
      fontSize="16px"
      fontWeight="600"
      color="white"
    >
      {title}
    </Heading>

    <List margin="0px" padding="0px" alignContent="center">
      {listItems.map(({ text, index }) => (
        <ListItem key={index} fontSize="sm" color="white">
          {text}
        </ListItem>
      ))}
    </List>
  </Box>
);

export default FooterList;
