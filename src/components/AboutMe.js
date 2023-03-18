import Navbar from "./Navbar.js";
import Footer from "./Footer.js";
import image from "./Naruto/68.png";
import image2 from "./Naruto/70.jpg"
import { Box ,Grid,GridItem,Text,Image ,Button} from "@chakra-ui/react"
import { useMediaQuery } from '@chakra-ui/react'
import dp from './Naruto/dp.jpg'
function AboutMe(){
    const [isLargerThan800] = useMediaQuery('(min-width: 800px)');
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
                                <Box style={{padding:"50px 50px 50px 50px", top:'10%',left:'20%' , position: 'absolute' }}  color="#CBD5E0" >

                                    
                                    <Image
                                        borderRadius='full'
                                        boxSize='250px'
                                        src={dp}
                                        alt='Dan Abramov'
                                    />
                                    <Grid templateRows='repeat(1,1fr)'
                                            templateColumns='repeat(1,1fr)'>
                                        <GridItem rowSpan={1} colSpan={1} style={{padding:"58px 20px 10px 5px", top:'70%',left:'-20%' ,right:'-50%', position: 'absolute' }}>
                                                <Text noOfLines={5} fontSize='20px'>
                                                My name is Akash Dinkar Patil. I'm a passionate developer from Kolhapur, Maharashatra, India. Currently I'm persuing my B.Tech degree in computer science at Tatyasaheb
                                            Kore Institute of Engineering and Technology Warananagar.

                                            </Text>
                                        </GridItem>

                                        <GridItem rowSpan={1} colSpan={1} style={{padding:"98px 20px 10px 5px", top:'100%',left:'-20%' ,right:'-50%', position: 'absolute' }}>
                                                <Text noOfLines={5} fontSize='20px'>
                                                I've completed my HSC from shahu Dayanand Highschool, kolhapur and SSC from Kumbhi Kasari Vidyaniketan, Kuditre.

                                            </Text>
                                        </GridItem>

                                        <GridItem rowSpan={1} colSpan={1} style={{padding:"138px 20px 10px 5px", top:'110%',left:'-20%' ,right:'-50%', position: 'absolute' }}>
                                                <Text noOfLines={5} fontSize='20px'>
                                                To know more about me just click on below button to see my resume. 
 
                                            </Text>
                                        </GridItem>

                                        <GridItem rowSpan={1} colSpan={1} style={{padding:"158px 20px 10px 5px", top:'125%',left:'-20%' ,right:'-50%', position: 'absolute' }}>
                                                <Text noOfLines={5} fontSize='20px'>
                                                
                                                <Button ><a href={'https://drive.google.com/file/d/1uYPTTPWSkB7TKigpBnQzCoDiQX8_3CXG/view?usp=share_link'}>Click Here</a></Button>
                                            </Text>


                                        </GridItem>

                                        <GridItem rowSpan={1} colSpan={1}>
                                            
                                        </GridItem>
                                    </Grid>
                                    
                            
                            

                                </Box>
                            

                        </Box>
                    </GridItem>

                    <GridItem rowSpan={1} colSpan={1}>
                        <Footer />
                    </GridItem>
                </Grid>

                

                //mobile view---------------------------------------------------------------------------------------------------

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

                            <Box style={{ top:'15%',left:'10%' , position: 'absolute' }}  color="#CBD5E0" >

                                                                
                            <Image
                                borderRadius='full'
                                boxSize='250px'
                                src={dp}
                                alt='Dan Abramov'
                                
                                
                            />

                            <Grid templateRows='repeat(1,1fr)'
                                    templateColumns='repeat(1,1fr)'>
                                <GridItem rowSpan={1} colSpan={1} style={{ top:'100%',left:'-10%'  }}>
                                        <Text  fontSize='15px' >
                                        My name is Akash Dinkar Patil. I'm a passionate developer from Kolhapur, Maharashatra, India. Currently I'm persuing my B.Tech degree in computer science at Tatyasaheb
                                    Kore Institute of Engineering and Technology Warananagar.

                                    </Text>
                                </GridItem>

                                <GridItem rowSpan={1} colSpan={1} style={{ top:'80%',left:'-10%'  }}>
                                        <Text noOfLines={5} fontSize='15px' >
                                        I've completed my HSC from shahu Dayanand Highschool, kolhapur and SSC from Kumbhi Kasari Vidyaniketan, Kuditre.

                                    </Text>
                                </GridItem>

                                <GridItem rowSpan={1} colSpan={1} style={{ top:'100%',left:'-10%'  }}>
                                        <Text noOfLines={5} fontSize='15px' >
                                        To know more about me just click on below button to see my resume. 

                                    </Text>
                                </GridItem>

                                <GridItem rowSpan={1} colSpan={1} style={{ top:'100%',left:'-10%' }}>
                                        <Text noOfLines={5} fontSize='15px' >
                                        
                                        <Button ><a href={'https://drive.google.com/file/d/1uYPTTPWSkB7TKigpBnQzCoDiQX8_3CXG/view?usp=share_link'}>Click Here</a></Button>
                                    </Text>


                                </GridItem>

                                <GridItem rowSpan={1} colSpan={1}>
                                    
                                </GridItem>
                            </Grid>




                            </Box>

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

export default AboutMe;