import {Box, Button, Container, Flex, Heading, SimpleGrid, Stack, Text, VStack} from '@chakra-ui/react';
import React from "react";
import {IoMdArrowForward} from "react-icons/io";
import Link from "next/link";
import Head from "next/head"


export default function StatsGridWithImage() {
    return (
        <>
            <Head>
                <title>Saif Rashed</title>
            </Head>
            <Box position={'relative'}>

                <Container maxW={'6xl'} position={'relative'}>
                    <Stack>
                        <Stack
                            py={{base: 4, md: 20, xl: 50}}>
                            <Box mb={{base: 8, md: 20}}>

                                <Text
                                    bgGradient="linear(to-l, #95ccff,#4299e1)"
                                    bgClip="text"
                                    fontSize="5xl"
                                    fontWeight="extrabold"
                                >
                                    Hallo ik ben Saif Rashed
                                </Text>
                                <Heading
                                    mb={5}
                                    fontSize={{base: '3xl', md: '5xl'}}>
                                    Software Engineer
                                </Heading>
                                <Text fontSize={'xl'}>
                                    Hallo, wat leuk dat je op mijn website kijkt! De knoppen hieronder zullen u
                                    rondleiden
                                    en als u interesse heeft kunt u mij altijd bereiken via <b>info@saifrashed.nl</b>
                                </Text>
                            </Box>

                            <SimpleGrid columns={{base: 1, md: 3}} spacing={10}>
                                <Box
                                    shadow="lg"
                                    borderRadius="lg"
                                    pl={3}
                                    pr={3}
                                    pt={5}
                                    pb={5}
                                >

                                    <VStack
                                        spacing={4}
                                        minH={48}
                                        justifyContent="space-between"
                                        align="left"
                                    >
                                        <VStack spacing={1} align="left">
                                            <Box>
                                                <Flex
                                                    display="flex"
                                                    flexDirection="row"
                                                    alignItems="center"
                                                    justifyContent="flex-start"
                                                    pb={2}
                                                >
                                                    <Heading
                                                        size="md"
                                                        as="h2"
                                                        lineHeight="shorter"
                                                        fontWeight="bold"
                                                        fontFamily="heading"
                                                    >
                                                        Projecten
                                                    </Heading>
                                                </Flex>
                                            </Box>

                                            <Box>
                                                <Text fontSize="md" color="gray.600">
                                                    Hier kunt u mijn Open Source projecten zien. Deze kan interessant
                                                    zijn
                                                    als u iets wilt bouwen of mijn code wilt inlezen voor andere
                                                    doeleinden.
                                                    Neem eens een kijkje.
                                                </Text>
                                            </Box>
                                        </VStack>
                                        <Box>
                                            <Link href={"/projects"}>

                                                <Button rightIcon={<IoMdArrowForward/>} fontSize="sm">
                                                    Bekijk project
                                                </Button>
                                            </Link>
                                        </Box>
                                    </VStack>
                                </Box>
                                <Box
                                    shadow="lg"
                                    borderRadius="lg"
                                    pl={3}
                                    pr={3}
                                    pt={5}
                                    pb={5}
                                >

                                    <VStack
                                        spacing={4}
                                        minH={48}
                                        justifyContent="space-between"
                                        align="left"
                                    >
                                        <VStack spacing={1} align="left">
                                            <Box>
                                                <Flex
                                                    display="flex"
                                                    flexDirection="row"
                                                    alignItems="center"
                                                    justifyContent="flex-start"
                                                    pb={2}
                                                >
                                                    <Heading
                                                        size="md"
                                                        as="h2"
                                                        lineHeight="shorter"
                                                        fontWeight="bold"
                                                        fontFamily="heading"
                                                    >
                                                        Producties
                                                    </Heading>
                                                </Flex>
                                            </Box>

                                            <Box>
                                                <Text fontSize="md" color="gray.600">
                                                    Bevat klant projecten waarin sommige enorm succesvol zijn geworden.
                                                    Misschien dat dit u een idee geeft van de kwaliteit dat ik kan
                                                    aanbieden.
                                                </Text>
                                            </Box>
                                        </VStack>
                                        <Box>
                                            <Link href={"/productions"}>
                                                <Button rightIcon={<IoMdArrowForward/>} fontSize="sm">
                                                    Bekijk producties
                                                </Button>
                                            </Link>
                                        </Box>
                                    </VStack>
                                </Box>
                                <Box
                                    shadow="lg"
                                    borderRadius="lg"
                                    pl={3}
                                    pr={3}
                                    pt={5}
                                    pb={5}
                                >

                                    <VStack
                                        spacing={4}
                                        minH={48}
                                        justifyContent="space-between"
                                        align="left"
                                    >
                                        <VStack spacing={1} align="left">
                                            <Box>
                                                <Flex
                                                    display="flex"
                                                    flexDirection="row"
                                                    alignItems="center"
                                                    justifyContent="flex-start"
                                                    pb={2}
                                                >
                                                    <Heading
                                                        size="md"
                                                        as="h2"
                                                        lineHeight="shorter"
                                                        fontWeight="bold"
                                                        fontFamily="heading"
                                                    >
                                                        Over mij
                                                    </Heading>
                                                </Flex>
                                            </Box>

                                            <Box>
                                                <Text fontSize="md" color="gray.600">
                                                    Bevat informatie over mijn vaardigheden, studies en ervaringen.
                                                </Text>
                                            </Box>
                                        </VStack>
                                        <Box>
                                            <Link href={"/about"}>
                                                <Button rightIcon={<IoMdArrowForward/>} fontSize="sm">
                                                    Lees meer
                                                </Button>
                                            </Link>
                                        </Box>
                                    </VStack>
                                </Box>
                            </SimpleGrid>
                        </Stack>
                        <Flex flex={1}/>
                    </Stack>
                </Container>
            </Box>
        </>
    );
}
