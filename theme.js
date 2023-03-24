import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";
import { blue, blueDark, sand, sandDark } from "@radix-ui/colors";

const transformRadixToChakraFormat = (scale) => {
    const output = Object.values(scale).reduce(
        (accumulator, currentValue, index) => {
            if (index === 0) {
                accumulator[`50`] = currentValue;
            } else {
                accumulator[`${index}00`] = currentValue;
            }
            return accumulator;
        },
        {}
    );

    return output;
};

const radixNeutral = transformRadixToChakraFormat(sand);
const radixNeutralDark = transformRadixToChakraFormat(sandDark);
const radixPrimary = transformRadixToChakraFormat(blue);
const radixPrimaryD = transformRadixToChakraFormat(blueDark);

const customTheme = extendTheme({
    fonts: {
        heading: "HelveticaNeue",
        body: "HelveticaNeue",
    },
    colors: {
        neutral: {
            ...radixNeutral,
            // 100: "hsl(41, 100%, 99%)",
        },
        neutralD: {
            ...radixNeutralDark,
        },
        gray: {
            50: "hsl(50 20.0% 99.0%)",
            100: "hsl(60 7.7% 97.5%)",
            200: "hsl(58 6.1% 92.9%)",
            300: "hsl(51 6.0% 77.1%)",
            400: "hsl(50 3.8% 30.6%)",
            500: "hsl(50 4.0% 42.7%)",
            600: "hsl(52 3.1% 48.3%)",
            700: "hsl(58 3.7% 13.1%)",
            800: "hsl(58 3.7% 13.1%)",
            900: "hsl(61 2.0% 8.3%)",
        },
        primary: {
            ...radixPrimary,
        },
        primaryD: {
            ...radixPrimaryD,
        },
    },
    styles: {
        global: (props) => ({
            html: {
                scrollBehavior: "smooth",
            },
            body: {
                color: mode("neutral.1100", "neutralD.1100")(props),
                bg: mode("neutral.100", "neutralD.50")(props),
                fontSize: "1.2em",
                ".deleted": {
                    color: "#ff8383 !important",
                    fontStyle: "normal !important",
                },
                ".inserted": {
                    color: "#b5f4a5 !important",
                    fontStyle: "normal !important",
                },
                MozOsxFontSmoothing: "grayscale",
                WebkitFontSmoothing: "antialiased",
                textRendering: "optimizeLegibility",
            },
        }),
    },
    components: {
        MenuButton: {
            baseStyle: (props) => ({
                _hover: {
                    backgroundColor: mode("neutral.400", "neutralD.400")(props),
                },
            }),
        },
        Heading: {
            baseStyle: (props) => ({
                pb: 2,
                fontWeight: "500",
            }),
        },
        Button: {
            baseStyle: {
                fontWeight: "500",
                rounded: "lg",
            },
        },
        Tag: {
            baseStyle: {
                rounded: "lg",
            },
        },
        textarea: {
            baseStyle: {
                background: "green.300",
            },
        },
        Link: {
            baseStyle: {
                fontWeight: "inherit",
                _hover: {
                    textDecoration: "none",
                },
            },
        },
    },
});

export default customTheme;
