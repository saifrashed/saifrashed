import Head from "next/head";
import Footer from "../components/Footer"
import { Box, Grid, Heading, HStack, Input, SimpleGrid, Stack, Badge, Text, useColorMode, useColorModeValue, VStack } from "@chakra-ui/react";
import React, { useState } from "react";
import Container from "../components/container";
import PageTransition from "../components/page-transitions";
import { format } from "timeago.js";
import Link from "next/link";


const Repositories = ({ projects = [] }) => {

    const { colorMode } = useColorMode();
    const cardBgColor = { light: "white", dark: "gray.900" };
    const cardColor = { light: "gray.900", dark: "white" };
    const [searchQuery, setSearchQuery] = useState("");
    const sortedProjects = projects.filter((project) =>
        project.name.toLowerCase().includes(searchQuery.toLowerCase())
    );


    const projectsNode = () => {
        if (!sortedProjects.length) {
            return (
                <HStack mx="auto" textAlign="center">
                    <Text>No Projects found!</Text>
                </HStack>
            );
        }

        return (
            <SimpleGrid columns={[1, 2, 2]} spacing={10}>
                {sortedProjects.map((project, index) => {
                    return (
                        <div key={index}>
                            <Link href={project.html_url}>
                                <Box
                                    cursor="pointer"
                                    w="100%"
                                    transition="all 0.25s"
                                    transition-timing-function="spring(1 100 10 10)"
                                    _hover={{ transform: "translateY(-4px)", shadow: "sm" }}
                                >
                                    <VStack
                                        align="start"
                                        p={4}
                                        bg={useColorModeValue("white", "gray.800")}
                                        rounded="xl"
                                        borderWidth="1px"
                                        borderColor={useColorModeValue("gray.100", "gray.700")}
                                        spacing={0}
                                        transition="all 0.25s"
                                        transition-timing-function="spring(1 100 10 10)"
                                        _hover={{ transform: "translateY(-4px)", shadow: "sm" }}
                                    >
                                        <HStack>
                                            <Text
                                                color={useColorModeValue("blue.500", "blue.200")}
                                                fontWeight="bold"
                                                fontSize="xl"
                                            >
                                                {project.name}{" "}

                                            </Text>

                                            <Badge size="md" mt={1} ml={1} colorScheme="purple">
                                                {project.language}
                                            </Badge>
                                        </HStack>

                                        <Text fontSize="lg" color={useColorModeValue("gray.700", "gray.50")}>
                                            {project.description}
                                        </Text>
                                        <Text fontSize="xs" color={useColorModeValue("gray.500", "gray.400")}>
                                            {format(project.created_at)}
                                        </Text>
                                    </VStack>
                                </Box>
                            </Link>
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
                    <Stack py={{ base: 4, md: 20, xl: 50 }}>

                        <Head>
                            <title>Repositories 🛠️</title>
                        </Head>

                        <Grid templateColumns="1fr">
                            <Box as="section">
                                <VStack spacing={8} align="left">
                                    <Box>
                                        <VStack spacing={2} align="center">
                                            <Heading as="h1" size="xl">
                                                Repositories 🛠️
                                            </Heading>
                                            <Text align={"center"}>My public repositories. Feel free to browse through them and use them as you see fit. </Text>
                                        </VStack>
                                    </Box>

                                    <Box>
                                        <Input
                                            bg={cardBgColor[colorMode]}
                                            color={cardColor[colorMode]}
                                            value={searchQuery}
                                            zIndex={0}
                                            onChange={(e) =>
                                                setSearchQuery(e.currentTarget.value)
                                            }
                                            placeholder="Search..."
                                        />
                                    </Box>

                                    {projectsNode()}

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

export async function getServerSideProps() {
    const res = await fetch(`https://api.github.com/users/saifrashed/repos?per_page=100`);
    const projects = await res.json();

    return {
        props: {
            projects,
        },
    };
}

export default Repositories;
