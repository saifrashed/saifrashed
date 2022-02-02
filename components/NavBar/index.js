import React, {useEffect} from "react";
import {Avatar, Box, Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, HStack, IconButton, Menu, useColorMode, useColorModeValue, useDisclosure, VStack} from "@chakra-ui/react";
import Link from "next/link";
import {IoMdMoon, IoMdSunny} from "react-icons/io";
import {HamburgerIcon} from "@chakra-ui/icons";
import Container from "../container";
import useSound from "use-sound";


const Navbar = () => {
    const {colorMode, toggleColorMode} = useColorMode();
    const navbarSectionBgColor         = {light: "white", dark: "gray.900"};
    const navbarSectionColor           = {light: "dark.900", dark: "white"};
    const borderColor                  = {light: "blue.600", dark: "blue.400"};
    const {isOpen, onOpen, onClose}    = useDisclosure();
    const [play]                       = useSound("/lightswitch.mp3", {
        volume: 0.05,
        sprite: {
            on:  [0, 300],
            off: [500, 300],
        },
    });


    useEffect(() => {

    }, []);

    const [playMenuSound] = useSound("/menu-open.mp3", {
        volume: 0.05
    });


    const handleThemeColorClick = () => {
        toggleColorMode();
        colorMode === "dark" ? play({id: "on"}) : play({id: "off"});
    };

    const handleMenuClick = () => {
        playMenuSound();
    };

    return (
        <Box
            as="header"
            bg={navbarSectionBgColor[colorMode]}
            color={navbarSectionColor[colorMode]}
            zIndex={1}
            fontWeight="bold"
            position="fixed"
            w="100%"
            borderBottomWidth="2px"
            borderBottomColor={useColorModeValue("neutral.400", "neutralD.400")}
            shadow="0 0 10px 0 rgba(0,0,0, 0.035);"
        >
            <Container>
                <Box display={["none", "none", "none", "block"]}>
                    <HStack justifyContent="space-between" alignItems="center" py={4}>
                        <Box d="flex" alignItems="center">
                            <Link href="/">

                                <Link href="/">
                                    <Avatar
                                        name="Saif Rashed"
                                        size="md"
                                        src="/images/portrait.jpg"
                                        cursor="pointer"
                                    />
                                </Link>
                            </Link>
                        </Box>
                        <Box d="flex" alignItems="center">
                            <Menu>
                                <Link href={"/projects"}>
                                    <Button
                                        variant="ghost"
                                        size="md"
                                        _activeLink={{
                                            color: useColorModeValue("blue.500", "blue.200"),
                                        }}
                                        px={4}
                                    >
                                        Projects
                                    </Button>
                                </Link>
                                <Link href={"/about"}>
                                    <Button
                                        variant="ghost"
                                        size="md"
                                        _activeLink={{
                                            color: useColorModeValue("blue.500", "blue.200"),
                                        }}
                                        px={4}
                                    >
                                        About
                                    </Button>
                                </Link>
                            </Menu>
                        </Box>
                        <Box px={2}>
                            <IconButton
                                aria-label="Switch to light theme"
                                icon=
                                    {
                                        colorMode === "dark" ? (
                                            <IoMdSunny/>
                                        ) : (
                                            <IoMdMoon/>
                                        )

                                    }
                                onClick={handleThemeColorClick}
                                variant="ghost"
                            />
                        </Box>
                    </HStack>
                </Box>
                <Box display={["block", "block", "block", "none"]}>
                    <HStack justifyContent="space-between" alignItems="center" py={4}>
                        <Box d="flex" alignItems="center">
                            <Link href="/">

                                <Link href="/">
                                    <Avatar
                                        name="Saif Rashed"
                                        size="md"
                                        src="/images/portrait.jpg"
                                        cursor="pointer"
                                    />
                                </Link>
                            </Link>
                        </Box>
                        <Box d="flex" alignItems="center">
                            <Box>
                                <IconButton
                                    aria-label="Switch to light theme"
                                    icon=
                                        {
                                            colorMode === "dark" ? (
                                                <IoMdSunny/>
                                            ) : (
                                                <IoMdMoon/>
                                            )

                                        }
                                    onClick={handleThemeColorClick}
                                    variant="ghost"
                                />
                            </Box>
                            <Button onClick={() => {
                                onOpen();
                                handleMenuClick()
                            }} variant="ghost" px={0}>
                                <HamburgerIcon/>
                            </Button>
                            <Drawer placement={'top'} onClose={onClose} isOpen={isOpen}>
                                <DrawerOverlay/>
                                <DrawerContent borderBottomRadius="6px">
                                    <DrawerCloseButton/>
                                    <DrawerHeader>Menu</DrawerHeader>
                                    <DrawerBody py={4}>
                                        <VStack>
                                            <Link href={"/projects"}>
                                                <Button
                                                    size="lg"
                                                    w="100%"
                                                    _activeLink={{
                                                        color: useColorModeValue("blue.500", "blue.200"),
                                                    }}
                                                >
                                                    Projects
                                                </Button>
                                            </Link>
                                            <Link href={"/about"}>

                                                <Button
                                                    size="lg"
                                                    w="100%"
                                                    _activeLink={{
                                                        color: useColorModeValue("blue.500", "blue.200"),
                                                    }}
                                                >
                                                    About
                                                </Button>
                                            </Link>
                                        </VStack>
                                    </DrawerBody>
                                </DrawerContent>
                            </Drawer>
                        </Box>
                    </HStack>
                </Box>
            </Container>
        </Box>
    );
};

export default Navbar;
