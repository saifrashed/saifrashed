import {Box, HStack, Image, Link as _Link, Text} from "@chakra-ui/react";
import Link from "next/link";
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
                                Copyright  &copy; {new Date().getFullYear()} Saif Rashed
                            </Text>
                        </Box>
                    </HStack>
                </Box>
            </Box>
        </Box>
    );
};

export default Footer;
