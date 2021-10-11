import React from "react";
import Database from "../../assets/icons/database.svg";
import Mail from "../../assets/icons/mail.svg";
import PrifinaLogo from "../../assets/icons/Prifinavectoricon.svg";
import Read from "../../assets/icons/read.svg";

import { Flex, Image, Box, Text, SimpleGrid } from "@chakra-ui/core";

export default function CardDesign() {
  return (
    <SimpleGrid
      columns={4}
      gap={3}
      minChildWidth="310px"
      minHeight="371px"
      backgroundColor=" #f2f2f2"
      justify="center"
      alignContent="center"
      padding="6"
    >
      <Box width="310px" h="275px" boxShadow="md" backgroundColor="white">
        <Flex
          direction="column"
          align="center"
          justify="space-around"
          width="inherit"
          height="inherit"
        >
          <Image src={Mail} />
          <Text fontSize={16} margin="0" fontWeight="600">
            Create an anonymous email
          </Text>
          <Text
            fontSize={16}
            margin="0"
            fontWeight="400"
            textAlign="center"
            width="245px"
            marginBottom="50px"
          >
            Create an anonymous email for your newsletters. Take control of your
            inbox. No more spam.
          </Text>
        </Flex>
      </Box>
      <Box w="310px" h="275px" boxShadow="md" backgroundColor="white">
        <Flex
          direction="column"
          align="center"
          justify="space-around"
          width="inherit"
          height="inherit"
        >
          <Image src={Read} />
          <Text fontSize={16} margin="0" fontWeight="600">
            Unsubscribe from newsletters
          </Text>
          <Text
            fontSize={16}
            margin="0"
            fontWeight="400"
            textAlign="center"
            width="245px"
            marginBottom="50px"
          >
            Unsubscribe to newsletters in one place. No more subscribing through
            your normal email.
          </Text>
        </Flex>
      </Box>
      <Box w="310px" h="275px" boxShadow="md" backgroundColor="white">
        <Flex
          direction="column"
          align="center"
          justify="space-around"
          width="inherit"
          height="inherit"
        >
          <Image src={PrifinaLogo} />
          <Text fontSize={16} margin="0" fontWeight="600">
            Unlock benefits with Prifina
          </Text>
          <Text
            fontSize={16}
            margin="0"
            fontWeight="400"
            textAlign="center"
            width="245px"
            marginBottom="50px"
          >
            Sign up through Prifina to unlock more opportunities to view your
            data such as reading habits, subscriptions, emails, etc.
          </Text>
        </Flex>
      </Box>
      <Box w="310px" h="275px" boxShadow="md" backgroundColor="white ">
        <Flex
          direction="column"
          align="center"
          justify="space-around"
          width="inherit"
          height="inherit"
        >
          <Image src={Database} />
          <Text fontSize={16} margin="0" fontWeight="600">
            View data through Prifina
          </Text>
          <Text
            fontSize={16}
            margin="0"
            fontWeight="400"
            textAlign="center"
            width="245px"
            marginBottom="50px"
          >
            A Prifina account gives you access to other data applications,
            thereby giving you a holistic view into your data.
          </Text>
        </Flex>
      </Box>
    </SimpleGrid>
  );
}
