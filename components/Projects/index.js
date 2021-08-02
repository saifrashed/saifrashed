import {Box, Button, Grid, Heading, Image, Input, Text, useColorMode, VStack, SimpleGrid} from "@chakra-ui/react";
import React, {FormEvent, useState} from "react";
import {IoMdArrowForward} from "react-icons/io";


const Projects = ({projects = []}) => {
    const {colorMode}                   = useColorMode();
    const cardBgColor                   = {light: "white", dark: "gray.900"};
    const cardColor                     = {light: "gray.900", dark: "white"};
    const [searchQuery, setSearchQuery] = useState("");
    const sortedProjects                = projects.filter((project) =>
        project.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const searchNode = () => {
        return (
            <Box>
                <Input
                    bg={cardBgColor[colorMode]}
                    color={cardColor[colorMode]}
                    value={searchQuery}
                    onChange={(e) =>
                        setSearchQuery(e.currentTarget.value)
                    }
                    placeholder="Zoek naar een project"
                />
            </Box>
        );
    };

    const headingNode = () => {
        return (
            <Box>
                <VStack spacing={2} align="left">
                    <Heading as="h1" size="xl">
                        Projecten 🛠️
                    </Heading>
                    <Text>Mijn verschillende projecten, beschikbaar op Github</Text>
                </VStack>
            </Box>
        );
    };

    const titleNode = (title) => {
        return (
            <Heading as="h3" size="md" letterSpacing="tight" lineHeight="tall">
                {title}
            </Heading>
        );
    };

    const descriptionNode = (description) => {
        return <Text fontSize="sm">{description}</Text>;
    };

    const ctaNode = () => {
        return (
            <Button rightIcon={<IoMdArrowForward/>} fontSize="sm">
                Bekijk project
            </Button>
        );
    };

    const projectsNode = () => {
        if (!sortedProjects.length) {
            return (
                <VStack mx="auto" textAlign="center">
                    <Image
                        src="/images/common/no-items.svg"
                        alt="No projects found!"
                        size={64}
                    />
                    <Text>Geen projecten gevonden!</Text>
                </VStack>
            );
        }

        return (
            <SimpleGrid columns={[1, 2, 3]} spacing={10}>
                {sortedProjects.map((project, index) => {
                    return (
                        <Box
                            key={index}
                            bg={cardBgColor[colorMode]}
                            color={cardColor[colorMode]}
                            rounded="md"
                            shadow="md"
                        >
                            <a href={project.html_url} target="_blank" rel="noopener">
                                <Box p={8}>
                                    <VStack
                                        spacing={4}
                                        minH={48}
                                        justifyContent="space-between"
                                        align="left"
                                    >
                                        <VStack spacing={1} align="left">
                                            {titleNode(project.name)}
                                            {descriptionNode(project.description)}
                                        </VStack>
                                        <Box>{ctaNode()}</Box>
                                    </VStack>
                                </Box>
                            </a>
                        </Box>
                    );
                })}
            </SimpleGrid>
        );
    };

    return (
        <VStack spacing={8} align="left">
            {headingNode()}
            {searchNode()}
            {projectsNode()}
        </VStack>
    );
};

export default Projects;
