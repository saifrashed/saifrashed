import '../styles/globals.css'
import {ChakraProvider, CSSReset} from "@chakra-ui/react"

import {useEffect} from "react";
import ReactGA from "react-ga";

function MyApp({Component, pageProps}) {

    useEffect(() => {
        if(process.env.NODE_ENV === "production") { // Checks for GA ID and only turns on GA in production
            ReactGA.initialize("UA-154460490-1");
            ReactGA.pageview(window.location.pathname + window.location.search);
        }
    });

    return (
        <ChakraProvider>
            <CSSReset/>
            <Component {...pageProps}/>
        </ChakraProvider>
    )
}

export default MyApp
