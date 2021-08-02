import About from "../components/About";
import Head from "next/head";
import NavBar from '../components/NavBar'
import Footer from "../components/Footer"

const AboutPage = () => {
    return (
        <>
            <NavBar/>
            <Head>
                <title>Over mij 🙋‍♂</title>
            </Head>
            <About/>
            <Footer/>
        </>
    );
};

export default AboutPage;
