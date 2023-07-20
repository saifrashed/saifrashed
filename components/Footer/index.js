import { Box, HStack, Link, Text } from "@chakra-ui/react";
import React from "react";

const Footer = () => {
    return (
        <Box
            d="flex"
            textAlign="center"
            justifyContent="center"
            alignItems="center"
        >

            <Text fontSize="sm">
                Copyright  &copy; {new Date().getFullYear()} Saif Rashed, <Link
                    href='https://www.kvk.nl/orderstraat/product-kiezen/?kvknummer=777444380000'
                >77744438</Link>
            </Text>
        </Box>
    );
};

export default Footer;
