import Footer from "../components/Footer"
import {Box, Flex, Heading, HStack, Stack, Text, useColorModeValue, VStack} from '@chakra-ui/react';
import Container from "../components/container";
import React from "react";
import Link from "next/link";
import PageTransition from "@/components/page-transitions";

export default function Home() {
    return (
        <>
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
                                        }}> Hello, i'm Saif Rashed</span> 👋
                                </Text>
                                <Heading
                                    mb={5}
                                    fontSize="3xl">
                                    Software Engineer 👨‍💻
                                </Heading>
                                <Text fontSize={'xl'}>
                                    Welcome on my website! The buttons below will
                                    show you around
                                    and if you have questions you can reach me
                                    through <b>saifeddinerashed@icloud.com</b>
                                </Text>
                            </Box>


                            <Link href={"/projects"} isExternal>
                                <HStack
                                    p={4}
                                    bg={useColorModeValue("white", "gray.800")}
                                    rounded="xl"
                                    cursor="pointer"
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
                                                A listing of my public repositories.
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
                                    cursor="pointer"
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
                                                Contains information about my education and experience.
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
