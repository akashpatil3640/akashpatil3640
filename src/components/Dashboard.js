import Navbar from "./Navbar.js";
import Footer from "./Footer.js";
import image from "./Naruto/62.jpg";
import image2 from "./Naruto/64.jpg"
import Type from "./Type.js"
import TypeName from "./TypeName.js";
import { Box ,Grid,GridItem,Heading } from "@chakra-ui/react"
import { useMediaQuery } from '@chakra-ui/react'


function Dashboard(){

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

                            <Box style={{padding:"50px 50px 50px 50px", top:'50%',left:'20%' , position: 'absolute' }} className="ap" color="#CBD5E0" >
                                <Heading as='h2' size='2xl' noOfLines={1} >Hello I'm </Heading>
                                <Heading as='h4' size='4xl' noOfLines={1} color="lightcoral" my={4}> <TypeName /> </Heading>

                            <Heading> <Type /> </Heading> 
                            {/* <img style={{ width: '100%', height: '100%' , position: 'relative' }} src={image} alt="React Logo" /> */}
                            

                            </Box>

                        

                            
                        

                        

                        

                        </Box>
                    </GridItem>

                    <GridItem rowSpan={1} colSpan={1}>
                        <Footer />
                    </GridItem>
                </Grid>

                



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

                            <Box style={{padding:"50px 50px 50px 50px", top:'50%',left:'3%' , position: 'absolute' }} className="ap" color="#CBD5E0" >
                                <Heading as='h2' size='xl' noOfLines={1}>Hello I'm </Heading>
                                <Heading as='h4' size='xl' noOfLines={1} color="lightcoral"> <TypeName /> </Heading>

                            <Heading as='h4' size='xl' noOfLines={3}> <Type /> </Heading> 
                            {/* <img style={{ width: '100%', height: '100%' , position: 'relative' }} src={image} alt="React Logo" /> */}
                            

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

export default Dashboard;