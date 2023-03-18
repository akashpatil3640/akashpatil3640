import Navbar from "./Navbar.js";
import Footer from "./Footer.js";
import image from "./Naruto/47.png";
import image2 from "./Naruto/67.png"
import { Box ,Grid,GridItem,Text,Button,Image } from "@chakra-ui/react"
import { useMediaQuery } from '@chakra-ui/react'

import {
    Badge,
    Flex,
    DarkMode,
    useColorModeValue,
} 
from "@chakra-ui/react";

import ST from "./screenShots/ST.png";
import AP from "./screenShots/Alight.png";
import TODO from "./screenShots/todo.png";



function Projects(){
    const [isLargerThan800] = useMediaQuery('(min-width: 800px)');
    // let boxBg = useColorModeValue("white !important", "#111c44 !important");

    let boxBg = useColorModeValue("white !important", "gray.700 !important");
  let mainText = useColorModeValue("gray.800", "white");


    return (
        
        <>

            {
                isLargerThan800 ? 

            

                <Grid
                    templateRows='repeat(1,1fr)'
                    templateColumns='repeat(1,1fr)'

                >
                    <GridItem rowSpan={1} colSpan={1}>
                        <Navbar /> 
                    </GridItem>

                    <GridItem rowSpan={1} colSpan={1}>
                        
                        <Box style={{ backgroundImage: `url(${image})` ,
                            height:'100vh',
                            fontSize:'50px',
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat',
                            justify:"center" }} 
                        >


                            <Grid 
                                templateRows='repeat(1,1fr)'
                                templateColumns='repeat(3,1fr)'
                            > 
                                <GridItem rowSpan={1} colSpan={1}>

                                    <Flex
                                    borderRadius='20px'
                                    bg={boxBg}
                                    p='20px'
                                    h='345px'
                                    w={{ base: "315px", md: "345px" }}
                                    alignItems='center'
                                    direction='column'
                                    style={{padding:"50px 50px 50px 50px", top:'30%',left:'5%' , position: 'absolute' }}
                                    
                                    opacity='0.8'
                                    
                                    >
                                        <Flex w='100%' mb='18px'>
                                            
                                            <Text
                                            my='auto'
                                            fontWeight='600'
                                            color={mainText}
                                            textAlign='center'
                                            fontSize='xl'
                                            
                                            me='auto'>
                                            Secret Translator
                                            </Text>

                                            

                                        </Flex>

                                        <Image

                                            src={ST}
                                            maxW='100%'
                                            borderRadius='20px'
                                            mb='10px'
                                        />

                                        <Flex mt='auto' justify='space-between' w='100%' align='center'>
                                            <DarkMode>
                                            <Badge
                                                borderRadius='9px'
                                                size='md'
                                                colorScheme='green'
                                                color='green.400'
                                                textAlign='center'
                                                display='flex'
                                                justifyContent='center'
                                                my={1}
                                                alignItems='center'>
                                                <Button><a href={'https://github.com/akashpatil3640/ST'}>View</a></Button>
                                            </Badge>
                                            </DarkMode>
                                            
                                        </Flex>
                                    </Flex>
                                </GridItem>

                                <GridItem rowSpan={1} colSpan={1}>
                                    <Flex
                                        borderRadius='20px'
                                        bg={boxBg}
                                        p='20px'
                                        h='345px'
                                        w={{ base: "315px", md: "345px" }}
                                        alignItems='center'
                                        direction='column'
                                        style={{padding:"50px 50px 50px 50px", top:'30%',left:'40%' , position: 'absolute' }}
                                        opacity='0.8'>

                                        <Flex w='100%' mb='18px'>
                                            
                                            <Text
                                            my='auto'
                                            fontWeight='600'
                                            color={mainText}
                                            textAlign='center'
                                            fontSize='xl'
                                            me='auto'>
                                            Assessment Platform
                                            </Text>

                                            

                                        </Flex>

                                        <Image

                                            src={AP}
                                            maxW='100%'
                                            borderRadius='20px'
                                            mb='10px'
                                        />

                                        <Flex mt='auto' justify='space-between' w='100%' align='center'>
                                            <DarkMode>
                                            <Badge
                                                borderRadius='9px'
                                                size='md'
                                                colorScheme='green'
                                                color='green.400'
                                                textAlign='center'
                                                display='flex'
                                                justifyContent='center'
                                                my={1}
                                                alignItems='center'>
                                                <Button><a href={'https://github.com/akashpatil3640/AP'}>View</a></Button>
                                            </Badge>
                                            </DarkMode>
                                            
                                        </Flex>
                                    </Flex>
                                </GridItem>

                                <GridItem rowSpan={1} colSpan={1}>
                                    <Flex
                                        borderRadius='20px'
                                        bg={boxBg}
                                        p='20px'
                                        h='345px'
                                        w={{ base: "315px", md: "345px" }}
                                        alignItems='center'
                                        direction='column'
                                        style={{padding:"50px 50px 50px 50px", top:'30%',left:'75%' , position: 'absolute' }}
                                        opacity='0.8'>

                                        <Flex w='100%' mb='18px'>
                                            
                                            <Text
                                            my='auto'
                                            fontWeight='600'
                                            color={mainText}
                                            textAlign='center'
                                            fontSize='xl'
                                            me='auto'>
                                            Todo App
                                            </Text>

                                        </Flex>

                                        <Image

                                            src={TODO}
                                            maxW='100%'
                                            borderRadius='20px'
                                            mb='10px'
                                        />

                                        <Flex mt='auto' justify='space-between' w='100%' align='center'>
                                            <DarkMode>
                                            <Badge
                                                borderRadius='9px'
                                                size='md'
                                                colorScheme='green'
                                                color='green.400'
                                                textAlign='center'
                                                display='flex'
                                                justifyContent='center'
                                                my={1}
                                                alignItems='center'>
                                                <Button><a href={'https://akashpatil3640.github.io/todoapp/'}>View</a></Button>
                                            </Badge>
                                            </DarkMode>
                                            
                                        </Flex>
                                    </Flex>
                                </GridItem>
                            </Grid>

                            
                     

                        </Box>
                    </GridItem>

                    <GridItem rowSpan={1} colSpan={1}>
                        <Footer />
                    </GridItem>
                </Grid>

                

                //mobile view -----------------------------------------------------------------

                : 

                <Grid
                    templateRows='repeat(1,1fr)'
                    templateColumns='repeat(1,1fr)'

                >
                    <GridItem rowSpan={1} colSpan={1}>
                        <Navbar /> 
                    </GridItem>

                    <GridItem rowSpan={1} colSpan={1}>
                        
                        <Box style={{ backgroundImage: `url(${image2})` ,
                            height:'100vh',
                            fontSize:'50px',
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat',
                            justify:"center" }} 
                        >

                            <Grid 
                                templateRows='repeat(3,1fr)'
                                templateColumns='repeat(1,1fr)'
                                mx={2}
                            > 
                                <GridItem rowSpan={1} colSpan={1}>

                                    <Flex
                                    borderRadius='20px'
                                    bg={boxBg}
                                    p='20px'
                                    h='280px'
                                    w={{ base: "315px", md: "345px" }}
                                    alignItems='center'
                                    direction='column'
                                    my={3}
                                    style={{padding:"25px 25px 25px 25px", left:'5%' ,top:'6%' }}
                                    
                                    opacity='0.8'
                                    
                                    >
                                        <Flex w='100%' mb='18px'>
                                            
                                            <Text
                                            my='auto'
                                            fontWeight='600'
                                            color={mainText}
                                            textAlign='center'
                                            fontSize='xl'
                                            
                                            me='auto'>
                                            Secret Translator
                                            </Text>

                                            

                                        </Flex>

                                        <Image

                                            src={ST}
                                            maxW='100%'
                                            borderRadius='20px'
                                            mb='10px'
                                        />

                                        <Flex mt='auto' justify='space-between' w='100%' align='center'>
                                            <DarkMode>
                                            <Badge
                                                borderRadius='9px'
                                                size='md'
                                                colorScheme='green'
                                                color='green.400'
                                                textAlign='center'
                                                display='flex'
                                                justifyContent='center'
                                                my={1}
                                                alignItems='center'>
                                                <Button><a href={'https://github.com/akashpatil3640/ST'}>View</a></Button>
                                            </Badge>
                                            </DarkMode>
                                            
                                        </Flex>
                                    </Flex>
                                </GridItem>

                                <GridItem rowSpan={1} colSpan={1}>
                                    <Flex
                                        borderRadius='20px'
                                        bg={boxBg}
                                        p='20px'
                                        h='280px'
                                        w={{ base: "315px", md: "345px" }}
                                        alignItems='center'
                                        direction='column'
                                        my={3}
                                        style={{padding:"25px 25px 25px 25px", left:'5%' ,top:'30%' }}
                                        opacity='0.8'>

                                        <Flex w='100%' mb='18px'>
                                            
                                            <Text
                                            my='auto'
                                            fontWeight='600'
                                            color={mainText}
                                            textAlign='center'
                                            fontSize='xl'
                                            me='auto'>
                                            Assessment Platform
                                            </Text>

                                            

                                        </Flex>

                                        <Image

                                            src={AP}
                                            maxW='100%'
                                            borderRadius='20px'
                                            mb='10px'
                                        />

                                        <Flex mt='auto' justify='space-between' w='100%' align='center'>
                                            <DarkMode>
                                            <Badge
                                                borderRadius='9px'
                                                size='md'
                                                colorScheme='green'
                                                color='green.400'
                                                textAlign='center'
                                                display='flex'
                                                justifyContent='center'
                                                my={1}
                                                alignItems='center'>
                                                <Button><a href={'https://github.com/akashpatil3640/AP'}>View</a></Button>
                                            </Badge>
                                            </DarkMode>
                                            
                                        </Flex>
                                    </Flex>
                                </GridItem>

                                <GridItem rowSpan={1} colSpan={1}>
                                    <Flex
                                        borderRadius='20px'
                                        bg={boxBg}
                                        p='20px'
                                        h='280px'
                                        w={{ base: "315px", md: "345px" }}
                                        alignItems='center'
                                        direction='column'
                                        my={3}
                                        style={{padding:"25px 25px 25px 25px", left:'5%' ,top:'54%' }}
                                        opacity='0.8'>

                                        <Flex w='100%' mb='18px'>
                                            
                                            <Text
                                            my='auto'
                                            fontWeight='600'
                                            color={mainText}
                                            textAlign='center'
                                            fontSize='xl'
                                            me='auto'>
                                            Todo App
                                            </Text>

                                        </Flex>

                                        <Image

                                            src={TODO}
                                            maxW='100%'
                                            borderRadius='20px'
                                            mb='10px'
                                        />

                                        <Flex mt='auto' justify='space-between' w='100%' align='center'>
                                            <DarkMode>
                                            <Badge
                                                borderRadius='9px'
                                                size='md'
                                                colorScheme='green'
                                                color='green.400'
                                                textAlign='center'
                                                display='flex'
                                                justifyContent='center'
                                                my={1}
                                                alignItems='center'>
                                                <Button><a href={'https://akashpatil3640.github.io/todoapp/'}>View</a></Button>
                                            </Badge>
                                            </DarkMode>
                                            
                                        </Flex>
                                    </Flex>
                                </GridItem>
                            </Grid>

                            
                     

                        </Box>
                    </GridItem> 

                            

                        

                   
                        

                        

                        

                        

                    <GridItem rowSpan={1} colSpan={1}>
                        <Footer />
                    </GridItem>
                </Grid>



            }

        

             

        </>

       
        
    );
}

export default Projects;