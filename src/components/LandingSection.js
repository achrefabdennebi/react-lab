import React from "react";
import {Avatar, Box, Heading, VStack} from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Pete!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (<FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
>
    <Avatar src="https://i.pravatar.cc/150?img=7"/>
    <VStack spacing={14}>
        <Heading as="h3" size="sm">
            {greeting}
        </Heading>
        <Box>
            <Heading as="h1" size="2xl">
                {bio1}
            </Heading>
            <Heading as="h1" size="2xl">
                {bio2}
            </Heading>
        </Box>
    </VStack>
</FullScreenSection>);

export default LandingSection;
