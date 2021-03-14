import productionData from "../../public/data/productions.json";
import Head from "next/head";
import {Box, Grid} from "@chakra-ui/react";
import NavBar from "../../components/NavBar";
import ProductionDetail from "../../components/ProductionDetail"
import {useRouter} from 'next/router'


const ProductionDetailPage = ({productions = []}) => {
    const router     = useRouter();
    const production = productions.filter(function (item) {
        return item.slug === router.query.slug;
    })[0];

    return (
        <>
            <NavBar/>

            <Head>
                <title>Producties</title>
            </Head>

            <Box maxW="6xl" mx="auto" px={4} py={8}>
                <Grid templateColumns="1fr">
                    <Box as="section">
                        <ProductionDetail production={production}/>
                    </Box>
                </Grid>
            </Box>

        </>
    );
};


export const getStaticPaths = async () => {
    return {
        paths:    [], //indicates that no page needs be created at build time
        fallback: 'blocking' //indicates the type of fallback
    }
};

export async function getStaticProps() {
    const productions = productionData;

    return {
        props: {
            productions,
        },
    };
}

export default ProductionDetailPage;
