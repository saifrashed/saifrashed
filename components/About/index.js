import {Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Grid, Heading, HStack, Image, Link, SimpleGrid, Text, VStack, List, ListItem, ListIcon} from "@chakra-ui/react";
import React from "react";
import {IoLogoGithub, IoLogoLinkedin, IoIosCheckmarkCircleOutline, IoIosBuild, IoIosBook} from "react-icons/io";

const About = () => {

    return (
        <Box maxW="6xl" mx="auto" px={4} py={8}>
            <Grid templateColumns="1fr">
                <Box as="section">
                    <VStack spacing={8} align="left">
                        <HStack spacing={4} alignItems="center">

                            <SimpleGrid columns={[1, 2]} spacing={10}>

                                <Box>
                                    <Image src="/images/common/portrait.jpg" alt="Saif Rashed" borderRadius="lg"/>
                                </Box>

                                <Box>
                                    <VStack spacing={10} align="left">
                                        <Box>
                                            <Heading as="h1" size="xl" pb={5}>
                                                Saif Rashed
                                            </Heading>
                                            <Text>
                                                Mijn naam is Saif Rashed. Ik ben met een passie voor techniek begonnen
                                                met het ontwikkelen van software en methodes om software te verbeteren.
                                                De Dopamine rush die ik hier uit krijg is meer dan genoeg om mij door te
                                                zetten naar de volgende bug en dus is dit ook wat mij doorzet om steeds
                                                betere applicaties te kunnen bouwen.
                                            </Text>
                                        </Box>


                                        <Box>
                                            <Heading as="h2" size="xl" pb={5}>
                                                Informatie
                                            </Heading>

                                            <Accordion defaultIndex={[0]} allowMultiple>
                                                <AccordionItem>
                                                    <h2>
                                                        <AccordionButton>
                                                            <Box flex="1" textAlign="left">
                                                                Vaardigheden
                                                            </Box>
                                                            <AccordionIcon/>
                                                        </AccordionButton>
                                                    </h2>
                                                    <AccordionPanel pb={4}>
                                                        <List spacing={3}>
                                                            <ListItem>
                                                                <ListIcon as={IoIosCheckmarkCircleOutline} color="green.500" />
                                                                Talen en frameworks zoals JS/PHP/SCSS/GIT/MERN/WAMP
                                                            </ListItem>
                                                            <ListItem>
                                                                <ListIcon as={IoIosCheckmarkCircleOutline} color="green.500" />
                                                                WordPress thema en plugin ontwikkeling
                                                            </ListItem>
                                                            <ListItem>
                                                                <ListIcon as={IoIosCheckmarkCircleOutline} color="green.500" />
                                                                Snel goed werkende web applicaties gebouwd op React/Redux.
                                                            </ListItem>
                                                        </List>
                                                    </AccordionPanel>
                                                </AccordionItem>

                                                <AccordionItem>
                                                    <h2>
                                                        <AccordionButton>
                                                            <Box flex="1" textAlign="left">
                                                                Ervaringen
                                                            </Box>
                                                            <AccordionIcon/>
                                                        </AccordionButton>
                                                    </h2>
                                                    <AccordionPanel pb={4}>
                                                        <List spacing={3}>
                                                            <ListItem>
                                                                <ListIcon as={IoIosBuild} color="green.500" />
                                                                Blue Mammoth - WordPress specialist
                                                                2018
                                                            </ListItem>
                                                            <ListItem>
                                                                <ListIcon as={IoIosBuild} color="green.500" />
                                                                BlueBloq - SEO & Online marketing
                                                                2019
                                                            </ListItem>
                                                            <ListItem>
                                                                <ListIcon as={IoIosBuild} color="green.500" />
                                                                Saif Rashed Software (ZZP) - Applicatie ontwikkelaar
                                                                2020
                                                            </ListItem>
                                                        </List>
                                                    </AccordionPanel>
                                                </AccordionItem>

                                                <AccordionItem>
                                                    <h2>
                                                        <AccordionButton>
                                                            <Box flex="1" textAlign="left">
                                                                Studies
                                                            </Box>
                                                            <AccordionIcon/>
                                                        </AccordionButton>
                                                    </h2>
                                                    <AccordionPanel pb={4}>
                                                        <List spacing={3}>
                                                            <ListItem>
                                                                <ListIcon as={IoIosBook} color="green.500" />
                                                                Applicatie -Media ontwikkeling Niveau 4 - ROC Midden Nederland
                                                                2017 - 2020
                                                            </ListItem>
                                                            <ListItem>
                                                                <ListIcon as={IoIosBook} color="green.500" />
                                                                HBO ICT Software Developer - Hogeschool van Amsterdam
                                                                2020 - heden
                                                            </ListItem>
                                                        </List>
                                                    </AccordionPanel>
                                                </AccordionItem>
                                            </Accordion>
                                        </Box>

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
                                </Box>
                            </SimpleGrid>
                        </HStack>
                    </VStack>
                </Box>
            </Grid>
        </Box>
    );
};

export default About;
