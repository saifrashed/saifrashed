import {Box, Flex, HStack, List, ListItem, Text, VStack, useColorModeValue} from '@chakra-ui/react'
import React from "react";


export function Achievements({achievements}) {
    return (
        <List paddingBottom={4}>
            {
                (achievements ?? []).map(({title, description}, index) => {
                    const isLastElement     = index === achievements.length - 1;
                    const isFirstElement    = index === 0;
                    const shouldConnectDots = achievements.length > 1;

                    return (
                        <ListItem
                            key={title}
                            zIndex={1}
                            paddingTop={4}
                            position='relative'
                        >
                            {
                                shouldConnectDots
                                ? <Flex
                                    left='5px'
                                    top={isFirstElement ? 5 : 0}
                                    width='2.5px'
                                    bottom={0}
                                    height={isLastElement ? 5 : 'unset'}
                                    zIndex={-1}
                                    position='absolute'
                                    backgroundColor='gray.100'
                                />
                                : null
                            }

                            <HStack
                                width='full'
                            >
                                <Box w="100%">
                                    <VStack
                                        align="center"
                                        p={4}
                                        bg={useColorModeValue("white", "gray.800")}
                                        rounded="xl"
                                        borderWidth="1px"
                                        borderColor={useColorModeValue("gray.100", "gray.700")}
                                        spacing={0}

                                    >
                                        <Text
                                            fontSize='md'
                                            textAlign='center'
                                        >
                                            {title}
                                        </Text>

                                        <Text
                                            fontSize='md'
                                            color={"gray.500"}
                                            textAlign='center'
                                        >
                                            {description}
                                        </Text>

                                    </VStack>
                                </Box>
                            </HStack>
                        </ListItem>
                    )
                })
            }
        </List>
    )
}
