import React from "react";
import Head from "next/head";
import {Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Heading, HStack, Link, List, ListIcon, ListItem, Stack, Text, VStack} from "@chakra-ui/react";
import {IoIosBook, IoIosBuild, IoIosCheckmarkCircleOutline, IoLogoGithub, IoLogoLinkedin} from "react-icons/io";
import Footer from "../components/Footer"
import Container from "../components/container";
import PageTransition from "../components/page-transitions";


import { Timeline } from 'components/Timeline'
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
                                        The fact that programming made complex issues fixable has intrigued me all my life.
                                        It therefore pushed me to create different kinds of apps that each solved their own problem.
                                        My personal challenge? How big of a problem can i possibly fix with software.
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
