import '../styles/globals.css'
import {Box, ChakraProvider, CSSReset} from "@chakra-ui/react"
import customTheme from "theme";

import React, {useEffect} from "react";
import ReactGA from "react-ga";
import NavBar from '../components/NavBar'
import Head from "next/head"

import FontFace from "../components/font-face"

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

                <meta property='og:title' content='Saif Rashed'/>
                <meta property='og:image' content='https://www.saifrashed.com/images/og.png'/>
                <meta property='og:description' content='Personal website.'/>
                <meta property='og:url' content='https://www.saifrashed.com'/>
            </Head>
            <ChakraProvider theme={customTheme}>
                <FontFace/>
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
