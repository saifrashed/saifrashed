import {Box,Heading,Text, VStack, Button, ButtonGroup, Stack, SimpleGrid, Image} from "@chakra-ui/react";
import React, {FormEvent, useState} from "react";
import {IoMdArrowForward, IoIosLink} from "react-icons/io";
import Link from "next/link";


const ProductionDetail = ({production}) => {

    console.log(production);


    return (
        <VStack spacing={8} align="left">
                     <Box>
                         <VStack spacing={2} align="left">
                             <Heading as="h1" size="xl">
                                 {production.title}
                             </Heading>
                             <Text>{production.description}</Text>

                             <Stack spacing={4} direction="row" align="center">
                                 <a href={production.url} target="_blank">
                                 <Button size="lg">
                                     <IoIosLink/>
                                 </Button>
                                 </a>
                             </Stack>


                             <SimpleGrid columns={[1, 2, 3]} spacing={10}>

                                 {production.gallery.map((value, index) => {
                                     return (
                                         <Box>
                                             <Image src={value} alt={production.title} borderRadius="lg" />
                                         </Box>
                                     );
                                 })}

                             </SimpleGrid>
                         </VStack>


                     </Box>
        </VStack>
    );
};

export default ProductionDetail;
