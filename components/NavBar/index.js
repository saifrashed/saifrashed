import React from "react";
import {
    Avatar,
    Box,
    Button,
    Drawer,
    DrawerBody,
    DrawerCloseButton,
    DrawerContent,
    DrawerHeader,
    DrawerOverlay,
    HStack,
    IconButton,
    Menu,
    useColorMode,
    useColorModeValue,
    useDisclosure,
    VStack
} from "@chakra-ui/react";
import Link from "next/link";
import { IoMdMoon, IoMdSunny } from "react-icons/io";
import { HamburgerIcon } from "@chakra-ui/icons";
import Container from "../container";

const Navbar = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    const navbarSectionBgColor = { light: "white", dark: "gray.900" };
    const navbarSectionColor = { light: "dark.900", dark: "white" };
    const { isOpen, onOpen, onClose } = useDisclosure();

    const handleThemeColorClick = () => {
        toggleColorMode();
    };

    const handleMenuItemClick = () => {
        onClose();
    }

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
                                <Avatar
                                    name="Saif Rashed"
                                    size="md"
                                    src="/images/portrait.jpeg"
                                    cursor="pointer"
                                />
                            </Link>
                        </Box>
                        <Box d="flex" alignItems="center">
                            <Menu>

                                <Link href={"/repositories"}>
                                    <Button
                                        variant="ghost"
                                        size="md"
                                        _activeLink={{
                                            color: useColorModeValue("blue.500", "blue.200"),
                                        }}
                                        px={4}
                                    >
                                        Repositories
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
                                        <IoMdSunny />
                                    ) : (
                                        <IoMdMoon />
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
                                <Avatar
                                    name="Saif Rashed"
                                    size="md"
                                    src="/images/portrait.jpeg"
                                    cursor="pointer"
                                />
                            </Link>
                        </Box>
                        <Box d="flex" alignItems="center">
                            <HStack>
                                <IconButton
                                    aria-label="Switch to light theme"
                                    icon={colorMode === "dark" ? <IoMdSunny /> : <IoMdMoon />}
                                    onClick={handleThemeColorClick}
                                    variant="ghost"
                                />
                                <Button onClick={onOpen} variant="ghost" px={0}>
                                    <HamburgerIcon />
                                </Button>
                            </HStack>
                            <Drawer placement={'top'} onClose={onClose} isOpen={isOpen}>
                                <DrawerOverlay />
                                <DrawerContent borderBottomRadius="6px">
                                    <DrawerCloseButton />
                                    <DrawerHeader>Menu</DrawerHeader>
                                    <DrawerBody py={4}>
                                        <VStack>

                                            <Link href={"/repositories"}>
                                                <Button
                                                    size="lg"
                                                    w="100%"
                                                    _activeLink={{
                                                        color: useColorModeValue("blue.500", "blue.200"),
                                                    }}
                                                    onClick={handleMenuItemClick}
                                                >
                                                    Repositories
                                                </Button>
                                            </Link>
                                            <Link href={"/about"}>
                                                <Button
                                                    size="lg"
                                                    w="100%"
                                                    _activeLink={{
                                                        color: useColorModeValue("blue.500", "blue.200"),
                                                    }}
                                                    onClick={handleMenuItemClick}
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
