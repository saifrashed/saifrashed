import React from "react";
import Head from "next/head";
import {Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Heading, HStack, Link, List, ListIcon, ListItem, Stack, Text, VStack} from "@chakra-ui/react";
import {IoIosBook, IoIosBuild, IoIosCheckmarkCircleOutline, IoLogoGithub, IoLogoLinkedin} from "react-icons/io";
import NavBar from '../components/NavBar'
import Footer from "../components/Footer"
import Container from "../components/container";
import PageTransition from "../components/page-transitions";


const AboutPage = () => {
    return (
        <>
            <NavBar/>
            <Head>
                <title>About 🙋‍♂</title>
            </Head>

            <PageTransition>
                <Container>
                    <Stack py={{base: 4, md: 20, xl: 50}}>
                        <VStack spacing={8} align="left">
                            <VStack spacing={10} align="left">
                                <Box>
                                    <Heading as="h1" size="xl" pb={5}>
                                        About 🙋
                                    </Heading>
                                    <Text>
                                        My name is Saif Rashed. With a passion for technology I started developing
                                        software
                                        and
                                        methods to improve software. The Dopamine rush I get out of this is more than
                                        enough
                                        to
                                        push me through to the next bug and so this is what keeps me going to keep
                                        building
                                        better applications.
                                    </Text>
                                </Box>
                            </VStack>

                            <VStack align="left">
                                <Heading as="h2" size="xl" pb={5}>
                                    Information
                                </Heading>

                                <Accordion defaultIndex={[0]} allowMultiple>
                                    <AccordionItem>
                                        <h2>
                                            <AccordionButton>
                                                <Box flex="1" textAlign="left">
                                                    Skills🔬
                                                </Box>
                                                <AccordionIcon/>
                                            </AccordionButton>
                                        </h2>
                                        <AccordionPanel pb={4}>
                                            <List spacing={3}>
                                                <ListItem>
                                                    <ListIcon as={IoIosCheckmarkCircleOutline}
                                                              color="green.500"/>
                                                    Languages ​​and frameworks: JS/PHP/Java/NextJS/Express/SCSS/GIT
                                                </ListItem>
                                                <ListItem>
                                                    <ListIcon as={IoIosCheckmarkCircleOutline}
                                                              color="green.500"/>
                                                    WordPress theme and plugin development
                                                </ListItem>
                                                <ListItem>
                                                    <ListIcon as={IoIosCheckmarkCircleOutline}
                                                              color="green.500"/>
                                                    Fast, well-functioning web applications built on React/Redux.
                                                </ListItem>
                                            </List>
                                        </AccordionPanel>
                                    </AccordionItem>

                                    <AccordionItem>
                                        <h2>
                                            <AccordionButton>
                                                <Box flex="1" textAlign="left">
                                                    Experiences 👁️
                                                </Box>
                                                <AccordionIcon/>
                                            </AccordionButton>
                                        </h2>
                                        <AccordionPanel pb={4}>
                                            <List spacing={3}>
                                                <ListItem>
                                                    <ListIcon as={IoIosBuild} color="green.500"/>
                                                    Blue Mammoth - WordPress specialist
                                                    2018
                                                </ListItem>
                                                <ListItem>
                                                    <ListIcon as={IoIosBuild} color="green.500"/>
                                                    BlueBloq - SEO & Online marketing
                                                    2019
                                                </ListItem>
                                                <ListItem>
                                                    <ListIcon as={IoIosBuild} color="green.500"/>
                                                    Vorm Technologies (ZZP) - Application developer
                                                    2020
                                                </ListItem>
                                            </List>
                                        </AccordionPanel>
                                    </AccordionItem>

                                    <AccordionItem>
                                        <h2>
                                            <AccordionButton>
                                                <Box flex="1" textAlign="left">
                                                    Education 📚
                                                </Box>
                                                <AccordionIcon/>
                                            </AccordionButton>
                                        </h2>
                                        <AccordionPanel pb={4}>
                                            <List spacing={3}>
                                                <ListItem>
                                                    <ListIcon as={IoIosBook} color="green.500"/>
                                                    Application -Media Development Niveau 4 - ROC Midden
                                                    Nederland
                                                    2017 - 2020
                                                </ListItem>
                                                <ListItem>
                                                    <ListIcon as={IoIosBook} color="green.500"/>
                                                    HBO ICT Software Developer - University of Applied sciences Amsterdam
                                                    2020 - heden
                                                </ListItem>
                                            </List>
                                        </AccordionPanel>
                                    </AccordionItem>
                                </Accordion>
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
