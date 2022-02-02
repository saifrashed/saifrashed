import {Box, HStack, Link, Text} from "@chakra-ui/react";
import React from "react";

const Footer = () => {
    return (
        <Box p={4} as="footer">
            <Box maxW="6xl" mx="auto" fontSize="xs">
                <Box
                    d="flex"
                    textAlign="center"
                    justifyContent="center"
                    alignItems="center"
                >
                    <HStack spacing={2}>
                        <Box p={4}>
                            <Text fontSize="sm">
                                Copyright  &copy; {new Date().getFullYear()} Saif Rashed, <Link
                                href='https://www.kvk.nl/orderstraat/product-kiezen/?kvknummer=777444380000'
                                isExternal>77744438</Link>
                            </Text>
                        </Box>
                    </HStack>
                </Box>
            </Box>
        </Box>
    );
};

export default Footer;
