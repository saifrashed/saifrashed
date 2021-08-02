import {Box, Button, Container, Flex, Heading, Input, InputGroup, InputRightElement, SimpleGrid, Stack, Text, useColorMode, VStack} from '@chakra-ui/react';
import React from "react";
import {IoMdArrowForward} from "react-icons/io";
import Link from "next/link";
import Head from "next/head"


export default function StatsGridWithImage() {
    const {colorMode} = useColorMode();
    const cardBgColor = {light: "white", dark: "gray.900"};
    const cardColor   = {light: "gray.900", dark: "white"};

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
                                    fontSize="5xl"
                                    fontWeight="extrabold"
                                >

                                    <span style={{background: "linear(to-l, #95ccff,#4299e1)", backgroundClip: "text"}}> Hallo, ik ben Saif Rashed</span> 👋
                                </Text>
                                <Heading
                                    mb={5}
                                    fontSize={{base: '3xl', md: '5xl'}}>
                                    Software Engineer 👨‍💻
                                </Heading>
                                <Text fontSize={'xl'}>
                                    Hallo, wat leuk dat u op mijn website kijkt! De onderstaande knoppen zullen u
                                    rondleiden
                                    en als u interesse heeft kunt u mij bereiken via <b>saifeddinerashed@icloud.com</b>
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
                                                        Projecten 🛠️
                                                    </Heading>
                                                </Flex>
                                            </Box>

                                            <Box>
                                                <Text fontSize="md" color="gray.600">
                                                    Hier kunt u mijn GitHub projecten zien. Deze kan interessant
                                                    zijn
                                                    als u iets wilt bouwen of mijn code wilt inlezen voor andere
                                                    doeleinden.
                                                </Text>
                                            </Box>
                                        </VStack>
                                        <Box>
                                            <Link href={"/projects"}>

                                                <Button rightIcon={<IoMdArrowForward/>} fontSize="sm">
                                                    Bekijk projecten
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
                                                        Over mij 🙋‍♂️
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
                                                        CV 🙋‍♂️
                                                    </Heading>
                                                </Flex>
                                            </Box>

                                            <Box>
                                                <Text fontSize="md" color="gray.600">
                                                    Bevat uitgebreide informatie over mijn verschillende ervaringen en
                                                    studies en persoonlijke informatie.
                                                </Text>
                                            </Box>
                                        </VStack>
                                        <Box>
                                            <InputGroup size="md">
                                                <Input
                                                    pr="6rem"
                                                    type="password"
                                                    placeholder="Code"
                                                    disabled
                                                />
                                                <InputRightElement width="6rem">
                                                    <Button h="1.75rem"
                                                            size="sm"
                                                            onClick={() => {
                                                                console.log("f")
                                                            }}
                                                            disabled>
                                                        Downloaden
                                                    </Button>
                                                </InputRightElement>
                                            </InputGroup>
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
