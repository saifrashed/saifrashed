import '../styles/globals.css'
import {Box, ChakraProvider, CSSReset} from "@chakra-ui/react"
import customTheme from "theme";

import React, {useEffect} from "react";
import ReactGA from "react-ga";
import NavBar from '../components/NavBar'
import Head from "next/head"

function MyApp({Component, pageProps}) {

    useEffect(() => {
        if (process.env.NODE_ENV === "production") { // Checks for GA ID and only turns on GA in production
            ReactGA.initialize("UA-154460490-1");
            ReactGA.pageview(window.location.pathname + window.location.search);
        }
    });

    return (
        <>
            <Head>
                <title>Saif Rashed</title>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
                <link href="http://fonts.cdnfonts.com/css/helvetica-neue-9?styles=49034,49031,49033,49035,49032,49036,49038,49040,49042,49044,49037,49039,49041,49043,49045,49046" rel="stylesheet"/>
            </Head>
            <ChakraProvider theme={customTheme}>
                <CSSReset/>
                <NavBar/>
                <Box as="main" pt={{base: 24, md: 32}} pb={{base: 24, md: 16}}>
                    <Component {...pageProps}/>
                </Box>
            </ChakraProvider>
        </>
    )
}

export default MyApp
