import productionData from "../../public/data/productions.json";
import Head from "next/head";
import { Box, Grid } from "@chakra-ui/react";
import NavBar from "../../components/NavBar";
import Productions from "../../components/Productions"
import Footer from "../../components/Footer"


const ProductionsIndexPage = ({productions = []}) => {
    return (
        <>
            <NavBar/>

            <Head>
                <title>Producties</title>
            </Head>

            <Box maxW="6xl" mx="auto" px={4} py={8}>
                <Grid templateColumns="1fr">
                    <Box as="section">
                        <Productions productions={productions}/>
                    </Box>
                </Grid>
            </Box>

            <Footer/>

        </>
    );
};

export async function getStaticProps() {
    const productions = productionData;

    return {
        props: {
            productions,
        },
    };
}

export default ProductionsIndexPage;
