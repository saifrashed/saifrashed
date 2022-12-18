import React from "react";
import Head from "next/head";
import {Box, Heading, HStack, Link, Stack, Text, VStack} from "@chakra-ui/react";
import {IoLogoGithub, IoLogoLinkedin} from "react-icons/io";
import Footer from "../components/Footer"
import Container from "../components/container";
import PageTransition from "../components/page-transitions";


import {Timeline} from 'components/Timeline'
import achievementList from '../public/data/achievements.json';


const AboutPage = () => {
    return (
        <>
            <Head>
                <title>About 🙋‍♂</title>
            </Head>

            <PageTransition>
                <Container>

                    <Stack py={{base: 4, md: 20, xl: 50}}>
                        <VStack spacing={8}>
                            <VStack spacing={8}>
                                <Box>
                                    <Heading as="h1" size="xl" pb={5} align={"center"}>
                                        About
                                    </Heading>
                                    <Text align={"center"}>
                                        I've always been fascinated by the power of programming to solve complex
                                        problems. It's what drives me to create innovative apps that tackle a wide range
                                        of issues. My personal goal is to see just how far I can push myself to use
                                        software to fix increasingly big problems. It's a challenge that I love, and one
                                        that keeps me constantly motivated to learn and grow as a developer.
                                    </Text>
                                </Box>
                            </VStack>

                            <VStack align="left">
                                <Timeline timelineList={achievementList}/>
                            </VStack>

                            <Box d="flex" alignItems="center">
                                <HStack spacing={4}>
                                    <Link
                                        py={2}
                                        px={4}
                                        href="https://github.com/saifrashed"
                                        rounded="md"
                                        bg="#333"
                                        color="#fff"
                                        fontWeight="bold"
                                        isExternal
                                    >
                                        <HStack spacing={2} alignItems="center">
                                            <Box as={IoLogoGithub}/> <Text>Github</Text>
                                        </HStack>
                                    </Link>
                                    <Link
                                        py={2}
                                        px={4}
                                        href="https://www.linkedin.com/in/saif-rashed-2089b015a/"
                                        rounded="md"
                                        bg="#0e76a8"
                                        color="#fff"
                                        fontWeight="bold"
                                        isExternal
                                    >
                                        <HStack spacing={2} alignItems="center">
                                            <Box as={IoLogoLinkedin}/> <Text>LinkedIn</Text>
                                        </HStack>
                                    </Link>
                                </HStack>
                            </Box>
                        </VStack>
                    </Stack>
                </Container>
            </PageTransition>
            <Footer/>
        </>
    );
};

export default AboutPage;
