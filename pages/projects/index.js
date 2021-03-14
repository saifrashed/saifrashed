import Head from "next/head";
import { Box, Grid } from "@chakra-ui/react";
import NavBar from "../../components/NavBar";
import Projects from "../../components/Projects"
import Footer from "../../components/Footer"


const ProjectsIndexPage = ({projects = []}) => {
    return (
        <>
            <NavBar/>

            <Head>
                <title>Projecten</title>
            </Head>

            <Box maxW="6xl" mx="auto" px={4} py={8}>
                <Grid templateColumns="1fr">
                    <Box as="section">
                        <Projects projects={projects}/>
                    </Box>
                </Grid>
            </Box>

            <Footer/>
        </>
    );
};

export async function getStaticProps() {
    const res = await fetch(`https://api.github.com/users/saifrashed/repos?per_page=100`);
    const projects = await res.json();

    console.log(projects);

    return {
        props: {
            projects,
        },
    };
}

export default ProjectsIndexPage;
