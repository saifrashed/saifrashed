import {Box, Button, Grid, Heading, Image, Input, Text, useColorMode, VStack, SimpleGrid, Badge} from "@chakra-ui/react";
import React, {FormEvent, useState} from "react";
import {IoMdArrowForward, IoIosStar} from "react-icons/io";
import Link from "next/link";


const Productions = ({productions = []}) => {
    const {colorMode}                   = useColorMode();
    const cardBgColor                   = {light: "white", dark: "gray.900"};
    const cardColor                     = {light: "gray.900", dark: "white"};
    const [searchQuery, setSearchQuery] = useState("");
    const sortedProductions               = productions.filter((project) =>
        project.title.toLowerCase().includes(searchQuery.toLowerCase())
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
                    placeholder="Zoek naar een productie"
                />
            </Box>
        );
    };

    const headingNode = () => {
        return (
            <Box>
                <VStack spacing={2} align="left">
                    <Heading as="h1" size="xl">
                        Producties
                    </Heading>
                    <Text>Projecten die ik heb kunnen maken voor mijn verschillende klanten.</Text>
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

    const productionNode = () => {
        if (!sortedProductions.length) {
            return (
                <VStack mx="auto" textAlign="center">
                    <Image
                        src="/images/common/no-items.svg"
                        alt="No projects found!"
                        size={64}
                    />
                    <Text>Geen producties gevonden!</Text>
                </VStack>
            );
        }

        return (
            <SimpleGrid columns={[1, 2, 3]} spacing={10}>
                {sortedProductions.map((production, index) => {
                    return (
                        <Box
                            key={index}
                            bg={cardBgColor[colorMode]}
                            color={cardColor[colorMode]}
                            rounded="md"
                            shadow="md"
                        >
                            <Link href={"/productions/" + production.slug}>
                                <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
                                    <Image src={production.imageUrl} alt={production.title} />

                                    <Box p="6">
                                        <Box d="flex" alignItems="baseline">
                                            <Badge borderRadius="full" px="2" colorScheme="teal">
                                                {production.type}
                                            </Badge>
                                            <Box
                                                color="gray.500"
                                                fontWeight="semibold"
                                                letterSpacing="wide"
                                                fontSize="xs"
                                                textTransform="uppercase"
                                                ml="2"
                                            >

                                                {production.technologies.map((value, index) => {
                                                    return (
                                                        <span key={index}> &bull; {value} </span>
                                                    )
                                                })}
                                            </Box>
                                        </Box>

                                        <Box
                                            mt="1"
                                            fontWeight="semibold"
                                            as="h4"
                                            lineHeight="tight"
                                            isTruncated
                                        >
                                            {production.title}
                                        </Box>

                                        <Box>
                                            <Box as="span" color="gray.600" fontSize="sm">
                                                {production.description.substring(0, 100)}...
                                            </Box>
                                        </Box>
                                    </Box>
                                </Box>
                            </Link>
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
            {productionNode()}
        </VStack>
    );
};

export default Productions;
