import Footer from "../components/Footer"
import {Box, Flex, Heading, HStack, Image, Stack, Tag, Text, useColorModeValue, VStack,} from '@chakra-ui/react';
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

                            <hr style={{margin: "20px 0px"}}/>

                            <Link href={"https://www.ticketflip.nl"} target={"_blank"} unstyled>
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
                                    <Box
                                        rounded="lg"
                                        p={2}
                                        position="relative"
                                        overflow="hidden"
                                        lineHeight={0}
                                        boxShadow="inset 0 0 1px 1px rgba(0, 0, 0, 0.04)"
                                    >
                                        <Box
                                            position="absolute"
                                            top={0}
                                            bottom={0}
                                            left={0}
                                            right={0}
                                            opacity={0.25}
                                            bg={"#FFECC8"}
                                        ></Box>
                                        <Image
                                            src={"/images/ticketflip.svg"}
                                            height="50"
                                            width="50"
                                            layout="fixed"
                                            rounded="md"
                                        ></Image>
                                    </Box>

                                    <VStack align="start" justify="flex-start" spacing={1}>
                                        <VStack spacing={0} align="start">
                                            <HStack>
                                                <Text fontWeight="bold" fontSize="md" noOfLines={2}>
                                                    Ticketflip.nl
                                                </Text>
                                                <Tag size="sm" colorScheme={"orange"}>
                                                    Web App
                                                </Tag>
                                            </HStack>
                                            <Text
                                                fontSize="sm"
                                                color={useColorModeValue("neutral.1000", "neutralD.1000")}
                                            >
                                                All basic components of event management for a low fixed
                                                transaction fee.
                                            </Text>
                                        </VStack>
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
