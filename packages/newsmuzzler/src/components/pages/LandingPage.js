import React from "react";
import Footer from "../sections/Footer";
import CardDesign from "../sections/CardDesign";
import Header from "../sections/Header";
import Hero from "../sections/Hero";

import { Box } from "@chakra-ui/core";

export default function LandingPage() {
  return (
    <Box>
      <Header />
      <Hero />
      <CardDesign />
      <Footer />
    </Box>
  );
}
