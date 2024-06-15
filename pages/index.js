import Footer from "../components/Footer"
import { Box, Flex, Heading, HStack, Image, Stack, Tag, Text, useColorModeValue, VStack, } from '@chakra-ui/react';
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
                        <Stack py={{ base: 4, md: 20, xl: 50 }}>
                            <Box mb={{ base: 8, md: 20 }}>

                                <Text
                                    fontSize="4xl"
                                    fontWeight="extrabold"
                                >

                                    <span style={{
                                        background: "linear(to-l, #95ccff,#4299e1)",
                                        backgroundClip: "text"
                                    }}> Hello, i'm Saif Rashed</span> 👋
                                </Text>
                                <Heading
                                    mb={5}
                                    fontSize="3xl">
                                    Software Engineer 👨‍💻
                                </Heading>
                                <Text fontSize={'xl'}>
                                    Welcome to my website! Feel free to explore using the buttons below, and don't
                                    hesitate to contact me with any questions at <b>saifeddinerashed@icloud.com</b>. I'm
                                    happy to help in any way I can.
                                </Text>
                            </Box>

                            <Link href={"/repositories"}>
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
                                    _hover={{ transform: "translateY(-4px)", shadow: "sm" }}
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
                                                    Repositories 🛠️
                                                </Heading>
                                            </Flex>
                                        </Box>

                                        <Box>
                                            <Text fontSize="md" color="gray.600">
                                                A listing of my repositories, available on Github.
                                            </Text>
                                        </Box>
                                    </VStack>
                                </HStack>
                            </Link>

                            <Link href={"/about"}>
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
                                    _hover={{ transform: "translateY(-4px)", shadow: "sm" }}
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
                                                Information about me.
                                            </Text>
                                        </Box>
                                    </VStack>
                                </HStack>
                            </Link>

                            <hr style={{ margin: "20px 0px" }} />

                            <Link href={"https://www.oufaska.com"} target={"_blank"}>
                                <Flex
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
                                    _hover={{ transform: "translateY(-4px)", shadow: "sm" }}
                                    display="flex"
                                    flexWrap="wrap"
                                    alignItems="center"

                                >
                                    <Box
                                        rounded="lg"
                                        p={2}
                                        position="relative"
                                        overflow="hidden"
                                        lineHeight={0}
                                        boxShadow="inset 0 0 1px 1px rgba(0, 0, 0, 0.04)"
                                        flex="none"
                                        width="50px"
                                        height="50px"
                                        marginEnd={"2"}
                                    >
                                        <Box
                                            position="absolute"
                                            padding="2"
                                            top={0}
                                            bottom={0}
                                            left={0}
                                            right={0}
                                            opacity={0.75}
                                            bg={"#fff"}
                                        >
                                            <Image
                                                src={"/images/oufaska.svg"}
                                                layout="fixed"
                                                rounded="md"
                                            ></Image>
                                        </Box>
                                    </Box>

                                    <Box flex="1">
                                        <VStack align="start" justify="flex-start" spacing={1}>
                                            <VStack spacing={0} align="start">
                                                <HStack>
                                                    <Text fontWeight="bold" fontSize="md" noOfLines={2}>
                                                        Oufaska.com
                                                    </Text>
                                                </HStack>
                                                <Text
                                                    fontSize="sm"
                                                    color={useColorModeValue("neutral.1000", "neutralD.1000")}
                                                >
                                                    Designing platforms for brands ranging from websites to apps.
                                                </Text>
                                            </VStack>
                                        </VStack>
                                    </Box>

                                </Flex>
                            </Link>

                            <Link href={"https://www.ticketflip.nl"} target={"_blank"}>
                                <Flex
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
                                    _hover={{ transform: "translateY(-4px)", shadow: "sm" }}
                                    display="flex"
                                    flexWrap="wrap"
                                    alignItems="center"

                                >
                                    <Box
                                        rounded="lg"
                                        p={2}
                                        position="relative"
                                        overflow="hidden"
                                        lineHeight={0}
                                        boxShadow="inset 0 0 1px 1px rgba(0, 0, 0, 0.04)"
                                        flex="none"
                                        width="50px"
                                        height="50px"
                                        marginEnd={"2"}
                                    >
                                        <Box
                                            position="absolute"
                                            padding={3}
                                            top={0}
                                            bottom={0}
                                            left={0}
                                            right={0}
                                            opacity={0.75}
                                            bg={"#FFECC8"}
                                        >
                                            <Image
                                                src={"/images/ticketflip.svg"}

                                                layout="fixed"
                                                rounded="md"
                                            ></Image>
                                        </Box>
                                    </Box>

                                    <Box flex="1">
                                        <VStack align="start" justify="flex-start" spacing={1}>
                                            <VStack spacing={0} align="start">
                                                <HStack>
                                                    <Text fontWeight="bold" fontSize="md" noOfLines={2}>
                                                        Ticketflip.nl
                                                    </Text>
                                                </HStack>
                                                <Text
                                                    fontSize="sm"
                                                    color={useColorModeValue("neutral.1000", "neutralD.1000")}
                                                >
                                                    All basic components of event management for a low fixed transaction fee.
                                                </Text>
                                            </VStack>
                                        </VStack>
                                    </Box>

                                </Flex>
                            </Link>

                            <Link href={"https://www.hijabai.com"} target={"_blank"}>
                                <Flex
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
                                    _hover={{ transform: "translateY(-4px)", shadow: "sm" }}
                                    display="flex"
                                    flexWrap="wrap"
                                    alignItems="center"

                                >
                                    <Box
                                        rounded="lg"
                                        p={2}
                                        position="relative"
                                        overflow="hidden"
                                        lineHeight={0}
                                        boxShadow="inset 0 0 1px 1px rgba(0, 0, 0, 0.04)"
                                        flex="none"
                                        width="50px"
                                        height="50px"
                                        marginEnd={"2"}
                                    >
                                        <Box
                                            position="absolute"
                                            padding={2}
                                            top={0}
                                            bottom={0}
                                            left={0}
                                            right={0}
                                            opacity={0.75}
                                            bg={"#dbc2ac"}
                                        >
                                            <Image
                                                src={"https://www.hijabai.com/images/icon.png"}

                                                layout="fixed"
                                                rounded="md"
                                            ></Image>
                                        </Box>
                                    </Box>

                                    <Box flex="1">
                                        <VStack align="start" justify="flex-start" spacing={1}>
                                            <VStack spacing={0} align="start">
                                                <HStack>
                                                    <Text fontWeight="bold" fontSize="md" noOfLines={2}>
                                                        HijabAI.com
                                                    </Text>
                                                </HStack>
                                                <Text
                                                    fontSize="sm"
                                                    color={useColorModeValue("neutral.1000", "neutralD.1000")}
                                                >
                                                    Virtual AI Hijab Try On for Females
                                                </Text>
                                            </VStack>
                                        </VStack>
                                    </Box>

                                </Flex>
                            </Link>


                            <Link href={"https://www.arabictutorai.com"} target={"_blank"}>
                                <Flex
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
                                    _hover={{ transform: "translateY(-4px)", shadow: "sm" }}
                                    display="flex"
                                    flexWrap="wrap"
                                    alignItems="center"

                                >
                                    <Box
                                        rounded="lg"
                                        p={2}
                                        position="relative"
                                        overflow="hidden"
                                        lineHeight={0}
                                        boxShadow="inset 0 0 1px 1px rgba(0, 0, 0, 0.04)"
                                        flex="none"
                                        width="50px"
                                        height="50px"
                                        marginEnd={"2"}
                                    >
                                        <Box
                                            position="absolute"
                                            padding={2}
                                            top={0}
                                            bottom={0}
                                            left={0}
                                            right={0}
                                            opacity={0.75}
                                            bg={"#0B4033"}
                                        >
                                            <Image
                                                src={"/images/arabictutorai.png"}

                                                layout="fixed"
                                                rounded="md"
                                            ></Image>
                                        </Box>
                                    </Box>

                                    <Box flex="1">
                                        <VStack align="start" justify="flex-start" spacing={1}>
                                            <VStack spacing={0} align="start">
                                                <HStack>
                                                    <Text fontWeight="bold" fontSize="md" noOfLines={2}>
                                                        ArabictutorAI.com
                                                    </Text>
                                                </HStack>
                                                <Text
                                                    fontSize="sm"
                                                    color={useColorModeValue("neutral.1000", "neutralD.1000")}
                                                >
                                                    Learn, Master, and Perfect Arabic with AI-Powered Tutors.
                                                </Text>
                                            </VStack>
                                        </VStack>
                                    </Box>

                                </Flex>
                            </Link>



                            {/* <Link href={"https://www.mockfast.com"} target={"_blank"}>
                                <Flex
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
                                    _hover={{ transform: "translateY(-4px)", shadow: "sm" }}
                                    display="flex"
                                    flexWrap="wrap"
                                    alignItems="center"

                                >
                                    <Box
                                        rounded="lg"
                                        p={2}
                                        position="relative"
                                        overflow="hidden"
                                        lineHeight={0}
                                        boxShadow="inset 0 0 1px 1px rgba(0, 0, 0, 0.04)"
                                        flex="none"
                                        width="50px"
                                        height="50px"
                                        marginEnd={"2"}
                                    >
                                        <Box
                                            position="absolute"
                                            padding={2}
                                            top={0}
                                            bottom={0}
                                            left={0}
                                            right={0}
                                            opacity={0.75}
                                            bg={"#FDE04820"}
                                        >
                                            <Image
                                                src={"/images/mockfast.png"}

                                                layout="fixed"
                                                rounded="md"
                                            ></Image>
                                        </Box>
                                    </Box>

                                    <Box flex="1">
                                        <VStack align="start" justify="flex-start" spacing={1}>
                                            <VStack spacing={0} align="start">
                                                <HStack>
                                                    <Text fontWeight="bold" fontSize="md" noOfLines={2}>
                                                        Mockfast.com
                                                    </Text>
                                                </HStack>
                                                <Text
                                                    fontSize="sm"
                                                    color={useColorModeValue("neutral.1000", "neutralD.1000")}
                                                >
                                                    Prototyping made easy.
                                                </Text>
                                            </VStack>
                                        </VStack>
                                    </Box>

                                </Flex>
                            </Link> */}
                        </Stack>
                    </Container>
                </Box>
            </PageTransition>

            <Footer />
        </>
    )
}
