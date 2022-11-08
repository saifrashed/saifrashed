import Head from "next/head";
import Footer from "../components/Footer"
import {
    Box,
    Flex,
    Grid,
    Heading,
    HStack,
    Image,
    SimpleGrid,
    Stack,
    Text,
    useColorMode,
    useColorModeValue,
    VStack,
} from "@chakra-ui/react";
import React, {useState} from "react";
import Container from "../components/container";
import PageTransition from "../components/page-transitions";

const Projects = ({productions = []}) => {

    console.log(productions)

    const {colorMode} = useColorMode();
    const cardBgColor = {light: "white", dark: "gray.900"};
    const cardColor = {light: "gray.900", dark: "white"};
    const [searchQuery, setSearchQuery] = useState("");
    const sortedProductions = productions.filter((project) =>
        project.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const headingNode = () => {
        return (
            <Box>
                <VStack spacing={2} align="center">
                    <Heading as="h1" size="xl">
                        Projects
                    </Heading>
                    <Text align={"center"}>A showcase of my completed work.</Text>
                </VStack>
            </Box>
        );
    };


    const projectsNode = () => {
        if (!sortedProductions.length) {
            return (
                <HStack mx="auto" textAlign="center">
                    <Text>No Projects found!</Text>
                </HStack>
            );
        }

        return (
            <SimpleGrid columns={[1, 1, 1]} spacing={10}>
                {sortedProductions.map((project, index) => {
                    return (
                        <div key={index}>

                        </div>
                    );
                })}
            </SimpleGrid>
        );
    };

    return (
        <>
            <PageTransition>
                <Container>
                    <Stack py={{base: 4, md: 20, xl: 50}}>

                        <Head>
                            <title>Projects</title>
                        </Head>

                        <Grid templateColumns="1fr">
                            <Box as="section">
                                <VStack spacing={8} align="left">
                                    {headingNode()}
                                    {projectsNode()}


                                    <Flex
                                        w="full"
                                        alignItems="center"
                                        justifyContent="center"
                                    >
                                        <Box
                                            mx="auto"
                                            bg={useColorModeValue("white", "gray.800")}
                                            rounded="lg"
                                        >

                                            <a href={"https://www.planbsneakers.nl"} target={"_blank"}>
                                                <Image
                                                    w="full"
                                                    fit="cover"
                                                    rounded="lg"
                                                    mt={2}
                                                    src="/images/planbsneakers.png"
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

                                    <Flex
                                        w="full"
                                        alignItems="center"
                                        justifyContent="center"
                                    >
                                        <Box
                                            mx="auto"
                                            bg={useColorModeValue("white", "gray.800")}
                                            rounded="lg"
                                        >

                                            <a href={"https://www.errys.nl"} target={"_blank"}>
                                                <Image
                                                    w="full"
                                                    fit="cover"
                                                    rounded="lg"
                                                    mt={2}
                                                    src="/images/errys.png"
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


                                    <Flex
                                        w="full"
                                        alignItems="center"
                                        justifyContent="center"
                                    >
                                        <Box
                                            mx="auto"
                                            bg={useColorModeValue("white", "gray.800")}
                                            rounded="lg"
                                        >

                                            <a href={"https://www.timetotrainopt.com"} target={"_blank"}>
                                                <Image
                                                    w="full"
                                                    fit="cover"
                                                    rounded="lg"
                                                    mt={2}
                                                    src="/images/timetotrain.png"
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

                                    <Flex
                                        w="full"
                                        alignItems="center"
                                        justifyContent="center"
                                    >
                                        <Box
                                            mx="auto"
                                            bg={useColorModeValue("white", "gray.800")}
                                            rounded="lg"
                                        >

                                            <a href={"https://www.aedhartstikkenodig.nl"} target={"_blank"}>
                                                <Image
                                                    w="full"
                                                    fit="cover"
                                                    rounded="lg"
                                                    mt={2}
                                                    src="/images/aed.png"
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

                                    <Flex
                                        w="full"
                                        alignItems="center"
                                        justifyContent="center"
                                    >
                                        <Box
                                            mx="auto"
                                            bg={useColorModeValue("white", "gray.800")}
                                            rounded="lg"
                                        >

                                            <a href={"https://www.ummahzorg.nl"} target={"_blank"}>
                                                <Image
                                                    w="full"
                                                    fit="cover"
                                                    rounded="lg"
                                                    mt={2}
                                                    src="/images/ummahzorg.png"
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

                                    <Flex
                                        w="full"
                                        alignItems="center"
                                        justifyContent="center"
                                    >
                                        <Box
                                            mx="auto"
                                            bg={useColorModeValue("white", "gray.800")}
                                            rounded="lg"
                                        >

                                            <a href={"https://www.mahitstucadoor.nl"} target={"_blank"}>
                                                <Image
                                                    w="full"
                                                    fit="cover"
                                                    rounded="lg"
                                                    mt={2}
                                                    src="/images/mahit.png"
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

                                    <Flex
                                        w="full"
                                        alignItems="center"
                                        justifyContent="center"
                                    >
                                        <Box
                                            mx="auto"
                                            bg={useColorModeValue("white", "gray.800")}
                                            rounded="lg"
                                        >
                                            <a href={"https://www.mooibygerda.nl"} target={"_blank"}>
                                                <Image
                                                    w="full"
                                                    fit="cover"
                                                    rounded="lg"
                                                    mt={2}
                                                    src="/images/mooibygerda.png"
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

            <Footer/>
        </>
    );
};

export async function getStaticProps() {
    const productions = [
        {name: "MooiByGerda"}
    ];

    return {
        props: {
            productions,
        },
    };
}

export default Projects;
