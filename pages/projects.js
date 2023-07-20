import Head from "next/head";
import Footer from "../components/Footer"
import { Box, Flex, Grid, Heading, Image, Stack, Text, VStack, } from "@chakra-ui/react";
import React from "react";
import Container from "../components/container";
import PageTransition from "../components/page-transitions";

const Projects = () => {
    return (
        <>
            <PageTransition>
                <Container>
                    <Stack py={{ base: 4, md: 20, xl: 50 }}>
                        <Head>
                            <title>Projects 🏁</title>
                        </Head>

                        <Grid templateColumns="1fr">
                            <Box as="section">
                                <VStack spacing={8} align="left">
                                    <Box>
                                        <VStack spacing={2} align="center">
                                            <Heading as="h1" size="xl">
                                                Projects 🏁
                                            </Heading>
                                            <Text align={"center"}>Here, you'll find a selection of my completed work,
                                                showcasing the projects
                                                I've completed.</Text>
                                        </VStack>
                                    </Box>


                                    <Flex w="full" alignItems="center" justifyContent="center">
                                        <Box mx="auto" rounded="lg">
                                            <a href={"https://teamhulp.nl/"} target={"_blank"}>
                                                <Image
                                                    w="full"
                                                    fit="cover"
                                                    rounded="lg"
                                                    mt={2}
                                                    src="/images/teamhulp.jpeg"
                                                    transition="all 0.25s"
                                                    transition-timing-function="spring(1 100 10 10)"
                                                    _hover={{
                                                        transform: "translateY(-4px)",
                                                        shadow: "sm",
                                                        cursor: "pointer",
                                                        opacity: "0.5"
                                                    }}
                                                />
                                            </a>
                                        </Box>
                                    </Flex>

                                    <Flex w="full" alignItems="center" justifyContent="center">
                                        <Box mx="auto" rounded="lg">
                                            <a href={"https://petitemignon.nl/"} target={"_blank"}>
                                                <Image
                                                    w="full"
                                                    fit="cover"
                                                    rounded="lg"
                                                    mt={2}
                                                    src="/images/petitemignon.jpeg"
                                                    transition="all 0.25s"
                                                    transition-timing-function="spring(1 100 10 10)"
                                                    _hover={{
                                                        transform: "translateY(-4px)",
                                                        shadow: "sm",
                                                        cursor: "pointer",
                                                        opacity: "0.5"
                                                    }}
                                                />
                                            </a>
                                        </Box>
                                    </Flex>

                                    <Flex w="full" alignItems="center" justifyContent="center">
                                        <Box mx="auto" rounded="lg">
                                            <a href={"https://www.planbsneakers.nl"} target={"_blank"}>
                                                <Image
                                                    w="full"
                                                    fit="cover"
                                                    rounded="lg"
                                                    mt={2}
                                                    src="/images/planbsneakers.jpeg"
                                                    transition="all 0.25s"
                                                    transition-timing-function="spring(1 100 10 10)"
                                                    _hover={{
                                                        transform: "translateY(-4px)",
                                                        shadow: "sm",
                                                        cursor: "pointer",
                                                        opacity: "0.5"
                                                    }}
                                                />
                                            </a>
                                        </Box>
                                    </Flex>

                                    <Flex w="full" alignItems="center" justifyContent="center">
                                        <Box mx="auto" rounded="lg">
                                            <a href={"https://www.errys.nl"} target={"_blank"}>
                                                <Image
                                                    w="full"
                                                    fit="cover"
                                                    rounded="lg"
                                                    mt={2}
                                                    src="/images/errys.jpeg"
                                                    transition="all 0.25s"
                                                    transition-timing-function="spring(1 100 10 10)"
                                                    _hover={{
                                                        transform: "translateY(-4px)",
                                                        shadow: "sm",
                                                        cursor: "pointer",
                                                        opacity: "0.5"
                                                    }}
                                                />
                                            </a>
                                        </Box>
                                    </Flex>


                                    <Flex w="full" alignItems="center" justifyContent="center">
                                        <Box mx="auto" rounded="lg">
                                            <a href={"https://www.timetotrainopt.com"} target={"_blank"}>
                                                <Image
                                                    w="full"
                                                    fit="cover"
                                                    rounded="lg"
                                                    mt={2}
                                                    src="/images/timetotrain.jpeg"
                                                    transition="all 0.25s"
                                                    transition-timing-function="spring(1 100 10 10)"
                                                    _hover={{
                                                        transform: "translateY(-4px)",
                                                        shadow: "sm",
                                                        cursor: "pointer",
                                                        opacity: "0.5"
                                                    }}
                                                />
                                            </a>
                                        </Box>
                                    </Flex>

                                    <Flex w="full" alignItems="center" justifyContent="center">
                                        <Box mx="auto" rounded="lg">
                                            <a href={"https://www.aedhartstikkenodig.nl"} target={"_blank"}>
                                                <Image
                                                    w="full"
                                                    fit="cover"
                                                    rounded="lg"
                                                    mt={2}
                                                    src="/images/aed.jpeg"
                                                    transition="all 0.25s"
                                                    transition-timing-function="spring(1 100 10 10)"
                                                    _hover={{
                                                        transform: "translateY(-4px)",
                                                        shadow: "sm",
                                                        cursor: "pointer",
                                                        opacity: "0.5"
                                                    }}
                                                />
                                            </a>
                                        </Box>
                                    </Flex>

                                    <Flex w="full" alignItems="center" justifyContent="center">
                                        <Box mx="auto" rounded="lg">
                                            <a href={"https://www.ummahzorg.nl"} target={"_blank"}>
                                                <Image
                                                    w="full"
                                                    fit="cover"
                                                    rounded="lg"
                                                    mt={2}
                                                    src="/images/ummahzorg.jpeg"
                                                    transition="all 0.25s"
                                                    transition-timing-function="spring(1 100 10 10)"
                                                    _hover={{
                                                        transform: "translateY(-4px)",
                                                        shadow: "sm",
                                                        cursor: "pointer",
                                                        opacity: "0.5"
                                                    }}
                                                />
                                            </a>
                                        </Box>
                                    </Flex>

                                    <Flex w="full" alignItems="center" justifyContent="center">
                                        <Box mx="auto" rounded="lg">
                                            <a href={"https://www.mahitstucadoor.nl"} target={"_blank"}>
                                                <Image
                                                    w="full"
                                                    fit="cover"
                                                    rounded="lg"
                                                    mt={2}
                                                    src="/images/mahit.jpeg"
                                                    transition="all 0.25s"
                                                    transition-timing-function="spring(1 100 10 10)"
                                                    _hover={{
                                                        transform: "translateY(-4px)",
                                                        shadow: "sm",
                                                        cursor: "pointer",
                                                        opacity: "0.5"
                                                    }}
                                                />
                                            </a>
                                        </Box>
                                    </Flex>

                                    <Flex w="full" alignItems="center" justifyContent="center">
                                        <Box mx="auto" rounded="lg">
                                            <a href={"https://www.mooibygerda.nl"} target={"_blank"}>
                                                <Image
                                                    w="full"
                                                    fit="cover"
                                                    rounded="lg"
                                                    mt={2}
                                                    src="/images/mooibygerda.jpeg"
                                                    transition="all 0.25s"
                                                    transition-timing-function="spring(1 100 10 10)"
                                                    _hover={{
                                                        transform: "translateY(-4px)",
                                                        shadow: "sm",
                                                        cursor: "pointer",
                                                        opacity: "0.5"
                                                    }}
                                                />
                                            </a>
                                        </Box>
                                    </Flex>
                                </VStack>
                            </Box>
                        </Grid>
                    </Stack>
                </Container>
            </PageTransition>

            <Footer />
        </>
    );
};

export default Projects;
