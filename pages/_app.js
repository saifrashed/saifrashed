import '../styles/globals.css'
import {ChakraProvider, CSSReset} from "@chakra-ui/react"
import theme from "../theme"
import FontFace from "../components/font-face";


function MyApp({Component, pageProps}) {
    return (
        <ChakraProvider theme={theme}>
            <FontFace/>
            <CSSReset/>
            <Component {...pageProps}/>
        </ChakraProvider>
    )
}

export default MyApp
