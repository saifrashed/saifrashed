import Link from "next/link";
import {Heading, Stack, Text, VStack} from "@chakra-ui/react";
import Container from "../components/container";
import Footer from "../components/Footer"
import PageTransition from "../components/page-transitions";
import React from "react";

export default function Error() {
    return (
        <>
            <PageTransition>
                <Container>
                    <Stack py={{base: 4, md: 20, xl: 50}}>
                        <VStack>
                            <Heading size="3xl">404</Heading>
                            <Text mb={8}>Page not found</Text>
                            <Link href="/">Return home</Link>
                        </VStack>
                    </Stack>
                </Container>
            </PageTransition>

            <Footer/>
        </>
    );
}
