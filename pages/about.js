import React from "react";
import Head from "next/head";
import { Box, Heading, HStack, Link, Stack, Text, VStack } from "@chakra-ui/react";
import { IoLogoGithub, IoLogoLinkedin, IoLogoTwitter } from "react-icons/io";
import Footer from "../components/Footer"
import Container from "../components/container";
import PageTransition from "../components/page-transitions"
import { Timeline } from 'components/Timeline'
import achievementList from '../public/achievements.json';


const About = () => {
    return (
        <>
            <Head>
                <title>About 🙋‍♂</title>
            </Head>

            <PageTransition>
                <Container>

                    <Stack py={{ base: 4, md: 20, xl: 50 }}>
                        <VStack spacing={8}>
                            <VStack spacing={8}>
                                <Box>
                                    <Heading as="h1" size="xl" pb={5} align={"center"}>
                                        About 🙋‍
                                    </Heading>
                                    <Text align={"center"}>
                                        I am driven to create innovative apps that solve complex problems through programming. My goal is to push myself and grow as a result.
                                    </Text>
                                </Box>
                            </VStack>

                            <VStack align="left">
                                <Timeline timelineList={achievementList} />
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
                                    >
                                        <HStack spacing={2} alignItems="center">
                                            <Box as={IoLogoGithub} /> <Text>Github</Text>
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
                                    >
                                        <HStack spacing={2} alignItems="center">
                                            <Box as={IoLogoLinkedin} /> <Text>LinkedIn</Text>
                                        </HStack>
                                    </Link>

                                    <Link
                                        py={2}
                                        px={4}
                                        href="https://twitter.com/sayoefi"
                                        rounded="md"
                                        bg="#1A8CD8"
                                        color="#fff"
                                        fontWeight="bold"

                                    >
                                        <HStack spacing={2} alignItems="center">
                                            <Box as={IoLogoTwitter} /> <Text>Twitter</Text>
                                        </HStack>
                                    </Link>
                                </HStack>
                            </Box>
                        </VStack>
                    </Stack>
                </Container>
            </PageTransition>
            <Footer />
        </>
    );
};

export default About;



// {
//     "year": 2017,
//     "achievements": [
//       {
//         "title": "Application -Media Development Niveau 4 - ROC Midden Nederland",
//         "description": "Education"
//       }
//     ]
//   }