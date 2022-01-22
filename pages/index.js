import NavBar from '../components/NavBar'
import Footer from "../components/Footer"
import {Box, Flex, Heading, HStack, Stack, Text, useColorModeValue, VStack} from '@chakra-ui/react';
import Container from "../components/container";
import React from "react";
import Link from "next/link";
import Head from "next/head"
import PageTransition from "@/components/page-transitions";

export default function Home() {
    return (
        <>
            <NavBar/>
            <Head>
                <title>Saif Rashed</title>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
                <link
                    href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
                    rel="stylesheet"/>
            </Head>

            <PageTransition>
                <Box position={'relative'}>
                    <Container>
                        <Stack py={{base: 4, md: 20, xl: 50}}>
                            <Box mb={{base: 8, md: 20}}>

                                <Text
                                    fontSize="4xl"
                                    fontWeight="extrabold"
                                >

                                        <span style={{
                                            background:     "linear(to-l, #95ccff,#4299e1)",
                                            backgroundClip: "text"
                                        }}> Hello, i am Saif Rashed</span> 👋
                                </Text>
                                <Heading
                                    mb={5}
                                    fontSize="3xl">
                                    Software Engineer 👨‍💻
                                </Heading>
                                <Text fontSize={'xl'}>
                                    Hi, thank you for looking at my website! The buttons below will
                                    show you around
                                    and if you are interested you can reach me
                                    through <b>saifeddinerashed@icloud.com</b>
                                </Text>
                            </Box>

                            <Link href={"/projects"} isExternal>
                                <HStack
                                    p={4}
                                    bg={useColorModeValue("white", "gray.800")}
                                    rounded="xl"
                                    borderWidth="1px"
                                    borderColor={useColorModeValue("gray.100", "gray.700")}
                                    textAlign="left"
                                    align="start"
                                    spacing={4}
                                    transition="all 0.25s"
                                    transition-timing-function="spring(1 100 10 10)"
                                    _hover={{transform: "translateY(-4px)", shadow: "sm"}}
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
                                                    Projects 🛠️
                                                </Heading>
                                            </Flex>
                                        </Box>

                                        <Box>
                                            <Text fontSize="md" color="gray.600">
                                                Here you can see my GitHub projects. This one can be interesting
                                                if you want to build something or read my code for other
                                                purposes.

                                            </Text>
                                        </Box>
                                    </VStack>
                                </HStack>
                            </Link>

                            <Link href={"/about"} isExternal>
                                <HStack
                                    p={4}
                                    bg={useColorModeValue("white", "gray.800")}
                                    rounded="xl"
                                    borderWidth="1px"
                                    borderColor={useColorModeValue("gray.100", "gray.700")}
                                    w="100%"
                                    h="100%"
                                    textAlign="left"
                                    align="start"
                                    spacing={4}
                                    transition="all 0.25s"
                                    transition-timing-function="spring(1 100 10 10)"
                                    _hover={{transform: "translateY(-4px)", shadow: "sm"}}
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
                                                    About me 🙋‍♂️
                                                </Heading>
                                            </Flex>
                                        </Box>

                                        <Box>
                                            <Text fontSize="md" color="gray.600">
                                                Contains information about my skills, studies and experiences.
                                            </Text>
                                        </Box>
                                    </VStack>
                                </HStack>
                            </Link>
                        </Stack>
                    </Container>
                </Box>
            </PageTransition>


            <Footer/>
        </>
    )
}
