import {Heading, HStack, Image, Text, VStack} from "@chakra-ui/react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowRight} from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({title, description, imageSrc}) => {
    // Implement the UI for the Card component according to the instructions.
    // You should be able to implement the component with the elements imported above.
    // Feel free to import other UI components from Chakra UI if you wish to.
    return (
        <VStack>
            <HStack bg="white" borderRadius="md">
                <VStack maxW='md'>
                    <Image src={imageSrc} alt='Dan Abramov' objectFit='cover' borderRadius="sm"/>
                    <VStack align="left" p={3}>
                        <Heading as="h1" color="black" size="sm">{title}</Heading>
                        <Text color="blackAlpha.700" fontSize="sm">
                            {description}
                        </Text>
                        <HStack color="black" fontSize="xs">
                            <Text>See more</Text>
                            <FontAwesomeIcon icon={faArrowRight} size="1x"/>
                        </HStack>
                    </VStack>
                </VStack>
            </HStack>
        </VStack>
    );
};

export default Card;
