import React from "react";
import Head from "next/head";
import {getAllPosts} from "../lib/graphcms";

import {Box, Heading, Stack, Text, VStack} from "@chakra-ui/react";
import PageTransition from "../components/page-transitions";
import BlogCard from "@/components/blog-card";
import sorter from "sort-isostring";
import NavBar from '../components/NavBar'
import Container from "../components/container";
import Footer from "../components/Footer";


export default function Blog({posts}) {

    return (
        <>
            <NavBar/>
            <Head>
                <title>Blog 📖‍</title>
            </Head>


            <PageTransition>
                <Container>
                    <Stack py={{base: 4, md: 20, xl: 50}}>
                        <VStack spacing={8} align="left">

                            <Box>
                                <VStack spacing={2} align="left">
                                    <Heading as="h1" size="xl">
                                        Blog 📖
                                    </Heading>
                                    <Text>Articles covering a wide range of subjects</Text>
                                </VStack>
                            </Box>

                            {!posts.length && "No posts found."}
                            <VStack w="100%" align="start" spacing={4}>
                                {posts
                                    .sort((x, y) =>
                                        sorter(y.publishedAt, x.publishedAt)
                                    )
                                    .map((post) => {
                                        return <BlogCard key={post.id} {...post} />;
                                    })}

                            </VStack>

                        </VStack>
                    </Stack>
                </Container>
            </PageTransition>
            <Footer/>
        </>
    );
}


export const getServerSideProps = async () => {
    const data = await getAllPosts();

    return {
        props: {posts: data.blogs}
    };
};
