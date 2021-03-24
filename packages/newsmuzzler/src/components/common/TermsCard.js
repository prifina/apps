import React from "react";

import { Box, Heading, Text } from "@chakra-ui/core";

const TermsCard = ({ title, desc, bgcolor }) => (
  //this needs fixing
  <Box h="95px" backgroundColor={bgcolor} pl="29px" pt="12px">
    <Heading
      textTransform="capitalize"
      fontSize="20px"
      fontWeight="700"
      m="0px"
    >
      {title}
    </Heading>

    <Text fontSize="14px" fontWeight="400">
      {desc}
    </Text>
  </Box>
);

export default TermsCard;
