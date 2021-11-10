import {getAllPostsPaths, getPost} from "../../lib/graphcms";
import {RichText} from '@graphcms/rich-text-react-renderer';

import readingTime from "reading-time";
import BlogLayout from "../../layouts/blog";
import {Heading, ListItem, Stack, Table, Tbody, Td, Text, Th, Tr, UnorderedList, VStack} from "@chakra-ui/react";
import NavBar from '../../components/NavBar'
import Container from "../../components/container";

export default function Blog({source, frontMatter}) {

    return (
        <>
            <NavBar/>

            <Container>
                <Stack py={{base: 4, md: 20, xl: 50}}>
                    <BlogLayout frontMatter={frontMatter}>
                        <VStack  align="stretch">
                            <RichText
                                content={source}
                                renderers={{
                                    h1:         ({children}) => <Heading as="h1" size="3xl">{children}</Heading>,
                                    h2:         ({children}) => <Heading as="h2" size="xl">{children}</Heading>,
                                    h3:         ({children}) => <Heading as="h3" size="lg">{children}</Heading>,
                                    h4:         ({children}) => <Heading as="h4" size="md">{children}</Heading>,
                                    h5:         ({children}) => <Heading as="h5" size="sm">{children}</Heading>,
                                    h6:         ({children}) => <Heading as="h6" size="xs">{children}</Heading>,
                                    p:          ({children}) => <Text>{children}</Text>,
                                    bold:       ({children}) => <strong>{children}</strong>,
                                    ol:         ({children}) => <UnorderedList>{children}</UnorderedList>,
                                    li:         ({children}) => <ListItem>{children}</ListItem>,
                                    table:      ({children}) => <Table variant="simple">{children}</Table>,
                                    table_body: ({children}) => <Tbody>{children}</Tbody>,
                                    table_head: ({children}) => <Th>{children}</Th>,
                                    table_row:  ({children}) => <Tr>{children}</Tr>,
                                    table_cell: ({children}) => <Td>{children}</Td>
                                }}
                            />
                        </VStack>
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

    return {
        props:      {
            source:      postData.blogs[0].content.raw,
            frontMatter: {
                wordCount:   postData.blogs[0].content.text.split(/\s+/gu).length,
                readingTime: readingTime(postData.blogs[0].content.text),
                ...postData.blogs[0],
            },
        },
        revalidate: 1,
    };
}
