import {border, Box, Button, HStack, IconButton, Link as _Link, Menu, MenuButton, MenuItem, MenuList, useColorMode, Text} from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import {IoMdMoon, IoMdSunny} from "react-icons/io";


const LINKS = [
    {
        url:   "/projects",
        title: "Projecten",
    },
    {
        url:   "/productions",
        title: "Producties",
    },
    {
        url:   "/about",
        title: "Over mij",
    },
];

const Navbar = () => {
    const {colorMode, toggleColorMode} = useColorMode();
    const navbarSectionBgColor         = {light: "white", dark: "gray.900"};
    const navbarSectionColor           = {light: "dark.900", dark: "white"};
    const borderColor                  = {light: "blue.600", dark: "blue.400"};

    const themeSwitcherButtonNode = () => {
        if (colorMode === "light") {
            return (
                <IconButton
                    aria-label="Switch to dark theme"
                    icon={<IoMdMoon/>}
                    onClick={toggleColorMode}
                    variant="ghost"
                />
            );
        }

        return (
            <IconButton
                aria-label="Switch to light theme"
                icon={<IoMdSunny/>}
                onClick={toggleColorMode}
                variant="ghost"
            />
        );
    };

    const mobileMenuNode = () => {
        return (
            <Menu>
                <MenuButton as={Button}>Menu</MenuButton>
                <MenuList
                    placement="bottom-end"
                    bg={navbarSectionBgColor[colorMode]}
                    color={navbarSectionColor[colorMode]}
                >
                    {[
                        LINKS.map((link) => {
                            return (
                                <Box key={link.url}>
                                    <Link href={link.url}>
                                        <MenuItem>
                                            <_Link href={link.url} rounded="md">
                                                {link.title}
                                            </_Link>
                                        </MenuItem>
                                    </Link>
                                </Box>
                            );
                        }),
                    ]}
                    <MenuItem onClick={toggleColorMode} >
                        Schakel weergave
                    </MenuItem>
                </MenuList>
            </Menu>
        );
    };

    const desktopMenuNode = () => {
        return (
            <HStack isInline spacing={4} alignItems="center">
                {[
                    LINKS.map((link) => {
                        return (
                            <Box key={link.url}>
                                <Link href={link.url}>
                                    <_Link p={4} href={link.url} rounded="md">
                                        {link.title}
                                    </_Link>
                                </Link>
                            </Box>
                        );
                    }),
                ]}
                <Box px={2}>{themeSwitcherButtonNode()}</Box>
            </HStack>
        );
    };

    return (
        <Box
            as="header"
            zIndex={1}
            bg={navbarSectionBgColor[colorMode]}
            color={navbarSectionColor[colorMode]}
            shadow="md"
            fontWeight="bold"
            px={4}
            borderTopWidth={5}
            borderColor={borderColor[colorMode]}
        >
            <Box maxW="6xl" mx="auto" px={4}>
                <HStack justifyContent="space-between" alignItems="center" py={4}>
                    <Box d="flex" alignItems="center">
                        <Link href="/">
                            <_Link href="/" d="flex">
                                    <Image
                                        src="/images/common/logo.png"
                                        alt="Logo"
                                        height={50}
                                        width={200}
                                        quality={100}
                                        priority
                                    />
                            </_Link>
                        </Link>
                    </Box>
                    <Box display={["none", "none", "none", "block"]}>
                        {desktopMenuNode()}
                    </Box>
                    <Box display={["block", "block", "block", "none"]} px={4}>
                        {mobileMenuNode()}
                    </Box>
                </HStack>
            </Box>
        </Box>
    );
};

export default Navbar;
