import React from "react";
import { Link as ReachLink } from "react-router-dom";
import {
  Flex,
  Image,
  Button,
  Box,
  Text,
  Heading,
  Checkbox,
  Link,
  useDisclosure,
  Modal,
} from "@chakra-ui/core";

import Background from "../../assets/bg/Background.svg";
import Logo from "../../assets/icons/NewsMuzzlerAppIcon.svg";

import TermsCard from "../common/TermsCard";

import WiPModal from "../sections/WiPModal";

export default function Terms() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box
      py={20}
      px={30}
      style={{ backgroundImage: `url(${Background})` }}
      backgroundRepeat="no-repeat"
      backgroundPosition="center"
      backgroundSize="cover"
    >
      <Box bg="white" width="100%" h="100%" direction="column">
        <Image position="absolute" pl="24px" pt="24px" src={Logo} size="40px" />
        <Flex pt="24px" direction="column" pl="224px" position="relative">
          <Heading as="b" fontSize="28px">
            NewsMuzzler’s Terms and Conditions
          </Heading>
          <Text fontSize="14px" fontWeight="400" color="#595959">
            Last Updated May 28, 2020
          </Text>
        </Flex>

        <Flex
          display="flex"
          flexDirection="column"
          alignItems="center"
          pr="50px"
        >
          <Box w="1037px" pl="224px">
            <TermsCard
              title="Agreement"
              desc="By using or visiting any of Prifina’s websites, any of our products, software, or applications, you signify your agreement to these terms."
            />
            <TermsCard
              bgcolor="#E8E8E8"
              title="The Service"
              desc="Some of the things you can do through the Service are listed below."
            />
            <TermsCard
              title="Accounts"
              desc="To access Prifina’s Services, you will need to create an account (“Account”)."
            />
            <TermsCard
              bgcolor="#E8E8E8"
              title="Your Data"
              desc="Your data is fully in your control. Only you can access your data and your data profiles. Third parties can access your data only with your permission."
            />
            <TermsCard
              title="Third Party Materials"
              desc="Certain portions of the Service may include, display, or make available content, data, information, applications or materials from third parties (“Third-Party Materials”)."
            />
            <TermsCard
              bgcolor="#E8E8E8"
              title="Indemnity"
              desc="You agree that you will be responsible for your use of Prifina’s Service."
            />
            <TermsCard
              title="Warranties and Limitation of Liability"
              desc="You assume all risk for your use of Prifina’s Service and your dealings with any other user or third party on this Service."
            />
            <TermsCard
              bgcolor="#E8E8E8"
              title="Governing Law and Dispute Settlement"
              desc="Your relationship with Prifina is governed by the laws of California. All disputes will be settled in arbitration proceedings which shall take place in California."
            />
          </Box>

          <Flex
            display="flex"
            pt="24px"
            justifyContent="space-between"
            pl="224px"
            w="1037px"
            pb="18px"
          >
            <Link as={ReachLink} to="/">
              <Button variant="outline" variantColor="purpleBright">
                DECLINE
              </Button>
            </Link>
            <Link as={ReachLink} to="/dashboard">
              <Button variantColor="purpleBright">ACCEPT</Button>
            </Link>
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
}
