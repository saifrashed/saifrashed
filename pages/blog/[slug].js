import {getAllPostsPaths, getPost} from "../../lib/graphcms";

import {serialize} from "next-mdx-remote/serialize";
import {MDXRemote} from "next-mdx-remote";
import ChakraUIRenderer from 'chakra-ui-markdown-renderer';

import readingTime from "reading-time";
import BlogLayout from "../../layouts/blog";
import {Stack} from "@chakra-ui/react";
import NavBar from '../../components/NavBar'
import Container from "../../components/container";

export default function Blog({source, frontMatter}) {

    return (
        <>
            <NavBar/>

            <Container>
                <Stack py={{base: 4, md: 20, xl: 50}}>
                    <BlogLayout frontMatter={frontMatter}>
                        <MDXRemote {...source} components={ChakraUIRenderer}/>
                    </BlogLayout>
                </Stack>
            </Container>
        </>)
}

export async function getStaticPaths() {
    const paths = await getAllPostsPaths();

    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({params}) {
    const postData = await getPost(params.slug);

    console.log(postData.blogs[0].content);


    const mdxSource = await serialize(postData.blogs[0].content, {
        mdxOptions: {
            remarkPlugins: [
                require("remark-autolink-headings"),
                require("remark-slug"),
                require("remark-code-titles"),
            ],
        },
    });

    return {
        props:      {
            source:      mdxSource,
            frontMatter: {
                wordCount:   postData.blogs[0].content.split(/\s+/gu).length,
                readingTime: readingTime(postData.blogs[0].content),
                ...postData.blogs[0],
            },
        },
        revalidate: 1,
    };
}
