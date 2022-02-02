import {Heading, List, ListItem, VStack, Tag} from '@chakra-ui/react'


import {Achievements} from './Achievements'
import React from "react";

export function Timeline({timelineList}) {
    const data = timelineList;

    return (
        <VStack
            width='full'
            spacing={5}
            zIndex={-1}
        >
            <Heading as='h2' paddingTop={10}>
                Timeline ⏳
            </Heading>

            <List spacing={4} align={"center"}>
                {
                    (data ?? []).map(({year, achievements}) => (
                        <ListItem key={year}>

                            <Tag size="lg" mt={1} ml={1} colorScheme="blue">
                                {year}
                            </Tag>

                            <Achievements achievements={achievements}/>
                        </ListItem>
                    ))
                }
            </List>

        </VStack>
    )
}
